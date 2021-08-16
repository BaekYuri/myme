import styled from 'styled-components';
import {ListItem} from '@material-ui/core';
const Wrapper = styled(ListItem)`
    margin:10px;
    background-color:#151515;
    border-radius:4px;

    .text{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        height:58px;
        line-height:58px;
    }
`;
export default Wrapper;