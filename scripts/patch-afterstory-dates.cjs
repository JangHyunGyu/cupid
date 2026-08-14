'use strict';

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const langs = ['ko', 'en', 'es', 'ja', 'fr', 'de', 'pt'];

const rewires = {
    perfect_epilogue_3_seo: 'date_choice_perfect_seo',
    perfect_epilogue_3_yuna: 'date_choice_perfect_yuna',
    perfect_epilogue_3_dain: 'date_choice_perfect_dain',
    hidden_perfect_homeroom_ep3: 'date_choice_perfect_teacher',
    hidden_perfect_nurse_ep3: 'date_choice_perfect_nurse',
    true_epilogue_1_seo: 'date_choice_true_seo',
    true_epilogue_1_yuna: 'date_choice_true_yuna',
    true_epilogue_1_dain: 'date_choice_true_dain',
    hidden_true_homeroom_ending_title: 'date_choice_true_teacher',
    hidden_true_nurse_ending_title: 'date_choice_true_nurse'
};

const returns = {
    date_choice_perfect_seo: 'perfect_epilogue_4_seo',
    date_choice_perfect_yuna: 'perfect_epilogue_4_yuna',
    date_choice_perfect_dain: 'perfect_epilogue_4_dain',
    date_choice_perfect_teacher: 'hidden_perfect_homeroom_ep4',
    date_choice_perfect_nurse: 'hidden_perfect_nurse_ep4',
    date_choice_true_seo: 'true_epilogue_2',
    date_choice_true_yuna: 'true_epilogue_2',
    date_choice_true_dain: 'true_epilogue_2',
    date_choice_true_teacher: 'day5_teacher_ending_freetalk_intro',
    date_choice_true_nurse: 'day5_nurse_ending_freetalk_intro'
};

function scene(background, character, extra = {}) {
    return { background, character, ...extra };
}

const sprites = {
    seo: 'assets/images/characters/seyoun_laugh.png',
    yuna: 'assets/images/characters/yuna_smile.png',
    dain: 'assets/images/characters/dain_laugh.png',
    teacher: 'assets/images/characters/teacher_smile.png',
    nurse: 'assets/images/characters/nurse_smile.png',
    junho: 'assets/images/characters/junho_normal.png',
    junho2: 'assets/images/characters/junho_awkward.png'
};

const places = {
    seoA: 'assets/images/background/top_school.png',
    seoB: 'assets/images/background/cafe.png',
    yunaA: 'assets/images/background/bookstore.png',
    yunaB: 'assets/images/background/yuna_secret_rooftop.png',
    dainA: 'assets/images/background/gym.png',
    dainB: 'assets/images/background/dain_broadcast_booth.png',
    teacherA: 'assets/images/background/cafe.png',
    teacherB: 'assets/images/background/museum.png',
    nurseA: 'assets/images/background/nurse_house.png',
    nurseB: 'assets/images/background/park.png'
};

