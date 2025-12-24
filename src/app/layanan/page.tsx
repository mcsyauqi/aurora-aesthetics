"use client";

import { useState } from "react";
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
  Search
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

export default function LayananPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = getServicesByCategory(activeCategory).filter(
    (service) =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#F8E8E8] to-[#FDF5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center">
            <h1
              className="text-4xl md:text-5xl font-bold text-[#4A2040] mb-4"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Layanan Kami
            </h1>
            <p className="text-[#4A2040]/70 max-w-2xl mx-auto text-lg">
              Berbagai perawatan kecantikan premium dengan teknologi terkini untuk hasil yang natural dan tahan lama.
            </p>
          </FadeUp>
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
          {filteredServices.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-[#4A2040]/60">Tidak ada layanan yang ditemukan.</p>
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
                              <span className="absolute top-4 right-4 px-3 py-1 bg-[#D4AF37] text-white text-xs rounded-full font-medium">
                                Populer
                              </span>
                            )}
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
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-[#B76E79] font-semibold">{service.price}</p>
                                <p className="text-xs text-[#4A2040]/40">{service.duration}</p>
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#B76E79] to-[#D4AF37]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Tidak Yakin Layanan Mana yang Cocok?
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Konsultasikan dengan dokter kami untuk rekomendasi perawatan terbaik sesuai kondisi kulit Anda.
            </p>
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#4A2040] rounded-lg font-medium hover:bg-[#FDF5F0] transition-colors"
            >
              Konsultasi Gratis
              <ChevronRight className="w-5 h-5" />
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
