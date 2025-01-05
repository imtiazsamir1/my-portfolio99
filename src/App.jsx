import "./app.scss"
import Hero from "./components/Hero/Hero";
import Navber from "./components/Navber/Navber";
import Test from "./components/Navber/Test";
import Parallax from "./components/Parallax/Parallax";
const App = () => {
 
  return <div>
   <section id="Homepage"><Navber></Navber>
   <Hero/></section>
    <section id="Services"><Parallax type="services"/></section>
    <section id="Portfolio">Services</section>
    <section ><Parallax type="portfolio"/></section>
    <section>Protfolio1</section>
    <section>Protfolio2</section>
    <section>Protfolio3</section>
    <section id="Contact">Contact</section>
  
  </div>;
};

export default App;
