import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";

const newsData = [
  {
    id: 1,
    title:
      "Biro Hukum KKP Raih Penghargaan Zona Integritas Menuju WBK pada Rakerwas Itjen KKP 2026",
    date: "05 Februari 2026",
    image: "/images/news/news1.jpg",
  },
  {
    id: 2,
    title:
      "Rapat Penerjemahan Peraturan Menteri Kelautan dan Perikanan",
    date: "24 November 2025",
    image: "/images/news/news2.jpg",
  },
  {
    id: 3,
    title:
      "KKP Raih Penghargaan Indeks Reformasi Hukum Tahun 2025 Sebagai Terbaik II Kategori Tingkat Kementerian",
    date: "18 Desember 2025",
    image: "/images/news/news3.jpg",
  },
  {
    id: 4,
    title:
      "Rapat Koordinasi Monitoring dan Evaluasi Pengelolaan JDIH Tahun 2024",
    date: "27 Oktober 2025",
    image: "/images/news/news4.jpg",
  },
];

export default function NewsSection() {
  return (
    <section className="bg-slate-100 py-14">
      <div className="max-w-7xl mx-auto px-5">

        {/* Header */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-blue-900 uppercase tracking-wide">
            BERITA TERKINI
          </h2>

          <div className="w-10 h-1 bg-red-600 rounded mt-3"></div>

          <p className="text-slate-500 text-base mt-4">
            Seputar Berita Kementerian Kelautan dan Perikanan
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-slate-400 text-xs mb-3">
                  <FaCalendarAlt />
                  <span>{item.date}</span>
                </div>

                <h3 className="text-slate-900 font-bold text-base leading-snug line-clamp-3 mb-5">
                  {item.title}
                </h3>

                <a
                  href="#"
                  className="mt-auto text-blue-600 font-semibold text-sm flex items-center gap-2 hover:text-blue-700 transition duration-300"
                >
                  Baca Selengkapnya
                  <FaArrowRight className="text-xs" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-end mt-10">
          <a
            href="#"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300"
          >
            Lihat Semua
          </a>
        </div>

      </div>
    </section>
  );
}