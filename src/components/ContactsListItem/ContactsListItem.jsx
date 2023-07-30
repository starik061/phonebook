import * as React from 'react';
import { useDispatch } from 'react-redux';

import CancelIcon from '@mui/icons-material/Cancel';
import EditIcon from '@mui/icons-material/Edit';
import ImageIcon from '@mui/icons-material/Image';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import { deleteContact } from 'redux/contacts/operations';

import { StyledContainer } from './ContactListItemStyled';

const ContactsListItem = ({ editContact, name, number, id, setMessage }) => {
  const dispatch = useDispatch();

  const handleDeleteContactButtonClick = () => {
    dispatch(deleteContact(id));
    setMessage({ message: 'Contact successfully deleted', type: 'success' });
    setTimeout(() => {
      setMessage(null);
    }, 2000);
  };
  return (
    <Grid item xs={2} sm={4} md={4}>
      <StyledContainer>
        <Card sx={{ minWidth: 275 }}>
          <CardContent
            sx={{
              position: 'relative',
              transition: '0.3s ease-in',
            }}
          >
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={name} secondary={number} />
            </ListItem>
            <Container
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: '10px',
              }}
            >
              <Button
                onClick={() => {
                  editContact(id, name, number);
                }}
                variant="outlined"
                color="success"
              >
                <EditIcon />
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={handleDeleteContactButtonClick}
              >
                <CancelIcon />
              </Button>
            </Container>
          </CardContent>
        </Card>
      </StyledContainer>
    </Grid>
  );
};

export default ContactsListItem;
