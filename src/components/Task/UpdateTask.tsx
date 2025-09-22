import { useState } from "react";
import { Categories } from "../../assets/categories";
import type { Todo, UpdateTaskProps } from "../../assets/types";
import { useTodos } from "../todoContext/TodoContext";

const UpdateTask = ({ task }: UpdateTaskProps) => {
 const [todo, setTodo] = useState<Todo>({
    id: task.id,
    name: task.name,
    description: task.description,
    updated: new Date(),
    dateToComplete: null,
    categoryId: task.categoryId,
    status: "updated",
    durationInUhr: task.durationInUhr,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setTodo((prev) => ({
      ...prev,
      [name]: name === "durationInUhr" ? Number(value) : value,
    }));
  };
const { updateTask } = useTodos();

  return (
    <div className="bg-white w-wull rounded-xl p-10">
      <form  onSubmit={()=>{ updateTask(task.id,todo.name, todo.description, todo.categoryId,todo.durationInUhr);}} className="flex flex-col gap-3">
        {/* Taskname */}
        <div className="flex flex-col">
          <label>Taskname</label>
          <input
            name="name"
            type="text"
            onChange={handleChange}
            required
            value={todo.name}
           
            className="p-1 border-light border-2 rounded-full"
          />
        </div>

        {/* Kategorie */}
        <select
          name="categoryId"
          value={todo.categoryId}
          onChange={handleChange}
          className="rounded-full py-2"
        >
          <option value="" disabled>
            Wähle eine Kategorie
          </option>
          {Categories.map((category) => (
            <option
              key={category.id}
              value={category.id}
              style={{ background: category.color }}
            >
              {category.name}
            </option>
          ))}
        </select>

        {/* Beschreibung */}
        <div className="flex flex-col">
          <label>Taskbeschreibung</label>
          <textarea
            name="description"
            value={todo.description ? todo.description : ""}
            onChange={handleChange}
            className="p-1 border-light border-2 rounded-2xl"
            rows={5}
          />
        </div>

        {/* Dauer in Stunden */}
        <div className="flex gap-5 items-center">
          <label>Dauer in Stunden</label>
          <input
            name="durationInUhr"
            type="number"
            required
            value={todo.durationInUhr}
            onChange={handleChange}
            className="py-1 border-light border-2 rounded-full px-3 w-30"
          />
        </div>

        <button
          type="submit"
          className="bg-gradient-to-b from-light to-main text-white shadow-md shadow-gray-400 font-bold p-2 w-50 rounded-4xl"
        >
          Task speichern
        </button>
      </form>
    </div>
  );
};

export default UpdateTask;
