export interface Testimonial {
  id: string;
  name: string;
  age: number;
  rating: number;
  content: string;
  treatment: string;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Rina Susanti",
    age: 32,
    rating: 5,
    content: "Kulit saya jadi jauh lebih cerah dan glowing setelah 3x treatment di Aurora. Dokternya ramah dan hasilnya luar biasa!",
    treatment: "Facial Hydrating Glow",
    image: "/images/testimonials/client-1.jpg"
  },
  {
    id: "2",
    name: "Dewi Anggraini",
    age: 28,
    rating: 5,
    content: "Sudah coba banyak klinik, tapi di Aurora hasilnya paling natural dan tahan lama. Recommended banget!",
    treatment: "Botox & Filler",
    image: "/images/testimonials/client-2.jpg"
  },
  {
    id: "3",
    name: "Maria Chen",
    age: 45,
    rating: 5,
    content: "Takut sama treatment estetik? Di Aurora dokternya sabar banget jelasin dan prosesnya nyaman.",
    treatment: "PRP Vampire Facial",
    image: "/images/testimonials/client-3.jpg"
  },
  {
    id: "4",
    name: "Siti Rahayu",
    age: 35,
    rating: 5,
    content: "Laser hair removal di sini beneran ga sakit! Setelah 4 sesi kulit jadi super halus. Worth it banget!",
    treatment: "Laser Hair Removal",
    image: "/images/testimonials/client-4.jpg"
  },
  {
    id: "5",
    name: "Linda Wijaya",
    age: 40,
    rating: 5,
    content: "Body slimming treatment-nya efektif! Lingkar pinggang saya berkurang 5cm dalam 6x treatment.",
    treatment: "Body Slimming Treatment",
    image: "/images/testimonials/client-5.jpg"
  },
  {
    id: "6",
    name: "Anita Kusuma",
    age: 29,
    rating: 5,
    content: "Flek hitam di wajah saya hilang setelah chemical peeling. Sekarang PD keluar tanpa makeup tebal!",
    treatment: "Chemical Peeling",
    image: "/images/testimonials/client-6.jpg"
  }
];
