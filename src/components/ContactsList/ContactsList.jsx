import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ContactsListItem from 'components/ContactsListItem/ContactsListItem';

export const ContactsList = ({ editContact, contacts, setMessage }) => {
  return (
    <>
      <Box sx={{ flexGrow: 1, p: '20px' }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 8, md: 12 }}
        >
          {contacts.map(({ id, name, number }) => (
            <ContactsListItem
              key={id}
              name={name}
              number={number}
              id={id}
              editContact={editContact}
              setMessage={setMessage}
            ></ContactsListItem>
          ))}
        </Grid>
      </Box>
    </>
  );
};
