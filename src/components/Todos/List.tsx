import Card from "../UI/Card";
import Input from "../UI/Input";
import TodoList from "./TodoList";
import TodosCounter from "./TodosCounter";
import { useState, useEffect } from "react";

const DUMMY_TODOS: { id: number; todo: string } = [
  {
    id: 0,
    todo: "Make a dinner",
    isDone: false,
  },
  {
    id: 1,
    todo: "Learn React",
    isDone: false,
  },
  {
    id: 2,
    todo: "Read a book",
    isDone: false,
  },
];

const List = () => {
  const [todos, setTodos] = useState(DUMMY_TODOS);
  const [id, setId] = useState(DUMMY_TODOS.length);
  const [totalTodos, setTotalTodos] = useState(todos.length);
  const [completedTodos, setCompletedTodos] = useState(0);

  useEffect(() => {
    setTotalTodos(todos.length);
  }, [todos.length]);

  const btnClickHandler = (text) => {
    let upperText = text.charAt(0).toUpperCase() + text.substr(1);
    if (text.length > 0) {
      setTodos((prevTodos) => {
        return [...prevTodos, { id, todo: upperText, isDone: false }];
      });
      setId((prevId) => prevId + 1);
    }
  };

  const getCompletedHandler = (id) => {
    todos.map((item) => {
      if (item.id === id) {
        setCompletedTodos((completed) => completed + 1);
        item.isDone = true;
      }
    });
  };

  const deleteHandler = (id) => {
    setTodos((prevTodos) => prevTodos.filter((item) => item.id != id));
    todos.map((item) => {
      if (item.id === id && item.isDone === true) {
        setCompletedTodos((completed) => completed - 1);
      }
    });
  };

  return (
    <Card
      className={
        "text-text-color bg-background-header px-20 py-8 min-w-[35em] m-auto tablet:min-w-[12em] tablet:px-10 tablet:mx-2 "
      }
    >
      <h1 className={"font-bold text-xl pb-4"}>TaskMaster</h1>
      <Input
        placeholder="Add a new todo..."
        onBtnClickHandler={btnClickHandler}
      />
      <TodoList
        todos={todos}
        onDelete={deleteHandler}
        isDone={getCompletedHandler}
      />
      <TodosCounter completed={completedTodos} total={totalTodos} />
    </Card>
  );
};

export default List;
