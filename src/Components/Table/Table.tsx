import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { createStyles, withStyles, WithStyles } from '@material-ui/styles';
import React from 'react';
import { BudgetState } from '../../Redux/budgetSlice';

export const tableComponentStyles = () => createStyles({
  TableHead: {
    fontWeight: 'bold',
    backgroundColor: 'white',
  },
  TableBody: {
    backgroundColor: 'white',
  },
});

interface TableProps extends Partial<WithStyles<typeof tableComponentStyles>> {
  rowData: BudgetState[];
}

const TableComponent = ({ rowData, classes }: TableProps): JSX.Element => {
  const TableRows = (
    rowData.map((row) => {
      const {
        item,
        category,
        budget,
        actual,
      } = row;

      return (
        <TableRow key={`${item}-row`}>
          <TableCell>{item}</TableCell>
          <TableCell>{category}</TableCell>
          <TableCell>{budget}</TableCell>
          <TableCell>{actual}</TableCell>
        </TableRow>
      );
    })
  );

  return (
    <Table size="medium" stickyHeader>
      <TableHead className={classes?.TableHead}>
        <TableRow>
          <TableCell>Item</TableCell>
          <TableCell>Category</TableCell>
          <TableCell>Budget</TableCell>
          <TableCell>Actual</TableCell>
        </TableRow>
      </TableHead>
      <TableBody className={classes?.TableBody}>
        {TableRows}
      </TableBody>
    </Table>
  );
};

export default withStyles(tableComponentStyles)(TableComponent);
