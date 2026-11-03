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
  var MEDIA_VERSIONS = {"background/dain_depression_event1":"7ee4549e9c01d86d8ceddab7","background/dain_hurt_event1":"03c309e91448e74d0f6524af","background/ending_alone":"be11653d9adf4a7b306b9f91","background/ending_bittersweet":"51eab37dfe08db46f30d72a8","background/ending_bittersweet_nurse":"3d0e4a5f18806c68e6be9014","background/ending_bittersweet_teacher":"39233a3911500d9e632dc38b","background/ending_confess_fail_dain":"787b7ab28af2ca24cc4a6fad","background/ending_confess_fail_seoyeon":"73831ccd142f8a97d9e6183a","background/ending_confess_fail_yuna":"e32c7f7a67d89e96a8edef1d","background/ending_friend":"3d8c2f3494301d31d369e80a","background/ending_good_dain":"209cb4651368bfa637e273d5","background/ending_good_nurse":"753c7a2e322c44c535de071b","background/ending_good_seoyeon":"9619f8ad7d14301d96d44b24","background/ending_good_teacher":"2e6dd0c2716bf020f13cb957","background/ending_good_yuna":"09c67542dd7e066422d1843e","background/ending_harem":"00fc46d686b1dc0881557efe","background/ending_mayhem":"eebc0728b58bcec16e108f4f","background/ending_perfect_dain":"750033d2213d9d0240fdf07a","background/ending_perfect_haeun":"9903cd5bf1aa4e4465484b0e","background/ending_perfect_nurse":"2efe79fb6a3ccaa6bfc42ec5","background/ending_perfect_seoyeon":"513a2715bac51c0b403407ed","background/ending_perfect_teacher":"fe8877f9d320958a916ec193","background/ending_perfect_yuna":"d474988bda580a4fa93e9bdb","background/ending_true_dain":"208f6d687989178581114801","background/ending_true_nurse":"4727b2407b6623fd802285f8","background/ending_true_seoyeon":"edda8686b4b472e5099da930","background/ending_true_teacher":"14adfae607797f5fccdf601c","background/ending_true_yuna":"81604f5804f639ca8f67601c","background/event_haeun_reputation":"8b2edb7e9c3b3b7c804362ba","background/event_haeun_trust":"080f10ba1c95792d44d0de72","background/event_seoyeon_succulent":"839c54f07fdfee9f1a6c6cf0","background/event_temptation_dain":"ea1f573b313ef7004b352a28","background/event_temptation_seoyeon":"139380703754eeefce44522d","background/event_temptation_yuna":"a3c33707fefd16c91df8d4cf","background/event_yuna_reading":"f9fe8aae463477345c4cd825","background/nurse_home_event1":"8fb762c5beb1d01ee83bc97b","characters/dain_active":"8df3660739d19750c5322d36","characters/dain_aegyo":"b3123804cebdcaed7855eaef","characters/dain_ahegao":"2f8df2acff0d60186b81201b","characters/dain_angry":"e30901a8e56ae4c399ec6f00","characters/dain_bikini":"675d1a52cea84edc24dddd5f","characters/dain_bored":"bfef05e2aa0c8473c0c41364","characters/dain_choking":"111efbdb23dcda2b3710e45b","characters/dain_climax":"42f248cae0dfad2b4b9d7aaf","characters/dain_climax_02":"7577eb1dc8c00ef5045e0674","characters/dain_climax_03":"fba888807db4e3054aee06aa","characters/dain_climax_04":"61e79baf80a62c7dcedb099e","characters/dain_climax_05":"922108538b342392380ec814","characters/dain_climax_06":"7980320ca4348819ee9e3b0d","characters/dain_climax_07":"b84337fe84d1269d1252cd6e","characters/dain_climax_08":"3e22bef374acf2630ccb5540","characters/dain_climax_09":"c1b81e0b9b9a0102b878d2d6","characters/dain_climax_10":"c79a2cc9331e63088c30c5e9","characters/dain_climax_11":"57d2281664f58d7dfdbcc605","characters/dain_confused":"b773b70ec0316e5b203414ba","characters/dain_cry":"bae9e20da8983ae99bde098f","characters/dain_date_angry":"3a8ec02821efc1dcd0f32624","characters/dain_date_laugh":"84721e3d6a3d3b109b2e3bf0","characters/dain_date_normal":"002aa89414f133ed19f79bca","characters/dain_date_sad":"533212f217b7b980f9b612dc","characters/dain_date_shy":"18f95fb503e91db193ce1496","characters/dain_date_sweat":"6d9ab989519f41621e1fdff1","characters/dain_dazed":"af02b7f8d785526e94b7ea29","characters/dain_dead":"3f795e5ebc625d1d2d3420af","characters/dain_disgusted":"983fc9bec4030d7e64cc04fa","characters/dain_dry_smile":"50d9b84997cdec32a8abe07e","characters/dain_dumbfounded":"6b0b2e45a69acefd78268b7d","characters/dain_entranced":"ec03a665bd9175edd8bcaaca","characters/dain_exhausted":"6e12eb6d8bcb9ce74b5b8811","characters/dain_fainted":"9eda447ee07fadc85396b045","characters/dain_firm":"24661e63a4355bdcbe805473","characters/dain_flushed":"057622fb804cfcd77ba70f66","characters/dain_furious":"b1c96657f336b70daadec299","characters/dain_humiliated":"328c0497b09dc28f1ec0bd45","characters/dain_laugh":"9e25a08eae3e61ecd0d50a34","characters/dain_normal":"aa866928e91589693a7807a0","characters/dain_pain":"6e656432474b1f2b02b58e05","characters/dain_pleading":"930c1b92d2f7b73bae06ebcc","characters/dain_pout":"13213b166f347bb5b42de871","characters/dain_provocative":"a1de33793e8ed19e208fcd7a","characters/dain_relieved":"6eb594a93c9a649999adf6ca","characters/dain_sad":"58448a9e8e7f433f847989a9","characters/dain_scared":"ec8c3fbbdf38add95f055703","characters/dain_scream":"79ae94ed89211d1067347901","characters/dain_shy":"133035629211b86cc020b2af","characters/dain_smile":"50f730586e2da287faf760e6","characters/dain_smirk":"739194b94dc6773d727937d1","characters/dain_sob":"78136536b914932f4cebf32b","characters/dain_soft_smile":"fe22f920d31d4364e8cb80c0","characters/dain_surprised":"49ede64d90d669fbea25db7d","characters/dain_sweat":"1d7678801fefaf1f61c8ff29","characters/dain_tired":"220a2248467896c8f4da7c77","characters/dain_very_shy":"b8b6fbd4801a8fff2fe831e4","characters/dain_worried":"0ce2484aef4236b05f8a57b7","characters/haeun_aegyo":"376a6a6666d584331db45c4d","characters/haeun_ahegao":"b753c25ae6b0c738337ea8e7","characters/haeun_angry":"036d66c1d532b41bfbe150a6","characters/haeun_bored":"962f5ae23afe5a4d4fad24f3","characters/haeun_choking":"ad02e88dcf1f365bc7785fbe","characters/haeun_climax":"8b84385603cf7e12a75b83b2","characters/haeun_climax_02":"051b893e73b82dc96202eca0","characters/haeun_climax_03":"5df499ed57e99a9bf8babee2","characters/haeun_climax_04":"bc9e7d413f538334a76192b2","characters/haeun_climax_05":"01ec087a5579c30e0a495de8","characters/haeun_climax_06":"1ce91698c77287f15858775c","characters/haeun_climax_07":"1c1a59dca74d280a54f5347e","characters/haeun_climax_08":"e4fbbf29b815804bb6b35fad","characters/haeun_confused":"72b3a06b6b3cd1fbaa78e699","characters/haeun_cry":"4810b7d83676d01815fdbbe4","characters/haeun_dazed":"d38b67fdf89b0d5e61abbc8e","characters/haeun_dead":"9e941c156cb408242c8107df","characters/haeun_disgusted":"ea6639685aca0597ed0bda14","characters/haeun_dry_smile":"e66f7045d26c3d33cbb23043","characters/haeun_dumbfounded":"bf70142a6cb0209a9242f0bb","characters/haeun_entranced":"d0422328f8e79fb6ec7a89dd","characters/haeun_exhausted":"310f514f61ef57b6245e5aa2","characters/haeun_fainted":"32f52b05843bbfa63689bf7d","characters/haeun_firm":"9143dfe9bd50c92b8e53976f","characters/haeun_flushed":"5ac4fa524c749f79396142de","characters/haeun_furious":"4802e22f024a86f984611380","characters/haeun_humiliated":"8af13d319a436c329cd9a5ef","characters/haeun_laugh":"64a3da6160c3ecd71a2ea5e8","characters/haeun_normal":"085a2efeb4fff5f11a04a8c1","characters/haeun_pain":"35409d248af1607de2a80e37","characters/haeun_pleading":"ee79a210035735b0102229f8","characters/haeun_pout":"b1d79fd6f2fada06274f8870","characters/haeun_provocative":"da18be0339486bc06735434e","characters/haeun_relieved":"73f1a4e6524dd6cf92938beb","characters/haeun_sad":"91f90df176f3aca56f0eceda","characters/haeun_scared":"8dbab2a87b24c5e4a2998c28","characters/haeun_scream":"f24d4055a02bb622469d2a85","characters/haeun_shy":"24888d96c701b16991cc0a92","characters/haeun_smile":"090b932b54e1003c737e592c","characters/haeun_smirk":"8000ac7b3770aaca4d0aab70","characters/haeun_sob":"b53e5f6dfcc5ba89d684e6d0","characters/haeun_soft_smile":"9f3228447ecf5f24be33414c","characters/haeun_surprised":"8554ec890c62c98b91d7413b","characters/haeun_tired":"5b1d608d93002b7181be1f30","characters/haeun_very_shy":"ddea14f72d4ef10a731cfcdb","characters/haeun_worried":"d6af0712d14d24743e178da1","characters/junho_awkward":"be58d501f573405bc8d8c360","characters/junho_normal":"2398d761f42463a9aeac759b","characters/minsu_aegyo":"8e702a391abee235dbeb9e0b","characters/minsu_angry":"3d2df10acdf1afe1f5e68a07","characters/minsu_bored":"7e4f108a1fee9b56c4a85c5e","characters/minsu_choking":"48fd6f9a829b0dd648dbe354","characters/minsu_climax":"7a0238c956ba5067b1b0a7b7","characters/minsu_climax_02":"eb46687afd1c352692620518","characters/minsu_climax_03":"dad7afcf1b8af9857b8933d4","characters/minsu_climax_04":"3339ac6360d893e136c84bb8","characters/minsu_climax_05":"f8e862837a15431dfdf4bd22","characters/minsu_climax_06":"ba77e65206707f1fadf355d8","characters/minsu_confused":"ac8fc53852bfb8627c3c4dfe","characters/minsu_cry":"9da06e4206d47114f983a269","characters/minsu_dazed":"401daf10d3e2c5178339db3b","characters/minsu_dead":"480b0387aebdf794338d9e78","characters/minsu_disgusted":"b39be398fb98244df64d8692","characters/minsu_dry_smile":"3594235795f5cfcb055c3a26","characters/minsu_dumbfounded":"30f4b6b0058cd84c6d9685f4","characters/minsu_entranced":"bdab6cd809d0acb8bbfab7c2","characters/minsu_exhausted":"2977e9bea7a256c41d5fc01c","characters/minsu_fainted":"4f811ba6a973712a3c6fc661","characters/minsu_firm":"b103faa894d860501a87c6f7","characters/minsu_flushed":"57cf8c45ba0f06a5a272cee1","characters/minsu_furious":"a5ed922f6c7314e70a75d121","characters/minsu_humiliated":"9e214db1177f1102f967514d","characters/minsu_laugh":"d2715ed3343d2878056c6f66","characters/minsu_normal":"9340eef2e389ce52cbb86e89","characters/minsu_pain":"0855bcd4cc0f2c50dafc6d90","characters/minsu_pleading":"8ed1fd93cedd05ea676f8586","characters/minsu_pout":"4b65f00d6005910beb6bfe21","characters/minsu_provocative":"0938d5a6ba057cbc8fa94c2c","characters/minsu_relieved":"77ed2df18286f8a75cd5d7cf","characters/minsu_sad":"e45016d67f8e62953c284a90","characters/minsu_scared":"ef2da7b58e1bb0d6c522b6f0","characters/minsu_scream":"fbcf05ee11f891101ad39c3d","characters/minsu_shy":"ea4664aa46dd64b81f5cd501","characters/minsu_smile":"a96a5a66a570ac979184316e","characters/minsu_smirk":"cbfbf65c7649a3c37e5b5885","characters/minsu_sob":"f8de69367a0d07eeed240ea2","characters/minsu_soft_smile":"5c9cd8c294be82986db6c6f2","characters/minsu_surprised":"625e50a73d56913da7901308","characters/minsu_tired":"6665ce62975edf2d9b90c488","characters/minsu_very_shy":"1f37002d276a35d0248ab7b8","characters/minsu_worried":"3c5a452223edc7e24bd9bc93","characters/nurse_aegyo":"9e01d47a022558d6ce0bcbd0","characters/nurse_ahegao":"77b46c3fabdded59695f9fce","characters/nurse_angry":"69fd99691bd904c753cfee9b","characters/nurse_bikini":"2d02c75d38dad14d33e150df","characters/nurse_bored":"27c20187bf0995db82513fbd","characters/nurse_choking":"b61903d6cf156912a719f785","characters/nurse_climax":"0c3d0a2a95296d537417b80d","characters/nurse_climax_02":"4b14eb18464532db0207a215","characters/nurse_climax_03":"5724332c6ca3ded6e9bb94f9","characters/nurse_climax_04":"841fe359d54931067e8646ed","characters/nurse_climax_05":"ccb0e94ba84d1a14d702c973","characters/nurse_climax_06":"d7a59bbd13ab0114a567ad13","characters/nurse_climax_07":"324891fe6882cf796cd24309","characters/nurse_climax_08":"dd06f0009fbde740d7e63f0a","characters/nurse_climax_09":"eaec62d389cf967cad64a8e6","characters/nurse_confused":"bb3a2aa094432a8876fae50b","characters/nurse_cry":"54794ef30ae83508c297a2e6","characters/nurse_dazed":"249f81ac47e70abaf67cea60","characters/nurse_dead":"9b76c3311981e64060386fbc","characters/nurse_disgusted":"35e594ee703662220247de07","characters/nurse_dry_smile":"077add7e41e5196137292da8","characters/nurse_dumbfounded":"71dd51119da2d21c24dcb575","characters/nurse_entranced":"a6ae13f040bd360dcbdd1dfc","characters/nurse_exhausted":"b83c8511e59f64c4fc8bd93c","characters/nurse_fainted":"51270c040b794b145bbad2c1","characters/nurse_firm":"37fa41fc7131699a18b5a4f7","characters/nurse_flushed":"f1ffdbf50556962cc65255b0","characters/nurse_furious":"d622c7a08b0c2a164d894237","characters/nurse_home_angry":"7180adb111668c9b47d676bc","characters/nurse_home_normal":"a278f9b67805061ae4d16a63","characters/nurse_home_sad":"79aac980eb5b33d61f07ad0d","characters/nurse_home_shy":"beaa00342c1a6b13b4de7390","characters/nurse_home_smile":"0b55d698b55b6fc714895988","characters/nurse_humiliated":"69b156582e3970bcd3e177ae","characters/nurse_laugh":"b6e97fb9358202944d9ba091","characters/nurse_normal":"af7e3a49ed833e4028169257","characters/nurse_pain":"08056d647b85e41e36bea8be","characters/nurse_pleading":"4f2851bc8d4de4944a6b25f9","characters/nurse_pout":"54ee36db1bed591db9606a85","characters/nurse_provocative":"01db748104e5102d62e5cd40","characters/nurse_relieved":"61499a9679e7db69bff1d4d1","characters/nurse_sad":"2d008de71c751aa0f3ad223d","characters/nurse_scared":"8a540fd346b936c0ffbd1da3","characters/nurse_scream":"f75f3a4b7178bccc9d829d6b","characters/nurse_shy":"2f2de76e1763f54c83aafdeb","characters/nurse_smile":"c6203daf56fb4e7247fb8587","characters/nurse_smirk":"bc4cc5725371a719977e090e","characters/nurse_sob":"cfdf6cc5252d40e7d24aa41c","characters/nurse_soft_smile":"f23eacf1d65e77f9214c17af","characters/nurse_surprised":"53571de84572fa1342012d3f","characters/nurse_tired":"61c79da8afcad72467934652","characters/nurse_very_shy":"c2676b8e36cec9ceeeae2d3e","characters/nurse_worried":"05b6013ce85c75bea841e7d0","characters/seyoun_aegyo":"d078bcc25dc6b4fdb8a731a0","characters/seyoun_ahegao":"952487f829a86417c3fd9e8d","characters/seyoun_angry":"b049aee4b5552e1b804b94e9","characters/seyoun_back":"f8ceff82667d3a58833bb6c3","characters/seyoun_bikini":"811254edce80a69af5e46c3b","characters/seyoun_bored":"f2b3af8764e0074c2046e76b","characters/seyoun_choking":"c33e5663f7f663f53268fbc8","characters/seyoun_climax":"347f106f28b41e1282d85dbf","characters/seyoun_climax_02":"8b46cf34069856680e4f710e","characters/seyoun_climax_03":"4a3ed92127ba5b52c516c7db","characters/seyoun_climax_04":"9864b772e565b6817a8cce3e","characters/seyoun_climax_05":"bc6138cbee202fc0416dcb94","characters/seyoun_climax_06":"62fc6659f8e47c3f836d16b0","characters/seyoun_confused":"4d2a9490b599f9e976b6e2d4","characters/seyoun_cry":"2ce2640079f4b1e445478e5a","characters/seyoun_date_laugh":"95af610bc31fdbab15f5da5d","characters/seyoun_date_normal":"1b0c7cf60b342ef6e12ecc28","characters/seyoun_date_sad":"e90ee76253404043f0c26a98","characters/seyoun_date_shy":"ed9be826f95506b54ae673ae","characters/seyoun_date_worried":"025af8fb008bfe328390a3d1","characters/seyoun_dazed":"27b1f90618df365ed3af553e","characters/seyoun_dead":"041283f73c97e1b6a83cc4d4","characters/seyoun_disgusted":"c06c156cb30239a6c3f2ef1d","characters/seyoun_dry_smile":"a00273d14dab084254a27aa4","characters/seyoun_dumbfounded":"dbc2f435c638265d057c47e6","characters/seyoun_entranced":"ae31417ecec61ee8f6ceee12","characters/seyoun_exhausted":"de5a380bd4cfee16a51d5198","characters/seyoun_fainted":"30093e356bda4be99a86737b","characters/seyoun_firm":"ebf3e5f93805f75b4fc9988d","characters/seyoun_flushed":"09461c430ff2b79b4c71891c","characters/seyoun_flushed_02":"935a4b47f2c212b63c957ad0","characters/seyoun_flushed_03":"8592d9919a52e4e2966c8cf1","characters/seyoun_flushed_04":"c8c286beed2826d6dd651885","characters/seyoun_flushed_05":"0546345df29fe3c76cb941a5","characters/seyoun_flushed_06":"f8d647a15b505506e01b387a","characters/seyoun_furious":"b8c620eaea78fe3dcf72af3e","characters/seyoun_humiliated":"8652f90dedb97809cf6352f1","characters/seyoun_laugh":"ef208ac84f029f275109ed26","characters/seyoun_normal":"dcdcee8d22f4e2b23e6bb4cd","characters/seyoun_pain":"a03d231702de27cd16ca6d7e","characters/seyoun_pleading":"38b12192ea62afd35b7d5262","characters/seyoun_pout":"bf9a95db2487ec0fe1bc3584","characters/seyoun_provocative":"1f6fd4d1864d422a02a1b7f2","characters/seyoun_relieved":"55be6490f4acf7a7de605c86","characters/seyoun_sad":"4277a36f7bdfd2437a425c40","characters/seyoun_scared":"e77e9d3c41f37ef6731114fa","characters/seyoun_scream":"e1bf82ef879ea82d18d88a6b","characters/seyoun_shy":"424929cf51ebfdd88430abfa","characters/seyoun_smile":"d5da6fa7bf1df275fb21d86a","characters/seyoun_smirk":"ef3c192b54842c93533fc454","characters/seyoun_sob":"77e17d9ee890cce3a3b9fe70","characters/seyoun_soft_smile":"852e08e001eec6de47fc315f","characters/seyoun_surprised":"c42a74abba3939a706106192","characters/seyoun_tired":"97c2be2756556ae0f097d362","characters/seyoun_very_shy":"8207ad2319ddfd3b5006b102","characters/seyoun_worried":"c0b5fa6ac050dd34bc6ce0f9","characters/teacher_aegyo":"2203c982bd52480b13c74e94","characters/teacher_ahegao":"5b38c9c06b0190d028b16cdd","characters/teacher_angry":"0ba1212e3738e20040796295","characters/teacher_bikini":"e28249e4880d2192538f472a","characters/teacher_bored":"e8837e324b4f7d3eebd9a2e2","characters/teacher_choking":"e39e7bc02454f91a8938ca9b","characters/teacher_climax":"5186a3d28178018ef66cc85f","characters/teacher_climax_02":"828dd28d5832e08e23b2aaf4","characters/teacher_climax_03":"8f58981dd5b5df4b919ebe34","characters/teacher_climax_04":"2169abe22500fcb031a199f4","characters/teacher_climax_05":"04435a982e8ccb7bf6bf2bae","characters/teacher_climax_06":"4f20623a74e269fa847af984","characters/teacher_climax_07":"6dbec1d9a72fa4775f4fad04","characters/teacher_climax_08":"b887b5f4933307640056faf5","characters/teacher_climax_09":"a4112b7daf55c6e06ec4d631","characters/teacher_climax_10":"3364bbdd08f02fdf036d358a","characters/teacher_confused":"60457ffa23d580f9c9d34368","characters/teacher_cry":"a433986e30e50c359c7b4988","characters/teacher_dazed":"6dbcb649216b5a91e30d9b46","characters/teacher_dead":"424f76c3b4f91d83f9461035","characters/teacher_disgusted":"fd353eddea3a0b57b3aec61d","characters/teacher_dry_smile":"5f1282b15c186791e7967690","characters/teacher_dumbfounded":"f691c3acc07c719ad3718436","characters/teacher_entranced":"ba312cbbaf74ec25c1ec479f","characters/teacher_exhausted":"d9159052668ea4b9fdd997a7","characters/teacher_fainted":"f6f266bcb145e436776197c5","characters/teacher_firm":"fa8ed9e57b0ce74c02c9c694","characters/teacher_flushed":"c7329b9ad7787fd62e893521","characters/teacher_furious":"d58709a2f401de54aecdef56","characters/teacher_humiliated":"1d4fde0a9d93cabc909f727a","characters/teacher_laugh":"d2b4b2d97729f405d430d7db","characters/teacher_normal":"dea7e4b86342869907cdf053","characters/teacher_pain":"7bc0746e2a5af130b8610a38","characters/teacher_pleading":"f98624bad65835a295bbd30a","characters/teacher_pout":"f2a9c243e553d9b1770543bb","characters/teacher_provocative":"33894c2b02d42dc7aae7526d","characters/teacher_relieved":"b3b014f48cce23fc651c5c9e","characters/teacher_sad":"aa126cb390a3eec02052518e","characters/teacher_scared":"118bd06df49e8a358c82294b","characters/teacher_scream":"91ef93be882ecd37130f4a38","characters/teacher_shy":"8730f7f645391f62890f8abc","characters/teacher_smile":"660f5721d04eb6fad7aafb76","characters/teacher_smirk":"c9e8d9c5433a978ad950dd84","characters/teacher_sob":"8f5ce497ec2646293b5dd4b1","characters/teacher_soft_smile":"2ad74a65e04da960a23cfc10","characters/teacher_surprised":"6d7f608378905b69615d7655","characters/teacher_tired":"36461535c89a9be5602a0f95","characters/teacher_very_shy":"97d1847e49384110d3e26e01","characters/teacher_worried":"f5e7e6e7d63d92d836e6536f","characters/yuna_aegyo":"360953b0b2772306742ac845","characters/yuna_ahegao":"e262cc5de510500bee407590","characters/yuna_angry":"8c6036a003a2e5ae82ab0787","characters/yuna_bikini":"f7e257282a62e3a43bf17635","characters/yuna_bored":"405ca0be9ce69d50ed118fab","characters/yuna_choking":"1eae8c915a063d1728a61e6d","characters/yuna_climax":"4ba749f4734cc8fef8699e67","characters/yuna_climax_02":"3e04755665d824b605ad9dd2","characters/yuna_climax_03":"b8da5590c1e74d75324a47d4","characters/yuna_climax_04":"ff2b8fd305f60bb31b49b21a","characters/yuna_climax_05":"008d5b95bc9a247ff04c23f6","characters/yuna_climax_06":"2f2beb5d2a2bd5d0e19d2824","characters/yuna_climax_07":"6607ec4c77fa6a2092e1c18d","characters/yuna_climax_08":"35f224fe08a6390044f419fc","characters/yuna_climax_09":"63701658cdb64a6433ddb05c","characters/yuna_confused":"f6f5b00c43fcd19665c87b10","characters/yuna_cry":"db858b6e366c77f1e9f4d51f","characters/yuna_date_bored":"4ca708fd3d47c8111a951a5e","characters/yuna_date_normal":"f5836784a1321546c0ecc38b","characters/yuna_date_sad":"ddbc6d9b9395024fe48ac992","characters/yuna_date_shy":"71ea5d65f9e23b35b968dd8a","characters/yuna_date_smile":"e6885838f1a49f8b3784859c","characters/yuna_dazed":"ce72ab64393de01b8bbbebdd","characters/yuna_dead":"69d76869d21a7b5fc1f91f8d","characters/yuna_disgusted":"ed28210c8e97ce6df9db412b","characters/yuna_dry_smile":"0c56bb2e8d3ed917d524cd4b","characters/yuna_dumbfounded":"505e29878cbeb16cad2515df","characters/yuna_entranced":"74064583b1d56b104eb125a4","characters/yuna_exhausted":"06b23cce3ed8eaf59dd6f9b6","characters/yuna_fainted":"c9a9b150e618591c012df71a","characters/yuna_firm":"2f07c8ac454d778ff91b5cc5","characters/yuna_flushed":"c0895ce2d930cbd0a41776d8","characters/yuna_furious":"4c917fa2f23970a19f797737","characters/yuna_gallery_bikini_sexy_20260813":"7cfb2d83e446e8a8da023f1c","characters/yuna_humiliated":"67bbebdad98d973c0247dff6","characters/yuna_laugh":"063b4b448ecf831f5b673be4","characters/yuna_normal":"ab0be4726c7759c4cc24e9d4","characters/yuna_pain":"46d42ce1614f9409a8de8768","characters/yuna_pleading":"ecf978c59f520bc68fca6e4b","characters/yuna_pout":"fc5b21ca5812d1bcd6f25aeb","characters/yuna_provocative":"a8d3973fd7f12c44278d18f9","characters/yuna_relieved":"c6b6a0f6c6af3eb70d29e967","characters/yuna_sad":"43cafdbbb6a9ae6c9da50238","characters/yuna_scared":"e2354bddf85269e1f54e0c38","characters/yuna_scream":"385c62c99077db5c3d58e0f9","characters/yuna_shy":"b0ff58d08f92e20c90aa3197","characters/yuna_smile":"e295b408febfc381785c97e2","characters/yuna_smirk":"c2189882a6af9c2516862173","characters/yuna_sob":"1ed947c92cdb5c69ebeb4695","characters/yuna_soft_smile":"394a3ffa803446465083a60e","characters/yuna_surprised":"779a1080a5d6b773df50461b","characters/yuna_tired":"1989b7e12e4040d40e30e586","characters/yuna_very_shy":"4ca9cb625af329fe9e0711e7","characters/yuna_worried":"cb7f67db1739818463c7e404"};
  var CHARACTER_ASSET_IDS = {"assets/characters/dain/expressions/active/01/sprite":"characters/dain_active","assets/characters/dain/expressions/aegyo/01/sprite":"characters/dain_aegyo","assets/characters/dain/expressions/ahegao/01/sprite":"characters/dain_ahegao","assets/characters/dain/expressions/angry/01/sprite":"characters/dain_angry","assets/characters/dain/expressions/bikini/01/sprite":"characters/dain_bikini","assets/characters/dain/expressions/bored/01/sprite":"characters/dain_bored","assets/characters/dain/expressions/choking/01/sprite":"characters/dain_choking","assets/characters/dain/expressions/climax/01/sprite":"characters/dain_climax","assets/characters/dain/expressions/climax/02/sprite":"characters/dain_climax_02","assets/characters/dain/expressions/climax/03/sprite":"characters/dain_climax_03","assets/characters/dain/expressions/climax/04/sprite":"characters/dain_climax_04","assets/characters/dain/expressions/climax/05/sprite":"characters/dain_climax_05","assets/characters/dain/expressions/climax/06/sprite":"characters/dain_climax_06","assets/characters/dain/expressions/climax/07/sprite":"characters/dain_climax_07","assets/characters/dain/expressions/climax/08/sprite":"characters/dain_climax_08","assets/characters/dain/expressions/climax/09/sprite":"characters/dain_climax_09","assets/characters/dain/expressions/climax/10/sprite":"characters/dain_climax_10","assets/characters/dain/expressions/climax/11/sprite":"characters/dain_climax_11","assets/characters/dain/expressions/confused/01/sprite":"characters/dain_confused","assets/characters/dain/expressions/cry/01/sprite":"characters/dain_cry","assets/characters/dain/expressions/dazed/01/sprite":"characters/dain_dazed","assets/characters/dain/expressions/dead/01/sprite":"characters/dain_dead","assets/characters/dain/expressions/disgusted/01/sprite":"characters/dain_disgusted","assets/characters/dain/expressions/dry_smile/01/sprite":"characters/dain_dry_smile","assets/characters/dain/expressions/dumbfounded/01/sprite":"characters/dain_dumbfounded","assets/characters/dain/expressions/entranced/01/sprite":"characters/dain_entranced","assets/characters/dain/expressions/exhausted/01/sprite":"characters/dain_exhausted","assets/characters/dain/expressions/fainted/01/sprite":"characters/dain_fainted","assets/characters/dain/expressions/firm/01/sprite":"characters/dain_firm","assets/characters/dain/expressions/flushed/01/sprite":"characters/dain_flushed","assets/characters/dain/expressions/furious/01/sprite":"characters/dain_furious","assets/characters/dain/expressions/humiliated/01/sprite":"characters/dain_humiliated","assets/characters/dain/expressions/laugh/01/sprite":"characters/dain_laugh","assets/characters/dain/expressions/normal/01/sprite":"characters/dain_normal","assets/characters/dain/expressions/pain/01/sprite":"characters/dain_pain","assets/characters/dain/expressions/pleading/01/sprite":"characters/dain_pleading","assets/characters/dain/expressions/pout/01/sprite":"characters/dain_pout","assets/characters/dain/expressions/provocative/01/sprite":"characters/dain_provocative","assets/characters/dain/expressions/relieved/01/sprite":"characters/dain_relieved","assets/characters/dain/expressions/sad/01/sprite":"characters/dain_sad","assets/characters/dain/expressions/scared/01/sprite":"characters/dain_scared","assets/characters/dain/expressions/scream/01/sprite":"characters/dain_scream","assets/characters/dain/expressions/shy/01/sprite":"characters/dain_shy","assets/characters/dain/expressions/smile/01/sprite":"characters/dain_smile","assets/characters/dain/expressions/smirk/01/sprite":"characters/dain_smirk","assets/characters/dain/expressions/sob/01/sprite":"characters/dain_sob","assets/characters/dain/expressions/soft_smile/01/sprite":"characters/dain_soft_smile","assets/characters/dain/expressions/surprised/01/sprite":"characters/dain_surprised","assets/characters/dain/expressions/sweat/01/sprite":"characters/dain_sweat","assets/characters/dain/expressions/tired/01/sprite":"characters/dain_tired","assets/characters/dain/expressions/very_shy/01/sprite":"characters/dain_very_shy","assets/characters/dain/expressions/worried/01/sprite":"characters/dain_worried","assets/characters/dain/outfits/date/expressions/angry/01/sprite":"characters/dain_date_angry","assets/characters/dain/outfits/date/expressions/laugh/01/sprite":"characters/dain_date_laugh","assets/characters/dain/outfits/date/expressions/normal/01/sprite":"characters/dain_date_normal","assets/characters/dain/outfits/date/expressions/sad/01/sprite":"characters/dain_date_sad","assets/characters/dain/outfits/date/expressions/shy/01/sprite":"characters/dain_date_shy","assets/characters/dain/outfits/date/expressions/sweat/01/sprite":"characters/dain_date_sweat","assets/characters/haeun/expressions/aegyo/01/sprite":"characters/haeun_aegyo","assets/characters/haeun/expressions/ahegao/01/sprite":"characters/haeun_ahegao","assets/characters/haeun/expressions/angry/01/sprite":"characters/haeun_angry","assets/characters/haeun/expressions/bored/01/sprite":"characters/haeun_bored","assets/characters/haeun/expressions/choking/01/sprite":"characters/haeun_choking","assets/characters/haeun/expressions/climax/01/sprite":"characters/haeun_climax","assets/characters/haeun/expressions/climax/02/sprite":"characters/haeun_climax_02","assets/characters/haeun/expressions/climax/03/sprite":"characters/haeun_climax_03","assets/characters/haeun/expressions/climax/04/sprite":"characters/haeun_climax_04","assets/characters/haeun/expressions/climax/05/sprite":"characters/haeun_climax_05","assets/characters/haeun/expressions/climax/06/sprite":"characters/haeun_climax_06","assets/characters/haeun/expressions/climax/07/sprite":"characters/haeun_climax_07","assets/characters/haeun/expressions/climax/08/sprite":"characters/haeun_climax_08","assets/characters/haeun/expressions/confused/01/sprite":"characters/haeun_confused","assets/characters/haeun/expressions/cry/01/sprite":"characters/haeun_cry","assets/characters/haeun/expressions/dazed/01/sprite":"characters/haeun_dazed","assets/characters/haeun/expressions/dead/01/sprite":"characters/haeun_dead","assets/characters/haeun/expressions/disgusted/01/sprite":"characters/haeun_disgusted","assets/characters/haeun/expressions/dry_smile/01/sprite":"characters/haeun_dry_smile","assets/characters/haeun/expressions/dumbfounded/01/sprite":"characters/haeun_dumbfounded","assets/characters/haeun/expressions/entranced/01/sprite":"characters/haeun_entranced","assets/characters/haeun/expressions/exhausted/01/sprite":"characters/haeun_exhausted","assets/characters/haeun/expressions/fainted/01/sprite":"characters/haeun_fainted","assets/characters/haeun/expressions/firm/01/sprite":"characters/haeun_firm","assets/characters/haeun/expressions/flushed/01/sprite":"characters/haeun_flushed","assets/characters/haeun/expressions/furious/01/sprite":"characters/haeun_furious","assets/characters/haeun/expressions/humiliated/01/sprite":"characters/haeun_humiliated","assets/characters/haeun/expressions/laugh/01/sprite":"characters/haeun_laugh","assets/characters/haeun/expressions/normal/01/sprite":"characters/haeun_normal","assets/characters/haeun/expressions/pain/01/sprite":"characters/haeun_pain","assets/characters/haeun/expressions/pleading/01/sprite":"characters/haeun_pleading","assets/characters/haeun/expressions/pout/01/sprite":"characters/haeun_pout","assets/characters/haeun/expressions/provocative/01/sprite":"characters/haeun_provocative","assets/characters/haeun/expressions/relieved/01/sprite":"characters/haeun_relieved","assets/characters/haeun/expressions/sad/01/sprite":"characters/haeun_sad","assets/characters/haeun/expressions/scared/01/sprite":"characters/haeun_scared","assets/characters/haeun/expressions/scream/01/sprite":"characters/haeun_scream","assets/characters/haeun/expressions/shy/01/sprite":"characters/haeun_shy","assets/characters/haeun/expressions/smile/01/sprite":"characters/haeun_smile","assets/characters/haeun/expressions/smirk/01/sprite":"characters/haeun_smirk","assets/characters/haeun/expressions/sob/01/sprite":"characters/haeun_sob","assets/characters/haeun/expressions/soft_smile/01/sprite":"characters/haeun_soft_smile","assets/characters/haeun/expressions/surprised/01/sprite":"characters/haeun_surprised","assets/characters/haeun/expressions/tired/01/sprite":"characters/haeun_tired","assets/characters/haeun/expressions/very_shy/01/sprite":"characters/haeun_very_shy","assets/characters/haeun/expressions/worried/01/sprite":"characters/haeun_worried","assets/characters/junho/expressions/awkward/01/sprite":"characters/junho_awkward","assets/characters/junho/expressions/normal/01/sprite":"characters/junho_normal","assets/characters/minsu/expressions/aegyo/01/sprite":"characters/minsu_aegyo","assets/characters/minsu/expressions/angry/01/sprite":"characters/minsu_angry","assets/characters/minsu/expressions/bored/01/sprite":"characters/minsu_bored","assets/characters/minsu/expressions/choking/01/sprite":"characters/minsu_choking","assets/characters/minsu/expressions/climax/01/sprite":"characters/minsu_climax","assets/characters/minsu/expressions/climax/02/sprite":"characters/minsu_climax_02","assets/characters/minsu/expressions/climax/03/sprite":"characters/minsu_climax_03","assets/characters/minsu/expressions/climax/04/sprite":"characters/minsu_climax_04","assets/characters/minsu/expressions/climax/05/sprite":"characters/minsu_climax_05","assets/characters/minsu/expressions/climax/06/sprite":"characters/minsu_climax_06","assets/characters/minsu/expressions/confused/01/sprite":"characters/minsu_confused","assets/characters/minsu/expressions/cry/01/sprite":"characters/minsu_cry","assets/characters/minsu/expressions/dazed/01/sprite":"characters/minsu_dazed","assets/characters/minsu/expressions/dead/01/sprite":"characters/minsu_dead","assets/characters/minsu/expressions/disgusted/01/sprite":"characters/minsu_disgusted","assets/characters/minsu/expressions/dry_smile/01/sprite":"characters/minsu_dry_smile","assets/characters/minsu/expressions/dumbfounded/01/sprite":"characters/minsu_dumbfounded","assets/characters/minsu/expressions/entranced/01/sprite":"characters/minsu_entranced","assets/characters/minsu/expressions/exhausted/01/sprite":"characters/minsu_exhausted","assets/characters/minsu/expressions/fainted/01/sprite":"characters/minsu_fainted","assets/characters/minsu/expressions/firm/01/sprite":"characters/minsu_firm","assets/characters/minsu/expressions/flushed/01/sprite":"characters/minsu_flushed","assets/characters/minsu/expressions/furious/01/sprite":"characters/minsu_furious","assets/characters/minsu/expressions/humiliated/01/sprite":"characters/minsu_humiliated","assets/characters/minsu/expressions/laugh/01/sprite":"characters/minsu_laugh","assets/characters/minsu/expressions/normal/01/sprite":"characters/minsu_normal","assets/characters/minsu/expressions/pain/01/sprite":"characters/minsu_pain","assets/characters/minsu/expressions/pleading/01/sprite":"characters/minsu_pleading","assets/characters/minsu/expressions/pout/01/sprite":"characters/minsu_pout","assets/characters/minsu/expressions/provocative/01/sprite":"characters/minsu_provocative","assets/characters/minsu/expressions/relieved/01/sprite":"characters/minsu_relieved","assets/characters/minsu/expressions/sad/01/sprite":"characters/minsu_sad","assets/characters/minsu/expressions/scared/01/sprite":"characters/minsu_scared","assets/characters/minsu/expressions/scream/01/sprite":"characters/minsu_scream","assets/characters/minsu/expressions/shy/01/sprite":"characters/minsu_shy","assets/characters/minsu/expressions/smile/01/sprite":"characters/minsu_smile","assets/characters/minsu/expressions/smirk/01/sprite":"characters/minsu_smirk","assets/characters/minsu/expressions/sob/01/sprite":"characters/minsu_sob","assets/characters/minsu/expressions/soft_smile/01/sprite":"characters/minsu_soft_smile","assets/characters/minsu/expressions/surprised/01/sprite":"characters/minsu_surprised","assets/characters/minsu/expressions/tired/01/sprite":"characters/minsu_tired","assets/characters/minsu/expressions/very_shy/01/sprite":"characters/minsu_very_shy","assets/characters/minsu/expressions/worried/01/sprite":"characters/minsu_worried","assets/characters/nurse/expressions/aegyo/01/sprite":"characters/nurse_aegyo","assets/characters/nurse/expressions/ahegao/01/sprite":"characters/nurse_ahegao","assets/characters/nurse/expressions/angry/01/sprite":"characters/nurse_angry","assets/characters/nurse/expressions/bikini/01/sprite":"characters/nurse_bikini","assets/characters/nurse/expressions/bored/01/sprite":"characters/nurse_bored","assets/characters/nurse/expressions/choking/01/sprite":"characters/nurse_choking","assets/characters/nurse/expressions/climax/01/sprite":"characters/nurse_climax","assets/characters/nurse/expressions/climax/02/sprite":"characters/nurse_climax_02","assets/characters/nurse/expressions/climax/03/sprite":"characters/nurse_climax_03","assets/characters/nurse/expressions/climax/04/sprite":"characters/nurse_climax_04","assets/characters/nurse/expressions/climax/05/sprite":"characters/nurse_climax_05","assets/characters/nurse/expressions/climax/06/sprite":"characters/nurse_climax_06","assets/characters/nurse/expressions/climax/07/sprite":"characters/nurse_climax_07","assets/characters/nurse/expressions/climax/08/sprite":"characters/nurse_climax_08","assets/characters/nurse/expressions/climax/09/sprite":"characters/nurse_climax_09","assets/characters/nurse/expressions/confused/01/sprite":"characters/nurse_confused","assets/characters/nurse/expressions/cry/01/sprite":"characters/nurse_cry","assets/characters/nurse/expressions/dazed/01/sprite":"characters/nurse_dazed","assets/characters/nurse/expressions/dead/01/sprite":"characters/nurse_dead","assets/characters/nurse/expressions/disgusted/01/sprite":"characters/nurse_disgusted","assets/characters/nurse/expressions/dry_smile/01/sprite":"characters/nurse_dry_smile","assets/characters/nurse/expressions/dumbfounded/01/sprite":"characters/nurse_dumbfounded","assets/characters/nurse/expressions/entranced/01/sprite":"characters/nurse_entranced","assets/characters/nurse/expressions/exhausted/01/sprite":"characters/nurse_exhausted","assets/characters/nurse/expressions/fainted/01/sprite":"characters/nurse_fainted","assets/characters/nurse/expressions/firm/01/sprite":"characters/nurse_firm","assets/characters/nurse/expressions/flushed/01/sprite":"characters/nurse_flushed","assets/characters/nurse/expressions/furious/01/sprite":"characters/nurse_furious","assets/characters/nurse/expressions/humiliated/01/sprite":"characters/nurse_humiliated","assets/characters/nurse/expressions/laugh/01/sprite":"characters/nurse_laugh","assets/characters/nurse/expressions/normal/01/sprite":"characters/nurse_normal","assets/characters/nurse/expressions/pain/01/sprite":"characters/nurse_pain","assets/characters/nurse/expressions/pleading/01/sprite":"characters/nurse_pleading","assets/characters/nurse/expressions/pout/01/sprite":"characters/nurse_pout","assets/characters/nurse/expressions/provocative/01/sprite":"characters/nurse_provocative","assets/characters/nurse/expressions/relieved/01/sprite":"characters/nurse_relieved","assets/characters/nurse/expressions/sad/01/sprite":"characters/nurse_sad","assets/characters/nurse/expressions/scared/01/sprite":"characters/nurse_scared","assets/characters/nurse/expressions/scream/01/sprite":"characters/nurse_scream","assets/characters/nurse/expressions/shy/01/sprite":"characters/nurse_shy","assets/characters/nurse/expressions/smile/01/sprite":"characters/nurse_smile","assets/characters/nurse/expressions/smirk/01/sprite":"characters/nurse_smirk","assets/characters/nurse/expressions/sob/01/sprite":"characters/nurse_sob","assets/characters/nurse/expressions/soft_smile/01/sprite":"characters/nurse_soft_smile","assets/characters/nurse/expressions/surprised/01/sprite":"characters/nurse_surprised","assets/characters/nurse/expressions/tired/01/sprite":"characters/nurse_tired","assets/characters/nurse/expressions/very_shy/01/sprite":"characters/nurse_very_shy","assets/characters/nurse/expressions/worried/01/sprite":"characters/nurse_worried","assets/characters/nurse/outfits/home/expressions/angry/01/sprite":"characters/nurse_home_angry","assets/characters/nurse/outfits/home/expressions/normal/01/sprite":"characters/nurse_home_normal","assets/characters/nurse/outfits/home/expressions/sad/01/sprite":"characters/nurse_home_sad","assets/characters/nurse/outfits/home/expressions/shy/01/sprite":"characters/nurse_home_shy","assets/characters/nurse/outfits/home/expressions/smile/01/sprite":"characters/nurse_home_smile","assets/characters/seoyeon/expressions/aegyo/01/sprite":"characters/seyoun_aegyo","assets/characters/seoyeon/expressions/ahegao/01/sprite":"characters/seyoun_ahegao","assets/characters/seoyeon/expressions/angry/01/sprite":"characters/seyoun_angry","assets/characters/seoyeon/expressions/back/01/sprite":"characters/seyoun_back","assets/characters/seoyeon/expressions/bikini/01/sprite":"characters/seyoun_bikini","assets/characters/seoyeon/expressions/bored/01/sprite":"characters/seyoun_bored","assets/characters/seoyeon/expressions/choking/01/sprite":"characters/seyoun_choking","assets/characters/seoyeon/expressions/climax/01/sprite":"characters/seyoun_climax","assets/characters/seoyeon/expressions/climax/02/sprite":"characters/seyoun_climax_02","assets/characters/seoyeon/expressions/climax/03/sprite":"characters/seyoun_climax_03","assets/characters/seoyeon/expressions/climax/04/sprite":"characters/seyoun_climax_04","assets/characters/seoyeon/expressions/climax/05/sprite":"characters/seyoun_climax_05","assets/characters/seoyeon/expressions/climax/06/sprite":"characters/seyoun_climax_06","assets/characters/seoyeon/expressions/confused/01/sprite":"characters/seyoun_confused","assets/characters/seoyeon/expressions/cry/01/sprite":"characters/seyoun_cry","assets/characters/seoyeon/expressions/dazed/01/sprite":"characters/seyoun_dazed","assets/characters/seoyeon/expressions/dead/01/sprite":"characters/seyoun_dead","assets/characters/seoyeon/expressions/disgusted/01/sprite":"characters/seyoun_disgusted","assets/characters/seoyeon/expressions/dry_smile/01/sprite":"characters/seyoun_dry_smile","assets/characters/seoyeon/expressions/dumbfounded/01/sprite":"characters/seyoun_dumbfounded","assets/characters/seoyeon/expressions/entranced/01/sprite":"characters/seyoun_entranced","assets/characters/seoyeon/expressions/exhausted/01/sprite":"characters/seyoun_exhausted","assets/characters/seoyeon/expressions/fainted/01/sprite":"characters/seyoun_fainted","assets/characters/seoyeon/expressions/firm/01/sprite":"characters/seyoun_firm","assets/characters/seoyeon/expressions/flushed/01/sprite":"characters/seyoun_flushed","assets/characters/seoyeon/expressions/flushed/02/sprite":"characters/seyoun_flushed_02","assets/characters/seoyeon/expressions/flushed/03/sprite":"characters/seyoun_flushed_03","assets/characters/seoyeon/expressions/flushed/04/sprite":"characters/seyoun_flushed_04","assets/characters/seoyeon/expressions/flushed/05/sprite":"characters/seyoun_flushed_05","assets/characters/seoyeon/expressions/flushed/06/sprite":"characters/seyoun_flushed_06","assets/characters/seoyeon/expressions/furious/01/sprite":"characters/seyoun_furious","assets/characters/seoyeon/expressions/humiliated/01/sprite":"characters/seyoun_humiliated","assets/characters/seoyeon/expressions/laugh/01/sprite":"characters/seyoun_laugh","assets/characters/seoyeon/expressions/normal/01/sprite":"characters/seyoun_normal","assets/characters/seoyeon/expressions/pain/01/sprite":"characters/seyoun_pain","assets/characters/seoyeon/expressions/pleading/01/sprite":"characters/seyoun_pleading","assets/characters/seoyeon/expressions/pout/01/sprite":"characters/seyoun_pout","assets/characters/seoyeon/expressions/provocative/01/sprite":"characters/seyoun_provocative","assets/characters/seoyeon/expressions/relieved/01/sprite":"characters/seyoun_relieved","assets/characters/seoyeon/expressions/sad/01/sprite":"characters/seyoun_sad","assets/characters/seoyeon/expressions/scared/01/sprite":"characters/seyoun_scared","assets/characters/seoyeon/expressions/scream/01/sprite":"characters/seyoun_scream","assets/characters/seoyeon/expressions/shy/01/sprite":"characters/seyoun_shy","assets/characters/seoyeon/expressions/smile/01/sprite":"characters/seyoun_smile","assets/characters/seoyeon/expressions/smirk/01/sprite":"characters/seyoun_smirk","assets/characters/seoyeon/expressions/sob/01/sprite":"characters/seyoun_sob","assets/characters/seoyeon/expressions/soft_smile/01/sprite":"characters/seyoun_soft_smile","assets/characters/seoyeon/expressions/surprised/01/sprite":"characters/seyoun_surprised","assets/characters/seoyeon/expressions/tired/01/sprite":"characters/seyoun_tired","assets/characters/seoyeon/expressions/very_shy/01/sprite":"characters/seyoun_very_shy","assets/characters/seoyeon/expressions/worried/01/sprite":"characters/seyoun_worried","assets/characters/seoyeon/outfits/date/expressions/laugh/01/sprite":"characters/seyoun_date_laugh","assets/characters/seoyeon/outfits/date/expressions/normal/01/sprite":"characters/seyoun_date_normal","assets/characters/seoyeon/outfits/date/expressions/sad/01/sprite":"characters/seyoun_date_sad","assets/characters/seoyeon/outfits/date/expressions/shy/01/sprite":"characters/seyoun_date_shy","assets/characters/seoyeon/outfits/date/expressions/worried/01/sprite":"characters/seyoun_date_worried","assets/characters/teacher/expressions/aegyo/01/sprite":"characters/teacher_aegyo","assets/characters/teacher/expressions/ahegao/01/sprite":"characters/teacher_ahegao","assets/characters/teacher/expressions/angry/01/sprite":"characters/teacher_angry","assets/characters/teacher/expressions/bikini/01/sprite":"characters/teacher_bikini","assets/characters/teacher/expressions/bored/01/sprite":"characters/teacher_bored","assets/characters/teacher/expressions/choking/01/sprite":"characters/teacher_choking","assets/characters/teacher/expressions/climax/01/sprite":"characters/teacher_climax","assets/characters/teacher/expressions/climax/02/sprite":"characters/teacher_climax_02","assets/characters/teacher/expressions/climax/03/sprite":"characters/teacher_climax_03","assets/characters/teacher/expressions/climax/04/sprite":"characters/teacher_climax_04","assets/characters/teacher/expressions/climax/05/sprite":"characters/teacher_climax_05","assets/characters/teacher/expressions/climax/06/sprite":"characters/teacher_climax_06","assets/characters/teacher/expressions/climax/07/sprite":"characters/teacher_climax_07","assets/characters/teacher/expressions/climax/08/sprite":"characters/teacher_climax_08","assets/characters/teacher/expressions/climax/09/sprite":"characters/teacher_climax_09","assets/characters/teacher/expressions/climax/10/sprite":"characters/teacher_climax_10","assets/characters/teacher/expressions/confused/01/sprite":"characters/teacher_confused","assets/characters/teacher/expressions/cry/01/sprite":"characters/teacher_cry","assets/characters/teacher/expressions/dazed/01/sprite":"characters/teacher_dazed","assets/characters/teacher/expressions/dead/01/sprite":"characters/teacher_dead","assets/characters/teacher/expressions/disgusted/01/sprite":"characters/teacher_disgusted","assets/characters/teacher/expressions/dry_smile/01/sprite":"characters/teacher_dry_smile","assets/characters/teacher/expressions/dumbfounded/01/sprite":"characters/teacher_dumbfounded","assets/characters/teacher/expressions/entranced/01/sprite":"characters/teacher_entranced","assets/characters/teacher/expressions/exhausted/01/sprite":"characters/teacher_exhausted","assets/characters/teacher/expressions/fainted/01/sprite":"characters/teacher_fainted","assets/characters/teacher/expressions/firm/01/sprite":"characters/teacher_firm","assets/characters/teacher/expressions/flushed/01/sprite":"characters/teacher_flushed","assets/characters/teacher/expressions/furious/01/sprite":"characters/teacher_furious","assets/characters/teacher/expressions/humiliated/01/sprite":"characters/teacher_humiliated","assets/characters/teacher/expressions/laugh/01/sprite":"characters/teacher_laugh","assets/characters/teacher/expressions/normal/01/sprite":"characters/teacher_normal","assets/characters/teacher/expressions/pain/01/sprite":"characters/teacher_pain","assets/characters/teacher/expressions/pleading/01/sprite":"characters/teacher_pleading","assets/characters/teacher/expressions/pout/01/sprite":"characters/teacher_pout","assets/characters/teacher/expressions/provocative/01/sprite":"characters/teacher_provocative","assets/characters/teacher/expressions/relieved/01/sprite":"characters/teacher_relieved","assets/characters/teacher/expressions/sad/01/sprite":"characters/teacher_sad","assets/characters/teacher/expressions/scared/01/sprite":"characters/teacher_scared","assets/characters/teacher/expressions/scream/01/sprite":"characters/teacher_scream","assets/characters/teacher/expressions/shy/01/sprite":"characters/teacher_shy","assets/characters/teacher/expressions/smile/01/sprite":"characters/teacher_smile","assets/characters/teacher/expressions/smirk/01/sprite":"characters/teacher_smirk","assets/characters/teacher/expressions/sob/01/sprite":"characters/teacher_sob","assets/characters/teacher/expressions/soft_smile/01/sprite":"characters/teacher_soft_smile","assets/characters/teacher/expressions/surprised/01/sprite":"characters/teacher_surprised","assets/characters/teacher/expressions/tired/01/sprite":"characters/teacher_tired","assets/characters/teacher/expressions/very_shy/01/sprite":"characters/teacher_very_shy","assets/characters/teacher/expressions/worried/01/sprite":"characters/teacher_worried","assets/characters/yuna/expressions/aegyo/01/sprite":"characters/yuna_aegyo","assets/characters/yuna/expressions/ahegao/01/sprite":"characters/yuna_ahegao","assets/characters/yuna/expressions/angry/01/sprite":"characters/yuna_angry","assets/characters/yuna/expressions/bikini/01/sprite":"characters/yuna_bikini","assets/characters/yuna/expressions/bored/01/sprite":"characters/yuna_bored","assets/characters/yuna/expressions/choking/01/sprite":"characters/yuna_choking","assets/characters/yuna/expressions/climax/01/sprite":"characters/yuna_climax","assets/characters/yuna/expressions/climax/02/sprite":"characters/yuna_climax_02","assets/characters/yuna/expressions/climax/03/sprite":"characters/yuna_climax_03","assets/characters/yuna/expressions/climax/04/sprite":"characters/yuna_climax_04","assets/characters/yuna/expressions/climax/05/sprite":"characters/yuna_climax_05","assets/characters/yuna/expressions/climax/06/sprite":"characters/yuna_climax_06","assets/characters/yuna/expressions/climax/07/sprite":"characters/yuna_climax_07","assets/characters/yuna/expressions/climax/08/sprite":"characters/yuna_climax_08","assets/characters/yuna/expressions/climax/09/sprite":"characters/yuna_climax_09","assets/characters/yuna/expressions/confused/01/sprite":"characters/yuna_confused","assets/characters/yuna/expressions/cry/01/sprite":"characters/yuna_cry","assets/characters/yuna/expressions/dazed/01/sprite":"characters/yuna_dazed","assets/characters/yuna/expressions/dead/01/sprite":"characters/yuna_dead","assets/characters/yuna/expressions/disgusted/01/sprite":"characters/yuna_disgusted","assets/characters/yuna/expressions/dry_smile/01/sprite":"characters/yuna_dry_smile","assets/characters/yuna/expressions/dumbfounded/01/sprite":"characters/yuna_dumbfounded","assets/characters/yuna/expressions/entranced/01/sprite":"characters/yuna_entranced","assets/characters/yuna/expressions/exhausted/01/sprite":"characters/yuna_exhausted","assets/characters/yuna/expressions/fainted/01/sprite":"characters/yuna_fainted","assets/characters/yuna/expressions/firm/01/sprite":"characters/yuna_firm","assets/characters/yuna/expressions/flushed/01/sprite":"characters/yuna_flushed","assets/characters/yuna/expressions/furious/01/sprite":"characters/yuna_furious","assets/characters/yuna/expressions/gallery_bikini_sexy_20260813/01/sprite":"characters/yuna_gallery_bikini_sexy_20260813","assets/characters/yuna/expressions/humiliated/01/sprite":"characters/yuna_humiliated","assets/characters/yuna/expressions/laugh/01/sprite":"characters/yuna_laugh","assets/characters/yuna/expressions/normal/01/sprite":"characters/yuna_normal","assets/characters/yuna/expressions/pain/01/sprite":"characters/yuna_pain","assets/characters/yuna/expressions/pleading/01/sprite":"characters/yuna_pleading","assets/characters/yuna/expressions/pout/01/sprite":"characters/yuna_pout","assets/characters/yuna/expressions/provocative/01/sprite":"characters/yuna_provocative","assets/characters/yuna/expressions/relieved/01/sprite":"characters/yuna_relieved","assets/characters/yuna/expressions/sad/01/sprite":"characters/yuna_sad","assets/characters/yuna/expressions/scared/01/sprite":"characters/yuna_scared","assets/characters/yuna/expressions/scream/01/sprite":"characters/yuna_scream","assets/characters/yuna/expressions/shy/01/sprite":"characters/yuna_shy","assets/characters/yuna/expressions/smile/01/sprite":"characters/yuna_smile","assets/characters/yuna/expressions/smirk/01/sprite":"characters/yuna_smirk","assets/characters/yuna/expressions/sob/01/sprite":"characters/yuna_sob","assets/characters/yuna/expressions/soft_smile/01/sprite":"characters/yuna_soft_smile","assets/characters/yuna/expressions/surprised/01/sprite":"characters/yuna_surprised","assets/characters/yuna/expressions/tired/01/sprite":"characters/yuna_tired","assets/characters/yuna/expressions/very_shy/01/sprite":"characters/yuna_very_shy","assets/characters/yuna/expressions/worried/01/sprite":"characters/yuna_worried","assets/characters/yuna/outfits/date/expressions/bored/01/sprite":"characters/yuna_date_bored","assets/characters/yuna/outfits/date/expressions/normal/01/sprite":"characters/yuna_date_normal","assets/characters/yuna/outfits/date/expressions/sad/01/sprite":"characters/yuna_date_sad","assets/characters/yuna/outfits/date/expressions/shy/01/sprite":"characters/yuna_date_shy","assets/characters/yuna/outfits/date/expressions/smile/01/sprite":"characters/yuna_date_smile"};
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
                    && image.ownerDocument?.createElement && window.CSS?.supports?.('mix-blend-mode', 'plus-lighter')
                    && !window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
                let outgoing, incoming, layer, ghost, arrival, restoreVisibility;
                try {
                    if (animate) {
                        const style = window.getComputedStyle(image);
                        // Add the weighted images on a transparent isolated backdrop.
                        // Ordinary source-over fades expose 25% of the background halfway through.
                        layer = image.ownerDocument.createElement('span');
                        layer.className = 'expression-crossfade';
                        layer.setAttribute('aria-hidden', 'true');
                        Object.assign(layer.style, {
                            position: 'absolute', left: `${image.offsetLeft}px`, top: `${image.offsetTop}px`,
                            width: style.width, height: style.height, display: 'block', margin: '0', padding: '0',
                            border: '0', background: 'none', isolation: 'isolate', pointerEvents: 'none',
                            zIndex: style.zIndex, overflow: 'visible'
                        });
                        const copy = (className, src) => {
                            const clone = image.cloneNode(false);
                            clone.removeAttribute('id'); clone.removeAttribute('alt');
                            clone.removeAttribute('srcset'); clone.removeAttribute('sizes');
                            clone.setAttribute('aria-hidden', 'true');
                            clone.classList.add(className);
                            // Preserve ID-specific masks, borders and framing without changing layout.
                            for (const property of Array.from(style)) clone.style.setProperty(property, style.getPropertyValue(property));
                            Object.assign(clone.style, {
                                position: 'absolute', left: '0', top: '0', right: 'auto', bottom: 'auto', margin: '0',
                                width: style.width, height: style.height, minWidth: '0', minHeight: '0',
                                maxWidth: 'none', maxHeight: 'none', visibility: 'visible', pointerEvents: 'none',
                                transition: 'none', animation: 'none'
                            });
                            clone.loading = 'eager'; clone.src = src;
                            return clone;
                        };
                        ghost = copy('expression-outgoing', image.currentSrc || image.src);
                        arrival = copy('expression-incoming', next);
                        Object.assign(ghost.style, { opacity: style.opacity, zIndex: '1', mixBlendMode: 'plus-lighter' });
                        Object.assign(arrival.style, { opacity: '0', zIndex: '0', mixBlendMode: 'normal' });
                        await Promise.all([ghost.decode?.(), arrival.decode?.()]);
                        if (!current()) return false;
                        layer.appendChild(arrival); layer.appendChild(ghost);
                        image.parentElement.appendChild(layer);
                    }
                    image.src = next;
                    image.__expressionLoadedSource = source; image.__expressionLoadedURL = image.src;
                    image.style.display = '';
                    if (options.onCommit) options.onCommit(next);
                    if (animate) {
                        restoreVisibility = image.style.visibility;
                        image.style.visibility = 'hidden';
                        await image.decode?.();
                        const nextStyle = window.getComputedStyle(image);
                        const opacity = Number(nextStyle.opacity);
                        for (const property of Array.from(nextStyle)) arrival.style.setProperty(property, nextStyle.getPropertyValue(property));
                        Object.assign(arrival.style, {
                            position: 'absolute', left: `${image.offsetLeft - layer.offsetLeft}px`, top: `${image.offsetTop - layer.offsetTop}px`,
                            right: 'auto', bottom: 'auto', margin: '0', width: nextStyle.width, height: nextStyle.height,
                            minWidth: '0', minHeight: '0', maxWidth: 'none', maxHeight: 'none',
                            opacity: '0', visibility: 'visible', zIndex: '0', mixBlendMode: 'normal',
                            pointerEvents: 'none', transition: 'none', animation: 'none'
                        });
                        const timing = { duration: 900, easing: 'ease-in-out', fill: 'forwards' };
                        outgoing = ghost.animate([{ opacity: Number(ghost.style.opacity) }, { opacity: 0 }], timing);
                        incoming = arrival.animate([{ opacity: 0 }, { opacity }], timing);
                        await Promise.all([outgoing.finished, incoming.finished]);
                        await image.decode?.();
                    }
                    return true;
                } finally {
                    if (restoreVisibility !== undefined) image.style.visibility = restoreVisibility;
                    layer?.remove(); outgoing?.cancel(); incoming?.cancel();
                }
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
