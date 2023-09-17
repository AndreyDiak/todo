import { useCallback, useMemo, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Todo } from "../typings";

export interface UseTodos {
   todos: Todo[];
   filter: Filter;
   totalLeft: number;
   setFilter(filter: Filter): void;
   addTodo(title: string): void;
   handleCheckTodo(todoId: string): void;
   removeCompletedTodos(): void;
}

export enum Filter {
   ALL = 'All',
   ACTIVE = 'Active',
   COMPLETED = 'Completed'
}

export function useTodos(): UseTodos {
   const [todos, setTodos] = useState<Todo[]>([]);
   const [filter, setFilter] = useState<Filter>(Filter.ALL);

   const totalLeft = useMemo(() => todos.filter(todo => !Boolean(todo.completed)).length, [todos]);

   const addTodo = useCallback((title: string) => {
      setTodos(prev => ([
         ...prev,
         {
            id: uuidv4(),
            title,
            completed: false
         }
      ]));
   }, []);

   const handleCheckTodo = useCallback((todoId: string) => {
      setTodos(prev => prev.map(todo => {
         if (todo.id === todoId) {
            return {
               ...todo,
               completed: !todo.completed
            }
         }
         return todo;
      })
      );
   }, []);

   const removeCompletedTodos = useCallback(() => {
      setTodos(prev => prev.filter(todo => !Boolean(todo.completed)))
   }, [])

   return useMemo(() => {

      const filteredTodos = todos.filter(todo => {
         if (filter === Filter.ALL) return todo
         if (filter === Filter.ACTIVE) return !todo.completed
         return todo.completed
      });

      return {
         todos: filteredTodos,
         filter,
         totalLeft,
         setFilter,
         addTodo,
         handleCheckTodo,
         removeCompletedTodos
      }
   }, [addTodo, filter, handleCheckTodo, removeCompletedTodos, todos, totalLeft])

}