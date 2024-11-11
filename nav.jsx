// import {useState} from "react";
// import { Link, useMatch, useResolvedPath } from 'react-router-dom';
// import styles from "./nav.module.css"

// function toggleAccountPage() {
//     const accountPage = document.getElementById("accountPage");
//     if (accountPage.style.display === "none") {
//         accountPage.style.display = "block";
//     } else {
//         accountPage.style.display = "none";
//     }
// }



  // export default function navBar (){
//    const [nav, setNav] = useState(false)
//    const handleNav = () => setNav(!nav)

   

//    return (
//     <div className={styles.container}>
//     <nav className={styles.nav}>
//       <Link to="/" className={styles.site_title}>
//         Career Search
//       </Link>
//       <ul>
//         <CustomLink to="/search">Search</CustomLink>
//         <CustomLink to="/homepage">Home</CustomLink>
//       </ul>
//     </nav>
//     </div>
//   )
   
// }

// function CustomLink({ to, children, ...props }) {
//     const resolvedPath = useResolvedPath(to)
//     const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
//     return (
//       <li className={isActive ? "active" : ""}>
//         <Link to={to} {...props}>
//           {children}
//         </Link>
//       </li>
//     )
//   }

import React, { useState } from "react";

import "./nav.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/homepage" className="title">
        Website
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/homepage">Home</NavLink>
        </li>
        <li>
          <NavLink to="/search">Search</NavLink>
        </li>
      </ul>
    </nav>
  );
};