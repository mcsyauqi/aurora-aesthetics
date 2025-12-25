"use client";

import Link from "next/link";
import {
  Sparkles,
  Award,
  GraduationCap,
  Calendar,
  ArrowRight,
  Star,
  Users,
  Clock,
  Shield,
  Heart,
  CheckCircle2,
  Stethoscope,
  BookOpen,
  BadgeCheck,
  MessageCircle,
  Target,
  Phone,
} from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem, HoverScale } from "@/components/MotionWrapper";
import { doctors } from "@/data/doctors";
import { testimonials } from "@/data/testimonials";

const stats = [
  { value: "4", label: "Dokter Spesialis", icon: Stethoscope },
  { value: "40+", label: "Tahun Pengalaman Gabungan", icon: Clock },
  { value: "15.000+", label: "Pasien Ditangani", icon: Users },
  { value: "50+", label: "Sertifikasi", icon: Award },
];

const whyChooseUs = [
  {
    icon: Award,
    title: "Sertifikasi Internasional",
    description: "Semua dokter kami memiliki sertifikasi dari institusi terkemuka di dunia seperti IMCAS, AMWC, dan Korean Academy.",
  },
  {
    icon: GraduationCap,
    title: "Pelatihan Berkelanjutan",
    description: "Tim kami rutin mengikuti pelatihan internasional untuk update teknologi dan teknik treatment terbaru.",
  },
  {
    icon: Calendar,
    title: "Pengalaman Bertahun-tahun",
    description: "Dengan pengalaman gabungan lebih dari 40 tahun dalam aesthetic medicine dan dermatologi.",
  },
  {
    icon: Heart,
    title: "Pendekatan Personal",
    description: "Setiap pasien mendapat perhatian khusus dengan treatment plan yang disesuaikan kebutuhan individu.",
  },
];

const expertiseAreas = [
  { name: "Facial Rejuvenation", treatments: ["Botox", "Filler", "Thread Lift", "PRP"] },
  { name: "Laser Treatment", treatments: ["Laser Resurfacing", "IPL", "Pigment Removal", "Hair Removal"] },
  { name: "Skin Treatment", treatments: ["Chemical Peel", "Microneedling", "Hydrafacial", "LED Therapy"] },
  { name: "Body Contouring", treatments: ["Fat Freezing", "RF Tightening", "Mesotherapy", "Slimming"] },
];

const philosophy = [
  {
    title: "Konsultasi Mendalam",
    description: "Setiap treatment dimulai dengan konsultasi komprehensif untuk memahami kondisi, harapan, dan riwayat kesehatan pasien.",
  },
  {
    title: "Pendekatan Holistik",
    description: "Kami melihat kecantikan secara menyeluruh, mempertimbangkan faktor gaya hidup, nutrisi, dan kesehatan kulit secara keseluruhan.",
  },
  {
    title: "Hasil Natural",
    description: "Fokus kami adalah memberikan hasil yang natural dan proporsional, bukan hasil yang berlebihan atau tidak alami.",
  },
  {
    title: "Keamanan Utama",
    description: "Protokol keamanan ketat diterapkan di setiap treatment untuk memastikan kenyamanan dan keselamatan pasien.",
  },
];

