import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import UserContext from "./contexts/UserContext";
import { GlobalStyleDark, GlobalStyleLight } from "./themes/GlobalStyle";

function App() {
  const [dark, setDark] = useState(true);

  return (
    <UserContext.Provider>
      <BrowserRouter>
        {dark ? <GlobalStyleDark /> : <GlobalStyleLight />}
        <Routes></Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
