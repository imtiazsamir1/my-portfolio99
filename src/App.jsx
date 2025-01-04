import "./app.scss"
import Navber from "./components/Navber/Navber";
import Test from "./components/Navber/Test";
const App = () => {
 
  return <div>
   <section id="Homepage"><Navber></Navber></section>
    <section id="Service">Parallax</section>
    <section id="Portfolio">Services</section>
    <section >Parallax</section>
    <section>Protfolio1</section>
    <section>Protfolio2</section>
    <section>Protfolio3</section>
    <section id="Contact">Contact</section>
  
  </div>;
};

export default App;
