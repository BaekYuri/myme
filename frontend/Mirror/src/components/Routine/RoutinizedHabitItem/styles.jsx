import styled from 'styled-components';
import {ListItem} from '@material-ui/core';
const Wrapper = styled(ListItem)`
    margin:10px;
    background-color:#151515;
    border-radius:4px;
    .habit-name{
        height: 58px;
        line-height: 58px;
    }
    .routine-title{
        margin-left:26px;
    }
`;
export default Wrapper;