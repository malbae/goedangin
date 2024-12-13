"use client";

const navigation = [
  { name: "Dashboard", href: "/dashboard", current: false },
  { name: "Setor Barang", href: "/setor", current: false },
  { name: "Tarik Barang", href: "/tarik", current: true },
  { name: "Konten", href: "/konten", current: false },
  { name: "Laporan", href: "/laporan", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function TarikBarang() {
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
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold text-black mb-6">Tarik Barang</h1>

          {/* Add Item Button */}
          <div className="mb-4 flex justify-between items-center">
          <a
                href="/createtarik"
                className="bg-primary-200 text-white px-4 py-2 rounded-md hover:bg-primary-500 inline-block"
              >
                Tarik Barang
              </a>
          </div>

          {/* Table */}
          <table className="table-auto w-full border-collapse border border-gray-300 text-sm text-black">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">Nama Penyetor</th>
                <th className="border border-gray-300 px-4 py-2">No Telp</th>
                <th className="border border-gray-300 px-4 py-2">Quantity</th>
                <th className="border border-gray-300 px-4 py-2">Old Market Price</th>
                <th className="border border-gray-300 px-4 py-2">New Market Price</th>
                <th className="border border-gray-300 px-4 py-2">Price Difference</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Alfan</td>
                <td className="border border-gray-300 px-4 py-2">0812000222</td>
                <td className="border border-gray-300 px-4 py-2">25</td>
                <td className="border border-gray-300 px-4 py-2">17000</td>
                <td className="border border-gray-300 px-4 py-2">20000</td>
                <td className="border border-gray-300 px-4 py-2">3000</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Alfan</td>
                <td className="border border-gray-300 px-4 py-2">0812000222</td>
                <td className="border border-gray-300 px-4 py-2">10</td>
                <td className="border border-gray-300 px-4 py-2">17000</td>
                <td className="border border-gray-300 px-4 py-2">19000</td>
                <td className="border border-gray-300 px-4 py-2">2000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
