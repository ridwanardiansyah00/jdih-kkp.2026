import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import FloatingLeftButtons from "../../components/FloatingLeftButtons";

function AdvokasiHukum() {
  const [captchaAnswer, setCaptchaAnswer] = useState("");

  return (
    <>
      <Navbar />

      <main className="pt-20 min-h-screen bg-slate-100">
        {/* Hero Banner */}
        <section
          className="relative h-36 md:h-44 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/banner-laut.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </section>

        {/* Title */}
        <section className="bg-blue-950 py-5 shadow-md">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-center text-2xl md:text-3xl font-semibold text-white">
              Advokasi Hukum
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-screen-2xl mx-auto px-6 lg:px-10 py-8">
          <div className="bg-white rounded-xl shadow border border-slate-200 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-[35%_65%]">
              {/* Left Side */}
              <div className="bg-slate-50 border-r border-amber-400 px-6 py-8">
                <h2 className="text-xl font-bold text-slate-800 mb-4">
                  Layanan Advokasi Hukum
                </h2>

                <p className="text-slate-600 text-sm leading-7">
                  Ini adalah layanan advokasi bagi{" "}
                  <span className="font-semibold text-slate-800">
                    pegawai dan pensiunan pegawai Kementerian Kelautan dan
                    Perikanan
                  </span>
                </p>
              </div>

              {/* Right Side */}
              <div className="px-6 py-6">
                <form className="space-y-4">
                  <select className="w-full bg-slate-100 rounded-xl px-5 py-3 text-slate-600 outline-none border border-slate-200">
                    <option>--Pilih Layanan--</option>
                    <option>Konsultasi Hukum</option>
                    <option>Pendampingan Hukum</option>
                    <option>Bantuan Hukum</option>
                  </select>

                  <input
                    type="text"
                    placeholder="Nama *"
                    className="w-full bg-slate-100 rounded-xl px-5 py-3 text-slate-600 outline-none border border-slate-200"
                  />

                  <input
                    type="text"
                    placeholder="NIP *"
                    className="w-full bg-slate-100 rounded-xl px-5 py-3 text-slate-600 outline-none border border-slate-200"
                  />

                  <input
                    type="text"
                    placeholder="Unit Kerja *"
                    className="w-full bg-slate-100 rounded-xl px-5 py-3 text-slate-600 outline-none border border-slate-200"
                  />

                  <input
                    type="text"
                    placeholder="Nomor Telepon/WhatsApp *"
                    className="w-full bg-slate-100 rounded-xl px-5 py-3 text-slate-600 outline-none border border-slate-200"
                  />

                  <input
                    type="email"
                    placeholder="Email *"
                    className="w-full bg-slate-100 rounded-xl px-5 py-3 text-slate-600 outline-none border border-slate-200"
                  />

                  <textarea
                    rows="4"
                    placeholder="Deskripsi *"
                    className="w-full bg-slate-100 rounded-xl px-5 py-3 text-slate-600 outline-none border border-slate-200 resize-none"
                  ></textarea>

                  {/* Captcha + Submit */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-blue-950 text-white rounded-lg flex items-center justify-center text-xl font-bold py-3">
                      16 + 9 =
                    </div>

                    <input
                      type="text"
                      placeholder="Hasil Captcha *"
                      value={captchaAnswer}
                      onChange={(e) => setCaptchaAnswer(e.target.value)}
                      className="bg-slate-100 rounded-lg px-5 py-3 text-slate-600 outline-none border border-slate-200"
                    />

                    <button
                      type="submit"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg py-3 transition"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTopButton />
      <FloatingLeftButtons />
    </>
  );
}

export default AdvokasiHukum;