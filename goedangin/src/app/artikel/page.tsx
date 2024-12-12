const categories = [
    {
      id: 1,
      title:
        "Mengungkap Keunggulan Platform Sijuna: Solusi Simpan Jual Nanti dan Pengembangan E-Warehousing Berbasis Cold Storage",
      href: "#",
      description:
        "Dalam dunia pertanian yang dinamis, platform digital semakin menjadi bagian integral dalam meningkatkan efisiensi, stabilitas harga, dan pasokan komoditas pertanian...",
      imageUrl: "https://sijuna.net/images/thumbnail2.jpeg",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Sayuran", href: "#" },
      author: {
        name: "Reamus",
        role: "Content-Writer",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 2,
      title:
        "Mengoptimalkan Potensi Pertanian Bawang dengan Cold Storage: Solusi Modern untuk Petani",
      href: "#",
      description:
        "Petani bawang selalu mencari cara untuk meningkatkan hasil panen mereka, menjaga kualitas produk, dan memperluas pasar mereka. Salah satu inovasi terkini yang telah memberikan solusi bagi tantangan tersebut adalah penggunaan cold storage atau penyimpanan dingin. Dalam artikel ini, kita akan menjelajahi bagaimana cold storage telah mengubah permainan bagi petani bawang saat ini...",
      imageUrl: "https://sijuna.net/images/thumbnail.jpg",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Sayuran", href: "#" },
      author: {
        name: "Reamus",
        role: "Content-Writer",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 3,
      title: "Memahami Lebih Jauh tentang Cold Storage: Bersama Sijuna",
      href: "#",
      description:
        "Cold storage, atau penyimpanan dingin, merupakan elemen penting dalam rantai pasokan produk pertanian modern. Dalam upaya untuk memberikan solusi penyimpanan yang optimal bagi petani, Sijuna telah menjalin kemitraan dengan pemilik col...",
      imageUrl: "https://sijuna.net/images/thumbnail3.jpg",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Sayuran", href: "#" },
      author: {
        name: "Reamus",
        role: "Content-Writer",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
  ];
  
  export default function Example() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Artikel</h2>
          <p className="mt-4 text-base text-gray-500">Ini adalah halaman artikel.</p>
  
          <div className="mt-10 grid grid-cols-1 gap-y-12 lg:grid-cols-3 lg:gap-x-8">
            {categories.map((category) => (
              <a
                key={category.id}
                href={category.href}
                className="group block overflow-hidden rounded-lg shadow-md hover:shadow-lg"
              >
                <div
                  aria-hidden="true"
                  className="aspect-w-3 aspect-h-2 overflow-hidden rounded-t-lg lg:aspect-w-5 lg:aspect-h-6"
                >
                  <img
                    alt={category.title}
                    src={category.imageUrl}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">{category.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }
  