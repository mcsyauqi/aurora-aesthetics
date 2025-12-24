export interface Doctor {
  id: string;
  name: string;
  title: string;
  specialization: string;
  experience: string;
  education: string;
  image: string;
  description: string;
  certifications: string[];
}

export const doctors: Doctor[] = [
  {
    id: "1",
    name: "dr. Amanda Putri, Sp.KK",
    title: "Head of Dermatology",
    specialization: "Dermatologi & Aesthetic",
    experience: "12 tahun",
    education: "UI, Seoul National University",
    image: "/images/doctors/doctor-1.jpg",
    description: "Dr. Amanda adalah spesialis kulit dengan keahlian khusus dalam aesthetic medicine. Beliau telah menangani lebih dari 5.000 pasien dan dikenal dengan pendekatan holistik dalam perawatan kulit.",
    certifications: [
      "Board Certified Dermatologist",
      "Korean Aesthetic Medicine Certificate",
      "Advanced Botox & Filler Training"
    ]
  },
  {
    id: "2",
    name: "dr. Kevin Hartono, Sp.KK",
    title: "Senior Aesthetician",
    specialization: "Anti-Aging & Laser",
    experience: "10 tahun",
    education: "UGM, Singapore Medical Academy",
    image: "/images/doctors/doctor-2.jpg",
    description: "Dr. Kevin adalah ahli dalam prosedur anti-aging dan teknologi laser. Beliau secara rutin mengikuti pelatihan internasional untuk memastikan penggunaan teknologi terkini dalam setiap treatment.",
    certifications: [
      "Laser Safety Officer Certificate",
      "Singapore Advanced Aesthetic Course",
      "Anti-Aging Medicine Specialist"
    ]
  },
  {
    id: "3",
    name: "dr. Sarah Wijaya, Sp.KK",
    title: "Facial Aesthetic Specialist",
    specialization: "Facial Aesthetics",
    experience: "8 tahun",
    education: "Unair, Bangkok Beauty Institute",
    image: "/images/doctors/doctor-3.jpg",
    description: "Dr. Sarah memiliki spesialisasi dalam perawatan wajah dan facial contouring. Dengan seni dan presisi, beliau membantu klien mencapai tampilan wajah ideal dengan hasil yang natural.",
    certifications: [
      "Thai Aesthetic Medicine Certificate",
      "Advanced Facial Anatomy Course",
      "PRP & Regenerative Medicine"
    ]
  },
  {
    id: "4",
    name: "dr. Michael Chen, Sp.BP",
    title: "Body Contouring Expert",
    specialization: "Body Contouring",
    experience: "15 tahun",
    education: "UI, American Board Certified",
    image: "/images/doctors/doctor-4.jpg",
    description: "Dr. Michael adalah pionir dalam body contouring non-invasif di Indonesia. Dengan pengalaman lebih dari 15 tahun, beliau telah membantu ribuan klien mencapai bentuk tubuh ideal.",
    certifications: [
      "American Board of Plastic Surgery",
      "Body Contouring Masterclass",
      "Cryolipolysis Specialist"
    ]
  }
];
