import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserContext from "./contexts/UserContext";

function App() {
  return (
    <UserContext.Provider>
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
