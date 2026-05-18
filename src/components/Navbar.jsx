import { FaChevronDown, FaChevronRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-all duration-300">
      <div className="w-full px-10">
        <div className="grid grid-cols-[auto_1fr_auto] items-center h-20">

          {/* LOGO */}
          <div className="flex items-center gap-2 justify-self-start">
            <img src="/images/logo2.png" alt="logo globe" className="h-10 w-auto object-contain"/>
            <img src="/images/logo1.png" alt="logo garuda" className="h-10 w-auto object-contain"/>
            <img src="/images/logo3.png" alt="logo jdih" className="h-10 w-auto object-contain"/>
          </div>

          {/* MENU */}
          <ul className="flex items-center justify-start gap-8 text-sm font-medium text-gray-800 ml-37">

            {/* BERANDA */}
            <li>
              <Link to="/" className="relative inline-block hover:text-blue-600 transition duration-300 group">
                Beranda
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>

            {/* PROFIL */}
            <li className="relative group cursor-pointer">
              <div className="flex items-center gap-1 hover:text-blue-600 transition duration-300">
                <span className="relative inline-block">
                  Profil
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </span>
                <FaChevronDown size={8} />
              </div>

              <div className="absolute top-full left-0 mt-4 w-58 bg-white rounded-2xl shadow-2xl opacity-0 invisible translate-y-3 scale-95 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:scale-100 transition-all duration-300 ease-out z-50">
                <ul className="py-4 text-sm text-gray-700">
                  <li>
                    <Link
                      to="/profil/sejarah-jdih"
                      className="block px-5 py-3 hover:bg-blue-50"
                    >
                      Sejarah JDIH
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/profil/visi-misi"
                      className="block px-5 py-3 hover:bg-blue-50"
                    >
                      Visi & Misi
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/profil/dasar-hukum"
                      className="block px-5 py-3 hover:bg-blue-50"
                    >
                      Dasar Hukum
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/profil/sop"
                      className="block px-5 py-3 hover:bg-blue-50"
                    >
                      Standar Operasional Prosedur
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/profil/organisasi"
                      className="block px-5 py-3 hover:bg-blue-50"
                    >
                      Organisasi
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/profil/sdm-pengelola"
                      className="block px-5 py-3 hover:bg-blue-50"
                    >
                      SDM Pengelola
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/profil/standar-pelayanan"
                      className="block px-5 py-3 hover:bg-blue-50"
                    >
                      Standar Pelayanan
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/profil/maklumat-pelayanan"
                      className="block px-5 py-3 hover:bg-blue-50"
                    >
                      Maklumat Pelayanan
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* DOKUMEN HUKUM */}
            <li className="relative group cursor-pointer">
              <div className="flex items-center gap-1 hover:text-blue-600 transition duration-300">
                <span className="relative inline-block">
                  Dokumen Hukum
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </span>
                <FaChevronDown size={8} />
              </div>

              <div className="absolute top-full left-0 mt-4 w-62 bg-white rounded-2xl shadow-2xl opacity-0 invisible translate-y-3 scale-95 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:scale-100 transition-all duration-300 ease-out z-50">
                <ul className="py-4 text-sm text-gray-700">
                  <li>
                    <Link
                      to="/dokumen-hukum/peraturan-perundangan"
                      className="block px-5 py-3 hover:bg-blue-50"
                    >
                      Peraturan Perundang-undangan
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dokumen-hukum/monografi"
                      className="block px-5 py-3 hover:bg-blue-50"
                    >
                      Monografi
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/dokumen-hukum/artikel"
                      className="block px-5 py-3 hover:bg-blue-50"
                    >
                      Artikel
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/dokumen-hukum/putusan-pengadilan"
                      className="block px-5 py-3 hover:bg-blue-50"
                    >
                      Putusan Pengadilan
                    </Link>
                  </li>

                  <li className="relative group/sub px-5 py-3 hover:bg-blue-50 flex justify-between items-center">
                    Dokumen Hukum Lain
                    <FaChevronRight size={10} />

                    <div className="absolute top-0 left-full ml-2 w-55 bg-white rounded-2xl shadow-2xl opacity-0 invisible translate-x-3 scale-95 group-hover/sub:opacity-100 group-hover/sub:visible group-hover/sub:translate-x-0 group-hover/sub:scale-100 transition-all duration-300 ease-out">
                      <ul className="py-4 text-sm text-gray-700">

                        <li>
                          <Link
                            to="/dokumen-hukum/dokumen-hukum-lain/perjanjian"
                            className="block px-5 py-3 hover:bg-blue-50"
                          >
                            Perjanjian
                          </Link>
                        </li>

                        <li>
                          <Link
                            to="/dokumen-hukum/dokumen-hukum-lain/dokumen-langka"
                            className="block px-5 py-3 hover:bg-blue-50"
                          >
                            Dokumen Hukum Langka
                          </Link>
                        </li>

                        <li>
                          <Link
                            to="/dokumen-hukum/dokumen-hukum-lain/peraturan-asing"
                            className="block px-5 py-3 hover:bg-blue-50"
                          >
                            Peraturan Asing
                          </Link>
                        </li>

                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>

            {/* DOKUMEN PEMBENTUKAN PUU */}
            <li className="relative group cursor-pointer">
              <div className="flex items-center gap-1 hover:text-blue-600 transition duration-300">
                <span className="relative inline-block">
                  Dokumen Pembentukan PUU
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </span>
                <FaChevronDown size={8} />
              </div>

              <div className="absolute top-full left-0 mt-4 w-55 bg-white rounded-2xl shadow-2xl opacity-0 invisible translate-y-3 scale-95 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:scale-100 transition-all duration-300 ease-out z-50">
                <ul className="py-4 text-sm text-gray-700">

                  <li>
                    <Link
                      to="/dokumen-pembentukan-puu/program-penyusunan"
                      className="block px-5 py-3 hover:bg-blue-50"
                    >
                      Program Penyusunan
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/dokumen-pembentukan-puu/rancangan-peraturan"
                      className="block px-5 py-3 hover:bg-blue-50"
                    >
                      Rancangan Peraturan
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/dokumen-pembentukan-puu/naskah-urgensi"
                      className="block px-5 py-3 hover:bg-blue-50"
                    >
                      Naskah Urgensi
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/dokumen-pembentukan-puu/analisis-evaluasi"
                      className="block px-5 py-3 hover:bg-blue-50"
                    >
                      Analisis & Evaluasi
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/dokumen-pembentukan-puu/risalah-rapat"
                      className="block px-5 py-3 hover:bg-blue-50"
                    >
                      Risalah Rapat
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/dokumen-pembentukan-puu/kajian-hukum"
                      className="block px-5 py-3 hover:bg-blue-50"
                    >
                      Kajian Hukum
                    </Link>
                  </li>

                </ul>
              </div>
            </li>

            {/* INFORMASI LAIN */}
            <li className="relative group cursor-pointer">
              <div className="flex items-center gap-1 hover:text-blue-600 transition duration-300">
                <span className="relative inline-block">
                  Informasi Lain
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </span>
                <FaChevronDown size={8} />
              </div>

              <div className="absolute top-full left-0 mt-4 w-90 bg-white rounded-2xl shadow-2xl opacity-0 invisible translate-y-3 scale-95 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:scale-100 transition-all duration-300 ease-out z-50">
                <ul className="py-4 text-sm text-gray-700">

                  <li className="relative group/sub px-5 py-3 hover:bg-blue-50 flex justify-between items-center">
                    Sistem Informasi Batas Maritim Negara Indonesia
                    <FaChevronRight size={10} />

                    <div className="absolute top-0 right-full mr-2 w-48 bg-white rounded-2xl shadow-2xl opacity-0 invisible -translate-x-3 scale-95 group-hover/sub:opacity-100 group-hover/sub:visible group-hover/sub:translate-x-0 group-hover/sub:scale-100 transition-all duration-300 ease-out z-50">
                      <ul className="py-4 text-sm text-gray-700">

                      <li>
                        <Link
                          to="/informasi-lain/sistem-informasi-batas-maritim/peta-interaktif"
                          className="block px-5 py-3 hover:bg-blue-50"
                        >
                          Peta Interaktif
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/informasi-lain/sistem-informasi-batas-maritim/video-edukasi"
                          className="block px-5 py-3 hover:bg-blue-50"
                        >
                          Video Edukasi
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/informasi-lain/sistem-informasi-batas-maritim/tentang"
                          className="block px-5 py-3 hover:bg-blue-50"
                        >
                          Tentang
                        </Link>
                      </li>

                    </ul>
                                        </div>
                                      </li>

                                      <li>
                      <Link
                        to="/informasi-lain/multimedia-interaktif"
                        className="block px-5 py-3 hover:bg-blue-50"
                      >
                        Multimedia Interaktif
                      </Link>
                    </li>
                                      <li>
                      <Link
                        to="/informasi-lain/glosarium"
                        className="block px-5 py-3 hover:bg-blue-50"
                      >
                        Glosarium
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/informasi-lain/sanksi"
                        className="block px-5 py-3 hover:bg-blue-50"
                      >
                        Sanksi
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/informasi-lain/advokasi-hukum"
                        className="block px-5 py-3 hover:bg-blue-50"
                      >
                        Advokasi Hukum
                      </Link>
                    </li>

                </ul>
              </div>
            </li>

            {/* SURVEI */}
            <li className="relative group cursor-pointer">
              <div className="flex items-center gap-1 hover:text-blue-600 transition duration-300">
                <span className="relative inline-block">
                  Survei
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </span>
                <FaChevronDown size={8} />
              </div>

              <div className="absolute top-full left-0 mt-4 w-95 bg-white rounded-2xl shadow-2xl opacity-0 invisible translate-y-3 scale-95 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:scale-100 transition-all duration-300 ease-out z-50">
                <ul className="py-4 text-sm text-gray-700">

                  <li>
                    <Link
                      to="/survei/survei-kepuasan-masyarakat"
                      className="block px-5 py-3 hover:bg-blue-50"
                    >
                      Survei Kepuasan Masyarakat
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/survei/survei-persepsi-anti-korupsi"
                      className="block px-5 py-3 hover:bg-blue-50"
                    >
                      Survei Persepsi Anti Korupsi dan Kualitas Pelayanan
                    </Link>
                  </li>

                </ul>
              </div>
            </li>

            {/* MASUK */}
            <li className="cursor-pointer">
              <span className="relative inline-block hover:text-blue-600 transition duration-300 group">
                Masuk
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </li>

          </ul>

          {/* LANGUAGE */}
          <div className="justify-self-end text-sm font-medium text-gray-800 pr-2 cursor-pointer hover:text-blue-600 transition duration-300">
            ID | EN
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar