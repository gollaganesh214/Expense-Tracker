import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  statsContainer: {
    marginBottom: theme.spacing(2),
  },
  statCard: {
    padding: theme.spacing(1.5),
    textAlign: 'center',
    transition: 'transform 0.2s, box-shadow 0.2s',
    minHeight: '95px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: theme.shadows[4],
    },
  },
  statIcon: {
    fontSize: '2rem',
    marginBottom: theme.spacing(0.5),
    display: 'flex',
    justifyContent: 'center',
    '& svg': {
      fontSize: '2rem',
    },
  },
  statTitle: {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(0.5),
    fontSize: '0.7rem',
    fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  statValue: {
    fontWeight: 600,
    fontSize: '1.25rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
}));
