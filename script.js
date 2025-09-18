// Just update this array when you add new projects (folder names)
const projects = [
    { name: "Bar Chart", path: "BAR-CHART/index.html" },
    { name: "BMI Calculator", path: "BMI-CALCULATOR/index.html" },
    { name: "Book List App", path: "BOOK-LIST-APP/index.html" },
    { name: "Bookmark Saver", path: "BOOKMARK-SAVER/index.html" },
    { name: "Calculator", path: "CALCULATOR/index.html" },
    { name: "Calendar UI", path: "CALENDAR-UI/index.html" },
    { name: "Color Palette Generator", path: "COLOR-PALETTE-GENERATOR/index.html" },
    { name: "Color Picker", path: "COLOR-PICKER/index.html" },
    { name: "Timmer", path: "COUNTDOWN-TIMMER/index.html" },
    { name: "Custom Keyboard", path: "CUSTOM-KEYBOARD/index.html" },
    { name: "Dice Roller Game", path: "DICE-ROLLER-GAME/index.html" },
    { name: "Digital Clock", path: "DIGITAL-CLOCK/index.html" },
    { name: "Drag Drop", path: "DRAG-AND-DROP/index.html" },
    { name: "Event CountDown", path: "EVENT-COUNTDOWN-APP/index.html" },
    { name: "Expense Tracker", path: "EXPENSE-TRACKER/index.html" },
    { name: "FAQ Accordion", path: "FAQ-ACCORDION/index.html" },
    { name: "File Upload UI", path: "FILE-UPLOAD-UI/index.html" },
    { name: "Flashcard Quiz App", path: "FLASHCARD-QUIZ-APP/index.html" },
    { name: "Form Validator", path: "FORM-VALIDATOR/index.html" },
    { name: "Form Wizard", path: "FORM-WIZARD/index.html" },
    { name: "Gifit Suggestion App", path: "GIFIT-SUGGESTION-APP/index.html" },
    { name: "Gradient Generator", path: "GRADIENT-GENERATOR/index.html" },
    { name: "Image Galler", path: "IMAGE-GALLERY-LIGHTBOX/index.html" },
    { name: "Image Slider", path: "IMAGE-SLIDER/index.html" },
    { name: "Invoice Generator", path: "INVOICE-GENERATOR/index.html" },
    { name: "Kanban Board", path: "KANBAN-BOARD/index.html" },
    { name: "Landing Page", path: "LANDING-PAGE/index.html" },
    { name: "Memory Game", path: "MEMORY-GAME/index.html" },
    { name: "Mobile Mock UI", path: "MOBILE-MOCK-UI/index.html" },
    { name: "Music Player", path: "MUSIC-PLAYER-UI/index.html" },
    { name: "Modal Popup", path: "MODAL-POPUP/index.html" },
    { name: "Music Player", path: "MUSIC-PLAYER-UI/index.html" },
    { name: "Navigation Menu", path: "NAVIGATION-MENU/index.html" },
    { name: "Netflix UI", path: "NETFLIX-UI/index.html" },
    { name: "Notes App", path: "NOTES-APP/index.html" },
    { name: "Number Guessing Game", path: "NUMBER-GUESS-GAME/index.html" },
    { name: "Password Generator", path: "PASSWORD-GENERATOR/index.html" },
    { name: "Password Strength Checker", path: "PASSWORD-STRENGTH-CHECKER/index.html" },
    { name: "Personal Portfolio", path: "PERSONAL-PORTFOLIO-WEBSITE/index.html" },
    { name: "Pie Chart", path: "PIE-CHART/index.html" },
    { name: "Pomodoro Timer", path: "POMODORO-TIMER-APP/index.html" },
    { name: "Quiz Game", path: "QUIZ-GAME/index.html" },
    { name: "Resume Builder UI", path: "RESUME-BUILDER-UI/index.html" },
    { name: "Rock Paper Scissor Game", path: "ROCK-PAPER-SCISSORS-GAME/index.html" },
    { name: "Scroll Progress Indicator", path: "SCROLL-PROGRESS-INDICATOR/index.html" },
    { name: "Search Filter list", path: "SEARCH-FILTER-LIST/index.html" },
    { name: "Sticky Notes App", path: "STICKY-NOTES/index.html" },
    { name: "Table", path: "TABLE/index.html" },
    { name: "Theme Switcher", path: "THEME-SWITCHER/index.html" },
    { name: "Tip Calculator", path: "TIP-CALCULATOR/index.html" },
    { name: "Toast Notification", path: "TOAST-NOTIFICATION/index.html" },
    { name: "Todo App", path: "TODO-APP/index.html" },
    { name: "Typing Speed", path: "TYPING-SPEED-TEST/index.html" },
    { name: "Unit Converter", path: "UNIT-CONVERTER/index.html" },
    { name: "Weather UI", path: "WEATHER-UI/index.html" }
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