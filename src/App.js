import SideBar from './components/sideBar/SideBar';
import TopBar from './components/topBar/TopBar';
import Home from './pages/home/Home';
import UserList from "./pages/userList/UserList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './main.css';

function App() {
  return (
		<Router>
			<TopBar />
			<div className="container">
				<SideBar />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/users" element={<UserList />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
