import { Box, ButtonBase, Dialog } from '@material-ui/core';
import {
  Theme,
  createStyles,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';
import React, { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import Dashboard from './Dashboard';

const dashboardContainerStyles = (theme: Theme) => createStyles({
  Button: {
    border: 'solid 1px black',
    padding: theme.spacing(1),
  },
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

export type DashboardContainerProps = Partial<
WithStyles<typeof dashboardContainerStyles>
>;

const DashboardContainerComponent = ({
  classes,
}: DashboardContainerProps): JSX.Element => {
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
        Open Table
      </ButtonBase>
      <Dialog
        open={isOpen}
        className={classes?.Dialog}
        maxWidth="md"
        fullWidth
      >
        <>
          <ButtonBase
            className={classes?.CloseButton}
            onClick={handleCloseModal}
          >
            <CloseIcon className={classes?.CloseIcon} />
          </ButtonBase>
          <Dashboard />
        </>
      </Dialog>
    </Box>
  );
};

export default withStyles(dashboardContainerStyles)(
  DashboardContainerComponent,
);
