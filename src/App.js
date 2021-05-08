import './App.css';
import {useState} from "react";

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
      <div>
        <h2>入力エリア</h2>
        <input placeHolder="TODOを入力" value={inputTodo} onChange={onChangeInputTodo}/>
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div>
        <h2>未完了のTODO</h2>
        <ul>
          {incompleteTodos.map((todo, index) => {
          return(
            <div key={todo}>
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          )
          })}
        </ul>
      </div>
      <div>
        <h2>完了のTODO</h2>
          <ul>
            {completeTodos.map((todo, index) => {
            return(
              <div key={todo}>
                <li>{todo}</li>
                <button onClick={() => onClickReturn(index)}>戻す</button>
              </div>
            )
            })}
          </ul>
        </div>
    </div>
  );
}

export default App;
