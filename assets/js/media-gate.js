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
  var MEDIA_VERSIONS = {"background/dain_depression_event1":"7ee4549e9c01d86d8ceddab7","background/dain_hurt_event1":"03c309e91448e74d0f6524af","background/ending_alone":"be11653d9adf4a7b306b9f91","background/ending_bittersweet":"51eab37dfe08db46f30d72a8","background/ending_bittersweet_nurse":"3d0e4a5f18806c68e6be9014","background/ending_bittersweet_teacher":"39233a3911500d9e632dc38b","background/ending_confess_fail_dain":"787b7ab28af2ca24cc4a6fad","background/ending_confess_fail_seoyeon":"73831ccd142f8a97d9e6183a","background/ending_confess_fail_yuna":"e32c7f7a67d89e96a8edef1d","background/ending_friend":"3d8c2f3494301d31d369e80a","background/ending_good_dain":"209cb4651368bfa637e273d5","background/ending_good_nurse":"753c7a2e322c44c535de071b","background/ending_good_seoyeon":"9619f8ad7d14301d96d44b24","background/ending_good_teacher":"2e6dd0c2716bf020f13cb957","background/ending_good_yuna":"09c67542dd7e066422d1843e","background/ending_harem":"00fc46d686b1dc0881557efe","background/ending_mayhem":"eebc0728b58bcec16e108f4f","background/ending_perfect_dain":"750033d2213d9d0240fdf07a","background/ending_perfect_haeun":"9903cd5bf1aa4e4465484b0e","background/ending_perfect_nurse":"2efe79fb6a3ccaa6bfc42ec5","background/ending_perfect_seoyeon":"513a2715bac51c0b403407ed","background/ending_perfect_teacher":"fe8877f9d320958a916ec193","background/ending_perfect_yuna":"d474988bda580a4fa93e9bdb","background/ending_true_dain":"208f6d687989178581114801","background/ending_true_nurse":"4727b2407b6623fd802285f8","background/ending_true_seoyeon":"edda8686b4b472e5099da930","background/ending_true_teacher":"14adfae607797f5fccdf601c","background/ending_true_yuna":"81604f5804f639ca8f67601c","background/event_haeun_reputation":"8b2edb7e9c3b3b7c804362ba","background/event_haeun_trust":"080f10ba1c95792d44d0de72","background/event_seoyeon_succulent":"839c54f07fdfee9f1a6c6cf0","background/event_temptation_dain":"ea1f573b313ef7004b352a28","background/event_temptation_seoyeon":"139380703754eeefce44522d","background/event_temptation_yuna":"a3c33707fefd16c91df8d4cf","background/event_yuna_reading":"f9fe8aae463477345c4cd825","background/nurse_home_event1":"8fb762c5beb1d01ee83bc97b","characters/dain_active":"8cc4063dbb34cb5ba4921f83","characters/dain_aegyo":"a4fa049c0faaf2dd2138049e","characters/dain_afterglow":"23b6859b9de4230900f95f97","characters/dain_ahegao":"4c8d4df873461c896b2f1808","characters/dain_angry":"daa7361aaa9f8871bd3fa736","characters/dain_begging_lust":"beba32c7dab6d23d81d2b13b","characters/dain_betrayed":"8557d391f30752a0370d9bb8","characters/dain_bikini":"675d1a52cea84edc24dddd5f","characters/dain_bored":"e32a0185d7d5471bf0f20aab","characters/dain_choking":"fab6e67ae765b530130b3897","characters/dain_climax":"01e37d2b174f4966d900e495","characters/dain_climax_02":"c8f5baa0c6d43c7ef3d6e099","characters/dain_climax_03":"19f6ba1106b5cb7de16f3f16","characters/dain_climax_04":"f2b89fb8f33a85065b8772b0","characters/dain_climax_05":"c937e47b644511d2bff8e449","characters/dain_climax_06":"351a209679d6ab28a9a8e92e","characters/dain_climax_07":"f164095142fe004db4482ad4","characters/dain_climax_08":"4929a6f6dcc035718a4be06f","characters/dain_climax_09":"7112d9c96044c86a35854f15","characters/dain_climax_10":"0988ab637fa9218a5176a18e","characters/dain_climax_11":"691d0f68d72b26ef20fd3c9a","characters/dain_cold":"dc2a2105a144bd60e8b48e8a","characters/dain_combat_ready":"b08255a4c65329766c1e8b39","characters/dain_confused":"8dc055e0d0a3402ec652e0cb","characters/dain_cry":"f399c09801cca14798ae49f2","characters/dain_date_angry":"f311166e736e25579b24a4fa","characters/dain_date_laugh":"db52542591d9da4561dd1df0","characters/dain_date_normal":"262abf8666a117a4e6e5b978","characters/dain_date_sad":"ac3bf32b41ab3c53e368ab46","characters/dain_date_shy":"1b86a68b42e7d46de4a89994","characters/dain_date_sweat":"8c6258e782fb40f67b7cb67d","characters/dain_dazed":"e20ea22d6b8a4052083bc2aa","characters/dain_dead":"9095816b2c063ee942197581","characters/dain_disgusted":"4cc7a840f84edf8a00351e9c","characters/dain_dominant_aroused":"9c016d143c4dc087036610f0","characters/dain_dry_smile":"20f8b991261476d5b0fb1d57","characters/dain_dumbfounded":"f9a95dbbce6d37b5d0d2a3df","characters/dain_enduring":"d5745a89cc3f6a2ce8b3160a","characters/dain_entranced":"aa895214c02521264c47d1a1","characters/dain_exhausted":"b5ef7ce2b8129f404e165602","characters/dain_fainted":"bc8f28e3ef5ccc305391dcc6","characters/dain_firm":"4efb5a35103d69b35fe768ab","characters/dain_flushed":"ab251873d8c6b77632b2c4ec","characters/dain_flushed_02":"a655dc927160b14af0af938d","characters/dain_flushed_03":"d729b2afee87c6c5e33b6e7d","characters/dain_furious":"4f9638bfe829372baa86568f","characters/dain_groggy":"c3816b86c95eabf4ae00a28c","characters/dain_humiliated":"9a5037e46e697cd46a473b2e","characters/dain_jealous":"5ee64d9c135fe70ddd05799f","characters/dain_kiss":"0f9c845d6fb503710d7daec9","characters/dain_laugh":"15ed133d1ced73915f443945","characters/dain_lovestruck":"c765a90c81441ab2d119336a","characters/dain_messy_afterglow":"025259ff7a805efea01f2ff5","characters/dain_normal":"26770cafbae74d14f4b3cbaa","characters/dain_oral_service":"a8336407922c9521e040c4ce","characters/dain_pain":"d305bf3645a0755b35db257c","characters/dain_pleading":"4075ec8a55dc18ba6c2c9c8f","characters/dain_pout":"48dfe366f11402ada543076e","characters/dain_relieved":"942139f75ceb4693a6d2f326","characters/dain_sad":"8a23d1e90c2da68f2e6055e5","characters/dain_scared":"6ee52ff2760b9a8026a3d424","characters/dain_scheming":"e1d187efd5df5b96551814de","characters/dain_scream":"07dba6c01ae077bad0a5c05a","characters/dain_seductive":"f890f784785cb53a0cc216c9","characters/dain_shy":"411755283e8ea6259e6b9f88","characters/dain_smile":"70505c1d3da489663bfa6c85","characters/dain_smirk":"4b47a12fe2e8abb76435ca6e","characters/dain_sob":"850b366486521fadf84b7f4e","characters/dain_soft_smile":"b795f954777eac6a47a9bd2b","characters/dain_surprised":"71e44dab802308caf79c5744","characters/dain_suspicious":"bc612817e9dea9e3b7cf506a","characters/dain_sweat":"fb4fa5502725c389e9f5a278","characters/dain_tired":"2df8a4305f4bffe47f17dd8a","characters/dain_touched":"41a64c66c6d65204e2b13385","characters/dain_undressed_shy":"b44cacfe95c874dc4859e92d","characters/dain_undressed_shy_02":"e64eac17c1daa5436f16eaed","characters/dain_undressed_shy_03":"a59c82ead84d21a17815aa55","characters/dain_undressed_shy_04":"829efc946ff010271ccaec2c","characters/dain_very_shy":"37912cc3585259bb35ce7f29","characters/dain_worried":"dae527e49222440400a80c4d","characters/haeun_active":"408f64c51245907866a9e7f0","characters/haeun_aegyo":"6bb44e53882c54a2ace96d6b","characters/haeun_afterglow":"17c1d177c9ef4db8f02032e9","characters/haeun_ahegao":"eae27e6a85a2d53ab1b2aa0c","characters/haeun_angry":"310a04baed01b8acbebfe417","characters/haeun_begging_lust":"3a61d9bdd71d5df55447fbb8","characters/haeun_betrayed":"f4d9bac3052c6b19195764e4","characters/haeun_bored":"e626fca4f20fc5b0f0fd7e3e","characters/haeun_choking":"d86a09b449e15929a12aba50","characters/haeun_climax":"bc7b24dfe2efbb47a150e3bb","characters/haeun_climax_02":"2f0da9eadaa96a4270ae07a8","characters/haeun_climax_03":"f6d75fde797547365212e78f","characters/haeun_climax_04":"a060b844704fb4c27cc34dff","characters/haeun_climax_05":"d51a5c8faf66da8fa44c6d26","characters/haeun_climax_06":"43761cd649655171adbc4b93","characters/haeun_climax_07":"283ca398a4c470a926806ff9","characters/haeun_climax_08":"f478b2631e32fb8e96cb1fc5","characters/haeun_cold":"bbb9f3a5644b144cacfff80c","characters/haeun_combat_ready":"e13cf1cf9f4bdfd3fcad70f9","characters/haeun_confused":"47dc88bd692ba219c31dc8e5","characters/haeun_cry":"7961a78b9896836fa251323e","characters/haeun_dazed":"9ddc7c53f97277eb0fcd5643","characters/haeun_dead":"257403e36e973e696c28d8cd","characters/haeun_disgusted":"c36b6d360e94362f3e24af26","characters/haeun_dominant_aroused":"f1d2d1b0c43d7e7af5780be3","characters/haeun_dry_smile":"0710f6c3a42aa019e3afabf5","characters/haeun_dumbfounded":"7548a4594376ef68e457ae55","characters/haeun_enduring":"ed26f7da08ac18718c7aada8","characters/haeun_entranced":"368be1fd4cae419051123e62","characters/haeun_exhausted":"e6fd736ef9b547f646da93b9","characters/haeun_fainted":"121601dcc8682db9c108d581","characters/haeun_firm":"ab5a404402eda192e344d058","characters/haeun_flushed":"c2d74d4f391cb162d5750930","characters/haeun_flushed_02":"acbbb2ce07a2f8e55092ec7a","characters/haeun_flushed_03":"91c015856d49ede0c0a3de37","characters/haeun_furious":"0f99431ebf0d3c1be844e534","characters/haeun_groggy":"be9b705f8380369fddaaa7ec","characters/haeun_humiliated":"287e197981c7e4133203034f","characters/haeun_jealous":"aee5e301c0c2d77dee6790b8","characters/haeun_kiss":"898d952214f238599c22129d","characters/haeun_laugh":"bd5969770b5571776f9c63a0","characters/haeun_lovestruck":"63c3ca96dbfbb941888965f6","characters/haeun_messy_afterglow":"9ea3edf3486d6df17bdbd2ce","characters/haeun_normal":"8952ba944202d6f08042d20c","characters/haeun_oral_service":"486c4b7a011152ff3a776a8d","characters/haeun_pain":"1d71b0abbd1336ea0c8d7a5d","characters/haeun_pleading":"c14e4338de01e01a7ac2fecf","characters/haeun_pout":"f2bad53e018ad0d2ffbf854d","characters/haeun_relieved":"06f67306af84dd8a60cca454","characters/haeun_sad":"b35a3d2d079c5aa9c219bfaa","characters/haeun_scared":"a44d16abda44805d6aefdbc8","characters/haeun_scheming":"a9d41eabcab55f2fced93495","characters/haeun_scream":"d49965ee7be7f77a987a79cd","characters/haeun_seductive":"4451b8ac1a9f358fab837b26","characters/haeun_shy":"099e649a7091a4e3bdecb83b","characters/haeun_smile":"68443887ba21ab74cd079bbf","characters/haeun_smirk":"32d5d803f633ace014f64810","characters/haeun_sob":"3419ce7f9d2b1342b29591e1","characters/haeun_soft_smile":"c91a0ed9342590a27c9cb235","characters/haeun_surprised":"1bdfa425af7d768cb4de913c","characters/haeun_suspicious":"1c797e24f79d1b575d8723b1","characters/haeun_sweat":"d807b50872515c623575dd1d","characters/haeun_tired":"2b1c5dd440922f5df036553d","characters/haeun_touched":"d4604e3a4e965230bbed1470","characters/haeun_undressed_shy":"aebcdb4b90a058c6d876ba53","characters/haeun_very_shy":"bb7edb0a17e01e5c13cd8a4c","characters/haeun_worried":"b44cc2a571dc4ee59918c003","characters/junho_awkward":"2e9fb0b44fa1f0750f560248","characters/junho_normal":"b088dd3040ad227a625d60c3","characters/minsu_active":"41b18e87bb013cc5899fdf49","characters/minsu_aegyo":"08c27d8a9e369aea8766d1b3","characters/minsu_afterglow":"9fb34604a32b127569e645b8","characters/minsu_angry":"8af4c4cea7a676395235b816","characters/minsu_begging_lust":"826b95e428b85503db1b44a1","characters/minsu_betrayed":"cf474dab73bbae923942cc21","characters/minsu_bored":"a007ea0ddae069598bad15cd","characters/minsu_choking":"9f6d0e9aec26557ce6c72163","characters/minsu_climax":"fb9f75eaf93c30ff270a97cd","characters/minsu_climax_02":"bdbfa61a428eefd55214fae0","characters/minsu_climax_03":"96ccdab43fc20a1e8a5c3f55","characters/minsu_climax_04":"fbbbc642ad5216dd668e34bc","characters/minsu_climax_05":"c09ba1c342ddce709dfb33ef","characters/minsu_climax_06":"fd9081ff7dcfd1b3ea25bc72","characters/minsu_cold":"0cc25f4c49a0ff0bb8ddd520","characters/minsu_combat_ready":"b1408737caa6790e5b3ce60c","characters/minsu_confused":"a8a4f66ad7ab07a86c7b13cd","characters/minsu_cry":"2b45abda783726013b48a4ed","characters/minsu_dazed":"301613dd25cccf197c83aa0f","characters/minsu_dead":"e17135aee16798fc7e62d49d","characters/minsu_disgusted":"92366fbd31d250e4dd0f71ec","characters/minsu_dominant_aroused":"27148d2af1bd02f03f550c68","characters/minsu_dry_smile":"417cf7484afa4e57f800d180","characters/minsu_dumbfounded":"ddb0efb86394a087d9b466bd","characters/minsu_enduring":"0d4d792575135f9a260932e6","characters/minsu_entranced":"bcc6b8d1743bf22333a7e6a6","characters/minsu_exhausted":"8e0d4041b182e33547b07f3f","characters/minsu_fainted":"a8d5f1215c6f2cac7729f9c7","characters/minsu_firm":"3a2ed7c223e26af086d5cef7","characters/minsu_flushed":"71a7a5007a4f6b078dc0bf24","characters/minsu_flushed_02":"ce6fcabf4abef972c0f8ea3a","characters/minsu_flushed_03":"58b463df2389f7cbe732c3eb","characters/minsu_furious":"df52a245a692744773529022","characters/minsu_groggy":"13f313bb1d939d254046fb43","characters/minsu_humiliated":"7f95b91fe509b888e73e9f36","characters/minsu_jealous":"63b915cd2d87e168cc696578","characters/minsu_kiss":"7f4d269ceb73e83f1c02ee31","characters/minsu_laugh":"40bbcf6337b33906457adab6","characters/minsu_lovestruck":"129e359d2ec0fd749e2ddca5","characters/minsu_messy_afterglow":"fe064c9301c5358f0f3ceb63","characters/minsu_normal":"1649bbc6431a21cd53fa2f51","characters/minsu_oral_service":"2375d800d2c9118aa64dcb50","characters/minsu_pain":"6e15d5da10fc7f133ddbd754","characters/minsu_pleading":"78701bb3f037788f88b9da1f","characters/minsu_pout":"4276ee11c0bdd278e5f3d951","characters/minsu_relieved":"1b2ef83de1f69c4412c47e1f","characters/minsu_sad":"2fae1d104435dc84b9f9a3c3","characters/minsu_scared":"4af382f5860bd5684066595e","characters/minsu_scheming":"e20500e067df9f9f20f691f4","characters/minsu_scream":"b870932fe5b3261b89e5dd7a","characters/minsu_seductive":"d518043dfd96f942252f4d66","characters/minsu_shy":"ace9b0e1ef29f66d8ae872f2","characters/minsu_smile":"59565a19704ffa77af3cdc62","characters/minsu_smirk":"e76b6fa39c720322172d0a53","characters/minsu_sob":"7e20e855a9937bf121183f5c","characters/minsu_soft_smile":"088986952f9bc2dcc35a176e","characters/minsu_surprised":"d326e7fdfff46b38b03926c4","characters/minsu_suspicious":"aa8e535b9bd1db8a8e00af49","characters/minsu_sweat":"22913032a36a27e8298c2fd1","characters/minsu_tired":"938ea282b99043c65d6875ed","characters/minsu_touched":"9a68ae23b5e9e269ca742983","characters/minsu_undressed_shy":"4e022a3e1c4eaa3a2df0de2e","characters/minsu_very_shy":"693cabcea8d69f5c04138323","characters/minsu_worried":"1ca7158b10e1ef3f384928a5","characters/nurse_active":"bd72deebdda655c22fa7b5dc","characters/nurse_aegyo":"2994b987cac76703878aa821","characters/nurse_afterglow":"1e23cd1c602baf757bb31b0b","characters/nurse_ahegao":"58aed464d63365a0960d8dab","characters/nurse_angry":"b5158b2f4773addc4b32bf48","characters/nurse_begging_lust":"52b9fd41dddd0a6af5fcb942","characters/nurse_betrayed":"af0c080e2d4740d6d6ce6b9b","characters/nurse_bikini":"2d02c75d38dad14d33e150df","characters/nurse_bored":"a18fbcc94e0b2d3c325aec73","characters/nurse_choking":"0eda6b6a9019ff722d15c017","characters/nurse_climax":"2b36d57f01a3e171f2f5a73a","characters/nurse_climax_02":"269d3bdf38269483c12d8b55","characters/nurse_climax_03":"38dada96715377ad089b0fed","characters/nurse_climax_04":"b6e608594efd35f37fbc3974","characters/nurse_climax_05":"df507cdb8067ab872126fd9a","characters/nurse_climax_06":"ab34d36774e9c4e5de1cdf82","characters/nurse_climax_07":"460ede1af92b1cbf7eb22a51","characters/nurse_climax_08":"4329ba0878e1079ecbd6e918","characters/nurse_climax_09":"64b0299399aa20a6dec7e4bf","characters/nurse_cold":"4de7df531b799c15dcbde563","characters/nurse_combat_ready":"22f0276ee7272537f41c7145","characters/nurse_confused":"9ee27cffa4df54684e1cc1b0","characters/nurse_cry":"3c6d92bd9e7c2b470639e7f0","characters/nurse_dazed":"1da4b25cfeafeaec8b94016c","characters/nurse_dead":"3c2ca7fd8d517a3ce9304235","characters/nurse_disgusted":"50430879a58877d555bf304c","characters/nurse_dominant_aroused":"bdb290731f6031a9ba6b4867","characters/nurse_dry_smile":"2f9edff7e0693c22cc16a586","characters/nurse_dumbfounded":"2f5c8095c0dca37c30e4da7f","characters/nurse_enduring":"efa33398a94a5ab9740c587d","characters/nurse_entranced":"4c816225d52bea2ab50300fe","characters/nurse_exhausted":"8b6b6c12471d9f1f24eb8946","characters/nurse_fainted":"ecfb6e3545910ae98347d1d6","characters/nurse_firm":"96ebb196f5ac4b33f1ed3768","characters/nurse_flushed":"27b642a1f99810b9402aa18f","characters/nurse_flushed_02":"0ecd885afadc9e54ad0f9f21","characters/nurse_flushed_03":"3d5e36691c5a12b407f80009","characters/nurse_furious":"ae3901ee582476103b3d899e","characters/nurse_groggy":"987c4e36aaab6374c5f80b5e","characters/nurse_home_angry":"30d4e31600c3647de6b4fc4b","characters/nurse_home_normal":"54d9bda091fd84ef7fc4b7bd","characters/nurse_home_sad":"d07810f51d5529312c95eed2","characters/nurse_home_shy":"adc2a6418c0c182ed63ad2ad","characters/nurse_home_smile":"91ae2a97aa4977c982978382","characters/nurse_humiliated":"f8880834d5e85d1922b0c115","characters/nurse_jealous":"3a755571ecc820743a8a67df","characters/nurse_kiss":"998cce5303585e42ec22799f","characters/nurse_laugh":"268fd3e6ebf258ad08d46cc8","characters/nurse_lovestruck":"c47855289bac75ba9b5592a0","characters/nurse_messy_afterglow":"fcd2a689164470ea3ab63d1e","characters/nurse_normal":"98d2a3b46d4fecd1d80fc9a8","characters/nurse_oral_service":"ba60f07e09740e2cad6ec9d1","characters/nurse_pain":"978b3d45247e8690e0fae34d","characters/nurse_pleading":"45ee05992754369b9693b4c0","characters/nurse_pout":"549c2f0bb7f258232cdf015a","characters/nurse_relieved":"8d897c8d3a96331cd5a29eca","characters/nurse_sad":"32daca055fe950ef74bd29d2","characters/nurse_scared":"fa85dcf1d22762f901976d56","characters/nurse_scheming":"8d431cb515455ac8e00fe540","characters/nurse_scream":"0dbaf8ae7d4bf56de954dfdf","characters/nurse_seductive":"36219cc829b396ba130e9384","characters/nurse_shy":"aee63b626665764427c537e2","characters/nurse_smile":"977401ec2ef26f60d7089c40","characters/nurse_smirk":"29925acf153a67a08e7a4e04","characters/nurse_sob":"aa6a570f5a0705333346335b","characters/nurse_soft_smile":"821e9b3974412e959303a2da","characters/nurse_surprised":"00a58eaa057dff8e8691c310","characters/nurse_suspicious":"079143f9fe54fba961459d87","characters/nurse_sweat":"2d86fa2f5ab6e0a3eeab352e","characters/nurse_tired":"4463d6327e422a9b2dd9ee02","characters/nurse_touched":"829131cf2a078a1df458893d","characters/nurse_undressed_shy":"6b0f726cf1856261c55bbc04","characters/nurse_very_shy":"89d40ffce3e6655224967e82","characters/nurse_worried":"f1fa9ded9eaf0e9cd166350f","characters/seyoun_active":"b99cb5dee2cbd507173637be","characters/seyoun_aegyo":"c5528e9961b19073863799b4","characters/seyoun_afterglow":"5970f0819ff9d8118d4cd8dc","characters/seyoun_ahegao":"1081145f8e243ba49ec0ba9e","characters/seyoun_angry":"55839200446687cc18b97c72","characters/seyoun_back":"ff25e983526ea4c8f332f003","characters/seyoun_begging_lust":"ef5cdbe3794d476379fc8c46","characters/seyoun_betrayed":"c1cb1be9ac2a4f7a8bdb808f","characters/seyoun_bikini":"811254edce80a69af5e46c3b","characters/seyoun_bored":"1f91b675cb2289bdac82fa34","characters/seyoun_choking":"a0ad2c6ac9e823bebdd53f4b","characters/seyoun_climax":"fc0ab62e39663dafb4a63e61","characters/seyoun_climax_02":"1d8e4685fbc6ab99b995d134","characters/seyoun_climax_03":"4c0a75f92f12ed483a727cd3","characters/seyoun_climax_04":"32745b0dc895ee3029d0004f","characters/seyoun_climax_05":"b73bf6ad0364a7686bc21a94","characters/seyoun_climax_06":"802adf7d7194015054187a67","characters/seyoun_cold":"561307b5eefb831662c1ca7b","characters/seyoun_combat_ready":"10465aae764901c9c3aec685","characters/seyoun_confused":"51eec3f0842106cfbade31bc","characters/seyoun_cry":"6610f7f8392c972b64b81395","characters/seyoun_date_laugh":"782d59181950ecec34f63565","characters/seyoun_date_normal":"2ab48647f5328b7331a74bc2","characters/seyoun_date_sad":"49d60b12c50af6e72f9e8f8d","characters/seyoun_date_shy":"bf8ace01b165c9442270ec09","characters/seyoun_date_worried":"1819972fb0d874d578757b1f","characters/seyoun_dazed":"7a1129b849f8356190ec09b4","characters/seyoun_dead":"dfe8f336f80f5ae7f9cbd1c1","characters/seyoun_disgusted":"c7bda59eabcf639cfead263c","characters/seyoun_dominant_aroused":"339848fed5dbd8599a42ca2c","characters/seyoun_dry_smile":"699854f402fe81db1be6ad6b","characters/seyoun_dumbfounded":"5380ef9bf86d480c7436af1f","characters/seyoun_enduring":"ca2297f128ce8d3147b83ef5","characters/seyoun_entranced":"87d86a7f6700fe920376c2df","characters/seyoun_exhausted":"8e4de0a7e1994256d5239836","characters/seyoun_fainted":"5287b41f55a3f8283c763629","characters/seyoun_firm":"95d030b10c38b0018133d167","characters/seyoun_flushed":"169e0885f95f66877d948bd0","characters/seyoun_flushed_02":"6d0aeae96590302baa722932","characters/seyoun_flushed_03":"494fa3f06d62fde7d71465de","characters/seyoun_flushed_04":"ba21fb1241eb2318cfe0dec4","characters/seyoun_flushed_05":"641bc350b73fd0bfa8294113","characters/seyoun_flushed_06":"9636c5ee1a1bcdeb88ee6c1a","characters/seyoun_furious":"5f45abeae199cc3dfb5267e9","characters/seyoun_groggy":"5c7e5f66853febce694800d8","characters/seyoun_humiliated":"000d9f146c536d8ebff767e4","characters/seyoun_jealous":"523eff7a40d7fa01df958645","characters/seyoun_kiss":"935fd1acc4e22b6a37998cce","characters/seyoun_laugh":"a8dc963d2d47d648214484c4","characters/seyoun_lovestruck":"6ef28a51e1b358e32af539f1","characters/seyoun_messy_afterglow":"d67501f9012bf0112e48c2aa","characters/seyoun_normal":"c5d54a5b9ef32592f54fe625","characters/seyoun_oral_service":"ffbc346c27746406034f633c","characters/seyoun_pain":"8c7ce3572cdeaf907b358b4b","characters/seyoun_pleading":"a88eb274a8535e854f61eaf5","characters/seyoun_pout":"5a588d675f069f511c734869","characters/seyoun_relieved":"92b70e9edae457a1453b0560","characters/seyoun_sad":"0f1320ef1c120e18ce160dfe","characters/seyoun_scared":"499760cc93c12e943c0cda35","characters/seyoun_scheming":"4121bc9aff13cf1ed4f7639d","characters/seyoun_scream":"4b2465b12fc2b4ab3dadbc90","characters/seyoun_seductive":"299028b9efb21b53a800c5d3","characters/seyoun_shy":"60e34c5a7364afb32765f072","characters/seyoun_smile":"05246b274b8f88111830e0eb","characters/seyoun_smirk":"4a6f08a43ba8d0c8b3340789","characters/seyoun_sob":"52c2cf1bbba99c666208769c","characters/seyoun_soft_smile":"20d36f52d5117f4896eebd52","characters/seyoun_surprised":"134c09f9d40b3033f0c0ba39","characters/seyoun_suspicious":"288ef25826ef4cc005b9e3b5","characters/seyoun_sweat":"a5b41029135c27b2296822e9","characters/seyoun_tired":"68351af068b610d67ae1c66a","characters/seyoun_touched":"96092e6caa13ff041727adb8","characters/seyoun_undressed_shy":"9dfaed84d69ea858108df9f8","characters/seyoun_very_shy":"0d39015e660792be2087b33a","characters/seyoun_worried":"cef7ecbc13695eab9b0a3c47","characters/teacher_active":"458f10a64732f50ec2aa51c2","characters/teacher_aegyo":"9d6798000a6073a3743d57fb","characters/teacher_afterglow":"d671e24f76a9ea821882c0b2","characters/teacher_ahegao":"3fabbd949b692d282daa5b2b","characters/teacher_angry":"d7129951e38d7e69b03e4dd4","characters/teacher_begging_lust":"bb0fbe033d523febea6748ff","characters/teacher_betrayed":"bc84be24e4e18372472869d7","characters/teacher_bikini":"e28249e4880d2192538f472a","characters/teacher_bored":"8bc46ff77999803ed0f89083","characters/teacher_choking":"f36422ecf849aa0bdf885460","characters/teacher_climax":"92695442867013297c101129","characters/teacher_climax_02":"5533392b34688ba530d142e2","characters/teacher_climax_03":"47f20771da15c17f17db2ff6","characters/teacher_climax_04":"b690c0c61346c450f6d31081","characters/teacher_climax_05":"9a9e4b714137041ad6bd551f","characters/teacher_climax_06":"38706e49b8d499efd631dbbc","characters/teacher_climax_07":"9f9e9f27b013031eea5be182","characters/teacher_climax_08":"5a8fc31a0b9c6ff52162922d","characters/teacher_climax_09":"e3d94131ff1077a54ff0c3d9","characters/teacher_climax_10":"f295d9843f0e7e9e5d57a87d","characters/teacher_climax_11":"bee6215e775fc2db36030328","characters/teacher_cold":"10580fa000565da2d3b632dc","characters/teacher_combat_ready":"47df684a19139bf55d59e0da","characters/teacher_confused":"798aa24053154e9142c0c5e9","characters/teacher_cry":"a0f809970a2e13a6ba680b45","characters/teacher_dazed":"8b213a481e8ba3981fc3fb1c","characters/teacher_dead":"5c7b598d933c75ba7188b934","characters/teacher_disgusted":"3986965a4f4b7c3c89b4adc6","characters/teacher_dominant_aroused":"b7c2136657a5c9b5a6e9ff1d","characters/teacher_dry_smile":"9bc59f640d9aa752d0039bc7","characters/teacher_dumbfounded":"e831f55983921edb81dd9660","characters/teacher_enduring":"a2a62a7b16ac850eb320a9b8","characters/teacher_entranced":"eb029a7be22080e6b9aae0db","characters/teacher_exhausted":"3ed4867433cfa209013febc6","characters/teacher_fainted":"72346e50f2964ff70c7c853a","characters/teacher_firm":"5e35b97a7e721502e073ec75","characters/teacher_flushed":"533a0679ee91694e9b3c26ba","characters/teacher_flushed_02":"646bc0b2455e3487a5a472f6","characters/teacher_flushed_03":"0f94f908365ce1bd7c752fce","characters/teacher_furious":"841dca23cccaaa15e7c61490","characters/teacher_groggy":"2d214fa5113c1f0ee309eae4","characters/teacher_humiliated":"b6e643e3626efc554783f3f6","characters/teacher_jealous":"9cf4bfd7502f55eeb31dba33","characters/teacher_kiss":"4fd81091e7bd1d7a16309dba","characters/teacher_laugh":"0b13c620b85552c4f38dc45d","characters/teacher_lovestruck":"2264e3bfa2dc7ddb9057ea2d","characters/teacher_messy_afterglow":"25a2756587b31d52a836df67","characters/teacher_normal":"2451ea041fa710ea65524958","characters/teacher_oral_service":"fed26e04898cf311ed89c0db","characters/teacher_pain":"b7b166fc77d9598bd6d29e98","characters/teacher_pleading":"1388f7d03d3d24dfc4cc709a","characters/teacher_pout":"849dfc92fc24d945dba77f29","characters/teacher_relieved":"9f4a62450b09befa22c5d365","characters/teacher_sad":"c089d3869426d30c5602b067","characters/teacher_scared":"46aef27ef8f962c6a645234a","characters/teacher_scheming":"1a2250b45cdf1299db391b2e","characters/teacher_scream":"e7c9b11b43b21a703b5d1c33","characters/teacher_seductive":"ed71264ae5779c5532145b66","characters/teacher_shy":"b3043c9d93d7ec063638f9e1","characters/teacher_smile":"429df84a0ceeab40d05224a6","characters/teacher_smirk":"6c73587dec31a7f630db2224","characters/teacher_sob":"99c953779e02016234997287","characters/teacher_soft_smile":"7409447d171ea336e95d85f0","characters/teacher_surprised":"c9a12f312207c2b7e1a2085b","characters/teacher_suspicious":"e662ea2d331a4b19572049c8","characters/teacher_sweat":"463d15398d02496f57defdf4","characters/teacher_tired":"0f5bc6dfff758a79b2127fdd","characters/teacher_touched":"db5774c0eb0c6e60d634cb0e","characters/teacher_undressed_shy":"4a7935de4db566d9dfeb84a5","characters/teacher_very_shy":"9972f2cb11f1c7e132d12ba3","characters/teacher_worried":"c1104706b0edc93b9837cb44","characters/yuna_active":"053363065b640a1c11676635","characters/yuna_aegyo":"0ba50353aa3e120cff94bacf","characters/yuna_afterglow":"81b904784b88b73de8230537","characters/yuna_ahegao":"d9f51b2d877ad49497ef1ef1","characters/yuna_angry":"2aade76863ecbc1ae988b2ec","characters/yuna_begging_lust":"f29de6cdb5b4993aa2d01680","characters/yuna_betrayed":"386940be30ede2efecc73aec","characters/yuna_bikini":"f7e257282a62e3a43bf17635","characters/yuna_bored":"6f19633cd8ad9e9b0570f821","characters/yuna_choking":"efd94f2a2fde52e56fbd8ad8","characters/yuna_climax":"b33ce8894717240f5a06b38a","characters/yuna_climax_02":"516aa0e45a92d75ee43dcaaf","characters/yuna_climax_03":"51fd87bac225176bd9be88cd","characters/yuna_climax_04":"9ecf5ceb96453ef9fe280863","characters/yuna_climax_05":"bdbbb1a591393904faafce22","characters/yuna_climax_06":"26c853e419a7808c46168d40","characters/yuna_climax_07":"2ba6e7a69b945bda8583e25d","characters/yuna_climax_08":"aa8c3fe0fe494a9ae1ca54e2","characters/yuna_climax_09":"d1942113146e40c2c4a9f123","characters/yuna_cold":"bb15a7f7aac8dab1349f0ecd","characters/yuna_combat_ready":"09b606394de17c5f71436baf","characters/yuna_confused":"35530b1793e910f126168dbe","characters/yuna_cry":"70ee2de5ecf3729f311c9d28","characters/yuna_date_bored":"ad47c1ad4dbe2f408616bfa3","characters/yuna_date_normal":"3b3fde66d1fac0574c83b3fb","characters/yuna_date_sad":"1e7ea7d0dc296f7704ef2151","characters/yuna_date_shy":"718edd40188722ecea7ac05a","characters/yuna_date_smile":"92fafb35f27abf000e77f32f","characters/yuna_dazed":"c4764cff0bb52536c358ff43","characters/yuna_dead":"46acefe5fd645beb21f9596c","characters/yuna_disgusted":"f2612664f667da6f5b0252e7","characters/yuna_dominant_aroused":"dde270c55fc53c88c5c7cb31","characters/yuna_dry_smile":"56f497968d32eb675d13e14a","characters/yuna_dumbfounded":"3be4aa47dbfd98872a68bf62","characters/yuna_enduring":"9ebb9764c7868ea6ff42a8be","characters/yuna_entranced":"cf3cbe216b44933dac2ab06e","characters/yuna_exhausted":"4bd8ac1c68cbff079d37900b","characters/yuna_fainted":"a91bceb5af8b2d542d87c39b","characters/yuna_firm":"721aeac4b82586f58575ea7f","characters/yuna_flushed":"4bfc72a32853aed4032fffec","characters/yuna_flushed_02":"527809ca0d58fa65128c9da7","characters/yuna_flushed_03":"8d50e7a6779c890767a7e23d","characters/yuna_furious":"6915e088e83b9c1af0ff47f1","characters/yuna_gallery_bikini_sexy_20260813":"7cfb2d83e446e8a8da023f1c","characters/yuna_groggy":"282bcbaee17f3dd8dc230052","characters/yuna_humiliated":"54ead6d9e7c6881dbf315a9a","characters/yuna_jealous":"b986b8fc937482bf439e01c7","characters/yuna_kiss":"664937b93c20dbb841f30274","characters/yuna_laugh":"8fbd9a130d524188a3b2ba51","characters/yuna_lovestruck":"88bbbaed9fd669654a4bc13a","characters/yuna_messy_afterglow":"70ac499ff812c93b648fd900","characters/yuna_normal":"77c86d903106a1133132b089","characters/yuna_oral_service":"15fb507d71b68e0a13b29ae6","characters/yuna_pain":"61240434662878bc37518fb8","characters/yuna_pleading":"8d3df561938af04292af8093","characters/yuna_pout":"d661bf3ce6700216c290a81d","characters/yuna_relieved":"05d8a0ff802c7fa7e891886f","characters/yuna_sad":"2a2eb068b099f6d22be7b52e","characters/yuna_scared":"1d6a84f63c4218ff31d2f321","characters/yuna_scheming":"ae56bf378f42f446dfd4322c","characters/yuna_scream":"d5cf41c00a83df5af784ed5c","characters/yuna_seductive":"765d44708f2eaa492283ce56","characters/yuna_shy":"8db4662bcaf4feaf560685d8","characters/yuna_smile":"05de678f8950ef0ceab3a200","characters/yuna_smirk":"b521664ba837bc3e7679075b","characters/yuna_sob":"07ac014e6f4e182a1a80e486","characters/yuna_soft_smile":"af6d34e10421945c3336751f","characters/yuna_surprised":"1d983db129bd797daeee8ce3","characters/yuna_suspicious":"5967a7b5ad85b3feb60779f6","characters/yuna_sweat":"053c8f2aebafe2ecf7118a98","characters/yuna_tired":"33132f72bb0887d39d4051a4","characters/yuna_touched":"ba976368f0ada79fb026fc87","characters/yuna_undressed_shy":"f0ecb59e0af66360a968d1e9","characters/yuna_very_shy":"fa462eb915ddae7a771b23b2","characters/yuna_worried":"8886c0b2f24e57963342f345"};
  var CHARACTER_ASSET_IDS = {"assets/characters/dain/expressions/active/01/sprite":"characters/dain_active","assets/characters/dain/expressions/aegyo/01/sprite":"characters/dain_aegyo","assets/characters/dain/expressions/afterglow/01/sprite":"characters/dain_afterglow","assets/characters/dain/expressions/ahegao/01/sprite":"characters/dain_ahegao","assets/characters/dain/expressions/angry/01/sprite":"characters/dain_angry","assets/characters/dain/expressions/begging_lust/01/sprite":"characters/dain_begging_lust","assets/characters/dain/expressions/betrayed/01/sprite":"characters/dain_betrayed","assets/characters/dain/expressions/bikini/01/sprite":"characters/dain_bikini","assets/characters/dain/expressions/bored/01/sprite":"characters/dain_bored","assets/characters/dain/expressions/choking/01/sprite":"characters/dain_choking","assets/characters/dain/expressions/climax/01/sprite":"characters/dain_climax","assets/characters/dain/expressions/climax/02/sprite":"characters/dain_climax_02","assets/characters/dain/expressions/climax/03/sprite":"characters/dain_climax_03","assets/characters/dain/expressions/climax/04/sprite":"characters/dain_climax_04","assets/characters/dain/expressions/climax/05/sprite":"characters/dain_climax_05","assets/characters/dain/expressions/climax/06/sprite":"characters/dain_climax_06","assets/characters/dain/expressions/climax/07/sprite":"characters/dain_climax_07","assets/characters/dain/expressions/climax/08/sprite":"characters/dain_climax_08","assets/characters/dain/expressions/climax/09/sprite":"characters/dain_climax_09","assets/characters/dain/expressions/climax/10/sprite":"characters/dain_climax_10","assets/characters/dain/expressions/climax/11/sprite":"characters/dain_climax_11","assets/characters/dain/expressions/cold/01/sprite":"characters/dain_cold","assets/characters/dain/expressions/combat_ready/01/sprite":"characters/dain_combat_ready","assets/characters/dain/expressions/confused/01/sprite":"characters/dain_confused","assets/characters/dain/expressions/cry/01/sprite":"characters/dain_cry","assets/characters/dain/expressions/dazed/01/sprite":"characters/dain_dazed","assets/characters/dain/expressions/dead/01/sprite":"characters/dain_dead","assets/characters/dain/expressions/disgusted/01/sprite":"characters/dain_disgusted","assets/characters/dain/expressions/dominant_aroused/01/sprite":"characters/dain_dominant_aroused","assets/characters/dain/expressions/dry_smile/01/sprite":"characters/dain_dry_smile","assets/characters/dain/expressions/dumbfounded/01/sprite":"characters/dain_dumbfounded","assets/characters/dain/expressions/enduring/01/sprite":"characters/dain_enduring","assets/characters/dain/expressions/entranced/01/sprite":"characters/dain_entranced","assets/characters/dain/expressions/exhausted/01/sprite":"characters/dain_exhausted","assets/characters/dain/expressions/fainted/01/sprite":"characters/dain_fainted","assets/characters/dain/expressions/firm/01/sprite":"characters/dain_firm","assets/characters/dain/expressions/flushed/01/sprite":"characters/dain_flushed","assets/characters/dain/expressions/flushed/02/sprite":"characters/dain_flushed_02","assets/characters/dain/expressions/flushed/03/sprite":"characters/dain_flushed_03","assets/characters/dain/expressions/furious/01/sprite":"characters/dain_furious","assets/characters/dain/expressions/groggy/01/sprite":"characters/dain_groggy","assets/characters/dain/expressions/humiliated/01/sprite":"characters/dain_humiliated","assets/characters/dain/expressions/jealous/01/sprite":"characters/dain_jealous","assets/characters/dain/expressions/kiss/01/sprite":"characters/dain_kiss","assets/characters/dain/expressions/laugh/01/sprite":"characters/dain_laugh","assets/characters/dain/expressions/lovestruck/01/sprite":"characters/dain_lovestruck","assets/characters/dain/expressions/messy_afterglow/01/sprite":"characters/dain_messy_afterglow","assets/characters/dain/expressions/normal/01/sprite":"characters/dain_normal","assets/characters/dain/expressions/oral_service/01/sprite":"characters/dain_oral_service","assets/characters/dain/expressions/pain/01/sprite":"characters/dain_pain","assets/characters/dain/expressions/pleading/01/sprite":"characters/dain_pleading","assets/characters/dain/expressions/pout/01/sprite":"characters/dain_pout","assets/characters/dain/expressions/relieved/01/sprite":"characters/dain_relieved","assets/characters/dain/expressions/sad/01/sprite":"characters/dain_sad","assets/characters/dain/expressions/scared/01/sprite":"characters/dain_scared","assets/characters/dain/expressions/scheming/01/sprite":"characters/dain_scheming","assets/characters/dain/expressions/scream/01/sprite":"characters/dain_scream","assets/characters/dain/expressions/seductive/01/sprite":"characters/dain_seductive","assets/characters/dain/expressions/shy/01/sprite":"characters/dain_shy","assets/characters/dain/expressions/smile/01/sprite":"characters/dain_smile","assets/characters/dain/expressions/smirk/01/sprite":"characters/dain_smirk","assets/characters/dain/expressions/sob/01/sprite":"characters/dain_sob","assets/characters/dain/expressions/soft_smile/01/sprite":"characters/dain_soft_smile","assets/characters/dain/expressions/surprised/01/sprite":"characters/dain_surprised","assets/characters/dain/expressions/suspicious/01/sprite":"characters/dain_suspicious","assets/characters/dain/expressions/sweat/01/sprite":"characters/dain_sweat","assets/characters/dain/expressions/tired/01/sprite":"characters/dain_tired","assets/characters/dain/expressions/touched/01/sprite":"characters/dain_touched","assets/characters/dain/expressions/undressed_shy/01/sprite":"characters/dain_undressed_shy","assets/characters/dain/expressions/undressed_shy/02/sprite":"characters/dain_undressed_shy_02","assets/characters/dain/expressions/undressed_shy/03/sprite":"characters/dain_undressed_shy_03","assets/characters/dain/expressions/undressed_shy/04/sprite":"characters/dain_undressed_shy_04","assets/characters/dain/expressions/very_shy/01/sprite":"characters/dain_very_shy","assets/characters/dain/expressions/worried/01/sprite":"characters/dain_worried","assets/characters/dain/outfits/date/expressions/angry/01/sprite":"characters/dain_date_angry","assets/characters/dain/outfits/date/expressions/laugh/01/sprite":"characters/dain_date_laugh","assets/characters/dain/outfits/date/expressions/normal/01/sprite":"characters/dain_date_normal","assets/characters/dain/outfits/date/expressions/sad/01/sprite":"characters/dain_date_sad","assets/characters/dain/outfits/date/expressions/shy/01/sprite":"characters/dain_date_shy","assets/characters/dain/outfits/date/expressions/sweat/01/sprite":"characters/dain_date_sweat","assets/characters/haeun/expressions/active/01/sprite":"characters/haeun_active","assets/characters/haeun/expressions/aegyo/01/sprite":"characters/haeun_aegyo","assets/characters/haeun/expressions/afterglow/01/sprite":"characters/haeun_afterglow","assets/characters/haeun/expressions/ahegao/01/sprite":"characters/haeun_ahegao","assets/characters/haeun/expressions/angry/01/sprite":"characters/haeun_angry","assets/characters/haeun/expressions/begging_lust/01/sprite":"characters/haeun_begging_lust","assets/characters/haeun/expressions/betrayed/01/sprite":"characters/haeun_betrayed","assets/characters/haeun/expressions/bored/01/sprite":"characters/haeun_bored","assets/characters/haeun/expressions/choking/01/sprite":"characters/haeun_choking","assets/characters/haeun/expressions/climax/01/sprite":"characters/haeun_climax","assets/characters/haeun/expressions/climax/02/sprite":"characters/haeun_climax_02","assets/characters/haeun/expressions/climax/03/sprite":"characters/haeun_climax_03","assets/characters/haeun/expressions/climax/04/sprite":"characters/haeun_climax_04","assets/characters/haeun/expressions/climax/05/sprite":"characters/haeun_climax_05","assets/characters/haeun/expressions/climax/06/sprite":"characters/haeun_climax_06","assets/characters/haeun/expressions/climax/07/sprite":"characters/haeun_climax_07","assets/characters/haeun/expressions/climax/08/sprite":"characters/haeun_climax_08","assets/characters/haeun/expressions/cold/01/sprite":"characters/haeun_cold","assets/characters/haeun/expressions/combat_ready/01/sprite":"characters/haeun_combat_ready","assets/characters/haeun/expressions/confused/01/sprite":"characters/haeun_confused","assets/characters/haeun/expressions/cry/01/sprite":"characters/haeun_cry","assets/characters/haeun/expressions/dazed/01/sprite":"characters/haeun_dazed","assets/characters/haeun/expressions/dead/01/sprite":"characters/haeun_dead","assets/characters/haeun/expressions/disgusted/01/sprite":"characters/haeun_disgusted","assets/characters/haeun/expressions/dominant_aroused/01/sprite":"characters/haeun_dominant_aroused","assets/characters/haeun/expressions/dry_smile/01/sprite":"characters/haeun_dry_smile","assets/characters/haeun/expressions/dumbfounded/01/sprite":"characters/haeun_dumbfounded","assets/characters/haeun/expressions/enduring/01/sprite":"characters/haeun_enduring","assets/characters/haeun/expressions/entranced/01/sprite":"characters/haeun_entranced","assets/characters/haeun/expressions/exhausted/01/sprite":"characters/haeun_exhausted","assets/characters/haeun/expressions/fainted/01/sprite":"characters/haeun_fainted","assets/characters/haeun/expressions/firm/01/sprite":"characters/haeun_firm","assets/characters/haeun/expressions/flushed/01/sprite":"characters/haeun_flushed","assets/characters/haeun/expressions/flushed/02/sprite":"characters/haeun_flushed_02","assets/characters/haeun/expressions/flushed/03/sprite":"characters/haeun_flushed_03","assets/characters/haeun/expressions/furious/01/sprite":"characters/haeun_furious","assets/characters/haeun/expressions/groggy/01/sprite":"characters/haeun_groggy","assets/characters/haeun/expressions/humiliated/01/sprite":"characters/haeun_humiliated","assets/characters/haeun/expressions/jealous/01/sprite":"characters/haeun_jealous","assets/characters/haeun/expressions/kiss/01/sprite":"characters/haeun_kiss","assets/characters/haeun/expressions/laugh/01/sprite":"characters/haeun_laugh","assets/characters/haeun/expressions/lovestruck/01/sprite":"characters/haeun_lovestruck","assets/characters/haeun/expressions/messy_afterglow/01/sprite":"characters/haeun_messy_afterglow","assets/characters/haeun/expressions/normal/01/sprite":"characters/haeun_normal","assets/characters/haeun/expressions/oral_service/01/sprite":"characters/haeun_oral_service","assets/characters/haeun/expressions/pain/01/sprite":"characters/haeun_pain","assets/characters/haeun/expressions/pleading/01/sprite":"characters/haeun_pleading","assets/characters/haeun/expressions/pout/01/sprite":"characters/haeun_pout","assets/characters/haeun/expressions/relieved/01/sprite":"characters/haeun_relieved","assets/characters/haeun/expressions/sad/01/sprite":"characters/haeun_sad","assets/characters/haeun/expressions/scared/01/sprite":"characters/haeun_scared","assets/characters/haeun/expressions/scheming/01/sprite":"characters/haeun_scheming","assets/characters/haeun/expressions/scream/01/sprite":"characters/haeun_scream","assets/characters/haeun/expressions/seductive/01/sprite":"characters/haeun_seductive","assets/characters/haeun/expressions/shy/01/sprite":"characters/haeun_shy","assets/characters/haeun/expressions/smile/01/sprite":"characters/haeun_smile","assets/characters/haeun/expressions/smirk/01/sprite":"characters/haeun_smirk","assets/characters/haeun/expressions/sob/01/sprite":"characters/haeun_sob","assets/characters/haeun/expressions/soft_smile/01/sprite":"characters/haeun_soft_smile","assets/characters/haeun/expressions/surprised/01/sprite":"characters/haeun_surprised","assets/characters/haeun/expressions/suspicious/01/sprite":"characters/haeun_suspicious","assets/characters/haeun/expressions/sweat/01/sprite":"characters/haeun_sweat","assets/characters/haeun/expressions/tired/01/sprite":"characters/haeun_tired","assets/characters/haeun/expressions/touched/01/sprite":"characters/haeun_touched","assets/characters/haeun/expressions/undressed_shy/01/sprite":"characters/haeun_undressed_shy","assets/characters/haeun/expressions/very_shy/01/sprite":"characters/haeun_very_shy","assets/characters/haeun/expressions/worried/01/sprite":"characters/haeun_worried","assets/characters/junho/expressions/awkward/01/sprite":"characters/junho_awkward","assets/characters/junho/expressions/normal/01/sprite":"characters/junho_normal","assets/characters/minsu/expressions/active/01/sprite":"characters/minsu_active","assets/characters/minsu/expressions/aegyo/01/sprite":"characters/minsu_aegyo","assets/characters/minsu/expressions/afterglow/01/sprite":"characters/minsu_afterglow","assets/characters/minsu/expressions/angry/01/sprite":"characters/minsu_angry","assets/characters/minsu/expressions/begging_lust/01/sprite":"characters/minsu_begging_lust","assets/characters/minsu/expressions/betrayed/01/sprite":"characters/minsu_betrayed","assets/characters/minsu/expressions/bored/01/sprite":"characters/minsu_bored","assets/characters/minsu/expressions/choking/01/sprite":"characters/minsu_choking","assets/characters/minsu/expressions/climax/01/sprite":"characters/minsu_climax","assets/characters/minsu/expressions/climax/02/sprite":"characters/minsu_climax_02","assets/characters/minsu/expressions/climax/03/sprite":"characters/minsu_climax_03","assets/characters/minsu/expressions/climax/04/sprite":"characters/minsu_climax_04","assets/characters/minsu/expressions/climax/05/sprite":"characters/minsu_climax_05","assets/characters/minsu/expressions/climax/06/sprite":"characters/minsu_climax_06","assets/characters/minsu/expressions/cold/01/sprite":"characters/minsu_cold","assets/characters/minsu/expressions/combat_ready/01/sprite":"characters/minsu_combat_ready","assets/characters/minsu/expressions/confused/01/sprite":"characters/minsu_confused","assets/characters/minsu/expressions/cry/01/sprite":"characters/minsu_cry","assets/characters/minsu/expressions/dazed/01/sprite":"characters/minsu_dazed","assets/characters/minsu/expressions/dead/01/sprite":"characters/minsu_dead","assets/characters/minsu/expressions/disgusted/01/sprite":"characters/minsu_disgusted","assets/characters/minsu/expressions/dominant_aroused/01/sprite":"characters/minsu_dominant_aroused","assets/characters/minsu/expressions/dry_smile/01/sprite":"characters/minsu_dry_smile","assets/characters/minsu/expressions/dumbfounded/01/sprite":"characters/minsu_dumbfounded","assets/characters/minsu/expressions/enduring/01/sprite":"characters/minsu_enduring","assets/characters/minsu/expressions/entranced/01/sprite":"characters/minsu_entranced","assets/characters/minsu/expressions/exhausted/01/sprite":"characters/minsu_exhausted","assets/characters/minsu/expressions/fainted/01/sprite":"characters/minsu_fainted","assets/characters/minsu/expressions/firm/01/sprite":"characters/minsu_firm","assets/characters/minsu/expressions/flushed/01/sprite":"characters/minsu_flushed","assets/characters/minsu/expressions/flushed/02/sprite":"characters/minsu_flushed_02","assets/characters/minsu/expressions/flushed/03/sprite":"characters/minsu_flushed_03","assets/characters/minsu/expressions/furious/01/sprite":"characters/minsu_furious","assets/characters/minsu/expressions/groggy/01/sprite":"characters/minsu_groggy","assets/characters/minsu/expressions/humiliated/01/sprite":"characters/minsu_humiliated","assets/characters/minsu/expressions/jealous/01/sprite":"characters/minsu_jealous","assets/characters/minsu/expressions/kiss/01/sprite":"characters/minsu_kiss","assets/characters/minsu/expressions/laugh/01/sprite":"characters/minsu_laugh","assets/characters/minsu/expressions/lovestruck/01/sprite":"characters/minsu_lovestruck","assets/characters/minsu/expressions/messy_afterglow/01/sprite":"characters/minsu_messy_afterglow","assets/characters/minsu/expressions/normal/01/sprite":"characters/minsu_normal","assets/characters/minsu/expressions/oral_service/01/sprite":"characters/minsu_oral_service","assets/characters/minsu/expressions/pain/01/sprite":"characters/minsu_pain","assets/characters/minsu/expressions/pleading/01/sprite":"characters/minsu_pleading","assets/characters/minsu/expressions/pout/01/sprite":"characters/minsu_pout","assets/characters/minsu/expressions/relieved/01/sprite":"characters/minsu_relieved","assets/characters/minsu/expressions/sad/01/sprite":"characters/minsu_sad","assets/characters/minsu/expressions/scared/01/sprite":"characters/minsu_scared","assets/characters/minsu/expressions/scheming/01/sprite":"characters/minsu_scheming","assets/characters/minsu/expressions/scream/01/sprite":"characters/minsu_scream","assets/characters/minsu/expressions/seductive/01/sprite":"characters/minsu_seductive","assets/characters/minsu/expressions/shy/01/sprite":"characters/minsu_shy","assets/characters/minsu/expressions/smile/01/sprite":"characters/minsu_smile","assets/characters/minsu/expressions/smirk/01/sprite":"characters/minsu_smirk","assets/characters/minsu/expressions/sob/01/sprite":"characters/minsu_sob","assets/characters/minsu/expressions/soft_smile/01/sprite":"characters/minsu_soft_smile","assets/characters/minsu/expressions/surprised/01/sprite":"characters/minsu_surprised","assets/characters/minsu/expressions/suspicious/01/sprite":"characters/minsu_suspicious","assets/characters/minsu/expressions/sweat/01/sprite":"characters/minsu_sweat","assets/characters/minsu/expressions/tired/01/sprite":"characters/minsu_tired","assets/characters/minsu/expressions/touched/01/sprite":"characters/minsu_touched","assets/characters/minsu/expressions/undressed_shy/01/sprite":"characters/minsu_undressed_shy","assets/characters/minsu/expressions/very_shy/01/sprite":"characters/minsu_very_shy","assets/characters/minsu/expressions/worried/01/sprite":"characters/minsu_worried","assets/characters/nurse/expressions/active/01/sprite":"characters/nurse_active","assets/characters/nurse/expressions/aegyo/01/sprite":"characters/nurse_aegyo","assets/characters/nurse/expressions/afterglow/01/sprite":"characters/nurse_afterglow","assets/characters/nurse/expressions/ahegao/01/sprite":"characters/nurse_ahegao","assets/characters/nurse/expressions/angry/01/sprite":"characters/nurse_angry","assets/characters/nurse/expressions/begging_lust/01/sprite":"characters/nurse_begging_lust","assets/characters/nurse/expressions/betrayed/01/sprite":"characters/nurse_betrayed","assets/characters/nurse/expressions/bikini/01/sprite":"characters/nurse_bikini","assets/characters/nurse/expressions/bored/01/sprite":"characters/nurse_bored","assets/characters/nurse/expressions/choking/01/sprite":"characters/nurse_choking","assets/characters/nurse/expressions/climax/01/sprite":"characters/nurse_climax","assets/characters/nurse/expressions/climax/02/sprite":"characters/nurse_climax_02","assets/characters/nurse/expressions/climax/03/sprite":"characters/nurse_climax_03","assets/characters/nurse/expressions/climax/04/sprite":"characters/nurse_climax_04","assets/characters/nurse/expressions/climax/05/sprite":"characters/nurse_climax_05","assets/characters/nurse/expressions/climax/06/sprite":"characters/nurse_climax_06","assets/characters/nurse/expressions/climax/07/sprite":"characters/nurse_climax_07","assets/characters/nurse/expressions/climax/08/sprite":"characters/nurse_climax_08","assets/characters/nurse/expressions/climax/09/sprite":"characters/nurse_climax_09","assets/characters/nurse/expressions/cold/01/sprite":"characters/nurse_cold","assets/characters/nurse/expressions/combat_ready/01/sprite":"characters/nurse_combat_ready","assets/characters/nurse/expressions/confused/01/sprite":"characters/nurse_confused","assets/characters/nurse/expressions/cry/01/sprite":"characters/nurse_cry","assets/characters/nurse/expressions/dazed/01/sprite":"characters/nurse_dazed","assets/characters/nurse/expressions/dead/01/sprite":"characters/nurse_dead","assets/characters/nurse/expressions/disgusted/01/sprite":"characters/nurse_disgusted","assets/characters/nurse/expressions/dominant_aroused/01/sprite":"characters/nurse_dominant_aroused","assets/characters/nurse/expressions/dry_smile/01/sprite":"characters/nurse_dry_smile","assets/characters/nurse/expressions/dumbfounded/01/sprite":"characters/nurse_dumbfounded","assets/characters/nurse/expressions/enduring/01/sprite":"characters/nurse_enduring","assets/characters/nurse/expressions/entranced/01/sprite":"characters/nurse_entranced","assets/characters/nurse/expressions/exhausted/01/sprite":"characters/nurse_exhausted","assets/characters/nurse/expressions/fainted/01/sprite":"characters/nurse_fainted","assets/characters/nurse/expressions/firm/01/sprite":"characters/nurse_firm","assets/characters/nurse/expressions/flushed/01/sprite":"characters/nurse_flushed","assets/characters/nurse/expressions/flushed/02/sprite":"characters/nurse_flushed_02","assets/characters/nurse/expressions/flushed/03/sprite":"characters/nurse_flushed_03","assets/characters/nurse/expressions/furious/01/sprite":"characters/nurse_furious","assets/characters/nurse/expressions/groggy/01/sprite":"characters/nurse_groggy","assets/characters/nurse/expressions/humiliated/01/sprite":"characters/nurse_humiliated","assets/characters/nurse/expressions/jealous/01/sprite":"characters/nurse_jealous","assets/characters/nurse/expressions/kiss/01/sprite":"characters/nurse_kiss","assets/characters/nurse/expressions/laugh/01/sprite":"characters/nurse_laugh","assets/characters/nurse/expressions/lovestruck/01/sprite":"characters/nurse_lovestruck","assets/characters/nurse/expressions/messy_afterglow/01/sprite":"characters/nurse_messy_afterglow","assets/characters/nurse/expressions/normal/01/sprite":"characters/nurse_normal","assets/characters/nurse/expressions/oral_service/01/sprite":"characters/nurse_oral_service","assets/characters/nurse/expressions/pain/01/sprite":"characters/nurse_pain","assets/characters/nurse/expressions/pleading/01/sprite":"characters/nurse_pleading","assets/characters/nurse/expressions/pout/01/sprite":"characters/nurse_pout","assets/characters/nurse/expressions/relieved/01/sprite":"characters/nurse_relieved","assets/characters/nurse/expressions/sad/01/sprite":"characters/nurse_sad","assets/characters/nurse/expressions/scared/01/sprite":"characters/nurse_scared","assets/characters/nurse/expressions/scheming/01/sprite":"characters/nurse_scheming","assets/characters/nurse/expressions/scream/01/sprite":"characters/nurse_scream","assets/characters/nurse/expressions/seductive/01/sprite":"characters/nurse_seductive","assets/characters/nurse/expressions/shy/01/sprite":"characters/nurse_shy","assets/characters/nurse/expressions/smile/01/sprite":"characters/nurse_smile","assets/characters/nurse/expressions/smirk/01/sprite":"characters/nurse_smirk","assets/characters/nurse/expressions/sob/01/sprite":"characters/nurse_sob","assets/characters/nurse/expressions/soft_smile/01/sprite":"characters/nurse_soft_smile","assets/characters/nurse/expressions/surprised/01/sprite":"characters/nurse_surprised","assets/characters/nurse/expressions/suspicious/01/sprite":"characters/nurse_suspicious","assets/characters/nurse/expressions/sweat/01/sprite":"characters/nurse_sweat","assets/characters/nurse/expressions/tired/01/sprite":"characters/nurse_tired","assets/characters/nurse/expressions/touched/01/sprite":"characters/nurse_touched","assets/characters/nurse/expressions/undressed_shy/01/sprite":"characters/nurse_undressed_shy","assets/characters/nurse/expressions/very_shy/01/sprite":"characters/nurse_very_shy","assets/characters/nurse/expressions/worried/01/sprite":"characters/nurse_worried","assets/characters/nurse/outfits/home/expressions/angry/01/sprite":"characters/nurse_home_angry","assets/characters/nurse/outfits/home/expressions/normal/01/sprite":"characters/nurse_home_normal","assets/characters/nurse/outfits/home/expressions/sad/01/sprite":"characters/nurse_home_sad","assets/characters/nurse/outfits/home/expressions/shy/01/sprite":"characters/nurse_home_shy","assets/characters/nurse/outfits/home/expressions/smile/01/sprite":"characters/nurse_home_smile","assets/characters/seoyeon/expressions/active/01/sprite":"characters/seyoun_active","assets/characters/seoyeon/expressions/aegyo/01/sprite":"characters/seyoun_aegyo","assets/characters/seoyeon/expressions/afterglow/01/sprite":"characters/seyoun_afterglow","assets/characters/seoyeon/expressions/ahegao/01/sprite":"characters/seyoun_ahegao","assets/characters/seoyeon/expressions/angry/01/sprite":"characters/seyoun_angry","assets/characters/seoyeon/expressions/back/01/sprite":"characters/seyoun_back","assets/characters/seoyeon/expressions/begging_lust/01/sprite":"characters/seyoun_begging_lust","assets/characters/seoyeon/expressions/betrayed/01/sprite":"characters/seyoun_betrayed","assets/characters/seoyeon/expressions/bikini/01/sprite":"characters/seyoun_bikini","assets/characters/seoyeon/expressions/bored/01/sprite":"characters/seyoun_bored","assets/characters/seoyeon/expressions/choking/01/sprite":"characters/seyoun_choking","assets/characters/seoyeon/expressions/climax/01/sprite":"characters/seyoun_climax","assets/characters/seoyeon/expressions/climax/02/sprite":"characters/seyoun_climax_02","assets/characters/seoyeon/expressions/climax/03/sprite":"characters/seyoun_climax_03","assets/characters/seoyeon/expressions/climax/04/sprite":"characters/seyoun_climax_04","assets/characters/seoyeon/expressions/climax/05/sprite":"characters/seyoun_climax_05","assets/characters/seoyeon/expressions/climax/06/sprite":"characters/seyoun_climax_06","assets/characters/seoyeon/expressions/cold/01/sprite":"characters/seyoun_cold","assets/characters/seoyeon/expressions/combat_ready/01/sprite":"characters/seyoun_combat_ready","assets/characters/seoyeon/expressions/confused/01/sprite":"characters/seyoun_confused","assets/characters/seoyeon/expressions/cry/01/sprite":"characters/seyoun_cry","assets/characters/seoyeon/expressions/dazed/01/sprite":"characters/seyoun_dazed","assets/characters/seoyeon/expressions/dead/01/sprite":"characters/seyoun_dead","assets/characters/seoyeon/expressions/disgusted/01/sprite":"characters/seyoun_disgusted","assets/characters/seoyeon/expressions/dominant_aroused/01/sprite":"characters/seyoun_dominant_aroused","assets/characters/seoyeon/expressions/dry_smile/01/sprite":"characters/seyoun_dry_smile","assets/characters/seoyeon/expressions/dumbfounded/01/sprite":"characters/seyoun_dumbfounded","assets/characters/seoyeon/expressions/enduring/01/sprite":"characters/seyoun_enduring","assets/characters/seoyeon/expressions/entranced/01/sprite":"characters/seyoun_entranced","assets/characters/seoyeon/expressions/exhausted/01/sprite":"characters/seyoun_exhausted","assets/characters/seoyeon/expressions/fainted/01/sprite":"characters/seyoun_fainted","assets/characters/seoyeon/expressions/firm/01/sprite":"characters/seyoun_firm","assets/characters/seoyeon/expressions/flushed/01/sprite":"characters/seyoun_flushed","assets/characters/seoyeon/expressions/flushed/02/sprite":"characters/seyoun_flushed_02","assets/characters/seoyeon/expressions/flushed/03/sprite":"characters/seyoun_flushed_03","assets/characters/seoyeon/expressions/flushed/04/sprite":"characters/seyoun_flushed_04","assets/characters/seoyeon/expressions/flushed/05/sprite":"characters/seyoun_flushed_05","assets/characters/seoyeon/expressions/flushed/06/sprite":"characters/seyoun_flushed_06","assets/characters/seoyeon/expressions/furious/01/sprite":"characters/seyoun_furious","assets/characters/seoyeon/expressions/groggy/01/sprite":"characters/seyoun_groggy","assets/characters/seoyeon/expressions/humiliated/01/sprite":"characters/seyoun_humiliated","assets/characters/seoyeon/expressions/jealous/01/sprite":"characters/seyoun_jealous","assets/characters/seoyeon/expressions/kiss/01/sprite":"characters/seyoun_kiss","assets/characters/seoyeon/expressions/laugh/01/sprite":"characters/seyoun_laugh","assets/characters/seoyeon/expressions/lovestruck/01/sprite":"characters/seyoun_lovestruck","assets/characters/seoyeon/expressions/messy_afterglow/01/sprite":"characters/seyoun_messy_afterglow","assets/characters/seoyeon/expressions/normal/01/sprite":"characters/seyoun_normal","assets/characters/seoyeon/expressions/oral_service/01/sprite":"characters/seyoun_oral_service","assets/characters/seoyeon/expressions/pain/01/sprite":"characters/seyoun_pain","assets/characters/seoyeon/expressions/pleading/01/sprite":"characters/seyoun_pleading","assets/characters/seoyeon/expressions/pout/01/sprite":"characters/seyoun_pout","assets/characters/seoyeon/expressions/relieved/01/sprite":"characters/seyoun_relieved","assets/characters/seoyeon/expressions/sad/01/sprite":"characters/seyoun_sad","assets/characters/seoyeon/expressions/scared/01/sprite":"characters/seyoun_scared","assets/characters/seoyeon/expressions/scheming/01/sprite":"characters/seyoun_scheming","assets/characters/seoyeon/expressions/scream/01/sprite":"characters/seyoun_scream","assets/characters/seoyeon/expressions/seductive/01/sprite":"characters/seyoun_seductive","assets/characters/seoyeon/expressions/shy/01/sprite":"characters/seyoun_shy","assets/characters/seoyeon/expressions/smile/01/sprite":"characters/seyoun_smile","assets/characters/seoyeon/expressions/smirk/01/sprite":"characters/seyoun_smirk","assets/characters/seoyeon/expressions/sob/01/sprite":"characters/seyoun_sob","assets/characters/seoyeon/expressions/soft_smile/01/sprite":"characters/seyoun_soft_smile","assets/characters/seoyeon/expressions/surprised/01/sprite":"characters/seyoun_surprised","assets/characters/seoyeon/expressions/suspicious/01/sprite":"characters/seyoun_suspicious","assets/characters/seoyeon/expressions/sweat/01/sprite":"characters/seyoun_sweat","assets/characters/seoyeon/expressions/tired/01/sprite":"characters/seyoun_tired","assets/characters/seoyeon/expressions/touched/01/sprite":"characters/seyoun_touched","assets/characters/seoyeon/expressions/undressed_shy/01/sprite":"characters/seyoun_undressed_shy","assets/characters/seoyeon/expressions/very_shy/01/sprite":"characters/seyoun_very_shy","assets/characters/seoyeon/expressions/worried/01/sprite":"characters/seyoun_worried","assets/characters/seoyeon/outfits/date/expressions/laugh/01/sprite":"characters/seyoun_date_laugh","assets/characters/seoyeon/outfits/date/expressions/normal/01/sprite":"characters/seyoun_date_normal","assets/characters/seoyeon/outfits/date/expressions/sad/01/sprite":"characters/seyoun_date_sad","assets/characters/seoyeon/outfits/date/expressions/shy/01/sprite":"characters/seyoun_date_shy","assets/characters/seoyeon/outfits/date/expressions/worried/01/sprite":"characters/seyoun_date_worried","assets/characters/teacher/expressions/active/01/sprite":"characters/teacher_active","assets/characters/teacher/expressions/aegyo/01/sprite":"characters/teacher_aegyo","assets/characters/teacher/expressions/afterglow/01/sprite":"characters/teacher_afterglow","assets/characters/teacher/expressions/ahegao/01/sprite":"characters/teacher_ahegao","assets/characters/teacher/expressions/angry/01/sprite":"characters/teacher_angry","assets/characters/teacher/expressions/begging_lust/01/sprite":"characters/teacher_begging_lust","assets/characters/teacher/expressions/betrayed/01/sprite":"characters/teacher_betrayed","assets/characters/teacher/expressions/bikini/01/sprite":"characters/teacher_bikini","assets/characters/teacher/expressions/bored/01/sprite":"characters/teacher_bored","assets/characters/teacher/expressions/choking/01/sprite":"characters/teacher_choking","assets/characters/teacher/expressions/climax/01/sprite":"characters/teacher_climax","assets/characters/teacher/expressions/climax/02/sprite":"characters/teacher_climax_02","assets/characters/teacher/expressions/climax/03/sprite":"characters/teacher_climax_03","assets/characters/teacher/expressions/climax/04/sprite":"characters/teacher_climax_04","assets/characters/teacher/expressions/climax/05/sprite":"characters/teacher_climax_05","assets/characters/teacher/expressions/climax/06/sprite":"characters/teacher_climax_06","assets/characters/teacher/expressions/climax/07/sprite":"characters/teacher_climax_07","assets/characters/teacher/expressions/climax/08/sprite":"characters/teacher_climax_08","assets/characters/teacher/expressions/climax/09/sprite":"characters/teacher_climax_09","assets/characters/teacher/expressions/climax/10/sprite":"characters/teacher_climax_10","assets/characters/teacher/expressions/climax/11/sprite":"characters/teacher_climax_11","assets/characters/teacher/expressions/cold/01/sprite":"characters/teacher_cold","assets/characters/teacher/expressions/combat_ready/01/sprite":"characters/teacher_combat_ready","assets/characters/teacher/expressions/confused/01/sprite":"characters/teacher_confused","assets/characters/teacher/expressions/cry/01/sprite":"characters/teacher_cry","assets/characters/teacher/expressions/dazed/01/sprite":"characters/teacher_dazed","assets/characters/teacher/expressions/dead/01/sprite":"characters/teacher_dead","assets/characters/teacher/expressions/disgusted/01/sprite":"characters/teacher_disgusted","assets/characters/teacher/expressions/dominant_aroused/01/sprite":"characters/teacher_dominant_aroused","assets/characters/teacher/expressions/dry_smile/01/sprite":"characters/teacher_dry_smile","assets/characters/teacher/expressions/dumbfounded/01/sprite":"characters/teacher_dumbfounded","assets/characters/teacher/expressions/enduring/01/sprite":"characters/teacher_enduring","assets/characters/teacher/expressions/entranced/01/sprite":"characters/teacher_entranced","assets/characters/teacher/expressions/exhausted/01/sprite":"characters/teacher_exhausted","assets/characters/teacher/expressions/fainted/01/sprite":"characters/teacher_fainted","assets/characters/teacher/expressions/firm/01/sprite":"characters/teacher_firm","assets/characters/teacher/expressions/flushed/01/sprite":"characters/teacher_flushed","assets/characters/teacher/expressions/flushed/02/sprite":"characters/teacher_flushed_02","assets/characters/teacher/expressions/flushed/03/sprite":"characters/teacher_flushed_03","assets/characters/teacher/expressions/furious/01/sprite":"characters/teacher_furious","assets/characters/teacher/expressions/groggy/01/sprite":"characters/teacher_groggy","assets/characters/teacher/expressions/humiliated/01/sprite":"characters/teacher_humiliated","assets/characters/teacher/expressions/jealous/01/sprite":"characters/teacher_jealous","assets/characters/teacher/expressions/kiss/01/sprite":"characters/teacher_kiss","assets/characters/teacher/expressions/laugh/01/sprite":"characters/teacher_laugh","assets/characters/teacher/expressions/lovestruck/01/sprite":"characters/teacher_lovestruck","assets/characters/teacher/expressions/messy_afterglow/01/sprite":"characters/teacher_messy_afterglow","assets/characters/teacher/expressions/normal/01/sprite":"characters/teacher_normal","assets/characters/teacher/expressions/oral_service/01/sprite":"characters/teacher_oral_service","assets/characters/teacher/expressions/pain/01/sprite":"characters/teacher_pain","assets/characters/teacher/expressions/pleading/01/sprite":"characters/teacher_pleading","assets/characters/teacher/expressions/pout/01/sprite":"characters/teacher_pout","assets/characters/teacher/expressions/relieved/01/sprite":"characters/teacher_relieved","assets/characters/teacher/expressions/sad/01/sprite":"characters/teacher_sad","assets/characters/teacher/expressions/scared/01/sprite":"characters/teacher_scared","assets/characters/teacher/expressions/scheming/01/sprite":"characters/teacher_scheming","assets/characters/teacher/expressions/scream/01/sprite":"characters/teacher_scream","assets/characters/teacher/expressions/seductive/01/sprite":"characters/teacher_seductive","assets/characters/teacher/expressions/shy/01/sprite":"characters/teacher_shy","assets/characters/teacher/expressions/smile/01/sprite":"characters/teacher_smile","assets/characters/teacher/expressions/smirk/01/sprite":"characters/teacher_smirk","assets/characters/teacher/expressions/sob/01/sprite":"characters/teacher_sob","assets/characters/teacher/expressions/soft_smile/01/sprite":"characters/teacher_soft_smile","assets/characters/teacher/expressions/surprised/01/sprite":"characters/teacher_surprised","assets/characters/teacher/expressions/suspicious/01/sprite":"characters/teacher_suspicious","assets/characters/teacher/expressions/sweat/01/sprite":"characters/teacher_sweat","assets/characters/teacher/expressions/tired/01/sprite":"characters/teacher_tired","assets/characters/teacher/expressions/touched/01/sprite":"characters/teacher_touched","assets/characters/teacher/expressions/undressed_shy/01/sprite":"characters/teacher_undressed_shy","assets/characters/teacher/expressions/very_shy/01/sprite":"characters/teacher_very_shy","assets/characters/teacher/expressions/worried/01/sprite":"characters/teacher_worried","assets/characters/yuna/expressions/active/01/sprite":"characters/yuna_active","assets/characters/yuna/expressions/aegyo/01/sprite":"characters/yuna_aegyo","assets/characters/yuna/expressions/afterglow/01/sprite":"characters/yuna_afterglow","assets/characters/yuna/expressions/ahegao/01/sprite":"characters/yuna_ahegao","assets/characters/yuna/expressions/angry/01/sprite":"characters/yuna_angry","assets/characters/yuna/expressions/begging_lust/01/sprite":"characters/yuna_begging_lust","assets/characters/yuna/expressions/betrayed/01/sprite":"characters/yuna_betrayed","assets/characters/yuna/expressions/bikini/01/sprite":"characters/yuna_bikini","assets/characters/yuna/expressions/bored/01/sprite":"characters/yuna_bored","assets/characters/yuna/expressions/choking/01/sprite":"characters/yuna_choking","assets/characters/yuna/expressions/climax/01/sprite":"characters/yuna_climax","assets/characters/yuna/expressions/climax/02/sprite":"characters/yuna_climax_02","assets/characters/yuna/expressions/climax/03/sprite":"characters/yuna_climax_03","assets/characters/yuna/expressions/climax/04/sprite":"characters/yuna_climax_04","assets/characters/yuna/expressions/climax/05/sprite":"characters/yuna_climax_05","assets/characters/yuna/expressions/climax/06/sprite":"characters/yuna_climax_06","assets/characters/yuna/expressions/climax/07/sprite":"characters/yuna_climax_07","assets/characters/yuna/expressions/climax/08/sprite":"characters/yuna_climax_08","assets/characters/yuna/expressions/climax/09/sprite":"characters/yuna_climax_09","assets/characters/yuna/expressions/cold/01/sprite":"characters/yuna_cold","assets/characters/yuna/expressions/combat_ready/01/sprite":"characters/yuna_combat_ready","assets/characters/yuna/expressions/confused/01/sprite":"characters/yuna_confused","assets/characters/yuna/expressions/cry/01/sprite":"characters/yuna_cry","assets/characters/yuna/expressions/dazed/01/sprite":"characters/yuna_dazed","assets/characters/yuna/expressions/dead/01/sprite":"characters/yuna_dead","assets/characters/yuna/expressions/disgusted/01/sprite":"characters/yuna_disgusted","assets/characters/yuna/expressions/dominant_aroused/01/sprite":"characters/yuna_dominant_aroused","assets/characters/yuna/expressions/dry_smile/01/sprite":"characters/yuna_dry_smile","assets/characters/yuna/expressions/dumbfounded/01/sprite":"characters/yuna_dumbfounded","assets/characters/yuna/expressions/enduring/01/sprite":"characters/yuna_enduring","assets/characters/yuna/expressions/entranced/01/sprite":"characters/yuna_entranced","assets/characters/yuna/expressions/exhausted/01/sprite":"characters/yuna_exhausted","assets/characters/yuna/expressions/fainted/01/sprite":"characters/yuna_fainted","assets/characters/yuna/expressions/firm/01/sprite":"characters/yuna_firm","assets/characters/yuna/expressions/flushed/01/sprite":"characters/yuna_flushed","assets/characters/yuna/expressions/flushed/02/sprite":"characters/yuna_flushed_02","assets/characters/yuna/expressions/flushed/03/sprite":"characters/yuna_flushed_03","assets/characters/yuna/expressions/furious/01/sprite":"characters/yuna_furious","assets/characters/yuna/expressions/gallery_bikini_sexy_20260813/01/sprite":"characters/yuna_gallery_bikini_sexy_20260813","assets/characters/yuna/expressions/groggy/01/sprite":"characters/yuna_groggy","assets/characters/yuna/expressions/humiliated/01/sprite":"characters/yuna_humiliated","assets/characters/yuna/expressions/jealous/01/sprite":"characters/yuna_jealous","assets/characters/yuna/expressions/kiss/01/sprite":"characters/yuna_kiss","assets/characters/yuna/expressions/laugh/01/sprite":"characters/yuna_laugh","assets/characters/yuna/expressions/lovestruck/01/sprite":"characters/yuna_lovestruck","assets/characters/yuna/expressions/messy_afterglow/01/sprite":"characters/yuna_messy_afterglow","assets/characters/yuna/expressions/normal/01/sprite":"characters/yuna_normal","assets/characters/yuna/expressions/oral_service/01/sprite":"characters/yuna_oral_service","assets/characters/yuna/expressions/pain/01/sprite":"characters/yuna_pain","assets/characters/yuna/expressions/pleading/01/sprite":"characters/yuna_pleading","assets/characters/yuna/expressions/pout/01/sprite":"characters/yuna_pout","assets/characters/yuna/expressions/relieved/01/sprite":"characters/yuna_relieved","assets/characters/yuna/expressions/sad/01/sprite":"characters/yuna_sad","assets/characters/yuna/expressions/scared/01/sprite":"characters/yuna_scared","assets/characters/yuna/expressions/scheming/01/sprite":"characters/yuna_scheming","assets/characters/yuna/expressions/scream/01/sprite":"characters/yuna_scream","assets/characters/yuna/expressions/seductive/01/sprite":"characters/yuna_seductive","assets/characters/yuna/expressions/shy/01/sprite":"characters/yuna_shy","assets/characters/yuna/expressions/smile/01/sprite":"characters/yuna_smile","assets/characters/yuna/expressions/smirk/01/sprite":"characters/yuna_smirk","assets/characters/yuna/expressions/sob/01/sprite":"characters/yuna_sob","assets/characters/yuna/expressions/soft_smile/01/sprite":"characters/yuna_soft_smile","assets/characters/yuna/expressions/surprised/01/sprite":"characters/yuna_surprised","assets/characters/yuna/expressions/suspicious/01/sprite":"characters/yuna_suspicious","assets/characters/yuna/expressions/sweat/01/sprite":"characters/yuna_sweat","assets/characters/yuna/expressions/tired/01/sprite":"characters/yuna_tired","assets/characters/yuna/expressions/touched/01/sprite":"characters/yuna_touched","assets/characters/yuna/expressions/undressed_shy/01/sprite":"characters/yuna_undressed_shy","assets/characters/yuna/expressions/very_shy/01/sprite":"characters/yuna_very_shy","assets/characters/yuna/expressions/worried/01/sprite":"characters/yuna_worried","assets/characters/yuna/outfits/date/expressions/bored/01/sprite":"characters/yuna_date_bored","assets/characters/yuna/outfits/date/expressions/normal/01/sprite":"characters/yuna_date_normal","assets/characters/yuna/outfits/date/expressions/sad/01/sprite":"characters/yuna_date_sad","assets/characters/yuna/outfits/date/expressions/shy/01/sprite":"characters/yuna_date_shy","assets/characters/yuna/outfits/date/expressions/smile/01/sprite":"characters/yuna_date_smile"};
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
                let animate = options.animate !== false && image.naturalWidth > 0 && image.parentElement
                    && typeof image.animate === 'function' && typeof image.cloneNode === 'function'
                    && image.ownerDocument?.createElement && window.CSS?.supports?.('mix-blend-mode', 'plus-lighter')
                    && !window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
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
                            await Promise.all([ghost.decode?.(), arrival.decode?.()]);
                            if (!current()) return false;
                            layer.appendChild(arrival); layer.appendChild(ghost);
                            image.parentElement.appendChild(layer);
                        } catch (_) {
                            layer?.remove();
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
                        try { await image.decode?.(); } catch (_) {}
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
                        try { await image.decode?.(); } catch (_) {}
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
