"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Check, Calendar, Clock, ArrowRight, Phone, MessageCircle, Home } from "lucide-react";
import { FadeUp } from "@/components/MotionWrapper";
import { services } from "@/data/services";

const bookingSchema = z.object({
  namaLengkap: z.string().min(3, "Nama minimal 3 karakter"),
  whatsapp: z
    .string()
    .min(10, "Nomor WhatsApp minimal 10 digit")
    .regex(/^[0-9+]+$/, "Nomor WhatsApp tidak valid"),
  email: z.string().email("Format email tidak valid"),
  layanan: z.string().min(1, "Pilih layanan yang diinginkan"),
  tanggal: z.string().min(1, "Pilih tanggal preferensi"),
  waktu: z.string().min(1, "Pilih waktu preferensi"),
  pesan: z.string().optional(),
  setuju: z.boolean().refine((val) => val === true, "Anda harus menyetujui syarat dan ketentuan"),
});

type BookingFormData = z.infer<typeof bookingSchema>;

const timeSlots = [
  "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"
];

export default function BookingPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form data:", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
  };

  // Get minimum date (tomorrow)
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#F8E8E8] to-[#FDF5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm text-[#B76E79] font-medium shadow-sm mb-6">
              <Calendar className="w-4 h-4" />
              Reservasi Online
            </span>
            <h1
              className="text-4xl md:text-5xl font-bold text-[#4A2040] mb-4"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Reservasi Treatment
            </h1>
            <p className="text-[#4A2040]/70 max-w-2xl mx-auto text-lg">
              Isi form di bawah ini dan tim kami akan menghubungi Anda untuk konfirmasi jadwal.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center py-16"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#B76E79] to-[#D4AF37] flex items-center justify-center mx-auto mb-8">
                  <Check className="w-12 h-12 text-white" />
                </div>
                <h2
                  className="text-3xl font-bold text-[#4A2040] mb-4"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  Reservasi Berhasil Dikirim!
                </h2>
                <p className="text-[#4A2040]/60 mb-8 max-w-md mx-auto">
                  Tim kami akan menghubungi Anda dalam 1x24 jam untuk konfirmasi jadwal treatment Anda.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#4A2040] text-white rounded-lg font-medium hover:bg-[#B76E79] transition-colors"
                  >
                    <Home className="w-5 h-5" />
                    Kembali ke Beranda
                  </Link>
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#B76E79] text-[#B76E79] rounded-lg font-medium hover:bg-[#B76E79] hover:text-white transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Hubungi via WhatsApp
                  </a>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <FadeUp>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="bg-[#FDF5F0] rounded-2xl p-8">
                      <h2
                        className="text-xl font-semibold text-[#4A2040] mb-6"
                        style={{ fontFamily: "var(--font-cormorant), serif" }}
                      >
                        Data Diri
                      </h2>

                      <div className="space-y-4">
                        {/* Nama Lengkap */}
                        <div>
                          <label className="block text-sm font-medium text-[#4A2040] mb-2">
                            Nama Lengkap <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            {...register("namaLengkap")}
                            placeholder="Masukkan nama lengkap Anda"
                            className={`w-full px-4 py-3 rounded-xl border ${
                              errors.namaLengkap ? "border-red-500" : "border-[#F8E8E8]"
                            } focus:border-[#B76E79] focus:ring-2 focus:ring-[#B76E79]/20 outline-none transition-all bg-white`}
                          />
                          {errors.namaLengkap && (
                            <p className="text-red-500 text-sm mt-1">{errors.namaLengkap.message}</p>
                          )}
                        </div>

                        {/* WhatsApp */}
                        <div>
                          <label className="block text-sm font-medium text-[#4A2040] mb-2">
                            Nomor WhatsApp <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4A2040]/40" />
                            <input
                              type="tel"
                              {...register("whatsapp")}
                              placeholder="08123456789"
                              className={`w-full pl-12 pr-4 py-3 rounded-xl border ${
                                errors.whatsapp ? "border-red-500" : "border-[#F8E8E8]"
                              } focus:border-[#B76E79] focus:ring-2 focus:ring-[#B76E79]/20 outline-none transition-all bg-white`}
                            />
                          </div>
                          {errors.whatsapp && (
                            <p className="text-red-500 text-sm mt-1">{errors.whatsapp.message}</p>
                          )}
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-sm font-medium text-[#4A2040] mb-2">
                            Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            {...register("email")}
                            placeholder="email@example.com"
                            className={`w-full px-4 py-3 rounded-xl border ${
                              errors.email ? "border-red-500" : "border-[#F8E8E8]"
                            } focus:border-[#B76E79] focus:ring-2 focus:ring-[#B76E79]/20 outline-none transition-all bg-white`}
                          />
                          {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#FDF5F0] rounded-2xl p-8">
                      <h2
                        className="text-xl font-semibold text-[#4A2040] mb-6"
                        style={{ fontFamily: "var(--font-cormorant), serif" }}
                      >
                        Detail Reservasi
                      </h2>

                      <div className="space-y-4">
                        {/* Layanan */}
                        <div>
                          <label className="block text-sm font-medium text-[#4A2040] mb-2">
                            Pilih Layanan <span className="text-red-500">*</span>
                          </label>
                          <select
                            {...register("layanan")}
                            className={`w-full px-4 py-3 rounded-xl border ${
                              errors.layanan ? "border-red-500" : "border-[#F8E8E8]"
                            } focus:border-[#B76E79] focus:ring-2 focus:ring-[#B76E79]/20 outline-none transition-all bg-white appearance-none cursor-pointer`}
                          >
                            <option value="">Pilih layanan yang diinginkan</option>
                            {services.map((service) => (
                              <option key={service.id} value={service.name}>
                                {service.name} - {service.price}
                              </option>
                            ))}
                            <option value="Konsultasi">Konsultasi (Gratis)</option>
                          </select>
                          {errors.layanan && (
                            <p className="text-red-500 text-sm mt-1">{errors.layanan.message}</p>
                          )}
                        </div>

                        {/* Tanggal & Waktu */}
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-[#4A2040] mb-2">
                              Tanggal Preferensi <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4A2040]/40" />
                              <input
                                type="date"
                                {...register("tanggal")}
                                min={minDate}
                                className={`w-full pl-12 pr-4 py-3 rounded-xl border ${
                                  errors.tanggal ? "border-red-500" : "border-[#F8E8E8]"
                                } focus:border-[#B76E79] focus:ring-2 focus:ring-[#B76E79]/20 outline-none transition-all bg-white`}
                              />
                            </div>
                            {errors.tanggal && (
                              <p className="text-red-500 text-sm mt-1">{errors.tanggal.message}</p>
                            )}
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-[#4A2040] mb-2">
                              Waktu Preferensi <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                              <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4A2040]/40" />
                              <select
                                {...register("waktu")}
                                className={`w-full pl-12 pr-4 py-3 rounded-xl border ${
                                  errors.waktu ? "border-red-500" : "border-[#F8E8E8]"
                                } focus:border-[#B76E79] focus:ring-2 focus:ring-[#B76E79]/20 outline-none transition-all bg-white appearance-none cursor-pointer`}
                              >
                                <option value="">Pilih waktu</option>
                                {timeSlots.map((time) => (
                                  <option key={time} value={time}>
                                    {time}
                                  </option>
                                ))}
                              </select>
                            </div>
                            {errors.waktu && (
                              <p className="text-red-500 text-sm mt-1">{errors.waktu.message}</p>
                            )}
                          </div>
                        </div>

                        {/* Pesan */}
                        <div>
                          <label className="block text-sm font-medium text-[#4A2040] mb-2">
                            Pesan / Keluhan (Opsional)
                          </label>
                          <textarea
                            {...register("pesan")}
                            rows={4}
                            placeholder="Ceritakan keluhan atau pertanyaan Anda..."
                            className="w-full px-4 py-3 rounded-xl border border-[#F8E8E8] focus:border-[#B76E79] focus:ring-2 focus:ring-[#B76E79]/20 outline-none transition-all bg-white resize-none"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Terms */}
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        {...register("setuju")}
                        id="setuju"
                        className="mt-1 w-5 h-5 rounded border-[#F8E8E8] text-[#B76E79] focus:ring-[#B76E79]/20"
                      />
                      <label htmlFor="setuju" className="text-sm text-[#4A2040]/70">
                        Saya setuju dengan{" "}
                        <Link href="/kontak" className="text-[#B76E79] hover:underline">
                          syarat dan ketentuan
                        </Link>{" "}
                        yang berlaku di Aurora Aesthetics.
                      </label>
                    </div>
                    {errors.setuju && (
                      <p className="text-red-500 text-sm -mt-4">{errors.setuju.message}</p>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-gradient-to-r from-[#B76E79] to-[#D4AF37] text-white rounded-xl font-medium text-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Mengirim...
                        </>
                      ) : (
                        <>
                          Kirim Reservasi
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                </FadeUp>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-[#FDF5F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#4A2040] mb-4"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Butuh Bantuan Langsung?
            </h2>
            <p className="text-[#4A2040]/60">Hubungi kami melalui:</p>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="tel:02112345678"
              className="flex items-center gap-4 p-6 bg-white rounded-2xl hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-[#B76E79]/10 flex items-center justify-center">
                <Phone className="w-6 h-6 text-[#B76E79]" />
              </div>
              <div>
                <p className="text-sm text-[#4A2040]/60">Telepon</p>
                <p className="text-lg font-medium text-[#4A2040]">(021) 1234-5678</p>
              </div>
            </a>

            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-white rounded-2xl hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <p className="text-sm text-[#4A2040]/60">WhatsApp</p>
                <p className="text-lg font-medium text-[#4A2040]">0812-3456-7890</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
