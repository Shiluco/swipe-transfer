
import { useDrop } from "react-dnd";
import goal from "../assets/goal.svg";

const ItemTypes = {
  BIRD: "bird",
};

const StationDropArea = ({
  stationName,
  handleDrop,
}: {
    stationName: string
  , handleDrop: (item: { name: string; type: string }, target: string) => void 
}) => {
  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: ItemTypes.BIRD,
      drop: (item: { name: string; type: string }) =>
        handleDrop(item, stationName),
      collect: (monitor) => ({
        isOver: monitor.isOver(),
      }),
    }),
    [stationName]
  );

  return (
    <div ref={drop} className={`station-drop-area ${isOver ? "over" : ""}`}>
      <img id="goal" src={goal} alt="goal" />
    </div>
  );
};

export default StationDropArea;
