import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

// PROFIL //
import SejarahJDIH from "./views/profil/SejarahJDIH";
import VisiMisi from "./views/profil/VisiMisi";
import DasarHukum from "./views/profil/DasarHukum";
import SOP from "./views/profil/SOP";
import Organisasi from "./views/profil/Organisasi";
import SDMPengelola from "./views/profil/SDMPengelola";
import StandarPelayanan from "./views/profil/StandarPelayanan";
import MaklumatPelayanan from "./views/profil/MaklumatPelayanan";

// DOKUMEN HUKUM //
import PeraturanPerundangan from "./views/dokumen-hukum/PeraturanPerundangan";
import Monografi from "./views/dokumen-hukum/Monografi";
import Artikel from "./views/dokumen-hukum/Artikel";
import PutusanPengadilan from "./views/dokumen-hukum/PutusanPengadilan";
import Perjanjian from "./views/dokumen-hukum/dokumen-hukum-lain/Perjanjian";
import DokumenLangka from "./views/dokumen-hukum/dokumen-hukum-lain/DokumenLangka";
import PeraturanAsing from "./views/dokumen-hukum/dokumen-hukum-lain/PeraturanAsing";

// DOKUMEN PEMBENTUKAN PUU //
import ProgramPenyusunan from "./views/dokumen-pembentukan-puu/ProgramPenyusunan";
import RancanganPeraturan from "./views/dokumen-pembentukan-puu/RancanganPeraturan";
import NaskahUrgensi from "./views/dokumen-pembentukan-puu/NaskahUrgensi";
import AnalisisEvaluasi from "./views/dokumen-pembentukan-puu/AnalisisEvaluasi";
import RisalahRapat from "./views/dokumen-pembentukan-puu/RisalahRapat";
import KajianHukum from "./views/dokumen-pembentukan-puu/KajianHukum";

// INFORMASI LAIN //
import MultimediaInteraktif from "./views/informasi-lain/MultimediaInteraktif";
import Glosarium from "./views/informasi-lain/Glosarium";
import Sanksi from "./views/informasi-lain/Sanksi";
import AdvokasiHukum from "./views/informasi-lain/AdvokasiHukum";
import PetaInteraktif from "./views/informasi-lain/sistem-informasi-batas-maritim/PetaInteraktif";
import VideoEdukasi from "./views/informasi-lain/sistem-informasi-batas-maritim/VideoEdukasi";
import Tentang from "./views/informasi-lain/sistem-informasi-batas-maritim/Tentang";

// SURVEI //
import SurveiKepuasanMasyarakat from "./views/survei/SurveiKepuasanMasyarakat";
import SurveiPersepsiAntiKorupsi from "./views/survei/SurveiPersepsiAntiKorupsi";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      // PROFIL //
      <Route path="/profil/sejarah-jdih" element={<SejarahJDIH />} />
      <Route path="/profil/visi-misi" element={<VisiMisi />} />
      <Route path="/profil/dasar-hukum" element={<DasarHukum />} />
      <Route path="/profil/sop" element={<SOP />} />
      <Route path="/profil/organisasi" element={<Organisasi />} />
      <Route path="/profil/sdm-pengelola" element={<SDMPengelola />} />
      <Route path="/profil/standar-pelayanan" element={<StandarPelayanan />} />
      <Route path="/profil/maklumat-pelayanan" element={<MaklumatPelayanan />} />

      // DOKUMEN HUKUM //
      <Route path="/dokumen-hukum/peraturan-perundangan" element={<PeraturanPerundangan />} />
      <Route path="/dokumen-hukum/monografi" element={<Monografi />} />
      <Route path="/dokumen-hukum/artikel" element={<Artikel />} />
      <Route path="/dokumen-hukum/putusan-pengadilan" element={<PutusanPengadilan />} />
      <Route path="/dokumen-hukum/dokumen-hukum-lain/perjanjian" element={<Perjanjian />} />
      <Route path="/dokumen-hukum/dokumen-hukum-lain/dokumen-langka" element={<DokumenLangka />} />
      <Route path="/dokumen-hukum/dokumen-hukum-lain/peraturan-asing" element={<PeraturanAsing />} />

      // DOKUMEN PEMBENTUKAN PUU //
      <Route path="/dokumen-pembentukan-puu/program-penyusunan" element={<ProgramPenyusunan />} />
      <Route path="/dokumen-pembentukan-puu/rancangan-peraturan" element={<RancanganPeraturan />} /> 
      <Route path="/dokumen-pembentukan-puu/naskah-urgensi" element={<NaskahUrgensi />} />
      <Route path="/dokumen-pembentukan-puu/analisis-evaluasi" element={<AnalisisEvaluasi />} />\
      <Route path="/dokumen-pembentukan-puu/risalah-rapat" element={<RisalahRapat />} />
      <Route path="/dokumen-pembentukan-puu/kajian-hukum" element={<KajianHukum />} />

      // INFORMASI LAIN //
      <Route path="/informasi-lain/multimedia-interaktif" element={<MultimediaInteraktif />} />
      <Route path="/informasi-lain/glosarium"element={<Glosarium />} />
      <Route path="/informasi-lain/sanksi" element={<Sanksi />} />
      <Route path="/informasi-lain/advokasi-hukum" element={<AdvokasiHukum />} />
      <Route path="/informasi-lain/sistem-informasi-batas-maritim/peta-interaktif" element={<PetaInteraktif />} />
      <Route path="/informasi-lain/sistem-informasi-batas-maritim/video-edukasi" element={<VideoEdukasi />} />
      <Route path="/informasi-lain/sistem-informasi-batas-maritim/tentang" element={<Tentang />} />

      // SURVEI //
      <Route path="/survei/survei-kepuasan-masyarakat" element={<SurveiKepuasanMasyarakat />} />
      <Route path="/survei/survei-persepsi-anti-korupsi" element={<SurveiPersepsiAntiKorupsi />} />
    </Routes>
  );
}

export default App;