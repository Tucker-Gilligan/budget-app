import { Container } from '@material-ui/core';
import { WithStyles, createStyles, withStyles } from '@material-ui/styles';
import React, { useEffect } from 'react';
import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import Table from '../Components/Table';
import { useAppDispatch, useAppSelector } from '../hooks';
import { setBudget } from '../Redux/budgetSlice';

export const monthOverviewComponentStyles = () => createStyles({
  Container: {},
});

export type MonthOverviewProps = Partial<WithStyles<typeof monthOverviewComponentStyles>>;

const MonthOverviewComponent = ({ classes }: MonthOverviewProps): JSX.Element => {
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

export default withStyles(monthOverviewComponentStyles)(MonthOverviewComponent);
