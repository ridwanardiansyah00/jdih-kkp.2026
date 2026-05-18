const jdihLogos = [
  {
    name: "JDIH Nasional",
    image: "/images/jdih/jdihn.png",
    link: "#",
  },
  {
    name: "Kemenlu",
    image: "/images/jdih/kemenlu.png",
    link: "#",
  },
  {
    name: "Kemenko Pangan",
    image: "/images/jdih/kemenkopangan.png",
    link: "#",
  },
  {
    name: "KLHK",
    image: "/images/jdih/klhk.png",
    link: "#",
  },
  {
    name: "BGN",
    image: "/images/jdih/bgn.png",
    link: "#",
  },
  {
    name: "Hubla",
    image: "/images/jdih/hubla.png",
    link: "#",
  },
];

export default function OtherJDIHSection() {
  return (
    <section className="bg-slate-100 py-14">
      <div className="max-w-7xl mx-auto px-5">

        {/* Header */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 uppercase tracking-wide">
            JDIH KEMENTERIAN LAIN
          </h2>

          <div className="w-10 h-1 bg-red-600 rounded mt-3"></div>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 items-center">
          {jdihLogos.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="flex items-center justify-center hover:scale-105 transition duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-24 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition duration-300"
              />
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}