import { useState, useEffect } from "react";
import { axiosInstance } from "../lib/axios";

import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react'
// import ReactPlayer from 'react-player'

import 'swiper/css';
import 'swiper/css/pagination';

import '../styles/swiper.css';

import { Autoplay, Pagination } from 'swiper/modules';

export default function SliderAds() {
    const [ads, setAds] = useState([]);

    const fetchAds = async () => {
        try {
            const sponsorsResponse = await axiosInstance.get("content/2");
            const responseData = sponsorsResponse.data;
            const { status } = responseData;

            if (status === 200) {
                const ads_list = responseData.contents.filter(content => content.type === 'ads')
                setAds(ads_list);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchAds();
    }, []);

    function renderAds(ad) {
        if (ad.data.link) {
            return (<SwiperSlide>
                {/* <ReactPlayer url={ad.data.link} width="100%" playing controls={false} /> */}
                {/* <iframe src={ad.data.link} width="100%" height="500px" title="ads" autoPlay></iframe> */}
            </SwiperSlide >)
        } else {
            return (<SwiperSlide>
                <img src={`${ad.data.image.url}?autoplay=1`} width="100%" alt="ads" />
            </SwiperSlide>)
        }
    }

    if (ads.length !== 0) {
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
                {ads.map(ad => renderAds(ad))}
            </Swiper>
        );
    } else {
        return null
    }
}
