import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Todo from "./pages/Statistics";
import Header from "./components/header/Header";
import { useEffect, useReducer } from "react";
import { reducer } from "./assets/reduser";
import type { State } from "./assets/types";
import { TodoProvider } from "./components/todoContext/TodoContext";
import Statistics from "./pages/Statistics";

/* const initialState: State ={
  todos:[]
} */
/* const STORAGE_KEY="Todo-list" */

function App() {
  /*   const [state, dispatch] = useReducer(reducer, initialState,(base) => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as State) : base;
    } catch {
      return base;
    }
  }); */

/*   useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {}
  }, [state]); */

  /*   const addTask = (
    name: string,
    description: string | null,
    categoryId: string,
    durationInUhr: number
  ) => {
    dispatch({
      type: "NEW_TASK",
      name,
      description,
      categoryId,
      durationInUhr,
    });
  }; */

  return (
    <TodoProvider>
      <div className="">
        <Header/>
        <Routes>
          <Route
            path="/"
            element={<Home/>}
          />
          <Route path="/:id" element={<Statistics />} />
        </Routes>
      </div>
    </TodoProvider>
  );
}

export default App;
