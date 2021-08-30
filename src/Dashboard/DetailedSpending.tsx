import { TableCell, TableRow } from '@material-ui/core';
import {
  WithStyles,
  createStyles,
  withStyles,
  Theme,
} from '@material-ui/core/styles';
import React, { useEffect } from 'react';
import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import Table from '../Components/Table';
import { useAppDispatch, useAppSelector } from '../hooks';
import { setBudget } from '../Redux/budgetSlice';

export const monthOverviewComponentStyles = () => createStyles({
  Table: {},
});

export type MonthOverviewProps = Partial<
WithStyles<typeof monthOverviewComponentStyles>
>;

const MonthOverviewComponent = ({
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
  const headers = ['Item', 'Category', 'Budget', 'Actual'];
  const columnHeaders = headers.map((header) => (
    // @TODO: change "key" to include "ID"
    <TableCell key={`${header}-column-header`}>{header}</TableCell>
  ));

  return (
    // <Container className={classes?.Container}>
    <Table
      rowData={TableRows}
      columnHeaders={columnHeaders}
      classes={{
        Table: classes?.Table,
      }}
    />
    // </Container>
  );
};

export default withStyles(monthOverviewComponentStyles)(MonthOverviewComponent);
