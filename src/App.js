import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import LandingPage from './components/LandingPage';
function App() {
  return (
    <>
      {/* MOBILE & TABLET VIEW: Hidden on large screens (lg and up) */}
      <div className="block lg:hidden">
        <Header />
        <Hero />
      </div>

      {/* DESKTOP VIEW: Hidden on everything below 'lg' breakpoint */}
      <div className="hidden lg:block">
        <LandingPage />
      </div>
    </>
  );
}

export default App;
