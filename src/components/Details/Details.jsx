import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@mui/material';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import useTransactions from '../../useTransactions';

import useStyles from './styles';

ChartJS.register(ArcElement, Tooltip, Legend);

const Details = ({ title }) => {
  const classes = useStyles();
  const { total, chartData } = useTransactions(title);
  return (
    <Card className={ title === 'Income' ? classes.income : classes.expense}>
      <CardHeader title= {title} />
      <CardContent>
        <Typography variant="h6" style={{ marginBottom: '8px', fontWeight: 600 }}>₹{total}</Typography>
        <div style={{ maxWidth: '280px', margin: '0 auto' }}>
          <Doughnut data={chartData} />
        </div>
      </CardContent>
    </Card>
  );
};

export default Details;
