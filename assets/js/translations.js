// UI translations for the whole site (homepage + projects page).
// Keys are looked up by the data-i18n attribute in the HTML files.
// {year} is replaced with the current year at render time.

export const DEFAULT_LANG = 'en';

export const LANGUAGES = [
  { code: 'en', label: 'EN', name: 'English', dir: 'ltr' },
  { code: 'id', label: 'ID', name: 'Bahasa Indonesia', dir: 'ltr' },
  { code: 'ar', label: 'العربية', name: 'العربية', dir: 'rtl' }
];

export const TRANSLATIONS = {
  en: {
    'meta.title': 'hafiy_dev: Independent Minecraft Development',
    'meta.title.projects': 'hafiy_dev: Projects',
    'meta.title.about': 'hafiy_dev: About',
    'meta.description':
      'hafiy_dev develops mods, plugins, and software that make Minecraft experiences better.',
    'meta.description.projects':
      'Directory of Minecraft mods, server plugins, shader packs, and developer tools built by hafiy_dev.',
    'meta.description.about':
      'About hafiy_dev, an independent Minecraft development identity: development focus, principles, selected projects, and public links.',

    'nav.skip': 'Skip to content',
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.langLabel': 'Language',
    'nav.github': 'GitHub',
    'nav.changelog': 'Changelog',

    'detail.overview': 'Overview',
    'detail.features': 'Features',
    'detail.installation': 'Installation',
    'detail.links': 'Links',
    'detail.confirmed': 'Confirmed',
    'detail.meta.java': 'Java',
    'detail.meta.version': 'Version',
    'detail.meta.license': 'License',

    'notfound.title': 'Page not found',
    'notfound.body': 'That page does not exist. It may have moved, or the link may be wrong.',
    'notfound.back': 'Back to projects',

    'meta.title.changelog': 'hafiy_dev: Changelog',
    'meta.description.changelog':
      'Release notes and updates for hafiy_dev projects, taken from the public release feed of each project.',

    'changelog.page.title': 'Changelog',
    'changelog.page.desc':
      'Release notes for hafiy_dev projects. The data comes from the public release feed of each project and refreshes automatically.',
    'changelog.list': 'RELEASES',
    'changelog.filter.label': 'Filter by project',
    'changelog.loading': 'Loading release data...',
    'changelog.error': 'Release data could not be loaded right now. The problem is usually temporary.',
    'changelog.error.retry': 'Try again',
    'changelog.empty': 'There are no published releases to show.',
    'changelog.empty.project': 'No published releases yet for {project}.',
    'changelog.unconfigured': 'Release tracking is not configured for {project}.',
    'changelog.stale': 'A refresh just failed for {project}. Showing the last verified release data.',
    'changelog.prerelease': 'Pre-release',
    'changelog.view': 'View release',
    'changelog.more': 'Load more',
    'changelog.checked': 'Source data last checked {date}.',

    'hero.eyebrow': 'INDEPENDENT MINECRAFT DEVELOPMENT',
    'hero.title': 'Building more than just plugins.',
    'hero.desc':
      'hafiy_dev develops mods, plugins, and software that make Minecraft experiences better.',
    'hero.primary': 'Explore Projects',
    'hero.secondary': 'View GitHub',
    'hero.meta.edition': 'Minecraft Java Edition',
    'hero.meta.fabric': 'Fabric',
    'hero.meta.spigot': 'Paper / Spigot',

    'projects.title': 'Selected Projects',
    'projects.count': '4 projects',
    'projects.lede': 'Four projects across the client and the server side.',
    'projects.all': 'All projects',

    'projects.page.title': 'Projects',
    'projects.page.desc': 'Mods, plugins, and software developed by hafiy_dev.',
    'projects.page.count': '9 projects',
    'projects.directory': 'PROJECT DIRECTORY',
    'projects.filter.all': 'All',
    'projects.filter.mods': 'Mods',
    'projects.filter.plugins': 'Server Plugins',
    'projects.filter.shaders': 'Shader Packs',
    'projects.filter.tools': 'Tools',
    'projects.empty': 'No projects in this category yet.',

    'projects.kind.sm': 'Server plugin',
    'projects.kind.sg': 'Client mod',
    'projects.kind.dm': 'Diagnostics plugin',
    'projects.kind.timbr': 'Utility plugin',
    'projects.kind.timexp': 'Server plugin',
    'projects.kind.whereami': 'Server plugin',
    'projects.kind.superblite': 'Shader pack',
    'projects.kind.lifespire': 'Minecraft mod',
    'projects.kind.altarcompiler': 'Developer tool',

    'projects.desc.sm': 'Makes Minecraft mobs act smarter through more dynamic behaviour.',
    'projects.desc.sg':
      'Visualises where water and lava will flow before the fluid is placed.',
    'projects.desc.dm':
      'Scans installed plugins to trace dependencies, load order, conflicts, and cycles.',
    'projects.desc.timbr': 'Fells a whole tree in one break, respecting region protection.',
    'projects.desc.timexp':
      'Keeps thrown XP bottles private to the thrower, unless they sneak to share them.',
    'projects.desc.whereami':
      'Directional navigation and teleport utility with an in-game GUI and stored locations.',
    'projects.desc.superblite':
      'Lightweight shader pack that adds real-time shadows and colour grading while keeping the vanilla look.',
    'projects.desc.lifespire':
      'Gives villagers a persistent lifecycle: they age through stages and eventually die of old age.',
    'projects.desc.altarcompiler':
      'Desktop tool that compiles Skript source into a packaged Paper plugin jar.',

    'projects.meta.platform': 'Platform',
    'projects.meta.version': 'Minecraft',
    'projects.meta.status': 'Status',
    'projects.status.released': 'Released',
    'projects.status.beta': 'Beta',
    'projects.repo': 'Repository',
    'projects.view': 'View Project',
    'projects.details': 'Details',
    'projects.source': 'Source Code',
    'projects.download': 'Download',

    'about.title': 'About',
    'about.body':
      'hafiy_dev is an independent software brand focused on Minecraft and related technical work: mods, server plugins, and the utilities that keep them running.',
    'about.item1.label': 'Performance',
    'about.item1.text':
      'Configurable update intervals and entity limits keep the load light.',
    'about.item2.label': 'Compatibility',
    'about.item2.text':
      'Runs across servers and launchers without changing how the game works.',
    'about.item3.label': 'Vanilla behaviour',
    'about.item3.text':
      'Respects vanilla rules and gamerules instead of replacing them.',

    'about.page.desc':
      'hafiy_dev is an independent development identity focused on Minecraft and related technical projects.',

    'about.intro.title': 'Introduction',
    'about.intro.body':
      'hafiy_dev builds software for Minecraft Java Edition: server plugins, one client mod, and the developer tools that go with them. The work starts from problems met while running and writing for Minecraft servers, and every project stays inside the platform and version range it targets. This page sets out what is built, how it is built, and where the public code lives.',

    'about.focus.title': 'Development Focus',
    'about.focus.lede': 'Five areas of work, each one represented by projects in the directory.',
    'about.focus.1.label': 'Server plugins',
    'about.focus.1.text':
      'Behaviour, utility, and diagnostic plugins for Paper, Spigot, Purpur, and Folia.',
    'about.focus.2.label': 'Client modifications',
    'about.focus.2.text':
      'Fabric mods that run on the client, built for one specific Minecraft version.',
    'about.focus.3.label': 'Developer utilities',
    'about.focus.3.text':
      'Desktop and diagnostic tools such as AltarCompiler and DependencyManager.',
    'about.focus.4.label': 'Server administration',
    'about.focus.4.text':
      'Dependency inspection, load order analysis, and conflict detection for server owners.',
    'about.focus.5.label': 'Compatibility engineering',
    'about.focus.5.text':
      'Compiling against public APIs instead of server internals, and keeping each project inside the versions it supports.',

    'about.principles.title': 'Development Principles',
    'about.principles.lede': 'The rules every project in the directory is built to follow.',
    'about.principle.1.label': 'Practical functionality',
    'about.principle.1.text':
      'Each project solves a specific problem. Anything that does not serve that problem is left out.',
    'about.principle.2.label': 'Simplicity',
    'about.principle.2.text':
      'Configuration stays small and behaviour stays predictable, so a server owner knows the outcome before installing.',
    'about.principle.3.label': 'Platform compatibility',
    'about.principle.3.text':
      'Projects name the platforms and versions they support and are compiled against public APIs, not internals.',
    'about.principle.4.label': 'Predictable cost',
    'about.principle.4.text':
      'Load stages, update intervals, and entity limits are explicit and configurable, so performance does not depend on guesswork.',
    'about.principle.5.label': 'Maintainability',
    'about.principle.5.text':
      'Code is organised into small, testable pieces: behaviour trees, state machines, and a core that is independent of the platform.',
    'about.principle.6.label': 'Respect for game mechanics',
    'about.principle.6.text':
      'Plugins work with vanilla rules, gamerules, and region protection instead of replacing them.',

    'about.selected.lede': 'Four projects with published detail pages.',

    'about.philosophy.title': 'Development Philosophy',
    'about.philosophy.body':
      'Every project starts from a problem that turned up while playing, running, or building for Minecraft: mobs that ignore their surroundings, fluids that spill where you did not plan, plugins that fail to load for reasons nobody can see, and trees that take too long to chop. The first step is to understand that problem properly. The second is to build the smallest thing that solves it well, on the platform it is meant for. There is no feature padding and no marketing layer: a project is finished when it does its job, and its documentation says only what the code actually does.',
    'about.philosophy.point':
      'That also means saying no. A feature that would change how the game works, or that cannot be verified on the target platform, stays out until it proves itself.',

    'about.links.title': 'Public Links',
    'about.links.lede':
      'Verified public destinations. A link appears only when the project publishes a confirmed URL.',

    'about.more': 'More about hafiy_dev',

    'footer.tagline': 'Independent Minecraft development.',
    'footer.rights': '© {year} hafiy_dev. All rights reserved.',
    'footer.github': 'GitHub',
    'footer.top': 'Back to top'
  },

  id: {
    'meta.title': 'hafiy_dev: Pengembangan Minecraft Independen',
    'meta.title.projects': 'hafiy_dev: Proyek',
    'meta.title.about': 'hafiy_dev: Tentang',
    'meta.description':
      'hafiy_dev mengembangkan mod, plugin, dan perangkat lunak untuk menghadirkan pengalaman Minecraft yang lebih baik.',
    'meta.description.projects':
      'Daftar mod, plugin server, shader pack, dan perkakas pengembang yang dibuat oleh hafiy_dev.',
    'meta.description.about':
      'Tentang hafiy_dev, identitas pengembangan Minecraft independen: fokus pengembangan, prinsip, proyek pilihan, dan tautan publik.',

    'nav.skip': 'Lewati ke konten utama',
    'nav.home': 'Beranda',
    'nav.projects': 'Proyek',
    'nav.about': 'Tentang',
    'nav.langLabel': 'Bahasa',
    'nav.github': 'GitHub',
    'nav.changelog': 'Log Perubahan',

    'detail.overview': 'Ikhtisar',
    'detail.features': 'Fitur',
    'detail.installation': 'Instalasi',
    'detail.links': 'Tautan',
    'detail.confirmed': 'Terkonfirmasi',
    'detail.meta.java': 'Java',
    'detail.meta.version': 'Versi',
    'detail.meta.license': 'Lisensi',

    'notfound.title': 'Halaman tidak ditemukan',
    'notfound.body': 'Halaman itu tidak ada. Mungkin halamannya dipindahkan, atau tautannya salah.',
    'notfound.back': 'Kembali ke proyek',

    'meta.title.changelog': 'hafiy_dev: Log Perubahan',
    'meta.description.changelog':
      'Catatan rilis dan pembaruan untuk proyek hafiy_dev, diambil dari umpan rilis publik milik tiap proyek.',

    'changelog.page.title': 'Log Perubahan',
    'changelog.page.desc':
      'Catatan rilis untuk proyek hafiy_dev. Datanya berasal dari umpan rilis publik milik tiap proyek dan diperbarui otomatis.',
    'changelog.list': 'RILIS',
    'changelog.filter.label': 'Saring menurut proyek',
    'changelog.loading': 'Memuat data rilis...',
    'changelog.error': 'Data rilis tidak dapat dimuat saat ini. Biasanya masalah ini hanya sementara.',
    'changelog.error.retry': 'Coba lagi',
    'changelog.empty': 'Belum ada rilis terbit untuk ditampilkan.',
    'changelog.empty.project': 'Belum ada rilis terbit untuk {project}.',
    'changelog.unconfigured': 'Pelacakan rilis belum dikonfigurasi untuk {project}.',
    'changelog.stale': 'Penyegaran untuk {project} baru saja gagal. Menampilkan data rilis terverifikasi terakhir.',
    'changelog.prerelease': 'Pra-rilis',
    'changelog.view': 'Lihat rilis',
    'changelog.more': 'Muat lebih banyak',
    'changelog.checked': 'Data sumber terakhir diperiksa {date}.',

    'hero.eyebrow': 'PENGEMBANGAN MINECRAFT INDEPENDEN',
    'hero.title': 'Membangun lebih dari sekadar plugin.',
    'hero.desc':
      'hafiy_dev mengembangkan mod, plugin, dan perangkat lunak untuk menghadirkan pengalaman Minecraft yang lebih baik.',
    'hero.primary': 'Jelajahi Proyek',
    'hero.secondary': 'Lihat GitHub',
    'hero.meta.edition': 'Minecraft Java Edition',
    'hero.meta.fabric': 'Fabric',
    'hero.meta.spigot': 'Paper / Spigot',

    'projects.title': 'Proyek Pilihan',
    'projects.count': '4 proyek',
    'projects.lede': 'Empat proyek di sisi klien dan sisi server.',
    'projects.all': 'Semua proyek',

    'projects.page.title': 'Proyek',
    'projects.page.desc': 'Mod, plugin, dan perangkat lunak yang dikembangkan oleh hafiy_dev.',
    'projects.page.count': '9 proyek',
    'projects.directory': 'DIREKTORI PROYEK',
    'projects.filter.all': 'Semua',
    'projects.filter.mods': 'Mod',
    'projects.filter.plugins': 'Plugin Server',
    'projects.filter.shaders': 'Shader Pack',
    'projects.filter.tools': 'Perkakas',
    'projects.empty': 'Belum ada proyek di kategori ini.',

    'projects.kind.sm': 'Plugin server',
    'projects.kind.sg': 'Mod klien',
    'projects.kind.dm': 'Plugin diagnostik',
    'projects.kind.timbr': 'Plugin utilitas',
    'projects.kind.timexp': 'Plugin server',
    'projects.kind.whereami': 'Plugin server',
    'projects.kind.superblite': 'Shader pack',
    'projects.kind.lifespire': 'Mod Minecraft',
    'projects.kind.altarcompiler': 'Perkakas pengembang',

    'projects.desc.sm':
      'Membuat mob Minecraft bertindak lebih cerdas melalui perilaku yang lebih dinamis.',
    'projects.desc.sg':
      'Memvisualisasikan prediksi aliran air dan lava sebelum cairan ditempatkan.',
    'projects.desc.dm':
      'Memindai plugin terpasang untuk menelusuri dependensi, urutan pemuatan, konflik, dan siklus.',
    'projects.desc.timbr':
      'Menebang satu pohon utuh dalam sekali tebang, dengan penghormatan proteksi wilayah.',
    'projects.desc.timexp':
      'Menjaga XP dari botol lempar tetap privat bagi pelempar, kecuali bila menyelinap untuk berbagi.',
    'projects.desc.whereami':
      'Utilitas navigasi arah dan teleportasi dengan GUI dalam permainan serta lokasi tersimpan.',
    'projects.desc.superblite':
      'Shader pack ringan yang menambahkan bayangan real-time dan penyesuaian warna tanpa mengubah gaya vanilla.',
    'projects.desc.lifespire':
      'Memberi villager siklus hidup persisten: mereka menua melalui beberapa tahap dan akhirnya meninggal karena usia.',
    'projects.desc.altarcompiler':
      'Aplikasi desktop yang mengompilasi kode Skript menjadi plugin Paper siap pakai.',

    'projects.meta.platform': 'Platform',
    'projects.meta.version': 'Minecraft',
    'projects.meta.status': 'Status',
    'projects.status.released': 'Dirilis',
    'projects.status.beta': 'Beta',
    'projects.repo': 'Repositori',
    'projects.view': 'Lihat Proyek',
    'projects.details': 'Detail',
    'projects.source': 'Kode Sumber',
    'projects.download': 'Unduh',

    'about.title': 'Tentang',
    'about.body':
      'hafiy_dev adalah merek pengembangan perangkat lunak independen yang berfokus pada Minecraft dan proyek teknis terkait: mod, plugin server, serta perkakas pendukung.',
    'about.item1.label': 'Performa',
    'about.item1.text':
      'Interval pembaruan dan batas entitas yang dapat diatur agar beban tetap ringan.',
    'about.item2.label': 'Kompatibilitas',
    'about.item2.text':
      'Berjalan di berbagai server dan peluncur tanpa mengubah inti permainan.',
    'about.item3.label': 'Perilaku vanilla',
    'about.item3.text':
      'Menghormati aturan dan gamerule bawaan Minecraft, bukan menggantinya.',

    'about.page.desc':
      'hafiy_dev adalah identitas pengembangan independen yang berfokus pada Minecraft dan proyek teknis terkait.',

    'about.intro.title': 'Pengantar',
    'about.intro.body':
      'hafiy_dev membangun perangkat lunak untuk Minecraft Java Edition: plugin server, satu mod klien, serta perkakas pengembang yang menyertainya. Pekerjaan ini berawal dari masalah yang ditemui saat menjalankan dan menulis perangkat lunak untuk server Minecraft, dan setiap proyek tetap berada di dalam platform serta rentang versi yang ditargetkan. Halaman ini menjelaskan apa yang dibangun, bagaimana cara membangunnya, dan di mana kode publiknya berada.',

    'about.focus.title': 'Fokus Pengembangan',
    'about.focus.lede': 'Lima bidang pekerjaan, masing-masing diwakili oleh proyek di direktori.',
    'about.focus.1.label': 'Plugin server',
    'about.focus.1.text':
      'Plugin perilaku, utilitas, dan diagnostik untuk Paper, Spigot, Purpur, dan Folia.',
    'about.focus.2.label': 'Modifikasi klien',
    'about.focus.2.text':
      'Mod Fabric yang berjalan di sisi klien, dibangun untuk satu versi Minecraft tertentu.',
    'about.focus.3.label': 'Perkakas pengembang',
    'about.focus.3.text':
      'Aplikasi desktop dan alat diagnostik seperti AltarCompiler dan DependencyManager.',
    'about.focus.4.label': 'Administrasi server',
    'about.focus.4.text':
      'Pemeriksaan dependensi, analisis urutan pemuatan, dan deteksi konflik untuk pemilik server.',
    'about.focus.5.label': 'Rekayasa kompatibilitas',
    'about.focus.5.text':
      'Kompilasi terhadap API publik alih-alih internal server, agar setiap proyek tetap berada di versi yang didukung.',

    'about.principles.title': 'Prinsip Pengembangan',
    'about.principles.lede': 'Aturan yang diikuti setiap proyek di direktori.',
    'about.principle.1.label': 'Fungsionalitas praktis',
    'about.principle.1.text':
      'Setiap proyek memecahkan satu masalah spesifik. Apa pun yang tidak mendukung masalah itu tidak dimasukkan.',
    'about.principle.2.label': 'Kesederhanaan',
    'about.principle.2.text':
      'Konfigurasi dibuat ringkas dan perilaku dibuat dapat diprediksi, sehingga pemilik server tahu akibatnya sebelum memasang.',
    'about.principle.3.label': 'Kompatibilitas platform',
    'about.principle.3.text':
      'Setiap proyek menyebut platform dan versi yang didukung, serta dikompilasi terhadap API publik, bukan internal.',
    'about.principle.4.label': 'Biaya yang dapat diperkirakan',
    'about.principle.4.text':
      'Tahap pemuatan, interval pembaruan, dan batas entitas bersifat eksplisit dan dapat diatur, sehingga performa tidak bergantung pada tebakan.',
    'about.principle.5.label': 'Kemudahan pemeliharaan',
    'about.principle.5.text':
      'Kode disusun menjadi bagian kecil yang dapat diuji: behaviour tree, state machine, dan core yang independen dari platform.',
    'about.principle.6.label': 'Penghormatan pada mekanik permainan',
    'about.principle.6.text':
      'Plugin bekerja bersama aturan vanilla, gamerule, dan proteksi wilayah, bukan menggantinya.',

    'about.selected.lede': 'Empat proyek dengan halaman detail yang tersedia.',

    'about.philosophy.title': 'Filosofi Pengembangan',
    'about.philosophy.body':
      'Setiap proyek berawal dari masalah yang muncul saat bermain, menjalankan, atau membangun perangkat lunak untuk Minecraft: mob yang mengabaikan sekitarnya, cairan yang tumpah ke tempat yang tidak direncanakan, plugin yang gagal dimuat tanpa alasan yang terlihat, dan pohon yang terlalu lama ditebang. Langkah pertama adalah memahami masalah itu dengan benar. Langkah kedua adalah membangun sesuatu yang paling kecil namun menyelesaikannya dengan baik, di platform yang dimaksud. Tidak ada fitur yang dipaksakan dan tidak ada lapisan pemasaran: sebuah proyek selesai ketika tugasnya terpenuhi, dan dokumentasinya hanya menuliskan apa yang benar-benar dilakukan kode.',
    'about.philosophy.point':
      'Itu juga berarti mengatakan tidak. Fitur yang menarik tetapi mengubah cara kerja permainan, atau yang tidak dapat diverifikasi di platform target, tidak masuk sebelum membuktikan kegunaannya.',

    'about.links.title': 'Tautan Publik',
    'about.links.lede':
      'Tujuan publik yang terverifikasi. Sebuah tautan hanya muncul bila proyek memiliki URL publik yang terkonfirmasi.',

    'about.more': 'Selengkapnya tentang hafiy_dev',

    'footer.tagline': 'Pengembangan Minecraft independen.',
    'footer.rights': '© {year} hafiy_dev. Seluruh hak cipta dilindungi.',
    'footer.github': 'GitHub',
    'footer.top': 'Kembali ke atas'
  },

  ar: {
    'meta.title': 'hafiy_dev: تطوير ماينكرافت مستقل',
    'meta.title.projects': 'hafiy_dev: المشاريع',
    'meta.title.about': 'hafiy_dev: حول',
    'meta.description':
      'تُطوّر hafiy_dev مودات وإضافات وبرمجيات تُقدّم تجربة ماينكرافت أفضل.',
    'meta.description.projects':
      'دليل مودات وإضافات الخوادم وحزم التظليل وأدوات التطوير التي تبنيها hafiy_dev.',
    'meta.description.about':
      'عن hafiy_dev، علامة تطوير ماينكرافت مستقلة: محاور العمل والمبادئ والمشاريع المختارة والروابط العامة.',

    'nav.skip': 'تخطَّ إلى المحتوى',
    'nav.home': 'الرئيسية',
    'nav.projects': 'المشاريع',
    'nav.about': 'حول',
    'nav.langLabel': 'اللغة',
    'nav.github': 'GitHub',
    'nav.changelog': 'سجل التغييرات',

    'detail.overview': 'نظرة عامة',
    'detail.features': 'الميزات',
    'detail.installation': 'التثبيت',
    'detail.links': 'الروابط',
    'detail.confirmed': 'مؤكّدة',
    'detail.meta.java': 'جافا',
    'detail.meta.version': 'الإصدار',
    'detail.meta.license': 'الترخيص',

    'notfound.title': 'الصفحة غير موجودة',
    'notfound.body': 'هذه الصفحة غير موجودة. ربما نُقلت، أو أن الرابط غير صحيح.',
    'notfound.back': 'العودة إلى المشاريع',

    'meta.title.changelog': 'hafiy_dev: سجل التغييرات',
    'meta.description.changelog':
      'ملاحظات الإصدار والتحديثات لمشاريع hafiy_dev، مأخوذة من مصدر الإصدار العام لكل مشروع.',

    'changelog.page.title': 'سجل التغييرات',
    'changelog.page.desc':
      'ملاحظات إصدار مشاريع hafiy_dev. تأتي البيانات من مصدر الإصدار العام لكل مشروع وتحدّث تلقائيًا.',
    'changelog.list': 'الإصدارات',
    'changelog.filter.label': 'تصفية حسب المشروع',
    'changelog.loading': 'جارٍ تحميل بيانات الإصدار...',
    'changelog.error': 'لا يمكن تحميل بيانات الإصدار الآن. غالبًا ما يكون هذا الأمر مؤقتًا.',
    'changelog.error.retry': 'أعد المحاولة',
    'changelog.empty': 'لا توجد إصدارات منشورة لعرضها.',
    'changelog.empty.project': 'لا توجد إصدارات منشورة لـ {project} بعد.',
    'changelog.unconfigured': 'تتبّع الإصدارات غير مهيّأ لـ {project}.',
    'changelog.stale': 'فشل تحديث {project} قبل قليل. يتم عرض آخر بيانات إصدار موثّقة.',
    'changelog.prerelease': 'إصدار تجريبي',
    'changelog.view': 'عرض الإصدار',
    'changelog.more': 'تحميل المزيد',
    'changelog.checked': 'آخر فحص لبيانات المصدر {date}.',

    'hero.eyebrow': 'تطوير ماينكرافت مستقل',
    'hero.title': 'نبني أكثر من مجرد إضافات.',
    'hero.desc':
      'تُطوّر hafiy_dev مودات وإضافات وبرمجيات تُقدّم تجربة ماينكرافت أفضل.',
    'hero.primary': 'استعرض المشاريع',
    'hero.secondary': 'عرض GitHub',
    'hero.meta.edition': 'إصدار جافا من ماينكرافت',
    'hero.meta.fabric': 'Fabric',
    'hero.meta.spigot': 'Paper / Spigot',

    'projects.title': 'مشاريع مختارة',
    'projects.count': 'أربعة مشاريع',
    'projects.lede': 'أربعة مشاريع بين جانب العميل وجانب الخادم.',
    'projects.all': 'كل المشاريع',

    'projects.page.title': 'المشاريع',
    'projects.page.desc': 'مودات وإضافات وبرمجيات تطوّرها hafiy_dev.',
    'projects.page.count': 'تسعة مشاريع',
    'projects.directory': 'دليل المشاريع',
    'projects.filter.all': 'الكل',
    'projects.filter.mods': 'المودات',
    'projects.filter.plugins': 'إضافات الخوادم',
    'projects.filter.shaders': 'حزم التظليل',
    'projects.filter.tools': 'الأدوات',
    'projects.empty': 'لا توجد مشاريع في هذه الفئة بعد.',

    'projects.kind.sm': 'إضافة خادم',
    'projects.kind.sg': 'مود عميل',
    'projects.kind.dm': 'إضافة تشخيص',
    'projects.kind.timbr': 'إضافة أدوات',
    'projects.kind.timexp': 'إضافة خادم',
    'projects.kind.whereami': 'إضافة خادم',
    'projects.kind.superblite': 'حزمة تظليل',
    'projects.kind.lifespire': 'مود ماينكرافت',
    'projects.kind.altarcompiler': 'أداة تطوير',

    'projects.desc.sm': 'تمنح كائنات ماينكرافت سلوكًا أكثر ذكاءً وديناميكية.',
    'projects.desc.sg': 'تصوّر أين ستتدفّق المياه والحِمم قبل وضعها.',
    'projects.desc.dm':
      'يفحص الإضافات المثبّتة لتتبّع الاعتماديات وترتيب التحميل والتعارضات والدورات.',
    'projects.desc.timbr': 'يقطع الشجرة كاملةً بضربة واحدة مع احترام حماية المناطق.',
    'projects.desc.timexp':
      'يجعل نقاط الخبرة من قنينات التجربة خاصة بالرامي، إلا إذا انحنى لمشاركتها.',
    'projects.desc.whereami':
      'أداة تنقّل هدفي ونقل لحظي مع واجهة داخل اللعبة ومواقع محفوظة.',
    'projects.desc.superblite':
      'حزمة تظليل خفيفة تضيف ظلالًا في الزمن الحقيقي وتدرّجًا لونيًا مع الحفاظ على المظهر الأصلي.',
    'projects.desc.lifespire':
      'تمنح القرويين دورة حياة مستمرة: يشيخون عبر مراحل ويموتون في النهاية بسبب الكِبَر.',
    'projects.desc.altarcompiler':
      'تطبيق سطح مكتب يحوّل شيفرة Skript إلى ملف إضافة جاهز لـ Paper.',

    'projects.meta.platform': 'المنصّة',
    'projects.meta.version': 'ماينكرافت',
    'projects.meta.status': 'الحالة',
    'projects.status.released': 'منشور',
    'projects.status.beta': 'تجريبي',
    'projects.repo': 'المستودع',
    'projects.view': 'عرض المشروع',
    'projects.details': 'التفاصيل',
    'projects.source': 'الكود المصدري',
    'projects.download': 'تنزيل',

    'about.title': 'حول hafiy_dev',
    'about.body':
      'hafiy_dev علامة تطوير برمجيات مستقلة تركّز على ماينكرافت والمشاريع التقنية المرتبطة بها: مودات، وإضافات خوادم، وأدوات مساعدة.',
    'about.item1.label': 'الأداء',
    'about.item1.text': 'فترات تحديث وحدود كائنات قابلة للضبط للحفاظ على حمل خفيف.',
    'about.item2.label': 'التوافق',
    'about.item2.text': 'يعمل على خوادم ومُطلِقات متعدّدة دون تغيير جوهر اللعبة.',
    'about.item3.label': 'السلوك الأصلي',
    'about.item3.text': 'يحترم قواعد ماينكرافت وأوامر gamerule بدل استبدالها.',

    'about.page.desc':
      'hafiy_dev علامة تطوير مستقلة تركّز على ماينكرافت والمشاريع التقنية المرتبطة بها.',

    'about.intro.title': 'مقدمة',
    'about.intro.body':
      'تبني hafiy_dev برمجيات لإصدار جافا من ماينكرافت: إضافات خوادم، ومود عميل واحد، وأدوات تطوير مرافقة لها. ينبع هذا العمل من مشكلات ظهرت أثناء تشغيل خوادم ماينكرافت وكتابة برمجياتها، ويبقى كل مشروع داخل المنصّة ونطاق الإصدارات التي يستهدفها. تعرض هذه الصفحة ما يُبنى، وكيف يُبنى، وأين يقع الكود العام.',

    'about.focus.title': 'محاور التطوير',
    'about.focus.lede': 'خمسة محاور عمل، يمثّل كل منها مشاريع في الدليل.',
    'about.focus.1.label': 'إضافات الخوادم',
    'about.focus.1.text':
      'إضافات سلوك وأدوات وتشخيص لـ Paper و Spigot و Purpur و Folia.',
    'about.focus.2.label': 'مودات العميل',
    'about.focus.2.text':
      'مودات Fabric تعمل على جانب العميل، ومبنية لإصدار ماينكرافت واحد محدّد.',
    'about.focus.3.label': 'أدوات التطوير',
    'about.focus.3.text':
      'تطبيقات سطح مكتب وأدوات تشخيص مثل AltarCompiler و DependencyManager.',
    'about.focus.4.label': 'إدارة الخوادم',
    'about.focus.4.text':
      'فحص الاعتماديات وتحليل ترتيب التحميل وكشف التعارضات لأصحاب الخوادم.',
    'about.focus.5.label': 'هندسة التوافق',
    'about.focus.5.text':
      'التصريف مقابل واجهات برمجة عامة لا دواخل الخادم، مع إبقاء كل مشروع داخل الإصدارات التي يدعمها.',

    'about.principles.title': 'مبادئ التطوير',
    'about.principles.lede': 'القواعد التي تُبنى وفقها كل مشاريع الدليل.',
    'about.principle.1.label': 'وظيفية عملية',
    'about.principle.1.text':
      'كل مشروع يحلّ مشكلة محدّدة، وما لا يخدم تلك المشكلة يُستبعد.',
    'about.principle.2.label': 'البساطة',
    'about.principle.2.text':
      'إعدادات قليلة وسلوك قابل للتنبؤ، فيعرف صاحب الخادم النتيجة قبل التثبيت.',
    'about.principle.3.label': 'توافق المنصّات',
    'about.principle.3.text':
      'يذكر كل مشروع المنصّات والإصدارات التي يدعمه، ويُصرَّف مقابل واجهات عامة لا تفاصيل داخلية.',
    'about.principle.4.label': 'كلفة متوقّعة',
    'about.principle.4.text':
      'مراحل التحميل وفترات التحديث وحدود الكائنات صريحة وقابلة للضبط، فلا يتوقّف الأداء على التخمين.',
    'about.principle.5.label': 'قابلية الصيانة',
    'about.principle.5.text':
      'كود مقسّم إلى أجزاء صغيرة قابلة للاختبار: أشجار سلوك، وآلات حالة، ونواة مستقلّة عن المنصّات.',
    'about.principle.6.label': 'احترام ميكانيكا اللعبة',
    'about.principle.6.text':
      'تعمل الإضافات مع قواعد ماينكرافت الأصيلة وأوامر gamerule وحماية المناطق، بدل استبدالها.',

    'about.selected.lede': 'أربعة مشاريع لها صفحات تفصيلية منشورة.',

    'about.philosophy.title': 'فلسفة التطوير',
    'about.philosophy.body':
      'يبدأ كل مشروع من مشكلة ظهرت أثناء اللعب أو تشغيل ماينكرافت أو بناء برمجياتها: كائنات تتجاهل محيطها، وسوائل تنسكب في المكان الخطأ، وإضافات تفشل في التحميل لسبب لا يظهر لأحد، وأشجار تحتاج وقتًا طويلًا لقطعها. الخطوة الأولى هي فهم المشكلة فهمًا صحيحًا، والخطوة الثانية هي بناء أصغر ما يحلّها أداءً حسنًا على المنصّة المقصودة. لا ميزات مفروضة ولا طبقة تسويقية: ينتهي المشروع عندما يؤدي مهمّته، ولا يذكر توثيقه إلا ما يفعله الكود فعلًا.',
    'about.philosophy.point':
      'وهذا يعني رفض أشياء كثيرة أيضًا: الميزة الجاذبة التي تغيّر طريقة عمل اللعبة، أو التي لا يمكن التحقق منها على المنصّة المستهدفة، لا تدخل قبل أن تُثبت فائدتها.',

    'about.links.title': 'روابط عامة',
    'about.links.lede':
      'وجهات عامة موثّقة. لا يظهر الرابط إلا عندما ينشر المشروع عنوانًا مؤكّدًا.',

    'about.more': 'المزيد عن hafiy_dev',

    'footer.tagline': 'تطوير ماينكرافت مستقل.',
    'footer.rights': '© {year} hafiy_dev. جميع الحقوق محفوظة.',
    'footer.github': 'GitHub',
    'footer.top': 'إلى الأعلى'
  }
};
