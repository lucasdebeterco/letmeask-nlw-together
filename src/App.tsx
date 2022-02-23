import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom'

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/rooms/new" element={<NewRoom />} />
			</Routes>
		</div>
	);
}

export default App;
