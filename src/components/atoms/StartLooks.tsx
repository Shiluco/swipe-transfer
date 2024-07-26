import { FC } from "react";
import start from "../../assets/start.svg";

type GetStationItem = {
  isDragging?: boolean;
};

const DraggableBlockSource: FC<GetStationItem> = () => {
  return (
    <div>
      <img id="start" src={start} alt="start" />
      
    </div>
  );
};

export default DraggableBlockSource;


