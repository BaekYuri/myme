import React, { useState } from 'react'
import { Box, Grid, Paper, Tab, Tabs, Typography } from '@material-ui/core';
import { categories } from '../../../config/config';
import { useSelector } from 'react-redux';
import CardList from '../CardList';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box mt={2}>
          {children}
        </Box>
      )}
    </div>
  );
}

const ChallengeCategory = () => {
  const { challenges } = useSelector((state) => state.challenge)
  const [value, setValue] = useState(0);

  function a11yProps(index) {
    return {
      id: `scrollable-prevent-tab-${index}`,
      'aria-controls': `scrollable-prevent-tabpanel-${index}`,
    };
  }

  const workoutChallenges = challenges?.filter((challenge) => challenge.Categories[0]?.id === 1)
  const studyChallenges = challenges?.filter((challenge) => challenge.Categories[0]?.id === 2)
  const lifeChallenges = challenges?.filter((challenge) => challenge.Categories[0]?.id === 3)
  const mealChallenges = challenges?.filter((challenge) => challenge.Categories[0]?.id === 4)
  const abilityChallenges = challenges?.filter((challenge) => challenge.Categories[0]?.id === 5)
  const hobbyChallenges = challenges?.filter((challenge) => challenge.Categories[0]?.id === 6)
  const assetChallenges = challenges?.filter((challenge) => challenge.Categories[0]?.id === 7)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
    {
      challenges.length !== 0 ?
        <>
          <Paper style={{ marginTop: '5px' }} >
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              indicatorColor="primary"
              textColor="primary"
            >
              <Tab label="전체" {...a11yProps(0)} />
              {
                categories.map((subject, i) => {
                  return <Tab key={subject.name} label={subject.label} {...a11yProps(i+1)}/>
                })
              }
            </Tabs>
          </Paper>
          <TabPanel value={value} index={0}>
            {
              challenges.length !== 0 ?
                <Grid item xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }} >
                  <CardList challenges={challenges}/>
                </Grid>
              :
                <Grid item xs={12} style={{ textAlign: 'center' }} >
                  <Typography component={'div'} >전체 챌린지를 준비중입니다!</Typography>
                </Grid>
            }
          </TabPanel>
          <TabPanel value={value} index={1}>
            {
              workoutChallenges.length !== 0 ?
                <Grid item xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }} >
                  <CardList challenges={workoutChallenges}/>
                </Grid>
              :
                <Grid item xs={12} style={{ textAlign: 'center' }} >
                  <Typography component={'div'} >운동 챌린지를 준비중입니다!</Typography>
                </Grid>
            }
          </TabPanel>
          <TabPanel value={value} index={2}>
            {
              studyChallenges.length !== 0 ?
                <Grid item xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }} >
                  <CardList challenges={studyChallenges} />
                </Grid>
              :
                <Grid item xs={12} style={{ textAlign: 'center' }} >
                  <Typography component={'div'} >공부 챌린지를 준비중입니다!</Typography>
                </Grid>
            }
          </TabPanel>
          <TabPanel value={value} index={3}>
            {
              lifeChallenges.length !== 0 ?
                <Grid item xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }} >
                  <CardList challenges={lifeChallenges}/>
                </Grid>
              :
                <Grid item xs={12} style={{ textAlign: 'center' }} >
                  <Typography component={'div'} >생활 챌린지를 준비중입니다!</Typography>
                </Grid>
            }
          </TabPanel>
          <TabPanel value={value} index={4}>
          {
              mealChallenges.length !== 0 ?
                <Grid item xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }} >
                  <CardList challenges={mealChallenges}/>
                </Grid>
              :  
                <Grid item xs={12} style={{ textAlign: 'center' }} >
                  <Typography component={'div'} >식사 챌린지를 준비중입니다!</Typography>
                </Grid>
            }
          </TabPanel>
          <TabPanel value={value} index={5}>
            {
              abilityChallenges.length !== 0 ?
                <Grid item xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }} >
                  <CardList challenges={abilityChallenges}/>
                </Grid>
              :
                <Grid item xs={12} style={{ textAlign: 'center' }} >
                  <Typography component={'div'} >역량 챌린지를 준비중입니다!</Typography>
                </Grid>
            }
          </TabPanel>
          <TabPanel value={value} index={6}>
            {
              hobbyChallenges.length !== 0 ?
                <Grid item xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }} >
                  <CardList challenges={hobbyChallenges}/>
                </Grid>
              :
                <Grid item xs={12} style={{ textAlign: 'center' }} >
                  <Typography component={'div'} >취미 챌린지를 준비중입니다!</Typography>
                </Grid>
            }
          </TabPanel>
          <TabPanel value={value} index={7}>
            {
              assetChallenges.length !== 0 ?
                  <Grid item xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }} >
                    <CardList challenges={assetChallenges}/>
                  </Grid>
              :
                <Grid item xs={12} style={{ textAlign: 'center' }} >
                  <Typography component={'div'} >자산 챌린지를 준비중입니다!</Typography>
                </Grid>
            }
          </TabPanel>
        </>
      :
        <Typography >카테고리별 챌린지를 준비중입니다!</Typography>
    }
      
    </>
  )
}

export default ChallengeCategory