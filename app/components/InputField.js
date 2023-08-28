import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Image from "next/image";
import { addTodo } from "../reduxStore/todoSlice";
function InputField() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  function addTodoHandler(e) {
    if (input === "") return;
    if (input.trim() === "") {
      setInput('')
      return
    }
    dispatch(addTodo(input));
    setInput("");
  }
  return (
    <div className="flex flex-row relative  mx-12 mb-4">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a task"
        type="text"
        className="h-12 pl-4 w-[80vw] text-purple-950 focus:outline-none max-w-[37rem] rounded rounded-tr-none rounded-br-none"
      />
      <button
        onClick={(e) => {
          addTodoHandler(e);
        }}
        className=" bg-gradient-to-r from-white to-purple-400 px-4 transition-all hover:to-purple-500 rounded-tr rounded-br"
      >
        <Image src={"/addToDo.png"} width={35} height={35} alt="add todo" />
      </button>
    </div>
  );
}

export default InputField;
