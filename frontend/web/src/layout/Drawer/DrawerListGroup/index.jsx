import React, { Fragment, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { connect, useDispatch, useSelector } from 'react-redux';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  Avatar,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core';
import { logoutRequestAction } from '../../../reducers/user';
import { CLEAR_MY_ROUTINES } from '../../../reducers/routine';
import { CLEAR_MY_CHALLENGES } from '../../../reducers/challenge';
import { CLOSE_DRAWER } from '../../../reducers/layout';

const DrawerListGroup = (props) => {
  const dispatch = useDispatch()
  const { me } = useSelector((state) => state.user)

  let history = useHistory();

  const onClickRedirectPathHandler = name => () => {
      dispatch({
        type: CLOSE_DRAWER
      })
      window.scrollTo(0, 0);
      history.push(name);
  };

  const onSignOut = useCallback(() => {
    dispatch({
      type: CLEAR_MY_ROUTINES
    })
    dispatch({
      type: CLEAR_MY_CHALLENGES
    })
    dispatch({
      type: CLOSE_DRAWER
    })
    dispatch(logoutRequestAction())
  }, [me])

  useEffect(() => {
    if (!me) {
      history.push('/')
    }
  }, [me])

  return (
    <>
      <List className="drawer-list-group-list">
        <Fragment>
          <ListItem button key={'Me'} className="bg-unset">
            <Accordion className="panel">
              <AccordionSummary
                className="panel-summary"
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Avatar
                  alt="profile picture"
                  src={`https://picsum.photos/id/82/200/300.webp`}
                  className="avatar"
                />
                <ListItemText
                  primary={me?.nickname}
                  disableTypography
                  className="list-item"
                />
              </AccordionSummary>
              <AccordionDetails>
                <List className="expansion-panel">
                  <ListItem
                    button
                    key={'Edit Profile '}
                  >
                    <ListItemText
                      primary={'Edit Profile'}
                      disableTypography
                    />
                  </ListItem>
                  <ListItem
                    button
                    key={'Change Password'}
                  >
                    <ListItemText
                      primary={'Change Password'}
                      disableTypography
                    />
                  </ListItem>
                  <ListItem button key={'Sign Out'}>
                    <ListItemText
                      primary={'Sign Out'}
                      disableTypography
                      className="list-item"
                      onClick={onSignOut}
                    />
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
          </ListItem>
        <ListItem
          button
          key={'MyRoutine'}
          onClick={onClickRedirectPathHandler('/Home')}
        >
          <ListItemText primary={'홈'} disableTypography />
        </ListItem>

              <ListItem
                button
                key={'RoutineSetting'}
                onClick={onClickRedirectPathHandler('/RoutineSetting')}
              >
                <ListItemText primary={'루틴 설정'} disableTypography />
              </ListItem>
              
              <ListItem
                button
                key={'ChallengeHome'}
                onClick={onClickRedirectPathHandler('/ChallengeHome')}
              >
                <ListItemText primary={'챌린지'} disableTypography />
              </ListItem>
            
          <ListItem
            button
            key={'AboutMe'}
            onClick={onClickRedirectPathHandler('/Profile')}
          >
            <ListItemText primary={'개인 정보'} disableTypography />
          </ListItem>
          <ListItem
            button
            key={'ContactUs'}
            onClick={onClickRedirectPathHandler('/MirrorSetting')}
          >
            <ListItemText primary={'스마트 미러 관리'} disableTypography />
          </ListItem>
          <ListItem
            button
            key={'HabitSetting'}
            onClick={onClickRedirectPathHandler('/HabitSetting')}
          >
            <ListItemText primary={'습관 관리'} disableTypography />
          </ListItem>
          </Fragment>
        
        </List>
      </>
    );
  };


  const mapStateToProps= (state) =>{
  
    return {
      state: state
    }
  }
  export default connect(
    mapStateToProps
  )(DrawerListGroup);