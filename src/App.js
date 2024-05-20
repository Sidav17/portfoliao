import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Skills from "./components/skills";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Project from "./components/project";


function App() {
  return (
    <div >
    <Navbar />
    <Hero />
    <Skills />
    <Project />
    <About />
    <Contact/>
    <Footer /> 
    </div>
  );
}

export default App;
