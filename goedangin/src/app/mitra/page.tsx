export default function Mitra() {
  const posts = [
    {
      id: 1,
      title: 'PT Sinergi Brebes Inovatif',
      location: 'Brebes',
      category: 'Pertanian',
      imageUrl: 'https://sijuna.net/images/logosbi2.png',
      description: 'Innovative solutions for your kitchen needs',
      href: '/mitra-1', // Tambahkan URL tujuan
    },
  ];

  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Temukan Mitra</h2>
        <div className="mt-4">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
            Pertanian
          </span>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.href} // Tambahkan tautan
              className="flex flex-col overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <img
                alt={post.title}
                src={post.imageUrl}
                className="h-200 w-full object-cover" // Perbesar ukuran gambar
              />
              <div className="p-6"> {/* Perbesar padding */}
                <h3 className="text-xl font-semibold text-gray-900">{post.title}</h3> {/* Perbesar font */}
                <p className="mt-2 text-base text-gray-600">{post.location}</p> {/* Perbesar font */}
                <p className="mt-3 text-sm text-gray-500">{post.category}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
