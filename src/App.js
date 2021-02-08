import React, { Component, useState } from 'react'
import Layout from './hoc/Layout/Layout'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Quiz from './containers/Quiz/Quiz'
import QuizList from './containers/QuizList/QuizList'
import QuizCreator from './containers/QuizCreator/QuizCreator'
import Auth from './containers/Auth/Auth'
import Counter from './Counter'
import { add, sub, addNumber, asynkAdd } from './redux/actions/actions'

class App extends Component {
  render() {
    return (
      // <Layout>
      //   <Switch>
      //     <Route path="/auth" component={Auth} />
      //     <Route path="/quiz-creator" component={QuizCreator} />
      //     <Route path="/quiz/:id" component={Quiz} />
      //     <Route path="/" component={QuizList} />
      //   </Switch>
      // </Layout>
      <div className={'App'}>
        <h1>
          COUNTER <strong>{this.props.counter}</strong>
        </h1>
        <hr />
        <div className="Actions">
          <button onClick={this.props.onAdd}>Add 1</button>
          <button onClick={this.props.onSub}>Substract 1</button>
        </div>
        <div className="Actions">
          <button onClick={() => this.props.onAddNumber(11)}>Add 11</button>
          <button onClick={() => this.props.onAddNumber(-12)}>
            Substract 12
          </button>
        </div>
        <div className="Actions">
          <button onClick={() => this.props.onAsynkAdd(100)}>
            Async Add 100
          </button>
        </div>

        <Counter />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter1.counter,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch(add()),
    onSub: () => dispatch(sub()),
    onAddNumber: (number) => dispatch(addNumber(number)),
    onAsynkAdd: (number) => dispatch(asynkAdd(number)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
