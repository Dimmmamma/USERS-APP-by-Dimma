import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
