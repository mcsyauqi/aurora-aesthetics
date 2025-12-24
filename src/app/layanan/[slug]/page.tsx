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
  Clock,
  Check,
  ArrowLeft,
  ArrowRight
} from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/MotionWrapper";
import { getServiceBySlug, getPopularServices } from "@/data/services";

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

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = getServiceBySlug(slug);
  const otherServices = getPopularServices().filter((s) => s.slug !== slug).slice(0, 3);

  if (!service) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#4A2040] mb-4">Layanan tidak ditemukan</h1>
          <Link href="/layanan" className="text-[#B76E79] hover:underline">
            Kembali ke daftar layanan
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
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-[#4A2040]/60 hover:text-[#B76E79]">Beranda</Link>
            <ChevronRight className="w-4 h-4 text-[#4A2040]/40" />
            <Link href="/layanan" className="text-[#4A2040]/60 hover:text-[#B76E79]">Layanan</Link>
            <ChevronRight className="w-4 h-4 text-[#4A2040]/40" />
            <span className="text-[#B76E79] font-medium">{service.name}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-[#F8E8E8] to-[#FDF5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-[#B76E79]/20 to-[#D4AF37]/20 flex items-center justify-center">
                <IconComponent className="w-24 h-24 text-[#B76E79]" />
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="space-y-6">
                {service.popular && (
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37] text-white rounded-full text-sm font-medium">
                    <Sparkles className="w-4 h-4" />
                    Layanan Populer
                  </span>
                )}
                <h1
                  className="text-3xl md:text-4xl font-bold text-[#4A2040]"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  {service.name}
                </h1>
                <p className="text-[#4A2040]/70 text-lg leading-relaxed">
                  {service.fullDescription}
                </p>
                <div className="flex flex-wrap gap-6">
                  <div>
                    <p className="text-sm text-[#4A2040]/60">Harga mulai</p>
                    <p className="text-2xl font-bold text-[#B76E79]">{service.price}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#4A2040]/60">Durasi</p>
                    <div className="flex items-center gap-2 text-[#4A2040]">
                      <Clock className="w-5 h-5" />
                      <span className="font-medium">{service.duration}</span>
                    </div>
                  </div>
                </div>
                <Link
                  href="/booking"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#B76E79] to-[#D4AF37] text-white rounded-lg font-medium hover:shadow-xl transition-all"
                >
                  Reservasi Sekarang
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Benefits & Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Benefits */}
            <FadeUp>
              <div className="bg-[#FDF5F0] rounded-2xl p-8">
                <h2
                  className="text-2xl font-bold text-[#4A2040] mb-6"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  Manfaat Treatment
                </h2>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#B76E79]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-[#B76E79]" />
                      </div>
                      <span className="text-[#4A2040]/80">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>

            {/* Process */}
            <FadeUp delay={0.1}>
              <div className="bg-[#4A2040] rounded-2xl p-8 text-white">
                <h2
                  className="text-2xl font-bold mb-6"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  Proses Treatment
                </h2>
                <ol className="space-y-4">
                  {service.process.map((step, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center flex-shrink-0 font-bold text-[#4A2040]">
                        {index + 1}
                      </div>
                      <span className="text-white/80 pt-1">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 bg-[#FDF5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <h2
              className="text-3xl font-bold text-[#4A2040] mb-4"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Layanan Lainnya
            </h2>
          </FadeUp>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {otherServices.map((s) => {
              const Icon = iconMap[s.icon] || Sparkles;
              return (
                <StaggerItem key={s.id}>
                  <Link href={`/layanan/${s.slug}`}>
                    <div className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all group">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#B76E79] to-[#D4AF37] flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3
                        className="text-lg font-semibold text-[#4A2040] mb-2"
                        style={{ fontFamily: "var(--font-cormorant), serif" }}
                      >
                        {s.name}
                      </h3>
                      <p className="text-sm text-[#4A2040]/60 mb-3 line-clamp-2">{s.shortDescription}</p>
                      <p className="text-[#B76E79] font-medium">{s.price}</p>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          <FadeUp className="text-center mt-8">
            <Link
              href="/layanan"
              className="inline-flex items-center gap-2 text-[#B76E79] font-medium hover:text-[#4A2040] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Lihat Semua Layanan
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#B76E79] to-[#D4AF37]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Siap Mencoba {service.name}?
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Dapatkan konsultasi gratis dan penawaran terbaik untuk treatment ini.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/booking"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#4A2040] rounded-lg font-medium hover:bg-[#FDF5F0] transition-colors"
              >
                Reservasi Sekarang
              </Link>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-[#4A2040] transition-colors"
              >
                Chat via WhatsApp
              </a>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
