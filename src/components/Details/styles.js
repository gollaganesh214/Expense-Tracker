import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  income: {
    borderBottom: '8px solid rgba(4, 147, 114, 1)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    '& .MuiCardHeader-root': {
      padding: theme.spacing(1.5, 2),
    },
    '& .MuiCardContent-root': {
      padding: theme.spacing(1.5),
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  expense: {
    borderBottom: '8px solid rgba(139,0,0 ,1 )',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    '& .MuiCardHeader-root': {
      padding: theme.spacing(1.5, 2),
    },
    '& .MuiCardContent-root': {
      padding: theme.spacing(1.5),
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
}));