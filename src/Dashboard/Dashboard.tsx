import React from 'react';
import {
  createStyles,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import DashboardHeader from './DashboardHeader';
import DashboardBody from './DashboardBody';

const dashboardStyles = () => createStyles({
  Container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
});

export type DashboardProps = Partial<WithStyles<typeof dashboardStyles>>;

const DashboardComponent = ({ classes }: DashboardProps) => (
  <Container className={classes?.Container}>
    <DashboardHeader icon="check" saved={1500} onBudget />
    <DashboardBody />
  </Container>
);

const Dashboard = withStyles(dashboardStyles)(DashboardComponent);
Dashboard.displayName = 'Dashboard';
export default Dashboard;
