import React from 'react';
import { Grid } from '@material-ui/core';
import Mirror from '../../components/MirrorSetting/';
import Layout from '../../layout/index'
const MirrorSetting = () => {
    return (
        <Layout>
          <Grid container item xs={12}>
            <Mirror></Mirror>
          </Grid>        
        </Layout>        
    );
}

export default MirrorSetting;