import React, { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ReplayIcon from '@material-ui/icons/Replay';
import { useSelector, useDispatch } from 'react-redux';
import { logoutRequestAction } from '../../../reducers/user';
import Wrapper from './styles';
const App=(props)=>{
    const { me, logOutError } = useSelector((state) => state.user)
    let history = useHistory();
    const dispatch = useDispatch()

useEffect(() => {
    if (!me) {
      history.push('/')
    }
    if (logOutError) {
      console.log(logOutError)
    }
  }, [me, logOutError])

const onSignOut = useCallback(() => {
    dispatch(logoutRequestAction())
  }, [me])

  function reload(){
    window.location.replace("/Home")
  }
  return(
      <Wrapper>
          <IconButton onClick={onSignOut}>
            <ExitToAppIcon className='btn'/>
          </IconButton>
          <IconButton onClick={reload}>
             <ReplayIcon className='btn'/>
          </IconButton>
      </Wrapper>
  )

}
export default App;