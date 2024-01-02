import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import OverviewPage from "./pages/OverviewPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/app" element={<OverviewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
