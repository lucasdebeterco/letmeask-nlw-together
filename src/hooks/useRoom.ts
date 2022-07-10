import { useEffect, useState } from 'react';
import { database, firebase } from '../services/firebase';

type FirebaseQuestions = Record<string, {
    author : {
        name: string;
        avatar: string;
    }
    content: string;
    isAnswered: boolean;
    isHighLighted: boolean;
}>

type QuestionType = {
    id: string;
    author : {
        name: string;
        avatar: string;
    }
    content: string;
    isAnswered: boolean;
    isHighLighted: boolean;
}

export function useRoom(roomId: string) {
    const [questions, setQuestions] = useState<QuestionType[]>([]);
    const [title, setTitle] =  useState('');

    useEffect(() => {
        const roomRef = firebase.database().ref(`rooms/${roomId}`);

        roomRef.on('value', room => {
            const databaseRoom = room.val();
            const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {};

            const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => {
                return {
                    id: key,
                    content: value.content,
                    author: value.author,
                    isHighLighted: value.isHighLighted,
                    isAnswered: value.isAnswered,
                }
            })

            setQuestions(parsedQuestions);
            setTitle(databaseRoom.title);
        })
    }, [roomId]); 

    return { questions, title }
 }
