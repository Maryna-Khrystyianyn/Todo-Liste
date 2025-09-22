import type { TaskItemProps } from "../../assets/types";
import { Categories } from "../../assets/categories";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons/faPenToSquare";
import { useTodos } from "../todoContext/TodoContext";
import UpdateTask from "./UpdateTask";
import { useState } from "react";

const TaskItem = ({ task }: TaskItemProps) => {
  const categoryColor: string =
    Categories.find((category) => category.id === task.categoryId)?.color ||
    "#ab9dff";
  const categoryName: string =
    Categories.find((category) => category.id === task.categoryId)?.name ||
    "Keine Kategorie";

  const { deleteTask, markDone } = useTodos();
  /*  let checked: boolean;
  useEffect(() => {
    checked = task.status === "done";
  }, [task.status]); */

  const taskOpacity = task.status === "done" ? 0.3 : 1;
  const [displayModal, setDisplayModal] = useState<string>("none");
  console.log(task);
  return (
    <div
      style={{ borderTop: `2px solid ${categoryColor}`, opacity: taskOpacity }}
      className=" bg-white p-5 shadow-lg sm:h-[250px] h-[350px] flex flex-col justify-between"
    >
      <div style={{ display: displayModal }}>
        <div className="w-screen h-screen fixed top-0 left-0 bg-gray-500 opacity-20 z-1"></div>
        <div className="fixed top-20 left-[10%] w-[80%] md:left-[25%] md:w-[50%] lg:left-[30%] lg:w-[40%] xl:left-[35%] xl:w-[30%] z-20">
          <div className="w-wull relative">
            <button
              onClick={() => setDisplayModal("none")}
              className="absolute top-3 right-5 z-30 font-bold text-2xl cursor-pointer"
            >
              x
            </button>
            <UpdateTask task={task} />
          </div>
        </div>
      </div>

      <div>
        <div className="flex  justify-between items-center border-b-2 mb-3 border-gray-300">
          <div className="text-sm text-gray-500">
            <p className="text-xl font-bold text-gray-700">{task.name}</p>
            <p>
              Kategorie:{" "}
              <span style={{ color: categoryColor }}> {categoryName}</span>
            </p>
            
            <p className="text-lg  text-gray-700 italic">{task.status==="updated"&&<span>Updated: </span>}{new Date(task.updated).toLocaleDateString()}</p>
            {task.status!=="done"&&<p >Dafür brauchst du <span className="font-bold"> {task.durationInUhr}</span> Stunde(n)</p>}
            {task.status==="done"&&<p className="text-xl  text-green-800 font-bold" >Erledigt am <span className="font-bold"> {new Date(task.dateToComplete).toLocaleDateString()}</span></p>}
          </div>
          <div>
            <input
              type="checkbox"
              checked={task.status === "done"}
              className="w-6 h-6  accent-green-600 "
              style={{ borderColor: categoryColor }}
              onChange={() => markDone(task.id)}
            />
          </div>
        </div>
        <p>{task.description}</p>
      </div>
      <div className="flex justify-end gap-3" style={{ color: categoryColor }}>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => {
            if (task.status !== "done") {
              setDisplayModal("block");
            }
          }}
          className="text-2xl cursor-pointer"
        />
        <FontAwesomeIcon
          onClick={() => {
            deleteTask(task.id);
          }}
          icon={faTrash}
          className="text-2xl cursor-pointer"
        />
      </div>
    </div>
  );
};

export default TaskItem;
