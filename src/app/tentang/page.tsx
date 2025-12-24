"use client";

import Link from "next/link";
import { Sparkles, Award, Users, Clock, Heart, Target, Shield, ArrowRight } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/MotionWrapper";

const milestones = [
  { year: "2018", title: "Pendirian Aurora Aesthetics", description: "Dimulai dengan visi menghadirkan klinik kecantikan premium dengan standar internasional di Jakarta." },
  { year: "2019", title: "1000 Klien Puas", description: "Dalam satu tahun pertama, kami berhasil melayani lebih dari 1000 klien dengan tingkat kepuasan tinggi." },
  { year: "2020", title: "Ekspansi Layanan", description: "Menambahkan berbagai treatment terbaru dan teknologi canggih untuk melayani kebutuhan klien." },
  { year: "2022", title: "10.000+ Klien", description: "Milestone besar dengan pencapaian lebih dari 10.000 klien yang telah mempercayakan perawatan mereka." },
  { year: "2024", title: "Best Aesthetic Clinic Award", description: "Meraih penghargaan sebagai klinik estetika terbaik di Jakarta dari Indonesian Beauty Awards." },
];

const values = [
  { icon: Heart, title: "Kepedulian", description: "Kami peduli dengan setiap klien dan berkomitmen memberikan hasil terbaik." },
  { icon: Target, title: "Profesionalisme", description: "Tim dokter dan staf yang terlatih dengan standar profesional tinggi." },
  { icon: Shield, title: "Keamanan", description: "Keselamatan dan kenyamanan klien adalah prioritas utama kami." },
  { icon: Award, title: "Kualitas", description: "Menggunakan produk dan teknologi berkualitas tinggi berstandar internasional." },
];

const stats = [
  { value: "15.000+", label: "Klien Puas" },
  { value: "7+", label: "Tahun Pengalaman" },
  { value: "25+", label: "Treatment Premium" },
  { value: "4", label: "Dokter Spesialis" },
];

export default function TentangPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#F8E8E8] to-[#FDF5F0] relative overflow-hidden">
        <div className="absolute inset-0 floral-pattern opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm text-[#B76E79] font-medium shadow-sm mb-6">
                <Sparkles className="w-4 h-4" />
                Tentang Kami
              </span>
              <h1
                className="text-4xl md:text-5xl font-bold text-[#4A2040] mb-6"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                Kecantikan Alami, Hasil Profesional
              </h1>
              <p className="text-[#4A2040]/70 text-lg leading-relaxed mb-8">
                Aurora Aesthetics adalah klinik kecantikan premium yang didirikan pada tahun 2018 dengan visi menghadirkan perawatan estetika berkualitas internasional di Indonesia. Kami percaya bahwa setiap orang berhak tampil cantik dengan cara yang aman dan natural.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <p
                      className="text-3xl font-bold text-[#B76E79]"
                      style={{ fontFamily: "var(--font-cormorant), serif" }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-sm text-[#4A2040]/60">{stat.label}</p>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.2} className="relative">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-[#B76E79]/20 to-[#D4AF37]/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <Sparkles className="w-16 h-16 text-[#B76E79] mx-auto mb-4" />
                  <p className="text-[#4A2040]/60">Clinic Image</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#D4AF37]/20 rounded-full blur-2xl" />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <FadeUp>
              <div className="bg-[#4A2040] rounded-2xl p-8 h-full text-white">
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  Visi Kami
                </h2>
                <p className="text-white/80 leading-relaxed">
                  Menjadi klinik kecantikan terdepan di Indonesia yang menghadirkan standar perawatan estetika internasional, dengan fokus pada keamanan, kenyamanan, dan hasil natural yang meningkatkan kepercayaan diri setiap klien.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="bg-gradient-to-br from-[#B76E79] to-[#D4AF37] rounded-2xl p-8 h-full text-white">
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  Misi Kami
                </h2>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                    Memberikan pelayanan dengan standar keamanan dan kualitas tertinggi
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                    Menghadirkan teknologi dan treatment terkini dari seluruh dunia
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                    Membangun tim dokter dan staf profesional yang terlatih
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                    Menciptakan pengalaman perawatan yang nyaman dan menyenangkan
                  </li>
                </ul>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-[#FDF5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
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
                <div className="bg-white rounded-2xl p-8 h-full text-center hover:shadow-xl transition-shadow">
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
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#4A2040] mb-4"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Perjalanan Kami
            </h2>
          </FadeUp>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#F8E8E8] hidden md:block" />

            {milestones.map((milestone, index) => (
              <FadeUp key={index} delay={index * 0.1}>
                <div className={`relative flex items-center mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="bg-[#FDF5F0] rounded-2xl p-6">
                      <span className="text-[#D4AF37] font-bold text-lg">{milestone.year}</span>
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

      {/* CTA Section */}
      <section className="py-20 bg-[#4A2040]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Bergabunglah dengan Keluarga Aurora
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Jadilah bagian dari 15.000+ klien puas yang telah mempercayakan perawatan kecantikan mereka kepada kami.
            </p>
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#B76E79] text-white rounded-lg font-medium hover:shadow-xl transition-all"
            >
              Mulai Perjalanan Anda
              <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
