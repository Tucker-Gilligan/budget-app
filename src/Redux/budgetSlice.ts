/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface BudgetState {
  item: string,
  category: string,
  budget: number,
  actual: number,
}

// export interface BudgetListState {
//   budgeted: BudgetState[];
// }
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

// export interface SetBudgetAction {
//   budgeted: BudgetState[];
// }

// export const setBudgetReducer = (
//   state: BudgetListState,
//   { payload }: PayloadAction<SetBudgetAction>,
// ) => {
//   console.log(state, 'state');
//   state.budgeted = payload.budgeted;
// };

// export const studentsSlice = createSlice({
//   name: 'data-center-students',
//   initialState: initialBudgetState,
//   reducers: {
//     setBudget: setBudgetReducer,
//   },
// });

// console.log(studentsSlice.actions.setBudget, 'SET BUDGET ACTION');
