import React from 'react';
// import { Box, ButtonBase, Dialog } from '@material-ui/core';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import ModalButton from '../Components/Modal/ModalButton';
import MonthOverview from './MonthOverview';

const dashboardStyles = () => createStyles({});

export type DashboardProps = Partial<WithStyles<typeof dashboardStyles>>;

const DashboardComponent = () => (
  <>
    <ModalButton modalContent={<MonthOverview />} text="View Detailed Spending" />
  </>
);

export default withStyles(dashboardStyles)(DashboardComponent);
