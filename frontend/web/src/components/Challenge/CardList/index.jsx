import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Wrapper from './styles'
import styled from 'styled-components';
import { connect, useDispatch, useSelector } from 'react-redux';
import { 
    makeStyles,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Chip,
    Grid,
    Container
     } from '@material-ui/core/';

import PersonIcon from '@material-ui/icons/Person';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DetailChallenge from '../DetailChallenge/';

const useStyles = makeStyles({
  root: {
    maxWidth: 280,
  },
  media: {
    height: 150,
  },
});

const items = [
  { id: 1, url: "http://placekitten.com/g/400/200", caption: "Cute Kitten" },
  { id: 2, url: "http://placekitten.com/g/400/200", caption: "Cute Kitten" },
  { id: 3, url: "http://placekitten.com/g/400/200", caption: "Cute Kitten" },
  { id: 4, url: "http://placekitten.com/g/400/200", caption: "Cute Kitten" },
  { id: 5, url: "http://placekitten.com/g/400/200", caption: "Cute Kitten" },
  { id: 6, url: "http://placekitten.com/g/400/200", caption: "Cute Kitten" },
  { id: 7, url: "http://placekitten.com/g/400/200", caption: "Cute Kitten" },
  { id: 8, url: "http://placekitten.com/g/400/200", caption: "Cute Kitten" },
  { id: 9, url: "http://placekitten.com/g/400/200", caption: "Cute Kitten" },
  { id: 10, url: "http://placekitten.com/g/400/200", caption: "Cute Kitten" }
];

const Challenge = (props) => {
  const dispatch = useDispatch()
  const { challenge } = useSelector((state) => state.challenge)
    const classes = useStyles();
    const [favorite, setFavorite] = useState(false);

    const settings = {

        className: "center",
        centerPadding: "60px",
        dots: true, // 캐러셀이미지가 몇번째인지 알려주는 점을 보여줄지 정한다.
      infinite: true, // loop를 만들지(마지막 이미지-처음 이미지-중간 이미지들-마지막 이미지)
      speed: 500, // 애미메이션의 속도, 단위는 milliseconds
      slidesToShow: 3, // 한번에 몇개의 슬라이드를 보여줄 지
      slidesToScroll: 1, // 한번 스크롤시 몇장의 슬라이드를 넘길지
      centerMode: true,
      arrows: true,
      
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
      };
      return (
        <Wrapper>
        <Container maxWidth="lg" >
        <Slider
          {...settings}
          style={{
            padding: 0,
            width: "100%",
            
          }}
        >
          {items.map(item => {
            return (
              <div key={item.id}>
                {/* <ImageContainer>
                  <Image src={item.url} />
                  <BottomLeft>{item.caption}</BottomLeft>
                </ImageContainer> */}
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            component="img"
                            alt="Contemplative Reptile"
                        
                            image="images/run.png"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                    {challenge}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <DetailChallenge></DetailChallenge>
                                </Grid>
                            </Grid>
                            <Typography variant="body2" color="textSecondary" component="p">
                            {challenge}
                            </Typography>
                        </CardContent>

                    </CardActionArea>
                    <CardActions>
                        <PersonIcon></PersonIcon> 132
                    </CardActions>
                    <CardActions>
                        <FavoriteIcon></FavoriteIcon> 10
                    </CardActions>
                </Card>
              </div>
            );
          })}
        </Slider>
      </Container>
      </Wrapper>
      );
}

export default Challenge;