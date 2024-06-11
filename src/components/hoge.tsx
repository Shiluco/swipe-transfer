import { FC, ReactNode } from "react";
import { useDroppable } from "@dnd-kit/core";
import goal from "../../assets/goal.svg";
import "../styles/StationDropArea.css";

type StationDropAreaProps = {
  children: ReactNode;
  id: string;
};

const StationDropArea: FC<StationDropAreaProps> = ({ children, id }) => {
  const { setNodeRef, isOver } = useDroppable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      className={`station-drop-area ${isOver ? "over" : ""}`}
    >
      <img id="goal" src={goal} alt="goal" />
      {children}
    </div>
  );
};

export default StationDropArea;
