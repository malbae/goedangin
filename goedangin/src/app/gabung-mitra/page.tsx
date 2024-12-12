'use client';

import React, { useState } from 'react';

export default function GabungMitraForm() {
  const [formData, setFormData] = useState({
    namaPerusahaan: '',
    kategori: '',
    email: '',
    nomorTelpon: '',
    kapasitasGudang: '',
    lokasiMitra: '',
    alamatPerusahaan: '',
    provinsi: '',
    kabupaten: '',
    kodePos: '',
    fotoGudang: null,
    legalitasNIB: null,
    legalitasNPWP: null,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFormData((prevData) => ({ ...prevData, [fieldName]: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-6">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-semibold text-center text-primary-500 mb-6">
          Gabung Kemitraan
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Nama Perusahaan */}
          <div className="md:col-span-3">
            <label className="block text-sm font-medium text-gray-700">Nama Perusahaan</label>
            <input
              type="text"
              name="namaPerusahaan"
              value={formData.namaPerusahaan}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-lg text-black"
              placeholder="Nama Perusahaan Anda"
              required
            />
          </div>

          {/* Kategori */}
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700">Kategori</label>
            <select
              name="kategori"
              value={formData.kategori}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-lg text-black"
              required
            >
              <option value="">Choose...</option>
              <option value="Retail">Retail</option>
              <option value="Wholesale">Wholesale</option>
            </select>
          </div>

          {/* Email */}
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-lg text-black"
              placeholder="example@domain.com"
              required
            />
          </div>

          {/* Nomor Telepon */}
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700">Nomor Telepon</label>
            <input
              type="tel"
              name="nomorTelpon"
              value={formData.nomorTelpon}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-lg text-black"
              placeholder="Contoh: 08XXXX"
              required
            />
          </div>

          {/* Kapasitas Gudang */}
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700">Kapasitas Gudang</label>
            <input
              type="text"
              name="kapasitasGudang"
              value={formData.kapasitasGudang}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-lg text-black"
              placeholder="Satuan Dalam Kilogram"
              required
            />
          </div>

          {/* Lokasi Mitra */}
          <div className="md:col-span-3">
            <label className="block text-sm font-medium text-gray-700">Lokasi Mitra</label>
            <input
              type="text"
              name="alamatPerusahaan"
              value={formData.alamatPerusahaan}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-lg text-black"
              placeholder="Alamat Perusahaan"
              required
            />
          </div>

          {/* Provinsi */}
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700">Provinsi</label>
            <input
              type="text"
              name="provinsi"
              value={formData.provinsi}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-lg text-black"
              placeholder="Provinsi Perusahaan"
              required
            />
          </div>

          {/* Kabupaten */}
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700">Kabupaten</label>
            <input
              type="text"
              name="kabupaten"
              value={formData.kabupaten}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-lg text-black"
              placeholder="Kabupaten Perusahaan"
              required
            />
          </div>

          {/* Kode Pos */}
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700">Kode Pos</label>
            <input
              type="text"
              name="kodePos"
              value={formData.kodePos}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-lg text-black"
              placeholder="Kode Pos"
              required
            />
          </div>

          {/* Foto Gudang */}
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700">Foto Gudang</label>
            <input
              type="file"
              name="fotoGudang"
              onChange={(e) => handleFileChange(e, 'fotoGudang')}
              className="mt-1 block w-full text-black file:py-3 file:px-4 file:border file:rounded-md file:border-gray-300 text-lg"
            />
          </div>

          {/* Legalitas NIB */}
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700">Legalitas Perusahaan (NIB)</label>
            <input
              type="file"
              name="legalitasNIB"
              onChange={(e) => handleFileChange(e, 'legalitasNIB')}
              className="mt-1 block w-full text-black file:py-3 file:px-4 file:border file:rounded-md file:border-gray-300 text-lg"
            />
          </div>

          {/* Legalitas NPWP */}
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700">Legalitas Perusahaan (NPWP)</label>
            <input
              type="file"
              name="legalitasNPWP"
              onChange={(e) => handleFileChange(e, 'legalitasNPWP')}
              className="mt-1 block w-full text-black file:py-3 file:px-4 file:border file:rounded-md file:border-gray-300 text-lg"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-3">
            <button
              type="submit"
              className="w-full py-3 bg-primary-500 text-white font-semibold rounded-md shadow"
            >
              Daftar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
