export interface Promo {
  id: string;
  title: string;
  description: string;
  originalPrice: number;
  discountPrice: number;
  discount: string;
  validUntil: string;
  terms: string[];
  services: string[];
  image: string;
  featured: boolean;
}

export const promos: Promo[] = [
  {
    id: "1",
    title: "PAKET GLOWING",
    description: "Kombinasi Facial Hydrating Glow + Chemical Peeling untuk hasil kulit super glowing",
    originalPrice: 850000,
    discountPrice: 599000,
    discount: "30%",
    validUntil: "31 Januari 2025",
    terms: [
      "Berlaku untuk kunjungan pertama",
      "Tidak dapat digabung dengan promo lain",
      "Reservasi wajib dilakukan minimal H-1"
    ],
    services: ["Facial Hydrating Glow", "Chemical Peeling"],
    image: "/images/promos/glowing.jpg",
    featured: true
  },
  {
    id: "2",
    title: "PAKET AWET MUDA",
    description: "Botox + PRP Vampire Facial untuk tampilan 10 tahun lebih muda",
    originalPrice: 6000000,
    discountPrice: 4500000,
    discount: "25%",
    validUntil: "31 Januari 2025",
    terms: [
      "Konsultasi dokter termasuk dalam paket",
      "Follow-up 2 minggu setelah treatment",
      "Tidak dapat digabung dengan promo lain"
    ],
    services: ["Botox", "PRP Vampire Facial"],
    image: "/images/promos/awet-muda.jpg",
    featured: true
  },
  {
    id: "3",
    title: "PAKET BODY GOALS",
    description: "4x Body Slimming Treatment untuk hasil maksimal",
    originalPrice: 3500000,
    discountPrice: 2500000,
    discount: "29%",
    validUntil: "31 Januari 2025",
    terms: [
      "Berlaku untuk 4x kunjungan",
      "Interval treatment minimal 5 hari",
      "Termasuk konsultasi awal"
    ],
    services: ["Body Slimming Treatment"],
    image: "/images/promos/body-goals.jpg",
    featured: false
  },
  {
    id: "4",
    title: "LASER SMOOTH",
    description: "Paket Laser Hair Removal 6x untuk area underarm",
    originalPrice: 3600000,
    discountPrice: 2400000,
    discount: "33%",
    validUntil: "31 Januari 2025",
    terms: [
      "Khusus area underarm",
      "Interval 4-6 minggu antar sesi",
      "Garansi touch-up 1 tahun"
    ],
    services: ["Laser Hair Removal"],
    image: "/images/promos/laser.jpg",
    featured: false
  },
  {
    id: "5",
    title: "FIRST TIMER SPECIAL",
    description: "Diskon 20% untuk semua treatment bagi klien baru",
    originalPrice: 0,
    discountPrice: 0,
    discount: "20%",
    validUntil: "31 Desember 2025",
    terms: [
      "Khusus klien baru",
      "Berlaku untuk 1x treatment",
      "Tidak berlaku untuk paket"
    ],
    services: ["Semua layanan"],
    image: "/images/promos/first-timer.jpg",
    featured: false
  }
];

export function getFeaturedPromos(): Promo[] {
  return promos.filter(promo => promo.featured);
}
