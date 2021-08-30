import React from 'react';
import {
  createStyles,
  withStyles,
  WithStyles,
  Theme,
} from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
import ModalButton from '../Components/Modal/ModalButton';

const infoBoxStyles = (theme: Theme) => createStyles({
  Container: {
    display: 'flex',
    flexDirection: 'column',
  },
  Button: {
    backgroundColor: 'black',
    color: 'white',
    fontSize: '16px',
  },
  DollarAmount: {
    color: 'green',
  },
});

export interface InfoBoxProps
  extends Partial<WithStyles<typeof infoBoxStyles>> {
  dollarAmount: number;
  label: string | JSX.Element | React.ReactNode;
  dialogContent: JSX.Element | React.ReactNode;
  buttonText: string | JSX.Element | React.ReactNode;
}

const InfoBoxComponent = ({
  classes,
  dialogContent,
  dollarAmount,
  label,
  buttonText,
}: InfoBoxProps) => (
  <Container className={classes?.Container}>
    <Typography>{label}</Typography>
    <Typography className={classes?.DollarAmount}>{dollarAmount}</Typography>
    <ModalButton
      dialogContent={dialogContent}
      text={buttonText}
      classes={{
        Button: classes?.Button,
      }}
    />
  </Container>
);

const InfoBox = withStyles(infoBoxStyles)(InfoBoxComponent);
InfoBox.displayName = 'Info Box';
export default InfoBox;
