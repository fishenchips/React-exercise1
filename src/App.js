import logo from './logo.svg';
import './App.css';
//importing Todo.js
import TodoApp from './components/TodoApp';

function App() {
  return (
    <div className="App">
      {/* importing compontent TodoApp */}
      <TodoApp />
    </div>
  );
}

export default App;
