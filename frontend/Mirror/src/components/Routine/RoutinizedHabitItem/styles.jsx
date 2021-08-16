import styled from 'styled-components';
import {ListItem} from '@material-ui/core';
const Wrapper = styled(ListItem)`
    border:2px solid #666666;
    border-radius:4px;
    background-color:#050505;
    .habit-name{
        height: 58px;
        line-height: 58px;
    }
    .routine-title{
        margin-left:26px;
    }
    .MuiCheckbox-colorSecondary.Mui-disabled{
        color:#C2BDAC;
    }
`;
export default Wrapper;