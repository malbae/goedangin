"use client";

const navigation = [
  { name: "Dashboard", href: "/dashboard", current: false },
  { name: "User", href: "/user", current: false },
  { name: "Setor Barang", href: "/setor", current: false },
  { name: "Tarik Barang", href: "/tarik", current: true },
  { name: "Konten", href: "/konten", current: false },
  { name: "Laporan", href: "/laporan", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SetorBarang() {
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
                      : "text-black hover:bg-gray-50 hover:text-primary-500",
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
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-md shadow-md">
          <h1 className="text-2xl font-bold text-black mb-6">Tambah Setor Barang</h1>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="selectBarang"
                className="block text-sm font-medium text-gray-700"
              >
                Select Setor Barang
              </label>
              <select
                id="selectBarang"
                name="selectBarang"
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-black shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              >
                <option>John Doe</option>
                <option>Jane Smith</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="newMarketPrice"
                className="block text-sm font-medium text-gray-700"
              >
                New Market Price
              </label>
              <input
                type="text"
                id="newMarketPrice"
                name="newMarketPrice"
                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 text-black shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                placeholder="Enter new market price"
              />
            </div>

            <div>
              <label
                htmlFor="quantity"
                className="block text-sm font-medium text-gray-700"
              >
                Quantity
              </label>
              <input
                type="text"
                id="quantity"
                name="quantity"
                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 text-black shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                placeholder="Enter quantity"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full rounded-md bg-primary-200 py-2 px-4 text-white hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
