import { useEffect, useState } from 'react'
import './App.css'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'

function App() {
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem('expenses')

    return savedExpenses ? JSON.parse(savedExpenses) : []
  })

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses))
  }, [expenses])

  function addExpense(expense) {
    setExpenses([...expenses, expense])
  }

  function deleteExpense(index) {
    setExpenses(
      expenses.filter((_, i) => i !== index)
    )
  }

  const totalExpenses = expenses.reduce(
    (total, expense) =>
      total + Number(expense.amount),
    0
  )

  const averageExpense =
    expenses.length > 0
      ? totalExpenses / expenses.length
      : 0

  return (
    <div className="app">

      <header className="header">
        <div>
          <p className="eyebrow">PERSONAL FINANCE</p>

          <h1>Expense Tracker</h1>

          <p className="subtitle">
            Keep track of where your money goes.
          </p>
        </div>
      </header>

      <main>

        <section className="summary">

          <div className="summary-card primary">
            <div>
              <p>Total Expenses</p>

              <h2>
                Rs. {totalExpenses.toLocaleString()}
              </h2>
            </div>

            <span className="card-icon">₨</span>
          </div>

          <div className="summary-card">
            <div>
              <p>Transactions</p>

              <h2>{expenses.length}</h2>
            </div>

            <span className="card-icon">↗</span>
          </div>

          <div className="summary-card">
            <div>
              <p>Average Expense</p>

              <h2>
                Rs. {Math.round(
                  averageExpense
                ).toLocaleString()}
              </h2>
            </div>

            <span className="card-icon">⌁</span>
          </div>

        </section>

        <section className="content-grid">

          <div className="form-card">
            <ExpenseForm
              addExpense={addExpense}
            />
          </div>

          <div className="list-card">
            <ExpenseList
              expenses={expenses}
              deleteExpense={deleteExpense}
            />
          </div>

        </section>

      </main>

    </div>
  )
}

export default App