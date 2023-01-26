import waterfall from './assets/waterfall.jpg';
import './App.css';
import HeroSection from './components/HeroSection';
import MapWaterfall from './components/MapWaterfall';
import ToTop from './components/ToTop';

function App() {
  return (
    <>
      <div className="base absolute -z-20" id='#'>
        <img src={waterfall} alt="" className='brightness-50  h-screen lg:h-full' />
      </div>
      <HeroSection/>
      <MapWaterfall/>
      <ToTop/>
    </>
  );
}

export default App;
