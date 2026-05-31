import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import FloatingLeftButtons from "../../components/FloatingLeftButtons";

function MaklumatPelayanan() {
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
              Maklumat Pelayanan
            </h1>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-10 px-6">
          <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg border border-gray-200 p-5">
            <div className="flex justify-center">
              <img
                src="/images/maklumat-pelayanan.png"
                alt="Maklumat Pelayanan"
                className="w-full max-w-6xl rounded-lg shadow-md"
              />
            </div>

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

export default MaklumatPelayanan;