import React from 'react';
import { makeStyles, Chip, AppBar } from '@material-ui/core/';
import CardList from '../CardList/';

const chipStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'left',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1.5),
      },
      margin: '0 50px',
      background: '#66A091'
    },
  }));

export default function TotalChallenge() {
    const chipClasses = chipStyles();
    const handleClick = () => {
        console.info('주제선택');
      };

      
  return (
    <div>
        <AppBar position="static" style={{background: '#66A091'}}>
            <div className={chipClasses.root}>
                <Chip label="전체" onClick={handleClick} color="#66A091"/>
                <Chip label="#운동" onClick={handleClick} />
                <Chip  label="#공부" onClick={handleClick} />
                <Chip label="#식사" onClick={handleClick} />
                <Chip label="#취미" onClick={handleClick} />
                <Chip label="#다이어트" onClick={handleClick} />
            </div>
        </AppBar>
            <div style={{height: '20px'}}></div>
      {/* <CardList></CardList> */}
    </div>
  );
}