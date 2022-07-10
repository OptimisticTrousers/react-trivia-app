import React from 'react'
import Question from './ui/Question'
import Button from './ui/Button'

export default function Quiz({handleStart, hasStartedQuiz, questions}){
    
    
    const [selectedAnswers, setSelectedAnswers] = React.useState(populateState())
    
    
    function populateState(){
        const newArray = []
        
        for(let i = 0; i < questions.length; i++){
            newArray.push({question: questions[i].question, userSelections: [
                {
                    answer: questions[i].correct_answer,
                    isSelected: false
                },
                {
                    answer: questions[i].incorrect_answers[0],
                    isSelected: false
                },
                {
                    answer: questions[i].incorrect_answers[1],
                    isSelected: false
                },
                {
                    answer: questions[i].incorrect_answers[2],
                    isSelected: false
                }
            ]})
        }
        
        return newArray
    }
    
    function selectQuestion(questionInfo){
        setSelectedAnswers(prevAnswers => {
            return [prevAnswers.question, prevAnswers.userSelections.map(prevAnswer => {
                return prevAnswer.question === questionInfo.question ? {...prevAnswer, isSelected: !prevAnswer.isSelected} : prevAnswer
            })]      
        })
    }
    
    
    const newQuestions = questions.map(question => 
    {
       return <Question 
            key={question.question} 
            question={question.question} 
            selectQuestion={selectQuestion}
            userSelections={selectedAnswers.userSelections}
            correct_answer={question.correct_answer} 
            incorrect_answers={question.incorrect_answers}
        />
    })
        
    
    return (
        <div className="quiz-container">
            <div className="questions">
                {newQuestions}
            </div>
            <div className="button-container">
                <Button handleClick={handleStart} value={"Check answers"}/>
            </div>
        </div>
    )
}