interface Task {
  title: string;
  isCompleted: false;
  taskId: string;
}

type Filter = "ALL" | "ACTIVE" | "COMPLETED";
