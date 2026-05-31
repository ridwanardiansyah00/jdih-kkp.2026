import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import FloatingLeftButtons from "../../components/FloatingLeftButtons";
import { FaLink, FaRegCopy } from "react-icons/fa";

function Glosarium() {
  const [search, setSearch] = useState("");

  const dataGlosarium = [
    {
      istilah: "KARCIS MASUK",
      deskripsi:
        "Karcis Masuk adalah bukti pembayaran yang menunjukan legalitas untuk berkegiatan Pariwisata Alam Perairan di Kawasan Konservasi.",
      sumber: "PERMEN NO. 7 TAHUN 2025",
    },
    {
      istilah: "PEJABAT KUASA PENGELOLA PNBP",
      deskripsi:
        "Pejabat Kuasa Pengelola PNBP adalah pejabat yang diberi kuasa untuk melaksanakan sebagian tugas dan fungsi pimpinan instansi pengelola PNBP dalam pengelolaan PNBP yang menjadi tanggung jawabnya dan tugas lain terkait PNBP sesuai dengan ketentuan peraturan perundang-undangan.",
      sumber: "PERMEN NO. 7 TAHUN 2025",
    },
    {
      istilah: "KAWASAN KONSERVASI",
      deskripsi:
        "Kawasan konservasi adalah wilayah yang memiliki karakteristik tertentu sebagai satu kesatuan ekosistem yang dilindungi dan dikelola secara berkelanjutan.",
      sumber: "PERMEN NO. 7 TAHUN 2025",
    },
    {
      istilah: "PNBP",
      deskripsi:
        "Penerimaan Negara Bukan Pajak (PNBP) adalah pungutan yang dibayar oleh pihak tertentu atas pelayanan atau pemanfaatan sumber daya tertentu sesuai ketentuan yang berlaku.",
      sumber: "UU PNBP",
    },
    {
      istilah: "PERIZINAN BERUSAHA",
      deskripsi:
        "Perizinan Berusaha adalah legalitas yang diberikan kepada pelaku usaha untuk memulai dan menjalankan kegiatan usaha sesuai dengan peraturan perundang-undangan.",
      sumber: "PP NO. 5 TAHUN 2021",
    },
    {
      istilah: "WILAYAH PESISIR",
      deskripsi:
        "Wilayah pesisir adalah daerah peralihan antara ekosistem darat dan laut yang dipengaruhi oleh perubahan di darat maupun di laut.",
      sumber: "UU WILAYAH PESISIR",
    },
  ];

  const filteredData = dataGlosarium.filter((item) =>
    Object.values(item).some((value) =>
      value.toLowerCase().includes(search.toLowerCase())
    )
  );

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
              Glosarium
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-screen-2xl mx-auto px-6 lg:px-10 py-8">
          {/* Search Section */}
          <div className="bg-white rounded-xl shadow border border-slate-200 p-5 mb-5">
            <div className="bg-blue-950 rounded-xl p-4">
              <div className="flex flex-col md:flex-row gap-3 items-center">
                <input
                  type="text"
                  placeholder="Istilah"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="flex-1 bg-white px-4 py-3 rounded-lg border border-slate-300 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-300"
                />

                <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3 rounded-lg transition text-sm">
                  Cari
                </button>
              </div>
            </div>
          </div>

          {/* Glosarium Cards */}
          <div className="space-y-4">
            {filteredData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow border border-slate-200 overflow-hidden"
              >
                {/* Header */}
                <div className="bg-slate-50 border-b border-slate-200 px-6 py-3">
                  <h2 className="text-xl font-bold text-slate-700 uppercase">
                    {item.istilah}
                  </h2>
                </div>

                {/* Body */}
                <div className="px-6 py-4">
                  <p className="text-slate-600 text-base leading-7">
                    {item.deskripsi}
                  </p>

                  <div className="mt-4 flex items-center gap-3">
                    <span className="inline-flex items-center gap-2 bg-cyan-400 text-slate-900 px-3 py-1.5 rounded-md text-sm font-medium">
                      <FaLink />
                      Sumber: {item.sumber}
                    </span>

                    <button className="text-slate-500 hover:text-slate-700 transition">
                      <FaRegCopy size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {filteredData.length === 0 && (
              <div className="bg-white rounded-xl shadow border border-slate-200 p-8 text-center">
                <p className="text-slate-500 text-base">
                  Data glosarium tidak ditemukan
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

export default Glosarium;