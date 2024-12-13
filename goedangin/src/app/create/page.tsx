"use client";

const navigation = [
  { name: "Dashboard", href: "/dashboard", current: false },
  { name: "Setor Barang", href: "/setor", current: true },
  { name: "Tarik Barang", href: "/tarik", current: false },
  { name: "Konten", href: "/konten", current: false },
  { name: "Laporan", href: "/laporan", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SetorBarangForm() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="hidden lg:flex lg:w-64 lg:flex-col bg-gray-100 border-r border-gray-200 h-screen">
        <div className="flex h-16 items-center px-6">
          <img src="/img/logo2.webp" alt="Logo" className="h-10 w-auto" />
        </div>
        <nav className="flex-1 overflow-y-auto px-6">
          <ul className="space-y-1">
            {navigation.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-50 text-primary-500"
                      : "text-gray-700 hover:bg-gray-50 hover:text-primary-500",
                    "group flex items-center gap-x-3 rounded-md p-2 text-sm font-semibold"
                  )}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-grow bg-gray-50 p-8 overflow-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-black mb-6">Tambah Setor Barang</h1>

          <form className="bg-white p-6 rounded-lg shadow-md space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nama Penyetor
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-md text-sm text-gray-900"
                placeholder="Nama Penyetor"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nomor Telepon
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-md text-sm text-gray-900"
                placeholder="Nomor Telepon"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Jumlah Barang
              </label>
              <div className="flex items-center">
                <input
                  type="number"
                  className="flex-grow p-2 border rounded-md text-sm text-gray-900"
                  placeholder="Jumlah Barang"
                />
                <span className="ml-2 text-gray-600">Kg</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Harga Barang *Per Kg
              </label>
              <div className="flex items-center">
                <span className="mr-2 text-gray-600">Rp</span>
                <input
                  type="number"
                  className="flex-grow p-2 border rounded-md text-sm text-gray-900"
                  placeholder="Harga Barang"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Harga Pasar Sekarang Cek Disini
              </label>
              <div className="flex items-center">
                <span className="mr-2 text-gray-600">Rp</span>
                <input
                  type="number"
                  className="flex-grow p-2 border rounded-md text-sm text-gray-900"
                  placeholder="Harga Pasar"
                />
              </div>
            </div>

            <div className="text-right">
            <a
                href="/setor"
                className="bg-primary-200 text-white px-4 py-2 rounded-md hover:bg-primary-500 inline-block"
              >
                Submit
              </a>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
