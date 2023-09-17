import { useContext } from 'react';
import { TodosContext } from '../context/TodosProvider';
import { Filter } from '../hooks/useTodos';

export const TodosMenu = () => {
   const {
      totalLeft,
      filter: activeFilter,
      removeCompletedTodos,
      setFilter,
   } = useContext(TodosContext);

   return (
      <div className="py-2 px-2 border-t-[1.5px] border-t-gray-300 flex justify-between">
         <div data-e2e="todo:counter">
            {totalLeft === 0 ? 'No items!' : <h2>{totalLeft} items left</h2>}
         </div>
         <div className="flex space-x-2">
            {Object.values(Filter).map((filter) => (
               <div
                  key={filter}
                  onClick={() => setFilter(filter)}
                  data-e2e={`todo:filter:${filter.toLowerCase()}`}
                  className={`cursor-pointer hover:text-gray-800 ${
                     filter === activeFilter ? 'text-gray-800 font-light' : ''
                  }  `}
               >
                  {filter}
               </div>
            ))}
         </div>
         <button
            onClick={removeCompletedTodos}
            data-e2e="todo:delete"
            className="hover:text-gray-800"
         >
            Clear completed
         </button>
      </div>
   );
};
