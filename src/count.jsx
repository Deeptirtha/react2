import React from "react"
import "./num.css"

class Numcomponent extends React.Component{    
    constructor(){
        super()
    this.state={
        a:5,
    }
    }
    inc(){
        this.setState({
            a:this.state.a+1
        })
    }
    dec(){
        this.setState({
            a:this.state.a-1
        })
    }
    render(){
        return <div className="blck">
    <div >
    <div className="a">
    <p>count--{this.state.a}</p>
    <input type={"number"} value={this.state.a} onChange={(event)=>this.changeval(event.target.value)}/></div>
    <div className="bttn">
    <button className="btn" onClick={()=>{this.inc()}}>+Increase</button>
    <button className="btn"  onClick={()=>this.dec()}>-Decrease</button>
    </div>
    </div>
    
    </div>
  
    }
    
    }
    
    export default Numcomponent