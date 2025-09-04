const titleInput = document.getElementById('titleInput');
const authorInput = document.getElementById('authorInput');
const addBtn = document.getElementById('addBtn');
const bookList = document.getElementById('bookList');

let books = JSON.parse(localStorage.getItem('books')) || [];

function saveBooks() {
    localStorage.setItem('books', JSON.stringify(books));
}

function renderBooks() {
    bookList.innerHTML = '';
    books.forEach((book, index) => {
        const row = document.createElement('tr');
        row.className = 'border-b';
        row.innerHTML = `
          <td class="border px-4 py-2">${book.title}</td>
          <td class="border px-4 py-2">${book.author}</td>
          <td class="border px-4 py-2 space-x-2">
            <button class="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600" onclick="editBook(${index})">Edit</button>
            <button class="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600" onclick="deleteBook(${index})">Delete</button>
          </td>
        `;
        bookList.appendChild(row);
    });
}

function addBook() {
    const title = titleInput.value.trim();
    const author = authorInput.value.trim();
    if (!title || !author) return alert('Please enter both Title and Author!');
    books.push({ title, author });
    titleInput.value = '';
    authorInput.value = '';
    renderBooks();
    saveBooks();
}

function deleteBook(index) {
    if (confirm('Are you sure you want to delete this book?')) {
        books.splice(index, 1);
        renderBooks();
        saveBooks();
    }
}

function editBook(index) {
    const book = books[index];
    const newTitle = prompt('Edit Title:', book.title);
    const newAuthor = prompt('Edit Author:', book.author);
    if (newTitle && newAuthor) {
        books[index] = { title: newTitle, author: newAuthor };
        renderBooks();
        saveBooks();
    }
}

addBtn.addEventListener('click', addBook);

// Initial render
renderBooks();