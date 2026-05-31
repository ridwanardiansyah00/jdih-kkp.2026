import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import FloatingLeftButtons from "../../components/FloatingLeftButtons";

function DasarHukum() {
  const [entries, setEntries] = useState(10);
  const [search, setSearch] = useState("");

  const dataDasarHukum = [
    {
      no: 1,
      jenis: "Peraturan Presiden",
      nomor: "33/2012",
      judul:
        "Peraturan Presiden Nomor 33 Tahun 2012 tentang Jaringan Dokumentasi dan Informasi Hukum Nasional",
      ditetapkan: "20 Maret 2012",
      diundangkan: "20 Maret 2012",
      status: "Berlaku",
    },
    {
      no: 2,
      jenis: "Peraturan Menteri Kelautan dan Perikanan",
      nomor: "43/2021",
      judul:
        "Peraturan Menteri Kelautan dan Perikanan Nomor 43 Tahun 2021 tentang Jaringan Dokumentasi dan Informasi Hukum di Lingkungan Kementerian Kelautan dan Perikanan",
      ditetapkan: "12 November 2021",
      diundangkan: "16 November 2021",
      status: "Berlaku",
    },
    {
      no: 3,
      jenis: "Keputusan a.n. Menteri",
      nomor: "15/2026",
      judul:
        "Keputusan Menteri Kelautan dan Perikanan Nomor 15/SJ Tahun 2026 tentang Tim Teknis Pengelola Jaringan Dokumentasi dan Informasi Hukum",
      ditetapkan: "04 Maret 2026",
      diundangkan: "04 Maret 2026",
      status: "Berlaku",
    },
    {
      no: 4,
      jenis: "Undang-Undang",
      nomor: "31/2004",
      judul: "Undang-Undang Nomor 31 Tahun 2004 tentang Perikanan",
      ditetapkan: "06 Oktober 2004",
      diundangkan: "06 Oktober 2004",
      status: "Tidak Berlaku",
    },
    {
      no: 5,
      jenis: "Undang-Undang",
      nomor: "45/2009",
      judul:
        "Undang-Undang Nomor 45 Tahun 2009 tentang Perubahan atas Undang-Undang Nomor 31 Tahun 2004 tentang Perikanan",
      ditetapkan: "29 Oktober 2009",
      diundangkan: "29 Oktober 2009",
      status: "Berlaku",
    },
    {
      no: 6,
      jenis: "Peraturan Pemerintah",
      nomor: "27/2021",
      judul:
        "Peraturan Pemerintah Nomor 27 Tahun 2021 tentang Penyelenggaraan Bidang Kelautan dan Perikanan",
      ditetapkan: "02 Februari 2021",
      diundangkan: "02 Februari 2021",
      status: "Tidak Berlaku",
    },
  ];

  const filteredData = dataDasarHukum.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <>
      <Navbar />

      <main className="pt-20 min-h-screen bg-slate-100">
        <section
          className="relative h-36 md:h-44 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/banner-laut.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </section>

        <section className="bg-blue-950 py-5 shadow-md">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-center text-2xl md:text-3xl font-semibold text-white">
              Dasar Hukum
            </h1>
          </div>
        </section>

        <section className="max-w-screen-2xl mx-auto px-6 lg:px-10 py-8">
          <div className="bg-white rounded-xl shadow border border-slate-200 p-4 md:p-5">
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

            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-blue-950 text-white">
                    <th className="px-4 py-3 text-center font-semibold w-[5%]">
                      No
                    </th>

                    <th className="px-4 py-3 text-center font-semibold w-[12%]">
                      Jenis
                    </th>

                    <th className="px-4 py-3 text-center font-semibold w-[8%]">
                      No.
                      <br />
                      Peraturan
                    </th>

                    <th className="px-4 py-3 text-center font-semibold w-[38%]">
                      Judul
                    </th>

                    <th className="px-3 py-3 text-center font-semibold whitespace-nowrap w-[12%]">
                      Ditetapkan
                    </th>

                    <th className="px-3 py-3 text-center font-semibold whitespace-nowrap w-[12%]">
                      Diundangkan
                    </th>

                    <th className="px-4 py-3 text-center font-semibold w-[11%]">
                      Status
                    </th>
                  </tr>
                </thead>

                <tbody className="text-[14px]">
                  {filteredData.slice(0, entries).map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-slate-200 hover:bg-slate-50 transition"
                    >
                      <td className="px-4 py-3 text-center align-middle">
                        {item.no}
                      </td>

                      <td className="px-4 py-2.5 leading-5 align-middle text-center">
                        {item.jenis}
                      </td>

                      <td className="px-4 py-3 text-center align-middle whitespace-nowrap">
                        {item.nomor}
                      </td>

                      <td className="px-4 py-3 leading-5 align-middle">
                        {item.judul}
                      </td>

                      <td className="px-3 py-3 text-center align-middle">
                        {item.ditetapkan}
                      </td>

                      <td className="px-3 py-3 text-center align-middle">
                        {item.diundangkan}
                      </td>

                      <td className="px-4 py-3 text-center align-middle">
                        <span
                          className={`inline-flex items-center justify-center px-4 py-1 rounded-full text-sm font-semibold whitespace-nowrap ${
                            item.status === "Berlaku"
                              ? "bg-green-600 text-white"
                              : "bg-red-500 text-white"
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

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

export default DasarHukum;