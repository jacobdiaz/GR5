import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import SearchResultPage from "./routes/SearchResultPage";
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/GR5/" element={<App />} />
      <Route path="search" element={<SearchResultPage />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
