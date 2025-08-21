// src/components/HeroSection.jsx

import Image from "next/image";
import heroIllustration from "@/public/hero-illustration.svg";

export default function HeroSection() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center w-full min-h-screen p-8 bg-white text-[#1F1F39]">
      {/* Kolom Kiri - Konten Teks */}
      <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left mb-10 lg:mb-0 lg:mr-20">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-1 bg-[#1F1F39]"></div>
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
            Where Design Meets Innovation!
          </h1>
        </div>
        <p className="text-lg text-gray-600 max-w-lg mb-8">
          Whether you're a startup looking to establish your brand identity or
          an established business aiming to refresh your image, we've got the
          creative firepower to make it happen.
        </p>
        <a
          href="#"
          className="bg-[#1F1F39] text-white px-8 py-4 rounded-md font-medium hover:bg-opacity-90 transition-colors"
        >
          LET'S TALK
        </a>
      </div>

      {/* Kolom Kanan - Ilustrasi */}
      <div className="flex-1 max-w-md lg:max-w-none">
        {/*
          ✨ Catatan:
          Ganti path src pada komponen Image dengan path ke gambar ilustrasi Anda.
          Pastikan gambar disimpan di direktori `public` atau impor seperti di atas.
        */}
        <Image
          src="/hero-illustration.svg"
          alt="Illustration of a team working on design and innovation"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}