const newScenes = {
    date_choice_perfect_seo: scene(places.seoA, sprites.seo, {
        choices: [{ next: 'date_perfect_seo_roof_1' }, { next: 'date_perfect_seo_cafe_1' }]
    }),
    date_perfect_seo_roof_1: scene(places.seoA, sprites.seo, { next: 'date_perfect_seo_roof_2' }),
    date_perfect_seo_roof_2: scene(places.seoA, sprites.seo, { next: 'date_perfect_seo_roof_3' }),
    date_perfect_seo_roof_3: scene(places.seoA, sprites.seo, { next: returns.date_choice_perfect_seo }),
    date_perfect_seo_cafe_1: scene(places.seoB, sprites.seo, { next: 'date_perfect_seo_cafe_2' }),
    date_perfect_seo_cafe_2: scene(places.seoB, sprites.seo, { next: 'date_perfect_seo_cafe_3' }),
    date_perfect_seo_cafe_3: scene(places.seoB, sprites.seo, { next: returns.date_choice_perfect_seo }),

    date_choice_perfect_yuna: scene(places.yunaA, sprites.yuna, {
        choices: [{ next: 'date_perfect_yuna_book_1' }, { next: 'date_perfect_yuna_roof_1' }]
    }),
    date_perfect_yuna_book_1: scene(places.yunaA, sprites.yuna, { next: 'date_perfect_yuna_book_2' }),
    date_perfect_yuna_book_2: scene(places.yunaA, sprites.junho, { next: 'date_perfect_yuna_book_3' }),
    date_perfect_yuna_book_3: scene(places.yunaA, sprites.junho2, { next: 'date_perfect_yuna_book_4' }),
    date_perfect_yuna_book_4: scene(places.yunaA, sprites.yuna, { next: returns.date_choice_perfect_yuna }),
    date_perfect_yuna_roof_1: scene(places.yunaB, sprites.yuna, { next: 'date_perfect_yuna_roof_2' }),
    date_perfect_yuna_roof_2: scene(places.yunaB, sprites.yuna, { next: 'date_perfect_yuna_roof_3' }),
    date_perfect_yuna_roof_3: scene(places.yunaB, sprites.yuna, { next: returns.date_choice_perfect_yuna }),

    date_choice_perfect_dain: scene(places.dainA, sprites.dain, {
        choices: [{ next: 'date_perfect_dain_gym_1' }, { next: 'date_perfect_dain_booth_1' }]
    }),
    date_perfect_dain_gym_1: scene(places.dainA, sprites.dain, { next: 'date_perfect_dain_gym_2' }),
    date_perfect_dain_gym_2: scene(places.dainA, sprites.dain, { next: 'date_perfect_dain_gym_3' }),
    date_perfect_dain_gym_3: scene(places.dainA, sprites.dain, { next: returns.date_choice_perfect_dain }),
    date_perfect_dain_booth_1: scene(places.dainB, sprites.dain, { next: 'date_perfect_dain_booth_2' }),
    date_perfect_dain_booth_2: scene(places.dainB, sprites.dain, { next: 'date_perfect_dain_booth_3' }),
    date_perfect_dain_booth_3: scene(places.dainB, sprites.dain, { next: returns.date_choice_perfect_dain }),

    date_choice_perfect_teacher: scene(places.teacherA, sprites.teacher, {
        choices: [{ next: 'date_perfect_teacher_cafe_1' }, { next: 'date_perfect_teacher_museum_1' }]
    }),
    date_perfect_teacher_cafe_1: scene(places.teacherA, sprites.teacher, { next: 'date_perfect_teacher_cafe_2' }),
    date_perfect_teacher_cafe_2: scene(places.teacherA, sprites.teacher, { next: 'date_perfect_teacher_cafe_3' }),
    date_perfect_teacher_cafe_3: scene(places.teacherA, sprites.teacher, { next: returns.date_choice_perfect_teacher }),
    date_perfect_teacher_museum_1: scene(places.teacherB, sprites.teacher, { next: 'date_perfect_teacher_museum_2' }),
    date_perfect_teacher_museum_2: scene(places.teacherB, sprites.teacher, { next: 'date_perfect_teacher_museum_3' }),
    date_perfect_teacher_museum_3: scene(places.teacherB, sprites.teacher, { next: returns.date_choice_perfect_teacher }),

    date_choice_perfect_nurse: scene(places.nurseA, sprites.nurse, {
        choices: [{ next: 'date_perfect_nurse_home_1' }, { next: 'date_perfect_nurse_park_1' }]
    }),
    date_perfect_nurse_home_1: scene(places.nurseA, sprites.nurse, { next: 'date_perfect_nurse_home_2' }),
    date_perfect_nurse_home_2: scene(places.nurseA, sprites.nurse, { next: 'date_perfect_nurse_home_3' }),
    date_perfect_nurse_home_3: scene(places.nurseA, sprites.nurse, { next: returns.date_choice_perfect_nurse }),
    date_perfect_nurse_park_1: scene(places.nurseB, sprites.nurse, { next: 'date_perfect_nurse_park_2' }),
    date_perfect_nurse_park_2: scene(places.nurseB, sprites.nurse, { next: 'date_perfect_nurse_park_3' }),
    date_perfect_nurse_park_3: scene(places.nurseB, sprites.nurse, { next: returns.date_choice_perfect_nurse }),

    date_choice_true_seo: scene(places.seoB, 'assets/images/characters/seyoun_shy.png', {
        choices: [{ next: 'date_true_seo_1' }, { next: 'date_true_seo_alt_1' }]
    }),
    date_true_seo_1: scene(places.seoB, 'assets/images/characters/seyoun_shy.png', { next: 'date_true_seo_2' }),
    date_true_seo_2: scene(places.seoB, sprites.seo, { next: returns.date_choice_true_seo }),
    date_true_seo_alt_1: scene(places.seoA, sprites.seo, { next: 'date_true_seo_alt_2' }),
    date_true_seo_alt_2: scene(places.seoA, sprites.seo, { next: returns.date_choice_true_seo }),

    date_choice_true_yuna: scene(places.yunaA, sprites.yuna, {
        choices: [{ next: 'date_true_yuna_book_1' }, { next: 'date_true_yuna_roof_1' }]
    }),
    date_true_yuna_book_1: scene(places.yunaA, sprites.junho, { next: 'date_true_yuna_book_2' }),
    date_true_yuna_book_2: scene(places.yunaA, sprites.yuna, { next: returns.date_choice_true_yuna }),
    date_true_yuna_roof_1: scene(places.yunaB, sprites.yuna, { next: 'date_true_yuna_roof_2' }),
    date_true_yuna_roof_2: scene(places.yunaB, sprites.yuna, { next: returns.date_choice_true_yuna }),

    date_choice_true_dain: scene(places.dainA, sprites.dain, {
        choices: [{ next: 'date_true_dain_1' }, { next: 'date_true_dain_alt_1' }]
    }),
    date_true_dain_1: scene(places.dainA, sprites.dain, { next: 'date_true_dain_2' }),
    date_true_dain_2: scene(places.dainA, sprites.dain, { next: returns.date_choice_true_dain }),
    date_true_dain_alt_1: scene(places.dainB, sprites.dain, { next: 'date_true_dain_alt_2' }),
    date_true_dain_alt_2: scene(places.dainB, sprites.dain, { next: returns.date_choice_true_dain }),

    date_choice_true_teacher: scene(places.teacherA, sprites.teacher, {
        choices: [{ next: 'date_true_teacher_1' }, { next: 'date_true_teacher_alt_1' }]
    }),
    date_true_teacher_1: scene(places.teacherA, sprites.teacher, { next: 'date_true_teacher_2' }),
    date_true_teacher_2: scene(places.teacherA, sprites.teacher, { next: returns.date_choice_true_teacher }),
    date_true_teacher_alt_1: scene(places.teacherB, sprites.teacher, { next: 'date_true_teacher_alt_2' }),
    date_true_teacher_alt_2: scene(places.teacherB, sprites.teacher, { next: returns.date_choice_true_teacher }),

    date_choice_true_nurse: scene(places.nurseA, sprites.nurse, {
        choices: [{ next: 'date_true_nurse_1' }, { next: 'date_true_nurse_alt_1' }]
    }),
    date_true_nurse_1: scene(places.nurseA, sprites.nurse, { next: 'date_true_nurse_2' }),
    date_true_nurse_2: scene(places.nurseA, sprites.nurse, { next: returns.date_choice_true_nurse }),
    date_true_nurse_alt_1: scene(places.nurseB, sprites.nurse, { next: 'date_true_nurse_alt_2' }),
    date_true_nurse_alt_2: scene(places.nurseB, sprites.nurse, { next: returns.date_choice_true_nurse })
};

