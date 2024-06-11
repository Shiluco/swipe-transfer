import { FC, ReactNode } from "react";
import { useDroppable } from "@dnd-kit/core";

// Import files
import goal from "../../assets/goal.svg";
import "../styles/StationDropArea.css";

type StationDropAreaProps = {
  children: ReactNode;
  id: string;
  label: string;
  // accept: string[];
};

const StationDropArea: FC<StationDropAreaProps> = ({ children, id, label }) => {
  const { setNodeRef, isOver } = useDroppable({
    id,
    data: { label },
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
