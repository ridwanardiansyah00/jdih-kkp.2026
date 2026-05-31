import { useState } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ScrollToTopButton from "../../../components/ScrollToTopButton";
import FloatingLeftButtons from "../../../components/FloatingLeftButtons";

function PeraturanAsing() {
  const [entries, setEntries] = useState(10);
  const [search, setSearch] = useState("");

  const dataPeraturanAsing = [
    {
      no: 1,
      jenis: "United States Code",
      nomor: "16 U.S.C. §1801",
      judul:
        "Magnuson-Stevens Fishery Conservation and Management Act concerning marine fisheries management in the United States.",
      ditetapkan: "13 April 1976",
      diundangkan: "13 April 1976",
      status: "Berlaku",
    },
    {
      no: 2,
      jenis: "European Union Regulation",
      nomor: "EU 1380/2013",
      judul:
        "Regulation on the Common Fisheries Policy of the European Union.",
      ditetapkan: "11 Desember 2013",
      diundangkan: "11 Desember 2013",
      status: "Berlaku",
    },
    {
      no: 3,
      jenis: "Australia Fisheries Act",
      nomor: "Act No. 162/1991",
      judul:
        "Fisheries Management Act regulating fisheries and marine conservation in Australia.",
      ditetapkan: "30 Agustus 1991",
      diundangkan: "30 Agustus 1991",
      status: "Berlaku",
    },
    {
      no: 4,
      jenis: "Japan Fisheries Law",
      nomor: "Law No. 267/1949",
      judul:
        "Japanese fisheries legislation concerning fishery rights and marine resource management.",
      ditetapkan: "15 Desember 1949",
      diundangkan: "15 Desember 1949",
      status: "Berlaku",
    },
  ];

  const filteredData = dataPeraturanAsing.filter((item) =>
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
              Peraturan Asing
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
                    <th className="px-4 py-3 text-center font-semibold w-[5%]">
                      No
                    </th>

                    <th className="px-4 py-3 text-center font-semibold w-[12%]">
                      Jenis
                    </th>

                    <th className="px-4 py-3 text-center font-semibold w-[10%]">
                      No. Peraturan
                    </th>

                    <th className="px-4 py-3 text-center font-semibold w-[41%]">
                      Judul
                    </th>

                    <th className="px-4 py-3 text-center font-semibold w-[10%]">
                      Ditetapkan
                    </th>

                    <th className="px-4 py-3 text-center font-semibold w-[10%]">
                      Diundangkan
                    </th>

                    <th className="px-4 py-3 text-center font-semibold w-[12%]">
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

                      <td className="px-4 py-3 text-center align-middle">
                        {item.jenis}
                      </td>

                      <td className="px-4 py-3 text-center align-middle whitespace-nowrap">
                        {item.nomor}
                      </td>

                      <td className="px-4 py-3 leading-5 align-middle">
                        {item.judul}
                      </td>

                      <td className="px-4 py-3 text-center align-middle whitespace-nowrap">
                        {item.ditetapkan}
                      </td>

                      <td className="px-4 py-3 text-center align-middle whitespace-nowrap">
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

export default PeraturanAsing;