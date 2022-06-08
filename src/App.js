import SideBar from './components/sideBar/SideBar';
import TopBar from './components/topBar/TopBar';
import Home from './pages/home/Home';
import './main.css';

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className='container'>
        <SideBar />
        <Home />
      </div>
    </div>
  );
}

export default App;
