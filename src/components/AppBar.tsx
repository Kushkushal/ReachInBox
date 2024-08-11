import logo from "../assets/Logo 12.png";

function AppBar() {
  return (
    <div className="border-[#25262B] bg-black border-b-2 fixed text-white h-10 w-screen flex items-center justify-center">
      <div className="">
        <img
          src={logo}
          alt="logo"
          className="h-6" // Adjusted height to 8 (or set a different value)
          // Optional: You can also set a width if needed
          // style={{ width: 'auto', height: '40px' }} // Example inline style
        />
      </div>
    </div>
  );
}

export default AppBar;
