import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import FloatingLeftButtons from "../../components/FloatingLeftButtons";

function MultimediaInteraktif() {
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
              Multimedia Interaktif
            </h1>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-screen-2xl mx-auto px-6 lg:px-10 py-8">
          <div className="bg-white rounded-xl shadow border border-slate-200 p-6 md:p-8 min-h-150 flex items-center justify-center">
            <p className="text-slate-500 text-lg md:text-xl">
              Konten multimedia interaktif akan ditampilkan di sini
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTopButton />
      <FloatingLeftButtons />
    </>
  );
}

export default MultimediaInteraktif;