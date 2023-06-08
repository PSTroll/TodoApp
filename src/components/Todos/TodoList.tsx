import Todo from "./Todo";

const TodoList = (props) => {
  const onDeleteHandler = (id) => {
    props.onDelete(id);
  };

  const onDoneHandler = (id) => {
    props.isDone(id);
  };

  return (
    <>
      <ul
        className={`${props.className} my-8 overflow-y-auto max-h-[15rem] scrollbar-thin scrollbar-thumb-slate-600 `}
      >
        {props.todos.map((item) => (
          <Todo
            todo={item.todo}
            id={item.id}
            key={item.id}
            onDelete={onDeleteHandler}
            isDone={onDoneHandler}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
