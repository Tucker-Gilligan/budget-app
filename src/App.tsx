import React from 'react';
import { Box } from '@material-ui/core';
import DashboardContainer from './Dashboard/Container';
import BudgetList from './Redux/BudgetList';

const App = (): JSX.Element => (
  <Box>
    <DashboardContainer />
    <BudgetList />
  </Box>
);

export default App;
