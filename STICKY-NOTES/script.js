const notesBoard = document.getElementById('notesBoard');
const noteInput = document.getElementById('noteInput');
const addBtn = document.getElementById('addBtn');

let notes = JSON.parse(localStorage.getItem('stickyNotes')) || [];

function saveNotes() {
    localStorage.setItem('stickyNotes', JSON.stringify(notes));
}

function renderNotes() {
    notesBoard.innerHTML = '';
    notes.forEach((note, index) => {
        const noteDiv = document.createElement('div');
        noteDiv.className = 'note';
        noteDiv.innerHTML = `
          <span class="delete-btn text-red-500 p-2" onclick="deleteNote(${index})">&times;</span>
          <p>${note}</p>
        `;
        notesBoard.appendChild(noteDiv);
    });
}

function addNote() {
    const noteText = noteInput.value.trim();
    if (!noteText) return;
    notes.push(noteText);
    noteInput.value = '';
    renderNotes();
    saveNotes();
}

function deleteNote(index) {
    notes.splice(index, 1);
    renderNotes();
    saveNotes();
}

addBtn.addEventListener('click', addNote);
noteInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addNote();
});

renderNotes();