import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import logo from './logo.svg';
import { ageUp, ageDown } from './store/actions/actions';


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <div>Age: <span>{this.props.age}</span></div>
        <button onClick={this.props.onAgeUp}>Age Up</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
        {this.props.loading && <img src={logo} className="App-logo"/>}
        <hr/>
        <div>History</div>
        <div>
          <ul>
            {
              this.props.history.map(el => (
                <li 
                  className="historyItem"
                  key={el.id}
                  onClick={() => this.props.onDelete(el.id)}
                  >
                  {el.age}
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    age: state.age,
    history: state.history,
    loading: state.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch(ageUp(1)),
    onAgeDown: () => dispatch(ageDown(1)),
    onDelete: (id) => dispatch({type: 'DEL_ITEM', key: id})
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
