import { Container } from '@material-ui/core';
import { WithStyles, createStyles, withStyles } from '@material-ui/styles';
import React, { useEffect } from 'react';
import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import Table from '../Components/Table/Table';
import { useAppDispatch, useAppSelector } from '../Redux/hooks';
import { setBudget } from '../Redux/budgetSlice';
// import { BudgetState } from './budgetSlice';

export const dashboardComponentStyles = (): any => createStyles({
  Container: {},
});

export type DashboardProps = Partial<
WithStyles<typeof dashboardComponentStyles>
>;

const DashboardComponent = ({ classes }: DashboardProps): JSX.Element => {
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
  return (
    <Container className={classes?.Container}>
      <Table rowData={budgetState} />
    </Container>
  );
};

export default withStyles(dashboardComponentStyles)(DashboardComponent);
