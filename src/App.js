import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import UserContext from "./contexts/UserContext";
import { GlobalStyleDark, GlobalStyleLight } from "./themes/GlobalStyle";
import LoginScreen from "./pages/LoginScreen";

function App() {
  const [dark, setDark] = useState(true);

  return (
    <UserContext.Provider>
      <BrowserRouter>
        {dark ? <GlobalStyleDark /> : <GlobalStyleLight />}
        <Routes>
          <Route path='/' element={<LoginScreen/>} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
