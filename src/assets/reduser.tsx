import type { Action, State, Todo, TodoStatus } from "./types";
import { getId } from "./utils";

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "NEW_TASK": {
      const { name, description, categoryId, durationInUhr } = action;
      console.log("wir sind in dispatch");
      const newTask: Todo = {
        id: getId() as unknown as string,
        name,
        description,
        updated: new Date(),
        dateToComplete: null,
        categoryId,
        status: "new" as TodoStatus,
        durationInUhr,
      };
      return {
        ...state,
        todos: [newTask, ...state.todos],
      };
    }
    case "UPDATE_TASK": {
      const { name, description, categoryId, durationInUhr, todoId } = action;
      const updatedTask: Todo = {
        id: todoId,
        name,
        description,
        updated: new Date(),
        dateToComplete: null,
        categoryId,
        status: "updated" as TodoStatus,
        durationInUhr,
      };
      return {
        ...state,
        todos: state.todos.map((task) =>
          task.id === todoId ? updatedTask : task
        ),
      };
    }
    case "DONE_TASK": {
      const { todoId } = action;
      const statusItem = state.todos.find((item) => item.id === todoId)?.status;
      const statusReturn = statusItem === "done" ? "new" as TodoStatus : "done" as TodoStatus;
      return {
        ...state,
        todos: state.todos.map((task) =>
          task.id === todoId
            ? { ...task, status: statusReturn, dateToComplete: new Date() }
            : task
        ),
      };
    }
    case "DELETE_TASK": {
      const { todoId } = action;
      return {
        ...state,
        todos: state.todos.filter((task) => task.id !== todoId),
      };
    }
    default:
      return state;
  }
};

export const initialState: State = {
  todos: [],
};
