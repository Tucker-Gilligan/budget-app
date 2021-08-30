import React from 'react';
import { TableCell, TableRow } from '@material-ui/core';
import { WithStyles, createStyles, withStyles } from '@material-ui/core/styles';
import { useQuery } from '@apollo/client';
import CustomTable from '../Components/CustomTable';
import { useAppDispatch, useAppSelector } from '../Redux/hooks';
import { setBudget } from '../Redux/budgetSlice';
import BudgetServiceProvider from '../services/budget-service';

export const detailedSpendingComponentStyles = () => createStyles({
  Table: {},
});

export type MonthOverviewProps = Partial<WithStyles<typeof detailedSpendingComponentStyles>>;

const DetailedSpendingComponent = ({ classes }: MonthOverviewProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const budgetState = useAppSelector((state) => state.budget);
  const { GET_BUDGET_INFO } = BudgetServiceProvider;
  const { data, loading, error } = useQuery(GET_BUDGET_INFO);
  if (data) {
    dispatch(setBudget(data.budget));
  }
  const TableRows = budgetState.map((row) => {
    const {
      item, category, budget, actual,
    } = row;
    // @TODO: change "key" to include "ID"
    return (
      <TableRow key={`${item}-row`}>
        <TableCell>{item}</TableCell>
        <TableCell>{category}</TableCell>
        <TableCell>{budget}</TableCell>
        <TableCell>{actual}</TableCell>
      </TableRow>
    );
  });
  const columnNames = ['Item', 'Category', 'Budget', 'Actual'];

  return (
    <CustomTable
      rowData={TableRows}
      columnNames={columnNames}
      classes={{
        Table: classes?.Table,
      }}
      loading={loading}
      error={error}
    />
  );
};

const DetailedSpending = withStyles(detailedSpendingComponentStyles)(DetailedSpendingComponent);
DetailedSpending.displayName = 'Detailed Spending';
export default DetailedSpending;
