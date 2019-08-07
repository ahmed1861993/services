import React,{Component} from 'react';
import TodoItems from './task/Todoitems/Todoitems'
import AddItems from './task/Additems/Additems'
import Home from './task/Home/Home'
import {BrowserRouter , Route} from 'react-router-dom';
import './index.css';

class App extends Component{
  state = {
    items : [
      
    ]
  }
  deleteItem =  (id) =>{
let items=this.state.items;
let i =items.findIndex(item => item.id === id)
items.splice(i,1)
this.setState({items})
  }
  AddItems=(item) =>{
    item.id = Math.random();
    let items=this.state.items;
    items.push(item);
    this.setState({items})
  };
  render(){
    return (

      
      <div className="App ">

      <Home/>
     
      <div className="container">
     <h1 className="text-center">We Help Throuth</h1>
     <AddItems AddItems={this.AddItems}/>
       <TodoItems items={this.state.items} deleteItem={this.deleteItem}/>
       </div>


       
      </div>
    );
  }
} 

 


export default App;
