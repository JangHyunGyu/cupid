# Fix corrupted Korean comments in English scenario files
# Strategy: Read each en_ file, find the header block and inline comments, replace with correct Korean text

$scenarioDir = "c:\workspace\cupid\assets\js\scenario"

function Fix-ScenarioFile {
    param(
        [string]$enFile,
        [string]$koFile
    )
    
    # Read KO file to get correct header and inline comments
    $koContent = [System.IO.File]::ReadAllText($koFile, [System.Text.Encoding]::UTF8)
    $enContent = [System.IO.File]::ReadAllText($enFile, [System.Text.Encoding]::UTF8)
    
    # Extract KO header comment block (from /** to */)
    $koHeaderMatch = [regex]::Match($koContent, '(?s)/\*\*.*?\*/\s*\n')
    if (-not $koHeaderMatch.Success) {
        Write-Host "ERROR: Could not find header in $koFile"
        return
    }
    
    # Extract EN header comment block
    $enHeaderMatch = [regex]::Match($enContent, '(?s)/\*\*.*?\*/\s*\n')
    if (-not $enHeaderMatch.Success) {
        Write-Host "ERROR: Could not find header in $enFile"
        return
    }
    
    # Build new header based on KO but with EN version info
    $koHeader = $koHeaderMatch.Value
    $enFileName = [System.IO.Path]::GetFileName($enFile)
    $koFileName = [System.IO.Path]::GetFileName($koFile)
    
    # Replace version-specific strings in KO header for EN
    $newHeader = $koHeader
    $newHeader = $newHeader -replace "Korean Version", "English Version"
    $newHeader = $newHeader -replace $koFileName, $enFileName
    $newHeader = $newHeader -replace "한국어 \(Korean\)", "영어 (English)"
    
    # Replace header in EN content
    $newContent = $enContent.Substring(0, $enHeaderMatch.Index) + $newHeader + $enContent.Substring($enHeaderMatch.Index + $enHeaderMatch.Length)
    
    # Fix inline comments
    # Pattern: "// SCENARIO ??? ??? ????" -> "// SCENARIO 전역 객체 초기화"
    $newContent = [regex]::Replace($newContent, '//\s*SCENARIO\s+[^\n]*(?=\n)', '// SCENARIO 전역 객체 초기화')
    
    # Pattern: "// Day N ??? ???" -> "// Day N 시나리오 그룹 초기화"
    $newContent = [regex]::Replace($newContent, '//\s*Day\s+(\d+)\s+[^\n]*(?=\n)', '// Day $1 시나리오 그룹 초기화')
    
    # Pattern: "[Day N - Period] ??? ???" in JSDoc comments
    # Extract the period name and day from KO file
    $koDocMatch = [regex]::Match($koContent, '\[Day\s+\d+\s*-\s*\w+\]\s*(.+)')
    if ($koDocMatch.Success) {
        $koDocSuffix = $koDocMatch.Groups[1].Value.Trim()
        $newContent = [regex]::Replace($newContent, '(\[Day\s+\d+\s*-\s*\w+\])\s+[^\n]*', "`$1 $koDocSuffix")
    }
    
    # Save with UTF-8 encoding (with BOM)
    $utf8Bom = New-Object System.Text.UTF8Encoding($true)
    [System.IO.File]::WriteAllText($enFile, $newContent, $utf8Bom)
    
    Write-Host "Fixed: $enFileName"
}

# List of files to fix
$filePairs = @(
    @{ en = "en_day1_4_night.js"; ko = "ko_day1_4_night.js" },
    @{ en = "en_day2_1_morning.js"; ko = "ko_day2_1_morning.js" },
    @{ en = "en_day2_2_lunch.js"; ko = "ko_day2_2_lunch.js" },
    @{ en = "en_day2_3_afterschool.js"; ko = "ko_day2_3_afterschool.js" },
    @{ en = "en_day2_4_night.js"; ko = "ko_day2_4_night.js" }
)

foreach ($pair in $filePairs) {
    $enPath = Join-Path $scenarioDir $pair.en
    $koPath = Join-Path $scenarioDir $pair.ko
    Fix-ScenarioFile -enFile $enPath -koFile $koPath
}

Write-Host "`nDone! All files fixed."
