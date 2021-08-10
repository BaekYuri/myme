import styled from 'styled-components';
const Wrapper = styled.div`
    width:100%;
    .progress-btn{
        width: 90%;
        height: auto;
        margin: calc(10%/6);
        color: #776D61;
    }
    .assist{
        background-color:#776D61;
        padding: 20px;
    }
    .assist > * {
        color:white;
    }

    .time {
        text-align: center;
        align-self: center;
        font-size: 30px;
    }

    .complete-btn{
        color:red;
    }
`;
export default Wrapper;