"use client";

import Link from "next/link";
import { Sparkles, Clock, Check, Tag, ArrowRight } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/MotionWrapper";
import { promos } from "@/data/promos";

export default function PromoPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#B76E79] to-[#D4AF37]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white font-medium mb-6">
              <Tag className="w-4 h-4" />
              Penawaran Spesial
            </span>
            <h1
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Promo & Paket Spesial
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              Dapatkan penawaran terbaik untuk treatment kecantikan impian Anda. Jangan lewatkan kesempatan untuk tampil cantik dengan harga spesial!
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Featured Promos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#4A2040] mb-4"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Promo Bulan Ini
            </h2>
            <p className="text-[#4A2040]/60">
              Penawaran terbatas yang tidak boleh Anda lewatkan
            </p>
          </FadeUp>

          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {promos.filter(p => p.featured).map((promo) => (
              <StaggerItem key={promo.id}>
                <div className="bg-gradient-to-br from-[#FDF5F0] to-[#F8E8E8] rounded-2xl overflow-hidden border-2 border-[#D4AF37] group hover:shadow-xl transition-all">
                  {/* Badge */}
                  <div className="bg-[#D4AF37] px-4 py-2 text-center">
                    <span className="text-white font-bold">HEMAT {promo.discount}</span>
                  </div>

                  <div className="p-8">
                    <h3
                      className="text-2xl font-bold text-[#4A2040] mb-2"
                      style={{ fontFamily: "var(--font-cormorant), serif" }}
                    >
                      {promo.title}
                    </h3>
                    <p className="text-[#4A2040]/60 mb-6">{promo.description}</p>

                    {/* Services included */}
                    <div className="mb-6">
                      <p className="text-sm text-[#4A2040]/60 mb-2">Termasuk:</p>
                      <div className="flex flex-wrap gap-2">
                        {promo.services.map((service, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-white text-[#4A2040] text-sm rounded-full"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-4xl font-bold text-[#B76E79]">
                        Rp {promo.discountPrice.toLocaleString('id-ID')}
                      </span>
                      <span className="text-xl text-[#4A2040]/40 line-through">
                        Rp {promo.originalPrice.toLocaleString('id-ID')}
                      </span>
                    </div>

                    {/* Terms */}
                    <div className="mb-6 p-4 bg-white rounded-xl">
                      <p className="text-xs text-[#4A2040]/60 font-medium mb-2">Syarat & Ketentuan:</p>
                      <ul className="space-y-1">
                        {promo.terms.map((term, index) => (
                          <li key={index} className="flex items-start gap-2 text-xs text-[#4A2040]/60">
                            <Check className="w-3 h-3 text-[#B76E79] mt-0.5 flex-shrink-0" />
                            {term}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Valid until */}
                    <div className="flex items-center gap-2 text-sm text-[#4A2040]/60 mb-6">
                      <Clock className="w-4 h-4" />
                      Berlaku hingga {promo.validUntil}
                    </div>

                    <Link
                      href="/booking"
                      className="block w-full text-center py-4 bg-gradient-to-r from-[#B76E79] to-[#D4AF37] text-white rounded-xl font-medium hover:shadow-lg transition-all"
                    >
                      Klaim Promo Sekarang
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Other Promos */}
      <section className="py-20 bg-[#FDF5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#4A2040] mb-4"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Promo Lainnya
            </h2>
          </FadeUp>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {promos.filter(p => !p.featured).map((promo) => (
              <StaggerItem key={promo.id}>
                <div className="bg-white rounded-2xl p-6 h-full hover:shadow-xl transition-all group">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-[#B76E79]/10 text-[#B76E79] text-sm font-medium rounded-full">
                      {promo.discount} OFF
                    </span>
                    <Clock className="w-4 h-4 text-[#4A2040]/40" />
                  </div>

                  <h3
                    className="text-xl font-bold text-[#4A2040] mb-2"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    {promo.title}
                  </h3>
                  <p className="text-[#4A2040]/60 text-sm mb-4">{promo.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {promo.services.slice(0, 2).map((service, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-[#F8E8E8] text-[#4A2040]/80 text-xs rounded-lg"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs text-[#4A2040]/40 mb-4">
                    Berlaku hingga {promo.validUntil}
                  </p>

                  <Link
                    href="/booking"
                    className="inline-flex items-center gap-2 text-[#B76E79] font-medium text-sm group-hover:gap-3 transition-all"
                  >
                    Klaim Promo <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#4A2040]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <Sparkles className="w-12 h-12 text-[#D4AF37] mx-auto mb-6" />
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Ingin Promo Eksklusif?
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Daftar sekarang untuk mendapatkan informasi promo terbaru dan penawaran eksklusif langsung ke WhatsApp Anda.
            </p>
            <a
              href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20mendapatkan%20info%20promo%20eksklusif"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#B76E79] text-white rounded-lg font-medium hover:shadow-xl transition-all"
            >
              Daftar via WhatsApp
              <ArrowRight className="w-5 h-5" />
            </a>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
