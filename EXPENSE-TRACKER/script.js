// DOM elements
const transactionList = document.getElementById("transactionList");
const transactionForm = document.getElementById("transactionForm");
const balanceEle = document.getElementById("balance");
const incomeEle = document.getElementById("income");
const expenseEle = document.getElementById("expenses");

// variables
let income = 0;
let expenses = 0;
let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

class Template {
  getTransactionList(list) {
    const type = Number(list.amount) > 0 ? "income" : "expense";
    const sign = Number(list.amount) > 0 ? "+" : "-";
    return `
    <div class="transaction-item ${type}">
      <span class="description">${list.description}</span>
      <span class="amount">${sign}$${Math.abs(list.amount)}</span>
    </div>`;
  }

}

const template = new Template();

const addTransactionHandler = (e) => {
  e.preventDefault();

  const formData = new FormData(transactionForm);
  const formJson = Object.fromEntries(formData);

  transactions.push(formJson);
  localStorage.setItem("transactions", JSON.stringify(transactions));

  const temp = template.getTransactionList(formJson);
  transactionList.insertAdjacentHTML("beforeend", temp);

  updateStats(formJson);
  transactionForm.reset();
};

const renderTransaction = () => {
  transactionList.innerHTML = "";
  income = 0;
  expenses = 0;

  transactions.forEach((list) => {
    const temp = template.getTransactionList(list);
    transactionList.insertAdjacentHTML("beforeend", temp);
    updateStats(list);
  });
};

const updateDashboard = () => {
  balanceEle.innerText = income - expenses;
  incomeEle.innerText = income;
  expenseEle.innerText = expenses;
};

const updateStats = (transaction) => {
  const amount = Number(transaction.amount);
  if (amount > 0) {
    income += amount;
  } else {
    expenses += Math.abs(amount);
  }
  updateDashboard();
};

// triggers
window.addEventListener("DOMContentLoaded", renderTransaction);
transactionForm.addEventListener("submit", addTransactionHandler);
