"use client";

import Link from "next/link";
import {
  Sparkles,
  Award,
  Users,
  Clock,
  Heart,
  Target,
  Shield,
  ArrowRight,
  Star,
  CheckCircle2,
  Building2,
  Stethoscope,
  Gem,
  BadgeCheck,
  MapPin,
  Phone,
  MessageCircle,
  Trophy,
  Medal,
  Zap,
} from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem, HoverScale } from "@/components/MotionWrapper";
import { doctors } from "@/data/doctors";
import { testimonials } from "@/data/testimonials";

const milestones = [
  { year: "2018", title: "Pendirian Aurora Aesthetics", description: "Dimulai dengan visi menghadirkan klinik kecantikan premium dengan standar internasional di Jakarta." },
  { year: "2019", title: "1000 Klien Puas", description: "Dalam satu tahun pertama, kami berhasil melayani lebih dari 1000 klien dengan tingkat kepuasan tinggi." },
  { year: "2020", title: "Ekspansi Layanan", description: "Menambahkan berbagai treatment terbaru dan teknologi canggih untuk melayani kebutuhan klien." },
  { year: "2022", title: "10.000+ Klien", description: "Milestone besar dengan pencapaian lebih dari 10.000 klien yang telah mempercayakan perawatan mereka." },
  { year: "2024", title: "Best Aesthetic Clinic Award", description: "Meraih penghargaan sebagai klinik estetika terbaik di Jakarta dari Indonesian Beauty Awards." },
];

const values = [
  { icon: Heart, title: "Kepedulian", description: "Kami peduli dengan setiap klien dan berkomitmen memberikan hasil terbaik untuk kepuasan mereka." },
  { icon: Target, title: "Profesionalisme", description: "Tim dokter dan staf yang terlatih dengan standar profesional tinggi dan etika kerja terbaik." },
  { icon: Shield, title: "Keamanan", description: "Keselamatan dan kenyamanan klien adalah prioritas utama dalam setiap treatment." },
  { icon: Award, title: "Kualitas", description: "Menggunakan produk dan teknologi berkualitas tinggi berstandar internasional." },
];

const stats = [
  { value: "15.000+", label: "Klien Puas", icon: Users },
  { value: "7+", label: "Tahun Pengalaman", icon: Clock },
  { value: "50+", label: "Treatment Premium", icon: Sparkles },
  { value: "4", label: "Dokter Spesialis", icon: Stethoscope },
];

const facilities = [
  {
    title: "Ruang Treatment Premium",
    description: "Ruangan nyaman dengan privasi terjaga dan peralatan modern",
    icon: Building2,
  },
  {
    title: "Teknologi Terkini",
    description: "Alat-alat medis dengan teknologi terbaru dari Korea dan Eropa",
    icon: Zap,
  },
  {
    title: "Sterilisasi Standar RS",
    description: "Protokol sterilisasi ketat untuk keamanan maksimal",
    icon: Shield,
  },
  {
    title: "Produk Premium",
    description: "Hanya menggunakan produk bersertifikat BPOM dan FDA",
    icon: Gem,
  },
];

const awards = [
  { year: "2024", title: "Best Aesthetic Clinic Jakarta", organizer: "Indonesian Beauty Awards" },
  { year: "2023", title: "Excellence in Patient Care", organizer: "Healthcare Asia Awards" },
  { year: "2022", title: "Top 10 Beauty Clinic Indonesia", organizer: "Beauty Industry Association" },
  { year: "2021", title: "Customer Satisfaction Award", organizer: "Jakarta Consumer Awards" },
];

const certifications = [
  "ISO 9001:2015 Certified",
  "BPOM Licensed Clinic",
  "Member of Indonesian Aesthetic Association",
  "Certified Medical Aesthetic Professionals",
];

