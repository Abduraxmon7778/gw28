import { Home, ArrowLeft } from "lucide-react";

export const NotFound = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
      {/* ==== Floating background shapes ==== */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full mix-blend-overlay blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-16 w-96 h-96 bg-purple-400/20 rounded-full mix-blend-overlay blur-3xl animate-spin-slow"></div>
      <div className="absolute -top-32 right-1/3 w-[500px] h-[500px] bg-pink-400/20 rounded-full mix-blend-overlay blur-3xl animate-ping"></div>

      {/* ==== Main content ==== */}
      <div className="relative z-10 text-center text-white px-6 max-w-3xl">
        {/* Big glowing 404 */}
        <h1 className="text-[140px] md:text-[180px] font-extrabold tracking-widest leading-none drop-shadow-[0_0_35px_rgba(255,255,255,0.9)]">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-6 text-4xl md:text-5xl font-bold drop-shadow-md">
          Sahifa topilmadi
        </h2>

        {/* Description */}
        <p className="mt-4 text-lg md:text-xl opacity-90 leading-relaxed">
          Kechirasiz 🙏 Siz izlagan sahifa mavjud emas yoki manzil noto‘g‘ri
          kiritilgan. Iltimos, havolani tekshiring yoki bosh sahifaga qayting.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href="/"
            className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-lg font-semibold text-indigo-600 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <Home size={22} />
            Bosh sahifa
          </a>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-3 rounded-full border-2 border-white/80 px-7 py-4 text-lg font-semibold text-white hover:bg-white/10 hover:scale-105 transition-all duration-300"
          >
            <ArrowLeft size={22} />
            Orqaga
          </button>
        </div>

        {/* Helpful links */}
        <div className="mt-8 text-sm md:text-base opacity-80">
          Yoki{" "}
          <a
            href="/#contact"
            className="underline hover:text-yellow-300 transition"
          >
            biz bilan bog‘laning
          </a>{" "}
          va muammo haqida xabar bering.
        </div>
      </div>

      {/* ==== Extra decorative icons ==== */}
      <div className="absolute top-10 left-1/2 text-6xl animate-bounce">🚀</div>
      <div className="absolute bottom-12 right-1/4 text-5xl animate-pulse">
        ✨
      </div>
      <div className="absolute top-1/4 left-1/4 text-7xl animate-spin-slow">
        🌀
      </div>
    </section>
  );
};

/* ==== Extra Tailwind utilities for smooth animation ==== */
/* tailwind.config.js da custom animate-spin-slow qo‘shing */
