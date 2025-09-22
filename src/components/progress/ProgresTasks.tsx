import Progress from "./Progress";
import type { ProgresTasksProps } from "../../assets/types";

const ProgresTasks = ({ allTasks, completed }: ProgresTasksProps) => {
  const prozent: number = allTasks
    ? Math.round((completed / allTasks) * 100)
    : 0;
  return (
    <div className="w-full grid  items-end justify-center gap-2">
     <Progress value={prozent} /> 
     <div className=" flex gap-10 justify-center items-center">
        <p>
          Du hast <span className="text-orange-400 text-xl font-bold">{allTasks}</span>{" "}
          Tasks
        </p>
        <p>
          Es sind <span className="text-[#5cc8a4] text-xl font-bold">{completed}</span>{" "}
          Tasks geschafft
        </p>
      </div>

      
    </div>
  );
};

export default ProgresTasks;
