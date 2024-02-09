import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react'
// import ReactPlayer from 'react-player'

import 'swiper/css';
import 'swiper/css/pagination';

import '../styles/swiper.css';

import { Autoplay, Pagination } from 'swiper/modules';

export default function SliderAds({ data }) {
    return (
        <Swiper
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            loop={true}
            pagination={true}
            modules={[Autoplay, Pagination]}
            className="mySwiper">
            {data?.map(ad => (
                <SwiperSlide>
                    <img src={`${ad.data.image.url}?autoplay=1`} width="100%" alt="ads" />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
