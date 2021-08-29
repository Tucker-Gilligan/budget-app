/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// @TODO: Add ID to BudgetState
export interface BudgetState {
  item: string;
  category: string;
  budget: number;
  actual: number;
}

export const initialBudgetState: BudgetState[] = [];

const budgetSlice = createSlice({
  name: 'budget',
  initialState: {
    budget: initialBudgetState,
  },
  reducers: {
    setBudget: (state, action) => {
      state.budget = action.payload;
    },
  },
});

export const { setBudget } = budgetSlice.actions;
export default budgetSlice.reducer;
