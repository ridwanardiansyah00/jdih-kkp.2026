import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import FloatingLeftButtons from "../../components/FloatingLeftButtons";

function SOP() {
  const pdfFiles = [
    { name: "2023sop020.pdf", path: "/pdf/2023sop020.pdf" },
    { name: "2023sop021.pdf", path: "/pdf/2023sop021.pdf" },
    { name: "2023sop022.pdf", path: "/pdf/2023sop022.pdf" },
    { name: "2023sop023.pdf", path: "/pdf/2023sop023.pdf" },
    { name: "2024sop006.pdf", path: "/pdf/2024sop006.pdf" },
  ];

  const [selectedPdf, setSelectedPdf] = useState(pdfFiles[0].path);

  return (
    <>
      <Navbar />

      <main className="pt-20 min-h-screen bg-gray-100">
        {/* Hero Banner */}
        <section
          className="relative h-36 md:h-44 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/banner-laut.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </section>

        {/* Title Section */}
        <section className="bg-blue-950 py-5 shadow-md">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-center text-2xl md:text-3xl font-semibold text-white">
              Standar Operasional Prosedur
            </h1>
          </div>
        </section>

        {/* PDF Section */}
        <section className="py-10 px-6">
          <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            
            {/* SOP List */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
                Daftar Standar Operasional Prosedur
              </h2>

              <div className="flex flex-wrap justify-center gap-3">
                {pdfFiles.map((pdf, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedPdf(pdf.path)}
                    className={`px-5 py-3 rounded-xl border transition-all duration-300 flex items-center gap-2 ${
                      selectedPdf === pdf.path
                        ? "bg-blue-900 text-white border-blue-900 shadow-md"
                        : "bg-gray-50 hover:bg-blue-50 text-gray-700 border-gray-200"
                    }`}
                  >
                    <span>📄</span>
                    <span>{pdf.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* PDF Viewer */}
            <iframe
              src={selectedPdf}
              title="PDF Viewer"
              className="w-full h-225 rounded-lg border border-gray-300"
            />
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTopButton />
      <FloatingLeftButtons />
    </>
  );
}

export default SOP;