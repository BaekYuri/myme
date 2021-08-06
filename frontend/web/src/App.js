// react
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// ui
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

//redux
import {Provider, useDispatch} from 'react-redux';
// import store from './redux';
import store from './store/configureStore'

// hook
import { CommonContext } from './context/CommonContext';
import { useLocalStorageSetState } from './common/CommonHooks';

// page
import RoutineSetting from './pages/RoutineSetting/';
import Home from './pages/Home/';
import NotFound from './pages/NotFound/';
import Challenge from './pages/Challenge/';
import CreateChallenge from './pages/CreateChallenge/';
import Profile from './pages/Profile/';
import MirrorSetting from './pages/MirrorSetting/';
import Layout from './layout/';
import Auth from './pages/Auth/';

// css
import './index.css';
import { LOAD_MY_INFO_REQUEST } from './reducers/user';

// const
const defaultThumbnailImage = 'default_user.jpg';
const HOST = '192.168.0.82:3001';
const serverUrl = `http://localhost:3065`;
const serverUrlBase = `http://${HOST}`;
const serverImgUrl = `https://ssafy-viba-s3.s3.ap-northeast-2.amazonaws.com/public/`;

/// theme
const theme = createMuiTheme({
  typography: {
    fontFamily: ['Noto Sans KR'].join(','),
    button: {
      fontFamily: 'Noto Sans KR',
    },
    body1: {
      fontWeight: 500,
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: 'white',
        },
      },
    },
  },
});

// app
const App = () => {
  return (
    <Provider store = {store}>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/Home" component={Home} />
            <Route exact path="/RoutineSetting" component={RoutineSetting} />
            <Route exact path="/not-found" component={NotFound} />
            <Route exact path="/Challenge" component={Challenge} />
            <Route exact path="/CreateChallenge" component={CreateChallenge} />
            <Route exact path="/Profile" component={Profile} />
            <Route exact path="/MirrorSetting" component={MirrorSetting} />
            <Route exact path="/" component={Auth} />
            <Redirect to="/not-found" />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    </Provider>
  );
};

export default App;
