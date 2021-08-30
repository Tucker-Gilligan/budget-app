/* eslint-disable react/require-default-props */
import React from 'react';
import {
  Table, TableBody, TableCell, TableHead, TableRow,
} from '@material-ui/core';
import { createStyles, withStyles, WithStyles } from '@material-ui/styles';
import { ApolloError } from '@apollo/client';

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
  columnNames: string[];
  rowData: JSX.Element | React.ReactNode;
  loading?: boolean | undefined;
  error?: ApolloError | undefined;
}

const TableComponent = ({
  rowData,
  classes,
  columnNames,
  loading,
  error,
}: TableProps): JSX.Element => {
  const columnHeaders = columnNames.map((header) => (
    // @TODO: change "key" to include "ID"
    <TableCell key={`detailed-spending-${header}-header`}>{header}</TableCell>
  ));
  console.log(loading);
  console.log(error);
  return (
    <Table size="medium" className={classes?.Table} stickyHeader>
      <TableHead className={classes?.TableHead}>
        <TableRow>{columnHeaders}</TableRow>
      </TableHead>
      <TableBody className={classes?.TableBody}>{rowData}</TableBody>
    </Table>
  );
};

const CustomTable = withStyles(tableComponentStyles)(TableComponent);
CustomTable.displayName = 'Table';
export default CustomTable;
