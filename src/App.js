import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";

import GlobalStyle from "./style/Global";

const App = () => {
  const [navbarOpen, setnavbarOpen] = useState(false);

  const handleNavbar = () => {
    setnavbarOpen(!navbarOpen);
  };

  return (
    <>
      <Navbar navbarState={navbarOpen} handleNavbar={handleNavbar} />
      <GlobalStyle />
    </>
  );
  //}
};

export default App;

