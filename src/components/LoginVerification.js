import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// export const LoginVerification = ({ component: Component, ...rest }) => (
//     <Route {...rest} render={props => (
//         localStorage.getItem('user')
//             ? <Component {...props} />
//             : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
//     )} />
// )

export function LoginVerification(props){
    
    if (!props.username)
    return(
        <Redirect to={{ pathname: '/login'}} />
    )
    return(<></>)
} 