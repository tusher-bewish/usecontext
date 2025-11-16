import React from 'react'
import abouts from "../assets/about.jpg"
import { useTheme } from '../Page1/Context'

const About = () => {
 const { theme, handleCurrentTheme } = useTheme();

  return (
    // <div style={{
    //   background: theme === "light" ? "#fff" : "#333",
    //   color: theme === "light" ? "#000" : "#fff",
    //   padding: "20px"
    // }}>
    <>
      <h2>Navbar - Theme: {theme}</h2>
      <button onClick={handleCurrentTheme} className='bg-red-400'>Toggle Theme</button>
    </>
    // </div>
  );
};

export default About