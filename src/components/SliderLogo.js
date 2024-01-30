import { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import '../styles/swiper.css'

import { FreeMode, Pagination } from 'swiper/modules';

export default function SliderLogo({ data }) {
    const [showItem, setShowItems] = useState(4)
    useEffect(() => {
        if (window.innerWidth <= 600) {
            setShowItems(1)
        }
    }, [])

    return (
        <Swiper
            loop={true}
            slidesPerView={showItem}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
        >
            {data?.map(each => (
                <SwiperSlide style={{ backgroundImage: `url(${each.logo.url})`, minHeight: '200px' }}>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}