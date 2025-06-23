import {Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CoursesPage from "./pages/CoursesPage";
import './styles/Pages.css'
const App = () => {
  return(
    <div>
      <Router>
        <Routes>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/courses" element={<CoursesPage/>}/>
        </Routes>
      </Router>
     
       
    </div>
  )
}
export default App;