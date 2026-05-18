import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import FloatingLeftButtons from "../../components/FloatingLeftButtons";

function DasarHukum() {
  return (
    <>
      <Navbar />

      <main className="pt-20 min-h-screen px-10">
        <div className="pt-12">
          <h1 className="text-4xl font-bold text-blue-900">
            Dasar Hukum
          </h1>

          <p className="mt-6 text-gray-600">
            Halaman dasar hukum JDIH.
          </p>
        </div>
      </main>

      <Footer />
      <ScrollToTopButton />
      <FloatingLeftButtons />
    </>
  );
}

export default DasarHukum;