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
  var MEDIA_VERSIONS = {"background/dain_depression_event1":"7ee4549e9c01d86d8ceddab7","background/dain_hurt_event1":"03c309e91448e74d0f6524af","background/ending_alone":"be11653d9adf4a7b306b9f91","background/ending_bittersweet":"51eab37dfe08db46f30d72a8","background/ending_bittersweet_nurse":"3d0e4a5f18806c68e6be9014","background/ending_bittersweet_teacher":"39233a3911500d9e632dc38b","background/ending_confess_fail_dain":"787b7ab28af2ca24cc4a6fad","background/ending_confess_fail_seoyeon":"73831ccd142f8a97d9e6183a","background/ending_confess_fail_yuna":"e32c7f7a67d89e96a8edef1d","background/ending_friend":"3d8c2f3494301d31d369e80a","background/ending_good_dain":"209cb4651368bfa637e273d5","background/ending_good_nurse":"753c7a2e322c44c535de071b","background/ending_good_seoyeon":"9619f8ad7d14301d96d44b24","background/ending_good_teacher":"2e6dd0c2716bf020f13cb957","background/ending_good_yuna":"09c67542dd7e066422d1843e","background/ending_harem":"00fc46d686b1dc0881557efe","background/ending_mayhem":"eebc0728b58bcec16e108f4f","background/ending_perfect_dain":"750033d2213d9d0240fdf07a","background/ending_perfect_haeun":"9903cd5bf1aa4e4465484b0e","background/ending_perfect_nurse":"2efe79fb6a3ccaa6bfc42ec5","background/ending_perfect_seoyeon":"513a2715bac51c0b403407ed","background/ending_perfect_teacher":"fe8877f9d320958a916ec193","background/ending_perfect_yuna":"d474988bda580a4fa93e9bdb","background/ending_true_dain":"208f6d687989178581114801","background/ending_true_nurse":"4727b2407b6623fd802285f8","background/ending_true_seoyeon":"edda8686b4b472e5099da930","background/ending_true_teacher":"14adfae607797f5fccdf601c","background/ending_true_yuna":"81604f5804f639ca8f67601c","background/event_haeun_reputation":"8b2edb7e9c3b3b7c804362ba","background/event_haeun_trust":"080f10ba1c95792d44d0de72","background/event_seoyeon_succulent":"839c54f07fdfee9f1a6c6cf0","background/event_temptation_dain":"ea1f573b313ef7004b352a28","background/event_temptation_seoyeon":"139380703754eeefce44522d","background/event_temptation_yuna":"a3c33707fefd16c91df8d4cf","background/event_yuna_reading":"f9fe8aae463477345c4cd825","background/nurse_home_event1":"8fb762c5beb1d01ee83bc97b","characters/dain_active":"1b8260ba7330120c0cab8bd6","characters/dain_aegyo":"818bf707a77397541f6c7289","characters/dain_ahegao":"a68949dbd1c9fcfa34265953","characters/dain_angry":"38f221deb4ea51488aa32b00","characters/dain_bikini":"675d1a52cea84edc24dddd5f","characters/dain_bored":"00cf6f565494e86b710e7b9e","characters/dain_choking":"7e6b8526baf22a3b8706bd4a","characters/dain_climax":"b1549d56f24dbe7c0a943b65","characters/dain_climax_02":"7637d340311ea5a5e24a2d2b","characters/dain_climax_03":"b88583d754dfbb94ba0c1235","characters/dain_climax_04":"00c4b26bf21fd8db1663f430","characters/dain_climax_05":"586405854919391ce8bd6731","characters/dain_climax_06":"0e11d9419849c1f5f32dab1e","characters/dain_climax_07":"95c5aaded71d395cad576d25","characters/dain_climax_08":"b553c148c98b288fba7c1e10","characters/dain_climax_09":"5e1f6ce01db862993ce1b152","characters/dain_climax_10":"0710eca52e898ddc0c0f385a","characters/dain_climax_11":"986a4215970a420dd1221c21","characters/dain_confused":"d302245de84924ff52f32f92","characters/dain_cry":"decb6fc8c4c08db955ea923b","characters/dain_date_angry":"024d8d0bdcdd97685d30f3ed","characters/dain_date_laugh":"6964739037161705c0b6f8fb","characters/dain_date_normal":"d782c4080792d0bf492c8f61","characters/dain_date_sad":"eddcba5f443e55c35cf46604","characters/dain_date_shy":"ead66f6bb570deb4fcb1de76","characters/dain_date_sweat":"df8e862d958ddfb91dc90ba7","characters/dain_dazed":"2ffb37de78f3fe1d035ce855","characters/dain_dead":"3f795e5ebc625d1d2d3420af","characters/dain_disgusted":"08872bafc06d7be1ed376630","characters/dain_dry_smile":"cf6616cfd6c0f7a38609cb6d","characters/dain_dumbfounded":"0c1cc2488957e6c4c30188b3","characters/dain_entranced":"b208ade33dd5aa79eabd61a5","characters/dain_exhausted":"6e21496029af30203932f9fa","characters/dain_fainted":"4462d99bb83e033f4a6b8352","characters/dain_firm":"21442d59535e8056fcbeb4c3","characters/dain_flushed":"2d73371b9d4955cf85c73586","characters/dain_furious":"bbc6e6844c5ff0d3e1b03831","characters/dain_humiliated":"6294ef8a3430a4ecee115f13","characters/dain_laugh":"b0282efca3e9a513dd120a83","characters/dain_normal":"3dce26ce40f148d11888b8ed","characters/dain_pain":"3098b02efabd0d90966d76f3","characters/dain_pleading":"09c44baf1751a5bd6b7c06a5","characters/dain_pout":"ad330934188aa2453af98788","characters/dain_relieved":"911cb43031061f15eb3de844","characters/dain_sad":"94d54735dff6fc0a507e3b1f","characters/dain_scared":"ed9ca94d6f7744227020d7d8","characters/dain_scream":"57f2f4274a3bbb682de5eade","characters/dain_shy":"6c7854ee5e0f421a980d2a90","characters/dain_smile":"b1ff2fe70c7be4c9a3e36363","characters/dain_smirk":"de23d497945ad0bf9904be2a","characters/dain_sob":"a1a0c23088cd568de8832cac","characters/dain_soft_smile":"de77743dc1644c9a3a87864e","characters/dain_surprised":"8ef3afbff0d48c6d9009219d","characters/dain_sweat":"2cdbfec009e20c9a95232411","characters/dain_tired":"d38594f3d53aca630124663d","characters/dain_very_shy":"413b19d31f79dd0cc7a834e8","characters/dain_worried":"53cade0910d5b1954bba9da3","characters/haeun_aegyo":"376a6a6666d584331db45c4d","characters/haeun_ahegao":"b753c25ae6b0c738337ea8e7","characters/haeun_angry":"036d66c1d532b41bfbe150a6","characters/haeun_bored":"962f5ae23afe5a4d4fad24f3","characters/haeun_choking":"ad02e88dcf1f365bc7785fbe","characters/haeun_climax":"105793e5384356b489df0c3d","characters/haeun_climax_02":"65c8f34c0288c50a2ace7833","characters/haeun_climax_03":"5df499ed57e99a9bf8babee2","characters/haeun_climax_04":"bc9e7d413f538334a76192b2","characters/haeun_climax_05":"01ec087a5579c30e0a495de8","characters/haeun_climax_06":"1ce91698c77287f15858775c","characters/haeun_climax_07":"ae1661162118e55cdd85dcf5","characters/haeun_climax_08":"03ec93ead26a9b2c97d7f6bc","characters/haeun_confused":"72b3a06b6b3cd1fbaa78e699","characters/haeun_cry":"4810b7d83676d01815fdbbe4","characters/haeun_dazed":"d38b67fdf89b0d5e61abbc8e","characters/haeun_dead":"9e941c156cb408242c8107df","characters/haeun_disgusted":"ea6639685aca0597ed0bda14","characters/haeun_dry_smile":"e66f7045d26c3d33cbb23043","characters/haeun_dumbfounded":"bf70142a6cb0209a9242f0bb","characters/haeun_entranced":"d0422328f8e79fb6ec7a89dd","characters/haeun_exhausted":"310f514f61ef57b6245e5aa2","characters/haeun_fainted":"32f52b05843bbfa63689bf7d","characters/haeun_firm":"9143dfe9bd50c92b8e53976f","characters/haeun_flushed":"5ac4fa524c749f79396142de","characters/haeun_furious":"4802e22f024a86f984611380","characters/haeun_humiliated":"8af13d319a436c329cd9a5ef","characters/haeun_laugh":"64a3da6160c3ecd71a2ea5e8","characters/haeun_normal":"085a2efeb4fff5f11a04a8c1","characters/haeun_pain":"35409d248af1607de2a80e37","characters/haeun_pleading":"ee79a210035735b0102229f8","characters/haeun_pout":"b1d79fd6f2fada06274f8870","characters/haeun_relieved":"73f1a4e6524dd6cf92938beb","characters/haeun_sad":"0c19e821ce7c038747591df6","characters/haeun_scared":"8dbab2a87b24c5e4a2998c28","characters/haeun_scream":"f24d4055a02bb622469d2a85","characters/haeun_shy":"14e84b8edf71a5b7faae064d","characters/haeun_smile":"ed8e1bbf87b1fb0d098a58ab","characters/haeun_smirk":"8000ac7b3770aaca4d0aab70","characters/haeun_sob":"b53e5f6dfcc5ba89d684e6d0","characters/haeun_soft_smile":"9f3228447ecf5f24be33414c","characters/haeun_surprised":"8554ec890c62c98b91d7413b","characters/haeun_tired":"5b1d608d93002b7181be1f30","characters/haeun_very_shy":"ddea14f72d4ef10a731cfcdb","characters/haeun_worried":"d6af0712d14d24743e178da1","characters/junho_awkward":"3875a3c4f0ed9f307c194a45","characters/junho_normal":"64a502d5f325cddc2fdecb76","characters/minsu_aegyo":"c783c7c34654c1adfe7e4547","characters/minsu_bored":"643144515d323b753dcfa592","characters/minsu_choking":"9085336ffa260be8669db70a","characters/minsu_climax":"45d6420c48e8add6d215a9f8","characters/minsu_climax_02":"cee209a47dda5f255ae35ef6","characters/minsu_climax_03":"184fa114c7a1f8b1cf25cc3e","characters/minsu_climax_04":"12c52de084df30846e35ea66","characters/minsu_climax_05":"975c82d5019a8ffa2d3c12d8","characters/minsu_climax_06":"00151d650508f7a24b43f005","characters/minsu_confused":"c0b801a270c0ece7f83c58d9","characters/minsu_cry":"a73c159b7724cd2e2db3d68d","characters/minsu_dazed":"11bfbc4397fba71acc08d5b4","characters/minsu_dead":"480b0387aebdf794338d9e78","characters/minsu_disgusted":"2ee36df04fe8852a0eb5186e","characters/minsu_dry_smile":"fa01f46445753ea93a95e992","characters/minsu_dumbfounded":"f31a58d0ea65299ea5046950","characters/minsu_entranced":"c6ac1f3e014fe24fee449285","characters/minsu_exhausted":"14d70d3c78bf382f5bcebbd1","characters/minsu_fainted":"4f2caa28d6b5d69200f60a8b","characters/minsu_firm":"f3ee2d6518fe5df5be9df777","characters/minsu_furious":"e8585707df0e0165addd67b4","characters/minsu_humiliated":"018a7217ebd7c4726aba048d","characters/minsu_normal":"624be3043ae3e6db54ff85cf","characters/minsu_pain":"3d0f0830ad6a13797883f726","characters/minsu_pleading":"af87db65a506693e4c89f293","characters/minsu_relieved":"c15d3e358f440638997614f3","characters/minsu_scared":"b783c284b163a3c03dcdcbbc","characters/minsu_scream":"f70ba38f446f76be31816219","characters/minsu_smirk":"e7f382060afa06f790d3411e","characters/minsu_sob":"71c9780a91b9c5e6ea47623d","characters/minsu_soft_smile":"c3c66c04c44ea971c4d9e9dc","characters/minsu_surprised":"a351f8a2bb0c5c98e1d4cb64","characters/minsu_tired":"96ca8ad07a84221041c54fa0","characters/minsu_very_shy":"87fb93297d6edcb855fdee1f","characters/nurse_aegyo":"5247554be0dbd18070f5b46a","characters/nurse_ahegao":"dae09c8672e45e21bccb518a","characters/nurse_angry":"041455e42201defabf6541ec","characters/nurse_bikini":"2d02c75d38dad14d33e150df","characters/nurse_bored":"5aafe9f085e1607501eb0fab","characters/nurse_choking":"48753e5c8b6df8978c46f6b2","characters/nurse_climax":"ffe7fec9e279bf71a43d0c98","characters/nurse_climax_02":"a6ee61452b426cb9b80ea0f0","characters/nurse_climax_03":"c9b1dc25043589f080ef1031","characters/nurse_climax_04":"f2dcacb756cde79d6806d41e","characters/nurse_climax_05":"d52a2137fbfc6867ed1393cb","characters/nurse_climax_06":"2d010e67eaef46323592f3ed","characters/nurse_climax_07":"0f07e6b47ba465d329727552","characters/nurse_climax_08":"77bb96960bb07bbbf3b911de","characters/nurse_climax_09":"872f2deae52eb8933a1715eb","characters/nurse_confused":"8215e3a6fce790f78aff7149","characters/nurse_cry":"57901b1c395f8d05e6fe217a","characters/nurse_dazed":"2d697e8a436b2e1caa753e22","characters/nurse_dead":"2d6b724842d62e872ed906a3","characters/nurse_disgusted":"38ef48cedba82de08f66e958","characters/nurse_dry_smile":"e7a908e79f8cfba64fcd6d84","characters/nurse_dumbfounded":"fc2f9ab9a029085db1b43d2b","characters/nurse_entranced":"501a86938a49f3961a37dad8","characters/nurse_exhausted":"89542e1e9246b1dca0a8b316","characters/nurse_fainted":"ea55d4ebb5827e7cfbf9f46f","characters/nurse_firm":"02669ca340188ef3a9a5e449","characters/nurse_flushed":"84fe3837b1624ac29596fb0e","characters/nurse_furious":"fe89672f3596494f9f34ac2f","characters/nurse_home_angry":"af2350530eb915c7e97d7e6f","characters/nurse_home_normal":"b077253c0a2836b31dc9ac8a","characters/nurse_home_sad":"67f0aaef6e3e2b2ce2dd3f4a","characters/nurse_home_shy":"e04302a17a0f13e2109be62c","characters/nurse_home_smile":"8948249f1417e0ead8d72445","characters/nurse_humiliated":"a8a33764749d6623e3903213","characters/nurse_laugh":"b768e2cf313621063dfcd6b9","characters/nurse_normal":"ab76f6ee57fc7b03b5f0ab20","characters/nurse_pain":"9a90dc26b098a4056da324bf","characters/nurse_pleading":"ae3b6dedc21525f2e5a68e6c","characters/nurse_pout":"fb108994807082d289cccee8","characters/nurse_relieved":"da305da8d76281997f546825","characters/nurse_sad":"813b5e1b3988a616de345978","characters/nurse_scared":"ef7ffbc0621e5969d6fcca23","characters/nurse_scream":"477663b443ed067bd2f9d74c","characters/nurse_shy":"f2af6245ea97effdc4c5ca22","characters/nurse_smile":"d2023dc6b8fc04cfb46eb7d9","characters/nurse_smirk":"4cefdcda9d2b2f196a1fc262","characters/nurse_sob":"2cc02e4f71d4f8a3612cf54d","characters/nurse_soft_smile":"f7e37db55862e8c73f4bacdd","characters/nurse_surprised":"00c2e9c138ab4452746e49a5","characters/nurse_tired":"dfbcd4ef6c0017b3d31c2deb","characters/nurse_very_shy":"76e07e9ad7ddc96a1520f8d3","characters/nurse_worried":"1d6ecf9046e08d97af18308b","characters/seyoun_aegyo":"ddf58beda865e08eb6b6aefb","characters/seyoun_ahegao":"bb8f72a30e9994e6b87e16e9","characters/seyoun_angry":"56065e661e4dce95eaba6e79","characters/seyoun_back":"f07695d181f1c620f1fd53f7","characters/seyoun_bikini":"811254edce80a69af5e46c3b","characters/seyoun_bored":"ebf304b71016671655fad229","characters/seyoun_choking":"538423ef225dc180829e9731","characters/seyoun_climax":"3bffb8c63fa33a7f2a4865ce","characters/seyoun_climax_02":"46329cd559dee64ae19830f5","characters/seyoun_climax_03":"5ace9c04b661f6e4b558dbf2","characters/seyoun_climax_04":"9c834864fa78c1b0e7cc94dd","characters/seyoun_climax_05":"2d20d756ee5254c58a762a7c","characters/seyoun_climax_06":"dd3ba270d885caaf2faa9001","characters/seyoun_confused":"b370bfc4238204ba19d1a6e3","characters/seyoun_cry":"de72d405ad7360096db6cc93","characters/seyoun_date_laugh":"d9144d09e66677b8d1d04c0b","characters/seyoun_date_normal":"8b7c159f2d7d5552159ff5b3","characters/seyoun_date_sad":"1d0606969b5216aabc6e828d","characters/seyoun_date_shy":"ea8dbcf8c7c1fbd1e23903c6","characters/seyoun_date_worried":"30054d865bc2888dd3c80532","characters/seyoun_dazed":"dc14da91dcd79cdaea79258c","characters/seyoun_dead":"eafae1452b7d23eb527f0eeb","characters/seyoun_disgusted":"3b01ec7f68e55ffe47c881f2","characters/seyoun_dry_smile":"4ef3695b39e2b05dc02228aa","characters/seyoun_dumbfounded":"eeb0ac8613010bc5494398f0","characters/seyoun_entranced":"dd85a47d5fcb585bb3cde739","characters/seyoun_exhausted":"e3d3b1fcd30185a36af7b79a","characters/seyoun_fainted":"2b11da17a0d89114c3f8d88a","characters/seyoun_firm":"5bf1f4f9c463f394e7e0b684","characters/seyoun_flushed":"b6ac755956ba5ab0f288d53b","characters/seyoun_flushed_02":"e0a961291328966c25aef760","characters/seyoun_flushed_03":"67079db2584c97e4bc4e52ac","characters/seyoun_flushed_04":"09ac9fadc122cc01fc90d421","characters/seyoun_flushed_05":"bc4bb418b6e64255d1df5844","characters/seyoun_flushed_06":"b16b6ddf38695acbb125aade","characters/seyoun_furious":"278d5a96d16ffe10899e1dd1","characters/seyoun_humiliated":"a2091beda4d1caff768444b9","characters/seyoun_laugh":"3ec359000fcadc04f7b57d8b","characters/seyoun_normal":"b5397866922bfd76a2688d1e","characters/seyoun_pain":"20e12f564d2aa2d4af9c560d","characters/seyoun_pleading":"0e4f0bfa7ac32c5098191274","characters/seyoun_pout":"37866c783a37ac2d133eeba7","characters/seyoun_relieved":"26bd10783f00ebd93ed5718e","characters/seyoun_sad":"453b771f45b2acf090a95708","characters/seyoun_scared":"4bd02e52f03696fa018891aa","characters/seyoun_scream":"81989acd9a22f928b8db9462","characters/seyoun_shy":"3876837baa0a0ad621d91f0f","characters/seyoun_smile":"e569db93c2b1379e3067078b","characters/seyoun_smirk":"3f26006c390013596203248f","characters/seyoun_sob":"04c748e160f83e5debd3499a","characters/seyoun_soft_smile":"80823b2de775e84612fa859a","characters/seyoun_surprised":"dd9dba1d17d6c48a59d16485","characters/seyoun_tired":"96bddc2c034a10b66cd4ae46","characters/seyoun_very_shy":"cf7969bf4ebbfc4b98ac38c9","characters/seyoun_worried":"fb531a64bc685e21e211f320","characters/teacher_aegyo":"2203c982bd52480b13c74e94","characters/teacher_ahegao":"5b38c9c06b0190d028b16cdd","characters/teacher_angry":"a85c336f6516e20b47632f05","characters/teacher_bikini":"e28249e4880d2192538f472a","characters/teacher_bored":"e8837e324b4f7d3eebd9a2e2","characters/teacher_choking":"e39e7bc02454f91a8938ca9b","characters/teacher_climax":"74e4490c27f44a124da05f32","characters/teacher_climax_02":"470a2f6124f4ca4e07d29b01","characters/teacher_climax_03":"8f58981dd5b5df4b919ebe34","characters/teacher_climax_04":"0ea252e76749b9925c2121be","characters/teacher_climax_05":"04435a982e8ccb7bf6bf2bae","characters/teacher_climax_06":"e086fc97c45e6cfaa4399669","characters/teacher_climax_07":"4031ac8ecaabb66c7f806dc9","characters/teacher_climax_08":"befbb0b81db24a53d8958035","characters/teacher_climax_09":"639aba7819f3cce134b14e26","characters/teacher_climax_10":"3364bbdd08f02fdf036d358a","characters/teacher_confused":"60457ffa23d580f9c9d34368","characters/teacher_cry":"9ce31c1879659f3f5393a5c3","characters/teacher_dazed":"6dbcb649216b5a91e30d9b46","characters/teacher_dead":"338374dcb19e584b6cb4ea51","characters/teacher_disgusted":"fd353eddea3a0b57b3aec61d","characters/teacher_dry_smile":"5f1282b15c186791e7967690","characters/teacher_dumbfounded":"f691c3acc07c719ad3718436","characters/teacher_entranced":"ba312cbbaf74ec25c1ec479f","characters/teacher_exhausted":"d74a9830db73234054cc6c90","characters/teacher_fainted":"f6f266bcb145e436776197c5","characters/teacher_firm":"fa8ed9e57b0ce74c02c9c694","characters/teacher_flushed":"9d4102b68aba676464b9cb8b","characters/teacher_furious":"d58709a2f401de54aecdef56","characters/teacher_humiliated":"1d4fde0a9d93cabc909f727a","characters/teacher_laugh":"1c4b50f4f8155b45f89381b6","characters/teacher_normal":"41d9cdc0b18caf041634af03","characters/teacher_pain":"3fb8718649c6b339ea3a0611","characters/teacher_pleading":"f98624bad65835a295bbd30a","characters/teacher_pout":"a88121bdebe6797367fe1a7a","characters/teacher_relieved":"b3b014f48cce23fc651c5c9e","characters/teacher_sad":"c66f6f094b420f115d70ab71","characters/teacher_scared":"118bd06df49e8a358c82294b","characters/teacher_scream":"91ef93be882ecd37130f4a38","characters/teacher_shy":"a2e167b7792fb2b2044860eb","characters/teacher_smile":"14bf1b5cdf7b597d5f9cfe31","characters/teacher_smirk":"c9e8d9c5433a978ad950dd84","characters/teacher_sob":"8f5ce497ec2646293b5dd4b1","characters/teacher_soft_smile":"2ad74a65e04da960a23cfc10","characters/teacher_surprised":"6d7f608378905b69615d7655","characters/teacher_tired":"36461535c89a9be5602a0f95","characters/teacher_very_shy":"97d1847e49384110d3e26e01","characters/teacher_worried":"903b7128253bd2e39eebc4a1","characters/yuna_aegyo":"ac5202ddb90c18f734339b0e","characters/yuna_ahegao":"b22783dbe7f87ec566d57fe2","characters/yuna_angry":"93c51246a82211bd6f7170b3","characters/yuna_bikini":"f7e257282a62e3a43bf17635","characters/yuna_bored":"4a7800c30f5e167f9f7e43f0","characters/yuna_choking":"88cf28bc389c09c4cc4fdc02","characters/yuna_climax":"6326088da0bef34f3c07ddeb","characters/yuna_climax_02":"fdd1eafc32a32d6121f4e322","characters/yuna_climax_03":"61af635fa57f4bf00f4bf539","characters/yuna_climax_04":"f2a03305b136a866324b54f6","characters/yuna_climax_05":"717c1f6b2068d2facb3009b5","characters/yuna_climax_06":"e74159804085fdeb2741c07b","characters/yuna_climax_07":"8ab90d3670eaaacd884860fe","characters/yuna_climax_08":"237b660c165b1693dc924196","characters/yuna_climax_09":"8e12028359bfafc0012ef305","characters/yuna_confused":"ea3c7544abe27ef92b89929f","characters/yuna_cry":"d1de950520f3057008b83ce4","characters/yuna_date_bored":"af0ee8eee0e5b0b2502868c8","characters/yuna_date_normal":"c7e75fff9a7486c9489c8e86","characters/yuna_date_sad":"89198761f9d2150cc37f9062","characters/yuna_date_shy":"832656c4b3ec942272074691","characters/yuna_date_smile":"a2d8016faf929e276f3d3d2d","characters/yuna_dazed":"9cceeb80a9153480cf4e36ed","characters/yuna_dead":"9acb46b2941dad90b1488f20","characters/yuna_disgusted":"b8a2958de153434016ede361","characters/yuna_dry_smile":"99090b8a84d7fe3a1b59f175","characters/yuna_dumbfounded":"7c04660a9eba44b002bce69f","characters/yuna_entranced":"f27064940e7fb3dd3518866c","characters/yuna_exhausted":"abcc0bfd58dd8a59c5081582","characters/yuna_fainted":"d3ed90672101d18404f43b5d","characters/yuna_firm":"2dcae09e40c3810a56eadf60","characters/yuna_flushed":"fb07a63800f8ef6a34930759","characters/yuna_furious":"c9346d1c74b69e42b3483f94","characters/yuna_gallery_bikini_sexy_20260813":"7cfb2d83e446e8a8da023f1c","characters/yuna_humiliated":"c7a7a7b867c90c0e285e38cc","characters/yuna_laugh":"4be4423ad9b174768b54abbb","characters/yuna_normal":"afeb6f7addfd9bbd5ed3d570","characters/yuna_pain":"141ddde3084b7398efc4108b","characters/yuna_pleading":"a10cc6ff94cafc448b9278e5","characters/yuna_pout":"74033e94c118ec2c89d35442","characters/yuna_relieved":"075993a1adbd88c708d4f875","characters/yuna_sad":"76f3eab7fb011b78a6a5798a","characters/yuna_scared":"d1b36ac0d49998b8000d2fd2","characters/yuna_scream":"7ab6d266dbb33bf861e25dea","characters/yuna_shy":"513c4b7da47121bebda282e7","characters/yuna_smile":"cd237dbd2abecaa70b7d5746","characters/yuna_smirk":"2458cdec8fef26c762d81b97","characters/yuna_sob":"61c6a81147680d89810592d6","characters/yuna_soft_smile":"65015714479f453ee1d69c11","characters/yuna_surprised":"e7631ea43230625067368d39","characters/yuna_tired":"641866d284e1d8f916c9c1f6","characters/yuna_very_shy":"4c9e2a75aaed659d30abb59f","characters/yuna_worried":"151d93e6b52946fd20ccd574"};
  var CHARACTER_ASSET_IDS = {"assets/characters/dain/expressions/active/01/sprite":"characters/dain_active","assets/characters/dain/expressions/aegyo/01/sprite":"characters/dain_aegyo","assets/characters/dain/expressions/ahegao/01/sprite":"characters/dain_ahegao","assets/characters/dain/expressions/angry/01/sprite":"characters/dain_angry","assets/characters/dain/expressions/bikini/01/sprite":"characters/dain_bikini","assets/characters/dain/expressions/bored/01/sprite":"characters/dain_bored","assets/characters/dain/expressions/choking/01/sprite":"characters/dain_choking","assets/characters/dain/expressions/climax/01/sprite":"characters/dain_climax","assets/characters/dain/expressions/climax/02/sprite":"characters/dain_climax_02","assets/characters/dain/expressions/climax/03/sprite":"characters/dain_climax_03","assets/characters/dain/expressions/climax/04/sprite":"characters/dain_climax_04","assets/characters/dain/expressions/climax/05/sprite":"characters/dain_climax_05","assets/characters/dain/expressions/climax/06/sprite":"characters/dain_climax_06","assets/characters/dain/expressions/climax/07/sprite":"characters/dain_climax_07","assets/characters/dain/expressions/climax/08/sprite":"characters/dain_climax_08","assets/characters/dain/expressions/climax/09/sprite":"characters/dain_climax_09","assets/characters/dain/expressions/climax/10/sprite":"characters/dain_climax_10","assets/characters/dain/expressions/climax/11/sprite":"characters/dain_climax_11","assets/characters/dain/expressions/confused/01/sprite":"characters/dain_confused","assets/characters/dain/expressions/cry/01/sprite":"characters/dain_cry","assets/characters/dain/expressions/dazed/01/sprite":"characters/dain_dazed","assets/characters/dain/expressions/dead/01/sprite":"characters/dain_dead","assets/characters/dain/expressions/disgusted/01/sprite":"characters/dain_disgusted","assets/characters/dain/expressions/dry_smile/01/sprite":"characters/dain_dry_smile","assets/characters/dain/expressions/dumbfounded/01/sprite":"characters/dain_dumbfounded","assets/characters/dain/expressions/entranced/01/sprite":"characters/dain_entranced","assets/characters/dain/expressions/exhausted/01/sprite":"characters/dain_exhausted","assets/characters/dain/expressions/fainted/01/sprite":"characters/dain_fainted","assets/characters/dain/expressions/firm/01/sprite":"characters/dain_firm","assets/characters/dain/expressions/flushed/01/sprite":"characters/dain_flushed","assets/characters/dain/expressions/furious/01/sprite":"characters/dain_furious","assets/characters/dain/expressions/humiliated/01/sprite":"characters/dain_humiliated","assets/characters/dain/expressions/laugh/01/sprite":"characters/dain_laugh","assets/characters/dain/expressions/normal/01/sprite":"characters/dain_normal","assets/characters/dain/expressions/pain/01/sprite":"characters/dain_pain","assets/characters/dain/expressions/pleading/01/sprite":"characters/dain_pleading","assets/characters/dain/expressions/pout/01/sprite":"characters/dain_pout","assets/characters/dain/expressions/relieved/01/sprite":"characters/dain_relieved","assets/characters/dain/expressions/sad/01/sprite":"characters/dain_sad","assets/characters/dain/expressions/scared/01/sprite":"characters/dain_scared","assets/characters/dain/expressions/scream/01/sprite":"characters/dain_scream","assets/characters/dain/expressions/shy/01/sprite":"characters/dain_shy","assets/characters/dain/expressions/smile/01/sprite":"characters/dain_smile","assets/characters/dain/expressions/smirk/01/sprite":"characters/dain_smirk","assets/characters/dain/expressions/sob/01/sprite":"characters/dain_sob","assets/characters/dain/expressions/soft_smile/01/sprite":"characters/dain_soft_smile","assets/characters/dain/expressions/surprised/01/sprite":"characters/dain_surprised","assets/characters/dain/expressions/sweat/01/sprite":"characters/dain_sweat","assets/characters/dain/expressions/tired/01/sprite":"characters/dain_tired","assets/characters/dain/expressions/very_shy/01/sprite":"characters/dain_very_shy","assets/characters/dain/expressions/worried/01/sprite":"characters/dain_worried","assets/characters/dain/outfits/date/expressions/angry/01/sprite":"characters/dain_date_angry","assets/characters/dain/outfits/date/expressions/laugh/01/sprite":"characters/dain_date_laugh","assets/characters/dain/outfits/date/expressions/normal/01/sprite":"characters/dain_date_normal","assets/characters/dain/outfits/date/expressions/sad/01/sprite":"characters/dain_date_sad","assets/characters/dain/outfits/date/expressions/shy/01/sprite":"characters/dain_date_shy","assets/characters/dain/outfits/date/expressions/sweat/01/sprite":"characters/dain_date_sweat","assets/characters/haeun/expressions/aegyo/01/sprite":"characters/haeun_aegyo","assets/characters/haeun/expressions/ahegao/01/sprite":"characters/haeun_ahegao","assets/characters/haeun/expressions/angry/01/sprite":"characters/haeun_angry","assets/characters/haeun/expressions/bored/01/sprite":"characters/haeun_bored","assets/characters/haeun/expressions/choking/01/sprite":"characters/haeun_choking","assets/characters/haeun/expressions/climax/01/sprite":"characters/haeun_climax","assets/characters/haeun/expressions/climax/02/sprite":"characters/haeun_climax_02","assets/characters/haeun/expressions/climax/03/sprite":"characters/haeun_climax_03","assets/characters/haeun/expressions/climax/04/sprite":"characters/haeun_climax_04","assets/characters/haeun/expressions/climax/05/sprite":"characters/haeun_climax_05","assets/characters/haeun/expressions/climax/06/sprite":"characters/haeun_climax_06","assets/characters/haeun/expressions/climax/07/sprite":"characters/haeun_climax_07","assets/characters/haeun/expressions/climax/08/sprite":"characters/haeun_climax_08","assets/characters/haeun/expressions/confused/01/sprite":"characters/haeun_confused","assets/characters/haeun/expressions/cry/01/sprite":"characters/haeun_cry","assets/characters/haeun/expressions/dazed/01/sprite":"characters/haeun_dazed","assets/characters/haeun/expressions/dead/01/sprite":"characters/haeun_dead","assets/characters/haeun/expressions/disgusted/01/sprite":"characters/haeun_disgusted","assets/characters/haeun/expressions/dry_smile/01/sprite":"characters/haeun_dry_smile","assets/characters/haeun/expressions/dumbfounded/01/sprite":"characters/haeun_dumbfounded","assets/characters/haeun/expressions/entranced/01/sprite":"characters/haeun_entranced","assets/characters/haeun/expressions/exhausted/01/sprite":"characters/haeun_exhausted","assets/characters/haeun/expressions/fainted/01/sprite":"characters/haeun_fainted","assets/characters/haeun/expressions/firm/01/sprite":"characters/haeun_firm","assets/characters/haeun/expressions/flushed/01/sprite":"characters/haeun_flushed","assets/characters/haeun/expressions/furious/01/sprite":"characters/haeun_furious","assets/characters/haeun/expressions/humiliated/01/sprite":"characters/haeun_humiliated","assets/characters/haeun/expressions/laugh/01/sprite":"characters/haeun_laugh","assets/characters/haeun/expressions/normal/01/sprite":"characters/haeun_normal","assets/characters/haeun/expressions/pain/01/sprite":"characters/haeun_pain","assets/characters/haeun/expressions/pleading/01/sprite":"characters/haeun_pleading","assets/characters/haeun/expressions/pout/01/sprite":"characters/haeun_pout","assets/characters/haeun/expressions/relieved/01/sprite":"characters/haeun_relieved","assets/characters/haeun/expressions/sad/01/sprite":"characters/haeun_sad","assets/characters/haeun/expressions/scared/01/sprite":"characters/haeun_scared","assets/characters/haeun/expressions/scream/01/sprite":"characters/haeun_scream","assets/characters/haeun/expressions/shy/01/sprite":"characters/haeun_shy","assets/characters/haeun/expressions/smile/01/sprite":"characters/haeun_smile","assets/characters/haeun/expressions/smirk/01/sprite":"characters/haeun_smirk","assets/characters/haeun/expressions/sob/01/sprite":"characters/haeun_sob","assets/characters/haeun/expressions/soft_smile/01/sprite":"characters/haeun_soft_smile","assets/characters/haeun/expressions/surprised/01/sprite":"characters/haeun_surprised","assets/characters/haeun/expressions/tired/01/sprite":"characters/haeun_tired","assets/characters/haeun/expressions/very_shy/01/sprite":"characters/haeun_very_shy","assets/characters/haeun/expressions/worried/01/sprite":"characters/haeun_worried","assets/characters/junho/expressions/awkward/01/sprite":"characters/junho_awkward","assets/characters/junho/expressions/normal/01/sprite":"characters/junho_normal","assets/characters/minsu/expressions/aegyo/01/sprite":"characters/minsu_aegyo","assets/characters/minsu/expressions/bored/01/sprite":"characters/minsu_bored","assets/characters/minsu/expressions/choking/01/sprite":"characters/minsu_choking","assets/characters/minsu/expressions/climax/01/sprite":"characters/minsu_climax","assets/characters/minsu/expressions/climax/02/sprite":"characters/minsu_climax_02","assets/characters/minsu/expressions/climax/03/sprite":"characters/minsu_climax_03","assets/characters/minsu/expressions/climax/04/sprite":"characters/minsu_climax_04","assets/characters/minsu/expressions/climax/05/sprite":"characters/minsu_climax_05","assets/characters/minsu/expressions/climax/06/sprite":"characters/minsu_climax_06","assets/characters/minsu/expressions/confused/01/sprite":"characters/minsu_confused","assets/characters/minsu/expressions/cry/01/sprite":"characters/minsu_cry","assets/characters/minsu/expressions/dazed/01/sprite":"characters/minsu_dazed","assets/characters/minsu/expressions/dead/01/sprite":"characters/minsu_dead","assets/characters/minsu/expressions/disgusted/01/sprite":"characters/minsu_disgusted","assets/characters/minsu/expressions/dry_smile/01/sprite":"characters/minsu_dry_smile","assets/characters/minsu/expressions/dumbfounded/01/sprite":"characters/minsu_dumbfounded","assets/characters/minsu/expressions/entranced/01/sprite":"characters/minsu_entranced","assets/characters/minsu/expressions/exhausted/01/sprite":"characters/minsu_exhausted","assets/characters/minsu/expressions/fainted/01/sprite":"characters/minsu_fainted","assets/characters/minsu/expressions/firm/01/sprite":"characters/minsu_firm","assets/characters/minsu/expressions/furious/01/sprite":"characters/minsu_furious","assets/characters/minsu/expressions/humiliated/01/sprite":"characters/minsu_humiliated","assets/characters/minsu/expressions/normal/01/sprite":"characters/minsu_normal","assets/characters/minsu/expressions/pain/01/sprite":"characters/minsu_pain","assets/characters/minsu/expressions/pleading/01/sprite":"characters/minsu_pleading","assets/characters/minsu/expressions/relieved/01/sprite":"characters/minsu_relieved","assets/characters/minsu/expressions/scared/01/sprite":"characters/minsu_scared","assets/characters/minsu/expressions/scream/01/sprite":"characters/minsu_scream","assets/characters/minsu/expressions/smirk/01/sprite":"characters/minsu_smirk","assets/characters/minsu/expressions/sob/01/sprite":"characters/minsu_sob","assets/characters/minsu/expressions/soft_smile/01/sprite":"characters/minsu_soft_smile","assets/characters/minsu/expressions/surprised/01/sprite":"characters/minsu_surprised","assets/characters/minsu/expressions/tired/01/sprite":"characters/minsu_tired","assets/characters/minsu/expressions/very_shy/01/sprite":"characters/minsu_very_shy","assets/characters/nurse/expressions/aegyo/01/sprite":"characters/nurse_aegyo","assets/characters/nurse/expressions/ahegao/01/sprite":"characters/nurse_ahegao","assets/characters/nurse/expressions/angry/01/sprite":"characters/nurse_angry","assets/characters/nurse/expressions/bikini/01/sprite":"characters/nurse_bikini","assets/characters/nurse/expressions/bored/01/sprite":"characters/nurse_bored","assets/characters/nurse/expressions/choking/01/sprite":"characters/nurse_choking","assets/characters/nurse/expressions/climax/01/sprite":"characters/nurse_climax","assets/characters/nurse/expressions/climax/02/sprite":"characters/nurse_climax_02","assets/characters/nurse/expressions/climax/03/sprite":"characters/nurse_climax_03","assets/characters/nurse/expressions/climax/04/sprite":"characters/nurse_climax_04","assets/characters/nurse/expressions/climax/05/sprite":"characters/nurse_climax_05","assets/characters/nurse/expressions/climax/06/sprite":"characters/nurse_climax_06","assets/characters/nurse/expressions/climax/07/sprite":"characters/nurse_climax_07","assets/characters/nurse/expressions/climax/08/sprite":"characters/nurse_climax_08","assets/characters/nurse/expressions/climax/09/sprite":"characters/nurse_climax_09","assets/characters/nurse/expressions/confused/01/sprite":"characters/nurse_confused","assets/characters/nurse/expressions/cry/01/sprite":"characters/nurse_cry","assets/characters/nurse/expressions/dazed/01/sprite":"characters/nurse_dazed","assets/characters/nurse/expressions/dead/01/sprite":"characters/nurse_dead","assets/characters/nurse/expressions/disgusted/01/sprite":"characters/nurse_disgusted","assets/characters/nurse/expressions/dry_smile/01/sprite":"characters/nurse_dry_smile","assets/characters/nurse/expressions/dumbfounded/01/sprite":"characters/nurse_dumbfounded","assets/characters/nurse/expressions/entranced/01/sprite":"characters/nurse_entranced","assets/characters/nurse/expressions/exhausted/01/sprite":"characters/nurse_exhausted","assets/characters/nurse/expressions/fainted/01/sprite":"characters/nurse_fainted","assets/characters/nurse/expressions/firm/01/sprite":"characters/nurse_firm","assets/characters/nurse/expressions/flushed/01/sprite":"characters/nurse_flushed","assets/characters/nurse/expressions/furious/01/sprite":"characters/nurse_furious","assets/characters/nurse/expressions/humiliated/01/sprite":"characters/nurse_humiliated","assets/characters/nurse/expressions/laugh/01/sprite":"characters/nurse_laugh","assets/characters/nurse/expressions/normal/01/sprite":"characters/nurse_normal","assets/characters/nurse/expressions/pain/01/sprite":"characters/nurse_pain","assets/characters/nurse/expressions/pleading/01/sprite":"characters/nurse_pleading","assets/characters/nurse/expressions/pout/01/sprite":"characters/nurse_pout","assets/characters/nurse/expressions/relieved/01/sprite":"characters/nurse_relieved","assets/characters/nurse/expressions/sad/01/sprite":"characters/nurse_sad","assets/characters/nurse/expressions/scared/01/sprite":"characters/nurse_scared","assets/characters/nurse/expressions/scream/01/sprite":"characters/nurse_scream","assets/characters/nurse/expressions/shy/01/sprite":"characters/nurse_shy","assets/characters/nurse/expressions/smile/01/sprite":"characters/nurse_smile","assets/characters/nurse/expressions/smirk/01/sprite":"characters/nurse_smirk","assets/characters/nurse/expressions/sob/01/sprite":"characters/nurse_sob","assets/characters/nurse/expressions/soft_smile/01/sprite":"characters/nurse_soft_smile","assets/characters/nurse/expressions/surprised/01/sprite":"characters/nurse_surprised","assets/characters/nurse/expressions/tired/01/sprite":"characters/nurse_tired","assets/characters/nurse/expressions/very_shy/01/sprite":"characters/nurse_very_shy","assets/characters/nurse/expressions/worried/01/sprite":"characters/nurse_worried","assets/characters/nurse/outfits/home/expressions/angry/01/sprite":"characters/nurse_home_angry","assets/characters/nurse/outfits/home/expressions/normal/01/sprite":"characters/nurse_home_normal","assets/characters/nurse/outfits/home/expressions/sad/01/sprite":"characters/nurse_home_sad","assets/characters/nurse/outfits/home/expressions/shy/01/sprite":"characters/nurse_home_shy","assets/characters/nurse/outfits/home/expressions/smile/01/sprite":"characters/nurse_home_smile","assets/characters/seoyeon/expressions/aegyo/01/sprite":"characters/seyoun_aegyo","assets/characters/seoyeon/expressions/ahegao/01/sprite":"characters/seyoun_ahegao","assets/characters/seoyeon/expressions/angry/01/sprite":"characters/seyoun_angry","assets/characters/seoyeon/expressions/back/01/sprite":"characters/seyoun_back","assets/characters/seoyeon/expressions/bikini/01/sprite":"characters/seyoun_bikini","assets/characters/seoyeon/expressions/bored/01/sprite":"characters/seyoun_bored","assets/characters/seoyeon/expressions/choking/01/sprite":"characters/seyoun_choking","assets/characters/seoyeon/expressions/climax/01/sprite":"characters/seyoun_climax","assets/characters/seoyeon/expressions/climax/02/sprite":"characters/seyoun_climax_02","assets/characters/seoyeon/expressions/climax/03/sprite":"characters/seyoun_climax_03","assets/characters/seoyeon/expressions/climax/04/sprite":"characters/seyoun_climax_04","assets/characters/seoyeon/expressions/climax/05/sprite":"characters/seyoun_climax_05","assets/characters/seoyeon/expressions/climax/06/sprite":"characters/seyoun_climax_06","assets/characters/seoyeon/expressions/confused/01/sprite":"characters/seyoun_confused","assets/characters/seoyeon/expressions/cry/01/sprite":"characters/seyoun_cry","assets/characters/seoyeon/expressions/dazed/01/sprite":"characters/seyoun_dazed","assets/characters/seoyeon/expressions/dead/01/sprite":"characters/seyoun_dead","assets/characters/seoyeon/expressions/disgusted/01/sprite":"characters/seyoun_disgusted","assets/characters/seoyeon/expressions/dry_smile/01/sprite":"characters/seyoun_dry_smile","assets/characters/seoyeon/expressions/dumbfounded/01/sprite":"characters/seyoun_dumbfounded","assets/characters/seoyeon/expressions/entranced/01/sprite":"characters/seyoun_entranced","assets/characters/seoyeon/expressions/exhausted/01/sprite":"characters/seyoun_exhausted","assets/characters/seoyeon/expressions/fainted/01/sprite":"characters/seyoun_fainted","assets/characters/seoyeon/expressions/firm/01/sprite":"characters/seyoun_firm","assets/characters/seoyeon/expressions/flushed/01/sprite":"characters/seyoun_flushed","assets/characters/seoyeon/expressions/flushed/02/sprite":"characters/seyoun_flushed_02","assets/characters/seoyeon/expressions/flushed/03/sprite":"characters/seyoun_flushed_03","assets/characters/seoyeon/expressions/flushed/04/sprite":"characters/seyoun_flushed_04","assets/characters/seoyeon/expressions/flushed/05/sprite":"characters/seyoun_flushed_05","assets/characters/seoyeon/expressions/flushed/06/sprite":"characters/seyoun_flushed_06","assets/characters/seoyeon/expressions/furious/01/sprite":"characters/seyoun_furious","assets/characters/seoyeon/expressions/humiliated/01/sprite":"characters/seyoun_humiliated","assets/characters/seoyeon/expressions/laugh/01/sprite":"characters/seyoun_laugh","assets/characters/seoyeon/expressions/normal/01/sprite":"characters/seyoun_normal","assets/characters/seoyeon/expressions/pain/01/sprite":"characters/seyoun_pain","assets/characters/seoyeon/expressions/pleading/01/sprite":"characters/seyoun_pleading","assets/characters/seoyeon/expressions/pout/01/sprite":"characters/seyoun_pout","assets/characters/seoyeon/expressions/relieved/01/sprite":"characters/seyoun_relieved","assets/characters/seoyeon/expressions/sad/01/sprite":"characters/seyoun_sad","assets/characters/seoyeon/expressions/scared/01/sprite":"characters/seyoun_scared","assets/characters/seoyeon/expressions/scream/01/sprite":"characters/seyoun_scream","assets/characters/seoyeon/expressions/shy/01/sprite":"characters/seyoun_shy","assets/characters/seoyeon/expressions/smile/01/sprite":"characters/seyoun_smile","assets/characters/seoyeon/expressions/smirk/01/sprite":"characters/seyoun_smirk","assets/characters/seoyeon/expressions/sob/01/sprite":"characters/seyoun_sob","assets/characters/seoyeon/expressions/soft_smile/01/sprite":"characters/seyoun_soft_smile","assets/characters/seoyeon/expressions/surprised/01/sprite":"characters/seyoun_surprised","assets/characters/seoyeon/expressions/tired/01/sprite":"characters/seyoun_tired","assets/characters/seoyeon/expressions/very_shy/01/sprite":"characters/seyoun_very_shy","assets/characters/seoyeon/expressions/worried/01/sprite":"characters/seyoun_worried","assets/characters/seoyeon/outfits/date/expressions/laugh/01/sprite":"characters/seyoun_date_laugh","assets/characters/seoyeon/outfits/date/expressions/normal/01/sprite":"characters/seyoun_date_normal","assets/characters/seoyeon/outfits/date/expressions/sad/01/sprite":"characters/seyoun_date_sad","assets/characters/seoyeon/outfits/date/expressions/shy/01/sprite":"characters/seyoun_date_shy","assets/characters/seoyeon/outfits/date/expressions/worried/01/sprite":"characters/seyoun_date_worried","assets/characters/teacher/expressions/aegyo/01/sprite":"characters/teacher_aegyo","assets/characters/teacher/expressions/ahegao/01/sprite":"characters/teacher_ahegao","assets/characters/teacher/expressions/angry/01/sprite":"characters/teacher_angry","assets/characters/teacher/expressions/bikini/01/sprite":"characters/teacher_bikini","assets/characters/teacher/expressions/bored/01/sprite":"characters/teacher_bored","assets/characters/teacher/expressions/choking/01/sprite":"characters/teacher_choking","assets/characters/teacher/expressions/climax/01/sprite":"characters/teacher_climax","assets/characters/teacher/expressions/climax/02/sprite":"characters/teacher_climax_02","assets/characters/teacher/expressions/climax/03/sprite":"characters/teacher_climax_03","assets/characters/teacher/expressions/climax/04/sprite":"characters/teacher_climax_04","assets/characters/teacher/expressions/climax/05/sprite":"characters/teacher_climax_05","assets/characters/teacher/expressions/climax/06/sprite":"characters/teacher_climax_06","assets/characters/teacher/expressions/climax/07/sprite":"characters/teacher_climax_07","assets/characters/teacher/expressions/climax/08/sprite":"characters/teacher_climax_08","assets/characters/teacher/expressions/climax/09/sprite":"characters/teacher_climax_09","assets/characters/teacher/expressions/climax/10/sprite":"characters/teacher_climax_10","assets/characters/teacher/expressions/confused/01/sprite":"characters/teacher_confused","assets/characters/teacher/expressions/cry/01/sprite":"characters/teacher_cry","assets/characters/teacher/expressions/dazed/01/sprite":"characters/teacher_dazed","assets/characters/teacher/expressions/dead/01/sprite":"characters/teacher_dead","assets/characters/teacher/expressions/disgusted/01/sprite":"characters/teacher_disgusted","assets/characters/teacher/expressions/dry_smile/01/sprite":"characters/teacher_dry_smile","assets/characters/teacher/expressions/dumbfounded/01/sprite":"characters/teacher_dumbfounded","assets/characters/teacher/expressions/entranced/01/sprite":"characters/teacher_entranced","assets/characters/teacher/expressions/exhausted/01/sprite":"characters/teacher_exhausted","assets/characters/teacher/expressions/fainted/01/sprite":"characters/teacher_fainted","assets/characters/teacher/expressions/firm/01/sprite":"characters/teacher_firm","assets/characters/teacher/expressions/flushed/01/sprite":"characters/teacher_flushed","assets/characters/teacher/expressions/furious/01/sprite":"characters/teacher_furious","assets/characters/teacher/expressions/humiliated/01/sprite":"characters/teacher_humiliated","assets/characters/teacher/expressions/laugh/01/sprite":"characters/teacher_laugh","assets/characters/teacher/expressions/normal/01/sprite":"characters/teacher_normal","assets/characters/teacher/expressions/pain/01/sprite":"characters/teacher_pain","assets/characters/teacher/expressions/pleading/01/sprite":"characters/teacher_pleading","assets/characters/teacher/expressions/pout/01/sprite":"characters/teacher_pout","assets/characters/teacher/expressions/relieved/01/sprite":"characters/teacher_relieved","assets/characters/teacher/expressions/sad/01/sprite":"characters/teacher_sad","assets/characters/teacher/expressions/scared/01/sprite":"characters/teacher_scared","assets/characters/teacher/expressions/scream/01/sprite":"characters/teacher_scream","assets/characters/teacher/expressions/shy/01/sprite":"characters/teacher_shy","assets/characters/teacher/expressions/smile/01/sprite":"characters/teacher_smile","assets/characters/teacher/expressions/smirk/01/sprite":"characters/teacher_smirk","assets/characters/teacher/expressions/sob/01/sprite":"characters/teacher_sob","assets/characters/teacher/expressions/soft_smile/01/sprite":"characters/teacher_soft_smile","assets/characters/teacher/expressions/surprised/01/sprite":"characters/teacher_surprised","assets/characters/teacher/expressions/tired/01/sprite":"characters/teacher_tired","assets/characters/teacher/expressions/very_shy/01/sprite":"characters/teacher_very_shy","assets/characters/teacher/expressions/worried/01/sprite":"characters/teacher_worried","assets/characters/yuna/expressions/aegyo/01/sprite":"characters/yuna_aegyo","assets/characters/yuna/expressions/ahegao/01/sprite":"characters/yuna_ahegao","assets/characters/yuna/expressions/angry/01/sprite":"characters/yuna_angry","assets/characters/yuna/expressions/bikini/01/sprite":"characters/yuna_bikini","assets/characters/yuna/expressions/bored/01/sprite":"characters/yuna_bored","assets/characters/yuna/expressions/choking/01/sprite":"characters/yuna_choking","assets/characters/yuna/expressions/climax/01/sprite":"characters/yuna_climax","assets/characters/yuna/expressions/climax/02/sprite":"characters/yuna_climax_02","assets/characters/yuna/expressions/climax/03/sprite":"characters/yuna_climax_03","assets/characters/yuna/expressions/climax/04/sprite":"characters/yuna_climax_04","assets/characters/yuna/expressions/climax/05/sprite":"characters/yuna_climax_05","assets/characters/yuna/expressions/climax/06/sprite":"characters/yuna_climax_06","assets/characters/yuna/expressions/climax/07/sprite":"characters/yuna_climax_07","assets/characters/yuna/expressions/climax/08/sprite":"characters/yuna_climax_08","assets/characters/yuna/expressions/climax/09/sprite":"characters/yuna_climax_09","assets/characters/yuna/expressions/confused/01/sprite":"characters/yuna_confused","assets/characters/yuna/expressions/cry/01/sprite":"characters/yuna_cry","assets/characters/yuna/expressions/dazed/01/sprite":"characters/yuna_dazed","assets/characters/yuna/expressions/dead/01/sprite":"characters/yuna_dead","assets/characters/yuna/expressions/disgusted/01/sprite":"characters/yuna_disgusted","assets/characters/yuna/expressions/dry_smile/01/sprite":"characters/yuna_dry_smile","assets/characters/yuna/expressions/dumbfounded/01/sprite":"characters/yuna_dumbfounded","assets/characters/yuna/expressions/entranced/01/sprite":"characters/yuna_entranced","assets/characters/yuna/expressions/exhausted/01/sprite":"characters/yuna_exhausted","assets/characters/yuna/expressions/fainted/01/sprite":"characters/yuna_fainted","assets/characters/yuna/expressions/firm/01/sprite":"characters/yuna_firm","assets/characters/yuna/expressions/flushed/01/sprite":"characters/yuna_flushed","assets/characters/yuna/expressions/furious/01/sprite":"characters/yuna_furious","assets/characters/yuna/expressions/gallery_bikini_sexy_20260813/01/sprite":"characters/yuna_gallery_bikini_sexy_20260813","assets/characters/yuna/expressions/humiliated/01/sprite":"characters/yuna_humiliated","assets/characters/yuna/expressions/laugh/01/sprite":"characters/yuna_laugh","assets/characters/yuna/expressions/normal/01/sprite":"characters/yuna_normal","assets/characters/yuna/expressions/pain/01/sprite":"characters/yuna_pain","assets/characters/yuna/expressions/pleading/01/sprite":"characters/yuna_pleading","assets/characters/yuna/expressions/pout/01/sprite":"characters/yuna_pout","assets/characters/yuna/expressions/relieved/01/sprite":"characters/yuna_relieved","assets/characters/yuna/expressions/sad/01/sprite":"characters/yuna_sad","assets/characters/yuna/expressions/scared/01/sprite":"characters/yuna_scared","assets/characters/yuna/expressions/scream/01/sprite":"characters/yuna_scream","assets/characters/yuna/expressions/shy/01/sprite":"characters/yuna_shy","assets/characters/yuna/expressions/smile/01/sprite":"characters/yuna_smile","assets/characters/yuna/expressions/smirk/01/sprite":"characters/yuna_smirk","assets/characters/yuna/expressions/sob/01/sprite":"characters/yuna_sob","assets/characters/yuna/expressions/soft_smile/01/sprite":"characters/yuna_soft_smile","assets/characters/yuna/expressions/surprised/01/sprite":"characters/yuna_surprised","assets/characters/yuna/expressions/tired/01/sprite":"characters/yuna_tired","assets/characters/yuna/expressions/very_shy/01/sprite":"characters/yuna_very_shy","assets/characters/yuna/expressions/worried/01/sprite":"characters/yuna_worried","assets/characters/yuna/outfits/date/expressions/bored/01/sprite":"characters/yuna_date_bored","assets/characters/yuna/outfits/date/expressions/normal/01/sprite":"characters/yuna_date_normal","assets/characters/yuna/outfits/date/expressions/sad/01/sprite":"characters/yuna_date_sad","assets/characters/yuna/outfits/date/expressions/shy/01/sprite":"characters/yuna_date_shy","assets/characters/yuna/outfits/date/expressions/smile/01/sprite":"characters/yuna_date_smile"};
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
