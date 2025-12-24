"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/MotionWrapper";

const galleryItems = [
  { id: 1, category: "facial", treatment: "Facial Hydrating Glow", description: "Transformasi kulit kusam menjadi glowing" },
  { id: 2, category: "facial", treatment: "Chemical Peeling", description: "Menghilangkan flek hitam dan hiperpigmentasi" },
  { id: 3, category: "injection", treatment: "Botox & Filler", description: "Mengurangi kerutan dan menambah volume" },
  { id: 4, category: "injection", treatment: "PRP Vampire Facial", description: "Regenerasi kulit untuk tampilan awet muda" },
  { id: 5, category: "laser", treatment: "Laser Hair Removal", description: "Kulit halus tanpa bulu permanen" },
  { id: 6, category: "body", treatment: "Body Slimming", description: "Mengurangi lemak dan mengencangkan kulit" },
  { id: 7, category: "facial", treatment: "Microneedling", description: "Menyamarkan bekas jerawat dan pori-pori" },
  { id: 8, category: "facial", treatment: "Acne Treatment", description: "Kulit bebas jerawat dan bekas jerawat" },
  { id: 9, category: "injection", treatment: "Mesotherapy", description: "Kulit glowing dengan nutrisi intensif" },
];

const categories = [
  { id: "all", name: "Semua" },
  { id: "facial", name: "Facial" },
  { id: "injection", name: "Injeksi" },
  { id: "laser", name: "Laser" },
  { id: "body", name: "Body" },
];

export default function GaleriPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems = activeCategory === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (id: number) => setSelectedImage(id);
  const closeLightbox = () => setSelectedImage(null);

  const navigateLightbox = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage);
    let newIndex;
    if (direction === "prev") {
      newIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === filteredItems.length - 1 ? 0 : currentIndex + 1;
    }
    setSelectedImage(filteredItems[newIndex].id);
  };

  const selectedItem = galleryItems.find(item => item.id === selectedImage);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#F8E8E8] to-[#FDF5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm text-[#B76E79] font-medium shadow-sm mb-6">
              <Sparkles className="w-4 h-4" />
              Before & After
            </span>
            <h1
              className="text-4xl md:text-5xl font-bold text-[#4A2040] mb-6"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Galeri Transformasi
            </h1>
            <p className="text-[#4A2040]/70 max-w-2xl mx-auto text-lg">
              Lihat hasil nyata dari klien kami. Setiap transformasi adalah bukti komitmen kami untuk memberikan hasil terbaik.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-[#F8E8E8] sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
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
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {filteredItems.map((item) => (
              <StaggerItem key={item.id}>
                <motion.div
                  layoutId={`gallery-${item.id}`}
                  onClick={() => openLightbox(item.id)}
                  className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group"
                >
                  {/* Placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#B76E79]/30 to-[#D4AF37]/30 flex items-center justify-center">
                    <div className="text-center text-[#4A2040] p-4">
                      <p className="text-xs opacity-60 mb-1">Before / After</p>
                      <p className="font-medium text-sm">{item.treatment}</p>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#4A2040]/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-center text-white p-4">
                      <p className="font-semibold mb-1">{item.treatment}</p>
                      <p className="text-sm text-white/80">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox("prev"); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox("next"); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.div
              layoutId={`gallery-${selectedImage}`}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-[#FDF5F0] rounded-2xl overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-[#B76E79]/30 to-[#D4AF37]/30 flex items-center justify-center">
                  <div className="text-center text-[#4A2040]">
                    <p className="text-lg opacity-60 mb-2">Before / After</p>
                    <p className="text-2xl font-semibold">{selectedItem.treatment}</p>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3
                    className="text-xl font-bold text-[#4A2040] mb-2"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    {selectedItem.treatment}
                  </h3>
                  <p className="text-[#4A2040]/60">{selectedItem.description}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#B76E79] to-[#D4AF37]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Siap Jadi Bagian dari Transformasi Ini?
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Konsultasikan dengan dokter kami untuk mendapatkan treatment yang tepat untuk Anda.
            </p>
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#4A2040] rounded-lg font-medium hover:bg-[#FDF5F0] transition-colors"
            >
              Mulai Transformasi Anda
              <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
