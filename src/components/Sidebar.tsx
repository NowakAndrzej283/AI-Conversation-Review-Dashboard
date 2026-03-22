import './Sidebar.css'
import ChatCard from './ChatCard';

export default function Sidebar({conversations, handleSelect}){
    return (
        <div className="sidebar">
            <div className="title">Chats</div>
            <ChatCard conversations={conversations} handleSelect={handleSelect}/>

        </div>

    );
}