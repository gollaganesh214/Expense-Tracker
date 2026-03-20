import React, { useContext } from 'react';
import { Box, Paper, Typography, Grid } from '@mui/material';
import { TrendingUp, TrendingDown, AccountBalance, Receipt } from '@mui/icons-material';
import { ExpenseTrackerContext } from '../../context/context';
import useStyles from './styles';

const Statistics = () => {
  const classes = useStyles();
  const { transactions } = useContext(ExpenseTrackerContext);

  const totalIncome = transactions
    .filter((t) => t.type === 'Income')
    .reduce((acc, t) => acc + t.amount, 0);

  const totalExpense = transactions
    .filter((t) => t.type === 'Expense')
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = totalIncome - totalExpense;
  const transactionCount = transactions.length;

  const stats = [
    {
      title: 'Total Income',
      value: `₹${totalIncome}`,
      icon: <TrendingUp />,
      color: '#4caf50',
      bgColor: '#e8f5e9',
    },
    {
      title: 'Total Expense',
      value: `₹${totalExpense}`,
      icon: <TrendingDown />,
      color: '#f44336',
      bgColor: '#ffebee',
    },
    {
      title: 'Net Balance',
      value: `₹${balance}`,
      icon: <AccountBalance />,
      color: balance >= 0 ? '#2196f3' : '#ff9800',
      bgColor: balance >= 0 ? '#e3f2fd' : '#fff3e0',
    },
    {
      title: 'Transactions',
      value: transactionCount,
      icon: <Receipt />,
      color: '#9c27b0',
      bgColor: '#f3e5f5',
    },
  ];

  return (
    <Box className={classes.statsContainer}>
      <Grid container spacing={2}>
        {stats.map((stat, index) => (
          <Grid item xs={6} sm={3} key={index}>
            <Paper className={classes.statCard} style={{ backgroundColor: stat.bgColor }}>
              <Box className={classes.statIcon} style={{ color: stat.color }}>
                {stat.icon}
              </Box>
              <Typography variant="body2" className={classes.statTitle}>
                {stat.title}
              </Typography>
              <Typography variant="h6" className={classes.statValue} style={{ color: stat.color }}>
                {stat.value}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Statistics;
