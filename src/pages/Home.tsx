
import { useNavigate } from 'react-router-dom'

import illustrationImg from '../assets/illustration.svg'
import logoImg from '../assets/logo.svg'
import googleIconImage from '../assets/google-icon.svg'

import { Button } from '../components/Button'

import '../styles/auth.scss'; 
import { useAuth } from '../hooks/useAuth'


export function Home() {
    const navigate = useNavigate();
    const { user, signInWithGoogle } = useAuth()

    async function handleCreateRoom() {
        if (!user) {
            await signInWithGoogle()
        }
        
        navigate("/rooms/new");
    }

    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
        
            <main>
                <div className='main-content'>
                    <img src={ logoImg } alt="Letmeask" />
                    <button className='create-room' onClick={ handleCreateRoom }>
                        <img src={ googleIconImage } alt="Logo do Google" />
                        Crie sua sala com o Google
                    </button>
                    <div className='separator'>ou entre em uma sala</div>
                    <form>
                        <input 
                            type="text" 
                            placeholder="Digite o código da sala" 
                        />
                        <Button type="submit">Entrar na sala</Button>
                    </form>
                </div>
            </main>
        </div>
    )

}