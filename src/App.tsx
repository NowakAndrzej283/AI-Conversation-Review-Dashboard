import { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import MainView from "./components/MainView";
import { conversations as initialData } from "./data/data";
import { getCountry } from "./services/fetchCountry";

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

  function handleChangeStatus(id: number, status: string) {
    console.log("This is id", id);
    setConversations((prev) =>
      prev.map((conv) => (conv.id === id ? { ...conv, status: status } : conv))
    );
    console.log("inside status change");
  }

  const handleAddNote = (id, noteText) => {
    const newNote = {
      text: noteText,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    console.log("to jest newNOte: ", newNote, id);
    setConversations((prev) =>
      prev.map((conv) =>
        conv.id === id
          ? { ...conv, notes: [...(conv.notes || []), newNote] }
          : conv
      )
    );
  };
  useEffect(() => {
    async function fetchCountries() {
      const updated = await Promise.all(
        conversations.map(async (conv) => {
          if (!conv.city) return conv;
  
          const country = await getCountry(conv.city);
          console.log(conv, country);
          return { ...conv, country };
        })
      );
  
      setConversations(updated);
    }
    console.log('inside fetchCoutniries', conversations)
    fetchCountries();
  }, []);

  return (
    <div className="mainContainer">
      <Sidebar
        conversations={conversations}
        handleSelect={handleSelect}
        onStatusChange={handleChangeStatus}
      />
      <MainView
        conversations={conversations}
        id={id}
        onStatusChange={handleChangeStatus}
        onAddNote={handleAddNote}
      />
    </div>
  );
}

export default App;
