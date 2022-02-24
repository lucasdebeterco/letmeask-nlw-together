import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom'

function App() {
	return (
		<Router>
			<div>
				<Routes>
					<Route path="" element={<Home />} />
					<Route path="/rooms/new" element={<NewRoom />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
