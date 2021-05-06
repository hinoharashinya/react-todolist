import './App.css';
import {useState} from "react";

function App() {
  const [inputTodo, setInputTodo] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["test1","test2"]);
  const [completeTodos, setCompleteTodos] = useState(["test3", "test4"]);

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
              <button>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          )
          })}
        </ul>
      </div>
      <div>
        <h2>完了のTODO</h2>
          <ul>
            {completeTodos.map((todo) => {
            return(
              <div key={todo}>
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            )
            })}
          </ul>
        </div>
    </div>
  );
}

export default App;
