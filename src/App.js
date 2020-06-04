import React, {Component} from 'react';
import './App.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faTrash)

class App extends Component {

  state = {
    items : [],
    item : ""
  }

  handelClick = event => {
    const itemm = this.state.item
    this.setState({items: this.state.items.concat(itemm)})
    event.preventDefault()
    this.setState({item : ''})
  };

  itemChangeHandeler = event => {
    this.setState({item : event.target.value})
  }

  handelDelete = (event, indexx) => {
    const newitems = this.state.items.slice(0, indexx).concat(this.state.items.slice(indexx + 1, this.state.items.length))
    this.setState({items : newitems})
  }

  render() {
    const listt = this.state.items.map((item, index) => 
      <p key={index}>{item}
        <span>
          <FontAwesomeIcon className="faicons" icon="trash" onClick={(e) => {this.handelDelete(e, index)}}>Delete</FontAwesomeIcon>
        </span>
      </p>)
      return (
        <>
          <p id="heading">To Do App</p>
          <div className="App">
            <header>
              <form id="to-do-form">
                <input type='text' placeholder="Enter Text" value={this.state.item} onChange={this.itemChangeHandeler}></input>
                <button type="submit" onClick={this.handelClick}>Add</button>
              </form>    
            </header>    
            <div className="list">
              {listt}
            </div>
          </div>
        </>
      );
  };
};


export default App;
