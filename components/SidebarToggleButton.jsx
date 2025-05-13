const SidebarToggleButton = ({ open, setOpen }) => (
  <button
    aria-label={open ? "Collapse sidebar" : "Expand sidebar"}
    onClick={() => setOpen(!open)}
    style={{
      background: "none",
      border: "none",
      cursor: "pointer",
      marginLeft: "8px",
    }}
  >
    {open ? (
      <svg width="20" height="20" fill="currentColor">
        <path d="M13 5l-5 5 5 5" />
      </svg>
    ) : (
      <svg width="20" height="20" fill="currentColor">
        <path d="M7 5l5 5-5 5" />
      </svg>
    )}
  </button>
);

export default SidebarToggleButton;
