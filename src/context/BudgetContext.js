import React, { useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const BudgetProvider = React.createContext();

export function useBudgets() {
  return useContext(BudgetProvider);
}

export default function BudgetContext({ children }) {
  const [budgets, setBudgets] = useLocalStorage("budgets", []);

  function addBudgets(budget) {
    const isAlreadyInBudget = budgets.some((bg) => bg.name === budget.name);

    if (isAlreadyInBudget) return alert(`${budget.name} already in budgets`);

    return setBudgets((prev) => [...prev, budget]);
  }

  async function addExpense(id, payload) {
    budgets.forEach((budget) => {
      const isAlreadyInExpense = budget.expense.some(
        (bg) => bg.description === payload.description
      );

      if (isAlreadyInExpense) {
        return alert(`${payload.description} already in expense`);
      } else if (budget.id === id) {
        // Remove Existing Budgets Expense //
        setBudgets(budgets.filter((bg) => bg.id !== id));

        // Add New Budgets Expense //
        setBudgets((prev) => [
          ...prev,
          {
            ...budget,
            currentSpending: budget.currentSpending + payload.amount,
            expense: [...budget.expense, payload],
          },
        ]);
      }
    });
  }

  function deleteBudget(id) {
    return setBudgets(budgets.filter((budget) => budget.id !== id));
  }

  function deleteExpense(budgetId, expense) {
    budgets.forEach((budget) => {
      if (budget.id === budgetId) {
        const newExpenseArr = budget.expense.filter(
          (exp) => exp.id !== expense.id
        );
        // Remove Existing Budgets Expense //
        setBudgets(budgets.filter((bg) => bg.id !== budgetId));

        // Update Budgets Expense //
        setBudgets((prev) => [
          ...prev,
          {
            ...budget,
            currentSpending: budget.currentSpending - expense.amount,
            expense: newExpenseArr,
          },
        ]);
      }
    });
  }

  const value = {
    budgets,
    addBudgets,
    addExpense,
    deleteBudget,
    deleteExpense,
  };

  return (
    <BudgetProvider.Provider value={value}>{children}</BudgetProvider.Provider>
  );
}
