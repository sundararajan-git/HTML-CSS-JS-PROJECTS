// dom elements
const bookmarkContainer = document.getElementById("bookmarkContainerLists");
const bookmarkFom = document.getElementById("bookmarkForm");

// variable
const bookmarkList = [
  {
    bookmarkName: "Google",
    bookmarkURL: "https://google.com",
    id: 1
  },
];

// tempaltes
class Templates {
  getBookmarkLists(item) {
    return `<div class="list">
        <span><a href="${item?.bookmarkURL}" target="_blank">${item?.bookmarkName}</a></span>
        <button type="button" class="remove-btn" onClick="removebtn(${item.id})">Remove</button>
      </div>`;

  }
}

const template = new Templates();

const removebtn = (id) => {
  const confirmDelete = confirm("Are you sure you want to delete this bookmark?");
  if (!confirmDelete) return;
  const index = bookmarkList.findIndex((item) => item.id === id)
  bookmarkList.splice(index, 1)
  renderBookmarkLists()
};

const renderBookmarkLists = () => {
  bookmarkContainer.innerHTML = ""
  if (bookmarkList.length) {
    bookmarkList.forEach((item) => {
      const temp = template.getBookmarkLists(item);
      bookmarkContainer.insertAdjacentHTML("beforeend", temp);
    });
  } else {
    bookmarkContainer.insertAdjacentHTML("beforeend", "<p>No bookmarks added yet.</p>");
  }
};

const addBookmarkHandler = (event) => {
  event.preventDefault();
  const formData = new FormData(bookmarkFom);
  const formJson = Object.fromEntries(formData);
  formJson.id = bookmarkList.length + 1
  bookmarkList.push(formJson)
  const temp = template.getBookmarkLists(formJson);
  bookmarkContainer.insertAdjacentHTML("beforeend", temp);
  bookmarkFom.reset();
};

// trigeers
window.addEventListener("DOMContentLoaded", renderBookmarkLists);
bookmarkFom.addEventListener("submit", addBookmarkHandler);

