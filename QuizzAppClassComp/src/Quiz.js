import React, { Component } from 'react';
import { QuizzData } from './Question';
class Quiz extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         userAnswer:null,
         currentIndex:0,
         options:[],
         quizEnd:false,
         score:0,
         disabled:true
      }
    }

    loadQuiz=()=>
    {
        const {currentIndex}=this.state;
        this.setState(()=>
        {
            return{
                question: QuizzData[currentIndex].question,
                options:QuizzData[currentIndex].options,
                answer:QuizzData[currentIndex].answer
            }
        })
    }

    nextQuestionHandler=()=>
    {
        const {userAnswer,answer,score}=this.state
        if(userAnswer===answer){
            this.setState({
                score:score+1
            })
        }
        this.setState({
            currentIndex:this.state.currentIndex+1,
             userAnswer:null
        })
    }

    componentDidMount(){
        this.loadQuiz();
    }

    checkAnswer=answer=>
    {
        this.setState({
            userAnswer:answer,
            disabled:false
        })
    }

    componentDidUpdate(preProps,preState){
       const {currentIndex}=this.state;
       if(this.state.currentIndex!=preState.currentIndex){
        this.setState(()=>
        {
            return{
                question: QuizzData[currentIndex].question,
                options:QuizzData[currentIndex].options,
                answer:QuizzData[currentIndex].answer
            }
        });   
       }
    }

    finishHandler=()=>
    {
        if(this.state.currentIndex===QuizzData.length-1){
            this.setState({
                quizEnd:true
            })
        }
    }
    render() {
        const{question,options,currentIndex,userAnswer,quizEnd}=this.state;
        if(quizEnd){
            return(
                <div>
                    <h1>Congratulation Final Score is{this.state.score} points</h1>
                    <p> The correct answers are</p>
                    <ul>
                        {
                            QuizzData.map((item,index)=>
                            
                                <li className='options' key={index}>
                                    {item.answer}
                                </li>
                            )
                        }
                    </ul>
                </div>
            )
        }
        return (
            <div>
                <h2>{question}</h2>
                <span>{`question ${currentIndex+1} of ${QuizzData.length}`}</span>
                 {
                   options.map(opt=>
                    // <h3>{opt}</h3>
                    <p key={opt.id} className={`options ${userAnswer===opt?`selected`:null}`} onClick={()=>this.checkAnswer(opt)} >{opt}</p>
                    )
                 }

                 {
                     currentIndex<QuizzData.length-1 &&
                     <button disabled={this.state.disabled} onClick={this.nextQuestionHandler}>Next Question</button>
                 }
                 {
                     currentIndex===QuizzData.length-1 &&
                     <button onClick={this.finishHandler} disabled={this.state.disabled}>Finish</button>
                 }
            </div>
        );
    }
}

export default Quiz;