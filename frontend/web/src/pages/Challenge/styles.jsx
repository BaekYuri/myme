// import styled from 'styled-components';

// const Wrapper = styled.div`
// display: flex;
// justify-content: center;
// align-items: center;
// height: 250px;
// width: 100%;
// background-color: #00008B;
// color: #fff;
// margin: 0 15px;
// font-size: 4em;
// `;

// export default Wrapper;
import styled from 'styled-components';

const Wrapper = styled.div`
  width: auto;
  padding: 10px;
  hr {
    border: white 1px solid;
    margin-top: 10px;
  }
    .daily-menu{
      width:auto;
  }
  .grid{

  & .CardContent{
      margin-top: 30px;
    }
    & .TotalCard{
      margin-bottom: 20px;
    }
  }
  .term{
    background-color: #66A091;
    padding: 5px;
    text-align: center;
    color: white;
    border-radius: 5px;
    margin: 0% 2.5% 0% 2.5%;
  }
  .grid {
    margin: 20px 0;
  }
`;

export default Wrapper;

