import React, { useState } from "react";

export default function Nav() {
  const [active, setActive] = useState(0);
  console.log(active);

  const [navLinks, setNavLinks] = useState([
    { name: "All Menus" },
    { name: "Breakfast Meals" },
    { name: "Café Classics" },
    { name: "Burgers" },
    { name: "Dessert" },
  ]);

  return (
    //   --blue
    <nav className="flex items-center bg-[var(--darkblue2)] px-6 py-5 border-b border-gray-200">
      <h1 className="navLogoHeader">Café ligaya</h1>
      <div className="text-lg text-[var(--white)] cursor-pointer">
        {navLinks.map((link, index) => (
          <React.Fragment key={index}>
            <a
              onClick={() => setActive(index)}
              className={`navLinks ${index === active && "navActive"} ${
                index !== active && "navInactive"
              }`}
            >
              {link.name}
            </a>
          </React.Fragment>
        ))}
        {/* <a className="navLinks navActive">All Menus</a>
        <a className="navLinks">Breakfast Meals</a>
        <a className="navLinks">Café Classics</a>
        <a className="navLinks">Burgers</a>
        <a className="navLinks">Dessert</a> */}
      </div>

      <div className="ml-auto">
        <button>Logout</button>
      </div>
    </nav>
  );
}
