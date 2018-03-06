import React , { Component } from 'react'
import ReactDOM from 'react-dom'
// import PropTypes from 'prop-types'

class CalcPage extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
              <h1>This is Test.</h1>
            </div>
        )
    }
}

ReactDOM.render(
    <CalcPage />,
    document.getElementById('root')
)

