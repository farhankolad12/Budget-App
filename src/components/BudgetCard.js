import React from "react";
import { ProgressBar } from "react-bootstrap";
import formatCurrency from "../libs/formatCurrency";
import ViewExpenseModal from "./ViewExpenseModal";

export default function BudgetCard({ budget }) {
  return (
    <>
      <div className="card p-2">
        <div className="d-flex justify-content-between align-items-center">
          <span className="card-body">{budget.name}</span>
          <div>
            <span className="fs-5">
              {formatCurrency(budget.currentSpending)}
            </span>{" "}
            /{" "}
            <span className="text-muted">
              {formatCurrency(budget.maximumSpending)}
            </span>
          </div>
        </div>
        <ProgressBar
          variant={progressBarColor(
            budget.currentSpending,
            budget.maximumSpending
          )}
          min={0}
          max={budget.maximumSpending}
          now={budget.currentSpending}
        />
        <div className="mt-3 d-flex gap-2">
          <button
            data-bs-toggle="modal"
            data-bs-target="#add-expense"
            className="btn btn-outline-primary"
          >
            Add Expense
          </button>
          <button
            data-bs-toggle="modal"
            data-bs-target={`#view-expense-${budget.id}`}
            className="btn btn-outline-danger"
          >
            View Expense
          </button>
        </div>
      </div>
      <ViewExpenseModal budget={budget} />
    </>
  );
}

export function progressBarColor(amount, max) {
  const ratio = amount / max;

  if (ratio < 0.5) return "primary";
  if (ratio < 0.75) return "warning";

  return "danger";
}
