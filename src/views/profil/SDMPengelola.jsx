import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import FloatingLeftButtons from "../../components/FloatingLeftButtons";

function SDMPengelola() {
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
              SDM Pengelola JDIH
            </h1>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-10 px-6">
          <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg border border-gray-200 p-8">
            <div className="text-gray-700 text-lg leading-relaxed space-y-0">
              <p>
                Kepala Biro Hukum bersama Tim Kerja Peraturan
                Perundang-undangan III melaksanakan tugas dan fungsi
                Pusat JDIH KKP dengan sumber daya manusia sebagai berikut:
              </p>

              <ol className="list-decimal pl-8 space-y-2">
                <li>
                  Dr. Effin Martiana, S.H., M.H., Kepala Biro Hukum;
                </li>
                <li>
                  Latifah Rahmi Nasution, S.H., M.H., Perancang Peraturan
                  Perundang-undangan Ahli Madya selaku Ketua Tim Kerja
                  Peraturan Perundang-undangan III;
                </li>
                <li>
                  Rizky Mirgawati Amalian Sahbirin, S.H., Perancang
                  Peraturan Perundang-undangan Ahli Muda;
                </li>
                <li>
                  Muhammad Zaenal Muttaqin, S.T., Pranata Komputer Ahli
                  Pertama;
                </li>
                <li>
                  Kukuh Dwi Setiyono, S.Kom., Pranata Komputer Ahli
                  Pertama; dan
                </li>
                <li>
                  Rury Salam, S.H., Analis Kebijakan Ahli Pertama.
                </li>
              </ol>

              {/* SDM Image */}
              <div className="mt-10 flex justify-center">
                <img
                  src="/images/sdm-pengelola.png"
                  alt="SDM Pengelola JDIH"
                  className="w-full max-w-5xl rounded-lg shadow-md"
                />
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

export default SDMPengelola;