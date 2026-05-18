import { FaUsers } from "react-icons/fa";

const visitorData = [
  {
    title: "PENGUNJUNG KEMARIN",
    value: "3330",
    active: false,
  },
  {
    title: "PENGUNJUNG HARI INI",
    value: "155",
    active: false,
  },
  {
    title: "PENGUNJUNG BULAN INI",
    value: "6.209",
    active: false,
  },
  {
    title: "PENGUNJUNG TAHUN INI",
    value: "74.634",
    active: false,
  },
  {
    title: "TOTAL PENGUNJUNG",
    value: "1.117.899",
    active: true,
  },
];

export default function VisitorStatsSection() {
  return (
    <section className="bg-slate-100 py-14">
      <div className="max-w-7xl mx-auto px-5">

        {/* Header */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 uppercase tracking-wide">
            STATISTIK PENGUNJUNG JDIH KKP
          </h2>

          <div className="w-10 h-1 bg-red-600 rounded mt-3"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {visitorData.map((item, index) => (
            <div
              key={index}
              className={`relative rounded-xl border shadow-md px-5 py-6 text-center transition-all duration-300 ${
                item.active
                  ? "bg-blue-600 border-blue-600 text-white"
                  : "bg-white border-slate-200 text-slate-800 hover:shadow-lg hover:-translate-y-1"
              }`}
            >
              {/* Top Accent */}
              <div
                className={`absolute top-0 left-1/2 -translate-x-1/2 w-14 h-1 rounded-b-full ${
                  item.active ? "bg-blue-200" : "bg-blue-600"
                }`}
              ></div>

              {/* Icon */}
              <div
                className={`w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center text-xl ${
                  item.active
                    ? "bg-blue-500 text-white"
                    : "bg-blue-50 text-blue-600"
                }`}
              >
                <FaUsers />
              </div>

              {/* Title */}
              <h3
                className={`text-xs font-semibold tracking-wide mb-4 leading-relaxed ${
                  item.active ? "text-blue-100" : "text-slate-500"
                }`}
              >
                {item.title}
              </h3>

              {/* Value */}
              <p
                className="text-3xl font-bold min-h-10 flex items-center justify-center"
                style={{ fontVariantNumeric: "tabular-nums" }}
              >
                {item.value}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}