import React, { useState, useRef, useEffect } from "react";

export default function Dropdown(props) {
  const { label, content, links } = props;
  const [open, setOpen] = useState(false);
  const dropdown = useRef(null);

  const toggle = (open) => {
    setOpen(!open);
  };

  const closeOpenDropdowns = (e) => {
    if (dropdown.current && !open && !dropdown.current.contains(e.target)) {
      setOpen(false);
    }
  };

  const openOnHover = (e) => {
    if (dropdown.current && !open && dropdown.current.contains(e.target)) {
      setOpen(true);
    }
  };

  useEffect(() => {
    document.addEventListener("mouseout", closeOpenDropdowns);
    document.addEventListener("mouseover", openOnHover);
  }, []);

  return (
    <nav className="dropdown" onClick={() => toggle(open)} ref={dropdown}>
      <nav className="label">{label}</nav>
      <nav className={open ? "content open" : "content"}>
        {content.map((item, i) => (
          <>
            <a href={links[i]} key={i}>
              {item}
            </a>
          </>
        ))}
      </nav>
    </nav>
  );
}
