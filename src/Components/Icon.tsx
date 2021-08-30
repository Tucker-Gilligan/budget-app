import React from 'react';
import clsx from 'clsx';
import { createStyles, withStyles, WithStyles } from '@material-ui/styles';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import Close from '@material-ui/icons/Close';
// import { BudgetState } from '../Redux/budgetSlice';

export const iconComponentStyles = () => createStyles({
  Icon: {
    fontSize: '100px',
  },
  CheckIcon: {
    color: 'green',
  },
  CloseIcon: {
    color: 'red',
  },
});

type IconType = 'check' | 'close';

const iconMap = {
  check: CheckCircleOutlineIcon,
  close: Close,
};

export interface IconProps extends Partial<WithStyles<typeof iconComponentStyles>> {
  iconType: IconType;
}

const IconComponent = ({ iconType, classes }: IconProps) => {
  const styleMap = {
    check: classes?.CheckIcon,
    close: classes?.CloseIcon,
  };

  const DisplayIcon = iconMap[iconType];
  const iconStyle = styleMap[iconType];

  return <DisplayIcon className={clsx(classes?.Icon, iconStyle)} />;
};

export default withStyles(iconComponentStyles)(IconComponent);
