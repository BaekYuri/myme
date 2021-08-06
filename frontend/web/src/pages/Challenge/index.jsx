import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Grid, Button, Typography, InputBase, makeStyles, alpha, withStyles } from '@material-ui/core/';
import RecommendChallenge from '../../components/Challenge/RecommendChallenge';
import NewChallenge from '../../components/Challenge/NewChallenge';
import TotalChallenge from '../../components/Challenge/TotalChallenge';
import Wrapper from './styles';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router-dom';
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
    let history = useHistory();
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
                <h1>신규</h1>
                <Grid item xs={12}><hr/></Grid>
                    <Grid item xs={12} className="CardContent">
                    <RecommendChallenge></RecommendChallenge>
                    </Grid>
                </Grid>
                <div style={{height: '150px'}}></div>
                <Grid container xs={12} className="grid" style={{padding: '20px', margin: '10px'}}>
                <h1>신규</h1>
                <Grid item xs={12}><hr/></Grid>
                    <Grid item xs={12} className="CardContent">
                    <NewChallenge></NewChallenge>
                    </Grid>
                </Grid>
                <div style={{height: '150px'}}></div>
                <Grid container xs={12} className="grid" style={{padding: '20px', margin: '10px'}}>
                    <Grid item xs={12} >
                    <h1 className="TotalCard">전체</h1>
                    <TotalChallenge></TotalChallenge>
                    </Grid>
                </Grid>
                </Layout>
             </Wrapper>
          
      );
 }

export default Challenge;



// const Container = styled.div`
//     min-height: 400px;
//     background: #1ab394;
//   `,
//   StyledSlider = styled(Slider)`
//     & .slick-slide img {
//       max-width: 100%;
//       min-height: 500px;
//     }
//   `,
//   ImageContainer = styled.div`
//     position: relative;
//     color: white;
//     margin: 0 20px;
//   `,
//   Image = styled.img``,
//   BottomLeft = styled.div`
//     position: absolute;
//     bottom: 8px;
//     left: 16px;
//   `;

// const items = [
//   { id: 1, url: "http://placekitten.com/g/400/200", caption: "Cute Kitten" },
//   { id: 2, url: "http://placekitten.com/g/400/200", caption: "Cute Kitten" },
//   { id: 3, url: "http://placekitten.com/g/400/200", caption: "Cute Kitten" },
//   { id: 4, url: "http://placekitten.com/g/400/200", caption: "Cute Kitten" },
//   { id: 5, url: "http://placekitten.com/g/400/200", caption: "Cute Kitten" },
//   { id: 6, url: "http://placekitten.com/g/400/200", caption: "Cute Kitten" },
//   { id: 7, url: "http://placekitten.com/g/400/200", caption: "Cute Kitten" },
//   { id: 8, url: "http://placekitten.com/g/400/200", caption: "Cute Kitten" },
//   { id: 9, url: "http://placekitten.com/g/400/200", caption: "Cute Kitten" },
//   { id: 10, url: "http://placekitten.com/g/400/200", caption: "Cute Kitten" }
// ];
