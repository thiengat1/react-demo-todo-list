import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';


class App extends Component{
  constructor() {
    super();
    this.state=
    {
      TodoItemArr:[
        {title:'mua bim bim',isComplete:true},
        {title:'di da bong',isComplete:false},
        {title:'di mua ruou',isComplete:false},
      ]
    };
   
  }
  onItemClick(){
    console.log(item);
    
  }
  render(){
    const { TodoItemArr } = this.state;
      return (
        <div className="App">
          {
            TodoItemArr.length>0&&TodoItemArr.map((item,index)=>
            <TodoItem key={index} item={item} onClick={this.onItemClick}/>
            )
          }
          {TodoItemArr.length===0&&'Nothing here'}
        </div>
      );
  }
 
}

export default App;
