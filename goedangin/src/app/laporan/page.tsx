"use client";

import jsPDF from "jspdf";
import "jspdf-autotable";

const navigation = [
  { name: "Dashboard", href: "/dashboard", current: false },
  { name: "Setor Barang", href: "/setor", current: false },
  { name: "Tarik Barang", href: "/tarik", current: false },
  { name: "Konten", href: "/konten", current: false },
  { name: "Laporan", href: "/laporan", current: true },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const setorData = [
  { id: 17, name: "John Doe", phone: "0812000222", date: "2024-11-07", price: 24000, market: 20000, quantity: 3000 },
  { id: 18, name: "ade", phone: "123", date: "2024-11-07", price: 10000, market: 120000, quantity: 120 },
  { id: 19, name: "alfan", phone: "0812000222", date: "2024-11-20", price: 15000, market: 17000, quantity: 15 },
  { id: 20, name: "alfan", phone: "6666", date: "2024-11-22", price: 20000, market: 20000, quantity: 20 },
  { id: 21, name: "alfan", phone: "3466363", date: "2024-11-22", price: 20000, market: 20000, quantity: 20 },
];

const tarikData = [
  { name: "alfan", phone: "0812000222", quantity: 25, oldMarket: 17000, newMarket: 20000, difference: 3000 },
  { name: "alfan", phone: "0812000222", quantity: 10, oldMarket: 17000, newMarket: 19000, difference: 2000 },
];

export default function Laporan() {
  const downloadPDF = () => {
    const doc = new jsPDF();

    // Setor Barang Table
    doc.text("Laporan Setor Barang", 14, 20);
    doc.autoTable({
      startY: 25,
      head: [["ID", "Nama Penyetor", "No Telp", "Tanggal Transaksi", "Harga Barang", "Market Price", "Quantity"]],
      body: setorData.map((item) => [
        item.id,
        item.name,
        item.phone,
        item.date,
        item.price,
        item.market,
        item.quantity,
      ]),
    });

    // Tarik Barang Table
    doc.text("Laporan Tarik Barang", 14, doc.lastAutoTable.finalY + 10);
    doc.autoTable({
      startY: doc.lastAutoTable.finalY + 15,
      head: [["Nama Penyetor", "No Telp", "Quantity", "Old Market Price", "New Market Price", "Price Difference"]],
      body: tarikData.map((item) => [
        item.name,
        item.phone,
        item.quantity,
        item.oldMarket,
        item.newMarket,
        item.difference,
      ]),
    });

    doc.save("Laporan.pdf");
  };

  return (
    <div className="flex h-screen bg-white">
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

      {/* Main Content */}
      <main className="flex-grow bg-gray-50 p-8 overflow-auto">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-black mb-6">Laporan</h1>

          {/* Download Button */}
          <div className="mb-4">
            <button
              onClick={downloadPDF}
              className="bg-primary-200 text-white px-4 py-2 rounded-md hover:bg-primary-500"
            >
              Unduh Laporan
            </button>
          </div>

          {/* Laporan Setor Barang */}
          <h2 className="text-2xl font-semibold text-black mb-4">Laporan Setor Barang</h2>
          <table className="table-auto w-full text-sm border-collapse border border-gray-300 bg-white text-black mb-8">
            <thead className="bg-blue-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2">ID</th>
                <th className="border border-gray-300 px-4 py-2">Nama Penyetor</th>
                <th className="border border-gray-300 px-4 py-2">No Telp</th>
                <th className="border border-gray-300 px-4 py-2">Tanggal Transaksi</th>
                <th className="border border-gray-300 px-4 py-2">Harga Barang</th>
                <th className="border border-gray-300 px-4 py-2">Market Price</th>
                <th className="border border-gray-300 px-4 py-2">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {setorData.map((item) => (
                <tr key={item.id}>
                  <td className="border border-gray-300 px-4 py-2">{item.id}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.phone}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.date}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.price}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.market}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Laporan Tarik Barang */}
          <h2 className="text-2xl font-semibold text-black mb-4">Laporan Tarik Barang</h2>
          <table className="table-auto w-full text-sm border-collapse border border-gray-300 bg-white text-black">
            <thead className="bg-blue-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2">Nama Penyetor</th>
                <th className="border border-gray-300 px-4 py-2">No Telp</th>
                <th className="border border-gray-300 px-4 py-2">Quantity</th>
                <th className="border border-gray-300 px-4 py-2">Old Market Price</th>
                <th className="border border-gray-300 px-4 py-2">New Market Price</th>
                <th className="border border-gray-300 px-4 py-2">Price Difference</th>
              </tr>
            </thead>
            <tbody>
              {tarikData.map((item, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2">{item.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.phone}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.quantity}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.oldMarket}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.newMarket}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.difference}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
