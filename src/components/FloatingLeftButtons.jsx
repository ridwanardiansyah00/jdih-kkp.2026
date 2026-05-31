import { FaWhatsapp, FaUniversalAccess } from "react-icons/fa";

export default function FloatingLeftButtons() {
  return (
    <div className="fixed bottom-8 left-3 z-50 flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
      >
        <FaWhatsapp size={26} className="text-white" />
      </a>

      {/* Accessibility */}
      <button
        aria-label="Accessibility"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0057B8] shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
      >
        <FaUniversalAccess size={24} className="text-white" />
      </button>
    </div>
  );
}