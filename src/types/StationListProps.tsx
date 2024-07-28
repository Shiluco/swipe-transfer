export type StationListProps = {
  options: string[];
  draggingStation: string | null;
  setDraggingStation: (value: string | null) => void;
  handleDrop: (name: string, target: string) => void;
};