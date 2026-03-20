import React from 'react';
import { Grid } from '@mui/material';

// import { SpeechState, useSpeechContext } from "@speechly/react-client";
// import { PushToTalkButton, PushToTalkButtonContainer } from '@speechly/react-ui';

import { Details, Main } from './components';
import Statistics from './components/Statistics/Statistics';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  // const { speechState } = useSpeechContext();
  // const main = useRef(null)

  // const executeScroll = () => main.current.scrollIntoView()    

  // useEffect(() => {
  //   if (speechState === SpeechState.Recording) {
  //     executeScroll();
  //   }
  // }, [speechState]);

  return (
    <div>
      <Grid className={classes.grid} container spacing={1.5} alignItems="stretch" justifyContent="center" style={{ minHeight: '100vh', paddingTop: '12px', paddingBottom: '12px' }}>
        {/* Statistics Row */}
        <Grid item xs={12}>
          <Statistics />
        </Grid>
        
        {/* Monefy Card - Full Width */}
        <Grid item xs={12}>
          <Main />
        </Grid>
        
        {/* Income and Expense Charts - Side by Side */}
        <Grid item xs={12} sm={6}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Details title="Expense" />
        </Grid>
        {/* Voice recognition button - temporarily disabled due to React 18 compatibility 
        <PushToTalkButtonContainer>
          <PushToTalkButton />
        </PushToTalkButtonContainer>
        */}
      </Grid>
    </div>
  );
};

export default App;
