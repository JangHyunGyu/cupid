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
  var MEDIA_VERSIONS = {"background/dain_depression_event1":"7ee4549e9c01d86d8ceddab7","background/dain_hurt_event1":"03c309e91448e74d0f6524af","background/ending_alone":"be11653d9adf4a7b306b9f91","background/ending_bittersweet":"51eab37dfe08db46f30d72a8","background/ending_bittersweet_nurse":"3d0e4a5f18806c68e6be9014","background/ending_bittersweet_teacher":"39233a3911500d9e632dc38b","background/ending_confess_fail_dain":"787b7ab28af2ca24cc4a6fad","background/ending_confess_fail_seoyeon":"73831ccd142f8a97d9e6183a","background/ending_confess_fail_yuna":"e32c7f7a67d89e96a8edef1d","background/ending_friend":"3d8c2f3494301d31d369e80a","background/ending_good_dain":"209cb4651368bfa637e273d5","background/ending_good_nurse":"753c7a2e322c44c535de071b","background/ending_good_seoyeon":"9619f8ad7d14301d96d44b24","background/ending_good_teacher":"2e6dd0c2716bf020f13cb957","background/ending_good_yuna":"09c67542dd7e066422d1843e","background/ending_harem":"00fc46d686b1dc0881557efe","background/ending_mayhem":"eebc0728b58bcec16e108f4f","background/ending_perfect_dain":"750033d2213d9d0240fdf07a","background/ending_perfect_haeun":"9903cd5bf1aa4e4465484b0e","background/ending_perfect_nurse":"2efe79fb6a3ccaa6bfc42ec5","background/ending_perfect_seoyeon":"513a2715bac51c0b403407ed","background/ending_perfect_teacher":"fe8877f9d320958a916ec193","background/ending_perfect_yuna":"d474988bda580a4fa93e9bdb","background/ending_true_dain":"208f6d687989178581114801","background/ending_true_nurse":"4727b2407b6623fd802285f8","background/ending_true_seoyeon":"edda8686b4b472e5099da930","background/ending_true_teacher":"14adfae607797f5fccdf601c","background/ending_true_yuna":"81604f5804f639ca8f67601c","background/event_haeun_reputation":"8b2edb7e9c3b3b7c804362ba","background/event_haeun_trust":"080f10ba1c95792d44d0de72","background/event_seoyeon_succulent":"839c54f07fdfee9f1a6c6cf0","background/event_temptation_dain":"ea1f573b313ef7004b352a28","background/event_temptation_seoyeon":"139380703754eeefce44522d","background/event_temptation_yuna":"a3c33707fefd16c91df8d4cf","background/event_yuna_reading":"f9fe8aae463477345c4cd825","background/nurse_home_event1":"8fb762c5beb1d01ee83bc97b","characters/dain_active":"d097af367d4d577bb4304d19","characters/dain_aegyo":"5ce1ec8c6d9f8a08be5003d2","characters/dain_ahegao":"a25ed6ce769e02b756a08abe","characters/dain_angry":"357edb3db14338584320cc04","characters/dain_bikini":"675d1a52cea84edc24dddd5f","characters/dain_bored":"a8727ceec8bab386ce3640c3","characters/dain_choking":"7fc529abcf0f1419424f8c3e","characters/dain_climax":"fcf8b53f79cf33b7ae804a79","characters/dain_climax_02":"2f29fbcd0d9903dfa4f02971","characters/dain_climax_03":"339d0c0709e998721a29dd5d","characters/dain_climax_04":"85b06e2e732baafe2e37cab7","characters/dain_climax_05":"39a1df0d30e2ce6ee5f13f42","characters/dain_climax_06":"469c3cdf7c97cf0bd11e23a5","characters/dain_climax_07":"edfb47d25a708a29dd02c9d4","characters/dain_climax_08":"860da0bb59e098872151bff8","characters/dain_climax_09":"878a02e2e110ff2b079d4aed","characters/dain_climax_10":"a020f7d257fd48e5b5dd6751","characters/dain_climax_11":"3d21df160a35ccc12ee51b00","characters/dain_confused":"7d16890817ce4a28e7d294dd","characters/dain_cry":"2223f3060286f55937fa5ca5","characters/dain_date_angry":"b6978341cdfafb37ac082f27","characters/dain_date_laugh":"9baf58dd5b05f69591c13b08","characters/dain_date_normal":"af76babb7f66397ad16b50b9","characters/dain_date_sad":"39bde604ff804e7490f245db","characters/dain_date_shy":"4e2c6e9bf5b446dad249d774","characters/dain_date_sweat":"f6cfcb17fe2368b48e02e5f0","characters/dain_dazed":"759e72d20468ead7f0d585e9","characters/dain_dead":"92c823f8742d2dda33db24f9","characters/dain_disgusted":"94941edd86db167951f6ceb5","characters/dain_dry_smile":"ddd878e5aab568815d235048","characters/dain_dumbfounded":"a59877c03bd5c23e7d69459d","characters/dain_entranced":"b643ad66454c83be279c6d42","characters/dain_exhausted":"222427de29c43fdfe59cdf5b","characters/dain_fainted":"11b3f568d08ed7fcba782b23","characters/dain_firm":"28ada6ed1458b48842448927","characters/dain_flushed":"0f064b32e825cf976e42e1f7","characters/dain_furious":"a90b477764d72f3df84c3809","characters/dain_humiliated":"53ff5630c62bc897abf687f2","characters/dain_laugh":"7a9aa880a0de3f55d39851ce","characters/dain_normal":"b581f380f473ec52d5839de0","characters/dain_pain":"bd85a96f2e5500cef6fe8478","characters/dain_pleading":"5db85cc67c8ca0e7e19dbfab","characters/dain_pout":"05974e95f814a77c9aca266e","characters/dain_relieved":"9d99e1782d80830039cffe47","characters/dain_sad":"20fac0dae5b8edbb22b715e9","characters/dain_scared":"a2fac8a23c8616cd88da95fe","characters/dain_scream":"42d58a9a1d95e7537ae30122","characters/dain_shy":"2f1f894ebf76203d22ba7bc4","characters/dain_smile":"e32152ff66911af65852db0b","characters/dain_smirk":"a343fe6cbe27ccbddb0ef223","characters/dain_sob":"e99bcbf5bf33b8a412e3755c","characters/dain_soft_smile":"5d0836609354f5a178ee35d0","characters/dain_surprised":"3e62dd149c168ddd5375f402","characters/dain_sweat":"f6cd5cf68976bae1bc0f5c03","characters/dain_tired":"1747c41624f736a0f81ac14d","characters/dain_very_shy":"564b210dd7e529c2766b0196","characters/dain_worried":"f8c87cae4a5e745e2b4e6c4d","characters/haeun_aegyo":"376a6a6666d584331db45c4d","characters/haeun_ahegao":"4dcefc3ee1d1d5c0bd7e40c5","characters/haeun_angry":"036d66c1d532b41bfbe150a6","characters/haeun_bored":"962f5ae23afe5a4d4fad24f3","characters/haeun_choking":"ad02e88dcf1f365bc7785fbe","characters/haeun_climax":"752d5578483871c498e7f742","characters/haeun_climax_02":"c1ed58d4e371e4d2b33d8de0","characters/haeun_climax_03":"b18b8deee3439bc7807c832d","characters/haeun_climax_04":"e31fde1c7b90e6cbec120662","characters/haeun_climax_05":"d745d62d427997e4faf0daa0","characters/haeun_climax_06":"7e482403b81b1b435a05283a","characters/haeun_climax_07":"cd475ab3da06ae5429111095","characters/haeun_climax_08":"e3b4be940fa614523f92cbda","characters/haeun_confused":"72b3a06b6b3cd1fbaa78e699","characters/haeun_cry":"d66fb4449eaf81434f8ac6bd","characters/haeun_dazed":"d38b67fdf89b0d5e61abbc8e","characters/haeun_dead":"9e941c156cb408242c8107df","characters/haeun_disgusted":"ea6639685aca0597ed0bda14","characters/haeun_dry_smile":"e66f7045d26c3d33cbb23043","characters/haeun_dumbfounded":"bf70142a6cb0209a9242f0bb","characters/haeun_entranced":"d0422328f8e79fb6ec7a89dd","characters/haeun_exhausted":"eca6812a3d89a3fde4d724d0","characters/haeun_fainted":"32f52b05843bbfa63689bf7d","characters/haeun_firm":"9143dfe9bd50c92b8e53976f","characters/haeun_flushed":"3a8a6baab716ab6f9c50117b","characters/haeun_furious":"4802e22f024a86f984611380","characters/haeun_humiliated":"8af13d319a436c329cd9a5ef","characters/haeun_laugh":"0de014fe9d5186f2f72030dc","characters/haeun_normal":"715c327a7d9f9b37ecab4cbf","characters/haeun_pain":"7e18435ac8e496a947ad001d","characters/haeun_pleading":"ee79a210035735b0102229f8","characters/haeun_pout":"d5c66e37b6809c6b3bb210ec","characters/haeun_relieved":"73f1a4e6524dd6cf92938beb","characters/haeun_sad":"8b7e41918f95ddce204c52fe","characters/haeun_scared":"8dbab2a87b24c5e4a2998c28","characters/haeun_scream":"f24d4055a02bb622469d2a85","characters/haeun_shy":"12fc6e2416ec026b83716b1e","characters/haeun_smile":"92167b84b293e68fb449ddc7","characters/haeun_smirk":"8000ac7b3770aaca4d0aab70","characters/haeun_sob":"b53e5f6dfcc5ba89d684e6d0","characters/haeun_soft_smile":"9f3228447ecf5f24be33414c","characters/haeun_surprised":"6b0c1a831bfb541433705214","characters/haeun_tired":"5b1d608d93002b7181be1f30","characters/haeun_very_shy":"ddea14f72d4ef10a731cfcdb","characters/haeun_worried":"487429c99552251f8589760b","characters/junho_awkward":"be58d501f573405bc8d8c360","characters/junho_normal":"2398d761f42463a9aeac759b","characters/minsu_aegyo":"ec4b9bf67e746212e93409dd","characters/minsu_angry":"3d2df10acdf1afe1f5e68a07","characters/minsu_bored":"fefae1790b93299105d999fa","characters/minsu_choking":"b610bbfa072aa712a7770b81","characters/minsu_climax":"7a0238c956ba5067b1b0a7b7","characters/minsu_climax_02":"eb46687afd1c352692620518","characters/minsu_climax_03":"dad7afcf1b8af9857b8933d4","characters/minsu_climax_04":"07887208e171fe76253d43c7","characters/minsu_climax_05":"a6615fb650e4a3464139e92b","characters/minsu_climax_06":"ba77e65206707f1fadf355d8","characters/minsu_confused":"b5d4a16ac2e649879aebd9c0","characters/minsu_cry":"0ab774b105df0301144a3d6d","characters/minsu_dazed":"9b3f583712a5784fbb324288","characters/minsu_dead":"6f6fc9a99ba70fe174884e93","characters/minsu_disgusted":"26917707348de4aba1cb9772","characters/minsu_dry_smile":"3594235795f5cfcb055c3a26","characters/minsu_dumbfounded":"d7c1ac8b3bdcbca815aaa1ca","characters/minsu_entranced":"115e4c1c2ba289e1b686992a","characters/minsu_exhausted":"bebe0381a44ea4917b49b14a","characters/minsu_fainted":"c446fc80f238e457f038c6ab","characters/minsu_firm":"b103faa894d860501a87c6f7","characters/minsu_flushed":"57cf8c45ba0f06a5a272cee1","characters/minsu_furious":"ab8b0f84bee72b35d1be86f4","characters/minsu_humiliated":"1de6dfb3ae6caeeefb07eeb6","characters/minsu_laugh":"d2715ed3343d2878056c6f66","characters/minsu_normal":"dc62f8ac3331d897110f2402","characters/minsu_pain":"dd53dbb5f34ca947a7c3c379","characters/minsu_pleading":"16138c7761dd69290e15120c","characters/minsu_pout":"4b65f00d6005910beb6bfe21","characters/minsu_relieved":"e0c08c15825905483d8fce2f","characters/minsu_sad":"e45016d67f8e62953c284a90","characters/minsu_scared":"4b6a7bc26742f874bca16b7f","characters/minsu_scream":"6aa7fe9aea3bc2c9a7a155ba","characters/minsu_shy":"d640bedc5d6bc7b2ecbc7cd5","characters/minsu_smile":"a96a5a66a570ac979184316e","characters/minsu_smirk":"01c7a1d7e114f2ec136888ea","characters/minsu_sob":"6b6c5fcf8ca07aabc30b46fa","characters/minsu_soft_smile":"5c9cd8c294be82986db6c6f2","characters/minsu_surprised":"c45f203dab6e5196fdf01f2c","characters/minsu_tired":"6665ce62975edf2d9b90c488","characters/minsu_very_shy":"1f37002d276a35d0248ab7b8","characters/minsu_worried":"a58f7a64916b955b17e9f8b1","characters/nurse_aegyo":"9e01d47a022558d6ce0bcbd0","characters/nurse_ahegao":"77b46c3fabdded59695f9fce","characters/nurse_angry":"69fd99691bd904c753cfee9b","characters/nurse_bikini":"2d02c75d38dad14d33e150df","characters/nurse_bored":"27c20187bf0995db82513fbd","characters/nurse_choking":"b61903d6cf156912a719f785","characters/nurse_climax":"fbe8e98bedd8a91b21c5905b","characters/nurse_climax_02":"1be843cd1f47f95348bdadb4","characters/nurse_climax_03":"a62a31bbae0a17ce9540be84","characters/nurse_climax_04":"0871c167c4fca55a52a94f32","characters/nurse_climax_05":"9ee7d096fb9877e1888a7341","characters/nurse_climax_06":"b17bb1df9d4975ee0c41559c","characters/nurse_climax_07":"307f402d5e470cf977bbd9a9","characters/nurse_climax_08":"5000de1158e1b71ac78e4eea","characters/nurse_climax_09":"dbaffe5588dbbbdceecdf400","characters/nurse_confused":"bb3a2aa094432a8876fae50b","characters/nurse_cry":"54794ef30ae83508c297a2e6","characters/nurse_dazed":"249f81ac47e70abaf67cea60","characters/nurse_dead":"9b76c3311981e64060386fbc","characters/nurse_disgusted":"35e594ee703662220247de07","characters/nurse_dry_smile":"077add7e41e5196137292da8","characters/nurse_dumbfounded":"71dd51119da2d21c24dcb575","characters/nurse_entranced":"a6ae13f040bd360dcbdd1dfc","characters/nurse_exhausted":"b83c8511e59f64c4fc8bd93c","characters/nurse_fainted":"51270c040b794b145bbad2c1","characters/nurse_firm":"37fa41fc7131699a18b5a4f7","characters/nurse_flushed":"1887fed99852286db2b74ba6","characters/nurse_furious":"d622c7a08b0c2a164d894237","characters/nurse_home_angry":"3fa3960ecbc41784ea12a617","characters/nurse_home_normal":"da4c657d8c1b241af60b8617","characters/nurse_home_sad":"a899b3697c04f565d51827ba","characters/nurse_home_shy":"0060bfac12feee75ada28307","characters/nurse_home_smile":"7580ce804ef2ca48833e6c3d","characters/nurse_humiliated":"69b156582e3970bcd3e177ae","characters/nurse_laugh":"b6e97fb9358202944d9ba091","characters/nurse_normal":"af7e3a49ed833e4028169257","characters/nurse_pain":"08056d647b85e41e36bea8be","characters/nurse_pleading":"4f2851bc8d4de4944a6b25f9","characters/nurse_pout":"54ee36db1bed591db9606a85","characters/nurse_relieved":"61499a9679e7db69bff1d4d1","characters/nurse_sad":"2d008de71c751aa0f3ad223d","characters/nurse_scared":"8a540fd346b936c0ffbd1da3","characters/nurse_scream":"f75f3a4b7178bccc9d829d6b","characters/nurse_shy":"81a254da0e9c3cb0e8b69bb8","characters/nurse_smile":"c6203daf56fb4e7247fb8587","characters/nurse_smirk":"bc4cc5725371a719977e090e","characters/nurse_sob":"cfdf6cc5252d40e7d24aa41c","characters/nurse_soft_smile":"f23eacf1d65e77f9214c17af","characters/nurse_surprised":"53571de84572fa1342012d3f","characters/nurse_tired":"2f6d859d826c0f8cc0372626","characters/nurse_very_shy":"c2676b8e36cec9ceeeae2d3e","characters/nurse_worried":"05b6013ce85c75bea841e7d0","characters/seyoun_aegyo":"b3f8b17e81b1dc0b9620ba53","characters/seyoun_ahegao":"37abcb9fe8a66bb2ab7e096d","characters/seyoun_angry":"ed92850f6fae5eb3bd1154fd","characters/seyoun_back":"f8ceff82667d3a58833bb6c3","characters/seyoun_bikini":"811254edce80a69af5e46c3b","characters/seyoun_bored":"c9e16a4f28398416c4a70959","characters/seyoun_choking":"8ff976b6dd23b0061737fb97","characters/seyoun_climax":"36212cf6d62eaab4cb94565e","characters/seyoun_climax_02":"d4a122c9ca125b5583964a00","characters/seyoun_climax_03":"487c86ee944bafc49cf5c142","characters/seyoun_climax_04":"ac2ed6ef8c2037d13932b58a","characters/seyoun_climax_05":"5555ce8eec004fb6547186f7","characters/seyoun_climax_06":"572d0ca8253fa1b399befe3c","characters/seyoun_confused":"f348a080e84baadd61b783fb","characters/seyoun_cry":"53906fe3eef404a4a3d97f84","characters/seyoun_date_laugh":"95af610bc31fdbab15f5da5d","characters/seyoun_date_normal":"1b0c7cf60b342ef6e12ecc28","characters/seyoun_date_sad":"e90ee76253404043f0c26a98","characters/seyoun_date_shy":"ed9be826f95506b54ae673ae","characters/seyoun_date_worried":"025af8fb008bfe328390a3d1","characters/seyoun_dazed":"bb8276c5d44beded98d79813","characters/seyoun_dead":"bb368e15fa4afcbe4a026735","characters/seyoun_disgusted":"59417071fb23c81ceba615e0","characters/seyoun_dry_smile":"042b4fdbfd950a3e35e332c7","characters/seyoun_dumbfounded":"9ed63ac23568ef95328268e0","characters/seyoun_entranced":"28cd9f4b8b6d772dfae30d68","characters/seyoun_exhausted":"a96d454889da3e84d6889ed1","characters/seyoun_fainted":"8b82a5b663f85a1dcc025e3b","characters/seyoun_firm":"82f8d84d4084f6d45111d027","characters/seyoun_flushed":"923c4303325c6f1652b7b559","characters/seyoun_flushed_02":"6e2a56c309fb4b449c5b5d8b","characters/seyoun_flushed_03":"be2c7332fbc07c2ac612b5c3","characters/seyoun_flushed_04":"3335cdb2b672e8eecfa070ac","characters/seyoun_flushed_05":"ad738a235a02cc150e51f48c","characters/seyoun_flushed_06":"96b98b7169d08a1bf30dfcb5","characters/seyoun_furious":"928a74d528be58857e038bd6","characters/seyoun_humiliated":"c2c13dd9d758ff98904a95f3","characters/seyoun_laugh":"7baebbb1002f3a58db09c725","characters/seyoun_normal":"94e80079f11804610bdc4364","characters/seyoun_pain":"0f97facb0e6d8460fa599927","characters/seyoun_pleading":"e5d06bdaf21c51d05e832392","characters/seyoun_pout":"c3bb6584271e4262997abb31","characters/seyoun_relieved":"94480e3b347dce39d8fc3662","characters/seyoun_sad":"e0f1610e57537efde3f8e2e2","characters/seyoun_scared":"7f691313159bf15453eef326","characters/seyoun_scream":"0e2654e377500d03537f0389","characters/seyoun_shy":"8def1824ae32bbf6bb4b4d34","characters/seyoun_smile":"e2249c8272965a62c7558f81","characters/seyoun_smirk":"a15339e6ba0a999e979b087f","characters/seyoun_sob":"4fc26e7dae4864077bb79ec8","characters/seyoun_soft_smile":"44ed8245e17bf5185dcc92b2","characters/seyoun_surprised":"0d1e2a588109470423ba67bb","characters/seyoun_tired":"438bdbec3484a102ad66a0a0","characters/seyoun_very_shy":"3c74a3ba3e0864d47881d4ba","characters/seyoun_worried":"fa19e5ce8ce4d292ddd2ce09","characters/teacher_aegyo":"2203c982bd52480b13c74e94","characters/teacher_ahegao":"9f77eb2c3c6645a3a4aec085","characters/teacher_angry":"d121c6f9daa9076093c2044b","characters/teacher_bikini":"e28249e4880d2192538f472a","characters/teacher_bored":"e8837e324b4f7d3eebd9a2e2","characters/teacher_choking":"e39e7bc02454f91a8938ca9b","characters/teacher_climax":"6e1a7d27b6dc69a9b9c73a36","characters/teacher_climax_02":"f1ceae1472ecfe784afbabdb","characters/teacher_climax_03":"0aa7a635c09629d6a1148e33","characters/teacher_climax_04":"8b7f19693aaddacdf5a4a45a","characters/teacher_climax_05":"52b2c3cacbb4c597b61acdc3","characters/teacher_climax_06":"01a4d29f4706a58ce7a1671a","characters/teacher_climax_07":"25877a806c6023e51089298d","characters/teacher_climax_08":"fd0dc2c115d57cd8d4d5962b","characters/teacher_climax_09":"3a4aea349fa6f4e9116be4c4","characters/teacher_climax_10":"3364bbdd08f02fdf036d358a","characters/teacher_confused":"60457ffa23d580f9c9d34368","characters/teacher_cry":"9af25a1b60729329b0fbf49a","characters/teacher_dazed":"6dbcb649216b5a91e30d9b46","characters/teacher_dead":"424f76c3b4f91d83f9461035","characters/teacher_disgusted":"fd353eddea3a0b57b3aec61d","characters/teacher_dry_smile":"5f1282b15c186791e7967690","characters/teacher_dumbfounded":"f691c3acc07c719ad3718436","characters/teacher_entranced":"ba312cbbaf74ec25c1ec479f","characters/teacher_exhausted":"bf1613363358468bc6cbcd1d","characters/teacher_fainted":"f6f266bcb145e436776197c5","characters/teacher_firm":"fa8ed9e57b0ce74c02c9c694","characters/teacher_flushed":"3fcb2045b36470f3126e4259","characters/teacher_furious":"d58709a2f401de54aecdef56","characters/teacher_humiliated":"1d4fde0a9d93cabc909f727a","characters/teacher_laugh":"dbe0a32888d4635124921885","characters/teacher_normal":"4da6601a28b673e5c128f24d","characters/teacher_pain":"53331eb416063a47ce539b91","characters/teacher_pleading":"f98624bad65835a295bbd30a","characters/teacher_pout":"68d742236fceaa63aca40695","characters/teacher_relieved":"b3b014f48cce23fc651c5c9e","characters/teacher_sad":"d5451be77e02e36b8bf938bc","characters/teacher_scared":"118bd06df49e8a358c82294b","characters/teacher_scream":"91ef93be882ecd37130f4a38","characters/teacher_shy":"dba124bb540087f8b47b2dc0","characters/teacher_smile":"307d83f62fe21edb3dd035aa","characters/teacher_smirk":"c9e8d9c5433a978ad950dd84","characters/teacher_sob":"8f5ce497ec2646293b5dd4b1","characters/teacher_soft_smile":"2ad74a65e04da960a23cfc10","characters/teacher_surprised":"8f5adab471bb6bc01e9d322e","characters/teacher_tired":"36461535c89a9be5602a0f95","characters/teacher_very_shy":"97d1847e49384110d3e26e01","characters/teacher_worried":"dd0d3c069ee92e21f8f00ada","characters/yuna_aegyo":"bd7ff0aafdaf81c46a1196a2","characters/yuna_ahegao":"9de8d8beb154c4bd62d543ef","characters/yuna_angry":"50796833d2a54af42a1a2744","characters/yuna_bikini":"f7e257282a62e3a43bf17635","characters/yuna_bored":"cc5f255532e116c31a92c8a4","characters/yuna_choking":"149b52ff4d1ce4a24f6ae1ff","characters/yuna_climax":"ed55338105815c227432f653","characters/yuna_climax_02":"ab7fa77408ce3312971097c8","characters/yuna_climax_03":"e0218e626b3899ea9740cc0e","characters/yuna_climax_04":"0435f799c7692e5a24e53f90","characters/yuna_climax_05":"7affa2e31bd247673c607f91","characters/yuna_climax_06":"0d135f9b902d66fe43f7eeed","characters/yuna_climax_07":"73f264073a71b2be054e0167","characters/yuna_climax_08":"23830abb85ea6f5118ba7f26","characters/yuna_climax_09":"52f7c6e0221b1045d68dbf9a","characters/yuna_confused":"970eb60adabbcb58bc7f7b71","characters/yuna_cry":"b2d45a8f92cc9d946728acb5","characters/yuna_date_bored":"afa1ebd1c8d087bf8411ae23","characters/yuna_date_normal":"3742962e024154ce6b60ff2c","characters/yuna_date_sad":"e325c01de98eb92fb0ea1920","characters/yuna_date_shy":"13e8c9afcdf5a3115cfdd7ae","characters/yuna_date_smile":"47639a388cf8f3d2d8c254e9","characters/yuna_dazed":"d3e97c247fe9822465c658cd","characters/yuna_dead":"1bd1ac62cda4ac544ed2cf18","characters/yuna_disgusted":"70b1e3ec162a6068c4d30354","characters/yuna_dry_smile":"b0d36f8ec59959d2ff1c51f7","characters/yuna_dumbfounded":"e117619dc12d9445217131aa","characters/yuna_entranced":"a2a397b63db356a2b5dc69f2","characters/yuna_exhausted":"86600ad0a5dbb079ce5e1dd8","characters/yuna_fainted":"7631c4805a8c8f09e87c98b1","characters/yuna_firm":"0fb5d716535cfc222fcecc19","characters/yuna_flushed":"5e0090c17bae2f45e4dbdb9c","characters/yuna_furious":"c5e3b9247f41d751d250f846","characters/yuna_gallery_bikini_sexy_20260813":"7cfb2d83e446e8a8da023f1c","characters/yuna_humiliated":"164bfebd1c04ce43678f2bcd","characters/yuna_laugh":"afa61cd42ac15ef1c2e13ec1","characters/yuna_normal":"f011f4f2edcd260116b38623","characters/yuna_pain":"1b4b9dd18ee44fd1fe7469e1","characters/yuna_pleading":"80364eab8d739132cc2863e9","characters/yuna_pout":"681eaa3ad326554392c5da3b","characters/yuna_relieved":"22d99304fa3bdf919bd9a972","characters/yuna_sad":"1597a9eb75921ad541d6165d","characters/yuna_scared":"2b7760144bf752066c83c12e","characters/yuna_scream":"909bbddddf8836dd417754f0","characters/yuna_shy":"fffd1ddcfb1bade8d7a925da","characters/yuna_smile":"9bd1371847ea4fe1381b4f71","characters/yuna_smirk":"995a2b821a209e5fa023cb28","characters/yuna_sob":"5ccebe89b8e2e9e9109fb739","characters/yuna_soft_smile":"8a566ab99eb37f37e67bc40d","characters/yuna_surprised":"5fd85eae5414052adf63ce3e","characters/yuna_tired":"0a55262b859576c72d390b5b","characters/yuna_very_shy":"3b9e7eb0b5de3019459b9a3a","characters/yuna_worried":"a38eea31b8770d63f18af203"};
  var CHARACTER_ASSET_IDS = {"assets/characters/dain/expressions/active/01/sprite":"characters/dain_active","assets/characters/dain/expressions/aegyo/01/sprite":"characters/dain_aegyo","assets/characters/dain/expressions/ahegao/01/sprite":"characters/dain_ahegao","assets/characters/dain/expressions/angry/01/sprite":"characters/dain_angry","assets/characters/dain/expressions/bikini/01/sprite":"characters/dain_bikini","assets/characters/dain/expressions/bored/01/sprite":"characters/dain_bored","assets/characters/dain/expressions/choking/01/sprite":"characters/dain_choking","assets/characters/dain/expressions/climax/01/sprite":"characters/dain_climax","assets/characters/dain/expressions/climax/02/sprite":"characters/dain_climax_02","assets/characters/dain/expressions/climax/03/sprite":"characters/dain_climax_03","assets/characters/dain/expressions/climax/04/sprite":"characters/dain_climax_04","assets/characters/dain/expressions/climax/05/sprite":"characters/dain_climax_05","assets/characters/dain/expressions/climax/06/sprite":"characters/dain_climax_06","assets/characters/dain/expressions/climax/07/sprite":"characters/dain_climax_07","assets/characters/dain/expressions/climax/08/sprite":"characters/dain_climax_08","assets/characters/dain/expressions/climax/09/sprite":"characters/dain_climax_09","assets/characters/dain/expressions/climax/10/sprite":"characters/dain_climax_10","assets/characters/dain/expressions/climax/11/sprite":"characters/dain_climax_11","assets/characters/dain/expressions/confused/01/sprite":"characters/dain_confused","assets/characters/dain/expressions/cry/01/sprite":"characters/dain_cry","assets/characters/dain/expressions/dazed/01/sprite":"characters/dain_dazed","assets/characters/dain/expressions/dead/01/sprite":"characters/dain_dead","assets/characters/dain/expressions/disgusted/01/sprite":"characters/dain_disgusted","assets/characters/dain/expressions/dry_smile/01/sprite":"characters/dain_dry_smile","assets/characters/dain/expressions/dumbfounded/01/sprite":"characters/dain_dumbfounded","assets/characters/dain/expressions/entranced/01/sprite":"characters/dain_entranced","assets/characters/dain/expressions/exhausted/01/sprite":"characters/dain_exhausted","assets/characters/dain/expressions/fainted/01/sprite":"characters/dain_fainted","assets/characters/dain/expressions/firm/01/sprite":"characters/dain_firm","assets/characters/dain/expressions/flushed/01/sprite":"characters/dain_flushed","assets/characters/dain/expressions/furious/01/sprite":"characters/dain_furious","assets/characters/dain/expressions/humiliated/01/sprite":"characters/dain_humiliated","assets/characters/dain/expressions/laugh/01/sprite":"characters/dain_laugh","assets/characters/dain/expressions/normal/01/sprite":"characters/dain_normal","assets/characters/dain/expressions/pain/01/sprite":"characters/dain_pain","assets/characters/dain/expressions/pleading/01/sprite":"characters/dain_pleading","assets/characters/dain/expressions/pout/01/sprite":"characters/dain_pout","assets/characters/dain/expressions/relieved/01/sprite":"characters/dain_relieved","assets/characters/dain/expressions/sad/01/sprite":"characters/dain_sad","assets/characters/dain/expressions/scared/01/sprite":"characters/dain_scared","assets/characters/dain/expressions/scream/01/sprite":"characters/dain_scream","assets/characters/dain/expressions/shy/01/sprite":"characters/dain_shy","assets/characters/dain/expressions/smile/01/sprite":"characters/dain_smile","assets/characters/dain/expressions/smirk/01/sprite":"characters/dain_smirk","assets/characters/dain/expressions/sob/01/sprite":"characters/dain_sob","assets/characters/dain/expressions/soft_smile/01/sprite":"characters/dain_soft_smile","assets/characters/dain/expressions/surprised/01/sprite":"characters/dain_surprised","assets/characters/dain/expressions/sweat/01/sprite":"characters/dain_sweat","assets/characters/dain/expressions/tired/01/sprite":"characters/dain_tired","assets/characters/dain/expressions/very_shy/01/sprite":"characters/dain_very_shy","assets/characters/dain/expressions/worried/01/sprite":"characters/dain_worried","assets/characters/dain/outfits/date/expressions/angry/01/sprite":"characters/dain_date_angry","assets/characters/dain/outfits/date/expressions/laugh/01/sprite":"characters/dain_date_laugh","assets/characters/dain/outfits/date/expressions/normal/01/sprite":"characters/dain_date_normal","assets/characters/dain/outfits/date/expressions/sad/01/sprite":"characters/dain_date_sad","assets/characters/dain/outfits/date/expressions/shy/01/sprite":"characters/dain_date_shy","assets/characters/dain/outfits/date/expressions/sweat/01/sprite":"characters/dain_date_sweat","assets/characters/haeun/expressions/aegyo/01/sprite":"characters/haeun_aegyo","assets/characters/haeun/expressions/ahegao/01/sprite":"characters/haeun_ahegao","assets/characters/haeun/expressions/angry/01/sprite":"characters/haeun_angry","assets/characters/haeun/expressions/bored/01/sprite":"characters/haeun_bored","assets/characters/haeun/expressions/choking/01/sprite":"characters/haeun_choking","assets/characters/haeun/expressions/climax/01/sprite":"characters/haeun_climax","assets/characters/haeun/expressions/climax/02/sprite":"characters/haeun_climax_02","assets/characters/haeun/expressions/climax/03/sprite":"characters/haeun_climax_03","assets/characters/haeun/expressions/climax/04/sprite":"characters/haeun_climax_04","assets/characters/haeun/expressions/climax/05/sprite":"characters/haeun_climax_05","assets/characters/haeun/expressions/climax/06/sprite":"characters/haeun_climax_06","assets/characters/haeun/expressions/climax/07/sprite":"characters/haeun_climax_07","assets/characters/haeun/expressions/climax/08/sprite":"characters/haeun_climax_08","assets/characters/haeun/expressions/confused/01/sprite":"characters/haeun_confused","assets/characters/haeun/expressions/cry/01/sprite":"characters/haeun_cry","assets/characters/haeun/expressions/dazed/01/sprite":"characters/haeun_dazed","assets/characters/haeun/expressions/dead/01/sprite":"characters/haeun_dead","assets/characters/haeun/expressions/disgusted/01/sprite":"characters/haeun_disgusted","assets/characters/haeun/expressions/dry_smile/01/sprite":"characters/haeun_dry_smile","assets/characters/haeun/expressions/dumbfounded/01/sprite":"characters/haeun_dumbfounded","assets/characters/haeun/expressions/entranced/01/sprite":"characters/haeun_entranced","assets/characters/haeun/expressions/exhausted/01/sprite":"characters/haeun_exhausted","assets/characters/haeun/expressions/fainted/01/sprite":"characters/haeun_fainted","assets/characters/haeun/expressions/firm/01/sprite":"characters/haeun_firm","assets/characters/haeun/expressions/flushed/01/sprite":"characters/haeun_flushed","assets/characters/haeun/expressions/furious/01/sprite":"characters/haeun_furious","assets/characters/haeun/expressions/humiliated/01/sprite":"characters/haeun_humiliated","assets/characters/haeun/expressions/laugh/01/sprite":"characters/haeun_laugh","assets/characters/haeun/expressions/normal/01/sprite":"characters/haeun_normal","assets/characters/haeun/expressions/pain/01/sprite":"characters/haeun_pain","assets/characters/haeun/expressions/pleading/01/sprite":"characters/haeun_pleading","assets/characters/haeun/expressions/pout/01/sprite":"characters/haeun_pout","assets/characters/haeun/expressions/relieved/01/sprite":"characters/haeun_relieved","assets/characters/haeun/expressions/sad/01/sprite":"characters/haeun_sad","assets/characters/haeun/expressions/scared/01/sprite":"characters/haeun_scared","assets/characters/haeun/expressions/scream/01/sprite":"characters/haeun_scream","assets/characters/haeun/expressions/shy/01/sprite":"characters/haeun_shy","assets/characters/haeun/expressions/smile/01/sprite":"characters/haeun_smile","assets/characters/haeun/expressions/smirk/01/sprite":"characters/haeun_smirk","assets/characters/haeun/expressions/sob/01/sprite":"characters/haeun_sob","assets/characters/haeun/expressions/soft_smile/01/sprite":"characters/haeun_soft_smile","assets/characters/haeun/expressions/surprised/01/sprite":"characters/haeun_surprised","assets/characters/haeun/expressions/tired/01/sprite":"characters/haeun_tired","assets/characters/haeun/expressions/very_shy/01/sprite":"characters/haeun_very_shy","assets/characters/haeun/expressions/worried/01/sprite":"characters/haeun_worried","assets/characters/junho/expressions/awkward/01/sprite":"characters/junho_awkward","assets/characters/junho/expressions/normal/01/sprite":"characters/junho_normal","assets/characters/minsu/expressions/aegyo/01/sprite":"characters/minsu_aegyo","assets/characters/minsu/expressions/angry/01/sprite":"characters/minsu_angry","assets/characters/minsu/expressions/bored/01/sprite":"characters/minsu_bored","assets/characters/minsu/expressions/choking/01/sprite":"characters/minsu_choking","assets/characters/minsu/expressions/climax/01/sprite":"characters/minsu_climax","assets/characters/minsu/expressions/climax/02/sprite":"characters/minsu_climax_02","assets/characters/minsu/expressions/climax/03/sprite":"characters/minsu_climax_03","assets/characters/minsu/expressions/climax/04/sprite":"characters/minsu_climax_04","assets/characters/minsu/expressions/climax/05/sprite":"characters/minsu_climax_05","assets/characters/minsu/expressions/climax/06/sprite":"characters/minsu_climax_06","assets/characters/minsu/expressions/confused/01/sprite":"characters/minsu_confused","assets/characters/minsu/expressions/cry/01/sprite":"characters/minsu_cry","assets/characters/minsu/expressions/dazed/01/sprite":"characters/minsu_dazed","assets/characters/minsu/expressions/dead/01/sprite":"characters/minsu_dead","assets/characters/minsu/expressions/disgusted/01/sprite":"characters/minsu_disgusted","assets/characters/minsu/expressions/dry_smile/01/sprite":"characters/minsu_dry_smile","assets/characters/minsu/expressions/dumbfounded/01/sprite":"characters/minsu_dumbfounded","assets/characters/minsu/expressions/entranced/01/sprite":"characters/minsu_entranced","assets/characters/minsu/expressions/exhausted/01/sprite":"characters/minsu_exhausted","assets/characters/minsu/expressions/fainted/01/sprite":"characters/minsu_fainted","assets/characters/minsu/expressions/firm/01/sprite":"characters/minsu_firm","assets/characters/minsu/expressions/flushed/01/sprite":"characters/minsu_flushed","assets/characters/minsu/expressions/furious/01/sprite":"characters/minsu_furious","assets/characters/minsu/expressions/humiliated/01/sprite":"characters/minsu_humiliated","assets/characters/minsu/expressions/laugh/01/sprite":"characters/minsu_laugh","assets/characters/minsu/expressions/normal/01/sprite":"characters/minsu_normal","assets/characters/minsu/expressions/pain/01/sprite":"characters/minsu_pain","assets/characters/minsu/expressions/pleading/01/sprite":"characters/minsu_pleading","assets/characters/minsu/expressions/pout/01/sprite":"characters/minsu_pout","assets/characters/minsu/expressions/relieved/01/sprite":"characters/minsu_relieved","assets/characters/minsu/expressions/sad/01/sprite":"characters/minsu_sad","assets/characters/minsu/expressions/scared/01/sprite":"characters/minsu_scared","assets/characters/minsu/expressions/scream/01/sprite":"characters/minsu_scream","assets/characters/minsu/expressions/shy/01/sprite":"characters/minsu_shy","assets/characters/minsu/expressions/smile/01/sprite":"characters/minsu_smile","assets/characters/minsu/expressions/smirk/01/sprite":"characters/minsu_smirk","assets/characters/minsu/expressions/sob/01/sprite":"characters/minsu_sob","assets/characters/minsu/expressions/soft_smile/01/sprite":"characters/minsu_soft_smile","assets/characters/minsu/expressions/surprised/01/sprite":"characters/minsu_surprised","assets/characters/minsu/expressions/tired/01/sprite":"characters/minsu_tired","assets/characters/minsu/expressions/very_shy/01/sprite":"characters/minsu_very_shy","assets/characters/minsu/expressions/worried/01/sprite":"characters/minsu_worried","assets/characters/nurse/expressions/aegyo/01/sprite":"characters/nurse_aegyo","assets/characters/nurse/expressions/ahegao/01/sprite":"characters/nurse_ahegao","assets/characters/nurse/expressions/angry/01/sprite":"characters/nurse_angry","assets/characters/nurse/expressions/bikini/01/sprite":"characters/nurse_bikini","assets/characters/nurse/expressions/bored/01/sprite":"characters/nurse_bored","assets/characters/nurse/expressions/choking/01/sprite":"characters/nurse_choking","assets/characters/nurse/expressions/climax/01/sprite":"characters/nurse_climax","assets/characters/nurse/expressions/climax/02/sprite":"characters/nurse_climax_02","assets/characters/nurse/expressions/climax/03/sprite":"characters/nurse_climax_03","assets/characters/nurse/expressions/climax/04/sprite":"characters/nurse_climax_04","assets/characters/nurse/expressions/climax/05/sprite":"characters/nurse_climax_05","assets/characters/nurse/expressions/climax/06/sprite":"characters/nurse_climax_06","assets/characters/nurse/expressions/climax/07/sprite":"characters/nurse_climax_07","assets/characters/nurse/expressions/climax/08/sprite":"characters/nurse_climax_08","assets/characters/nurse/expressions/climax/09/sprite":"characters/nurse_climax_09","assets/characters/nurse/expressions/confused/01/sprite":"characters/nurse_confused","assets/characters/nurse/expressions/cry/01/sprite":"characters/nurse_cry","assets/characters/nurse/expressions/dazed/01/sprite":"characters/nurse_dazed","assets/characters/nurse/expressions/dead/01/sprite":"characters/nurse_dead","assets/characters/nurse/expressions/disgusted/01/sprite":"characters/nurse_disgusted","assets/characters/nurse/expressions/dry_smile/01/sprite":"characters/nurse_dry_smile","assets/characters/nurse/expressions/dumbfounded/01/sprite":"characters/nurse_dumbfounded","assets/characters/nurse/expressions/entranced/01/sprite":"characters/nurse_entranced","assets/characters/nurse/expressions/exhausted/01/sprite":"characters/nurse_exhausted","assets/characters/nurse/expressions/fainted/01/sprite":"characters/nurse_fainted","assets/characters/nurse/expressions/firm/01/sprite":"characters/nurse_firm","assets/characters/nurse/expressions/flushed/01/sprite":"characters/nurse_flushed","assets/characters/nurse/expressions/furious/01/sprite":"characters/nurse_furious","assets/characters/nurse/expressions/humiliated/01/sprite":"characters/nurse_humiliated","assets/characters/nurse/expressions/laugh/01/sprite":"characters/nurse_laugh","assets/characters/nurse/expressions/normal/01/sprite":"characters/nurse_normal","assets/characters/nurse/expressions/pain/01/sprite":"characters/nurse_pain","assets/characters/nurse/expressions/pleading/01/sprite":"characters/nurse_pleading","assets/characters/nurse/expressions/pout/01/sprite":"characters/nurse_pout","assets/characters/nurse/expressions/relieved/01/sprite":"characters/nurse_relieved","assets/characters/nurse/expressions/sad/01/sprite":"characters/nurse_sad","assets/characters/nurse/expressions/scared/01/sprite":"characters/nurse_scared","assets/characters/nurse/expressions/scream/01/sprite":"characters/nurse_scream","assets/characters/nurse/expressions/shy/01/sprite":"characters/nurse_shy","assets/characters/nurse/expressions/smile/01/sprite":"characters/nurse_smile","assets/characters/nurse/expressions/smirk/01/sprite":"characters/nurse_smirk","assets/characters/nurse/expressions/sob/01/sprite":"characters/nurse_sob","assets/characters/nurse/expressions/soft_smile/01/sprite":"characters/nurse_soft_smile","assets/characters/nurse/expressions/surprised/01/sprite":"characters/nurse_surprised","assets/characters/nurse/expressions/tired/01/sprite":"characters/nurse_tired","assets/characters/nurse/expressions/very_shy/01/sprite":"characters/nurse_very_shy","assets/characters/nurse/expressions/worried/01/sprite":"characters/nurse_worried","assets/characters/nurse/outfits/home/expressions/angry/01/sprite":"characters/nurse_home_angry","assets/characters/nurse/outfits/home/expressions/normal/01/sprite":"characters/nurse_home_normal","assets/characters/nurse/outfits/home/expressions/sad/01/sprite":"characters/nurse_home_sad","assets/characters/nurse/outfits/home/expressions/shy/01/sprite":"characters/nurse_home_shy","assets/characters/nurse/outfits/home/expressions/smile/01/sprite":"characters/nurse_home_smile","assets/characters/seoyeon/expressions/aegyo/01/sprite":"characters/seyoun_aegyo","assets/characters/seoyeon/expressions/ahegao/01/sprite":"characters/seyoun_ahegao","assets/characters/seoyeon/expressions/angry/01/sprite":"characters/seyoun_angry","assets/characters/seoyeon/expressions/back/01/sprite":"characters/seyoun_back","assets/characters/seoyeon/expressions/bikini/01/sprite":"characters/seyoun_bikini","assets/characters/seoyeon/expressions/bored/01/sprite":"characters/seyoun_bored","assets/characters/seoyeon/expressions/choking/01/sprite":"characters/seyoun_choking","assets/characters/seoyeon/expressions/climax/01/sprite":"characters/seyoun_climax","assets/characters/seoyeon/expressions/climax/02/sprite":"characters/seyoun_climax_02","assets/characters/seoyeon/expressions/climax/03/sprite":"characters/seyoun_climax_03","assets/characters/seoyeon/expressions/climax/04/sprite":"characters/seyoun_climax_04","assets/characters/seoyeon/expressions/climax/05/sprite":"characters/seyoun_climax_05","assets/characters/seoyeon/expressions/climax/06/sprite":"characters/seyoun_climax_06","assets/characters/seoyeon/expressions/confused/01/sprite":"characters/seyoun_confused","assets/characters/seoyeon/expressions/cry/01/sprite":"characters/seyoun_cry","assets/characters/seoyeon/expressions/dazed/01/sprite":"characters/seyoun_dazed","assets/characters/seoyeon/expressions/dead/01/sprite":"characters/seyoun_dead","assets/characters/seoyeon/expressions/disgusted/01/sprite":"characters/seyoun_disgusted","assets/characters/seoyeon/expressions/dry_smile/01/sprite":"characters/seyoun_dry_smile","assets/characters/seoyeon/expressions/dumbfounded/01/sprite":"characters/seyoun_dumbfounded","assets/characters/seoyeon/expressions/entranced/01/sprite":"characters/seyoun_entranced","assets/characters/seoyeon/expressions/exhausted/01/sprite":"characters/seyoun_exhausted","assets/characters/seoyeon/expressions/fainted/01/sprite":"characters/seyoun_fainted","assets/characters/seoyeon/expressions/firm/01/sprite":"characters/seyoun_firm","assets/characters/seoyeon/expressions/flushed/01/sprite":"characters/seyoun_flushed","assets/characters/seoyeon/expressions/flushed/02/sprite":"characters/seyoun_flushed_02","assets/characters/seoyeon/expressions/flushed/03/sprite":"characters/seyoun_flushed_03","assets/characters/seoyeon/expressions/flushed/04/sprite":"characters/seyoun_flushed_04","assets/characters/seoyeon/expressions/flushed/05/sprite":"characters/seyoun_flushed_05","assets/characters/seoyeon/expressions/flushed/06/sprite":"characters/seyoun_flushed_06","assets/characters/seoyeon/expressions/furious/01/sprite":"characters/seyoun_furious","assets/characters/seoyeon/expressions/humiliated/01/sprite":"characters/seyoun_humiliated","assets/characters/seoyeon/expressions/laugh/01/sprite":"characters/seyoun_laugh","assets/characters/seoyeon/expressions/normal/01/sprite":"characters/seyoun_normal","assets/characters/seoyeon/expressions/pain/01/sprite":"characters/seyoun_pain","assets/characters/seoyeon/expressions/pleading/01/sprite":"characters/seyoun_pleading","assets/characters/seoyeon/expressions/pout/01/sprite":"characters/seyoun_pout","assets/characters/seoyeon/expressions/relieved/01/sprite":"characters/seyoun_relieved","assets/characters/seoyeon/expressions/sad/01/sprite":"characters/seyoun_sad","assets/characters/seoyeon/expressions/scared/01/sprite":"characters/seyoun_scared","assets/characters/seoyeon/expressions/scream/01/sprite":"characters/seyoun_scream","assets/characters/seoyeon/expressions/shy/01/sprite":"characters/seyoun_shy","assets/characters/seoyeon/expressions/smile/01/sprite":"characters/seyoun_smile","assets/characters/seoyeon/expressions/smirk/01/sprite":"characters/seyoun_smirk","assets/characters/seoyeon/expressions/sob/01/sprite":"characters/seyoun_sob","assets/characters/seoyeon/expressions/soft_smile/01/sprite":"characters/seyoun_soft_smile","assets/characters/seoyeon/expressions/surprised/01/sprite":"characters/seyoun_surprised","assets/characters/seoyeon/expressions/tired/01/sprite":"characters/seyoun_tired","assets/characters/seoyeon/expressions/very_shy/01/sprite":"characters/seyoun_very_shy","assets/characters/seoyeon/expressions/worried/01/sprite":"characters/seyoun_worried","assets/characters/seoyeon/outfits/date/expressions/laugh/01/sprite":"characters/seyoun_date_laugh","assets/characters/seoyeon/outfits/date/expressions/normal/01/sprite":"characters/seyoun_date_normal","assets/characters/seoyeon/outfits/date/expressions/sad/01/sprite":"characters/seyoun_date_sad","assets/characters/seoyeon/outfits/date/expressions/shy/01/sprite":"characters/seyoun_date_shy","assets/characters/seoyeon/outfits/date/expressions/worried/01/sprite":"characters/seyoun_date_worried","assets/characters/teacher/expressions/aegyo/01/sprite":"characters/teacher_aegyo","assets/characters/teacher/expressions/ahegao/01/sprite":"characters/teacher_ahegao","assets/characters/teacher/expressions/angry/01/sprite":"characters/teacher_angry","assets/characters/teacher/expressions/bikini/01/sprite":"characters/teacher_bikini","assets/characters/teacher/expressions/bored/01/sprite":"characters/teacher_bored","assets/characters/teacher/expressions/choking/01/sprite":"characters/teacher_choking","assets/characters/teacher/expressions/climax/01/sprite":"characters/teacher_climax","assets/characters/teacher/expressions/climax/02/sprite":"characters/teacher_climax_02","assets/characters/teacher/expressions/climax/03/sprite":"characters/teacher_climax_03","assets/characters/teacher/expressions/climax/04/sprite":"characters/teacher_climax_04","assets/characters/teacher/expressions/climax/05/sprite":"characters/teacher_climax_05","assets/characters/teacher/expressions/climax/06/sprite":"characters/teacher_climax_06","assets/characters/teacher/expressions/climax/07/sprite":"characters/teacher_climax_07","assets/characters/teacher/expressions/climax/08/sprite":"characters/teacher_climax_08","assets/characters/teacher/expressions/climax/09/sprite":"characters/teacher_climax_09","assets/characters/teacher/expressions/climax/10/sprite":"characters/teacher_climax_10","assets/characters/teacher/expressions/confused/01/sprite":"characters/teacher_confused","assets/characters/teacher/expressions/cry/01/sprite":"characters/teacher_cry","assets/characters/teacher/expressions/dazed/01/sprite":"characters/teacher_dazed","assets/characters/teacher/expressions/dead/01/sprite":"characters/teacher_dead","assets/characters/teacher/expressions/disgusted/01/sprite":"characters/teacher_disgusted","assets/characters/teacher/expressions/dry_smile/01/sprite":"characters/teacher_dry_smile","assets/characters/teacher/expressions/dumbfounded/01/sprite":"characters/teacher_dumbfounded","assets/characters/teacher/expressions/entranced/01/sprite":"characters/teacher_entranced","assets/characters/teacher/expressions/exhausted/01/sprite":"characters/teacher_exhausted","assets/characters/teacher/expressions/fainted/01/sprite":"characters/teacher_fainted","assets/characters/teacher/expressions/firm/01/sprite":"characters/teacher_firm","assets/characters/teacher/expressions/flushed/01/sprite":"characters/teacher_flushed","assets/characters/teacher/expressions/furious/01/sprite":"characters/teacher_furious","assets/characters/teacher/expressions/humiliated/01/sprite":"characters/teacher_humiliated","assets/characters/teacher/expressions/laugh/01/sprite":"characters/teacher_laugh","assets/characters/teacher/expressions/normal/01/sprite":"characters/teacher_normal","assets/characters/teacher/expressions/pain/01/sprite":"characters/teacher_pain","assets/characters/teacher/expressions/pleading/01/sprite":"characters/teacher_pleading","assets/characters/teacher/expressions/pout/01/sprite":"characters/teacher_pout","assets/characters/teacher/expressions/relieved/01/sprite":"characters/teacher_relieved","assets/characters/teacher/expressions/sad/01/sprite":"characters/teacher_sad","assets/characters/teacher/expressions/scared/01/sprite":"characters/teacher_scared","assets/characters/teacher/expressions/scream/01/sprite":"characters/teacher_scream","assets/characters/teacher/expressions/shy/01/sprite":"characters/teacher_shy","assets/characters/teacher/expressions/smile/01/sprite":"characters/teacher_smile","assets/characters/teacher/expressions/smirk/01/sprite":"characters/teacher_smirk","assets/characters/teacher/expressions/sob/01/sprite":"characters/teacher_sob","assets/characters/teacher/expressions/soft_smile/01/sprite":"characters/teacher_soft_smile","assets/characters/teacher/expressions/surprised/01/sprite":"characters/teacher_surprised","assets/characters/teacher/expressions/tired/01/sprite":"characters/teacher_tired","assets/characters/teacher/expressions/very_shy/01/sprite":"characters/teacher_very_shy","assets/characters/teacher/expressions/worried/01/sprite":"characters/teacher_worried","assets/characters/yuna/expressions/aegyo/01/sprite":"characters/yuna_aegyo","assets/characters/yuna/expressions/ahegao/01/sprite":"characters/yuna_ahegao","assets/characters/yuna/expressions/angry/01/sprite":"characters/yuna_angry","assets/characters/yuna/expressions/bikini/01/sprite":"characters/yuna_bikini","assets/characters/yuna/expressions/bored/01/sprite":"characters/yuna_bored","assets/characters/yuna/expressions/choking/01/sprite":"characters/yuna_choking","assets/characters/yuna/expressions/climax/01/sprite":"characters/yuna_climax","assets/characters/yuna/expressions/climax/02/sprite":"characters/yuna_climax_02","assets/characters/yuna/expressions/climax/03/sprite":"characters/yuna_climax_03","assets/characters/yuna/expressions/climax/04/sprite":"characters/yuna_climax_04","assets/characters/yuna/expressions/climax/05/sprite":"characters/yuna_climax_05","assets/characters/yuna/expressions/climax/06/sprite":"characters/yuna_climax_06","assets/characters/yuna/expressions/climax/07/sprite":"characters/yuna_climax_07","assets/characters/yuna/expressions/climax/08/sprite":"characters/yuna_climax_08","assets/characters/yuna/expressions/climax/09/sprite":"characters/yuna_climax_09","assets/characters/yuna/expressions/confused/01/sprite":"characters/yuna_confused","assets/characters/yuna/expressions/cry/01/sprite":"characters/yuna_cry","assets/characters/yuna/expressions/dazed/01/sprite":"characters/yuna_dazed","assets/characters/yuna/expressions/dead/01/sprite":"characters/yuna_dead","assets/characters/yuna/expressions/disgusted/01/sprite":"characters/yuna_disgusted","assets/characters/yuna/expressions/dry_smile/01/sprite":"characters/yuna_dry_smile","assets/characters/yuna/expressions/dumbfounded/01/sprite":"characters/yuna_dumbfounded","assets/characters/yuna/expressions/entranced/01/sprite":"characters/yuna_entranced","assets/characters/yuna/expressions/exhausted/01/sprite":"characters/yuna_exhausted","assets/characters/yuna/expressions/fainted/01/sprite":"characters/yuna_fainted","assets/characters/yuna/expressions/firm/01/sprite":"characters/yuna_firm","assets/characters/yuna/expressions/flushed/01/sprite":"characters/yuna_flushed","assets/characters/yuna/expressions/furious/01/sprite":"characters/yuna_furious","assets/characters/yuna/expressions/gallery_bikini_sexy_20260813/01/sprite":"characters/yuna_gallery_bikini_sexy_20260813","assets/characters/yuna/expressions/humiliated/01/sprite":"characters/yuna_humiliated","assets/characters/yuna/expressions/laugh/01/sprite":"characters/yuna_laugh","assets/characters/yuna/expressions/normal/01/sprite":"characters/yuna_normal","assets/characters/yuna/expressions/pain/01/sprite":"characters/yuna_pain","assets/characters/yuna/expressions/pleading/01/sprite":"characters/yuna_pleading","assets/characters/yuna/expressions/pout/01/sprite":"characters/yuna_pout","assets/characters/yuna/expressions/relieved/01/sprite":"characters/yuna_relieved","assets/characters/yuna/expressions/sad/01/sprite":"characters/yuna_sad","assets/characters/yuna/expressions/scared/01/sprite":"characters/yuna_scared","assets/characters/yuna/expressions/scream/01/sprite":"characters/yuna_scream","assets/characters/yuna/expressions/shy/01/sprite":"characters/yuna_shy","assets/characters/yuna/expressions/smile/01/sprite":"characters/yuna_smile","assets/characters/yuna/expressions/smirk/01/sprite":"characters/yuna_smirk","assets/characters/yuna/expressions/sob/01/sprite":"characters/yuna_sob","assets/characters/yuna/expressions/soft_smile/01/sprite":"characters/yuna_soft_smile","assets/characters/yuna/expressions/surprised/01/sprite":"characters/yuna_surprised","assets/characters/yuna/expressions/tired/01/sprite":"characters/yuna_tired","assets/characters/yuna/expressions/very_shy/01/sprite":"characters/yuna_very_shy","assets/characters/yuna/expressions/worried/01/sprite":"characters/yuna_worried","assets/characters/yuna/outfits/date/expressions/bored/01/sprite":"characters/yuna_date_bored","assets/characters/yuna/outfits/date/expressions/normal/01/sprite":"characters/yuna_date_normal","assets/characters/yuna/outfits/date/expressions/sad/01/sprite":"characters/yuna_date_sad","assets/characters/yuna/outfits/date/expressions/shy/01/sprite":"characters/yuna_date_shy","assets/characters/yuna/outfits/date/expressions/smile/01/sprite":"characters/yuna_date_smile"};
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
