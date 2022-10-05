import React from "react";
import AddBudgetModal from "./AddBudgetModal";

export default function Header() {
  return (
    <>
      <AddBudgetModal />
      <header className="bg-light">
        <nav className="navbar navbar-expand navbar-light container">
          <h3 className="navbar-brand">Budget App</h3>
          <div className="ms-auto">
            <ul className="navbar-nav d-flex gap-2">
              <li className="nav-item">
                <button
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#add-budget"
                >
                  Add Budget
                </button>
              </li>
              <li className="nav-item">
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#add-expense"
                  className="btn btn-outline-danger"
                >
                  Add Expense
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
