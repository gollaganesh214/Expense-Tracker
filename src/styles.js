import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  grid: {
    padding: theme.spacing(2),
    maxWidth: '1400px',
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
    },
  },
}));
