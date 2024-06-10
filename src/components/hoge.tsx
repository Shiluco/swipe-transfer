import React, { useEffect } from "react";
import { useDrag, DragSourceMonitor } from "react-dnd";
import start from "../assets/start.svg";

const ItemTypes = {
  BIRD: "bird",
};

const GetStationItem = ({
  stationName,
  setDraggingStation,
}: {
  stationName: string;
  setDraggingStation: (station: string | null) => void;
}) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.BIRD,
      item: { name: stationName, type: ItemTypes.BIRD },
      end: (item, monitor: DragSourceMonitor) => {
        const dropResult = monitor.getDropResult();
        setDraggingStation(null);
      },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [stationName]
  );

  useEffect(() => {
    console.log(`isDragging: ${isDragging}`);
  }, [isDragging]);

  return (
    <div
      ref={drag}
      className={`station-item ${isDragging ? "dragging" : ""}`}
      key={start}
    >
      <img id="start" src={start} alt="start" />
    </div>
  );
};

export default GetStationItem;


