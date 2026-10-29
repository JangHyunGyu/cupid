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
  var MEDIA_VERSIONS = {"background/dain_depression_event1":"7ee4549e9c01d86d8ceddab7","background/dain_hurt_event1":"03c309e91448e74d0f6524af","background/ending_alone":"be11653d9adf4a7b306b9f91","background/ending_bittersweet":"51eab37dfe08db46f30d72a8","background/ending_bittersweet_nurse":"3d0e4a5f18806c68e6be9014","background/ending_bittersweet_teacher":"39233a3911500d9e632dc38b","background/ending_confess_fail_dain":"787b7ab28af2ca24cc4a6fad","background/ending_confess_fail_seoyeon":"73831ccd142f8a97d9e6183a","background/ending_confess_fail_yuna":"e32c7f7a67d89e96a8edef1d","background/ending_friend":"3d8c2f3494301d31d369e80a","background/ending_good_dain":"209cb4651368bfa637e273d5","background/ending_good_nurse":"753c7a2e322c44c535de071b","background/ending_good_seoyeon":"9619f8ad7d14301d96d44b24","background/ending_good_teacher":"2e6dd0c2716bf020f13cb957","background/ending_good_yuna":"09c67542dd7e066422d1843e","background/ending_harem":"00fc46d686b1dc0881557efe","background/ending_mayhem":"eebc0728b58bcec16e108f4f","background/ending_perfect_dain":"750033d2213d9d0240fdf07a","background/ending_perfect_haeun":"9903cd5bf1aa4e4465484b0e","background/ending_perfect_nurse":"2efe79fb6a3ccaa6bfc42ec5","background/ending_perfect_seoyeon":"513a2715bac51c0b403407ed","background/ending_perfect_teacher":"fe8877f9d320958a916ec193","background/ending_perfect_yuna":"d474988bda580a4fa93e9bdb","background/ending_true_dain":"208f6d687989178581114801","background/ending_true_nurse":"4727b2407b6623fd802285f8","background/ending_true_seoyeon":"edda8686b4b472e5099da930","background/ending_true_teacher":"14adfae607797f5fccdf601c","background/ending_true_yuna":"81604f5804f639ca8f67601c","background/event_haeun_reputation":"8b2edb7e9c3b3b7c804362ba","background/event_haeun_trust":"080f10ba1c95792d44d0de72","background/event_seoyeon_succulent":"839c54f07fdfee9f1a6c6cf0","background/event_temptation_dain":"ea1f573b313ef7004b352a28","background/event_temptation_seoyeon":"139380703754eeefce44522d","background/event_temptation_yuna":"a3c33707fefd16c91df8d4cf","background/event_yuna_reading":"f9fe8aae463477345c4cd825","background/nurse_home_event1":"8fb762c5beb1d01ee83bc97b","characters/dain_active":"a1c0dfa5277675f50681b6cd","characters/dain_aegyo":"818bf707a77397541f6c7289","characters/dain_ahegao":"a68949dbd1c9fcfa34265953","characters/dain_angry":"f66c1600aac2cf2fe6cd55f3","characters/dain_bikini":"675d1a52cea84edc24dddd5f","characters/dain_choking":"7e6b8526baf22a3b8706bd4a","characters/dain_climax":"485ab7590abb2ebcd451033f","characters/dain_climax_02":"cad9f9740792d1ee970c80dc","characters/dain_climax_03":"cfe7ef8f4bb895ce9ed0fdec","characters/dain_climax_04":"19b5c845101081f23daa0c46","characters/dain_climax_05":"66380ba419a5becc641d8e6b","characters/dain_climax_06":"b9695a15fa4beca006875e1e","characters/dain_climax_07":"3187754841038279709b6a84","characters/dain_climax_08":"ea3329c92e3c01012d14a7e3","characters/dain_climax_09":"8e93a8d4651ad495b1f54e0c","characters/dain_climax_10":"66e70ada76db9d1d8a0555e7","characters/dain_climax_11":"a2d3df82fa2ac0f3038ccdf1","characters/dain_confused":"d302245de84924ff52f32f92","characters/dain_cry":"08d87a65fd4c18de3cfad56c","characters/dain_date_angry":"024d8d0bdcdd97685d30f3ed","characters/dain_date_laugh":"6964739037161705c0b6f8fb","characters/dain_date_normal":"d782c4080792d0bf492c8f61","characters/dain_date_sad":"eddcba5f443e55c35cf46604","characters/dain_date_shy":"ead66f6bb570deb4fcb1de76","characters/dain_date_sweat":"df8e862d958ddfb91dc90ba7","characters/dain_dazed":"2ffb37de78f3fe1d035ce855","characters/dain_dead":"3f795e5ebc625d1d2d3420af","characters/dain_disgusted":"08872bafc06d7be1ed376630","characters/dain_exhausted":"6e21496029af30203932f9fa","characters/dain_fainted":"4462d99bb83e033f4a6b8352","characters/dain_flushed":"2d73371b9d4955cf85c73586","characters/dain_furious":"bbc6e6844c5ff0d3e1b03831","characters/dain_laugh":"c3e5e90d26b45186d2574ecd","characters/dain_normal":"3dce26ce40f148d11888b8ed","characters/dain_pain":"3098b02efabd0d90966d76f3","characters/dain_pout":"d61eac7259237e9282829ad2","characters/dain_relieved":"911cb43031061f15eb3de844","characters/dain_sad":"06fa16f733055ffa974cdef6","characters/dain_scared":"ed9ca94d6f7744227020d7d8","characters/dain_scream":"57f2f4274a3bbb682de5eade","characters/dain_shy":"c87a3b1452ff0f7c858b12ab","characters/dain_smile":"b1ff2fe70c7be4c9a3e36363","characters/dain_smirk":"de23d497945ad0bf9904be2a","characters/dain_sob":"a1a0c23088cd568de8832cac","characters/dain_soft_smile":"de77743dc1644c9a3a87864e","characters/dain_surprised":"8ef3afbff0d48c6d9009219d","characters/dain_sweat":"d5b5a8aa4c1272f03da30dfc","characters/dain_worried":"53cade0910d5b1954bba9da3","characters/haeun_aegyo":"376a6a6666d584331db45c4d","characters/haeun_ahegao":"b753c25ae6b0c738337ea8e7","characters/haeun_angry":"249dd66e877e845e4daad8ec","characters/haeun_choking":"ad02e88dcf1f365bc7785fbe","characters/haeun_climax":"e885a5d60fe0d8352a88c3a2","characters/haeun_climax_02":"4b05a1207a59fc162daa3dd1","characters/haeun_climax_03":"c8d4c33c4eb3a99309d66662","characters/haeun_climax_04":"72f6ad4f29cfd6f7d02ce72f","characters/haeun_climax_05":"54f546de462a27e92b7f9136","characters/haeun_climax_06":"b2113bf703776bbc91884328","characters/haeun_climax_07":"6a1d13d753d1c6bc5c45bd7b","characters/haeun_climax_08":"a9618e92368557e49e04defd","characters/haeun_confused":"72b3a06b6b3cd1fbaa78e699","characters/haeun_cry":"2fa38158b83e6bd4a4b7fa7a","characters/haeun_dazed":"d38b67fdf89b0d5e61abbc8e","characters/haeun_dead":"9e941c156cb408242c8107df","characters/haeun_disgusted":"ea6639685aca0597ed0bda14","characters/haeun_exhausted":"310f514f61ef57b6245e5aa2","characters/haeun_fainted":"32f52b05843bbfa63689bf7d","characters/haeun_firm":"9143dfe9bd50c92b8e53976f","characters/haeun_flushed":"682081a779ef728011154f24","characters/haeun_furious":"4802e22f024a86f984611380","characters/haeun_laugh":"6eb503b1c88883708c62ba9c","characters/haeun_normal":"085a2efeb4fff5f11a04a8c1","characters/haeun_pain":"35409d248af1607de2a80e37","characters/haeun_pout":"a6ceb1a375b73e2c55dc44e5","characters/haeun_relieved":"73f1a4e6524dd6cf92938beb","characters/haeun_sad":"91bbc1ba21925c266c155c92","characters/haeun_scared":"8dbab2a87b24c5e4a2998c28","characters/haeun_scream":"f24d4055a02bb622469d2a85","characters/haeun_shy":"e5c7155323bc5af3b7a5daae","characters/haeun_smile":"9b7beee792e87070936f4822","characters/haeun_smirk":"8000ac7b3770aaca4d0aab70","characters/haeun_sob":"b53e5f6dfcc5ba89d684e6d0","characters/haeun_soft_smile":"fac83105ac42f64a3eb32a79","characters/haeun_surprised":"5f8a5606ba895014712f2817","characters/haeun_worried":"daae5fcbd606c9abafa484f2","characters/junho_awkward":"3875a3c4f0ed9f307c194a45","characters/junho_normal":"64a502d5f325cddc2fdecb76","characters/minsu_aegyo":"c783c7c34654c1adfe7e4547","characters/minsu_choking":"9085336ffa260be8669db70a","characters/minsu_climax":"75f1657089cb3384d4603ad1","characters/minsu_climax_02":"7f2fb07b1fdf7954d995f1a0","characters/minsu_climax_03":"324fbe6e0bb92346b71bda44","characters/minsu_climax_04":"6d9f2b3a44e86102ba0c7af2","characters/minsu_climax_05":"ff8f171fcddae4719c9d3260","characters/minsu_climax_06":"42d1a771c4d67c2bc4584dc7","characters/minsu_confused":"c0b801a270c0ece7f83c58d9","characters/minsu_cry":"a73c159b7724cd2e2db3d68d","characters/minsu_dazed":"11bfbc4397fba71acc08d5b4","characters/minsu_dead":"480b0387aebdf794338d9e78","characters/minsu_disgusted":"2ee36df04fe8852a0eb5186e","characters/minsu_exhausted":"14d70d3c78bf382f5bcebbd1","characters/minsu_fainted":"4f2caa28d6b5d69200f60a8b","characters/minsu_furious":"e8585707df0e0165addd67b4","characters/minsu_normal":"78f0752a9ade0f2047a2d644","characters/minsu_pain":"3d0f0830ad6a13797883f726","characters/minsu_relieved":"c15d3e358f440638997614f3","characters/minsu_scared":"b783c284b163a3c03dcdcbbc","characters/minsu_scream":"f70ba38f446f76be31816219","characters/minsu_smirk":"e7f382060afa06f790d3411e","characters/minsu_sob":"71c9780a91b9c5e6ea47623d","characters/minsu_surprised":"a351f8a2bb0c5c98e1d4cb64","characters/nurse_aegyo":"43169ee9e8a0fe43a64ad24a","characters/nurse_ahegao":"239b6e7afbff3f283bcf1e4f","characters/nurse_angry":"e57983dc82405e43d23c095d","characters/nurse_bikini":"2d02c75d38dad14d33e150df","characters/nurse_choking":"9b18e27d100f5df5a925a761","characters/nurse_climax":"7ce39601f18ec17a78e743f3","characters/nurse_climax_02":"ed3b58f2515b2b7270b27cc2","characters/nurse_climax_03":"2aca331665bb6a60d2225cda","characters/nurse_climax_04":"07e0d4aef56d4b80da20da9a","characters/nurse_climax_05":"8c4816f3610d99d21638c3e7","characters/nurse_climax_06":"972921eb7895ea744f362000","characters/nurse_climax_07":"5576f8aab199cd1ba12beb62","characters/nurse_climax_08":"800448023bd1f85a2a61ebfc","characters/nurse_climax_09":"74adec4d32ef0ea9a0ed8d2a","characters/nurse_confused":"bb177d5333e2170fceb8fdaa","characters/nurse_cry":"323429ad8f1339b9848ba5f5","characters/nurse_dazed":"79cfaa70a69fa732c0c4fb56","characters/nurse_dead":"fa758c0b5c843f6757c036ed","characters/nurse_disgusted":"59bc9fa6d7092fb6dce9978b","characters/nurse_dry_smile":"c146ea09ba948b090538e658","characters/nurse_exhausted":"f76e0a02757b89893201bfc5","characters/nurse_fainted":"f45d951353590445848dda10","characters/nurse_flushed":"224764f13646fd3139125f4d","characters/nurse_furious":"13d881765125bc696d64d9a1","characters/nurse_home_angry":"db8cbf4a26c7f8d831487144","characters/nurse_home_normal":"e01a2a6ac48b6b1606659c2e","characters/nurse_home_sad":"4084dd26170aac104fc204b8","characters/nurse_home_shy":"cce951c843c185676210146e","characters/nurse_home_smile":"5eebf77d6e26654054695772","characters/nurse_laugh":"1359ccfdb7ca70ccddd1c497","characters/nurse_normal":"54ca47f9fab602e7364651c1","characters/nurse_pain":"eb95b9f937b404f7f26f81c0","characters/nurse_pout":"da9d3a46a343402a41b0bf0e","characters/nurse_relieved":"8a0b0012609d63d2c6d62634","characters/nurse_sad":"952e508e2a9acc8d496ddace","characters/nurse_scared":"989efe133a7bb84595923edd","characters/nurse_scream":"5af9826f0194f38f0364c5e2","characters/nurse_shy":"6d8d734d908ae5ece3efc55c","characters/nurse_smile":"7df71853f605f3d9dd968f7d","characters/nurse_smirk":"a70a5a6a670659a9e60eab43","characters/nurse_sob":"94f09e1148075f077144eed4","characters/nurse_soft_smile":"9704c698fd5b3f32c15cd6e9","characters/nurse_surprised":"7932235e64bfd898cebabaef","characters/nurse_tired":"c6f167664634d9b082ce597d","characters/nurse_worried":"b7886813bd64ed96b4b9c5dd","characters/seyoun_aegyo":"2a11e79f81ebacf001254f28","characters/seyoun_ahegao":"7f3b21ae9550f8f892f3c3ee","characters/seyoun_angry":"6892890f70a076798a84cb5f","characters/seyoun_back":"f07695d181f1c620f1fd53f7","characters/seyoun_bikini":"811254edce80a69af5e46c3b","characters/seyoun_choking":"b9822f42c9ef197a8ceff1cb","characters/seyoun_climax":"85e00e9bcc305d19e63843a1","characters/seyoun_climax_02":"d4514ee19b29ecd67e455db4","characters/seyoun_climax_03":"0dfe052ceb1ce47fb35f17c3","characters/seyoun_climax_04":"63fb97f3072881e9311dfe45","characters/seyoun_climax_05":"3fc5b820197ac944627c5016","characters/seyoun_climax_06":"c46874bf163c750b8d8d2328","characters/seyoun_confused":"ed3d9187907db8ad44115365","characters/seyoun_cry":"33543af77582921e590d1c59","characters/seyoun_date_laugh":"24525dbc932cece55ec0c5ab","characters/seyoun_date_normal":"bf33bb70ee04538aedc56b7d","characters/seyoun_date_sad":"e49ef8de0c16fa24adc87dbf","characters/seyoun_date_shy":"dc4728fc0d3b6b1c6db73d29","characters/seyoun_date_worried":"cfb2102535e95b5fc466b5b2","characters/seyoun_dazed":"29a1c1f4bfda04f27cc6867b","characters/seyoun_dead":"1b395e050ecce72d43b3fe4a","characters/seyoun_disgusted":"a0c22954b72056ef8693c637","characters/seyoun_exhausted":"f0c487af718dff86eb2cee72","characters/seyoun_fainted":"3d865db86491a9a3ba1bce4d","characters/seyoun_flushed":"5543076fd54f98f308266cc4","characters/seyoun_flushed_02":"723d0fff02994a045056a9ce","characters/seyoun_flushed_03":"04c3d54b1690d6925d4de773","characters/seyoun_flushed_04":"04649a44e4abce6ad3c823cc","characters/seyoun_flushed_05":"ebc931f36952fd2fd06f7571","characters/seyoun_flushed_06":"2a280e6553242ce5b85cf9f5","characters/seyoun_furious":"11f56d12a78197cc82764472","characters/seyoun_laugh":"6059a840fe65aec63b73be57","characters/seyoun_normal":"456519db28cab87d73be93f3","characters/seyoun_pain":"0c56400d1dc1232463178d0e","characters/seyoun_pout":"c0ddcfedbe8a20cc0c9ec3e7","characters/seyoun_relieved":"cbf5c30e6bf4ae65f92f5349","characters/seyoun_sad":"82567c7b21bfa6e9bbc6babe","characters/seyoun_scared":"e90fa5bd932b6703208bfef9","characters/seyoun_scream":"2cf6478ac4c442f6ccc5fd60","characters/seyoun_shy":"f801eecb2ccd228d45aa18b5","characters/seyoun_smile":"38980491fe918a98c47989ae","characters/seyoun_smirk":"110edc1ba3a235657a24c682","characters/seyoun_sob":"bd9b7593f2c0b18f942c8524","characters/seyoun_soft_smile":"9df428f596a110730a051512","characters/seyoun_surprised":"9aa66ae3ae832a82726cbe0f","characters/seyoun_very_shy":"61f4f599624db6f1364bbbfe","characters/seyoun_worried":"c9dde8ff0d8f06e5c0f7e32b","characters/teacher_aegyo":"2203c982bd52480b13c74e94","characters/teacher_ahegao":"5b38c9c06b0190d028b16cdd","characters/teacher_angry":"e4898e8952dae2ebf91b0578","characters/teacher_bikini":"e28249e4880d2192538f472a","characters/teacher_choking":"e39e7bc02454f91a8938ca9b","characters/teacher_climax":"dcf95ac85494c9907074aac9","characters/teacher_climax_02":"298335e8675f26d1c4d0555a","characters/teacher_climax_03":"c9980c77defad1e06f3edde1","characters/teacher_climax_04":"696a607be83d29d84e3a59bc","characters/teacher_climax_05":"5b334e2a31df7c3f9dab9a0b","characters/teacher_climax_06":"e559ef65e3420eddf817f813","characters/teacher_climax_07":"779bd708e05f73f9e04fd4c1","characters/teacher_climax_08":"effc46f20f3d0a569c93dead","characters/teacher_climax_09":"51ae68ee6e9bfee9fafd5899","characters/teacher_climax_10":"54213b2f465078f58b0da31d","characters/teacher_confused":"60457ffa23d580f9c9d34368","characters/teacher_cry":"dfe8357bab71017cf2ab88e6","characters/teacher_dazed":"6dbcb649216b5a91e30d9b46","characters/teacher_dead":"338374dcb19e584b6cb4ea51","characters/teacher_disgusted":"fd353eddea3a0b57b3aec61d","characters/teacher_exhausted":"d74a9830db73234054cc6c90","characters/teacher_fainted":"f6f266bcb145e436776197c5","characters/teacher_flushed":"c5007cb88da74c293fb38aad","characters/teacher_furious":"d58709a2f401de54aecdef56","characters/teacher_laugh":"776abeb9f0f7130a9deb0127","characters/teacher_normal":"41d9cdc0b18caf041634af03","characters/teacher_pain":"3fb8718649c6b339ea3a0611","characters/teacher_pout":"64a1b7ef94e1399bf54407cb","characters/teacher_relieved":"b3b014f48cce23fc651c5c9e","characters/teacher_sad":"84fdf0fc2607c26a916eea70","characters/teacher_scared":"118bd06df49e8a358c82294b","characters/teacher_scream":"91ef93be882ecd37130f4a38","characters/teacher_shy":"7c11cbbf36d76f81a913d6cc","characters/teacher_smile":"79b756cc5650e9f4cee60659","characters/teacher_smirk":"c9e8d9c5433a978ad950dd84","characters/teacher_sob":"8f5ce497ec2646293b5dd4b1","characters/teacher_soft_smile":"093a4e6ca84248a5d62a805f","characters/teacher_surprised":"1a9fa576bed8a62d4bac6612","characters/teacher_worried":"8752a66f3049b5ac792493c2","characters/yuna_aegyo":"ac5202ddb90c18f734339b0e","characters/yuna_ahegao":"b22783dbe7f87ec566d57fe2","characters/yuna_angry":"7c749b3caeb40b4f4b752825","characters/yuna_bikini":"f7e257282a62e3a43bf17635","characters/yuna_bored":"4a7800c30f5e167f9f7e43f0","characters/yuna_choking":"88cf28bc389c09c4cc4fdc02","characters/yuna_climax":"f1419bced29aa04e2ad031c7","characters/yuna_climax_02":"dd4480d3e430d7e221d48095","characters/yuna_climax_03":"b08d947c502e09ba0ebb4684","characters/yuna_climax_04":"ead331e4fadc3b7994b4c470","characters/yuna_climax_05":"c9792e2798366d1ee0774e5e","characters/yuna_climax_06":"b3bffddb47dea7c2f56ae222","characters/yuna_climax_07":"4ad99cdf49bdfd2ea9e0df5b","characters/yuna_climax_08":"cdbb5ed58661187605af4b6b","characters/yuna_climax_09":"56cbdfc07784c27f54ab6adc","characters/yuna_confused":"ea3c7544abe27ef92b89929f","characters/yuna_cry":"67a0fb2d76936fa7ddf48ff5","characters/yuna_date_bored":"b4b3e3dbd479d98fbcb790a4","characters/yuna_date_normal":"a328f9d1dd21444400ebb7a1","characters/yuna_date_sad":"a9ac81685035d9fb5f397516","characters/yuna_date_shy":"fd3fc9b003e422e805db43d9","characters/yuna_date_smile":"e2bd305d21d97acd4a17fcf6","characters/yuna_dazed":"9cceeb80a9153480cf4e36ed","characters/yuna_dead":"9acb46b2941dad90b1488f20","characters/yuna_disgusted":"b8a2958de153434016ede361","characters/yuna_exhausted":"abcc0bfd58dd8a59c5081582","characters/yuna_fainted":"d3ed90672101d18404f43b5d","characters/yuna_flushed":"368243ce03b9e299ddcda0df","characters/yuna_furious":"c9346d1c74b69e42b3483f94","characters/yuna_gallery_bikini_sexy_20260813":"7cfb2d83e446e8a8da023f1c","characters/yuna_laugh":"fc036373961f3a09d7d8055a","characters/yuna_normal":"afeb6f7addfd9bbd5ed3d570","characters/yuna_pain":"141ddde3084b7398efc4108b","characters/yuna_pout":"0d440806e4f86c8281d267d7","characters/yuna_relieved":"075993a1adbd88c708d4f875","characters/yuna_sad":"c73c2a3d293ec676ad7faaf9","characters/yuna_scared":"d1b36ac0d49998b8000d2fd2","characters/yuna_scream":"7ab6d266dbb33bf861e25dea","characters/yuna_shy":"7de73a6c1803e06fb13e5ad0","characters/yuna_smile":"6830e9e8710b758f8fa19b6e","characters/yuna_smirk":"2458cdec8fef26c762d81b97","characters/yuna_sob":"61c6a81147680d89810592d6","characters/yuna_soft_smile":"26f271eb7ced7ae65688216f","characters/yuna_surprised":"8524acfb8a79c422a01be85d","characters/yuna_worried":"6c68f2e75df4c0f88aefd7aa"};
  var CHARACTER_ASSET_IDS = {"assets/characters/dain/expressions/active/01/sprite":"characters/dain_active","assets/characters/dain/expressions/aegyo/01/sprite":"characters/dain_aegyo","assets/characters/dain/expressions/ahegao/01/sprite":"characters/dain_ahegao","assets/characters/dain/expressions/angry/01/sprite":"characters/dain_angry","assets/characters/dain/expressions/bikini/01/sprite":"characters/dain_bikini","assets/characters/dain/expressions/choking/01/sprite":"characters/dain_choking","assets/characters/dain/expressions/climax/01/sprite":"characters/dain_climax","assets/characters/dain/expressions/climax/02/sprite":"characters/dain_climax_02","assets/characters/dain/expressions/climax/03/sprite":"characters/dain_climax_03","assets/characters/dain/expressions/climax/04/sprite":"characters/dain_climax_04","assets/characters/dain/expressions/climax/05/sprite":"characters/dain_climax_05","assets/characters/dain/expressions/climax/06/sprite":"characters/dain_climax_06","assets/characters/dain/expressions/climax/07/sprite":"characters/dain_climax_07","assets/characters/dain/expressions/climax/08/sprite":"characters/dain_climax_08","assets/characters/dain/expressions/climax/09/sprite":"characters/dain_climax_09","assets/characters/dain/expressions/climax/10/sprite":"characters/dain_climax_10","assets/characters/dain/expressions/climax/11/sprite":"characters/dain_climax_11","assets/characters/dain/expressions/confused/01/sprite":"characters/dain_confused","assets/characters/dain/expressions/cry/01/sprite":"characters/dain_cry","assets/characters/dain/expressions/dazed/01/sprite":"characters/dain_dazed","assets/characters/dain/expressions/dead/01/sprite":"characters/dain_dead","assets/characters/dain/expressions/disgusted/01/sprite":"characters/dain_disgusted","assets/characters/dain/expressions/exhausted/01/sprite":"characters/dain_exhausted","assets/characters/dain/expressions/fainted/01/sprite":"characters/dain_fainted","assets/characters/dain/expressions/flushed/01/sprite":"characters/dain_flushed","assets/characters/dain/expressions/furious/01/sprite":"characters/dain_furious","assets/characters/dain/expressions/laugh/01/sprite":"characters/dain_laugh","assets/characters/dain/expressions/normal/01/sprite":"characters/dain_normal","assets/characters/dain/expressions/pain/01/sprite":"characters/dain_pain","assets/characters/dain/expressions/pout/01/sprite":"characters/dain_pout","assets/characters/dain/expressions/relieved/01/sprite":"characters/dain_relieved","assets/characters/dain/expressions/sad/01/sprite":"characters/dain_sad","assets/characters/dain/expressions/scared/01/sprite":"characters/dain_scared","assets/characters/dain/expressions/scream/01/sprite":"characters/dain_scream","assets/characters/dain/expressions/shy/01/sprite":"characters/dain_shy","assets/characters/dain/expressions/smile/01/sprite":"characters/dain_smile","assets/characters/dain/expressions/smirk/01/sprite":"characters/dain_smirk","assets/characters/dain/expressions/sob/01/sprite":"characters/dain_sob","assets/characters/dain/expressions/soft_smile/01/sprite":"characters/dain_soft_smile","assets/characters/dain/expressions/surprised/01/sprite":"characters/dain_surprised","assets/characters/dain/expressions/sweat/01/sprite":"characters/dain_sweat","assets/characters/dain/expressions/worried/01/sprite":"characters/dain_worried","assets/characters/dain/outfits/date/expressions/angry/01/sprite":"characters/dain_date_angry","assets/characters/dain/outfits/date/expressions/laugh/01/sprite":"characters/dain_date_laugh","assets/characters/dain/outfits/date/expressions/normal/01/sprite":"characters/dain_date_normal","assets/characters/dain/outfits/date/expressions/sad/01/sprite":"characters/dain_date_sad","assets/characters/dain/outfits/date/expressions/shy/01/sprite":"characters/dain_date_shy","assets/characters/dain/outfits/date/expressions/sweat/01/sprite":"characters/dain_date_sweat","assets/characters/haeun/expressions/aegyo/01/sprite":"characters/haeun_aegyo","assets/characters/haeun/expressions/ahegao/01/sprite":"characters/haeun_ahegao","assets/characters/haeun/expressions/angry/01/sprite":"characters/haeun_angry","assets/characters/haeun/expressions/choking/01/sprite":"characters/haeun_choking","assets/characters/haeun/expressions/climax/01/sprite":"characters/haeun_climax","assets/characters/haeun/expressions/climax/02/sprite":"characters/haeun_climax_02","assets/characters/haeun/expressions/climax/03/sprite":"characters/haeun_climax_03","assets/characters/haeun/expressions/climax/04/sprite":"characters/haeun_climax_04","assets/characters/haeun/expressions/climax/05/sprite":"characters/haeun_climax_05","assets/characters/haeun/expressions/climax/06/sprite":"characters/haeun_climax_06","assets/characters/haeun/expressions/climax/07/sprite":"characters/haeun_climax_07","assets/characters/haeun/expressions/climax/08/sprite":"characters/haeun_climax_08","assets/characters/haeun/expressions/confused/01/sprite":"characters/haeun_confused","assets/characters/haeun/expressions/cry/01/sprite":"characters/haeun_cry","assets/characters/haeun/expressions/dazed/01/sprite":"characters/haeun_dazed","assets/characters/haeun/expressions/dead/01/sprite":"characters/haeun_dead","assets/characters/haeun/expressions/disgusted/01/sprite":"characters/haeun_disgusted","assets/characters/haeun/expressions/exhausted/01/sprite":"characters/haeun_exhausted","assets/characters/haeun/expressions/fainted/01/sprite":"characters/haeun_fainted","assets/characters/haeun/expressions/firm/01/sprite":"characters/haeun_firm","assets/characters/haeun/expressions/flushed/01/sprite":"characters/haeun_flushed","assets/characters/haeun/expressions/furious/01/sprite":"characters/haeun_furious","assets/characters/haeun/expressions/laugh/01/sprite":"characters/haeun_laugh","assets/characters/haeun/expressions/normal/01/sprite":"characters/haeun_normal","assets/characters/haeun/expressions/pain/01/sprite":"characters/haeun_pain","assets/characters/haeun/expressions/pout/01/sprite":"characters/haeun_pout","assets/characters/haeun/expressions/relieved/01/sprite":"characters/haeun_relieved","assets/characters/haeun/expressions/sad/01/sprite":"characters/haeun_sad","assets/characters/haeun/expressions/scared/01/sprite":"characters/haeun_scared","assets/characters/haeun/expressions/scream/01/sprite":"characters/haeun_scream","assets/characters/haeun/expressions/shy/01/sprite":"characters/haeun_shy","assets/characters/haeun/expressions/smile/01/sprite":"characters/haeun_smile","assets/characters/haeun/expressions/smirk/01/sprite":"characters/haeun_smirk","assets/characters/haeun/expressions/sob/01/sprite":"characters/haeun_sob","assets/characters/haeun/expressions/soft_smile/01/sprite":"characters/haeun_soft_smile","assets/characters/haeun/expressions/surprised/01/sprite":"characters/haeun_surprised","assets/characters/haeun/expressions/worried/01/sprite":"characters/haeun_worried","assets/characters/junho/expressions/awkward/01/sprite":"characters/junho_awkward","assets/characters/junho/expressions/normal/01/sprite":"characters/junho_normal","assets/characters/minsu/expressions/aegyo/01/sprite":"characters/minsu_aegyo","assets/characters/minsu/expressions/choking/01/sprite":"characters/minsu_choking","assets/characters/minsu/expressions/climax/01/sprite":"characters/minsu_climax","assets/characters/minsu/expressions/climax/02/sprite":"characters/minsu_climax_02","assets/characters/minsu/expressions/climax/03/sprite":"characters/minsu_climax_03","assets/characters/minsu/expressions/climax/04/sprite":"characters/minsu_climax_04","assets/characters/minsu/expressions/climax/05/sprite":"characters/minsu_climax_05","assets/characters/minsu/expressions/climax/06/sprite":"characters/minsu_climax_06","assets/characters/minsu/expressions/confused/01/sprite":"characters/minsu_confused","assets/characters/minsu/expressions/cry/01/sprite":"characters/minsu_cry","assets/characters/minsu/expressions/dazed/01/sprite":"characters/minsu_dazed","assets/characters/minsu/expressions/dead/01/sprite":"characters/minsu_dead","assets/characters/minsu/expressions/disgusted/01/sprite":"characters/minsu_disgusted","assets/characters/minsu/expressions/exhausted/01/sprite":"characters/minsu_exhausted","assets/characters/minsu/expressions/fainted/01/sprite":"characters/minsu_fainted","assets/characters/minsu/expressions/furious/01/sprite":"characters/minsu_furious","assets/characters/minsu/expressions/normal/01/sprite":"characters/minsu_normal","assets/characters/minsu/expressions/pain/01/sprite":"characters/minsu_pain","assets/characters/minsu/expressions/relieved/01/sprite":"characters/minsu_relieved","assets/characters/minsu/expressions/scared/01/sprite":"characters/minsu_scared","assets/characters/minsu/expressions/scream/01/sprite":"characters/minsu_scream","assets/characters/minsu/expressions/smirk/01/sprite":"characters/minsu_smirk","assets/characters/minsu/expressions/sob/01/sprite":"characters/minsu_sob","assets/characters/minsu/expressions/surprised/01/sprite":"characters/minsu_surprised","assets/characters/nurse/expressions/aegyo/01/sprite":"characters/nurse_aegyo","assets/characters/nurse/expressions/ahegao/01/sprite":"characters/nurse_ahegao","assets/characters/nurse/expressions/angry/01/sprite":"characters/nurse_angry","assets/characters/nurse/expressions/bikini/01/sprite":"characters/nurse_bikini","assets/characters/nurse/expressions/choking/01/sprite":"characters/nurse_choking","assets/characters/nurse/expressions/climax/01/sprite":"characters/nurse_climax","assets/characters/nurse/expressions/climax/02/sprite":"characters/nurse_climax_02","assets/characters/nurse/expressions/climax/03/sprite":"characters/nurse_climax_03","assets/characters/nurse/expressions/climax/04/sprite":"characters/nurse_climax_04","assets/characters/nurse/expressions/climax/05/sprite":"characters/nurse_climax_05","assets/characters/nurse/expressions/climax/06/sprite":"characters/nurse_climax_06","assets/characters/nurse/expressions/climax/07/sprite":"characters/nurse_climax_07","assets/characters/nurse/expressions/climax/08/sprite":"characters/nurse_climax_08","assets/characters/nurse/expressions/climax/09/sprite":"characters/nurse_climax_09","assets/characters/nurse/expressions/confused/01/sprite":"characters/nurse_confused","assets/characters/nurse/expressions/cry/01/sprite":"characters/nurse_cry","assets/characters/nurse/expressions/dazed/01/sprite":"characters/nurse_dazed","assets/characters/nurse/expressions/dead/01/sprite":"characters/nurse_dead","assets/characters/nurse/expressions/disgusted/01/sprite":"characters/nurse_disgusted","assets/characters/nurse/expressions/dry_smile/01/sprite":"characters/nurse_dry_smile","assets/characters/nurse/expressions/exhausted/01/sprite":"characters/nurse_exhausted","assets/characters/nurse/expressions/fainted/01/sprite":"characters/nurse_fainted","assets/characters/nurse/expressions/flushed/01/sprite":"characters/nurse_flushed","assets/characters/nurse/expressions/furious/01/sprite":"characters/nurse_furious","assets/characters/nurse/expressions/laugh/01/sprite":"characters/nurse_laugh","assets/characters/nurse/expressions/normal/01/sprite":"characters/nurse_normal","assets/characters/nurse/expressions/pain/01/sprite":"characters/nurse_pain","assets/characters/nurse/expressions/pout/01/sprite":"characters/nurse_pout","assets/characters/nurse/expressions/relieved/01/sprite":"characters/nurse_relieved","assets/characters/nurse/expressions/sad/01/sprite":"characters/nurse_sad","assets/characters/nurse/expressions/scared/01/sprite":"characters/nurse_scared","assets/characters/nurse/expressions/scream/01/sprite":"characters/nurse_scream","assets/characters/nurse/expressions/shy/01/sprite":"characters/nurse_shy","assets/characters/nurse/expressions/smile/01/sprite":"characters/nurse_smile","assets/characters/nurse/expressions/smirk/01/sprite":"characters/nurse_smirk","assets/characters/nurse/expressions/sob/01/sprite":"characters/nurse_sob","assets/characters/nurse/expressions/soft_smile/01/sprite":"characters/nurse_soft_smile","assets/characters/nurse/expressions/surprised/01/sprite":"characters/nurse_surprised","assets/characters/nurse/expressions/tired/01/sprite":"characters/nurse_tired","assets/characters/nurse/expressions/worried/01/sprite":"characters/nurse_worried","assets/characters/nurse/outfits/home/expressions/angry/01/sprite":"characters/nurse_home_angry","assets/characters/nurse/outfits/home/expressions/normal/01/sprite":"characters/nurse_home_normal","assets/characters/nurse/outfits/home/expressions/sad/01/sprite":"characters/nurse_home_sad","assets/characters/nurse/outfits/home/expressions/shy/01/sprite":"characters/nurse_home_shy","assets/characters/nurse/outfits/home/expressions/smile/01/sprite":"characters/nurse_home_smile","assets/characters/seoyeon/expressions/aegyo/01/sprite":"characters/seyoun_aegyo","assets/characters/seoyeon/expressions/ahegao/01/sprite":"characters/seyoun_ahegao","assets/characters/seoyeon/expressions/angry/01/sprite":"characters/seyoun_angry","assets/characters/seoyeon/expressions/back/01/sprite":"characters/seyoun_back","assets/characters/seoyeon/expressions/bikini/01/sprite":"characters/seyoun_bikini","assets/characters/seoyeon/expressions/choking/01/sprite":"characters/seyoun_choking","assets/characters/seoyeon/expressions/climax/01/sprite":"characters/seyoun_climax","assets/characters/seoyeon/expressions/climax/02/sprite":"characters/seyoun_climax_02","assets/characters/seoyeon/expressions/climax/03/sprite":"characters/seyoun_climax_03","assets/characters/seoyeon/expressions/climax/04/sprite":"characters/seyoun_climax_04","assets/characters/seoyeon/expressions/climax/05/sprite":"characters/seyoun_climax_05","assets/characters/seoyeon/expressions/climax/06/sprite":"characters/seyoun_climax_06","assets/characters/seoyeon/expressions/confused/01/sprite":"characters/seyoun_confused","assets/characters/seoyeon/expressions/cry/01/sprite":"characters/seyoun_cry","assets/characters/seoyeon/expressions/dazed/01/sprite":"characters/seyoun_dazed","assets/characters/seoyeon/expressions/dead/01/sprite":"characters/seyoun_dead","assets/characters/seoyeon/expressions/disgusted/01/sprite":"characters/seyoun_disgusted","assets/characters/seoyeon/expressions/exhausted/01/sprite":"characters/seyoun_exhausted","assets/characters/seoyeon/expressions/fainted/01/sprite":"characters/seyoun_fainted","assets/characters/seoyeon/expressions/flushed/01/sprite":"characters/seyoun_flushed","assets/characters/seoyeon/expressions/flushed/02/sprite":"characters/seyoun_flushed_02","assets/characters/seoyeon/expressions/flushed/03/sprite":"characters/seyoun_flushed_03","assets/characters/seoyeon/expressions/flushed/04/sprite":"characters/seyoun_flushed_04","assets/characters/seoyeon/expressions/flushed/05/sprite":"characters/seyoun_flushed_05","assets/characters/seoyeon/expressions/flushed/06/sprite":"characters/seyoun_flushed_06","assets/characters/seoyeon/expressions/furious/01/sprite":"characters/seyoun_furious","assets/characters/seoyeon/expressions/laugh/01/sprite":"characters/seyoun_laugh","assets/characters/seoyeon/expressions/normal/01/sprite":"characters/seyoun_normal","assets/characters/seoyeon/expressions/pain/01/sprite":"characters/seyoun_pain","assets/characters/seoyeon/expressions/pout/01/sprite":"characters/seyoun_pout","assets/characters/seoyeon/expressions/relieved/01/sprite":"characters/seyoun_relieved","assets/characters/seoyeon/expressions/sad/01/sprite":"characters/seyoun_sad","assets/characters/seoyeon/expressions/scared/01/sprite":"characters/seyoun_scared","assets/characters/seoyeon/expressions/scream/01/sprite":"characters/seyoun_scream","assets/characters/seoyeon/expressions/shy/01/sprite":"characters/seyoun_shy","assets/characters/seoyeon/expressions/smile/01/sprite":"characters/seyoun_smile","assets/characters/seoyeon/expressions/smirk/01/sprite":"characters/seyoun_smirk","assets/characters/seoyeon/expressions/sob/01/sprite":"characters/seyoun_sob","assets/characters/seoyeon/expressions/soft_smile/01/sprite":"characters/seyoun_soft_smile","assets/characters/seoyeon/expressions/surprised/01/sprite":"characters/seyoun_surprised","assets/characters/seoyeon/expressions/very_shy/01/sprite":"characters/seyoun_very_shy","assets/characters/seoyeon/expressions/worried/01/sprite":"characters/seyoun_worried","assets/characters/seoyeon/outfits/date/expressions/laugh/01/sprite":"characters/seyoun_date_laugh","assets/characters/seoyeon/outfits/date/expressions/normal/01/sprite":"characters/seyoun_date_normal","assets/characters/seoyeon/outfits/date/expressions/sad/01/sprite":"characters/seyoun_date_sad","assets/characters/seoyeon/outfits/date/expressions/shy/01/sprite":"characters/seyoun_date_shy","assets/characters/seoyeon/outfits/date/expressions/worried/01/sprite":"characters/seyoun_date_worried","assets/characters/teacher/expressions/aegyo/01/sprite":"characters/teacher_aegyo","assets/characters/teacher/expressions/ahegao/01/sprite":"characters/teacher_ahegao","assets/characters/teacher/expressions/angry/01/sprite":"characters/teacher_angry","assets/characters/teacher/expressions/bikini/01/sprite":"characters/teacher_bikini","assets/characters/teacher/expressions/choking/01/sprite":"characters/teacher_choking","assets/characters/teacher/expressions/climax/01/sprite":"characters/teacher_climax","assets/characters/teacher/expressions/climax/02/sprite":"characters/teacher_climax_02","assets/characters/teacher/expressions/climax/03/sprite":"characters/teacher_climax_03","assets/characters/teacher/expressions/climax/04/sprite":"characters/teacher_climax_04","assets/characters/teacher/expressions/climax/05/sprite":"characters/teacher_climax_05","assets/characters/teacher/expressions/climax/06/sprite":"characters/teacher_climax_06","assets/characters/teacher/expressions/climax/07/sprite":"characters/teacher_climax_07","assets/characters/teacher/expressions/climax/08/sprite":"characters/teacher_climax_08","assets/characters/teacher/expressions/climax/09/sprite":"characters/teacher_climax_09","assets/characters/teacher/expressions/climax/10/sprite":"characters/teacher_climax_10","assets/characters/teacher/expressions/confused/01/sprite":"characters/teacher_confused","assets/characters/teacher/expressions/cry/01/sprite":"characters/teacher_cry","assets/characters/teacher/expressions/dazed/01/sprite":"characters/teacher_dazed","assets/characters/teacher/expressions/dead/01/sprite":"characters/teacher_dead","assets/characters/teacher/expressions/disgusted/01/sprite":"characters/teacher_disgusted","assets/characters/teacher/expressions/exhausted/01/sprite":"characters/teacher_exhausted","assets/characters/teacher/expressions/fainted/01/sprite":"characters/teacher_fainted","assets/characters/teacher/expressions/flushed/01/sprite":"characters/teacher_flushed","assets/characters/teacher/expressions/furious/01/sprite":"characters/teacher_furious","assets/characters/teacher/expressions/laugh/01/sprite":"characters/teacher_laugh","assets/characters/teacher/expressions/normal/01/sprite":"characters/teacher_normal","assets/characters/teacher/expressions/pain/01/sprite":"characters/teacher_pain","assets/characters/teacher/expressions/pout/01/sprite":"characters/teacher_pout","assets/characters/teacher/expressions/relieved/01/sprite":"characters/teacher_relieved","assets/characters/teacher/expressions/sad/01/sprite":"characters/teacher_sad","assets/characters/teacher/expressions/scared/01/sprite":"characters/teacher_scared","assets/characters/teacher/expressions/scream/01/sprite":"characters/teacher_scream","assets/characters/teacher/expressions/shy/01/sprite":"characters/teacher_shy","assets/characters/teacher/expressions/smile/01/sprite":"characters/teacher_smile","assets/characters/teacher/expressions/smirk/01/sprite":"characters/teacher_smirk","assets/characters/teacher/expressions/sob/01/sprite":"characters/teacher_sob","assets/characters/teacher/expressions/soft_smile/01/sprite":"characters/teacher_soft_smile","assets/characters/teacher/expressions/surprised/01/sprite":"characters/teacher_surprised","assets/characters/teacher/expressions/worried/01/sprite":"characters/teacher_worried","assets/characters/yuna/expressions/aegyo/01/sprite":"characters/yuna_aegyo","assets/characters/yuna/expressions/ahegao/01/sprite":"characters/yuna_ahegao","assets/characters/yuna/expressions/angry/01/sprite":"characters/yuna_angry","assets/characters/yuna/expressions/bikini/01/sprite":"characters/yuna_bikini","assets/characters/yuna/expressions/bored/01/sprite":"characters/yuna_bored","assets/characters/yuna/expressions/choking/01/sprite":"characters/yuna_choking","assets/characters/yuna/expressions/climax/01/sprite":"characters/yuna_climax","assets/characters/yuna/expressions/climax/02/sprite":"characters/yuna_climax_02","assets/characters/yuna/expressions/climax/03/sprite":"characters/yuna_climax_03","assets/characters/yuna/expressions/climax/04/sprite":"characters/yuna_climax_04","assets/characters/yuna/expressions/climax/05/sprite":"characters/yuna_climax_05","assets/characters/yuna/expressions/climax/06/sprite":"characters/yuna_climax_06","assets/characters/yuna/expressions/climax/07/sprite":"characters/yuna_climax_07","assets/characters/yuna/expressions/climax/08/sprite":"characters/yuna_climax_08","assets/characters/yuna/expressions/climax/09/sprite":"characters/yuna_climax_09","assets/characters/yuna/expressions/confused/01/sprite":"characters/yuna_confused","assets/characters/yuna/expressions/cry/01/sprite":"characters/yuna_cry","assets/characters/yuna/expressions/dazed/01/sprite":"characters/yuna_dazed","assets/characters/yuna/expressions/dead/01/sprite":"characters/yuna_dead","assets/characters/yuna/expressions/disgusted/01/sprite":"characters/yuna_disgusted","assets/characters/yuna/expressions/exhausted/01/sprite":"characters/yuna_exhausted","assets/characters/yuna/expressions/fainted/01/sprite":"characters/yuna_fainted","assets/characters/yuna/expressions/flushed/01/sprite":"characters/yuna_flushed","assets/characters/yuna/expressions/furious/01/sprite":"characters/yuna_furious","assets/characters/yuna/expressions/gallery_bikini_sexy_20260813/01/sprite":"characters/yuna_gallery_bikini_sexy_20260813","assets/characters/yuna/expressions/laugh/01/sprite":"characters/yuna_laugh","assets/characters/yuna/expressions/normal/01/sprite":"characters/yuna_normal","assets/characters/yuna/expressions/pain/01/sprite":"characters/yuna_pain","assets/characters/yuna/expressions/pout/01/sprite":"characters/yuna_pout","assets/characters/yuna/expressions/relieved/01/sprite":"characters/yuna_relieved","assets/characters/yuna/expressions/sad/01/sprite":"characters/yuna_sad","assets/characters/yuna/expressions/scared/01/sprite":"characters/yuna_scared","assets/characters/yuna/expressions/scream/01/sprite":"characters/yuna_scream","assets/characters/yuna/expressions/shy/01/sprite":"characters/yuna_shy","assets/characters/yuna/expressions/smile/01/sprite":"characters/yuna_smile","assets/characters/yuna/expressions/smirk/01/sprite":"characters/yuna_smirk","assets/characters/yuna/expressions/sob/01/sprite":"characters/yuna_sob","assets/characters/yuna/expressions/soft_smile/01/sprite":"characters/yuna_soft_smile","assets/characters/yuna/expressions/surprised/01/sprite":"characters/yuna_surprised","assets/characters/yuna/expressions/worried/01/sprite":"characters/yuna_worried","assets/characters/yuna/outfits/date/expressions/bored/01/sprite":"characters/yuna_date_bored","assets/characters/yuna/outfits/date/expressions/normal/01/sprite":"characters/yuna_date_normal","assets/characters/yuna/outfits/date/expressions/sad/01/sprite":"characters/yuna_date_sad","assets/characters/yuna/outfits/date/expressions/shy/01/sprite":"characters/yuna_date_shy","assets/characters/yuna/outfits/date/expressions/smile/01/sprite":"characters/yuna_date_smile"};
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


