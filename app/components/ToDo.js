import React from 'react'

function ToDo({toDoText}) {
  return (
    <div className="flex flex-row border border-solid border-gray-400 rounded bg-slate-300 items-center gap-2 hover:bg-gray-400 transition-all px-4 py-2 w-[70vw] max-w-[36rem]">
            <input
              id="checked-checkbox"
              type="checkbox"
              value=""
              className="relative top-1 w-5 h-5 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 self-start rounded "
            />
            <p className='text-purple-950 cursor-default'>{toDoText}</p>
          </div>
  )
}

export default ToDo     