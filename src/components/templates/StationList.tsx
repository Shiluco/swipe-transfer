//modules
import { DndContext } from "@dnd-kit/core";
import GetStationItem from "../molecules/DragStationItem";
import StationDropArea from "../atoms/StationDropArea";
//files
import "../styles/StationList.css";
//types
import { StationListProps } from "../../types/StationListProps";

const StationList = (props: StationListProps) => {
  const { options, draggingStation, setDraggingStation, handleDrop } = props;

  const defaultAnnouncements = {
    onDragStart(event: any) {
      const option = event.active.data.current?.label;
      setDraggingStation(option);
      console.log("drag start:", option);
    },

    onDragEnd(event: any) {
      {
        console.log("drag end:");
        const { over, active } = event;
        if (!over || !active.data.current) {
          setDraggingStation(null);
          return;
        }

        const start = active.data.current.label;
        const goal = over.data.current?.label; // Add null check here

        console.log("drag end:", "start:", start, "end:", goal);

        if (start && goal) {
          handleDrop(start, goal);
        }

        setDraggingStation(null);
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

              <div className="station-item">
                {draggingStation === null || draggingStation === option ? (
                  <GetStationItem id={option} label={option} />
                ) : (
                  <StationDropArea
                    id={option}
                    label={option}
                    children={undefined}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </DndContext>
    </>
  );
};
export default StationList;
