/**
 * CupidMedia - client gate for encrypted gallery/character assets.
 *
 * Decrypt key never ships here. Explicit progression grants and media reads
 * use a signed HttpOnly session. Image loading and prefetching never grant access.
 */

(function (global) {
  'use strict'; var __oc0, __oc1;

  if (global.__CUPID_MEDIA_GATE) {
    try { (((__oc1 = (__oc0 = global.CupidMedia) === null || __oc0 === void 0 ? void 0 : __oc0.hydrateProtectedImages) === null || __oc1 === void 0 ? void 0 : __oc1.call(__oc0))); } catch (_) {}
    return;
  }
  global.__CUPID_MEDIA_GATE = true;

  var GUEST_KEY = 'cupid_guest_id';
  var MIGRATION_KEY = 'cupid_gallery_media_migrated_v1';
  var PLACEHOLDER = 'assets/images/ui/character-silhouette.svg';
  var BATCH_CAP = 100;
  // BEGIN GENERATED MEDIA VERSIONS
  var MEDIA_VERSIONS = {"background/dain_depression_event1":"7ee4549e9c01d86d8ceddab7","background/dain_hurt_event1":"03c309e91448e74d0f6524af","background/ending_alone":"be11653d9adf4a7b306b9f91","background/ending_bittersweet":"51eab37dfe08db46f30d72a8","background/ending_bittersweet_nurse":"3d0e4a5f18806c68e6be9014","background/ending_bittersweet_teacher":"39233a3911500d9e632dc38b","background/ending_confess_fail_dain":"787b7ab28af2ca24cc4a6fad","background/ending_confess_fail_seoyeon":"73831ccd142f8a97d9e6183a","background/ending_confess_fail_yuna":"e32c7f7a67d89e96a8edef1d","background/ending_friend":"3d8c2f3494301d31d369e80a","background/ending_good_dain":"209cb4651368bfa637e273d5","background/ending_good_nurse":"753c7a2e322c44c535de071b","background/ending_good_seoyeon":"9619f8ad7d14301d96d44b24","background/ending_good_teacher":"2e6dd0c2716bf020f13cb957","background/ending_good_yuna":"09c67542dd7e066422d1843e","background/ending_harem":"00fc46d686b1dc0881557efe","background/ending_mayhem":"eebc0728b58bcec16e108f4f","background/ending_perfect_dain":"750033d2213d9d0240fdf07a","background/ending_perfect_haeun":"9903cd5bf1aa4e4465484b0e","background/ending_perfect_nurse":"2efe79fb6a3ccaa6bfc42ec5","background/ending_perfect_seoyeon":"513a2715bac51c0b403407ed","background/ending_perfect_teacher":"fe8877f9d320958a916ec193","background/ending_perfect_yuna":"d474988bda580a4fa93e9bdb","background/ending_true_dain":"208f6d687989178581114801","background/ending_true_nurse":"4727b2407b6623fd802285f8","background/ending_true_seoyeon":"edda8686b4b472e5099da930","background/ending_true_teacher":"14adfae607797f5fccdf601c","background/ending_true_yuna":"81604f5804f639ca8f67601c","background/event_haeun_reputation":"8b2edb7e9c3b3b7c804362ba","background/event_haeun_trust":"080f10ba1c95792d44d0de72","background/event_seoyeon_succulent":"839c54f07fdfee9f1a6c6cf0","background/event_temptation_dain":"ea1f573b313ef7004b352a28","background/event_temptation_seoyeon":"139380703754eeefce44522d","background/event_temptation_yuna":"a3c33707fefd16c91df8d4cf","background/event_yuna_reading":"f9fe8aae463477345c4cd825","background/nurse_home_event1":"8fb762c5beb1d01ee83bc97b","characters/dain_active":"acecdda3ffdcd20aa99b2875","characters/dain_aegyo":"54a77217951c721d35a1488c","characters/dain_afterglow":"86102e3dd5f360d4c140f882","characters/dain_ahegao":"38e09d4da9f2784710a6676b","characters/dain_angry":"2491efcba0015ac26ef4dec9","characters/dain_begging_lust":"a6d687424de014fe7e5d2d91","characters/dain_betrayed":"bb12137005dd08b28bc27123","characters/dain_bikini":"675d1a52cea84edc24dddd5f","characters/dain_bored":"c0c888c13c4e3f3aa64617dd","characters/dain_choking":"52e24c5a8fbf1525460c2c01","characters/dain_climax":"7c9ce2032453fb6d7bd0fb9d","characters/dain_climax_02":"d77067d9fa81c3ed62227354","characters/dain_climax_03":"7678e82c6393ac457d985b11","characters/dain_climax_04":"5ef34e2a5da3bb5e4ff3616e","characters/dain_climax_05":"31c633dac42a6aa82e2e9132","characters/dain_climax_06":"29caeccf56a95f187fb74e26","characters/dain_climax_07":"5c0137223c8c2ba90baef573","characters/dain_climax_08":"1e3b3cc26448a3293c2d99c2","characters/dain_climax_09":"e090981c1eebf686e253a603","characters/dain_climax_10":"f6a145966c6c0d02ab3ac169","characters/dain_climax_11":"cbfd2a4b25199f0d2e7fabc5","characters/dain_cold":"bf18281b301efa28b4613cf8","characters/dain_combat_ready":"50997ea8005c282a939ec565","characters/dain_confused":"3bf93b435abccc98c35ab797","characters/dain_cry":"62b5290009eb7e2620ae7af5","characters/dain_date_active":"43ecf8d64ef20593b010b346","characters/dain_date_aegyo":"f6470b13e07036fce510036b","characters/dain_date_afterglow":"924f40884e2978af0fa54462","characters/dain_date_ahegao":"5fdcf3cb7b6e9239f1336e44","characters/dain_date_angry":"f311166e736e25579b24a4fa","characters/dain_date_begging_lust":"2138c8a4ae08bdf444b26e07","characters/dain_date_betrayed":"4db4490d315847970b61e773","characters/dain_date_bored":"f8652f265037f6289df03e05","characters/dain_date_choking":"475b06affc7319954038275f","characters/dain_date_climax":"5748886a1731ee2bd58e2c11","characters/dain_date_cold":"7cda0f8365e24549293ccc91","characters/dain_date_combat_ready":"e51f19402b577d6d99b9592e","characters/dain_date_confused":"e47dcca335c7f27dcbc1a864","characters/dain_date_cry":"c473ce12cd845dcfc1a500e6","characters/dain_date_dazed":"00e116416f7d6637728b1678","characters/dain_date_dead":"934d3541e36563752fd03a94","characters/dain_date_disgusted":"06f1cb1eb4de53b07ae4696c","characters/dain_date_dominant_aroused":"ad8a42dea74b1cac27f0fbbf","characters/dain_date_dry_smile":"0e811124b365d07f8f343134","characters/dain_date_dumbfounded":"4b7faffd07b5e159cc1c64f4","characters/dain_date_enduring":"95c15310199e4ce346f5bff9","characters/dain_date_entranced":"a6b15ae80a4ac16ccfba9df2","characters/dain_date_exhausted":"656564948798f56f5256ccfa","characters/dain_date_fainted":"b0e1b91d26b251ce2859f6ad","characters/dain_date_firm":"7a9680c0066270c92e855bf8","characters/dain_date_flushed":"451f0fe76178768091710a7b","characters/dain_date_furious":"521e28d702485b57b7617837","characters/dain_date_groggy":"182d42a854b06522b0d4af11","characters/dain_date_humiliated":"69bbe2b6bdc569a78ae41b7a","characters/dain_date_jealous":"4d7d692f21ddd91920ce70d1","characters/dain_date_kiss":"411dc5f7dd6501102def8c93","characters/dain_date_laugh":"db52542591d9da4561dd1df0","characters/dain_date_lovestruck":"e47a94b8de33e20ed8d53ce5","characters/dain_date_messy_afterglow":"951c6cd3094e92ad608cc65e","characters/dain_date_normal":"262abf8666a117a4e6e5b978","characters/dain_date_oral_service":"1b382ad7618ea3942cd87f57","characters/dain_date_pain":"ec7cac438a13f2fe492d8607","characters/dain_date_pleading":"71827295119ab134c65cb15e","characters/dain_date_pout":"a61f3116faf73ab31829c3dd","characters/dain_date_relieved":"e9544578d08caa312b33b1f1","characters/dain_date_sad":"ac3bf32b41ab3c53e368ab46","characters/dain_date_scared":"ce8252c523495f5768cb46db","characters/dain_date_scheming":"ce0f38523c18284cbd16b5c8","characters/dain_date_scream":"4e5020a3c86364940a1dcb6d","characters/dain_date_seductive":"3cc95fb9bd84dd35bb592eed","characters/dain_date_shy":"1b86a68b42e7d46de4a89994","characters/dain_date_smile":"2ca2e9877d6da66bb504d9b0","characters/dain_date_smirk":"f6b83011337d557bb3f9d274","characters/dain_date_sob":"598fc956ff133d093e61422a","characters/dain_date_soft_smile":"945351e8e8945eca107ead0d","characters/dain_date_surprised":"a6f96967b393cbba8f6fd639","characters/dain_date_suspicious":"841e0aa39feb59c09b080e29","characters/dain_date_sweat":"8c6258e782fb40f67b7cb67d","characters/dain_date_tired":"9a2583e00ff542a4f10cb344","characters/dain_date_touched":"b24a90227cec749202ac4a9a","characters/dain_date_undressed_shy":"21edfd18d20e0c64b171f280","characters/dain_date_very_shy":"8e68ebad386e9de6cbae1bcd","characters/dain_date_worried":"8edcc5bb95b79d53451e0bc5","characters/dain_dazed":"da9aae3f72769a1f2e2f318f","characters/dain_dead":"929788836dc2066e97d8d373","characters/dain_disgusted":"2dac05e65a9f907ed47edfed","characters/dain_dominant_aroused":"60705e7dfd8f3902dfb90db1","characters/dain_dry_smile":"00c42ed047a8a0bd1a8be5a5","characters/dain_dumbfounded":"35dc86ded37d39517ca5eebb","characters/dain_enduring":"5c6f4b81f32c098d5346a782","characters/dain_entranced":"c79bad2b6a1caa15bc21dc3b","characters/dain_exhausted":"0d5b9c0c86f2b1025c689dcb","characters/dain_fainted":"8dbaa31fa5541de6dbfe3399","characters/dain_firm":"643442f1426cca874893d711","characters/dain_flushed":"6250f8f78edefde4194b8bf0","characters/dain_flushed_02":"6589b94a6e8052a07de65d93","characters/dain_flushed_03":"dc20c39c1d694f5d1462ead5","characters/dain_furious":"a3c6509b5e3b0fce7f9eb154","characters/dain_groggy":"05f71225374221eac69c6a9d","characters/dain_humiliated":"1332f82da9f0ccda6b9a9ec1","characters/dain_jealous":"d281ea4f80a11a8b649fcfdf","characters/dain_kiss":"7f1a8a2f2ca65ff6976a455f","characters/dain_laugh":"0f4990e5c0974d7091b91c41","characters/dain_lovestruck":"a480933f3a7bc8aa1cf3e564","characters/dain_messy_afterglow":"34b7743b36d04a01a2e6af7c","characters/dain_normal":"26770cafbae74d14f4b3cbaa","characters/dain_oral_service":"6563860f27c727f1465d6fb8","characters/dain_pain":"33c349b70fe7e9d76b6fcff9","characters/dain_pleading":"f9767e6ec3ed425cb4ee167f","characters/dain_pout":"87c7d5b8cba740a219c1a110","characters/dain_relieved":"6cbb1f8e7101b96faa5fec2b","characters/dain_sad":"a8efb1ef6d748880cf40ccb5","characters/dain_scared":"a079faa46533f871e5f68760","characters/dain_scheming":"34faae6e0efd362beee091e5","characters/dain_scream":"cfc91d795a0a3d149009b3a2","characters/dain_seductive":"eeeaf223a6ea3b101a70abea","characters/dain_shy":"6a3737cdc616e58ff5812e84","characters/dain_smile":"d42046e3f268de070fab31e8","characters/dain_smirk":"445b4ca694721b918e2e6317","characters/dain_sob":"a08471bd932ef4c33226f853","characters/dain_soft_smile":"6e95f5c705369ad6081c1100","characters/dain_surprised":"b753afe7c790fc700c99a390","characters/dain_suspicious":"56fd3055124535c1f1c14637","characters/dain_sweat":"5f697d6c24e96fb95fc035cc","characters/dain_tired":"8578b578e1eef1f6b8b701eb","characters/dain_touched":"f5ba5538e35f80af83132363","characters/dain_undressed_shy":"229ae097a88da6991e801c77","characters/dain_undressed_shy_02":"4593a461756c0352fb7ea4e1","characters/dain_undressed_shy_03":"b96653fb40b40da2b21f2b3e","characters/dain_undressed_shy_04":"02472f492b51c85cfa6f928e","characters/dain_very_shy":"943ffb150f8ea6d353dfb7ef","characters/dain_worried":"a90683ba886a5ab1e6cfcba3","characters/haeun_active":"0074d2665ee80429000a6372","characters/haeun_aegyo":"a65881e74321df03546fb2ad","characters/haeun_afterglow":"c562b1348cc127d4166d03dd","characters/haeun_ahegao":"b84fb9a4b78ac7b95c9cfc14","characters/haeun_angry":"a5dfcb16b4e28c3687ba4a5e","characters/haeun_begging_lust":"88d7037f00843b55ff233574","characters/haeun_betrayed":"ce21c212e8ad28b1bedf39aa","characters/haeun_bored":"9f4f1f806ab943701afc1faf","characters/haeun_choking":"7bc7b63cd3f56ac3ab865d71","characters/haeun_climax":"3e274f7c3a92a8247d7aa266","characters/haeun_climax_02":"2f49cd09f8a0f57a5b36aad1","characters/haeun_climax_03":"c2fcfd374e5fcc8dd604f411","characters/haeun_climax_04":"f275b7cb131a32816488f52c","characters/haeun_climax_05":"232a7990e9e13872fda53e59","characters/haeun_climax_06":"66c91191f815cee73cd86612","characters/haeun_climax_07":"b1f48b67e87eec8b3cf2c9e2","characters/haeun_climax_08":"84d877161e56d8ac2fb26128","characters/haeun_cold":"c2dd298394c4b9cc2ab104ca","characters/haeun_combat_ready":"761f7226df877cf81a133297","characters/haeun_confused":"f7bfb499f7e344e28e6e982c","characters/haeun_cry":"2ca7e4a8fad7dafa56cf6211","characters/haeun_dazed":"31de2460a1f601c89f6de210","characters/haeun_dead":"1aa999b3bd945396250f3689","characters/haeun_disgusted":"055b891ba252127fc4394d1d","characters/haeun_dominant_aroused":"70f85d590af694b5f4d1dd2f","characters/haeun_dry_smile":"6fa39935c05ef1eb01fe246c","characters/haeun_dumbfounded":"3347f6873f16be324357c87b","characters/haeun_enduring":"d876a1b1694c3276da8d6a04","characters/haeun_entranced":"c7174e3746ede085be9a15e0","characters/haeun_exhausted":"d5cc527ff2bab4039fe34e8b","characters/haeun_fainted":"fa37b4ec121a54ca6af7935c","characters/haeun_firm":"6ed1c7c536bad0a559d65fe9","characters/haeun_flushed":"e5fa06d26194094343e0bf83","characters/haeun_flushed_02":"da7848c4717c573ad81c0d03","characters/haeun_flushed_03":"74d30582f799724d2066af2a","characters/haeun_furious":"7c9787affe9d69817691c853","characters/haeun_groggy":"6932195eed3bd44b5bc9fa81","characters/haeun_humiliated":"89bde491f20d5122685df53f","characters/haeun_jealous":"ab61daa7f85bebeca2a92113","characters/haeun_kiss":"41811326d0979ec4bd6091cc","characters/haeun_laugh":"c7cbe94c4c017e617f5891ae","characters/haeun_lovestruck":"6b63719641f05442d62f36ad","characters/haeun_messy_afterglow":"5d84af6ded65fb10531fcc64","characters/haeun_normal":"8952ba944202d6f08042d20c","characters/haeun_oral_service":"dda38cae6243361f2adf2920","characters/haeun_pain":"3096ba6a32c555dddbcb2fb7","characters/haeun_pleading":"ef42f1b6aadc66c177b004ae","characters/haeun_pout":"30b390940ade560250934b3e","characters/haeun_relieved":"f50f62d99c6f977d7fba21bd","characters/haeun_sad":"19764deea1b91f682505b466","characters/haeun_scared":"3a969bbbda2a558e6cd84cf4","characters/haeun_scheming":"3e04c2e3b475be87ce3b117b","characters/haeun_scream":"93a3395b5db4c18930f61469","characters/haeun_seductive":"929aada1aa155f1e29b383f8","characters/haeun_shy":"54c84461be40e0a7bdd7e344","characters/haeun_smile":"9d1810b3c3084620062dbbdc","characters/haeun_smirk":"e3fcbb0c70521b07d4af6f67","characters/haeun_sob":"ae9b96f173477c8b6539bf7f","characters/haeun_soft_smile":"d587e252b394d3ee58c0dd81","characters/haeun_surprised":"2b151f2c64ea85f287ecb5ec","characters/haeun_suspicious":"38eda78178c42d0b5106afe4","characters/haeun_sweat":"0b597e969f53df61ded57fce","characters/haeun_tired":"00d9a70ee4eae0670610caa1","characters/haeun_touched":"1de17669b39dae01f9ac2843","characters/haeun_undressed_shy":"d0491964dfc59db40c7b02cb","characters/haeun_very_shy":"87d708a2799658e356646636","characters/haeun_worried":"ec0837b20ec0cb5747b9c61a","characters/junho_awkward":"2e9fb0b44fa1f0750f560248","characters/junho_normal":"b088dd3040ad227a625d60c3","characters/minsu_active":"ac2064fdd24f2d81b144e81b","characters/minsu_aegyo":"7ad6b3620b2f608e9940eaa9","characters/minsu_afterglow":"a35c2529a18e1d27f276c23f","characters/minsu_angry":"6043403757591c2a07e60255","characters/minsu_begging_lust":"9ac75edbe0e7a6ae01e028af","characters/minsu_betrayed":"a4f43e36cea046970c8505d3","characters/minsu_bored":"cabed49ecf1548757e20d1ab","characters/minsu_choking":"8f0c9cdb1186816070c77b00","characters/minsu_climax":"b74359049faa4573f9c83e85","characters/minsu_climax_02":"5d5c849bfd4037c3b4bcb147","characters/minsu_climax_03":"14690281b2342d3aef557292","characters/minsu_climax_04":"f4f069cc7293abc37c95272e","characters/minsu_climax_05":"0c4f4140e58eae601bdd9990","characters/minsu_climax_06":"998636d2a6cd3305d38ea674","characters/minsu_cold":"35976406d8cf9812969e37cd","characters/minsu_combat_ready":"906b1a52afa25004e5064a64","characters/minsu_confused":"0d5fe9f781f45a9fea5e5f2c","characters/minsu_cry":"0d2d911e8da955374632104a","characters/minsu_dazed":"8b310d595177dc9ce449801e","characters/minsu_dead":"890b62a3d85554104d673266","characters/minsu_disgusted":"d9b05aa9395a2aea5667d8ba","characters/minsu_dominant_aroused":"d47687961ea4fa0c9840af95","characters/minsu_dry_smile":"eeaf92ea0ede998eaae4e0b6","characters/minsu_dumbfounded":"d047a2220e53682907a788cb","characters/minsu_enduring":"46a18a545e0c40910a50d959","characters/minsu_entranced":"70c28bb5800b220cf2d56eed","characters/minsu_exhausted":"fcd7681fa8960797e35a68e5","characters/minsu_fainted":"dfd6bd32e9ead2fc1528dcd7","characters/minsu_firm":"9f00f3664b4e0b8c7fc63e4f","characters/minsu_flushed":"c37050bec4ae9b01cffea4b3","characters/minsu_flushed_02":"f6a2d8bbaec470368abb208c","characters/minsu_flushed_03":"0ab6100c0e9bb6dbfdec17ae","characters/minsu_furious":"189abc96c8850a38cd04b3c4","characters/minsu_groggy":"a6b280a41e21127567fb2cff","characters/minsu_humiliated":"556a4a8bc53dbbb03a780425","characters/minsu_jealous":"8cae439fe615639f5bbef9cf","characters/minsu_kiss":"e49b98933d0cee7cf00927bc","characters/minsu_laugh":"a2e7783248ba1510228fc232","characters/minsu_lovestruck":"02e05f2f7e7faed6621a19ba","characters/minsu_messy_afterglow":"7dc0500b8ac4977ab6681bef","characters/minsu_normal":"1649bbc6431a21cd53fa2f51","characters/minsu_oral_service":"72f3315841e970f522b6aa72","characters/minsu_pain":"40e4ca05e2629dc41b71b456","characters/minsu_pleading":"9cbbe05d643512eb5abe117c","characters/minsu_pout":"7c325e2c2423bf62d60c6ca3","characters/minsu_relieved":"4cd211461371988afefc7f68","characters/minsu_sad":"0dbbf9eb37f586ebf3e1f857","characters/minsu_scared":"0f440e33fbeb76a12f99f844","characters/minsu_scheming":"7c0be365224a6ce9d39e46fe","characters/minsu_scream":"cffc492255ede4db2b97a85a","characters/minsu_seductive":"2e4ffad1816b7b17bf72b6fb","characters/minsu_shy":"b0e6bcc5fbfa0ddf86993575","characters/minsu_smile":"c47d5888d4c90be7af55f12e","characters/minsu_smile_02":"3f83bde7094156cef3bec622","characters/minsu_smirk":"24fcebb86c0d529a8e14a6a3","characters/minsu_sob":"784b5336f15a01de65d54e99","characters/minsu_soft_smile":"77a7d943e21e5d9ba28dec3f","characters/minsu_surprised":"7a478399f057ee5c3c4159f2","characters/minsu_suspicious":"8203cde4eb3f1cba86cab1c4","characters/minsu_sweat":"db54a20bc047cb0e397e5fbc","characters/minsu_tired":"8801df5b3ce00d92d8c8a1ed","characters/minsu_touched":"367be1048fc30dc74d627608","characters/minsu_undressed_shy":"54a44f348c78012b76e93eb6","characters/minsu_very_shy":"38f8bc3c8da48418fea62410","characters/minsu_worried":"91f98fa041a0fa8b1d75ed3c","characters/nurse_active":"bd72deebdda655c22fa7b5dc","characters/nurse_aegyo":"2994b987cac76703878aa821","characters/nurse_afterglow":"35d37c0448fc70b6d8f592dc","characters/nurse_ahegao":"12804bb7b5f30080d465b4a6","characters/nurse_angry":"b5158b2f4773addc4b32bf48","characters/nurse_begging_lust":"56a36d73fad110147cbabb37","characters/nurse_betrayed":"cd08c062d8b572c0bdf3b506","characters/nurse_bikini":"2d02c75d38dad14d33e150df","characters/nurse_bored":"a18fbcc94e0b2d3c325aec73","characters/nurse_choking":"3b2d1fb27c3bfdfd17c99292","characters/nurse_climax":"662febcdba5ecef45a2c6724","characters/nurse_climax_02":"ae8724153b9099e134697ea4","characters/nurse_climax_03":"a26703503a8a40cb1776a0db","characters/nurse_climax_04":"c5bcd5dcc45472a93380e7f9","characters/nurse_climax_05":"ec3d516c04deb5adeee4d4f2","characters/nurse_climax_06":"0d5f41f4059c4ff620ed6e9c","characters/nurse_climax_07":"e3f89aaaa1b0f48a092b13d9","characters/nurse_climax_08":"ae10fe932e17aa985d3c9135","characters/nurse_climax_09":"69748f5bc05bcbbe56450597","characters/nurse_cold":"4de7df531b799c15dcbde563","characters/nurse_combat_ready":"22f0276ee7272537f41c7145","characters/nurse_confused":"ea00194297095c1b6e0a7198","characters/nurse_cry":"3c6d92bd9e7c2b470639e7f0","characters/nurse_dazed":"1da4b25cfeafeaec8b94016c","characters/nurse_dead":"5129941b1620f12294eab0d3","characters/nurse_disgusted":"50430879a58877d555bf304c","characters/nurse_dominant_aroused":"485dc859f9a7eb246217eda7","characters/nurse_dry_smile":"2f9edff7e0693c22cc16a586","characters/nurse_dumbfounded":"2f5c8095c0dca37c30e4da7f","characters/nurse_enduring":"0c7f20c4dc72965ff63aea28","characters/nurse_entranced":"4c816225d52bea2ab50300fe","characters/nurse_exhausted":"0bbc394c6a1a8ee2ab8c2ac7","characters/nurse_fainted":"63d8b16593d1f046b6d4e55b","characters/nurse_firm":"96ebb196f5ac4b33f1ed3768","characters/nurse_flushed":"e80076c67bcd4ee6ac79ead6","characters/nurse_flushed_02":"6f0177afcd6c606a4e9accb2","characters/nurse_flushed_03":"7be03efc9d6b2f65305218c2","characters/nurse_furious":"d83461aae248be9ce279badf","characters/nurse_groggy":"f0f41a834ab0f2f8eee907d4","characters/nurse_home_active":"e9d55b0c2ebdede47660106e","characters/nurse_home_aegyo":"d8f5c5cca5794dffdc18bf4c","characters/nurse_home_afterglow":"d3a7df808863c7585deaae52","characters/nurse_home_ahegao":"a22f6d91117fe85368eb50f2","characters/nurse_home_angry":"30d4e31600c3647de6b4fc4b","characters/nurse_home_begging_lust":"135787b0d8d48e68813b339a","characters/nurse_home_betrayed":"cafe66e870a63391f907b2e8","characters/nurse_home_bored":"7650cbf380f149dbfe29ef9b","characters/nurse_home_choking":"ef3950f9e97906edbd940fca","characters/nurse_home_climax":"d9e1a4242231efcfdae6fede","characters/nurse_home_cold":"dec00f3c6a3c7859f1d53eae","characters/nurse_home_combat_ready":"529adbca5852c7533f71f42d","characters/nurse_home_confused":"fc56451059b1b0271a76ce7d","characters/nurse_home_cry":"63fd1b9b822493f92537ff92","characters/nurse_home_dazed":"334557ff89f2563bfdbeb2b0","characters/nurse_home_dead":"5c5e37167062a93507ca0116","characters/nurse_home_disgusted":"2297d89664a8ae9002d33c75","characters/nurse_home_dominant_aroused":"9dbc2cc283c11ede67967101","characters/nurse_home_dry_smile":"66bd38e7484a26ee2d80fe01","characters/nurse_home_dumbfounded":"e5460d08c1a2719da901c798","characters/nurse_home_enduring":"673cfc8076eab7cccb7f4b9b","characters/nurse_home_entranced":"7cf872ad26b9246951853934","characters/nurse_home_exhausted":"f6c0f25b16e9e265c2467280","characters/nurse_home_fainted":"2132230774a0f12c70380a6e","characters/nurse_home_firm":"0f062e1b4a0d30e04e8cff9a","characters/nurse_home_flushed":"14b052b99fe3a492063ad662","characters/nurse_home_furious":"6dc3efd5d935a731d6ac8c69","characters/nurse_home_groggy":"c995cd88ed3e6fbdcb125db4","characters/nurse_home_humiliated":"f9c4c8854482f31c4f3d94a9","characters/nurse_home_jealous":"006a0c001bfd70c5a84baa33","characters/nurse_home_kiss":"98e9cc809dfdff7d01d6670b","characters/nurse_home_laugh":"5ef3ca1f5842a7fe5dc03872","characters/nurse_home_lovestruck":"fb7507ccb18a2f35d5bd1fe1","characters/nurse_home_messy_afterglow":"a28af02240f442e458b278f9","characters/nurse_home_normal":"54d9bda091fd84ef7fc4b7bd","characters/nurse_home_oral_service":"1d19fbc42d5627e4e0949baa","characters/nurse_home_pain":"1516ea763f9055a4f45f010c","characters/nurse_home_pleading":"48d6d454f137e82484dcdf18","characters/nurse_home_pout":"0bdfa3c723cb00905baca1a2","characters/nurse_home_relieved":"27b6700201061f368ad575e5","characters/nurse_home_sad":"d07810f51d5529312c95eed2","characters/nurse_home_scared":"066c35fba78509eaa2fa0633","characters/nurse_home_scheming":"43c7e44efca7347b18b38a50","characters/nurse_home_scream":"c1fd94fefae11426169540b4","characters/nurse_home_seductive":"bf038514a7b708337d9705ef","characters/nurse_home_shy":"adc2a6418c0c182ed63ad2ad","characters/nurse_home_smile":"91ae2a97aa4977c982978382","characters/nurse_home_smirk":"cbeccd2cf0caa0623a42057e","characters/nurse_home_sob":"838560c6237bcece34daa9f2","characters/nurse_home_soft_smile":"1d5a3d4fb841117e669d28f0","characters/nurse_home_surprised":"094f170e8818af3ebd16b96e","characters/nurse_home_suspicious":"e2478cf1b1645acb5301554f","characters/nurse_home_sweat":"35a13a320f0cdec6bfc5f071","characters/nurse_home_tired":"49b88fa62f4c389270c49369","characters/nurse_home_touched":"ff787bef54de6abf253b6c64","characters/nurse_home_undressed_shy":"03f9a7f65879d8f14cc7c294","characters/nurse_home_very_shy":"9e31161d6dd0cb3f6d1e1a9c","characters/nurse_home_worried":"caeb0451630cbba65b08c41a","characters/nurse_humiliated":"37cea65c1fd8fb2e40d24174","characters/nurse_jealous":"3a755571ecc820743a8a67df","characters/nurse_kiss":"0cf541af7805c502383b7b41","characters/nurse_laugh":"268fd3e6ebf258ad08d46cc8","characters/nurse_lovestruck":"c47855289bac75ba9b5592a0","characters/nurse_messy_afterglow":"be1ee321608ab878095d626b","characters/nurse_normal":"98d2a3b46d4fecd1d80fc9a8","characters/nurse_oral_service":"7585605a00e7dd5bb3ad8a36","characters/nurse_pain":"e0b58045b5899adbe9b60fff","characters/nurse_pleading":"45ee05992754369b9693b4c0","characters/nurse_pout":"549c2f0bb7f258232cdf015a","characters/nurse_relieved":"8d897c8d3a96331cd5a29eca","characters/nurse_sad":"32daca055fe950ef74bd29d2","characters/nurse_scared":"205c2b6f3f42be5b31f91873","characters/nurse_scheming":"b82ff18042291fe6a5215e49","characters/nurse_scream":"e2868839ed50b605420520f9","characters/nurse_seductive":"6fceb2c8bdfa0a35d86cd81b","characters/nurse_shy":"69110a02c3bd54b4fa2bf95d","characters/nurse_smile":"977401ec2ef26f60d7089c40","characters/nurse_smile_02":"c1f9a0f777637a52147b4d55","characters/nurse_smirk":"29925acf153a67a08e7a4e04","characters/nurse_sob":"44fdbb49c1e9e8c0ba9e7d1d","characters/nurse_soft_smile":"821e9b3974412e959303a2da","characters/nurse_surprised":"00a58eaa057dff8e8691c310","characters/nurse_suspicious":"079143f9fe54fba961459d87","characters/nurse_sweat":"2d86fa2f5ab6e0a3eeab352e","characters/nurse_tired":"53d0249623a03fa1a0baddd3","characters/nurse_touched":"2115747c9a0ca3f7c8f8fc4c","characters/nurse_undressed_shy":"8851fd6bb4774cbc7b8028f5","characters/nurse_very_shy":"ca43ec4145de6f476436a4f0","characters/nurse_worried":"f1fa9ded9eaf0e9cd166350f","characters/seyoun_active":"4aeb93758289b1a35344bebd","characters/seyoun_aegyo":"6cf817f739904c8dd8fa55e3","characters/seyoun_afterglow":"b1e0e8e1a99a5a5a7360d0fd","characters/seyoun_ahegao":"ce40f2fac02a6562f660ab28","characters/seyoun_angry":"3cb96e1d05945255efade43a","characters/seyoun_back":"ff25e983526ea4c8f332f003","characters/seyoun_begging_lust":"d00f487e6ff38aefbb7652bc","characters/seyoun_betrayed":"c1cb1be9ac2a4f7a8bdb808f","characters/seyoun_bikini":"811254edce80a69af5e46c3b","characters/seyoun_bored":"370c38d19da779e2a7510867","characters/seyoun_choking":"8b0112fda85eac9c43544e62","characters/seyoun_climax":"5d7d706ec23b6e052f7fb60e","characters/seyoun_climax_02":"04e026bf867d34b6d9671264","characters/seyoun_climax_03":"9b0ac9f274be74dd3edbbdc5","characters/seyoun_climax_04":"b9eba40f057f8052b2411daf","characters/seyoun_climax_05":"676e70eed986be160663c30a","characters/seyoun_climax_06":"eaf50fa90ccad4556ea2c69a","characters/seyoun_cold":"2e99ebb0b8421481d7f20cc9","characters/seyoun_combat_ready":"10465aae764901c9c3aec685","characters/seyoun_confused":"614a10e9ab2a97d5baa49dd3","characters/seyoun_cry":"ffe26b4ecb1df13e300fed46","characters/seyoun_date_active":"71c7fb3d2d9fea181fcbc946","characters/seyoun_date_aegyo":"edf4984320f0386510181aa8","characters/seyoun_date_afterglow":"82df60f36aa63a18d44dfbc6","characters/seyoun_date_ahegao":"a6cd9b7b97674f1370a9d943","characters/seyoun_date_angry":"6513d244ed92cf34af7ad56a","characters/seyoun_date_back":"86fec14b4b9cce11c0803cab","characters/seyoun_date_begging_lust":"ebb9217ac5604528ab7afb67","characters/seyoun_date_betrayed":"fdc769d371c7913d1386bc53","characters/seyoun_date_bored":"549fd432a587c4de5efb0e64","characters/seyoun_date_choking":"5bd674078c10a9c5a9611538","characters/seyoun_date_climax":"65caabe1db0bb9770cf9e922","characters/seyoun_date_cold":"be354462b8dc268dceef0926","characters/seyoun_date_combat_ready":"8debd2489f13e95a5bd6eef5","characters/seyoun_date_confused":"8c2a59da0222bbc70715c425","characters/seyoun_date_cry":"609a6940b853dd1b79807b4a","characters/seyoun_date_dazed":"440fdf17763577e598395070","characters/seyoun_date_dead":"57f49936629f56ade04efee2","characters/seyoun_date_disgusted":"e017e1cbbe3fcd924d164bd1","characters/seyoun_date_dominant_aroused":"aebf47eb29be8636baa2db8c","characters/seyoun_date_dry_smile":"a8189881db80df64621a7dd5","characters/seyoun_date_dumbfounded":"9c35c2824223b663114a4b98","characters/seyoun_date_enduring":"eb255f146f1325d56fbb133b","characters/seyoun_date_entranced":"e446ea9e42c2725bc2de0b7e","characters/seyoun_date_exhausted":"f8088a9ec1a24ed65f171062","characters/seyoun_date_fainted":"e6e65443788176b86c66bc03","characters/seyoun_date_firm":"e7bd6945157615e8be49759a","characters/seyoun_date_flushed":"827b74778949aad90d53b826","characters/seyoun_date_furious":"a751f570b4af707a3e4bdeaf","characters/seyoun_date_groggy":"751e0d6e3ddbb257b348ac58","characters/seyoun_date_humiliated":"6168b72b38669efb1801d1d5","characters/seyoun_date_jealous":"84f2e519b24b194918321c17","characters/seyoun_date_kiss":"79459b11c56f2cda190cc99b","characters/seyoun_date_laugh":"782d59181950ecec34f63565","characters/seyoun_date_lovestruck":"0fdcfdb12c6083adf7b87cab","characters/seyoun_date_messy_afterglow":"6f1e50be1a5d488fb4a5a1fb","characters/seyoun_date_normal":"2ab48647f5328b7331a74bc2","characters/seyoun_date_oral_service":"68fc41593bf035d36c8af612","characters/seyoun_date_pain":"0509909f5b4c08add42f3ef9","characters/seyoun_date_pleading":"18a399c24f58d49e0b13516d","characters/seyoun_date_pout":"02981cd45e940d6cccf46c44","characters/seyoun_date_relieved":"51cea83dffeb81fdde9a776c","characters/seyoun_date_sad":"49d60b12c50af6e72f9e8f8d","characters/seyoun_date_scared":"c51c246437313349681b0f03","characters/seyoun_date_scheming":"f8b309296236f959a6c80445","characters/seyoun_date_scream":"19b0be8e3a3e5625c2b7a8e8","characters/seyoun_date_seductive":"d69575debccc5078261fead4","characters/seyoun_date_shy":"bf8ace01b165c9442270ec09","characters/seyoun_date_smile":"2e2b40604f0fa733a978d0f3","characters/seyoun_date_smirk":"e29128f7348fe102e341b49e","characters/seyoun_date_sob":"1011fc2386dafb48411c2776","characters/seyoun_date_soft_smile":"c95839100521f4da50174b66","characters/seyoun_date_surprised":"e99cc0992b42c95c8aa197a1","characters/seyoun_date_suspicious":"8e572a9ca5dbd5bf783e7cb2","characters/seyoun_date_sweat":"2c78d0164fa9b05df3219f3e","characters/seyoun_date_tired":"f7be57605c8d629de20cd2c9","characters/seyoun_date_touched":"8df52594c84f164a315c1d5d","characters/seyoun_date_undressed_shy":"2f94ee9ca10c400d3a64e2e1","characters/seyoun_date_very_shy":"d7f99cfd6d91c3b9ac6f185a","characters/seyoun_date_worried":"1819972fb0d874d578757b1f","characters/seyoun_dazed":"c3d9889b3a01fccf231017d9","characters/seyoun_dead":"74b1bb56e581a05f6c40a2a1","characters/seyoun_disgusted":"f7ae9a5ff69152458dc15344","characters/seyoun_dominant_aroused":"7f17b32d64ec11b4dc8ea91e","characters/seyoun_dry_smile":"6c355b598f5d490bfd4d65a2","characters/seyoun_dumbfounded":"78defda68c6eccb13a26abc0","characters/seyoun_enduring":"4b87960ed687efc3040bd336","characters/seyoun_entranced":"9a436ad6944ff7873c50f052","characters/seyoun_exhausted":"9951b2e65755435fc6e828e7","characters/seyoun_fainted":"efb8d68082823a003f453f1a","characters/seyoun_firm":"ee5fec40e4ef7736cf0243cd","characters/seyoun_flushed":"87bd30341e2e717b13df0aaa","characters/seyoun_flushed_02":"8d141fa8872ebf3f71fd4fde","characters/seyoun_flushed_03":"83e8859802e0d7c6fdba3df3","characters/seyoun_flushed_04":"99222922577647c0d2550d2f","characters/seyoun_flushed_05":"415592c3d05b5aaa5c9bd023","characters/seyoun_flushed_06":"d9b3eb4913ce29273e53dfc6","characters/seyoun_furious":"32c5436218974b5e582a8ed1","characters/seyoun_groggy":"5c7e5f66853febce694800d8","characters/seyoun_humiliated":"ca9c7ed3a9dd2ba7db29f330","characters/seyoun_jealous":"c996085524b593b42d19da8d","characters/seyoun_kiss":"53764a4721ef5c1fe8cad55b","characters/seyoun_laugh":"9e5116545256420bb619cd0c","characters/seyoun_lovestruck":"8b1f59f0ba409e7ee6d784ef","characters/seyoun_messy_afterglow":"89937cc061fa1cd4878e6a74","characters/seyoun_normal":"c5d54a5b9ef32592f54fe625","characters/seyoun_oral_service":"983fc906e02c3ee075a4a626","characters/seyoun_pain":"9d50754efd362dee2be1ced7","characters/seyoun_pleading":"57f1b6e0d0e98129e44251fa","characters/seyoun_pout":"e3bff0d5cf02cfbeeb71d659","characters/seyoun_relieved":"0d15c4f538088a0c191cf77f","characters/seyoun_sad":"3cb1d7d669372234bde0c8fb","characters/seyoun_scared":"03b985605f5d9276c50c0257","characters/seyoun_scheming":"4121bc9aff13cf1ed4f7639d","characters/seyoun_scream":"2186a761d6ff4272346116ae","characters/seyoun_seductive":"bccf235b951ce4edba3e96fa","characters/seyoun_shy":"6251cd99fee5cf47f365969e","characters/seyoun_smile":"670926355ce6ba07eec7a1ca","characters/seyoun_smirk":"59b32de794d93f43151215b1","characters/seyoun_sob":"2142ad1193205e40dbe50c32","characters/seyoun_soft_smile":"b4b52ef3c3588bd966175dd1","characters/seyoun_surprised":"a0d482d6ad52058a17fe180f","characters/seyoun_suspicious":"62d37498414248c3179c4158","characters/seyoun_sweat":"3bc3e198792b515b39b62ef3","characters/seyoun_tired":"5544a9a40695c0b3d1523a14","characters/seyoun_touched":"96092e6caa13ff041727adb8","characters/seyoun_undressed_shy":"097c6f5978ea4adcab6fdeb3","characters/seyoun_very_shy":"bf3898c9f339e4d1dbbf04f6","characters/seyoun_worried":"771fec02ea54a6f1d0ca6325","characters/teacher_active":"c1d3ad9dfe3e778e434c3eb4","characters/teacher_aegyo":"226e6e2683533c66e8860f82","characters/teacher_afterglow":"ec7c10587b1b35227223cabb","characters/teacher_ahegao":"eda2b19ae955d8f5f4e8963d","characters/teacher_angry":"aec7248dcfbbe4c9a3f14fe5","characters/teacher_begging_lust":"309ca6e7d77e498230ac4420","characters/teacher_betrayed":"1fcbb1c0dbda0cdb05840c38","characters/teacher_bikini":"e28249e4880d2192538f472a","characters/teacher_bored":"e491e4d680b9360e494d0855","characters/teacher_choking":"8ad0393d75f57e7eae5628a6","characters/teacher_climax":"e3cf7dd6b510dfe49aedb62f","characters/teacher_climax_02":"fb6e35c0ae442544fb3166b3","characters/teacher_climax_03":"36f22bec4692a6dfd53c26f7","characters/teacher_climax_04":"96598772c20bbbb1cdb4a61d","characters/teacher_climax_05":"839d4dd3d2b0439a4c9a8787","characters/teacher_climax_06":"573d23c24b05b662dafb9fe7","characters/teacher_climax_07":"59e7b0014f1a661cedf1d1fc","characters/teacher_climax_08":"e7376bb830737412daf9961c","characters/teacher_climax_09":"a8e7b25220c1583b5499d6b1","characters/teacher_climax_10":"67cd21bf205e69ccccd8b1bd","characters/teacher_climax_11":"55d8715fae3c26984dfe2464","characters/teacher_cold":"b3d2003515790f58798e4f76","characters/teacher_combat_ready":"bbff59a12ff71feb1266d035","characters/teacher_confused":"4a636bd0624c48b6682e3f0e","characters/teacher_cry":"2d7b264feac340ee411b544d","characters/teacher_dazed":"448173d87ebafa82f92420af","characters/teacher_dead":"94e904252445116c2fb11392","characters/teacher_disgusted":"e02e8e28ed196138c75e2d65","characters/teacher_dominant_aroused":"e59c0dc9144c0e6b897cbd3b","characters/teacher_dry_smile":"37fb21ec38651250610a09ac","characters/teacher_dumbfounded":"be8d6cb9ac84eecbdbb5d918","characters/teacher_enduring":"0dc87bbc3726845af4400bbb","characters/teacher_entranced":"39e6d6543f75ec0966874224","characters/teacher_exhausted":"5040bb43a2f2e4836140b964","characters/teacher_fainted":"989f062d3d6e57c6de09319d","characters/teacher_firm":"8bd42fa9a8c349c52299bca0","characters/teacher_flushed":"246b998cf77262e095159f3b","characters/teacher_flushed_02":"1cd269b3845cfabdb76b4b6a","characters/teacher_flushed_03":"0e1085e353fe4fa47cdf83d8","characters/teacher_furious":"92bfa831bf656d7c248e756f","characters/teacher_groggy":"351dc9f6e62711e99e074bc3","characters/teacher_humiliated":"7c9b9470dab34cc8e0687b45","characters/teacher_jealous":"9596b9a02af88943b2e2a539","characters/teacher_kiss":"009b5af1dad06d2b212fb8b2","characters/teacher_laugh":"2d54f642b41e48d43f0528e6","characters/teacher_lovestruck":"62c8c62cfd14c184785c80cb","characters/teacher_messy_afterglow":"90ef34de0bf41f313faae7e7","characters/teacher_normal":"2451ea041fa710ea65524958","characters/teacher_oral_service":"746ab3e69f5f04586ba714c7","characters/teacher_pain":"1e0597bf2a2bd3db1de17ca1","characters/teacher_pleading":"d860275cacf9dd3b605fe072","characters/teacher_pout":"cbf139b5bfb58b9d6afb3803","characters/teacher_relieved":"93d084d4cdd00a55b0604ef8","characters/teacher_sad":"4028ac1d806526a79225cfa3","characters/teacher_scared":"c2725511c25364d14ba8b5ec","characters/teacher_scheming":"b654c67934dfcb2bfd2c3971","characters/teacher_scream":"b1fbb7d52a241acb7fb36cd2","characters/teacher_seductive":"d2370ff3b2d3135f6b008f44","characters/teacher_shy":"c0d7d2479fdd856ca414f1f2","characters/teacher_smile":"e239d5385af06170e646c6ca","characters/teacher_smile_02":"2208124bbc28a82aafe958f2","characters/teacher_smirk":"7dc42d82fcdca5422d474ddf","characters/teacher_sob":"5da39deb70457f35f8db7644","characters/teacher_soft_smile":"425606732d2848f521cbeab8","characters/teacher_surprised":"36763b16cb8285e2968459a2","characters/teacher_suspicious":"2fdbeaeab2703db5e3b49da8","characters/teacher_sweat":"e61b04f81c661e08dbba1e71","characters/teacher_tired":"2131c245c6679c48f1ebe934","characters/teacher_touched":"a99e684c8cefad9f256f9623","characters/teacher_undressed_shy":"021086d9968cf1a2f4cfbffc","characters/teacher_very_shy":"2d0c3b995e34f3f9b2ddb436","characters/teacher_worried":"f52356fb993a7fabd4e4dcf7","characters/yuna_active":"e120d862143e88b06bcf48f0","characters/yuna_aegyo":"678e71ed97d1a0779573295f","characters/yuna_afterglow":"1af8732484259ba4bd8b6701","characters/yuna_ahegao":"922a3e277c50e83df8c57501","characters/yuna_angry":"ac119c729164c5ea08a50a1d","characters/yuna_begging_lust":"662ba855e4471ab5b2719f9a","characters/yuna_betrayed":"ea04a2c657da5c545df5da7c","characters/yuna_bikini":"f7e257282a62e3a43bf17635","characters/yuna_bored":"95b24a4a113e94ae7adb6531","characters/yuna_choking":"845728a587c6293579705875","characters/yuna_climax":"313eca92f23804c0f5ce0a04","characters/yuna_climax_02":"5571c7283de16ab84a3bbf64","characters/yuna_climax_03":"4ea23ffe355db14e83cf7a15","characters/yuna_climax_04":"70abda1a840d5b61e04f8010","characters/yuna_climax_05":"9e51f37d33922ec476be018c","characters/yuna_climax_06":"0d2862d6854308abda3c6813","characters/yuna_climax_07":"eb9b16786204a0fa475a3d14","characters/yuna_climax_08":"618c5114fe23830aed4c4431","characters/yuna_climax_09":"d0cc4d9390a6acd65305520e","characters/yuna_cold":"74ee12d79b64abe42650f75e","characters/yuna_combat_ready":"6ac839f67daec3ff0c307b9f","characters/yuna_confused":"4d68472b182eff9cb11fbd43","characters/yuna_cry":"350bdf62d01298eee5dc2359","characters/yuna_date_active":"ced8929e1a275041545b403e","characters/yuna_date_aegyo":"df5c3709fb72527e364168ed","characters/yuna_date_afterglow":"35dc7296563dcb46ef386bec","characters/yuna_date_ahegao":"e0bd65d9afbb9d2fff74cf83","characters/yuna_date_angry":"80be0b17a76a721e3a7bf1be","characters/yuna_date_begging_lust":"7895dc5f339cfa44fdebcbb3","characters/yuna_date_betrayed":"6b936302add6688ee01523aa","characters/yuna_date_bored":"ad47c1ad4dbe2f408616bfa3","characters/yuna_date_choking":"7b9b1572c2d5cbb76a82a48c","characters/yuna_date_climax":"defde3d42b7be988bd8dd23d","characters/yuna_date_cold":"0b730c9862a3925056b2c335","characters/yuna_date_combat_ready":"938cb6a34ddfb2da1a320cf0","characters/yuna_date_confused":"6ce529b60ca9668cca73482a","characters/yuna_date_cry":"08fb6f6caab0f95999aad887","characters/yuna_date_dazed":"d5ebb4586949c22eb570e396","characters/yuna_date_dead":"969a3dc911e6148a85a9bea8","characters/yuna_date_disgusted":"fe6b1ad3cb61acfbfd7d324c","characters/yuna_date_dominant_aroused":"4f9032cb878296f6fe5ce3d2","characters/yuna_date_dry_smile":"6c5e53685a21db84deca7a25","characters/yuna_date_dumbfounded":"8a53d315ab568d29190bac92","characters/yuna_date_enduring":"d4ed45068b1648f52a442a95","characters/yuna_date_entranced":"7d03b7624d501d4c9fd6e87b","characters/yuna_date_exhausted":"44f1f05c915f5c1820f1ee91","characters/yuna_date_fainted":"c4665bac3f598a31dc1a4690","characters/yuna_date_firm":"b11d1a750dccd444d7e95da4","characters/yuna_date_flushed":"91f5cb33f011594a50bb835b","characters/yuna_date_furious":"d393cd0a2e2a3ed04c9e324b","characters/yuna_date_groggy":"cced975fd3bdf6539202d27d","characters/yuna_date_humiliated":"54992fac72c825958e0ce06a","characters/yuna_date_jealous":"bc884151c85aa95c7f090c51","characters/yuna_date_kiss":"509a016d29f5bcef04fbea89","characters/yuna_date_laugh":"58bc940e313de8f334b66068","characters/yuna_date_lovestruck":"d51d27502f9c60ab8265d00c","characters/yuna_date_messy_afterglow":"4df1a3d963c16086ad9b92b5","characters/yuna_date_normal":"3b3fde66d1fac0574c83b3fb","characters/yuna_date_oral_service":"40c35939d1aa5b4d45caf1ee","characters/yuna_date_pain":"1b26380721f3d5b05a7e9974","characters/yuna_date_pleading":"69c0ecea16cf83e1f0aa62be","characters/yuna_date_pout":"15e93aee01bb07ec4f88f991","characters/yuna_date_relieved":"b2bd0a98c5c1eb585c267d52","characters/yuna_date_sad":"1e7ea7d0dc296f7704ef2151","characters/yuna_date_scared":"600ae62c8893a861ed3d43ad","characters/yuna_date_scheming":"e3f422072dd2f3158b7c29e9","characters/yuna_date_scream":"c72c762532edf7c21aca7326","characters/yuna_date_seductive":"24f9845e45489a7f771c8426","characters/yuna_date_shy":"718edd40188722ecea7ac05a","characters/yuna_date_smile":"92fafb35f27abf000e77f32f","characters/yuna_date_smirk":"545dd2fe8bcbdca485ce2568","characters/yuna_date_sob":"6400bf369abf5c4c5e9436b7","characters/yuna_date_soft_smile":"b2f8949358f6516f14aab56a","characters/yuna_date_surprised":"7250e6fc9a32f94a5771524b","characters/yuna_date_suspicious":"d8a4edbfeaaad5549bbd5f34","characters/yuna_date_sweat":"1aa2665822f485370faca718","characters/yuna_date_tired":"b87fc5044227373a38cd3896","characters/yuna_date_touched":"31ed86b354c25b632c8b4b4c","characters/yuna_date_undressed_shy":"1b36358cbea262809aa3c0cd","characters/yuna_date_very_shy":"ea825023874804dc4a67fb11","characters/yuna_date_worried":"3a4df436bb63ee6b38896c17","characters/yuna_dazed":"5fc487118cff85cd8f8d994e","characters/yuna_dead":"2d0d5ec44f4a026ff11e8fb0","characters/yuna_disgusted":"68f1cb83856f32d3455a7e6a","characters/yuna_dominant_aroused":"ce93f0dd474d1f3160b891ca","characters/yuna_dry_smile":"687a2b070bb05c37ad1e8477","characters/yuna_dumbfounded":"edeafbf46317457ca878b317","characters/yuna_enduring":"0e2b5950a9853ad595e72acb","characters/yuna_entranced":"e9ad36b84fa6e3d440414410","characters/yuna_exhausted":"cdb58a05503d746b8d95ca12","characters/yuna_fainted":"f998970314114572d7e131d4","characters/yuna_firm":"79071e4e5a5bbcdd4d167130","characters/yuna_flushed":"b902fba1b84e757bfe366b1e","characters/yuna_flushed_02":"c03abcf7c2b74a60657d26ce","characters/yuna_flushed_03":"0af0ec05ac51770322143bb2","characters/yuna_furious":"79ca9a1d7ecb7b6d6226ca38","characters/yuna_gallery_bikini_sexy_20260813":"7cfb2d83e446e8a8da023f1c","characters/yuna_groggy":"a2ee3e7577614fd23345b23b","characters/yuna_humiliated":"37a1a6229e6a44f3696508eb","characters/yuna_jealous":"20f7b04da2de035b1e70e6a4","characters/yuna_kiss":"b332c5f76b972016039f0fc8","characters/yuna_laugh":"8fbd9a130d524188a3b2ba51","characters/yuna_lovestruck":"44e13e4dce500e6f5eaf92d2","characters/yuna_messy_afterglow":"40f2aa80f2e70f6d49fd5337","characters/yuna_normal":"77c86d903106a1133132b089","characters/yuna_oral_service":"2e6cf0bd9c6e3f40fc3f3d9b","characters/yuna_pain":"0bba9d6f20d3f8b91c2dd432","characters/yuna_pleading":"d90f2c9130405289575815eb","characters/yuna_pout":"d661bf3ce6700216c290a81d","characters/yuna_relieved":"23268fbe49553617a9cdae09","characters/yuna_sad":"8f6fa5a15d67b9bcea8cc10f","characters/yuna_scared":"1f46374aa99576d5f42abe28","characters/yuna_scheming":"f7894d27949e77bdc8edfb47","characters/yuna_scream":"5479f5bf1b7a4e9e64465cd0","characters/yuna_seductive":"4eb81dcd5f479b35d7593d18","characters/yuna_shy":"555d7f7545e795fee809ca4c","characters/yuna_smile":"949f0355b7421a844a576270","characters/yuna_smirk":"51d36d544b61e7fe8ecca1b6","characters/yuna_sob":"32059bfdef023281cd290944","characters/yuna_soft_smile":"6b1213b80191d1df22e839d6","characters/yuna_surprised":"4355e38f8e80dd6bf1fc59b0","characters/yuna_suspicious":"693c72e3d096877f09b8338c","characters/yuna_sweat":"8d5f65eac1b8b56edbdf0ca6","characters/yuna_tired":"27770d46a18ca9c04c42133e","characters/yuna_touched":"4c6eef852e65b436603bc734","characters/yuna_undressed_shy":"fdb1d23370676fd6a023acdd","characters/yuna_very_shy":"45126736d517527a8dfa6b90","characters/yuna_worried":"b59681aef363710fc7b21c4a"};
  var CHARACTER_ASSET_IDS = {"assets/characters/dain/expressions/active/01/sprite":"characters/dain_active","assets/characters/dain/expressions/aegyo/01/sprite":"characters/dain_aegyo","assets/characters/dain/expressions/afterglow/01/sprite":"characters/dain_afterglow","assets/characters/dain/expressions/ahegao/01/sprite":"characters/dain_ahegao","assets/characters/dain/expressions/angry/01/sprite":"characters/dain_angry","assets/characters/dain/expressions/begging_lust/01/sprite":"characters/dain_begging_lust","assets/characters/dain/expressions/betrayed/01/sprite":"characters/dain_betrayed","assets/characters/dain/expressions/bikini/01/sprite":"characters/dain_bikini","assets/characters/dain/expressions/bored/01/sprite":"characters/dain_bored","assets/characters/dain/expressions/choking/01/sprite":"characters/dain_choking","assets/characters/dain/expressions/climax/01/sprite":"characters/dain_climax","assets/characters/dain/expressions/climax/02/sprite":"characters/dain_climax_02","assets/characters/dain/expressions/climax/03/sprite":"characters/dain_climax_03","assets/characters/dain/expressions/climax/04/sprite":"characters/dain_climax_04","assets/characters/dain/expressions/climax/05/sprite":"characters/dain_climax_05","assets/characters/dain/expressions/climax/06/sprite":"characters/dain_climax_06","assets/characters/dain/expressions/climax/07/sprite":"characters/dain_climax_07","assets/characters/dain/expressions/climax/08/sprite":"characters/dain_climax_08","assets/characters/dain/expressions/climax/09/sprite":"characters/dain_climax_09","assets/characters/dain/expressions/climax/10/sprite":"characters/dain_climax_10","assets/characters/dain/expressions/climax/11/sprite":"characters/dain_climax_11","assets/characters/dain/expressions/cold/01/sprite":"characters/dain_cold","assets/characters/dain/expressions/combat_ready/01/sprite":"characters/dain_combat_ready","assets/characters/dain/expressions/confused/01/sprite":"characters/dain_confused","assets/characters/dain/expressions/cry/01/sprite":"characters/dain_cry","assets/characters/dain/expressions/dazed/01/sprite":"characters/dain_dazed","assets/characters/dain/expressions/dead/01/sprite":"characters/dain_dead","assets/characters/dain/expressions/disgusted/01/sprite":"characters/dain_disgusted","assets/characters/dain/expressions/dominant_aroused/01/sprite":"characters/dain_dominant_aroused","assets/characters/dain/expressions/dry_smile/01/sprite":"characters/dain_dry_smile","assets/characters/dain/expressions/dumbfounded/01/sprite":"characters/dain_dumbfounded","assets/characters/dain/expressions/enduring/01/sprite":"characters/dain_enduring","assets/characters/dain/expressions/entranced/01/sprite":"characters/dain_entranced","assets/characters/dain/expressions/exhausted/01/sprite":"characters/dain_exhausted","assets/characters/dain/expressions/fainted/01/sprite":"characters/dain_fainted","assets/characters/dain/expressions/firm/01/sprite":"characters/dain_firm","assets/characters/dain/expressions/flushed/01/sprite":"characters/dain_flushed","assets/characters/dain/expressions/flushed/02/sprite":"characters/dain_flushed_02","assets/characters/dain/expressions/flushed/03/sprite":"characters/dain_flushed_03","assets/characters/dain/expressions/furious/01/sprite":"characters/dain_furious","assets/characters/dain/expressions/groggy/01/sprite":"characters/dain_groggy","assets/characters/dain/expressions/humiliated/01/sprite":"characters/dain_humiliated","assets/characters/dain/expressions/jealous/01/sprite":"characters/dain_jealous","assets/characters/dain/expressions/kiss/01/sprite":"characters/dain_kiss","assets/characters/dain/expressions/laugh/01/sprite":"characters/dain_laugh","assets/characters/dain/expressions/lovestruck/01/sprite":"characters/dain_lovestruck","assets/characters/dain/expressions/messy_afterglow/01/sprite":"characters/dain_messy_afterglow","assets/characters/dain/expressions/normal/01/sprite":"characters/dain_normal","assets/characters/dain/expressions/oral_service/01/sprite":"characters/dain_oral_service","assets/characters/dain/expressions/pain/01/sprite":"characters/dain_pain","assets/characters/dain/expressions/pleading/01/sprite":"characters/dain_pleading","assets/characters/dain/expressions/pout/01/sprite":"characters/dain_pout","assets/characters/dain/expressions/relieved/01/sprite":"characters/dain_relieved","assets/characters/dain/expressions/sad/01/sprite":"characters/dain_sad","assets/characters/dain/expressions/scared/01/sprite":"characters/dain_scared","assets/characters/dain/expressions/scheming/01/sprite":"characters/dain_scheming","assets/characters/dain/expressions/scream/01/sprite":"characters/dain_scream","assets/characters/dain/expressions/seductive/01/sprite":"characters/dain_seductive","assets/characters/dain/expressions/shy/01/sprite":"characters/dain_shy","assets/characters/dain/expressions/smile/01/sprite":"characters/dain_smile","assets/characters/dain/expressions/smirk/01/sprite":"characters/dain_smirk","assets/characters/dain/expressions/sob/01/sprite":"characters/dain_sob","assets/characters/dain/expressions/soft_smile/01/sprite":"characters/dain_soft_smile","assets/characters/dain/expressions/surprised/01/sprite":"characters/dain_surprised","assets/characters/dain/expressions/suspicious/01/sprite":"characters/dain_suspicious","assets/characters/dain/expressions/sweat/01/sprite":"characters/dain_sweat","assets/characters/dain/expressions/tired/01/sprite":"characters/dain_tired","assets/characters/dain/expressions/touched/01/sprite":"characters/dain_touched","assets/characters/dain/expressions/undressed_shy/01/sprite":"characters/dain_undressed_shy","assets/characters/dain/expressions/undressed_shy/02/sprite":"characters/dain_undressed_shy_02","assets/characters/dain/expressions/undressed_shy/03/sprite":"characters/dain_undressed_shy_03","assets/characters/dain/expressions/undressed_shy/04/sprite":"characters/dain_undressed_shy_04","assets/characters/dain/expressions/very_shy/01/sprite":"characters/dain_very_shy","assets/characters/dain/expressions/worried/01/sprite":"characters/dain_worried","assets/characters/dain/outfits/date/expressions/active/01/sprite":"characters/dain_date_active","assets/characters/dain/outfits/date/expressions/aegyo/01/sprite":"characters/dain_date_aegyo","assets/characters/dain/outfits/date/expressions/afterglow/01/sprite":"characters/dain_date_afterglow","assets/characters/dain/outfits/date/expressions/ahegao/01/sprite":"characters/dain_date_ahegao","assets/characters/dain/outfits/date/expressions/angry/01/sprite":"characters/dain_date_angry","assets/characters/dain/outfits/date/expressions/begging_lust/01/sprite":"characters/dain_date_begging_lust","assets/characters/dain/outfits/date/expressions/betrayed/01/sprite":"characters/dain_date_betrayed","assets/characters/dain/outfits/date/expressions/bored/01/sprite":"characters/dain_date_bored","assets/characters/dain/outfits/date/expressions/choking/01/sprite":"characters/dain_date_choking","assets/characters/dain/outfits/date/expressions/climax/01/sprite":"characters/dain_date_climax","assets/characters/dain/outfits/date/expressions/cold/01/sprite":"characters/dain_date_cold","assets/characters/dain/outfits/date/expressions/combat_ready/01/sprite":"characters/dain_date_combat_ready","assets/characters/dain/outfits/date/expressions/confused/01/sprite":"characters/dain_date_confused","assets/characters/dain/outfits/date/expressions/cry/01/sprite":"characters/dain_date_cry","assets/characters/dain/outfits/date/expressions/dazed/01/sprite":"characters/dain_date_dazed","assets/characters/dain/outfits/date/expressions/dead/01/sprite":"characters/dain_date_dead","assets/characters/dain/outfits/date/expressions/disgusted/01/sprite":"characters/dain_date_disgusted","assets/characters/dain/outfits/date/expressions/dominant_aroused/01/sprite":"characters/dain_date_dominant_aroused","assets/characters/dain/outfits/date/expressions/dry_smile/01/sprite":"characters/dain_date_dry_smile","assets/characters/dain/outfits/date/expressions/dumbfounded/01/sprite":"characters/dain_date_dumbfounded","assets/characters/dain/outfits/date/expressions/enduring/01/sprite":"characters/dain_date_enduring","assets/characters/dain/outfits/date/expressions/entranced/01/sprite":"characters/dain_date_entranced","assets/characters/dain/outfits/date/expressions/exhausted/01/sprite":"characters/dain_date_exhausted","assets/characters/dain/outfits/date/expressions/fainted/01/sprite":"characters/dain_date_fainted","assets/characters/dain/outfits/date/expressions/firm/01/sprite":"characters/dain_date_firm","assets/characters/dain/outfits/date/expressions/flushed/01/sprite":"characters/dain_date_flushed","assets/characters/dain/outfits/date/expressions/furious/01/sprite":"characters/dain_date_furious","assets/characters/dain/outfits/date/expressions/groggy/01/sprite":"characters/dain_date_groggy","assets/characters/dain/outfits/date/expressions/humiliated/01/sprite":"characters/dain_date_humiliated","assets/characters/dain/outfits/date/expressions/jealous/01/sprite":"characters/dain_date_jealous","assets/characters/dain/outfits/date/expressions/kiss/01/sprite":"characters/dain_date_kiss","assets/characters/dain/outfits/date/expressions/laugh/01/sprite":"characters/dain_date_laugh","assets/characters/dain/outfits/date/expressions/lovestruck/01/sprite":"characters/dain_date_lovestruck","assets/characters/dain/outfits/date/expressions/messy_afterglow/01/sprite":"characters/dain_date_messy_afterglow","assets/characters/dain/outfits/date/expressions/normal/01/sprite":"characters/dain_date_normal","assets/characters/dain/outfits/date/expressions/oral_service/01/sprite":"characters/dain_date_oral_service","assets/characters/dain/outfits/date/expressions/pain/01/sprite":"characters/dain_date_pain","assets/characters/dain/outfits/date/expressions/pleading/01/sprite":"characters/dain_date_pleading","assets/characters/dain/outfits/date/expressions/pout/01/sprite":"characters/dain_date_pout","assets/characters/dain/outfits/date/expressions/relieved/01/sprite":"characters/dain_date_relieved","assets/characters/dain/outfits/date/expressions/sad/01/sprite":"characters/dain_date_sad","assets/characters/dain/outfits/date/expressions/scared/01/sprite":"characters/dain_date_scared","assets/characters/dain/outfits/date/expressions/scheming/01/sprite":"characters/dain_date_scheming","assets/characters/dain/outfits/date/expressions/scream/01/sprite":"characters/dain_date_scream","assets/characters/dain/outfits/date/expressions/seductive/01/sprite":"characters/dain_date_seductive","assets/characters/dain/outfits/date/expressions/shy/01/sprite":"characters/dain_date_shy","assets/characters/dain/outfits/date/expressions/smile/01/sprite":"characters/dain_date_smile","assets/characters/dain/outfits/date/expressions/smirk/01/sprite":"characters/dain_date_smirk","assets/characters/dain/outfits/date/expressions/sob/01/sprite":"characters/dain_date_sob","assets/characters/dain/outfits/date/expressions/soft_smile/01/sprite":"characters/dain_date_soft_smile","assets/characters/dain/outfits/date/expressions/surprised/01/sprite":"characters/dain_date_surprised","assets/characters/dain/outfits/date/expressions/suspicious/01/sprite":"characters/dain_date_suspicious","assets/characters/dain/outfits/date/expressions/sweat/01/sprite":"characters/dain_date_sweat","assets/characters/dain/outfits/date/expressions/tired/01/sprite":"characters/dain_date_tired","assets/characters/dain/outfits/date/expressions/touched/01/sprite":"characters/dain_date_touched","assets/characters/dain/outfits/date/expressions/undressed_shy/01/sprite":"characters/dain_date_undressed_shy","assets/characters/dain/outfits/date/expressions/very_shy/01/sprite":"characters/dain_date_very_shy","assets/characters/dain/outfits/date/expressions/worried/01/sprite":"characters/dain_date_worried","assets/characters/haeun/expressions/active/01/sprite":"characters/haeun_active","assets/characters/haeun/expressions/aegyo/01/sprite":"characters/haeun_aegyo","assets/characters/haeun/expressions/afterglow/01/sprite":"characters/haeun_afterglow","assets/characters/haeun/expressions/ahegao/01/sprite":"characters/haeun_ahegao","assets/characters/haeun/expressions/angry/01/sprite":"characters/haeun_angry","assets/characters/haeun/expressions/begging_lust/01/sprite":"characters/haeun_begging_lust","assets/characters/haeun/expressions/betrayed/01/sprite":"characters/haeun_betrayed","assets/characters/haeun/expressions/bored/01/sprite":"characters/haeun_bored","assets/characters/haeun/expressions/choking/01/sprite":"characters/haeun_choking","assets/characters/haeun/expressions/climax/01/sprite":"characters/haeun_climax","assets/characters/haeun/expressions/climax/02/sprite":"characters/haeun_climax_02","assets/characters/haeun/expressions/climax/03/sprite":"characters/haeun_climax_03","assets/characters/haeun/expressions/climax/04/sprite":"characters/haeun_climax_04","assets/characters/haeun/expressions/climax/05/sprite":"characters/haeun_climax_05","assets/characters/haeun/expressions/climax/06/sprite":"characters/haeun_climax_06","assets/characters/haeun/expressions/climax/07/sprite":"characters/haeun_climax_07","assets/characters/haeun/expressions/climax/08/sprite":"characters/haeun_climax_08","assets/characters/haeun/expressions/cold/01/sprite":"characters/haeun_cold","assets/characters/haeun/expressions/combat_ready/01/sprite":"characters/haeun_combat_ready","assets/characters/haeun/expressions/confused/01/sprite":"characters/haeun_confused","assets/characters/haeun/expressions/cry/01/sprite":"characters/haeun_cry","assets/characters/haeun/expressions/dazed/01/sprite":"characters/haeun_dazed","assets/characters/haeun/expressions/dead/01/sprite":"characters/haeun_dead","assets/characters/haeun/expressions/disgusted/01/sprite":"characters/haeun_disgusted","assets/characters/haeun/expressions/dominant_aroused/01/sprite":"characters/haeun_dominant_aroused","assets/characters/haeun/expressions/dry_smile/01/sprite":"characters/haeun_dry_smile","assets/characters/haeun/expressions/dumbfounded/01/sprite":"characters/haeun_dumbfounded","assets/characters/haeun/expressions/enduring/01/sprite":"characters/haeun_enduring","assets/characters/haeun/expressions/entranced/01/sprite":"characters/haeun_entranced","assets/characters/haeun/expressions/exhausted/01/sprite":"characters/haeun_exhausted","assets/characters/haeun/expressions/fainted/01/sprite":"characters/haeun_fainted","assets/characters/haeun/expressions/firm/01/sprite":"characters/haeun_firm","assets/characters/haeun/expressions/flushed/01/sprite":"characters/haeun_flushed","assets/characters/haeun/expressions/flushed/02/sprite":"characters/haeun_flushed_02","assets/characters/haeun/expressions/flushed/03/sprite":"characters/haeun_flushed_03","assets/characters/haeun/expressions/furious/01/sprite":"characters/haeun_furious","assets/characters/haeun/expressions/groggy/01/sprite":"characters/haeun_groggy","assets/characters/haeun/expressions/humiliated/01/sprite":"characters/haeun_humiliated","assets/characters/haeun/expressions/jealous/01/sprite":"characters/haeun_jealous","assets/characters/haeun/expressions/kiss/01/sprite":"characters/haeun_kiss","assets/characters/haeun/expressions/laugh/01/sprite":"characters/haeun_laugh","assets/characters/haeun/expressions/lovestruck/01/sprite":"characters/haeun_lovestruck","assets/characters/haeun/expressions/messy_afterglow/01/sprite":"characters/haeun_messy_afterglow","assets/characters/haeun/expressions/normal/01/sprite":"characters/haeun_normal","assets/characters/haeun/expressions/oral_service/01/sprite":"characters/haeun_oral_service","assets/characters/haeun/expressions/pain/01/sprite":"characters/haeun_pain","assets/characters/haeun/expressions/pleading/01/sprite":"characters/haeun_pleading","assets/characters/haeun/expressions/pout/01/sprite":"characters/haeun_pout","assets/characters/haeun/expressions/relieved/01/sprite":"characters/haeun_relieved","assets/characters/haeun/expressions/sad/01/sprite":"characters/haeun_sad","assets/characters/haeun/expressions/scared/01/sprite":"characters/haeun_scared","assets/characters/haeun/expressions/scheming/01/sprite":"characters/haeun_scheming","assets/characters/haeun/expressions/scream/01/sprite":"characters/haeun_scream","assets/characters/haeun/expressions/seductive/01/sprite":"characters/haeun_seductive","assets/characters/haeun/expressions/shy/01/sprite":"characters/haeun_shy","assets/characters/haeun/expressions/smile/01/sprite":"characters/haeun_smile","assets/characters/haeun/expressions/smirk/01/sprite":"characters/haeun_smirk","assets/characters/haeun/expressions/sob/01/sprite":"characters/haeun_sob","assets/characters/haeun/expressions/soft_smile/01/sprite":"characters/haeun_soft_smile","assets/characters/haeun/expressions/surprised/01/sprite":"characters/haeun_surprised","assets/characters/haeun/expressions/suspicious/01/sprite":"characters/haeun_suspicious","assets/characters/haeun/expressions/sweat/01/sprite":"characters/haeun_sweat","assets/characters/haeun/expressions/tired/01/sprite":"characters/haeun_tired","assets/characters/haeun/expressions/touched/01/sprite":"characters/haeun_touched","assets/characters/haeun/expressions/undressed_shy/01/sprite":"characters/haeun_undressed_shy","assets/characters/haeun/expressions/very_shy/01/sprite":"characters/haeun_very_shy","assets/characters/haeun/expressions/worried/01/sprite":"characters/haeun_worried","assets/characters/junho/expressions/awkward/01/sprite":"characters/junho_awkward","assets/characters/junho/expressions/normal/01/sprite":"characters/junho_normal","assets/characters/minsu/expressions/active/01/sprite":"characters/minsu_active","assets/characters/minsu/expressions/aegyo/01/sprite":"characters/minsu_aegyo","assets/characters/minsu/expressions/afterglow/01/sprite":"characters/minsu_afterglow","assets/characters/minsu/expressions/angry/01/sprite":"characters/minsu_angry","assets/characters/minsu/expressions/begging_lust/01/sprite":"characters/minsu_begging_lust","assets/characters/minsu/expressions/betrayed/01/sprite":"characters/minsu_betrayed","assets/characters/minsu/expressions/bored/01/sprite":"characters/minsu_bored","assets/characters/minsu/expressions/choking/01/sprite":"characters/minsu_choking","assets/characters/minsu/expressions/climax/01/sprite":"characters/minsu_climax","assets/characters/minsu/expressions/climax/02/sprite":"characters/minsu_climax_02","assets/characters/minsu/expressions/climax/03/sprite":"characters/minsu_climax_03","assets/characters/minsu/expressions/climax/04/sprite":"characters/minsu_climax_04","assets/characters/minsu/expressions/climax/05/sprite":"characters/minsu_climax_05","assets/characters/minsu/expressions/climax/06/sprite":"characters/minsu_climax_06","assets/characters/minsu/expressions/cold/01/sprite":"characters/minsu_cold","assets/characters/minsu/expressions/combat_ready/01/sprite":"characters/minsu_combat_ready","assets/characters/minsu/expressions/confused/01/sprite":"characters/minsu_confused","assets/characters/minsu/expressions/cry/01/sprite":"characters/minsu_cry","assets/characters/minsu/expressions/dazed/01/sprite":"characters/minsu_dazed","assets/characters/minsu/expressions/dead/01/sprite":"characters/minsu_dead","assets/characters/minsu/expressions/disgusted/01/sprite":"characters/minsu_disgusted","assets/characters/minsu/expressions/dominant_aroused/01/sprite":"characters/minsu_dominant_aroused","assets/characters/minsu/expressions/dry_smile/01/sprite":"characters/minsu_dry_smile","assets/characters/minsu/expressions/dumbfounded/01/sprite":"characters/minsu_dumbfounded","assets/characters/minsu/expressions/enduring/01/sprite":"characters/minsu_enduring","assets/characters/minsu/expressions/entranced/01/sprite":"characters/minsu_entranced","assets/characters/minsu/expressions/exhausted/01/sprite":"characters/minsu_exhausted","assets/characters/minsu/expressions/fainted/01/sprite":"characters/minsu_fainted","assets/characters/minsu/expressions/firm/01/sprite":"characters/minsu_firm","assets/characters/minsu/expressions/flushed/01/sprite":"characters/minsu_flushed","assets/characters/minsu/expressions/flushed/02/sprite":"characters/minsu_flushed_02","assets/characters/minsu/expressions/flushed/03/sprite":"characters/minsu_flushed_03","assets/characters/minsu/expressions/furious/01/sprite":"characters/minsu_furious","assets/characters/minsu/expressions/groggy/01/sprite":"characters/minsu_groggy","assets/characters/minsu/expressions/humiliated/01/sprite":"characters/minsu_humiliated","assets/characters/minsu/expressions/jealous/01/sprite":"characters/minsu_jealous","assets/characters/minsu/expressions/kiss/01/sprite":"characters/minsu_kiss","assets/characters/minsu/expressions/laugh/01/sprite":"characters/minsu_laugh","assets/characters/minsu/expressions/lovestruck/01/sprite":"characters/minsu_lovestruck","assets/characters/minsu/expressions/messy_afterglow/01/sprite":"characters/minsu_messy_afterglow","assets/characters/minsu/expressions/normal/01/sprite":"characters/minsu_normal","assets/characters/minsu/expressions/oral_service/01/sprite":"characters/minsu_oral_service","assets/characters/minsu/expressions/pain/01/sprite":"characters/minsu_pain","assets/characters/minsu/expressions/pleading/01/sprite":"characters/minsu_pleading","assets/characters/minsu/expressions/pout/01/sprite":"characters/minsu_pout","assets/characters/minsu/expressions/relieved/01/sprite":"characters/minsu_relieved","assets/characters/minsu/expressions/sad/01/sprite":"characters/minsu_sad","assets/characters/minsu/expressions/scared/01/sprite":"characters/minsu_scared","assets/characters/minsu/expressions/scheming/01/sprite":"characters/minsu_scheming","assets/characters/minsu/expressions/scream/01/sprite":"characters/minsu_scream","assets/characters/minsu/expressions/seductive/01/sprite":"characters/minsu_seductive","assets/characters/minsu/expressions/shy/01/sprite":"characters/minsu_shy","assets/characters/minsu/expressions/smile/01/sprite":"characters/minsu_smile","assets/characters/minsu/expressions/smile/02/sprite":"characters/minsu_smile_02","assets/characters/minsu/expressions/smirk/01/sprite":"characters/minsu_smirk","assets/characters/minsu/expressions/sob/01/sprite":"characters/minsu_sob","assets/characters/minsu/expressions/soft_smile/01/sprite":"characters/minsu_soft_smile","assets/characters/minsu/expressions/surprised/01/sprite":"characters/minsu_surprised","assets/characters/minsu/expressions/suspicious/01/sprite":"characters/minsu_suspicious","assets/characters/minsu/expressions/sweat/01/sprite":"characters/minsu_sweat","assets/characters/minsu/expressions/tired/01/sprite":"characters/minsu_tired","assets/characters/minsu/expressions/touched/01/sprite":"characters/minsu_touched","assets/characters/minsu/expressions/undressed_shy/01/sprite":"characters/minsu_undressed_shy","assets/characters/minsu/expressions/very_shy/01/sprite":"characters/minsu_very_shy","assets/characters/minsu/expressions/worried/01/sprite":"characters/minsu_worried","assets/characters/nurse/expressions/active/01/sprite":"characters/nurse_active","assets/characters/nurse/expressions/aegyo/01/sprite":"characters/nurse_aegyo","assets/characters/nurse/expressions/afterglow/01/sprite":"characters/nurse_afterglow","assets/characters/nurse/expressions/ahegao/01/sprite":"characters/nurse_ahegao","assets/characters/nurse/expressions/angry/01/sprite":"characters/nurse_angry","assets/characters/nurse/expressions/begging_lust/01/sprite":"characters/nurse_begging_lust","assets/characters/nurse/expressions/betrayed/01/sprite":"characters/nurse_betrayed","assets/characters/nurse/expressions/bikini/01/sprite":"characters/nurse_bikini","assets/characters/nurse/expressions/bored/01/sprite":"characters/nurse_bored","assets/characters/nurse/expressions/choking/01/sprite":"characters/nurse_choking","assets/characters/nurse/expressions/climax/01/sprite":"characters/nurse_climax","assets/characters/nurse/expressions/climax/02/sprite":"characters/nurse_climax_02","assets/characters/nurse/expressions/climax/03/sprite":"characters/nurse_climax_03","assets/characters/nurse/expressions/climax/04/sprite":"characters/nurse_climax_04","assets/characters/nurse/expressions/climax/05/sprite":"characters/nurse_climax_05","assets/characters/nurse/expressions/climax/06/sprite":"characters/nurse_climax_06","assets/characters/nurse/expressions/climax/07/sprite":"characters/nurse_climax_07","assets/characters/nurse/expressions/climax/08/sprite":"characters/nurse_climax_08","assets/characters/nurse/expressions/climax/09/sprite":"characters/nurse_climax_09","assets/characters/nurse/expressions/cold/01/sprite":"characters/nurse_cold","assets/characters/nurse/expressions/combat_ready/01/sprite":"characters/nurse_combat_ready","assets/characters/nurse/expressions/confused/01/sprite":"characters/nurse_confused","assets/characters/nurse/expressions/cry/01/sprite":"characters/nurse_cry","assets/characters/nurse/expressions/dazed/01/sprite":"characters/nurse_dazed","assets/characters/nurse/expressions/dead/01/sprite":"characters/nurse_dead","assets/characters/nurse/expressions/disgusted/01/sprite":"characters/nurse_disgusted","assets/characters/nurse/expressions/dominant_aroused/01/sprite":"characters/nurse_dominant_aroused","assets/characters/nurse/expressions/dry_smile/01/sprite":"characters/nurse_dry_smile","assets/characters/nurse/expressions/dumbfounded/01/sprite":"characters/nurse_dumbfounded","assets/characters/nurse/expressions/enduring/01/sprite":"characters/nurse_enduring","assets/characters/nurse/expressions/entranced/01/sprite":"characters/nurse_entranced","assets/characters/nurse/expressions/exhausted/01/sprite":"characters/nurse_exhausted","assets/characters/nurse/expressions/fainted/01/sprite":"characters/nurse_fainted","assets/characters/nurse/expressions/firm/01/sprite":"characters/nurse_firm","assets/characters/nurse/expressions/flushed/01/sprite":"characters/nurse_flushed","assets/characters/nurse/expressions/flushed/02/sprite":"characters/nurse_flushed_02","assets/characters/nurse/expressions/flushed/03/sprite":"characters/nurse_flushed_03","assets/characters/nurse/expressions/furious/01/sprite":"characters/nurse_furious","assets/characters/nurse/expressions/groggy/01/sprite":"characters/nurse_groggy","assets/characters/nurse/expressions/humiliated/01/sprite":"characters/nurse_humiliated","assets/characters/nurse/expressions/jealous/01/sprite":"characters/nurse_jealous","assets/characters/nurse/expressions/kiss/01/sprite":"characters/nurse_kiss","assets/characters/nurse/expressions/laugh/01/sprite":"characters/nurse_laugh","assets/characters/nurse/expressions/lovestruck/01/sprite":"characters/nurse_lovestruck","assets/characters/nurse/expressions/messy_afterglow/01/sprite":"characters/nurse_messy_afterglow","assets/characters/nurse/expressions/normal/01/sprite":"characters/nurse_normal","assets/characters/nurse/expressions/oral_service/01/sprite":"characters/nurse_oral_service","assets/characters/nurse/expressions/pain/01/sprite":"characters/nurse_pain","assets/characters/nurse/expressions/pleading/01/sprite":"characters/nurse_pleading","assets/characters/nurse/expressions/pout/01/sprite":"characters/nurse_pout","assets/characters/nurse/expressions/relieved/01/sprite":"characters/nurse_relieved","assets/characters/nurse/expressions/sad/01/sprite":"characters/nurse_sad","assets/characters/nurse/expressions/scared/01/sprite":"characters/nurse_scared","assets/characters/nurse/expressions/scheming/01/sprite":"characters/nurse_scheming","assets/characters/nurse/expressions/scream/01/sprite":"characters/nurse_scream","assets/characters/nurse/expressions/seductive/01/sprite":"characters/nurse_seductive","assets/characters/nurse/expressions/shy/01/sprite":"characters/nurse_shy","assets/characters/nurse/expressions/smile/01/sprite":"characters/nurse_smile","assets/characters/nurse/expressions/smile/02/sprite":"characters/nurse_smile_02","assets/characters/nurse/expressions/smirk/01/sprite":"characters/nurse_smirk","assets/characters/nurse/expressions/sob/01/sprite":"characters/nurse_sob","assets/characters/nurse/expressions/soft_smile/01/sprite":"characters/nurse_soft_smile","assets/characters/nurse/expressions/surprised/01/sprite":"characters/nurse_surprised","assets/characters/nurse/expressions/suspicious/01/sprite":"characters/nurse_suspicious","assets/characters/nurse/expressions/sweat/01/sprite":"characters/nurse_sweat","assets/characters/nurse/expressions/tired/01/sprite":"characters/nurse_tired","assets/characters/nurse/expressions/touched/01/sprite":"characters/nurse_touched","assets/characters/nurse/expressions/undressed_shy/01/sprite":"characters/nurse_undressed_shy","assets/characters/nurse/expressions/very_shy/01/sprite":"characters/nurse_very_shy","assets/characters/nurse/expressions/worried/01/sprite":"characters/nurse_worried","assets/characters/nurse/outfits/home/expressions/active/01/sprite":"characters/nurse_home_active","assets/characters/nurse/outfits/home/expressions/aegyo/01/sprite":"characters/nurse_home_aegyo","assets/characters/nurse/outfits/home/expressions/afterglow/01/sprite":"characters/nurse_home_afterglow","assets/characters/nurse/outfits/home/expressions/ahegao/01/sprite":"characters/nurse_home_ahegao","assets/characters/nurse/outfits/home/expressions/angry/01/sprite":"characters/nurse_home_angry","assets/characters/nurse/outfits/home/expressions/begging_lust/01/sprite":"characters/nurse_home_begging_lust","assets/characters/nurse/outfits/home/expressions/betrayed/01/sprite":"characters/nurse_home_betrayed","assets/characters/nurse/outfits/home/expressions/bored/01/sprite":"characters/nurse_home_bored","assets/characters/nurse/outfits/home/expressions/choking/01/sprite":"characters/nurse_home_choking","assets/characters/nurse/outfits/home/expressions/climax/01/sprite":"characters/nurse_home_climax","assets/characters/nurse/outfits/home/expressions/cold/01/sprite":"characters/nurse_home_cold","assets/characters/nurse/outfits/home/expressions/combat_ready/01/sprite":"characters/nurse_home_combat_ready","assets/characters/nurse/outfits/home/expressions/confused/01/sprite":"characters/nurse_home_confused","assets/characters/nurse/outfits/home/expressions/cry/01/sprite":"characters/nurse_home_cry","assets/characters/nurse/outfits/home/expressions/dazed/01/sprite":"characters/nurse_home_dazed","assets/characters/nurse/outfits/home/expressions/dead/01/sprite":"characters/nurse_home_dead","assets/characters/nurse/outfits/home/expressions/disgusted/01/sprite":"characters/nurse_home_disgusted","assets/characters/nurse/outfits/home/expressions/dominant_aroused/01/sprite":"characters/nurse_home_dominant_aroused","assets/characters/nurse/outfits/home/expressions/dry_smile/01/sprite":"characters/nurse_home_dry_smile","assets/characters/nurse/outfits/home/expressions/dumbfounded/01/sprite":"characters/nurse_home_dumbfounded","assets/characters/nurse/outfits/home/expressions/enduring/01/sprite":"characters/nurse_home_enduring","assets/characters/nurse/outfits/home/expressions/entranced/01/sprite":"characters/nurse_home_entranced","assets/characters/nurse/outfits/home/expressions/exhausted/01/sprite":"characters/nurse_home_exhausted","assets/characters/nurse/outfits/home/expressions/fainted/01/sprite":"characters/nurse_home_fainted","assets/characters/nurse/outfits/home/expressions/firm/01/sprite":"characters/nurse_home_firm","assets/characters/nurse/outfits/home/expressions/flushed/01/sprite":"characters/nurse_home_flushed","assets/characters/nurse/outfits/home/expressions/furious/01/sprite":"characters/nurse_home_furious","assets/characters/nurse/outfits/home/expressions/groggy/01/sprite":"characters/nurse_home_groggy","assets/characters/nurse/outfits/home/expressions/humiliated/01/sprite":"characters/nurse_home_humiliated","assets/characters/nurse/outfits/home/expressions/jealous/01/sprite":"characters/nurse_home_jealous","assets/characters/nurse/outfits/home/expressions/kiss/01/sprite":"characters/nurse_home_kiss","assets/characters/nurse/outfits/home/expressions/laugh/01/sprite":"characters/nurse_home_laugh","assets/characters/nurse/outfits/home/expressions/lovestruck/01/sprite":"characters/nurse_home_lovestruck","assets/characters/nurse/outfits/home/expressions/messy_afterglow/01/sprite":"characters/nurse_home_messy_afterglow","assets/characters/nurse/outfits/home/expressions/normal/01/sprite":"characters/nurse_home_normal","assets/characters/nurse/outfits/home/expressions/oral_service/01/sprite":"characters/nurse_home_oral_service","assets/characters/nurse/outfits/home/expressions/pain/01/sprite":"characters/nurse_home_pain","assets/characters/nurse/outfits/home/expressions/pleading/01/sprite":"characters/nurse_home_pleading","assets/characters/nurse/outfits/home/expressions/pout/01/sprite":"characters/nurse_home_pout","assets/characters/nurse/outfits/home/expressions/relieved/01/sprite":"characters/nurse_home_relieved","assets/characters/nurse/outfits/home/expressions/sad/01/sprite":"characters/nurse_home_sad","assets/characters/nurse/outfits/home/expressions/scared/01/sprite":"characters/nurse_home_scared","assets/characters/nurse/outfits/home/expressions/scheming/01/sprite":"characters/nurse_home_scheming","assets/characters/nurse/outfits/home/expressions/scream/01/sprite":"characters/nurse_home_scream","assets/characters/nurse/outfits/home/expressions/seductive/01/sprite":"characters/nurse_home_seductive","assets/characters/nurse/outfits/home/expressions/shy/01/sprite":"characters/nurse_home_shy","assets/characters/nurse/outfits/home/expressions/smile/01/sprite":"characters/nurse_home_smile","assets/characters/nurse/outfits/home/expressions/smirk/01/sprite":"characters/nurse_home_smirk","assets/characters/nurse/outfits/home/expressions/sob/01/sprite":"characters/nurse_home_sob","assets/characters/nurse/outfits/home/expressions/soft_smile/01/sprite":"characters/nurse_home_soft_smile","assets/characters/nurse/outfits/home/expressions/surprised/01/sprite":"characters/nurse_home_surprised","assets/characters/nurse/outfits/home/expressions/suspicious/01/sprite":"characters/nurse_home_suspicious","assets/characters/nurse/outfits/home/expressions/sweat/01/sprite":"characters/nurse_home_sweat","assets/characters/nurse/outfits/home/expressions/tired/01/sprite":"characters/nurse_home_tired","assets/characters/nurse/outfits/home/expressions/touched/01/sprite":"characters/nurse_home_touched","assets/characters/nurse/outfits/home/expressions/undressed_shy/01/sprite":"characters/nurse_home_undressed_shy","assets/characters/nurse/outfits/home/expressions/very_shy/01/sprite":"characters/nurse_home_very_shy","assets/characters/nurse/outfits/home/expressions/worried/01/sprite":"characters/nurse_home_worried","assets/characters/seoyeon/expressions/active/01/sprite":"characters/seyoun_active","assets/characters/seoyeon/expressions/aegyo/01/sprite":"characters/seyoun_aegyo","assets/characters/seoyeon/expressions/afterglow/01/sprite":"characters/seyoun_afterglow","assets/characters/seoyeon/expressions/ahegao/01/sprite":"characters/seyoun_ahegao","assets/characters/seoyeon/expressions/angry/01/sprite":"characters/seyoun_angry","assets/characters/seoyeon/expressions/back/01/sprite":"characters/seyoun_back","assets/characters/seoyeon/expressions/begging_lust/01/sprite":"characters/seyoun_begging_lust","assets/characters/seoyeon/expressions/betrayed/01/sprite":"characters/seyoun_betrayed","assets/characters/seoyeon/expressions/bikini/01/sprite":"characters/seyoun_bikini","assets/characters/seoyeon/expressions/bored/01/sprite":"characters/seyoun_bored","assets/characters/seoyeon/expressions/choking/01/sprite":"characters/seyoun_choking","assets/characters/seoyeon/expressions/climax/01/sprite":"characters/seyoun_climax","assets/characters/seoyeon/expressions/climax/02/sprite":"characters/seyoun_climax_02","assets/characters/seoyeon/expressions/climax/03/sprite":"characters/seyoun_climax_03","assets/characters/seoyeon/expressions/climax/04/sprite":"characters/seyoun_climax_04","assets/characters/seoyeon/expressions/climax/05/sprite":"characters/seyoun_climax_05","assets/characters/seoyeon/expressions/climax/06/sprite":"characters/seyoun_climax_06","assets/characters/seoyeon/expressions/cold/01/sprite":"characters/seyoun_cold","assets/characters/seoyeon/expressions/combat_ready/01/sprite":"characters/seyoun_combat_ready","assets/characters/seoyeon/expressions/confused/01/sprite":"characters/seyoun_confused","assets/characters/seoyeon/expressions/cry/01/sprite":"characters/seyoun_cry","assets/characters/seoyeon/expressions/dazed/01/sprite":"characters/seyoun_dazed","assets/characters/seoyeon/expressions/dead/01/sprite":"characters/seyoun_dead","assets/characters/seoyeon/expressions/disgusted/01/sprite":"characters/seyoun_disgusted","assets/characters/seoyeon/expressions/dominant_aroused/01/sprite":"characters/seyoun_dominant_aroused","assets/characters/seoyeon/expressions/dry_smile/01/sprite":"characters/seyoun_dry_smile","assets/characters/seoyeon/expressions/dumbfounded/01/sprite":"characters/seyoun_dumbfounded","assets/characters/seoyeon/expressions/enduring/01/sprite":"characters/seyoun_enduring","assets/characters/seoyeon/expressions/entranced/01/sprite":"characters/seyoun_entranced","assets/characters/seoyeon/expressions/exhausted/01/sprite":"characters/seyoun_exhausted","assets/characters/seoyeon/expressions/fainted/01/sprite":"characters/seyoun_fainted","assets/characters/seoyeon/expressions/firm/01/sprite":"characters/seyoun_firm","assets/characters/seoyeon/expressions/flushed/01/sprite":"characters/seyoun_flushed","assets/characters/seoyeon/expressions/flushed/02/sprite":"characters/seyoun_flushed_02","assets/characters/seoyeon/expressions/flushed/03/sprite":"characters/seyoun_flushed_03","assets/characters/seoyeon/expressions/flushed/04/sprite":"characters/seyoun_flushed_04","assets/characters/seoyeon/expressions/flushed/05/sprite":"characters/seyoun_flushed_05","assets/characters/seoyeon/expressions/flushed/06/sprite":"characters/seyoun_flushed_06","assets/characters/seoyeon/expressions/furious/01/sprite":"characters/seyoun_furious","assets/characters/seoyeon/expressions/groggy/01/sprite":"characters/seyoun_groggy","assets/characters/seoyeon/expressions/humiliated/01/sprite":"characters/seyoun_humiliated","assets/characters/seoyeon/expressions/jealous/01/sprite":"characters/seyoun_jealous","assets/characters/seoyeon/expressions/kiss/01/sprite":"characters/seyoun_kiss","assets/characters/seoyeon/expressions/laugh/01/sprite":"characters/seyoun_laugh","assets/characters/seoyeon/expressions/lovestruck/01/sprite":"characters/seyoun_lovestruck","assets/characters/seoyeon/expressions/messy_afterglow/01/sprite":"characters/seyoun_messy_afterglow","assets/characters/seoyeon/expressions/normal/01/sprite":"characters/seyoun_normal","assets/characters/seoyeon/expressions/oral_service/01/sprite":"characters/seyoun_oral_service","assets/characters/seoyeon/expressions/pain/01/sprite":"characters/seyoun_pain","assets/characters/seoyeon/expressions/pleading/01/sprite":"characters/seyoun_pleading","assets/characters/seoyeon/expressions/pout/01/sprite":"characters/seyoun_pout","assets/characters/seoyeon/expressions/relieved/01/sprite":"characters/seyoun_relieved","assets/characters/seoyeon/expressions/sad/01/sprite":"characters/seyoun_sad","assets/characters/seoyeon/expressions/scared/01/sprite":"characters/seyoun_scared","assets/characters/seoyeon/expressions/scheming/01/sprite":"characters/seyoun_scheming","assets/characters/seoyeon/expressions/scream/01/sprite":"characters/seyoun_scream","assets/characters/seoyeon/expressions/seductive/01/sprite":"characters/seyoun_seductive","assets/characters/seoyeon/expressions/shy/01/sprite":"characters/seyoun_shy","assets/characters/seoyeon/expressions/smile/01/sprite":"characters/seyoun_smile","assets/characters/seoyeon/expressions/smirk/01/sprite":"characters/seyoun_smirk","assets/characters/seoyeon/expressions/sob/01/sprite":"characters/seyoun_sob","assets/characters/seoyeon/expressions/soft_smile/01/sprite":"characters/seyoun_soft_smile","assets/characters/seoyeon/expressions/surprised/01/sprite":"characters/seyoun_surprised","assets/characters/seoyeon/expressions/suspicious/01/sprite":"characters/seyoun_suspicious","assets/characters/seoyeon/expressions/sweat/01/sprite":"characters/seyoun_sweat","assets/characters/seoyeon/expressions/tired/01/sprite":"characters/seyoun_tired","assets/characters/seoyeon/expressions/touched/01/sprite":"characters/seyoun_touched","assets/characters/seoyeon/expressions/undressed_shy/01/sprite":"characters/seyoun_undressed_shy","assets/characters/seoyeon/expressions/very_shy/01/sprite":"characters/seyoun_very_shy","assets/characters/seoyeon/expressions/worried/01/sprite":"characters/seyoun_worried","assets/characters/seoyeon/outfits/date/expressions/active/01/sprite":"characters/seyoun_date_active","assets/characters/seoyeon/outfits/date/expressions/aegyo/01/sprite":"characters/seyoun_date_aegyo","assets/characters/seoyeon/outfits/date/expressions/afterglow/01/sprite":"characters/seyoun_date_afterglow","assets/characters/seoyeon/outfits/date/expressions/ahegao/01/sprite":"characters/seyoun_date_ahegao","assets/characters/seoyeon/outfits/date/expressions/angry/01/sprite":"characters/seyoun_date_angry","assets/characters/seoyeon/outfits/date/expressions/back/01/sprite":"characters/seyoun_date_back","assets/characters/seoyeon/outfits/date/expressions/begging_lust/01/sprite":"characters/seyoun_date_begging_lust","assets/characters/seoyeon/outfits/date/expressions/betrayed/01/sprite":"characters/seyoun_date_betrayed","assets/characters/seoyeon/outfits/date/expressions/bored/01/sprite":"characters/seyoun_date_bored","assets/characters/seoyeon/outfits/date/expressions/choking/01/sprite":"characters/seyoun_date_choking","assets/characters/seoyeon/outfits/date/expressions/climax/01/sprite":"characters/seyoun_date_climax","assets/characters/seoyeon/outfits/date/expressions/cold/01/sprite":"characters/seyoun_date_cold","assets/characters/seoyeon/outfits/date/expressions/combat_ready/01/sprite":"characters/seyoun_date_combat_ready","assets/characters/seoyeon/outfits/date/expressions/confused/01/sprite":"characters/seyoun_date_confused","assets/characters/seoyeon/outfits/date/expressions/cry/01/sprite":"characters/seyoun_date_cry","assets/characters/seoyeon/outfits/date/expressions/dazed/01/sprite":"characters/seyoun_date_dazed","assets/characters/seoyeon/outfits/date/expressions/dead/01/sprite":"characters/seyoun_date_dead","assets/characters/seoyeon/outfits/date/expressions/disgusted/01/sprite":"characters/seyoun_date_disgusted","assets/characters/seoyeon/outfits/date/expressions/dominant_aroused/01/sprite":"characters/seyoun_date_dominant_aroused","assets/characters/seoyeon/outfits/date/expressions/dry_smile/01/sprite":"characters/seyoun_date_dry_smile","assets/characters/seoyeon/outfits/date/expressions/dumbfounded/01/sprite":"characters/seyoun_date_dumbfounded","assets/characters/seoyeon/outfits/date/expressions/enduring/01/sprite":"characters/seyoun_date_enduring","assets/characters/seoyeon/outfits/date/expressions/entranced/01/sprite":"characters/seyoun_date_entranced","assets/characters/seoyeon/outfits/date/expressions/exhausted/01/sprite":"characters/seyoun_date_exhausted","assets/characters/seoyeon/outfits/date/expressions/fainted/01/sprite":"characters/seyoun_date_fainted","assets/characters/seoyeon/outfits/date/expressions/firm/01/sprite":"characters/seyoun_date_firm","assets/characters/seoyeon/outfits/date/expressions/flushed/01/sprite":"characters/seyoun_date_flushed","assets/characters/seoyeon/outfits/date/expressions/furious/01/sprite":"characters/seyoun_date_furious","assets/characters/seoyeon/outfits/date/expressions/groggy/01/sprite":"characters/seyoun_date_groggy","assets/characters/seoyeon/outfits/date/expressions/humiliated/01/sprite":"characters/seyoun_date_humiliated","assets/characters/seoyeon/outfits/date/expressions/jealous/01/sprite":"characters/seyoun_date_jealous","assets/characters/seoyeon/outfits/date/expressions/kiss/01/sprite":"characters/seyoun_date_kiss","assets/characters/seoyeon/outfits/date/expressions/laugh/01/sprite":"characters/seyoun_date_laugh","assets/characters/seoyeon/outfits/date/expressions/lovestruck/01/sprite":"characters/seyoun_date_lovestruck","assets/characters/seoyeon/outfits/date/expressions/messy_afterglow/01/sprite":"characters/seyoun_date_messy_afterglow","assets/characters/seoyeon/outfits/date/expressions/normal/01/sprite":"characters/seyoun_date_normal","assets/characters/seoyeon/outfits/date/expressions/oral_service/01/sprite":"characters/seyoun_date_oral_service","assets/characters/seoyeon/outfits/date/expressions/pain/01/sprite":"characters/seyoun_date_pain","assets/characters/seoyeon/outfits/date/expressions/pleading/01/sprite":"characters/seyoun_date_pleading","assets/characters/seoyeon/outfits/date/expressions/pout/01/sprite":"characters/seyoun_date_pout","assets/characters/seoyeon/outfits/date/expressions/relieved/01/sprite":"characters/seyoun_date_relieved","assets/characters/seoyeon/outfits/date/expressions/sad/01/sprite":"characters/seyoun_date_sad","assets/characters/seoyeon/outfits/date/expressions/scared/01/sprite":"characters/seyoun_date_scared","assets/characters/seoyeon/outfits/date/expressions/scheming/01/sprite":"characters/seyoun_date_scheming","assets/characters/seoyeon/outfits/date/expressions/scream/01/sprite":"characters/seyoun_date_scream","assets/characters/seoyeon/outfits/date/expressions/seductive/01/sprite":"characters/seyoun_date_seductive","assets/characters/seoyeon/outfits/date/expressions/shy/01/sprite":"characters/seyoun_date_shy","assets/characters/seoyeon/outfits/date/expressions/smile/01/sprite":"characters/seyoun_date_smile","assets/characters/seoyeon/outfits/date/expressions/smirk/01/sprite":"characters/seyoun_date_smirk","assets/characters/seoyeon/outfits/date/expressions/sob/01/sprite":"characters/seyoun_date_sob","assets/characters/seoyeon/outfits/date/expressions/soft_smile/01/sprite":"characters/seyoun_date_soft_smile","assets/characters/seoyeon/outfits/date/expressions/surprised/01/sprite":"characters/seyoun_date_surprised","assets/characters/seoyeon/outfits/date/expressions/suspicious/01/sprite":"characters/seyoun_date_suspicious","assets/characters/seoyeon/outfits/date/expressions/sweat/01/sprite":"characters/seyoun_date_sweat","assets/characters/seoyeon/outfits/date/expressions/tired/01/sprite":"characters/seyoun_date_tired","assets/characters/seoyeon/outfits/date/expressions/touched/01/sprite":"characters/seyoun_date_touched","assets/characters/seoyeon/outfits/date/expressions/undressed_shy/01/sprite":"characters/seyoun_date_undressed_shy","assets/characters/seoyeon/outfits/date/expressions/very_shy/01/sprite":"characters/seyoun_date_very_shy","assets/characters/seoyeon/outfits/date/expressions/worried/01/sprite":"characters/seyoun_date_worried","assets/characters/teacher/expressions/active/01/sprite":"characters/teacher_active","assets/characters/teacher/expressions/aegyo/01/sprite":"characters/teacher_aegyo","assets/characters/teacher/expressions/afterglow/01/sprite":"characters/teacher_afterglow","assets/characters/teacher/expressions/ahegao/01/sprite":"characters/teacher_ahegao","assets/characters/teacher/expressions/angry/01/sprite":"characters/teacher_angry","assets/characters/teacher/expressions/begging_lust/01/sprite":"characters/teacher_begging_lust","assets/characters/teacher/expressions/betrayed/01/sprite":"characters/teacher_betrayed","assets/characters/teacher/expressions/bikini/01/sprite":"characters/teacher_bikini","assets/characters/teacher/expressions/bored/01/sprite":"characters/teacher_bored","assets/characters/teacher/expressions/choking/01/sprite":"characters/teacher_choking","assets/characters/teacher/expressions/climax/01/sprite":"characters/teacher_climax","assets/characters/teacher/expressions/climax/02/sprite":"characters/teacher_climax_02","assets/characters/teacher/expressions/climax/03/sprite":"characters/teacher_climax_03","assets/characters/teacher/expressions/climax/04/sprite":"characters/teacher_climax_04","assets/characters/teacher/expressions/climax/05/sprite":"characters/teacher_climax_05","assets/characters/teacher/expressions/climax/06/sprite":"characters/teacher_climax_06","assets/characters/teacher/expressions/climax/07/sprite":"characters/teacher_climax_07","assets/characters/teacher/expressions/climax/08/sprite":"characters/teacher_climax_08","assets/characters/teacher/expressions/climax/09/sprite":"characters/teacher_climax_09","assets/characters/teacher/expressions/climax/10/sprite":"characters/teacher_climax_10","assets/characters/teacher/expressions/climax/11/sprite":"characters/teacher_climax_11","assets/characters/teacher/expressions/cold/01/sprite":"characters/teacher_cold","assets/characters/teacher/expressions/combat_ready/01/sprite":"characters/teacher_combat_ready","assets/characters/teacher/expressions/confused/01/sprite":"characters/teacher_confused","assets/characters/teacher/expressions/cry/01/sprite":"characters/teacher_cry","assets/characters/teacher/expressions/dazed/01/sprite":"characters/teacher_dazed","assets/characters/teacher/expressions/dead/01/sprite":"characters/teacher_dead","assets/characters/teacher/expressions/disgusted/01/sprite":"characters/teacher_disgusted","assets/characters/teacher/expressions/dominant_aroused/01/sprite":"characters/teacher_dominant_aroused","assets/characters/teacher/expressions/dry_smile/01/sprite":"characters/teacher_dry_smile","assets/characters/teacher/expressions/dumbfounded/01/sprite":"characters/teacher_dumbfounded","assets/characters/teacher/expressions/enduring/01/sprite":"characters/teacher_enduring","assets/characters/teacher/expressions/entranced/01/sprite":"characters/teacher_entranced","assets/characters/teacher/expressions/exhausted/01/sprite":"characters/teacher_exhausted","assets/characters/teacher/expressions/fainted/01/sprite":"characters/teacher_fainted","assets/characters/teacher/expressions/firm/01/sprite":"characters/teacher_firm","assets/characters/teacher/expressions/flushed/01/sprite":"characters/teacher_flushed","assets/characters/teacher/expressions/flushed/02/sprite":"characters/teacher_flushed_02","assets/characters/teacher/expressions/flushed/03/sprite":"characters/teacher_flushed_03","assets/characters/teacher/expressions/furious/01/sprite":"characters/teacher_furious","assets/characters/teacher/expressions/groggy/01/sprite":"characters/teacher_groggy","assets/characters/teacher/expressions/humiliated/01/sprite":"characters/teacher_humiliated","assets/characters/teacher/expressions/jealous/01/sprite":"characters/teacher_jealous","assets/characters/teacher/expressions/kiss/01/sprite":"characters/teacher_kiss","assets/characters/teacher/expressions/laugh/01/sprite":"characters/teacher_laugh","assets/characters/teacher/expressions/lovestruck/01/sprite":"characters/teacher_lovestruck","assets/characters/teacher/expressions/messy_afterglow/01/sprite":"characters/teacher_messy_afterglow","assets/characters/teacher/expressions/normal/01/sprite":"characters/teacher_normal","assets/characters/teacher/expressions/oral_service/01/sprite":"characters/teacher_oral_service","assets/characters/teacher/expressions/pain/01/sprite":"characters/teacher_pain","assets/characters/teacher/expressions/pleading/01/sprite":"characters/teacher_pleading","assets/characters/teacher/expressions/pout/01/sprite":"characters/teacher_pout","assets/characters/teacher/expressions/relieved/01/sprite":"characters/teacher_relieved","assets/characters/teacher/expressions/sad/01/sprite":"characters/teacher_sad","assets/characters/teacher/expressions/scared/01/sprite":"characters/teacher_scared","assets/characters/teacher/expressions/scheming/01/sprite":"characters/teacher_scheming","assets/characters/teacher/expressions/scream/01/sprite":"characters/teacher_scream","assets/characters/teacher/expressions/seductive/01/sprite":"characters/teacher_seductive","assets/characters/teacher/expressions/shy/01/sprite":"characters/teacher_shy","assets/characters/teacher/expressions/smile/01/sprite":"characters/teacher_smile","assets/characters/teacher/expressions/smile/02/sprite":"characters/teacher_smile_02","assets/characters/teacher/expressions/smirk/01/sprite":"characters/teacher_smirk","assets/characters/teacher/expressions/sob/01/sprite":"characters/teacher_sob","assets/characters/teacher/expressions/soft_smile/01/sprite":"characters/teacher_soft_smile","assets/characters/teacher/expressions/surprised/01/sprite":"characters/teacher_surprised","assets/characters/teacher/expressions/suspicious/01/sprite":"characters/teacher_suspicious","assets/characters/teacher/expressions/sweat/01/sprite":"characters/teacher_sweat","assets/characters/teacher/expressions/tired/01/sprite":"characters/teacher_tired","assets/characters/teacher/expressions/touched/01/sprite":"characters/teacher_touched","assets/characters/teacher/expressions/undressed_shy/01/sprite":"characters/teacher_undressed_shy","assets/characters/teacher/expressions/very_shy/01/sprite":"characters/teacher_very_shy","assets/characters/teacher/expressions/worried/01/sprite":"characters/teacher_worried","assets/characters/yuna/expressions/active/01/sprite":"characters/yuna_active","assets/characters/yuna/expressions/aegyo/01/sprite":"characters/yuna_aegyo","assets/characters/yuna/expressions/afterglow/01/sprite":"characters/yuna_afterglow","assets/characters/yuna/expressions/ahegao/01/sprite":"characters/yuna_ahegao","assets/characters/yuna/expressions/angry/01/sprite":"characters/yuna_angry","assets/characters/yuna/expressions/begging_lust/01/sprite":"characters/yuna_begging_lust","assets/characters/yuna/expressions/betrayed/01/sprite":"characters/yuna_betrayed","assets/characters/yuna/expressions/bikini/01/sprite":"characters/yuna_bikini","assets/characters/yuna/expressions/bored/01/sprite":"characters/yuna_bored","assets/characters/yuna/expressions/choking/01/sprite":"characters/yuna_choking","assets/characters/yuna/expressions/climax/01/sprite":"characters/yuna_climax","assets/characters/yuna/expressions/climax/02/sprite":"characters/yuna_climax_02","assets/characters/yuna/expressions/climax/03/sprite":"characters/yuna_climax_03","assets/characters/yuna/expressions/climax/04/sprite":"characters/yuna_climax_04","assets/characters/yuna/expressions/climax/05/sprite":"characters/yuna_climax_05","assets/characters/yuna/expressions/climax/06/sprite":"characters/yuna_climax_06","assets/characters/yuna/expressions/climax/07/sprite":"characters/yuna_climax_07","assets/characters/yuna/expressions/climax/08/sprite":"characters/yuna_climax_08","assets/characters/yuna/expressions/climax/09/sprite":"characters/yuna_climax_09","assets/characters/yuna/expressions/cold/01/sprite":"characters/yuna_cold","assets/characters/yuna/expressions/combat_ready/01/sprite":"characters/yuna_combat_ready","assets/characters/yuna/expressions/confused/01/sprite":"characters/yuna_confused","assets/characters/yuna/expressions/cry/01/sprite":"characters/yuna_cry","assets/characters/yuna/expressions/dazed/01/sprite":"characters/yuna_dazed","assets/characters/yuna/expressions/dead/01/sprite":"characters/yuna_dead","assets/characters/yuna/expressions/disgusted/01/sprite":"characters/yuna_disgusted","assets/characters/yuna/expressions/dominant_aroused/01/sprite":"characters/yuna_dominant_aroused","assets/characters/yuna/expressions/dry_smile/01/sprite":"characters/yuna_dry_smile","assets/characters/yuna/expressions/dumbfounded/01/sprite":"characters/yuna_dumbfounded","assets/characters/yuna/expressions/enduring/01/sprite":"characters/yuna_enduring","assets/characters/yuna/expressions/entranced/01/sprite":"characters/yuna_entranced","assets/characters/yuna/expressions/exhausted/01/sprite":"characters/yuna_exhausted","assets/characters/yuna/expressions/fainted/01/sprite":"characters/yuna_fainted","assets/characters/yuna/expressions/firm/01/sprite":"characters/yuna_firm","assets/characters/yuna/expressions/flushed/01/sprite":"characters/yuna_flushed","assets/characters/yuna/expressions/flushed/02/sprite":"characters/yuna_flushed_02","assets/characters/yuna/expressions/flushed/03/sprite":"characters/yuna_flushed_03","assets/characters/yuna/expressions/furious/01/sprite":"characters/yuna_furious","assets/characters/yuna/expressions/gallery_bikini_sexy_20260813/01/sprite":"characters/yuna_gallery_bikini_sexy_20260813","assets/characters/yuna/expressions/groggy/01/sprite":"characters/yuna_groggy","assets/characters/yuna/expressions/humiliated/01/sprite":"characters/yuna_humiliated","assets/characters/yuna/expressions/jealous/01/sprite":"characters/yuna_jealous","assets/characters/yuna/expressions/kiss/01/sprite":"characters/yuna_kiss","assets/characters/yuna/expressions/laugh/01/sprite":"characters/yuna_laugh","assets/characters/yuna/expressions/lovestruck/01/sprite":"characters/yuna_lovestruck","assets/characters/yuna/expressions/messy_afterglow/01/sprite":"characters/yuna_messy_afterglow","assets/characters/yuna/expressions/normal/01/sprite":"characters/yuna_normal","assets/characters/yuna/expressions/oral_service/01/sprite":"characters/yuna_oral_service","assets/characters/yuna/expressions/pain/01/sprite":"characters/yuna_pain","assets/characters/yuna/expressions/pleading/01/sprite":"characters/yuna_pleading","assets/characters/yuna/expressions/pout/01/sprite":"characters/yuna_pout","assets/characters/yuna/expressions/relieved/01/sprite":"characters/yuna_relieved","assets/characters/yuna/expressions/sad/01/sprite":"characters/yuna_sad","assets/characters/yuna/expressions/scared/01/sprite":"characters/yuna_scared","assets/characters/yuna/expressions/scheming/01/sprite":"characters/yuna_scheming","assets/characters/yuna/expressions/scream/01/sprite":"characters/yuna_scream","assets/characters/yuna/expressions/seductive/01/sprite":"characters/yuna_seductive","assets/characters/yuna/expressions/shy/01/sprite":"characters/yuna_shy","assets/characters/yuna/expressions/smile/01/sprite":"characters/yuna_smile","assets/characters/yuna/expressions/smirk/01/sprite":"characters/yuna_smirk","assets/characters/yuna/expressions/sob/01/sprite":"characters/yuna_sob","assets/characters/yuna/expressions/soft_smile/01/sprite":"characters/yuna_soft_smile","assets/characters/yuna/expressions/surprised/01/sprite":"characters/yuna_surprised","assets/characters/yuna/expressions/suspicious/01/sprite":"characters/yuna_suspicious","assets/characters/yuna/expressions/sweat/01/sprite":"characters/yuna_sweat","assets/characters/yuna/expressions/tired/01/sprite":"characters/yuna_tired","assets/characters/yuna/expressions/touched/01/sprite":"characters/yuna_touched","assets/characters/yuna/expressions/undressed_shy/01/sprite":"characters/yuna_undressed_shy","assets/characters/yuna/expressions/very_shy/01/sprite":"characters/yuna_very_shy","assets/characters/yuna/expressions/worried/01/sprite":"characters/yuna_worried","assets/characters/yuna/outfits/date/expressions/active/01/sprite":"characters/yuna_date_active","assets/characters/yuna/outfits/date/expressions/aegyo/01/sprite":"characters/yuna_date_aegyo","assets/characters/yuna/outfits/date/expressions/afterglow/01/sprite":"characters/yuna_date_afterglow","assets/characters/yuna/outfits/date/expressions/ahegao/01/sprite":"characters/yuna_date_ahegao","assets/characters/yuna/outfits/date/expressions/angry/01/sprite":"characters/yuna_date_angry","assets/characters/yuna/outfits/date/expressions/begging_lust/01/sprite":"characters/yuna_date_begging_lust","assets/characters/yuna/outfits/date/expressions/betrayed/01/sprite":"characters/yuna_date_betrayed","assets/characters/yuna/outfits/date/expressions/bored/01/sprite":"characters/yuna_date_bored","assets/characters/yuna/outfits/date/expressions/choking/01/sprite":"characters/yuna_date_choking","assets/characters/yuna/outfits/date/expressions/climax/01/sprite":"characters/yuna_date_climax","assets/characters/yuna/outfits/date/expressions/cold/01/sprite":"characters/yuna_date_cold","assets/characters/yuna/outfits/date/expressions/combat_ready/01/sprite":"characters/yuna_date_combat_ready","assets/characters/yuna/outfits/date/expressions/confused/01/sprite":"characters/yuna_date_confused","assets/characters/yuna/outfits/date/expressions/cry/01/sprite":"characters/yuna_date_cry","assets/characters/yuna/outfits/date/expressions/dazed/01/sprite":"characters/yuna_date_dazed","assets/characters/yuna/outfits/date/expressions/dead/01/sprite":"characters/yuna_date_dead","assets/characters/yuna/outfits/date/expressions/disgusted/01/sprite":"characters/yuna_date_disgusted","assets/characters/yuna/outfits/date/expressions/dominant_aroused/01/sprite":"characters/yuna_date_dominant_aroused","assets/characters/yuna/outfits/date/expressions/dry_smile/01/sprite":"characters/yuna_date_dry_smile","assets/characters/yuna/outfits/date/expressions/dumbfounded/01/sprite":"characters/yuna_date_dumbfounded","assets/characters/yuna/outfits/date/expressions/enduring/01/sprite":"characters/yuna_date_enduring","assets/characters/yuna/outfits/date/expressions/entranced/01/sprite":"characters/yuna_date_entranced","assets/characters/yuna/outfits/date/expressions/exhausted/01/sprite":"characters/yuna_date_exhausted","assets/characters/yuna/outfits/date/expressions/fainted/01/sprite":"characters/yuna_date_fainted","assets/characters/yuna/outfits/date/expressions/firm/01/sprite":"characters/yuna_date_firm","assets/characters/yuna/outfits/date/expressions/flushed/01/sprite":"characters/yuna_date_flushed","assets/characters/yuna/outfits/date/expressions/furious/01/sprite":"characters/yuna_date_furious","assets/characters/yuna/outfits/date/expressions/groggy/01/sprite":"characters/yuna_date_groggy","assets/characters/yuna/outfits/date/expressions/humiliated/01/sprite":"characters/yuna_date_humiliated","assets/characters/yuna/outfits/date/expressions/jealous/01/sprite":"characters/yuna_date_jealous","assets/characters/yuna/outfits/date/expressions/kiss/01/sprite":"characters/yuna_date_kiss","assets/characters/yuna/outfits/date/expressions/laugh/01/sprite":"characters/yuna_date_laugh","assets/characters/yuna/outfits/date/expressions/lovestruck/01/sprite":"characters/yuna_date_lovestruck","assets/characters/yuna/outfits/date/expressions/messy_afterglow/01/sprite":"characters/yuna_date_messy_afterglow","assets/characters/yuna/outfits/date/expressions/normal/01/sprite":"characters/yuna_date_normal","assets/characters/yuna/outfits/date/expressions/oral_service/01/sprite":"characters/yuna_date_oral_service","assets/characters/yuna/outfits/date/expressions/pain/01/sprite":"characters/yuna_date_pain","assets/characters/yuna/outfits/date/expressions/pleading/01/sprite":"characters/yuna_date_pleading","assets/characters/yuna/outfits/date/expressions/pout/01/sprite":"characters/yuna_date_pout","assets/characters/yuna/outfits/date/expressions/relieved/01/sprite":"characters/yuna_date_relieved","assets/characters/yuna/outfits/date/expressions/sad/01/sprite":"characters/yuna_date_sad","assets/characters/yuna/outfits/date/expressions/scared/01/sprite":"characters/yuna_date_scared","assets/characters/yuna/outfits/date/expressions/scheming/01/sprite":"characters/yuna_date_scheming","assets/characters/yuna/outfits/date/expressions/scream/01/sprite":"characters/yuna_date_scream","assets/characters/yuna/outfits/date/expressions/seductive/01/sprite":"characters/yuna_date_seductive","assets/characters/yuna/outfits/date/expressions/shy/01/sprite":"characters/yuna_date_shy","assets/characters/yuna/outfits/date/expressions/smile/01/sprite":"characters/yuna_date_smile","assets/characters/yuna/outfits/date/expressions/smirk/01/sprite":"characters/yuna_date_smirk","assets/characters/yuna/outfits/date/expressions/sob/01/sprite":"characters/yuna_date_sob","assets/characters/yuna/outfits/date/expressions/soft_smile/01/sprite":"characters/yuna_date_soft_smile","assets/characters/yuna/outfits/date/expressions/surprised/01/sprite":"characters/yuna_date_surprised","assets/characters/yuna/outfits/date/expressions/suspicious/01/sprite":"characters/yuna_date_suspicious","assets/characters/yuna/outfits/date/expressions/sweat/01/sprite":"characters/yuna_date_sweat","assets/characters/yuna/outfits/date/expressions/tired/01/sprite":"characters/yuna_date_tired","assets/characters/yuna/outfits/date/expressions/touched/01/sprite":"characters/yuna_date_touched","assets/characters/yuna/outfits/date/expressions/undressed_shy/01/sprite":"characters/yuna_date_undressed_shy","assets/characters/yuna/outfits/date/expressions/very_shy/01/sprite":"characters/yuna_date_very_shy","assets/characters/yuna/outfits/date/expressions/worried/01/sprite":"characters/yuna_date_worried"};
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
    const request = (async () => { var __oc2, __oc3, __oc4, __oc5, __oc6, __oc7;
        try {
            if (image.__expressionLoadedSource === source && image.__expressionLoadedURL === image.src) {
                (((__oc2 = options.onCommit) === null || __oc2 === void 0 ? void 0 : __oc2.call(options, image.src)));
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
                        if (!/\.webp(?=[?&#]|$)/i.test(source)) throw error;
                        pending.src = source.replace(/\.webp(?=[?&#]|$)/i, '.png');
                        await pending.decode();
                    }
                }
                next = pending.src;
            }
            if (!current()) return false;
            await image.__expressionSwap;
            if (!current()) return false;
            if (image.src === next || (((__oc3 = image.getAttribute) === null || __oc3 === void 0 ? void 0 : __oc3.call(image, 'src'))) === next) {
                image.__expressionLoadedSource = source; image.__expressionLoadedURL = image.src;
                (((__oc4 = options.onCommit) === null || __oc4 === void 0 ? void 0 : __oc4.call(options, next))); return true;
            }
            if ((((__oc5 = image.getAttribute) === null || __oc5 === void 0 ? void 0 : __oc5.call(image, 'src'))) && image.complete === false
                && (image.loading !== 'lazy' || (((__oc6 = image.getClientRects) === null || __oc6 === void 0 ? void 0 : __oc6.call(image).length)))) {
                try { await (((__oc7 = image.decode) === null || __oc7 === void 0 ? void 0 : __oc7.call(image))); } catch (_) {}
                if (!current()) return false;
            }
            const swap = (async () => { var __oc8, __oc9, __oc10, __oc11, __oc12, __oc13, __oc14, __oc15, __oc16;
                let animate = options.animate !== false && image.naturalWidth > 0 && image.parentElement
                    && typeof image.animate === 'function' && typeof image.cloneNode === 'function'
                    && (((__oc8 = image.ownerDocument) === null || __oc8 === void 0 ? void 0 : __oc8.createElement)) && (((__oc10 = (__oc9 = window.CSS) === null || __oc9 === void 0 ? void 0 : __oc9.supports) === null || __oc10 === void 0 ? void 0 : __oc10.call(__oc9, 'mix-blend-mode', 'plus-lighter')))
                    && !(((__oc12 = (__oc11 = window.matchMedia) === null || __oc11 === void 0 ? void 0 : __oc11.call(window, '(prefers-reduced-motion: reduce)')) === null || __oc12 === void 0 ? void 0 : __oc12.matches));
                let outgoing, incoming, layer, ghost, arrival, restoreVisibility;
                try {
                    if (animate) {
                        try {
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
                            await Promise.all([(((__oc13 = ghost.decode) === null || __oc13 === void 0 ? void 0 : __oc13.call(ghost))), (((__oc14 = arrival.decode) === null || __oc14 === void 0 ? void 0 : __oc14.call(arrival)))]);
                            if (!current()) return false;
                            layer.appendChild(arrival); layer.appendChild(ghost);
                            image.parentElement.appendChild(layer);
                        } catch (_) {
                            ((layer === null || layer === void 0 ? void 0 : layer.remove()));
                            layer = null;
                            animate = false;
                            if (!current()) return false;
                        }
                    }
                    image.src = next;
                    image.__expressionLoadedSource = source; image.__expressionLoadedURL = image.src;
                    image.style.display = '';
                    if (options.onCommit) options.onCommit(next);
                    if (animate) {
                        restoreVisibility = image.style.visibility;
                        image.style.visibility = 'hidden';
                        try { await (((__oc15 = image.decode) === null || __oc15 === void 0 ? void 0 : __oc15.call(image))); } catch (_) {}
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
                        try { await (((__oc16 = image.decode) === null || __oc16 === void 0 ? void 0 : __oc16.call(image))); } catch (_) {}
                    }
                    return true;
                } finally {
                    if (restoreVisibility !== undefined) image.style.visibility = restoreVisibility;
                    ((layer === null || layer === void 0 ? void 0 : layer.remove())); ((outgoing === null || outgoing === void 0 ? void 0 : outgoing.cancel())); ((incoming === null || incoming === void 0 ? void 0 : incoming.cancel()));
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

  function loadImageWithMediaFallback(img, rawPath, onload, onerror, options) { var __oc17;
    if (!img) return;
    if (((options === null || options === void 0 ? void 0 : options.preservePrevious)) && img.__expressionTarget === rawPath) return img.__expressionRequest;
    var generation = (img.__cupidLoadGeneration || 0) + 1;
    img.__cupidLoadGeneration = generation;
    // Both chat avatars and standing portraits retain their decoded previous frame.
    if (((options === null || options === void 0 ? void 0 : options.preservePrevious)) && (((__oc17 = img.getAttribute) === null || __oc17 === void 0 ? void 0 : __oc17.call(img, 'src'))) && global.Image) {
      return fadeExpressionImage(img, rawPath, {
        isCurrent: function () { return img.__cupidLoadGeneration === generation; },
        load: function () { return new Promise(function (resolve, reject) {
          var pending = new global.Image();
          loadImageWithMediaFallback(pending, rawPath, function () { var __oc18;
            Promise.resolve((((__oc18 = pending.decode) === null || __oc18 === void 0 ? void 0 : __oc18.call(pending)))).then(function () { resolve(pending.src); }, reject);
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

  function preloadUnlocked(assets) { var __oc19, __oc20;
    if (!global.Image || (((__oc20 = (__oc19 = global.navigator) === null || __oc19 === void 0 ? void 0 : __oc19.connection) === null || __oc20 === void 0 ? void 0 : __oc20.saveData))) return;
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
