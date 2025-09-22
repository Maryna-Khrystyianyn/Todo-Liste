import { useEffect, useState } from "react";
import type { ProgressProps } from "../../assets/types";

const Progress = ({ value, color = "#5cc8a4" }: ProgressProps) => {
  const [progress, setProgress] = useState<number>(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setProgress(value);
    }, 500);
    return ()=>clearTimeout(timeout)
  },[value]);

  return (

    <div>
      <div className=" w-screen h-6 bg-gray-200 overflow-hidden">
        <div
          className="h-full  rounded-r-full transition-all duration-2000"
          style={{ width: `${progress}%`, background: color }}
        ></div>
      </div>
    </div>
  );
};

export default Progress;
