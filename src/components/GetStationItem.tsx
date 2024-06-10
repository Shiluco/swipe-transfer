import React, { useEffect } from "react";
import { useDrag } from "react-dnd";
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
  const handleDragStart = () => {
    console.log("Drag started");
  };

  const handleDragEnd = () => {
    console.log("Drag ended");
  };

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.BIRD,
      item: () => {
        handleDragStart();
        // setDraggingStation(stationName);
        return { name: stationName, type: ItemTypes.BIRD };
      },
      end: (item, monitor) => {
        handleDragEnd();
        setDraggingStation(null);
      },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [stationName]
  );

  useEffect(() => {
    // console.log(`isDragging: ${isDragging}`);
    setDraggingStation(isDragging ? stationName : null);
  }, [isDragging, setDraggingStation, stationName]);

  return (
    <div ref={drag} className={`station-item ${isDragging ? "dragging" : ""}`}>
      <img id="start" src={start} alt="start" />
    </div>
  );
};

export default GetStationItem;
