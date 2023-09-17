import { KeyboardEvent, useContext, useState } from 'react';
import { TodosContext } from '../context/TodosProvider';

export const AddTodo = () => {
   const { addTodo } = useContext(TodosContext);

   const [text, setText] = useState('');

   const addTodoHandler = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key !== 'Enter') return;
      addTodo(text);
      setText('');
   };

   return (
      <input
         type="text"
         value={text}
         data-e2e='todo:add'
         placeholder="What needs to be done?"
         onChange={(e) => setText(e.target.value)}
         onKeyDown={addTodoHandler}
         className="focus:outline-none py-4 px-6 border-b-gray-300 border-b-[1.5px] rounded-t-md text-gray-500 flex-1"
      />
   );
};
