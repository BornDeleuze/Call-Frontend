import React from "react";

function About(){
    return(
        <div className="about">
            <h1>ABOUT</h1>
            
            <h5>Thanks for checking out my application!</h5>
            <p>My name is Matt, and I built this as my capstone project for my studies at Flatiron School.</p>
            <p>This is a chat application, you can sign in, join chat rooms, and send messages to other users in real time.</p>
            <p>This project uses a Rails backend, making use of Action Cable to allow websockets to push messages for all connected users.</p>
            <p>The backend repo can be found <a href="https://github.com/BornDeleuze/Call_Backend">here</a></p>
        </div>
    )
}

export default About