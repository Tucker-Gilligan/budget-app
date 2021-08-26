import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { createStyles, withStyles, WithStyles } from '@material-ui/styles';
import React from 'react';

export const tableComponentStyles = (): any => createStyles({
  TableHead: {
    fontWeight: 'bold',
    backgroundColor: 'white',
  },
  TableBody: {
    backgroundColor: 'white',
  },
});

interface TableProps extends Partial<WithStyles<typeof tableComponentStyles>> {
  rowData: string[];
}

const TableComponent = ({ rowData, classes }: TableProps): JSX.Element => {
  console.log(rowData);
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
        <TableRow>
          <TableCell>Gym Membership</TableCell>
          <TableCell>Wellness</TableCell>
          <TableCell>$30</TableCell>
          <TableCell>$280</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default withStyles(tableComponentStyles)(TableComponent);
