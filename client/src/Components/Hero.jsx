import Button from "./button.jsx";

export default function Hero() {
  return (
    <section style={styles.container}>
      <div style={styles.overlay}>
        <h1 style={styles.title}>RETOLI</h1>

        <p style={styles.subtitle}>
          Transforming books into immersive audiobooks through smart translation
          and narration.
        </p>

        <div style={styles.buttons}>
          <Button to="/signin" variant="primary">
            Sign In
          </Button>

          <Button to="/signup" variant="secondary">
            Sign Up
          </Button>
        </div>
      </div>
    </section>
  );
}

const styles = {
  container: {
    height: "100vh",
    background: "linear-gradient(to right, #0f172a, #1e293b)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    color: "white",
    fontFamily: "Poppins, sans-serif",
  },

  overlay: {
    textAlign: "center",
    maxWidth: "700px",
  },

  title: {
    fontSize: "5rem",
    marginBottom: "20px",
    fontWeight: "700",
    letterSpacing: "4px",
  },

  subtitle: {
    fontSize: "1.3rem",
    lineHeight: "1.8",
    color: "#cbd5e1",
    marginBottom: "40px",
  },

  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },

  signInBtn: {
    padding: "14px 32px",
    border: "none",
    borderRadius: "10px",
    backgroundColor: "#2563eb",
    color: "white",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "0.3s",
  },

  signUpBtn: {
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
