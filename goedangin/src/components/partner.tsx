"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";

export function Partner() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Mitra Kami
          </h2>
          <p className="mt-2 text-lg leading-8 text-black">
            Kami memberikan Anda beragam pilihan untuk menyimpan barang-barang
            Anda dengan aman. Segera bergabung dengan Sijuna dan rasakan
            kemudahan menyimpan barang Anda dengan platform penyewaan cold
            storage yang terbaik di kelasnya!
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-full bg-transparent">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            autoplay={{ delay: 2000 }}
            className="w-full"
          >
            <SwiperSlide className="flex justify-center items-center ">
              <div className="flex items-center justify-center w-[400px] h-[400px]">
                <img
                  alt="Bawang"
                  src="https://sijuna.net/images/bawang.png"
                  className="w-full h-full  rounded-lg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center ">
              <div className="flex items-center justify-center w-[400px] h-[400px] bg-transparent">
                <img
                  alt="Logo Goedangin"
                  src="/img/logo2.webp"
                  className="w-full h-full "
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center ">
              <div className="flex items-center justify-center w-[400px] h-[400px]">
                <img
                  alt="Bawang"
                  src="https://sijuna.net/images/bawang.png"
                  className="w-full h-full  rounded-lg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center ">
              <div className="flex items-center justify-center w-[400px] h-[400px]">
                <img
                  alt="Logo Goedangin"
                  src="/img/logo2.webp"
                  className="w-full h-full "
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center ">
              <div className="flex items-center justify-center w-[400px] h-[400px]">
                <img
                  alt="Bawang"
                  src="https://sijuna.net/images/bawang.png"
                  className="w-full h-full  rounded-lg"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
