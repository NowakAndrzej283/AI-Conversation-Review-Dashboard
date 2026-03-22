import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import MainView from "./components/MainView";
import { conversations as initialData } from "./data/data";


function App() {
  const [isSelected, setIsSelected] = useState(false);
  const [id, setId] = useState(null);
  const [conversations, setConversations] = useState(initialData);
  


  function handleSelect(id: number) {
    setIsSelected(true);
    console.log("the card has been selected");
    console.log("The conversation of ID has been selected:", id);
    setId(id);
    console.log(id);
  }

  function handleChangeStatus(id: number, status: string, ){
    console.log('This is id', id);
    setConversations((prev) =>
    prev.map((conv) =>
      conv.id === id ? { ...conv, status: status } : conv
    )
    );
    console.log('inside status change');
  }

  

  return (
    <div className="mainContainer">
      <Sidebar conversations={conversations} handleSelect={handleSelect} onStatusChange={handleChangeStatus}/>
      <MainView conversations={conversations} id={id} onStatusChange={handleChangeStatus}/>
    </div>
  );
}

export default App;
