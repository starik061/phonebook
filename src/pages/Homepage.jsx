import React from 'react';
// import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Homepage = () => {
  return (
    <>
      <Typography variant="h1" component="h2">
        Phonebook app
      </Typography>
      <Typography variant="h3" component="h2">
        A simple phonebook app connected to Swagger backend API - you can
        register, log in, log out, add, remove, update or filter your contacts.
      </Typography>
      <Typography variant="p">
        Used Redux Toolkit, RTK Query React Router
      </Typography>
      ;
    </>
  );
};

export default Homepage;
