import styled from 'styled-components';
import Container from '@material-ui/core/Container';
const Wrapper = styled(Container)`
    width: auto;
    .routine-item{
        margin-bottom : 10px;
        width:100%;
    }
    .details{
        display: block;
    }
    .btn{
        float: right;
    }
    .modify-btn{
        width: 25px;
        height: auto;
        color: darkgray;
        margin: 10px;
    }

    #add-btn{
        color:#5FA16A;
    }

    #delete-btn{
        color:#A1777F;
    }

    #save-btn{
        color:#6F93A1;
    }
`;
export default Wrapper;