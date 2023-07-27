import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
axios.defaults.headers.common['Authorization'] = 'Bearer ';

export const signUp = async user => {
  try {
    const userData = await axios.post('/users/signup', user);
    console.log(userData);
  } catch (error) {
    console.log(error);
  }
};

export const logIn = async user => {
  try {
    const userData = await axios.post('/users/login', user);
    console.log(userData);
  } catch (error) {
    console.log(error);
  }
};

export const logOut = async token => {
  try {
    const userData = await axios.post('/users/logout', token);
    console.log(userData);
  } catch (error) {
    console.log(error);
  }
};

export const getContacts = async token => {
  try {
    const userData = await axios.get('/contacts');
    console.log(userData);
  } catch (error) {
    console.log(error);
  }
};

export const createContact = async contactData => {
  try {
    const response = await axios.post('/contacts', contactData);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const deleteContact = async contactId => {
  try {
    const response = await axios.delete(`/contacts/${contactId}`);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const updateContact = async (contactId, contactData) => {
  try {
    const response = await axios.patch(`/contacts/${contactId}`, contactData);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
