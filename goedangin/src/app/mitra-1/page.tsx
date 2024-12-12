import React from 'react';

const MitraPage: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage: "url('https://sijuna.net/images/bawang.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: `'Poppins', sans-serif`,
      }}
    >
      {/* Navbar */}
      <header
        style={{
          width: '100%',
          background: '',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 20px',
          color: 'white',
        }}
      >
        <img
          src="https://sijuna.net/images/logosbi.png"
          alt="Logo Sijuna"
          style={{ height: '50px', width: 'auto' }}
        />
        <nav style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <a href="/mitra" style={{ color: 'white', fontSize: '1rem', fontWeight: 500, textDecoration: 'none' }}>
            Beranda
          </a>
          <a
            href="/aboutmitra-1"
            style={{ color: 'white', fontSize: '1rem', fontWeight: 500, textDecoration: 'none' }}
          >
            Tentang Kami
          </a>
          <a
            href="https://wa.me/6285742105394?text=Halo%20Saya%20Ingin%20Bertanya"
            className="text-white bg-green-500 hover:bg-green-600 py-2 px-4 rounded-lg font-medium"
          >
            Hubungi Kami
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '20px',
          marginTop: '80px', // Tambahkan jarak dari header
          marginBottom: '80px', // Tambahkan jarak dari footer
        }}
      >
        <h1
          style={{
            color: 'white',
            fontWeight: 700,
            fontSize: '2.5rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
          }}
        >
          Kelola Hasil Tanimu Sekarang
        </h1>
        <h1
          style={{
            color: 'white',
            fontWeight: 700,
            fontSize: '2.5rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
          }}
        >
          Bersama Goedangin
        </h1>
        <p
          style={{
            color: 'white',
            fontSize: '1.25rem',
            fontWeight: 400,
            textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
          }}
        >
          Goedangin hadir untuk mitra anda dalam meningkatkan produktifitas hasil pertanian anda.
        </p>
        <form method="GET" action="https://sijuna.net/userpage/search" style={{ marginTop: '20px', width: '100%' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px',
              maxWidth: '500px',
              margin: '0 auto',
            }}
          >
            <input
              type="text"
              name="id"
              placeholder="Cari Simpananmu"
              style={{
                fontSize: '1rem',
                height: '50px',
                borderRadius: '5px',
                border: '2px solid #2596be',
                padding: '10px',
                color: 'black',
                width: '100%',
                background: 'rgba(255,255,255,0.9)',
              }}
            />
            <button
              type="submit"
              style={{
                fontSize: '1rem',
                height: '50px',
                padding: '0 20px',
                borderRadius: '5px',
                fontWeight: 600,
                color: 'white',
                background: '#2596be',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Cek Simpanan
            </button>
          </div>
        </form>
      </main>

      {/* Footer */}
      <footer
        style={{
          width: '100%',
          background: '',
          padding: '10px 20px',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        <p>
          Copyright © 2024{' '}
          <a href="/" style={{ color: '#3B81F6', textDecoration: 'none' }}>
            GOEDANGIN : Goedangin Aja Dulu
          </a>
        </p>
      </footer>
    </div>
  );
};

export default MitraPage;
