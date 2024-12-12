const stats = [
    { 
      id: 1, 
      name: 'Optimalisasi Keuntungan dengan Penyimpanan Cerdas', 
      iconUrl: 'https://cdn.icon-icons.com/icons2/3136/PNG/512/warehouse_storage_unit_storehouse_icon_192428.png' // Ganti dengan path ikon di folder img/
    },
    { 
      id: 2, 
      name: 'Kemudahan dan Keandalan dalam Satu Genggaman',
      iconUrl: 'https://cdn-icons-png.flaticon.com/512/8215/8215539.png' // Ganti dengan path ikon di folder img/
    },
    { 
      id: 3, 
      name: 'Kerja Sama dengan Mitra Terbaik & Profesional',
      iconUrl: 'https://icons.veryicon.com/png/o/miscellaneous/linear-icon-14/partner-5.png' // Ganti dengan path ikon di folder img/
    },
  ];
  
  export function Why() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                Kenapa harus Goedangin?
              </h2>
              <p className="mt-4 text-lg leading-8 text-black">
                Kami memberikan Anda beragam pilihan untuk menyimpan barang-barang Anda dengan aman. Segera bergabung dengan Sijuna dan rasakan kemudahan menyimpan barang Anda dengan platform penyewaan cold storage yang terbaik di kelasnya!
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="flex flex-col items-center bg-primary-200 p-8 rounded-xl"
                >
                  <div className="flex justify-center mb-4">
                    <img
                      src={stat.iconUrl}
                      alt={stat.name}
                      className="h-12 w-12" // Mengatur ukuran ikon
                    />
                  </div>
                  <dt className="text-sm font-semibold leading-6 text-black text-center">
                    {stat.name}
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-black text-center">
                    {/* Jika ada nilai untuk stat.value, Anda bisa menambahkannya di sini */}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    );
  }
  