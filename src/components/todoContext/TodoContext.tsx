import { createContext, useContext, useEffect, useReducer, type ReactNode } from "react";
import { reducer, initialState } from "../../assets/reduser";
import type { State, Todo } from "../../assets/types";

const STORAGE_KEY = "Todo-list";

const TodosContext = createContext<{
  todos: Todo[],
  addTask: (
    name: Todo["name"],
    description: Todo["description"],
    categoryId: Todo["categoryId"],
    durationInUhr: Todo["durationInUhr"]
  ) => void;
  updateTask: (
    todoId: Todo["id"],
    name: Todo["name"],
    description: Todo["description"],
    categoryId: Todo["categoryId"],
    durationInUhr: Todo["durationInUhr"]
  ) => void;
  markDone: (id: Todo["id"]) => void;
  deleteTask: (id: Todo["id"]) => void;
}>({ todos: [] } as any);

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState, (base) => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as State) : base;
    } catch {
      return base;
    }
  });

  const value = {
    todos:state.todos,
    addTask(
      name: string,
      description: string | null,
      categoryId: string,
      durationInUhr: number
    ) {
      dispatch({
        type: "NEW_TASK",
        name,
        description,
        categoryId,
        durationInUhr,
      });
    },
    updateTask(
      todoId: string,
      name: string,
      description: string | null,
      categoryId: string,
      durationInUhr: number
    ) {
      dispatch({
        type: "UPDATE_TASK",
        todoId,
        name,
        description,
        categoryId,
        durationInUhr,
      });
    },
    deleteTask(todoId: string) {
      dispatch({
        type: "DELETE_TASK",
        todoId,
      });
    },

    markDone(todoId: string) {
      dispatch({
        type: "DONE_TASK",
        todoId,
      });
    },
  };

 useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {}
  }, [state]);

  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
};

export const useTodos = () => useContext(TodosContext);
