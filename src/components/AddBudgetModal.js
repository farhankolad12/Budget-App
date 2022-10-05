import React, { useRef } from "react";
import { useBudgets } from "../context/BudgetContext";

export default function AddBudgetModal() {
  const nameRef = useRef();
  const spendingRef = useRef();
  const { addBudgets } = useBudgets();

  function handleAdd(e) {
    e.preventDefault();
    const id = Math.floor(Math.random() * 999999);
    const budget = {
      id,
      name: nameRef.current.value,
      maximumSpending: +spendingRef.current.value,
      currentSpending: 0,
      expense: [],
      createdAt: Date.now(),
    };

    addBudgets(budget);

    e.target.reset();
  }

  return (
    <div className="modal fade" id="add-budget">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Budget</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleAdd}>
              <label htmlFor="name-budget" className="form-label">
                Name
              </label>
              <input
                id="name-budget"
                ref={nameRef}
                type="text"
                className="form-control"
                required
              />
              <label htmlFor="max-budget" className="form-label">
                Maximum Spending
              </label>
              <input
                id="max-budget"
                ref={spendingRef}
                type="number"
                className="form-control"
                required
              />
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
