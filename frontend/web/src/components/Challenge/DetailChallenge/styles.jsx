import styled from 'styled-components';

const Wrapper = styled.div`
.detailChallenge{

 & .appBar{
    position: relative;
  }
  & .appBarTitle{
    margin-left: theme.spacing(1);
    flex: 1;
  }
  & .titleImg{
    text-align: center;
    background: #eeeeee
  }
  & .chip{
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
    margin: 0 50px;
    padding: 30px;
  }
  & .colorText{
    background: #B49173;
  }
}
`;

export default Wrapper;