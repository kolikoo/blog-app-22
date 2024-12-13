import { Suspense, lazy } from "react";
import "./App.css";
import Header from "./MainComponents/defaultComponents/header/header";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AboutPage from "./Pages/About/aboutPage/aboutPage";
import LogInView from "./Pages/Log-In/Log-in-view/LogInView";
import Registration from "./Pages/Registration/registrationView";


const HomeBlog = lazy(() => import("./Pages/Home-Blog/home-Blog"));

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={"loading"}>
              <HomeBlog />
            </Suspense>
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/LogIn" element={<LogInView />} />
        <Route path="/Login/registration" element={<Registration />} />
        <Route path="/" element={<Navigate to="/ka/home" />} />
      </Routes>
    </Router>
  );
}

export default App;
