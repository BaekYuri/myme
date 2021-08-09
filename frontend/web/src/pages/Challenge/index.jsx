import React, {useEffect} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import { Grid, Button, Typography, InputBase, makeStyles, alpha, withStyles } from '@material-ui/core/';
import CardList from '../../components/Challenge/CardList';
import RecommendChallenge from '../../components/Challenge/RecommendChallenge';
import NewChallenge from '../../components/Challenge/NewChallenge';
import TotalChallenge from '../../components/Challenge/TotalChallenge';
import { LOAD_CHALLENGES_REQUEST } from '../../reducers/challenge';
import Wrapper from './styles';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';
import Layout from '../../layout/index';
import { teal } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },

  }));

  const ColorTeal = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(teal[500]),

    },
  }))
  
  const ColorButton = ColorTeal(Button);

const Challenge = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { challenges } = useSelector((state) => state.challenge)
    let history = useHistory();
    //slider setting
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
    useEffect(() => {
      dispatch({
        type: LOAD_CHALLENGES_REQUEST
      })
    }, [])
      return (       
          <Wrapper>
            <Layout>
              <Grid container xs={12} style={{padding: '20px', margin: '10px'}}>
                  <Grid item xs={4} className="CardContent"></Grid>
                    <Grid item xs={8} className="CardContent">
                        <div className={classes.search} style={{float:'right'}}>
                            <div className={classes.searchIcon}>
                            <SearchIcon />
                            </div>
                            <InputBase
                            placeholder="검색"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                    {/* </Grid>
                    <Grid item xs={5} className="CardContent"> */}
                        <Button
                            variant="outlined"
                            // color="default"
                            startIcon={<AddIcon />}
                            style={{float: 'right', width:'auto'}}
                            onClick={()=>{history.push('/CreateChallenge/')}}
                        >
                            챌린지 생성하기
                        </Button>
                    </Grid>
                </Grid>
                
                <Grid container xs={12} className="grid" style={{padding: '20px', margin: '10px'}}>
                <h1>추천</h1>
                <Grid item xs={12}><hr/></Grid>
                    <Grid item xs={12} className="CardContent">
                    <Slider
                      {...settings}
                        style={{
                        padding: 0,
                        width: "100%",
                        
                      }}
                    >
                      {
                        challenges.map((challenge) => {
                          return <CardList key={challenge.id} challengeId={challenge.name} challengeContent={challenge.content}></CardList>
                        })
                      }
                    </Slider>
                    </Grid>
                </Grid>
                <div style={{height: '150px'}}></div>
                <Grid container xs={12} className="grid" style={{padding: '20px', margin: '10px'}}>
                <h1>신규</h1>
                <Grid item xs={12}><hr/></Grid>
                    <Grid item xs={12} className="CardContent">
                    <Slider
                      {...settings}
                        style={{
                        padding: 0,
                        width: "100%",
                        
                      }}
                    >
                      {
                        challenges.map((challenge) => {
                          return <CardList key={challenge.id} challengeId={challenge.name} challengeContent={challenge.content}></CardList>
                        })
                      }
                    </Slider>
                    </Grid>
                </Grid>
                <div style={{height: '150px'}}></div>
                <Grid container xs={12} className="grid" style={{padding: '20px', margin: '10px'}}>
                    <Grid item xs={12} >
                    <h1 className="TotalCard">전체</h1>
                    <TotalChallenge></TotalChallenge>
                    <Slider
                      {...settings}
                        style={{
                        padding: 0,
                        width: "100%",
                        
                      }}
                    >
                      {
                        challenges.map((challenge) => {
                          return <CardList key={challenge.id} challengeId={challenge.name} challengeContent={challenge.content}></CardList>
                        })
                      }
                    </Slider>
                    </Grid>
                </Grid>
                </Layout>
            </Wrapper>
          
      );
}

 const mapStateToProps = (state) =>{
  return {
      state
  }
}
export default connect(mapStateToProps)(Challenge);

