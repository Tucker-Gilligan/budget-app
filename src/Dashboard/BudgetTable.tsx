import React from 'react';
import {
  createStyles,
  withStyles,
  WithStyles,
  Theme,
} from '@material-ui/core/styles';
import { TableCell, TableRow } from '@material-ui/core';
import CustomTable from '../Components/CustomTable';

const budgetTableStyles = (theme: Theme) => createStyles({
  Container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(2),
    padding: 0,
  },
  Box: {
    display: 'flex',
    flexDirection: 'row',
  },
  Table: {},
});

export interface RowData {
  category: string;
  budget: number;
  actual: number;
}
export interface BudgetTableProps
  extends Partial<WithStyles<typeof budgetTableStyles>> {
  columnData: string[];
  rowData: RowData[];
}

const BudgetTableComponent = ({
  classes,
  rowData,
  columnData,
}: BudgetTableProps) => {
  const tableBodyRows = rowData.map((row) => (
    <TableRow key={`${row.category}-id`}>
      <TableCell>{row.category}</TableCell>
      <TableCell>{row.budget}</TableCell>
      <TableCell>{row.actual}</TableCell>
    </TableRow>
  ));

  return (
    <CustomTable
      classes={{ Table: classes?.Table }}
      rowData={tableBodyRows}
      columnNames={columnData}
    />
  );
};
const BudgetTable = withStyles(budgetTableStyles)(BudgetTableComponent);
BudgetTable.displayName = 'Budget Table';
export default BudgetTable;
