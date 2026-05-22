import Button from "../Components/button.jsx";

export default function SignIn() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Welcome Back</h1>
        <p style={styles.subtitle}>Sign in to continue to Retoli.</p>
        <Button variant="primary" type="button" style={styles.actionButton}>
          Sign In
        </Button>
        <Button to="/signup" variant="secondary" style={styles.actionButton}>
          Create an Account
        </Button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#0f172a",
    color: "white",
    fontFamily: "Poppins, sans-serif",
    padding: "20px",
  },
  card: {
    width: "100%",
    maxWidth: "420px",
    padding: "40px",
    borderRadius: "20px",
    background: "rgba(15, 23, 42, 0.95)",
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.35)",
    textAlign: "center",
  },
  title: {
    marginBottom: "16px",
    fontSize: "2rem",
  },
  subtitle: {
    marginBottom: "32px",
    color: "#cbd5e1",
  },
  actionButton: {
    width: "100%",
    marginBottom: "16px",
  },
};
