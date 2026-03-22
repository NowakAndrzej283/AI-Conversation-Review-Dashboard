import { useState, useEffect, useRef } from "react";
import './StatusButton.css';


export default function StatusButton({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const options = ["Pending Review", "Needs Fix", "Reviewed"];

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);


  return (
    <div className="status-wrapper" ref={ref}>
      <div
        className={`chat-status ${formatStatus(value)}`}
        onClick={() => {
            setOpen(!open)
            
        }}
      >
        {value}
      </div>

      {open && (
        <div className="status-menu">
          {options.map((opt) => (
            <div
              key={opt}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function formatStatus(status) {
  return status.toLowerCase().replace(" ", "-");
}