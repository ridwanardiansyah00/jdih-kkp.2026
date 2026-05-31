import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

function ScrollToTopButton() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setScrollProgress(progress);
      setVisible(scrollTop > 200);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const waterHeight = 64 - (scrollProgress / 100) * 64;

  return (
    <>
      {/* Wave animation style */}
      <style>
        {`
          @keyframes waveMove {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>

      <button
        onClick={scrollToTop}
        className={`
          fixed bottom-8 right-3 z-50
          w-16 h-16
          rounded-full
          bg-[#08244d]
          shadow-2xl
          overflow-hidden
          flex items-center justify-center
          transition-all duration-500
          hover:scale-110
          ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8 pointer-events-none"
          }
        `}
      >
        {/* Water Fill */}
        <div
          className="absolute inset-0 transition-all duration-300"
          style={{
            clipPath: "circle(50%)",
          }}
        >
          <div
            className="absolute left-0 w-[200%] h-20"
            style={{
              top: `${waterHeight}px`,
              animation: "waveMove 4s linear infinite",
              background:
                "linear-gradient(180deg, rgba(34,211,238,0.95), rgba(14,165,233,0.95), rgba(8,145,178,0.95))",
              borderTopLeftRadius: "40%",
              borderTopRightRadius: "40%",
            }}
          >
            <svg
              viewBox="0 0 400 80"
              className="absolute -top-6 left-0 w-full h-12"
            >
              <path
                d="M0 40 C 40 10, 80 70, 120 40 C 160 10, 200 70, 240 40 C 280 10, 320 70, 360 40 C 380 20, 400 50, 400 50 L400 80 L0 80 Z"
                fill="rgba(103,232,249,0.95)"
              />
            </svg>
          </div>
        </div>

        {/* Arrow */}
        <ChevronUp
          size={24}
          className="text-white relative z-10 drop-shadow-md"
          strokeWidth={3}
        />
      </button>
    </>
  );
}

export default ScrollToTopButton;