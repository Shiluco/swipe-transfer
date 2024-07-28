import  { FC } from "react";
import { useDraggable } from "@dnd-kit/core";
import StartLooks from "../atoms/StartLooks";

type Props = {
  id: string;
  label: string;
};

const DragStationItem: FC<Props> = ({ id, label }) => {
  const { setNodeRef, listeners, attributes, transform, isDragging } =
    useDraggable({
      id,
      data: { label },
    });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`station-item ${isDragging ? "dragging" : ""}`}
    >
      <StartLooks isDragging={isDragging} />
    </div>
  );
};

export default DragStationItem;
