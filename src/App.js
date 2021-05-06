import './App.css';

function App() {
  return (
    <div className="App-header">
      <h1>TODOリスト</h1>
      <div>
        <h2>入力エリア</h2>
        <input placeHolder="TODOを入力"/>
        <button>追加</button>
      </div>
      <div>
        <h2>未完了のTODO</h2>
        <ul>
          <li>TODO1</li>
          <button>完了</button>
          <button>削除</button>
          <li>TODO2</li>
          <button>完了</button>
          <button>削除</button>
        </ul>
      </div>
      <div>
        <h2>完了のTODO</h2>
          <ul>
            <li>TODO3</li>
            <button>戻す</button>
            <li>TODO4</li>
            <button>戻す</button>
          </ul>
        </div>
    </div>
  );
}

export default App;
