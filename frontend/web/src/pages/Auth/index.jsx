import React, { useEffect } from 'react';
import Wrapper from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { LOAD_MY_INFO_REQUEST } from '../../reducers/user';
import LoginForm from '../../components/Auth/LoginForm';
import SignupForm from '../../components/Auth/SignupForm'

const Auth = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const { me, isSignUp } = useSelector((state) => state.user)

  useEffect(() => {
    dispatch({
      type: LOAD_MY_INFO_REQUEST
    })
  }, [])

  // 로그인 상태이면 홈 화면으로 이동!
  useEffect(() => {
    if (me) {
      history.push('/Home')
    }
  }, [me])

  return(
    <Wrapper>
      <div className="box">
        <div className="box2">
          <img src="/images/contact_us_img_4.png" alt="" width="40px" style={{margin: "20px"}}/>
        </div>
        <div className="LoginCard">
          {isSignUp
            ? <SignupForm />
            : <LoginForm />
          }
        </div>
      </div>
    </Wrapper>
  ) ;
};

export default Auth;
