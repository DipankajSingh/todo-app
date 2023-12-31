"use client";
import Image from "next/image";
import React from "react";
import { Provider } from "react-redux";
import InputField from "./components/InputField";
import AllTodosLists from "./components/AllTodosLists";
import { store } from "./reduxStore/store";

export default function Home() {
  

  return (
    <>
    <Provider store={store}>
      <div className="p-2 flex flex-col w-full relative items-center">
        <nav className="flex ">
          <h1 className="text-[2.5rem] text-purple-700 font-extrabold">ToDo</h1>
          <button
            
            className=" absolute right-6 top-4"
          >
            <Image
              src={"/history.png"}
              alt="see history"
              height={35}
              width={35}
            />
          </button>
        </nav>
        <span className="relative mb-4 h-[2px] w-11/12 bg-gradient-to-r from-[#D6DBDC] via-purple-600 to-[#D6DBDC]"></span>
        <InputField />
        <AllTodosLists />
      </div>
      </Provider>
    </>
  );
}
