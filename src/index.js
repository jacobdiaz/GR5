import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import SearchResultPage from "./routes/SearchResultPage";
import TutorialVideoPage from "./routes/TutorialVideoPage";
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/GR5/" element={<App />} />
      <Route path="search" element={<SearchResultPage />} />
      <Route path="tutorial" element={<TutorialVideoPage />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
