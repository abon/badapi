import { useEffect, useState } from 'react'
import axios from 'axios'

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import CarouselCard from './CarouselCard'


const API_URL = 'https://breakingbadapi.com/api/characters'



const Carousel = () => {

    const [items, setItems] = useState([])

    useState(() => {
        const fetchItems = async () => {
            const result = await axios(`https://breakingbadapi.com/api/characters`)
            console.log(result.data);
            setItems(result.data)
        }
        fetchItems()
    }, [])


    return (
        <div >
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>{items.map((item) => (
                    <CarouselCard item={item} />
                ))}</SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Carousel
