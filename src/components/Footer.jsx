import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaTiktok,
  FaTwitter,
  FaMapMarkerAlt,
  FaTelegramPlane,
  FaWhatsapp,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full">
      {/* MAIN FOOTER */}
      <div
        className="bg-[#071a3d] text-white"
        style={{
          background:
            "radial-gradient(circle at left, rgba(0,100,255,0.08), transparent 25%), radial-gradient(circle at right, rgba(0,100,255,0.08), transparent 25%), #071a3d",
        }}
      >
        <div className="max-w-7xl mx-auto px-8 lg:px-10 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* TAUTAN */}
            <div>
              <h3 className="text-xl font-bold uppercase">TAUTAN</h3>
              <div className="w-12 h-1 bg-red-600 mt-3 mb-6 rounded-full"></div>

              <ul className="space-y-3 text-[15px] text-gray-200 leading-relaxed">
                <li>Kementerian Kelautan dan Perikanan</li>
                <li>JDIH Nasional</li>
                <li>JDIH BPHN</li>
                <li>Badan Pembinaan Hukum Nasional</li>
                <li>peraturan.go.id</li>
              </ul>
            </div>

            {/* KONTAK */}
            <div className="lg:border-l lg:border-r border-white/10 lg:px-8">
              <h3 className="text-xl font-bold uppercase">KONTAK KAMI</h3>
              <div className="w-12 h-1 bg-red-600 mt-3 mb-6 rounded-full"></div>

              <div className="space-y-3 text-[14px] text-gray-200">
                <p className="font-semibold text-white text-base">
                  BIRO HUKUM - KKP
                </p>

                <div className="flex gap-3 items-start">
                  <FaMapMarkerAlt className="mt-1 shrink-0 text-sm" />
                  <p className="leading-relaxed">
                    Gedung Mina Bahari IV Lt 14
                    <br />
                    Jl. Medan Merdeka Timur No. 16, Jakarta Pusat
                  </p>
                </div>

                <div className="flex gap-3 items-center">
                  <FaTelegramPlane className="text-sm" />
                  <span>08561250293</span>
                </div>

                <div className="flex gap-3 items-center">
                  <FaWhatsapp className="text-sm" />
                  <span>08561250293</span>
                </div>

                <div className="flex gap-3 items-center">
                  <FaPhoneAlt className="text-sm" />
                  <span>(021) 3520340</span>
                </div>

                <div className="flex gap-3 items-center">
                  <FaFax className="text-sm" />
                  <span>(021) 3520340 (Fax)</span>
                </div>

                <div className="flex gap-3 items-center">
                  <FaEnvelope className="text-sm" />
                  <span>jdih@kkp.go.id</span>
                </div>
              </div>
            </div>

            {/* MEDIA SOSIAL */}
            <div>
              <h3 className="text-xl font-bold uppercase">MEDIA SOSIAL</h3>
              <div className="w-12 h-1 bg-red-600 mt-3 mb-6 rounded-full"></div>

              <div className="flex gap-3 text-2xl mb-8">
                <FaInstagram className="cursor-pointer hover:scale-110 transition" />
                <FaTwitter className="cursor-pointer hover:scale-110 transition" />
                <FaYoutube className="cursor-pointer hover:scale-110 transition" />
                <FaFacebookF className="cursor-pointer hover:scale-110 transition" />
                <FaTiktok className="cursor-pointer hover:scale-110 transition" />
              </div>

              <h3 className="text-xl font-bold uppercase">APLIKASI MOBILE</h3>
              <div className="w-12 h-1 bg-red-600 mt-3 mb-5 rounded-full"></div>

              <button className="bg-black rounded-lg px-5 py-3 shadow-lg hover:scale-105 transition">
                <div className="text-[10px] text-gray-400 uppercase">
                  GET IT ON
                </div>
                <div className="text-lg font-semibold">Google Play</div>
              </button>
            </div>

            {/* PENGADUAN */}
            <div className="lg:border-l border-white/10 lg:pl-8">
              <h3 className="text-xl font-bold uppercase">
                SALURAN PENGADUAN
              </h3>
              <div className="w-12 h-1 bg-red-600 mt-3 mb-6 rounded-full"></div>

              <div className="flex gap-4">
                <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center text-red-600 font-bold text-lg">
                  LAPOR!
                </div>

                <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center text-blue-600 font-bold text-lg">
                  WBS
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-4 text-center border-t border-gray-200">
        <p className="text-gray-700 text-sm">
          © Copyright <span className="font-semibold">Pusdatin KKP</span> 2022.
        </p>
      </div>
    </footer>
  );
}

export default Footer;