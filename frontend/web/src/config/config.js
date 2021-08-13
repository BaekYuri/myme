import React from 'react'
import { withStyles } from '@material-ui/core/';
import { teal } from '@material-ui/core/colors';

export const backUrl = 'http://localhost:3065'

export const convertCertType = (type) => {
  const types = ['',
    '매일',
    '평일 매일',
    '주말 매일',
    '주 6일',
    '주 5일',
    '주 4일',
    '주 3일',
    '주 2일',
    '주 1일'
  ]
  return types[type]
}

export const convertNumDay = (type) => {
  const types = [
    '월',
    '화',
    '수',
    '목',
    '금',
    '토',
    '일'
  ]
  return types[type]
}

export const convertDaysWeek = (type) => {
  const weekNum = type/7
  return weekNum + '주'
}

export const ColorTeal = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(teal[500]),
    backgroundColor: teal[500],
    '&:hover': {
      backgroundColor: teal[700],
    },
  },
}))