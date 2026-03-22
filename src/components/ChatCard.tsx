import "./Sidebar.css";

export default function ChatCard({ conversations, handleSelect }) {
  return (
    <div className="list">
      {conversations.map((conv) => (
        <div key={conv.id} className="list-tile" onClick={()=> handleSelect(conv.id)}>
          <div className="list-name">
            <h4 className="list-title">{conv.title}</h4>
            <span className="list-time">{conv.updatedAt}</span>
          </div>
          <div className="list-status" style={{color: conv.status === 'Reviewed' ? 'green' : 'red'}}>{conv.status}</div>
        </div>
      ))}
    </div>
  );
}
