import React from 'react'
import Start from './components/Start'
import Quiz from './components/Quiz'
import uniqid from 'uniqid';

export default function App() {
    
    const [isQuizOver, setIsQuizOver] = React.useState(false)
    
    const [questions, setQuestions] = React.useState([])
    
    React.useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5&type=multiple').then(res => res.json()).then(data => setQuestions(data.results))
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