import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ContactsListItem from 'components/ContactsListItem/ContactsListItem';

export const ContactsList = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, p: '20px' }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 8, md: 12 }}
        >
          {Array.from(Array(6)).map(() => (
            <ContactsListItem></ContactsListItem>
          ))}
        </Grid>
      </Box>
    </>
  );
};
