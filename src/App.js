import waterfall from './assets/waterfall.jpg';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <>
      <div className="base absolute -z-20">
        <img src={waterfall} alt="" className='brightness-50' />
      </div>

      {/* <Navbar/> */}
      <HeroSection/>
      

    </>
  );
}

export default App;
