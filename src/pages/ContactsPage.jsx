import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Container, Typography } from '@mui/material';
import AddContactForm from 'components/AddContactForm/AddContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import EditContactForm from 'components/EditContactForm/EditContactForm';
import { ModalWindow } from 'components/ModalWindow/ModalWindow';
import { fetchContacts } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

const ContactsPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalChildren, setModalChildren] = useState(null);

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContactButtonClick = () => {
    setOpenModal(true);
    setModalChildren(<AddContactForm setOpenModal={setOpenModal} />);
  };
  const handleEditContactButtonClick = () => {
    setOpenModal(true);
    setModalChildren(<EditContactForm setOpenModal={setOpenModal} />);
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
        <ContactsList
          editContact={handleEditContactButtonClick}
          contacts={contacts}
        />
      </Container>
      <ModalWindow
        openModal={openModal}
        children={modalChildren}
        handleModalState={setOpenModal}
      />
    </>
  );
};

export default ContactsPage;
