import React from 'react';
import { useState } from 'react';
import InputMask from 'react-input-mask';
import { useDispatch, useSelector } from 'react-redux';

import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
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
import { editContact, fetchContacts } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

const defaultTheme = createTheme();

const EditContactForm = ({ setMessage, setOpenModal, id, name, number }) => {
  const [nameInputValue, setNameInputValue] = useState(name);
  const [numberInputValue, setNumberInputValue] = useState(number);
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);

  const handleEditContactFormSubmit = async event => {
    event.preventDefault();
    let isDuplicate = false;
    const contactForCheck = {
      name: nameInputValue,
      number: numberInputValue,
    };
    //Search if such contact is already exist

    contacts.forEach(contact => {
      if (
        contact.id !== id &&
        (contact.name.toLowerCase() === contactForCheck.name.toLowerCase() ||
          contact.number.toLowerCase() === contactForCheck.number.toLowerCase())
      ) {
        isDuplicate = true;
      }
    });
    if (isDuplicate) {
      setMessage({ message: 'Such contact is already exist', type: 'error' });
      setTimeout(() => {
        setMessage(null);
      }, 2000);
      return;
    }
    //______________________________________________________________________

    await dispatch(
      editContact({
        id,
        contactData: {
          name: nameInputValue,
          number: numberInputValue,
        },
      })
    );
    setOpenModal(false);

    dispatch(fetchContacts());
    setMessage({ type: 'success', message: 'Contact edited successfully!' });
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
            <ManageAccountsIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Edit contact
          </Typography>
          <Box
            component="form"
            onSubmit={handleEditContactFormSubmit}
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
              value={nameInputValue}
              onChange={event => {
                setNameInputValue(event.target.value);
              }}
            />
            <InputMask
              mask="+38 (099) 999-99-99"
              value={numberInputValue}
              onChange={event => {
                setNumberInputValue(event.target.value);
              }}
            >
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
              Edit contact
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
