import React, { useContext } from 'react';
import { CommonContext } from '../../context/CommonContext';
import { Grid } from '@material-ui/core';
import Wrapper from './styles';
import { useHistory } from 'react-router-dom';

const Footer = () => {
  const { drawerOpen } = useContext(CommonContext);
  const history = useHistory();
  return (
    <Wrapper>
      <Grid container className="footer">
        <Grid item sm={12} md={8} className="left-box">
          <ul className="page">
            <li>
              <span
                onClick={() => {
                  history.push('/Terms');
                  window.scrollTo(0, 0);
                }}
              >
                Privacy Policy
              </span>
            </li>
            <li>
              <span
                onClick={() => {
                  history.push('/AboutMe');
                  window.scrollTo(0, 0);
                }}
              >
                Developer Introduction
              </span>
            </li>
            <li>
              <span
                onClick={() => {
                  history.push('/ContactUs');
                  window.scrollTo(0, 0);
                }}
              >
                Contact Us
              </span>
            </li>
          </ul>
          <ul className="info">
            <li>Samsung Multi Campus </li>
            <li>
              212 Tehran-Ro, Gangnam-Gu, Seoul (Yeoksam-Dong 718-5 Address)
            </li>
          </ul>
          <p>Copyright by SSAFY 5th MYME. All rights reserved.</p>
        </Grid>
        {/* <Grid item sm={12} md={4} className="right-box">
          <Grid className="text-box">
            <h2>For Help</h2>
            <h3>minjoo0112@naver.com</h3>
            <h4>Contact Out Customer Support Team</h4>
          </Grid>
        </Grid> */}
      </Grid>
    </Wrapper>
  );
};

export default Footer;
