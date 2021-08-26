import { Container } from '@material-ui/core';
import { WithStyles, createStyles, withStyles } from '@material-ui/styles';
import React from 'react';
import Table from '../Components/Table/Table';

export const dashboardComponentStyles = (): any => createStyles({
  Container: {},
});

export type DashboardProps = Partial<
WithStyles<typeof dashboardComponentStyles>
>;

const DashboardComponent = ({ classes }: DashboardProps): JSX.Element => (
  <Container className={classes?.Container}>
    <Table rowData={['hello']} />
  </Container>
);

export default withStyles(dashboardComponentStyles)(DashboardComponent);
