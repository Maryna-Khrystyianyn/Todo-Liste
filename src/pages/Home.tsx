import { useState } from "react";
import { Categories } from "../assets/categories";
import TaskItem from "../components/Task/TaskItem";
import { useTodos } from "../components/todoContext/TodoContext";
import type { Todo } from "../assets/types";

const Home = () => {
  const { todos } = useTodos();
  const [selectedDisplayed, setSelectedDisplayed] = useState<string>("all");
  let selectedTodos: Todo[] = todos;
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDisplayed(e.target.value);
  };
if (selectedDisplayed==="all"){
  selectedTodos = todos;
} else if (selectedDisplayed==="notDone"){
  selectedTodos = todos.filter((item)=>item.status!=="done")
} else{
  selectedTodos = todos.filter((item)=>item.categoryId===selectedDisplayed)
}


  return (
    <div className="bg-gray_light w-screen mt-5">
      <div className="max-w-[1200px] mx-auto px-10 pb-7">
        <div>
          <select
            name="dislayed"
            value={selectedDisplayed}
            onChange={handleChange}
            className=" p-2 my-5 text-2xl outline-none  w-full sm:w-[320px] "
          >
            <option className="text-2xl" value="all">
              Alle Tasks
            </option>
            <option
              className="text-white text-2xl bg-green-700"
              value="notDone"
            >
              Unerledigte Aufgabe
            </option>

            {Categories.map((category) => (
              <option
                key={category.id}
                value={category.id}
                className="text-xl"
                style={{ background: category.color }}
              >
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {selectedTodos.map((todo) => (
            <div key={todo.id} className="flex-grow ">
              <TaskItem task={todo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
