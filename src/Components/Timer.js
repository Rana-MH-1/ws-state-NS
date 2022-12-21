import React from 'react'
class Timer extends React.Component{
   constructor(){
    console.log('Hi Im in a constructor method');
    super()
    this.state={
        timer:0,
        intervall : null
    }
   }
  

   componentDidMount(){
    console.log('Comp Timer has mounted');
    this.setState({intervall : setInterval(()=>this.setState({timer : this.state.timer + 1}),1000)})
   }
   componentDidUpdate(){
    console.log('comp Timer has been updated');
   }

   componentWillUnmount(){
    clearInterval(this.state.intervall)
    console.log('Comp Timer is killed!!');
   }

   render(){
    return (
        <div>
            <h3>{this.state.timer}</h3>
        </div>
    )
   }
}

export default Timer