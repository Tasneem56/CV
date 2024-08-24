import About from "./components/About/About";
import Contacts from "./components/Contacts";
import Header from "./components/Header/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
