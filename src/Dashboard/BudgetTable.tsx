import React from 'react';
import {
  createStyles,
  withStyles,
  WithStyles,
  Theme,
} from '@material-ui/core/styles';
import { Container, TableRow } from '@material-ui/core';
import Table from '../Components/Table';

const budgetTableStyles = (theme: Theme) =>
  createStyles({
    Container: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: theme.spacing(2),
      padding: 0,
    },
    Box: {
      display: 'flex',
      flexDirection: 'row',
    },
  });

export interface BudgetTableProps
  extends Partial<WithStyles<typeof budgetTableStyles>> {}

const BudgetTableComponent = ({ classes }: BudgetTableProps) => {
  // const budgetRows = []
  return (
    <Container className={classes?.Container}>
      {/* <Table rowData={} /> */}
    </Container>
  );
};

const DashboardBody = withStyles(budgetTableStyles)(BudgetTableComponent);
DashboardBody.displayName = 'Dashboard Body';
export default DashboardBody;
