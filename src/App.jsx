import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Onboard from "./pages/Onboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Onboard />} />
				<Route path="/dashboard" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</Router>
	);
}

export default App;
