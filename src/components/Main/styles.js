import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiCardHeader-root': {
      padding: theme.spacing(1.5, 2),
      '& .MuiCardHeader-title': {
        fontSize: '1.25rem',
      },
      '& .MuiCardHeader-subheader': {
        fontSize: '0.8rem',
      },
    },
    '& .MuiCardContent-root': {
      padding: theme.spacing(1.5, 2),
      paddingBottom: theme.spacing(1),
    },
    '& .MuiCardContent-root:last-child': {
      paddingBottom: theme.spacing(1),
    },
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  cartContent: {
    paddingTop: '0 !important',
  },
  divider: {
    margin: '8px 0',
  },
}));
