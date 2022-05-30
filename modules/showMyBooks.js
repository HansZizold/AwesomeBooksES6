/* eslint-disable import/prefer-default-export */

const addmybooks = document.querySelector('.addmybooks');
const contactInfo = document.querySelector('.contact-info');
const bookshelf = document.querySelector('.bookshelf');

// showing the list section and hiding the rest
export const showMyBooks = () => {
  addmybooks.style.display = 'none';
  contactInfo.style.display = 'none';
  bookshelf.style.display = 'unset';
};
