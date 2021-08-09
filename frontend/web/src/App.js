// react
import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// ui
import { createTheme, MuiThemeProvider } from '@material-ui/core/styles';

//redux
import { Provider } from 'react-redux';

// import store from './redux';
import store from './store/configureStore'

// page
import RoutineSetting from './pages/RoutineSetting/';
import Home from './pages/Home/';
import NotFound from './pages/NotFound/';
import Challenge from './pages/Challenge/';
import CreateChallenge from './pages/CreateChallenge/';
import Profile from './pages/Profile/';
import MirrorSetting from './pages/MirrorSetting/';
import Auth from './pages/Auth/';
import RoutineModal from './components/Routine/RoutineModal/index';
import CreateRoutineModal from './components/Routine/CreateRoutineModal/index';

// css
import './index.css';

/// theme
const theme = createTheme({
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
            <Route exact path="/" component={Auth} />
            <Route path="/Home" component={Home} />
            <Route path="/RoutineSetting" component={RoutineSetting} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/Challenge" component={Challenge} />
            <Route path="/CreateChallenge" component={CreateChallenge} />
            <Route path="/Profile" component={Profile} />
            <Route path="/MirrorSetting" component={MirrorSetting} />
            <Redirect to="/not-found" />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
        <RoutineModal/>
        <CreateRoutineModal/>
    </Provider>
  );
};

export default App;
