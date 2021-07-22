import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export function LoginVerification(props){
    
    if (!props.username)
    return(
        <Redirect to={{ pathname: '/login'}} />
    )
    return(<></>)
} 