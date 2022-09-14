import './App.css';
import First from './components/First/First';
import Navbar from './components/Navbar/Navbar';
import Second from './components/Second/Second';
import Section from './components/Section/Section';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Section />
      <First />
      <Second />
    </div>
  );
}

export default App;
