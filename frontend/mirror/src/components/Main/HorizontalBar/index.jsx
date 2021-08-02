import React from 'react';
import { Grid } from '@material-ui/core';
import Wrapper from './styles';
const HorizontalBar = (props) => {
  return (
    <Wrapper container style={{ backgroundColor: '#89DDBF' }}>
      <Grid
        item
        style={{
          width: `${props.percentage}%`,
        }}
      ></Grid>
    </Wrapper>
  );
};

export default HorizontalBar;
