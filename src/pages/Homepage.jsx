import React from 'react';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Homepage = () => {
  return (
    <Container
      sx={{
        width: '70%',
        height: '70%',
      }}
      maxWidth="xl"
    >
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
    </Container>
  );
};

export default Homepage;
