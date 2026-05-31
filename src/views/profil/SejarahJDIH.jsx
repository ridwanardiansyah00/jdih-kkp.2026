import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import FloatingLeftButtons from "../../components/FloatingLeftButtons";
import { FileText } from "lucide-react";

function SejarahJDIH() {
  const kategoriProdukHukum = [
    "Undang-Undang",
    "Peraturan Pemerintah Pengganti Undang-Undang",
    "Peraturan Pemerintah",
    "Peraturan Presiden",
    "Keputusan Presiden",
    "Peraturan Menteri Kelautan dan Perikanan",
    "Keputusan Menteri Kelautan dan Perikanan",
    "Peraturan Sekretaris Jenderal",
    "Peraturan Dirjen/Ka.Badan/Irjen",
    "Keputusan Sekretaris Jenderal",
    "Keputusan Dirjen/Ka.Badan/Irjen",
    "Instruksi Presiden",
    "Instruksi Menteri",
    "Surat Edaran",
    "Peraturan Perundang-Undangan K/L",
    "Keputusan a.n. Menteri Kelautan dan Perikanan",
    "Peraturan Bersama",
  ];

  const inventarisasiTahun = Array.from(
    { length: 27 },
    (_, i) => 2026 - i
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
          <div className="max-w-screen-2xl mx-auto px-6">
            <h1 className="text-center text-2xl md:text-3xl font-semibold text-white">
              Sejarah JDIH
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-screen-2xl mx-auto px-6 py-10">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Sidebar */}
            <aside className="w-full lg:w-[32%]">
              <div className="flex flex-col gap-6">
                {/* Kategori Produk Hukum */}
                <div className="overflow-hidden rounded-md bg-white shadow border border-slate-200">
                  <div className="bg-[#082567] px-6 py-4">
                    <h2 className="text-center text-xl md:text-2xl font-bold text-white">
                      Kategori Produk Hukum
                    </h2>
                  </div>

                  <div className="p-7">
                    <ul className="space-y-0">
                      {kategoriProdukHukum.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-slate-800 hover:text-blue-900 transition-all duration-300 cursor-pointer"
                        >
                          <FileText
                            size={17}
                            className="mt-1 shrink-0 text-blue-700"
                          />
                          <span className="leading-8 text-[17px]">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Inventarisasi Peraturan */}
                <div className="overflow-hidden rounded-md bg-white shadow border border-slate-200">
                  <div className="bg-blue-950 px-6 py-4">
                    <h2 className="text-center text-xl md:text-2xl font-bold text-white">
                      Inventarisasi Peraturan
                    </h2>
                  </div>

                  <div className="p-5">
                    <div className="grid grid-cols-4 gap-y-4 gap-x-3">
                      {inventarisasiTahun.map((year) => (
                        <button
                          key={year}
                          className="flex items-center gap-2 text-slate-800 hover:text-blue-900 transition-colors text-[16px]"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 shrink-0 text-slate-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          {year}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="w-full lg:w-[68%]">
              <div className="overflow-hidden rounded-md bg-white shadow border border-slate-200">
                {/* Header */}
                <div className="bg-[#082567] px-8 py-4">
                  <h2 className="text-center text-xl md:text-2xl font-bold text-white leading-snug">
                    SEJARAH JDIH (Jaringan Dokumentasi dan Informasi Hukum)
                  </h2>
                </div>

                {/* Body */}
                <div className="p-8 md:p-10">
                  <div className="space-y-3 text-justify text-[17px] md:text-[18px] leading-8 text-slate-900"> 
                    <p>
                      Ide membentuk Jaringan Dokumentasi dan Informasi Hukum Nasional (JDIHN), 
                      secara historis melekat erat dengan pembangunan hukum nasional dalam upaya 
                      mewujudkan supremasi hukum. Dikatakan demikian karena embrio pembentukan 
                      JDIHN adalah salah satu rekomendasi dari kegiatan pembangunan hukum nasional 
                      yaitu Seminar Hukum Nasional III tahun 1974 di Surabaya. Seminar hukum 
                      tersebut diselenggarakan oleh Badan Pembinaan Hukum Nasional dalam upaya 
                      membedah semua unsur pembangunan hukum dalam rangka mengingidentifikasi 
                      permasalahan dan menemukan solusi pemecahannya.
                    </p>

                    <p>
                      Pada saat membedah dokumentasi hukum, para peserta seminar mengetahui bahwa 
                      dukungan dokumentasi hukum terhadap pembangunan hukum nasional masih sangat lemah. 
                      Dokumentasi hukum belum mampu menyediakan dokumen dan informasi hukum dengan cepat 
                      dan tepat pada saat dibutuhan. Dokumentasi hukum belum mampu menyediakan akses informasi 
                      hukum yang efektip, sehingga dokumen/informasi hukum sulit dicari dan ditemukan 
                      kembali pada saat dibutuhkan untuk mendukung pelaksanaan kegiatan pembangunan hukum, 
                      seperti: penelitian hukum, perencanaan hukum, penyusunan naskah akademis, penyusunan 
                      rancangan peraturan perundang-undangan, pembentukan kebijakan pimpinan dan lain-lain.
                    </p>

                    <p>
                      Berdasarkan pengamatan peserta Seminar Hukum Nasional III Tahun 1974, 
                      faktor penyebab lemahnya dukungan dokumentasi hukum antara lain adalah:
                    </p>

                    <ol className="list-decimal pl-8 space-y-3 marker:font-semibold">
                      <li>
                        Dokumen hukum potensial, tersebar luas di instansi pemerintah di pusat sampai daerah 
                        dengan wilayah kepulauan yang sangat luas;
                      </li>

                      <li>
                        Dokumen-dokumen hukum tersebut belum semuanya dikelola dengan baik dalam suatu sistem;
                      </li>

                      <li>
                        Tenaga pengelola yang ada sangat kurang;
                      </li>

                      <li>
                        Perhatian terhadap keberadaan dokumentasi dan perpustakaan hukum masih sangat kurang.
                      </li>
                    </ol>

                    <p>
                      Peserta seminar berpendapat bahwa cara yang paling epektif untuk mengatasi kelemahan 
                      dokumentasi hukum ini adalah membentuk kerja sama antar unit pengelola dokumen hukum itu 
                      sendiri dalam suatu Jaringan dokumentasi dan informasi hukum.
                    </p>

                    <p>
                      Berdasarkan pemikiran tersebut seminar merekomendasikan:
                    </p>

                    <ol className="list-decimal pl-8 space-y-3 marker:font-semibold">
                      <li>
                        Perlu adanya suatu kebijakan nasional untuk mulai menyusun sistem
                        jaringan dokumentasi dan informasi hukum dan agar segera dapat
                        berfungsi.
                      </li>

                      <li>
                        Dalam tahap permulaan ada dua hal yang perlu dilakukan:

                        <ol className="list-[lower-alpha] pl-10 mt-3 space-y-2 marker:font-medium">
                          <li>
                            Mempermudah pencarian dan penemuan kembali peraturan perundang- undangan, yurisprudensi, 
                            serta bahan-bahan lainnya
                          </li>

                          <li>
                            Untuk dapat secepatnya mendayagunakan semua informasi yang ada Sistem Jaringan 
                            Dokumentasi dan Informasi Hukum perlu disusun dan dikembangkan. Ditentukan Pusat 
                            dan Anggota Jaringan serta menyediakan sarana yang diperlukan agar mulai berfungsi.
                          </li>
                        </ol>
                      </li>
                    </ol>

                    <p>
                      Sambil menunggu terbitnya kebijakan nasional termaksud, BPHN (Badan Pembinaan Hukum Nasional) 
                      sebagai pengemban tugas pembinaan hukum nasional, segera menyelenggarakan serangkaian 
                      lokakarya dan berhasil mempersiapkan sarana (infrastruktur) jaringan agar bisa operasional. 
                      Lokakarya tersebut adalah Lokakarya tentang : “Jaringan Dokumentasi dan Informasi Hukum” 
                      di Jakarta (1975); Lokakarya tentang “Sistem Penemuan Kembali Peraturan Perundang-undangan” 
                      di Malang (1977); Lokakarya tentang “Sistem Penyebarluasan Peraturan Perundang-undangan” 
                      di Pontianak (1977); Lokakarya tentang “Organisasi dan Komunikasi Sistem Jaringan Dokumentasi 
                      dan Informasi Hukum” di Jakarta (1978),
                    </p>

                    <p>
                      Lokakarya Tahun 1978 sepakat menunjuk BPHN sebagai Pusat Jaringan dan diberi 
                      tugas sebagai penyelenggara latihan pembinaan tenaga, tempat konsultasi, 
                      penelitian dan pengembangan sistem jaringan, serta koordinator kegiatan unit-unit 
                      jaringan dalam rangka pengembangan jaringan. Dalam rangka melaksanakan tugas 
                      tersebut pada tahun 1988 BPHN sebagai Pusat JDIH mengeluarkan pedoman pengelolaaan 
                      dokumen hukum yang diberi nama ”Manual Unit Jaringan Dokumentasi dan Informasi Hukum” 
                      yang terdiri dari V modul yaitu:
                    </p>

                    <ol className="list-decimal pl-8 space-y-3 marker:font-semibold">
                      <li>
                        Modul I: Pedoman Prosedur Kerja Pusat Jaringan Dokumentasi dan Informasi Hukum.
                      </li>

                      <li>
                        Modul II: Pedoman Pengumpulan Bahan (Kegiatan Prakatalogan).
                      </li>

                      <li>
                        Modul III: Pedoman Pengolahan Sub-Modul IIIA: Pedoman Teknis Pengkatalogan Bahan Pustaka dan Pascakatalogan (berdasarkan UDC); 
                        Sub-Modul IIIB: Pedoman Teknis Pengkatalogan Peraturan Perundang-undangan; Sub-Modul IIIC: Pedoman Teknis
                      </li>

                      <li>
                        Modul IV: Pedoman Peelayaan Informasi;
                      </li>

                      <li>
                        Modul V: Sarana Kerja Unit Jaringan Dokumentasi dan Informasi Hukum
                      </li>
                    </ol>

                    <p>
                      Dari tahun 1978 – 1999, BPHN melakukan pembinaan dan pengembangan JDIH hanya berdasarkan 
                      kesepakatan tersebut. Banyak upaya pembinaan dan pengembangan yang telah dilakukan, namun 
                      temu kembali informasi belum dapat dilakukan dengan cepat, tepat, dan pendayagunaan informasi 
                      belum dapat terselenggara dengan baik.
                    </p>

                    <p>
                      Selama Pemerintahan Orde Baru rekomendasi untuk membentuk JDIHN kurang mendapat perhatian. 
                      Jaringan Dokumentasi dan Informasi Hukum disebut dalam GBHN 1993 bidang pembangunan hukum 
                      sektor sarana dan prasarana sebagai sarana penunjang pembangunan hukum. Namun dalam era 
                      Pemerintahan Reformasi rekomendasi termaksud langsung diwujudkan dengan mengundangkan Keputusan 
                      Presiden Nomor 91 Tahun 1999 tentang Jaringan Dokumentasi dan Informasi Hukum Nasional dalam 
                      Lembaran Negara No. 135. Kemudian dalam rangka melaksanakan . Instruksi Presiden Nomor 9 Tahun 2011 
                      tentang Rencana Aksi Pencegahan dan Pemerantasan Korupsi Tahun 2011, Keputusan Presiden tersebut 
                      direvitalisasi dan diganti dengan Peraturan Presiden Nomor 33 Tahun 2012 tentang Jaringan 
                      Dokumentasi dan Informasi Hukum Nasional, Lembaran Negara No 82.
                    </p>

                    <p>
                      Untuk menyesuaikan dengan perkembangan ilmu pengetahuan dan teknologi, Manual Unit Jaringan Dokumentasi 
                      dan Informasi Hukum juga telah direvisi dan dikembangkan oleh Pusat Jaringan dan dijadikan lampiran yang 
                      tidak terpisahkan dari Peraturan Menteri Hukum dan HAM Nomor 02 Tahun 2013 Tentang Standardisasi 
                      Pengelolaan Teknis Dokumentasi Dan Informasi Hukum, yang terdiri dari:
                    </p>

                    <ol className="list-decimal pl-8 space-y-3 marker:font-semibold">
                        <ol className="list-[lower-alpha] pl-10 mt-3 space-y-2 marker:font-medium">
                          <li>
                            Standardisasi Pengadaan Dokumen Hukum.
                          </li>

                          <li>
                            Standardisasi Pembuatan Daftar Inventarisasi Peraturan
                            Perundang-undangan dan Instrumen Hukum lainnya.
                          </li>

                          <li>
                            Standardisasi Pembuatan Katalog Peraturan
                            Perundang-undangan dan Instrumen Hukum lainnya.
                          </li>

                          <li>
                            Standardisasi Pembuatan Abstrak Peraturan
                            Perundang-undangan.
                          </li>

                          <li>
                            Standardisasi Pembuatan Katalog Monografi Hukum.
                          </li>

                          <li>
                            Standardisasi Penyusunan Indeks Majalah Hukum.
                          </li>

                          <li>
                            Standardisasi Penyusunan Indeks Kliping Koran.
                          </li>

                          <li>
                            Standardisasi Pelayanan Informasi Hukum.
                          </li>

                          <li>
                            Standardisasi Website JDIHN.
                          </li>

                          <li>
                            Standardisasi Monev Pengelolaan JDIHN;
                          </li>

                          <li>
                            Standardisasi Pelaporan Penyelenggaraan JDIHN.
                          </li>
                        </ol>
                    </ol>

                    <p>
                      Pasal 4 Peraturan Presiden Nomor 33 Tahun 2012 menetapkan kembali BPHN sebagai Pusat 
                      JDIHN dan Anggota JDIHN terdiri dari:
                    </p>
                    
                    <ol className="list-decimal pl-8 space-y-3 marker:font-semibold">
                      <li>
                        Biro Hukum dan/atau unit kerja yang tugas dan fungsinya menyelenggarakan kegiatan yang 
                        berkaitan dengan dokumen hukum pada:
                        <ol className="list-[lower-alpha] pl-10 mt-3 space-y-2 marker:font-medium">
                          <li>
                            Kementerian Negara;
                          </li>

                          <li>
                            Sekretariat Lembaga Negara;
                          </li>

                          <li>
                            Lembaga Pemerintah Non Kementerian;
                          </li>

                          <li>
                            Pemerintah Provinsi;
                          </li>

                          <li>
                            Pemerintah Kabupaten/Kota; dan
                          </li>

                          <li>
                            Sekreariat Dewan Perwakilan Rakyat Daerah Tingkat Provinsi dan Kabupaten/Kota.
                          </li>
                        </ol>
                      </li>

                      <li>
                        Perpustakaan pada perguruan tinggi negeri dan perguruan tinggi swasta;
                      </li>

                      <li>
                        Lembaga Lain yang bergerak di bidang pengembangan dokumentasi dan informasi hukum yang 
                        ditetapkan oleh Menteri.

                        <p>
                          Pasal 3 Peraturan Presiden Nomor 33 Tahun 2012 menegaskan bahwa tujuan dari JDIHN adalah:
                        </p>

                        <ol className="list-[lower-alpha] pl-10 mt-3 space-y-2 marker:font-medium">
                          <li>
                            Menjamin terciptanya Pengelolaan Dokumentasi dan Informasi Hukum yang terpadu dan 
                            terintegrasi di berbagai instansi pemerintah dan institusi lainnya;
                          </li>

                          <li>
                            Menjamin ketersediaan dokumentasi dan informasi hukum yang lengkap dan akurat, 
                            serta dapat diakses secara cepat dan mudah;
                          </li>

                          <li>
                            Mengembangkan kerja sama yang efektif antara Pusat jaringan dan Anggota jaringan serta 
                            antar sesama Anggota jaringan dalam rangka penyediaan dokumentasi dan informasi hukum; dan
                          </li>

                          <li>
                            Meningkatkan kualitas pembangunan hukum nasional dan pelayanan kepada publik sebagai salah 
                            satu wujud ketatapemerintahan yang baik, transparan, efektif, efisien, dan bertanggung jawab.
                          </li>
                        </ol>
                      </li>
                    </ol>

                    <p>
                      Sejarah pembentukan JDIHN di atas menunjukkan betapa pentingnya kerjasama pengelolaan dokumen 
                      dan informasi hukum untuk mempercepat pembangunan hukum nasional yang berkualitas. Untuk membangun 
                      akses informasi hukum yang terintegrasi, secara nasional semua Anggota JDIHN wajib mengelola 
                      dokumen dan informasi hukum yang ada dalam kewenangannya dengan menggunakan modul/standar yang ada 
                      dan meningkatkan akselerasinya dengan memanfaatkan kecanggihan teknologi informasi dan komunikasi. 
                      Tersedianya akses informasi hukum bagi semua warga negara merupakan conditio sine quanon dalam 
                      mewujudkan supremasi hukum. Sementara menyediakan akses informasi hukum adalah tugas dari 
                      dokumentasi hukum Anggota Jaringan.
                    </p>

                    <p>
                      sumber : http://jdihn.bphn.go.id/sejarah-jdihn/
                    </p>

                  </div>
                </div>
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

export default SejarahJDIH;