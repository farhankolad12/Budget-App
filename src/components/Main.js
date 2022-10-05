import React from "react";
import { useBudgets } from "../context/BudgetContext";
import BudgetCard from "./BudgetCard";
import AddExpenseModal from "./AddExpenseModal";

import TotalBudget from "./TotalBudget";

export default function Main() {
  const { budgets } = useBudgets();

  const newBudgets = budgets.sort((budget, bg) => {
    return budget.createdAt - bg.createdAt;
  });

  return (
    <>
      <main>
        <div className="all-budgets p-3">
          {newBudgets.map((budget) => {
            return <BudgetCard key={budget.id} budget={budget} />;
          })}
          <TotalBudget budgets={budgets} />
        </div>
      </main>
      <AddExpenseModal />
    </>
  );
}
