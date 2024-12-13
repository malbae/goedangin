"use client";

import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import { useState } from "react";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const navigation = [
  { name: "Dashboard", href: "/dashboard", current: true },
  { name: "Setor Barang", href: "/setor", current: false },
  { name: "Tarik Barang", href: "/tarik", current: false },
  { name: "Konten", href: "/konten", current: false },
  { name: "Laporan", href: "/laporan", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const initialData = [
  { week: 1, price: 27142 },
  { week: 2, price: 28714 },
  { week: 3, price: 30000 },
  { week: 4, price: 25000 },
  { week: 5, price: 23000 },
];

export default function Dashboard() {
  const [prediction, setPrediction] = useState({
    week1: { min: 21117.54, max: 23117.54 },
    week2: { min: 23374.14, max: 25374.14 },
  });

  const [inputData, setInputData] = useState({ week1: "", week2: "" });

  const handlePredict = () => {
    console.log("Predicted with data:", inputData);
  };

  const chartData = {
    labels: Array.from({ length: 50 }, (_, i) => i + 1),
    datasets: [
      {
        label: "Harga/week",
        data: Array.from({ length: 50 }, (_, i) => 20000 + 1000 * Math.sin(i / 5)),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: "#e5e7eb",
        },
      },
    },
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

      {/* Main content */}
      <main className="flex-grow bg-gray-50 p-8 overflow-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-black mb-6 text-center">
            Time Series Forecasting with TFLite
          </h1>

          {/* Data Table */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-center text-black">Data:</h2>
            <table className="table-auto w-full text-left bg-gray-100 text-black rounded-lg overflow-hidden mb-4">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b border-gray-300">Minggu</th>
                  <th className="px-4 py-2 border-b border-gray-300">Harga/week</th>
                </tr>
              </thead>
              <tbody>
                {initialData.map((data, i) => (
                  <tr key={i}>
                    <td className="px-4 py-2 border-b border-gray-300">{data.week}</td>
                    <td className="px-4 py-2 border-b border-gray-300">
                      {data.price.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Chart */}
          <div className="bg-gray-100 p-6 rounded-lg mb-8">
            <Line data={chartData} options={chartOptions} />
          </div>

          {/* Predictions */}
          <div className="text-xl font-semibold mb-4 text-center text-black">
            Predicted Data for Next 2 Weeks:
          </div>
          <div className="grid grid-cols-1 gap-4 mb-8">
            <div className="bg-gray-100 p-4 rounded-lg flex justify-between items-center">
              <span className="text-black">Prediction week-1</span>
              <span className="text-green-600">
                Rp{prediction.week1.min.toLocaleString()} - Rp
                {prediction.week1.max.toLocaleString()}
              </span>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg flex justify-between items-center">
            <span className="text-black">Prediction week-2</span>
              <span className="text-green-600">
                Rp{prediction.week2.min.toLocaleString()} - Rp
                {prediction.week2.max.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Input Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-center text-black">
              Please input 2 new actual data for further prediction:
            </h2>
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-black">
                  Input 1st week:
                </label>
                <input
                  type="text"
                  className="w-full p-2 bg-gray-100 text-black rounded-lg"
                  value={inputData.week1}
                  onChange={(e) =>
                    setInputData({ ...inputData, week1: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-black">
                  Input 2nd week:
                </label>
                <input
                  type="text"
                  className="w-full p-2 bg-gray-100 text-black rounded-lg"
                  value={inputData.week2}
                  onChange={(e) =>
                    setInputData({ ...inputData, week2: e.target.value })
                  }
                />
              </div>
            </div>
            <button
              onClick={handlePredict}
              className="mt-4 bg-primary-200 px-4 py-2 rounded-lg text-white hover:bg-primary-500 w-full"
            >
              Predict
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
