import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Marquee from './components/Marquee';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="Mains">
       <Header/>
       <Main title='bhatti bhai' description='kya hal ha'/>
      <Navbar/>
      <Footer/>
      <Marquee/>
    </div>
  );
}

export default App;
