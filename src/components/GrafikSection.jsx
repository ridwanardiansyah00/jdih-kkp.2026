import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  LabelList,
} from "recharts";

const chartData = [
  { name: "UU", berlaku: 120, tidakBerlaku: 10 },
  { name: "PP", berlaku: 180, tidakBerlaku: 20 },
  { name: "KEPPRES", berlaku: 250, tidakBerlaku: 35 },
  { name: "KEPMEN", berlaku: 2200, tidakBerlaku: 90 },
  { name: "PERKABAN", berlaku: 140, tidakBerlaku: 8 },
  { name: "KEPDIRJEN", berlaku: 210, tidakBerlaku: 15 },
  { name: "SE", berlaku: 160, tidakBerlaku: 12 },
];

export default function GrafikSection() {
  return (
    <section className="bg-slate-100 py-14">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 uppercase tracking-wide">
              GRAFIK STATISTIK
            </h2>

            <div className="w-10 h-1 bg-red-600 rounded mt-3"></div>

            <p className="text-slate-500 text-base md:text-lg mt-5 leading-relaxed max-w-xl">
              Beberapa grafik statistik berikut menjelaskan beragam data dari
              dokumentasi dan informasi hukum Kementerian Kelautan dan
              Perikanan Republik Indonesia.
            </p>

            <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300">
              Lihat Detail
            </button>
          </div>

          {/* RIGHT CHART */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl border border-slate-200 shadow-md p-6 md:p-8">

              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                <h3 className="text-base font-semibold text-slate-700">
                  Status Peraturan Tahun 2026
                </h3>

                <div className="flex gap-3 flex-wrap">
                  <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-lg border border-blue-100">
                    <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
                    <span className="text-sm font-medium text-slate-700">
                      Berlaku
                    </span>
                  </div>

                  <div className="flex items-center gap-2 bg-red-50 px-4 py-2 rounded-lg border border-red-100">
                    <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                    <span className="text-sm font-medium text-slate-700">
                      Tidak Berlaku
                    </span>
                  </div>
                </div>
              </div>

              {/* Chart */}
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={chartData}
                    barGap={10}
                    margin={{
                      top: 20,
                      right: 20,
                      left: 0,
                      bottom: 40,
                    }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="#e2e8f0"
                      vertical={false}
                    />

                    <XAxis
                      dataKey="name"
                      angle={-25}
                      textAnchor="end"
                      tick={{
                        fill: "#64748b",
                        fontSize: 12,
                        fontWeight: 500,
                        fontFamily: "Source Sans 3",
                      }}
                    />

                    <YAxis
                      tick={{
                        fill: "#64748b",
                        fontSize: 12,
                        fontFamily: "Source Sans 3",
                      }}
                    />

                    <Tooltip
                      contentStyle={{
                        borderRadius: "10px",
                        border: "1px solid #e2e8f0",
                        background: "#ffffff",
                        boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
                      }}
                      cursor={{ fill: "rgba(37,99,235,0.05)" }}
                    />

                    <Bar
                      dataKey="berlaku"
                      fill="#2563eb"
                      radius={[6, 6, 0, 0]}
                    >
                      <LabelList
                        dataKey="berlaku"
                        position="top"
                        style={{
                        fill: "#334155",
                        fontSize: 11,
                        fontWeight: 600,
                        fontFamily: "Source Sans 3",
                      }}
                      />
                    </Bar>

                    <Bar
                      dataKey="tidakBerlaku"
                      fill="#ef4444"
                      radius={[6, 6, 0, 0]}
                    >
                      <LabelList
                        dataKey="tidakBerlaku"
                        position="top"
                        style={{
                        fill: "#334155",
                        fontSize: 11,
                        fontWeight: 600,
                        fontFamily: "Source Sans 3",
                      }}
                      />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}