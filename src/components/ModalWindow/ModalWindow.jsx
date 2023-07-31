import * as React from 'react';
import { createPortal } from 'react-dom';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export const ModalWindow = ({ openModal, handleModalState, children }) => {
  return createPortal(
    <div>
      <Modal
        open={openModal}
        onClose={() => handleModalState(false)}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>{children}</Box>
      </Modal>
    </div>,
    document.querySelector('#message-root')
  );
};
