import { Link, useNavigate, useLocation } from "react-router-dom";
import AppBar from "../components/AppBar";
import google from "../assets/google.svg";
import Footer from "../components/Footer";

function Login() {
  const navigate = useNavigate();
  const location = useLocation(); // Get location to access state
  const token = localStorage.getItem('token');

  // Redirect based on token presence
  if (token) {
    navigate('/onebox'); // Redirect to OneBox if token exists
    return null; // Prevent further rendering
  }

  const handleGoogleLogin = () => {
    // Redirect to Google login URL
    window.location.href = "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://reachinbox-assignment1234.vercel.app/";
  };

  return (
    <div>
      <AppBar />
      <div className="bg-black text-white w-screen h-screen flex flex-col justify-center items-center">
        <div className="bg-[#111214] text-center space-y-10 px-16 rounded-2xl border border-[#343A40]">
          <div className="">
            <div className="text-xl font-semibold mt-6">
              Create a new account
            </div>
            <div
              className="mt-6 border-white/40 border px-20 py-2 text-sm flex items-center text-[#CCCCCC] rounded-lg cursor-pointer hover:bg-white hover:text-black transition duration-300"
              onClick={handleGoogleLogin}
            >
              <img src={google} alt="google" className="w-4 mr-3" />
              Sign Up with Google
            </div>
          </div>

          {/* Display success message if available */}
          {location.state && location.state.message && (
            <div className="text-green-500 mb-4">{location.state.message}</div>
          )}

          <div className="">
            <Link
              to="/signup" // Updated to /signup
              className="bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC] mx-16 mt-5 px-6 text-sm py-3 rounded-md cursor-pointer"
            >
              Create an Account
            </Link>
            <div className="my-8 mb-10 text-[#909296]">
              Already have an account?{" "}
              <Link to="/signin" className="text-[#C1C2C5]">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
