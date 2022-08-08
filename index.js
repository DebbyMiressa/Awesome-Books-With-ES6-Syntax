const bookForm = document.getElementById('bookForm');
const titleCheck = document.querySelector('.title-check');
const authorCheck = document.querySelector('.author-check');
const bookList = document.querySelector('.list-wrapper');
const docRange = document.createRange();

const loadList = () => {
  const books = new Book();
  let template = '<ul class="book-list">';
  books.booksArray.forEach((book, i) => {
    template += `<li class="list-item ${i % 2 !== 0 ? 'light' : 'dark'}">
          <div class="book-list-items">
            <h4>"${book.title}" by ${book.author}</h4>
            <button id="btn-${i}" data-book-index="${i}" type="button" class="removeBtn">
              Remove
            </button>
          </div>
        </li>`;
  });

  if (books.booksArray.length === 0) {
    template += `
      <li class="list-item light">
        <div class="book-list-items book-list-items-empty">
          <div class="book-items book-title">Book List is Empty</div>
        </div>
      </li>
    `;
  }

  template += '</ul>';
  return docRange.createContextualFragment(template);
};

bookList.append(loadList());

const validateForm = (title, author) => {
  if (title === '' || title === undefined) {
    titleCheck.style.display = 'block';
  }
  if (author === '' || author === undefined) {
    authorCheck.style.display = 'block';
  }

  if (!title || !author || author === '' || title === '') {
    return false;
  }
  return true;
};

bookForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = bookForm.elements.title.value;
  const author = bookForm.elements.author.value;
  const valid = validateForm(title, author);
  if (!valid) return;
  const nbook = {
    title,
    author,
  };
  const book = new Book();
  book.addBook(nbook);
  setTimeout(() => {
    window.location.reload();
  }, 1000);
});

document.querySelector('body').addEventListener('click', (event) => {
  if (event.target.classList.contains('removeBtn')) {
    const index = event.target.getAttribute('data-book-index');
    const book = new Book();
    book.removeBook(index);
    setTimeout(() => {
      window.location.reload();
    }, 500);
  }
});