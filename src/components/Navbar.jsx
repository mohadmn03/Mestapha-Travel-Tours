import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Navbar() {
  const links = ["Home", "Services", "About Us", "Contact Us"];
  const linkPath = ["/", "/services", "/about", "/contact"];
  return (
    <div className="p-4 flex items-center justify-center w-full overflow-hidden sticky top-0 ">
      <ul className="flex gap-10">
        {links.map((link, i) => {
          return (
            <li className="text-white">
              <Link to={`${linkPath[i]}`}>{link}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