export default function TentangPage() {
  const featuredDoctors = doctors.slice(0, 3);
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-[#F8E8E8] to-[#FDF5F0] relative overflow-hidden">
        <div className="absolute inset-0 floral-pattern opacity-50" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#B76E79]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm text-[#B76E79] font-medium shadow-sm mb-6">
                <Sparkles className="w-4 h-4" />
                Tentang Aurora Aesthetics
              </span>
              <h1
                className="text-4xl md:text-6xl font-bold text-[#4A2040] mb-6"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                Kecantikan Alami, Hasil Profesional
              </h1>
              <p className="text-[#4A2040]/70 text-lg leading-relaxed mb-8">
                Aurora Aesthetics adalah klinik kecantikan premium yang didirikan pada tahun 2018 dengan visi menghadirkan perawatan estetika berkualitas internasional di Indonesia. Kami percaya bahwa setiap orang berhak tampil cantik dengan cara yang aman dan natural.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm">
                  <BadgeCheck className="w-5 h-5 text-[#B76E79]" />
                  <span className="text-sm font-medium text-[#4A2040]">BPOM Certified</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm">
                  <Trophy className="w-5 h-5 text-[#D4AF37]" />
                  <span className="text-sm font-medium text-[#4A2040]">Award Winner</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm">
                  <Star className="w-5 h-5 text-[#D4AF37] fill-current" />
                  <span className="text-sm font-medium text-[#4A2040]">4.9 Rating</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-white/50 rounded-xl">
                    <stat.icon className="w-6 h-6 text-[#B76E79] mx-auto mb-2" />
                    <p
                      className="text-2xl md:text-3xl font-bold text-[#B76E79]"
                      style={{ fontFamily: "var(--font-cormorant), serif" }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-xs md:text-sm text-[#4A2040]/60">{stat.label}</p>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.2} className="relative">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-[#B76E79]/20 to-[#D4AF37]/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#4A2040]/20 to-transparent" />
                <div className="text-center p-8 relative z-10">
                  <Sparkles className="w-20 h-20 text-[#B76E79] mx-auto mb-4" />
                  <p className="text-[#4A2040] font-medium">Aurora Aesthetics Clinic</p>
                  <p className="text-[#4A2040]/60 text-sm">Since 2018</p>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-6 right-6 bg-white rounded-xl p-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-[#D4AF37] fill-current" />
                    <span className="font-bold text-[#4A2040]">4.9</span>
                  </div>
                  <p className="text-xs text-[#4A2040]/60">Rating</p>
                </div>

                <div className="absolute bottom-6 left-6 bg-white rounded-xl p-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#B76E79]" />
                    <span className="font-bold text-[#4A2040]">15K+</span>
                  </div>
                  <p className="text-xs text-[#4A2040]/60">Happy Clients</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#D4AF37]/20 rounded-full blur-2xl" />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#F8E8E8] to-[#FDF5F0] flex items-center justify-center relative overflow-hidden">
                <Sparkles className="w-24 h-24 text-[#B76E79]/50" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#4A2040]/80 to-transparent p-8">
                  <p className="text-white font-medium text-lg" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                    &quot;Kecantikan sejati dimulai dari perawatan yang tepat&quot;
                  </p>
                  <p className="text-white/70 text-sm">- Founder Aurora Aesthetics</p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#B76E79]/10 rounded-full text-sm text-[#B76E79] font-medium mb-6">
                <Heart className="w-4 h-4" />
                Cerita Kami
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#4A2040] mb-6"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                Bermula dari Passion untuk Kecantikan
              </h2>
              <div className="space-y-4 text-[#4A2040]/70 leading-relaxed">
                <p>
                  Aurora Aesthetics lahir dari kecintaan mendalam terhadap dunia kecantikan dan keinginan untuk menghadirkan standar perawatan estetika terbaik di Indonesia.
                </p>
                <p>
                  Didirikan oleh sekelompok dokter estetika berpengalaman, kami memulai perjalanan ini dengan satu tujuan sederhana: membantu setiap orang menemukan kecantikan terbaik dalam diri mereka melalui perawatan yang aman, efektif, dan natural.
                </p>
                <p>
                  Selama lebih dari 7 tahun, kami telah melayani lebih dari 15.000 klien dengan berbagai kebutuhan perawatan kulit. Setiap klien adalah cerita unik, dan kami bangga menjadi bagian dari perjalanan kecantikan mereka.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/dokter"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#B76E79] text-white rounded-lg font-medium hover:bg-[#4A2040] transition-colors"
                >
                  Tim Dokter Kami
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/layanan"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#B76E79] text-[#B76E79] rounded-lg font-medium hover:bg-[#B76E79] hover:text-white transition-colors"
                >
                  Lihat Layanan
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-[#FDF5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#4A2040] mb-4"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Visi & Misi
            </h2>
            <p className="text-[#4A2040]/60 max-w-2xl mx-auto">
              Komitmen kami untuk memberikan yang terbaik bagi setiap klien
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeUp>
              <div className="bg-[#4A2040] rounded-2xl p-8 h-full text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/20 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-xl bg-[#D4AF37]/20 flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  <h3
                    className="text-2xl font-bold mb-4"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    Visi Kami
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    Menjadi klinik kecantikan terdepan di Indonesia yang menghadirkan standar perawatan estetika internasional, dengan fokus pada keamanan, kenyamanan, dan hasil natural yang meningkatkan kepercayaan diri setiap klien.
                  </p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="bg-gradient-to-br from-[#B76E79] to-[#D4AF37] rounded-2xl p-8 h-full text-white relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h3
                    className="text-2xl font-bold mb-4"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    Misi Kami
                  </h3>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>Memberikan pelayanan dengan standar keamanan dan kualitas tertinggi</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>Menghadirkan teknologi dan treatment terkini dari seluruh dunia</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>Membangun tim dokter dan staf profesional yang terlatih</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>Menciptakan pengalaman perawatan yang nyaman dan menyenangkan</span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/10 rounded-full text-sm text-[#D4AF37] font-medium mb-4">
              <Heart className="w-4 h-4" />
              Core Values
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#4A2040] mb-4"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Nilai-Nilai Kami
            </h2>
            <p className="text-[#4A2040]/60 max-w-2xl mx-auto">
              Prinsip yang menjadi fondasi dalam setiap pelayanan kami
            </p>
          </FadeUp>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <StaggerItem key={index}>
                <HoverScale>
                  <div className="bg-[#FDF5F0] rounded-2xl p-8 h-full text-center hover:shadow-xl transition-shadow border border-transparent hover:border-[#B76E79]/20">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#B76E79] to-[#D4AF37] flex items-center justify-center mx-auto mb-6">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3
                      className="text-xl font-semibold text-[#4A2040] mb-3"
                      style={{ fontFamily: "var(--font-cormorant), serif" }}
                    >
                      {value.title}
                    </h3>
                    <p className="text-[#4A2040]/60 text-sm">{value.description}</p>
                  </div>
                </HoverScale>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-[#4A2040]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/20 rounded-full text-sm text-[#D4AF37] font-medium mb-4">
              <Building2 className="w-4 h-4" />
              Our Facilities
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Fasilitas Premium
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Dilengkapi dengan peralatan modern dan lingkungan yang nyaman untuk pengalaman perawatan terbaik
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <FadeUp key={index} delay={index * 0.1}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/20 flex items-center justify-center mb-4">
                    <facility.icon className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                    {facility.title}
                  </h3>
                  <p className="text-white/60 text-sm">{facility.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/10 rounded-full text-sm text-[#D4AF37] font-medium mb-4">
              <Trophy className="w-4 h-4" />
              Penghargaan & Sertifikasi
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#4A2040] mb-4"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Pengakuan Atas Komitmen Kami
            </h2>
          </FadeUp>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Awards */}
            <FadeUp>
              <div className="bg-[#FDF5F0] rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/20 flex items-center justify-center">
                    <Medal className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#4A2040]" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                    Penghargaan
                  </h3>
                </div>
                <div className="space-y-4">
                  {awards.map((award, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl">
                      <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                        <Trophy className="w-5 h-5 text-[#D4AF37]" />
                      </div>
                      <div>
                        <p className="text-xs text-[#D4AF37] font-medium mb-1">{award.year}</p>
                        <p className="font-semibold text-[#4A2040]">{award.title}</p>
                        <p className="text-sm text-[#4A2040]/60">{award.organizer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Certifications */}
            <FadeUp delay={0.1}>
              <div className="bg-[#FDF5F0] rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#B76E79]/20 flex items-center justify-center">
                    <BadgeCheck className="w-6 h-6 text-[#B76E79]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#4A2040]" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                    Sertifikasi
                  </h3>
                </div>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-xl">
                      <div className="w-10 h-10 rounded-full bg-[#B76E79]/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-[#B76E79]" />
                      </div>
                      <p className="font-medium text-[#4A2040]">{cert}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-[#B76E79]/10 to-[#D4AF37]/10 rounded-xl">
                  <p className="text-sm text-[#4A2040]/70 text-center">
                    Semua dokter kami memiliki sertifikasi resmi dari lembaga kecantikan internasional
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#FDF5F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#B76E79]/10 rounded-full text-sm text-[#B76E79] font-medium mb-4">
              <Clock className="w-4 h-4" />
              Our Journey
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#4A2040] mb-4"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Perjalanan Kami
            </h2>
          </FadeUp>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#B76E79]/20 hidden md:block" />

            {milestones.map((milestone, index) => (
              <FadeUp key={index} delay={index * 0.1}>
                <div className={`relative flex items-center mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                      <span className="inline-block px-3 py-1 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full text-sm font-bold mb-2">
                        {milestone.year}
                      </span>
                      <h3
                        className="text-xl font-semibold text-[#4A2040] mt-2 mb-2"
                        style={{ fontFamily: "var(--font-cormorant), serif" }}
                      >
                        {milestone.title}
                      </h3>
                      <p className="text-[#4A2040]/60 text-sm">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#B76E79] border-4 border-white shadow-lg hidden md:block" />
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Doctors Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#B76E79]/10 rounded-full text-sm text-[#B76E79] font-medium mb-4">
              <Stethoscope className="w-4 h-4" />
              Tim Profesional
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#4A2040] mb-4"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Dokter Berpengalaman
            </h2>
            <p className="text-[#4A2040]/60 max-w-2xl mx-auto">
              Tim dokter spesialis kami siap memberikan perawatan terbaik untuk Anda
            </p>
          </FadeUp>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {featuredDoctors.map((doctor) => (
              <StaggerItem key={doctor.id}>
                <div className="bg-[#FDF5F0] rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-square bg-gradient-to-br from-[#B76E79]/20 to-[#D4AF37]/20 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center text-4xl font-bold text-[#B76E79]">
                      {doctor.name.charAt(0)}
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3
                      className="text-xl font-semibold text-[#4A2040] mb-1"
                      style={{ fontFamily: "var(--font-cormorant), serif" }}
                    >
                      {doctor.name}
                    </h3>
                    <p className="text-[#B76E79] text-sm font-medium mb-2">{doctor.specialization}</p>
                    <p className="text-[#4A2040]/60 text-xs">{doctor.experience}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeUp className="text-center mt-8">
            <Link
              href="/dokter"
              className="inline-flex items-center gap-2 text-[#B76E79] font-medium hover:text-[#4A2040] transition-colors"
            >
              Lihat Semua Dokter
              <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-[#FDF5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/10 rounded-full text-sm text-[#D4AF37] font-medium mb-4">
              <Star className="w-4 h-4 fill-current" />
              Testimonial
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#4A2040] mb-4"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Kata Klien Kami
            </h2>
          </FadeUp>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial) => (
              <StaggerItem key={testimonial.id}>
                <div className="bg-white rounded-2xl p-6 h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#D4AF37] fill-current" />
                    ))}
                  </div>
                  <p className="text-[#4A2040]/70 text-sm italic mb-4 line-clamp-4">
                    &quot;{testimonial.content}&quot;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-[#F8E8E8]">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#B76E79] to-[#D4AF37] flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-[#4A2040] text-sm">{testimonial.name}</p>
                      <p className="text-xs text-[#4A2040]/60">{testimonial.treatment}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#B76E79]/10 rounded-full text-sm text-[#B76E79] font-medium mb-6">
                <MapPin className="w-4 h-4" />
                Lokasi Kami
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#4A2040] mb-6"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                Kunjungi Klinik Kami
              </h2>
              <p className="text-[#4A2040]/70 mb-8 leading-relaxed">
                Berlokasi strategis di jantung Jakarta Selatan, klinik kami mudah diakses dan menyediakan fasilitas parkir yang luas untuk kenyamanan Anda.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#B76E79]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#B76E79]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#4A2040]">Alamat</p>
                    <p className="text-[#4A2040]/60">Jl. Sudirman No. 123, Jakarta Selatan</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#B76E79]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#B76E79]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#4A2040]">Jam Operasional</p>
                    <p className="text-[#4A2040]/60">Senin - Sabtu: 09.00 - 20.00 WIB</p>
                    <p className="text-[#4A2040]/60">Minggu: 10.00 - 17.00 WIB</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#B76E79]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#B76E79]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#4A2040]">Hubungi Kami</p>
                    <p className="text-[#4A2040]/60">(021) 1234-5678</p>
                  </div>
                </div>
              </div>

              <Link
                href="/kontak"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#B76E79] text-white rounded-lg font-medium hover:bg-[#4A2040] transition-colors"
              >
                Lihat Peta & Kontak
                <ArrowRight className="w-5 h-5" />
              </Link>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="aspect-square rounded-2xl bg-[#FDF5F0] flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="w-16 h-16 text-[#B76E79] mx-auto mb-4" />
                  <p className="text-[#4A2040]/60">Map Placeholder</p>
                  <p className="text-sm text-[#4A2040]/40 mt-2">Jakarta Selatan</p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#B76E79] to-[#D4AF37]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <Sparkles className="w-16 h-16 text-white/80 mx-auto mb-6" />
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Bergabunglah dengan Keluarga Aurora
            </h2>
            <p className="text-white/80 mb-8 text-lg max-w-2xl mx-auto">
              Jadilah bagian dari 15.000+ klien puas yang telah mempercayakan perawatan kecantikan mereka kepada kami. Konsultasi pertama GRATIS!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/booking"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#4A2040] rounded-lg font-medium hover:bg-[#FDF5F0] transition-colors"
              >
                Mulai Perjalanan Anda
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-[#4A2040] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Chat WhatsApp
              </a>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
