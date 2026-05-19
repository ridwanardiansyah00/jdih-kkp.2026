import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import FloatingLeftButtons from "../../components/FloatingLeftButtons";
import { FileText } from "lucide-react";

function VisiMisi() {
  const kategoriProdukHukum = [
    "Undang-Undang",
    "Peraturan Pemerintah Pengganti Undang-Undang",
    "Peraturan Pemerintah",
    "Peraturan Presiden",
    "Keputusan Presiden",
    "Peraturan Menteri Kelautan dan Perikanan",
    "Keputusan Menteri Kelautan dan Perikanan",
    "Peraturan Sekretaris Jenderal",
    "Peraturan Dirjen/Ka.Badan/Irjen",
    "Keputusan Sekretaris Jenderal",
    "Keputusan Dirjen/Ka.Badan/Irjen",
    "Instruksi Presiden",
    "Instruksi Menteri",
    "Surat Edaran",
    "Peraturan Perundang-Undangan K/L",
    "Keputusan a.n. Menteri Kelautan dan Perikanan",
    "Peraturan Bersama",
  ];

  const inventarisasiTahun = Array.from(
    { length: 27 },
    (_, i) => 2026 - i
  );

  return (
    <>
      <Navbar />

      <main className="pt-20 min-h-screen bg-slate-100 font-['Poppins']">
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
              Visi & Misi
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-screen-2xl mx-auto px-6 py-10">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Sidebar */}
            <aside className="w-full lg:w-[32%]">
              <div className="flex flex-col gap-6">
                {/* Kategori Produk Hukum */}
                <div className="overflow-hidden rounded-md bg-white shadow border border-slate-200">
                  <div className="bg-blue-950 px-6 py-4">
                    <h2 className="text-center text-xl md:text-2xl font-bold text-white">
                      Kategori Produk Hukum
                    </h2>
                  </div>

                  <div className="p-7">
                    <ul className="space-y-0">
                      {kategoriProdukHukum.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-slate-800 hover:text-blue-900 transition-all duration-300 cursor-pointer"
                        >
                          <FileText
                            size={17}
                            className="mt-1 shrink-0 text-blue-700"
                          />
                          <span className="leading-8 text-[17px]">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Inventarisasi */}
                <div className="overflow-hidden rounded-md bg-white shadow border border-slate-200">
                  <div className="bg-blue-950 px-6 py-4">
                    <h2 className="text-center text-xl md:text-2xl font-bold text-white">
                      Inventarisasi Peraturan
                    </h2>
                  </div>

                  <div className="p-5">
                    <div className="grid grid-cols-4 gap-y-4 gap-x-3">
                      {inventarisasiTahun.map((year) => (
                        <button
                          key={year}
                          className="flex items-center gap-2 text-slate-800 hover:text-blue-900 transition-colors text-[16px]"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 shrink-0 text-slate-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          {year}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="w-full lg:w-[68%]">
              <div className="overflow-hidden rounded-md bg-white shadow border border-slate-200">
                <div className="bg-blue-950 px-8 py-4">
                  <h2 className="text-center text-xl md:text-2xl font-bold text-white leading-snug">
                    VISI & MISI JDIH
                  </h2>
                </div>

                <div className="p-8 md:p-10">
                  <div className="text-[17px] md:text-[18px] leading-8 text-slate-900">
                    <p className="mb-5 text-justify">
                      Jaringan Dokumentasi dan Informasi Hukum Nasional atau disingkat JDIHN adalah :
                    </p>

                    <ul className="list-disc pl-10 space-y-1 text-justify mb-10">
                      <li>
                        Wadah pendayagunaan bersama atas dokumen hukum secara tertib,
                        terpadu dan berkesinambungan; serta
                      </li>
                      <li>
                        Merupakan sarana pemberian pelayanan informasi hukum secara
                        lengkap, akurat, mudah dan cepat.
                      </li>
                    </ul>

                    <p className="text-center mb-8">
                      Untuk mewujudkan visi dan misi sebagai berikut :
                    </p>

                    <div className="text-center mb-8">
                      <h3 className="text-xl md:text-2xl font-bold text-blue-950 mb-4">
                        Visi :
                      </h3>

                      <p className="text-[18px] md:text-[20px] leading-relaxed">
                        “Masyarakat memperoleh kepastian hukum”
                      </p>
                    </div>

                    <div className="text-center">
                      <h3 className="text-xl md:text-2xl font-bold text-blue-950 mb-4">
                        Misi :
                      </h3>

                      <p className="text-[18px] md:text-[20px] leading-relaxed max-w-3xl mx-auto">
                        Mewujudkan peraturan Perundang-Undangan yang berkualitas
                      </p>
                    </div>
                  </div>
                </div>
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

export default VisiMisi;