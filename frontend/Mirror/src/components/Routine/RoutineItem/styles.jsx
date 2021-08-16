import styled from 'styled-components';
import {ListItem} from '@material-ui/core';
const Wrapper = styled(ListItem)`
    border-radius:4px;
    border:2px solid #666666;

    .text{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        height:58px;
        line-height:58px;
    }

    .achieve{
        color:#2b3856;
    }
    .no-achieve{
        color:#C2BDAC;
    }
`;
export default Wrapper;