//user
// carramba123
// carramba123
// carramba123@gmail.com
import * as React from 'react';
import { useState } from 'react';
import { Suspense } from 'react';
import { Oval } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { logOut } from 'redux/auth/operations';
import { selectIsLoggedIn, selectUserName } from 'redux/auth/selectors';

const SharedHeader = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectUserName);

  const dispatch = useDispatch();
  const [anchorElNav, setAnchorElNav] = useState(null);

  const [anchorElUser, setAnchorElUser] = useState(null);

  const navigate = useNavigate();

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleHomeButtonClick = () => {
    navigate('/');
  };
  const handleLogInButtonClick = () => {
    navigate('/login');
  };
  const handleSignUpButtonClick = () => {
    navigate('/register');
  };
  const handleLogOutButtonClick = () => {
    dispatch(logOut());
  };
  const handleContactsButtonClick = () => {
    navigate('/contacts');
  };
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h5"
              noWrap
              component="span"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'Roboto',
                fontWeight: 400,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
              onClick={handleHomeButtonClick}
            >
              Phonebook
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link to="/">
                    <Typography textAlign="center">Home</Typography>
                  </Link>
                </MenuItem>

                {isLoggedIn && (
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link to="/contacts">
                      <Typography textAlign="center">Contacts</Typography>
                    </Link>
                  </MenuItem>
                )}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="span"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'Roboto',
                fontWeight: 400,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
              onClick={handleHomeButtonClick}
            >
              Phonebook
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                onClick={() => {
                  handleHomeButtonClick();
                  handleCloseNavMenu();
                }}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Home
              </Button>
              {isLoggedIn && (
                <Button
                  onClick={() => {
                    handleContactsButtonClick();
                    handleCloseNavMenu();
                  }}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Contacts
                </Button>
              )}
            </Box>

            {isLoggedIn && (
              <>
                <Box sx={{ flexGrow: 0, mr: 1 }}>
                  <Tooltip title={userName}>
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/2.jpg"
                      />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <MenuItem onClick={handleCloseUserMenu}>
                      <LogoutIcon color="disabled" sx={{ mr: 1 }} />
                      <Typography
                        textAlign="center"
                        onClick={handleLogOutButtonClick}
                      >
                        Log out
                      </Typography>
                    </MenuItem>
                  </Menu>
                </Box>
                <Box sx={{ flexGrow: 0 }}>
                  <Typography textAlign="center">{userName}</Typography>
                </Box>
              </>
            )}
            <Box sx={{ flexGrow: 0 }}>
              {!isLoggedIn && (
                <>
                  <Button color="inherit" onClick={handleSignUpButtonClick}>
                    Sign Up
                  </Button>
                  <Button
                    variant="outlined"
                    color="inherit"
                    onClick={handleLogInButtonClick}
                  >
                    Log In
                  </Button>
                </>
              )}
              {/* {isLoggedIn && (
                <Button
                  variant="outlined"
                  color="inherit"
                  onClick={handleLogOutButtonClick}
                >
                  Log Out
                </Button>
              )} */}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Suspense
        fallback={
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
            }}
          >
            <Oval
              ariaLabel="loading-indicator"
              height={100}
              width={100}
              strokeWidth={5}
              strokeWidthSecondary={1}
              color="#757ce8"
              secondaryColor="white"
            />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedHeader;
