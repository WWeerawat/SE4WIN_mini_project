import Button_Com from "./Button_Com";
import { useState } from "react";

const Header = () => {

  const [showDefault,setShowDefault] = useState(true);
  const [showAdd ,setShowAdd ] = useState(false);
  const [showEdit,setShowEdit] = useState(false);

  const addState = () => {
    setShowDefault(false);
    setShowAdd(true);
  }

  const editState = () => {
    setShowDefault(false);
    setShowEdit(true);
  }

  const doneState = () => {
    setShowDefault(true);
    setShowAdd(false);
    setShowEdit(false);
  }

  return (
    <div className="header">
      <h1>FAPP To-do list</h1>
      <div className="headerButton">
        {showDefault && <Button_Com text="Add" color="primary" onClick = {() => addState()}/>}
        {showDefault && <Button_Com text="Edit" color="warning" onClick = {() => editState()} />}
        {(showAdd || showEdit) && <Button_Com text="Done" color="secondary" onClick = {() => doneState()}/>}
      </div>
    </div>
  );
};

export default Header;
