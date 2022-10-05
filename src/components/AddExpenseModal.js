import React, { useRef } from "react";
import { useBudgets } from "../context/BudgetContext";

export default function AddExpenseModal() {
  const descriptionRef = useRef();
  const amountRef = useRef();
  const categoryRef = useRef();
  const { addExpense, budgets } = useBudgets();

  function handleAdd(e) {
    e.preventDefault();

    const id = Math.floor(Math.random() * 99999);

    const expense = {
      amount: +amountRef.current.value,
      description: descriptionRef.current.value,
      id,
    };

    addExpense(+categoryRef.current.value, expense);

    e.target.reset();
  }

  return (
    <div className="modal" id="add-expense">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Expense</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleAdd}>
              <label htmlFor="description-expense" className="form-label">
                Description
              </label>
              <input
                id="description-expense"
                ref={descriptionRef}
                type="text"
                className="form-control"
                required
              />
              <label htmlFor="amount-expense" className="form-label">
                Amount
              </label>
              <input
                id="amount-expense"
                ref={amountRef}
                type="number"
                className="form-control"
                required
              />
              <label htmlFor="category">Category</label>
              <select className="form-control" required ref={categoryRef}>
                {budgets.map((budget) => {
                  return (
                    <option key={budget.id} value={budget.id}>
                      {budget.name}
                    </option>
                  );
                })}
              </select>
              <button
                type="submit"
                data-bs-dismiss="modal"
                aria-label="Close"
                className="btn btn-primary my-3"
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
