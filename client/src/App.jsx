import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import SignIn from "./pages/signin.jsx";
import SignUp from "./pages/signup.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}
