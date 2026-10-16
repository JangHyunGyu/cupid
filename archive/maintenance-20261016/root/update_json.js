const fs = require('fs');
const path = 'c:/workspace/cupid/assets/js/i18n/ko/day1_1_morning.json';
let data = JSON.parse(fs.readFileSync(path, 'utf8'));

data['start'].text = '으아아, 첫날부터 지각 위기! 전학 첫날부터 찍히면 안 되는데!';
data['start_2'].text = '낯선 교복, 낯선 풍경... 이라고 감상에 젖을 때가 아니다. 빨리 교무실로 가야 해!';
data['start_3'].text = '일단 교문은 통과! ...어라? 길 한가운데 누가 우두커니 서있는데?';

data['start_4'].text = '"(당황한 목소리) 아, 안녕?! 아, 아니지. 크흠. 혹시 네가 오늘 전학 온다는... {name} 맞니?"';

data['intro_1'].text = '*완벽한 학생회장 포스를 풍기려 노력하는 수려한 외모의 소녀. 하지만 아까 살짝 삑사리가 난 것 같은데.*';
data['intro_2'].text = '*단정한 교복 차림 위로 떨어지는 아침 햇살은 확실히 눈이 부시다. 하지만... 왜 들고 있는 출석부는 거꾸로 들려 있는 걸까?*';

data['intro_3'].text = '"학생회장 서연이야. 서, 선생님의 각별한 부탁으로 내가 친히 마중을 나왔어. 절대 내가 먼저 가보고 싶다고 한 건... 흠흠! 아무튼 잘 부탁해!"';

data['intro_3'].choices[0] = '응, 잘 부탁해! (거꾸로 든 출석부에는 시선을 피한다)';
data['intro_3'].choices[1] = '저기... 출석부 거꾸로 들었는데? 허당이야?';
data['intro_3'].choices[2] = '마중 나와주다니 영광이네. 근데 아까 삑사리...';
data['intro_3'].choices[3] = '*학생회장의 허당미에 할 말을 잃고 빤히 바라본다.*';
data['intro_3'].choices[4] = '길 막지 말고 좀 비켜줄래? 지각하겠어.';

data['path_friendly_1'].text = '*그녀가 안도의 한숨을 내쉬며 화사하게 웃는다. 주변이 환해지는 기분이다.*';
data['path_friendly_1_2'].text = '"아, 다행이다. 길 잃을까 봐 걱정했거든. 내가 갓벽하게 가이드 해줄 테니까 따라와!"';

data['path_tease_1'].text = '*그녀의 얼굴이 순식간에 토마토처럼 달아오른다.*';
data['path_tease_1_2'].text = '"(출석부를 후다닥 바로잡으며) 앗! 이, 이건 일부러 그런 거야! 내, 네가 눈치가 빠른지 테스트하려고...! 아앗, 웃지 마! 이래 봬도 전교 1등이라고!"';

data['path_blush_1_2'].text = '"뭐, 뭣! 예, 예쁘다니... (얼굴을 붉히며) 그, 그런 뻔한 수작엔 안 넘어간다고! ...그래도 고마워. 흥!"';

fs.writeFileSync(path, JSON.stringify(data, null, 4), 'utf8');
