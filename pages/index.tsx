import { useState } from "react";
import Card from "../components/Card";
import CreateTaskForm from "../components/CreateTaskForm";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const deleteTask = () => {
    const tasksCopy = tasks.filter((task) => task.isCompleted === false);
    setTasks(tasksCopy);
  };

  const addTask = (task: Task) => {
    const tasksCopy = [...tasks];
    tasksCopy.push(task);
    setTasks(tasksCopy);
  };

  console.log(tasks);

  return (
    <div className="w-full h-screen flex flex-row justify-center items-center bg-zinc-100">
      <div className="flex flex-col space-y-3 min-w-[500px]">
        <CreateTaskForm addTask={addTask} />
        <Card tasks={tasks} setTasks={setTasks} deleteTask={deleteTask} />
      </div>
    </div>
  );
}
