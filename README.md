# 💰 Expense Tracker

A modern and responsive **Expense Tracker web application** built with React and Vite. The application allows users to manage their daily expenses, organize them by category, and view useful financial summaries through a clean dashboard interface.

## ✨ Features

* ➕ Add new expenses
* 🗑️ Delete expenses
* 🏷️ Categorize expenses
* 📅 Select expense dates
* 💰 Calculate total expenses
* 📊 Calculate average expense
* 🔢 Track total transactions
* 💾 Store expenses in LocalStorage
* 🔄 Preserve data after page refresh
* 📱 Responsive design
* 🎨 Modern and interactive dashboard UI

## 🛠️ Tech Stack

* **React**
* **JavaScript (ES6+)**
* **Vite**
* **HTML5**
* **CSS3**
* **LocalStorage**

## ⚛️ React Concepts Used

This project helped me practice and implement several core React concepts:

* Components
* JSX
* Props
* `useState`
* `useEffect`
* Controlled form inputs
* Event handling
* Conditional rendering
* List rendering with `map()`
* Data calculations with `reduce()`
* Parent-child communication
* CRUD functionality
* Browser LocalStorage

## 📂 Project Structure

```text
expense-tracker/
│
├── src/
│   ├── components/
│   │   ├── ExpenseForm.jsx
│   │   └── ExpenseList.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── public/
├── index.html
├── package.json
└── README.md
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```

### 2. Navigate to the project

```bash
cd expense-tracker
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

## 💡 How It Works

Users can enter an **expense name, amount, category, and date** through the expense form.

When an expense is submitted, React updates the application state and displays the new expense in the expense list.

The dashboard automatically calculates:

* **Total Expenses** — the total amount of all recorded expenses
* **Transactions** — the number of recorded expenses
* **Average Expense** — the average amount spent per transaction

The application also uses **LocalStorage** so expenses remain available even after refreshing the browser.

## 🎯 Project Purpose

This project was created to strengthen practical knowledge of **React and JavaScript** by building a complete, functional application instead of working only with individual concepts.

It demonstrates the use of React state, props, forms, events, list rendering, side effects, data calculations, and browser storage in a single project.

## 🔮 Future Improvements

* ✏️ Edit existing expenses
* 🔍 Search expenses
* 🔽 Filter and sort expenses
* 📊 Add expense charts
* 📅 Monthly expense reports
* 💵 Add budget tracking
* 🌙 Add dark mode
* 🔐 Add user authentication
* ☁️ Connect to a backend and database

## 👩‍💻 Author

**Fizza Yousaf**

Built with ❤️ using React and Vite.
