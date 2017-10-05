import React, { Component } from 'react'
import { addName, addAge } from '../actions/index'
import { connect } from 'react-redux'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      age: '',
      name: "dave"
    }
  }

  onChange = (e) => {
      this.setState({
        name: e.target.value
      })


  }
  render() {
    console.log('render')
    return (
      <div>
        <input onChange={this.onChange} type="text" />
        <button onClick={this.props.dispatchAge(this.state.age)}>Submit Age</button>
        <button onClick={this.props.dispatchName(this.state.name)}>Submit Name</button>
        {this.state.age}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchAge(int) {
      console.log('dispatchtoprops', int)
      dispatch(addAge(int))
    },
    dispatchName(str) {
      console.log('dispatchtoprops', str)
      dispatch(addName(str))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)