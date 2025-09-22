import type { Dispatch } from "react";

export type Category = {
  id:string;
  name: string;
  color: string;
};

export type TodoStatus = "new" | "updated" | "done" | "delete";

export type Todo = {
  id: string;
  name: string;
  description: string|null;
  updated: Date;
  dateToComplete: Date | null;
  categoryId:string;
  status: TodoStatus;
  durationInUhr: number;
};


export type State = {
  todos: Todo[];
};

export type Action =
  | {
      type: "NEW_TASK";
      name: string;
      description: string|null;
      categoryId:string;
      durationInUhr: number;
    }
  | {
      type: "UPDATE_TASK";
      todoId: string;
      name: string;
      description: string|null;
      categoryId:string;
      durationInUhr: number;
    }
  | { type: "DONE_TASK"; todoId: string }
  | { type: "DELETE_TASK"; todoId: string }
 

export type HeaderProps={
  addTask:(name: string, description: string|null, categoryId:string, durationInUhr: number) => void
}

export type ProgresTasksProps = {
  allTasks: number;
  completed: number;
};

export type ProgressProps = {
  value: number;
  color?: string;
};

export type AddTaskProps = {
  addTask:(name: string, description: string|null, categoryId:string, durationInUhr: number) => void;
  handelAddTaskShowInput:Function;
};



export type TaskItemProps = {
  task:Todo;
}
export type UpdateTaskProps ={
  task:Todo;
}
