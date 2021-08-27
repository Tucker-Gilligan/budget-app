import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import React, { useEffect } from 'react';
import { setBudget } from './budgetSlice';
import { useAppDispatch, useAppSelector } from './hooks';
// import { BudgetState } from './budgetSlice';

const BudgetList = (): JSX.Element => {
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

  const budgetList = budgetState.map((item) => (
    <ul key={item.actual}>{item.item}</ul>));
  // const listItems = budgetState &&
  // budgetState.map((budgetItem) => <li key={`item-${budgetItem}`}>{budgetItem}</li>);

  return (
    <div>
      <ul>
        {budgetList}
      </ul>
      {/* <ul>
        {listItems}
      </ul> */}
      {/* {listItems} */}
    </div>
  );
};

export default BudgetList;
