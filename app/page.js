import Image from "next/image";
import React from "react";
import ToDo from "./components/ToDo";
export default function Home() {
  return (
    <>
      <div className="p-2 flex flex-col w-full relative items-center">
        <nav className="flex ">
          <h1 className="text-[2.5rem] text-purple-700 font-extrabold">ToDo</h1>
          <button className=" absolute right-6 top-4">
            <Image
              src={"/history.png"}
              alt="see history"
              height={35}
              width={35}
            />
          </button>
        </nav>
        <span className="relative mb-4 h-[2px] w-11/12 bg-gradient-to-r from-[#D6DBDC] via-purple-600 to-[#D6DBDC]"></span>
        <div className="flex flex-row relative  mx-12 mb-4">
          <input
          placeholder="Add a task"
            type="text"
            className="h-12 pl-4 w-[80vw] text-purple-950 focus:outline-none max-w-[37rem] rounded rounded-tr-none rounded-br-none"
          />
          <button className=" bg-gradient-to-r from-white to-purple-400 px-4 transition-all hover:to-purple-500 rounded-tr rounded-br">
            <Image src={"/addToDo.png"} width={35} height={35} alt="add todo" />
          </button>
        </div>
        <div className="flex flex-col gap-2">
         <ToDo toDoText={"Use this default example of a checkbox element in a checked and unchecked state."}></ToDo>
         <ToDo toDoText={"Use this default example of a "}></ToDo>
         <ToDo toDoText={"Use this default example of a ."}></ToDo>
        </div>
      </div>
    </>
  );
}
