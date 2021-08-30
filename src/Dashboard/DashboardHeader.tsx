import React from 'react';
import {
  createStyles,
  withStyles,
  WithStyles,
  Theme,
} from '@material-ui/core/styles';
import { Box, Container, Typography } from '@material-ui/core';
import clsx from 'clsx';
import Icon from '../Components/Icon';

const dashboardHeaderStyles = (theme: Theme) => createStyles({
  Container: {
    display: 'flex',
    flexDirection: 'column',
  },
  Box: {
    display: 'flex',
    flexDirection: 'column',
  },
  MainHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: theme.spacing(1),
    alignItems: 'center',
  },
  SavedText: {
    fontSize: '40px',
  },
  PositiveSavings: {
    color: 'green',
  },
  NegativeSavings: {
    color: 'red',
  },
  Typography: {
    fontSize: '28px',
  },
});

export interface DashboardHeaderProps
  extends Partial<WithStyles<typeof dashboardHeaderStyles>> {
  saved: number;
  icon: 'check' | 'close';
  onBudget: boolean;
}

const DashboardHeaderComponent = ({
  saved,
  icon,
  classes,
  onBudget,
}: DashboardHeaderProps) => {
  const styleMap = {
    check: classes?.PositiveSavings,
    close: classes?.NegativeSavings,
  };
  const selectedClass = styleMap[icon];

  const baseText = (
    <Box className={classes?.Box}>
      <Typography className={classes?.Typography}>
        This month&apos;s savings
      </Typography>
      <Typography className={clsx(classes?.SavedText, selectedClass)}>
        {`$${saved}`}
      </Typography>
    </Box>
  );

  const onBudgetText = (
    <Typography>
      You&apos;re on track to meet your savings goal this month!
    </Typography>
  );
  const offBudgetText = (
    <Typography>You&apos;re behind on your savings goal this month!</Typography>
  );
  const messageText = onBudget ? onBudgetText : offBudgetText;

  return (
    <Container className={classes?.Container}>
      <Box className={classes?.MainHeader}>
        {baseText}
        <Icon iconType={icon} />
      </Box>
      {messageText}
    </Container>
  );
};

const DashboardHeader = withStyles(dashboardHeaderStyles)(DashboardHeaderComponent);
DashboardHeader.displayName = 'DashboardHeader';
export default DashboardHeader;
