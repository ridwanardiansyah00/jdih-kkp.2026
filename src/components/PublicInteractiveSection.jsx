import { ArrowRight } from "lucide-react";

export default function PublicInteractiveSection() {
  const cards = [
    {
      title: "PARTISIPASI\nMASYARAKAT",
      desc: "Sampaikan aspirasi, masukan, dan saran Anda untuk mendukung kebijakan yang lebih baik.",
      image: "/images/partisipasi.jpg",
      imageSize: "w-24 h-24",
      href: "#",
    },
    {
      title: "PETA\nINTERAKTIF",
      desc: "Jelajahi informasi sebaran regulasi dan data per wilayah secara interaktif.",
      image: "/images/peta-interaktif.jpg",
      imageSize: "w-32 h-20",
      href: "#",
    },
  ];

  return (
    <section className="relative overflow-hidden py-16 bg-[#eef6ff]">
      {/* Background Glow */}
      <div className="absolute top-0 left-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-20 w-72 h-72 bg-cyan-200/30 rounded-full blur-3xl" />

      {/* Left Pattern */}
      <div className="absolute left-0 bottom-0 opacity-20">
        <svg width="260" height="180" viewBox="0 0 260 180" fill="none">
          {[...Array(10)].map((_, i) => (
            <path
              key={i}
              d={`M0 ${180 - i * 18} C80 ${120 - i * 10}, 160 ${
                100 - i * 8
              }, 260 ${20 - i * 4}`}
              stroke="#3B82F6"
              strokeWidth="1.5"
            />
          ))}
        </svg>
      </div>

      {/* Right Pattern */}
      <div className="absolute right-0 top-10 opacity-15">
        <svg width="220" height="180" viewBox="0 0 220 180" fill="none">
          {[...Array(8)].map((_, i) => (
            <path
              key={i}
              d={`M220 ${i * 20} C150 ${i * 25}, 100 ${i * 35}, 0 ${
                i * 45
              }`}
              stroke="#60A5FA"
              strokeWidth="1"
            />
          ))}
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <a
              key={index}
              href={card.href}
              className="group relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-white/60 overflow-hidden"
            >
              {/* Accent dots */}
              <div className="absolute top-5 right-5 grid grid-cols-4 gap-1.5 opacity-20">
                {[...Array(12)].map((_, i) => (
                  <span
                    key={i}
                    className="w-1.5 h-1.5 bg-blue-600 rounded-full"
                  />
                ))}
              </div>

              <div className="flex items-center gap-6 min-h-56">
                {/* Icon */}
                <div className="relative shrink-0">
                  <div className="w-40 h-40 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center">
                    <img
                      src={card.image}
                      alt={card.title}
                      className={`${card.imageSize} object-contain`}
                    />
                  </div>

                  <div className="absolute top-3 left-0 w-3 h-3 bg-amber-400 rounded-full" />
                  <div className="absolute bottom-4 right-0 w-3 h-3 bg-blue-600 rounded-full" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 leading-tight whitespace-pre-line">
                    {card.title}
                  </h3>

                  <div className="w-14 h-1 bg-amber-400 rounded-full mt-3" />

                  <p className="mt-5 text-slate-600 leading-relaxed text-base max-w-sm">
                    {card.desc}
                  </p>
                </div>

                {/* Arrow */}
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}