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
    'meta.title': 'hafiy_dev — Independent Minecraft Development',
    'meta.title.projects': 'hafiy_dev — Projects',
    'meta.description':
      'hafiy_dev develops mods, plugins, and software that make Minecraft experiences better.',
    'meta.description.projects':
      'Directory of Minecraft mods, server plugins, shader packs, and developer tools built by hafiy_dev.',

    'nav.skip': 'Skip to content',
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.langLabel': 'Language',
    'nav.github': 'GitHub',

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

    'footer.tagline': 'Independent Minecraft development.',
    'footer.rights': '© {year} hafiy_dev. All rights reserved.',
    'footer.github': 'GitHub',
    'footer.top': 'Back to top'
  },

  id: {
    'meta.title': 'hafiy_dev — Pengembangan Minecraft Independen',
    'meta.title.projects': 'hafiy_dev — Proyek',
    'meta.description':
      'hafiy_dev mengembangkan mod, plugin, dan perangkat lunak untuk menghadirkan pengalaman Minecraft yang lebih baik.',
    'meta.description.projects':
      'Daftar mod, plugin server, shader pack, dan perkakas pengembang yang dibuat oleh hafiy_dev.',

    'nav.skip': 'Lewati ke konten utama',
    'nav.home': 'Beranda',
    'nav.projects': 'Proyek',
    'nav.about': 'Tentang',
    'nav.langLabel': 'Bahasa',
    'nav.github': 'GitHub',

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

    'footer.tagline': 'Pengembangan Minecraft independen.',
    'footer.rights': '© {year} hafiy_dev. Seluruh hak cipta dilindungi.',
    'footer.github': 'GitHub',
    'footer.top': 'Kembali ke atas'
  },

  ar: {
    'meta.title': 'hafiy_dev — تطوير ماينكرافت مستقل',
    'meta.title.projects': 'hafiy_dev — المشاريع',
    'meta.description':
      'تُطوّر hafiy_dev مودات وإضافات وبرمجيات تُقدّم تجربة ماينكرافت أفضل.',
    'meta.description.projects':
      'دليل مودات وإضافات الخوادم وحزم التظليل وأدوات التطوير التي تبنيها hafiy_dev.',

    'nav.skip': 'تخطَّ إلى المحتوى',
    'nav.home': 'الرئيسية',
    'nav.projects': 'المشاريع',
    'nav.about': 'حول',
    'nav.langLabel': 'اللغة',
    'nav.github': 'GitHub',

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

    'footer.tagline': 'تطوير ماينكرافت مستقل.',
    'footer.rights': '© {year} hafiy_dev. جميع الحقوق محفوظة.',
    'footer.github': 'GitHub',
    'footer.top': 'إلى الأعلى'
  }
};
