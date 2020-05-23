import React, { Component } from 'react';
import logo from './logo.svg';
import tick from './image/tickImg.svg';
import './App.css';
import TodoItem from './components/TodoItem';



class App extends Component{
  constructor() {
    super();
    this.state=
    {
      newItem:'',
      TodoItemArr:[
        {title:'mua bim bim',isComplete:true},
        {title:'di da bong',isComplete:false},
        {title:'di mua ruou',isComplete:false},
      ]
    };
   this.onKeyUp=this.onKeyUp.bind(this);
   this.onChange=this.onChange.bind(this);
  }
  onItemClick(item){
    return (event)=>{
      const isComplete=item.isComplete;
      const {TodoItemArr}=this.state;
      const index=TodoItemArr.indexOf(item);
      this.setState({
        TodoItemArr:[
          ...TodoItemArr.slice(0,index),
          {
            ...item,isComplete:!isComplete
          },
          ...TodoItemArr.slice(index+1)
        ]
      })
      
    }
  }
  onKeyUp(event){
    const { TodoItemArr } = this.state;
    var text=event.target.value;
    if(!text)
    {
      return;
    }
    if(!text.trim()){return}
    if(event.keyCode===13)
    {
      this.setState({
        newItem:'',
        TodoItemArr:[
          {title:text,isComplete:false},
          ...TodoItemArr
        ]
      })
    }
    
  }
  onChange(event){
    this.setState({
      newItem:event.target.value
    });

  }
  render(){
    const { TodoItemArr,newItem } = this.state;
      return (
        <div className="App">
          <div className="Header">
            <img src={tick} width={32} height={32} />
            <input 
            type="text" 
            onKeyUp={this.onKeyUp}
            value={newItem}
            onChange={this.onChange}
            /> 
          </div>
          {
            TodoItemArr.length>0&&TodoItemArr.map((item,index)=>
            <TodoItem key={index} item={item} onClick={this.onItemClick(item)}/>
            )
          }
          {TodoItemArr.length===0&&'Nothing here'}
        </div>
      );
  }
 
}

export default App;
