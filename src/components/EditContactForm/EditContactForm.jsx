import React from 'react';
import InputMask from 'react-input-mask';
import { useDispatch } from 'react-redux';

import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
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

const defaultTheme = createTheme();

const EditContactForm = ({ setOpenModal }) => {
  const dispatch = useDispatch();

  const handleAddContactFormSubmit = event => {
    event.preventDefault();

    const contact = new FormData(event.currentTarget);

    dispatch(
      addContact({
        name: contact.get('name'),
        number: contact.get('phone'),
      })
    );
    setOpenModal(false);
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
            <ManageAccountsIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Edit contact
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

export default EditContactForm;
