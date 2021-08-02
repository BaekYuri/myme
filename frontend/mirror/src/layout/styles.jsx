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

<<<<<<< HEAD:frontend/web/src/layout/styles.jsx
    margin-left: 280px;
=======
    /* margin-left: 280px; */
  }
  .footer {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    background: #ffffff;
>>>>>>> d08b2f243615fd20c03df180a3a313e133d3fe85:frontend/mirror/src/layout/styles.jsx
  }
  .container {
    margin-bottom: 30px;
  }
  @media (max-width: 960px) {
    padding-bottom: 377px;
  }
`;

export default Wrapper;
