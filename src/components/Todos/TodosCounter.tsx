const TodosCounter = (props) => {
  return (
    <div className={"flex"}>
      <div>
        Total Todos: <span className={"font-bold"}>{props.total}</span>
      </div>
      <div className={"mx-2"}>|</div>
      <div>
        Completed Todos: <span className={"font-bold"}>{props.completed}</span>
      </div>
    </div>
  );
};

export default TodosCounter;
