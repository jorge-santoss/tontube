import { Route, Routes } from "react-router";

import MainLayout from "./layouts/MainLayout.jsx";
import Single from "./pages/Single.jsx";
import Home from "./pages/Home.jsx";
import Header from "./components/Header.jsx";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Single />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
