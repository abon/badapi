import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import './CarouselCard.css'

const CarouselCard = ({ item: { name, birthday, img, status, nickname, portrayed } }) => {
    return (
        <div className="card">
            <div className="card__main">
                <img className='card__image' src={img} alt="" />
                <p className='card__name'>{name}</p>

            </div>
            <div className="card__info">
                {birthday}
            </div>
        </div>


    )
}

export default CarouselCard
