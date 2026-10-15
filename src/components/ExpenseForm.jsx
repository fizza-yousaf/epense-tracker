import { useState } from 'react'

function ExpenseForm({ addExpense }) {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('Food')
  const [date, setDate] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    if (!name || !amount || !date) {
      return
    }

    addExpense({
      name,
      amount,
      category,
      date
    })

    setName('')
    setAmount('')
    setCategory('Food')
    setDate('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Expense</h2>

      <label>Expense Name</label>

      <input
        type="text"
        placeholder="e.g. Grocery shopping"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Amount</label>

      <input
        type="number"
        placeholder="e.g. 2500"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <label>Category</label>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>Food</option>
        <option>Transport</option>
        <option>Shopping</option>
        <option>Bills</option>
        <option>Entertainment</option>
        <option>Other</option>
      </select>

      <label>Date</label>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button type="submit">
        Add Expense
      </button>
    </form>
  )
}

export default ExpenseForm