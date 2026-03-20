import React, { useContext, useState } from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider, Box } from '@mui/material';
import { ExpenseTrackerContext } from '../../context/context';
import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List';
import Toolbar from './Toolbar/Toolbar';
import InfoCard from '../InfoCard';

const ExpenseTracker = () => {
  const classes = useStyles();
  const { balance } = useContext(ExpenseTrackerContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All');

  return (
    <Card className={classes.root}>
      <CardHeader align="center" title="Monefy" subheader="Track your income and expense" />
      <CardContent>
        <Box style={{ maxWidth: '750px', margin: '0 auto' }}>
          <Typography align="center" variant="h6" style={{ marginBottom: '8px', fontWeight: 600 }}>
            Total Balance ₹{balance}
          </Typography>
          <InfoCard />
          <Divider className={classes.divider} />
          <Form />
        </Box>
      </CardContent>
      <CardContent className={classes.cartContent}>
        <Box style={{ maxWidth: '750px', margin: '0 auto' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Toolbar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                filterType={filterType}
                setFilterType={setFilterType}
              />
              <List searchTerm={searchTerm} filterType={filterType} />
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ExpenseTracker;
