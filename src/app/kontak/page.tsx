"use client";

import Link from "next/link";
import { Sparkles, MapPin, Phone, Mail, Clock, MessageCircle, ChevronDown, ArrowRight } from "lucide-react";
import { useState } from "react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/MotionWrapper";

const faqs = [
  {
    question: "Apakah konsultasi di Aurora Aesthetics gratis?",
    answer: "Ya, kami menyediakan konsultasi gratis dengan dokter untuk semua treatment. Anda dapat mendiskusikan kondisi kulit dan kebutuhan Anda tanpa biaya apapun."
  },
  {
    question: "Berapa lama waktu yang dibutuhkan untuk melihat hasil treatment?",
    answer: "Waktu hasil bervariasi tergantung jenis treatment. Beberapa treatment seperti facial dapat memberikan hasil langsung, sementara treatment seperti laser atau botox membutuhkan waktu 1-2 minggu untuk hasil optimal."
  },
  {
    question: "Apakah treatment di Aurora Aesthetics aman?",
    answer: "Semua treatment kami dilakukan oleh dokter bersertifikasi dengan menggunakan peralatan berstandar internasional. Keamanan klien adalah prioritas utama kami."
  },
  {
    question: "Bagaimana cara melakukan reservasi?",
    answer: "Anda dapat melakukan reservasi melalui website kami di halaman Booking, menghubungi kami via WhatsApp di 0812-3456-7890, atau telepon ke (021) 1234-5678."
  },
  {
    question: "Apakah ada jaminan hasil treatment?",
    answer: "Kami memberikan garansi kepuasan dengan follow-up treatment gratis jika hasil tidak sesuai harapan. Konsultasikan kembali dengan dokter kami untuk evaluasi."
  },
  {
    question: "Metode pembayaran apa saja yang diterima?",
    answer: "Kami menerima berbagai metode pembayaran termasuk tunai, kartu kredit/debit, transfer bank, dan cicilan 0% dengan kartu kredit tertentu."
  },
];

const contactInfo = [
  {
    icon: MapPin,
    title: "Alamat",
    content: "Jl. Sudirman No. 123, Jakarta Selatan 12190",
    link: "https://maps.google.com/?q=Jl.+Sudirman+No.+123+Jakarta+Selatan",
  },
  {
    icon: Phone,
    title: "Telepon",
    content: "(021) 1234-5678",
    link: "tel:02112345678",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    content: "0812-3456-7890",
    link: "https://wa.me/6281234567890",
  },
  {
    icon: Mail,
    title: "Email",
    content: "hello@auroraesthetics.id",
    link: "mailto:hello@auroraesthetics.id",
  },
];

export default function KontakPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#F8E8E8] to-[#FDF5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm text-[#B76E79] font-medium shadow-sm mb-6">
              <Sparkles className="w-4 h-4" />
              Hubungi Kami
            </span>
            <h1
              className="text-4xl md:text-5xl font-bold text-[#4A2040] mb-6"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Kami Siap Membantu Anda
            </h1>
            <p className="text-[#4A2040]/70 max-w-2xl mx-auto text-lg">
              Punya pertanyaan atau ingin konsultasi? Jangan ragu untuk menghubungi kami kapan saja.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Contact Info & Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <FadeUp>
              <div className="space-y-8">
                <div>
                  <h2
                    className="text-2xl md:text-3xl font-bold text-[#4A2040] mb-6"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    Informasi Kontak
                  </h2>
                  <p className="text-[#4A2040]/60 mb-8">
                    Kunjungi klinik kami atau hubungi melalui channel berikut:
                  </p>
                </div>

                <StaggerContainer className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <StaggerItem key={index}>
                      <a
                        href={info.link}
                        target={info.link.startsWith("http") ? "_blank" : undefined}
                        rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex items-start gap-4 p-4 bg-[#FDF5F0] rounded-xl hover:shadow-lg transition-shadow group"
                      >
                        <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center group-hover:bg-[#B76E79]/10 transition-colors">
                          <info.icon className="w-5 h-5 text-[#B76E79]" />
                        </div>
                        <div>
                          <p className="text-sm text-[#4A2040]/60">{info.title}</p>
                          <p className="text-[#4A2040] font-medium">{info.content}</p>
                        </div>
                      </a>
                    </StaggerItem>
                  ))}
                </StaggerContainer>

                {/* Opening Hours */}
                <div className="bg-[#4A2040] rounded-2xl p-8 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-6 h-6 text-[#D4AF37]" />
                    <h3
                      className="text-xl font-semibold"
                      style={{ fontFamily: "var(--font-cormorant), serif" }}
                    >
                      Jam Operasional
                    </h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-white/70">Senin - Jumat</span>
                      <span className="font-medium">09:00 - 21:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Sabtu</span>
                      <span className="font-medium">09:00 - 21:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Minggu</span>
                      <span className="font-medium text-[#D4AF37]">Tutup</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Map */}
            <FadeUp delay={0.1}>
              <div className="h-full min-h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#B76E79]/20 to-[#D4AF37]/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="w-16 h-16 text-[#B76E79] mx-auto mb-4" />
                  <p className="text-[#4A2040]/60 mb-4">Google Maps Embed</p>
                  <p className="text-sm text-[#4A2040]/40">Jl. Sudirman No. 123, Jakarta Selatan</p>
                  <a
                    href="https://maps.google.com/?q=Jl.+Sudirman+No.+123+Jakarta+Selatan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-[#B76E79] font-medium hover:text-[#4A2040] transition-colors"
                  >
                    Buka di Google Maps <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-[#FDF5F0]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#4A2040] mb-4"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-[#4A2040]/60">
              Temukan jawaban untuk pertanyaan umum tentang layanan kami
            </p>
          </FadeUp>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FadeUp key={index} delay={index * 0.05}>
                <div className="bg-white rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 text-left"
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#B76E79] to-[#D4AF37]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Masih Punya Pertanyaan?
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Tim kami siap membantu Anda. Hubungi kami sekarang!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#4A2040] rounded-lg font-medium hover:bg-[#FDF5F0] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Chat via WhatsApp
              </a>
              <Link
                href="/booking"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-[#4A2040] transition-colors"
              >
                Reservasi Sekarang
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
