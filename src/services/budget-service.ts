import { gql } from '@apollo/client';

const BudgetServiceProvider = {
  GET_BUDGET_INFO: gql`
    query BudgetQuery {
      budget {
        item
        category
        budget
        actual
      }
    }
  `,
};

export default BudgetServiceProvider;
