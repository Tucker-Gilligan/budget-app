import React, { useCallback } from 'react';
import { ButtonBase, Dialog } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import {
  Theme,
  createStyles,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';

export const modalDialogStyles = (theme: Theme) => createStyles({
  Dialog: {
    background: 'white',
    display: 'flex',
    flexDirection: 'column',
  },
  CloseButton: {
    justifyContent: 'left',
    width: 'fit-content',
    padding: theme.spacing(2),
    margin: theme.spacing(2),
  },
  CloseIcon: {
    fontSize: '30px',
  },
});

export interface ModalDialogProps
  extends Partial<WithStyles<typeof modalDialogStyles>> {
  isOpen: boolean;
  handleClose?: () => void;
  content: JSX.Element | React.ReactNode;
}

export const ModalDialogComponent = ({
  isOpen,
  handleClose,
  content,
  classes,
}: ModalDialogProps) => {
  // handle Escape KeyPress
  const handleEscapeKey = useCallback(
    (event) => {
      if (event.keyCode === 27) {
        event.preventDefault();
        if (handleClose) handleClose();
      }
    },
    [handleClose],
  );

  return (
    <Dialog
      open={isOpen}
      className={classes?.Dialog}
      maxWidth="md"
      fullWidth
      onKeyUp={handleEscapeKey}
    >
      <ButtonBase className={classes?.CloseButton} onClick={handleClose}>
        <CloseIcon className={classes?.CloseIcon} />
      </ButtonBase>
      {content}
    </Dialog>
  );
};

export default withStyles(modalDialogStyles)(ModalDialogComponent);
