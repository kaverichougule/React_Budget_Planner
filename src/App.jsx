import './App.css';
import Budget from './Components/Budget';
import AddExpenses from './Components/AddExpenses';
import Context from './Components/Context';
function App() {
  
  return (
    <Context>
      <Budget />
      <AddExpenses />
    </Context>
  )
}

export default App
