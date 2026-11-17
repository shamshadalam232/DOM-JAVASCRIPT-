const incomeExpense = document.getElementById("incomeExpenseChart");

new Chart(incomeExpense, {
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

new Chart(expenseCategory, {
  type: "doughnut",

  data: {
    labels: ["Food", "Shopping", "Bills", "Transport", "Others"],

    datasets: [
      {
        data: [25, 20, 15, 10, 30],
        backgroundColor: [
          "#9333ea",
          "#06b6d4",
          "#10b981",
          "#f97316",
          "#ec4899",
        ],
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