import illustrationImg from '../assets/illustration.svg'
import logoImg from '../assets/logo.svg'

import { Button } from '../components/Button'

import '../styles/auth.scss';

export function NewRoom() {
    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
        
            <main>
                <div className='main-content'>
                    <img src={logoImg} alt="Letmeask" />
                    <h2>Criar uma nova sala</h2>
                    <form>
                        <input 
                            type="text" 
                            placeholder="Nome da sala" 
                        />
                        <Button type="submit">Criar sala</Button>
                    </form>
                    <p>
                        quer entrar em uma sala existente? <a href="#">clique aqui</a>
                    </p>
                </div>
            </main>
        </div>
    )

}