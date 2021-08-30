import React from 'react';
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { createStyles, withStyles, WithStyles } from '@material-ui/styles';

export const tableComponentStyles = () => createStyles({
  Table: {},
  TableHead: {
    fontWeight: 'bold',
    backgroundColor: 'white',
  },
  TableBody: {
    backgroundColor: 'white',
  },
});

interface TableProps extends Partial<WithStyles<typeof tableComponentStyles>> {
  columnHeaders: JSX.Element | React.ReactNode;
  rowData: JSX.Element | React.ReactNode;
}

const TableComponent = ({
  rowData,
  classes,
  columnHeaders,
}: TableProps): JSX.Element => (
  <Table size="medium" className={classes?.Table} stickyHeader>
    <TableHead className={classes?.TableHead}>
      <TableRow>
        {columnHeaders}
      </TableRow>
    </TableHead>
    <TableBody className={classes?.TableBody}>{rowData}</TableBody>
  </Table>
);

export default withStyles(tableComponentStyles)(TableComponent);
