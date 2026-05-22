import Button from "../Components/button.jsx";

export default function SignUp() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Create Your Account</h1>
        <p style={styles.subtitle}>
          Start your Retoli journey with a new account.
        </p>
        <Button variant="primary" type="button" style={styles.actionButton}>
          Sign Up
        </Button>
        <Button to="/signin" variant="secondary" style={styles.actionButton}>
          Already have an account?
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
