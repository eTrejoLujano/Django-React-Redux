import "./App.css";
import ProjectLists from "./components/ProjectLists";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProject from "./components/AddProject";
import { DetailProject } from "./components/DetailProject";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProjectLists />} />
          <Route path="/add-project" element={<AddProject />} />
          <Route path="/detail-project/:id" element={<DetailProject />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
