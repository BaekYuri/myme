import React from 'react';
import { Grid } from '@material-ui/core';
import PersonalInformation from '../../components/Profile/';
import Layout from '../../layout/index'

const Profile = () => {
  return (
    <Layout>
      <Grid container item xs={12}>
        <PersonalInformation/>
      </Grid>   
    </Layout>             
  );
}

export default Profile;
