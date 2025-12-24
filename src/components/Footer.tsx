"use client";

import Link from "next/link";
import { Sparkles, Instagram, Facebook, Phone, Mail, MapPin, Clock } from "lucide-react";

const services = [
  { name: "Facial Treatment", href: "/layanan?category=facial" },
  { name: "Laser Treatment", href: "/layanan?category=laser" },
  { name: "Botox & Filler", href: "/layanan/botox-filler" },
  { name: "Body Treatment", href: "/layanan?category=body" },
  { name: "Konsultasi", href: "/booking" },
];

const information = [
  { name: "Tentang Kami", href: "/tentang" },
  { name: "Tim Dokter", href: "/dokter" },
  { name: "Promo", href: "/promo" },
  { name: "Galeri", href: "/galeri" },
  { name: "FAQ", href: "/kontak#faq" },
];

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/auroraesthetics" },
  { name: "Facebook", icon: Facebook, href: "https://facebook.com/auroraesthetics" },
  { name: "TikTok", icon: TikTokIcon, href: "https://tiktok.com/@auroraesthetics" },
  { name: "WhatsApp", icon: WhatsAppIcon, href: "https://wa.me/6281234567890" },
];

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#4A2040] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#B76E79] to-[#D4AF37] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <span
                  className="text-xl font-semibold text-white block leading-tight"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  Aurora
                </span>
                <span
                  className="text-xs text-[#D4AF37] tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-lato), sans-serif" }}
                >
                  Aesthetics
                </span>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              Klinik kecantikan premium dengan teknologi terkini dan dokter berpengalaman untuk hasil yang natural.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#B76E79] transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3
              className="text-lg font-semibold mb-6 text-[#D4AF37]"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Layanan
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-white/70 hover:text-[#B76E79] transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information Column */}
          <div>
            <h3
              className="text-lg font-semibold mb-6 text-[#D4AF37]"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Informasi
            </h3>
            <ul className="space-y-3">
              {information.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-[#B76E79] transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3
              className="text-lg font-semibold mb-6 text-[#D4AF37]"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Kontak
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#B76E79] flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">
                  Jl. Sudirman No. 123, Jakarta Selatan
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#B76E79] flex-shrink-0" />
                <a href="tel:02112345678" className="text-white/70 hover:text-[#B76E79] transition-colors text-sm">
                  (021) 1234-5678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <WhatsAppIcon className="w-5 h-5 text-[#B76E79] flex-shrink-0" />
                <a href="https://wa.me/6281234567890" className="text-white/70 hover:text-[#B76E79] transition-colors text-sm">
                  0812-3456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#B76E79] flex-shrink-0" />
                <a href="mailto:hello@auroraesthetics.id" className="text-white/70 hover:text-[#B76E79] transition-colors text-sm">
                  hello@auroraesthetics.id
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#B76E79] flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">
                  Senin - Sabtu: 09:00 - 21:00
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              &copy; 2025 Aurora Aesthetics. All rights reserved.
            </p>
            <p className="text-white/60 text-sm text-center md:text-right">
              Website ini dibuat dengan <span className="text-red-400">&hearts;</span> oleh{" "}
              <a
                href="https://creativism.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4AF37] hover:text-[#B76E79] transition-colors"
              >
                Creativism Digital Marketing Agency
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
