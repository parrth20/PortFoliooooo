import {
  About,
  Achievements,
  CompetitiveCoding,
  Contact,
  Hero,
  Responsibility,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Hero />
      </div>
      <About />
      <CompetitiveCoding />
      <Tech />
      <Works />
      <Achievements />
      <Responsibility />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

export default App;
