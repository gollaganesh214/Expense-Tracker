import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
    marginBottom: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  },
  searchField: {
    flex: 1,
    minWidth: '200px',
    '& .MuiInputBase-root': {
      fontSize: '0.875rem',
    },
  },
  buttonGroup: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      '& button': {
        flex: 1,
      },
    },
  },
  actionButtons: {
    display: 'flex',
    gap: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      '& button': {
        flex: 1,
      },
    },
  },
}));
