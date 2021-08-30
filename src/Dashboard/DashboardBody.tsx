import React from 'react';
import { Box, Container } from '@material-ui/core';
import {
  createStyles,
  withStyles,
  WithStyles,
  Theme,
} from '@material-ui/core/styles';
import InfoBox from './InfoBox';
import DetailedSpending from './DetailedSpending';

const dashboardBodyStyles = (theme: Theme) => createStyles({
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
  Table: {
    marginTop: theme.spacing(3),
    padding: `0 ${theme.spacing(2)}`,
  },
});

export type DashboardBodyProps = Partial<WithStyles<typeof dashboardBodyStyles>>;

const DashboardBodyComponent = ({ classes }: DashboardBodyProps) => (
  <Container className={classes?.Container}>
    <Box className={classes?.Box}>
      <InfoBox
        label="Income"
        dollarAmount={4000}
        dialogContent={<DetailedSpending />}
        buttonText="View Detailed Income"
      />
      <InfoBox
        label="Spending"
        dollarAmount={2500}
        dialogContent={<DetailedSpending />}
        buttonText="View Detailed Spending"
      />
    </Box>
    <DetailedSpending
      classes={{ Table: classes?.Table }}
    />
  </Container>
);

const DashboardBody = withStyles(dashboardBodyStyles)(DashboardBodyComponent);
DashboardBody.displayName = 'Dashboard Body';
export default DashboardBody;
