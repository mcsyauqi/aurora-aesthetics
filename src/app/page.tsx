"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Droplets,
  Zap,
  Sparkles,
  Layers,
  Heart,
  Activity,
  Award,
  Cpu,
  MessageCircle,
  Shield,
  ChevronRight,
  Star,
  ArrowRight,
  ChevronLeft,
  Clock,
  MapPin,
  Phone,
  CheckCircle,
  Users,
  Gem,
  Leaf,
  PlayCircle
} from "lucide-react";
import { useState } from "react";
import { FadeUp, StaggerContainer, StaggerItem, HoverScale } from "@/components/MotionWrapper";
import { getPopularServices, services } from "@/data/services";
import { doctors } from "@/data/doctors";
import { testimonials } from "@/data/testimonials";
import { getFeaturedPromos } from "@/data/promos";

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Droplets,
  Zap,
  Sparkles,
  Layers,
  Heart,
  Activity,
};

const stats = [
  { value: "15.000+", label: "Klien Puas" },
  { value: "25+", label: "Treatment Premium" },
  { value: "7", label: "Tahun Pengalaman" },
  { value: "4.9", label: "Rating Google" },
];

const whyChooseUs = [
  {
    icon: Award,
    title: "Dokter Bersertifikasi",
    description: "Tim dokter kami memiliki sertifikasi internasional dan pengalaman lebih dari 10 tahun di bidang aesthetic medicine."
  },
  {
    icon: Cpu,
    title: "Teknologi Terkini",
    description: "Kami menggunakan peralatan medis berstandar internasional yang aman dan teruji klinis."
  },
  {
    icon: MessageCircle,
    title: "Konsultasi Gratis",
    description: "Dapatkan konsultasi gratis dengan dokter kami untuk menentukan perawatan terbaik untuk Anda."
  },
  {
    icon: Shield,
    title: "Garansi Kepuasan",
    description: "Kami memberikan garansi hasil dan follow-up treatment untuk memastikan kepuasan Anda."
  }
];

const treatmentCategories = [
  { name: "Facial Treatment", count: 5, icon: Sparkles, href: "/layanan?category=facial" },
  { name: "Laser Treatment", count: 2, icon: Zap, href: "/layanan?category=laser" },
  { name: "Injeksi & Filler", count: 3, icon: Gem, href: "/layanan?category=injection" },
  { name: "Body Treatment", count: 2, icon: Activity, href: "/layanan?category=body" },
];

const processSteps = [
  { step: 1, title: "Konsultasi", description: "Konsultasi gratis dengan dokter untuk analisis kulit dan rekomendasi treatment" },
  { step: 2, title: "Perencanaan", description: "Dokter menyusun rencana perawatan sesuai kebutuhan dan tujuan Anda" },
  { step: 3, title: "Treatment", description: "Prosedur dilakukan oleh dokter berpengalaman dengan teknologi terkini" },
  { step: 4, title: "Follow-up", description: "Evaluasi hasil dan perawatan lanjutan untuk hasil optimal" },
];

const certifications = [
  "ISO 9001:2015",
  "BPOM Certified",
  "Ministry of Health Licensed",
  "Korean Aesthetic Association",
];

