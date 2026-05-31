import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ScrollToTopButton from "../../../components/ScrollToTopButton";
import FloatingLeftButtons from "../../../components/FloatingLeftButtons";

function Perjanjian() {
  const [entries, setEntries] = useState(10);
  const [search, setSearch] = useState("");
  const [mainSearch, setMainSearch] = useState("");
  const [showAdvanced, setShowAdvanced] = useState(false);

  // Dropdown states
  const [showInternalDropdown, setShowInternalDropdown] = useState(false);
  const [showEksternalDropdown, setShowEksternalDropdown] = useState(false);
  const [showBentukDropdown, setShowBentukDropdown] = useState(false);
  const [showTahunDropdown, setShowTahunDropdown] = useState(false);
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);

  // Selected values
  const [selectedInternal, setSelectedInternal] =
    useState("Pihak Internal");
  const [selectedEksternal, setSelectedEksternal] =
    useState("Pihak Eksternal");
  const [selectedBentuk, setSelectedBentuk] =
    useState("Bentuk Perjanjian");
  const [selectedTahun, setSelectedTahun] =
    useState("Tahun");
  const [selectedStatus, setSelectedStatus] =
    useState("Status");

  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowInternalDropdown(false);
        setShowEksternalDropdown(false);
        setShowBentukDropdown(false);
        setShowTahunDropdown(false);
        setShowStatusDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const dataPerjanjian = [
    {
      no: 1,
      nomor: "001/KKP/2025",
      bentuk: "Nota Kesepakatan",
      tahun: "2025",
      tentang:
        "Nota Kesepakatan antara Kementerian Kelautan dan Perikanan dan Pemerintah Daerah Provinsi Jawa Barat tentang Sinergi Pengelolaan Kelautan dan Perikanan.",
      pihakInternal: "Sekretariat Jenderal",
      pihakEksternal: "Pemerintah Daerah",
      tanggal: "25 Juni 2025",
      status: "Berlaku",
    },
    {
      no: 2,
      nomor: "014/PKS/2024",
      bentuk: "Perjanjian Kerja Sama",
      tahun: "2024",
      tentang:
        "Perjanjian kerja sama pengembangan sistem informasi kelautan nasional.",
      pihakInternal: "Direktorat Jenderal Perikanan Tangkap",
      pihakEksternal: "Universitas",
      tanggal: "10 Maret 2024",
      status: "Berlaku",
    },
    {
      no: 3,
      nomor: "007/MOU/2023",
      bentuk: "MoU",
      tahun: "2023",
      tentang:
        "Kesepakatan kerja sama pemantauan wilayah laut dan konservasi sumber daya.",
      pihakInternal: "Direktorat Jenderal Pengawasan SDKP",
      pihakEksternal: "NGO / Organisasi",
      tanggal: "14 Agustus 2023",
      status: "Tidak Berlaku",
    },
  ];

  const filteredData = dataPerjanjian.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(search.toLowerCase())
    )
  );

  const handleMainSearch = () => {
    setSearch(mainSearch);
  };

  const tahunList = Array.from(
    { length: 27 },
    (_, i) => `${2026 - i}`
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
              Perjanjian
            </h1>
          </div>
        </section>

        {/* Search */}
        <section className="max-w-screen-2xl mx-auto px-6 lg:px-10 py-8">
          <div className="bg-white rounded-xl shadow border border-slate-200 p-5">
            <div className="bg-blue-950 rounded-xl p-4">
              <div className="flex flex-col md:flex-row gap-3 items-center">
                <input
                  type="text"
                  placeholder="Nama Perjanjian"
                  value={mainSearch}
                  onChange={(e) => setMainSearch(e.target.value)}
                  className="flex-1 bg-white px-4 py-3 rounded-lg border border-slate-300 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-300"
                />

                <button
                  onClick={handleMainSearch}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3 rounded-lg transition text-sm"
                >
                  Cari
                </button>
              </div>
            </div>

            <div
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="text-right mt-4 text-slate-600 hover:text-blue-900 cursor-pointer text-base font-medium"
            >
              Pencarian Lanjutan {showAdvanced ? "−" : "+"}
            </div>

            <AnimatePresence>
              {showAdvanced && (
                <motion.div
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="mt-5"
                >
                  <div
                    ref={dropdownRef}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                  >
                    <input
                      type="text"
                      placeholder="Tentang"
                      className="border border-slate-300 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-800"
                    />

                    <input
                      type="text"
                      placeholder="Nomor"
                      className="border border-slate-300 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-800"
                    />

                                        {/* Pihak Internal */}
                    <div className="relative">
                      <button
                        onClick={() => {
                          setShowInternalDropdown(!showInternalDropdown);
                          setShowEksternalDropdown(false);
                          setShowBentukDropdown(false);
                          setShowTahunDropdown(false);
                          setShowStatusDropdown(false);
                        }}
                        className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm bg-white flex justify-between items-center"
                      >
                        {selectedInternal}
                        <FaChevronDown size={12} />
                      </button>

                      {showInternalDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute top-full left-0 mt-2 w-full bg-white border border-slate-300 rounded-lg shadow-xl z-50"
                        >
                          {[
                            "Sekretariat Jenderal",
                            "Direktorat Jenderal Perikanan Tangkap",
                            "Direktorat Jenderal Perikanan Budidaya",
                            "Direktorat Jenderal Pengawasan SDKP",
                            "Badan Penyuluhan dan Pengembangan SDM",
                          ].map((item) => (
                            <div
                              key={item}
                              onClick={() => {
                                setSelectedInternal(item);
                                setShowInternalDropdown(false);
                              }}
                              className="px-4 py-3 text-sm hover:bg-slate-100 cursor-pointer"
                            >
                              {item}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </div>

                    {/* Pihak Eksternal */}
                    <div className="relative">
                      <button
                        onClick={() => {
                          setShowEksternalDropdown(!showEksternalDropdown);
                          setShowInternalDropdown(false);
                          setShowBentukDropdown(false);
                          setShowTahunDropdown(false);
                          setShowStatusDropdown(false);
                        }}
                        className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm bg-white flex justify-between items-center"
                      >
                        {selectedEksternal}
                        <FaChevronDown size={12} />
                      </button>

                      {showEksternalDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute top-full left-0 mt-2 w-full bg-white border border-slate-300 rounded-lg shadow-xl z-50"
                        >
                          {[
                            "Pemerintah Daerah",
                            "Universitas",
                            "BUMN",
                            "Lembaga Swasta",
                            "NGO / Organisasi",
                          ].map((item) => (
                            <div
                              key={item}
                              onClick={() => {
                                setSelectedEksternal(item);
                                setShowEksternalDropdown(false);
                              }}
                              className="px-4 py-3 text-sm hover:bg-slate-100 cursor-pointer"
                            >
                              {item}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </div>

                    {/* Bentuk */}
                    <div className="relative">
                      <button
                        onClick={() => {
                          setShowBentukDropdown(!showBentukDropdown);
                          setShowInternalDropdown(false);
                          setShowEksternalDropdown(false);
                          setShowTahunDropdown(false);
                          setShowStatusDropdown(false);
                        }}
                        className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm bg-white flex justify-between items-center"
                      >
                        {selectedBentuk}
                        <FaChevronDown size={12} />
                      </button>

                      {showBentukDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute top-full left-0 mt-2 w-full bg-white border border-slate-300 rounded-lg shadow-xl z-50"
                        >
                          {[
                            "Nota Kesepakatan",
                            "Perjanjian Kerja Sama",
                            "MoU",
                          ].map((item) => (
                            <div
                              key={item}
                              onClick={() => {
                                setSelectedBentuk(item);
                                setShowBentukDropdown(false);
                              }}
                              className="px-4 py-3 text-sm hover:bg-slate-100 cursor-pointer"
                            >
                              {item}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </div>

                    {/* Tahun */}
                    <div className="relative">
                      <button
                        onClick={() => {
                          setShowTahunDropdown(!showTahunDropdown);
                          setShowInternalDropdown(false);
                          setShowEksternalDropdown(false);
                          setShowBentukDropdown(false);
                          setShowStatusDropdown(false);
                        }}
                        className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm bg-white flex justify-between items-center"
                      >
                        {selectedTahun}
                        <FaChevronDown size={12} />
                      </button>

                      {showTahunDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute top-full left-0 mt-2 w-full bg-white border border-slate-300 rounded-lg shadow-xl z-50 max-h-64 overflow-y-auto"
                        >
                          {tahunList.map((item) => (
                            <div
                              key={item}
                              onClick={() => {
                                setSelectedTahun(item);
                                setShowTahunDropdown(false);
                              }}
                              className="px-4 py-3 text-sm hover:bg-slate-100 cursor-pointer"
                            >
                              {item}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </div>

                    {/* Status */}
                    <div className="relative">
                      <button
                        onClick={() => {
                          setShowStatusDropdown(!showStatusDropdown);
                          setShowInternalDropdown(false);
                          setShowEksternalDropdown(false);
                          setShowBentukDropdown(false);
                          setShowTahunDropdown(false);
                        }}
                        className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm bg-white flex justify-between items-center"
                      >
                        {selectedStatus}
                        <FaChevronDown size={12} />
                      </button>

                      {showStatusDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute top-full left-0 mt-2 w-full bg-white border border-slate-300 rounded-lg shadow-xl z-50"
                        >
                          {["Berlaku", "Tidak Berlaku"].map((item) => (
                            <div
                              key={item}
                              onClick={() => {
                                setSelectedStatus(item);
                                setShowStatusDropdown(false);
                              }}
                              className="px-4 py-3 text-sm hover:bg-slate-100 cursor-pointer"
                            >
                              {item}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Table */}
        <section className="max-w-screen-2xl mx-auto px-6 lg:px-10 pb-10">
          <div className="bg-white rounded-xl shadow border border-slate-200 p-4 md:p-5">
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

            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-blue-950 text-white">
                    <th className="px-4 py-3 text-center font-semibold w-[5%]">
                      No
                    </th>

                    <th className="px-4 py-3 text-center font-semibold w-[10%]">
                      No. Perjanjian
                    </th>

                    <th className="px-4 py-3 text-center font-semibold w-[12%]">
                      Bentuk
                    </th>

                    <th className="px-4 py-3 text-center font-semibold w-[35%]">
                      Tentang
                    </th>

                    <th className="px-4 py-3 text-center font-semibold w-[12%]">
                      Pihak Eksternal
                    </th>

                    <th className="px-4 py-3 text-center font-semibold whitespace-nowrap w-[12%]">
                      Tanggal Penandatanganan
                    </th>

                    <th className="px-4 py-3 text-center font-semibold w-[14%]">
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

                      <td className="px-4 py-3 text-center align-middle whitespace-nowrap">
                        {item.nomor}
                      </td>

                      <td className="px-4 py-3 text-center align-middle">
                        {item.bentuk}
                      </td>

                      <td className="px-4 py-3 leading-5 align-middle">
                        {item.tentang}
                      </td>

                      <td className="px-4 py-3 text-center align-middle">
                        {item.pihakEksternal}
                      </td>

                      <td className="px-4 py-3 text-center align-middle whitespace-nowrap">
                        {item.tanggal}
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

export default Perjanjian;