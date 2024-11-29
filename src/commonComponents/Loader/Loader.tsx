import React from "react";
import { LoaderPropsType } from "../../types";

const Loader: React.FC<LoaderPropsType> = ({
  height = 20,
  width = 20,
  color = "white",
  radius = 3,
}: LoaderPropsType) => {
  return (
    <div className="flex flex-row justify-center items-center">
      <div
        style={{
          display: "inline-block",
          width: `${width}px`,
          height: `${height}px`,
          border: `${radius}px solid ${color}`,
          borderRadius: "50%",
          borderTopColor: "transparent",
          animation: "spin 1s linear infinite",
        }}
      ></div>
    </div>
  );
};

export default Loader;
