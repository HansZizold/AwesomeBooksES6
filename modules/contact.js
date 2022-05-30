/* eslint-disable import/prefer-default-export */
const addmybooks = document.querySelector('.addmybooks');
const contactInfo = document.querySelector('.contact-info');
const bookshelf = document.querySelector('.bookshelf');

// showing the contact section and hiding the rest
export const contact = () => {
  addmybooks.style.display = 'none';
  contactInfo.style.display = 'unset';
  bookshelf.style.display = 'none';
};
