import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import 'font-awesome/css/font-awesome.min.css';

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import OneBox from "./pages/OneBox";

// Component to show welcome message before navigating to login
const WelcomeMessage = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false); // Hide the welcome message
      navigate('/login'); // Redirect to the login page
    }, 5000); // Show for 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, [navigate]);

  return (
    <div className="bg-black text-white w-screen h-screen flex flex-col justify-center items-center">
      {showWelcome && <h1 className="text-2xl">Welcome</h1>}
    </div>
  );
};

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomeMessage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/onebox" element={<OneBox />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
