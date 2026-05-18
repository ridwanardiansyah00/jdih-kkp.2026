import {
  FaBuilding,
  FaWater,
  FaFish,
  FaSatelliteDish,
  FaUserShield,
  FaMicroscope,
  FaWarehouse,
} from "react-icons/fa";
import { GiFishingHook } from "react-icons/gi";

const thematicData = [
  {
    title: "Kesekretariatan",
    icon: <FaBuilding />,
  },
  {
    title: "Pengelolaan Kelautan dan Ruang Laut",
    icon: <FaWater />,
  },
  {
    title: "Perikanan Tangkap",
    icon: <GiFishingHook />,
  },
  {
    title: "Perikanan Budi Daya",
    icon: <FaFish />,
  },
  {
    title: "Penguatan Daya Saing Produk Kelautan dan Perikanan",
    icon: <FaSatelliteDish />,
  },
  {
    title: "Pengawasan Sumber Daya Kelautan dan Perikanan",
    icon: <FaSatelliteDish />,
  },
  {
    title: "Pengawasan Internal",
    icon: <FaUserShield />,
  },
  {
    title: "Penyuluhan dan Pengembangan SDM Kelautan dan Perikanan",
    icon: <FaMicroscope />,
  },
  {
    title: "Pengendalian dan Pengawasan Mutu Hasil Kelautan dan Perikanan",
    icon: <FaWarehouse />,
  },
];

export default function ThematicSection() {
  return (
    <section className="bg-slate-100 py-14">
      <div className="max-w-7xl mx-auto px-5">

        {/* Header */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-blue-900 uppercase tracking-wide">
            PERATURAN TEMATIK
          </h2>

          <div className="w-10 h-1 bg-red-600 rounded mt-3"></div>

          <p className="text-slate-500 text-base mt-4">
            Kumpulan Peraturan Perundang-undangan Bidang Kelautan dan Perikanan
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {thematicData.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl border border-slate-200 shadow-md px-5 py-6 min-h-48 flex flex-col items-center justify-center text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-violet-50 flex items-center justify-center text-2xl text-violet-600 mb-4 group-hover:scale-110 transition duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-slate-700 font-medium text-sm leading-relaxed">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}