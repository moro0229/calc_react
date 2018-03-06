import React , { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class CalcPage extends Component {
    constructor(props){
        super(props)
        this.title = "でんたく"
    }

    render(){
        return(
            <div>
              <Title title={this.title} />
              <Result expr="1+1" />
              <Buttons />
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

const Buttons = () => {
    return(
        <div>
          <table>
            <tr><td><Button value="1" /></td><td><Button value="2" /></td><td><Button value="3" /></td></tr>
            <tr><td><Button value="4" /></td><td><Button value="5" /></td><td><Button value="6" /></td></tr>
            <tr><td><Button value="7" /></td><td><Button value="8" /></td><td><Button value="9" /></td></tr>
            <tr><td><Button value="0" /></td><td><Button value="+" /></td><td><Button value="-" /></td></tr>
            <tr><td><Button value="=" /></td></tr>            
          </table>
        </div>
    )
}

const Button = (props) => {
    return (
        <input type="button" value={props.value} />
    )
}

Button.propTypes = {
    value: PropTypes.string
}


ReactDOM.render(
    <CalcPage />,
    document.getElementById('root')
)



