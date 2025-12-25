"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Droplets,
  Zap,
  Sparkles,
  Layers,
  Heart,
  Activity,
  Target,
  Shield,
  Sun,
  Syringe,
  ChevronRight,
  Search,
  Star,
  Clock,
  CheckCircle2,
  Award,
  Users,
  BadgeCheck,
  MessageCircle,
  ArrowRight,
  Phone,
} from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem, HoverScale } from "@/components/MotionWrapper";
import { services, serviceCategories, getServicesByCategory } from "@/data/services";

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Droplets,
  Zap,
  Sparkles,
  Layers,
  Heart,
  Activity,
  Target,
  Shield,
  Sun,
  Syringe,
};

const treatmentProcess = [
  {
    step: 1,
    title: "Konsultasi",
    description: "Diskusi mendalam dengan dokter tentang kondisi kulit dan hasil yang diinginkan",
    icon: MessageCircle,
  },
  {
    step: 2,
    title: "Analisis Kulit",
    description: "Pemeriksaan menyeluruh menggunakan teknologi skin analyzer modern",
    icon: Target,
  },
  {
    step: 3,
    title: "Perawatan",
    description: "Treatment dilakukan oleh dokter berpengalaman dengan produk premium",
    icon: Sparkles,
  },
  {
    step: 4,
    title: "Follow Up",
    description: "Pemantauan hasil dan saran perawatan lanjutan untuk hasil optimal",
    icon: CheckCircle2,
  },
];

const treatmentBenefits = [
  {
    icon: BadgeCheck,
    title: "Produk Premium",
    description: "Menggunakan produk berlisensi BPOM dan teruji klinis",
  },
  {
    icon: Users,
    title: "Dokter Bersertifikasi",
    description: "Semua treatment dilakukan oleh dokter spesialis berpengalaman",
  },
  {
    icon: Shield,
    title: "Sterilisasi Ketat",
    description: "Protokol sterilisasi standar rumah sakit untuk keamanan maksimal",
  },
  {
    icon: Award,
    title: "Garansi Kepuasan",
    description: "Follow-up gratis jika hasil belum sesuai harapan",
  },
];

const stats = [
  { number: "15,000+", label: "Treatment Berhasil" },
  { number: "4.9/5", label: "Rating Kepuasan" },
  { number: "10+", label: "Tahun Pengalaman" },
  { number: "50+", label: "Jenis Treatment" },
];

