import { CheckCircleIcon } from "@heroicons/react/24/outline";

type Props = {
  task: Task;
  selectTask: (task: Task) => void;
};

export default function Task({ task, selectTask }: Props) {
  const handleClick = () => {
    selectTask(task);
  };

  return (
    <div
      className={`${
        task.isCompleted && "!bg-gray-100"
      } hover:bg-gray-100 px-3 py-2 cursor-pointer flex justify-between rounded-md text-xl`}
      onClick={handleClick}
      data-cy='todo'
    >
      <p
        className={
          task.isCompleted
            ? "line-through decoration-gray-800 text-gray-600"
            : "text-gray-800"
        }
      >
        {task.title}
      </p>
      {task.isCompleted && (
        <CheckCircleIcon className="h-6 w-6 text-green-400" />
      )}
    </div>
  );
}
