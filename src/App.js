import React from 'react'
import Start from './components/Start'
import Quiz from './components/Quiz'
import uniqid from 'uniqid';
import {decode} from 'html-entities';

export default function App() {
    
    const [isQuizOver, setIsQuizOver] = React.useState(() => false)

    const [questions, setQuestions] = React.useState([])
    
    React.useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5&type=multiple').then(res => res.json()).then(data => {
            const array = data.results
            console.log(array)

            const decodedArray = array.map(question => {
                return {question: decode(question.question), correct_answer: decode(question.correct_answer), incorrect_answers: question.incorrect_answers.map(incorrectAnswer => decode(incorrectAnswer))}
            })
            setQuestions(decodedArray)
        })
    }, [isQuizOver])
    
    function handleStart(){
        setIsQuizOver(prevValue => !prevValue)
    }
    
    return (
        <main>
            {isQuizOver ? 
            <Quiz 
                key={uniqid()}
                isQuizOver={isQuizOver} 
                questions={questions}
                handleStart={handleStart}
            /> : <Start handleStart={handleStart}/>}
        </main>
    )
}