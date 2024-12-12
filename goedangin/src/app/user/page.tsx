"use client";

const navigation = [
  { name: "Dashboard", href: "/dashboard", current: false },
  { name: "User", href: "/user", current: true },
  { name: "Setor Barang", href: "/setor", current: false },
  { name: "Tarik Barang", href: "/tarik", current: false },
  { name: "Konten", href: "/konten", current: false },
  { name: "Laporan", href: "/laporan", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

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
          <h1 className="text-2xl font-bold text-black mb-6">Data User</h1>

          {/* Add User Button */}
          <div className="mb-4 flex justify-between items-center">
            <button className="bg-primary-200 text-white px-4 py-2 rounded-md hover:bg-primary-500">
              + Tambah User
            </button>
            <div className="flex items-center">
              <label htmlFor="entries" className="mr-2 text-sm text-black">
                Show
              </label>
              <select
                id="entries"
                className="p-2 border rounded-md text-sm text-black"
                defaultValue="10"
              >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
              </select>
            </div>
          </div>

          {/* Search Bar */}
          <div className="mb-4 flex justify-between items-center">
            <div></div>
            <div>
              <label htmlFor="search" className="mr-2 text-sm text-black">
                Search:
              </label>
              <input
                id="search"
                type="text"
                className="p-2 border rounded-md text-sm text-black"
                placeholder="Search"
              />
            </div>
          </div>

          {/* Table */}
          <table className="table-auto w-full border-collapse border border-gray-300 text-sm text-black">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">No</th>
                <th className="border border-gray-300 px-4 py-2">Nama User</th>
                <th className="border border-gray-300 px-4 py-2">Alamat</th>
                <th className="border border-gray-300 px-4 py-2">
                  No. Handphone
                </th>
                <th className="border border-gray-300 px-4 py-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  1
                </td>
                <td className="border border-gray-300 px-4 py-2">John</td>
                <td className="border border-gray-300 px-4 py-2">Bandung</td>
                <td className="border border-gray-300 px-4 py-2">0888888</td>
                <td className="border border-gray-300 px-4 py-2">
                  <button className="bg-green-500 text-white px-2 py-1 rounded-md mr-2 hover:bg-green-600">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Pagination */}
          <div className="mt-4 flex justify-between items-center">
            <span className="text-sm text-black">
              Showing 1 to 1 of 1 entries
            </span>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1 bg-gray-200 rounded-md text-black">
                Previous
              </button>
              <button className="px-3 py-1 bg-primary-500 text-white rounded-md">
                1
              </button>
              <button className="px-3 py-1 bg-gray-200 rounded-md text-black">
                Next
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
