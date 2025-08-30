import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Why Us", path: "/why-us" },
  { name: "Market", path: "/market" },
  { name: "Team", path: "/team" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-3">
        {/* Logo + Tagline */}
        <div>
          <h1 className="text-2xl font-extrabold text-blue-600">
            Futuristic Edu Hubspot
          </h1>
          <p className="text-xs text-gray-500 -mt-1">
            Bridging Theory & Practice
          </p>
        </div>

        {/* Nav Links */}
        <div className="flex space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `px-3 py-1 rounded-md text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-100"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
