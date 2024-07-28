import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import "./index.css";
import Home from "./pages/Home/Home";
import Video from "./pages/Video/Video";
import { useState } from "react";

const App = () => {
  const [sidebar, setSideBar] = useState(true);
  return (
    <>
      <Navbar setSideBar={setSideBar} />
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </>
  );
};

export default App;
