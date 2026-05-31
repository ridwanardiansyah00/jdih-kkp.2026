import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import FloatingLeftButtons from "../../components/FloatingLeftButtons";

function Organisasi() {
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
              Struktur Organisasi
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-10 px-6">
          <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg border border-gray-200 p-8">
            
            {/* Description */}
            <p className="text-gray-700 text-lg leading-relaxed">
              Sesuai dengan Peraturan Presiden Nomor 33 Tahun 2012 tentang
              Jaringan Dokumentasi dan Informasi Hukum Nasional, JDIH
              Kementerian Kelautan dan Perikanan merupakan Anggota JDIH
              Nasional yang dikoordinasikan oleh Badan Pembinaan Hukum
              Nasional (BPHN) Kementerian Hukum dan HAM selaku Pusat JDIHN.
            </p>

            {/* Main Titles */}
            <div className="mt-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-700 uppercase">
                Struktur Organisasi
              </h2>

              <h3 className="mt-4 text-2xl md:text-4xl font-bold text-gray-700 uppercase leading-tight">
                JDIH Kementerian Kelautan dan Perikanan
              </h3>
            </div>

            {/* First Organization Image */}
            <div className="mt-10 flex justify-center">
              <img
                src="/images/struktur-organisasi.png"
                alt="Struktur Organisasi JDIH KKP"
                className="w-full max-w-6xl rounded-lg shadow-md"
              />
            </div>

            {/* Text Description */}
            <div className="mt-12 text-gray-700 text-lg leading-relaxed space-y-5">
              <div>
                <p>
                  Berdasarkan Peraturan Menteri Kelautan dan Perikanan Nomor 43 Tahun 2021 tentang Jaringan Dokumentasi 
                  dan Informasi Hukum di Lingkungan Kementerian Kelautan dan Perikanan, organisasi JDIH KKP terdiri atas 
                  Pusat JDIH KKP yaitu Biro Hukum, Sekretariat Jenderal, dan Anggota JDIH KKP yang terdiri atas
                </p>

                <ol className="list-none mt-4 space-y-0 pl-6">
                  <li>a. Biro Perencanaan, Sekretariat Jenderal;</li>
                  <li>b. Biro Keuangan, Sekretariat Jenderal;</li>
                  <li>
                    c. Biro Sumber Daya Manusia Aparatur dan Organisasi,
                    Sekretariat Jenderal;
                  </li>
                  <li>
                    d. Biro Hubungan Masyarakat dan Kerja Sama Luar Negeri,
                    Sekretariat Jenderal;
                  </li>
                  <li>
                    e. Biro Umum dan Pengadaan Barang dan/atau Jasa,
                    Sekretariat Jenderal;
                  </li>
                  <li>
                    f. Pusat Data, Statistik, dan Informasi, Sekretariat
                    Jenderal;
                  </li>
                  <li>
                    g. Sekretariat Direktorat Jenderal Pengelolaan Ruang Laut,
                    Direktorat Jenderal Pengelolaan Ruang Laut;
                  </li>
                  <li>
                    h. Sekretariat Direktorat Jenderal Perikanan Tangkap,
                    Direktorat Jenderal Perikanan Tangkap;
                  </li>
                  <li>
                    i. Sekretariat Direktorat Jenderal Perikanan Budidaya,
                    Direktorat Jenderal Perikanan Budidaya;
                  </li>
                  <li>
                    j. Sekretariat Direktorat Jenderal Pengelolaan Daya Saing
                    Produk Kelautan dan Perikanan, Direktorat Jenderal
                    Pengelolaan Daya Saing Produk Kelautan dan Perikanan;
                  </li>
                  <li>
                    k. Sekretariat Direktorat Jenderal Pengawasan Sumber Daya
                    Kelautan dan Perikanan, Direktorat Jenderal Pengawasan
                    Sumber Daya Kelautan dan Perikanan;
                  </li>
                  <li>
                    l. Sekretariat Inspektorat Jenderal, Inspektorat Jenderal;
                  </li>
                  <li>
                    m. Sekretariat Badan Riset dan Sumber Daya Manusia Kelautan
                    dan Perikanan, Badan Riset dan Sumber Daya Manusia Kelautan
                    dan Perikanan; dan
                  </li>
                  <li>
                    n. Sekretariat Badan Karantina Ikan, Pengendalian Mutu, dan
                    Keamanan Hasil Perikanan, Badan Karantina Ikan,
                    Pengendalian Mutu, dan Keamanan Hasil Perikanan.
                  </li>
                </ol>
              </div>

              <div>
                <p>
                  Berdasarkan Keputusan Menteri Kelautan dan Perikanan Nomor
                  13/SJ Tahun 2024 tentang Tim Teknis Pengelola Jaringan
                  Dokumentasi dan Informasi Hukum Kementerian Kelautan dan
                  Perikanan, Tim Teknis JDIH KKP terdiri atas:
                </p>
              </div>
            </div>

            {/* Second Organization Image */}
            <div className="mt-10 flex justify-center">
              <img
                src="/images/tim-teknis.png"
                alt="Tim Teknis JDIH KKP"
                className="w-full max-w-6xl rounded-lg shadow-md"
              />
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

export default Organisasi;