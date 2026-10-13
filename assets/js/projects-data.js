// Central project catalogue: single source of truth for the project directory,
// the project detail pages, and the build that generates them.
//
// Every field below comes from the project's own README, manifest, or licence file.
// Leave a field empty when it cannot be verified: the page simply omits it.
// Public URLs are NOT stored here; they live in config.js and are merged in at
// build time, so a URL only ever has to be changed in one place.

export const PROJECTS = [
  {
    slug: 'sentientmobs',
    name: 'SentientMobs',
    category: 'plugin',
    kindKey: 'projects.kind.sm',
    statusKey: 'projects.status.released',
    links: ['source'],
    facts: {
      platform: 'Paper / Spigot',
      minecraft: '1.20 and later',
      version: '2.4.6',
      java: 'Java 21',
      license: ''
    },
    i18n: {
      en: {
        tagline: 'A server plugin that gives Minecraft mobs more deliberate, coordinated behaviour.',
        overview:
          'SentientMobs rewrites how hostile and passive mobs make decisions, using behaviour trees and state machines instead of scattered event handlers. Zombies flank and retreat, skeletons manage their distance, villagers notice danger and call for help, and herd animals coordinate, all without changing core game mechanics. Update intervals and mob limits are configurable so servers can trade responsiveness for performance.',
        features: [
          'Zombie flanking, retreat when wounded, and coordinated group strikes',
          'Skeletons keep an optimal shooting distance, strafe, and seek high ground',
          'Villagers detect danger, panic, look for shelter, alert each other, and call iron golems',
          'Village path preference for dirt paths with recovery from stuck paths',
          'Smarter spiders and herd defence without cross-herd target conflicts',
          'Modular behaviour tree and state machine architecture',
          'Configurable update intervals and mob limits for performance tuning',
          'Compiled against the Spigot API, with no NMS and no version-specific internals'
        ],
        install: [
          'Build the plugin from source with mvn -DskipTests clean package, or obtain a release jar.',
          'Copy target/sentientmobs-<version>.jar into your server plugins/ directory.',
          'Start or restart the server; the detected platform is logged during startup.',
          'Set server.platform.mode in config.yml (AUTO, PAPER, PURPUR, SPIGOT or CRAFTBUKKIT) if automatic detection picks the wrong one.'
        ],
        note:
          'Behaviour is tuned for Paper and Spigot. The plugin logs the platform it detects, so behaviour can be forced rather than guessed.'
      },
      id: {
        tagline: 'Plugin server yang membuat mob Minecraft bertindak lebih terarah dan terkoordinasi.',
        overview:
          'SentientMobs mengubah cara mob, baik yang bermusuhan maupun pasif, mengambil keputusan, memakai behaviour tree dan state machine alih-alih kumpulan event handler yang tersebar. Zombie mengepung dan mundur saat terluka, skeleton menjaga jarak tembak, villager menyadari bahaya dan memanggil bantuan, serta hewan ternak saling berkoordinasi, semuanya tanpa mengubah mekanik inti permainan. Interval pembaruan dan batas jumlah mob dapat diatur agar server dapat menyesuaikan antara responsivitas dan performa.',
        features: [
          'Zombie mengepung, mundur saat terluka, dan menyerang secara bergilir dalam grup',
          'Skeleton menjaga jarak tembak optimal, bergerak menyamping, dan mencari tempat tinggi',
          'Villager mendeteksi bahaya, panik, mencari tempat aman, saling mengingatkan, dan memanggil iron golem',
          'Preferensi jalan berbatu (dirt path) dengan pemulihan saat path terjebak',
          'Labalaba dan pertahanan kawanan hewan yang lebih wajar tanpa konflik target antar kawanan',
          'Arsitektur behaviour tree dan state machine yang modular',
          'Interval pembaruan dan batas mob yang dapat diatur untuk penyetelan performa',
          'Dikompilasi terhadap Spigot API, tanpa NMS dan tanpa internal versi spesifik'
        ],
        install: [
          'Bangun plugin dari sumber dengan mvn -DskipTests clean package, atau gunakan berkas rilis.',
          'Salin target/sentientmobs-<version>.jar ke folder plugins/ server Anda.',
          'Nyalakan atau mulai ulang server; platform yang terdeteksi akan dicatat saat startup.',
          'Atur server.platform.mode di config.yml (AUTO, PAPER, PURPUR, SPIGOT atau CRAFTBUKKIT) bila deteksi otomatis memilih yang salah.'
        ],
        note:
          'Perilaku disetel untuk Paper dan Spigot. Plugin mencatat platform yang terdeteksi, sehingga perilaku dapat dipaksa, bukan ditebak.'
      },
      ar: {
        tagline: 'إضافة خوادم تمنح كائنات ماينكرافت سلوكًا أكثر جدية وتناسبًا.',
        overview:
          'تعيد SentientMobs صياغة طريقة اتخاذ الكائنات المفضلة والمعادية للقرارات، باستخدام أشجار السلوك وآلات الحالة بدل معالجات أحداث متفرّقة. يطوّق الزومبي ويهرب عند الجرح، ويدير الهيكل العظمي مسافة الرمي، ويلاحظ القرويون الخطر ويستدعون المساعدة، وتتنسّق قطعان الحيوانات، كل ذلك دون تغيير ميكانيكا اللعبة الأساسية. فترات التحديث وحدود الكائنات قابلة للضبط لتوازن الاستجابة والأداء.',
        features: [
          'تطويق الزومبي والانسحاب عند الجرح وضربات جماعية منسّقة',
          'حفاظ الهياكل العظمية على مسافة رمي مثالية والتنقل الجانبي والسعي للمرتفعات',
          'كشف القرويين للخطر والذعر والبحث عن مأوى وتحذير بعضهم واستدعاء الرجال الحديدية',
          'تفضيل مسارات التراب مع التعافي من المسارات العالقة',
          'سلوك أفضل للعنكبوتات والقطعان دون تعارض أهداف بين القطعان',
          'بنية معيارية بأشجار السلوك وآلات الحالة',
          'فترات تحديث وحدود كائنات قابلة للضبط لتحسين الأداء',
          'مُترجَمة مقابل Spigot API، بلا NMS وبلا تفاصيل خاصة بإصدار معيّن'
        ],
        install: [
          'ابنِ الإضافة من المصدر بالأمر mvn -DskipTests clean package أو استخدم ملف إصدار جاهز.',
          'انسخ target/sentientmobs-<version>.jar إلى مجلد plugins/ في خادمك.',
          'شغّل الخادم أو أعد تشغيله؛ تُسجَّل المنصّة المكتشفة عند بدء التشغيل.',
          'عدّل server.platform.mode في config.yml (AUTO أو PAPER أو PURPUR أو SPIGOT أو CRAFTBUKKIT) إن اكتشفت المنصّة الخطأ.'
        ],
        note:
          'السلوك مضبوط لـ Paper و Spigot. تُسجّل الإضافة المنصّة المكتشفة، فيمكن فرض السلوك بدل تخمينه.'
      }
    }
  },

  {
    slug: 'spillguard',
    name: 'SpillGuard',
    category: 'mod',
    kindKey: 'projects.kind.sg',
    statusKey: 'projects.status.released',
    links: [],
    facts: {
      platform: 'Fabric',
      minecraft: '1.21.1',
      version: '1.0.0',
      java: 'Java 21',
      license: 'MIT'
    },
    i18n: {
      en: {
        tagline: 'A client-side Fabric mod that previews where water and lava will spread before you pour.',
        overview:
          'SpillGuard simulates the vanilla fluid rules locally and draws the result into the world before you empty a bucket, so you can see where water or lava will actually go. It never places a block, never touches your inventory, and never talks to the server: the preview is a bounded simulation of vanilla behaviour, and cells it cannot be sure about are drawn as dashed wireframes instead of being guessed.',
        features: [
          'Hold a key to preview the spread of the bucket in either hand',
          'Water is drawn as a height-graded translucent slab, lava as a solid cube with a red outline',
          'Uncertain cells (unloaded chunks, world edges, exhausted simulation budget) are marked, never invented',
          'Water and lava interactions are shown as positions rather than guessed blocks',
          'An action-bar message explains why no preview is shown',
          'Key is G by default and can be rebound in Options → Controls → SpillGuard',
          'Hold or toggle behaviour is configurable, along with the preview key'
        ],
        install: [
          'Install Fabric Loader for Minecraft 1.21.1 and place Fabric API in .minecraft/mods.',
          'Drop spillguard-1.0.0.jar into .minecraft/mods.',
          'No server-side installation is needed; the mod is client only.',
          'Hold G while looking at a block with a bucket in hand to preview; pour with right-click as usual.'
        ],
        note:
          'Building from source requires JDK 21; Java 17 will not compile the sources. Fabric API is a hard dependency.'
      },
      id: {
        tagline: 'Mod klien Fabric yang menampilkan prediksi aliran air dan lava sebelum Anda menuang.',
        overview:
          'SpillGuard mensimulasikan aturan cairan vanilla secara lokal dan menggambar hasilnya ke dunia sebelum Anda mengosongkan ember, sehingga Anda bisa melihat ke mana air atau lava akan mengalir. Mod ini tidak pernah menempatkan balok, tidak pernah menyentuh inventaris, dan tidak pernah berbicara dengan server: pratinjau adalah simulasi terbatas dari perilaku vanilla, dan sel yang tidak dapat dipastikan digambar sebagai kerangka putus-putus alih-alih ditebak.',
        features: [
          'Tahan satu tombol untuk melihat prediksi ember di kedua tangan',
          'Air digambar sebagai lempeng transparan bertingkat, lava sebagai kubus padat dengan garis tepi merah',
          'Sel yang tidak pasti (chunk belum dimuat, tepi dunia, atau batas simulasi habis) ditandai, bukan dikarang',
          'Interaksi air dan lava ditampilkan sebagai posisi, bukan balok yang ditebak',
          'Pesan di action bar menjelaskan mengapa pratinjau tidak muncul',
          'Tombol bawaan adalah G dan dapat diubah di Options → Controls → SpillGuard',
          'Perilaku tahan atau tekan-sekali dapat diatur, bersama dengan tombol pratinjau'
        ],
        install: [
          'Pasang Fabric Loader untuk Minecraft 1.21.1 dan letakkan Fabric API di .minecraft/mods.',
          'Letakkan spillguard-1.0.0.jar ke .minecraft/mods.',
          'Tidak perlu pemasangan di sisi server; mod ini hanya untuk klien.',
          'Tahan G sambil melihat balok dengan ember di tangan untuk melihat pratinjau; tuang seperti biasa dengan klik kanan.'
        ],
        note:
          'Membangun dari sumber memerlukan JDK 21; Java 17 tidak dapat mengompilasi kodenya. Fabric API adalah dependensi wajib.'
      },
      ar: {
        tagline: 'مود عميل على Fabric يعرض أين ستتدفّق المياه والحِمم قبل أن تفرغ الدلو.',
        overview:
          'يحاكي SpillGuard قواعد السوائل الأصلية محليًا ويرسم النتيجة في العالم قبل أن تفرغ الدلو، فترى إلى أين ستذهب المياه أو الحِمم فعليًا. لا يضع المود أي بلوكة، ولا يمسّ مخزونك، ولا يتواصل مع الخادم: المعاينة محاكاة محدودة لسلوك اللعبة الأصلي، والخلايا غير المؤكّدة تُرسم كإطارات متقطّعة بدل تخمينها.',
        features: [
          'استمر بالضغط على مفتاح لمعاينة انتشار الدلو في أي من اليدين',
          'تُرسم المياه كلوح شبه شفاف متدرّج الارتفاع، والحِمم كمكعّب صلب بحدّ أحمر',
          'الخلايا غير المؤكّدة (أجزاء غير محمّلة أو حدّ العالم أو استنفاد ميزانية المحاكاة) تُوسم ولا تُختلق',
          'تفاعلات الماء مع الحِمم تُظهر المواقع بدل تخمين البلوكات',
          'رسالة في شريط الإجراءات تشرح سبب عدم ظهور المعاينة',
          'المفتاح الافتراضي هو G ويمكن تغييره من الخيارات ← التحكم ← SpillGuard',
          'يمكن ضبط السلوك بين الاستمرار بالضغط والتبديل، إضافة إلى مفتاح المعاينة'
        ],
        install: [
          'ثبّت Fabric Loader لماينكرافت 1.21.1 وضع Fabric API في مجلد .minecraft/mods.',
          'ضع spillguard-1.0.0.jar في مجلد .minecraft/mods.',
          'لا حاجة لأي تثبيت على الخادم؛ المود للعميل فقط.',
          'استمر بضغط G وأنت تنظر إلى بلوكة وفي يدك دلو لرؤية المعاينة، ثم أفرغ الدلو بالنقر الأيمن كالمعتاد.'
        ],
        note:
          'البناء من المصدر يحتاج JDK 21؛ Java 17 لا تُصرّف الشيفرة. Fabric API اعتمادية إلزامية.'
      }
    }
  },

  {
    slug: 'dependencymanager',
    name: 'DependencyManager',
    category: 'plugin',
    kindKey: 'projects.kind.dm',
    statusKey: 'projects.status.released',
    links: ['source'],
    facts: {
      platform: 'Paper / Spigot',
      minecraft: '1.20.4',
      version: '1.0.1',
      java: 'Java 17',
      license: 'MIT'
    },
    i18n: {
      en: {
        tagline: 'A server plugin that diagnoses what your plugins depend on, and what is missing or broken.',
        overview:
          'DependencyManager scans every installed plugin and turns their depend, softdepend and loadbefore declarations into something readable: a full dependency graph, reverse lookups, missing requirements, version conflicts, cycles, and an overall health verdict. It is a diagnostic tool: it never downloads or installs anything. It is aimed at server owners who need to know why a plugin failed to load.',
        features: [
          'Scans all installed plugins and their dependency declarations',
          'Required and optional dependencies, with load-order analysis',
          'Missing dependencies, version conflicts, and dependency cycles',
          'Reverse dependencies so you can see what needs a given plugin',
          'Server-wide health report: HEALTHY, WARNING or ERROR',
          'Built for Paper, Spigot, Purpur and Folia'
        ],
        install: [
          'Download DependencyManager.jar and place it in your server plugins/ folder.',
          'Restart the server so the plugin can load before the ones it inspects.',
          'Run /dependencies to see the server-wide summary.'
        ],
        note: 'The plugin loads at STARTUP so it can read other plugins before they initialise.'
      },
      id: {
        tagline: 'Plugin server yang memeriksa apa yang dibutuhkan plugin Anda, serta apa yang hilang atau rusak.',
        overview:
          'DependencyManager memindai seluruh plugin terpasang dan mengubah deklarasi depend, softdepend, dan loadbefore menjadi sesuatu yang mudah dibaca: grafik dependensi lengkap, pencarian terbalik, dependensi yang hilang, konflik versi, siklus, serta kesimpulan kesehatan keseluruhan. Ini adalah alat diagnostik: tidak pernah mengunduh atau memasang apa pun. Alat ini ditujukan bagi pemilik server yang perlu tahu mengapa sebuah plugin gagal dimuat.',
        features: [
          'Memindai seluruh plugin terpasang beserta deklarasi dependensinya',
          'Dependensi wajib dan opsional, disertai analisis urutan pemuatan',
          'Dependensi yang hilang, konflik versi, dan siklus dependensi',
          'Pencarian terbalik untuk melihat plugin apa yang membutuhkan sebuah plugin',
          'Laporan kesehatan server: HEALTHY, WARNING, atau ERROR',
          'Dirancang untuk Paper, Spigot, Purpur, dan Folia'
        ],
        install: [
          'Unduh DependencyManager.jar dan letakkan di folder plugins/ server Anda.',
          'Mulai ulang server agar plugin termuat sebelum plugin yang diperiksanya.',
          'Jalankan /dependencies untuk melihat ringkasan seluruh server.'
        ],
        note: 'Plugin dimuat pada tahap STARTUP agar dapat membaca plugin lain sebelum mereka diinisialisasi.'
      },
      ar: {
        tagline: 'إضافة خوادم تفحص ما تعتمد عليه إضافاتك وما المفقود أو المعطوب منها.',
        overview:
          'تفحص DependencyManager كل الإضافات المثبّتة وتحوّل تصريحات depend و softdepend و loadbefore إلى شيء مقروء: رسم بياني كامل للاعتماديات، وبحث عكسي، والاعتماديات الناقصة، وتعارضات الإصدارات، والدورات، مع خلاصة عامة عن الحالة. هي أداة تشخيص: لا تنزّل ولا تثبّت شيئًا، ووجّهت لأصحاب الخوادم الذين يحتاجون معرفة سبب فشل تحميل إضافة.',
        features: [
          'فحص كل الإضافات المثبّتة وتصريحات اعتمادياتها',
          'الاعتماديات الإلزامية والاختيارية مع تحليل ترتيب التحميل',
          'الاعتماديات الناقصة وتعارضات الإصدارات ودورات الاعتماد',
          'بحث عكسي لمعرفة الإضافات التي تعتمد على إضافة معيّنة',
          'تقرير شامل عن حالة الخادم: HEALTHY أو WARNING أو ERROR',
          'مصمّمة لـ Paper و Spigot و Purpur و Folia'
        ],
        install: [
          'نزّل DependencyManager.jar وضعه في مجلد plugins/ في خادمك.',
          'أعد تشغيل الخادم لتُحمَّل الإضافة قبل الإضافات التي تفحصها.',
          'نفّذ الأمر /dependencies لعرض ملخّص الخادم.'
        ],
        note: 'تُحمَّل الإضافة في مرحلة STARTUP لتقرأ الإضافات الأخرى قبل تهيئتها.'
      }
    }
  },

  {
    slug: 'timbr',
    name: 'Timbr',
    category: 'plugin',
    kindKey: 'projects.kind.timbr',
    statusKey: 'projects.status.released',
    links: ['download'],
    facts: {
      platform: 'Paper / Spigot',
      minecraft: '1.20.x',
      version: '1.3.0',
      java: 'Java 21',
      license: ''
    },
    i18n: {
      en: {
        tagline: 'A tree-felling plugin for Paper, Purpur, Spigot and Pufferfish.',
        overview:
          'Timbr chops a whole tree in one break instead of one log at a time. Cut behaviour is bounded by configuration: a maximum number of logs, and what counts as a tree. Every block is checked against region protection before it is removed, so it works alongside protection plugins rather than around them.',        features: [
          'Fells an entire tree from a single broken log',
          'Configurable maximum logs and cut behaviour',
          'Checks region protection before removing any block',
          'Built against the Paper API with Java 21'
        ],
        install: [
          'Build with mvn -Dpaper.version=1.20.2-R0.1-SNAPSHOT clean package.',
          'Drop the resulting jar from target/ into your server plugins/ folder.',
          'Edit config.yml for the maximum logs and cut behaviour, then restart.',
          'Set paper.version to a different 1.20.x API build if you need a newer patch.'
        ],
        note: 'Targets Minecraft 1.20.x; the paper.version property selects the exact API build.'
      },
      id: {
        tagline: 'Plugin penebang pohon untuk Paper, Purpur, Spigot, dan Pufferfish.',
        overview:
          'Timbr menebang seluruh pohon dalam sekali tebal satu balok kayu, bukan satu per satu. Perilaku penebangan dibatasi oleh konfigurasi: jumlah maksimum balok dan definisi pohon. Setiap balok diperiksa terhadap proteksi wilayah sebelum dihancurkan, sehingga plugin ini bekerja bersama plugin proteksi, bukan mengakalinya.',
        features: [
          'Menebang seluruh pohon dari satu balok kayu yang dihancurkan',
          'Jumlah balok maksimum dan perilaku penebangan dapat diatur',
          'Memeriksa proteksi wilayah sebelum menghancurkan balok apa pun',
          'Dibangun terhadap Paper API dengan Java 21'
        ],
        install: [
          'Bangun dengan mvn -Dpaper.version=1.20.2-R0.1-SNAPSHOT clean package.',
          'Letakkan jar hasil build dari target/ ke folder plugins/ server Anda.',
          'Ubah config.yml untuk jumlah balok maksimum dan perilaku penebangan, lalu mulai ulang.',
          'Atur paper.version ke build API 1.20.x lain bila membutuhkan patch terbaru.'
        ],
        note: 'Menargetkan Minecraft 1.20.x; properti paper.version memilih build API yang tepat.'
      },
      ar: {
        tagline: 'إضافة قطع الأشجار لـ Paper و Purpur و Spigot و Pufferfish.',
        overview:
          'تقطع Timbr الشجرة كاملةً بتحطيم جذع واحد بدل قطعها لوحًا بلوح. سلوك القطع محدود بالإعدادات: حدّ أقصى لعدد الألواح وتعريف الشجرة. ويُفحص كل بلوكة مقابل حماية المنطقة قبل إزالتها، فتعمل الإضافة إلى جانب إضافات الحماية لا حولها.',
        features: [
          'قطع الشجرة كاملةً من جذع واحد محطّم',
          'حدّ أقصى للألواح وسلوك قطع قابلان للضبط',
          'فحص حماية المنطقة قبل إزالة أي بلوكة',
          'مبنية على Paper API مع Java 21'
        ],
        install: [
          'ابنِ الإضافة بالأمر mvn -Dpaper.version=1.20.2-R0.1-SNAPSHOT clean package.',
          'ضع ملف الإضافة الناتج من target/ في مجلد plugins/ بخادمك.',
          'عدّل config.yml لتحديد أقصى عدد للألواح وسلوك القطع ثم أعد التشغيل.',
          'اضبط paper.version على إصدار API آخر من 1.20.x إن احتجت تحديثًا أحدث.'
        ],
        note: 'تستهدف ماينكرافت 1.20.x؛ وخاصية paper.version تختار إصدار API بدقّة.'
      }
    }
  },

  {
    slug: 'timexp',
    name: 'TimExp',
    category: 'plugin',
    kindKey: 'projects.kind.timexp',
    statusKey: 'projects.status.released',
    links: [],
    facts: {
      platform: 'Paper / Spigot',
      minecraft: '1.16 to 1.20.x',
      version: '1.0.2',
      java: 'Java 21',
      license: ''
    },
    i18n: {
      en: {
        tagline: 'A plugin that keeps thrown XP bottles private, so nobody can steal your experience.',
        overview:
          'TimExp makes the experience from a thrown Bottle o\' Enchanting private to the player who threw it, so other players can no longer vacuum it up. Sneaking while throwing keeps the XP public and vanilla-like. Private XP stays private by default; it only turns public after a configurable delay if you enable that option.',
        features: [
          'XP from thrown bottles is private to the thrower',
          'Sneak while throwing keeps the XP public and vanilla-like',
          'Optional expiry so private XP becomes public after a set duration',
          'Runs on Paper, Spigot and Purpur across 1.16.x to 1.20.x and newer Bukkit-family servers'
        ],
        install: [
          'Build with Maven and drop the resulting jar into your server plugins/ folder.',
          'Restart the server and adjust settings in config.yml if you want private XP to expire.',
          'The timexp.use permission enables the behaviour and defaults to true for everyone.'
        ],
        note: 'PlaceholderAPI, WorldGuard and GriefPrevention are optional integrations, not requirements.'
      },
      id: {
        tagline: 'Plugin yang menjaga XP dari botol lempar tetap privat, agar tidak diambil orang lain.',
        overview:
          'TimExp membuat XP dari Bottle o\' Enchanting yang dilempar menjadi privat bagi pemain yang melemparnya, sehingga pemain lain tidak lagi bisa mengumpulkannya. Menyelinap saat melempar membuat XP tetap publik dan seperti vanilla. XP privat tetap privat secara bawaan; hanya menjadi publik setelah jeda yang dapat diatur bila opsi itu diaktifkan.',
        features: [
          'XP dari botol lempar menjadi privat bagi pelempar',
          'Menyelinap saat melempar membuat XP tetap publik dan seperti vanilla',
          'Opsi kedaluwarsa agar XP privat menjadi publik setelah durasi tertentu',
          'Berjalan di Paper, Spigot, dan Purpur untuk 1.16.x sampai 1.20.x serta server keluarga Bukkit terbaru'
        ],
        install: [
          'Bangun dengan Maven dan letakkan jar hasil build ke folder plugins/ server Anda.',
          'Mulai ulang server dan sesuaikan pengaturan di config.yml bila ingin XP privat kedaluwarsa.',
          'Permission timexp.use mengaktifkan perilaku ini dan secara bawaan bernilai true untuk semua pemain.'
        ],
        note: 'PlaceholderAPI, WorldGuard, dan GriefPrevention adalah integrasi opsional, bukan syarat.'
      },
      ar: {
        tagline: 'إضافة تجعل نقاط خبرة القنينات المُلقاة خاصة، فلا يستطيع أحد سرقتها.',
        overview:
          'تجعل TimExp نقاط الخبرة من قنينة السحر المُلقاة خاصة باللاعب الذي ألقاها، فلا يقدر لاعب آخر على جمعها. الانحناء أثناء الرمي يُبقي النقاط عامّة وسلوكًا كالأصل. تبقى النقاط الخاصة خاصة افتراضيًا، ولا تصبح عامّة إلا بعد مدة قابلة للضبط إن فعّلت ذلك الخيار.',
        features: [
          'نقاط الخبرة من القنينات المُلقاة خاصة بالرامي',
          'الانحناء أثناء الرمي يُبقي النقاط عامّة وسلوكًا كالأصل',
          'خيار انتهاء الصلاحية لتصبح النقاط الخاصة عامّة بعد مدّة محدّدة',
          'تعمل على Paper و Spigot و Purpur من 1.16.x إلى 1.20.x وخوادم عائلة Bukkit الأحدث'
        ],
        install: [
          'ابنِ الإضافة باستخدام Maven وضع الملف الناتج في مجلد plugins/ بخادمك.',
          'أعد تشغيل الخادم وعدّل الإعدادات في config.yml إن أردت انتهاء صلاحية النقاط الخاصة.',
          'صلاحية timexp.use تُفعّل هذا السلوك وقيمتها الافتراضية true لكل اللاعبين.'
        ],
        note: 'PlaceholderAPI و WorldGuard و GriefPrevention تكاملات اختيارية وليست متطلّبات.'
      }
    }
  },

  {
    slug: 'whereami',
    name: 'WhereAmI',
    category: 'plugin',
    kindKey: 'projects.kind.whereami',
    statusKey: 'projects.status.released',
    links: [],
    facts: {
      platform: 'Paper / Spigot',
      minecraft: '1.20',
      version: '1.0.1',
      java: 'Java 21',
      license: ''
    },
    i18n: {
      en: {
        tagline: 'A directional navigation and teleport utility plugin for Paper and Spigot.',
        overview:
          'WhereAmI is a navigation and teleportation utility for Paper and Spigot servers: players store locations, then return to them through an in-game GUI with direction and distance guidance. Location storage is handled through a connection pool, so saved coordinates live in a database rather than in memory.',
        features: [],
        install: [],
        note: 'Feature and command documentation for this plugin has not been published yet, so only verified metadata is shown here.'
      },
      id: {
        tagline: 'Plugin utilitas navigasi arah dan teleportasi untuk Paper dan Spigot.',
        overview:
          'WhereAmI adalah utilitas navigasi dan teleportasi untuk server Paper dan Spigot: pemain menyimpan lokasi, lalu kembali ke lokasi tersebut melalui GUI dalam permainan dengan petunjuk arah dan jarak. Penyimpanan lokasi ditangani melalui connection pool, sehingga koordinat tersimpan di basis data, bukan di memori.',
        features: [],
        install: [],
        note: 'Dokumentasi fitur dan perintah plugin ini belum dipublikasikan, sehingga hanya metadata terverifikasi yang ditampilkan di sini.'
      },
      ar: {
        tagline: 'إضافة تنقّل هدفي ونقل لحظي لخوادم Paper و Spigot.',
        overview:
          'WhereAmI أداة تنقّل ونقل لخوادم Paper و Spigot: يحفظ اللاعبون المواقع ثم يعودون إليها عبر واجهة داخل اللعبة مع إرشاد للاتجاه والمسافة. تُدار تخزين المواقع عبر تجمّع اتصالات، فتُحفظ الإحداثيات في قاعدة بيانات لا في الذاكرة.',
        features: [],
        install: [],
        note: 'لم يُنشر توثيق الميزات والأوامر لهذه الإضافة بعد، لذا لا تُعرض هنا إلا بيانات موثّقة.'
      }
    }
  },

  {
    slug: 'superblite',
    name: 'SuperbLite',
    category: 'shader',
    kindKey: 'projects.kind.superblite',
    statusKey: 'projects.status.released',
    links: [],
    facts: {
      platform: 'Iris Shaders',
      minecraft: '1.21.4',
      version: '0.5.0',
      java: '',
      license: 'All Rights Reserved'
    },
    i18n: {
      en: {
        tagline: 'A lightweight shader pack that adds real-time shadows without leaving the vanilla look.',
        overview:
          'SuperbLite keeps the familiar vanilla style and adds directional shadows plus restrained colour grading. It targets low-end GPUs, including older Intel integrated graphics, and deliberately skips ray tracing and volumetric lighting so the cost stays predictable. The initial shadow map resolution is 1024, and actual performance still depends on your GPU, driver, and render distance.',
        features: [
          'Shadow mapping for terrain',
          'Alpha-tested shadows for cutout textures, including foliage',
          'Shadow-aware terrain lighting',
          'Lightweight colour grading',
          'No ray tracing and no volumetric lighting'
        ],
        install: [
          'Install Iris Shaders for Minecraft 1.21.4.',
          'Place SuperbLite-0.5.0.zip in .minecraft/shaderpacks.',
          'Select SuperbLite in Video Settings → Shader Packs.',
          'Keep LICENSE, README.md, and shaders/ at the root of the extracted zip.'
        ],
        note: 'GLSL 330 compatibility is required. If shader compilation fails, the complete Iris shader log is needed to diagnose it.'
      },
      id: {
        tagline: 'Shader pack ringan yang menambahkan bayangan real-time tanpa meninggalkan gaya vanilla.',
        overview:
          'SuperbLite mempertahankan gaya vanilla yang familiar dan menambahkan bayangan arah serta penyesuaian warna yang tertahan. Paket ini menargetkan GPU kelas rendah, termasuk grafis terintegrasi Intel lawas, dan sengaja menghindari ray tracing serta volumetric lighting agar biaya render tetap dapat diperkirakan. Resolusi shadow map awal adalah 1024, dan performa nyata tetap bergantung pada GPU, driver, serta jarak render Anda.',
        features: [
          'Shadow mapping untuk terrain',
          'Bayangan alpha-tested untuk tekstur cutout, termasuk dedaunan',
          'Pencahayaan terrain yang sadar bayangan',
          'Penyesuaian warna ringan',
          'Tanpa ray tracing dan tanpa volumetric lighting'
        ],
        install: [
          'Pasang Iris Shaders untuk Minecraft 1.21.4.',
          'Letakkan SuperbLite-0.5.0.zip di .minecraft/shaderpacks.',
          'Pilih SuperbLite di Video Settings → Shader Packs.',
          'Jaga LICENSE, README.md, dan shaders/ tetap berada di root zip yang diekstrak.'
        ],
        note: 'Kompatibilitas GLSL 330 diperlukan. Bila kompilasi shader gagal, log Iris shader yang lengkap diperlukan untuk diagnosis.'
      },
      ar: {
        tagline: 'حزمة تظليل خفيفة تضيف ظلالًا في الزمن الحقيقي دون التخلي عن المظهر الأصلي.',
        overview:
          'تحافظ SuperbLite على المظهر الأصلي المألوف وتضيف ظلالًا اتجاهية وتدرّجًا لونيًا متحفّظًا. تستهدف الحزمة بطاقات الرسوميات الضعيفة، بما فيها رسوميات Intel المدمجة القديمة، وتتجنّب عمدًا تتبّع الأشعة والإضاءة الحجمية ليبقى الأداء متوقّعًا. دقّة خريطة الظل الابتدائية 1024، ويعتمد الأداء الفعلي على البطاقة والمشغّل ومسافة الرسم.',
        features: [
          'رسم خرائط ظل للتضاريس',
          'ظلال مُختبَنة ألفا للنسائج المقطوعة بما فيها أوراق الشجر',
          'إضاءة تضاريس تراعي الظل',
          'تدرّج لوني خفيف',
          'بلا تتبّع أشعة وبلا إضاءة حجمية'
        ],
        install: [
          'ثبّت Iris Shaders لماينكرافت 1.21.4.',
          'ضع SuperbLite-0.5.0.zip في مجلد .minecraft/shaderpacks.',
          'اختر SuperbLite من إعدادات الفيديو ← حزم التظليل.',
          'أبقِ LICENSE و README.md و shaders/ في جذر الملف المضغوط بعد فكّه.'
        ],
        note: 'يلزم توافق GLSL 330. إن فشل تصريف التظليل فستحتاج سجل Iris الكامل للتشخيص.'
      }
    }
  },

  {
    slug: 'lifespire',
    name: 'Lifespire',
    category: 'mod',
    kindKey: 'projects.kind.lifespire',
    statusKey: 'projects.status.beta',
    links: [],
    facts: {
      platform: 'Bukkit / Paper / Fabric / NeoForge',
      minecraft: '1.13+ · 1.21.x',
      version: '0.3.0-beta',
      java: '',
      license: ''
    },
    i18n: {
      en: {
        tagline: 'A mod that gives Minecraft villagers a persistent lifecycle: they age, and eventually they die.',
        overview:
          'Lifespire tracks a lifespan for every villager. Ages advance once per Minecraft day through six stages, survive restarts, chunk unloads, and world reloads, and end in natural death at a configurable maximum. The lifecycle logic lives in a platform-independent core, so the same rules run on Bukkit, Paper, Fabric, NeoForge and Forge builds. New villagers start at age zero; existing ones are assigned a configurable initial age.',
        features: [
          'Six life stages from toddler to venerable, driven by age in Minecraft days',
          'Ages persist through restarts, chunk unloads, and world reloads',
          'Natural death at a configurable maximum lifespan, which can be disabled',
          'Aging runs on a scheduled task once per day instead of every tick',
          'Platform-independent core with the same rules on every loader',
          'Lifecycle events for other plugins to hook into'
        ],
        install: [
          'Build the default artifact with ./gradlew build; this produces the Bukkit/Paper jar and the core.',
          'Drop bukkit-0.3.0-beta.jar into your server plugins/ folder and restart.',
          'For Fabric, NeoForge or Forge, build inside that platform\'s own development environment.'
        ],
        note: 'Bukkit, Spigot and Paper builds are implemented and tested. The Fabric, NeoForge and Forge modules are reference implementations that still need their own build environments.'
      },
      id: {
        tagline: 'Mod yang memberi villager Minecraft siklus hidup persisten: mereka menua, lalu akhirnya meninggal.',
        overview:
          'Lifespire mencatat masa hidup setiap villager. Usia maju sekali per hari Minecraft melalui enam tahap, bertahan melewati restart, pelepasan chunk, dan muat ulang dunia, serta berakhir dengan kematian alami pada batas yang dapat diatur. Logika siklus hidup berada di core yang independen platform, sehingga aturan yang sama berjalan di build Bukkit, Paper, Fabric, NeoForge, dan Forge. Villager baru mulai dari usia nol; villager yang sudah ada diberi usia awal yang dapat diatur.',
        features: [
          'Enam tahap kehidupan dari balita hingga terhormat, digerakkan oleh usia dalam hari Minecraft',
          'Usia bertahan melewati restart, pelepasan chunk, dan muat ulang dunia',
          'Kematian alami pada batas usia maksimum yang dapat diatur, dan dapat dimatikan',
          'Penuaan berjalan pada tugas terjadwal sekali sehari, bukan setiap tick',
          'Core independen platform dengan aturan yang sama di setiap loader',
          'Event siklus hidup yang dapat dipakai plugin lain'
        ],
        install: [
          'Bangun artefak bawaan dengan ./gradlew build; ini menghasilkan jar Bukkit/Paper beserta core-nya.',
          'Letakkan bukkit-0.3.0-beta.jar di folder plugins/ server Anda, lalu mulai ulang.',
          'Untuk Fabric, NeoForge, atau Forge, bangun di dalam lingkungan pengembangan platform tersebut.'
        ],
        note: 'Build Bukkit, Spigot, dan Paper sudah diimplementasikan dan diuji. Modul Fabric, NeoForge, dan Forge adalah implementasi referensi yang masih memerlukan lingkungan build masing-masing.'
      },
      ar: {
        tagline: 'مود يمنح قرويين ماينكرافت دورة حياة مستمرة: يشيخون ثم يموتون في النهاية.',
        overview:
          'يتابع Lifespire عمر كل قروي. يتقدّم العمر مرة كل يوم ماينكرافت عبر ست مراحل، ويصمد أمام إعادة التشغيل وتفريغ الأجزاء وإعادة تحميل العالم، وينتهي بموت طبيعي عند حدّ أقصى قابل للضبط. منطق دورة الحياة في نواة مستقلّة عن المنصّات، فالقواعد نفسها تعمل على بناء Bukkit و Paper و Fabric و NeoForge و Forge. يبدأ القرويون الجدد من عمر صفر، ويُمنح القرويون الحاليون عمرًا ابتدائيًا قابلًا للضبط.',
        features: [
          'ست مراحل حياتية من الطفل إلى المُحتَرم، مدفوعة بالعمر بأيام ماينكرافت',
          'يصمد العمر أمام إعادة التشغيل وتفريغ الأجزاء وإعادة تحميل العالم',
          'موت طبيعي عند حدّ عمر أقصى قابل للضبط، ويمكن تعطيله',
          'يعمل التقدّم في العمر بمهمّة مجدولة مرة يوميًا لا كل نبضة',
          'نواة مستقلّة عن المنصّات بنفس القواعد على كل مُحمِّل',
          'أحداث دورة حياة يمكن للإضافات الأخرى الاشتراك بها'
        ],
        install: [
          'ابنِ الملف الافتراضي بالأمر ./gradlew build؛ ينتج jar الخاص بـ Bukkit/Paper مع النواة.',
          'ضع bukkit-0.3.0-beta.jar في مجلد plugins/ بخادمك ثم أعد التشغيل.',
          'لـ Fabric أو NeoForge أو Forge، ابنِ داخل بيئة تطوير تلك المنصّة.'
        ],
        note: 'بناء Bukkit و Spigot و Paper منفّذ ومُختبَر. أما وحدات Fabric و NeoForge و Forge فتنفيذ مرجعي يحتاج بيئات بناء خاصة به.'
      }
    }
  },

  {
    slug: 'altarcompiler',
    name: 'AltarCompiler',
    category: 'tool',
    kindKey: 'projects.kind.altarcompiler',
    statusKey: 'projects.status.released',
    links: [],
    facts: {
      platform: 'Java 21 · JavaFX',
      minecraft: 'Paper 1.21.1',
      version: '1.1.1',
      java: 'Java 21',
      license: ''
    },
    i18n: {
      en: {
        tagline: 'A desktop tool that compiles Skript source into a packaged Paper plugin jar.',
        overview:
          'AltarCompiler takes Skript source and runs it through a real compiler pipeline: lexer, parser, AST, semantic analysis, Java source and plugin.yml generation, Maven project generation, compilation, jar packaging, and export. The output is a working Paper plugin rather than an interpretation of one. It is a Windows desktop application, and the tooling it shells out to needs a full JDK 21 plus Maven on the PATH.',
        features: [
          'Lexer, parser, AST and semantic analysis over a supported Skript subset',
          'Generates Java sources, plugin.yml, and a Maven project',
          'Compiles and packages the result into a plugin jar',
          'Packaged as a Windows desktop application with an installer'
        ],
        install: [
          'Install a full JDK 21 (javac must be available, not just a JRE) and Apache Maven 3.9 or newer.',
          'Run the AltarCompiler desktop application on Windows 10 or 11.',
          'Make sure the same JDK and Maven are on PATH, because the app shells out to Maven to build.',
          'Open a Skript project and use Compile to produce the plugin jar.'
        ],
        note: 'The compiler core is plain Java and runs anywhere; the installer and OS integrations target Windows.'
      },
      id: {
        tagline: 'Aplikasi desktop yang mengompilasi kode Skript menjadi plugin Paper siap pakai.',
        overview:
          'AltarCompiler mengambil kode Skript dan menjalankannya melalui pipeline kompilator sungguhan: lexer, parser, AST, analisis semantik, pembangkitan sumber Java dan plugin.yml, pembangkitan proyek Maven, kompilasi, pengemasan jar, dan ekspor. Hasilnya adalah plugin Paper yang berfungsi, bukan interpretasi dari plugin. Aplikasi ini adalah aplikasi desktop Windows, dan perkakas yang dipanggilnya memerlukan JDK 21 penuh serta Maven di PATH.',
        features: [
          'Lexer, parser, AST, dan analisis semantik atas subset Skript yang didukung',
          'Membangkitkan sumber Java, plugin.yml, dan proyek Maven',
          'Mengompilasi dan mengemas hasilnya menjadi jar plugin',
          'Dikirim sebagai aplikasi desktop Windows beserta installer'
        ],
        install: [
          'Pasang JDK 21 penuh (javac harus tersedia, bukan hanya JRE) dan Apache Maven 3.9 atau lebih baru.',
          'Jalankan aplikasi desktop AltarCompiler di Windows 10 atau 11.',
          'Pastikan JDK dan Maven yang sama ada di PATH, karena aplikasi memanggil Maven untuk build.',
          'Buka proyek Skript dan gunakan Compile untuk menghasilkan jar plugin.'
        ],
        note: 'Inti kompilator adalah Java murni dan berjalan di mana saja; installer serta integrasi OS menargetkan Windows.'
      },
      ar: {
        tagline: 'تطبيق سطح مكتب يحوّل شيفرة Skript إلى ملف إضافة جاهز لـ Paper.',
        overview:
          'يمرّر AltarCompiler شيفرة Skript عبر خطّ تصريف حقيقي: مُحلِّل معجمي ومُحلِّل تكراري وشجرة AST وتحليل دلالي وتوليد شيفرة Java و plugin.yml ومشروع Maven ثم التصرير والتغليف والتصدير. فتكون النتيجة إضافة Paper تعمل فعلًا لا تفسيرًا لها. التطبيق موجّه لويندوز، والأدوات التي ينفّذها تحتاج JDK 21 كاملًا و Maven على المسار.',
        features: [
          'مُحلِّل معجمي وتكراري وشجرة AST وتحليل دلالي لمجموعة Skript المدعومة',
          'توليد شيفرة Java و plugin.yml ومشروع Maven',
          'تصريف وتغليف النتيجة في ملف إضافة',
          'يُسلّم كتطبيق سطح مكتب لويندوز مع مُثبِّت'
        ],
        install: [
          'ثبّت JDK 21 كاملًا (يجب توفّر javac لا JRE فقط) و Apache Maven 3.9 أو أحدث.',
          'شغّل تطبيق AltarCompiler على ويندوز 10 أو 11.',
          'تأكد من وجود JDK 21 و Apache Maven 3.9 على المسار، لأن التطبيق ينفّذ Maven للبناء.',
          'افتح مشروع Skript واستخدم Compile لإنتاج ملف الإضافة.'
        ],
        note: 'نواة المُصرِّف بلغة Java خالصة وتعمل في أي بيئة؛ أمّا المُثبِّت وتكاملات النظام فتستهدف ويندوز.'
      }
    }
  }
];

export function projectBySlug(slug) {
  return PROJECTS.find((project) => project.slug === slug) || null;
}

// Flat data-i18n key map for one language, merged by app.js into the UI dictionary.
// Missing per-language fields fall back to English.
export function projectStrings(lang) {
  const strings = {};

  for (const project of PROJECTS) {
    const english = project.i18n.en;
    const content = project.i18n[lang] || english;

    for (const [field, value] of Object.entries(english)) {
      const translated = content[field] === undefined ? value : content[field];
      if (Array.isArray(translated)) {
        translated.forEach((item, index) => {
          strings[`project.${project.slug}.${field}.${index}`] = item;
        });
      } else {
        strings[`project.${project.slug}.${field}`] = translated;
      }
    }
  }

  return strings;
}
