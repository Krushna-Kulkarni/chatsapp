import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Join } from "./pages/Join";
import { Chat } from "./pages/Chat";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Join />} />
      <Route path="/chat/:userName" element={<Chat />} />
    </Routes>
  );
}

export default App;
