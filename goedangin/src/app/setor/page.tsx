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

const dataBarang = [
  { id: 17, name: "John Doe", phone: "0812000222", date: "2024-11-07", price: 24000, marketPrice: 20000, quantity: 3000 },
  { id: 18, name: "ade", phone: "123", date: "2024-11-07", price: 10000, marketPrice: 120000, quantity: 120 },
  { id: 19, name: "alfan", phone: "0812000222", date: "2024-11-20", price: 15000, marketPrice: 17000, quantity: 15 },
  { id: 20, name: "alfan", phone: "6666", date: "2024-11-22", price: 20000, marketPrice: 20000, quantity: 20 },
  { id: 21, name: "alfan", phone: "3466363", date: "2024-11-22", price: 20000, marketPrice: 20000, quantity: 20 },
];

export default function Dashboard() {
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
          <h1 className="text-2xl font-bold text-black mb-6">Setor Barang</h1>

          {/* Add Barang Button */}
          <div className="mb-4 flex justify-between items-center">
          <a
                href="/create"
                className="bg-primary-200 text-white px-4 py-2 rounded-md hover:bg-primary-500 inline-block"
              >
                Setor Barang
              </a>
          </div>

          {/* Table */}
          <table className="table-auto w-full border-collapse border border-gray-300 text-sm text-black">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">No</th>
                <th className="border border-gray-300 px-4 py-2">Nama Penyetor</th>
                <th className="border border-gray-300 px-4 py-2">Nomor Telepon</th>
                <th className="border border-gray-300 px-4 py-2">Tanggal Transaksi</th>
                <th className="border border-gray-300 px-4 py-2">Harga Barang</th>
                <th className="border border-gray-300 px-4 py-2">Harga Pasar</th>
                <th className="border border-gray-300 px-4 py-2">Jumlah</th>
                <th className="border border-gray-300 px-4 py-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {dataBarang.map((item, index) => (
                <tr key={item.id}>
                  <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.phone}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.date}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.price.toLocaleString()}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.marketPrice.toLocaleString()}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.quantity}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button className="bg-primary-200 text-white px-2 py-1 rounded-md mr-2 hover:bg-primary-500">
                      Edit
                    </button>
                    <button className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