const i18n = {
    ko: {
        date_choice_perfect_seo: { name: '서연', text: '남은 건 내일 보자고 했지. 그전에, 오늘 어디 갈래.', choices: ['옥상.', '카페.'] },
        date_perfect_seo_roof_1: { name: '{name}', text: '*화분 흙이 아직 젖어 있다. 서연이 물뿌리개를 내려놓는다.*' },
        date_perfect_seo_roof_2: { name: '서연', text: '빈자리는 네가 골라. 나는 이미 골랐어.' },
        date_perfect_seo_roof_3: { name: '{name}', text: '*문이 열린 채로 바람이 들어온다. 서연은 일정표를 접지 않는다.*' },
        date_perfect_seo_cafe_1: { name: '{name}', text: '*창가. 컵받침을 맞추고 나서야 서연이 입을 연다.*' },
        date_perfect_seo_cafe_2: { name: '서연', text: '다음 주도 여기. 시간만 네가 정해.' },
        date_perfect_seo_cafe_3: { name: '{name}', text: '*영수증 뒷면에 숫자가 적혀 있다. 전화번호가 아니다. 다음 화분 물 주는 날이다.*' },
        date_choice_perfect_yuna: { name: '유나', text: '밖에도 자리 있어. 고를래.', choices: ['헌책방.', '옥상.'] },
        date_perfect_yuna_book_1: { name: '{name}', text: '*서가 사이. 유나가 책등만 훑다가 멈춘다.*' },
        date_perfect_yuna_book_2: { name: '남자', text: '...유나? 여기 오는 줄은 몰랐다.' },
        date_perfect_yuna_book_3: { name: '이준호', text: '오래전 일이야. 말은 안 해도 될 것 같아서. ...방해했다.' },
        date_perfect_yuna_book_4: { name: '유나', text: '*손가락이 책갈피에 남아 있다.* 지금은 {name}이랑 있어. 그걸로 돼.' },
        date_perfect_yuna_roof_1: { name: '{name}', text: '*비밀 옥상. 이어폰이 하나 건너온다.*' },
        date_perfect_yuna_roof_2: { name: '유나', text: '세 번째 곡. 이번엔 처음부터.' },
        date_perfect_yuna_roof_3: { name: '{name}', text: '*곡이 끝나도 유나는 이어폰을 빼지 않는다. 손만 조금 더 가깝다.*' },
        date_choice_perfect_dain: { name: '다인', text: '오늘은 코트에 안 올라가도 돼. 그래도 가고 싶은 데는 있어.', choices: ['체육관.', '중계석.'] },
        date_perfect_dain_gym_1: { name: '{name}', text: '*공은 잡혀 있다. 점프는 없다. 다인이 벤치에 먼저 앉는다.*' },
        date_perfect_dain_gym_2: { name: '다인', text: '5분만. 진짜 5분. ...10분 돼도 깨우지 마.' },
        date_perfect_dain_gym_3: { name: '{name}', text: '*다인의 오른쪽 무릎이 벤치 밖으로 나와 있다. 무게는 왼쪽에 있다.*' },
        date_perfect_dain_booth_1: { name: '{name}', text: '*헤드셋이 크다. 다인이 스위치만 만져 보고 끈다.*' },
        date_perfect_dain_booth_2: { name: '다인', text: '말로 따라가는 거, 생각보다 숨이 차. 근데 괜찮아.' },
        date_perfect_dain_booth_3: { name: '{name}', text: '*점수판 불은 꺼져 있다. 다인은 아직 자리에 앉아 있다.*' },
        date_choice_perfect_teacher: { name: '담임선생님', text: '직함 없이 걸을 수 있는 쪽이 있어. 고르든가.', choices: ['카페.', '전시.'] },
        date_perfect_teacher_cafe_1: { name: '{name}', text: '*창밖을 보다가 컵을 돌린다. 교탁은 없다.*' },
        date_perfect_teacher_cafe_2: { name: '담임선생님', text: '다음 주도 볼지, 네가 말해. 나는 이미 비워 뒀어.' },
        date_perfect_teacher_cafe_3: { name: '{name}', text: '*영수증 아래 메모. 시간은 비어 있고 장소만 적혀 있다.*' },
        date_perfect_teacher_museum_1: { name: '{name}', text: '*설명문 앞에서 멈추지 않는다. 옆만 맞춘다.*' },
        date_perfect_teacher_museum_2: { name: '담임선생님', text: '설명은 네가 읽으면 돼. 나는 옆에 있을게.' },
        date_perfect_teacher_museum_3: { name: '{name}', text: '*출구 앞에서 가방 끈을 고쳐 준다. 말은 없다.*' },
        date_choice_perfect_nurse: { name: '보건선생님', text: '기록 없는 시간이 남았어. 집일까, 밖일까.', choices: ['집.', '공원.'] },
        date_perfect_nurse_home_1: { name: '{name}', text: '*주말 오전. 가운은 걸려 있다. 물컵만 두 개다.*' },
        date_perfect_nurse_home_2: { name: '보건선생님', text: '오늘은 차트 안 열어. 그냥 앉아.' },
        date_perfect_nurse_home_3: { name: '{name}', text: '*창문이 조금 열려 있다. 시계 초침만 들린다.*' },
        date_perfect_nurse_park_1: { name: '{name}', text: '*병원 쪽 길은 건너뛰었다. 벤치가 먼저다.*' },
        date_perfect_nurse_park_2: { name: '보건선생님', text: '농담은 집에 두고 왔어. 지금은 이걸로 충분해.' },
        date_perfect_nurse_park_3: { name: '{name}', text: '*어깨에 무게가 잠시 올라왔다가 그대로 남는다.*' },
        date_choice_true_seo: { name: '서연', text: '나가기 전에. 짧게.', choices: ['카페.', '옥상.'] },
        date_true_seo_1: { name: '서연', text: '컵은 네가 옮겨. 나는 받침만 맞출게.' },
        date_true_seo_2: { name: '{name}', text: '*창밖 버스가 지나간다. 서연은 시계를 보지 않는다.*' },
        date_true_seo_alt_1: { name: '서연', text: '물만 주고 내려가자. 오래 있으면 들켜.' },
        date_true_seo_alt_2: { name: '{name}', text: '*화분 하나가 비어 있다. 다음에 사 오라는 뜻이다.*' },
        date_choice_true_yuna: { name: '유나', text: '바깥, 아니면 위.', choices: ['헌책방.', '옥상.'] },
        date_true_yuna_book_1: { name: '이준호', text: '...오래됐다. 여기서 볼 줄은.' },
        date_true_yuna_book_2: { name: '유나', text: '*{name} 소매를 한 번 잡았다 놓는다.* 갈게.' },
        date_true_yuna_roof_1: { name: '유나', text: '말 없이 들어도 돼. 곡은 짧아.' },
        date_true_yuna_roof_2: { name: '{name}', text: '*바람이 이어폰 줄을 흔든다. 유나는 난간에서 내려오지 않는다.*' },
        date_choice_true_dain: { name: '다인', text: '잠깐만 붙어 있어. 어디가 편해.', choices: ['벤치.', '중계석.'] },
        date_true_dain_1: { name: '다인', text: '점프는 안 해. 앉아만 있을게.' },
        date_true_dain_2: { name: '{name}', text: '*공이 발옆에 굴러 멈춘다. 다인은 집어 들지 않는다.*' },
        date_true_dain_alt_1: { name: '다인', text: '스위치는 만지기만 할게. 켜진 건 아니야.' },
        date_true_dain_alt_2: { name: '{name}', text: '*헤드셋이 테이블 위에 뒤집혀 있다.*' },
        date_choice_true_teacher: { name: '담임선생님', text: '수업은 끝났어. 남은 건 이쪽이야.', choices: ['테이블.', '전시.'] },
        date_true_teacher_1: { name: '담임선생님', text: '다음 주는 네가 정해. 나는 거절부터 안 할 테니까.' },
        date_true_teacher_2: { name: '{name}', text: '*커피가 식기 전에 시계를 보지 않는다.*' },
        date_true_teacher_alt_1: { name: '담임선생님', text: '설명은 패스. 옆에만 있어.' },
        date_true_teacher_alt_2: { name: '{name}', text: '*출구 조명 아래에서 가방 끈이 고쳐진다.*' },
        date_choice_true_nurse: { name: '보건선생님', text: '차트 없이 어디 갈래.', choices: ['집.', '벤치.'] },
        date_true_nurse_1: { name: '보건선생님', text: '물 따라 줄게. 약은 아니야.' },
        date_true_nurse_2: { name: '{name}', text: '*싱크대 물소리가 잠깐 나고 끊긴다.*' },
        date_true_nurse_alt_1: { name: '보건선생님', text: '병원 쪽은 건너뛰자.' },
        date_true_nurse_alt_2: { name: '{name}', text: '*벤치 페인트가 벗겨진 자리에 손이 얹힌다.*' }
    }
};

