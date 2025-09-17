// Just update this array when you add new projects (folder names)
const projects = [
    { name: "Bar Chart", path: "BAR-CHART/index.html" },
    { name: "BMI Calculator", path: "BMI-CALCULATOR/index.html" },
    { name: "Book List App", path: "BOOK-LIST-APP/index.html" }
];

const list = document.getElementById("project-list");
projects.forEach(proj => {
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.href = proj.path;
    link.textContent = proj.name;
    li.appendChild(link);
    list.appendChild(li);
});