import React from 'react'
import Question from './ui/Question'
import Button from './ui/Button'
import uniqid from 'uniqid';

export default function Quiz({handleStart, hasStartedQuiz, questions}){
    
    
    const [selectedAnswers, setSelectedAnswers] = React.useState(() => populateState())
    
    
    function populateState(){
        const newArray = []
        
        for(let i = 0; i < questions.length; i++){
            const question = questions[i].question
            const userSelections = [
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
            ]
            const randomlySortedQuestions = userSelections.sort(() => Math.random() - 0.5)
            
            newArray.push({question, userSelections: randomlySortedQuestions})
        }
        
        return newArray
    }

    console.log(selectedAnswers)
    
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
    
    const newQuestions = questions.map((question, index) => 
    {
       return <Question 
            key={uniqid()} 
            question={question.question} 
            selectQuestion={selectQuestion}
            userSelections={selectedAnswers[index].userSelections}
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