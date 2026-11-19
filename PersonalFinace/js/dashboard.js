const incomeExpense = document.getElementById("incomeExpenseChart");

let incomeExpenseChart = new Chart(incomeExpense, {
  type: "line",

  data: {
    labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],

    datasets: [
      {
        label: "Income",
        data: [15, 26, 23, 36, 33, 44],
        borderColor: "#a855f7",
        backgroundColor: "rgba(168, 85, 247, 0.2)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "Expenses",
        data: [10, 13, 11, 18, 18, 22],
        borderColor: "#ec4899",
        backgroundColor: "rgba(236, 72, 153, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  },

  options: {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        labels: {
          color: "#ffffff",
        },
      },
    },

    scales: {
      x: {
        ticks: {
          color: "#ffffff",
        },

        grid: {
          color: "rgba(255,255,255,0.05)",
        },
      },

      y: {
        ticks: {
          color: "#ffffff",
        },

        grid: {
          color: "rgba(255,255,255,0.08)",
        },
      },
    },
  },
});

const expenseCategory = document.getElementById("expenseCategoryChart");

let expenceByCategory = new Chart(expenseCategory, {
  type: "doughnut",

  data: {
    labels: ["Food", "Shopping", "Bills", "Other"],

    datasets: [
      {
        data: [25, 20, 15, 10],
        backgroundColor: ["#9333ea", "#06b6d4", "#10b981", "#f97316"],
        borderWidth: 0,
      },
    ],
  },

  options: {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "65%",

    plugins: {
      legend: {
        labels: {
          color: "#ffffff",
        },
      },
    },
  },
});

const addButton = document.getElementById("openModal");
const modal = document.getElementById("transactionModal");
const closeModal = document.getElementById("closeModal");
const transactionForm = document.getElementById("transactionForm");
const nameInput = document.getElementById("transaction-name");
const amountInput = document.getElementById("amount");
const typeInput = document.getElementById("type");
const categoryInput = document.getElementById("category");
const dateInput = document.getElementById("date");
const tbody = document.querySelector("tbody");
const totalBalance = document.getElementById("balance");
const totalIncome = document.getElementById("income");
const totalExpense = document.getElementById("expense");
const month = document.querySelector(".month")

let transactionData = [];
let editTask = -1;

let savedLocalStorageData = () => {
  localStorage.setItem("transactions", JSON.stringify(transactionData));
};

let updateSummary = () => {
  let income = transactionData.reduce((acc, curr) => {
    if (curr.type === "Income") {
      return acc + curr.amount;
    }
    return acc;
  }, 0);

  let expense = transactionData.reduce((acc, curr) => {
    if (curr.type === "Expense") {
      return acc + curr.amount;
    }
    return acc;
  }, 0);

  let balance = income - expense;

  totalBalance.textContent = "₹" + balance;
  totalIncome.textContent = "₹" + income;
  totalExpense.textContent = "₹" + expense;
  month.textContent = "₹" + balance;

  incomeExpenseChart.data.datasets[0].data = [income];
  incomeExpenseChart.data.datasets[1].data = [expense];

  incomeExpenseChart.update();

  let calculateExpense = (category) => {
    return transactionData.reduce((acc, curr) => {
      if (curr.category === category && curr.type === "Expense") {
        return acc + curr.amount;
      }
      return acc;
    }, 0);
  };

  let foodExpense = calculateExpense("Food");
  let shoppingExpense = calculateExpense("Shopping");
  let billsExpense = calculateExpense("Bills");
  let otherExpense = calculateExpense("Other");

  expenceByCategory.data.datasets[0].data = [
    foodExpense,
    shoppingExpense,
    billsExpense,
    otherExpense,
  ];
  expenceByCategory.update();
};

let renderTransaction = () => {
  tbody.innerHTML = "";
  console.log("javascript run");
  transactionData.forEach((curr, index) => {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");
    let editButton = document.createElement("button");
    editButton.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;

    tbody.appendChild(tr);

    td1.textContent = index + 1;
    td2.textContent = curr.name;
    td3.textContent = curr.category;
    td4.textContent = curr.date;
    td5.textContent = curr.amount;
    td6.appendChild(editButton);
    td6.appendChild(deleteButton);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);

    deleteButton.addEventListener("click", () => {
      transactionData = transactionData.filter((transaction, currentIndex) => {
        console.log(currentIndex);
        return currentIndex !== index;
      });

      renderTransaction();
      updateSummary();
      savedLocalStorageData();

      console.log(transactionData);
    });

    editButton.addEventListener("click", () => {
      editTask = index;
      modal.style.display = "flex";
      console.log(editTask);
      let selectedTransaction = transactionData[editTask];

      nameInput.value = selectedTransaction.name;
      amountInput.value = selectedTransaction.amount;
      typeInput.value = selectedTransaction.type;
      categoryInput.value = selectedTransaction.category;
      dateInput.value = selectedTransaction.date;
    });
  });
};

addButton.addEventListener("click", () => {
  editTask = -1;
  transactionForm.reset();
  modal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

transactionForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameInput.value;
  const amount = Number(amountInput.value);
  const type = typeInput.value;
  const category = categoryInput.value;
  const date = dateInput.value;

  const transaction = {
    name: name,
    amount: amount,
    type: type,
    category: category,
    date: date,
  };

  if (editTask === -1) {
    transactionData.push(transaction);
    let index = transactionData.length - 1;
    modal.style.display = "none";
    transactionForm.reset();
    renderTransaction();
    updateSummary();
    savedLocalStorageData();
    console.log(transaction);
    console.log(transactionData);
  } else {
    transactionData[editTask] = transaction;
    renderTransaction();
    updateSummary();
    savedLocalStorageData();
  }

  editTask = -1;
  modal.style.display = "none";
  transactionForm.reset();
});

const updateBudget = document.querySelector(".budget-btn");
const budgetModal = document.querySelector(".Budget-modal");
const cancelButton = document.querySelector(".cancelbutton");
const submitButton = document.querySelector(".savebutton");
const budgetInput = document.querySelector(".budget-input");
const remainingBalance = document.querySelector(".remaining");
const spent = document.querySelector(".spent");
const total = document.querySelector(".total");
const progressBar = document.querySelector(".progress-fill")
const budgetNote = document.querySelector(".budget-note")

updateBudget.addEventListener("click", () => {
  budgetModal.style.display = "flex";
});

cancelButton.addEventListener("click", () => {
  budgetModal.style.display = "none";
});

submitButton.addEventListener("click", () => {
  let value = Number(budgetInput.value);

  if(value <= 0){
    return alert("monthly budget must be more than 0.")
  }

  localStorage.setItem("budget", value);
  
  updateBudgetUI(value)

  budgetModal.style.display = "none"
});

let data = localStorage.getItem("transactions");
transactionData = JSON.parse(data) || [];
renderTransaction();
updateSummary();



let updateBudgetUI = (value) => {
  total.textContent = value;

  let expnceforBudget = transactionData.reduce((acc, curr) => {
    if (curr.type === "Expense") {
      return acc + curr.amount;
    }
    return acc;
  }, 0);

  let balance = value - expnceforBudget;

  let percentage = (expnceforBudget / value) * 100;
  let progress = Math.min(percentage, 100);

  progressBar.style.width = progress + "%";
  spent.textContent = expnceforBudget;
  remainingBalance.textContent = balance;

  budgetNote.innerHTML = `<i class="fa-solid fa-circle-check"></i>
    You have used ${Math.round(percentage)}% of your budget.`;
};

let savedBudget = localStorage.getItem("budget");

if (savedBudget) {
  updateBudgetUI(Number(savedBudget));
}