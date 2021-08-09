import React from 'react';
import Wrapper from './styles'
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


const Challenge = (props) => {
    const classes = useStyles();
      return (
        <Wrapper>
          <Container maxWidth="lg" >
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
                                {props.challengeId}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <DetailChallenge challengeId={props.challengeId} challengeContent={props.challengeContent}></DetailChallenge>
                            </Grid>
                        </Grid>
                        <Typography variant="body2" color="textSecondary" component="p">
                        {props.challengeContent}
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
        </Container>
      </Wrapper>
      );
}

export default Challenge;