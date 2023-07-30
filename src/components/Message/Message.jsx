import React from 'react';

import Alert from '@mui/material/Alert';

const Message = ({ message, type = 'error' }) => {
  return (
    <Alert
      severity={type}
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%)',
        transition: 'all 0.5s linear',
      }}
    >
      {message}
    </Alert>
  );
};

export default Message;
