import { createContext, useState } from 'react' 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom'
import { auth, firebase } from './services/firebase';

type User = {
	id: String;
	name: String;
	avatar: String;
}

type AuthContextType = {
	user: User | undefined;
	signInWithGoogle: () => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextType);

function App() {
	const [user, setUser] = useState<User>();

	async function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();
		
		const result = await auth.signInWithPopup(provider)

        if (result.user) {
			const { displayName, photoURL, uid } = result.user

			if (!displayName || !photoURL) {
				throw new Error('Missing information from Google Account.');
			}

			setUser({
				id: uid,
				name: displayName, 
				avatar: photoURL
			})
		}  
	}

	return (
		<Router>
			<AuthContext.Provider value={{ user, signInWithGoogle }}>
				<div>
					<Routes>
						<Route path="" element={<Home />} />
						<Route path="/rooms/new" element={<NewRoom />} />	
					</Routes>
				</div>
			</AuthContext.Provider>
		</Router>
	);
}

export default App;
