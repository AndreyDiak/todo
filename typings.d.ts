interface Task {
  title: string;
  isCompleted: boolean;
  taskId: string;
}

type Filter = "ALL" | "ACTIVE" | "COMPLETED";
