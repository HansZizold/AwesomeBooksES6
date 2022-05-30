/* eslint-disable import/prefer-default-export */
const title = document.querySelector('.title');
const author = document.querySelector('.author');
const ullibrary = document.querySelector('.ullibrary');

const book = ({ title, author, index }) => `
<li id=${index}>
  <p>'${title}' by ${author} </p> 
  <button class="removebook" id="removebook" value="Add Book">Remove</button>
</li>`;

export class Book {
  constructor() {
    this.bookList = [];
  }

  addbooks = () => {
    if (this.bookList.some((book) => book.title === title.value)) {
      alert('book already added');
      return;
    }

    const mybook = {
      title: title.value,
      author: author.value,
      index: Date.now(),
    };

    this.bookList.push(mybook);

    title.value = '';
    author.value = '';
  }

  remove = () => {
    const removebook = document.querySelectorAll('.removebook');
    removebook.forEach((elem) => {
      elem.addEventListener('click', () => {
        elem.parentNode.remove();
        this.bookList = this.bookList.filter(
          (book) => book.index !== Number(elem.parentNode.id),
        );
        localStorage.setItem('mylibrary', JSON.stringify(this.bookList));
      });
    });
  }

  addhtml = () => {
    ullibrary.innerHTML = '';
    this.bookList.forEach((element) => ullibrary.insertAdjacentHTML('beforeend', book(element)));

    localStorage.setItem('mylibrary', JSON.stringify(this.bookList));
  }
}
