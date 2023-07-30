import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Container, Typography } from '@mui/material';
import AddContactForm from 'components/AddContactForm/AddContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import EditContactForm from 'components/EditContactForm/EditContactForm';
import AnimatedMessage from 'components/Message/AnimatedMessage';
import Message from 'components/Message/Message';
import { ModalWindow } from 'components/ModalWindow/ModalWindow';
import { fetchContacts } from 'redux/contacts/operations';
import { selectContacts, selectError } from 'redux/contacts/selectors';

const ContactsPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalChildren, setModalChildren] = useState(null);

  const error = useSelector(selectError);

  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContactButtonClick = () => {
    setOpenModal(true);
    setModalChildren(
      <AddContactForm setOpenModal={setOpenModal} setMessage={setMessage} />
    );
  };
  const handleEditContactButtonClick = (id, name, number) => {
    setOpenModal(true);
    setModalChildren(
      <EditContactForm
        id={id}
        name={name}
        number={number}
        setOpenModal={setOpenModal}
        setMessage={setMessage}
      />
    );
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
          setMessage={setMessage}
        />
      </Container>
      <ModalWindow
        openModal={openModal}
        children={modalChildren}
        handleModalState={setOpenModal}
      />
      {message && !error && (
        <AnimatedMessage type={message.type} message={message.message} />
      )}
      {error && <AnimatedMessage type="error" message="Something went wrong" />}
    </>
  );
};

export default ContactsPage;
