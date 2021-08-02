import React, { useContext, useEffect } from 'react';
import Login from '../../components/Auth/SignResponsiveDialog'
import { CommonContext } from '../../context/CommonContext';
import Wrapper from './styles';

const Auth = () => {
  const { user, setSignDialogOpen, setUserDetailDialogOpen } = useContext(
    CommonContext,
  );

  useEffect(() => {
    if (user.status === '') {
      setSignDialogOpen(true);
    } else if (user.status === 'login') {
      setUserDetailDialogOpen(true);
    } else if (user.status === 'default') {
      setSignDialogOpen(false);
    } else {
      alert('More than');
    }
  }, []);

  return(
    <Wrapper>
      <div className="box">
        <div className="box2"><img src="/images/contact_us_img_4.png" alt="" width="40px" style={{margin: "20px"}}/></div>
        <div className="LoginCard">
          <Login />
        </div>
      </div>
    </Wrapper>
  ) ;
};

export default Auth;
