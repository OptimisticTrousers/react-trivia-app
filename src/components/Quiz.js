import React from 'react'
import Question from './ui/Question'
import Button from './ui/Button'
import uniqid from 'uniqid';

export default function Quiz({handleStart, isQuizOver, questions}){
    
    
    const [selectedAnswers, setSelectedAnswers] = React.useState(() => populateState())

    const [isQuizSubmitted, setIsQuizSubmitted] = React.useState(false)

    function handleSubmit(){
        setIsQuizSubmitted(prevValue => !prevValue)
    }

    function populateState(){
        const newArray = []
        
        for(let i = 0; i < questions.length; i++){
            const question = questions[i].question
            const userSelections = [
                {
                    answer: questions[i].correct_answer,
                    isSelected: false,
                    correct: true,
                },
                {
                    answer: questions[i].incorrect_answers[0],
                    isSelected: false,
                    correct: false,
                },
                {
                    answer: questions[i].incorrect_answers[1],
                    isSelected: false,
                    correct: false,
                },
                {
                    answer: questions[i].incorrect_answers[2],
                    isSelected: false,
                    correct: false,
                }
            ]
            const randomlySortedQuestions = userSelections.sort(() => Math.random() - 0.5)
            
            newArray.push({question, userSelections: randomlySortedQuestions})
        }
        
        return newArray
    }


    function selectQuestion(questionInfo){
        setSelectedAnswers(prevAnswers => {
            return prevAnswers.map((prevAnswer) => {
                if(questionInfo.question === prevAnswer.question){
                    return {question: prevAnswer.question, userSelections: prevAnswer.userSelections.map(userSelection => {
                        return userSelection.answer === questionInfo.answer ? {...userSelection, isSelected: !userSelection.isSelected} : {...userSelection, isSelected: false}
                    })} 
                }
                return {question:prevAnswer.question, userSelections: prevAnswer.userSelections}
            })
        })
    }

    function checkAnswers(){

        const correctAnswers = questions.map(question => {
            return question.correct_answer
        })
    console.log(correctAnswers)

        const correctNumberOfAnswers = selectedAnswers.map(selectedAnswer => {
            return selectedAnswer.userSelections.find((userSelection, index) => {
                console.log(userSelection.answer, correctAnswers[index], userSelection.isSelected)
                return userSelection.correct
            })
        })

        handleSubmit()

        console.log(selectedAnswers)
        console.log(correctNumberOfAnswers)

    }
    
    const newQuestions = selectedAnswers.map((selectedAnswer, index) => 
    {
       return <Question 
            key={uniqid()} 
            question={selectedAnswer.question} 
            selectQuestion={selectQuestion}
            userSelections={selectedAnswers[index].userSelections}
            isQuizSubmitted={isQuizSubmitted}
        />
    })
        
    
    return (
        <div className="quiz-container">
            <div className="questions">
                {newQuestions}
            </div>
            <div className="button-container">
                <Button handleClick={checkAnswers} value={"Check answers"}/>
            </div>
        </div>
    )
}