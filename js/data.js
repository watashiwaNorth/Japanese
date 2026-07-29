function GD(fileId, size) {
  if (!fileId || fileId === "FILE_ID_DISINI" || fileId === "") {
    // PLACEHOLDER DARI PICSUM (gambar random tapi stabil)
    return "https://picsum.photos/id/20/800/600";
  }
  return "https://drive.google.com/thumbnail?id=" + fileId + "&sz=" + (size || "w800");
}

/* ════════════════════════════════════════
   1. NAVBAR — Nama & Menu
   ════════════════════════════════════════ */
var NAV = {
  logoText: "Baka Danger",
  logo: GD("1vA4Zmm2eE37ZzKqxAb0I4gfJMOtSHjR1", "w200"),
  // ↑ Ganti FILE_ID_DISINI dengan ID logo kamu. Biarkan kosong maka akan tampil teks "危"
  links: [
    { text: "Beranda",  href: "#hero" },
    { text: "Tentang",  href: "#tentang" },
    { text: "Program",  href: "#keunggulan" },
    { text: "Kegiatan", href: "#kegiatan" },
    { text: "Galeri",   href: "#galeri" },
    { text: "Pengurus", href: "#pengurus" },
    { text: "Daftar",   href: "#kontak", cta: true }
  ]
};

/* ════════════════════════════════════════
   2. HERO — Banner Halaman Utama
   ════════════════════════════════════════ */
var HERO = {
  eyebrow: "Ekstrakurikuler Resmi SMKN 8 Jakarta",
  title: "Japanese Club<br><em>\"Baka Danger\"</em>",
  titleJp: "日本語クラブ バカダンジャー",
  desc: "Dengan semangat kebersamaan dan tekad untuk terus berkembang, kami hadir membawa kreativitas, budaya Jepang, dan keberanian menuju masa depan yang cerah. Yuk, wujudkan mimpi bersama!",
  btnText: "Mulai Perjalanan",
  bg: GD("1jcxHj-xf8A-s-AG-8K7Xn9W-x8M0Bg6O", "w1200"),
  // ↑ Ganti FILE_ID_DISINI dengan ID gambar hero (landscape/lebar)
  stats: [
    { num: "3+",  label: "Tahun Berdiri"     },
    { num: "20+", label: "Anggota Aktif" },
    { num: "Materi lengkap dan fleksibel", label: "Diajarkan sensei berpengalaman"    }
  ]
};

/* ════════════════════════════════════════
   3. TENTANG KAMI
   ════════════════════════════════════════ */
var ABOUT = {
  title: "Japanese Club \"Baka Danger\"",
  paragraph1: "Berawal dari kelompok belajar bahasa Jepang informal, antusiasme siswa SMKN 8 Jakarta mendorong kami berkembang menjadi ekstrakurikuler resmi. Di sini, kamu belajar bahasa Jepang dari nol hingga fundamental, dibimbing guru berlatar belakang studi Jepang, serta didampingi senpai dan tomodachi yang hangat. Kami rutin mengadakan matsuri (festival budaya), latihan shodo (kaligrafi), nonton bareng film Jepang, dan berbagai kegiatan seru lainnya!",
  quote: "一緒に、もっと輝く未来へ。\n(Bersama menuju masa depan yang lebih bersinar.)",
  mainImg:   GD("1Jt6bRreUVrGPONz7Ps570b-v_Ehsjpjg", "w800"),
  // ↑ Foto utama kiri (portrait/vertikal 4:5). Ganti FILE_ID_DISINI
  accentImg: GD("1vA4Zmm2eE37ZzKqxAb0I4gfJMOtSHjR1", "w400")
  // ↑ Foto aksen pojok kanan bawah (kotak 1:1). Ganti FILE_ID_DISINI
};

/* ════════════════════════════════════════
   4. VISI & MISI
   ════════════════════════════════════════ */
var VISIMISI = {
  visi: "Menjadikan Japanese Club Baka Danger sebagai ruang yang suportif dan solid bagi setiap anggota untuk berkembang dan berkarya sesuai minat dan potensi, dengan menanamkan jiwa keberanian, semangat berkompetisi, dan kreativitas.",
  misi: [
    "Memetakan dan mewadahi potensi anggota dengan menumbuhkan jiwa keberanian serta semangat untuk berkompetisi.",
    "Membangun lingkungan pembelajaran dan pertemanan yang nyaman, menyenangkan, serta mendukung keterlibatan aktif seluruh anggota.",
    "Memberikan ruang bagi anggota untuk berkarya dan membagikan proses serta hasil belajar selama mengikuti eskul."
  ]
};

/* ════════════════════════════════════════
   5. KARTU UNGGULAN (3 kartu)
   ════════════════════════════════════════ */
var CARDS = [
  {
    num: "01", icon: "fas fa-chalkboard-user",
    title: "Manfaat Belajar",
    items: [
      "Didampingi guru profesional berlatar belakang studi Jepang",
      "Metode pembelajaran interaktif dan menyenangkan",
      "Menguasai Hiragana, Katakana, Kanji, dan Pola Kalimat",
      "Bergabung dengan teman dan senpai yang suportif"
    ]
  },
  {
    num: "02", icon: "fas fa-book-open",
    title: "Materi Unggulan",
    items: [
      "Hiragana, Katakana, Kanji — fondasi utama nihongo bertahap",
      "Pembelajaran interaktif — sosial, permainan edukatif",
      "Quiz dan Games seru — melepas penat setelah ujian",
      "Kaiwa (percakapan) dan budaya Jepang sehari-hari"
    ]
  },
  {
    num: "03", icon: "fas fa-bullseye",
    title: "Visi & Misi",
    items: [
       "visi: Menjadikan Japanese Club Baka Danger sebagai ruang yang suportif dan solid bagi setiap anggota untuk berkembang dan berkarya sesuai minat dan potensi, dengan menanamkan jiwa keberanian, semangat berkompetisi, dan kreativitas.",
  "misi: " ,
    "Memetakan dan mewadahi potensi anggota dengan menumbuhkan jiwa keberanian serta semangat untuk berkompetisi.",
    "Membangun lingkungan pembelajaran dan pertemanan yang nyaman, menyenangkan, serta mendukung keterlibatan aktif seluruh anggota.",
    "Memberikan ruang bagi anggota untuk berkarya dan membagikan proses serta hasil belajar selama mengikuti eskul."
    ]
  }
];

/* ════════════════════════════════════════
   6. KEGIATAN RUTIN
   ════════════════════════════════════════ */
var ACTIVITIES = {
  list: [
    { icon: "fas fa-comments",    title: "Kelas Rutin",             detail: "Setiap Selasa, 15.30–17.00 WIB, di kelas XI ULW" },
    { icon: "fas fa-trophy",      title: "Lomba Bahasa Jepang",     detail: "Kompetisi tingkat Jakarta dan nasional" },
    { icon: "fas fa-gamepad",     title: "Quiz & Games After Exam", detail: "Hadiah menarik, seru bareng setelah ujian" },
    { icon: "fas fa-flag",        title: "Demonstrasi Ekskul",      detail: "Perkenalan resmi di awal tahun ajaran" },
    { icon: "fas fa-torii-gate",  title: "Matsuri & Budaya Jepang", detail: "Festival budaya tahunan bersama seluruh anggota" }
  ],
  img: GD("10jhL_UObXrEWanoV7N6YHUZiOLvvckwS", "w800")
  // ↑ Foto kegiatan (portrait/vertikal 3:4). Ganti FILE_ID_DISINI
};

/* ════════════════════════════════════════
   7. GALERI FOTO (CONTOH LENGKAP)
   ════════════════════════════════════════ */
var GROUPS = [
  { id: "A", name: "Pembelajaran"     },
  { id: "B", name: "Lomba & Kompetisi"},
  { id: "C", name: "Quiz & Games"     },
  { id: "D", name: "Kenangan & Momen" }
];

var GALLERY = [
  // CONTOH FOTO (sudah pakai placeholder dari picsum, ganti dengan ID kamu)
  { img: GD("10jhL_UObXrEWanoV7N6YHUZiOLvvckwS", "w600"), title: "Kelas Rutin", desc: "Percakapan seru bersama sensei", group: "A" },
  { 
  img: GD("1wghZaVNaNgVlO6xkkRMH3TOi82up1NvA", "w600"), 
  title: "Lomba Rodoku Zenkoku Taikai UNJ 2025", 
  desc: "Dokumentasi kegiatan lomba Rodoku (membaca teks bahasa Jepang) dalam ajang Zenkoku Taikai 2025 yang diselenggarakan di Universitas Negeri Jakarta. Kegiatan ini menampilkan kemampuan peserta dalam pelafalan, intonasi, serta ekspresi dalam membaca teks berbahasa Jepang secara tepat dan penuh penghayatan.", 
  group: "B" 
},

  { 
    img: GD("1Dt_0N0-IxmIaJsFajYZfxYWyDDPQo_h7", "w600"), 
    title: "Lomba Harumatsuri UHAMKA 2025", 
    desc: "Dokumentasi kegiatan lomba dalam festival Harumatsuri 2025 yang diselenggarakan oleh Universitas Muhammadiyah Prof. Dr. Hamka (UHAMKA). Acara ini menjadi wadah bagi peserta untuk menampilkan kemampuan serta kreativitas dalam berbagai kompetisi bertema budaya Jepang.", 
    group: "B" 
  },

  { 
    img: GD("1etckvcIt2CWifkIkSJCEcEEQINr96MGG", "w600"), 
    title: "Lobby Zenkoku Taikai 2025", 
    desc: "Tampilan area lobby pada acara Zenkoku Taikai 2025 yang digunakan sebagai pusat informasi, registrasi peserta, serta tempat berkumpul sebelum kegiatan lomba berlangsung. Area ini juga menjadi titik interaksi antar peserta dan panitia.", 
    group: "B" 
  },

  { 
  img: GD("1AVUb0cMGTpE1dyPgVDxF7ZDGC9nlhI62", "w600"), 
  title: "Lobby Lomba Harumatsuri 2024", 
  desc: "Dokumentasi area lobby pada kegiatan Harumatsuri 2024 yang berfungsi sebagai tempat penerimaan tamu, registrasi peserta, serta pusat aktivitas awal sebelum memasuki rangkaian acara lomba dan pertunjukan.", 
  group: "B" 
  },
   { 
  img: GD("1_xOKhSy--baq3BpwE6i9oDnidxgetY2W", "w600"), 
  title: "Latihan Demos", 
  desc: "Dokumentasi suasana latihan intensif anggota Baka Danger dalam mempersiapkan demonstrasi ekskul. Momen ini memperlihatkan kerja sama tim, semangat berlatih, dan kebersamaan yang terbangun selama proses persiapan.", 
  group: "D" 
  },

  { 
    img: GD("1GoaykaJpn1Bwe6gS50XpkEgjycoszWXX", "w600"), 
    title: "Kelas Bersama Hilwah Sensei", 
    desc: "Momen kegiatan belajar bersama Hilwah Sensei yang berlangsung interaktif dan menyenangkan. Sesi ini menjadi ruang bagi anggota untuk mendalami bahasa serta budaya Jepang melalui metode pembelajaran yang aktif.", 
    group: "A" 
  },

  { 
    img: GD("1Qlv75S-t8c26oVOi9zuyE8-refrYgmNi", "w600"), 
    title: "Suasana Belajar Mengajar", 
    desc: "Potret kegiatan belajar mengajar di kelas saat anggota mengikuti materi dengan fokus dan antusias. Dokumentasi ini mencerminkan lingkungan belajar yang aktif, disiplin, dan penuh semangat.", 
    group: "A" 
  },

  { 
    img: GD("1w8LtZr4uwre07dezVl_d8Jb4C6ZH6wDb", "w600"), 
    title: "Kenangan Bersama Han Sensei", 
    desc: "Foto kebersamaan bersama Han Sensei sebelum melanjutkan studi ke Jepang. Sebuah momen perpisahan yang penuh kesan sekaligus bentuk apresiasi atas ilmu, bimbingan, dan motivasi yang telah diberikan.", 
    group: "D" 
  },

  { 
    img: GD("1ty7Hw-CmfNXctJCcQGyRkEsOn8xoDbww", "w600"), 
    title: "Foto Bersama After Demos 2025", 
    desc: "Dokumentasi kebersamaan seluruh anggota setelah sukses melaksanakan demonstrasi ekskul tahun 2025. Foto ini menjadi simbol kerja keras, pencapaian bersama, dan kenangan berharga keluarga Baka Danger.", 
    group: "D" 
  },
];

/* ════════════════════════════════════════
   8. PENGURUS & PENGAJAR
   ════════════════════════════════════════ */
var TEAM = [
  { name: "Hilwah Sensei",             position: "Pembina",       desc: "Mentor berpengalaman", icon: "fas fa-chalkboard-user", photo: GD("FILE_ID_DISINI","w300") },
  { name: "Aufa Nur Khalishah Rulfi",  position: "Ketua",         desc: "Penggerak utama",      icon: "fas fa-user-tie",        photo: GD("FILE_ID_DISINI","w300") },
  { name: "Firdaus Ramdan",            position: "Wakil Ketua",   desc: "Koordinator program",  icon: "fas fa-user-tie",        photo: GD("FILE_ID_DISINI","w300") },
  { name: "Callula Neylan Faizio",     position: "Sekretaris",    desc: "Administrasi ekskul",  icon: "fas fa-pen",             photo: GD("FILE_ID_DISINI","w300") },
  { name: "Raisa Putri Kireina",       position: "Sekretaris",    desc: "Dokumentasi kegiatan", icon: "fas fa-pen",             photo: GD("FILE_ID_DISINI","w300") },
  { name: "Raisya Darrul Qur'aini",   position: "Humas",         desc: "Hubungan eksternal",   icon: "fas fa-id-badge",        photo: GD("FILE_ID_DISINI","w300") },
  { name: "Fitri Fadillah",            position: "Humas",         desc: "Media & publikasi",    icon: "fas fa-id-badge",        photo: GD("FILE_ID_DISINI","w300") },
  { name: "Ramiizah Khairunnisa",      position: "Bendahara",     desc: "Keuangan ekskul",      icon: "fas fa-fax",             photo: GD("FILE_ID_DISINI","w300") }
];

/* ════════════════════════════════════════
   9. FOOTER & KONTAK
   ════════════════════════════════════════ */
var FOOTER = {
  description: "Hubungi kami untuk jadwal terbaru, materi terbaru, dan keseruan bersama Baka Danger.",
  address:     "SMKN 8 Jakarta",
  phone:       "+62 8977324703",
  email:       "jc8.bakadanger@gmail.com",
  sensei:      "Hilwah Sensei",
  instagram:   "https://www.instagram.com/bakadanger_8?igsh=MWxnaWxkeWRlNmI0YQ==",
  youtube:     "#",
  copyright:   "© 2025 Japanese Club Baka Danger · Semua hak dilindungi.",
  ctaBtnText:  "Daftar Sekarang →"
};

/* ============================================================
   ⬇  KODE DI BAWAH INI JANGAN DIUBAH (kecuali paham JS)
   ============================================================ */
var lbItems = [], lbIdx = 0, activeGroup = "ALL";
