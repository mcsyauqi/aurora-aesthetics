"use client";

import Link from "next/link";
import { Sparkles, Award, GraduationCap, Calendar, ArrowRight } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/MotionWrapper";
import { doctors } from "@/data/doctors";

export default function DokterPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#F8E8E8] to-[#FDF5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm text-[#B76E79] font-medium shadow-sm mb-6">
              <Sparkles className="w-4 h-4" />
              Tim Profesional
            </span>
            <h1
              className="text-4xl md:text-5xl font-bold text-[#4A2040] mb-6"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Dokter Berpengalaman Kami
            </h1>
            <p className="text-[#4A2040]/70 max-w-2xl mx-auto text-lg">
              Tim dokter spesialis kami memiliki sertifikasi internasional dan pengalaman bertahun-tahun dalam bidang aesthetic medicine.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid md:grid-cols-2 gap-12">
            {doctors.map((doctor) => (
              <StaggerItem key={doctor.id}>
                <div className="bg-[#FDF5F0] rounded-2xl overflow-hidden group">
                  <div className="grid md:grid-cols-5 gap-0">
                    {/* Image */}
                    <div className="md:col-span-2">
                      <div className="aspect-[3/4] md:h-full bg-gradient-to-br from-[#B76E79]/20 to-[#D4AF37]/20 flex items-center justify-center">
                        <div className="text-center p-4">
                          <div className="w-24 h-24 rounded-full bg-[#B76E79]/10 flex items-center justify-center mx-auto mb-2">
                            <span className="text-3xl font-bold text-[#B76E79]">
                              {doctor.name.charAt(4)}
                            </span>
                          </div>
                          <p className="text-sm text-[#4A2040]/40">Doctor Photo</p>
                        </div>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="md:col-span-3 p-8">
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 bg-[#B76E79]/10 text-[#B76E79] text-xs rounded-full font-medium mb-2">
                          {doctor.title}
                        </span>
                        <h2
                          className="text-2xl font-bold text-[#4A2040]"
                          style={{ fontFamily: "var(--font-cormorant), serif" }}
                        >
                          {doctor.name}
                        </h2>
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
                              className="px-2 py-1 bg-white text-[#4A2040]/80 text-xs rounded-lg"
                            >
                              {cert}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Our Doctors */}
      <section className="py-20 bg-[#FDF5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#4A2040] mb-4"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Mengapa Mempercayakan Kami?
            </h2>
          </FadeUp>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            <StaggerItem>
              <div className="bg-white rounded-2xl p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-[#B76E79]/10 flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-[#B76E79]" />
                </div>
                <h3
                  className="text-xl font-semibold text-[#4A2040] mb-3"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  Sertifikasi Internasional
                </h3>
                <p className="text-[#4A2040]/60 text-sm">
                  Semua dokter kami memiliki sertifikasi dari institusi terkemuka di dunia.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white rounded-2xl p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <h3
                  className="text-xl font-semibold text-[#4A2040] mb-3"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  Pelatihan Berkelanjutan
                </h3>
                <p className="text-[#4A2040]/60 text-sm">
                  Tim kami rutin mengikuti pelatihan untuk update teknologi dan teknik terbaru.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white rounded-2xl p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-[#B76E79]/10 flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-8 h-8 text-[#B76E79]" />
                </div>
                <h3
                  className="text-xl font-semibold text-[#4A2040] mb-3"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  Pengalaman Bertahun-tahun
                </h3>
                <p className="text-[#4A2040]/60 text-sm">
                  Dengan pengalaman gabungan lebih dari 40 tahun dalam aesthetic medicine.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
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
              Konsultasi dengan Dokter Kami
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Dapatkan konsultasi gratis untuk menentukan treatment terbaik sesuai kondisi kulit Anda.
            </p>
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#B76E79] text-white rounded-lg font-medium hover:shadow-xl transition-all"
            >
              Reservasi Konsultasi
              <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
