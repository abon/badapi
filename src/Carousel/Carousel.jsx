import { useState } from 'react'
import axios from 'axios'
import 'swiper/swiper.scss';
import CarouselCard from './CarouselCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const API_URL = 'https://breakingbadapi.com/api/characters'

const Carousel = () => {

    const [items, setItems] = useState([])

    useState(() => {
        const fetchItems = async () => {
            const result = await axios(`https://breakingbadapi.com/api/characters`)
            console.log(result.data);
            setItems(result.data);
        }
        fetchItems()
    }, [])


    return (
        <div >
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {items.map((item) => (
                    <SwiperSlide>
                        <CarouselCard item={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Carousel
