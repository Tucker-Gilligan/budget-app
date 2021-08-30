import { TableCell, TableRow } from '@material-ui/core';
import {
  WithStyles,
  createStyles,
  withStyles,
} from '@material-ui/core/styles';
import React, { useEffect } from 'react';
import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import CustomTable from '../Components/CustomTable';
import { useAppDispatch, useAppSelector } from '../Redux/hooks';
import { setBudget } from '../Redux/budgetSlice';

export const detailedSpendingComponentStyles = () => createStyles({
  Table: {},
});

export type MonthOverviewProps = Partial<
WithStyles<typeof detailedSpendingComponentStyles>
>;

const DetailedSpendingComponent = ({
  classes,
}: MonthOverviewProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const budgetState = useAppSelector((state) => state.budget);
  useEffect(() => {
    const client = new ApolloClient({
      uri: 'http://localhost:4000/',
      cache: new InMemoryCache(),
    });
    client
      .query({
        query: gql`
          query BudgetQuery {
            budget {
              item
              category
              budget
              actual
            }
          }
        `,
      })
      .then((result) => {
        const { data } = result;
        dispatch(setBudget(data.budget));
      });
  }, [dispatch]);

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
    />
  );
};

const DetailedSpending = withStyles(detailedSpendingComponentStyles)(DetailedSpendingComponent);
DetailedSpending.displayName = 'Detailed Spending';
export default DetailedSpending;
