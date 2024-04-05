
import './App.css';
import { About } from './components/about';
import { Contacts } from './components/contacts';
import { Foooter } from './components/footer';
import { Gallery } from './components/gallery';
import { Header } from './components/header';
import { Hero } from './components/hero';
import { Programms } from './components/programms';
import { Testimonials } from './components/testimonials';
import { Title } from './components/title';



function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Title name="Our Programs" title="What We Offer"/>
      <div className='container'>
        <Programms/>
        <About/>
        <Title name="GALLERY" title="Campus Photos"/>
        <Gallery/>
        <Title name="Testimonials" title="What Our Students Say"/>
        <Testimonials/>
        <Title name="CONTACT US"  title="Get In Touch"/>
        </div>
        <Contacts/>
        <Foooter/>

    </div>
  );
}

export default App;
