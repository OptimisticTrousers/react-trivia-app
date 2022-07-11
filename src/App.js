import React, { Component } from 'react'
import Start from './components/Start'
import Quiz from './components/Quiz'
import uniqid from 'uniqid';
import {decode} from 'html-entities';

export default class App extends Component {

    state = {
        isQuizOver: false,
        questions: []
    }
    
    componentDidUpdate() {
        console.log("Component did update", this.state.isQuizOver)
        if(this.state.isQuizOver === true && this.state.questions.length === 0){
            fetch('https://opentdb.com/api.php?amount=5&type=multiple').then(res => res.json()).then(data => {
                const array = data.results
                const decodedArray = array.map(question => {
                    return {question: decode(question.question), correct_answer: decode(question.correct_answer), incorrect_answers: question.incorrect_answers.map(incorrectAnswer => decode(incorrectAnswer))}
                })
                this.setState((prevState) => {
                    return {...prevState, questions: decodedArray}
                })
            })
        }
    }
    
    handleStart = () =>{
        this.setState((prevState) => {
            if(this.state.isQuizOver === false){
                return {questions: [], isQuizOver: !prevState.isQuizOver}
            }
            return {questions: prevState.questions, isQuizOver: !prevState.isQuizOver}
        })
    }
    
    render(){

        const {isQuizOver, questions} = this.state
        const {handleStart} = this
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
}