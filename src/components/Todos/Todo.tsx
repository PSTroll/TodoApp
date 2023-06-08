import Card from "../UI/Card";
import { useState } from "react";

const confirm = "✅";
const cancel = "❌";

const Todo: FC<{ todo: string; id: number }> = (props) => {
  const [isDone, setIsDone] = useState(false);

  const onDeleteHandler = () => {
    props.onDelete(props.id);
  };

  const doneHandler = () => {
    setIsDone(true);
    props.isDone(props.id);
  };

  return (
    <div
      className={"flex justify-between p-4 bg-background-main rounded-lg my-2"}
    >
      {isDone && (
        <>
          <div className={"line-through text-gray-600"}>{props.todo}</div>
          <p className={"hover:cursor-pointer"} onClick={onDeleteHandler}>
            {cancel}
          </p>
        </>
      )}
      {!isDone && (
        <>
          <div>{props.todo}</div>
          <div className={"flex"}>
            <p className={"hover:cursor-pointer"} onClick={doneHandler}>
              {confirm}
            </p>
            <p className={"hover:cursor-pointer"} onClick={onDeleteHandler}>
              {cancel}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Todo;
