const fs = require('fs');
const path = 'c:/workspace/cupid/assets/js/i18n/ko/day1_1_morning.json';
let data = JSON.parse(fs.readFileSync(path, 'utf8'));

data['start'].text = '*따스한 햇살. 오늘부터 새로운 학교인가. 귀찮지만 어쩔 수 없지.*';
data['start_2'].text = '*교문 앞에 서니 낯선 풍경이 눈에 들어온다. 뭐, 알아서 잘 적응하겠지.*';
data['start_3'].text = '*일단 교무실이 어디인지부터 찾아봐야겠네.*';

data['start_4'].text = '"안녕. 네가 오늘 온다던 전학생?"';

data['intro_1'].text = '*여유로운 미소를 띤 채 다가오는 여학생. 단정한 교복에 학생회장 완장이 눈에 띈다.*';
data['intro_2'].text = '*뻔한 모범생 타입인가 싶었는데, 사람을 모조리 꿰뚫어 보는 듯한 눈빛이 은근히 호기심을 자극한다.*';

data['intro_3'].text = '"학생회장 서연이야. 선생님이 네가 길 잃어버릴까 봐 챙겨달라고 하셨거든. 뭐, 길치처럼 생기진 않았는데."';

data['intro_3'].choices[0] = '다행이네. 학교가 넓어서 진짜 미아 될 뻔했거든. 잘 부탁해.';
data['intro_3'].choices[1] = '학생회장이 직접 마중이라니, 이 학교 서비스 좋네.';
data['intro_3'].choices[2] = '혹시 나한테 관심 있어서 먼저 나온 거 아니고?';
data['intro_3'].choices[3] = '*흥미롭다는 듯 말없이 가만히 바라본다.*';
data['intro_3'].choices[4] = '인사는 됐고, 교무실이 어디지?';

data['path_friendly_1'].text = '*서연이 가볍게 웃음을 터뜨리며 고개를 끄덕인다.*';
data['path_friendly_1_2'].text = '"솔직해서 좋네. 그래, 책임지고 교무실까지 택배 배달해 줄 테니까 따라와."';

data['path_tease_1'] = data['path_tease_1'] || {};
data['path_tease_1'].text = '*당황할 줄 알았는데, 오히려 그녀가 미미하게 입꼬리를 올리며 한 발짝 다가온다.*';
data['path_tease_1_2'] = data['path_tease_1_2'] || {};
data['path_tease_1_2'].text = '"자신감 넘치는 타입이네? 뭐, 나쁘지 않아. 그런 농담 여유롭게 받아줄 사람, 이 학교에 나 말고 흔치 않을 텐데?"';

data['path_blush_1'] = data['path_blush_1'] || {};
data['path_blush_1'].text = '*그녀가 피식 웃으며 팔짱을 낀다.*';
data['path_blush_1_2'] = data['path_blush_1_2'] || {};
data['path_blush_1_2'].text = '"우리 학교 VIP 대우는 첫날 한정이니 마음껏 누리시길. 가자, 엘리트 가이드가 안내해 줄게."';

data['path_silent_1'] = data['path_silent_1'] || {};
data['path_silent_1'].text = '*서연은 피하지 않고 내 시선을 똑바로 마주친다.*';
data['path_silent_1_2'] = data['path_silent_1_2'] || {};
data['path_silent_1_2'].text = '"뭐야, 사람 얼굴에 뭐 묻었어? 아니면 인사 대신 하는 너만의 기싸움인가?"';

data['path_rude_1'].text = '*서연의 눈웃음이 살짝 가라앉았다.*';
data['path_rude_1_2'].text = '"성격 참 팍팍하네. 뭐 좋아, 나도 길게 엮이는 건 피곤하니까. 따라와."';

fs.writeFileSync(path, JSON.stringify(data, null, 4), 'utf8');