export default function DokterPage() {
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-[#F8E8E8] to-[#FDF5F0] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#B76E79]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm text-[#B76E79] font-medium shadow-sm mb-6">
                <Stethoscope className="w-4 h-4" />
                Tim Profesional
              </span>
              <h1
                className="text-4xl md:text-6xl font-bold text-[#4A2040] mb-6"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                Dokter Berpengalaman Kami
              </h1>
              <p className="text-[#4A2040]/70 text-lg leading-relaxed mb-8">
                Tim dokter spesialis kami memiliki sertifikasi internasional dan pengalaman bertahun-tahun dalam bidang aesthetic medicine. Kepercayaan Anda adalah prioritas kami.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm">
                  <BadgeCheck className="w-5 h-5 text-[#B76E79]" />
                  <span className="text-sm font-medium text-[#4A2040]">Board Certified</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm">
                  <Star className="w-5 h-5 text-[#D4AF37] fill-current" />
                  <span className="text-sm font-medium text-[#4A2040]">4.9 Rating</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/booking"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#B76E79] text-white rounded-lg font-medium hover:bg-[#4A2040] transition-colors"
                >
                  Konsultasi Gratis
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#B76E79] text-[#B76E79] rounded-lg font-medium hover:bg-[#B76E79] hover:text-white transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat WhatsApp
                </a>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-sm">
                    <stat.icon className="w-8 h-8 text-[#B76E79] mx-auto mb-3" />
                    <p
                      className="text-2xl md:text-3xl font-bold text-[#4A2040]"
                      style={{ fontFamily: "var(--font-cormorant), serif" }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-xs md:text-sm text-[#4A2040]/60">{stat.label}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#B76E79]/10 rounded-full text-sm text-[#B76E79] font-medium mb-4">
              <Users className="w-4 h-4" />
              Meet The Team
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#4A2040] mb-4"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Tim Dokter Kami
            </h2>
            <p className="text-[#4A2040]/60 max-w-2xl mx-auto">
              Berkenalan dengan para dokter berpengalaman yang siap membantu perjalanan kecantikan Anda
            </p>
          </FadeUp>

          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {doctors.map((doctor) => (
              <StaggerItem key={doctor.id}>
                <HoverScale>
                  <div className="bg-[#FDF5F0] rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="grid md:grid-cols-5 gap-0">
                      {/* Image */}
                      <div className="md:col-span-2">
                        <div className="aspect-[3/4] md:h-full bg-gradient-to-br from-[#B76E79]/20 to-[#D4AF37]/20 flex items-center justify-center relative">
                          <div className="text-center p-4">
                            <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center mx-auto mb-2 shadow-lg">
                              <span className="text-4xl font-bold text-[#B76E79]" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                                {doctor.name.split(" ")[1]?.charAt(0) || doctor.name.charAt(0)}
                              </span>
                            </div>
                          </div>
                          {/* Rating Badge */}
                          <div className="absolute top-4 right-4 bg-white rounded-lg px-3 py-1.5 shadow-sm">
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-[#D4AF37] fill-current" />
                              <span className="text-sm font-bold text-[#4A2040]">4.9</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="md:col-span-3 p-6 md:p-8">
                        <div className="mb-4">
                          <span className="inline-block px-3 py-1 bg-[#B76E79]/10 text-[#B76E79] text-xs rounded-full font-medium mb-2">
                            {doctor.title}
                          </span>
                          <h3
                            className="text-2xl font-bold text-[#4A2040]"
                            style={{ fontFamily: "var(--font-cormorant), serif" }}
                          >
                            {doctor.name}
                          </h3>
                        </div>

                        <p className="text-[#4A2040]/60 text-sm mb-6 leading-relaxed">
                          {doctor.description}
                        </p>

                        <div className="space-y-3 mb-6">
                          <div className="flex items-center gap-3">
                            <Award className="w-5 h-5 text-[#D4AF37]" />
                            <span className="text-sm text-[#4A2040]">
                              <span className="text-[#4A2040]/60">Spesialisasi:</span> {doctor.specialization}
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Calendar className="w-5 h-5 text-[#D4AF37]" />
                            <span className="text-sm text-[#4A2040]">
                              <span className="text-[#4A2040]/60">Pengalaman:</span> {doctor.experience}
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <GraduationCap className="w-5 h-5 text-[#D4AF37]" />
                            <span className="text-sm text-[#4A2040]">
                              <span className="text-[#4A2040]/60">Pendidikan:</span> {doctor.education}
                            </span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <p className="text-xs text-[#4A2040]/60 font-medium">Sertifikasi:</p>
                          <div className="flex flex-wrap gap-2">
                            {doctor.certifications.map((cert, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-white text-[#4A2040]/80 text-xs rounded-lg flex items-center gap-1"
                              >
                                <BadgeCheck className="w-3 h-3 text-[#B76E79]" />
                                {cert}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-[#4A2040]/10">
                          <Link
                            href="/booking"
                            className="inline-flex items-center gap-2 text-[#B76E79] font-medium hover:text-[#4A2040] transition-colors text-sm"
                          >
                            Booking Konsultasi
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </HoverScale>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 bg-[#4A2040]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/20 rounded-full text-sm text-[#D4AF37] font-medium mb-4">
              <Target className="w-4 h-4" />
              Area Keahlian
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Keahlian Tim Kami
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Dokter kami memiliki keahlian di berbagai bidang aesthetic medicine
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseAreas.map((area, index) => (
              <FadeUp key={index} delay={index * 0.1}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all h-full">
                  <h3 className="text-lg font-semibold text-white mb-4" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                    {area.name}
                  </h3>
                  <ul className="space-y-2">
                    {area.treatments.map((treatment, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-white/70 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                        {treatment}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Doctors */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#B76E79]/10 rounded-full text-sm text-[#B76E79] font-medium mb-4">
              <Shield className="w-4 h-4" />
              Why Choose Us
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#4A2040] mb-4"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Mengapa Mempercayakan Kami?
            </h2>
          </FadeUp>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <StaggerItem key={index}>
                <HoverScale>
                  <div className="bg-[#FDF5F0] rounded-2xl p-8 text-center h-full hover:shadow-xl transition-shadow border border-transparent hover:border-[#B76E79]/20">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#B76E79] to-[#D4AF37] flex items-center justify-center mx-auto mb-6">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3
                      className="text-xl font-semibold text-[#4A2040] mb-3"
                      style={{ fontFamily: "var(--font-cormorant), serif" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-[#4A2040]/60 text-sm">{item.description}</p>
                  </div>
                </HoverScale>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-20 bg-[#FDF5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/10 rounded-full text-sm text-[#D4AF37] font-medium mb-6">
                <BookOpen className="w-4 h-4" />
                Filosofi Kami
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#4A2040] mb-6"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                Pendekatan Kami dalam Perawatan
              </h2>
              <p className="text-[#4A2040]/70 mb-8 leading-relaxed">
                Kami percaya bahwa kecantikan sejati berasal dari dalam. Pendekatan kami menggabungkan ilmu pengetahuan medis dengan seni estetika untuk memberikan hasil yang natural dan meningkatkan kepercayaan diri.
              </p>

              <div className="space-y-4">
                {philosophy.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl">
                    <div className="w-8 h-8 rounded-full bg-[#B76E79]/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-[#B76E79]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#4A2040] mb-1">{item.title}</h4>
                      <p className="text-sm text-[#4A2040]/60">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="bg-gradient-to-br from-[#B76E79]/20 to-[#D4AF37]/20 rounded-2xl aspect-square flex items-center justify-center relative overflow-hidden">
                <Sparkles className="w-24 h-24 text-[#B76E79]/50" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#4A2040]/80 to-transparent p-8">
                  <p className="text-white font-medium text-lg" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                    &quot;Hasil terbaik datang dari perawatan yang tepat dan personal&quot;
                  </p>
                  <p className="text-white/70 text-sm mt-2">- Tim Dokter Aurora Aesthetics</p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
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
              Kata Pasien Kami
            </h2>
            <p className="text-[#4A2040]/60 max-w-2xl mx-auto">
              Pengalaman pasien yang telah ditangani oleh dokter kami
            </p>
          </FadeUp>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial) => (
              <StaggerItem key={testimonial.id}>
                <div className="bg-[#FDF5F0] rounded-2xl p-6 h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#D4AF37] fill-current" />
                    ))}
                  </div>
                  <p className="text-[#4A2040]/70 text-sm italic mb-6 leading-relaxed">
                    &quot;{testimonial.content}&quot;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-[#4A2040]/10">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#B76E79] to-[#D4AF37]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <Stethoscope className="w-16 h-16 text-white/80 mx-auto mb-6" />
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Konsultasi dengan Dokter Kami
            </h2>
            <p className="text-white/80 mb-8 text-lg max-w-2xl mx-auto">
              Dapatkan konsultasi gratis untuk menentukan treatment terbaik sesuai kondisi kulit Anda. Tim dokter kami siap membantu!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/booking"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#4A2040] rounded-lg font-medium hover:bg-[#FDF5F0] transition-colors"
              >
                Reservasi Konsultasi
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-[#4A2040] transition-colors"
              >
                <Phone className="w-5 h-5" />
                Hubungi Kami
              </a>
            </div>
            <p className="text-white/60 mt-6 text-sm">
              Konsultasi pertama GRATIS!
            </p>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
