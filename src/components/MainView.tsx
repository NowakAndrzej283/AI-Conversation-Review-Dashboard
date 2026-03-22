import { useState, useEffect } from "react";
import "./MainView.css";
import StatusButton from "./StatusButton";

export default function MainView({
  conversations,
  id,
  onStatusChange,
  onAddNote,
}) {
  const [noteInput, setNoteInput] = useState("");

  const [notes, setNotes] = useState(conversations?.notes || []);

  const [status, setStatus] = useState(null);

  // console.logs
  console.log(conversations);
  console.log(id);

  if (!id) {
    return;
  }

  console.log("id is ", id);

  const handleSave = () => {
    if (!noteInput.trim()) {
      alert("The note cannot be empty. Try again.");
      return;
    }
    onAddNote(id, noteInput);
    setNoteInput("");
  };

  return (
    <div className="mainView">
      <div className="chat-header">
        <div>
          <h2 className="chat-title">{conversations[id - 1].title}</h2>
          <span className="chat-category">
            Category: {conversations[id - 1].category}
          </span>
        </div>
        <div className="chat-meta">
          <span>{conversations[id - 1].city}</span>
          <span>•</span>
          <span>
            ({conversations[id -1].country.country || "Loading..."})
          </span>
        </div>

        <StatusButton
          value={conversations[id - 1].status}
          onChange={(newStatus) =>
            onStatusChange(conversations[id - 1].id, newStatus)
          }
        />
      </div>

      <div className="chat-messages">
        {conversations[id - 1].messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender === "ai" ? "ai" : "customer"}`}
          >
            <div className="message-bubble">{msg.text}</div>
            <span className="message-time">{msg.time}</span>
          </div>
        ))}
      </div>
      <div className="notes-section">
        <h4>Internal Notes</h4>

        <div className="notes-list">
          {(conversations[id - 1].notes || []).map((note, i) => (
            <div key={i} className="note-item">
              <div>{note.text}</div>
              <span>{note.time}</span>
            </div>
          ))}
        </div>

        <div className="note-input-container">
          <input
            type="text"
            placeholder="Add note..."
            value={noteInput}
            onChange={(e) => setNoteInput(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
}
function formatStatus(status) {
  return status.toLowerCase().replace(" ", "-");
}
