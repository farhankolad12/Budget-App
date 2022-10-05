import "./App.css";
import Header from "./components/Header";
import BudgetContext from "./context/BudgetContext";
import Main from "./components/Main";

function App() {
  return (
    <BudgetContext>
      <Header />
      <Main />
    </BudgetContext>
  );
}

export default App;
