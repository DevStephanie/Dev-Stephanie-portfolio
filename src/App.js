import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import ArtDump from "./components/ArtDump";
import Experience from "./components/Experience";
import Intro from "./components/Intro";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import "./styles/Root.css";

function App() {
  return (
    // <Router>
      <div className="App">
        <NavBar />
        <div id="content">
          
           
            <Routes>
              <Route path="/" element = {<>
               <Intro />
              <About />
              <Technologies />
              <Experience />
              <Projects />
              
              </>}></Route>
              <Route path="/art" element={<ArtDump />}></Route>
            </Routes>

          <Footer />
        </div>
      </div>
    // </Router>
  );
}

export default App;
