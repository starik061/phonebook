import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Button, Container, Typography } from '@mui/material';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { ModalWindow } from 'components/ModalWindow/ModalWindow';

const ContactsPage = () => {
  const [openModal, setOpenModal] = useState(false);

  const dispatch = useDispatch();

  const handleAddContactButtonClick = () => {
    setOpenModal(true);
  };
  return (
    <>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          sx={{ textAlign: 'center', pt: '20px' }}
        >
          My contacts
        </Typography>
        <Button
          onClick={handleAddContactButtonClick}
          sx={{ textAlign: 'center', m: '0 20px' }}
          variant="contained"
        >
          Add contact
        </Button>
        <ContactsList />
      </Container>
      <ModalWindow openModal={openModal} handleModalState={setOpenModal} />
    </>
  );
};

export default ContactsPage;
