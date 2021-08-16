import styled from 'styled-components';
import {makeStyles} from '@material-ui/core/styles'
const Wrapper = styled.div`
  position: relative;
  .content {
    width:auto;
    transition: all 0.3s ease;
  }
  .content-shift {
    transition: all 0.3s ease;
    margin-left: 280px;
  }
  .container {
    margin-bottom: 30px;
  }
`;

export default Wrapper;
