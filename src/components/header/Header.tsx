import { useState } from "react";
import type { Todo } from "../../assets/types";
import AddTask from "../Task/AddTask";
import ProgresTasks from "../progress/ProgresTasks";
import { useTodos } from "../todoContext/TodoContext";

const Header = () => {
  const [showInput, setShowInput] = useState<boolean>(false);
  const handelNewTaskClick = () => {
    setShowInput(true);
  };
  const handelAddTaskShowInput = () => {
    setShowInput(false);
  };

  const { addTask, todos } = useTodos();

  const done: Todo[] = todos.filter((item) => item.status === "done");

  return (
    <div className="flex flex-col gap-5 sm:justify-evenly items-center">
      <ProgresTasks allTasks={todos.length} completed={done.length} />
      <div className="sm:grid grid-cols-2 w-full items-center hidden pr-10 max-w-[1200px] mx-auto">
        <div className="flex flex-col justify-center items-center gap-10">
          <img
          src="../../../public/images/todo-logo.png"
          alt="todo-logo"
          className="w-[250px] h-auto"
        />

        <h1 className="text-main text-4xl font-bold ">To-do-Liste</h1> 
        </div>
       
        <AddTask
          addTask={addTask}
          handelAddTaskShowInput={handelAddTaskShowInput}
        />
      </div>
      {!showInput && (
        <img
          src="../../../public/images/todo-logo.png"
          alt="todo-logo"
          className="w-[150px] h-auto sm:hidden"
        />
      )}
      {!showInput && (
        <div className="flex flex-col items-center gap-5 sm:hidden">
          <h1 className="text-main text-4xl font-bold ">To-do-Liste</h1>
          <button
            onClick={handelNewTaskClick}
            className="bg-gradient-to-b from-light to-main text-white shadow-md shadow-gray-400 font-bold p-2 w-50 rounded-4xl"
          >
            {" "}
            Neuen Task erstallen
          </button>
        </div>
      )}

      {showInput && (
        <AddTask
          addTask={addTask}
          handelAddTaskShowInput={handelAddTaskShowInput}
        />
      )}
    </div>
  );
};

export default Header;
