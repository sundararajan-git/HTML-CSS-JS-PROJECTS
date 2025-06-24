// dom elements
const bookmarkContainer = document.getElementById("bookmarkContainerLists");
const bookmarkFom = document.getElementById("bookmarkForm");

// variable
const bookmakList = [
  {
    bookmarkName: "Google",
    bookmarkURL: "https://google.com",
  },
];

// tempaltes
class Templates {
  getBookmarkLists(item) {
    return `<div id="list">
                <span>${item?.bookmarkName}</span>
                <button type="button" onclick="removebtn()">Remove</button>
            </div>`;
  }
}

const template = new Templates();

const removebtn = () => {
  alert("removed");
};

const renderBookmarkLists = () => {
  bookmakList.forEach((item) => {
    const temp = template.getBookmarkLists(item);
    bookmarkContainer.insertAdjacentHTML("beforeend", temp);
  });
};

const addBookmarkHandler = (event) => {
  event.preventDefault();
  const formData = new FormData(bookmarkFom);
  const formJson = Object.fromEntries(formData);
  const temp = template.getBookmarkLists(formJson);
  bookmarkContainer.insertAdjacentHTML("beforeend", temp);
  bookmarkFom.reset();
};

// trigeers
window.addEventListener("DOMContentLoaded", renderBookmarkLists);
bookmarkFom.addEventListener("submit", addBookmarkHandler);
