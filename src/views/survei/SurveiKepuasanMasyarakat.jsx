import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import FloatingLeftButtons from "../../components/FloatingLeftButtons";

function SurveiKepuasanMasyarakat() {
  const [selectedLayanan, setSelectedLayanan] = useState("");
  const [nama, setNama] = useState("");
  const [rating, setRating] = useState(0);

  const toggleLayanan = () => {
    setSelectedLayanan((prev) => (prev === "JDIH" ? "" : "JDIH"));
  };

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
              Survei Kepuasan Masyarakat
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-screen-2xl mx-auto px-6 lg:px-10 py-8">
          <div className="bg-slate-100 p-4 md:p-5 rounded-xl">
            {/* Header */}
            <div className="mb-5">
              <h2 className="text-xl md:text-2xl font-medium text-blue-950 leading-snug">
                Survey Kepuasan Masyarakat
                <br />
                Unit : Biro Hukum
              </h2>
            </div>

            {/* Data Layanan */}
            <div className="bg-white rounded-xl shadow border border-slate-200 p-5 mb-5">
              <h3 className="text-lg font-semibold text-blue-950 mb-6">
                Data Layanan
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-5 items-center">
                <div className="text-slate-800 text-base">
                  Pilih Layanan
                </div>

                <label
                  onClick={toggleLayanan}
                  className="flex items-center gap-3 text-slate-700 text-base cursor-pointer select-none"
                >
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedLayanan === "JDIH"
                        ? "border-blue-600"
                        : "border-slate-400"
                    }`}
                  >
                    {selectedLayanan === "JDIH" && (
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div>
                    )}
                  </div>

                  Jaringan Dokumentasi dan Informasi Hukum
                </label>
              </div>
            </div>

            {/* Data Responden */}
            <div className="bg-white rounded-xl shadow border border-slate-200 p-5 mb-5">
              <h3 className="text-lg font-semibold text-blue-950 mb-6">
                Data Responden
              </h3>

              <div className="space-y-6">
                {/* Waktu */}
                <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-5 items-center">
                  <div className="text-slate-800 text-base">
                    Waktu Survey
                  </div>

                  <div className="text-slate-800 text-base font-semibold">
                    27-May-2026 21:53
                  </div>
                </div>

                {/* Nama */}
                <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-5 items-center">
                  <div className="text-slate-800 text-base">
                    Nama
                  </div>

                  <input
                    type="text"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    className="w-full md:w-[320px] border border-slate-300 rounded-lg px-3 py-2 text-sm"
                  />
                </div>

                {/* Jenis Usaha */}
                <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-5">
                  <div className="text-slate-800 text-base">
                    Jenis Usaha
                  </div>

                  <div className="space-y-2 text-base text-slate-700">
                    <label className="flex items-center gap-3">
                      <input type="radio" name="usaha" />
                      Perseorangan
                    </label>

                    <label className="flex items-center gap-3">
                      <input type="radio" name="usaha" />
                      Korporasi
                    </label>
                  </div>
                </div>

                {/* Gender */}
                <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-5">
                  <div className="text-slate-800 text-base">
                    Jenis Kelamin/Gender
                  </div>

                  <div className="space-y-2 text-base text-slate-700">
                    <label className="flex items-center gap-3">
                      <input type="radio" name="gender" />
                      Pria/Laki-laki
                    </label>

                    <label className="flex items-center gap-3">
                      <input type="radio" name="gender" />
                      Wanita/Perempuan
                    </label>
                  </div>
                </div>

                {/* Usia */}
                <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-5">
                  <div className="text-slate-800 text-base">
                    Usia
                  </div>

                  <div className="grid md:grid-cols-2 gap-3 text-base text-slate-700">
                    {[
                      "< 25 Tahun",
                      "46 s/d 60 Tahun",
                      "25 s/d 45 Tahun",
                      "> 60 Tahun",
                    ].map((item) => (
                      <label key={item} className="flex items-center gap-3">
                        <input type="radio" name="usia" />
                        {item}
                      </label>
                    ))}
                  </div>
                </div>

                                {/* Pendidikan */}
                <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-5">
                  <div className="text-slate-800 text-base">
                    Pendidikan
                  </div>

                  <div className="grid md:grid-cols-2 gap-2 text-base text-slate-700">
                    {["SD", "S1", "SMP", "S2", "SMA", "S3", "D3"].map(
                      (item) => (
                        <label key={item} className="flex items-center gap-3">
                          <input type="radio" name="pendidikan" />
                          {item}
                        </label>
                      )
                    )}
                  </div>
                </div>

                {/* Pekerjaan */}
                <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-5">
                  <div className="text-slate-800 text-base">
                    Pekerjaan
                  </div>

                  <div className="grid md:grid-cols-2 gap-2 text-base text-slate-700">
                    {[
                      "ASN",
                      "Pegawai Swasta",
                      "TNI/POLRI",
                      "Wirausaha Non KKP",
                      "Pelaku Usaha KKP",
                      "Pelajar / Mahasiswa",
                    ].map((item) => (
                      <label key={item} className="flex items-center gap-3">
                        <input type="radio" name="pekerjaan" />
                        {item}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Conditional Content */}
            {selectedLayanan === "JDIH" ? (
              <>
                {/* Pertanyaan */}
                <div className="bg-white rounded-xl shadow border border-slate-200 p-5 mb-5">
                  <h3 className="text-lg font-semibold text-blue-950 mb-6">
                    Pertanyaan
                  </h3>

                  <div className="space-y-8 text-slate-800 text-base">
                    {[
                      {
                        q: "Bagaimana penilaian Bapak/Ibu tentang kesesuaian persyaratan pelayanan yang harus dipenuhi dengan persyaratan pelayanan yang diinformasikan?",
                        options: [
                          "Sangat sesuai",
                          "Sesuai",
                          "Kurang sesuai",
                          "Tidak sesuai",
                        ],
                      },
                      {
                        q: "Bagaimana penilaian Bapak/Ibu mengenai kemudahan prosedur yang dijalani untuk mendapatkan layanan?",
                        options: [
                          "Sangat Mudah",
                          "Mudah",
                          "Kurang mudah",
                          "Tidak mudah",
                        ],
                      },
                      {
                        q: "Bagaimana penilaian Bapak/Ibu mengenai kesesuaian jangka waktu penyelesaian pelayanan dengan yang diinformasikan?",
                        options: [
                          "Sangat sesuai",
                          "Sesuai",
                          "Kurang sesuai",
                          "Tidak sesuai",
                        ],
                      },
                      {
                        q: "Bagaimana penilaian Bapak/Ibu mengenai kesesuaian biaya pelayanan yang dibayarkan dengan yang diinformasikan?",
                        options: [
                          "Sangat sesuai",
                          "Sesuai",
                          "Kurang sesuai",
                          "Tidak sesuai",
                        ],
                      },
                      {
                        q: "Bagaimana pendapat Saudara tentang kesesuaian produk pelayanan antara yang ada pada publikasi dengan pelayanan yang diberikan?",
                        options: [
                          "Sangat sesuai",
                          "Sesuai",
                          "Kurang sesuai",
                          "Tidak sesuai",
                        ],
                      },
                      {
                        q: "Bagaimana kecepatan respon (membuka halaman, konten, pencarian informasi, unduh/unggah) dari aplikasi sistem pelayanan yang diberikan?",
                        options: [
                          "Sangat Cepat",
                          "Cepat",
                          "Kurang cepat",
                          "Lambat",
                        ],
                      },
                      {
                        q: "Bagaimana kemudahan dalam penggunaan fitur pada aplikasi sistem layanan?",
                        options: [
                          "Sangat Mudah",
                          "Mudah",
                          "Kurang mudah",
                          "Tidak mudah",
                        ],
                      },
                      {
                        q: "Bagaimana penilaian Bapak/Ibu mengenai layanan konsultasi dan pengaduan yang tersedia?",
                        options: [
                          "Sangat baik",
                          "Baik",
                          "Kurang baik",
                          "Tidak baik",
                        ],
                      },
                      {
                        q: "Bagaimana penilaian Bapak/Ibu tentang kualitas isi/konten dari aplikasi sistem layanan?",
                        options: [
                          "Sangat baik",
                          "Baik",
                          "Kurang baik",
                          "Tidak baik",
                        ],
                      },
                    ].map((item, idx) => (
                      <div key={idx}>
                        <p className="mb-3 leading-7">
                          <span className="font-medium">{idx + 1}. </span>
                          {item.q}
                        </p>

                        <div className="space-y-2 pl-5">
                          {item.options.map((option, i) => (
                            <label
                              key={i}
                              className="flex items-center gap-3 cursor-pointer"
                            >
                              <input type="radio" name={`q-${idx}`} />
                              {option}
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Kesimpulan */}
                <div className="bg-white rounded-xl shadow border border-slate-200 p-5 mb-5">
                  <h3 className="text-lg font-semibold text-blue-950 mb-6">
                    Kesimpulan
                  </h3>

                  <p className="text-base text-slate-800 mb-4">
                    Apakah petugas telah memberikan pelayanan secara prima
                    <span className="font-semibold">
                      {" "}
                      (sikap, keterampilan dan penampilan)
                    </span>
                  </p>

                  {/* Interactive Rating */}
                  <div className="flex gap-2 text-4xl mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() =>
                          setRating(rating === star ? 0 : star)
                        }
                        className={`transition hover:scale-110 ${
                          star <= rating
                            ? "text-yellow-400"
                            : "text-slate-300"
                        }`}
                      >
                        ★
                      </button>
                    ))}
                  </div>

                  <hr className="mb-5" />

                  <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-5">
                    <div className="text-base text-slate-800">
                      Kritik dan Saran
                    </div>

                    <div>
                      <p className="text-blue-700 text-sm mb-2">
                        *) Harus diisi minimal 3 kata
                      </p>

                      <textarea
                        rows="5"
                        className="w-full border border-slate-300 rounded-lg px-3 py-3 text-sm resize-none"
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <div className="mb-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition">
                    Submit Form
                  </button>
                </div>

                <p className="text-sm text-slate-700 pb-10">
                  *) Pastikan anda telah mengisi seluruh pertanyaan{" "}
                  <span className="text-red-600 font-semibold">
                    sebelum submit
                  </span>
                </p>
              </>
            ) : (
              <div>
                <p className="text-lg text-slate-800 mb-4">
                  Belum dapat di submit karena anda harus memilih Layanan
                  terlebih dahulu
                </p>

                <p className="text-sm text-slate-700 pb-10">
                  *) Pastikan anda telah mengisi seluruh pertanyaan{" "}
                  <span className="text-red-600 font-semibold">
                    sebelum submit
                  </span>
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTopButton />
      <FloatingLeftButtons />
    </>
  );
}

export default SurveiKepuasanMasyarakat;