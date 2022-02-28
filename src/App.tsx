import { createContext, useState } from 'react' 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom'

export const TestContext = createContext({} as any);

function App() {
	const [value, setValue] = useState('teste');

	return (
		<Router>
			<TestContext.Provider value={{ value, setValue }}>
				<div>
					<Routes>
						<Route path="" element={<Home />} />
						<Route path="/rooms/new" element={<NewRoom />} />	
					</Routes>
				</div>
			</TestContext.Provider>
		</Router>
	);
}

export default App;
