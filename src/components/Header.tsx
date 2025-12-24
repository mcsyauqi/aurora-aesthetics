"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Beranda", href: "/" },
  { name: "Layanan", href: "/layanan" },
  { name: "Tentang", href: "/tentang" },
  { name: "Dokter", href: "/dokter" },
  { name: "Promo", href: "/promo" },
  { name: "Galeri", href: "/galeri" },
  { name: "Kontak", href: "/kontak" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#B76E79] to-[#D4AF37] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <span
                className="text-xl font-semibold text-[#4A2040] block leading-tight"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                Aurora
              </span>
              <span
                className="text-xs text-[#B76E79] tracking-widest uppercase"
                style={{ fontFamily: "var(--font-lato), sans-serif" }}
              >
                Aesthetics
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[#4A2040] hover:text-[#B76E79] transition-colors text-sm font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#B76E79] transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:02112345678"
              className="flex items-center gap-2 text-[#4A2040] hover:text-[#B76E79] transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>(021) 1234-5678</span>
            </a>
            <Link
              href="/booking"
              className="px-6 py-2.5 bg-gradient-to-r from-[#B76E79] to-[#D4AF37] text-white rounded-lg font-medium text-sm hover:shadow-lg hover:shadow-[#B76E79]/25 transition-all hover:scale-105 active:scale-95"
            >
              Reservasi
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#4A2040] hover:text-[#B76E79] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-[#F8E8E8] overflow-hidden"
          >
            <nav className="max-w-7xl mx-auto px-4 py-6 space-y-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 px-4 text-[#4A2040] hover:text-[#B76E79] hover:bg-[#F8E8E8] rounded-lg transition-all font-medium"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                className="pt-4"
              >
                <Link
                  href="/booking"
                  onClick={() => setIsOpen(false)}
                  className="block w-full py-3 px-4 bg-gradient-to-r from-[#B76E79] to-[#D4AF37] text-white text-center rounded-lg font-medium hover:shadow-lg transition-all"
                >
                  Reservasi Sekarang
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (navItems.length + 1) * 0.05 }}
                className="pt-2"
              >
                <a
                  href="tel:02112345678"
                  className="flex items-center justify-center gap-2 py-3 px-4 text-[#4A2040] hover:text-[#B76E79] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>(021) 1234-5678</span>
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
