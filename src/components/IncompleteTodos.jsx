export const IncompleteTodos = (props) => {
  const {incompleteTodos, onClickComplete, onClickDelete} = props;
  return(
    <div style={{"backgroundColor" : "lightblue", "marginTop" : "18px", "padding" : "0px 18px"}}>
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
  );
}
