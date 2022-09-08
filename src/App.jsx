import logo from './logo.svg';
import Home from './pages/Home'
import Navbar from './components/Navbar';
import Announcement from './components/Announcement';
import './App.css';
import Slider from './components/Slider';

function App() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
    </div>
  );
}

export default App;
