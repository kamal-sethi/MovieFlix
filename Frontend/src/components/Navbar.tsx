import React from "react";

interface NavbarProps {
  username: string;
}

const Navbar: React.FC<NavbarProps> = ({ username }) => {
  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 bg-white/20 backdrop-blur-md shadow-md rounded-b-xl border-b border-white/30">
      {/* Left Side - Logo */}
      <h1 className="text-2xl font-bold text-gray-800 tracking-wide">
        🎬 MovieFlix
      </h1>

      {/* Right Side - Username */}
      <div className="flex items-center space-x-3">
        <span className="text-lg font-medium text-gray-700">
          Hello, {username} 👋
        </span>
        <img
          src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${username}`}
          alt="User Avatar"
          className="w-10 h-10 rounded-full border-2 border-gray-300"
        />
      </div>
    </nav>
  );
};

export default Navbar;
