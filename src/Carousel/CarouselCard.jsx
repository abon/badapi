import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const CarouselCard = ({ item: { name, birthday, img, status, nickname, portrayed } }) => {
    return (
        <div>
            <Card >
                <CardActionArea>
                    <CardMedia
                        style={{ height: 600, objectFit: 'contain' }}
                        image={img}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {birthday}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {nickname}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {portrayed}
                        </Typography>
                    </CardContent>
                </CardActionArea>

            </Card>
        </div>
    )
}

export default CarouselCard
