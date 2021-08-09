import React from 'react';
import { 
  makeStyles, 
  withStyles,
  Button,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Slide,
  Grid,
  Chip,
  Container
  } from '@material-ui/core/';
import CloseIcon from '@material-ui/icons/Close';
import { teal } from '@material-ui/core/colors';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Wrapper from './styles';
import PersonIcon from '@material-ui/icons/Person';
import FavoriteIcon from '@material-ui/icons/Favorite';

const ColorTeal = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(teal[500]),
    backgroundColor: teal[500],
    '&:hover': {
      backgroundColor: teal[700],
    },
  },
}))

const ColorButton = ColorTeal(Button);
const ColorAppBar = ColorTeal(AppBar);
const ColorChip = ColorTeal(Chip);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FullScreenDialog=(props)=> {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    // <Wrapper>
    <>
      <ColorButton variant="outlined" onClick={handleClickOpen}>
        상세보기
      </ColorButton>
      
      <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} TransitionComponent={Transition} className="detailChallenge">
        {/* <ColorAppBar className="appBar">
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className="appBarTitle">
              상세보기
            </Typography>
          </Toolbar>
        </ColorAppBar> */}
        <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={1}
    >
        <Container spacing={1} style={{padding: '10px'}}>
          {/* 대표이미지 */}
          <Grid item xs={12} className="titleImg" style={{textAlign: 'center'}}>
            <img src="/images/challenge.png" alt="" style={{width: '50%'}}></img>
          </Grid>
          {/* 제목 */}
          <Grid item xs={12}>
            <h2>{props.challengeId}</h2><span><FavoriteBorderIcon style={{float: 'right', padding: '30px'}}></FavoriteBorderIcon></span>
          </Grid>
          {/* 좋아요 */}
          
          {/* 태그 */}
          <Grid item xs={12}>
              <div className="chip">
                  <ColorChip label="정서"/>
                  <ColorChip label="2주" />
                  <ColorChip  label="평일매일"  />
              </div>
          </Grid>
          {/* 설명 */}
          <Grid item xs={12} >
            <h4>{props.challengeContent}</h4>
          </Grid>
          <Grid item xs={12} >
            <h4 className="colorText">매일 1번 인증샷을 찍어 올려야 해요!</h4>
          </Grid>
          <Grid item xs={12}>
          <PersonIcon></PersonIcon> 참가인원 132 명
          </Grid>
          <Grid item xs={12}>
          <FavoriteIcon></FavoriteIcon> 좋아요 10 명
          </Grid>
          <Grid item xs={12}>
          <ColorButton variant="outlined" onClick={handleClickOpen}>
        참여하기!
      </ColorButton>
        </Grid>
      </Container>
      </Grid>
      </Dialog>
      </>
    // </Wrapper>
  );
}

export default FullScreenDialog;