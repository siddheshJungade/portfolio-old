
import './App.css';
import Hero from './Component/Hero/Hero'
import Footer from './Component/Footer/Footer'
import Skills from './Component/Skills/Skills';
import Technology from './Component/Technology/Technology';
import Blog from './Component/Blog/blog';

import Work from './Component/Work/work';
import Eduction from './Component/Education/education';
function App() {
  return (
    <header>
      <Hero />
      <Skills />
      <Eduction />
      <Work />
     <Technology />
     <Blog />
    <Footer />
    </header>
  );
}

export default App;
