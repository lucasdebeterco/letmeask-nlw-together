import { createContext, useState, useEffect } from 'react' 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';

import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom'
import { Room } from './pages/Room';
import { AdminRoom } from './pages/AdminRoom';

import { AuthContextProvider } from './contexts/AuthContext'


function App() {
	return (
		<Router>
			<ThemeProvider theme={ light }>
				<div>
				<AuthContextProvider>
					<Routes>
						<Route path="" element={<Home />} />
						<Route path="/rooms/new" element={<NewRoom />} />
						<Route path="/rooms/:id" element={<Room />} />
						<Route path="/admin/rooms/:id" element={<AdminRoom />} />	
					</Routes>
				</AuthContextProvider>
				</div>
			</ThemeProvider>
		</Router>
	);
}

export default App;
