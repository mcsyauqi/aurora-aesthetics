"use client";

import { useParams } from "next/navigation";
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
  ChevronDown,
  Clock,
  Check,
  ArrowLeft,
  ArrowRight,
  Star,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  Calendar,
  Phone,
  BadgeCheck,
  Users,
  Award,
  HelpCircle,
} from "lucide-react";
import { useState } from "react";
import { FadeUp, StaggerContainer, StaggerItem, HoverScale } from "@/components/MotionWrapper";
import { getServiceBySlug, getPopularServices, services } from "@/data/services";
import { testimonials } from "@/data/testimonials";

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

// Generic FAQs for services
const serviceGenericFaqs = [
  {
    question: "Apakah treatment ini aman?",
    answer: "Ya, semua treatment kami dilakukan oleh dokter bersertifikasi dengan peralatan berstandar internasional. Sebelum treatment, dokter akan melakukan konsultasi dan analisis kulit untuk memastikan keamanan."
  },
  {
    question: "Berapa kali treatment yang dibutuhkan untuk hasil optimal?",
    answer: "Jumlah sesi treatment tergantung pada kondisi kulit dan hasil yang diinginkan. Umumnya, dokter akan merekomendasikan 3-6 sesi dengan interval 2-4 minggu untuk hasil optimal."
  },
  {
    question: "Apakah ada efek samping?",
    answer: "Efek samping minimal seperti kemerahan atau sensitivitas ringan mungkin terjadi dan biasanya hilang dalam 24-48 jam. Dokter akan menjelaskan detail sebelum treatment."
  },
  {
    question: "Berapa lama hasil treatment bertahan?",
    answer: "Durasi hasil bervariasi tergantung jenis treatment dan perawatan lanjutan. Dengan perawatan yang tepat, hasil bisa bertahan 3-12 bulan."
  },
];

const preparationTips = [
  "Hindari paparan sinar matahari langsung 24-48 jam sebelum treatment",
  "Jangan menggunakan produk eksfoliasi 3 hari sebelum treatment",
  "Informasikan dokter tentang kondisi kulit dan obat yang sedang dikonsumsi",
  "Pastikan wajah dalam keadaan bersih tanpa makeup",
  "Minum cukup air untuk menjaga hidrasi kulit",
];

const afterCareTips = [
  "Gunakan sunscreen SPF 30+ setiap keluar rumah",
  "Hindari produk dengan kandungan aktif kuat selama 48 jam",
  "Jaga kelembapan kulit dengan moisturizer yang direkomendasikan",
  "Hindari aktivitas berat yang menyebabkan keringat berlebih",
  "Lakukan follow-up sesuai jadwal yang ditentukan dokter",
];

