import {Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CoursesPage from "./pages/CoursesPage";
import AdmissionPage from "./pages/AdmissionPage";
// import './styles/Pages.css'
import ChatbotComponent from "./components/Chatbot/ChatbotComponent";

const App = () => {
  return(
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/courses" element={<CoursesPage/>}/>
          <Route path="/admission" element={<AdmissionPage/>}/>
        </Routes>
        <ChatbotComponent/>
      </Router>
     
       
    </div>
  )
}
export default App;