i18n.en = {
    date_choice_perfect_seo: { name: 'Seoyeon', text: 'I said the rest can wait until tomorrow. Before that, where are we going today.', choices: ['The rooftop.', 'The cafe.'] },
    date_perfect_seo_roof_1: { name: '{name}', text: '*The soil is still wet. Seoyeon sets the watering can down.*' },
    date_perfect_seo_roof_2: { name: 'Seoyeon', text: 'You pick the empty pot. I already picked mine.' },
    date_perfect_seo_roof_3: { name: '{name}', text: '*Wind comes through the open door. She does not fold the schedule.*' },
    date_perfect_seo_cafe_1: { name: '{name}', text: '*Window seat. She squares the coaster first, then speaks.*' },
    date_perfect_seo_cafe_2: { name: 'Seoyeon', text: 'Here again next week. You pick the time.' },
    date_perfect_seo_cafe_3: { name: '{name}', text: '*A number on the back of the receipt. Not a phone number. The next watering day.*' },
    date_choice_perfect_yuna: { name: 'Yuna', text: 'There are seats outside too. Choose.', choices: ['The used bookstore.', 'The roof.'] },
    date_perfect_yuna_book_1: { name: '{name}', text: '*Between the shelves. Yuna stops on a spine.*' },
    date_perfect_yuna_book_2: { name: 'Man', text: '...Yuna? I did not know you still came here.' },
    date_perfect_yuna_book_3: { name: 'Lee Junho', text: 'It was a long time ago. I thought I did not have to say anything. ...I will get out of the way.' },
    date_perfect_yuna_book_4: { name: 'Yuna', text: '*Her finger stays in the bookmark.* I am with {name} now. That is enough.' },
    date_perfect_yuna_roof_1: { name: '{name}', text: '*The secret roof. One earphone crosses the gap.*' },
    date_perfect_yuna_roof_2: { name: 'Yuna', text: 'The third track. From the start this time.' },
    date_perfect_yuna_roof_3: { name: '{name}', text: '*The song ends. She does not take the earphone out. Her hand is closer.*' },
    date_choice_perfect_dain: { name: 'Dain', text: 'I do not have to get on the court today. I still have places I want.', choices: ['The gym.', 'The booth.'] },
    date_perfect_dain_gym_1: { name: '{name}', text: '*She has a ball. She does not jump. She takes the bench first.*' },
    date_perfect_dain_gym_2: { name: 'Dain', text: 'Five minutes. Real five. ...If it turns into ten, do not wake me.' },
    date_perfect_dain_gym_3: { name: '{name}', text: '*Her right knee sits off the bench. The weight is on the left.*' },
    date_perfect_dain_booth_1: { name: '{name}', text: '*The headset is huge. She touches the switch and leaves it off.*' },
    date_perfect_dain_booth_2: { name: 'Dain', text: 'Following a match with words takes more air than I thought. It is still fine.' },
    date_perfect_dain_booth_3: { name: '{name}', text: '*The scoreboard is dark. She is still in the chair.*' },
    date_choice_perfect_teacher: { name: 'Homeroom Teacher', text: 'There is a way to walk without a title. Pick one.', choices: ['The cafe.', 'The exhibition.'] },
    date_perfect_teacher_cafe_1: { name: '{name}', text: '*She turns the cup. There is no teacher desk here.*' },
    date_perfect_teacher_cafe_2: { name: 'Homeroom Teacher', text: 'If we meet next week, you say so. I already left the slot open.' },
    date_perfect_teacher_cafe_3: { name: '{name}', text: '*A note under the receipt. The time is blank. Only the place is written.*' },
    date_perfect_teacher_museum_1: { name: '{name}', text: '*She does not stop at the plaques. She only matches your side.*' },
    date_perfect_teacher_museum_2: { name: 'Homeroom Teacher', text: 'You can read the labels. I will stay next to you.' },
    date_perfect_teacher_museum_3: { name: '{name}', text: '*At the exit she fixes a bag strap. No lecture.*' },
    date_choice_perfect_nurse: { name: 'School Nurse', text: 'There is time with no chart. Home or out.', choices: ['Home.', 'The park.'] },
    date_perfect_nurse_home_1: { name: '{name}', text: '*Weekend morning. The coat is on a hook. Two water glasses.*' },
    date_perfect_nurse_home_2: { name: 'School Nurse', text: 'I am not opening a chart today. Just sit.' },
    date_perfect_nurse_home_3: { name: '{name}', text: '*The window is cracked. Only the second hand is loud.*' },
    date_perfect_nurse_park_1: { name: '{name}', text: '*You skipped the hospital road. The bench came first.*' },
    date_perfect_nurse_park_2: { name: 'School Nurse', text: 'I left the jokes at home. This is enough.' },
    date_perfect_nurse_park_3: { name: '{name}', text: '*Weight lands on a shoulder and stays.*' },
    date_choice_true_seo: { name: 'Seoyeon', text: 'Before we go. Short.', choices: ['Cafe.', 'Rooftop.'] },
    date_true_seo_1: { name: 'Seoyeon', text: 'You move the cups. I will square the coasters.' },
    date_true_seo_2: { name: '{name}', text: '*A bus passes the window. She does not check the clock.*' },
    date_true_seo_alt_1: { name: 'Seoyeon', text: 'Water them and go down. If we stay long, someone will see.' },
    date_true_seo_alt_2: { name: '{name}', text: '*One pot is empty. That means bring one later.*' },
    date_choice_true_yuna: { name: 'Yuna', text: 'Outside, or up.', choices: ['Bookstore.', 'Roof.'] },
    date_true_yuna_book_1: { name: 'Lee Junho', text: '...It has been a while. I did not expect to see you here.' },
    date_true_yuna_book_2: { name: 'Yuna', text: '*She holds {name}\'s sleeve once and lets go.* We are leaving.' },
    date_true_yuna_roof_1: { name: 'Yuna', text: 'You can listen without talking. The track is short.' },
    date_true_yuna_roof_2: { name: '{name}', text: '*Wind moves the cord. She does not come down from the rail.*' },
    date_choice_true_dain: { name: 'Dain', text: 'Stay close a minute. Where is easier.', choices: ['The bench.', 'The booth.'] },
    date_true_dain_1: { name: 'Dain', text: 'No jumps. I am just sitting.' },
    date_true_dain_2: { name: '{name}', text: '*The ball rolls to her foot and stops. She does not pick it up.*' },
    date_true_dain_alt_1: { name: 'Dain', text: 'I will only touch the switch. It is not on.' },
    date_true_dain_alt_2: { name: '{name}', text: '*The headset lies upside down on the table.*' },
    date_choice_true_teacher: { name: 'Homeroom Teacher', text: 'Class is over. What is left is this side.', choices: ['A table.', 'The exhibition.'] },
    date_true_teacher_1: { name: 'Homeroom Teacher', text: 'You set next week. I will not start with no.' },
    date_true_teacher_2: { name: '{name}', text: '*The coffee cools. Neither of you checks the time.*' },
    date_true_teacher_alt_1: { name: 'Homeroom Teacher', text: 'Skip the labels. Stay next to me.' },
    date_true_teacher_alt_2: { name: '{name}', text: '*Under the exit lights, a strap gets fixed.*' },
    date_choice_true_nurse: { name: 'School Nurse', text: 'No chart. Where.', choices: ['Home.', 'A bench.'] },
    date_true_nurse_1: { name: 'School Nurse', text: 'I will pour water. It is not medicine.' },
    date_true_nurse_2: { name: '{name}', text: '*The tap runs once and stops.*' },
    date_true_nurse_alt_1: { name: 'School Nurse', text: 'Let us skip the hospital side.' },
    date_true_nurse_alt_2: { name: '{name}', text: '*A hand rests on the peeled paint of the bench.*' }
};

