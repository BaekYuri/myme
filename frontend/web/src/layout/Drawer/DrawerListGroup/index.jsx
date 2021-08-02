import React, {Fragment } from 'react';
import { useHistory } from 'react-router-dom';

import {connect} from 'react-redux';
import {closeDrawer } from '../../../redux/modules/layoutStore';
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

const DrawerListGroup = (props) => {
  
    let history = useHistory();
  
    const onClickRedirectPathHandler = name => () => {
        props.dispatch(closeDrawer());
        window.scrollTo(0, 0);
        history.push(name);
    };
  
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
                      primary={'Me'}
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
                        />
                      </ListItem>
                    </List>
                  </AccordionDetails>
                </Accordion>
              </ListItem>
          <ListItem
            button
            key={'MyRoutine'}
            onClick={onClickRedirectPathHandler('/')}
          >
            <ListItemText primary={'나의 루틴'} disableTypography />
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