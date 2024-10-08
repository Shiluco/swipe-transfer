//modules
import React, { useState } from "react";
import StationList from "../templates/StationList";
import { isMobile } from "react-device-detect";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
//files
import "../styles/Home.css";
import Header from "../organisms/Header";
const Home: React.FC = () => {
  //駅の選択肢をローカルストレージから読み込む or 初期値を設定
  const [options, setOptions] = useState<string[]>(() => {
    const storedOptions = localStorage.getItem("editOptions");
    return storedOptions
      ? (JSON.parse(storedOptions) as string[])
      : [
          "東京",
          "新宿",
          "渋谷",
          "目黒",
          "横浜",
        ];
  });

  const [draggingStation, setDraggingStation] = useState<string | null>(null);

  const handleDrop = (name: string, target: string) => {
    const newSelections = [name, target];
    const start = encodeURIComponent(newSelections[0]);
    const goal = encodeURIComponent(newSelections[1]);
    const url = `https://transit.yahoo.co.jp/search/result?flatlon=&fromgid=&from=${start}&to=${goal}&viacode=&via=&viacode=&via=&viacode=&via=&type=1&ticket=ic&expkind=1&ws=3&s=0&al=1&shin=1&ex=1&hb=1&lb=1&sr=1`;
    window.location.href = url;
  };

  return (
    <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
      <>
        <Header
          options={options}
          setOptions={setOptions}
        />

        <StationList
          options={options}
          draggingStation={draggingStation}
          setDraggingStation={setDraggingStation}
          handleDrop={handleDrop}
        />
        
      </>
    </DndProvider>
  );
};

export default Home;
