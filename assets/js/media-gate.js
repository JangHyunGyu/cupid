/**
 * CupidMedia - client gate for encrypted gallery/character assets.
 *
 * Decrypt key never ships here. Explicit progression grants and media reads
 * use a signed HttpOnly session. Image loading and prefetching never grant access.
 */

(function (global) {
  'use strict';

  if (global.__CUPID_MEDIA_GATE) {
    try { global.CupidMedia?.hydrateProtectedImages?.(); } catch (_) {}
    return;
  }
  global.__CUPID_MEDIA_GATE = true;

  var GUEST_KEY = 'cupid_guest_id';
  var MIGRATION_KEY = 'cupid_gallery_media_migrated_v1';
  var PLACEHOLDER = 'assets/images/ui/character-silhouette.svg';
  var BATCH_CAP = 100;
  // BEGIN GENERATED MEDIA VERSIONS
  var MEDIA_VERSIONS = {"background/dain_depression_event1":"7ee4549e9c01d86d8ceddab7","background/dain_hurt_event1":"03c309e91448e74d0f6524af","background/ending_alone":"be11653d9adf4a7b306b9f91","background/ending_bittersweet":"51eab37dfe08db46f30d72a8","background/ending_bittersweet_nurse":"3d0e4a5f18806c68e6be9014","background/ending_bittersweet_teacher":"39233a3911500d9e632dc38b","background/ending_confess_fail_dain":"787b7ab28af2ca24cc4a6fad","background/ending_confess_fail_seoyeon":"73831ccd142f8a97d9e6183a","background/ending_confess_fail_yuna":"e32c7f7a67d89e96a8edef1d","background/ending_friend":"3d8c2f3494301d31d369e80a","background/ending_good_dain":"209cb4651368bfa637e273d5","background/ending_good_nurse":"753c7a2e322c44c535de071b","background/ending_good_seoyeon":"9619f8ad7d14301d96d44b24","background/ending_good_teacher":"2e6dd0c2716bf020f13cb957","background/ending_good_yuna":"09c67542dd7e066422d1843e","background/ending_harem":"be4659b0948f6f56a6aced0b","background/ending_mayhem":"eebc0728b58bcec16e108f4f","background/ending_perfect_dain":"750033d2213d9d0240fdf07a","background/ending_perfect_haeun":"9903cd5bf1aa4e4465484b0e","background/ending_perfect_nurse":"2efe79fb6a3ccaa6bfc42ec5","background/ending_perfect_seoyeon":"513a2715bac51c0b403407ed","background/ending_perfect_teacher":"fe8877f9d320958a916ec193","background/ending_perfect_yuna":"d474988bda580a4fa93e9bdb","background/ending_true_dain":"208f6d687989178581114801","background/ending_true_nurse":"4727b2407b6623fd802285f8","background/ending_true_seoyeon":"edda8686b4b472e5099da930","background/ending_true_teacher":"14adfae607797f5fccdf601c","background/ending_true_yuna":"81604f5804f639ca8f67601c","background/event_haeun_reputation":"8b2edb7e9c3b3b7c804362ba","background/event_haeun_trust":"080f10ba1c95792d44d0de72","background/event_seoyeon_succulent":"8a548614300a262c107ab809","background/event_temptation_dain":"ea1f573b313ef7004b352a28","background/event_temptation_seoyeon":"139380703754eeefce44522d","background/event_temptation_yuna":"a3c33707fefd16c91df8d4cf","background/event_yuna_reading":"f9fe8aae463477345c4cd825","background/nurse_home_event1":"8fb762c5beb1d01ee83bc97b","characters/dain_active":"a1c0dfa5277675f50681b6cd","characters/dain_aegyo":"62fff274794220deb6b7bc8e","characters/dain_ahegao":"bb769f3e7ab5e1d0091833f1","characters/dain_angry":"f66c1600aac2cf2fe6cd55f3","characters/dain_bikini":"675d1a52cea84edc24dddd5f","characters/dain_choking":"dcba4afa081e6d5e18e685de","characters/dain_climax":"485ab7590abb2ebcd451033f","characters/dain_climax_02":"cad9f9740792d1ee970c80dc","characters/dain_climax_03":"cfe7ef8f4bb895ce9ed0fdec","characters/dain_climax_04":"19b5c845101081f23daa0c46","characters/dain_climax_05":"66380ba419a5becc641d8e6b","characters/dain_climax_06":"b9695a15fa4beca006875e1e","characters/dain_climax_07":"3187754841038279709b6a84","characters/dain_climax_08":"ea3329c92e3c01012d14a7e3","characters/dain_climax_09":"8e93a8d4651ad495b1f54e0c","characters/dain_climax_10":"66e70ada76db9d1d8a0555e7","characters/dain_climax_11":"a2d3df82fa2ac0f3038ccdf1","characters/dain_confused":"e3fd0fadd286c5b9eb6f2b4a","characters/dain_cry":"08d87a65fd4c18de3cfad56c","characters/dain_date_angry":"024d8d0bdcdd97685d30f3ed","characters/dain_date_laugh":"284f959f7231307e9da78186","characters/dain_date_normal":"d782c4080792d0bf492c8f61","characters/dain_date_sad":"eddcba5f443e55c35cf46604","characters/dain_date_shy":"ead66f6bb570deb4fcb1de76","characters/dain_date_sweat":"04866ec5c2753c2348906941","characters/dain_dazed":"bdb62d867c2ea774af833264","characters/dain_disgusted":"6dabdce7b39a570874d003ec","characters/dain_exhausted":"6e21496029af30203932f9fa","characters/dain_fainted":"59f0196ab55981d5c8621a9b","characters/dain_flushed":"2d73371b9d4955cf85c73586","characters/dain_furious":"850cb47debb47104e01fbea4","characters/dain_laugh":"c3e5e90d26b45186d2574ecd","characters/dain_normal":"3dce26ce40f148d11888b8ed","characters/dain_pain":"3098b02efabd0d90966d76f3","characters/dain_pout":"d61eac7259237e9282829ad2","characters/dain_relieved":"82a6131cea56a0fea8bd0123","characters/dain_sad":"06fa16f733055ffa974cdef6","characters/dain_scared":"57ef6912b1235ffef55d2d2a","characters/dain_scream":"541e85cf94685226761105df","characters/dain_shy":"c87a3b1452ff0f7c858b12ab","characters/dain_smile":"b1ff2fe70c7be4c9a3e36363","characters/dain_smirk":"3eb4b19408b2b5483e64c47d","characters/dain_sob":"3bd8e0f98b5775082eb598b0","characters/dain_soft_smile":"de77743dc1644c9a3a87864e","characters/dain_surprised":"8ef3afbff0d48c6d9009219d","characters/dain_sweat":"d5b5a8aa4c1272f03da30dfc","characters/dain_worried":"53cade0910d5b1954bba9da3","characters/haeun_aegyo":"77e031e45eb295d8f82f02d8","characters/haeun_ahegao":"7a2a5753797da6fb4bf93eba","characters/haeun_angry":"07808a0805ee5c54398aad73","characters/haeun_choking":"45516f7d8c8908032cfdf6ec","characters/haeun_climax":"61bc21fddf6d63eedb123a93","characters/haeun_climax_02":"24e35062bb10a4a53c51cf70","characters/haeun_climax_03":"8da9bf678a3cc6c2cecb1ca7","characters/haeun_climax_04":"f351bf49e862266a8c74fd96","characters/haeun_climax_05":"cffb6cd30b887945b08fb554","characters/haeun_climax_06":"f7f8cde01f3bb0422b09c27a","characters/haeun_climax_07":"4d761a7757e7231cc8c9c726","characters/haeun_climax_08":"0c58b1fb4f66ef69200dff9f","characters/haeun_confused":"65442923cfe812ba79c335fa","characters/haeun_cry":"135e7d3f62dbfcb0e9aaf18d","characters/haeun_dazed":"68f7754706dc5c48233dff55","characters/haeun_disgusted":"93e0d7f50cc88c6ef856eaa8","characters/haeun_exhausted":"fe34f0251d7dbfdbdcd18300","characters/haeun_fainted":"6749cb9b68892dfd49e9f840","characters/haeun_firm":"5adeb7a26330571c48c60353","characters/haeun_flushed":"a0639432d7e995336d633d2c","characters/haeun_furious":"b335d4a87747f0f640fbf193","characters/haeun_laugh":"16955abbc844c3409ca162c0","characters/haeun_normal":"64a29e0066d8f58e68fe0278","characters/haeun_pain":"d7dac5b4d4c783cbc6abe941","characters/haeun_pout":"383e1752175c0e81b3c96026","characters/haeun_relieved":"fa4cee30c56469abce9f0441","characters/haeun_sad":"91bbc1ba21925c266c155c92","characters/haeun_scared":"64effc1bc12f1ab734f17b77","characters/haeun_scream":"db6d6450704a923eae8f64db","characters/haeun_shy":"e5c7155323bc5af3b7a5daae","characters/haeun_smile":"9b7beee792e87070936f4822","characters/haeun_smirk":"50785a1f8ec2abfb7472a714","characters/haeun_sob":"ad079749e4eb39535b50ef13","characters/haeun_soft_smile":"58ff72dd4c23ef81b9ba4bad","characters/haeun_surprised":"ce9fcc2908b83ffdd5ac6fb8","characters/haeun_worried":"df1350bdae2076272cd8c306","characters/junho_awkward":"3875a3c4f0ed9f307c194a45","characters/junho_normal":"64a502d5f325cddc2fdecb76","characters/minsu_aegyo":"dd385b11ecb65ae367e0b173","characters/minsu_choking":"d10fc64a1ee8b07cb52429cb","characters/minsu_climax":"75f1657089cb3384d4603ad1","characters/minsu_climax_02":"7f2fb07b1fdf7954d995f1a0","characters/minsu_climax_03":"324fbe6e0bb92346b71bda44","characters/minsu_climax_04":"6d9f2b3a44e86102ba0c7af2","characters/minsu_climax_05":"ff8f171fcddae4719c9d3260","characters/minsu_climax_06":"42d1a771c4d67c2bc4584dc7","characters/minsu_confused":"635e57542a845ca42cd2de75","characters/minsu_cry":"a73c159b7724cd2e2db3d68d","characters/minsu_dazed":"21e29eac56742386226c9e4f","characters/minsu_disgusted":"8e5c5e756e4228fbb61f0ee3","characters/minsu_exhausted":"14d70d3c78bf382f5bcebbd1","characters/minsu_fainted":"d64079439c5c161b37539a05","characters/minsu_furious":"355ebd5b6c78b358f1b492f5","characters/minsu_normal":"78f0752a9ade0f2047a2d644","characters/minsu_pain":"3d0f0830ad6a13797883f726","characters/minsu_relieved":"7d68ce3444fa99673d1266cc","characters/minsu_scared":"bc62328c096d39b78810b2ab","characters/minsu_scream":"9f4eefcc3adefc5c802fcfdc","characters/minsu_smirk":"e7f382060afa06f790d3411e","characters/minsu_sob":"0be61dd72ab00f69554ffaa7","characters/minsu_surprised":"20d35bc12185e131744f4cbb","characters/nurse_aegyo":"714bce43b89f9a32f638250c","characters/nurse_ahegao":"de4e5eb12ab78a41a1884141","characters/nurse_angry":"e57983dc82405e43d23c095d","characters/nurse_bikini":"2d02c75d38dad14d33e150df","characters/nurse_choking":"fca2312c4c725af6701c3a1a","characters/nurse_climax":"7ce39601f18ec17a78e743f3","characters/nurse_climax_02":"ed3b58f2515b2b7270b27cc2","characters/nurse_climax_03":"2aca331665bb6a60d2225cda","characters/nurse_climax_04":"07e0d4aef56d4b80da20da9a","characters/nurse_climax_05":"8c4816f3610d99d21638c3e7","characters/nurse_climax_06":"972921eb7895ea744f362000","characters/nurse_climax_07":"5576f8aab199cd1ba12beb62","characters/nurse_climax_08":"800448023bd1f85a2a61ebfc","characters/nurse_climax_09":"74adec4d32ef0ea9a0ed8d2a","characters/nurse_confused":"ef5f8cb238f984d15ec2627d","characters/nurse_cry":"323429ad8f1339b9848ba5f5","characters/nurse_dazed":"4d26723ae37a65ed3c31728d","characters/nurse_disgusted":"369a548e2ace8bd4fc7348c2","characters/nurse_dry_smile":"c146ea09ba948b090538e658","characters/nurse_exhausted":"f76e0a02757b89893201bfc5","characters/nurse_fainted":"32a64331d23d07c4e08e34aa","characters/nurse_flushed":"224764f13646fd3139125f4d","characters/nurse_furious":"fb3ea9bec41b5292d465644d","characters/nurse_home_angry":"e43161e65a8ad375d675eac2","characters/nurse_home_normal":"705e17d85cc0e75da50bfc62","characters/nurse_home_sad":"3e967b5f381f45eccdc40f1e","characters/nurse_home_shy":"8e44c773917c0f65d4073a9c","characters/nurse_home_smile":"04c4daeb52fa06c339a3867d","characters/nurse_laugh":"1359ccfdb7ca70ccddd1c497","characters/nurse_normal":"e5fdd909ab63f0c5a8f584a7","characters/nurse_pain":"eb95b9f937b404f7f26f81c0","characters/nurse_pout":"da9d3a46a343402a41b0bf0e","characters/nurse_relieved":"99bfc2e04c75d7395db39f45","characters/nurse_sad":"952e508e2a9acc8d496ddace","characters/nurse_scared":"384c5a079e4c793902ee2a46","characters/nurse_scream":"649adb8026a7c3684b674ded","characters/nurse_shy":"6d8d734d908ae5ece3efc55c","characters/nurse_smile":"7df71853f605f3d9dd968f7d","characters/nurse_smirk":"1178e7eebb015f7fd6a0f18b","characters/nurse_sob":"6f3685f9d242ad4c1384f8a4","characters/nurse_soft_smile":"9704c698fd5b3f32c15cd6e9","characters/nurse_surprised":"f1cb3fa2ec94e0a1ead63888","characters/nurse_tired":"c6f167664634d9b082ce597d","characters/nurse_worried":"b7886813bd64ed96b4b9c5dd","characters/seyoun_aegyo":"812619b196e76d2ebee535f4","characters/seyoun_ahegao":"3543d9ac32609aa772359c8b","characters/seyoun_angry":"6892890f70a076798a84cb5f","characters/seyoun_back":"f07695d181f1c620f1fd53f7","characters/seyoun_bikini":"811254edce80a69af5e46c3b","characters/seyoun_choking":"19873788c258af0ccc3a6c73","characters/seyoun_climax":"85e00e9bcc305d19e63843a1","characters/seyoun_climax_02":"d4514ee19b29ecd67e455db4","characters/seyoun_climax_03":"0dfe052ceb1ce47fb35f17c3","characters/seyoun_climax_04":"63fb97f3072881e9311dfe45","characters/seyoun_climax_05":"3fc5b820197ac944627c5016","characters/seyoun_climax_06":"c46874bf163c750b8d8d2328","characters/seyoun_confused":"84ec0384651e232d819bbb41","characters/seyoun_cry":"33543af77582921e590d1c59","characters/seyoun_date_laugh":"24525dbc932cece55ec0c5ab","characters/seyoun_date_normal":"bf33bb70ee04538aedc56b7d","characters/seyoun_date_sad":"e49ef8de0c16fa24adc87dbf","characters/seyoun_date_shy":"dc4728fc0d3b6b1c6db73d29","characters/seyoun_date_worried":"cfb2102535e95b5fc466b5b2","characters/seyoun_dazed":"04cf152fd7e6c08e8028cf2f","characters/seyoun_disgusted":"2f421024171b039bfb8ce753","characters/seyoun_exhausted":"f0c487af718dff86eb2cee72","characters/seyoun_fainted":"eff223c05869b95b6c12a23e","characters/seyoun_flushed":"5543076fd54f98f308266cc4","characters/seyoun_flushed_02":"723d0fff02994a045056a9ce","characters/seyoun_flushed_03":"04c3d54b1690d6925d4de773","characters/seyoun_flushed_04":"04649a44e4abce6ad3c823cc","characters/seyoun_flushed_05":"ebc931f36952fd2fd06f7571","characters/seyoun_flushed_06":"2a280e6553242ce5b85cf9f5","characters/seyoun_furious":"3bc6e65a7871c83e55a25a6e","characters/seyoun_laugh":"6059a840fe65aec63b73be57","characters/seyoun_normal":"e2bd874a4872f9b9973a5cb7","characters/seyoun_pain":"0c56400d1dc1232463178d0e","characters/seyoun_pout":"c0ddcfedbe8a20cc0c9ec3e7","characters/seyoun_relieved":"55ac05760913bd3bf8a5cb3e","characters/seyoun_sad":"82567c7b21bfa6e9bbc6babe","characters/seyoun_scared":"3d94ace6f3c33f9fd0c66942","characters/seyoun_scream":"ab853b5b49f3102aaf52010e","characters/seyoun_shy":"f801eecb2ccd228d45aa18b5","characters/seyoun_smile":"633f7085b98a3d505406ba5b","characters/seyoun_smirk":"945e1d2c78fb844ad1b943c1","characters/seyoun_sob":"3379d3cf9f77ecdecab37564","characters/seyoun_soft_smile":"9df428f596a110730a051512","characters/seyoun_surprised":"7bb45cc8ff8c5679aa08d30b","characters/seyoun_very_shy":"61f4f599624db6f1364bbbfe","characters/seyoun_worried":"c9dde8ff0d8f06e5c0f7e32b","characters/teacher_aegyo":"bb7e14a2aa3b6eb0239ef2ad","characters/teacher_ahegao":"1490069b1c9c9db2f6d78709","characters/teacher_angry":"e4898e8952dae2ebf91b0578","characters/teacher_bikini":"e28249e4880d2192538f472a","characters/teacher_choking":"68c0c2190c30f9fe4fe4f254","characters/teacher_climax":"dcf95ac85494c9907074aac9","characters/teacher_climax_02":"298335e8675f26d1c4d0555a","characters/teacher_climax_03":"c9980c77defad1e06f3edde1","characters/teacher_climax_04":"696a607be83d29d84e3a59bc","characters/teacher_climax_05":"5b334e2a31df7c3f9dab9a0b","characters/teacher_climax_06":"e559ef65e3420eddf817f813","characters/teacher_climax_07":"779bd708e05f73f9e04fd4c1","characters/teacher_climax_08":"effc46f20f3d0a569c93dead","characters/teacher_climax_09":"51ae68ee6e9bfee9fafd5899","characters/teacher_climax_10":"54213b2f465078f58b0da31d","characters/teacher_confused":"11b5b1e1126f3a4030c15d21","characters/teacher_cry":"dfe8357bab71017cf2ab88e6","characters/teacher_dazed":"e223d7e96dac6daf3f02d804","characters/teacher_disgusted":"4bee0d3954b0117a7f1407c8","characters/teacher_exhausted":"d74a9830db73234054cc6c90","characters/teacher_fainted":"ccb9b012884a86c62790b1a6","characters/teacher_flushed":"3f22aece782fb0e83c7dfbe1","characters/teacher_furious":"4eb9090ec0f48268207b0da5","characters/teacher_laugh":"776abeb9f0f7130a9deb0127","characters/teacher_normal":"41d9cdc0b18caf041634af03","characters/teacher_pain":"3fb8718649c6b339ea3a0611","characters/teacher_pout":"64a1b7ef94e1399bf54407cb","characters/teacher_relieved":"92a327240cc80a816d758ade","characters/teacher_sad":"84fdf0fc2607c26a916eea70","characters/teacher_scared":"4e4a2dc46c9a31a9b6a19309","characters/teacher_scream":"7e519d37bde7b45b0570d5f6","characters/teacher_shy":"7c11cbbf36d76f81a913d6cc","characters/teacher_smile":"79b756cc5650e9f4cee60659","characters/teacher_smirk":"f75a6ab6ff6c7cdf18b66602","characters/teacher_sob":"a29bb927785087def4df6229","characters/teacher_soft_smile":"093a4e6ca84248a5d62a805f","characters/teacher_surprised":"1a9fa576bed8a62d4bac6612","characters/teacher_worried":"8752a66f3049b5ac792493c2","characters/yuna_aegyo":"8e72269903eb509c5ac83bea","characters/yuna_ahegao":"132e27139d9da028067d5d2f","characters/yuna_angry":"7c749b3caeb40b4f4b752825","characters/yuna_bikini":"f7e257282a62e3a43bf17635","characters/yuna_bored":"4a7800c30f5e167f9f7e43f0","characters/yuna_choking":"5ee09327bbb08d4159687d76","characters/yuna_climax":"f1419bced29aa04e2ad031c7","characters/yuna_climax_02":"dd4480d3e430d7e221d48095","characters/yuna_climax_03":"b08d947c502e09ba0ebb4684","characters/yuna_climax_04":"ead331e4fadc3b7994b4c470","characters/yuna_climax_05":"c9792e2798366d1ee0774e5e","characters/yuna_climax_06":"b3bffddb47dea7c2f56ae222","characters/yuna_climax_07":"4ad99cdf49bdfd2ea9e0df5b","characters/yuna_climax_08":"cdbb5ed58661187605af4b6b","characters/yuna_climax_09":"56cbdfc07784c27f54ab6adc","characters/yuna_confused":"aeee12092c3f58fecd4fb666","characters/yuna_cry":"67a0fb2d76936fa7ddf48ff5","characters/yuna_date_bored":"a1e0e5d504daf621c7f8db67","characters/yuna_date_normal":"9921a22114556fc0da781802","characters/yuna_date_sad":"df72d07820c7ad9d3b4ef587","characters/yuna_date_shy":"c69e57ad3489840882967ea6","characters/yuna_date_smile":"e28e98c25e15ebbd42cc12ca","characters/yuna_dazed":"6f3a678f2e32d5d78d3e1186","characters/yuna_disgusted":"b8fc4cb2bba4f421cf509208","characters/yuna_exhausted":"abcc0bfd58dd8a59c5081582","characters/yuna_fainted":"bfa1e55bd499f88a1a1fba7c","characters/yuna_flushed":"368243ce03b9e299ddcda0df","characters/yuna_furious":"68d51f732b66bdb286c2fec9","characters/yuna_gallery_bikini_sexy_20260813":"7cfb2d83e446e8a8da023f1c","characters/yuna_laugh":"fc036373961f3a09d7d8055a","characters/yuna_normal":"afeb6f7addfd9bbd5ed3d570","characters/yuna_pain":"141ddde3084b7398efc4108b","characters/yuna_pout":"0d440806e4f86c8281d267d7","characters/yuna_relieved":"f52087d4c4481ae7f5966d29","characters/yuna_sad":"c73c2a3d293ec676ad7faaf9","characters/yuna_scared":"87b07f4c7622b6756c3a7d7c","characters/yuna_scream":"7429883b0519fd4522be5725","characters/yuna_shy":"7de73a6c1803e06fb13e5ad0","characters/yuna_smile":"6830e9e8710b758f8fa19b6e","characters/yuna_smirk":"cd1090acbc23857e9762bf61","characters/yuna_sob":"f2540e94407349e0adbef2e2","characters/yuna_soft_smile":"26f271eb7ced7ae65688216f","characters/yuna_surprised":"8524acfb8a79c422a01be85d","characters/yuna_worried":"6c68f2e75df4c0f88aefd7aa"};
  var CHARACTER_ASSET_IDS = {"assets/characters/dain/expressions/active/01/sprite":"characters/dain_active","assets/characters/dain/expressions/aegyo/01/sprite":"characters/dain_aegyo","assets/characters/dain/expressions/ahegao/01/sprite":"characters/dain_ahegao","assets/characters/dain/expressions/angry/01/sprite":"characters/dain_angry","assets/characters/dain/expressions/bikini/01/sprite":"characters/dain_bikini","assets/characters/dain/expressions/choking/01/sprite":"characters/dain_choking","assets/characters/dain/expressions/climax/01/sprite":"characters/dain_climax","assets/characters/dain/expressions/climax/02/sprite":"characters/dain_climax_02","assets/characters/dain/expressions/climax/03/sprite":"characters/dain_climax_03","assets/characters/dain/expressions/climax/04/sprite":"characters/dain_climax_04","assets/characters/dain/expressions/climax/05/sprite":"characters/dain_climax_05","assets/characters/dain/expressions/climax/06/sprite":"characters/dain_climax_06","assets/characters/dain/expressions/climax/07/sprite":"characters/dain_climax_07","assets/characters/dain/expressions/climax/08/sprite":"characters/dain_climax_08","assets/characters/dain/expressions/climax/09/sprite":"characters/dain_climax_09","assets/characters/dain/expressions/climax/10/sprite":"characters/dain_climax_10","assets/characters/dain/expressions/climax/11/sprite":"characters/dain_climax_11","assets/characters/dain/expressions/confused/01/sprite":"characters/dain_confused","assets/characters/dain/expressions/cry/01/sprite":"characters/dain_cry","assets/characters/dain/expressions/dazed/01/sprite":"characters/dain_dazed","assets/characters/dain/expressions/disgusted/01/sprite":"characters/dain_disgusted","assets/characters/dain/expressions/exhausted/01/sprite":"characters/dain_exhausted","assets/characters/dain/expressions/fainted/01/sprite":"characters/dain_fainted","assets/characters/dain/expressions/flushed/01/sprite":"characters/dain_flushed","assets/characters/dain/expressions/furious/01/sprite":"characters/dain_furious","assets/characters/dain/expressions/laugh/01/sprite":"characters/dain_laugh","assets/characters/dain/expressions/normal/01/sprite":"characters/dain_normal","assets/characters/dain/expressions/pain/01/sprite":"characters/dain_pain","assets/characters/dain/expressions/pout/01/sprite":"characters/dain_pout","assets/characters/dain/expressions/relieved/01/sprite":"characters/dain_relieved","assets/characters/dain/expressions/sad/01/sprite":"characters/dain_sad","assets/characters/dain/expressions/scared/01/sprite":"characters/dain_scared","assets/characters/dain/expressions/scream/01/sprite":"characters/dain_scream","assets/characters/dain/expressions/shy/01/sprite":"characters/dain_shy","assets/characters/dain/expressions/smile/01/sprite":"characters/dain_smile","assets/characters/dain/expressions/smirk/01/sprite":"characters/dain_smirk","assets/characters/dain/expressions/sob/01/sprite":"characters/dain_sob","assets/characters/dain/expressions/soft_smile/01/sprite":"characters/dain_soft_smile","assets/characters/dain/expressions/surprised/01/sprite":"characters/dain_surprised","assets/characters/dain/expressions/sweat/01/sprite":"characters/dain_sweat","assets/characters/dain/expressions/worried/01/sprite":"characters/dain_worried","assets/characters/dain/outfits/date/expressions/angry/01/sprite":"characters/dain_date_angry","assets/characters/dain/outfits/date/expressions/laugh/01/sprite":"characters/dain_date_laugh","assets/characters/dain/outfits/date/expressions/normal/01/sprite":"characters/dain_date_normal","assets/characters/dain/outfits/date/expressions/sad/01/sprite":"characters/dain_date_sad","assets/characters/dain/outfits/date/expressions/shy/01/sprite":"characters/dain_date_shy","assets/characters/dain/outfits/date/expressions/sweat/01/sprite":"characters/dain_date_sweat","assets/characters/haeun/expressions/aegyo/01/sprite":"characters/haeun_aegyo","assets/characters/haeun/expressions/ahegao/01/sprite":"characters/haeun_ahegao","assets/characters/haeun/expressions/angry/01/sprite":"characters/haeun_angry","assets/characters/haeun/expressions/choking/01/sprite":"characters/haeun_choking","assets/characters/haeun/expressions/climax/01/sprite":"characters/haeun_climax","assets/characters/haeun/expressions/climax/02/sprite":"characters/haeun_climax_02","assets/characters/haeun/expressions/climax/03/sprite":"characters/haeun_climax_03","assets/characters/haeun/expressions/climax/04/sprite":"characters/haeun_climax_04","assets/characters/haeun/expressions/climax/05/sprite":"characters/haeun_climax_05","assets/characters/haeun/expressions/climax/06/sprite":"characters/haeun_climax_06","assets/characters/haeun/expressions/climax/07/sprite":"characters/haeun_climax_07","assets/characters/haeun/expressions/climax/08/sprite":"characters/haeun_climax_08","assets/characters/haeun/expressions/confused/01/sprite":"characters/haeun_confused","assets/characters/haeun/expressions/cry/01/sprite":"characters/haeun_cry","assets/characters/haeun/expressions/dazed/01/sprite":"characters/haeun_dazed","assets/characters/haeun/expressions/disgusted/01/sprite":"characters/haeun_disgusted","assets/characters/haeun/expressions/exhausted/01/sprite":"characters/haeun_exhausted","assets/characters/haeun/expressions/fainted/01/sprite":"characters/haeun_fainted","assets/characters/haeun/expressions/firm/01/sprite":"characters/haeun_firm","assets/characters/haeun/expressions/flushed/01/sprite":"characters/haeun_flushed","assets/characters/haeun/expressions/furious/01/sprite":"characters/haeun_furious","assets/characters/haeun/expressions/laugh/01/sprite":"characters/haeun_laugh","assets/characters/haeun/expressions/normal/01/sprite":"characters/haeun_normal","assets/characters/haeun/expressions/pain/01/sprite":"characters/haeun_pain","assets/characters/haeun/expressions/pout/01/sprite":"characters/haeun_pout","assets/characters/haeun/expressions/relieved/01/sprite":"characters/haeun_relieved","assets/characters/haeun/expressions/sad/01/sprite":"characters/haeun_sad","assets/characters/haeun/expressions/scared/01/sprite":"characters/haeun_scared","assets/characters/haeun/expressions/scream/01/sprite":"characters/haeun_scream","assets/characters/haeun/expressions/shy/01/sprite":"characters/haeun_shy","assets/characters/haeun/expressions/smile/01/sprite":"characters/haeun_smile","assets/characters/haeun/expressions/smirk/01/sprite":"characters/haeun_smirk","assets/characters/haeun/expressions/sob/01/sprite":"characters/haeun_sob","assets/characters/haeun/expressions/soft_smile/01/sprite":"characters/haeun_soft_smile","assets/characters/haeun/expressions/surprised/01/sprite":"characters/haeun_surprised","assets/characters/haeun/expressions/worried/01/sprite":"characters/haeun_worried","assets/characters/junho/expressions/awkward/01/sprite":"characters/junho_awkward","assets/characters/junho/expressions/normal/01/sprite":"characters/junho_normal","assets/characters/minsu/expressions/aegyo/01/sprite":"characters/minsu_aegyo","assets/characters/minsu/expressions/choking/01/sprite":"characters/minsu_choking","assets/characters/minsu/expressions/climax/01/sprite":"characters/minsu_climax","assets/characters/minsu/expressions/climax/02/sprite":"characters/minsu_climax_02","assets/characters/minsu/expressions/climax/03/sprite":"characters/minsu_climax_03","assets/characters/minsu/expressions/climax/04/sprite":"characters/minsu_climax_04","assets/characters/minsu/expressions/climax/05/sprite":"characters/minsu_climax_05","assets/characters/minsu/expressions/climax/06/sprite":"characters/minsu_climax_06","assets/characters/minsu/expressions/confused/01/sprite":"characters/minsu_confused","assets/characters/minsu/expressions/cry/01/sprite":"characters/minsu_cry","assets/characters/minsu/expressions/dazed/01/sprite":"characters/minsu_dazed","assets/characters/minsu/expressions/disgusted/01/sprite":"characters/minsu_disgusted","assets/characters/minsu/expressions/exhausted/01/sprite":"characters/minsu_exhausted","assets/characters/minsu/expressions/fainted/01/sprite":"characters/minsu_fainted","assets/characters/minsu/expressions/furious/01/sprite":"characters/minsu_furious","assets/characters/minsu/expressions/normal/01/sprite":"characters/minsu_normal","assets/characters/minsu/expressions/pain/01/sprite":"characters/minsu_pain","assets/characters/minsu/expressions/relieved/01/sprite":"characters/minsu_relieved","assets/characters/minsu/expressions/scared/01/sprite":"characters/minsu_scared","assets/characters/minsu/expressions/scream/01/sprite":"characters/minsu_scream","assets/characters/minsu/expressions/smirk/01/sprite":"characters/minsu_smirk","assets/characters/minsu/expressions/sob/01/sprite":"characters/minsu_sob","assets/characters/minsu/expressions/surprised/01/sprite":"characters/minsu_surprised","assets/characters/nurse/expressions/aegyo/01/sprite":"characters/nurse_aegyo","assets/characters/nurse/expressions/ahegao/01/sprite":"characters/nurse_ahegao","assets/characters/nurse/expressions/angry/01/sprite":"characters/nurse_angry","assets/characters/nurse/expressions/bikini/01/sprite":"characters/nurse_bikini","assets/characters/nurse/expressions/choking/01/sprite":"characters/nurse_choking","assets/characters/nurse/expressions/climax/01/sprite":"characters/nurse_climax","assets/characters/nurse/expressions/climax/02/sprite":"characters/nurse_climax_02","assets/characters/nurse/expressions/climax/03/sprite":"characters/nurse_climax_03","assets/characters/nurse/expressions/climax/04/sprite":"characters/nurse_climax_04","assets/characters/nurse/expressions/climax/05/sprite":"characters/nurse_climax_05","assets/characters/nurse/expressions/climax/06/sprite":"characters/nurse_climax_06","assets/characters/nurse/expressions/climax/07/sprite":"characters/nurse_climax_07","assets/characters/nurse/expressions/climax/08/sprite":"characters/nurse_climax_08","assets/characters/nurse/expressions/climax/09/sprite":"characters/nurse_climax_09","assets/characters/nurse/expressions/confused/01/sprite":"characters/nurse_confused","assets/characters/nurse/expressions/cry/01/sprite":"characters/nurse_cry","assets/characters/nurse/expressions/dazed/01/sprite":"characters/nurse_dazed","assets/characters/nurse/expressions/disgusted/01/sprite":"characters/nurse_disgusted","assets/characters/nurse/expressions/dry_smile/01/sprite":"characters/nurse_dry_smile","assets/characters/nurse/expressions/exhausted/01/sprite":"characters/nurse_exhausted","assets/characters/nurse/expressions/fainted/01/sprite":"characters/nurse_fainted","assets/characters/nurse/expressions/flushed/01/sprite":"characters/nurse_flushed","assets/characters/nurse/expressions/furious/01/sprite":"characters/nurse_furious","assets/characters/nurse/expressions/laugh/01/sprite":"characters/nurse_laugh","assets/characters/nurse/expressions/normal/01/sprite":"characters/nurse_normal","assets/characters/nurse/expressions/pain/01/sprite":"characters/nurse_pain","assets/characters/nurse/expressions/pout/01/sprite":"characters/nurse_pout","assets/characters/nurse/expressions/relieved/01/sprite":"characters/nurse_relieved","assets/characters/nurse/expressions/sad/01/sprite":"characters/nurse_sad","assets/characters/nurse/expressions/scared/01/sprite":"characters/nurse_scared","assets/characters/nurse/expressions/scream/01/sprite":"characters/nurse_scream","assets/characters/nurse/expressions/shy/01/sprite":"characters/nurse_shy","assets/characters/nurse/expressions/smile/01/sprite":"characters/nurse_smile","assets/characters/nurse/expressions/smirk/01/sprite":"characters/nurse_smirk","assets/characters/nurse/expressions/sob/01/sprite":"characters/nurse_sob","assets/characters/nurse/expressions/soft_smile/01/sprite":"characters/nurse_soft_smile","assets/characters/nurse/expressions/surprised/01/sprite":"characters/nurse_surprised","assets/characters/nurse/expressions/tired/01/sprite":"characters/nurse_tired","assets/characters/nurse/expressions/worried/01/sprite":"characters/nurse_worried","assets/characters/nurse/outfits/home/expressions/angry/01/sprite":"characters/nurse_home_angry","assets/characters/nurse/outfits/home/expressions/normal/01/sprite":"characters/nurse_home_normal","assets/characters/nurse/outfits/home/expressions/sad/01/sprite":"characters/nurse_home_sad","assets/characters/nurse/outfits/home/expressions/shy/01/sprite":"characters/nurse_home_shy","assets/characters/nurse/outfits/home/expressions/smile/01/sprite":"characters/nurse_home_smile","assets/characters/seoyeon/expressions/aegyo/01/sprite":"characters/seyoun_aegyo","assets/characters/seoyeon/expressions/ahegao/01/sprite":"characters/seyoun_ahegao","assets/characters/seoyeon/expressions/angry/01/sprite":"characters/seyoun_angry","assets/characters/seoyeon/expressions/back/01/sprite":"characters/seyoun_back","assets/characters/seoyeon/expressions/bikini/01/sprite":"characters/seyoun_bikini","assets/characters/seoyeon/expressions/choking/01/sprite":"characters/seyoun_choking","assets/characters/seoyeon/expressions/climax/01/sprite":"characters/seyoun_climax","assets/characters/seoyeon/expressions/climax/02/sprite":"characters/seyoun_climax_02","assets/characters/seoyeon/expressions/climax/03/sprite":"characters/seyoun_climax_03","assets/characters/seoyeon/expressions/climax/04/sprite":"characters/seyoun_climax_04","assets/characters/seoyeon/expressions/climax/05/sprite":"characters/seyoun_climax_05","assets/characters/seoyeon/expressions/climax/06/sprite":"characters/seyoun_climax_06","assets/characters/seoyeon/expressions/confused/01/sprite":"characters/seyoun_confused","assets/characters/seoyeon/expressions/cry/01/sprite":"characters/seyoun_cry","assets/characters/seoyeon/expressions/dazed/01/sprite":"characters/seyoun_dazed","assets/characters/seoyeon/expressions/disgusted/01/sprite":"characters/seyoun_disgusted","assets/characters/seoyeon/expressions/exhausted/01/sprite":"characters/seyoun_exhausted","assets/characters/seoyeon/expressions/fainted/01/sprite":"characters/seyoun_fainted","assets/characters/seoyeon/expressions/flushed/01/sprite":"characters/seyoun_flushed","assets/characters/seoyeon/expressions/flushed/02/sprite":"characters/seyoun_flushed_02","assets/characters/seoyeon/expressions/flushed/03/sprite":"characters/seyoun_flushed_03","assets/characters/seoyeon/expressions/flushed/04/sprite":"characters/seyoun_flushed_04","assets/characters/seoyeon/expressions/flushed/05/sprite":"characters/seyoun_flushed_05","assets/characters/seoyeon/expressions/flushed/06/sprite":"characters/seyoun_flushed_06","assets/characters/seoyeon/expressions/furious/01/sprite":"characters/seyoun_furious","assets/characters/seoyeon/expressions/laugh/01/sprite":"characters/seyoun_laugh","assets/characters/seoyeon/expressions/normal/01/sprite":"characters/seyoun_normal","assets/characters/seoyeon/expressions/pain/01/sprite":"characters/seyoun_pain","assets/characters/seoyeon/expressions/pout/01/sprite":"characters/seyoun_pout","assets/characters/seoyeon/expressions/relieved/01/sprite":"characters/seyoun_relieved","assets/characters/seoyeon/expressions/sad/01/sprite":"characters/seyoun_sad","assets/characters/seoyeon/expressions/scared/01/sprite":"characters/seyoun_scared","assets/characters/seoyeon/expressions/scream/01/sprite":"characters/seyoun_scream","assets/characters/seoyeon/expressions/shy/01/sprite":"characters/seyoun_shy","assets/characters/seoyeon/expressions/smile/01/sprite":"characters/seyoun_smile","assets/characters/seoyeon/expressions/smirk/01/sprite":"characters/seyoun_smirk","assets/characters/seoyeon/expressions/sob/01/sprite":"characters/seyoun_sob","assets/characters/seoyeon/expressions/soft_smile/01/sprite":"characters/seyoun_soft_smile","assets/characters/seoyeon/expressions/surprised/01/sprite":"characters/seyoun_surprised","assets/characters/seoyeon/expressions/very_shy/01/sprite":"characters/seyoun_very_shy","assets/characters/seoyeon/expressions/worried/01/sprite":"characters/seyoun_worried","assets/characters/seoyeon/outfits/date/expressions/laugh/01/sprite":"characters/seyoun_date_laugh","assets/characters/seoyeon/outfits/date/expressions/normal/01/sprite":"characters/seyoun_date_normal","assets/characters/seoyeon/outfits/date/expressions/sad/01/sprite":"characters/seyoun_date_sad","assets/characters/seoyeon/outfits/date/expressions/shy/01/sprite":"characters/seyoun_date_shy","assets/characters/seoyeon/outfits/date/expressions/worried/01/sprite":"characters/seyoun_date_worried","assets/characters/teacher/expressions/aegyo/01/sprite":"characters/teacher_aegyo","assets/characters/teacher/expressions/ahegao/01/sprite":"characters/teacher_ahegao","assets/characters/teacher/expressions/angry/01/sprite":"characters/teacher_angry","assets/characters/teacher/expressions/bikini/01/sprite":"characters/teacher_bikini","assets/characters/teacher/expressions/choking/01/sprite":"characters/teacher_choking","assets/characters/teacher/expressions/climax/01/sprite":"characters/teacher_climax","assets/characters/teacher/expressions/climax/02/sprite":"characters/teacher_climax_02","assets/characters/teacher/expressions/climax/03/sprite":"characters/teacher_climax_03","assets/characters/teacher/expressions/climax/04/sprite":"characters/teacher_climax_04","assets/characters/teacher/expressions/climax/05/sprite":"characters/teacher_climax_05","assets/characters/teacher/expressions/climax/06/sprite":"characters/teacher_climax_06","assets/characters/teacher/expressions/climax/07/sprite":"characters/teacher_climax_07","assets/characters/teacher/expressions/climax/08/sprite":"characters/teacher_climax_08","assets/characters/teacher/expressions/climax/09/sprite":"characters/teacher_climax_09","assets/characters/teacher/expressions/climax/10/sprite":"characters/teacher_climax_10","assets/characters/teacher/expressions/confused/01/sprite":"characters/teacher_confused","assets/characters/teacher/expressions/cry/01/sprite":"characters/teacher_cry","assets/characters/teacher/expressions/dazed/01/sprite":"characters/teacher_dazed","assets/characters/teacher/expressions/disgusted/01/sprite":"characters/teacher_disgusted","assets/characters/teacher/expressions/exhausted/01/sprite":"characters/teacher_exhausted","assets/characters/teacher/expressions/fainted/01/sprite":"characters/teacher_fainted","assets/characters/teacher/expressions/flushed/01/sprite":"characters/teacher_flushed","assets/characters/teacher/expressions/furious/01/sprite":"characters/teacher_furious","assets/characters/teacher/expressions/laugh/01/sprite":"characters/teacher_laugh","assets/characters/teacher/expressions/normal/01/sprite":"characters/teacher_normal","assets/characters/teacher/expressions/pain/01/sprite":"characters/teacher_pain","assets/characters/teacher/expressions/pout/01/sprite":"characters/teacher_pout","assets/characters/teacher/expressions/relieved/01/sprite":"characters/teacher_relieved","assets/characters/teacher/expressions/sad/01/sprite":"characters/teacher_sad","assets/characters/teacher/expressions/scared/01/sprite":"characters/teacher_scared","assets/characters/teacher/expressions/scream/01/sprite":"characters/teacher_scream","assets/characters/teacher/expressions/shy/01/sprite":"characters/teacher_shy","assets/characters/teacher/expressions/smile/01/sprite":"characters/teacher_smile","assets/characters/teacher/expressions/smirk/01/sprite":"characters/teacher_smirk","assets/characters/teacher/expressions/sob/01/sprite":"characters/teacher_sob","assets/characters/teacher/expressions/soft_smile/01/sprite":"characters/teacher_soft_smile","assets/characters/teacher/expressions/surprised/01/sprite":"characters/teacher_surprised","assets/characters/teacher/expressions/worried/01/sprite":"characters/teacher_worried","assets/characters/yuna/expressions/aegyo/01/sprite":"characters/yuna_aegyo","assets/characters/yuna/expressions/ahegao/01/sprite":"characters/yuna_ahegao","assets/characters/yuna/expressions/angry/01/sprite":"characters/yuna_angry","assets/characters/yuna/expressions/bikini/01/sprite":"characters/yuna_bikini","assets/characters/yuna/expressions/bored/01/sprite":"characters/yuna_bored","assets/characters/yuna/expressions/choking/01/sprite":"characters/yuna_choking","assets/characters/yuna/expressions/climax/01/sprite":"characters/yuna_climax","assets/characters/yuna/expressions/climax/02/sprite":"characters/yuna_climax_02","assets/characters/yuna/expressions/climax/03/sprite":"characters/yuna_climax_03","assets/characters/yuna/expressions/climax/04/sprite":"characters/yuna_climax_04","assets/characters/yuna/expressions/climax/05/sprite":"characters/yuna_climax_05","assets/characters/yuna/expressions/climax/06/sprite":"characters/yuna_climax_06","assets/characters/yuna/expressions/climax/07/sprite":"characters/yuna_climax_07","assets/characters/yuna/expressions/climax/08/sprite":"characters/yuna_climax_08","assets/characters/yuna/expressions/climax/09/sprite":"characters/yuna_climax_09","assets/characters/yuna/expressions/confused/01/sprite":"characters/yuna_confused","assets/characters/yuna/expressions/cry/01/sprite":"characters/yuna_cry","assets/characters/yuna/expressions/dazed/01/sprite":"characters/yuna_dazed","assets/characters/yuna/expressions/disgusted/01/sprite":"characters/yuna_disgusted","assets/characters/yuna/expressions/exhausted/01/sprite":"characters/yuna_exhausted","assets/characters/yuna/expressions/fainted/01/sprite":"characters/yuna_fainted","assets/characters/yuna/expressions/flushed/01/sprite":"characters/yuna_flushed","assets/characters/yuna/expressions/furious/01/sprite":"characters/yuna_furious","assets/characters/yuna/expressions/gallery_bikini_sexy_20260813/01/sprite":"characters/yuna_gallery_bikini_sexy_20260813","assets/characters/yuna/expressions/laugh/01/sprite":"characters/yuna_laugh","assets/characters/yuna/expressions/normal/01/sprite":"characters/yuna_normal","assets/characters/yuna/expressions/pain/01/sprite":"characters/yuna_pain","assets/characters/yuna/expressions/pout/01/sprite":"characters/yuna_pout","assets/characters/yuna/expressions/relieved/01/sprite":"characters/yuna_relieved","assets/characters/yuna/expressions/sad/01/sprite":"characters/yuna_sad","assets/characters/yuna/expressions/scared/01/sprite":"characters/yuna_scared","assets/characters/yuna/expressions/scream/01/sprite":"characters/yuna_scream","assets/characters/yuna/expressions/shy/01/sprite":"characters/yuna_shy","assets/characters/yuna/expressions/smile/01/sprite":"characters/yuna_smile","assets/characters/yuna/expressions/smirk/01/sprite":"characters/yuna_smirk","assets/characters/yuna/expressions/sob/01/sprite":"characters/yuna_sob","assets/characters/yuna/expressions/soft_smile/01/sprite":"characters/yuna_soft_smile","assets/characters/yuna/expressions/surprised/01/sprite":"characters/yuna_surprised","assets/characters/yuna/expressions/worried/01/sprite":"characters/yuna_worried","assets/characters/yuna/outfits/date/expressions/bored/01/sprite":"characters/yuna_date_bored","assets/characters/yuna/outfits/date/expressions/normal/01/sprite":"characters/yuna_date_normal","assets/characters/yuna/outfits/date/expressions/sad/01/sprite":"characters/yuna_date_sad","assets/characters/yuna/outfits/date/expressions/shy/01/sprite":"characters/yuna_date_shy","assets/characters/yuna/outfits/date/expressions/smile/01/sprite":"characters/yuna_date_smile"};
  // END GENERATED MEDIA VERSIONS
  var sessionPromise = null;
  var activeGuestId = null;
  var unlockPromises = Object.create(null);
  var unlockResolvers = Object.create(null);
  var flushScheduled = false;
  var preparedImages = new Map();
  var preparingCount = 0;

  function ensureSession() {
    if (sessionPromise) return sessionPromise;
    sessionPromise = fetch('/api/media-session', {
      method: 'POST', credentials: 'same-origin', headers: { 'content-type': 'application/json' }
    }).then(function (response) {
      if (!response.ok) throw new Error('media_session_' + response.status);
      return response.json();
    }).then(function (data) {
      if (!data.guestId || !/^[0-9a-f-]{36}$/i.test(data.guestId)) throw new Error('invalid_media_session');
      activeGuestId = data.guestId;
      if (storageGet(GUEST_KEY) !== data.guestId) {
        knownUnlocked = Object.create(null);
        storageSet(GUEST_KEY, data.guestId);
        storageSet(MIGRATION_KEY, '0');
        try { global.sessionStorage.removeItem(UNLOCK_MEMORY_KEY); } catch (_) {}
      }
      return data.guestId;
    }).catch(function (error) { sessionPromise = null; throw error; });
    return sessionPromise;
  }

  var CG_BASES = [
    'event_seoyeon_succulent', 'event_yuna_reading',
    'ending_perfect_haeun', 'event_haeun_trust', 'event_haeun_reputation',
    'nurse_home_event1', 'dain_hurt_event1', 'dain_depression_event1',
    'ending_perfect_seoyeon', 'ending_perfect_yuna', 'ending_perfect_dain',
    'ending_bittersweet', 'ending_true_teacher', 'ending_true_nurse',
    'ending_harem', 'ending_alone', 'ending_friend',
    'ending_good_seoyeon', 'ending_good_yuna', 'ending_good_dain',
    'ending_confess_fail_seoyeon', 'ending_confess_fail_yuna', 'ending_confess_fail_dain',
    'ending_mayhem', 'event_temptation_seoyeon', 'event_temptation_yuna', 'event_temptation_dain',
    'ending_bittersweet_teacher', 'ending_bittersweet_nurse',
    'ending_good_teacher', 'ending_good_nurse',
    'ending_true_seoyeon', 'ending_true_yuna', 'ending_true_dain',
    'ending_perfect_teacher', 'ending_perfect_nurse'
  ];
  var CG_SET = {};
  for (var i = 0; i < CG_BASES.length; i++) CG_SET[CG_BASES[i]] = true;

  // Keep in sync with PUBLIC_LOGICAL_IDS in functions/_lib/media-assets.js.
  var PUBLIC_IDS = {
    'characters/dain_normal': true,
    'characters/teacher_normal': true,
    'characters/seyoun_normal': true,
    'characters/nurse_normal': true,
    'characters/yuna_normal': true
  };
  var UNLOCK_MEMORY_KEY = 'cupid_media_unlocked_v1';

  var pendingUnlocks = [];
  var knownUnlocked = Object.create(null);

  function storageGet(key) {
    try {
      if (global.CupidStorage && typeof global.CupidStorage.getItem === 'function') {
        return global.CupidStorage.getItem(key);
      }
      return global.localStorage.getItem(key);
    } catch (_) { return null; }
  }

  function storageSet(key, value) {
    try {
      if (global.CupidStorage && typeof global.CupidStorage.setItem === 'function') {
        global.CupidStorage.setItem(key, value);
        return;
      }
      global.localStorage.setItem(key, value);
    } catch (_) {}
  }

  function uuidV4() {
    if (global.crypto && typeof global.crypto.randomUUID === 'function') {
      return global.crypto.randomUUID();
    }
    var rnd = global.crypto && global.crypto.getRandomValues
      ? global.crypto.getRandomValues(new Uint8Array(16))
      : Array.from({ length: 16 }, function () { return Math.floor(Math.random() * 256); });
    rnd[6] = (rnd[6] & 0x0f) | 0x40;
    rnd[8] = (rnd[8] & 0x3f) | 0x80;
    var hex = [];
    for (var i = 0; i < rnd.length; i++) hex.push((rnd[i] + 256).toString(16).slice(1));
    return hex.slice(0, 4).join('') + '-' + hex.slice(4, 6).join('') + '-' + hex.slice(6, 8).join('') + '-' + hex.slice(8, 10).join('') + '-' + hex.slice(10, 16).join('');
  }

  function getGuestId() {
    if (activeGuestId) return activeGuestId;
    var existing = storageGet(GUEST_KEY);
    if (existing && /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(existing)) {
      return existing;
    }
    var id = uuidV4();
    storageSet(GUEST_KEY, id);
    return id;
  }

  function normalizePath(raw) {
    return String(raw || '').split('?')[0].replace(/^\/+/, '').replace(/\\/g, '/');
  }

  function toLogicalAssetId(raw) {
    var p = normalizePath(raw);
    if (!p || p.indexOf('..') !== -1) return null;
    var canonical = p.replace(/\.(png|webp|jpg|jpeg)$/i, '');
    if (Object.prototype.hasOwnProperty.call(CHARACTER_ASSET_IDS, canonical)) return CHARACTER_ASSET_IDS[canonical];
    if (p.indexOf('assets/images/') === 0) p = p.slice('assets/images/'.length);
    p = p.replace(/\.(png|webp|jpg|jpeg)$/i, '');
    return p;
  }

  function recallUnlocks() {
    try {
      var raw = global.sessionStorage.getItem(UNLOCK_MEMORY_KEY);
      var list = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(list)) return;
      for (var i = 0; i < list.length; i++) knownUnlocked[list[i]] = true;
    } catch (_) {}
  }

  function rememberUnlocks(ids) {
    try {
      var raw = global.sessionStorage.getItem(UNLOCK_MEMORY_KEY);
      var list = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(list)) list = [];
      for (var i = 0; i < ids.length; i++) {
        if (list.indexOf(ids[i]) === -1) list.push(ids[i]);
      }
      if (list.length > 500) list = list.slice(list.length - 500);
      global.sessionStorage.setItem(UNLOCK_MEMORY_KEY, JSON.stringify(list));
    } catch (_) {}
  }

  function forgetUnlock(id) {
    if (!id) return;
    delete knownUnlocked[id];
    try {
      var raw = global.sessionStorage.getItem(UNLOCK_MEMORY_KEY);
      var list = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(list)) return;
      global.sessionStorage.setItem(UNLOCK_MEMORY_KEY, JSON.stringify(list.filter(function (item) {
        return item !== id;
      })));
    } catch (_) {}
  }

  function isPublicLogical(id) {
    return !!(id && PUBLIC_IDS[id]);
  }

  function isProtectedPath(raw) {
    var id = toLogicalAssetId(raw);
    if (!id) return false;
    if (id.indexOf('characters/') === 0 || id.indexOf('assets/characters/') === 0) return true;
    var base = id.indexOf('background/') === 0 ? id.slice('background/'.length) : id;
    if (CG_SET[base]) return true;
    if (typeof global.REGISTERED_CG_IDS !== 'undefined' && global.REGISTERED_CG_IDS && global.REGISTERED_CG_IDS.has) {
      if (global.REGISTERED_CG_IDS.has(base)) return true;
    }
    return false;
  }

  function assetVersion() {
    return global.ASSET_VERSION || '';
  }

  function mediaUrl(rawPath, extension) {
    var logical = toLogicalAssetId(rawPath);
    if (!logical) return normalizePath(rawPath);
    var ext = extension || '.webp';
    var asset = 'assets/images/' + logical + ext;
    var q = 'asset=' + encodeURIComponent(asset)
      + (isPublicLogical(logical) ? '' : '&guest=' + encodeURIComponent(getGuestId()))
      + '&v=' + encodeURIComponent(MEDIA_VERSIONS[logical] || assetVersion());
    return '/api/media?' + q;
  }

  function canonicalExpressionAssetPath(rawPath) {
    return String(rawPath || '').replace(/shy2/g, 'very_shy');
  }

  function logicalFromAny(rawPath) {
    var text = canonicalExpressionAssetPath(rawPath);
    if (text.indexOf('/api/media?') !== -1) {
      try {
        var base = global.location ? global.location.href : 'http://localhost/';
        var asset = new URL(text, base).searchParams.get('asset');
        if (asset) return toLogicalAssetId(asset);
      } catch (_) {}
    }
    return toLogicalAssetId(text);
  }

  function preferWebpUrl(url) {
    var text = String(url || '');
    if (text.indexOf('/api/media?') === -1) return text;
    return text.replace(/\.(png|jpeg|jpg)(?=(&|$))/i, '.webp');
  }

  function resolveUrl(rawPath) {
    rawPath = canonicalExpressionAssetPath(rawPath);
    if (!rawPath) return rawPath;
    if (!isProtectedPath(rawPath)) {
      if (typeof global.getAssetUrl === 'function') return global.getAssetUrl(rawPath);
      var sep = String(rawPath).indexOf('?') >= 0 ? '&' : '?';
      return rawPath + sep + 'v=' + assetVersion();
    }
    return mediaUrl(rawPath);
  }

  function placeholderUrl() {
    var sep = PLACEHOLDER.indexOf('?') >= 0 ? '&' : '?';
    return PLACEHOLDER + sep + 'v=' + assetVersion();
  }

  function queueUnlock(assets) {
    if (!assets || !assets.length) return Promise.resolve({ upserted: 0 });
    assets = assets.filter(function (asset) {
      var id = logicalFromAny(asset);
      return id && MEDIA_VERSIONS[id] && !isPublicLogical(id);
    });
    if (!assets.length) return Promise.resolve({ upserted: 0 });
    return ensureSession().then(function () {
      var waits = [];
      assets.forEach(function (asset) {
        var id = logicalFromAny(asset);
        if (!id || !MEDIA_VERSIONS[id] || isPublicLogical(id) || knownUnlocked[id]) return;
        if (!unlockPromises[id]) {
          unlockPromises[id] = new Promise(function (resolve) { unlockResolvers[id] = resolve; });
          pendingUnlocks.push(id);
        }
        waits.push(unlockPromises[id]);
      });
      if (pendingUnlocks.length && !flushScheduled) {
        flushScheduled = true;
        Promise.resolve().then(flushUnlocks);
      }
      return Promise.all(waits).then(function (results) {
        return results.find(function (result) { return result.error; }) || { upserted: waits.length };
      });
    }).catch(function (error) { return { upserted: 0, error: String(error.message || error) }; });
  }

  function flushUnlocks() {
    flushScheduled = false;
    if (!pendingUnlocks.length) return Promise.resolve({ upserted: 0 });
    var batch = pendingUnlocks.splice(0, BATCH_CAP);
    function sendBatch() {
      var guest = getGuestId();
      return fetch('/api/gallery/unlocks', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-Cupid-Guest': guest
      },
      body: JSON.stringify({ guestId: guest, assets: batch }),
      credentials: 'same-origin',
      keepalive: true
      });
    }
    return sendBatch().then(function (resp) {
      if (resp.status !== 401) return resp;
      // A different tab may have established the browser cookie first.
      // Retry this explicit grant once with the identity the server now owns.
      sessionPromise = null;
      return ensureSession().then(sendBatch);
    }).then(function (resp) {
      if (!resp.ok) {
        if (resp.status === 401) sessionPromise = null;
        throw new Error('unlock_failed_' + resp.status);
      }
      return resp.json().catch(function () { return {}; });
    }).then(function (data) {
      var accepted = Array.isArray(data.assets) ? data.assets : [];
      for (var i = 0; i < accepted.length; i++) knownUnlocked[accepted[i]] = true;
      rememberUnlocks(accepted);
      return data || { upserted: batch.length };
    }).catch(function (err) {
      console.warn('[CupidMedia] unlock sync failed', err);
      return { upserted: 0, error: String(err && err.message || err) };
    }).then(function (result) {
      batch.forEach(function (id) {
        unlockResolvers[id](result);
        delete unlockResolvers[id];
        delete unlockPromises[id];
      });
      if (pendingUnlocks.length && !flushScheduled) {
        flushScheduled = true;
        Promise.resolve().then(flushUnlocks);
      }
      return result;
    });
  }

  function characterExpressionAsset(charId, expression) {
    return 'characters/' + charId + '_' + expression;
  }

  function cgAsset(cgId) {
    return 'background/' + cgId;
  }

  function expressionRequirement(expressionIndex, totalExpressions) {
    if (totalExpressions <= 1) return 0;
    if (expressionIndex === 0) return 0;
    return Math.round((expressionIndex / (totalExpressions - 1)) * 100);
  }

  function collectAssetsFromGalleryData(data) {
    var assets = [];
    if (!data || typeof data !== 'object') return assets;

    var characters = data.characters || {};
    var charIds = Object.keys(characters);
    for (var i = 0; i < charIds.length; i++) {
      var charId = charIds[i];
      var charData = characters[charId];
      if (!charData || !charData.met) continue;
      assets.push(characterExpressionAsset(charId, 'normal'));

      var galleryChar = null;
      try {
        galleryChar = global.GalleryData && global.GalleryData.getCharacter
          ? global.GalleryData.getCharacter('en', charId) || global.GalleryData.getCharacter('ko', charId)
          : null;
      } catch (_) {}
      var expressions = (galleryChar && galleryChar.expressions) || ['normal'];
      var affinity = Number(charData.maxAffinity) || 0;
      var freeTalkCount = Number(charData.freeTalkCount) || 0;
      for (var e = 0; e < expressions.length; e++) {
        var expr = expressions[e];
        var unlocked = false;
        if (expr === 'bikini') {
          var hidden = charId === 'teacher' || charId === 'nurse';
          var threshold = hidden ? 80 : 100;
          unlocked = affinity >= threshold && freeTalkCount >= 30;
        } else {
          var required = global.GalleryData && typeof global.GalleryData.getExpressionRequirement === 'function'
            ? global.GalleryData.getExpressionRequirement(charId, expr) : expressionRequirement(e, expressions.length);
          unlocked = affinity >= required;
        }
        if (unlocked) assets.push(characterExpressionAsset(charId, expr));
      }
    }

    var cgMap = data.cg || {};
    Object.keys(cgMap).forEach(function (cgId) {
      if (cgMap[cgId] && cgMap[cgId].unlocked) assets.push(cgAsset(cgId));
    });

    return assets;
  }

  function migrateFromLocalGallery() {
    if (storageGet(MIGRATION_KEY) === '1') {
      return Promise.resolve({ migrated: false, reason: 'done' });
    }
    var raw = storageGet('cupid_gallery');
    if (!raw) {
      storageSet(MIGRATION_KEY, '1');
      return Promise.resolve({ migrated: false, reason: 'empty' });
    }
    var data;
    try { data = JSON.parse(raw); } catch (_) {
      storageSet(MIGRATION_KEY, '1');
      return Promise.resolve({ migrated: false, reason: 'parse' });
    }
    var assets = collectAssetsFromGalleryData(data);
    return queueUnlock(assets).then(function (result) {
      if (!result.error) storageSet(MIGRATION_KEY, '1');
      return { migrated: true, count: assets.length, result: result };
    });
  }

  function unlockCharacterMet(charId) {
    if (!charId) return Promise.resolve();
    return queueUnlock([characterExpressionAsset(charId, 'normal')]);
  }

  function unlockExpression(charId, expression) {
    if (!charId || !expression) return Promise.resolve();
    return queueUnlock([characterExpressionAsset(charId, expression)]);
  }

  function unlockCG(cgId) {
    if (!cgId) return Promise.resolve();
    var stack = '';
    try { stack = new Error().stack || ''; } catch (_) {}
    if (!/(?:SceneRenderer|gallery-progress|gallery-ui-cg)\.js/.test(stack)) return Promise.resolve();
    return queueUnlock([cgAsset(cgId)]);
  }

  function syncFromProgressObject(data) {
    return queueUnlock(collectAssetsFromGalleryData(data));
  }

  function loadImageWithMediaFallback(img, rawPath, onload, onerror, options) {
    if (!img) return;
    var generation = (img.__cupidLoadGeneration || 0) + 1;
    img.__cupidLoadGeneration = generation;
    // Keep the visible portrait until its replacement is ready; stale loads cannot win.
    if (options?.preservePrevious && img.getAttribute?.('src') && global.Image) {
      var pending = new global.Image();
      loadImageWithMediaFallback(pending, rawPath, async function () {
        if (img.__cupidLoadGeneration !== generation) return;
        if (img.src === pending.src) return;
        var animate = img.naturalWidth > 0 && img.parentElement && typeof img.animate === 'function'
          && !global.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
        if (animate && img.__cupidExpressionAnimation?.playState === 'running') {
          await img.__cupidExpressionAnimation.finished.catch(function () {});
          if (img.__cupidLoadGeneration !== generation || img.isConnected === false) return;
        }
        if (animate) {
          var old = img.cloneNode(false);
          old.removeAttribute('id'); old.removeAttribute('alt'); old.setAttribute('aria-hidden', 'true');
          old.classList.remove('cupid-expression-gradient-in');
          old.classList.add('cupid-expression-outgoing', 'cupid-expression-gradient-out');
          Object.assign(old.style, { position: 'absolute', left: img.offsetLeft + 'px', top: img.offsetTop + 'px',
            width: img.offsetWidth + 'px', height: img.offsetHeight + 'px', maxWidth: 'none', maxHeight: 'none',
            pointerEvents: 'none', zIndex: '2', transition: 'none', opacity: '1' });
          img.parentElement.appendChild(old);
          var timing = { duration: 1500, easing: 'cubic-bezier(0.4, 0, 0.2, 1)' };
          old.animate([
            { opacity: 1, filter: 'blur(0px) brightness(1)', maskPosition: '0% 100%', webkitMaskPosition: '0% 100%' },
            { opacity: 0.75, filter: 'blur(1px) brightness(1.02)', offset: 0.48 },
            { opacity: 0, filter: 'blur(3px) brightness(1.04)', maskPosition: '0% 0%', webkitMaskPosition: '0% 0%' }
          ], { ...timing, fill: 'forwards' }).finished.then(function () { old.remove(); }, function () { old.remove(); });
          var veil = document.createElement('div');
          veil.className = 'cupid-expression-gradient-veil';
          veil.setAttribute('aria-hidden', 'true');
          Object.assign(veil.style, { left: img.offsetLeft + 'px', top: img.offsetTop + 'px',
            width: img.offsetWidth + 'px', height: img.offsetHeight + 'px' });
          img.parentElement.appendChild(veil);
          veil.animate([
            { opacity: 0, transform: 'translateY(-38%)' },
            { opacity: 0.38, offset: 0.5 },
            { opacity: 0, transform: 'translateY(38%)' }
          ], { ...timing, fill: 'forwards' }).finished.then(function () { veil.remove(); }, function () { veil.remove(); });
          img.classList.add('cupid-expression-gradient-in');
          img.__cupidExpressionAnimation = img.animate([
            { opacity: 0, filter: 'blur(4px) saturate(1.12)', maskPosition: '0% 100%', webkitMaskPosition: '0% 100%' },
            { opacity: 0.45, filter: 'blur(1px) saturate(1.02)', offset: 0.5 },
            { opacity: 1, filter: 'blur(0px) saturate(1)', maskPosition: '0% 0%', webkitMaskPosition: '0% 0%' }
          ], timing);
          img.__cupidExpressionAnimation.finished.then(function () {
            img.classList.remove('cupid-expression-gradient-in');
          }, function () { img.classList.remove('cupid-expression-gradient-in'); });
        } else {
          img.__cupidExpressionAnimation?.cancel?.();
          img.classList?.remove('cupid-expression-gradient-in');
          img.parentElement?.querySelectorAll?.('.cupid-expression-outgoing, .cupid-expression-gradient-veil').forEach(function (node) { node.remove(); });
        }
        img.onload = onload || null;
        img.onerror = onerror || null;
        img.src = pending.src;
      }, function () {
        if (img.__cupidLoadGeneration === generation && onerror) onerror();
      });
      return;
    }
    var source = rawPath;
    if (typeof source === 'string' && source.indexOf('/api/media?') !== -1) {
      source = logicalFromAny(source) || source;
    }
    if (!isProtectedPath(source)) {
      var plain = resolveUrl(source);
      var webp = plain.replace(/\.(png|jpg|jpeg)(\?|$)/i, '.webp$2');
      if (webp !== plain) {
        img.onerror = function () {
          img.onerror = onerror || null;
          img.onload = onload || null;
          img.src = plain;
        };
        img.onload = onload || null;
        img.src = webp;
      } else {
        img.onload = onload || null;
        img.onerror = onerror || null;
        img.src = plain;
      }
      return;
    }

    var logical = toLogicalAssetId(source);
    function show() {
      if (img.__cupidLoadGeneration !== generation) return;
      img.decoding = 'async';
      img.onload = function () {
        var ready = typeof img.decode === 'function' ? img.decode() : Promise.resolve();
        ready.catch(function () {}).then(function () {
          if (img.__cupidLoadGeneration === generation && onload) onload();
        });
      };
      img.onerror = function () {
        if (img.__cupidLoadGeneration === generation && onerror) onerror();
      };
      img.src = mediaUrl(logical, '.webp');
    }
    // Reads, recovery and preloading never create an unlock. Only explicit game
    // progression may enqueue a grant; wait for that grant if it is in flight.
    if (isPublicLogical(logical)) show();
    else ensureSession().then(function () { return unlockPromises[logical]; }).then(show).catch(function () {
      if (img.__cupidLoadGeneration === generation && onerror) onerror();
    });
  }

  function preloadUnlocked(assets) {
    if (!global.Image || global.navigator?.connection?.saveData) return;
    (assets || []).slice(0, 2).forEach(function (asset) {
      var id = logicalFromAny(asset);
      if (!id || (!isPublicLogical(id) && !knownUnlocked[id])) return;
      var url = mediaUrl(id);
      if (preparedImages.has(url) || preparingCount >= 2) return;
      var img = new global.Image();
      preparingCount += 1;
      preparedImages.set(url, img);
      while (preparedImages.size > 4) preparedImages.delete(preparedImages.keys().next().value);
      loadImageWithMediaFallback(img, id, function () { preparingCount -= 1; }, function () {
        preparingCount -= 1;
        preparedImages.delete(url);
      });
    });
  }

  function hydrateProtectedImages(root) {
    if (typeof document === 'undefined' || !document.querySelectorAll) return;
    var scope = root && root.querySelectorAll ? root : document;
    var imgs = scope.querySelectorAll('img');
    for (var i = 0; i < imgs.length; i++) {
      var img = imgs[i];
      if (img.getAttribute('data-cupid-hydrated') === '1') continue;
      var asset = img.getAttribute('data-cupid-asset') || img.getAttribute('src') || '';
      if (!asset || asset.indexOf('/api/media?') !== -1 || asset.indexOf('data:') === 0) continue;
      if (!isProtectedPath(asset)) continue;
      img.setAttribute('data-cupid-hydrated', '1');
      loadImageWithMediaFallback(img, asset);
    }
  }

  var api = {
    getGuestId: getGuestId,
    ensureSession: ensureSession,
    preloadUnlocked: preloadUnlocked,
    isProtectedPath: isProtectedPath,
    isPublicLogical: isPublicLogical,
    toLogicalAssetId: toLogicalAssetId,
    mediaUrl: mediaUrl,
    preferWebpUrl: preferWebpUrl,
    resolveUrl: resolveUrl,
    placeholderUrl: placeholderUrl,
    unlock: queueUnlock,
    unlockCharacterMet: unlockCharacterMet,
    unlockExpression: unlockExpression,
    unlockCG: unlockCG,
    migrateFromLocalGallery: migrateFromLocalGallery,
    syncFromProgressObject: syncFromProgressObject,
    loadImageWithMediaFallback: loadImageWithMediaFallback,
    hydrateProtectedImages: hydrateProtectedImages,
    PLACEHOLDER: PLACEHOLDER
  };

  global.CupidMedia = api;
  recallUnlocks();

  // Boot migrate shortly after load (storage + GalleryData may appear later).
  function bootMigrate() {
    hydrateProtectedImages();
    ensureSession().then(migrateFromLocalGallery).catch(function () {});
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      setTimeout(bootMigrate, 0);
    });
  } else {
    setTimeout(bootMigrate, 0);
  }
})(typeof window !== 'undefined' ? window : globalThis);
