import { BrowserRouter, Routes, Route } from "react-router-dom";
import './scss/style.scss'
import Home from "./pages/Home";
import Error from "./pages/Error";

const AppRouter = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Error />}/>
          <Route path="/" element={<Home />}/>
          

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppRouter;