import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  .content {
    width:auto;
    transition: all 0.3s ease;
    padding-bottom: 287px;
    min-height: 1200px;
  }
  .content-shift {
    transition: all 0.3s ease;
    margin-left: 280px;
  }
  .container {
    margin-bottom: 30px;
  }
  @media (max-width: 960px) {
    padding-bottom: 377px;
  }
`;

export default Wrapper;
