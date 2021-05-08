export const InputTodo = (props) => {
  const {inputTodo, onChangeInputTodo, onClickAdd} = props;
  return(
    <div>
        <h2>入力エリア</h2>
        <input placeHolder="TODOを入力" value={inputTodo} onChange={onChangeInputTodo}/>
        <button onClick={onClickAdd}>追加</button>
      </div>
  );
}
