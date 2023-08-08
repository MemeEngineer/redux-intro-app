import Counter from './Features/Counter/Counter';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <h1>Redux Intro APP</h1>
      <Counter/>
      <hr/>
      <TodoList/>
    </div>
  );
}

export default App;
