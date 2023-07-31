import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { selectIsLoggedIn } from 'redux/auth/selectors';

import bgImg from '../img/phonebook_home_bg.png';

const defaultTheme = createTheme();

const Homepage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  const handleLogInButtonClick = () => {
    navigate('/login');
  };

  const handleContactsButtonClick = () => {
    navigate('/contacts');
  };
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />

        <main sx={{ backgroundImage: { bgImg } }}>
          <Box
            sx={{
              bgcolor: 'background.paper',
              pt: 8,
              pb: 6,
              pl: 1,
              pr: 1,
            }}
          >
            <Container
              maxWidth="sm"
              sx={{
                pt: 2,
                pb: 4,
                boxShadow: '0px 0px 0px 2px rgba(33,149,243,1)',

                borderRadius: '5px',
              }}
            >
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
                sx={{
                  '@media (max-width: 435px)': {
                    fontSize: '40px',
                  },
                }}
              >
                Phonebook app
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                paragraph
              >
                Store your contacts in a convenient and secure place.
              </Typography>
              <img
                src={bgImg}
                width="100px"
                alt="Phonebook"
                style={{ display: 'block', margin: '0 auto' }}
              />
              <Stack
                sx={{ pt: '20px' }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                {isLoggedIn ? (
                  <Button
                    variant="outlined"
                    onClick={handleContactsButtonClick}
                  >
                    My contacts
                  </Button>
                ) : (
                  <Button variant="outlined" onClick={handleLogInButtonClick}>
                    Log in
                  </Button>
                )}
              </Stack>
            </Container>
          </Box>
          <Container sx={{ py: 8 }} maxWidth="md"></Container>
        </main>
      </ThemeProvider>
    </>
  );
};

export default Homepage;
