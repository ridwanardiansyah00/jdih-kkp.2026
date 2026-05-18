const statsData = [
  {
    title: "PERATURAN\nPERUNDANG-UNDANGAN",
    count: "3538",
    icon: "📘",
  },
  {
    title: "MONOGRAFI\nHUKUM",
    count: "2629",
    icon: "📗",
  },
  {
    title: "ARTIKEL\nHUKUM",
    count: "5",
    icon: "📄",
  },
  {
    title: "PUTUSAN\nPENGADILAN",
    count: "17",
    icon: "⚖️",
  },
  {
    title: "NASKAH\nPERJANJIAN",
    count: "12",
    icon: "✏️",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-[#f8f9fb] py-14">
      <div className="max-w-7xl mx-auto px-5">

        {/* Header */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-[#0d47a1] uppercase tracking-wide">
            STATISTIK KOLEKSI DOKUMEN HUKUM
          </h2>

          <div className="w-9 h-1 bg-red-600 rounded mt-3"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {statsData.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-gray-200 shadow-sm px-5 py-6 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-white/70 border border-gray-200 flex items-center justify-center text-2xl mb-4 shadow-sm group-hover:scale-110 transition duration-300">
                {item.icon}
              </div>

              {/* Number */}
              <p className="text-3xl font-bold text-[#0d47a1] mb-3">
                {item.count}
              </p>

              {/* Title */}
              <h3 className="text-gray-600 font-semibold text-sm whitespace-pre-line leading-relaxed">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}