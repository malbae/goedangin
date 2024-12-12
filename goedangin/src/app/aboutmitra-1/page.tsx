import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <img
            src="https://sijuna.net/images/logosbi-warna.png"
            alt="PT Sinergi Brebes Inovatif Logo"
            className="h-12"
          />
          <ul className="flex items-center space-x-6">
            <li>
              <a href="/mitra-1" className="text-gray-700 hover:text-primary-500 font-medium">
                Beranda
              </a>
            </li>
            <li>
              <a href="/aboutmitra-1" className="text-gray-700 hover:text-primary-500 font-medium">
                Tentang Kami
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/6285742105394?text=Halo%20Saya%20Ingin%20Bertanya"
                className="text-white bg-green-500 hover:bg-green-600 py-2 px-4 rounded-lg font-medium"
              >
                Hubungi Kami
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-6 py-12 flex flex-col md:flex-row items-center md:items-start">
        <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
          <img
            src="https://sijuna.net/images/logosbi2.png"
            alt="PT Sinergi Brebes Inovatif"
            className="h-48"
          />
        </div>
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-gray-600 leading-relaxed mb-4">
            PT Sinergi Brebes Inovatif didirikan oleh para petani di Desa Sidamulya yang bekerja sama dengan tim
            konsultan serta dengan Bank Indonesia karena adanya peluang mengenai bahan olahan bumbu praktis yang banyak
            digunakan di kota-kota besar dan negara lain. Dalam rangka menambah pendapatan para petani terhadap nilai
            jual bawang merah, pada tahun 2017 didirikanlah sebuah perusahaan yang memproduksi bumbu olahan pasta bawang
            merah dengan nama PT. Sinergi Brebes Inovatif yang beranggotakan 41 orang yang tergabung dalam kelompok
            Tani Sidomakmur sebagai pemilik saham.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Alamat:</strong> Jl. Raya Sidamulya No. 1, Desa Sidamulya, Kecamatan Paguyangan, Kabupaten Brebes,
            Jawa Tengah
          </p>
          <p className="text-gray-600 leading-relaxed">
            <strong>Kontak:</strong> 0821-1234-5678
          </p>
        </div>
      </main>
      
    </div>
  );
};

export default AboutUs;