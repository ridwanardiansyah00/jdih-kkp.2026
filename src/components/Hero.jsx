import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { FaChevronDown } from 'react-icons/fa'

function Hero() {
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [showJenisDropdown, setShowJenisDropdown] = useState(false)
  const [selectedJenis, setSelectedJenis] = useState('Jenis Peraturan')
  const [showTahunDropdown, setShowTahunDropdown] = useState(false)
  const [selectedTahun, setSelectedTahun] = useState('Tahun')
  const [showStatusDropdown, setShowStatusDropdown] = useState(false)
  const [selectedStatus, setSelectedStatus] = useState('Status')

  const heroRef = useRef(null)
  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowJenisDropdown(false)
        setShowTahunDropdown(false)
        setShowStatusDropdown(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <section
      className="relative h-96 bg-cover bg-center overflow-visible"
      style={{
        backgroundImage: "url('/images/hero-bg.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <motion.div
        ref={heroRef}
        layout
        transition={{
          layout: {
            duration: 0.5,
            ease: 'easeInOut',
          },
        }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4"
      >
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-5xl font-bold mb-4"
        >
          Selamat Datang
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-2xl font-semibold mb-4 text-center"
        >
          di JDIH Kementerian Kelautan dan Perikanan
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-lg mb-5"
        >
          Temukan peraturan melalui pencarian di bawah ini:
        </motion.p>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="relative w-full max-w-xl flex items-center bg-white rounded-lg overflow-hidden shadow-xl"
        >
          <input
            type="text"
            placeholder="Ketik kata kunci pencarian"
            className="w-full px-4 py-2.5 text-black text-sm outline-none focus:outline-none focus:ring-0"
          />

          <button className="shrink-0 bg-blue-600 px-6 py-2.5 text-white text-sm font-medium hover:bg-blue-700 transition-all duration-300 focus:outline-none focus:ring-0">
            Cari
          </button>
        </motion.div>

        {/* Toggle Advanced Search */}
        <motion.p
          onClick={() => setShowAdvanced(!showAdvanced)}
          whileTap={{ scale: 0.95 }}
          className="mt-4 text-sm cursor-pointer hover:text-blue-200 transition duration-300 flex items-center gap-2"
        >
          Pencarian Lanjutan
          <motion.span
            animate={{ rotate: showAdvanced ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {showAdvanced ? '−' : '+'}
          </motion.span>
        </motion.p>

        {/* Advanced Search Panel */}
        <AnimatePresence>
        {showAdvanced && (
          <motion.div
            layout
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-4 w-full max-w-4xl bg-white rounded-lg shadow-xl p-4"
          >
            <div ref={dropdownRef} className="grid grid-cols-5 gap-3">
              <input
                type="text"
                placeholder="Tentang"
                className="border border-gray-300 rounded-md px-3 py-2 text-sm text-black outline-none"
              />

              <input
                type="text"
                placeholder="Nomor"
                className="border border-gray-300 rounded-md px-3 py-2 text-sm text-black outline-none"
              />

                <div className="relative">
                  <button
                    onClick={() => {
                      setShowJenisDropdown(!showJenisDropdown)
                      setShowTahunDropdown(false)
                      setShowStatusDropdown(false)
                    }}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-black bg-white flex justify-between items-center"
                  >
                    {selectedJenis}
                    <FaChevronDown size={10} />
                  </button>

                  {showJenisDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-96 bg-white border border-gray-300 rounded-md shadow-xl z-50 max-h-64 overflow-y-auto"
                    >
                      {[
                        'Staatsblad',
                        'Undang-Undang',
                        'Peraturan Pemerintah pengganti Undang-Undang',
                        'Peraturan Pemerintah',
                        'Peraturan Presiden',
                        'Keputusan Presiden',
                        'Instruksi Presiden',
                        'Peraturan Menteri Kelautan dan Perikanan',
                        'Keputusan Menteri Kelautan dan Perikanan',
                        'Keputusan a.n Menteri',
                        'Instruksi Menteri',
                        'Peraturan Sekretaris Jenderal',
                        'Peraturan Direktur Jenderal',
                        'Peraturan Inspektur Jenderal',
                        'Peraturan Kepala Badan',
                        'Keputusan Sekretaris Jenderal',
                        'Keputusan Direktur Jenderal',
                        'Keputusan Inspektur Jenderal',
                        'Keputusan Kepala Badan',
                        'Peraturan Daerah Provinsi',
                        'Peraturan Gubernur',
                        'Peraturan Daerah Kota',
                        'Peraturan Walikota',
                        'Peraturan Daerah Kabupaten',
                        'Peraturan Bupati',
                        'Surat Edaran'
                      ].map((item) => (
                        <div
                          key={item}
                          onClick={() => {
                            setSelectedJenis(item)
                            setShowJenisDropdown(false)
                          }}
                          className="px-3 py-2 text-sm text-black hover:bg-blue-50 cursor-pointer"
                        >
                          {item}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </div>

                <div className="relative">
                  <button
                    onClick={() => {
                      setShowTahunDropdown(!showTahunDropdown)
                      setShowJenisDropdown(false)
                      setShowStatusDropdown(false)
                    }}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-black bg-white flex justify-between items-center"
                  >
                    {selectedTahun}
                    <FaChevronDown size={10} />
                  </button>

                  {showTahunDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-xl z-50 max-h-64 overflow-y-auto"
                    >
                      {[
                          '2026',
                          '2025',
                          '2024',
                          '2023',
                          '2022',
                          '2021',
                          '2020',
                          '2019',
                          '2018',
                          '2017',
                          '2016',
                          '2015',
                          '2014',
                          '2013',
                          '2012',
                          '2011',
                          '2010',
                          '2009',
                          '2008',
                          '2007',
                          '2006',
                          '2005',
                          '2004',
                          '2003',
                          '2002',
                          '2001',
                          '2000'
                      ].map((item) => (
                        <div
                          key={item}
                          onClick={() => {
                            setSelectedTahun(item)
                            setShowTahunDropdown(false)
                          }}
                          className="px-3 py-2 text-sm text-black hover:bg-blue-50 cursor-pointer"
                        >
                          {item}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </div>

                <div className="relative">
                  <button
                    onClick={() => {
                      setShowStatusDropdown(!showStatusDropdown)
                      setShowJenisDropdown(false)
                      setShowTahunDropdown(false)
                    }}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-black bg-white flex justify-between items-center"
                  >
                    {selectedStatus}
                    <FaChevronDown size={10} />
                  </button>

                  {showStatusDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-xl z-50 max-h-64 overflow-y-auto"
                    >
                      {[
                        'Berlaku',
                        'Tidak Berlaku'
                      ].map((item) => (
                        <div
                          key={item}
                          onClick={() => {
                            setSelectedStatus(item)
                            setShowStatusDropdown(false)
                          }}
                          className="px-3 py-2 text-sm text-black hover:bg-blue-50 cursor-pointer"
                        >
                          {item}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </div>
            </div>
          </motion.div>
        )}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}

export default Hero