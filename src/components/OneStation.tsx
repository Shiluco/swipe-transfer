import React from 'react';
import GetStationItem from './GetStationItem';
import StationDropArea from './StationDropArea';
import './styles/OneStation.css';

const OneStation = (props: { option: any; draggingStation: any; setDraggingStation: any; handleDrop: any; }) =>
{
  const { option, draggingStation, setDraggingStation, handleDrop } = props;
  


  return (
    <div className="station-container">
      <span className="station-name">{option}</span>
      <div className="station-icon">
        {!draggingStation || draggingStation === option ? ( //!draggingStation || draggingStation === option
          <GetStationItem
            stationName={option}
            setDraggingStation={setDraggingStation}
          />
        ) : (
          <StationDropArea stationName={option} handleDrop={handleDrop} />
        )}
      </div>
    </div>
  );
};
export default OneStation;