import { BrowserRouter, Routes, Route } from "react-router-dom";
import './scss/style.scss'
import Home from "./pages/Home";
import Error from "./pages/Error";
import Service from "./pages/Service";

const AppRouter = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Service/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppRouter;