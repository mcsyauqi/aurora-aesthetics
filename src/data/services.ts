export interface Service {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  price: string;
  priceValue: number;
  duration: string;
  icon: string;
  image: string;
  benefits: string[];
  process: string[];
  category: string;
  popular: boolean;
}

export const services: Service[] = [
  {
    id: "1",
    slug: "facial-hydrating-glow",
    name: "Facial Hydrating Glow",
    shortDescription: "Perawatan wajah intensif untuk kulit lembab dan bercahaya sepanjang hari",
    fullDescription: "Facial Hydrating Glow adalah perawatan wajah premium yang dirancang untuk memberikan hidrasi mendalam pada kulit Anda. Menggunakan serum khusus dengan kandungan hyaluronic acid dan vitamin C, treatment ini akan membuat kulit Anda tampak lebih cerah, kenyal, dan bercahaya. Cocok untuk semua jenis kulit, terutama kulit kering dan kusam.",
    price: "Mulai Rp 350.000",
    priceValue: 350000,
    duration: "60 menit",
    icon: "Droplets",
    image: "/images/services/facial.jpg",
    benefits: [
      "Kulit lebih lembab dan terhidrasi",
      "Tampilan wajah lebih cerah dan glowing",
      "Mengurangi garis halus akibat dehidrasi",
      "Meratakan tekstur kulit",
      "Hasil terlihat langsung setelah treatment"
    ],
    process: [
      "Konsultasi dan analisis kulit",
      "Deep cleansing dan eksfoliasi ringan",
      "Aplikasi masker hydrating",
      "Serum hyaluronic acid intensif",
      "Finishing dengan moisturizer dan SPF"
    ],
    category: "facial",
    popular: true
  },
  {
    id: "2",
    slug: "laser-hair-removal",
    name: "Laser Hair Removal",
    shortDescription: "Teknologi laser terkini untuk kulit halus permanen tanpa rasa sakit",
    fullDescription: "Laser Hair Removal menggunakan teknologi laser diode terkini yang aman dan efektif untuk menghilangkan bulu tidak diinginkan secara permanen. Prosedur ini hampir tanpa rasa sakit berkat sistem pendingin built-in, dan cocok untuk berbagai area tubuh termasuk wajah, ketiak, lengan, dan kaki.",
    price: "Mulai Rp 500.000",
    priceValue: 500000,
    duration: "30-60 menit",
    icon: "Zap",
    image: "/images/services/laser.jpg",
    benefits: [
      "Hasil permanen setelah beberapa sesi",
      "Hampir tanpa rasa sakit",
      "Kulit lebih halus dan mulus",
      "Tidak ada ingrown hair",
      "Hemat waktu dan biaya jangka panjang"
    ],
    process: [
      "Konsultasi dan patch test",
      "Pembersihan area treatment",
      "Aplikasi gel pendingin",
      "Prosedur laser dengan teknologi diode",
      "Aplikasi soothing gel pasca treatment"
    ],
    category: "laser",
    popular: true
  },
  {
    id: "3",
    slug: "botox-filler",
    name: "Botox & Filler",
    shortDescription: "Hilangkan kerutan dan tambah volume wajah dengan hasil natural",
    fullDescription: "Botox dan Dermal Filler adalah prosedur non-invasif untuk mengurangi tanda-tanda penuaan. Botox efektif untuk menghilangkan kerutan dinamis seperti kerutan dahi dan crow's feet, sementara Filler menambah volume pada area yang kehilangan elastisitas seperti pipi, bibir, dan garis senyum. Hasilnya natural dan dapat bertahan 6-12 bulan.",
    price: "Mulai Rp 2.500.000",
    priceValue: 2500000,
    duration: "30-45 menit",
    icon: "Sparkles",
    image: "/images/services/botox.jpg",
    benefits: [
      "Menghilangkan kerutan wajah",
      "Menambah volume wajah",
      "Hasil natural dan tidak kaku",
      "Prosedur cepat tanpa downtime",
      "Bertahan 6-12 bulan"
    ],
    process: [
      "Konsultasi mendalam dengan dokter",
      "Mapping area injeksi",
      "Aplikasi numbing cream",
      "Injeksi Botox/Filler",
      "Evaluasi hasil dan instruksi perawatan"
    ],
    category: "injection",
    popular: true
  },
  {
    id: "4",
    slug: "chemical-peeling",
    name: "Chemical Peeling",
    shortDescription: "Angkat sel kulit mati untuk wajah cerah dan bebas flek hitam",
    fullDescription: "Chemical Peeling adalah prosedur eksfoliasi kimia yang menggunakan larutan khusus untuk mengangkat lapisan kulit mati. Treatment ini sangat efektif untuk mengatasi hiperpigmentasi, flek hitam, bekas jerawat, dan tekstur kulit tidak rata. Tersedia berbagai tingkatan peeling sesuai kondisi kulit Anda.",
    price: "Mulai Rp 450.000",
    priceValue: 450000,
    duration: "45 menit",
    icon: "Layers",
    image: "/images/services/peeling.jpg",
    benefits: [
      "Kulit lebih cerah dan merata",
      "Mengurangi flek hitam dan hiperpigmentasi",
      "Menyamarkan bekas jerawat",
      "Merangsang produksi kolagen",
      "Pori-pori tampak lebih kecil"
    ],
    process: [
      "Konsultasi dan analisis kulit",
      "Deep cleansing",
      "Aplikasi larutan peeling",
      "Netralisasi",
      "Aplikasi soothing serum dan SPF"
    ],
    category: "facial",
    popular: true
  },
  {
    id: "5",
    slug: "prp-vampire-facial",
    name: "PRP Vampire Facial",
    shortDescription: "Regenerasi kulit dengan plasma darah sendiri untuk awet muda",
    fullDescription: "PRP (Platelet-Rich Plasma) Vampire Facial adalah treatment regeneratif yang menggunakan plasma darah Anda sendiri untuk merangsang produksi kolagen dan sel-sel kulit baru. Prosedur ini sangat efektif untuk anti-aging, memperbaiki tekstur kulit, dan memberikan efek glowing alami yang tahan lama.",
    price: "Mulai Rp 3.000.000",
    priceValue: 3000000,
    duration: "90 menit",
    icon: "Heart",
    image: "/images/services/prp.jpg",
    benefits: [
      "Regenerasi sel kulit alami",
      "Meningkatkan produksi kolagen",
      "Mengurangi kerutan dan garis halus",
      "Memperbaiki tekstur kulit",
      "Hasil alami dan tahan lama"
    ],
    process: [
      "Konsultasi dengan dokter",
      "Pengambilan sampel darah",
      "Proses sentrifugasi untuk ekstraksi PRP",
      "Aplikasi numbing cream",
      "Injeksi PRP ke area wajah"
    ],
    category: "injection",
    popular: true
  },
  {
    id: "6",
    slug: "body-slimming-treatment",
    name: "Body Slimming Treatment",
    shortDescription: "Teknologi pelangsingan non-invasif untuk tubuh ideal impian",
    fullDescription: "Body Slimming Treatment menggunakan kombinasi teknologi terkini seperti Cavitation, RF, dan Cryolipolysis untuk membantu mengurangi lemak membandel tanpa operasi. Treatment ini efektif untuk mengecilkan lingkar pinggang, paha, lengan, dan area bermasalah lainnya. Hasil optimal dengan paket treatment berkelanjutan.",
    price: "Mulai Rp 750.000",
    priceValue: 750000,
    duration: "60 menit",
    icon: "Activity",
    image: "/images/services/slimming.jpg",
    benefits: [
      "Mengurangi lemak membandel",
      "Mengencangkan kulit",
      "Non-invasif tanpa operasi",
      "Tidak ada downtime",
      "Hasil terukur dalam beberapa sesi"
    ],
    process: [
      "Konsultasi dan pengukuran awal",
      "Aplikasi gel konduktif",
      "Treatment dengan teknologi pilihan",
      "Massage drainase limfatik",
      "Pengukuran akhir dan evaluasi"
    ],
    category: "body",
    popular: true
  },
  {
    id: "7",
    slug: "microneedling",
    name: "Microneedling",
    shortDescription: "Stimulasi kolagen untuk kulit lebih kencang dan muda",
    fullDescription: "Microneedling adalah prosedur yang menggunakan jarum-jarum halus untuk membuat micro-injuries pada kulit, yang merangsang proses penyembuhan alami dan produksi kolagen. Sangat efektif untuk mengatasi bekas jerawat, pori-pori besar, dan tanda-tanda penuaan.",
    price: "Mulai Rp 800.000",
    priceValue: 800000,
    duration: "60 menit",
    icon: "Target",
    image: "/images/services/microneedling.jpg",
    benefits: [
      "Meningkatkan produksi kolagen",
      "Menyamarkan bekas jerawat",
      "Mengecilkan pori-pori",
      "Kulit lebih kencang",
      "Meningkatkan penyerapan skincare"
    ],
    process: [
      "Konsultasi kulit",
      "Pembersihan dan numbing",
      "Prosedur microneedling",
      "Aplikasi serum growth factor",
      "Soothing mask"
    ],
    category: "facial",
    popular: false
  },
  {
    id: "8",
    slug: "acne-treatment",
    name: "Acne Treatment",
    shortDescription: "Solusi komprehensif untuk kulit bebas jerawat",
    fullDescription: "Acne Treatment adalah program perawatan komprehensif untuk mengatasi jerawat dari akar permasalahan. Menggunakan kombinasi teknologi seperti LED therapy, ekstraksi, dan produk perawatan khusus untuk membersihkan, merawat, dan mencegah jerawat datang kembali.",
    price: "Mulai Rp 400.000",
    priceValue: 400000,
    duration: "75 menit",
    icon: "Shield",
    image: "/images/services/acne.jpg",
    benefits: [
      "Membunuh bakteri penyebab jerawat",
      "Mengurangi peradangan",
      "Mencegah jerawat baru",
      "Menyamarkan bekas jerawat",
      "Kulit lebih bersih dan sehat"
    ],
    process: [
      "Analisis kondisi kulit",
      "Deep cleansing khusus",
      "Ekstraksi komedo",
      "LED light therapy",
      "Aplikasi serum anti-acne"
    ],
    category: "facial",
    popular: false
  },
  {
    id: "9",
    slug: "whitening-treatment",
    name: "Whitening Treatment",
    shortDescription: "Cerahkan kulit secara merata untuk tampilan lebih bersinar",
    fullDescription: "Whitening Treatment adalah perawatan untuk mencerahkan kulit dan meratakan warna kulit. Menggunakan bahan-bahan seperti Glutathione, Vitamin C, dan Alpha Arbutin untuk menghambat produksi melanin berlebih dan memberikan kulit tampilan lebih cerah dan bercahaya.",
    price: "Mulai Rp 550.000",
    priceValue: 550000,
    duration: "60 menit",
    icon: "Sun",
    image: "/images/services/whitening.jpg",
    benefits: [
      "Kulit lebih cerah merata",
      "Mengurangi hiperpigmentasi",
      "Tampilan wajah lebih bersinar",
      "Melindungi dari radikal bebas",
      "Hasil bertahap dan natural"
    ],
    process: [
      "Konsultasi kulit",
      "Deep cleansing",
      "Eksfoliasi ringan",
      "Aplikasi whitening serum",
      "Whitening mask dan finishing"
    ],
    category: "facial",
    popular: false
  },
  {
    id: "10",
    slug: "mesotherapy",
    name: "Mesotherapy",
    shortDescription: "Injeksi vitamin langsung ke kulit untuk nutrisi optimal",
    fullDescription: "Mesotherapy adalah teknik injeksi yang memasukkan vitamin, mineral, dan asam amino langsung ke lapisan mesoderm kulit. Treatment ini sangat efektif untuk memberikan nutrisi intensif, mengatasi masalah kulit kusam, dan memberikan efek glowing yang bertahan lama.",
    price: "Mulai Rp 1.500.000",
    priceValue: 1500000,
    duration: "45 menit",
    icon: "Syringe",
    image: "/images/services/mesotherapy.jpg",
    benefits: [
      "Nutrisi langsung ke kulit",
      "Efek glowing tahan lama",
      "Meningkatkan elastisitas",
      "Hidrasi mendalam",
      "Memperbaiki tekstur kulit"
    ],
    process: [
      "Konsultasi dengan dokter",
      "Pemilihan cocktail serum",
      "Aplikasi numbing cream",
      "Injeksi mesotherapy",
      "Soothing treatment"
    ],
    category: "injection",
    popular: false
  }
];

export const serviceCategories = [
  { id: "all", name: "Semua Layanan" },
  { id: "facial", name: "Facial Treatment" },
  { id: "laser", name: "Laser Treatment" },
  { id: "injection", name: "Injeksi & Filler" },
  { id: "body", name: "Body Treatment" }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}

export function getPopularServices(): Service[] {
  return services.filter(service => service.popular);
}

export function getServicesByCategory(category: string): Service[] {
  if (category === "all") return services;
  return services.filter(service => service.category === category);
}
