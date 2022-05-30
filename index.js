// Import class 'Book'
import { Book } from './modules/book.js';

// show the book list using the method 'showmybooks' imported from showmybooks.js
import { showMyBooks } from './modules/showMyBooks.js';

// show the add book section using the method 'addnewBook' imported from addNewBook.js
import { addNewBook } from './modules/addNewBook.js';

// show the contact section using the method 'contact' imported from contact.js
import { contact } from './modules/contact.js';

// show the date and time using the function 'timeDateInterval' imported from
// datetime.js
import { timeDateInterval } from './modules/datetime.js';

const form = document.querySelector('#senddata');
const getmylibrary = JSON.parse(localStorage.getItem('mylibrary'));
// Define 'mybooks' object using the class 'Book'
const myBooks = new Book();

// Adding a book using the methods of the imported 'Book' class
form.addEventListener('submit', (e) => {
  e.preventDefault();
  myBooks.addbooks();
  myBooks.addhtml();
  myBooks.remove();
});

// Adding the book list from local storage using the imported 'Book' class methods
if (getmylibrary.length > 0) {
  myBooks.bookList = getmylibrary;
  myBooks.addhtml();
  myBooks.remove();
}

// SPA section
// variables to select the sections of the page
const listSelector = document.getElementById('list');
const addBooksSelector = document.getElementById('Add-New');
const contactSelector = document.getElementById('Contact');
listSelector.addEventListener('click', showMyBooks);
addBooksSelector.addEventListener('click', addNewBook);
contactSelector.addEventListener('click', contact);

timeDateInterval();
