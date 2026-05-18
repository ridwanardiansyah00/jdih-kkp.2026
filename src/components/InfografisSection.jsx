const infografisData = [
  {
    id: 1,
    title: "Besaran Nilai Faktor E Dalam Perhitungan Tarif atas Jenis PNBP",
    image: "/images/infografis/infografis1.jpg",
  },
  {
    id: 2,
    title: "Struktur Baru Jabatan & Kelas Jabatan KKP",
    image: "/images/infografis/infografis2.jpg",
  },
  {
    id: 3,
    title: "Rencana Aksi Nasional Konservasi Cetacea 2026–2029",
    image: "/images/infografis/infografis3.jpg",
  },
  {
    id: 4,
    title: "Panduan Tata Kelola dan Sertifikasi Awak Kapal Perikanan",
    image: "/images/infografis/infografis4.jpg",
  },
];

export default function InfografisSection() {
  return (
    <section className="bg-slate-100 py-14">
      <div className="max-w-7xl mx-auto px-5">

        {/* Header */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-blue-900 uppercase tracking-wide">
            INFOGRAFIS
          </h2>

          <div className="w-10 h-1 bg-red-600 rounded mt-3"></div>

          <p className="text-slate-500 text-base mt-4">
            Kumpulan Infografis Kementerian Kelautan dan Perikanan
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {infografisData.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-xl border border-slate-200 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <div className="relative w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto block"
                />

                {/* Overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-blue-950/70 backdrop-blur-md text-white px-4 py-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-sm font-medium leading-snug">
                    {item.title}
                  </h3>
                </div>
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
            + Lihat Selengkapnya
          </a>
        </div>

      </div>
    </section>
  );
}