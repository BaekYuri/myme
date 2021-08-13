import styled from 'styled-components';
const Wrapper = styled.div`
    width: 900px;
    #now-weather-icon{
        width:150px;
    }
    #min-max-temp > *{
        display:inline-block;
    }

    .text{
        margin-top:-40px;
    }

    .text>h6{
        font-size:25px;
    }

    #dong{
        font-size:22px;
        text-align: right;
        width: 450px;
    }

    #next-weather{
        position: absolute;
        top: 80px;
        left: 140px;
    }
`;
export default Wrapper;