// Decode first and serialize crossfades per image; only the newest request may commit.
async function fadeExpressionImage(image, source, options = {}) {
    if (!image || !source) return false;
    if (image.__expressionTarget === source) return image.__expressionRequest;
    image.__expressionTarget = source;
    const token = image.__expressionToken = (image.__expressionToken || 0) + 1;
    const current = () => token === image.__expressionToken && image.isConnected !== false
        && (!options.isCurrent || options.isCurrent());
    const request = (async () => {
        try {
            if (image.__expressionLoadedSource === source && image.__expressionLoadedURL === image.src) {
                options.onCommit?.(image.src);
                return true;
            }
            let next = source;
            if (options.load) next = await options.load(source);
            else if (typeof Image === 'function') {
                const pending = new Image();
                pending.src = source;
                if (typeof pending.decode === 'function') {
                    try { await pending.decode(); }
                    catch (error) {
                        if (!/\.webp(?=[?#]|$)/i.test(source)) throw error;
                        pending.src = source.replace(/\.webp(?=[?#]|$)/i, '.png');
                        await pending.decode();
                    }
                }
                next = pending.src;
            }
            if (!current()) return false;
            await image.__expressionSwap;
            if (!current()) return false;
            if (image.src === next || image.getAttribute?.('src') === next) {
                image.__expressionLoadedSource = source; image.__expressionLoadedURL = image.src;
                options.onCommit?.(next); return true;
            }
            if (image.getAttribute?.('src') && image.complete === false
                && (image.loading !== 'lazy' || image.getClientRects?.().length)) {
                try { await image.decode?.(); } catch (_) {}
                if (!current()) return false;
            }
            const swap = (async () => {
                const animate = options.animate !== false && image.naturalWidth > 0 && image.parentElement
                    && typeof image.animate === 'function' && typeof image.cloneNode === 'function'
                    && !window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
                let outgoing, incoming, ghost;
                try {
                    if (animate) {
                        const style = window.getComputedStyle(image);
                        ghost = image.cloneNode(false);
                        ghost.removeAttribute('id');
                        ghost.removeAttribute('alt');
                        ghost.setAttribute('aria-hidden', 'true');
                        ghost.classList.add('expression-outgoing');
                        Object.assign(ghost.style, {
                            position: 'absolute', left: `${image.offsetLeft}px`, top: `${image.offsetTop}px`,
                            right: 'auto', bottom: 'auto', margin: '0', width: style.width, height: style.height,
                            minWidth: '0', minHeight: '0', maxWidth: 'none', maxHeight: 'none',
                            boxSizing: style.boxSizing, objectFit: style.objectFit, objectPosition: style.objectPosition,
                            borderRadius: style.borderRadius, transform: style.transform, transformOrigin: style.transformOrigin,
                            translate: style.translate, scale: style.scale, rotate: style.rotate,
                            filter: style.filter, opacity: style.opacity, visibility: 'visible',
                            pointerEvents: 'none', zIndex: '2', transition: 'none', animation: 'none'
                        });
                        ghost.loading = 'eager';
                        await ghost.decode?.();
                        if (!current()) return false;
                        image.parentElement.appendChild(ghost);
                    }
                    image.src = next;
                    image.__expressionLoadedSource = source; image.__expressionLoadedURL = image.src;
                    image.style.display = '';
                    if (options.onCommit) options.onCommit(next);
                    if (animate) {
                        const opacity = Number(window.getComputedStyle(image).opacity);
                        const timing = { duration: 900, easing: 'ease-in-out', fill: 'forwards' };
                        outgoing = ghost.animate([{ opacity: Number(ghost.style.opacity) }, { opacity: 0 }], timing);
                        incoming = image.animate([{ opacity: 0 }, { opacity }], timing);
                        await Promise.all([outgoing.finished, incoming.finished]);
                    }
                    return true;
                } finally { ghost?.remove(); outgoing?.cancel(); incoming?.cancel(); }
            })();
            image.__expressionSwap = swap.catch(() => false);
            return await swap;
        } catch (_) { return false; }
        finally {
            if (token === image.__expressionToken) image.__expressionTarget = null;
        }
    })();
    image.__expressionRequest = request;
    return request;
}

  function loadImageWithMediaFallback(img, rawPath, onload, onerror, options) {
    if (!img) return;
    if (options?.preservePrevious && img.__expressionTarget === rawPath) return img.__expressionRequest;
    var generation = (img.__cupidLoadGeneration || 0) + 1;
    img.__cupidLoadGeneration = generation;
    // Both chat avatars and standing portraits retain their decoded previous frame.
    if (options?.preservePrevious && img.getAttribute?.('src') && global.Image) {
      return fadeExpressionImage(img, rawPath, {
        isCurrent: function () { return img.__cupidLoadGeneration === generation; },
        load: function () { return new Promise(function (resolve, reject) {
          var pending = new global.Image();
          loadImageWithMediaFallback(pending, rawPath, function () {
            Promise.resolve(pending.decode?.()).then(function () { resolve(pending.src); }, reject);
          }, reject);
        }); }
      }).then(function (changed) {
        if (changed && onload) onload();
        else if (!changed && img.__cupidLoadGeneration === generation && onerror) onerror();
      });
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
    fadeExpressionImage: fadeExpressionImage,
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
