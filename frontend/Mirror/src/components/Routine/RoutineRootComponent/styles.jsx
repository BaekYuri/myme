import styled from 'styled-components';
const Wrapper = styled.div`
    .progress > div{
        min-width: 450px;
        position: absolute;
        bottom: 47px;
    }
    .progress-expanded > div{
        z-index:50;
        width: 1400px;
    }
`;
export default Wrapper;