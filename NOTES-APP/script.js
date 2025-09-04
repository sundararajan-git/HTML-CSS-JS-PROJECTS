const noteInput = document.getElementById('noteInput');
const addBtn = document.getElementById('addBtn');
const notesList = document.getElementById('notesList');

// Load notes from LocalStorage
let notes = JSON.parse(localStorage.getItem('notes')) || [];

function saveNotes() {
    localStorage.setItem('notes', JSON.stringify(notes));
}

function renderNotes() {
    notesList.innerHTML = '';
    notes.forEach((note, index) => {
        const li = document.createElement('li');
        li.className = "flex justify-between items-center bg-gray-100 px-3 py-2 rounded shadow";
        li.innerHTML = `
          <span>${note}</span>
          <button class="text-red-500 hover:text-red-700" onclick="deleteNote(${index})">Delete</button>
        `;
        notesList.appendChild(li);
    });
}

function addNote() {
    const noteText = noteInput.value.trim();
    if (noteText) {
        notes.push(noteText);
        noteInput.value = '';
        saveNotes();
        renderNotes();
    }
}

function deleteNote(index) {
    notes.splice(index, 1);
    saveNotes();
    renderNotes();
}

addBtn.addEventListener('click', addNote);

// Enter key adds note
noteInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addNote();
});

// Initial render
renderNotes();