import { Link } from "react-router-dom";

const variants = {
  primary: {
    padding: "14px 32px",
    border: "none",
    borderRadius: "10px",
    backgroundColor: "#2563eb",
    color: "white",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "0.3s",
  },
  secondary: {
    padding: "14px 32px",
    borderRadius: "10px",
    border: "2px solid white",
    backgroundColor: "transparent",
    color: "white",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "0.3s",
  },
};

export default function Button({ children, variant = "primary", to, style, ...props }) {
  const buttonStyle = { ...variants[variant], ...style };

  if (to) {
    return (
      <Link to={to} style={{ textDecoration: "none" }}>
        <button style={buttonStyle} type="button" {...props}>
          {children}
        </button>
      </Link>
    );
  }

  return (
    <button style={buttonStyle} type="button" {...props}>
      {children}
    </button>
  );
}

