import { useContext } from 'react';
import { TodosContext } from '../context/TodosProvider';
import { Todo } from './Todo';
import { Filter } from '../hooks/useTodos';

export const TodosList = () => {
   const { todos, filter } = useContext(TodosContext);

   // no todos at all
   if (todos.length === 0 && filter === Filter.ALL) {
      return <div className="text-center text-gray-400 my-2" data-e2e='todo:createFirst'>Create first todo!</div>;
   }

   // no todos with selected filters
   if (todos.length === 0 && filter !== Filter.ALL) {
      return <div className="text-center text-gray-400 my-2" data-e2e='todo:notFound'>No {filter.toLowerCase()} todos</div>;
   }

   return (
      <div data-e2e='todo:list' className="flex flex-col space-y-1 py-4 px-6">
         {todos.map((todo) => (
            <Todo todo={todo} key={todo.id} />
         ))}
      </div>
   );
};
