import { useEffect, useState } from "react";
import Line from "./Line";
import Task from "./Task";

type Props = {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
  deleteTask: () => void;
};

function Card({ tasks, setTasks, deleteTask }: Props) {
  const [filter, setFilter] = useState<Filter>("ALL");
  const [filtered, setFiltered] = useState<Task[]>(tasks);

  const selectTask = (newTask: Task) => {
    const newTasks = tasks.map((task) => {
      if (task.taskId === newTask.taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasks(newTasks as Task[]);
  };

  useEffect(() => {
    const filtered = tasks
      .filter((task) => {
        if (filter === "ALL") return task;
        if (filter === "ACTIVE") {
          return task.isCompleted === false;
        } else {
          return task.isCompleted;
        }
      })
      setFiltered(filtered);
  }, [filter, tasks]);

  return (
    <div className="bg-white rounded-sm shadow-lg py-2 px-4">
      {/* Titls */}
      <h2 className="text-center text-5xl font-sans">TODO</h2>

      {/* Divider */}
      <Line />

      {/* Tasks */}
      <div className="flex flex-col space-y-2">
        {!!filtered.length ? filtered.map((task) => (
        <Task key={task.taskId} task={task} selectTask={selectTask} />
      )) : (
        <div className="text-center text-gray-400">No tasks...</div>
      )}
      </div>
      {/* Divider */}
      <Line />
      {/* Menu */}
      <div className="flex flex-row justify-between">
        <div className="text-gray-400">
          {tasks.filter((task) => task.isCompleted === false).length} items left
        </div>
        <div className="flex flex-row space-x-2">
          <div
            onClick={() => setFilter("ALL")}
            className={`item ${filter === "ALL" && "underline"}`}
          >
            All
          </div>
          <div
            onClick={() => setFilter("ACTIVE")}
            className={`item ${filter === "ACTIVE" && "underline"}`}
          >
            Active
          </div>
          <div
            onClick={() => setFilter("COMPLETED")}
            className={`item ${filter === "COMPLETED" && "underline"}`}
          >
            Completed
          </div>
        </div>
        <div
          onClick={deleteTask}
          className={`item text-red-400 hover:text-red-600`}
        >
          Clear completed
        </div>
      </div>
    </div>
  );
}

export default Card;
