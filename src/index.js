import React , { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class CalcPage extends Component {
    constructor(props){
        super(props)
        this.state = {title: "でんたく", expr: ""}
    }

    keyAction(num){
        this.setState({expr: this.state.expr + num})
    }

    delAction(){
        this.setState({expr: this.state.expr.slice(0,-1)})
    }

    evalAction(){
        this.setState({expr: eval(this.state.expr)})
    }

    clearAction(){
        this.setState({expr: ""})
    }

    render(){
        return(
            <div>
              <Title title={this.state.title} />
              <Result expr={this.state.expr} />
              <Buttons keyAction={(num)=>this.keyAction(num)} delAction={()=>this.delAction()} evalAction={()=>this.evalAction()} clearAction={()=>this.clearAction()}/>
            </div>
        )
    }
}

const Title = (props) => {
    return(
        <h1>{props.title}</h1>
    )
}

Title.propTypes = {
    title: PropTypes.string
}

const Result = (props) => {
    return(
        <div>
          結果：<input type="text" value={props.expr} />
        </div>
    )
}

Result.propTypes = {
    expr: PropTypes.string
}

const Buttons = (props) => {
    return(
        <div>
          <table>
            <tr>
              <td><Button value="1" clickAction={()=>{props.keyAction("1")}}/></td>
              <td><Button value="2" clickAction={()=>{props.keyAction("2")}}/></td>
              <td><Button value="3" clickAction={()=>{props.keyAction("3")}}/></td>              
            </tr>
            <tr>
              <td><Button value="4" clickAction={()=>{props.keyAction("4")}}/></td>
              <td><Button value="5" clickAction={()=>{props.keyAction("5")}}/></td>
              <td><Button value="6" clickAction={()=>{props.keyAction("6")}}/></td>
            </tr>
            <tr>
              <td><Button value="7" clickAction={()=>{props.keyAction("7")}}/></td>
              <td><Button value="8" clickAction={()=>{props.keyAction("8")}}/></td>
              <td><Button value="9" clickAction={()=>{props.keyAction("9")}}/></td>
            </tr>
            <tr>
              <td><Button value="0" clickAction={()=>{props.keyAction("0")}}/></td>
              <td><Button value="+" clickAction={()=>{props.keyAction("+")}}/></td>
              <td><Button value="-" clickAction={()=>{props.keyAction("-")}}/></td>
            </tr>
            <tr>
              <td><Button value="d" clickAction={()=>{props.delAction()}}/></td>
              <td><Button value="c" clickAction={()=>{props.clearAction()}}/></td>              
              <td><Button value="=" clickAction={()=>{props.evalAction()}}/></td>
            </tr>            
          </table>
        </div>
    )
}

Buttons.propTypes = {
    keyAction: PropTypes.func,
    delAction: PropTypes.func,
    evalAction: PropTypes.func,
    clearAction: PropTypes.func    
}

const Button = (props) => {
    return (
        <button onClick={()=>props.clickAction()}>{props.value}</button>
    )
}

Button.propTypes = {
    value: PropTypes.string,
    clickAction: PropTypes.func
}


ReactDOM.render(
    <CalcPage />,
    document.getElementById('root')
)



