import React, { useState } from 'react';
import { Box, ButtonBase } from '@material-ui/core';
import {
  Theme,
  createStyles,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';
import ModalDialog from './ModalDialog';

const modalButtonStyles = (theme: Theme) => createStyles({
  Button: {
    border: 'solid 1px black',
    padding: theme.spacing(1),
  },
});

export interface ModalButtonProps
  extends Partial<WithStyles<typeof modalButtonStyles>> {
  dialogContent: JSX.Element | React.ReactNode;
  text: string | JSX.Element | React.ReactNode;
}

const ModalButtonComponent = ({ classes, dialogContent, text }: ModalButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <Box>
      <ButtonBase onClick={handleOpenModal} className={classes?.Button}>
        {text}
      </ButtonBase>
      <ModalDialog
        isOpen={isOpen}
        handleClose={handleCloseModal}
        content={dialogContent}
      />
    </Box>
  );
};

export default withStyles(modalButtonStyles)(ModalButtonComponent);
