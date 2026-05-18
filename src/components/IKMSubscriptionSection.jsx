import { Send, Users, SquarePen } from "lucide-react";

export default function IKMSubscriptionSection() {
  const ratings = [
    { score: 5, percent: 43 },
    { score: 4, percent: 17 },
    { score: 3, percent: 17 },
    { score: 2, percent: 0 },
    { score: 1, percent: 20 },
  ];

  return (
    <section className="w-full bg-slate-100 py-10 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-6">
        
        {/* LEFT CARD */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-md p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-blue-900">IKM</h2>
            <div className="w-12 h-1 bg-red-600 mt-3 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-[1.05fr_1fr] gap-4 items-center">
            <Gauge />

            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-4">
                JDIH KKP
              </h3>

              <div className="space-y-3">
                {ratings.map((item) => (
                  <div key={item.score} className="flex items-center gap-3">
                    <span className="w-4 text-sm text-slate-700 font-medium">
                      {item.score}
                    </span>

                    <div className="flex-1 h-4 bg-slate-100 rounded-md overflow-hidden">
                      <div
                        className="h-full bg-blue-600 text-white text-[10px] font-semibold flex items-center px-2"
                        style={{ width: `${item.percent}%` }}
                      >
                        {item.percent}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Survey Info */}
          <div className="mt-6 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5 text-blue-600" />
            </div>

            <p className="text-sm text-slate-700">
              <span className="font-bold text-blue-600">2121</span> orang sudah
              mengisi survei
            </p>
          </div>

          {/* Button */}
          <div className="mt-6 flex justify-center">
            <button
              style={{
                background:
                  "linear-gradient(90deg, rgb(37, 99, 235), rgb(29, 78, 216))",
              }}
              className="text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 shadow-md hover:scale-105 transition-all duration-300"
            >
              <SquarePen size={18} />
              <span className="text-base">Isi Penilaian</span>
            </button>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-md p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-blue-900">
              BERLANGGANAN
            </h2>
            <div className="w-12 h-1 bg-red-600 mt-3 rounded-full"></div>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed mb-6">
            Untuk mendapatkan notifikasi peraturan perundang-undangan terbaru
            dari pengelola JDIH Kementerian Kelautan dan Perikanan melalui
            email, isikan nama dan alamat email Anda pada form berikut.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {/* Left Column */}
            <div className="space-y-4">
              <Input placeholder="Nama Anda" />
              <Input placeholder="Nomor WhatsApp" />
              <Input placeholder="Alamat Email" />
              <Input placeholder="Instansi/Perusahaan/Organisasi/Unit Kerja" />
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div className="h-24 rounded-lg bg-blue-950 text-white flex items-center justify-center text-2xl tracking-[0.15em] shadow-md font-semibold">
                710497
              </div>

              <Input placeholder="Masukkan Captcha" />

              <button
                style={{
                  background:
                    "linear-gradient(90deg, rgb(37, 99, 235), rgb(29, 78, 216))",
                }}
                className="w-full h-11 text-white rounded-lg font-semibold flex items-center justify-center gap-2 shadow-md hover:scale-105 transition-all duration-300"
              >
                <Send size={16} />
                <span className="text-sm">Langganan Sekarang</span>
              </button>
            </div>
          </div>

          <p className="text-xs text-slate-500 flex items-center gap-2 pt-5">
            🔒 Data Anda aman dan tidak akan disalahgunakan.
          </p>
        </div>
      </div>
    </section>
  );
}

function Input({ placeholder }) {
  return (
    <div className="h-11 border border-slate-200 rounded-lg px-4 bg-white flex items-center">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full outline-none bg-transparent text-sm text-slate-700 placeholder:text-slate-400"
      />
    </div>
  );
}

function Gauge() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center">
        <div className="w-52 h-40">
          <svg viewBox="0 0 300 200" className="w-full h-full">
            <defs>
              <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="35%" stopColor="#f59e0b" />
                <stop offset="70%" stopColor="#eab308" />
                <stop offset="100%" stopColor="#22c55e" />
              </linearGradient>
            </defs>

            <path
              d="M 40 160 A 110 110 0 0 1 260 160"
              fill="none"
              stroke="url(#gaugeGradient)"
              strokeWidth="10"
              strokeLinecap="round"
            />

            <line
              x1="150"
              y1="160"
              x2="220"
              y2="118"
              stroke="#0f2f74"
              strokeWidth="6"
              strokeLinecap="round"
            />

            <circle cx="150" cy="160" r="10" fill="#0f2f74" />

            <text x="60" y="150" fontSize="14" fill="#1e293b">0</text>
            <text x="85" y="110" fontSize="14" fill="#1e293b">1</text>
            <text x="135" y="85" fontSize="14" fill="#1e293b">2</text>
            <text x="185" y="85" fontSize="14" fill="#1e293b">3</text>
            <text x="228" y="115" fontSize="14" fill="#1e293b">4</text>
            <text x="245" y="150" fontSize="14" fill="#1e293b">5</text>
          </svg>
        </div>

        <div className="-mt-1 text-center">
          <h3 className="text-4xl font-bold text-slate-900">3.65</h3>
          <p className="text-slate-500 text-sm mt-1">Skala 0 - 5</p>
        </div>
      </div>
    </div>
  );
}