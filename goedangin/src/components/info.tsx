const posts = [
  {
    id: 1,
    title: 'Mengungkap Keunggulan Platform Sijuna: Solusi Simpan Jual Nanti dan Pengembangan E-Warehousing Berbasis Cold Storage',
    href: '/artikel',
    description:
      'Dalam dunia pertanian yang dinamis, platform digital semakin menjadi bagian integral dalam meningkatkan efisiensi, stabilitas harga, dan pasokan komoditas pertanian...',
    imageUrl:
      'https://sijuna.net/images/thumbnail2.jpeg',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Informasi Lebih Lanjut', href: '/artikel' },
    author: {
      name: 'Reamus',
      role: 'Content-Writer',
      href: '/artikel',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    title: 'Mengoptimalkan Potensi Pertanian Bawang dengan Cold Storage: Solusi Modern untuk Petani',
    href: '/artikel',
    description:
      'Petani bawang selalu mencari cara untuk meningkatkan hasil panen mereka, menjaga kualitas produk, dan memperluas pasar mereka. Salah satu inovasi terkini yang telah memberikan solusi bagi tantangan tersebut adalah penggunaan cold storage atau penyimpanan dingin. Dalam artikel ini, kita akan menjelajahi bagaimana cold storage telah mengubah permainan bagi petani bawang saat ini. ...',
    imageUrl:
      'https://sijuna.net/images/thumbnail.jpg',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Informasi Lebih Lanjut', href: '/artikel' },
    author: {
      name: 'Reamus',
      role: 'Content-Writer',
      href: '/artikel',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 3,
    title: 'Memahami Lebih Jauh tentang Cold Storage: Bersama Sijuna',
    href: '/artikel',
    description:
      'Cold storage, atau penyimpanan dingin, merupakan elemen penting dalam rantai pasokan produk pertanian modern. Dalam upaya untuk memberikan solusi penyimpanan yang optimal bagi petani, Sijuna telah menjalin kemitraan dengan pemilik col ...',
    imageUrl:
      'https://sijuna.net/images/thumbnail3.jpg',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Informasi Lebih Lanjut', href: 'artikel' },
    author: {
      name: 'Reamus',
      role: 'Content-Writer',
      href: '/artikel',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  // More posts...
]

export function Info() {
  return (
    <div className="bg-white py-24 sm:py-32 flex flex-col items-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Artikel</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">Bahasan Artikel.</p>
        </div>
        <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
          {posts.map((post) => (
            <article
              key={post.id}
              className="relative isolate flex flex-col items-center text-center gap-8 lg:flex-row lg:text-left lg:items-start"
            >
              <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                <img
                  alt=""
                  src={post.imageUrl}
                  className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div>
                <div className="flex items-center justify-center lg:justify-start gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative max-w-xl">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                <div className="mt-6 flex justify-center lg:justify-start border-t border-gray-900/5 pt-6">
                  <div className="relative flex items-center gap-x-4">
                    <img
                      alt=""
                      src={post.author.imageUrl}
                      className="h-10 w-10 rounded-full bg-gray-50"
                    />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        <a href={post.author.href}>
                          <span className="absolute inset-0" />
                          {post.author.name}
                        </a>
                      </p>
                      <p className="text-gray-600">{post.author.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
