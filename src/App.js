import SideBar from './components/sideBar/SideBar';
import TopBar from './components/topBar/TopBar';
import './main.css';

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className='container'>
        <SideBar />
        <div className='other'></div>
      </div>
    </div>
  );
}

export default App;