export default function HomePage() {
  const popularServices = getPopularServices();
  const featuredPromos = getFeaturedPromos();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentDoctor, setCurrentDoctor] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextDoctor = () => {
    setCurrentDoctor((prev) => (prev + 1) % doctors.length);
  };

  const prevDoctor = () => {
    setCurrentDoctor((prev) => (prev - 1 + doctors.length) % doctors.length);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 gradient-bg floral-pattern">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FDF5F0] via-[#F8E8E8] to-[#FDF5F0] opacity-90" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <FadeUp>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm text-[#B76E79] font-medium shadow-sm">
                  <Sparkles className="w-4 h-4" />
                  Klinik Kecantikan Terpercaya Sejak 2018
                </span>
              </FadeUp>

              <FadeUp delay={0.1}>
                <h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4A2040] leading-tight"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  Tampil Cantik Alami dengan{" "}
                  <span className="text-[#B76E79]">Perawatan Profesional</span>
                </h1>
              </FadeUp>

              <FadeUp delay={0.2}>
                <p className="text-lg text-[#4A2040]/70 leading-relaxed max-w-xl">
                  Kami menghadirkan perawatan kecantikan premium dengan teknologi terkini dan dokter berpengalaman untuk hasil yang natural dan tahan lama. Rasakan transformasi kulit impian Anda bersama Aurora Aesthetics.
                </p>
              </FadeUp>

              <FadeUp delay={0.3}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/booking"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#B76E79] to-[#D4AF37] text-white rounded-lg font-medium text-base hover:shadow-xl hover:shadow-[#B76E79]/25 transition-all hover:scale-105 active:scale-95"
                  >
                    Reservasi Sekarang
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/layanan"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#4A2040] rounded-lg font-medium text-base border-2 border-[#B76E79]/20 hover:border-[#B76E79] hover:text-[#B76E79] transition-all"
                  >
                    Lihat Layanan Kami
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </div>
              </FadeUp>

              <FadeUp delay={0.4}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
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
            </div>

            <FadeUp delay={0.2} className="relative">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[#B76E79]/20 to-[#D4AF37]/20" />
                <div className="absolute inset-0 flex items-center justify-center bg-[#F8E8E8]">
                  <div className="text-center p-8">
                    <Sparkles className="w-16 h-16 text-[#B76E79] mx-auto mb-4" />
                    <p className="text-[#4A2040]/60">Hero Image</p>
                    <p className="text-sm text-[#4A2040]/40">Beautiful woman with glowing skin</p>
                  </div>
                </div>
              </div>
              {/* Floating Cards */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-xl hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#B76E79]/10 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-[#B76E79]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#4A2040]">100% Aman</p>
                    <p className="text-xs text-[#4A2040]/60">Prosedur Bersertifikat</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-xl hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                    <Star className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#4A2040]">4.9/5 Rating</p>
                    <p className="text-xs text-[#4A2040]/60">500+ Reviews</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#D4AF37]/20 rounded-full blur-2xl" />
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-[#B76E79]/20 rounded-full blur-2xl" />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-white border-b border-[#F8E8E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-2 text-[#4A2040]/60">
                <CheckCircle className="w-4 h-4 text-[#B76E79]" />
                <span className="text-sm font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Categories */}
      <section className="py-16 bg-[#FDF5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#4A2040] mb-4"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Kategori Treatment
            </h2>
            <p className="text-[#4A2040]/60 max-w-2xl mx-auto">
              Pilih kategori perawatan sesuai kebutuhan Anda
            </p>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {treatmentCategories.map((category, index) => (
              <StaggerItem key={index}>
                <Link href={category.href}>
                  <div className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all group cursor-pointer">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#B76E79]/10 to-[#D4AF37]/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <category.icon className="w-8 h-8 text-[#B76E79]" />
                    </div>
                    <h3 className="font-semibold text-[#4A2040] mb-1">{category.name}</h3>
                    <p className="text-sm text-[#B76E79]">{category.count} Treatment</p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#B76E79]/10 rounded-full text-sm text-[#B76E79] font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              Treatment Terpopuler
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#4A2040] mb-4"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Layanan Unggulan Kami
            </h2>
            <p className="text-[#4A2040]/60 max-w-2xl mx-auto">
              Perawatan premium dengan hasil yang terlihat nyata. Setiap treatment dirancang khusus untuk memberikan hasil maksimal.
            </p>
          </FadeUp>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularServices.map((service) => {
              const IconComponent = iconMap[service.icon] || Sparkles;
              return (
                <StaggerItem key={service.id}>
                  <HoverScale>
                    <Link href={`/layanan/${service.slug}`}>
                      <div className="bg-[#FDF5F0] rounded-2xl p-8 h-full border border-transparent hover:border-[#B76E79]/30 hover:shadow-xl transition-all duration-300 group">
                        <div className="flex items-start justify-between mb-6">
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#B76E79] to-[#D4AF37] flex items-center justify-center group-hover:scale-110 transition-transform">
                            <IconComponent className="w-7 h-7 text-white" />
                          </div>
                          <span className="px-3 py-1 bg-white text-[#D4AF37] text-xs rounded-full font-medium">
                            Populer
                          </span>
                        </div>
                        <h3
                          className="text-xl font-semibold text-[#4A2040] mb-3"
                          style={{ fontFamily: "var(--font-cormorant), serif" }}
                        >
                          {service.name}
                        </h3>
                        <p className="text-[#4A2040]/60 text-sm mb-4 leading-relaxed">
                          {service.shortDescription}
                        </p>
                        <div className="flex items-center gap-2 mb-4 text-sm text-[#4A2040]/60">
                          <Clock className="w-4 h-4" />
                          <span>{service.duration}</span>
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t border-[#4A2040]/10">
                          <span className="text-[#B76E79] font-semibold">{service.price}</span>
                          <span className="text-[#D4AF37] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                            Detail <ChevronRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </HoverScale>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          <FadeUp delay={0.4} className="text-center mt-12">
            <Link
              href="/layanan"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#4A2040] text-white rounded-lg font-medium hover:bg-[#B76E79] transition-colors"
            >
              Lihat Semua {services.length} Layanan
              <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-[#4A2040]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm text-[#D4AF37] font-medium mb-4">
              <PlayCircle className="w-4 h-4" />
              Cara Kerja
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Proses Perawatan di Aurora
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Kami memastikan setiap klien mendapatkan pengalaman terbaik dari awal hingga akhir
            </p>
          </FadeUp>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item, index) => (
              <StaggerItem key={index}>
                <div className="relative">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/10 transition-colors h-full">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#B76E79] to-[#D4AF37] flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-white">{item.step}</span>
                    </div>
                    <h3
                      className="text-xl font-semibold text-white mb-3"
                      style={{ fontFamily: "var(--font-cormorant), serif" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ChevronRight className="w-8 h-8 text-white/20" />
                    </div>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeUp delay={0.4} className="text-center mt-12">
            <Link
              href="/tentang"
              className="inline-flex items-center gap-2 text-[#D4AF37] font-medium hover:text-white transition-colors"
            >
              Pelajari Lebih Lanjut Tentang Kami
              <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-br from-[#F8E8E8] to-[#FDF5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm text-[#B76E79] font-medium shadow-sm mb-6">
                <Award className="w-4 h-4" />
                Kenapa Kami?
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#4A2040] mb-6"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                Mengapa Aurora Aesthetics Menjadi Pilihan Terbaik?
              </h2>
              <p className="text-[#4A2040]/70 mb-8 leading-relaxed">
                Sejak 2018, kami telah membantu lebih dari 15.000 klien mencapai kulit impian mereka.
                Dengan tim dokter berpengalaman dan teknologi terkini, kami berkomitmen memberikan
                hasil terbaik dengan standar keamanan tertinggi.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-[#B76E79]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#4A2040] text-sm">{item.title}</h4>
                      <p className="text-xs text-[#4A2040]/60 mt-1">{item.description.slice(0, 60)}...</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/tentang"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#4A2040] text-white rounded-lg font-medium hover:bg-[#B76E79] transition-colors"
                >
                  Tentang Kami
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <Users className="w-8 h-8 text-[#B76E79] mb-3" />
                    <p className="text-3xl font-bold text-[#4A2040]">15K+</p>
                    <p className="text-sm text-[#4A2040]/60">Klien Puas</p>
                  </div>
                  <div className="bg-gradient-to-br from-[#B76E79] to-[#D4AF37] rounded-2xl p-6 text-white">
                    <Award className="w-8 h-8 mb-3" />
                    <p className="text-3xl font-bold">7+</p>
                    <p className="text-sm text-white/80">Tahun Pengalaman</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-[#4A2040] rounded-2xl p-6 text-white">
                    <Gem className="w-8 h-8 mb-3" />
                    <p className="text-3xl font-bold">25+</p>
                    <p className="text-sm text-white/80">Treatment Premium</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <Star className="w-8 h-8 text-[#D4AF37] mb-3" />
                    <p className="text-3xl font-bold text-[#4A2040]">4.9</p>
                    <p className="text-sm text-[#4A2040]/60">Rating Google</p>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#B76E79]/10 rounded-full text-sm text-[#B76E79] font-medium mb-4">
              <Users className="w-4 h-4" />
              Tim Profesional
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#4A2040] mb-4"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Tim Dokter Profesional Kami
            </h2>
            <p className="text-[#4A2040]/60 max-w-2xl mx-auto">
              Dipercaya lebih dari 15.000 klien. Setiap dokter memiliki sertifikasi internasional dan pengalaman bertahun-tahun.
            </p>
          </FadeUp>

          <FadeUp>
            <div className="relative">
              <div className="overflow-hidden">
                <motion.div
                  className="flex gap-6"
                  animate={{ x: `-${currentDoctor * 25}%` }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {doctors.map((doctor) => (
                    <div key={doctor.id} className="w-full md:w-1/2 lg:w-1/4 flex-shrink-0 px-3">
                      <Link href="/dokter">
                        <div className="bg-[#FDF5F0] rounded-2xl overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
                          <div className="aspect-[3/4] bg-gradient-to-br from-[#B76E79]/20 to-[#D4AF37]/20 flex items-center justify-center relative">
                            <div className="text-center p-4">
                              <div className="w-24 h-24 rounded-full bg-[#B76E79]/10 flex items-center justify-center mx-auto mb-2">
                                <span className="text-3xl font-bold text-[#B76E79]">
                                  {doctor.name.charAt(4)}
                                </span>
                              </div>
                              <p className="text-sm text-[#4A2040]/40">Doctor Photo</p>
                            </div>
                            <div className="absolute bottom-4 left-4 right-4">
                              <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-[#B76E79]">
                                {doctor.experience} pengalaman
                              </span>
                            </div>
                          </div>
                          <div className="p-6">
                            <h3
                              className="text-lg font-semibold text-[#4A2040] mb-1"
                              style={{ fontFamily: "var(--font-cormorant), serif" }}
                            >
                              {doctor.name}
                            </h3>
                            <p className="text-[#B76E79] text-sm mb-3">{doctor.specialization}</p>
                            <p className="text-sm text-[#4A2040]/60 truncate">{doctor.education}</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </motion.div>
              </div>

              <button
                onClick={prevDoctor}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-[#4A2040] hover:text-[#B76E79] transition-colors z-10 hidden md:flex"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextDoctor}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-[#4A2040] hover:text-[#B76E79] transition-colors z-10 hidden md:flex"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {doctors.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentDoctor(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentDoctor ? "bg-[#B76E79]" : "bg-[#B76E79]/20"
                  }`}
                />
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.3} className="text-center mt-12">
            <Link
              href="/dokter"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#B76E79] text-[#B76E79] rounded-lg font-medium hover:bg-[#B76E79] hover:text-white transition-colors"
            >
              Lihat Profil Lengkap Dokter Kami
              <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-24 bg-[#4A2040]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm text-[#D4AF37] font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              Hasil Nyata
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Hasil Nyata dari Klien Kami
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Transformasi yang berbicara lebih dari kata-kata. Lihat hasil treatment dari klien-klien kami.
            </p>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { treatment: "Facial Glow", desc: "Kulit lebih cerah" },
              { treatment: "Chemical Peeling", desc: "Flek hitam hilang" },
              { treatment: "Botox", desc: "Kerutan berkurang" },
              { treatment: "Laser Hair", desc: "Kulit halus" },
              { treatment: "Body Slimming", desc: "Lingkar pinggang -5cm" },
              { treatment: "PRP Facial", desc: "Awet muda" },
            ].map((item, index) => (
              <StaggerItem key={index}>
                <Link href="/galeri">
                  <div className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#B76E79]/30 to-[#D4AF37]/30 flex items-center justify-center">
                      <div className="text-center text-white">
                        <p className="text-xs opacity-60 mb-1">Before / After</p>
                        <p className="font-medium">{item.treatment}</p>
                        <p className="text-xs opacity-80 mt-1">{item.desc}</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-[#B76E79]/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <p className="text-white font-medium">Lihat Detail</p>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeUp delay={0.4} className="text-center mt-12">
            <Link
              href="/galeri"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#4A2040] rounded-lg font-medium hover:bg-[#D4AF37] hover:text-white transition-colors"
            >
              Lihat Galeri Lengkap
              <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#B76E79]/10 rounded-full text-sm text-[#B76E79] font-medium mb-4">
              <MessageCircle className="w-4 h-4" />
              Testimoni
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#4A2040] mb-4"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Kata Mereka Tentang Aurora
            </h2>
            <p className="text-[#4A2040]/60 max-w-2xl mx-auto">
              Ribuan klien telah merasakan transformasi bersama kami. Ini adalah cerita mereka.
            </p>
          </FadeUp>

          <FadeUp>
            <div className="relative max-w-4xl mx-auto">
              <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#F8E8E8] to-[#FDF5F0] p-8 md:p-12">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex gap-1 mb-6 justify-center">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>
                  <p
                    className="text-xl md:text-2xl text-[#4A2040] text-center mb-8 leading-relaxed"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    &ldquo;{testimonials[currentTestimonial].content}&rdquo;
                  </p>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-[#B76E79]/10 flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl font-bold text-[#B76E79]">
                        {testimonials[currentTestimonial].name.charAt(0)}
                      </span>
                    </div>
                    <p className="font-semibold text-[#4A2040]">
                      {testimonials[currentTestimonial].name}
                    </p>
                    <p className="text-sm text-[#4A2040]/60">
                      {testimonials[currentTestimonial].age} tahun • {testimonials[currentTestimonial].treatment}
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="flex justify-center gap-4 mt-8">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full bg-[#F8E8E8] flex items-center justify-center text-[#4A2040] hover:bg-[#B76E79] hover:text-white transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <div className="flex items-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentTestimonial ? "bg-[#B76E79]" : "bg-[#B76E79]/20"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full bg-[#F8E8E8] flex items-center justify-center text-[#4A2040] hover:bg-[#B76E79] hover:text-white transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Promo Section */}
      <section className="py-24 bg-gradient-to-r from-[#B76E79] to-[#D4AF37]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm text-white font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              Promo Terbatas
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Promo Spesial Bulan Ini
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Dapatkan penawaran terbaik untuk tampil cantik. Promo berlaku terbatas!
            </p>
          </FadeUp>

          <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {featuredPromos.map((promo) => (
              <StaggerItem key={promo.id}>
                <div className="bg-white rounded-2xl p-8 hover:shadow-2xl transition-shadow relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-[#D4AF37] text-white px-4 py-1 text-sm font-bold">
                    HEMAT {promo.discount}
                  </div>
                  <h3
                    className="text-2xl font-bold text-[#4A2040] mb-2"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    {promo.title}
                  </h3>
                  <p className="text-[#4A2040]/60 mb-4">{promo.description}</p>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-3xl font-bold text-[#B76E79]">
                      Rp {promo.discountPrice.toLocaleString('id-ID')}
                    </span>
                    <span className="text-lg text-[#4A2040]/40 line-through">
                      Rp {promo.originalPrice.toLocaleString('id-ID')}
                    </span>
                  </div>
                  <Link
                    href="/booking"
                    className="inline-flex items-center gap-2 w-full justify-center px-6 py-3 bg-gradient-to-r from-[#B76E79] to-[#D4AF37] text-white rounded-lg font-medium hover:shadow-lg transition-shadow"
                  >
                    Klaim Promo
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeUp delay={0.4} className="text-center mt-12">
            <Link
              href="/promo"
              className="inline-flex items-center gap-2 text-white font-medium hover:text-white/80 transition-colors"
            >
              Lihat Semua Promo
              <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-[#FDF5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm text-[#B76E79] font-medium shadow-sm mb-6">
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
                Aurora Aesthetics berlokasi strategis di pusat Jakarta Selatan.
                Nikmati suasana klinik yang nyaman dan mewah untuk pengalaman perawatan terbaik.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#B76E79]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#4A2040]">Alamat</h4>
                    <p className="text-[#4A2040]/60">Jl. Sudirman No. 123, Jakarta Selatan 12190</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#B76E79]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#4A2040]">Telepon & WhatsApp</h4>
                    <p className="text-[#4A2040]/60">(021) 1234-5678 | 0812-3456-7890</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#B76E79]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#4A2040]">Jam Operasional</h4>
                    <p className="text-[#4A2040]/60">Senin - Sabtu: 09:00 - 21:00</p>
                  </div>
                </div>
              </div>

              <Link
                href="/kontak"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#4A2040] text-white rounded-lg font-medium hover:bg-[#B76E79] transition-colors"
              >
                Lihat Lokasi & Kontak
                <ArrowRight className="w-5 h-5" />
              </Link>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#B76E79]/20 to-[#D4AF37]/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="w-16 h-16 text-[#B76E79] mx-auto mb-4" />
                  <p className="text-[#4A2040]/60">Google Maps Embed</p>
                  <p className="text-sm text-[#4A2040]/40">Jl. Sudirman No. 123</p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#4A2040] floral-pattern relative overflow-hidden">
        <div className="absolute inset-0 bg-[#4A2040]/95" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeUp>
            <Sparkles className="w-12 h-12 text-[#D4AF37] mx-auto mb-6" />
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Siap Untuk Tampil Lebih Cantik?
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Konsultasi GRATIS dengan dokter kami dan dapatkan analisis kulit lengkap.
              Langkah pertama menuju kulit impian Anda dimulai di sini.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/booking"
                className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-[#D4AF37] to-[#B76E79] text-white rounded-xl font-medium text-lg hover:shadow-2xl hover:shadow-[#D4AF37]/25 transition-all hover:scale-105 active:scale-95"
              >
                Reservasi Konsultasi Gratis
                <ArrowRight className="w-6 h-6" />
              </Link>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-5 border-2 border-white text-white rounded-xl font-medium text-lg hover:bg-white hover:text-[#4A2040] transition-colors"
              >
                <Phone className="w-6 h-6" />
                Chat WhatsApp
              </a>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
