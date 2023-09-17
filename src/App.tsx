import { AddTodo, TodosList, TodosMenu } from './components/';

function App() {
   return (
      <div className="w-full h-screen flex items-center justify-center bg-slate-200">
         <div className="bg-white rounded-lg shadow-md min-w-[500px] font-thin text-gray-400 flex flex-col">
            <AddTodo />
            <TodosList />
            <TodosMenu />
         </div>
      </div>
   );
}

export default App;
