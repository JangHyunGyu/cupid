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
  var MEDIA_VERSIONS = {"background/dain_depression_event1":"7ee4549e9c01d86d8ceddab7","background/dain_hurt_event1":"03c309e91448e74d0f6524af","background/ending_alone":"be11653d9adf4a7b306b9f91","background/ending_bittersweet":"51eab37dfe08db46f30d72a8","background/ending_bittersweet_nurse":"3d0e4a5f18806c68e6be9014","background/ending_bittersweet_teacher":"39233a3911500d9e632dc38b","background/ending_confess_fail_dain":"787b7ab28af2ca24cc4a6fad","background/ending_confess_fail_seoyeon":"73831ccd142f8a97d9e6183a","background/ending_confess_fail_yuna":"e32c7f7a67d89e96a8edef1d","background/ending_friend":"3d8c2f3494301d31d369e80a","background/ending_good_dain":"209cb4651368bfa637e273d5","background/ending_good_nurse":"753c7a2e322c44c535de071b","background/ending_good_seoyeon":"9619f8ad7d14301d96d44b24","background/ending_good_teacher":"2e6dd0c2716bf020f13cb957","background/ending_good_yuna":"09c67542dd7e066422d1843e","background/ending_harem":"00fc46d686b1dc0881557efe","background/ending_mayhem":"eebc0728b58bcec16e108f4f","background/ending_perfect_dain":"750033d2213d9d0240fdf07a","background/ending_perfect_haeun":"9903cd5bf1aa4e4465484b0e","background/ending_perfect_nurse":"2efe79fb6a3ccaa6bfc42ec5","background/ending_perfect_seoyeon":"513a2715bac51c0b403407ed","background/ending_perfect_teacher":"fe8877f9d320958a916ec193","background/ending_perfect_yuna":"d474988bda580a4fa93e9bdb","background/ending_true_dain":"208f6d687989178581114801","background/ending_true_nurse":"4727b2407b6623fd802285f8","background/ending_true_seoyeon":"edda8686b4b472e5099da930","background/ending_true_teacher":"14adfae607797f5fccdf601c","background/ending_true_yuna":"81604f5804f639ca8f67601c","background/event_haeun_reputation":"8b2edb7e9c3b3b7c804362ba","background/event_haeun_trust":"080f10ba1c95792d44d0de72","background/event_seoyeon_succulent":"839c54f07fdfee9f1a6c6cf0","background/event_temptation_dain":"ea1f573b313ef7004b352a28","background/event_temptation_seoyeon":"139380703754eeefce44522d","background/event_temptation_yuna":"a3c33707fefd16c91df8d4cf","background/event_yuna_reading":"f9fe8aae463477345c4cd825","background/nurse_home_event1":"8fb762c5beb1d01ee83bc97b","characters/dain_active":"24dcad7c8d56db6a14c65961","characters/dain_aegyo":"9de0648a23ba9160d4267cd7","characters/dain_afterglow":"2a3db0b9387afbcc00342fe6","characters/dain_ahegao":"ee6ce0e7905d35db00793715","characters/dain_angry":"0783809c0e6880fd8e776dd5","characters/dain_begging_lust":"487a9d65617654eca10e8901","characters/dain_betrayed":"1aa121904393ac96829f0f29","characters/dain_bikini":"675d1a52cea84edc24dddd5f","characters/dain_bored":"c912f475c0cb1e93f1140a65","characters/dain_choking":"6dad7bd868bfcb915663caa4","characters/dain_climax":"36febcae04743ce61cc76173","characters/dain_climax_02":"8e4b4c23814a2f480b120d68","characters/dain_climax_03":"42efec0b2cc141ddae9d7326","characters/dain_climax_04":"8922742b26c001db43a91449","characters/dain_climax_05":"0f1971d61e7019b6818bb9f1","characters/dain_climax_06":"f0865b7c19e5b931662c02a2","characters/dain_climax_07":"1a8dfb2a821bd4c7907cf099","characters/dain_climax_08":"8677fb742d7e0d4e69f8fe98","characters/dain_climax_09":"99a2615af520031aff36c8a7","characters/dain_climax_10":"2d383c11eba134d47899553f","characters/dain_climax_11":"efaf64fc6ee4b0a6d2f5857e","characters/dain_cold":"85287fc8510863ada3ff8816","characters/dain_combat_ready":"699c488740a962b04aa9ec88","characters/dain_confused":"834f52ceff8cdd48d57cbfc2","characters/dain_cry":"bfcad5abe72e6712eb656738","characters/dain_date_angry":"f311166e736e25579b24a4fa","characters/dain_date_laugh":"db52542591d9da4561dd1df0","characters/dain_date_normal":"262abf8666a117a4e6e5b978","characters/dain_date_sad":"ac3bf32b41ab3c53e368ab46","characters/dain_date_shy":"1b86a68b42e7d46de4a89994","characters/dain_date_sweat":"8c6258e782fb40f67b7cb67d","characters/dain_dazed":"64884b1179c50eeb2a764802","characters/dain_dead":"d53037c491d6b5a768d2b587","characters/dain_disgusted":"6899a6ac2639a8dfed0e7ef4","characters/dain_dominant_aroused":"491d7c627ac88f5bbc08e24a","characters/dain_dry_smile":"259f4891849b4b6944c065ee","characters/dain_dumbfounded":"9b1e0cc440bc2501b1315234","characters/dain_enduring":"a07766f24203838354689f7d","characters/dain_entranced":"ede1c6ace46351e274ef9bc4","characters/dain_exhausted":"bb9a4ab7fdbdaa3abe01265a","characters/dain_fainted":"43e04f3af1bfb90d138aede1","characters/dain_firm":"59b320713319dd7f4c7db080","characters/dain_flushed":"85553085912b3fa685d3d663","characters/dain_flushed_02":"139d2c28ca4da18896eda3a6","characters/dain_flushed_03":"d82dda74f45db626b1116843","characters/dain_furious":"515e974b3f8b89d54bf7ecf1","characters/dain_groggy":"2e272e9d36ed66777eb96a84","characters/dain_humiliated":"e151d83f6e552752b997931b","characters/dain_jealous":"5bc738281add081d053a34b0","characters/dain_kiss":"2a6812f7b37349b842b35ccd","characters/dain_laugh":"e225fe7851fb5fb972a604fd","characters/dain_lovestruck":"70ac1271c7b21404e2279714","characters/dain_messy_afterglow":"f2fe37853c06ff96676ef4ec","characters/dain_normal":"8f4807f857bcc237b0e44ca8","characters/dain_oral_service":"05e4126790081502ee26ed6e","characters/dain_pain":"7d43842bbed21a20058012e3","characters/dain_pleading":"589498ce5bc6c14e28df72fa","characters/dain_pout":"90de7b20257dd3630d75c5cb","characters/dain_relieved":"3c76f9db7e51ecfbd7bc7337","characters/dain_sad":"05dd02353d861a2801e49b44","characters/dain_scared":"7b16e8fd1bc74f7b4dc5f232","characters/dain_scheming":"49885e2e5c0497038159020f","characters/dain_scream":"46df815eaa168f34c09dfc02","characters/dain_seductive":"2e762b520a7e37a05375d694","characters/dain_shy":"41901638e460bebadb922d61","characters/dain_smile":"d4ebed1df77d988c3d595597","characters/dain_smirk":"ee432bb273f89e6173afb452","characters/dain_sob":"3efd8e3be27fdba428aa3d96","characters/dain_soft_smile":"1e140d84a734eee8d88d2614","characters/dain_surprised":"24a819e0e92af8637b96592e","characters/dain_suspicious":"8393102c894725ab685cc006","characters/dain_sweat":"c89a771d2c38694a15563fdb","characters/dain_tired":"bdb7f2f53d3b855a0ed40d98","characters/dain_touched":"41d3bd28c818ea98d7af0ef7","characters/dain_undressed_shy":"64ce84c807df300c39d2b322","characters/dain_very_shy":"376b75afef370884894ddf9d","characters/dain_worried":"a1dd0be823f79c3d413532b2","characters/haeun_active":"1c40216bd39ab7e9a58ee9d9","characters/haeun_aegyo":"e40a0d301ac0a77b24e5f782","characters/haeun_afterglow":"6cb31a44e00276c6d13597ef","characters/haeun_ahegao":"8e6a5087418bf86847ca9d01","characters/haeun_angry":"3dc292beafa600fce1b75c3d","characters/haeun_begging_lust":"09399adde187dc3e65668a02","characters/haeun_betrayed":"ba01b249cb0decfd37bb22e5","characters/haeun_bored":"a62256b96e560f3519ee46f4","characters/haeun_choking":"bbaad998dcfcfd67c5ac3e56","characters/haeun_climax":"a17d62b985a9add67759de15","characters/haeun_climax_02":"d245b0e7bb2aa3c3bc29a496","characters/haeun_climax_03":"9c73ae9c86d9a498ec19b30c","characters/haeun_climax_04":"5f74e7dd4b2dc17821fa1be8","characters/haeun_climax_05":"c6f186e2d7c6d06e94fbb673","characters/haeun_climax_06":"96aa8a7bbadc995fd5495554","characters/haeun_climax_07":"1c1a59dca74d280a54f5347e","characters/haeun_climax_08":"e4fbbf29b815804bb6b35fad","characters/haeun_cold":"55556d5ea152a717e9317c34","characters/haeun_combat_ready":"1c180026db02e9c82c806ee3","characters/haeun_confused":"0dd2625851b2e77e2bd681b8","characters/haeun_cry":"dd619c79faf620d83fa90c7d","characters/haeun_dazed":"370864b5e5c7f2b630721d21","characters/haeun_dead":"a31256f84c5edaae5147ae89","characters/haeun_disgusted":"8da853c797ea56c437d92160","characters/haeun_dominant_aroused":"7df78e5cfdfff6a0482e2aa7","characters/haeun_dry_smile":"fe425cce7cfd68af54b5a398","characters/haeun_dumbfounded":"362d199a6d3805cebd8794fe","characters/haeun_enduring":"e98fa97af2a27190acf495f4","characters/haeun_entranced":"0673a5e572392be96b5c0d99","characters/haeun_exhausted":"9c8ab94985a31084a4fbefcc","characters/haeun_fainted":"0e1b4cbaba449da5ecf720be","characters/haeun_firm":"f8c8562ff362d26a7cbb2b59","characters/haeun_flushed":"f82462160305c2a5811120e7","characters/haeun_flushed_02":"148b94d967514d336ff2a5df","characters/haeun_flushed_03":"24bf604596160387d05816c6","characters/haeun_furious":"9c533a389b2665c41ba3b748","characters/haeun_groggy":"c67866abdf9caace7e2edf5f","characters/haeun_humiliated":"20999c03d9a1438aef25e511","characters/haeun_jealous":"c7e64d6432186c5f29026c90","characters/haeun_kiss":"d0246dcb73ddf1184251dca7","characters/haeun_laugh":"37d280285b689ecd8ec0cafe","characters/haeun_lovestruck":"b5b3d6b3395b24b324ab1772","characters/haeun_messy_afterglow":"b2df3d08cecc96c8ef5feb93","characters/haeun_normal":"b473530fbc284e2287b30ff4","characters/haeun_oral_service":"6e37f01679ad5b2274efdbea","characters/haeun_pain":"846f345fe0a434d3de6e712a","characters/haeun_pleading":"a6aab556dcf4630d1bf101e8","characters/haeun_pout":"c975d14ae76615c2d7a7cefe","characters/haeun_relieved":"b7cb885c8cce4d7c59c636a0","characters/haeun_sad":"5a2751dc011511ddbbeb7949","characters/haeun_scared":"54dded2ae5f0889e4d47a4f7","characters/haeun_scheming":"d6c7391d2bd6efc8f3c2a80c","characters/haeun_scream":"5f01327edb551d9452e61523","characters/haeun_seductive":"4e30fdb1fec6183bf11b4994","characters/haeun_shy":"0efff9cbdc4ec19351d6134b","characters/haeun_smile":"2eac9ebe13b2b7d251c85095","characters/haeun_smirk":"6ab8865167ee8bd022dbbb63","characters/haeun_sob":"762b9eea1583786365d9d438","characters/haeun_soft_smile":"6206f5d57de5fd52b0a7c4a5","characters/haeun_surprised":"caaeb758ebcc97ec1d62f3f0","characters/haeun_suspicious":"478a7c0b25ca0f5b89bdf9cb","characters/haeun_sweat":"96283770f0cc345c7cd6b78b","characters/haeun_tired":"7ef766b596d1a4fd0ca38466","characters/haeun_touched":"524dce23a455fd2abd94e759","characters/haeun_undressed_shy":"a4692d30b67ad489b3e2b35d","characters/haeun_very_shy":"a574b1229f29a1c64ec58b5b","characters/haeun_worried":"18c4b8c4451e799d6726d522","characters/junho_awkward":"2e9fb0b44fa1f0750f560248","characters/junho_normal":"b088dd3040ad227a625d60c3","characters/minsu_active":"a622bda1ad5d539d49bddb31","characters/minsu_aegyo":"1c496a6799a6e1b94e5b5d5f","characters/minsu_afterglow":"a98416eb18d918376f5fb02b","characters/minsu_angry":"85e079282558a154cd194b00","characters/minsu_begging_lust":"b1326ea98a490ded0a7c5d34","characters/minsu_betrayed":"29dabe8624bd76b5782f67ae","characters/minsu_bored":"0a0f845bcca011a3181d1caf","characters/minsu_choking":"ca0d5ac5077ebaf915400436","characters/minsu_climax":"b46f8255266dcfb0a5e567f5","characters/minsu_climax_02":"2b36537ad15c59b2490320ab","characters/minsu_climax_03":"7835940ec6eeaaacbd7ac8e9","characters/minsu_climax_04":"0a413812cdfb4ec1ea339874","characters/minsu_climax_05":"9cee4c8d820a79169af7ee32","characters/minsu_climax_06":"2b10fae145f748ed5f395247","characters/minsu_cold":"bae6cf8b1f71b9bc580859c5","characters/minsu_combat_ready":"7aaaa9f027a51e0ead6cfd15","characters/minsu_confused":"0e5c63c1f3ad24b2782711fa","characters/minsu_cry":"809f62c16e4a3aff645f9125","characters/minsu_dazed":"d3afad1df44977f66c53d7eb","characters/minsu_dead":"7f2b460065cfd61824e41896","characters/minsu_disgusted":"ac7503b189a2872e7ffa0673","characters/minsu_dominant_aroused":"c2168f2662fe9fd687df9774","characters/minsu_dry_smile":"676f88ecc3be5efb0e45d8e0","characters/minsu_dumbfounded":"f6bcaeb3698bd8fc2c9b02f4","characters/minsu_enduring":"2dfd9638e9f2e347ba00c8d6","characters/minsu_entranced":"33e091f73596ed9d622dd72b","characters/minsu_exhausted":"16ed68b15535a4c22a11e814","characters/minsu_fainted":"b571ea0e131efac1878e12da","characters/minsu_firm":"a0acf549abce0fe2856c4b2b","characters/minsu_flushed":"ba70cf579248b5cb6a2744d3","characters/minsu_flushed_02":"7c6d62b0312438a6a34ad6d4","characters/minsu_flushed_03":"30e6fb9c4c38b968325bff9a","characters/minsu_furious":"594db127a011311d7e729e2e","characters/minsu_groggy":"698a76465961221200ccbf87","characters/minsu_humiliated":"8677664f3402b4def0e56f56","characters/minsu_jealous":"dc1a980b727c2ca132874496","characters/minsu_kiss":"99567748847cd1cc8c92b2ca","characters/minsu_laugh":"8820f80b6cac379ad64ea8c6","characters/minsu_lovestruck":"cfb56cc335547540b588f0c7","characters/minsu_messy_afterglow":"86bb8277f966d0760c7e8e26","characters/minsu_normal":"7a3a9ea160baa6a8b04b6efe","characters/minsu_oral_service":"038aa7144b4ba88855d5f7b8","characters/minsu_pain":"4e71f24058fbd46a517b0052","characters/minsu_pleading":"da10a11494fd51693c975c3a","characters/minsu_pout":"3eb4fe02929c0842ae62035a","characters/minsu_relieved":"554978b26a3c00ab0bce3f0f","characters/minsu_sad":"85f684f524f98045f449ba3e","characters/minsu_scared":"ae338ebbe68d6832cebb8d26","characters/minsu_scheming":"a350f6bd51688c81a71fc2b6","characters/minsu_scream":"bad96154b6106c7811be6026","characters/minsu_seductive":"e0889d56e8e6b2e869d2aec0","characters/minsu_shy":"667ff5a585191ac11490a206","characters/minsu_smile":"83a55aac8bf157e1289b0ed3","characters/minsu_smirk":"6142c33b70cbb15112af5ef8","characters/minsu_sob":"17e8bd25cfb78d7d4de46ead","characters/minsu_soft_smile":"d1013a410025e1b19a9ba8dc","characters/minsu_surprised":"4810642fe5c507395a50d6e4","characters/minsu_suspicious":"0671cdd72d6f4c8e3205c42f","characters/minsu_sweat":"def101aa22f8e84a0ffe1ab2","characters/minsu_tired":"20b77100ff3c9eb53a4d4db0","characters/minsu_touched":"ae02745b7a0d9a52b3434dc0","characters/minsu_undressed_shy":"85ef3338dbeaab85539f83f8","characters/minsu_very_shy":"413b77455bc7da0dd89b56e4","characters/minsu_worried":"d6e6dce5c4810547f83cb0b7","characters/nurse_active":"bc88ce8b0aa7052fb69ccbd6","characters/nurse_aegyo":"f1036a9dfac53ec14d53eed1","characters/nurse_afterglow":"8c663b6e4c2a91d174a2d72a","characters/nurse_ahegao":"035a039a97a334dd55ab5c04","characters/nurse_angry":"2b390534dc032e492b63eb17","characters/nurse_begging_lust":"d593143819b6db5820401c6d","characters/nurse_betrayed":"a07a3f767cbd5b76d1667b2f","characters/nurse_bikini":"2d02c75d38dad14d33e150df","characters/nurse_bored":"8f2d380b8cd95e8340bff431","characters/nurse_choking":"b6dfcf7eac85c7c031252da8","characters/nurse_climax":"52b4f653b6e1a03909f1a091","characters/nurse_climax_02":"4b14eb18464532db0207a215","characters/nurse_climax_03":"c7ec710c1979388f4d3b23d6","characters/nurse_climax_04":"f784dbcb30843a8b284d4d52","characters/nurse_climax_05":"cdf4c481d809948b987cd206","characters/nurse_climax_06":"8bd27ac37283667a7885689c","characters/nurse_climax_07":"3d8087f9c0a4ea5a0e0928af","characters/nurse_climax_08":"ff2838ade630d6736753729f","characters/nurse_climax_09":"1d09b5917cadbfa6496f2137","characters/nurse_cold":"8f0d796a0b4ff7b13cc90341","characters/nurse_combat_ready":"7e2812c7c0a610eef9484827","characters/nurse_confused":"1f23517997ae01c76f020f33","characters/nurse_cry":"620c20104858cb5fb6695328","characters/nurse_dazed":"a6959cf2b23177aca027c2ab","characters/nurse_dead":"33b48e8aa618c3b980f5ae4f","characters/nurse_disgusted":"095aa4dabca53318fada7469","characters/nurse_dominant_aroused":"39bd9f14b7b00ac82362b692","characters/nurse_dry_smile":"ac7cadf990e5837650d0e434","characters/nurse_dumbfounded":"717efb295de2c2e7b804cf3e","characters/nurse_enduring":"134fac38e3bcf2a662209d8b","characters/nurse_entranced":"72db8afa0fce91e72dde496f","characters/nurse_exhausted":"c1681995a50c887d1c5af1ae","characters/nurse_fainted":"73d34731ef20e997f3ea28db","characters/nurse_firm":"5a1f883b3ce5261d10debbfc","characters/nurse_flushed":"fae7a0d4d033003c145213a2","characters/nurse_flushed_02":"97a76ea03178bcb57df6c1a2","characters/nurse_flushed_03":"3e3c89bfbb57ff440afc494c","characters/nurse_furious":"fe20dbea25ced392273e28de","characters/nurse_groggy":"36064b7164743fba9d0b775a","characters/nurse_home_angry":"65b609cc26923bbca70fa038","characters/nurse_home_normal":"c2440330610e161ff5da49dc","characters/nurse_home_sad":"20433c3eca67e8ffb687ba69","characters/nurse_home_shy":"9fdd7ad9df5505605f34ef3e","characters/nurse_home_smile":"e944d7543192da748bf03d9c","characters/nurse_humiliated":"a1506a675585231dca89ac83","characters/nurse_jealous":"1f2ca7bbaa8720097dbb708e","characters/nurse_kiss":"c5e9d2d68d9915df24968eba","characters/nurse_laugh":"57ff1d40abb74d223641688e","characters/nurse_lovestruck":"5ad91a4cf6a8b22abd438080","characters/nurse_messy_afterglow":"b33c98ab7e5506f30a500ef6","characters/nurse_normal":"194b2c1d1608b2f210868186","characters/nurse_oral_service":"540e9cad66b6777deb6e46f8","characters/nurse_pain":"29965853d9432739d4394629","characters/nurse_pleading":"b3a66e2b60adf34763b84e6d","characters/nurse_pout":"1c4fc26c348a3eedbbb4c9a9","characters/nurse_relieved":"3a11336845670cfe959cc60f","characters/nurse_sad":"05077b9caf10a477179b72e1","characters/nurse_scared":"243fe37623b8d85afbd5f5f9","characters/nurse_scheming":"a3e71db5bd9807e0bd85145b","characters/nurse_scream":"6e71d340f8b27ba6adb946e4","characters/nurse_seductive":"b519caaa6c2cf0762eea4d26","characters/nurse_shy":"92bef743743c3c2b466083ac","characters/nurse_smile":"3df8d9c8b4e21a94359d29ca","characters/nurse_smirk":"d309ca9a506a28454a7bdb5c","characters/nurse_sob":"6df39a65bc91a2a92997e312","characters/nurse_soft_smile":"9dc36b83813aa23b941629f0","characters/nurse_surprised":"b6a5471a43e9afa4b526bb81","characters/nurse_suspicious":"ec68bb1109c525206dd966ed","characters/nurse_sweat":"273fd8b7d92fca0194a386a4","characters/nurse_tired":"48f765bead3c975c38186955","characters/nurse_touched":"b29e7bd6b20c3879975e1e64","characters/nurse_undressed_shy":"5b5fcba99fcd4a288ce9cd3b","characters/nurse_very_shy":"b0f16a8a26fa80d3cf25e517","characters/nurse_worried":"5fcaca48a1a62dd4e74062e9","characters/seyoun_active":"a735141cc3149b05a0387a63","characters/seyoun_aegyo":"57e55d0de4d82aa85c7859d6","characters/seyoun_afterglow":"155c7b5ac9d292da493db35f","characters/seyoun_ahegao":"6764ee47709a66f9be386a9e","characters/seyoun_angry":"e99a1b8f6efdcf08651cd527","characters/seyoun_back":"ff25e983526ea4c8f332f003","characters/seyoun_begging_lust":"7806ddea419da722f4ef5479","characters/seyoun_betrayed":"dd484f17768c4724bde420eb","characters/seyoun_bikini":"811254edce80a69af5e46c3b","characters/seyoun_bored":"6c95e9402c804002bf740b9b","characters/seyoun_choking":"85b9a19ce2df49b91b69b6af","characters/seyoun_climax":"bb0e91a38b77a76e9b591f6b","characters/seyoun_climax_02":"12e0a725272b8be54eae585f","characters/seyoun_climax_03":"79eff4f1639f4c0b1dfc16fb","characters/seyoun_climax_04":"7839ddfe0b6f838ec529f12c","characters/seyoun_climax_05":"6f2e4630591a6cd5483e64a5","characters/seyoun_climax_06":"adff524d8cb3dc3a52184b5d","characters/seyoun_cold":"9e7dd8ae89e0c3c3135b4ad6","characters/seyoun_combat_ready":"113add75c7369d2ba93ff47f","characters/seyoun_confused":"c80ef7d54671c9afcd336e1f","characters/seyoun_cry":"917a92ef316ebcdc5d9d19c4","characters/seyoun_date_laugh":"782d59181950ecec34f63565","characters/seyoun_date_normal":"2ab48647f5328b7331a74bc2","characters/seyoun_date_sad":"49d60b12c50af6e72f9e8f8d","characters/seyoun_date_shy":"bf8ace01b165c9442270ec09","characters/seyoun_date_worried":"1819972fb0d874d578757b1f","characters/seyoun_dazed":"2f14f681203c80d032c614ba","characters/seyoun_dead":"d688e805e80394a84ec2bef6","characters/seyoun_disgusted":"628a0cef8792b7b27b4d1faa","characters/seyoun_dominant_aroused":"6748addc300bc40c4eae1bf1","characters/seyoun_dry_smile":"14f73a984077738e092b575b","characters/seyoun_dumbfounded":"272eccac4fc4385cd606f114","characters/seyoun_enduring":"6c4e92ca6e8e2e96e9c6eb69","characters/seyoun_entranced":"f57beed2ca3343477f0bcfe8","characters/seyoun_exhausted":"ae64335fb2ff15e71ba4e056","characters/seyoun_fainted":"e94d04eda8d6c5768bb0b658","characters/seyoun_firm":"c786a4596465a9ece4c22ba5","characters/seyoun_flushed":"72fca9539628a3a62c0791ed","characters/seyoun_flushed_02":"1f7c4bb10f72da3cd9c86e77","characters/seyoun_flushed_03":"62217a4795a3d7ce0548ed34","characters/seyoun_flushed_04":"e9fbc2f7cab8ec3df6c1b6ba","characters/seyoun_flushed_05":"a780bd0c959254cecd62f22e","characters/seyoun_flushed_06":"823262a31f7105cdd0e3e384","characters/seyoun_furious":"6fd238b0896389b3aee31253","characters/seyoun_groggy":"b9ddef20db0dfe34719a15e8","characters/seyoun_humiliated":"c1f700683a964aa508b9ca80","characters/seyoun_jealous":"74d152307245fa146ab0f286","characters/seyoun_kiss":"85a789f74eeacf45e1a7f1ff","characters/seyoun_laugh":"c07804924056500cff812e31","characters/seyoun_lovestruck":"9e16749ac475f40669d90c52","characters/seyoun_messy_afterglow":"fdc50889c6d2f6f81d71eccc","characters/seyoun_normal":"e403b3ebe88323480bb49ce6","characters/seyoun_oral_service":"d4f26ee481bd738f1c19f9d1","characters/seyoun_pain":"468c06565a261f8046c982ac","characters/seyoun_pleading":"8e8ad06a69c3d3ef4a86de79","characters/seyoun_pout":"60ec4577c354397a7cd083b4","characters/seyoun_relieved":"557d184dd2be43fed6d62ba5","characters/seyoun_sad":"2aa3fbdbf94bd3f423a0ba06","characters/seyoun_scared":"4083915dd0131a6ff1c321db","characters/seyoun_scheming":"6944a2505591c54e543f127d","characters/seyoun_scream":"bc12cf0cac48a9bec734a103","characters/seyoun_seductive":"b94fb99dad5cdc9f9664125c","characters/seyoun_shy":"4133ad96b4afb3e48f481f27","characters/seyoun_smile":"42f57de55d3a810ec23a9a43","characters/seyoun_smirk":"092f57ba6cd094f32bb2e08d","characters/seyoun_sob":"195144795e04665c5284e4bb","characters/seyoun_soft_smile":"ba6509c22b3574ec45c2d030","characters/seyoun_surprised":"219b443279dcf75dde29dee2","characters/seyoun_suspicious":"3acaf67575d474e0957694dc","characters/seyoun_sweat":"7eefee266a4812bffe4581af","characters/seyoun_tired":"e2c2abd85282674c8e643ee6","characters/seyoun_touched":"3cfeb5effcdae5b25583c41c","characters/seyoun_undressed_shy":"298b0ca4c07a6042b6db49ed","characters/seyoun_very_shy":"7d7928892fde8a6f605cbb63","characters/seyoun_worried":"0c26351fa23c5fe75ea4a041","characters/teacher_active":"04ee91d5f4f80ff404e7ebc1","characters/teacher_aegyo":"af3f0dbfa4bf80db3098127e","characters/teacher_afterglow":"276e2cd9956c8693538f60f4","characters/teacher_ahegao":"b02662146b7163f6ee2f7a70","characters/teacher_angry":"59459ddf6f6e8ac3ce31f496","characters/teacher_begging_lust":"7ef77c118eea4cc66bb40943","characters/teacher_betrayed":"6d72e3dbc55c3149093bcf22","characters/teacher_bikini":"e28249e4880d2192538f472a","characters/teacher_bored":"196ba71214c411e38b272649","characters/teacher_choking":"85fc2acaf23d288b3d2cbafa","characters/teacher_climax":"2cc0ed23cc4df8a354e68281","characters/teacher_climax_02":"54ee43b24dab63b460952255","characters/teacher_climax_03":"e5f43b34cad1fe2aedfa2465","characters/teacher_climax_04":"c7f833e610b5f66d36a7da89","characters/teacher_climax_05":"c6de8667dfe1fba6201dc82c","characters/teacher_climax_06":"3efbd88772c20b14637cc629","characters/teacher_climax_07":"a3114791a771e79f5042d0ad","characters/teacher_climax_08":"a43025ec1aa46a0050b4b1e9","characters/teacher_climax_09":"898c6b3c5fdddc9204d4ffe9","characters/teacher_climax_10":"0650c1385af70eee5d002e98","characters/teacher_cold":"d91b0f35b6a3955b2c6ab4ca","characters/teacher_combat_ready":"bacc7f85407a930c0ddfd1bf","characters/teacher_confused":"005717d4cdacbb74de422ee7","characters/teacher_cry":"66faf75bd8cbdda7bfcdc8f8","characters/teacher_dazed":"86fbf164ea2db24d04f1a9bf","characters/teacher_dead":"e9f4eac6e6e7c167a9848ed8","characters/teacher_disgusted":"bb0dab74644c6385cbf5accc","characters/teacher_dominant_aroused":"939d38560cb9363a3b3a80b4","characters/teacher_dry_smile":"24e5cd319540850f18aceff7","characters/teacher_dumbfounded":"ea5efce8e87871f70a8a7307","characters/teacher_enduring":"35b34cce587edc63e14082c5","characters/teacher_entranced":"f0a59cc5e0d69a9267636546","characters/teacher_exhausted":"b1c84609e723988e131c20ef","characters/teacher_fainted":"dc6aa17a2d6ef0244e8e3bd7","characters/teacher_firm":"21e6e4edad5e230d1876820c","characters/teacher_flushed":"6c1445ba8148776ddc6b1b02","characters/teacher_flushed_02":"26d784be3d51ace01f315293","characters/teacher_flushed_03":"910386dbcdb20382644c5671","characters/teacher_furious":"89df08a60a4aeb88084eb63a","characters/teacher_groggy":"6de3b16f114de21d6330efcc","characters/teacher_humiliated":"963a2acbaa37b53e39809de5","characters/teacher_jealous":"884ff879172a51e10dad7063","characters/teacher_kiss":"265e0b42489dff0ad4746169","characters/teacher_laugh":"e097987d82f65c2bc06c9e97","characters/teacher_lovestruck":"e16f9b94507a89db3a3a3451","characters/teacher_messy_afterglow":"8e234e32d9759b556c7e44c0","characters/teacher_normal":"9d111c1053b7d46bd38f137f","characters/teacher_oral_service":"e6532cba48ddb8ff3a2c4974","characters/teacher_pain":"993fb58f2641064dd92ceb61","characters/teacher_pleading":"3c6b8feff223ec2c0bf0bec5","characters/teacher_pout":"d46b21d1da47622cc1dbe542","characters/teacher_relieved":"3e5bc8a8ecc4bfcd943a035e","characters/teacher_sad":"31414abc144b99ace2d884fa","characters/teacher_scared":"cfc53ce21be43cd6afa1479b","characters/teacher_scheming":"0e17ce397481f4d9025b203f","characters/teacher_scream":"f4365f29577381aded025d1b","characters/teacher_seductive":"ae8c6c7697b766d4d8549c41","characters/teacher_shy":"3c2c09b1312f8790390d6625","characters/teacher_smile":"8b8bc3c4ae44759b66dcd066","characters/teacher_smirk":"2e9e89506e57cb7405495767","characters/teacher_sob":"caeb6cef88cbf1a8e8336df7","characters/teacher_soft_smile":"9daf86c6ff83fbe8cffc459f","characters/teacher_surprised":"80d5477abb16c67597c2c245","characters/teacher_suspicious":"7ef22941f98cfaab34919376","characters/teacher_sweat":"0d434406bd5dc26dc0ec470e","characters/teacher_tired":"4d6bc97dc0ebcbf4595f41f7","characters/teacher_touched":"d509f5ad6879f428afd79cb6","characters/teacher_undressed_shy":"6d2d55c3f9cddd79714a1eb9","characters/teacher_very_shy":"0f01101a99681fef40db1315","characters/teacher_worried":"1ea742632d285b7d8fe7e8ce","characters/yuna_active":"7bce4caa8debe0c346b5b9bd","characters/yuna_aegyo":"e463403b85d1c4af261bf3e7","characters/yuna_afterglow":"e97dd80ebf81901763b3f69a","characters/yuna_ahegao":"f5c6797691754b73ddd73e8d","characters/yuna_angry":"a2cff628ca61f5caf7b75ff6","characters/yuna_begging_lust":"9fd241fd3f9daa2eca9584c7","characters/yuna_betrayed":"058c6a8c871d006c772948db","characters/yuna_bikini":"f7e257282a62e3a43bf17635","characters/yuna_bored":"723b03601d3db6976cf77320","characters/yuna_choking":"6fbbd548ce6b003bf271ccf6","characters/yuna_climax":"888fbe43c52cad08fca80d65","characters/yuna_climax_02":"0041c791468d2e61f35d972f","characters/yuna_climax_03":"d9bdb569b563b80297206395","characters/yuna_climax_04":"8b795248c42c2c0bc81fc77f","characters/yuna_climax_05":"23c3073503f1ae0a200eb58d","characters/yuna_climax_06":"ac3cb42697a351af0967b98c","characters/yuna_climax_07":"6725d229f6e9e41af2572a35","characters/yuna_climax_08":"1462713db39a520e03f471e9","characters/yuna_climax_09":"dfc966c5632ca972d4febe9c","characters/yuna_cold":"ad1e86eeb76995e8ef170f3b","characters/yuna_combat_ready":"3da680e91b19892fd23cc294","characters/yuna_confused":"6349d0e22d8405e6b28805b2","characters/yuna_cry":"fdb0fb574d69e2ea7b8fb57a","characters/yuna_date_bored":"ad47c1ad4dbe2f408616bfa3","characters/yuna_date_normal":"3b3fde66d1fac0574c83b3fb","characters/yuna_date_sad":"1e7ea7d0dc296f7704ef2151","characters/yuna_date_shy":"718edd40188722ecea7ac05a","characters/yuna_date_smile":"92fafb35f27abf000e77f32f","characters/yuna_dazed":"a9e070d26594b69f5495f88b","characters/yuna_dead":"1525684dc027994412ce5299","characters/yuna_disgusted":"36150a59b1af18df4435f011","characters/yuna_dominant_aroused":"3ef2f19db2d1204049c5fc7a","characters/yuna_dry_smile":"c1dc1239c97d35893d219b15","characters/yuna_dumbfounded":"4c27e577d161e12a4dd98385","characters/yuna_enduring":"2803f63a55380b0f4adf7c15","characters/yuna_entranced":"515585bb217f043e5cce48ff","characters/yuna_exhausted":"811433eb2f85c95502ebf3a6","characters/yuna_fainted":"ead34ecf687066f1d715410f","characters/yuna_firm":"5296bea7ed8654ca3813781a","characters/yuna_flushed":"cf3e80f5561b36fdd2c370e7","characters/yuna_flushed_02":"86a9fca575a0cd8ff8a5eaaa","characters/yuna_flushed_03":"8ca6ddc7e5a91dc37b0a14e3","characters/yuna_furious":"e9091430214a7764e3532d43","characters/yuna_gallery_bikini_sexy_20260813":"7cfb2d83e446e8a8da023f1c","characters/yuna_groggy":"ce90336458113cb92a3f4097","characters/yuna_humiliated":"97dc245bda2680c24bf7694c","characters/yuna_jealous":"97cd02cff9c3c0a538ab3d9f","characters/yuna_kiss":"c64c67a5e39963b227eafb18","characters/yuna_laugh":"c67a246ef317589d11e8f4f3","characters/yuna_lovestruck":"14b915500763edd34135ae6b","characters/yuna_messy_afterglow":"86f342956145383a72d023c3","characters/yuna_normal":"4034aa7fd0075b4211d588b2","characters/yuna_oral_service":"a9d5c545fcae55e5eb4a1b26","characters/yuna_pain":"fd4309eef31f396d8fe5ebe7","characters/yuna_pleading":"d4357d3bcf174eb57060321f","characters/yuna_pout":"86583192bdd453d271381da5","characters/yuna_relieved":"bbf1c227fe71d0bd1d867dd9","characters/yuna_sad":"fd7812fd5d37a12229396aaf","characters/yuna_scared":"206e915589a163f0e419398c","characters/yuna_scheming":"632d526a05ad629bb755d2b5","characters/yuna_scream":"38d8c7ae884bf6b66f95939a","characters/yuna_seductive":"bff71e61af1496e613cd877f","characters/yuna_shy":"bfd74df81e317f8d8391fba9","characters/yuna_smile":"7c13017edd4d38d23a12f22a","characters/yuna_smirk":"fa6f1b46c09ab33e33cb2a3c","characters/yuna_sob":"81e64d23e9164c4a31436927","characters/yuna_soft_smile":"ad987d11b3d24b49eda3cdbf","characters/yuna_surprised":"2ca36fca1cd5e81a3d1fe0f2","characters/yuna_suspicious":"1f1e013819a20df8b83c81c0","characters/yuna_sweat":"4ee3acd5995a62e1716d561b","characters/yuna_tired":"5677ffafff0bfa84cbbffd1b","characters/yuna_touched":"09b7253b5c740f3f00a704dc","characters/yuna_undressed_shy":"e31304caef42cab72122c8b0","characters/yuna_very_shy":"73c0ae8fc9af18f76a9154d8","characters/yuna_worried":"71a1a831aaddc5496611defd"};
  var CHARACTER_ASSET_IDS = {"assets/characters/dain/expressions/active/01/sprite":"characters/dain_active","assets/characters/dain/expressions/aegyo/01/sprite":"characters/dain_aegyo","assets/characters/dain/expressions/afterglow/01/sprite":"characters/dain_afterglow","assets/characters/dain/expressions/ahegao/01/sprite":"characters/dain_ahegao","assets/characters/dain/expressions/angry/01/sprite":"characters/dain_angry","assets/characters/dain/expressions/bikini/01/sprite":"characters/dain_bikini","assets/characters/dain/expressions/bored/01/sprite":"characters/dain_bored","assets/characters/dain/expressions/choking/01/sprite":"characters/dain_choking","assets/characters/dain/expressions/climax/01/sprite":"characters/dain_climax","assets/characters/dain/expressions/climax/02/sprite":"characters/dain_climax_02","assets/characters/dain/expressions/climax/03/sprite":"characters/dain_climax_03","assets/characters/dain/expressions/climax/04/sprite":"characters/dain_climax_04","assets/characters/dain/expressions/climax/05/sprite":"characters/dain_climax_05","assets/characters/dain/expressions/climax/06/sprite":"characters/dain_climax_06","assets/characters/dain/expressions/climax/07/sprite":"characters/dain_climax_07","assets/characters/dain/expressions/climax/08/sprite":"characters/dain_climax_08","assets/characters/dain/expressions/climax/09/sprite":"characters/dain_climax_09","assets/characters/dain/expressions/climax/10/sprite":"characters/dain_climax_10","assets/characters/dain/expressions/climax/11/sprite":"characters/dain_climax_11","assets/characters/dain/expressions/cold/01/sprite":"characters/dain_cold","assets/characters/dain/expressions/confused/01/sprite":"characters/dain_confused","assets/characters/dain/expressions/cry/01/sprite":"characters/dain_cry","assets/characters/dain/expressions/dazed/01/sprite":"characters/dain_dazed","assets/characters/dain/expressions/dead/01/sprite":"characters/dain_dead","assets/characters/dain/expressions/disgusted/01/sprite":"characters/dain_disgusted","assets/characters/dain/expressions/dry_smile/01/sprite":"characters/dain_dry_smile","assets/characters/dain/expressions/dumbfounded/01/sprite":"characters/dain_dumbfounded","assets/characters/dain/expressions/entranced/01/sprite":"characters/dain_entranced","assets/characters/dain/expressions/exhausted/01/sprite":"characters/dain_exhausted","assets/characters/dain/expressions/fainted/01/sprite":"characters/dain_fainted","assets/characters/dain/expressions/firm/01/sprite":"characters/dain_firm","assets/characters/dain/expressions/flushed/01/sprite":"characters/dain_flushed","assets/characters/dain/expressions/flushed/02/sprite":"characters/dain_flushed_02","assets/characters/dain/expressions/flushed/03/sprite":"characters/dain_flushed_03","assets/characters/dain/expressions/furious/01/sprite":"characters/dain_furious","assets/characters/dain/expressions/humiliated/01/sprite":"characters/dain_humiliated","assets/characters/dain/expressions/jealous/01/sprite":"characters/dain_jealous","assets/characters/dain/expressions/kiss/01/sprite":"characters/dain_kiss","assets/characters/dain/expressions/laugh/01/sprite":"characters/dain_laugh","assets/characters/dain/expressions/lovestruck/01/sprite":"characters/dain_lovestruck","assets/characters/dain/expressions/normal/01/sprite":"characters/dain_normal","assets/characters/dain/expressions/pain/01/sprite":"characters/dain_pain","assets/characters/dain/expressions/pleading/01/sprite":"characters/dain_pleading","assets/characters/dain/expressions/pout/01/sprite":"characters/dain_pout","assets/characters/dain/expressions/relieved/01/sprite":"characters/dain_relieved","assets/characters/dain/expressions/sad/01/sprite":"characters/dain_sad","assets/characters/dain/expressions/scared/01/sprite":"characters/dain_scared","assets/characters/dain/expressions/scream/01/sprite":"characters/dain_scream","assets/characters/dain/expressions/seductive/01/sprite":"characters/dain_seductive","assets/characters/dain/expressions/shy/01/sprite":"characters/dain_shy","assets/characters/dain/expressions/smile/01/sprite":"characters/dain_smile","assets/characters/dain/expressions/smirk/01/sprite":"characters/dain_smirk","assets/characters/dain/expressions/sob/01/sprite":"characters/dain_sob","assets/characters/dain/expressions/soft_smile/01/sprite":"characters/dain_soft_smile","assets/characters/dain/expressions/surprised/01/sprite":"characters/dain_surprised","assets/characters/dain/expressions/suspicious/01/sprite":"characters/dain_suspicious","assets/characters/dain/expressions/sweat/01/sprite":"characters/dain_sweat","assets/characters/dain/expressions/tired/01/sprite":"characters/dain_tired","assets/characters/dain/expressions/very_shy/01/sprite":"characters/dain_very_shy","assets/characters/dain/expressions/worried/01/sprite":"characters/dain_worried","assets/characters/dain/outfits/date/expressions/angry/01/sprite":"characters/dain_date_angry","assets/characters/dain/outfits/date/expressions/laugh/01/sprite":"characters/dain_date_laugh","assets/characters/dain/outfits/date/expressions/normal/01/sprite":"characters/dain_date_normal","assets/characters/dain/outfits/date/expressions/sad/01/sprite":"characters/dain_date_sad","assets/characters/dain/outfits/date/expressions/shy/01/sprite":"characters/dain_date_shy","assets/characters/dain/outfits/date/expressions/sweat/01/sprite":"characters/dain_date_sweat","assets/characters/haeun/expressions/active/01/sprite":"characters/haeun_active","assets/characters/haeun/expressions/aegyo/01/sprite":"characters/haeun_aegyo","assets/characters/haeun/expressions/afterglow/01/sprite":"characters/haeun_afterglow","assets/characters/haeun/expressions/ahegao/01/sprite":"characters/haeun_ahegao","assets/characters/haeun/expressions/angry/01/sprite":"characters/haeun_angry","assets/characters/haeun/expressions/bored/01/sprite":"characters/haeun_bored","assets/characters/haeun/expressions/choking/01/sprite":"characters/haeun_choking","assets/characters/haeun/expressions/climax/01/sprite":"characters/haeun_climax","assets/characters/haeun/expressions/climax/02/sprite":"characters/haeun_climax_02","assets/characters/haeun/expressions/climax/03/sprite":"characters/haeun_climax_03","assets/characters/haeun/expressions/climax/04/sprite":"characters/haeun_climax_04","assets/characters/haeun/expressions/climax/05/sprite":"characters/haeun_climax_05","assets/characters/haeun/expressions/climax/06/sprite":"characters/haeun_climax_06","assets/characters/haeun/expressions/climax/07/sprite":"characters/haeun_climax_07","assets/characters/haeun/expressions/climax/08/sprite":"characters/haeun_climax_08","assets/characters/haeun/expressions/cold/01/sprite":"characters/haeun_cold","assets/characters/haeun/expressions/confused/01/sprite":"characters/haeun_confused","assets/characters/haeun/expressions/cry/01/sprite":"characters/haeun_cry","assets/characters/haeun/expressions/dazed/01/sprite":"characters/haeun_dazed","assets/characters/haeun/expressions/dead/01/sprite":"characters/haeun_dead","assets/characters/haeun/expressions/disgusted/01/sprite":"characters/haeun_disgusted","assets/characters/haeun/expressions/dry_smile/01/sprite":"characters/haeun_dry_smile","assets/characters/haeun/expressions/dumbfounded/01/sprite":"characters/haeun_dumbfounded","assets/characters/haeun/expressions/entranced/01/sprite":"characters/haeun_entranced","assets/characters/haeun/expressions/exhausted/01/sprite":"characters/haeun_exhausted","assets/characters/haeun/expressions/fainted/01/sprite":"characters/haeun_fainted","assets/characters/haeun/expressions/firm/01/sprite":"characters/haeun_firm","assets/characters/haeun/expressions/flushed/01/sprite":"characters/haeun_flushed","assets/characters/haeun/expressions/flushed/02/sprite":"characters/haeun_flushed_02","assets/characters/haeun/expressions/flushed/03/sprite":"characters/haeun_flushed_03","assets/characters/haeun/expressions/furious/01/sprite":"characters/haeun_furious","assets/characters/haeun/expressions/humiliated/01/sprite":"characters/haeun_humiliated","assets/characters/haeun/expressions/jealous/01/sprite":"characters/haeun_jealous","assets/characters/haeun/expressions/kiss/01/sprite":"characters/haeun_kiss","assets/characters/haeun/expressions/laugh/01/sprite":"characters/haeun_laugh","assets/characters/haeun/expressions/lovestruck/01/sprite":"characters/haeun_lovestruck","assets/characters/haeun/expressions/normal/01/sprite":"characters/haeun_normal","assets/characters/haeun/expressions/pain/01/sprite":"characters/haeun_pain","assets/characters/haeun/expressions/pleading/01/sprite":"characters/haeun_pleading","assets/characters/haeun/expressions/pout/01/sprite":"characters/haeun_pout","assets/characters/haeun/expressions/relieved/01/sprite":"characters/haeun_relieved","assets/characters/haeun/expressions/sad/01/sprite":"characters/haeun_sad","assets/characters/haeun/expressions/scared/01/sprite":"characters/haeun_scared","assets/characters/haeun/expressions/scream/01/sprite":"characters/haeun_scream","assets/characters/haeun/expressions/seductive/01/sprite":"characters/haeun_seductive","assets/characters/haeun/expressions/shy/01/sprite":"characters/haeun_shy","assets/characters/haeun/expressions/smile/01/sprite":"characters/haeun_smile","assets/characters/haeun/expressions/smirk/01/sprite":"characters/haeun_smirk","assets/characters/haeun/expressions/sob/01/sprite":"characters/haeun_sob","assets/characters/haeun/expressions/soft_smile/01/sprite":"characters/haeun_soft_smile","assets/characters/haeun/expressions/surprised/01/sprite":"characters/haeun_surprised","assets/characters/haeun/expressions/suspicious/01/sprite":"characters/haeun_suspicious","assets/characters/haeun/expressions/sweat/01/sprite":"characters/haeun_sweat","assets/characters/haeun/expressions/tired/01/sprite":"characters/haeun_tired","assets/characters/haeun/expressions/very_shy/01/sprite":"characters/haeun_very_shy","assets/characters/haeun/expressions/worried/01/sprite":"characters/haeun_worried","assets/characters/junho/expressions/awkward/01/sprite":"characters/junho_awkward","assets/characters/junho/expressions/normal/01/sprite":"characters/junho_normal","assets/characters/minsu/expressions/active/01/sprite":"characters/minsu_active","assets/characters/minsu/expressions/aegyo/01/sprite":"characters/minsu_aegyo","assets/characters/minsu/expressions/afterglow/01/sprite":"characters/minsu_afterglow","assets/characters/minsu/expressions/angry/01/sprite":"characters/minsu_angry","assets/characters/minsu/expressions/bored/01/sprite":"characters/minsu_bored","assets/characters/minsu/expressions/choking/01/sprite":"characters/minsu_choking","assets/characters/minsu/expressions/climax/01/sprite":"characters/minsu_climax","assets/characters/minsu/expressions/climax/02/sprite":"characters/minsu_climax_02","assets/characters/minsu/expressions/climax/03/sprite":"characters/minsu_climax_03","assets/characters/minsu/expressions/climax/04/sprite":"characters/minsu_climax_04","assets/characters/minsu/expressions/climax/05/sprite":"characters/minsu_climax_05","assets/characters/minsu/expressions/climax/06/sprite":"characters/minsu_climax_06","assets/characters/minsu/expressions/cold/01/sprite":"characters/minsu_cold","assets/characters/minsu/expressions/confused/01/sprite":"characters/minsu_confused","assets/characters/minsu/expressions/cry/01/sprite":"characters/minsu_cry","assets/characters/minsu/expressions/dazed/01/sprite":"characters/minsu_dazed","assets/characters/minsu/expressions/dead/01/sprite":"characters/minsu_dead","assets/characters/minsu/expressions/disgusted/01/sprite":"characters/minsu_disgusted","assets/characters/minsu/expressions/dry_smile/01/sprite":"characters/minsu_dry_smile","assets/characters/minsu/expressions/dumbfounded/01/sprite":"characters/minsu_dumbfounded","assets/characters/minsu/expressions/entranced/01/sprite":"characters/minsu_entranced","assets/characters/minsu/expressions/exhausted/01/sprite":"characters/minsu_exhausted","assets/characters/minsu/expressions/fainted/01/sprite":"characters/minsu_fainted","assets/characters/minsu/expressions/firm/01/sprite":"characters/minsu_firm","assets/characters/minsu/expressions/flushed/01/sprite":"characters/minsu_flushed","assets/characters/minsu/expressions/flushed/02/sprite":"characters/minsu_flushed_02","assets/characters/minsu/expressions/flushed/03/sprite":"characters/minsu_flushed_03","assets/characters/minsu/expressions/furious/01/sprite":"characters/minsu_furious","assets/characters/minsu/expressions/humiliated/01/sprite":"characters/minsu_humiliated","assets/characters/minsu/expressions/jealous/01/sprite":"characters/minsu_jealous","assets/characters/minsu/expressions/kiss/01/sprite":"characters/minsu_kiss","assets/characters/minsu/expressions/laugh/01/sprite":"characters/minsu_laugh","assets/characters/minsu/expressions/lovestruck/01/sprite":"characters/minsu_lovestruck","assets/characters/minsu/expressions/normal/01/sprite":"characters/minsu_normal","assets/characters/minsu/expressions/pain/01/sprite":"characters/minsu_pain","assets/characters/minsu/expressions/pleading/01/sprite":"characters/minsu_pleading","assets/characters/minsu/expressions/pout/01/sprite":"characters/minsu_pout","assets/characters/minsu/expressions/relieved/01/sprite":"characters/minsu_relieved","assets/characters/minsu/expressions/sad/01/sprite":"characters/minsu_sad","assets/characters/minsu/expressions/scared/01/sprite":"characters/minsu_scared","assets/characters/minsu/expressions/scream/01/sprite":"characters/minsu_scream","assets/characters/minsu/expressions/seductive/01/sprite":"characters/minsu_seductive","assets/characters/minsu/expressions/shy/01/sprite":"characters/minsu_shy","assets/characters/minsu/expressions/smile/01/sprite":"characters/minsu_smile","assets/characters/minsu/expressions/smirk/01/sprite":"characters/minsu_smirk","assets/characters/minsu/expressions/sob/01/sprite":"characters/minsu_sob","assets/characters/minsu/expressions/soft_smile/01/sprite":"characters/minsu_soft_smile","assets/characters/minsu/expressions/surprised/01/sprite":"characters/minsu_surprised","assets/characters/minsu/expressions/suspicious/01/sprite":"characters/minsu_suspicious","assets/characters/minsu/expressions/sweat/01/sprite":"characters/minsu_sweat","assets/characters/minsu/expressions/tired/01/sprite":"characters/minsu_tired","assets/characters/minsu/expressions/very_shy/01/sprite":"characters/minsu_very_shy","assets/characters/minsu/expressions/worried/01/sprite":"characters/minsu_worried","assets/characters/nurse/expressions/active/01/sprite":"characters/nurse_active","assets/characters/nurse/expressions/aegyo/01/sprite":"characters/nurse_aegyo","assets/characters/nurse/expressions/afterglow/01/sprite":"characters/nurse_afterglow","assets/characters/nurse/expressions/ahegao/01/sprite":"characters/nurse_ahegao","assets/characters/nurse/expressions/angry/01/sprite":"characters/nurse_angry","assets/characters/nurse/expressions/bikini/01/sprite":"characters/nurse_bikini","assets/characters/nurse/expressions/bored/01/sprite":"characters/nurse_bored","assets/characters/nurse/expressions/choking/01/sprite":"characters/nurse_choking","assets/characters/nurse/expressions/climax/01/sprite":"characters/nurse_climax","assets/characters/nurse/expressions/climax/02/sprite":"characters/nurse_climax_02","assets/characters/nurse/expressions/climax/03/sprite":"characters/nurse_climax_03","assets/characters/nurse/expressions/climax/04/sprite":"characters/nurse_climax_04","assets/characters/nurse/expressions/climax/05/sprite":"characters/nurse_climax_05","assets/characters/nurse/expressions/climax/06/sprite":"characters/nurse_climax_06","assets/characters/nurse/expressions/climax/07/sprite":"characters/nurse_climax_07","assets/characters/nurse/expressions/climax/08/sprite":"characters/nurse_climax_08","assets/characters/nurse/expressions/climax/09/sprite":"characters/nurse_climax_09","assets/characters/nurse/expressions/cold/01/sprite":"characters/nurse_cold","assets/characters/nurse/expressions/confused/01/sprite":"characters/nurse_confused","assets/characters/nurse/expressions/cry/01/sprite":"characters/nurse_cry","assets/characters/nurse/expressions/dazed/01/sprite":"characters/nurse_dazed","assets/characters/nurse/expressions/dead/01/sprite":"characters/nurse_dead","assets/characters/nurse/expressions/disgusted/01/sprite":"characters/nurse_disgusted","assets/characters/nurse/expressions/dry_smile/01/sprite":"characters/nurse_dry_smile","assets/characters/nurse/expressions/dumbfounded/01/sprite":"characters/nurse_dumbfounded","assets/characters/nurse/expressions/entranced/01/sprite":"characters/nurse_entranced","assets/characters/nurse/expressions/exhausted/01/sprite":"characters/nurse_exhausted","assets/characters/nurse/expressions/fainted/01/sprite":"characters/nurse_fainted","assets/characters/nurse/expressions/firm/01/sprite":"characters/nurse_firm","assets/characters/nurse/expressions/flushed/01/sprite":"characters/nurse_flushed","assets/characters/nurse/expressions/flushed/02/sprite":"characters/nurse_flushed_02","assets/characters/nurse/expressions/flushed/03/sprite":"characters/nurse_flushed_03","assets/characters/nurse/expressions/furious/01/sprite":"characters/nurse_furious","assets/characters/nurse/expressions/humiliated/01/sprite":"characters/nurse_humiliated","assets/characters/nurse/expressions/jealous/01/sprite":"characters/nurse_jealous","assets/characters/nurse/expressions/kiss/01/sprite":"characters/nurse_kiss","assets/characters/nurse/expressions/laugh/01/sprite":"characters/nurse_laugh","assets/characters/nurse/expressions/lovestruck/01/sprite":"characters/nurse_lovestruck","assets/characters/nurse/expressions/normal/01/sprite":"characters/nurse_normal","assets/characters/nurse/expressions/pain/01/sprite":"characters/nurse_pain","assets/characters/nurse/expressions/pleading/01/sprite":"characters/nurse_pleading","assets/characters/nurse/expressions/pout/01/sprite":"characters/nurse_pout","assets/characters/nurse/expressions/relieved/01/sprite":"characters/nurse_relieved","assets/characters/nurse/expressions/sad/01/sprite":"characters/nurse_sad","assets/characters/nurse/expressions/scared/01/sprite":"characters/nurse_scared","assets/characters/nurse/expressions/scream/01/sprite":"characters/nurse_scream","assets/characters/nurse/expressions/seductive/01/sprite":"characters/nurse_seductive","assets/characters/nurse/expressions/shy/01/sprite":"characters/nurse_shy","assets/characters/nurse/expressions/smile/01/sprite":"characters/nurse_smile","assets/characters/nurse/expressions/smirk/01/sprite":"characters/nurse_smirk","assets/characters/nurse/expressions/sob/01/sprite":"characters/nurse_sob","assets/characters/nurse/expressions/soft_smile/01/sprite":"characters/nurse_soft_smile","assets/characters/nurse/expressions/surprised/01/sprite":"characters/nurse_surprised","assets/characters/nurse/expressions/suspicious/01/sprite":"characters/nurse_suspicious","assets/characters/nurse/expressions/sweat/01/sprite":"characters/nurse_sweat","assets/characters/nurse/expressions/tired/01/sprite":"characters/nurse_tired","assets/characters/nurse/expressions/very_shy/01/sprite":"characters/nurse_very_shy","assets/characters/nurse/expressions/worried/01/sprite":"characters/nurse_worried","assets/characters/nurse/outfits/home/expressions/angry/01/sprite":"characters/nurse_home_angry","assets/characters/nurse/outfits/home/expressions/normal/01/sprite":"characters/nurse_home_normal","assets/characters/nurse/outfits/home/expressions/sad/01/sprite":"characters/nurse_home_sad","assets/characters/nurse/outfits/home/expressions/shy/01/sprite":"characters/nurse_home_shy","assets/characters/nurse/outfits/home/expressions/smile/01/sprite":"characters/nurse_home_smile","assets/characters/seoyeon/expressions/active/01/sprite":"characters/seyoun_active","assets/characters/seoyeon/expressions/aegyo/01/sprite":"characters/seyoun_aegyo","assets/characters/seoyeon/expressions/afterglow/01/sprite":"characters/seyoun_afterglow","assets/characters/seoyeon/expressions/ahegao/01/sprite":"characters/seyoun_ahegao","assets/characters/seoyeon/expressions/angry/01/sprite":"characters/seyoun_angry","assets/characters/seoyeon/expressions/back/01/sprite":"characters/seyoun_back","assets/characters/seoyeon/expressions/bikini/01/sprite":"characters/seyoun_bikini","assets/characters/seoyeon/expressions/bored/01/sprite":"characters/seyoun_bored","assets/characters/seoyeon/expressions/choking/01/sprite":"characters/seyoun_choking","assets/characters/seoyeon/expressions/climax/01/sprite":"characters/seyoun_climax","assets/characters/seoyeon/expressions/climax/02/sprite":"characters/seyoun_climax_02","assets/characters/seoyeon/expressions/climax/03/sprite":"characters/seyoun_climax_03","assets/characters/seoyeon/expressions/climax/04/sprite":"characters/seyoun_climax_04","assets/characters/seoyeon/expressions/climax/05/sprite":"characters/seyoun_climax_05","assets/characters/seoyeon/expressions/climax/06/sprite":"characters/seyoun_climax_06","assets/characters/seoyeon/expressions/cold/01/sprite":"characters/seyoun_cold","assets/characters/seoyeon/expressions/confused/01/sprite":"characters/seyoun_confused","assets/characters/seoyeon/expressions/cry/01/sprite":"characters/seyoun_cry","assets/characters/seoyeon/expressions/dazed/01/sprite":"characters/seyoun_dazed","assets/characters/seoyeon/expressions/dead/01/sprite":"characters/seyoun_dead","assets/characters/seoyeon/expressions/disgusted/01/sprite":"characters/seyoun_disgusted","assets/characters/seoyeon/expressions/dry_smile/01/sprite":"characters/seyoun_dry_smile","assets/characters/seoyeon/expressions/dumbfounded/01/sprite":"characters/seyoun_dumbfounded","assets/characters/seoyeon/expressions/entranced/01/sprite":"characters/seyoun_entranced","assets/characters/seoyeon/expressions/exhausted/01/sprite":"characters/seyoun_exhausted","assets/characters/seoyeon/expressions/fainted/01/sprite":"characters/seyoun_fainted","assets/characters/seoyeon/expressions/firm/01/sprite":"characters/seyoun_firm","assets/characters/seoyeon/expressions/flushed/01/sprite":"characters/seyoun_flushed","assets/characters/seoyeon/expressions/flushed/02/sprite":"characters/seyoun_flushed_02","assets/characters/seoyeon/expressions/flushed/03/sprite":"characters/seyoun_flushed_03","assets/characters/seoyeon/expressions/flushed/04/sprite":"characters/seyoun_flushed_04","assets/characters/seoyeon/expressions/flushed/05/sprite":"characters/seyoun_flushed_05","assets/characters/seoyeon/expressions/flushed/06/sprite":"characters/seyoun_flushed_06","assets/characters/seoyeon/expressions/furious/01/sprite":"characters/seyoun_furious","assets/characters/seoyeon/expressions/humiliated/01/sprite":"characters/seyoun_humiliated","assets/characters/seoyeon/expressions/jealous/01/sprite":"characters/seyoun_jealous","assets/characters/seoyeon/expressions/kiss/01/sprite":"characters/seyoun_kiss","assets/characters/seoyeon/expressions/laugh/01/sprite":"characters/seyoun_laugh","assets/characters/seoyeon/expressions/lovestruck/01/sprite":"characters/seyoun_lovestruck","assets/characters/seoyeon/expressions/normal/01/sprite":"characters/seyoun_normal","assets/characters/seoyeon/expressions/pain/01/sprite":"characters/seyoun_pain","assets/characters/seoyeon/expressions/pleading/01/sprite":"characters/seyoun_pleading","assets/characters/seoyeon/expressions/pout/01/sprite":"characters/seyoun_pout","assets/characters/seoyeon/expressions/relieved/01/sprite":"characters/seyoun_relieved","assets/characters/seoyeon/expressions/sad/01/sprite":"characters/seyoun_sad","assets/characters/seoyeon/expressions/scared/01/sprite":"characters/seyoun_scared","assets/characters/seoyeon/expressions/scream/01/sprite":"characters/seyoun_scream","assets/characters/seoyeon/expressions/seductive/01/sprite":"characters/seyoun_seductive","assets/characters/seoyeon/expressions/shy/01/sprite":"characters/seyoun_shy","assets/characters/seoyeon/expressions/smile/01/sprite":"characters/seyoun_smile","assets/characters/seoyeon/expressions/smirk/01/sprite":"characters/seyoun_smirk","assets/characters/seoyeon/expressions/sob/01/sprite":"characters/seyoun_sob","assets/characters/seoyeon/expressions/soft_smile/01/sprite":"characters/seyoun_soft_smile","assets/characters/seoyeon/expressions/surprised/01/sprite":"characters/seyoun_surprised","assets/characters/seoyeon/expressions/suspicious/01/sprite":"characters/seyoun_suspicious","assets/characters/seoyeon/expressions/sweat/01/sprite":"characters/seyoun_sweat","assets/characters/seoyeon/expressions/tired/01/sprite":"characters/seyoun_tired","assets/characters/seoyeon/expressions/very_shy/01/sprite":"characters/seyoun_very_shy","assets/characters/seoyeon/expressions/worried/01/sprite":"characters/seyoun_worried","assets/characters/seoyeon/outfits/date/expressions/laugh/01/sprite":"characters/seyoun_date_laugh","assets/characters/seoyeon/outfits/date/expressions/normal/01/sprite":"characters/seyoun_date_normal","assets/characters/seoyeon/outfits/date/expressions/sad/01/sprite":"characters/seyoun_date_sad","assets/characters/seoyeon/outfits/date/expressions/shy/01/sprite":"characters/seyoun_date_shy","assets/characters/seoyeon/outfits/date/expressions/worried/01/sprite":"characters/seyoun_date_worried","assets/characters/teacher/expressions/active/01/sprite":"characters/teacher_active","assets/characters/teacher/expressions/aegyo/01/sprite":"characters/teacher_aegyo","assets/characters/teacher/expressions/afterglow/01/sprite":"characters/teacher_afterglow","assets/characters/teacher/expressions/ahegao/01/sprite":"characters/teacher_ahegao","assets/characters/teacher/expressions/angry/01/sprite":"characters/teacher_angry","assets/characters/teacher/expressions/bikini/01/sprite":"characters/teacher_bikini","assets/characters/teacher/expressions/bored/01/sprite":"characters/teacher_bored","assets/characters/teacher/expressions/choking/01/sprite":"characters/teacher_choking","assets/characters/teacher/expressions/climax/01/sprite":"characters/teacher_climax","assets/characters/teacher/expressions/climax/02/sprite":"characters/teacher_climax_02","assets/characters/teacher/expressions/climax/03/sprite":"characters/teacher_climax_03","assets/characters/teacher/expressions/climax/04/sprite":"characters/teacher_climax_04","assets/characters/teacher/expressions/climax/05/sprite":"characters/teacher_climax_05","assets/characters/teacher/expressions/climax/06/sprite":"characters/teacher_climax_06","assets/characters/teacher/expressions/climax/07/sprite":"characters/teacher_climax_07","assets/characters/teacher/expressions/climax/08/sprite":"characters/teacher_climax_08","assets/characters/teacher/expressions/climax/09/sprite":"characters/teacher_climax_09","assets/characters/teacher/expressions/climax/10/sprite":"characters/teacher_climax_10","assets/characters/teacher/expressions/cold/01/sprite":"characters/teacher_cold","assets/characters/teacher/expressions/confused/01/sprite":"characters/teacher_confused","assets/characters/teacher/expressions/cry/01/sprite":"characters/teacher_cry","assets/characters/teacher/expressions/dazed/01/sprite":"characters/teacher_dazed","assets/characters/teacher/expressions/dead/01/sprite":"characters/teacher_dead","assets/characters/teacher/expressions/disgusted/01/sprite":"characters/teacher_disgusted","assets/characters/teacher/expressions/dry_smile/01/sprite":"characters/teacher_dry_smile","assets/characters/teacher/expressions/dumbfounded/01/sprite":"characters/teacher_dumbfounded","assets/characters/teacher/expressions/entranced/01/sprite":"characters/teacher_entranced","assets/characters/teacher/expressions/exhausted/01/sprite":"characters/teacher_exhausted","assets/characters/teacher/expressions/fainted/01/sprite":"characters/teacher_fainted","assets/characters/teacher/expressions/firm/01/sprite":"characters/teacher_firm","assets/characters/teacher/expressions/flushed/01/sprite":"characters/teacher_flushed","assets/characters/teacher/expressions/flushed/02/sprite":"characters/teacher_flushed_02","assets/characters/teacher/expressions/flushed/03/sprite":"characters/teacher_flushed_03","assets/characters/teacher/expressions/furious/01/sprite":"characters/teacher_furious","assets/characters/teacher/expressions/humiliated/01/sprite":"characters/teacher_humiliated","assets/characters/teacher/expressions/jealous/01/sprite":"characters/teacher_jealous","assets/characters/teacher/expressions/kiss/01/sprite":"characters/teacher_kiss","assets/characters/teacher/expressions/laugh/01/sprite":"characters/teacher_laugh","assets/characters/teacher/expressions/lovestruck/01/sprite":"characters/teacher_lovestruck","assets/characters/teacher/expressions/normal/01/sprite":"characters/teacher_normal","assets/characters/teacher/expressions/pain/01/sprite":"characters/teacher_pain","assets/characters/teacher/expressions/pleading/01/sprite":"characters/teacher_pleading","assets/characters/teacher/expressions/pout/01/sprite":"characters/teacher_pout","assets/characters/teacher/expressions/relieved/01/sprite":"characters/teacher_relieved","assets/characters/teacher/expressions/sad/01/sprite":"characters/teacher_sad","assets/characters/teacher/expressions/scared/01/sprite":"characters/teacher_scared","assets/characters/teacher/expressions/scream/01/sprite":"characters/teacher_scream","assets/characters/teacher/expressions/seductive/01/sprite":"characters/teacher_seductive","assets/characters/teacher/expressions/shy/01/sprite":"characters/teacher_shy","assets/characters/teacher/expressions/smile/01/sprite":"characters/teacher_smile","assets/characters/teacher/expressions/smirk/01/sprite":"characters/teacher_smirk","assets/characters/teacher/expressions/sob/01/sprite":"characters/teacher_sob","assets/characters/teacher/expressions/soft_smile/01/sprite":"characters/teacher_soft_smile","assets/characters/teacher/expressions/surprised/01/sprite":"characters/teacher_surprised","assets/characters/teacher/expressions/suspicious/01/sprite":"characters/teacher_suspicious","assets/characters/teacher/expressions/sweat/01/sprite":"characters/teacher_sweat","assets/characters/teacher/expressions/tired/01/sprite":"characters/teacher_tired","assets/characters/teacher/expressions/very_shy/01/sprite":"characters/teacher_very_shy","assets/characters/teacher/expressions/worried/01/sprite":"characters/teacher_worried","assets/characters/yuna/expressions/active/01/sprite":"characters/yuna_active","assets/characters/yuna/expressions/aegyo/01/sprite":"characters/yuna_aegyo","assets/characters/yuna/expressions/afterglow/01/sprite":"characters/yuna_afterglow","assets/characters/yuna/expressions/ahegao/01/sprite":"characters/yuna_ahegao","assets/characters/yuna/expressions/angry/01/sprite":"characters/yuna_angry","assets/characters/yuna/expressions/bikini/01/sprite":"characters/yuna_bikini","assets/characters/yuna/expressions/bored/01/sprite":"characters/yuna_bored","assets/characters/yuna/expressions/choking/01/sprite":"characters/yuna_choking","assets/characters/yuna/expressions/climax/01/sprite":"characters/yuna_climax","assets/characters/yuna/expressions/climax/02/sprite":"characters/yuna_climax_02","assets/characters/yuna/expressions/climax/03/sprite":"characters/yuna_climax_03","assets/characters/yuna/expressions/climax/04/sprite":"characters/yuna_climax_04","assets/characters/yuna/expressions/climax/05/sprite":"characters/yuna_climax_05","assets/characters/yuna/expressions/climax/06/sprite":"characters/yuna_climax_06","assets/characters/yuna/expressions/climax/07/sprite":"characters/yuna_climax_07","assets/characters/yuna/expressions/climax/08/sprite":"characters/yuna_climax_08","assets/characters/yuna/expressions/climax/09/sprite":"characters/yuna_climax_09","assets/characters/yuna/expressions/cold/01/sprite":"characters/yuna_cold","assets/characters/yuna/expressions/confused/01/sprite":"characters/yuna_confused","assets/characters/yuna/expressions/cry/01/sprite":"characters/yuna_cry","assets/characters/yuna/expressions/dazed/01/sprite":"characters/yuna_dazed","assets/characters/yuna/expressions/dead/01/sprite":"characters/yuna_dead","assets/characters/yuna/expressions/disgusted/01/sprite":"characters/yuna_disgusted","assets/characters/yuna/expressions/dry_smile/01/sprite":"characters/yuna_dry_smile","assets/characters/yuna/expressions/dumbfounded/01/sprite":"characters/yuna_dumbfounded","assets/characters/yuna/expressions/entranced/01/sprite":"characters/yuna_entranced","assets/characters/yuna/expressions/exhausted/01/sprite":"characters/yuna_exhausted","assets/characters/yuna/expressions/fainted/01/sprite":"characters/yuna_fainted","assets/characters/yuna/expressions/firm/01/sprite":"characters/yuna_firm","assets/characters/yuna/expressions/flushed/01/sprite":"characters/yuna_flushed","assets/characters/yuna/expressions/flushed/02/sprite":"characters/yuna_flushed_02","assets/characters/yuna/expressions/flushed/03/sprite":"characters/yuna_flushed_03","assets/characters/yuna/expressions/furious/01/sprite":"characters/yuna_furious","assets/characters/yuna/expressions/gallery_bikini_sexy_20260813/01/sprite":"characters/yuna_gallery_bikini_sexy_20260813","assets/characters/yuna/expressions/humiliated/01/sprite":"characters/yuna_humiliated","assets/characters/yuna/expressions/jealous/01/sprite":"characters/yuna_jealous","assets/characters/yuna/expressions/kiss/01/sprite":"characters/yuna_kiss","assets/characters/yuna/expressions/laugh/01/sprite":"characters/yuna_laugh","assets/characters/yuna/expressions/lovestruck/01/sprite":"characters/yuna_lovestruck","assets/characters/yuna/expressions/normal/01/sprite":"characters/yuna_normal","assets/characters/yuna/expressions/pain/01/sprite":"characters/yuna_pain","assets/characters/yuna/expressions/pleading/01/sprite":"characters/yuna_pleading","assets/characters/yuna/expressions/pout/01/sprite":"characters/yuna_pout","assets/characters/yuna/expressions/relieved/01/sprite":"characters/yuna_relieved","assets/characters/yuna/expressions/sad/01/sprite":"characters/yuna_sad","assets/characters/yuna/expressions/scared/01/sprite":"characters/yuna_scared","assets/characters/yuna/expressions/scream/01/sprite":"characters/yuna_scream","assets/characters/yuna/expressions/seductive/01/sprite":"characters/yuna_seductive","assets/characters/yuna/expressions/shy/01/sprite":"characters/yuna_shy","assets/characters/yuna/expressions/smile/01/sprite":"characters/yuna_smile","assets/characters/yuna/expressions/smirk/01/sprite":"characters/yuna_smirk","assets/characters/yuna/expressions/sob/01/sprite":"characters/yuna_sob","assets/characters/yuna/expressions/soft_smile/01/sprite":"characters/yuna_soft_smile","assets/characters/yuna/expressions/surprised/01/sprite":"characters/yuna_surprised","assets/characters/yuna/expressions/suspicious/01/sprite":"characters/yuna_suspicious","assets/characters/yuna/expressions/sweat/01/sprite":"characters/yuna_sweat","assets/characters/yuna/expressions/tired/01/sprite":"characters/yuna_tired","assets/characters/yuna/expressions/very_shy/01/sprite":"characters/yuna_very_shy","assets/characters/yuna/expressions/worried/01/sprite":"characters/yuna_worried","assets/characters/yuna/outfits/date/expressions/bored/01/sprite":"characters/yuna_date_bored","assets/characters/yuna/outfits/date/expressions/normal/01/sprite":"characters/yuna_date_normal","assets/characters/yuna/outfits/date/expressions/sad/01/sprite":"characters/yuna_date_sad","assets/characters/yuna/outfits/date/expressions/shy/01/sprite":"characters/yuna_date_shy","assets/characters/yuna/outfits/date/expressions/smile/01/sprite":"characters/yuna_date_smile","assets/characters/seoyeon/expressions/enduring/01/sprite":"characters/seyoun_enduring","assets/characters/seoyeon/expressions/oral_service/01/sprite":"characters/seyoun_oral_service","assets/characters/seoyeon/expressions/undressed_shy/01/sprite":"characters/seyoun_undressed_shy","assets/characters/seoyeon/expressions/dominant_aroused/01/sprite":"characters/seyoun_dominant_aroused","assets/characters/seoyeon/expressions/messy_afterglow/01/sprite":"characters/seyoun_messy_afterglow","assets/characters/seoyeon/expressions/begging_lust/01/sprite":"characters/seyoun_begging_lust","assets/characters/seoyeon/expressions/betrayed/01/sprite":"characters/seyoun_betrayed","assets/characters/seoyeon/expressions/combat_ready/01/sprite":"characters/seyoun_combat_ready","assets/characters/seoyeon/expressions/groggy/01/sprite":"characters/seyoun_groggy","assets/characters/seoyeon/expressions/scheming/01/sprite":"characters/seyoun_scheming","assets/characters/seoyeon/expressions/touched/01/sprite":"characters/seyoun_touched","assets/characters/yuna/expressions/enduring/01/sprite":"characters/yuna_enduring","assets/characters/yuna/expressions/oral_service/01/sprite":"characters/yuna_oral_service","assets/characters/yuna/expressions/undressed_shy/01/sprite":"characters/yuna_undressed_shy","assets/characters/yuna/expressions/dominant_aroused/01/sprite":"characters/yuna_dominant_aroused","assets/characters/yuna/expressions/messy_afterglow/01/sprite":"characters/yuna_messy_afterglow","assets/characters/yuna/expressions/begging_lust/01/sprite":"characters/yuna_begging_lust","assets/characters/yuna/expressions/betrayed/01/sprite":"characters/yuna_betrayed","assets/characters/yuna/expressions/combat_ready/01/sprite":"characters/yuna_combat_ready","assets/characters/yuna/expressions/groggy/01/sprite":"characters/yuna_groggy","assets/characters/yuna/expressions/scheming/01/sprite":"characters/yuna_scheming","assets/characters/yuna/expressions/touched/01/sprite":"characters/yuna_touched","assets/characters/dain/expressions/enduring/01/sprite":"characters/dain_enduring","assets/characters/dain/expressions/oral_service/01/sprite":"characters/dain_oral_service","assets/characters/dain/expressions/undressed_shy/01/sprite":"characters/dain_undressed_shy","assets/characters/dain/expressions/dominant_aroused/01/sprite":"characters/dain_dominant_aroused","assets/characters/dain/expressions/messy_afterglow/01/sprite":"characters/dain_messy_afterglow","assets/characters/dain/expressions/begging_lust/01/sprite":"characters/dain_begging_lust","assets/characters/dain/expressions/betrayed/01/sprite":"characters/dain_betrayed","assets/characters/dain/expressions/combat_ready/01/sprite":"characters/dain_combat_ready","assets/characters/dain/expressions/groggy/01/sprite":"characters/dain_groggy","assets/characters/dain/expressions/scheming/01/sprite":"characters/dain_scheming","assets/characters/dain/expressions/touched/01/sprite":"characters/dain_touched","assets/characters/haeun/expressions/enduring/01/sprite":"characters/haeun_enduring","assets/characters/haeun/expressions/oral_service/01/sprite":"characters/haeun_oral_service","assets/characters/haeun/expressions/undressed_shy/01/sprite":"characters/haeun_undressed_shy","assets/characters/haeun/expressions/dominant_aroused/01/sprite":"characters/haeun_dominant_aroused","assets/characters/haeun/expressions/messy_afterglow/01/sprite":"characters/haeun_messy_afterglow","assets/characters/haeun/expressions/begging_lust/01/sprite":"characters/haeun_begging_lust","assets/characters/haeun/expressions/betrayed/01/sprite":"characters/haeun_betrayed","assets/characters/haeun/expressions/combat_ready/01/sprite":"characters/haeun_combat_ready","assets/characters/haeun/expressions/groggy/01/sprite":"characters/haeun_groggy","assets/characters/haeun/expressions/scheming/01/sprite":"characters/haeun_scheming","assets/characters/haeun/expressions/touched/01/sprite":"characters/haeun_touched","assets/characters/minsu/expressions/enduring/01/sprite":"characters/minsu_enduring","assets/characters/minsu/expressions/oral_service/01/sprite":"characters/minsu_oral_service","assets/characters/minsu/expressions/undressed_shy/01/sprite":"characters/minsu_undressed_shy","assets/characters/minsu/expressions/dominant_aroused/01/sprite":"characters/minsu_dominant_aroused","assets/characters/minsu/expressions/messy_afterglow/01/sprite":"characters/minsu_messy_afterglow","assets/characters/minsu/expressions/begging_lust/01/sprite":"characters/minsu_begging_lust","assets/characters/minsu/expressions/betrayed/01/sprite":"characters/minsu_betrayed","assets/characters/minsu/expressions/combat_ready/01/sprite":"characters/minsu_combat_ready","assets/characters/minsu/expressions/groggy/01/sprite":"characters/minsu_groggy","assets/characters/minsu/expressions/scheming/01/sprite":"characters/minsu_scheming","assets/characters/minsu/expressions/touched/01/sprite":"characters/minsu_touched","assets/characters/teacher/expressions/enduring/01/sprite":"characters/teacher_enduring","assets/characters/teacher/expressions/oral_service/01/sprite":"characters/teacher_oral_service","assets/characters/teacher/expressions/undressed_shy/01/sprite":"characters/teacher_undressed_shy","assets/characters/teacher/expressions/dominant_aroused/01/sprite":"characters/teacher_dominant_aroused","assets/characters/teacher/expressions/messy_afterglow/01/sprite":"characters/teacher_messy_afterglow","assets/characters/teacher/expressions/begging_lust/01/sprite":"characters/teacher_begging_lust","assets/characters/teacher/expressions/betrayed/01/sprite":"characters/teacher_betrayed","assets/characters/teacher/expressions/combat_ready/01/sprite":"characters/teacher_combat_ready","assets/characters/teacher/expressions/groggy/01/sprite":"characters/teacher_groggy","assets/characters/teacher/expressions/scheming/01/sprite":"characters/teacher_scheming","assets/characters/teacher/expressions/touched/01/sprite":"characters/teacher_touched","assets/characters/nurse/expressions/enduring/01/sprite":"characters/nurse_enduring","assets/characters/nurse/expressions/oral_service/01/sprite":"characters/nurse_oral_service","assets/characters/nurse/expressions/undressed_shy/01/sprite":"characters/nurse_undressed_shy","assets/characters/nurse/expressions/dominant_aroused/01/sprite":"characters/nurse_dominant_aroused","assets/characters/nurse/expressions/messy_afterglow/01/sprite":"characters/nurse_messy_afterglow","assets/characters/nurse/expressions/begging_lust/01/sprite":"characters/nurse_begging_lust","assets/characters/nurse/expressions/betrayed/01/sprite":"characters/nurse_betrayed","assets/characters/nurse/expressions/combat_ready/01/sprite":"characters/nurse_combat_ready","assets/characters/nurse/expressions/groggy/01/sprite":"characters/nurse_groggy","assets/characters/nurse/expressions/scheming/01/sprite":"characters/nurse_scheming","assets/characters/nurse/expressions/touched/01/sprite":"characters/nurse_touched"};
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
