const addmybooks = document.querySelector('.addmybooks');
const contactInfo = document.querySelector('.contact-info');
const bookshelf = document.querySelector('.bookshelf');

// showing the add my book section and hiding the rest
const addNewBook = () => {
  addmybooks.style.display = 'unset';
  contactInfo.style.display = 'none';
  bookshelf.style.display = 'none';
};

export default addNewBook;
