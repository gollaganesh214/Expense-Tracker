import React, { useContext, useState } from 'react';
import {
  Box,
  TextField,
  Button,
  ButtonGroup,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  InputAdornment,
} from '@mui/material';
import { Search, Download, DeleteSweep } from '@mui/icons-material';
import { ExpenseTrackerContext } from '../../../context/context';
import useStyles from './styles';

const Toolbar = ({ searchTerm, setSearchTerm, filterType, setFilterType }) => {
  const classes = useStyles();
  const { transactions, clearTransactions } = useContext(ExpenseTrackerContext);
  const [openClearDialog, setOpenClearDialog] = useState(false);

  const exportToCSV = () => {
    if (transactions.length === 0) {
      alert('No transactions to export!');
      return;
    }

    const headers = ['Date', 'Type', 'Category', 'Amount'];
    const rows = transactions.map((t) => [
      t.date,
      t.type,
      t.category,
      t.amount,
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map((row) => row.join(',')),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `expense_tracker_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleClearAll = () => {
    clearTransactions();
    setOpenClearDialog(false);
  };

  return (
    <>
      <Box className={classes.toolbar}>
        <TextField
          size="small"
          placeholder="Search transactions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          className={classes.searchField}
        />

        <ButtonGroup size="small" variant="outlined" className={classes.buttonGroup}>
          <Button
            onClick={() => setFilterType('All')}
            variant={filterType === 'All' ? 'contained' : 'outlined'}
          >
            All
          </Button>
          <Button
            onClick={() => setFilterType('Income')}
            variant={filterType === 'Income' ? 'contained' : 'outlined'}
            color="success"
          >
            Income
          </Button>
          <Button
            onClick={() => setFilterType('Expense')}
            variant={filterType === 'Expense' ? 'contained' : 'outlined'}
            color="error"
          >
            Expense
          </Button>
        </ButtonGroup>

        <Box className={classes.actionButtons}>
          <Button
            size="small"
            variant="outlined"
            startIcon={<Download />}
            onClick={exportToCSV}
            disabled={transactions.length === 0}
          >
            Export
          </Button>
          <Button
            size="small"
            variant="outlined"
            color="error"
            startIcon={<DeleteSweep />}
            onClick={() => setOpenClearDialog(true)}
            disabled={transactions.length === 0}
          >
            Clear All
          </Button>
        </Box>
      </Box>

      <Dialog open={openClearDialog} onClose={() => setOpenClearDialog(false)}>
        <DialogTitle>Clear All Transactions?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This will permanently delete all your transactions. This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenClearDialog(false)}>Cancel</Button>
          <Button onClick={handleClearAll} color="error" variant="contained">
            Clear All
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Toolbar;
