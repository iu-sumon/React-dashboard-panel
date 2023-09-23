import React, { useEffect, useState } from 'react';

const DarkLightToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark');
        
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Set the initial theme on component mount
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

 
    return (
      <div className="theme-toggle">
      {theme === 'dark' ? (<i onClick={toggleTheme} class="fa-regular fa-moon"></i>) : 
      ( <i onClick={toggleTheme} class="fa-regular fa-sun"></i> )}
    </div>
    );
};

export default DarkLightToggle;