import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client';
import App from './App';

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
  .then((result) => console.log(result));

ReactDOM.render(<App />, document.getElementById('root'));
