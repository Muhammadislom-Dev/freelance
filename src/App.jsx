import './App.css';
import Carousel from './components/Carousel/Carousel';
import First from './components/First/First';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Second from './components/Second/Second';
import Section from './components/Section/Section';
import TextPage from './components/TextPage/TextPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Home />
      <Section />
      <First />
      <Second />
      <Carousel />
      <TextPage />
    </div>
  );
}

export default App;
