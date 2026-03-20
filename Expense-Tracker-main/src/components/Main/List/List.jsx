import React, { useContext, useState } from 'react';
import { List as MUIList, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton, Slide, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, FormControl, InputLabel, Select, MenuItem, Grid } from '@mui/material';
import { Delete, MoneyOff, Edit } from '@mui/icons-material';

import { ExpenseTrackerContext } from '../../../context/context';
import { incomeCategories, expenseCategories } from '../../../constants/categories';
import formatDate from '../../../utils/formatDate';
import useStyles from './styles';

const List = ({ searchTerm = '', filterType = 'All' }) => {
  const classes = useStyles();
  const { transactions, deleteTransaction, editTransaction } = useContext(ExpenseTrackerContext);
  const [openDialog, setOpenDialog] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState(null);

  // Filter transactions based on search term and filter type
  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch = 
      transaction.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.amount.toString().includes(searchTerm) ||
      transaction.date.includes(searchTerm);
    
    const matchesFilter = filterType === 'All' || transaction.type === filterType;
    
    return matchesSearch && matchesFilter;
  });

  const handleEditClick = (transaction) => {
    setEditingTransaction({ ...transaction });
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setEditingTransaction(null);
  };

  const handleSaveEdit = () => {
    if (editingTransaction) {
      editTransaction(editingTransaction);
      handleCloseDialog();
    }
  };

  const handleEditChange = (field, value) => {
    setEditingTransaction({ ...editingTransaction, [field]: value });
  };

  const selectedCategories = editingTransaction?.type === 'Income' ? incomeCategories : expenseCategories;

  return (
    <>
      <MUIList dense={false} className={classes.list}>
        {filteredTransactions.length === 0 ? (
          <ListItem>
            <ListItemText 
              primary="No transactions found" 
              secondary={searchTerm ? "Try adjusting your search or filter" : "Add a transaction to get started"}
              style={{ textAlign: 'center' }}
            />
          </ListItem>
        ) : (
          filteredTransactions.map((transaction) => (
            <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                    <MoneyOff fontSize="small" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText 
                  primary={transaction.category} 
                  secondary={`₹${transaction.amount} - ${transaction.date}`}
                  className={classes.listItemText}
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="edit" size="small" onClick={() => handleEditClick(transaction)}>
                    <Edit fontSize="small" />
                  </IconButton>
                  <IconButton edge="end" aria-label="delete" size="small" onClick={() => deleteTransaction(transaction.id)}>
                    <Delete fontSize="small" />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </Slide>
          ))
        )}
      </MUIList>

      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>Edit Transaction</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} style={{ marginTop: '8px' }}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Type</InputLabel>
                <Select
                  value={editingTransaction?.type || 'Income'}
                  onChange={(e) => handleEditChange('type', e.target.value)}
                >
                  <MenuItem value="Income">Income</MenuItem>
                  <MenuItem value="Expense">Expense</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                  value={editingTransaction?.category || ''}
                  onChange={(e) => handleEditChange('category', e.target.value)}
                >
                  {selectedCategories.map((c) => (
                    <MenuItem key={c.type} value={c.type}>
                      {c.type}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="number"
                label="Amount"
                value={editingTransaction?.amount || ''}
                onChange={(e) => handleEditChange('amount', Number(e.target.value))}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Date"
                type="date"
                value={editingTransaction?.date || formatDate(new Date())}
                onChange={(e) => handleEditChange('date', formatDate(e.target.value))}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSaveEdit} variant="contained" color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default List;
