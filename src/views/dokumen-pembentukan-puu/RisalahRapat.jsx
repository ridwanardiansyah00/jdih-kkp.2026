import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import FloatingLeftButtons from "../../components/FloatingLeftButtons";
import { FaFilePdf } from "react-icons/fa";

function RisalahRapat() {
  const [entries, setEntries] = useState(10);
  const [search, setSearch] = useState("");

  const dataRisalahRapat = [
    {
      no: 1,
      judul:
        "Peraturan Menteri Kelautan dan Perikanan Nomor 20 Tahun 2025 tentang Penyelenggaraan Penyuluhan Kelautan dan Perikanan",
      status: "Berlaku",
    },
    {
      no: 2,
      judul:
        "Peraturan Menteri Kelautan dan Perikanan Nomor 19 Tahun 2025 tentang Kartu Tanda Pengenal Pegawai di Lingkungan Kementerian Kelautan dan Perikanan",
      status: "Berlaku",
    },
    {
      no: 3,
      judul:
        "Peraturan Menteri Kelautan dan Perikanan Nomor 18 Tahun 2025 tentang Rencana Strategis Kementerian Kelautan dan Perikanan Tahun 2025-2029",
      status: "Berlaku",
    },
    {
      no: 4,
      judul:
        "Peraturan Menteri Kelautan dan Perikanan Nomor 17 Tahun 2025 tentang Organisasi dan Tata Kerja Unit Pelaksana Teknis Bidang Produksi Garam",
      status: "Berlaku",
    },
    {
      no: 5,
      judul:
        "Peraturan Menteri Kelautan dan Perikanan Nomor 16 Tahun 2025 tentang Rencana Induk Pengembangan Standar Kompetensi Kerja Nasional Indonesia Sektor Kelautan dan Perikanan",
      status: "Berlaku",
    },
    {
      no: 6,
      judul:
        "Peraturan Menteri Kelautan dan Perikanan Nomor 14 Tahun 2025 tentang Pelaksana Harian dan Pelaksana Tugas di Lingkungan Kementerian Kelautan dan Perikanan",
      status: "Berlaku",
    },
  ];

  const filteredData = dataRisalahRapat.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(search.toLowerCase())
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
              Risalah Rapat
            </h1>
          </div>
        </section>

        {/* Table Section */}
        <section className="max-w-screen-2xl mx-auto px-6 lg:px-10 py-8">
          <div className="bg-white rounded-xl shadow border border-slate-200 p-4 md:p-5">
            {/* Controls */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
              <div className="flex items-center gap-2 text-slate-700 text-sm md:text-base">
                <span>Tampilkan</span>

                <select
                  value={entries}
                  onChange={(e) => setEntries(Number(e.target.value))}
                  className="border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-800"
                >
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                </select>

                <span>entri</span>
              </div>

              <div className="flex items-center gap-2 text-slate-700 text-sm md:text-base">
                <span>Cari:</span>

                <input
                  type="text"
                  placeholder="Cari data..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="border border-slate-300 rounded-lg px-3 py-2 w-full md:w-72 text-sm focus:outline-none focus:ring-2 focus:ring-blue-800"
                />
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-blue-950 text-white">
                    <th className="px-4 py-3 text-center font-semibold w-[6%]">
                      No
                    </th>

                    <th className="px-4 py-3 text-center font-semibold w-[68%]">
                      Judul
                    </th>

                    <th className="px-4 py-3 text-center font-semibold w-[14%]">
                      Status
                    </th>

                    <th className="px-4 py-3 text-center font-semibold w-[12%]">
                      File
                    </th>
                  </tr>
                </thead>

                <tbody className="text-[14px]">
                  {filteredData.slice(0, entries).map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-slate-200 hover:bg-slate-50 transition"
                    >
                      <td className="px-4 py-3.5 text-center align-middle">
                        {item.no}
                      </td>

                      <td className="px-4 py-3.5 leading-5 align-middle">
                        {item.judul}
                      </td>

                      <td className="px-4 py-3.5 text-center align-middle">
                        <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap bg-green-600 text-white">
                          {item.status}
                        </span>
                      </td>

                      <td className="px-4 py-3.5 text-center align-middle">
                        <button className="inline-flex items-center justify-center bg-red-500 hover:bg-red-600 text-white p-2.5 rounded-lg transition">
                          <FaFilePdf size={17} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footer */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-5 text-sm text-slate-600">
              <div>
                Menampilkan 1 sampai {Math.min(entries, filteredData.length)} dari{" "}
                {filteredData.length} entri
              </div>

              <div className="flex items-center border border-slate-300 rounded-lg overflow-hidden">
                <button className="px-4 py-2 bg-white hover:bg-slate-100 transition">
                  Sebelumnya
                </button>

                <button className="px-4 py-2 bg-slate-100 border-x border-slate-300 font-medium">
                  1
                </button>

                <button className="px-4 py-2 bg-white hover:bg-slate-100 transition">
                  Selanjutnya
                </button>
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

export default RisalahRapat;