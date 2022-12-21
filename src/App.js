import React from "react";
import Timer from './Components/Timer'

class App extends React.Component {
  constructor(){
    super()
    this.state={
        name:'Raed',
        Bio:'I am a Full Stack JS Student',
        count:0,
        Incr_value:null,
        show: false
    }
  }


  //on définit les fonctions
  Increment =()=>{
    this.setState({count: this.state.count +1})
  }

  Decrement(){
    if(this.state.count>0){
      this.setState({count: this.state.count - 1})
    }
  }

  Increment_with_value = ()=>{
    this.setState({count: this.state.count +  Number(this.state.Incr_value)})
  }

  Reset = ()=>{
    this.setState({count: 0})
  }

  ToggleShow =()=>{
    this.setState({show: !this.state.show})
  }
  

  render(){
    let Bio = this.state.Bio
    return (
      <div className="App">
       <h2>This is a ws of state -- class</h2>
       <h3>My name is  {this.state.name}</h3>
       <p>{Bio}</p>
       <hr/>
       <h3>{this.state.count}</h3>
       <button onClick={this.Increment}>+</button>
       <button onClick={()=>this.Decrement()}>-</button>
       <input onChange={(e)=> this.setState({Incr_value: e.target.value})}   />
       <button onClick={this.Increment_with_value}>Increment by value</button>
       <button onClick={this.Reset}>Reset</button>
       <hr/>
       <h2>Timer</h2>
      {this.state.show &&  <Timer/> }
       <button onClick={this.ToggleShow}>Show Timer</button>
      </div>
    )
  }
}

export default App;
