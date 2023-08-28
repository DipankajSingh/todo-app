import React from "react";
import { useSelector } from "react-redux";
import ToDo from "./ToDo";
function AllTodosLists() {
  const todosLists = useSelector((state) => state["todoLists"]);
  console.log(todosLists);

  return (
    <div className="flex flex-col gap-2">
      {todosLists.map((val) => (
        <ToDo key={val.id} toDoText={val.text}/>
      ))}
    </div>
  );
}

export default AllTodosLists;
