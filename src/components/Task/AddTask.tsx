import { useState } from "react";
import type { Todo, AddTaskProps } from "../../assets/types";
import { Categories } from "../../assets/categories";

const AddTask = ({ addTask, handelAddTaskShowInput }: AddTaskProps) => {
  const [todo, setTodo] = useState<Todo>({
    id: "",
    name: "",
    description: "",
    updated: new Date(),
    dateToComplete: null,
    categoryId: "",
    status: "new",
    durationInUhr: 1,
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Neues Todo:", todo);
    if (addTask) {
      console.log("hallo new task")
      addTask(todo.name, todo.description, todo.categoryId, todo.durationInUhr);
      setTodo({
        id: "",
        name: "",
        description: "",
        updated: new Date(),
        dateToComplete: null,
        categoryId: "",
        status: "new",
        durationInUhr: 1,
      }); 
       handelAddTaskShowInput();
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        {/* Taskname */}
        <div className="flex flex-col">
          <label>Taskname</label>
          <input
            name="name"
            type="text"
            required
            value={todo.name}
            onChange={handleChange}
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
            value= {todo.description?todo.description:""}
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
          Task hinzufügen
        </button>
      </form>
    </div>
  );
};

export default AddTask;
