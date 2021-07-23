import React from "react";
import {connect} from 'react-redux';
import {logout} from '../redux/actions/index.js'
import { Redirect } from 'react-router';

class Logout extends React.Component {
    constructor(props){
        super(props)
        this.state={
        }
    }    
    componentDidMount(){
        this.props.logout()
        return (<Redirect to={{pathname: "/"}} />)
            
    }
    render(){
            return (
                <>
                <Redirect to={{pathname: "/"}} />
                </>
        )
    }
}

export default connect(null, {logout})(Logout);