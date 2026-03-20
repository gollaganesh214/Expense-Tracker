import React from 'react';
import { Box, Typography } from '@mui/material';
import { AttachMoney, TrendingUp, Analytics } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: 'center',
    padding: theme.spacing(0.5, 0),
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(0.5),
  },
  infoItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(0.5),
    flexWrap: 'wrap',
  },
  icon: {
    fontSize: '1.1rem',
    flexShrink: 0,
  },
  text: {
    lineHeight: 1.4,
    fontSize: '0.9rem',
  },
}));

const InfoCard = () => {
  const classes = useStyles();
  
  return (
    <Box className={classes.container}>
      <Box className={classes.infoItem}>
        <AttachMoney className={classes.icon} />
        <Typography variant="body2" component="span" className={classes.text}>
          <strong>Track</strong> your daily income and expenses
        </Typography>
      </Box>
      <Box className={classes.infoItem}>
        <TrendingUp className={classes.icon} />
        <Typography variant="body2" component="span" className={classes.text}>
          <strong>Edit</strong> and <strong>filter</strong> transactions easily
        </Typography>
      </Box>
      <Box className={classes.infoItem}>
        <Analytics className={classes.icon} />
        <Typography variant="body2" component="span" className={classes.text}>
          <strong>Export</strong> your data to CSV anytime
        </Typography>
      </Box>
    </Box>
  );
};

export default InfoCard;
