import "./app.scss"
import Hero from "./components/Hero/Hero";
import Navber from "./components/Navber/Navber";
import Test from "./components/Navber/Test";
import Parallax from "./components/Parallax/Parallax";
import Portfoio from "./components/portfolio/Portfoio";
import Services from "./components/Services/Services";
const App = () => {
 
  return <div>
   <section id="Homepage"><Navber></Navber>
   <Hero/></section>
    <section id="Services"><Parallax type="Services"/>
    <Services></Services></section>
    <section id="Portfolio">Services</section>
    <section ><Parallax type="portfolio"/>
    </section>
    <Portfoio/>
    <section id="Contact">Contact</section>
  
  </div>;
};

export default App;
