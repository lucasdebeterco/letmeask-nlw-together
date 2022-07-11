import { useParams } from 'react-router-dom';
import { database, firebase } from '../services/firebase';

import logoImg from '../assets/logo.svg'
import deleteImg from '../assets/delete.svg'
import '../styles/room.scss';

import { Question } from '../components/Question';
import { RoomCode } from '../components/RoomCode';
import { Button } from '../components/Button';
import { FormEvent, useEffect, useState } from 'react';

import { useAuth } from '../hooks/useAuth';
import { useRoom } from '../hooks/useRoom';

type RoomParams = {
    id: string;
}

export function AdminRoom() {
    //const { user }  = useAuth();
    const params = useParams<RoomParams>();
    const roomId = params.id!;
    const { title, questions} = useRoom(roomId)

    async function handleDeleteQuestion(questionId: string) {
        if(window.confirm('Você tem certeza que deseja excluir essa pergunta?')) {
            const questionRed = await firebase.database().ref(`rooms/${roomId}/questions/${questionId}`).remove();
        }
    }

    return (
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="Letmeask" />
                    <div>
                        <RoomCode code={roomId} />
                        <Button isOutlined>Encerrar sala</Button>
                    </div>
                </div>
            </header>

            <main>
                <div className="room-title">
                    <h1>Sala {title}</h1>
                    {questions.length > 0 && <span>{questions.length} pergunta(s)</span> }
                </div>

                <div className="question-list">
                    {questions.map(question => {
                        return (
                            <Question
                                key={question.id}
                                content={question.content}
                                author={question.author}
                            >
                                <button
                                type='button'
                                onClick={() => handleDeleteQuestion(question.id)}>
                                    <img src={deleteImg} alt="Remover pergunta" />
                                </button>
                            </Question>
                        );
                    })}
                </div>
            </main>
        </div>
    );
}