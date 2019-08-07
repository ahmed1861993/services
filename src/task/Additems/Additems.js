import React,{Component} from 'react';
import './Additems.css'
class AddItems extends Component{
    state={
        name: "",
        age: ""
    }
    handleChange=(e)=>{
      this.setState({
        [e.target.id] :  e.target.value
      })
    }
    handlesubmit = (e)=>{
        e.preventDefault();
       if(e.target.name.value === ''){
       return false;
       }else{
        this.props.AddItems(this.state)
        this.setState({
            name:"",
            age:""
        })
       }
    }
    render(){
        return(
            <div>
              
               <form onSubmit={this.handlesubmit}>
                  <input type="text" placeholder="Service Title" id="name" onChange={this.handleChange} value={this.state.name}/>
                 
                  <input type="submit" value="Add"/>
               </form>
            </div>
        )
    }
       
   
}

export default AddItems;