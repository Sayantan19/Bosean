// import logo from './logo.svg';
import './App.css';
import AboutUs from './components/About Us';
import ContactUs from './components/Contact Us';
import Footer from './components/Footer';
import Jumbotron from './components/Jumbotron';
import NavBar from './components/NavBar';
import Services from './components/Services';

function App() {
  return (
    <>
      <NavBar />
      <Jumbotron />
      <AboutUs />
      <Services />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
