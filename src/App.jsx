import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import OverviewPage from "./pages/OverviewPage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import SocialHandlesPage from "./pages/SocialHandlesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/overview" element={<OverviewPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/socials" element={<SocialHandlesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