const guarantees = [
  { icon: BadgeCheck, text: "Produk BPOM Certified" },
  { icon: Users, text: "Dokter Spesialis" },
  { icon: Shield, text: "Sterilisasi Premium" },
  { icon: Award, text: "Garansi Kepuasan" },
];

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = getServiceBySlug(slug);
  const otherServices = getPopularServices().filter((s) => s.slug !== slug).slice(0, 3);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Get related services from same category
  const relatedServices = services
    .filter((s) => s.category === service?.category && s.slug !== slug)
    .slice(0, 3);

  // Get testimonials (simulated - filter by service name mention or just take random)
  const relatedTestimonials = testimonials.slice(0, 2);

  if (!service) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Sparkles className="w-16 h-16 text-[#B76E79]/30 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-[#4A2040] mb-4">Layanan tidak ditemukan</h1>
          <p className="text-[#4A2040]/60 mb-6">Maaf, layanan yang Anda cari tidak tersedia.</p>
          <Link
            href="/layanan"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#B76E79] text-white rounded-lg font-medium hover:bg-[#4A2040] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Kembali ke Daftar Layanan
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = iconMap[service.icon] || Sparkles;

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-[#FDF5F0] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm flex-wrap">
            <Link href="/" className="text-[#4A2040]/60 hover:text-[#B76E79] transition-colors">Beranda</Link>
            <ChevronRight className="w-4 h-4 text-[#4A2040]/40" />
            <Link href="/layanan" className="text-[#4A2040]/60 hover:text-[#B76E79] transition-colors">Layanan</Link>
            <ChevronRight className="w-4 h-4 text-[#4A2040]/40" />
            <span className="text-[#B76E79] font-medium">{service.name}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#F8E8E8] to-[#FDF5F0] relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#B76E79]/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-[#B76E79]/20 to-[#D4AF37]/20 flex items-center justify-center relative overflow-hidden">
                <IconComponent className="w-24 h-24 text-[#B76E79]" />
                {service.popular && (
                  <div className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2 bg-[#D4AF37] text-white rounded-full text-sm font-medium">
                    <Star className="w-4 h-4 fill-current" />
                    Best Seller
                  </div>
                )}
                <div className="absolute bottom-4 left-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-[#4A2040]">
                  {service.category === "facial" && "Facial Treatment"}
                  {service.category === "laser" && "Laser Treatment"}
                  {service.category === "injection" && "Injeksi"}
                  {service.category === "body" && "Body Care"}
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="space-y-6">
                {service.popular && (
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full text-sm font-medium">
                    <Sparkles className="w-4 h-4" />
                    Layanan Populer
                  </span>
                )}
                <h1
                  className="text-3xl md:text-5xl font-bold text-[#4A2040]"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  {service.name}
                </h1>
                <p className="text-[#4A2040]/70 text-lg leading-relaxed">
                  {service.fullDescription}
                </p>

                {/* Price & Duration */}
                <div className="flex flex-wrap gap-6 p-4 bg-white/50 rounded-xl">
                  <div>
                    <p className="text-sm text-[#4A2040]/60">Harga mulai dari</p>
                    <p className="text-3xl font-bold text-[#B76E79]" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                      {service.price}
                    </p>
                  </div>
                  <div className="border-l border-[#4A2040]/10 pl-6">
                    <p className="text-sm text-[#4A2040]/60">Durasi treatment</p>
                    <div className="flex items-center gap-2 text-[#4A2040]">
                      <Clock className="w-5 h-5 text-[#B76E79]" />
                      <span className="text-xl font-medium">{service.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Guarantees */}
                <div className="flex flex-wrap gap-3">
                  {guarantees.map((g, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-[#4A2040]/70">
                      <g.icon className="w-4 h-4 text-[#B76E79]" />
                      <span>{g.text}</span>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/booking"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#B76E79] to-[#D4AF37] text-white rounded-lg font-medium hover:shadow-xl transition-all"
                  >
                    <Calendar className="w-5 h-5" />
                    Reservasi Sekarang
                  </Link>
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-4 border-2 border-[#B76E79] text-[#B76E79] rounded-lg font-medium hover:bg-[#B76E79] hover:text-white transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Tanya via WhatsApp
                  </a>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Benefits & Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Benefits */}
            <FadeUp>
              <div className="bg-[#FDF5F0] rounded-2xl p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#B76E79]/10 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-[#B76E79]" />
                  </div>
                  <h2
                    className="text-2xl font-bold text-[#4A2040]"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    Manfaat Treatment
                  </h2>
                </div>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3 group">
                      <div className="w-6 h-6 rounded-full bg-[#B76E79] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-[#4A2040]/80">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>

            {/* Process */}
            <FadeUp delay={0.1}>
              <div className="bg-[#4A2040] rounded-2xl p-8 text-white h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/20 flex items-center justify-center">
                    <Target className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <h2
                    className="text-2xl font-bold"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    Proses Treatment
                  </h2>
                </div>
                <ol className="space-y-4">
                  {service.process.map((step, index) => (
                    <li key={index} className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center flex-shrink-0 font-bold text-[#4A2040] group-hover:scale-110 transition-transform">
                        {index + 1}
                      </div>
                      <div className="pt-2">
                        <span className="text-white/90">{step}</span>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Before Treatment & After Care */}
      <section className="py-20 bg-[#FDF5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#4A2040] mb-4"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Persiapan & Perawatan
            </h2>
            <p className="text-[#4A2040]/60 max-w-2xl mx-auto">
              Tips penting untuk memaksimalkan hasil treatment Anda
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Before Treatment */}
            <FadeUp>
              <div className="bg-white rounded-2xl p-8 border border-[#B76E79]/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#B76E79]/10 flex items-center justify-center">
                    <AlertCircle className="w-6 h-6 text-[#B76E79]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#4A2040]" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                    Sebelum Treatment
                  </h3>
                </div>
                <ul className="space-y-3">
                  {preparationTips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <ChevronRight className="w-5 h-5 text-[#B76E79] flex-shrink-0 mt-0.5" />
                      <span className="text-[#4A2040]/70 text-sm">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>

            {/* After Care */}
            <FadeUp delay={0.1}>
              <div className="bg-white rounded-2xl p-8 border border-[#D4AF37]/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#4A2040]" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                    Setelah Treatment
                  </h3>
                </div>
                <ul className="space-y-3">
                  {afterCareTips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <ChevronRight className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                      <span className="text-[#4A2040]/70 text-sm">{tip}</span>
                    </li>
                  ))}
                </ul>
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
              Kata Mereka Tentang Treatment Ini
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-8">
            {relatedTestimonials.map((testimonial, index) => (
              <FadeUp key={testimonial.id} delay={index * 0.1}>
                <div className="bg-[#FDF5F0] rounded-2xl p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#D4AF37] fill-current" />
                    ))}
                  </div>
                  <p className="text-[#4A2040]/70 italic mb-6 leading-relaxed">
                    &quot;{testimonial.content}&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#B76E79] to-[#D4AF37] flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-[#4A2040]">{testimonial.name}</p>
                      <p className="text-sm text-[#4A2040]/60">{testimonial.treatment}</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#FDF5F0]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#B76E79]/10 flex items-center justify-center">
              <HelpCircle className="w-8 h-8 text-[#B76E79]" />
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#4A2040] mb-4"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Pertanyaan Umum
            </h2>
            <p className="text-[#4A2040]/60">
              Jawaban untuk pertanyaan yang sering diajukan tentang {service.name}
            </p>
          </FadeUp>

          <div className="space-y-4">
            {serviceGenericFaqs.map((faq, index) => (
              <FadeUp key={index} delay={index * 0.05}>
                <div className="bg-white rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-[#F8E8E8]/50 transition-colors"
                  >
                    <span className="text-[#4A2040] font-medium pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#B76E79] flex-shrink-0 transition-transform ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-[#4A2040]/60 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp className="text-center mb-12">
              <h2
                className="text-3xl font-bold text-[#4A2040] mb-4"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                Layanan Serupa
              </h2>
              <p className="text-[#4A2040]/60">
                Treatment lain yang mungkin cocok untuk Anda
              </p>
            </FadeUp>

            <StaggerContainer className="grid md:grid-cols-3 gap-8">
              {relatedServices.map((s) => {
                const Icon = iconMap[s.icon] || Sparkles;
                return (
                  <StaggerItem key={s.id}>
                    <HoverScale>
                      <Link href={`/layanan/${s.slug}`}>
                        <div className="bg-[#FDF5F0] rounded-2xl overflow-hidden hover:shadow-xl transition-all group h-full">
                          <div className="aspect-video bg-gradient-to-br from-[#B76E79]/20 to-[#D4AF37]/20 flex items-center justify-center">
                            <Icon className="w-12 h-12 text-[#B76E79]" />
                          </div>
                          <div className="p-6">
                            <h3
                              className="text-lg font-semibold text-[#4A2040] mb-2"
                              style={{ fontFamily: "var(--font-cormorant), serif" }}
                            >
                              {s.name}
                            </h3>
                            <p className="text-sm text-[#4A2040]/60 mb-3 line-clamp-2">{s.shortDescription}</p>
                            <div className="flex items-center justify-between">
                              <p className="text-[#B76E79] font-semibold">{s.price}</p>
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
          </div>
        </section>
      )}

      {/* Other Popular Services */}
      <section className="py-20 bg-[#4A2040]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/20 rounded-full text-sm text-[#D4AF37] font-medium mb-4">
              <Star className="w-4 h-4 fill-current" />
              Populer
            </span>
            <h2
              className="text-3xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Layanan Populer Lainnya
            </h2>
          </FadeUp>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {otherServices.map((s) => {
              const Icon = iconMap[s.icon] || Sparkles;
              return (
                <StaggerItem key={s.id}>
                  <Link href={`/layanan/${s.slug}`}>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all group">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-xl bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-7 h-7 text-[#D4AF37]" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-white mb-1" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                            {s.name}
                          </h3>
                          <p className="text-white/60 text-sm mb-3 line-clamp-2">{s.shortDescription}</p>
                          <div className="flex items-center justify-between">
                            <p className="text-[#D4AF37] font-semibold">{s.price}</p>
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

          <FadeUp className="text-center mt-8">
            <Link
              href="/layanan"
              className="inline-flex items-center gap-2 text-white/80 font-medium hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Lihat Semua Layanan
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#B76E79] to-[#D4AF37]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <Sparkles className="w-16 h-16 text-white/80 mx-auto mb-6" />
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Siap Mencoba {service.name}?
            </h2>
            <p className="text-white/80 mb-8 text-lg max-w-2xl mx-auto">
              Dapatkan konsultasi gratis dan penawaran terbaik untuk treatment ini. Tim dokter kami siap membantu Anda mendapatkan hasil terbaik.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/booking"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#4A2040] rounded-lg font-medium hover:bg-[#FDF5F0] transition-colors"
              >
                <Calendar className="w-5 h-5" />
                Reservasi Sekarang
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
              Konsultasi pertama GRATIS! • Hasil natural dijamin
            </p>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
