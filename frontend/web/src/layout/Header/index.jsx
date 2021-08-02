import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import store from 'store';

import { useTheme } from '@material-ui/core/styles';
import {connect} from 'react-redux';
import { openDrawer } from '../../redux/modules/layoutStore';

import {
  Grid,
  Typography,
  AppBar,
  Button,
  IconButton,
  useMediaQuery,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Wrapper from './styles';

const Header = (state) => {
  let history = useHistory();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const handleSignInDialogOpen = () => {
    history.push('/Auth');
  };

  const onClickRedirectPathHandler = name => e => {
    window.scrollTo(0, 0);
    if (name === '/SearchVote') {
      if (history.location.pathname === name) {
        history.goBack();
        store.remove('search');
      } else {
        history.push(name);
      }
    } else {
      history.push(name);
    }
  };

  return (
    <>
      <Wrapper>
        {isTablet && (
          <Grid
            container
            direction="column"
            justify="space-between"
            aria-label="open drawer"
            onClick={
              ()=>{ state.dispatch(openDrawer());}
            }
            className={state.state.layoutStore.drawerOpen ? 'menu-button on' : 'menu-button'}
          >
            <Grid></Grid>
            <Grid></Grid>
            <Grid></Grid>
          </Grid>
        )}
        <AppBar
          position="fixed" style={{background:'#89DDBF'}}
          className={state.state.layoutStore.drawerOpen ? 'appbar appbar-shift' : 'appbar'}
        >
          <Grid container justify={!isTablet?'space-between':'space-evenly'} alignItems="center">
            <Grid item>
              <Typography
                variant="h6"
                className="logo"
                onClick={onClickRedirectPathHandler('/')}
              >
                Logo
              </Typography>
            </Grid>


            <Grid item>
              <Grid container alignItems="center">
                <Grid item>
                  <IconButton
                    aria-label="delete"
                    onClick={onClickRedirectPathHandler('/SearchVote')}
                  >
                    <SearchIcon
                      fontSize="default"
                      color="inherit"
                      htmlColor="#eeeeee"
                    />
                  </IconButton>
                </Grid>
                <Grid item>
                  <Button
                   style={{background:'#89DDBF'}}
                    variant="contained"
                    onClick={handleSignInDialogOpen}
                    className="display-none header-button"
                  >
                    {false ? 'My' : 'Sign In'}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </AppBar>
      </Wrapper>
    </>
  );
};

//export default Header;

const mapStateToProps= (state) =>{

  return {
    state: state
  }
}

export default connect(
  mapStateToProps
)(Header);