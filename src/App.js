import waterfall from './assets/waterfall.jpg';
import './App.css';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <>
      <div className="base absolute -z-20">
        <img src={waterfall} alt="" className='brightness-50  h-screen lg:h-full' />
      </div>
      <HeroSection/>
    </>
  );
}

export default App;
