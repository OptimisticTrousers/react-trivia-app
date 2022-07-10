import React from 'react'
import Start from './components/Start'
import Quiz from './components/Quiz'

export default function App() {
    
    const [hasStartedQuiz, setHasStartedQuiz] = React.useState(false)
    
    const [questions, setQuestions] = React.useState([])
    
    React.useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5&type=multiple').then(res => res.json()).then(data => setQuestions(data.results))
    }, [])
    
    function handleStart(){
        setHasStartedQuiz(prevValue => !prevValue)
    }
    
    return (
        <main>
            {hasStartedQuiz ? 
            <Quiz 
                key={"gokoko"}
                hasStartedQuiz={hasStartedQuiz} 
                questions={questions}
                handleStart={handleStart}
            /> : <Start handleStart={handleStart}/>}
        </main>
    )
}