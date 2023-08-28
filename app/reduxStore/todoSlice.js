import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialStateValue={
    todoLists:[{id:1,text:"hello world"}]
}

export const todoSlice = createSlice({
    name:'todo-redux-slice',
    initialState:initialStateValue,

    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todoLists.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todoLists=state.todoLists.filter((val)=>state.todoLists.id!==val)
        }
    }
})


export const {addTodo,removeTodo}=todoSlice.actions

export const todoReducer= todoSlice.reducer