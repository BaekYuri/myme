import styled from 'styled-components';
const Wrapper = styled.div`
    width: auto;
    .routine-item{
        border: 1px solid #66A091;
        width:100%;
    }
    .details{
        display: block;
    }
    .button-div{
        text-align-last: center;
    }

    .button-div > button{
        padding: 10px;
        width: 70px;
        height: 70px;
        border-radius: 100px;
        background-color: #89DDBF;
        border: none;
        color: white;
        font-weight: 100;
        font-size: 40px;
    }
`;
export default Wrapper;