//modules
import { Button } from "@mui/material";
import { useState } from "react";
import EditDialog from "../pages/EditDialog";
//files
import edit from "../../assets/edit.svg";
import "../styles/Header.css";
//types
import { HeaderProps } from "../../types/HeaderType";


export const Header = (props:HeaderProps) =>
{
  //props
  const { options,setOptions } = props;

  //states
  const [editDialogOpen, setEditDialogOpen] = useState<boolean>(false);

  //functions
  const handleEditClick = () =>
  {
    setEditDialogOpen(true);
  };

  const handleEditClose = () =>
  {
    setEditDialogOpen(false);
  };

  const handleSaveOptions = (newOptions: string[]) => {
    setOptions(newOptions);
    localStorage.setItem("editOptions", JSON.stringify(newOptions));
  };

  return (
    <>
    <header>
      <h1 id="title">Home</h1>
      <Button id="editButton" onClick={handleEditClick}>
        <img id="edit" src={edit} alt="edit" />
      </Button>
    </header>
    <EditDialog
          open={editDialogOpen}
          onClose={handleEditClose}
          options={options}
          onSave={handleSaveOptions}
      />
    </>
  );
}

export default Header;