import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate
import "./styles.css"; // Import the CSS file for specific styles

// Import images
import userIcon from '../assets/user.png'; // Adjust the path as needed
import lockIcon from '../assets/locck.webp'; // Adjust the path as needed
import eyeIcon from '../assets/eyee.jpeg'; // Adjust the path as needed
import eyeSlashIcon from '../assets/eye.png'; // Adjust the path as needed
import googleIcon from '../assets/google.png'; // Adjust the path as needed
import appleIcon from '../assets/apple.png'; // Adjust the path as needed

const SignUp: React.FC = () => { // Add React.FC for functional component
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [accessMessage, setAccessMessage] = useState(''); // State for the access message
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = () => {
    console.log("Username:", username);
    console.log("Password:", password);
    
    // Navigate to login page with state
    navigate('/login', {
      state: { message: 'Successfully created an account!' },
    });
  };

  const handleSocialLogin = (platform: string) => { // Specify platform as a string
    // Set the message indicating no access
    setAccessMessage(`No Access for ${platform}`); // Set the access message
  };

  return (
    <div className="bg-black text-white w-screen h-screen flex flex-col justify-center items-center">
      <div className="sign-up-container bg-[#111214] text-center space-y-8 px-16 py-10 rounded-2xl border border-[#343A40]">
        <div className="text-xl font-semibold">Create An Account</div>

        {/* Input for username */}
        <div className="input-wrapper">
          <img src={userIcon} alt="User Icon" className="icon" />
          <input
            type="text"
            className="input-field"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        {/* Input for password */}
        <div className="input-wrapper">
          <img src={lockIcon} alt="Lock Icon" className="icon" />
          <input
            type={isPasswordShown ? 'text' : 'password'}
            className="input-field"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <img
            src={isPasswordShown ? eyeIcon : eyeSlashIcon}
            alt="Toggle Visibility"
            className="icon eye-icon"
            onClick={() => setIsPasswordShown((prevState) => !prevState)}
          />
        </div>

        {/* Social login buttons */}
        <div className="social-login">
          <button className="social-button flex items-center" onClick={() => handleSocialLogin('Google')}>
            <img src={googleIcon} alt="Google" className="social-icon" />
            <span className="ml-2">Google</span>
          </button>
          <button className="social-button flex items-center" onClick={() => handleSocialLogin('Apple')}>
            <img src={appleIcon} alt="Apple" className="social-icon" />
            <span className="ml-2">Apple</span>
          </button>
        </div>

        {/* Display access message if available */}
        {accessMessage && (
          <div className="text-red-500 mt-2">{accessMessage}</div>
        )}

        {/* Submit button */}
        <button
          className="bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC] mt-5 px-6 text-sm py-3 rounded-md cursor-pointer"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default SignUp;
