import { makeStyles } from '@mui/styles';
import { red, green } from '@mui/material/colors';

export default makeStyles((theme) => ({
  avatarIncome: {
    color: '#fff',
    backgroundColor: green[500],
    width: 32,
    height: 32,
    fontSize: '1rem',
  },
  avatarExpense: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    width: 32,
    height: 32,
    fontSize: '1rem',
  },
  list: {
    maxHeight: '250px',
    overflow: 'auto',
    '& .MuiListItem-root': {
      paddingRight: theme.spacing(12),
      paddingTop: theme.spacing(0.5),
      paddingBottom: theme.spacing(0.5),
    },
    '& .MuiListItemText-root': {
      margin: theme.spacing(0.5, 0),
    },
    '& .MuiListItemText-primary': {
      fontSize: '0.9rem',
    },
    '& .MuiListItemText-secondary': {
      fontSize: '0.8rem',
    },
  },
  listItemText: {
    '& .MuiListItemText-primary': {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      maxWidth: '100%',
    },
    '& .MuiListItemText-secondary': {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      maxWidth: '100%',
    },
  },
}));
