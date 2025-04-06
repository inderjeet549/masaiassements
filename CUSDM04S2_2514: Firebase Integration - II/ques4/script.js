const baseURL ="https://massi-assessment-default-rtdb.firebaseio.com"; 
const bookForm = document.getElementById('book-form');
const memberForm = document.getElementById('member-form');
const booksList = document.getElementById('books-list');
const membersList = document.getElementById('members-list');
const bookFilters = {
  genre: document.getElementById('filter-genre'),
  author: document.getElementById('filter-author'),
  available: document.getElementById('filter-available'),
  sortBy: document.getElementById('sort-books')
};
const memberFilters = {
  active: document.getElementById('filter-active'),
  sortBy: document.getElementById('sort-members')
};
let bookState = JSON.parse(localStorage.getItem('bookState')) || {
  filters: { genre: '', author: '', available: '' },
  sortBy: '',
  page: 1,
  limit: 5
};
let memberState = JSON.parse(localStorage.getItem('memberState')) || {
  filters: { active: '' },
  sortBy: '',
  page: 1,
  limit: 5
};
function saveState() {
  localStorage.setItem('bookState', JSON.stringify(bookState));
  localStorage.setItem('memberState', JSON.stringify(memberState));
}
async function fetchBooks() {
  let response = await fetch(`${baseURL}/books.json`);
  let data = await response.json();
  if (!data) return [];
  let books = Object.values(data);
  if (bookState.filters.genre) {
    books = books.filter(book => book.genre.toLowerCase().includes(bookState.filters.genre.toLowerCase()));
  }
  if (bookState.filters.author) {
    books = books.filter(book => book.author.toLowerCase().includes(bookState.filters.author.toLowerCase()));
  }
  if (bookState.filters.available !== '') {
    books = books.filter(book => String(book.available) === bookState.filters.available);
  }
  if (bookState.sortBy) {
    books.sort((a, b) => a[bookState.sortBy].toString().localeCompare(b[bookState.sortBy].toString()));
  }
  return books;
}
async function fetchMembers() {
  let response = await fetch(`${baseURL}/members.json`);
  let data = await response.json();
  if (!data) return [];
  let members = Object.values(data);
  if (memberState.filters.active !== '') {
    members = members.filter(member => String(member.active) === memberState.filters.active);
  }
  if (memberState.sortBy) {
    members.sort((a, b) => a[memberState.sortBy].toString().localeCompare(b[memberState.sortBy].toString()));
  }
  return members;
}
async function addBook(book) {
  await fetch(`${baseURL}/books.json`, {
    method: "POST",
    body: JSON.stringify(book),
    headers: { "Content-Type": "application/json" }
  });
  loadBooks();
}
async function addMember(member) {
  await fetch(`${baseURL}/members.json`, {
    method: "POST",
    body: JSON.stringify(member),
    headers: { "Content-Type": "application/json" }
  });
  loadMembers();
}
async function loadBooks() {
  let books = await fetchBooks();
  let start = (bookState.page - 1) * bookState.limit;
  let paginatedBooks = books.slice(start, start + bookState.limit);

  booksList.innerHTML = paginatedBooks.map(book => `
    <div>
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>Genre: ${book.genre}</p>
      <p>Published: ${book.publishedYear}</p>
      <p>Available: ${book.available ? 'Yes' : 'No'}</p>
    </div>
  `).join('');
  renderPagination('book', books.length);
  saveState();
}
async function loadMembers() {
  let members = await fetchMembers();
  let start = (memberState.page - 1) * memberState.limit;
  let paginatedMembers = members.slice(start, start + memberState.limit);
  membersList.innerHTML = paginatedMembers.map(member => `
    <div>
      <h3>${member.name}</h3>
      <p>Membership Date: ${member.membershipDate}</p>
      <p>Status: ${member.active ? 'Active' : 'Inactive'}</p>
    </div>
  `).join('');
  renderPagination('member', members.length);
  saveState();
}
function renderPagination(type, totalItems) {
  let state = type === 'book' ? bookState : memberState;
  let container = document.getElementById(`${type}-pagination`);
  let totalPages = Math.ceil(totalItems / state.limit);
  container.innerHTML = `
    <button ${state.page === 1 ? "disabled" : ""} onclick="changePage('${type}', ${state.page - 1})">Prev</button>
    <span>Page ${state.page} of ${totalPages}</span>
    <button ${state.page === totalPages ? "disabled" : ""} onclick="changePage('${type}', ${state.page + 1})">Next</button>
  `;
}
function changePage(type, newPage) {
  if (type === 'book') {
    bookState.page = newPage;
    loadBooks();
  } else {
    memberState.page = newPage;
    loadMembers();
  }
}
bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const book = {
    title: document.getElementById('book-title').value,
    author: document.getElementById('book-author').value,
    genre: document.getElementById('book-genre').value,
    publishedYear: parseInt(document.getElementById('book-year').value),
    available: document.getElementById('book-available').value === "true"
  };
  addBook(book);
  bookForm.reset();
});
memberForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const member = {
    name: document.getElementById('member-name').value,
    membershipDate: document.getElementById('member-date').value,
    active: document.getElementById('member-active').value === "true"
  };
  addMember(member);
  memberForm.reset();
});
bookFilters.genre.addEventListener('input', (e) => {
  bookState.filters.genre = e.target.value;
  bookState.page = 1;
  loadBooks();
});
bookFilters.author.addEventListener('input', (e) => {
  bookState.filters.author = e.target.value;
  bookState.page = 1;
  loadBooks();
});
bookFilters.available.addEventListener('change', (e) => {
  bookState.filters.available = e.target.value;
  bookState.page = 1;
  loadBooks();
});
bookFilters.sortBy.addEventListener('change', (e) => {
  bookState.sortBy = e.target.value;
  loadBooks();
});
memberFilters.active.addEventListener('change', (e) => {
  memberState.filters.active = e.target.value;
  memberState.page = 1;
  loadMembers();
});
memberFilters.sortBy.addEventListener('change', (e) => {
  memberState.sortBy = e.target.value;
  loadMembers();
});
loadBooks();
loadMembers();
