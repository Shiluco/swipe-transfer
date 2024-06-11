import React, { useEffect } from "react";
import { DndContext } from "@dnd-kit/core";
import GetStationItem from "./Draggable/DragStationItem";
import StationDropArea from "./Droppable/StationDropArea";
import "./styles/OneStation.css";

const OneStation = (props: {
  options: any;
  draggingStation: any;
  setDraggingStation: any;
  handleDrop: any;
}) => {
  const { options, draggingStation, setDraggingStation, handleDrop } = props;

  const defaultAnnouncements = {
    onDragStart(event: any) {
      setDraggingStation(options);
      console.log("drag start:", options);
    },

    onDragEnd(event: any) {
      {
        console.log("drag end:");
        const { over, active } = event;
        if (!over || !active.data.current) {
          return;
        }

        const start = active.data.current.label;
        const goal = over.data.current?.label; // Add null check here

        console.log("drag end:", "start:", start, "end:", goal);

        if (start && goal) {
          handleDrop(start, goal);
        }
      }
    },
  };

  return (
    <>
      <DndContext
        onDragStart={defaultAnnouncements.onDragStart}
        onDragEnd={defaultAnnouncements.onDragEnd}
      >
        <div className="station-container">
          {options.map((option: string) => (
            <div className="station-low">
              <span className="station-name">{option}</span>

              <div className="station-item"></div>

              <GetStationItem id={option} label={option} />

              <StationDropArea
                id={option}
                label={option}
                children={undefined}
              />
            </div>
          ))}
        </div>
      </DndContext>
    </>
  );
};
export default OneStation;
