import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import FloatingLeftButtons from "../../components/FloatingLeftButtons";

function StandarPelayanan() {
  return (
    <>
      <Navbar />

      <main className="pt-20 min-h-screen bg-gray-100 font-['Poppins']">
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
              Standar Pelayanan
            </h1>
          </div>
        </section>

        {/* PDF Viewer */}
        <section className="py-10 px-6">
          <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg border border-gray-200 p-5">
            <iframe
              src="/pdf/standar-pelayanan.pdf"
              title="PDF Standar Pelayanan"
              className="w-full h-225 rounded-lg"
            />

            {/* Survey Section */}
            <div className="mt-8 text-center">
              <p className="text-gray-700 text-base md:text-lg font-medium">
                Survei Kepuasan Masyarakat terhadap Pelayanan JDIH KKP dapat
                disampaikan melalui tautan berikut
              </p>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-blue-950 hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 shadow-md"
              >
                Survei
              </a>
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

export default StandarPelayanan;