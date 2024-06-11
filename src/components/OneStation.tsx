import React, { useEffect } from "react";
import { DndContext } from "@dnd-kit/core";
import GetStationItem from "./Draggable/DragStationItem";
import StationDropArea from "./Droppable/StationDropArea";
import "./styles/OneStation.css";

const OneStation = (props: {
  option: any;
  draggingStation: any;
  setDraggingStation: any;
  handleDrop: any;
}) => {
  const { option, draggingStation, setDraggingStation, handleDrop } = props;

  // useEffect(() => {
  //   console.log("Current draggingStation:", draggingStation);
  // }, [draggingStation]);

  return (
    <div className="station-container">
      <span className="station-name">{option}</span>
      <DndContext
        onDragStart={(event) => {
          setDraggingStation(option);
          console.log("drag start");
        }}
        onDragEnd={(event) => {
          const { over, active } = event;
          if (over == null || active.data.current == null) {
            return;
          }

          console.log(
            "drag end",
            "start:",
            active.data.current,
            "end:",
            over.data.current
          );

          if (active.data.current !== null || over.data.current !== null) {
            const start = active.data.current.label;
            const goal = over.data.current?.label; // Add null check here
            handleDrop(start, goal);
          }
        }}
      >
        <div className="station-icon">
          <GetStationItem id="A" label={option} />
          <StationDropArea id="A" label={option} children={undefined} />
        </div>
      </DndContext>
    </div>
  );
};
export default OneStation;
