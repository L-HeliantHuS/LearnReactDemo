import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {id: 1, name: "1", number: 0},
      {id: 2, name: "2", number: 0},
      {id: 3, name: "3", number: 0},
      {id: 4, name: "4", number: 0},
      {id: 5, name: "5", number: 0},
      {id: 6, name: "6", number: 0},
      {id: 7, name: "7", number: 0},
      {id: 8, name: "8", number: 0},
      {id: 9, name: "9", number: 0},
      {id: 10, name: "0", number: 0},
    ],
    isShowPerson: false,
    buttonText: "Show"
  };

  // addNumber 根据id每次 number += id
  addNumber = () => {
    let personNew = [...this.state.persons];
    personNew.map((person, index) => {
      return person.number += index + person.id;
    });

    this.setState({
      persons: personNew
    })
  };

  // changedValue Person组件的Input Changed事件.
  changedValue = (event, id) => {
    let personNew = [...this.state.persons];

    let personIndex = personNew.findIndex(p => {
      return p.id === id
    });
    personNew[personIndex].name = event.target.value;


    // personNew[id].name = event.target.value;
    this.setState({
      persons: personNew,
    })

  };

  // ChangedShowStatus 修改Button上的文字
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
    let personsNew = [...this.state.persons];
    personsNew.splice(itemIndex, 1);
    this.setState({
      persons: personsNew
    })
  };


  render() {
    let persons = null;
    let btnColors = [];

    if (this.state.persons.length > 5) {
      btnColors.push("red")
    }

    if (this.state.persons.length <= 5) {
      btnColors.push("green")
    }

    let style = {
      backgroundColor: btnColors.join(" ")
    };

    if (this.state.isShowPerson) {
      persons = (
          this.state.persons.map((person, index) => {
            return <Person name={person.name} number={person.number} key={person.id} id={person.id}
                           myClick={() => this.deleteItem(index)}
                           onChanged={(event) => this.changedValue(event, person.id)}/>
          })
      )
    } else {

    }

    return (
        <div className="App">
          {/*<button onClick={this.addNumberHandler}>Add</button>*/}
          <button onClick={this.addNumber}>AddNumber</button>
          |
          <button style={style} onClick={this.ChangedShowStatus}>{this.state.buttonText}</button>

          {persons}

        </div>
    )
  };
}

export default App;
