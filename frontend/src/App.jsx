import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Introduction from "./components/intro";
import Pricing from "./pages/pricing";
import Chat from "./pages/chat";
import About from "./pages/about";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
