import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import styled from 'styled-components';
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
    Grid
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



const Container = styled.div`
    min-height: 200px;
    //background: #000;
  `,
  StyledSlider = styled(Slider)`
    & .slick-slide img {
      max-width: 100%;
      min-height: 400;
    }
  `,
  ImageContainer = styled.div`
    position: relative;
    color: white;
    margin: 0 20px;
  `,
  Image = styled.img``,
  BottomLeft = styled.div`
    position: absolute;
    bottom: 8px;
    left: 16px;
  `;

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

const Challenge = () => {
    const classes = useStyles();
    const [favorite, setFavorite] = useState(false);

    const settings = {
        // slidesToShow: 2,
        // slidesToScroll: 1,
        // dots: true,
        // centerMode: true,
        // infinite: true,
        // adaptiveHeight: true,
        // arrows: true
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
        <Container>
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
                                    10분 명상
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <DetailChallenge></DetailChallenge>
                                </Grid>
                            </Grid>
                            <Typography variant="body2" color="textSecondary" component="p">
                            매일 아침 10분 명상을 통해 내면을 들여다 봅시다.
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
      );
 }

export default Challenge;