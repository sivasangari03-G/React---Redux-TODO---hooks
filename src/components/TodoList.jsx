import React from 'react'
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom'
import { Todo } from './Todo';

export const TodoList = () => {
   const todo = useSelector(state => state.todo)
  return (
      <div>
          <h1>TODO LIST</h1>
          {
              todo.map((elem) => {
                  return (
						<Todo key={elem.id+10} elem={elem} />
					);
              })
          }
          <Outlet />
    </div>
  )
}
