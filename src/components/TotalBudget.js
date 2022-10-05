import React from "react";
import { progressBarColor } from "./BudgetCard";
import formatCurrency from "../libs/formatCurrency";
import { ProgressBar } from "react-bootstrap";

export default function TotalBudget({ budgets }) {
  const totalBudget = budgets.reduce((bg, budget) => {
    return bg + budget.maximumSpending;
  }, 0);

  const totalSpending = budgets.reduce((bg, budget) => {
    return bg + budget.currentSpending;
  }, 0);

  const total = {
    totalBudget,
    totalSpending,
  };

  return (
    <div className="card p-2">
      <div className="d-flex justify-content-between align-items-center">
        <span className="card-body">Total</span>
        <div>
          <span className="fs-5">{formatCurrency(total.totalSpending)}</span> /{" "}
          <span className="text-muted">
            {formatCurrency(total.totalBudget)}
          </span>
        </div>
      </div>
      <ProgressBar
        variant={progressBarColor(total.totalSpending, total.totalBudget)}
        min={0}
        max={total.totalBudget}
        now={total.totalSpending}
      />
    </div>
  );
}
