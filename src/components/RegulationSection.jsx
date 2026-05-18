import { useState } from "react";

const newestRegulations = [
  {
    title: "Keputusan a.n. Menteri Nomor 17 Tahun 2026",
    desc: "Keputusan Menteri Kelautan dan Perikanan Nomor 17/SJ Tahun 2026 tentang Penyelenggaraan Pelayanan Terpadu Satu Atap...",
    date: "11 Mar 2026",
    status: "Berlaku",
    views: "235x Dilihat",
  },
  {
    title: "Keputusan a.n. Menteri Nomor 16 Tahun 2026",
    desc: "Keputusan Menteri Kelautan dan Perikanan Nomor 16/SJ Tahun 2026 tentang Tim Pengukuran Indeks Kualitas Kebijakan...",
    date: "11 Mar 2026",
    status: "Berlaku",
    views: "180x Dilihat",
  },
  {
    title: "Keputusan a.n. Menteri Nomor 14 Tahun 2026",
    desc: "Keputusan Menteri Kelautan dan Perikanan Nomor 14/SJ Tahun 2026 tentang Pengelola Aplikasi Survei Kepuasan Masyarakat...",
    date: "04 Mar 2026",
    status: "Berlaku",
    views: "138x Dilihat",
  },
  {
    title: "Peraturan Menteri Kelautan dan Perikanan Nomor 06 Tahun 2026",
    desc: "Peraturan Menteri Kelautan dan Perikanan Nomor 6 Tahun 2026 tentang Perubahan Kedua atas Peraturan Menteri Kelautan dan Perikanan...",
    date: "05 Mar 2026",
    status: "Berlaku",
    views: "885x Dilihat",
  },
  {
    title: "Peraturan Menteri Kelautan dan Perikanan Nomor 05 Tahun 2026",
    desc: "Peraturan Menteri Kelautan dan Perikanan Nomor 5 Tahun 2026 tentang Perubahan atas Peraturan Menteri Kelautan dan Perikanan...",
    date: "03 Mar 2026",
    status: "Berlaku",
    views: "1085x Dilihat",
  },
  {
    title: "Peraturan Menteri Kelautan dan Perikanan Nomor 04 Tahun 2026",
    desc: "Peraturan Menteri Kelautan dan Perikanan Nomor 4 Tahun 2026 tentang Tata Kelola Pengawasan Kapal Perikanan...",
    date: "05 Feb 2026",
    status: "Berlaku",
    views: "1355x Dilihat",
  },
];

const popularRegulations = [
  {
    title: "Peraturan Menteri Kelautan dan Perikanan Nomor 04 Tahun 2026",
    desc: "Peraturan Menteri Kelautan dan Perikanan Nomor 4 Tahun 2026 tentang Tata Kelola Pengawasan Kapal Perikanan...",
    date: "05 Feb 2026",
    status: "Berlaku",
    views: "1355x Dilihat",
  },
  {
    title: "Peraturan Menteri Kelautan dan Perikanan Nomor 05 Tahun 2026",
    desc: "Peraturan Menteri Kelautan dan Perikanan Nomor 5 Tahun 2026 tentang Perubahan atas Peraturan Menteri Kelautan dan Perikanan...",
    date: "03 Mar 2026",
    status: "Berlaku",
    views: "1085x Dilihat",
  },
  {
    title: "Peraturan Menteri Kelautan dan Perikanan Nomor 06 Tahun 2026",
    desc: "Peraturan Menteri Kelautan dan Perikanan Nomor 6 Tahun 2026 tentang Perubahan Kedua atas Peraturan Menteri Kelautan dan Perikanan...",
    date: "05 Mar 2026",
    status: "Berlaku",
    views: "885x Dilihat",
  },
  {
    title: "Keputusan a.n. Menteri Nomor 17 Tahun 2026",
    desc: "Keputusan Menteri Kelautan dan Perikanan Nomor 17/SJ Tahun 2026 tentang Penyelenggaraan Pelayanan Terpadu Satu Atap...",
    date: "11 Mar 2026",
    status: "Berlaku",
    views: "235x Dilihat",
  },
  {
    title: "Keputusan a.n. Menteri Nomor 16 Tahun 2026",
    desc: "Keputusan Menteri Kelautan dan Perikanan Nomor 16/SJ Tahun 2026 tentang Tim Pengukuran Indeks Kualitas Kebijakan...",
    date: "11 Mar 2026",
    status: "Berlaku",
    views: "180x Dilihat",
  },
  {
    title: "Keputusan a.n. Menteri Nomor 14 Tahun 2026",
    desc: "Keputusan Menteri Kelautan dan Perikanan Nomor 14/SJ Tahun 2026 tentang Pengelola Aplikasi Survei Kepuasan Masyarakat...",
    date: "04 Mar 2026",
    status: "Berlaku",
    views: "138x Dilihat",
  },
];

export default function RegulationSection() {
  const [activeTab, setActiveTab] = useState("terbaru");

  const displayedData =
    activeTab === "terbaru" ? newestRegulations : popularRegulations;

  return (
    <section className="bg-[#f8f9fb] py-12">
      <div className="max-w-7xl mx-auto px-4 overflow-hidden">

        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h2 className="text-2xl font-bold text-[#0d47a1] uppercase tracking-wide">
              PERATURAN
            </h2>

            <div className="w-9 h-1 bg-red-600 rounded mt-3"></div>

            <p className="text-gray-500 text-sm mt-4">
              Peraturan Terbaru dan Terpopuler Kementerian Kelautan dan Perikanan
            </p>
          </div>

          {/* Tabs */}
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab("terbaru")}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition duration-300 ${
                activeTab === "terbaru"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-gray-200 text-black"
              }`}
            >
              Terbaru
            </button>

            <button
              onClick={() => setActiveTab("terpopuler")}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition duration-300 ${
                activeTab === "terpopuler"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-gray-200 text-black"
              }`}
            >
              Terpopuler
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayedData.map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl shadow-sm border border-gray-200 px-5 py-4 h-52 flex flex-col hover:shadow-md transition-all duration-300"
            >
              {/* Blue Accent */}
              <div className="absolute left-0 top-9 w-1 h-20 bg-blue-600 rounded-r"></div>

              {/* Content */}
              <div className="pl-4">
                <h3 className="text-[#0d47a1] font-bold text-base leading-snug mb-3 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                  {item.desc}
                </p>
              </div>

              {/* Footer */}
              <div className="mt-auto pt-3">
                <div className="border-t border-gray-200 mb-3"></div>

                <div className="flex items-center justify-between pl-4">
                  <span className="text-gray-500 text-sm">
                    {item.date}
                  </span>

                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium text-[11px]">
                    {item.status}
                  </span>

                  <span className="text-gray-500 text-sm">
                    {item.views}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-end mt-6">
          <button className="text-blue-600 text-sm font-semibold hover:underline">
            Lihat Semua →
          </button>
        </div>

      </div>
    </section>
  );
}