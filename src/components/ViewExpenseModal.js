import React from "react";
import { useBudgets } from "../context/BudgetContext";
import formatCurrency from "../libs/formatCurrency";

export default function ViewExpenseModal({ budget }) {
  const { deleteBudget, deleteExpense } = useBudgets();

  return (
    <div className="modal" id={`view-expense-${budget.id}`}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title d-flex gap-2 align-items-center">
              <span>Expenses - {budget.name}</span>
              <button
                onClick={() => deleteBudget(budget.id)}
                className="btn btn-danger"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Delete
              </button>
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {budget.expense.map((exp) => {
              return (
                <div
                  key={exp.id}
                  className="d-flex justify-content-between align-items-center mt-2"
                >
                  <span>{exp.description}</span>
                  <div className="d-flex gap-2 align-items-center">
                    <span>{formatCurrency(exp.amount)}</span>
                    <button
                      onClick={() => deleteExpense(budget.id, exp)}
                      className="btn btn-outline-danger"
                    >
                      {" "}
                      &times;{" "}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
