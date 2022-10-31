import React, { useState } from "react";
import { uuid } from "uuidv4";
import { PlusIcon } from "@heroicons/react/24/outline";
type Props = {
  addTask: (task: Task) => void;
};

export default function CreateTaskForm({ addTask }: Props) {
  const [title, setTitle] = useState("");

  const handleClick = () => {
    if (!!title) {
      addTask({
        title,
        isCompleted: false,
        taskId: uuid(),
      });
      setTitle("");
    }
  };

  return (
    <div className="flex flex-row items-center w-full">
      <input
        type="text"
        className="outline-none px-3 py-2 flex-1 h-10 rounded-l-lg"
        placeholder="Enter text..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <PlusIcon
        onClick={handleClick}
        className={`w-10 h-10 bg-white rounded-r-lg cursor-pointer hover:bg-gray-200 ${
          !!title ? "text-blue-400" : "text-gray-400"
        }`}
      />
    </div>
  );
}
