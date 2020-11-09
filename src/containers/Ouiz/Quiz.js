import React, { Component } from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component {
  state = {
    activeQuestion: 0,
    answerState: null, // {[id]: 'success' 'error'} for colors changing
    quiz: [
      {
        question: 'What color is the sky?',
        rightAnswerId: 3,
        id: 1,
        answers: [
          { text: 'White', id: 1 },
          { text: 'Green', id: 2 },
          { text: 'Blue', id: 3 },
          { text: 'Yellow', id: 4 },
        ],
      },
      {
        question: 'What year Mogilev was founded?',
        rightAnswerId: 3,
        id: 2,
        answers: [
          { text: '1234', id: 1 },
          { text: '1345', id: 2 },
          { text: '1273', id: 3 },
          { text: '1500', id: 4 },
        ],
      },
    ],
  }

  onAnswerClickHandler = (answerId) => {
    const question = this.state.quiz[this.state.activeQuestion]

    if (question.rightAnswerId === answerId) {
      this.setState({
        answerState: { [answerId]: 'success' },
      })

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          console.log('Finished')
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null,
          })
        }
        window.clearTimeout(timeout)
      }, 1000)
    } else {
      this.setState({
        answerState: { [answerId]: 'error' },
      })
    }
  }

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Answer all these questions</h1>
          <ActiveQuiz
            answers={this.state.quiz[this.state.activeQuestion].answers}
            question={this.state.quiz[this.state.activeQuestion].question}
            onAnswerClick={this.onAnswerClickHandler}
            quizLenght={this.state.quiz.length}
            answerNumber={this.state.activeQuestion + 1}
            state={this.state.answerState}
          />
        </div>
      </div>
    )
  }
}

export default Quiz
