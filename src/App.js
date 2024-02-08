import Header from "./components/Header";
import About from "./sections/About";
import NavProvider from './context/NavContext'
import Experiences from "./sections/Experiences";
import Education from "./sections/Education";
import Awards from "./sections/Awards";
import ComputerSkills from "./sections/ComputerSkills";
import Hobbies from "./sections/Hobbies";
import Contact from "./sections/Contact";
import './app.css'

function App() {
  return (
    <div>
      <NavProvider>
        <Header />
        <About />
        <Experiences />
        <Education />
        <ComputerSkills />
        <Awards />
        <Hobbies />
        <Contact />
      </NavProvider>
    </div>
  );
}

export default App;
