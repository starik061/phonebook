import * as React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { MenuItem } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function ButtonAppBar() {
  useEffect(() => {
    // logIn({
    //   email: 'test12345545454545@gmail.com',
    //   password: 'test12345545454545',
    // });
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <MenuItem>
            <Link
              component={
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  PhoneBook
                </Typography>
              }
              to="/"
            >
              With prop forwarding
            </Link>
            <Link style={{ color: 'white', textDecoration: 'none' }} to="/">
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                PhoneBook
              </Typography>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link style={{ color: 'white', textDecoration: 'none' }} to="/">
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Login
              </Typography>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link style={{ color: 'white', textDecoration: 'none' }} to="/">
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Register
              </Typography>
            </Link>
          </MenuItem>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
