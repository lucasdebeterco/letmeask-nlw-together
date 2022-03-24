import { createContext, useState, useEffect } from 'react' 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom'
import { Room } from './pages/Room';

import { AuthContextProvider } from './contexts/AuthContext'


function App() {
	return (
		<Router>
			<div>
			<AuthContextProvider>
				<Routes>
					<Route path="" element={<Home />} />
					<Route path="/rooms/new" element={<NewRoom />} />
					<Route path="/rooms/:id" element={<Room />} />	
				</Routes>
			</AuthContextProvider>
			</div>
		</Router>
	);
}

export default App;
