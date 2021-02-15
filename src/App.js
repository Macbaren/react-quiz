import React, { Component } from 'react'
import Layout from './hoc/Layout/Layout'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Quiz from './containers/Quiz/Quiz'
import QuizList from './containers/QuizList/QuizList'
import QuizCreator from './containers/QuizCreator/QuizCreator'
import Auth from './containers/Auth/Auth'
import Logout from './components/Logout/Logout'
import { autoLogin } from './store/actions/auth'
// import Counter from './Counter'
// import { add, sub, addNumber, asynkAdd } from './redux/actions/actions'

class App extends Component {
  componentDidMount() {
    this.props.autoLogin()
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/quiz/:id" component={Quiz} />
        <Route path="/" exact component={QuizList} />
        <Redirect to="/" />
      </Switch>
    )

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/quiz-creator" component={QuizCreator} />
          <Route path="/quiz/:id" component={Quiz} />
          <Route path="/logout" component={Logout} />
          <Route path="/" exact component={QuizList} />
          <Redirect to="/" />
        </Switch>
      )
    }
    return <Layout>{routes}</Layout>
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.token,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    autoLogin: () => dispatch(autoLogin()),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

// <div className={'App'}>
//   <h1>
//     COUNTER <strong>{this.props.counter}</strong>
//   </h1>
//   <hr />
//   <div className="Actions">
//     <button onClick={this.props.onAdd}>Add 1</button>
//     <button onClick={this.props.onSub}>Substract 1</button>
//   </div>
//   <div className="Actions">
//     <button onClick={() => this.props.onAddNumber(11)}>Add 11</button>
//     <button onClick={() => this.props.onAddNumber(-12)}>
//       Substract 12
//     </button>
//   </div>
//   <div className="Actions">
//     <button onClick={() => this.props.onAsynkAdd(100)}>
//       Async Add 100
//     </button>
//   </div>

//   <Counter />
// </div>

// function mapStateToProps(state) {
//   return {
//     counter: state.counter1.counter,
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     onAdd: () => dispatch(add()),
//     onSub: () => dispatch(sub()),
//     onAddNumber: (number) => dispatch(addNumber(number)),
//     onAsynkAdd: (number) => dispatch(asynkAdd(number)),
//   }
// }
