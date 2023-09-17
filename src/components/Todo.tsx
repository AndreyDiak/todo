import React, { useContext } from 'react';
import type { Todo as TodoType } from '../typings';
import { TodosContext } from '../context/TodosProvider';

interface Props {
   todo: TodoType;
}

export const Todo: React.FC<Props> = React.memo(({ todo }) => {
   const { handleCheckTodo } = useContext(TodosContext);

   return (
      <div className="flex space-x-4 items-center">
         <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleCheckTodo(todo.id)}
            data-e2e='todo:check'
            className={`p-2 border-[1px] border-gray-400 w-4 h-4 rounded-full self-center ${
               todo.completed ? 'bg-green-300 border-green-300' : ''
            }`}
            style={{
               appearance: 'none',
            }}
         />
         <h2
            className={`text-lg font-light ${
               todo.completed ? 'line-through decoration-gray-400 text-gray-400' : 'text-gray-600'
            }`}
            data-e2e='todo:item'
         >
            {todo.title}
         </h2>
      </div>
   );
});
