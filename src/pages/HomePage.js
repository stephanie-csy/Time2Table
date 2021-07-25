import React from "react"
import Box from "../components/Box";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import "../styles.css";

import { db } from "../config/firebase"
import { auth } from "../config/firebase"
import { isNull } from "lodash";
// import { useAuth } from "../AuthContext"

class HomePage extends React.Component {

    state = { 
        users: null,
        item: null,
        gotPending: false
    }

    componentDidMount(){
        db.collection('users').doc(auth.currentUser.email).get().then(
            doc => { 
                const users = []
                if (doc.data().pendingReceivedFriendReqs !== "") {
                    users.push(doc.data().pendingReceivedFriendReqs)
                }
                this.setState({ item: doc.data().pendingReceivedFriendReqs })
                this.setState({ users: users })
                if (this.state.users !== null && this.state.users.length !== 0) {
                    this.setState({ gotPending: true })
                }
                console.log(this.state.users)
            }
        )
        .catch( error => console.log(error))
    }

    render() {
        const receiverEmail = auth.currentUser.email
        const senderEmail = this.state.item
        const gotPending = this.state.gotPending

        function acceptFriend() {

            // clear pending field of both parties

            // receiever
            db.collection('users').doc(receiverEmail).update({
                pendingReceivedFriendReqs: ''
            })
        
            // sender
            db.collection('users').doc(senderEmail).update({
                pendingSentFriendReqs: ''
            })
        
            // add document to friendship subcollection of both parties
        
            //receiver
            const newFriendshipReceiverRef = db.collection('users').doc(receiverEmail).collection('friendships').doc(senderEmail);
            newFriendshipReceiverRef.set({
                friend: senderEmail
            })
        

            //sender
            const newFriendshipSenderRef = db.collection('users').doc(senderEmail).collection('friendships').doc(receiverEmail);
            newFriendshipSenderRef.set({
                friend: receiverEmail
            })

        }

        function declineFriend() {
            // clear pending field of both parties
        
            // receiever
            db.collection('users').doc(receiverEmail).update({
                pendingReceivedFriendReqs: ''
            })
        
            // sender
            db.collection('users').doc(senderEmail).update({
                pendingSentFriendReqs: ''
            })
        }

        return (
            <>
                <Box>
                    <h1>Getting Started</h1>
                    
                    <h6>
                        Add a friend to start time2tabling together!
                    </h6>
    
                    <Button
                        variant="contained"
                        color="primary"
                    >
                        <Link to="/AddFriendsPage" style={{ color: '#FFF' }}>Add Friend</Link>
                    </Button>
                </Box>
    
                <Box>
                    
                    <h1>You Have Pending Friend Requests From:</h1>
                     
                    {this.state.users &&
                    this.state.users.map( user => {
                        return (
                            <div>
                                <h4>{user}</h4>
                            </div>
                        )
                    }) }

                    <div>
                    {gotPending ? 
                        (<React.Fragment>
                            <button onClick={acceptFriend} >                        
                                Accept
                            </button>

                            <button onClick={declineFriend}>
                                Decline
                            </button>
                        </React.Fragment>) 
                        : (<p></p>)
                    }
                    </div>
                    
                </Box>
    
                <Box>
                    <h1>Upcoming Meet Ups</h1>
    
                    <h6>
                        Tuesday, 25 May 2021 13:00 - 15:00 with Besties
                    </h6>
                </Box>
            </>
        );

        
    }
}




export default HomePage;