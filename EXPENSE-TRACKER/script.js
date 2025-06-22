// dom elements
const transactionsContainer = document.getElementById("transactionsContainer");
const transactionForm = document.getElementById("transactionForm");
const balanceEle = document.getElementById("balance");
const incomeEle = document.getElementById("income");
const expenseEle = document.getElementById("expenses");

// variables
let income = 0;
let expenses = 0;
let transactions = [];

// templates
class Template {
  getTransactionList(list) {
    return `<div id="transactionList">
        <span id="description">${list.description}</span>
        <span id="amount">${list.amount}</span>
      </div>`;
  }
}

const template = new Template();

const addTransactionHandler = (e) => {
  e.preventDefault();
  const formData = new FormData(transactionForm);
  const formJson = Object.fromEntries(formData);
  transactions.push(formJson);
  const temp = template.getTransactionList(formJson);
  transactionsContainer.insertAdjacentHTML("beforeend", temp);
  if (Number(formJson.amount) > 0) {
    income += Number(formJson.amount);
  } else {
    expenses += Number(formJson.amount);
  }
  updateDashboard();
  transactionForm.reset();
};

const renderTransaction = () => {
  transactions.forEach((list) => {
    const temp = template.getTransactionList(list);
    transactionsContainer.insertAdjacentHTML("beforeend", temp);
  });
};

const updateDashboard = () => {
  balanceEle.innerText = expenses + income;
  incomeEle.innerText = income;
  expenseEle.innerText = expenses;
};

// trigers
window.addEventListener("DOMContentLoaded", renderTransaction);
transactionForm.addEventListener("submit", addTransactionHandler);
