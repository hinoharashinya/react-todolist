import './App.css';
import {useState} from "react";
import {InputTodo} from "./components/InputTodo";
import { IncompleteTodos } from './components/IncompleteTodos';
import { CompleteTodos } from './components/CompleteTodos';

function App() {
  const [inputTodo, setInputTodo] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeInputTodo = (e) => {
    setInputTodo(e.target.value);
  }

  const onClickAdd = () => {
    if(inputTodo === "") return;
    const newTodos = [...incompleteTodos, inputTodo];
    setIncompleteTodos(newTodos);
    setInputTodo("");
  }

  const onClickDelete = (i) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(i, 1);
    setIncompleteTodos(newTodos);
  }

  const onClickComplete = (i) => {
    const newIncompleteTodos = [...incompleteTodos];
    const newCompleteTodos = [...completeTodos, incompleteTodos[i]];

    newIncompleteTodos.splice(i, 1);

    setCompleteTodos(newCompleteTodos)
    setIncompleteTodos(newIncompleteTodos);
  }

  const onClickReturn = (i) => {
    const newIncompleteTodos = [...incompleteTodos, completeTodos[i]];
    const newCompleteTodos = [...completeTodos];

    newCompleteTodos.splice(i, 1);

    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  }

  return (
    <div className="App-header">
      <h1>TODOリスト</h1>
      <InputTodo inputTodo={inputTodo} onChangeInputTodo={onChangeInputTodo} onClickAdd={onClickAdd}/>
      <IncompleteTodos incompleteTodos={incompleteTodos} onClickComplete={onClickComplete} onClickDelete={onClickDelete} />
      <CompleteTodos completeTodos={completeTodos} onClickReturn={onClickReturn}/>
    </div>
  );
}

export default App;
