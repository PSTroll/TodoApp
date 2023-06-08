import React, { useRef } from "react";

const Input: FC<{ placeholder: string }> = (props) => {
  const input = useRef();

  const onClickHandler = () => {
    props.onBtnClickHandler(input.current.value);
  };

  return (
    <div className={"w-full flex"}>
      <input
        type="text"
        placeholder={props.placeholder}
        className={"w-[100%] rounded-l-md px-3 bg-gray-800 outline-none "}
        ref={input}
        maxlength="40"
      />
      <button
        className={
          "px-5 py-3 bg-blue-500 rounded-r-md hover:bg-blue-600 transition-colors duration-200"
        }
        onClick={onClickHandler}
      >
        Add
      </button>
    </div>
  );
};

export default Input;
