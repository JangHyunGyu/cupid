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
  var MEDIA_VERSIONS = {"background/dain_depression_event1":"7ee4549e9c01d86d8ceddab7","background/dain_hurt_event1":"03c309e91448e74d0f6524af","background/ending_alone":"be11653d9adf4a7b306b9f91","background/ending_bittersweet":"51eab37dfe08db46f30d72a8","background/ending_bittersweet_nurse":"3d0e4a5f18806c68e6be9014","background/ending_bittersweet_teacher":"39233a3911500d9e632dc38b","background/ending_confess_fail_dain":"787b7ab28af2ca24cc4a6fad","background/ending_confess_fail_seoyeon":"73831ccd142f8a97d9e6183a","background/ending_confess_fail_yuna":"e32c7f7a67d89e96a8edef1d","background/ending_friend":"3d8c2f3494301d31d369e80a","background/ending_good_dain":"209cb4651368bfa637e273d5","background/ending_good_nurse":"753c7a2e322c44c535de071b","background/ending_good_seoyeon":"9619f8ad7d14301d96d44b24","background/ending_good_teacher":"2e6dd0c2716bf020f13cb957","background/ending_good_yuna":"09c67542dd7e066422d1843e","background/ending_harem":"00fc46d686b1dc0881557efe","background/ending_mayhem":"eebc0728b58bcec16e108f4f","background/ending_perfect_dain":"750033d2213d9d0240fdf07a","background/ending_perfect_haeun":"9903cd5bf1aa4e4465484b0e","background/ending_perfect_nurse":"2efe79fb6a3ccaa6bfc42ec5","background/ending_perfect_seoyeon":"513a2715bac51c0b403407ed","background/ending_perfect_teacher":"fe8877f9d320958a916ec193","background/ending_perfect_yuna":"d474988bda580a4fa93e9bdb","background/ending_true_dain":"208f6d687989178581114801","background/ending_true_nurse":"4727b2407b6623fd802285f8","background/ending_true_seoyeon":"edda8686b4b472e5099da930","background/ending_true_teacher":"14adfae607797f5fccdf601c","background/ending_true_yuna":"81604f5804f639ca8f67601c","background/event_haeun_reputation":"8b2edb7e9c3b3b7c804362ba","background/event_haeun_trust":"080f10ba1c95792d44d0de72","background/event_seoyeon_succulent":"839c54f07fdfee9f1a6c6cf0","background/event_temptation_dain":"ea1f573b313ef7004b352a28","background/event_temptation_seoyeon":"139380703754eeefce44522d","background/event_temptation_yuna":"a3c33707fefd16c91df8d4cf","background/event_yuna_reading":"f9fe8aae463477345c4cd825","background/nurse_home_event1":"8fb762c5beb1d01ee83bc97b","characters/dain_active":"24dcad7c8d56db6a14c65961","characters/dain_aegyo":"9de0648a23ba9160d4267cd7","characters/dain_afterglow":"2a3db0b9387afbcc00342fe6","characters/dain_ahegao":"ee6ce0e7905d35db00793715","characters/dain_angry":"0783809c0e6880fd8e776dd5","characters/dain_begging_lust":"a5ca394fe7804896fdb3b051","characters/dain_betrayed":"bc7230c8dfe7d6c7c95b642e","characters/dain_bikini":"675d1a52cea84edc24dddd5f","characters/dain_bored":"c912f475c0cb1e93f1140a65","characters/dain_choking":"6dad7bd868bfcb915663caa4","characters/dain_climax":"36febcae04743ce61cc76173","characters/dain_climax_02":"8e4b4c23814a2f480b120d68","characters/dain_climax_03":"42efec0b2cc141ddae9d7326","characters/dain_climax_04":"8922742b26c001db43a91449","characters/dain_climax_05":"0f1971d61e7019b6818bb9f1","characters/dain_climax_06":"f0865b7c19e5b931662c02a2","characters/dain_climax_07":"1a8dfb2a821bd4c7907cf099","characters/dain_climax_08":"8677fb742d7e0d4e69f8fe98","characters/dain_climax_09":"99a2615af520031aff36c8a7","characters/dain_climax_10":"2d383c11eba134d47899553f","characters/dain_climax_11":"efaf64fc6ee4b0a6d2f5857e","characters/dain_cold":"85287fc8510863ada3ff8816","characters/dain_combat_ready":"df6c12592391c2d48b5379bf","characters/dain_confused":"834f52ceff8cdd48d57cbfc2","characters/dain_cry":"bfcad5abe72e6712eb656738","characters/dain_date_angry":"f311166e736e25579b24a4fa","characters/dain_date_laugh":"db52542591d9da4561dd1df0","characters/dain_date_normal":"262abf8666a117a4e6e5b978","characters/dain_date_sad":"ac3bf32b41ab3c53e368ab46","characters/dain_date_shy":"1b86a68b42e7d46de4a89994","characters/dain_date_sweat":"8c6258e782fb40f67b7cb67d","characters/dain_dazed":"64884b1179c50eeb2a764802","characters/dain_dead":"d53037c491d6b5a768d2b587","characters/dain_disgusted":"6899a6ac2639a8dfed0e7ef4","characters/dain_dominant_aroused":"635334bc47ba83a340570a5a","characters/dain_dry_smile":"259f4891849b4b6944c065ee","characters/dain_dumbfounded":"9b1e0cc440bc2501b1315234","characters/dain_enduring":"382c039e50cf6dac50ca6fee","characters/dain_entranced":"ede1c6ace46351e274ef9bc4","characters/dain_exhausted":"bb9a4ab7fdbdaa3abe01265a","characters/dain_fainted":"43e04f3af1bfb90d138aede1","characters/dain_firm":"59b320713319dd7f4c7db080","characters/dain_flushed":"85553085912b3fa685d3d663","characters/dain_flushed_02":"139d2c28ca4da18896eda3a6","characters/dain_flushed_03":"d82dda74f45db626b1116843","characters/dain_furious":"515e974b3f8b89d54bf7ecf1","characters/dain_groggy":"1f0d6e0587155b9c5b69a92a","characters/dain_humiliated":"e151d83f6e552752b997931b","characters/dain_jealous":"5bc738281add081d053a34b0","characters/dain_kiss":"2a6812f7b37349b842b35ccd","characters/dain_laugh":"e225fe7851fb5fb972a604fd","characters/dain_lovestruck":"70ac1271c7b21404e2279714","characters/dain_messy_afterglow":"75ecfbfa1d4687ac5379a31c","characters/dain_normal":"8f4807f857bcc237b0e44ca8","characters/dain_oral_service":"1f863d80e4afc98cafa2a1d8","characters/dain_pain":"7d43842bbed21a20058012e3","characters/dain_pleading":"589498ce5bc6c14e28df72fa","characters/dain_pout":"90de7b20257dd3630d75c5cb","characters/dain_relieved":"3c76f9db7e51ecfbd7bc7337","characters/dain_sad":"05dd02353d861a2801e49b44","characters/dain_scared":"7b16e8fd1bc74f7b4dc5f232","characters/dain_scheming":"ed1945ebc48a7dfade9bbec0","characters/dain_scream":"46df815eaa168f34c09dfc02","characters/dain_seductive":"2e762b520a7e37a05375d694","characters/dain_shy":"41901638e460bebadb922d61","characters/dain_smile":"d4ebed1df77d988c3d595597","characters/dain_smirk":"ee432bb273f89e6173afb452","characters/dain_sob":"3efd8e3be27fdba428aa3d96","characters/dain_soft_smile":"1e140d84a734eee8d88d2614","characters/dain_surprised":"24a819e0e92af8637b96592e","characters/dain_suspicious":"8393102c894725ab685cc006","characters/dain_sweat":"c89a771d2c38694a15563fdb","characters/dain_tired":"bdb7f2f53d3b855a0ed40d98","characters/dain_touched":"1697cb3f2db7748c207a0951","characters/dain_undressed_shy":"b249c34a01be5095dd71b51c","characters/dain_undressed_shy_02":"fd9dccfe972dd76fad79c477","characters/dain_undressed_shy_03":"b7b8557cd40915a1501a2824","characters/dain_undressed_shy_04":"fab26ffc052dafb6a8187ecd","characters/dain_very_shy":"376b75afef370884894ddf9d","characters/dain_worried":"a1dd0be823f79c3d413532b2","characters/haeun_active":"8235311d8a14744a4b58347d","characters/haeun_aegyo":"e40a0d301ac0a77b24e5f782","characters/haeun_afterglow":"518f5e2a8c4a20852ef3ee2b","characters/haeun_ahegao":"8e6a5087418bf86847ca9d01","characters/haeun_angry":"8dfef0b673e5d438a772d429","characters/haeun_begging_lust":"0e2532142e4dfbeff7a00da8","characters/haeun_betrayed":"10f01783909091577fedb897","characters/haeun_bored":"a62256b96e560f3519ee46f4","characters/haeun_choking":"bbaad998dcfcfd67c5ac3e56","characters/haeun_climax":"a17d62b985a9add67759de15","characters/haeun_climax_02":"d245b0e7bb2aa3c3bc29a496","characters/haeun_climax_03":"9c73ae9c86d9a498ec19b30c","characters/haeun_climax_04":"5f74e7dd4b2dc17821fa1be8","characters/haeun_climax_05":"ede383467153292745ae73b5","characters/haeun_climax_06":"96aa8a7bbadc995fd5495554","characters/haeun_climax_07":"2d99804f0b80d7ea75769ce3","characters/haeun_climax_08":"e4fbbf29b815804bb6b35fad","characters/haeun_cold":"842133bb96cd5f4d757836ce","characters/haeun_combat_ready":"7ef4f71fa48b996ffca8d7f7","characters/haeun_confused":"0dd2625851b2e77e2bd681b8","characters/haeun_cry":"dd619c79faf620d83fa90c7d","characters/haeun_dazed":"370864b5e5c7f2b630721d21","characters/haeun_dead":"a31256f84c5edaae5147ae89","characters/haeun_disgusted":"8da853c797ea56c437d92160","characters/haeun_dominant_aroused":"621391a58dc9151c165f80a2","characters/haeun_dry_smile":"fe425cce7cfd68af54b5a398","characters/haeun_dumbfounded":"362d199a6d3805cebd8794fe","characters/haeun_enduring":"aafaf4e255ae0bbb4fe0cbe3","characters/haeun_entranced":"0673a5e572392be96b5c0d99","characters/haeun_exhausted":"9e49c826a698475d3db96f36","characters/haeun_fainted":"0e1b4cbaba449da5ecf720be","characters/haeun_firm":"f8c8562ff362d26a7cbb2b59","characters/haeun_flushed":"3099cfcb95641849d2b8b5c8","characters/haeun_flushed_02":"2b5c242c6cd83c182b165f46","characters/haeun_flushed_03":"dc289a0ed4f611ad860cd4dd","characters/haeun_furious":"9c533a389b2665c41ba3b748","characters/haeun_groggy":"3b3fe4aaae56fe72a1390e35","characters/haeun_humiliated":"20999c03d9a1438aef25e511","characters/haeun_jealous":"f3deb85b534e1d380ba5cf23","characters/haeun_kiss":"75f486c6fe1029280ff28d0a","characters/haeun_laugh":"effe5b99217bcb23104cc0ff","characters/haeun_lovestruck":"a1bb7a209ff51915479cc51b","characters/haeun_messy_afterglow":"c80431c67fb690b5047c6780","characters/haeun_normal":"b473530fbc284e2287b30ff4","characters/haeun_oral_service":"cfa093cc525c749147b2504c","characters/haeun_pain":"40c0a73953848b3cc753eb5b","characters/haeun_pleading":"a6aab556dcf4630d1bf101e8","characters/haeun_pout":"4f70538c8efe104be6220b7b","characters/haeun_relieved":"b7cb885c8cce4d7c59c636a0","characters/haeun_sad":"a49f719e25b2801a3eb9d6f9","characters/haeun_scared":"54dded2ae5f0889e4d47a4f7","characters/haeun_scheming":"a524468387e62946669d5559","characters/haeun_scream":"5f01327edb551d9452e61523","characters/haeun_seductive":"80f3ac935ab5ba5e235a6de0","characters/haeun_shy":"1ace0633fac79521a92a3e47","characters/haeun_smile":"30f4a2c7a7ca52bda3164211","characters/haeun_smirk":"d7fe87ab54619a95dfb3d616","characters/haeun_sob":"762b9eea1583786365d9d438","characters/haeun_soft_smile":"6206f5d57de5fd52b0a7c4a5","characters/haeun_surprised":"caaeb758ebcc97ec1d62f3f0","characters/haeun_suspicious":"0198dc3de5ec34411245c289","characters/haeun_sweat":"183754283a86f0c94044c520","characters/haeun_tired":"7ef766b596d1a4fd0ca38466","characters/haeun_touched":"bbe20d2cf5b87a10ab5879ba","characters/haeun_undressed_shy":"041c88718c247d82cb48945a","characters/haeun_very_shy":"a574b1229f29a1c64ec58b5b","characters/haeun_worried":"18c4b8c4451e799d6726d522","characters/junho_awkward":"2e9fb0b44fa1f0750f560248","characters/junho_normal":"b088dd3040ad227a625d60c3","characters/minsu_active":"a622bda1ad5d539d49bddb31","characters/minsu_aegyo":"1c496a6799a6e1b94e5b5d5f","characters/minsu_afterglow":"a98416eb18d918376f5fb02b","characters/minsu_angry":"85e079282558a154cd194b00","characters/minsu_begging_lust":"028e9542981d0d795c764709","characters/minsu_betrayed":"6c5b70f489fe7b32f4348e2a","characters/minsu_bored":"0a0f845bcca011a3181d1caf","characters/minsu_choking":"ca0d5ac5077ebaf915400436","characters/minsu_climax":"b46f8255266dcfb0a5e567f5","characters/minsu_climax_02":"2b36537ad15c59b2490320ab","characters/minsu_climax_03":"7835940ec6eeaaacbd7ac8e9","characters/minsu_climax_04":"0a413812cdfb4ec1ea339874","characters/minsu_climax_05":"9cee4c8d820a79169af7ee32","characters/minsu_climax_06":"2b10fae145f748ed5f395247","characters/minsu_cold":"bae6cf8b1f71b9bc580859c5","characters/minsu_combat_ready":"f46b847d793d3e002a8b2e77","characters/minsu_confused":"0e5c63c1f3ad24b2782711fa","characters/minsu_cry":"809f62c16e4a3aff645f9125","characters/minsu_dazed":"d3afad1df44977f66c53d7eb","characters/minsu_dead":"7f2b460065cfd61824e41896","characters/minsu_disgusted":"ac7503b189a2872e7ffa0673","characters/minsu_dominant_aroused":"eb7d7e3b57c8f694d93f8a39","characters/minsu_dry_smile":"676f88ecc3be5efb0e45d8e0","characters/minsu_dumbfounded":"f6bcaeb3698bd8fc2c9b02f4","characters/minsu_enduring":"26768f401ac6c440ef84d923","characters/minsu_entranced":"33e091f73596ed9d622dd72b","characters/minsu_exhausted":"16ed68b15535a4c22a11e814","characters/minsu_fainted":"b571ea0e131efac1878e12da","characters/minsu_firm":"a0acf549abce0fe2856c4b2b","characters/minsu_flushed":"ba70cf579248b5cb6a2744d3","characters/minsu_flushed_02":"7c6d62b0312438a6a34ad6d4","characters/minsu_flushed_03":"30e6fb9c4c38b968325bff9a","characters/minsu_furious":"594db127a011311d7e729e2e","characters/minsu_groggy":"1222c09e15d661cd16fc051a","characters/minsu_humiliated":"8677664f3402b4def0e56f56","characters/minsu_jealous":"dc1a980b727c2ca132874496","characters/minsu_kiss":"99567748847cd1cc8c92b2ca","characters/minsu_laugh":"8820f80b6cac379ad64ea8c6","characters/minsu_lovestruck":"cfb56cc335547540b588f0c7","characters/minsu_messy_afterglow":"993db6a8127f9cc79f97265a","characters/minsu_normal":"7a3a9ea160baa6a8b04b6efe","characters/minsu_oral_service":"06aadff64cf4c994beb5edd4","characters/minsu_pain":"4e71f24058fbd46a517b0052","characters/minsu_pleading":"da10a11494fd51693c975c3a","characters/minsu_pout":"3eb4fe02929c0842ae62035a","characters/minsu_relieved":"554978b26a3c00ab0bce3f0f","characters/minsu_sad":"85f684f524f98045f449ba3e","characters/minsu_scared":"ae338ebbe68d6832cebb8d26","characters/minsu_scheming":"1a3eb898058bbea98ab79e1b","characters/minsu_scream":"bad96154b6106c7811be6026","characters/minsu_seductive":"e0889d56e8e6b2e869d2aec0","characters/minsu_shy":"667ff5a585191ac11490a206","characters/minsu_smile":"83a55aac8bf157e1289b0ed3","characters/minsu_smirk":"6142c33b70cbb15112af5ef8","characters/minsu_sob":"17e8bd25cfb78d7d4de46ead","characters/minsu_soft_smile":"d1013a410025e1b19a9ba8dc","characters/minsu_surprised":"4810642fe5c507395a50d6e4","characters/minsu_suspicious":"0671cdd72d6f4c8e3205c42f","characters/minsu_sweat":"def101aa22f8e84a0ffe1ab2","characters/minsu_tired":"20b77100ff3c9eb53a4d4db0","characters/minsu_touched":"0964c7dffea496388a407418","characters/minsu_undressed_shy":"b6926afe5af060d62eb3e44b","characters/minsu_very_shy":"413b77455bc7da0dd89b56e4","characters/minsu_worried":"d6e6dce5c4810547f83cb0b7","characters/nurse_active":"bc88ce8b0aa7052fb69ccbd6","characters/nurse_aegyo":"f1036a9dfac53ec14d53eed1","characters/nurse_afterglow":"8c663b6e4c2a91d174a2d72a","characters/nurse_ahegao":"035a039a97a334dd55ab5c04","characters/nurse_angry":"2b390534dc032e492b63eb17","characters/nurse_begging_lust":"623619e70756ed4de80c2950","characters/nurse_betrayed":"a35844d3b1f5785239d6f407","characters/nurse_bikini":"2d02c75d38dad14d33e150df","characters/nurse_bored":"8f2d380b8cd95e8340bff431","characters/nurse_choking":"b6dfcf7eac85c7c031252da8","characters/nurse_climax":"52b4f653b6e1a03909f1a091","characters/nurse_climax_02":"4b14eb18464532db0207a215","characters/nurse_climax_03":"c7ec710c1979388f4d3b23d6","characters/nurse_climax_04":"f784dbcb30843a8b284d4d52","characters/nurse_climax_05":"cdf4c481d809948b987cd206","characters/nurse_climax_06":"8bd27ac37283667a7885689c","characters/nurse_climax_07":"3d8087f9c0a4ea5a0e0928af","characters/nurse_climax_08":"ff2838ade630d6736753729f","characters/nurse_climax_09":"1d09b5917cadbfa6496f2137","characters/nurse_cold":"8f0d796a0b4ff7b13cc90341","characters/nurse_combat_ready":"2bb611d5b8d3054c46d7845d","characters/nurse_confused":"1f23517997ae01c76f020f33","characters/nurse_cry":"620c20104858cb5fb6695328","characters/nurse_dazed":"a6959cf2b23177aca027c2ab","characters/nurse_dead":"33b48e8aa618c3b980f5ae4f","characters/nurse_disgusted":"095aa4dabca53318fada7469","characters/nurse_dominant_aroused":"1b5e2ff5d82c930c50130dbc","characters/nurse_dry_smile":"ac7cadf990e5837650d0e434","characters/nurse_dumbfounded":"717efb295de2c2e7b804cf3e","characters/nurse_enduring":"519f25a092b027f98f7b8d6c","characters/nurse_entranced":"72db8afa0fce91e72dde496f","characters/nurse_exhausted":"c1681995a50c887d1c5af1ae","characters/nurse_fainted":"73d34731ef20e997f3ea28db","characters/nurse_firm":"5a1f883b3ce5261d10debbfc","characters/nurse_flushed":"fae7a0d4d033003c145213a2","characters/nurse_flushed_02":"97a76ea03178bcb57df6c1a2","characters/nurse_flushed_03":"3e3c89bfbb57ff440afc494c","characters/nurse_furious":"fe20dbea25ced392273e28de","characters/nurse_groggy":"ed20415f50b216b9abd761d3","characters/nurse_home_angry":"65b609cc26923bbca70fa038","characters/nurse_home_normal":"c2440330610e161ff5da49dc","characters/nurse_home_sad":"20433c3eca67e8ffb687ba69","characters/nurse_home_shy":"9fdd7ad9df5505605f34ef3e","characters/nurse_home_smile":"e944d7543192da748bf03d9c","characters/nurse_humiliated":"a1506a675585231dca89ac83","characters/nurse_jealous":"1f2ca7bbaa8720097dbb708e","characters/nurse_kiss":"c5e9d2d68d9915df24968eba","characters/nurse_laugh":"57ff1d40abb74d223641688e","characters/nurse_lovestruck":"5ad91a4cf6a8b22abd438080","characters/nurse_messy_afterglow":"3be4eb589dfbd748dcbbcb5a","characters/nurse_normal":"194b2c1d1608b2f210868186","characters/nurse_oral_service":"1b97a9e08e103d40359dd3f8","characters/nurse_pain":"29965853d9432739d4394629","characters/nurse_pleading":"b3a66e2b60adf34763b84e6d","characters/nurse_pout":"1c4fc26c348a3eedbbb4c9a9","characters/nurse_relieved":"3a11336845670cfe959cc60f","characters/nurse_sad":"05077b9caf10a477179b72e1","characters/nurse_scared":"243fe37623b8d85afbd5f5f9","characters/nurse_scheming":"496fa2ea2f0321c2175b96ed","characters/nurse_scream":"6e71d340f8b27ba6adb946e4","characters/nurse_seductive":"b519caaa6c2cf0762eea4d26","characters/nurse_shy":"92bef743743c3c2b466083ac","characters/nurse_smile":"3df8d9c8b4e21a94359d29ca","characters/nurse_smirk":"d309ca9a506a28454a7bdb5c","characters/nurse_sob":"6df39a65bc91a2a92997e312","characters/nurse_soft_smile":"9dc36b83813aa23b941629f0","characters/nurse_surprised":"b6a5471a43e9afa4b526bb81","characters/nurse_suspicious":"ec68bb1109c525206dd966ed","characters/nurse_sweat":"273fd8b7d92fca0194a386a4","characters/nurse_tired":"48f765bead3c975c38186955","characters/nurse_touched":"06e9e7c3e59df1fbc645ff62","characters/nurse_undressed_shy":"ef72844ebbb4ab03b03cb742","characters/nurse_very_shy":"b0f16a8a26fa80d3cf25e517","characters/nurse_worried":"5fcaca48a1a62dd4e74062e9","characters/seyoun_active":"8dad64913f97c8c358d9b9f8","characters/seyoun_aegyo":"6fab899a5c93bc00fd008a69","characters/seyoun_afterglow":"08e969317f11c0706ed6fea5","characters/seyoun_ahegao":"a6130a1842a5ef4cf9b0ccd8","characters/seyoun_angry":"b8ca4e656889ec137f350df9","characters/seyoun_back":"ff25e983526ea4c8f332f003","characters/seyoun_begging_lust":"ddf448bf6ee6cefef79ad1f1","characters/seyoun_betrayed":"fe49a0e3749835a92a15be09","characters/seyoun_bikini":"811254edce80a69af5e46c3b","characters/seyoun_bored":"e73029ba737187861b43141c","characters/seyoun_choking":"a028088965b36de3e828a542","characters/seyoun_climax":"e8976f6d40feca2eb3f038f8","characters/seyoun_climax_02":"72e9c10fe27eaa590c8dd816","characters/seyoun_climax_03":"06ec00913156e3188d1672bc","characters/seyoun_climax_04":"3168d791b18f57a2ddcdfa15","characters/seyoun_climax_05":"59e76bf9f790cbd73b731479","characters/seyoun_climax_06":"f4f5ddba10c31902f83e0102","characters/seyoun_cold":"e0de73446825a4eaec9a5052","characters/seyoun_combat_ready":"8fdf6b126424f0faae6ca8a4","characters/seyoun_confused":"57a98203b8eb2736a9848251","characters/seyoun_cry":"67692adc9669680d79ecf815","characters/seyoun_date_laugh":"782d59181950ecec34f63565","characters/seyoun_date_normal":"2ab48647f5328b7331a74bc2","characters/seyoun_date_sad":"49d60b12c50af6e72f9e8f8d","characters/seyoun_date_shy":"bf8ace01b165c9442270ec09","characters/seyoun_date_worried":"1819972fb0d874d578757b1f","characters/seyoun_dazed":"1382aad5fb8ee28f6276fd11","characters/seyoun_dead":"43ccd90b1b12b68ac3198e55","characters/seyoun_disgusted":"47c2df6a771a4077c1898e42","characters/seyoun_dominant_aroused":"efae381ff5df40860d152684","characters/seyoun_dry_smile":"905a325ea648183271d61430","characters/seyoun_dumbfounded":"a3a79a772e2e35b8b777afaa","characters/seyoun_enduring":"6966cc6e8b8ee3042c0db8c2","characters/seyoun_entranced":"f2d7629a1c1edf9f21c67e64","characters/seyoun_exhausted":"984c97d43d01b60e8791c4d5","characters/seyoun_fainted":"3d8df0ba62492266a64e6e66","characters/seyoun_firm":"673fa9a0069108fe78ef577a","characters/seyoun_flushed":"68a10b15d2820888ae684c35","characters/seyoun_flushed_02":"cf5f01abe79fabaea1bd1df4","characters/seyoun_flushed_03":"9b4a784e38453ecf2e591c1a","characters/seyoun_flushed_04":"7ab8dfdc84e4566904623cce","characters/seyoun_flushed_05":"46339043bb30b948d66b9db1","characters/seyoun_flushed_06":"1fcbfd5fb6e72a392d38810d","characters/seyoun_furious":"cb8d1dde85024093ccbb57c5","characters/seyoun_groggy":"5d36ece26984d5bb4349c85e","characters/seyoun_humiliated":"d71d0a279ab645ca741c5b11","characters/seyoun_jealous":"f0b575811f27123dcb608a68","characters/seyoun_kiss":"99fd76043e50b56383550c87","characters/seyoun_laugh":"68545393bfdd27f941de9bc7","characters/seyoun_lovestruck":"053225966d1c9b26a0e6e135","characters/seyoun_messy_afterglow":"ed9755bf7d3b910c04256462","characters/seyoun_normal":"f31804bdbf136cb19eb70b37","characters/seyoun_oral_service":"047ba6e3c40941baeba7ae5d","characters/seyoun_pain":"6754f6b2a5fafc4bbd0c955d","characters/seyoun_pleading":"58b9fcdff34d7c11aa30216b","characters/seyoun_pout":"a872c981ae60e8af21531e44","characters/seyoun_relieved":"65095f90a7933136e6583a93","characters/seyoun_sad":"349afb646fd8f6a28986a1c8","characters/seyoun_scared":"8579bbfcdb8b37f84c78dca5","characters/seyoun_scheming":"e6614e3213d2f75b07ffcfbd","characters/seyoun_scream":"c13f64d36ccac27da620008c","characters/seyoun_seductive":"c360acb9760e20aadf5f15aa","characters/seyoun_shy":"da7f89d06d064157cc3d47a0","characters/seyoun_smile":"ced0ac22fb50af823ee18418","characters/seyoun_smirk":"c0581078454a6a90aa7cc4ee","characters/seyoun_sob":"29099a924e2b8d7cea20ab8b","characters/seyoun_soft_smile":"829194a275415185469f34c6","characters/seyoun_surprised":"636eb34d2810fdb23c51be70","characters/seyoun_suspicious":"0a10addbf06d0ce385c9502b","characters/seyoun_sweat":"ddd866929b5578b8566b838f","characters/seyoun_tired":"dac06fb972adc7d3c30c0b54","characters/seyoun_touched":"d0053f5e316cec6d7e230afb","characters/seyoun_undressed_shy":"b1358fd81222d61da2a05088","characters/seyoun_very_shy":"b12f2af490b0cfc3fdb87674","characters/seyoun_worried":"be70ce644f480d82ddc7621e","characters/teacher_active":"04ee91d5f4f80ff404e7ebc1","characters/teacher_aegyo":"af3f0dbfa4bf80db3098127e","characters/teacher_afterglow":"276e2cd9956c8693538f60f4","characters/teacher_ahegao":"b02662146b7163f6ee2f7a70","characters/teacher_angry":"59459ddf6f6e8ac3ce31f496","characters/teacher_begging_lust":"f257f83dfe067610ab090f6b","characters/teacher_betrayed":"17291b3d4d4c6d4bed035173","characters/teacher_bikini":"e28249e4880d2192538f472a","characters/teacher_bored":"196ba71214c411e38b272649","characters/teacher_choking":"85fc2acaf23d288b3d2cbafa","characters/teacher_climax":"2cc0ed23cc4df8a354e68281","characters/teacher_climax_02":"54ee43b24dab63b460952255","characters/teacher_climax_03":"e5f43b34cad1fe2aedfa2465","characters/teacher_climax_04":"c7f833e610b5f66d36a7da89","characters/teacher_climax_05":"c6de8667dfe1fba6201dc82c","characters/teacher_climax_06":"3efbd88772c20b14637cc629","characters/teacher_climax_07":"a3114791a771e79f5042d0ad","characters/teacher_climax_08":"a43025ec1aa46a0050b4b1e9","characters/teacher_climax_09":"898c6b3c5fdddc9204d4ffe9","characters/teacher_climax_10":"0650c1385af70eee5d002e98","characters/teacher_cold":"d91b0f35b6a3955b2c6ab4ca","characters/teacher_combat_ready":"582dd8b9e9d0e3b08f1977c2","characters/teacher_confused":"005717d4cdacbb74de422ee7","characters/teacher_cry":"66faf75bd8cbdda7bfcdc8f8","characters/teacher_dazed":"86fbf164ea2db24d04f1a9bf","characters/teacher_dead":"e9f4eac6e6e7c167a9848ed8","characters/teacher_disgusted":"bb0dab74644c6385cbf5accc","characters/teacher_dominant_aroused":"a4eac800db23f78bc3a022a4","characters/teacher_dry_smile":"24e5cd319540850f18aceff7","characters/teacher_dumbfounded":"ea5efce8e87871f70a8a7307","characters/teacher_enduring":"08fe1e2129a4dfe27961ca2d","characters/teacher_entranced":"f0a59cc5e0d69a9267636546","characters/teacher_exhausted":"b1c84609e723988e131c20ef","characters/teacher_fainted":"dc6aa17a2d6ef0244e8e3bd7","characters/teacher_firm":"21e6e4edad5e230d1876820c","characters/teacher_flushed":"6c1445ba8148776ddc6b1b02","characters/teacher_flushed_02":"26d784be3d51ace01f315293","characters/teacher_flushed_03":"910386dbcdb20382644c5671","characters/teacher_furious":"89df08a60a4aeb88084eb63a","characters/teacher_groggy":"abf5b7c3f4a74cea146ef05a","characters/teacher_humiliated":"963a2acbaa37b53e39809de5","characters/teacher_jealous":"884ff879172a51e10dad7063","characters/teacher_kiss":"265e0b42489dff0ad4746169","characters/teacher_laugh":"e097987d82f65c2bc06c9e97","characters/teacher_lovestruck":"e16f9b94507a89db3a3a3451","characters/teacher_messy_afterglow":"e6f151d51a8f4ba4ca4ad815","characters/teacher_normal":"9d111c1053b7d46bd38f137f","characters/teacher_oral_service":"90f11be1fdba29121c6c196c","characters/teacher_pain":"993fb58f2641064dd92ceb61","characters/teacher_pleading":"3c6b8feff223ec2c0bf0bec5","characters/teacher_pout":"d46b21d1da47622cc1dbe542","characters/teacher_relieved":"3e5bc8a8ecc4bfcd943a035e","characters/teacher_sad":"31414abc144b99ace2d884fa","characters/teacher_scared":"cfc53ce21be43cd6afa1479b","characters/teacher_scheming":"dc353fcb10a6565503bbe1e1","characters/teacher_scream":"f4365f29577381aded025d1b","characters/teacher_seductive":"ae8c6c7697b766d4d8549c41","characters/teacher_shy":"3c2c09b1312f8790390d6625","characters/teacher_smile":"8b8bc3c4ae44759b66dcd066","characters/teacher_smirk":"2e9e89506e57cb7405495767","characters/teacher_sob":"caeb6cef88cbf1a8e8336df7","characters/teacher_soft_smile":"9daf86c6ff83fbe8cffc459f","characters/teacher_surprised":"80d5477abb16c67597c2c245","characters/teacher_suspicious":"7ef22941f98cfaab34919376","characters/teacher_sweat":"0d434406bd5dc26dc0ec470e","characters/teacher_tired":"4d6bc97dc0ebcbf4595f41f7","characters/teacher_touched":"522832b143f9327c4e6bcac3","characters/teacher_undressed_shy":"461e21bfb9fb9e90f78d408f","characters/teacher_very_shy":"0f01101a99681fef40db1315","characters/teacher_worried":"1ea742632d285b7d8fe7e8ce","characters/yuna_active":"01f971a1ed7c1b81844ea7d8","characters/yuna_aegyo":"94c7e6e6e808dc045d17af67","characters/yuna_afterglow":"0cc4b4910089706b1cc06a06","characters/yuna_ahegao":"b1e90cd6d282f4eb6e8f756e","characters/yuna_angry":"285d6e1267ef077802593555","characters/yuna_begging_lust":"a1151301426b9b1545e2b508","characters/yuna_betrayed":"2e646d0c5e273159263be1a6","characters/yuna_bikini":"f7e257282a62e3a43bf17635","characters/yuna_bored":"f4bd7f4b0cb65170801ba3f7","characters/yuna_choking":"8d470ce54ddd5dfd551b6c4b","characters/yuna_climax":"756363573ee485bd8c2f5805","characters/yuna_climax_02":"a0cef8c0655ffc0bf61bcec2","characters/yuna_climax_03":"b6f023bcd41f7b82aa0203b9","characters/yuna_climax_04":"9a13b42484c387929fcbabbc","characters/yuna_climax_05":"a4f00a17741f2f20472742c9","characters/yuna_climax_06":"eba424602c05ba42ecce36f3","characters/yuna_climax_07":"fd2653b3fff1fc27a905b5c2","characters/yuna_climax_08":"af6d07ab5fde08251b366a78","characters/yuna_climax_09":"f91b51aa9c53ef2d5709f80a","characters/yuna_cold":"5be1fcf84cd007a6164351f1","characters/yuna_combat_ready":"be9e267fe25280c34ab19e53","characters/yuna_confused":"68d673e534358a6ecbab9dcd","characters/yuna_cry":"dbef568c2a70a92347d52a58","characters/yuna_date_bored":"ad47c1ad4dbe2f408616bfa3","characters/yuna_date_normal":"3b3fde66d1fac0574c83b3fb","characters/yuna_date_sad":"1e7ea7d0dc296f7704ef2151","characters/yuna_date_shy":"718edd40188722ecea7ac05a","characters/yuna_date_smile":"92fafb35f27abf000e77f32f","characters/yuna_dazed":"ad29170b03e860623ecf24ff","characters/yuna_dead":"1ec51f996225e7866d6e4e55","characters/yuna_disgusted":"1b32d47919aa6dc3aaeaf8a2","characters/yuna_dominant_aroused":"7b4537d23f64a84eaad2c4f1","characters/yuna_dry_smile":"a96fb7bfae3783bdeb932df3","characters/yuna_dumbfounded":"1cd3e41a5cfb6c59537dba1b","characters/yuna_enduring":"2607ff3e923ef3c283935b69","characters/yuna_entranced":"7057fff016ed50b5aaa92856","characters/yuna_exhausted":"e32c72eabb9c6c794dca8836","characters/yuna_fainted":"e54040943f62145c5bbaf46d","characters/yuna_firm":"66776b5af65153de136538bd","characters/yuna_flushed":"4bef0964efc6e1c007280c57","characters/yuna_flushed_02":"6d8a48cd03f8ba087d94a90c","characters/yuna_flushed_03":"f49181fd5a43c001321c2df4","characters/yuna_furious":"2eb0175f96a3ebcdf884ed01","characters/yuna_gallery_bikini_sexy_20260813":"7cfb2d83e446e8a8da023f1c","characters/yuna_groggy":"d3b645503087575f430dd997","characters/yuna_humiliated":"99e502fe5659bb3b4b5940ea","characters/yuna_jealous":"df018fbddd941d0542a03e7b","characters/yuna_kiss":"98602d036732434c6fad6504","characters/yuna_laugh":"dea9dfbbcb989bc0def86a56","characters/yuna_lovestruck":"f9c22f72a4269f70ba339887","characters/yuna_messy_afterglow":"d7233e22d073f8d95c645867","characters/yuna_normal":"05dac812cd08213d26126502","characters/yuna_oral_service":"254023ab75b21d917376768b","characters/yuna_pain":"6f4a69a5cca0ad5537eb4707","characters/yuna_pleading":"76d5857524e9bde8236266cb","characters/yuna_pout":"150ce1bba3124b420ef4a472","characters/yuna_relieved":"f7eb57864e41600614605717","characters/yuna_sad":"89f1f642f65434bad639b035","characters/yuna_scared":"62cc10e0ca546f6ed05dc613","characters/yuna_scheming":"833d02c6c68def7e1f8f3d87","characters/yuna_scream":"081e42b33613e53e7f8f2e00","characters/yuna_seductive":"926fd9782311b7f66970ae87","characters/yuna_shy":"e0002a8f5a1b4ee0c46a26aa","characters/yuna_smile":"a9d335b0a095df29611d7210","characters/yuna_smirk":"9daf8e6a144b9785b97a2138","characters/yuna_sob":"4c9ca2cd96f4c0f012d52e11","characters/yuna_soft_smile":"d52cc74a655f056d650e1d4e","characters/yuna_surprised":"128c7879e0d98571e97101aa","characters/yuna_suspicious":"2385ce7ba0709aa056a5f65a","characters/yuna_sweat":"d446bc477df796d5473dd0c4","characters/yuna_tired":"b9c5cbb0513d50ae976384a5","characters/yuna_touched":"f6e9d71b943ae902aec36d38","characters/yuna_undressed_shy":"fba7257927994cd789febbbf","characters/yuna_very_shy":"3db99afd7eacfb3e719266cc","characters/yuna_worried":"5b5c6fa3d14eb4aa98f4c126"};
  var CHARACTER_ASSET_IDS = {"assets/characters/dain/expressions/active/01/sprite":"characters/dain_active","assets/characters/dain/expressions/aegyo/01/sprite":"characters/dain_aegyo","assets/characters/dain/expressions/afterglow/01/sprite":"characters/dain_afterglow","assets/characters/dain/expressions/ahegao/01/sprite":"characters/dain_ahegao","assets/characters/dain/expressions/angry/01/sprite":"characters/dain_angry","assets/characters/dain/expressions/begging_lust/01/sprite":"characters/dain_begging_lust","assets/characters/dain/expressions/betrayed/01/sprite":"characters/dain_betrayed","assets/characters/dain/expressions/bikini/01/sprite":"characters/dain_bikini","assets/characters/dain/expressions/bored/01/sprite":"characters/dain_bored","assets/characters/dain/expressions/choking/01/sprite":"characters/dain_choking","assets/characters/dain/expressions/climax/01/sprite":"characters/dain_climax","assets/characters/dain/expressions/climax/02/sprite":"characters/dain_climax_02","assets/characters/dain/expressions/climax/03/sprite":"characters/dain_climax_03","assets/characters/dain/expressions/climax/04/sprite":"characters/dain_climax_04","assets/characters/dain/expressions/climax/05/sprite":"characters/dain_climax_05","assets/characters/dain/expressions/climax/06/sprite":"characters/dain_climax_06","assets/characters/dain/expressions/climax/07/sprite":"characters/dain_climax_07","assets/characters/dain/expressions/climax/08/sprite":"characters/dain_climax_08","assets/characters/dain/expressions/climax/09/sprite":"characters/dain_climax_09","assets/characters/dain/expressions/climax/10/sprite":"characters/dain_climax_10","assets/characters/dain/expressions/climax/11/sprite":"characters/dain_climax_11","assets/characters/dain/expressions/cold/01/sprite":"characters/dain_cold","assets/characters/dain/expressions/combat_ready/01/sprite":"characters/dain_combat_ready","assets/characters/dain/expressions/confused/01/sprite":"characters/dain_confused","assets/characters/dain/expressions/cry/01/sprite":"characters/dain_cry","assets/characters/dain/expressions/dazed/01/sprite":"characters/dain_dazed","assets/characters/dain/expressions/dead/01/sprite":"characters/dain_dead","assets/characters/dain/expressions/disgusted/01/sprite":"characters/dain_disgusted","assets/characters/dain/expressions/dominant_aroused/01/sprite":"characters/dain_dominant_aroused","assets/characters/dain/expressions/dry_smile/01/sprite":"characters/dain_dry_smile","assets/characters/dain/expressions/dumbfounded/01/sprite":"characters/dain_dumbfounded","assets/characters/dain/expressions/enduring/01/sprite":"characters/dain_enduring","assets/characters/dain/expressions/entranced/01/sprite":"characters/dain_entranced","assets/characters/dain/expressions/exhausted/01/sprite":"characters/dain_exhausted","assets/characters/dain/expressions/fainted/01/sprite":"characters/dain_fainted","assets/characters/dain/expressions/firm/01/sprite":"characters/dain_firm","assets/characters/dain/expressions/flushed/01/sprite":"characters/dain_flushed","assets/characters/dain/expressions/flushed/02/sprite":"characters/dain_flushed_02","assets/characters/dain/expressions/flushed/03/sprite":"characters/dain_flushed_03","assets/characters/dain/expressions/furious/01/sprite":"characters/dain_furious","assets/characters/dain/expressions/groggy/01/sprite":"characters/dain_groggy","assets/characters/dain/expressions/humiliated/01/sprite":"characters/dain_humiliated","assets/characters/dain/expressions/jealous/01/sprite":"characters/dain_jealous","assets/characters/dain/expressions/kiss/01/sprite":"characters/dain_kiss","assets/characters/dain/expressions/laugh/01/sprite":"characters/dain_laugh","assets/characters/dain/expressions/lovestruck/01/sprite":"characters/dain_lovestruck","assets/characters/dain/expressions/messy_afterglow/01/sprite":"characters/dain_messy_afterglow","assets/characters/dain/expressions/normal/01/sprite":"characters/dain_normal","assets/characters/dain/expressions/oral_service/01/sprite":"characters/dain_oral_service","assets/characters/dain/expressions/pain/01/sprite":"characters/dain_pain","assets/characters/dain/expressions/pleading/01/sprite":"characters/dain_pleading","assets/characters/dain/expressions/pout/01/sprite":"characters/dain_pout","assets/characters/dain/expressions/relieved/01/sprite":"characters/dain_relieved","assets/characters/dain/expressions/sad/01/sprite":"characters/dain_sad","assets/characters/dain/expressions/scared/01/sprite":"characters/dain_scared","assets/characters/dain/expressions/scheming/01/sprite":"characters/dain_scheming","assets/characters/dain/expressions/scream/01/sprite":"characters/dain_scream","assets/characters/dain/expressions/seductive/01/sprite":"characters/dain_seductive","assets/characters/dain/expressions/shy/01/sprite":"characters/dain_shy","assets/characters/dain/expressions/smile/01/sprite":"characters/dain_smile","assets/characters/dain/expressions/smirk/01/sprite":"characters/dain_smirk","assets/characters/dain/expressions/sob/01/sprite":"characters/dain_sob","assets/characters/dain/expressions/soft_smile/01/sprite":"characters/dain_soft_smile","assets/characters/dain/expressions/surprised/01/sprite":"characters/dain_surprised","assets/characters/dain/expressions/suspicious/01/sprite":"characters/dain_suspicious","assets/characters/dain/expressions/sweat/01/sprite":"characters/dain_sweat","assets/characters/dain/expressions/tired/01/sprite":"characters/dain_tired","assets/characters/dain/expressions/touched/01/sprite":"characters/dain_touched","assets/characters/dain/expressions/undressed_shy/01/sprite":"characters/dain_undressed_shy","assets/characters/dain/expressions/undressed_shy/02/sprite":"characters/dain_undressed_shy_02","assets/characters/dain/expressions/undressed_shy/03/sprite":"characters/dain_undressed_shy_03","assets/characters/dain/expressions/undressed_shy/04/sprite":"characters/dain_undressed_shy_04","assets/characters/dain/expressions/very_shy/01/sprite":"characters/dain_very_shy","assets/characters/dain/expressions/worried/01/sprite":"characters/dain_worried","assets/characters/dain/outfits/date/expressions/angry/01/sprite":"characters/dain_date_angry","assets/characters/dain/outfits/date/expressions/laugh/01/sprite":"characters/dain_date_laugh","assets/characters/dain/outfits/date/expressions/normal/01/sprite":"characters/dain_date_normal","assets/characters/dain/outfits/date/expressions/sad/01/sprite":"characters/dain_date_sad","assets/characters/dain/outfits/date/expressions/shy/01/sprite":"characters/dain_date_shy","assets/characters/dain/outfits/date/expressions/sweat/01/sprite":"characters/dain_date_sweat","assets/characters/haeun/expressions/active/01/sprite":"characters/haeun_active","assets/characters/haeun/expressions/aegyo/01/sprite":"characters/haeun_aegyo","assets/characters/haeun/expressions/afterglow/01/sprite":"characters/haeun_afterglow","assets/characters/haeun/expressions/ahegao/01/sprite":"characters/haeun_ahegao","assets/characters/haeun/expressions/angry/01/sprite":"characters/haeun_angry","assets/characters/haeun/expressions/begging_lust/01/sprite":"characters/haeun_begging_lust","assets/characters/haeun/expressions/betrayed/01/sprite":"characters/haeun_betrayed","assets/characters/haeun/expressions/bored/01/sprite":"characters/haeun_bored","assets/characters/haeun/expressions/choking/01/sprite":"characters/haeun_choking","assets/characters/haeun/expressions/climax/01/sprite":"characters/haeun_climax","assets/characters/haeun/expressions/climax/02/sprite":"characters/haeun_climax_02","assets/characters/haeun/expressions/climax/03/sprite":"characters/haeun_climax_03","assets/characters/haeun/expressions/climax/04/sprite":"characters/haeun_climax_04","assets/characters/haeun/expressions/climax/05/sprite":"characters/haeun_climax_05","assets/characters/haeun/expressions/climax/06/sprite":"characters/haeun_climax_06","assets/characters/haeun/expressions/climax/07/sprite":"characters/haeun_climax_07","assets/characters/haeun/expressions/climax/08/sprite":"characters/haeun_climax_08","assets/characters/haeun/expressions/cold/01/sprite":"characters/haeun_cold","assets/characters/haeun/expressions/combat_ready/01/sprite":"characters/haeun_combat_ready","assets/characters/haeun/expressions/confused/01/sprite":"characters/haeun_confused","assets/characters/haeun/expressions/cry/01/sprite":"characters/haeun_cry","assets/characters/haeun/expressions/dazed/01/sprite":"characters/haeun_dazed","assets/characters/haeun/expressions/dead/01/sprite":"characters/haeun_dead","assets/characters/haeun/expressions/disgusted/01/sprite":"characters/haeun_disgusted","assets/characters/haeun/expressions/dominant_aroused/01/sprite":"characters/haeun_dominant_aroused","assets/characters/haeun/expressions/dry_smile/01/sprite":"characters/haeun_dry_smile","assets/characters/haeun/expressions/dumbfounded/01/sprite":"characters/haeun_dumbfounded","assets/characters/haeun/expressions/enduring/01/sprite":"characters/haeun_enduring","assets/characters/haeun/expressions/entranced/01/sprite":"characters/haeun_entranced","assets/characters/haeun/expressions/exhausted/01/sprite":"characters/haeun_exhausted","assets/characters/haeun/expressions/fainted/01/sprite":"characters/haeun_fainted","assets/characters/haeun/expressions/firm/01/sprite":"characters/haeun_firm","assets/characters/haeun/expressions/flushed/01/sprite":"characters/haeun_flushed","assets/characters/haeun/expressions/flushed/02/sprite":"characters/haeun_flushed_02","assets/characters/haeun/expressions/flushed/03/sprite":"characters/haeun_flushed_03","assets/characters/haeun/expressions/furious/01/sprite":"characters/haeun_furious","assets/characters/haeun/expressions/groggy/01/sprite":"characters/haeun_groggy","assets/characters/haeun/expressions/humiliated/01/sprite":"characters/haeun_humiliated","assets/characters/haeun/expressions/jealous/01/sprite":"characters/haeun_jealous","assets/characters/haeun/expressions/kiss/01/sprite":"characters/haeun_kiss","assets/characters/haeun/expressions/laugh/01/sprite":"characters/haeun_laugh","assets/characters/haeun/expressions/lovestruck/01/sprite":"characters/haeun_lovestruck","assets/characters/haeun/expressions/messy_afterglow/01/sprite":"characters/haeun_messy_afterglow","assets/characters/haeun/expressions/normal/01/sprite":"characters/haeun_normal","assets/characters/haeun/expressions/oral_service/01/sprite":"characters/haeun_oral_service","assets/characters/haeun/expressions/pain/01/sprite":"characters/haeun_pain","assets/characters/haeun/expressions/pleading/01/sprite":"characters/haeun_pleading","assets/characters/haeun/expressions/pout/01/sprite":"characters/haeun_pout","assets/characters/haeun/expressions/relieved/01/sprite":"characters/haeun_relieved","assets/characters/haeun/expressions/sad/01/sprite":"characters/haeun_sad","assets/characters/haeun/expressions/scared/01/sprite":"characters/haeun_scared","assets/characters/haeun/expressions/scheming/01/sprite":"characters/haeun_scheming","assets/characters/haeun/expressions/scream/01/sprite":"characters/haeun_scream","assets/characters/haeun/expressions/seductive/01/sprite":"characters/haeun_seductive","assets/characters/haeun/expressions/shy/01/sprite":"characters/haeun_shy","assets/characters/haeun/expressions/smile/01/sprite":"characters/haeun_smile","assets/characters/haeun/expressions/smirk/01/sprite":"characters/haeun_smirk","assets/characters/haeun/expressions/sob/01/sprite":"characters/haeun_sob","assets/characters/haeun/expressions/soft_smile/01/sprite":"characters/haeun_soft_smile","assets/characters/haeun/expressions/surprised/01/sprite":"characters/haeun_surprised","assets/characters/haeun/expressions/suspicious/01/sprite":"characters/haeun_suspicious","assets/characters/haeun/expressions/sweat/01/sprite":"characters/haeun_sweat","assets/characters/haeun/expressions/tired/01/sprite":"characters/haeun_tired","assets/characters/haeun/expressions/touched/01/sprite":"characters/haeun_touched","assets/characters/haeun/expressions/undressed_shy/01/sprite":"characters/haeun_undressed_shy","assets/characters/haeun/expressions/very_shy/01/sprite":"characters/haeun_very_shy","assets/characters/haeun/expressions/worried/01/sprite":"characters/haeun_worried","assets/characters/junho/expressions/awkward/01/sprite":"characters/junho_awkward","assets/characters/junho/expressions/normal/01/sprite":"characters/junho_normal","assets/characters/minsu/expressions/active/01/sprite":"characters/minsu_active","assets/characters/minsu/expressions/aegyo/01/sprite":"characters/minsu_aegyo","assets/characters/minsu/expressions/afterglow/01/sprite":"characters/minsu_afterglow","assets/characters/minsu/expressions/angry/01/sprite":"characters/minsu_angry","assets/characters/minsu/expressions/begging_lust/01/sprite":"characters/minsu_begging_lust","assets/characters/minsu/expressions/betrayed/01/sprite":"characters/minsu_betrayed","assets/characters/minsu/expressions/bored/01/sprite":"characters/minsu_bored","assets/characters/minsu/expressions/choking/01/sprite":"characters/minsu_choking","assets/characters/minsu/expressions/climax/01/sprite":"characters/minsu_climax","assets/characters/minsu/expressions/climax/02/sprite":"characters/minsu_climax_02","assets/characters/minsu/expressions/climax/03/sprite":"characters/minsu_climax_03","assets/characters/minsu/expressions/climax/04/sprite":"characters/minsu_climax_04","assets/characters/minsu/expressions/climax/05/sprite":"characters/minsu_climax_05","assets/characters/minsu/expressions/climax/06/sprite":"characters/minsu_climax_06","assets/characters/minsu/expressions/cold/01/sprite":"characters/minsu_cold","assets/characters/minsu/expressions/combat_ready/01/sprite":"characters/minsu_combat_ready","assets/characters/minsu/expressions/confused/01/sprite":"characters/minsu_confused","assets/characters/minsu/expressions/cry/01/sprite":"characters/minsu_cry","assets/characters/minsu/expressions/dazed/01/sprite":"characters/minsu_dazed","assets/characters/minsu/expressions/dead/01/sprite":"characters/minsu_dead","assets/characters/minsu/expressions/disgusted/01/sprite":"characters/minsu_disgusted","assets/characters/minsu/expressions/dominant_aroused/01/sprite":"characters/minsu_dominant_aroused","assets/characters/minsu/expressions/dry_smile/01/sprite":"characters/minsu_dry_smile","assets/characters/minsu/expressions/dumbfounded/01/sprite":"characters/minsu_dumbfounded","assets/characters/minsu/expressions/enduring/01/sprite":"characters/minsu_enduring","assets/characters/minsu/expressions/entranced/01/sprite":"characters/minsu_entranced","assets/characters/minsu/expressions/exhausted/01/sprite":"characters/minsu_exhausted","assets/characters/minsu/expressions/fainted/01/sprite":"characters/minsu_fainted","assets/characters/minsu/expressions/firm/01/sprite":"characters/minsu_firm","assets/characters/minsu/expressions/flushed/01/sprite":"characters/minsu_flushed","assets/characters/minsu/expressions/flushed/02/sprite":"characters/minsu_flushed_02","assets/characters/minsu/expressions/flushed/03/sprite":"characters/minsu_flushed_03","assets/characters/minsu/expressions/furious/01/sprite":"characters/minsu_furious","assets/characters/minsu/expressions/groggy/01/sprite":"characters/minsu_groggy","assets/characters/minsu/expressions/humiliated/01/sprite":"characters/minsu_humiliated","assets/characters/minsu/expressions/jealous/01/sprite":"characters/minsu_jealous","assets/characters/minsu/expressions/kiss/01/sprite":"characters/minsu_kiss","assets/characters/minsu/expressions/laugh/01/sprite":"characters/minsu_laugh","assets/characters/minsu/expressions/lovestruck/01/sprite":"characters/minsu_lovestruck","assets/characters/minsu/expressions/messy_afterglow/01/sprite":"characters/minsu_messy_afterglow","assets/characters/minsu/expressions/normal/01/sprite":"characters/minsu_normal","assets/characters/minsu/expressions/oral_service/01/sprite":"characters/minsu_oral_service","assets/characters/minsu/expressions/pain/01/sprite":"characters/minsu_pain","assets/characters/minsu/expressions/pleading/01/sprite":"characters/minsu_pleading","assets/characters/minsu/expressions/pout/01/sprite":"characters/minsu_pout","assets/characters/minsu/expressions/relieved/01/sprite":"characters/minsu_relieved","assets/characters/minsu/expressions/sad/01/sprite":"characters/minsu_sad","assets/characters/minsu/expressions/scared/01/sprite":"characters/minsu_scared","assets/characters/minsu/expressions/scheming/01/sprite":"characters/minsu_scheming","assets/characters/minsu/expressions/scream/01/sprite":"characters/minsu_scream","assets/characters/minsu/expressions/seductive/01/sprite":"characters/minsu_seductive","assets/characters/minsu/expressions/shy/01/sprite":"characters/minsu_shy","assets/characters/minsu/expressions/smile/01/sprite":"characters/minsu_smile","assets/characters/minsu/expressions/smirk/01/sprite":"characters/minsu_smirk","assets/characters/minsu/expressions/sob/01/sprite":"characters/minsu_sob","assets/characters/minsu/expressions/soft_smile/01/sprite":"characters/minsu_soft_smile","assets/characters/minsu/expressions/surprised/01/sprite":"characters/minsu_surprised","assets/characters/minsu/expressions/suspicious/01/sprite":"characters/minsu_suspicious","assets/characters/minsu/expressions/sweat/01/sprite":"characters/minsu_sweat","assets/characters/minsu/expressions/tired/01/sprite":"characters/minsu_tired","assets/characters/minsu/expressions/touched/01/sprite":"characters/minsu_touched","assets/characters/minsu/expressions/undressed_shy/01/sprite":"characters/minsu_undressed_shy","assets/characters/minsu/expressions/very_shy/01/sprite":"characters/minsu_very_shy","assets/characters/minsu/expressions/worried/01/sprite":"characters/minsu_worried","assets/characters/nurse/expressions/active/01/sprite":"characters/nurse_active","assets/characters/nurse/expressions/aegyo/01/sprite":"characters/nurse_aegyo","assets/characters/nurse/expressions/afterglow/01/sprite":"characters/nurse_afterglow","assets/characters/nurse/expressions/ahegao/01/sprite":"characters/nurse_ahegao","assets/characters/nurse/expressions/angry/01/sprite":"characters/nurse_angry","assets/characters/nurse/expressions/begging_lust/01/sprite":"characters/nurse_begging_lust","assets/characters/nurse/expressions/betrayed/01/sprite":"characters/nurse_betrayed","assets/characters/nurse/expressions/bikini/01/sprite":"characters/nurse_bikini","assets/characters/nurse/expressions/bored/01/sprite":"characters/nurse_bored","assets/characters/nurse/expressions/choking/01/sprite":"characters/nurse_choking","assets/characters/nurse/expressions/climax/01/sprite":"characters/nurse_climax","assets/characters/nurse/expressions/climax/02/sprite":"characters/nurse_climax_02","assets/characters/nurse/expressions/climax/03/sprite":"characters/nurse_climax_03","assets/characters/nurse/expressions/climax/04/sprite":"characters/nurse_climax_04","assets/characters/nurse/expressions/climax/05/sprite":"characters/nurse_climax_05","assets/characters/nurse/expressions/climax/06/sprite":"characters/nurse_climax_06","assets/characters/nurse/expressions/climax/07/sprite":"characters/nurse_climax_07","assets/characters/nurse/expressions/climax/08/sprite":"characters/nurse_climax_08","assets/characters/nurse/expressions/climax/09/sprite":"characters/nurse_climax_09","assets/characters/nurse/expressions/cold/01/sprite":"characters/nurse_cold","assets/characters/nurse/expressions/combat_ready/01/sprite":"characters/nurse_combat_ready","assets/characters/nurse/expressions/confused/01/sprite":"characters/nurse_confused","assets/characters/nurse/expressions/cry/01/sprite":"characters/nurse_cry","assets/characters/nurse/expressions/dazed/01/sprite":"characters/nurse_dazed","assets/characters/nurse/expressions/dead/01/sprite":"characters/nurse_dead","assets/characters/nurse/expressions/disgusted/01/sprite":"characters/nurse_disgusted","assets/characters/nurse/expressions/dominant_aroused/01/sprite":"characters/nurse_dominant_aroused","assets/characters/nurse/expressions/dry_smile/01/sprite":"characters/nurse_dry_smile","assets/characters/nurse/expressions/dumbfounded/01/sprite":"characters/nurse_dumbfounded","assets/characters/nurse/expressions/enduring/01/sprite":"characters/nurse_enduring","assets/characters/nurse/expressions/entranced/01/sprite":"characters/nurse_entranced","assets/characters/nurse/expressions/exhausted/01/sprite":"characters/nurse_exhausted","assets/characters/nurse/expressions/fainted/01/sprite":"characters/nurse_fainted","assets/characters/nurse/expressions/firm/01/sprite":"characters/nurse_firm","assets/characters/nurse/expressions/flushed/01/sprite":"characters/nurse_flushed","assets/characters/nurse/expressions/flushed/02/sprite":"characters/nurse_flushed_02","assets/characters/nurse/expressions/flushed/03/sprite":"characters/nurse_flushed_03","assets/characters/nurse/expressions/furious/01/sprite":"characters/nurse_furious","assets/characters/nurse/expressions/groggy/01/sprite":"characters/nurse_groggy","assets/characters/nurse/expressions/humiliated/01/sprite":"characters/nurse_humiliated","assets/characters/nurse/expressions/jealous/01/sprite":"characters/nurse_jealous","assets/characters/nurse/expressions/kiss/01/sprite":"characters/nurse_kiss","assets/characters/nurse/expressions/laugh/01/sprite":"characters/nurse_laugh","assets/characters/nurse/expressions/lovestruck/01/sprite":"characters/nurse_lovestruck","assets/characters/nurse/expressions/messy_afterglow/01/sprite":"characters/nurse_messy_afterglow","assets/characters/nurse/expressions/normal/01/sprite":"characters/nurse_normal","assets/characters/nurse/expressions/oral_service/01/sprite":"characters/nurse_oral_service","assets/characters/nurse/expressions/pain/01/sprite":"characters/nurse_pain","assets/characters/nurse/expressions/pleading/01/sprite":"characters/nurse_pleading","assets/characters/nurse/expressions/pout/01/sprite":"characters/nurse_pout","assets/characters/nurse/expressions/relieved/01/sprite":"characters/nurse_relieved","assets/characters/nurse/expressions/sad/01/sprite":"characters/nurse_sad","assets/characters/nurse/expressions/scared/01/sprite":"characters/nurse_scared","assets/characters/nurse/expressions/scheming/01/sprite":"characters/nurse_scheming","assets/characters/nurse/expressions/scream/01/sprite":"characters/nurse_scream","assets/characters/nurse/expressions/seductive/01/sprite":"characters/nurse_seductive","assets/characters/nurse/expressions/shy/01/sprite":"characters/nurse_shy","assets/characters/nurse/expressions/smile/01/sprite":"characters/nurse_smile","assets/characters/nurse/expressions/smirk/01/sprite":"characters/nurse_smirk","assets/characters/nurse/expressions/sob/01/sprite":"characters/nurse_sob","assets/characters/nurse/expressions/soft_smile/01/sprite":"characters/nurse_soft_smile","assets/characters/nurse/expressions/surprised/01/sprite":"characters/nurse_surprised","assets/characters/nurse/expressions/suspicious/01/sprite":"characters/nurse_suspicious","assets/characters/nurse/expressions/sweat/01/sprite":"characters/nurse_sweat","assets/characters/nurse/expressions/tired/01/sprite":"characters/nurse_tired","assets/characters/nurse/expressions/touched/01/sprite":"characters/nurse_touched","assets/characters/nurse/expressions/undressed_shy/01/sprite":"characters/nurse_undressed_shy","assets/characters/nurse/expressions/very_shy/01/sprite":"characters/nurse_very_shy","assets/characters/nurse/expressions/worried/01/sprite":"characters/nurse_worried","assets/characters/nurse/outfits/home/expressions/angry/01/sprite":"characters/nurse_home_angry","assets/characters/nurse/outfits/home/expressions/normal/01/sprite":"characters/nurse_home_normal","assets/characters/nurse/outfits/home/expressions/sad/01/sprite":"characters/nurse_home_sad","assets/characters/nurse/outfits/home/expressions/shy/01/sprite":"characters/nurse_home_shy","assets/characters/nurse/outfits/home/expressions/smile/01/sprite":"characters/nurse_home_smile","assets/characters/seoyeon/expressions/active/01/sprite":"characters/seyoun_active","assets/characters/seoyeon/expressions/aegyo/01/sprite":"characters/seyoun_aegyo","assets/characters/seoyeon/expressions/afterglow/01/sprite":"characters/seyoun_afterglow","assets/characters/seoyeon/expressions/ahegao/01/sprite":"characters/seyoun_ahegao","assets/characters/seoyeon/expressions/angry/01/sprite":"characters/seyoun_angry","assets/characters/seoyeon/expressions/back/01/sprite":"characters/seyoun_back","assets/characters/seoyeon/expressions/begging_lust/01/sprite":"characters/seyoun_begging_lust","assets/characters/seoyeon/expressions/betrayed/01/sprite":"characters/seyoun_betrayed","assets/characters/seoyeon/expressions/bikini/01/sprite":"characters/seyoun_bikini","assets/characters/seoyeon/expressions/bored/01/sprite":"characters/seyoun_bored","assets/characters/seoyeon/expressions/choking/01/sprite":"characters/seyoun_choking","assets/characters/seoyeon/expressions/climax/01/sprite":"characters/seyoun_climax","assets/characters/seoyeon/expressions/climax/02/sprite":"characters/seyoun_climax_02","assets/characters/seoyeon/expressions/climax/03/sprite":"characters/seyoun_climax_03","assets/characters/seoyeon/expressions/climax/04/sprite":"characters/seyoun_climax_04","assets/characters/seoyeon/expressions/climax/05/sprite":"characters/seyoun_climax_05","assets/characters/seoyeon/expressions/climax/06/sprite":"characters/seyoun_climax_06","assets/characters/seoyeon/expressions/cold/01/sprite":"characters/seyoun_cold","assets/characters/seoyeon/expressions/combat_ready/01/sprite":"characters/seyoun_combat_ready","assets/characters/seoyeon/expressions/confused/01/sprite":"characters/seyoun_confused","assets/characters/seoyeon/expressions/cry/01/sprite":"characters/seyoun_cry","assets/characters/seoyeon/expressions/dazed/01/sprite":"characters/seyoun_dazed","assets/characters/seoyeon/expressions/dead/01/sprite":"characters/seyoun_dead","assets/characters/seoyeon/expressions/disgusted/01/sprite":"characters/seyoun_disgusted","assets/characters/seoyeon/expressions/dominant_aroused/01/sprite":"characters/seyoun_dominant_aroused","assets/characters/seoyeon/expressions/dry_smile/01/sprite":"characters/seyoun_dry_smile","assets/characters/seoyeon/expressions/dumbfounded/01/sprite":"characters/seyoun_dumbfounded","assets/characters/seoyeon/expressions/enduring/01/sprite":"characters/seyoun_enduring","assets/characters/seoyeon/expressions/entranced/01/sprite":"characters/seyoun_entranced","assets/characters/seoyeon/expressions/exhausted/01/sprite":"characters/seyoun_exhausted","assets/characters/seoyeon/expressions/fainted/01/sprite":"characters/seyoun_fainted","assets/characters/seoyeon/expressions/firm/01/sprite":"characters/seyoun_firm","assets/characters/seoyeon/expressions/flushed/01/sprite":"characters/seyoun_flushed","assets/characters/seoyeon/expressions/flushed/02/sprite":"characters/seyoun_flushed_02","assets/characters/seoyeon/expressions/flushed/03/sprite":"characters/seyoun_flushed_03","assets/characters/seoyeon/expressions/flushed/04/sprite":"characters/seyoun_flushed_04","assets/characters/seoyeon/expressions/flushed/05/sprite":"characters/seyoun_flushed_05","assets/characters/seoyeon/expressions/flushed/06/sprite":"characters/seyoun_flushed_06","assets/characters/seoyeon/expressions/furious/01/sprite":"characters/seyoun_furious","assets/characters/seoyeon/expressions/groggy/01/sprite":"characters/seyoun_groggy","assets/characters/seoyeon/expressions/humiliated/01/sprite":"characters/seyoun_humiliated","assets/characters/seoyeon/expressions/jealous/01/sprite":"characters/seyoun_jealous","assets/characters/seoyeon/expressions/kiss/01/sprite":"characters/seyoun_kiss","assets/characters/seoyeon/expressions/laugh/01/sprite":"characters/seyoun_laugh","assets/characters/seoyeon/expressions/lovestruck/01/sprite":"characters/seyoun_lovestruck","assets/characters/seoyeon/expressions/messy_afterglow/01/sprite":"characters/seyoun_messy_afterglow","assets/characters/seoyeon/expressions/normal/01/sprite":"characters/seyoun_normal","assets/characters/seoyeon/expressions/oral_service/01/sprite":"characters/seyoun_oral_service","assets/characters/seoyeon/expressions/pain/01/sprite":"characters/seyoun_pain","assets/characters/seoyeon/expressions/pleading/01/sprite":"characters/seyoun_pleading","assets/characters/seoyeon/expressions/pout/01/sprite":"characters/seyoun_pout","assets/characters/seoyeon/expressions/relieved/01/sprite":"characters/seyoun_relieved","assets/characters/seoyeon/expressions/sad/01/sprite":"characters/seyoun_sad","assets/characters/seoyeon/expressions/scared/01/sprite":"characters/seyoun_scared","assets/characters/seoyeon/expressions/scheming/01/sprite":"characters/seyoun_scheming","assets/characters/seoyeon/expressions/scream/01/sprite":"characters/seyoun_scream","assets/characters/seoyeon/expressions/seductive/01/sprite":"characters/seyoun_seductive","assets/characters/seoyeon/expressions/shy/01/sprite":"characters/seyoun_shy","assets/characters/seoyeon/expressions/smile/01/sprite":"characters/seyoun_smile","assets/characters/seoyeon/expressions/smirk/01/sprite":"characters/seyoun_smirk","assets/characters/seoyeon/expressions/sob/01/sprite":"characters/seyoun_sob","assets/characters/seoyeon/expressions/soft_smile/01/sprite":"characters/seyoun_soft_smile","assets/characters/seoyeon/expressions/surprised/01/sprite":"characters/seyoun_surprised","assets/characters/seoyeon/expressions/suspicious/01/sprite":"characters/seyoun_suspicious","assets/characters/seoyeon/expressions/sweat/01/sprite":"characters/seyoun_sweat","assets/characters/seoyeon/expressions/tired/01/sprite":"characters/seyoun_tired","assets/characters/seoyeon/expressions/touched/01/sprite":"characters/seyoun_touched","assets/characters/seoyeon/expressions/undressed_shy/01/sprite":"characters/seyoun_undressed_shy","assets/characters/seoyeon/expressions/very_shy/01/sprite":"characters/seyoun_very_shy","assets/characters/seoyeon/expressions/worried/01/sprite":"characters/seyoun_worried","assets/characters/seoyeon/outfits/date/expressions/laugh/01/sprite":"characters/seyoun_date_laugh","assets/characters/seoyeon/outfits/date/expressions/normal/01/sprite":"characters/seyoun_date_normal","assets/characters/seoyeon/outfits/date/expressions/sad/01/sprite":"characters/seyoun_date_sad","assets/characters/seoyeon/outfits/date/expressions/shy/01/sprite":"characters/seyoun_date_shy","assets/characters/seoyeon/outfits/date/expressions/worried/01/sprite":"characters/seyoun_date_worried","assets/characters/teacher/expressions/active/01/sprite":"characters/teacher_active","assets/characters/teacher/expressions/aegyo/01/sprite":"characters/teacher_aegyo","assets/characters/teacher/expressions/afterglow/01/sprite":"characters/teacher_afterglow","assets/characters/teacher/expressions/ahegao/01/sprite":"characters/teacher_ahegao","assets/characters/teacher/expressions/angry/01/sprite":"characters/teacher_angry","assets/characters/teacher/expressions/begging_lust/01/sprite":"characters/teacher_begging_lust","assets/characters/teacher/expressions/betrayed/01/sprite":"characters/teacher_betrayed","assets/characters/teacher/expressions/bikini/01/sprite":"characters/teacher_bikini","assets/characters/teacher/expressions/bored/01/sprite":"characters/teacher_bored","assets/characters/teacher/expressions/choking/01/sprite":"characters/teacher_choking","assets/characters/teacher/expressions/climax/01/sprite":"characters/teacher_climax","assets/characters/teacher/expressions/climax/02/sprite":"characters/teacher_climax_02","assets/characters/teacher/expressions/climax/03/sprite":"characters/teacher_climax_03","assets/characters/teacher/expressions/climax/04/sprite":"characters/teacher_climax_04","assets/characters/teacher/expressions/climax/05/sprite":"characters/teacher_climax_05","assets/characters/teacher/expressions/climax/06/sprite":"characters/teacher_climax_06","assets/characters/teacher/expressions/climax/07/sprite":"characters/teacher_climax_07","assets/characters/teacher/expressions/climax/08/sprite":"characters/teacher_climax_08","assets/characters/teacher/expressions/climax/09/sprite":"characters/teacher_climax_09","assets/characters/teacher/expressions/climax/10/sprite":"characters/teacher_climax_10","assets/characters/teacher/expressions/cold/01/sprite":"characters/teacher_cold","assets/characters/teacher/expressions/combat_ready/01/sprite":"characters/teacher_combat_ready","assets/characters/teacher/expressions/confused/01/sprite":"characters/teacher_confused","assets/characters/teacher/expressions/cry/01/sprite":"characters/teacher_cry","assets/characters/teacher/expressions/dazed/01/sprite":"characters/teacher_dazed","assets/characters/teacher/expressions/dead/01/sprite":"characters/teacher_dead","assets/characters/teacher/expressions/disgusted/01/sprite":"characters/teacher_disgusted","assets/characters/teacher/expressions/dominant_aroused/01/sprite":"characters/teacher_dominant_aroused","assets/characters/teacher/expressions/dry_smile/01/sprite":"characters/teacher_dry_smile","assets/characters/teacher/expressions/dumbfounded/01/sprite":"characters/teacher_dumbfounded","assets/characters/teacher/expressions/enduring/01/sprite":"characters/teacher_enduring","assets/characters/teacher/expressions/entranced/01/sprite":"characters/teacher_entranced","assets/characters/teacher/expressions/exhausted/01/sprite":"characters/teacher_exhausted","assets/characters/teacher/expressions/fainted/01/sprite":"characters/teacher_fainted","assets/characters/teacher/expressions/firm/01/sprite":"characters/teacher_firm","assets/characters/teacher/expressions/flushed/01/sprite":"characters/teacher_flushed","assets/characters/teacher/expressions/flushed/02/sprite":"characters/teacher_flushed_02","assets/characters/teacher/expressions/flushed/03/sprite":"characters/teacher_flushed_03","assets/characters/teacher/expressions/furious/01/sprite":"characters/teacher_furious","assets/characters/teacher/expressions/groggy/01/sprite":"characters/teacher_groggy","assets/characters/teacher/expressions/humiliated/01/sprite":"characters/teacher_humiliated","assets/characters/teacher/expressions/jealous/01/sprite":"characters/teacher_jealous","assets/characters/teacher/expressions/kiss/01/sprite":"characters/teacher_kiss","assets/characters/teacher/expressions/laugh/01/sprite":"characters/teacher_laugh","assets/characters/teacher/expressions/lovestruck/01/sprite":"characters/teacher_lovestruck","assets/characters/teacher/expressions/messy_afterglow/01/sprite":"characters/teacher_messy_afterglow","assets/characters/teacher/expressions/normal/01/sprite":"characters/teacher_normal","assets/characters/teacher/expressions/oral_service/01/sprite":"characters/teacher_oral_service","assets/characters/teacher/expressions/pain/01/sprite":"characters/teacher_pain","assets/characters/teacher/expressions/pleading/01/sprite":"characters/teacher_pleading","assets/characters/teacher/expressions/pout/01/sprite":"characters/teacher_pout","assets/characters/teacher/expressions/relieved/01/sprite":"characters/teacher_relieved","assets/characters/teacher/expressions/sad/01/sprite":"characters/teacher_sad","assets/characters/teacher/expressions/scared/01/sprite":"characters/teacher_scared","assets/characters/teacher/expressions/scheming/01/sprite":"characters/teacher_scheming","assets/characters/teacher/expressions/scream/01/sprite":"characters/teacher_scream","assets/characters/teacher/expressions/seductive/01/sprite":"characters/teacher_seductive","assets/characters/teacher/expressions/shy/01/sprite":"characters/teacher_shy","assets/characters/teacher/expressions/smile/01/sprite":"characters/teacher_smile","assets/characters/teacher/expressions/smirk/01/sprite":"characters/teacher_smirk","assets/characters/teacher/expressions/sob/01/sprite":"characters/teacher_sob","assets/characters/teacher/expressions/soft_smile/01/sprite":"characters/teacher_soft_smile","assets/characters/teacher/expressions/surprised/01/sprite":"characters/teacher_surprised","assets/characters/teacher/expressions/suspicious/01/sprite":"characters/teacher_suspicious","assets/characters/teacher/expressions/sweat/01/sprite":"characters/teacher_sweat","assets/characters/teacher/expressions/tired/01/sprite":"characters/teacher_tired","assets/characters/teacher/expressions/touched/01/sprite":"characters/teacher_touched","assets/characters/teacher/expressions/undressed_shy/01/sprite":"characters/teacher_undressed_shy","assets/characters/teacher/expressions/very_shy/01/sprite":"characters/teacher_very_shy","assets/characters/teacher/expressions/worried/01/sprite":"characters/teacher_worried","assets/characters/yuna/expressions/active/01/sprite":"characters/yuna_active","assets/characters/yuna/expressions/aegyo/01/sprite":"characters/yuna_aegyo","assets/characters/yuna/expressions/afterglow/01/sprite":"characters/yuna_afterglow","assets/characters/yuna/expressions/ahegao/01/sprite":"characters/yuna_ahegao","assets/characters/yuna/expressions/angry/01/sprite":"characters/yuna_angry","assets/characters/yuna/expressions/begging_lust/01/sprite":"characters/yuna_begging_lust","assets/characters/yuna/expressions/betrayed/01/sprite":"characters/yuna_betrayed","assets/characters/yuna/expressions/bikini/01/sprite":"characters/yuna_bikini","assets/characters/yuna/expressions/bored/01/sprite":"characters/yuna_bored","assets/characters/yuna/expressions/choking/01/sprite":"characters/yuna_choking","assets/characters/yuna/expressions/climax/01/sprite":"characters/yuna_climax","assets/characters/yuna/expressions/climax/02/sprite":"characters/yuna_climax_02","assets/characters/yuna/expressions/climax/03/sprite":"characters/yuna_climax_03","assets/characters/yuna/expressions/climax/04/sprite":"characters/yuna_climax_04","assets/characters/yuna/expressions/climax/05/sprite":"characters/yuna_climax_05","assets/characters/yuna/expressions/climax/06/sprite":"characters/yuna_climax_06","assets/characters/yuna/expressions/climax/07/sprite":"characters/yuna_climax_07","assets/characters/yuna/expressions/climax/08/sprite":"characters/yuna_climax_08","assets/characters/yuna/expressions/climax/09/sprite":"characters/yuna_climax_09","assets/characters/yuna/expressions/cold/01/sprite":"characters/yuna_cold","assets/characters/yuna/expressions/combat_ready/01/sprite":"characters/yuna_combat_ready","assets/characters/yuna/expressions/confused/01/sprite":"characters/yuna_confused","assets/characters/yuna/expressions/cry/01/sprite":"characters/yuna_cry","assets/characters/yuna/expressions/dazed/01/sprite":"characters/yuna_dazed","assets/characters/yuna/expressions/dead/01/sprite":"characters/yuna_dead","assets/characters/yuna/expressions/disgusted/01/sprite":"characters/yuna_disgusted","assets/characters/yuna/expressions/dominant_aroused/01/sprite":"characters/yuna_dominant_aroused","assets/characters/yuna/expressions/dry_smile/01/sprite":"characters/yuna_dry_smile","assets/characters/yuna/expressions/dumbfounded/01/sprite":"characters/yuna_dumbfounded","assets/characters/yuna/expressions/enduring/01/sprite":"characters/yuna_enduring","assets/characters/yuna/expressions/entranced/01/sprite":"characters/yuna_entranced","assets/characters/yuna/expressions/exhausted/01/sprite":"characters/yuna_exhausted","assets/characters/yuna/expressions/fainted/01/sprite":"characters/yuna_fainted","assets/characters/yuna/expressions/firm/01/sprite":"characters/yuna_firm","assets/characters/yuna/expressions/flushed/01/sprite":"characters/yuna_flushed","assets/characters/yuna/expressions/flushed/02/sprite":"characters/yuna_flushed_02","assets/characters/yuna/expressions/flushed/03/sprite":"characters/yuna_flushed_03","assets/characters/yuna/expressions/furious/01/sprite":"characters/yuna_furious","assets/characters/yuna/expressions/gallery_bikini_sexy_20260813/01/sprite":"characters/yuna_gallery_bikini_sexy_20260813","assets/characters/yuna/expressions/groggy/01/sprite":"characters/yuna_groggy","assets/characters/yuna/expressions/humiliated/01/sprite":"characters/yuna_humiliated","assets/characters/yuna/expressions/jealous/01/sprite":"characters/yuna_jealous","assets/characters/yuna/expressions/kiss/01/sprite":"characters/yuna_kiss","assets/characters/yuna/expressions/laugh/01/sprite":"characters/yuna_laugh","assets/characters/yuna/expressions/lovestruck/01/sprite":"characters/yuna_lovestruck","assets/characters/yuna/expressions/messy_afterglow/01/sprite":"characters/yuna_messy_afterglow","assets/characters/yuna/expressions/normal/01/sprite":"characters/yuna_normal","assets/characters/yuna/expressions/oral_service/01/sprite":"characters/yuna_oral_service","assets/characters/yuna/expressions/pain/01/sprite":"characters/yuna_pain","assets/characters/yuna/expressions/pleading/01/sprite":"characters/yuna_pleading","assets/characters/yuna/expressions/pout/01/sprite":"characters/yuna_pout","assets/characters/yuna/expressions/relieved/01/sprite":"characters/yuna_relieved","assets/characters/yuna/expressions/sad/01/sprite":"characters/yuna_sad","assets/characters/yuna/expressions/scared/01/sprite":"characters/yuna_scared","assets/characters/yuna/expressions/scheming/01/sprite":"characters/yuna_scheming","assets/characters/yuna/expressions/scream/01/sprite":"characters/yuna_scream","assets/characters/yuna/expressions/seductive/01/sprite":"characters/yuna_seductive","assets/characters/yuna/expressions/shy/01/sprite":"characters/yuna_shy","assets/characters/yuna/expressions/smile/01/sprite":"characters/yuna_smile","assets/characters/yuna/expressions/smirk/01/sprite":"characters/yuna_smirk","assets/characters/yuna/expressions/sob/01/sprite":"characters/yuna_sob","assets/characters/yuna/expressions/soft_smile/01/sprite":"characters/yuna_soft_smile","assets/characters/yuna/expressions/surprised/01/sprite":"characters/yuna_surprised","assets/characters/yuna/expressions/suspicious/01/sprite":"characters/yuna_suspicious","assets/characters/yuna/expressions/sweat/01/sprite":"characters/yuna_sweat","assets/characters/yuna/expressions/tired/01/sprite":"characters/yuna_tired","assets/characters/yuna/expressions/touched/01/sprite":"characters/yuna_touched","assets/characters/yuna/expressions/undressed_shy/01/sprite":"characters/yuna_undressed_shy","assets/characters/yuna/expressions/very_shy/01/sprite":"characters/yuna_very_shy","assets/characters/yuna/expressions/worried/01/sprite":"characters/yuna_worried","assets/characters/yuna/outfits/date/expressions/bored/01/sprite":"characters/yuna_date_bored","assets/characters/yuna/outfits/date/expressions/normal/01/sprite":"characters/yuna_date_normal","assets/characters/yuna/outfits/date/expressions/sad/01/sprite":"characters/yuna_date_sad","assets/characters/yuna/outfits/date/expressions/shy/01/sprite":"characters/yuna_date_shy","assets/characters/yuna/outfits/date/expressions/smile/01/sprite":"characters/yuna_date_smile"};
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
