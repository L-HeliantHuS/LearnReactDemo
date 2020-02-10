import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {name: "1", number: 0},
      {name: "2", number: 2},
      {name: "3", number: 5},
      {name: "4", number: 5},
      {name: "5", number: 5},
      {name: "6", number: 5},
      {name: "7", number: 5},
      {name: "8", number: 5},
      {name: "9", number: 5},
      {name: "0", number: 5},
    ],
    isShowPerson: false,
    buttonText: "Show"
  };

  addNumberHandler = () => {
    this.setState(state => ({
      number: state.number + 1
    }));
  };


  changedValue = (event) => {
    this.setState({
      name: event.target.value
    })
  };


  ChangedShowStatus = () => {
    // 当isShowPerson为false的时候, 需要让buttonText展示Show 反之就是Unshow
    let buttonText = this.state.isShowPerson ? "Show" : "UnShow";
    this.setState({
      isShowPerson: !this.state.isShowPerson,
      buttonText: buttonText
    });
  };

  deleteItem = (itemIndex) => {
    console.log(itemIndex);
    let personsNew = this.state.persons;
    personsNew.splice(itemIndex, 1);
    this.setState({
      persons: personsNew
    })
  };


  render() {
    let persons = null;

    if (this.state.isShowPerson) {
      persons = (
          this.state.persons.map((person, index) => {
            return <Person name={person.name} number={person.number} key={index} id={index} myClick={() => this.deleteItem(index)}/>
          })
      )
    } else {

    }

    return (
        <div className="App">
          {/*<button onClick={this.addNumberHandler}>Add</button>*/}

          <button onClick={this.ChangedShowStatus}>{this.state.buttonText}</button>

          {persons}

        </div>
    )
  };
}

export default App;