function copyLang(from, nameMap) {
    const out = {};
    for (const [id, row] of Object.entries(i18n.en)) {
        out[id] = {
            name: nameMap[row.name] || row.name,
            text: row.text,
            ...(row.choices ? { choices: row.choices } : {})
        };
    }
    return out;
}

i18n.es = copyLang(i18n.en, { 'Seoyeon': 'Seoyeon', 'Yuna': 'Yuna', 'Dain': 'Dain', 'Homeroom Teacher': 'Profesora', 'School Nurse': 'Enfermera', 'Man': 'Hombre', 'Lee Junho': 'Lee Junho', '{name}': '{name}' });
i18n.ja = copyLang(i18n.en, { 'Seoyeon': 'ソヨン', 'Yuna': 'ユナ', 'Dain': 'ダイン', 'Homeroom Teacher': '担任の先生', 'School Nurse': '保健室の先生', 'Man': '男', 'Lee Junho': 'イ・ジュンホ', '{name}': '{name}' });
i18n.fr = copyLang(i18n.en, { 'Seoyeon': 'Seoyeon', 'Yuna': 'Yuna', 'Dain': 'Dain', 'Homeroom Teacher': 'Professeure', 'School Nurse': 'Infirmière', 'Man': 'Homme', 'Lee Junho': 'Lee Junho', '{name}': '{name}' });
i18n.de = copyLang(i18n.en, { 'Seoyeon': 'Seoyeon', 'Yuna': 'Yuna', 'Dain': 'Dain', 'Homeroom Teacher': 'Klassenlehrerin', 'School Nurse': 'Schulkrankenschwester', 'Man': 'Mann', 'Lee Junho': 'Lee Junho', '{name}': '{name}' });
i18n.pt = copyLang(i18n.en, { 'Seoyeon': 'Seoyeon', 'Yuna': 'Yuna', 'Dain': 'Dain', 'Homeroom Teacher': 'Professora', 'School Nurse': 'Enfermeira', 'Man': 'Homem', 'Lee Junho': 'Lee Junho', '{name}': '{name}' });