function LayananContent() {
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get("category");

  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Handle URL query parameter for category
  useEffect(() => {
    if (categoryFromUrl) {
      // Map the category from URL to our category IDs
      const categoryMapping: { [key: string]: string } = {
        facial: "facial",
        laser: "laser",
        injeksi: "injection",
        injection: "injection",
        body: "body",
        all: "all",
      };
      const mappedCategory = categoryMapping[categoryFromUrl.toLowerCase()] || "all";
      setActiveCategory(mappedCategory);
    }
  }, [categoryFromUrl]);

  const filteredServices = getServicesByCategory(activeCategory).filter(
    (service) =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const popularServices = services.filter((s) => s.popular);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#F8E8E8] to-[#FDF5F0] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#B76E79]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeUp className="text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm text-[#B76E79] font-medium shadow-sm mb-6">
              <Sparkles className="w-4 h-4" />
              Layanan Premium
            </span>
            <h1
              className="text-4xl md:text-6xl font-bold text-[#4A2040] mb-6"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Layanan Perawatan Kami
            </h1>
            <p className="text-[#4A2040]/70 max-w-2xl mx-auto text-lg mb-8">
              Berbagai perawatan kecantikan premium dengan teknologi terkini untuk hasil yang natural dan tahan lama. Dikerjakan oleh dokter berpengalaman dengan standar internasional.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-3xl font-bold text-[#B76E79]" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                    {stat.number}
                  </p>
                  <p className="text-sm text-[#4A2040]/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#4A2040] mb-4"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Proses Perawatan Kami
            </h2>
            <p className="text-[#4A2040]/60 max-w-2xl mx-auto">
              Setiap treatment dirancang dengan protokol ketat untuk memastikan keamanan dan hasil optimal
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatmentProcess.map((process, index) => (
              <FadeUp key={index} delay={index * 0.1}>
                <div className="text-center p-6 bg-[#FDF5F0] rounded-2xl relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#B76E79] text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {process.step}
                  </div>
                  <div className="w-16 h-16 mx-auto mt-4 mb-4 rounded-full bg-white flex items-center justify-center">
                    <process.icon className="w-8 h-8 text-[#B76E79]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#4A2040] mb-2" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                    {process.title}
                  </h3>
                  <p className="text-sm text-[#4A2040]/60">{process.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Services Highlight */}
      <section className="py-16 bg-[#4A2040]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/20 rounded-full text-sm text-[#D4AF37] font-medium mb-4">
              <Star className="w-4 h-4 fill-current" />
              Paling Diminati
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Treatment Populer
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Layanan favorit yang paling banyak dipilih oleh klien kami
            </p>
          </FadeUp>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularServices.slice(0, 3).map((service, index) => {
              const IconComponent = iconMap[service.icon] || Sparkles;
              return (
                <StaggerItem key={service.id}>
                  <Link href={`/layanan/${service.slug}`}>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all group">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-xl bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-7 h-7 text-[#D4AF37]" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-white mb-1" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                            {service.name}
                          </h3>
                          <p className="text-white/60 text-sm mb-3 line-clamp-2">{service.shortDescription}</p>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-[#D4AF37] font-semibold">{service.price}</p>
                              <p className="text-xs text-white/40 flex items-center gap-1">
                                <Clock className="w-3 h-3" /> {service.duration}
                              </p>
                            </div>
                            <span className="text-[#D4AF37] group-hover:translate-x-1 transition-transform">
                              <ArrowRight className="w-5 h-5" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-[#F8E8E8] sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4A2040]/40" />
              <input
                type="text"
                placeholder="Cari layanan..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-[#F8E8E8] focus:border-[#B76E79] focus:ring-2 focus:ring-[#B76E79]/20 outline-none transition-all"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center">
              {serviceCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeCategory === category.id
                      ? "bg-[#B76E79] text-white"
                      : "bg-[#F8E8E8] text-[#4A2040] hover:bg-[#B76E79]/10"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="mb-8">
            <p className="text-[#4A2040]/60">
              Menampilkan <span className="font-semibold text-[#B76E79]">{filteredServices.length}</span> layanan
              {activeCategory !== "all" && (
                <span> dalam kategori <span className="font-semibold text-[#B76E79]">{serviceCategories.find(c => c.id === activeCategory)?.name}</span></span>
              )}
            </p>
          </FadeUp>

          {filteredServices.length === 0 ? (
            <div className="text-center py-12">
              <Sparkles className="w-16 h-16 text-[#B76E79]/30 mx-auto mb-4" />
              <p className="text-[#4A2040]/60 mb-4">Tidak ada layanan yang ditemukan.</p>
              <button
                onClick={() => {
                  setActiveCategory("all");
                  setSearchQuery("");
                }}
                className="text-[#B76E79] font-medium hover:underline"
              >
                Reset Filter
              </button>
            </div>
          ) : (
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => {
                const IconComponent = iconMap[service.icon] || Sparkles;
                return (
                  <StaggerItem key={service.id}>
                    <HoverScale>
                      <Link href={`/layanan/${service.slug}`}>
                        <div className="bg-[#FDF5F0] rounded-2xl overflow-hidden h-full border border-transparent hover:border-[#B76E79]/30 hover:shadow-xl transition-all duration-300 group">
                          {/* Image Placeholder */}
                          <div className="aspect-video bg-gradient-to-br from-[#B76E79]/20 to-[#D4AF37]/20 flex items-center justify-center relative">
                            <IconComponent className="w-12 h-12 text-[#B76E79]" />
                            {service.popular && (
                              <span className="absolute top-4 right-4 px-3 py-1 bg-[#D4AF37] text-white text-xs rounded-full font-medium flex items-center gap-1">
                                <Star className="w-3 h-3 fill-current" /> Populer
                              </span>
                            )}
                            <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-[#4A2040] text-xs rounded-full font-medium">
                              {service.category === "facial" && "Facial"}
                              {service.category === "laser" && "Laser"}
                              {service.category === "injection" && "Injeksi"}
                              {service.category === "body" && "Body Care"}
                            </span>
                          </div>

                          <div className="p-6">
                            <h3
                              className="text-xl font-semibold text-[#4A2040] mb-2"
                              style={{ fontFamily: "var(--font-cormorant), serif" }}
                            >
                              {service.name}
                            </h3>
                            <p className="text-[#4A2040]/60 text-sm mb-4 leading-relaxed line-clamp-2">
                              {service.shortDescription}
                            </p>

                            {/* Benefits Preview */}
                            <div className="flex flex-wrap gap-2 mb-4">
                              {service.benefits.slice(0, 2).map((benefit, idx) => (
                                <span key={idx} className="text-xs bg-white px-2 py-1 rounded-full text-[#4A2040]/70 flex items-center gap-1">
                                  <CheckCircle2 className="w-3 h-3 text-[#B76E79]" />
                                  {benefit.length > 20 ? benefit.substring(0, 20) + "..." : benefit}
                                </span>
                              ))}
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-[#4A2040]/10">
                              <div>
                                <p className="text-[#B76E79] font-semibold text-lg">{service.price}</p>
                                <p className="text-xs text-[#4A2040]/40 flex items-center gap-1">
                                  <Clock className="w-3 h-3" /> {service.duration}
                                </p>
                              </div>
                              <span className="text-[#D4AF37] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                                Detail <ChevronRight className="w-4 h-4" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </HoverScale>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          )}
        </div>
      </section>

      {/* Why Choose Our Treatments */}
      <section className="py-20 bg-[#FDF5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#4A2040] mb-4"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Mengapa Memilih Treatment Kami?
            </h2>
            <p className="text-[#4A2040]/60 max-w-2xl mx-auto">
              Standar perawatan premium yang kami terapkan untuk setiap treatment
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatmentBenefits.map((benefit, index) => (
              <FadeUp key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow h-full">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-[#B76E79]/10 flex items-center justify-center">
                    <benefit.icon className="w-7 h-7 text-[#B76E79]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#4A2040] mb-2" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-[#4A2040]/60">{benefit.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Special Packages CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#4A2040] to-[#6B3A5D] rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 md:p-12">
                <FadeUp>
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/20 rounded-full text-sm text-[#D4AF37] font-medium mb-4">
                    <Star className="w-4 h-4 fill-current" />
                    Paket Hemat
                  </span>
                  <h2
                    className="text-3xl md:text-4xl font-bold text-white mb-4"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    Dapatkan Harga Spesial untuk Paket Treatment
                  </h2>
                  <p className="text-white/70 mb-6">
                    Kombinasikan beberapa treatment untuk hasil maksimal dengan harga lebih hemat. Konsultasikan kebutuhan Anda dengan dokter kami.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3 text-white/80">
                      <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                      Hemat hingga 30% untuk paket treatment
                    </li>
                    <li className="flex items-center gap-3 text-white/80">
                      <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                      Konsultasi dokter gratis
                    </li>
                    <li className="flex items-center gap-3 text-white/80">
                      <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                      Cicilan 0% tersedia
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/promo"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4AF37] text-[#4A2040] rounded-lg font-medium hover:bg-[#D4AF37]/90 transition-colors"
                    >
                      Lihat Promo <ArrowRight className="w-5 h-5" />
                    </Link>
                    <a
                      href="https://wa.me/6281234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      Hubungi Kami
                    </a>
                  </div>
                </FadeUp>
              </div>
              <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-[#B76E79]/30 to-[#D4AF37]/30 p-8">
                <div className="text-center">
                  <Sparkles className="w-24 h-24 text-white/50 mx-auto mb-4" />
                  <p className="text-white/70 text-lg">Paket Treatment Eksklusif</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-20 bg-gradient-to-r from-[#B76E79] to-[#D4AF37]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <MessageCircle className="w-16 h-16 text-white/80 mx-auto mb-6" />
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Tidak Yakin Layanan Mana yang Cocok?
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Konsultasikan dengan dokter kami untuk rekomendasi perawatan terbaik sesuai kondisi kulit Anda. Konsultasi pertama GRATIS!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/booking"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#4A2040] rounded-lg font-medium hover:bg-[#FDF5F0] transition-colors"
              >
                Booking Konsultasi Gratis
                <ChevronRight className="w-5 h-5" />
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

export default function LayananPage() {
  return (
    <Suspense fallback={
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Sparkles className="w-12 h-12 text-[#B76E79] mx-auto mb-4 animate-pulse" />
          <p className="text-[#4A2040]/60">Memuat layanan...</p>
        </div>
      </div>
    }>
      <LayananContent />
    </Suspense>
  );
}
