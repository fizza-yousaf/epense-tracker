function ExpenseList({ expenses, deleteExpense }) {
  return (
    <div>
      <h2>Recent Expenses</h2>

      {expenses.length === 0 ? (
        <p>No expenses yet.</p>
      ) : (
        expenses.map((expense, index) => (
          <div className="expense-item" key={index}>
            <div>
              <h3>{expense.name}</h3>

              <p>
                {expense.category} · {expense.date}
              </p>
            </div>

            <div>
              <strong>
                Rs. {Number(expense.amount).toLocaleString()}
              </strong>

              <button
                onClick={() => deleteExpense(index)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default ExpenseList