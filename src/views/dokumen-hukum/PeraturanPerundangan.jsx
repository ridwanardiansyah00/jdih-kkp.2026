import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import FloatingLeftButtons from "../../components/FloatingLeftButtons";

function PeraturanPerundangan() {
  const [entries, setEntries] = useState(10);
  const [search, setSearch] = useState("");
  const [mainSearch, setMainSearch] = useState("");
  const [showAdvanced, setShowAdvanced] = useState(false);

  // Dropdown states
  const [showPemrakarsaDropdown, setShowPemrakarsaDropdown] = useState(false);
  const [showJenisDropdown, setShowJenisDropdown] = useState(false);
  const [showTahunDropdown, setShowTahunDropdown] = useState(false);
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);

  // Selected values
  const [selectedPemrakarsa, setSelectedPemrakarsa] =
    useState("Pemrakarsa");
  const [selectedJenis, setSelectedJenis] =
    useState("Jenis Peraturan");
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
        setShowPemrakarsaDropdown(false);
        setShowJenisDropdown(false);
        setShowTahunDropdown(false);
        setShowStatusDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const dataPeraturan = [
    {
      no: 1,
      jenis: "Peraturan Presiden",
      nomor: "33/2012",
      judul:
        "Peraturan Presiden Nomor 33 Tahun 2012 tentang Jaringan Dokumentasi dan Informasi Hukum Nasional",
      ditetapkan: "20 Maret 2012",
      diundangkan: "20 Maret 2012",
      status: "Berlaku",
    },
    {
      no: 2,
      jenis: "Peraturan Menteri Kelautan dan Perikanan",
      nomor: "43/2021",
      judul:
        "Peraturan Menteri Kelautan dan Perikanan Nomor 43 Tahun 2021 tentang Jaringan Dokumentasi dan Informasi Hukum",
      ditetapkan: "12 November 2021",
      diundangkan: "16 November 2021",
      status: "Berlaku",
    },
    {
      no: 3,
      jenis: "Keputusan Menteri",
      nomor: "15/2026",
      judul:
        "Keputusan Menteri Kelautan dan Perikanan Nomor 15/SJ Tahun 2026",
      ditetapkan: "04 Maret 2026",
      diundangkan: "04 Maret 2026",
      status: "Berlaku",
    },
    {
      no: 4,
      jenis: "Undang-Undang",
      nomor: "31/2004",
      judul: "Undang-Undang Nomor 31 Tahun 2004 tentang Perikanan",
      ditetapkan: "06 Oktober 2004",
      diundangkan: "06 Oktober 2004",
      status: "Tidak Berlaku",
    },
    {
      no: 5,
      jenis: "Peraturan Pemerintah",
      nomor: "27/2021",
      judul:
        "Peraturan Pemerintah Nomor 27 Tahun 2021 tentang Penyelenggaraan Bidang Kelautan dan Perikanan",
      ditetapkan: "02 Februari 2021",
      diundangkan: "02 Februari 2021",
      status: "Berlaku",
    },
  ];

  const filteredData = dataPeraturan.filter((item) =>
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
            Peraturan Perundang-undangan
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
                placeholder="Nama Peraturan"
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

                  {/* Pemrakarsa */}
                  <div className="relative">
                    <button
                      onClick={() => {
                        setShowPemrakarsaDropdown(!showPemrakarsaDropdown);
                        setShowJenisDropdown(false);
                        setShowTahunDropdown(false);
                        setShowStatusDropdown(false);
                      }}
                      className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm bg-white flex justify-between items-center"
                    >
                      {selectedPemrakarsa}
                      <FaChevronDown size={12} />
                    </button>

                    {showPemrakarsaDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute top-full left-0 mt-2 w-full bg-white border border-slate-300 rounded-lg shadow-xl z-50"
                      >
                        {[
                          "Sekretariat Jenderal",
                          "Direktorat Jenderal",
                          "Inspektorat",
                        ].map((item) => (
                          <div
                            key={item}
                            onClick={() => {
                              setSelectedPemrakarsa(item);
                              setShowPemrakarsaDropdown(false);
                            }}
                            className="px-4 py-3 text-sm hover:bg-slate-100 cursor-pointer"
                          >
                            {item}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>

                  {/* Jenis */}
                  <div className="relative">
                    <button
                      onClick={() => {
                        setShowJenisDropdown(!showJenisDropdown);
                        setShowPemrakarsaDropdown(false);
                        setShowTahunDropdown(false);
                        setShowStatusDropdown(false);
                      }}
                      className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm bg-white flex justify-between items-center"
                    >
                      {selectedJenis}
                      <FaChevronDown size={12} />
                    </button>

                    {showJenisDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute top-full left-0 mt-2 w-96 bg-white border border-slate-300 rounded-lg shadow-xl z-50 max-h-64 overflow-y-auto"
                      >
                        {[
                          "Undang-Undang",
                          "Peraturan Presiden",
                          "Peraturan Pemerintah",
                          "Peraturan Menteri",
                          "Keputusan Menteri",
                          "Surat Edaran",
                        ].map((item) => (
                          <div
                            key={item}
                            onClick={() => {
                              setSelectedJenis(item);
                              setShowJenisDropdown(false);
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
                        setShowPemrakarsaDropdown(false);
                        setShowJenisDropdown(false);
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
                        setShowPemrakarsaDropdown(false);
                        setShowJenisDropdown(false);
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

                  <th className="px-4 py-3 text-center font-semibold w-[13%]">
                    Jenis
                  </th>

                  <th className="px-4 py-3 text-center font-semibold w-[8%]">
                    No.
                    <br />
                    Peraturan
                  </th>

                  <th className="px-4 py-3 text-center font-semibold w-[38%]">
                    Judul
                  </th>

                  <th className="px-3 py-3 text-center font-semibold whitespace-nowrap w-[12%]">
                    Ditetapkan
                  </th>

                  <th className="px-3 py-3 text-center font-semibold whitespace-nowrap w-[12%]">
                    Diundangkan
                  </th>

                  <th className="px-4 py-3 text-center font-semibold w-[11%]">
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

                    <td className="px-4 py-2.5 leading-5 align-middle text-center">
                      {item.jenis}
                    </td>

                    <td className="px-4 py-3 text-center align-middle whitespace-nowrap">
                      {item.nomor}
                    </td>

                    <td className="px-4 py-3 leading-5 align-middle">
                      {item.judul}
                    </td>

                    <td className="px-3 py-3 text-center align-middle whitespace-nowrap">
                      {item.ditetapkan}
                    </td>

                    <td className="px-3 py-3 text-center align-middle whitespace-nowrap">
                      {item.diundangkan}
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

export default PeraturanPerundangan;