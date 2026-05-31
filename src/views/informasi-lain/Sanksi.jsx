import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import FloatingLeftButtons from "../../components/FloatingLeftButtons";

function Sanksi() {
  const [search, setSearch] = useState("");

  const dataSanksi = [];

  const filteredData = dataSanksi.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
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
              Sanksi
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-screen-2xl mx-auto px-6 lg:px-10 py-8">
          {/* Search Section */}
          <div className="bg-white rounded-xl shadow border border-slate-200 p-5 mb-5">
            <div className="bg-blue-950 rounded-xl p-4">
              <div className="flex flex-col md:flex-row gap-3 items-center">
                <input
                  type="text"
                  placeholder="Sanksi"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="flex-1 bg-white px-4 py-3 rounded-lg border border-slate-300 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-300"
                />

                <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3 rounded-lg transition text-sm min-w-40">
                  Cari
                </button>
              </div>
            </div>
          </div>

          {/* Result Section */}
          <div className="bg-white rounded-xl shadow border border-slate-200 py-5 px-6 text-center">
            {filteredData.length === 0 ? (
              <p className="text-slate-500 text-base md:text-lg">
                Maaf, sanksi yang anda cari tidak ada
              </p>
            ) : (
              <div className="space-y-4">
                {filteredData.map((item, index) => (
                  <div
                    key={index}
                    className="border border-slate-200 rounded-lg p-4 text-left"
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTopButton />
      <FloatingLeftButtons />
    </>
  );
}

export default Sanksi;