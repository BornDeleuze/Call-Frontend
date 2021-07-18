import { Component } from "react";
import { connect } from 'react-redux'
import { fetchConversations } from '../redux/actions/index'


class FetchTheConvos extends Component{ 


    constructor(props){ super(props);
 
        this.state={ conversations: [] }

    }
    componentDidMount(){

        this.props.fetchConversations()

            }
    render(){ console.log(this.props)
        console.log(this.props)
        // const wowzers = this.props.conversationsPortal.map(  (convo)=>{  return(<>

        // <h1>wow are we doing it? {convo.name}</h1>


        // </>)  }  )
        

        return(<>

        {/* {wowzers} */}
        <h1>hi</h1>

        </>);

    }
    
}


const mapStateToProps =(state)=>{ // 🌀

    return{
        conversationPortal: state.conversations
    }

}

export default connect(mapStateToProps, { fetchConversations })(FetchTheConvos)