function patchScenario() {
    const file = path.join(root, 'assets/js/scenario/day5_4_night.js');
    let text = fs.readFileSync(file, 'utf8');
    if (text.includes('date_choice_perfect_seo')) {
        console.log('scenario already patched');
        return;
    }
    for (const [from, to] of Object.entries(rewires)) {
        const pattern = new RegExp(`("${from}":\\s*\\{[\\s\\S]*?"next":\\s*")[^"]+(")`);
        if (!pattern.test(text)) throw new Error('missing scene ' + from);
        text = text.replace(pattern, `$1${to}$2`);
    }
    const insert = Object.entries(newScenes).map(([id, body]) => `    ${JSON.stringify(id)}: ${JSON.stringify(body, null, 8).replace(/\n/g, '\n    ')}`).join(',\n');
    const marker = '    "day5_main_ending_freetalk_router": {';
    if (!text.includes(marker)) throw new Error('insert marker missing');
    text = text.replace(marker, `${insert},\n${marker}`);
    fs.writeFileSync(file, text);
    console.log('patched scenario');
}

function patchI18n() {
    for (const lang of langs) {
        const file = path.join(root, 'assets/js/i18n', lang, 'day5_4_night.json');
        const data = JSON.parse(fs.readFileSync(file, 'utf8'));
        Object.assign(data, i18n[lang]);
        fs.writeFileSync(file, JSON.stringify(data, null, 4) + '\n');
        console.log('patched i18n', lang);
    }
}

patchScenario();
patchI18n();
