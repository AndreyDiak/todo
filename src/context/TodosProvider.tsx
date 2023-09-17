import { PropsWithChildren, createContext } from 'react';
import { UseTodos, useTodos } from '../hooks/useTodos';

interface TodosContextState extends UseTodos {}

export const TodosContext = createContext<TodosContextState>({} as TodosContextState);

export const TodosProvider = ({ children }: PropsWithChildren<unknown>) => {
   const { todos, filter, totalLeft, addTodo, handleCheckTodo, removeCompletedTodos, setFilter } =
      useTodos();

   return (
      <TodosContext.Provider
         value={{
            todos,
            filter,
            totalLeft,
            setFilter,
            addTodo,
            handleCheckTodo,
            removeCompletedTodos,
         }}
      >
         {children}
      </TodosContext.Provider>
   );
};
