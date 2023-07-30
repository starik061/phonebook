import React from 'react';
import InputMask from 'react-input-mask';
import { useDispatch, useSelector } from 'react-redux';

import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

const defaultTheme = createTheme();

const AddContactForm = ({ setOpenModal, setMessage }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleAddContactFormSubmit = event => {
    event.preventDefault();
    let isDuplicate = false;

    const contact = new FormData(event.currentTarget);
    const contactForCheck = {
      name: contact.get('name'),
      number: contact.get('phone'),
    };
    //Search if such contact is already exist
    contacts.forEach(contact => {
      if (
        contact.name.toLowerCase() === contactForCheck.name.toLowerCase() ||
        contact.number.toLowerCase() === contactForCheck.number.toLowerCase()
      ) {
        isDuplicate = true;
      }
    });
    if (isDuplicate) {
      setMessage({ message: 'Such contact is already exist', type: 'error' });
      return;
    }
    //______________________________________________________________________
    dispatch(
      addContact({
        name: contact.get('name'),
        number: contact.get('phone'),
      })
    );
    setOpenModal(false);
    setMessage({ type: 'success', message: 'Contact added successfully!' });
    setTimeout(() => {
      setMessage(null);
    }, 2000);
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: '5px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <PersonAddIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            New contact
          </Typography>
          <Box
            component="form"
            onSubmit={handleAddContactFormSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Contact name"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <InputMask mask="+38 (099) 999-99-99">
              {inputProps => (
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="phone"
                  label="Phone number"
                  type="text"
                  id="phone"
                />
              )}
            </InputMask>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add contact
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2"></Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default AddContactForm;
