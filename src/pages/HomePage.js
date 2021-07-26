import React from "react"
import Box from "../components/Box";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import "../styles.css";

import { db } from "../config/firebase"
import { auth } from "../config/firebase"
// import { useAuth } from "../AuthContext"

class HomePage extends React.Component {

    state = { 
        senderEmail: null,
        senderName: null,
        receiverName: null,
        receivedFriendReqs: [],
        gotPendingFriends: false,
        groupName: null,
        gotPendingGroups: false,
        receivedPendingGroupReqs: [],
        membersArray: [],
        acceptedMembersArray: []
    }

    componentDidMount(){

        // get current user's name
        db.collection('users').where('email', '==', auth.currentUser.email).get().then(querySnapshot => {
            querySnapshot.forEach(documentSnapshot => {
                this.setState({ receiverName: documentSnapshot.get("name") })
            });
        });

        db.collection('users').doc(auth.currentUser.email).get().then(
            doc => { 

                // reflect current friend requests
                const receivedFriendReqs = []
                if (doc.data().pendingReceivedFriendReqs !== "") {
                    receivedFriendReqs.push(doc.data().pendingReceivedFriendReqs)
                }
                this.setState({ receivedFriendReqs: receivedFriendReqs })

                // reflect current group requests
                const users = []
                if (doc.data().pendingGroupReqsUser !== "" && doc.data().pendingGroupReqsGroupName !== "" ) {
                    const grpname = doc.data().pendingGroupReqsGroupName
                    const grpadmin = doc.data().pendingGroupReqsUser
                    users.push({
                        grpname,
                        grpadmin
                    })
                }
                this.setState({ receivedPendingGroupReqs: users })

                // get group name
                this.setState({ groupName: doc.get("pendingGroupReqsGroupName") })

                // get friend req sender's email
                this.setState({ senderEmail: doc.data().pendingReceivedFriendReqs })

                // get friend req sender's name
                db.collection('users').where('email', '==', this.state.senderEmail).get().then(querySnapshot => {
                    querySnapshot.forEach(documentSnapshot => {
                        this.setState({ senderName: documentSnapshot.get("name") })
                    });
                });

                if (doc.get("pendingGroupReqsGroupName") !== "") {
                    // make array of current group members
                    db.collection('groups').doc(this.state.groupName).get().then(doc => {
                        this.setState({ membersArray: doc.get("members") })      
                        this.setState({ acceptedMembersArray: doc.get("members") })   
                    })

                    // if receiver accepts group member request
                    db.collection('groups').doc(this.state.groupName).get().then(doc => {
                    this.setState({ acceptedMembersArray: doc.get("members") })   
                    this.setState(old => ({
                        acceptedMembersArray: [...old.acceptedMembersArray, auth.currentUser.email]
                    }));
                    })
                }
            
                // check if have pending friend reqs
                if (this.state.receivedFriendReqs !== null && this.state.receivedFriendReqs.length !== 0) {
                    this.setState({ gotPendingFriends: true })
                }
                
                // check if have pending group reqs
                if (this.state.receivedPendingGroupReqs !== null && this.state.receivedPendingGroupReqs.length !== 0) {
                    this.setState({ gotPendingGroups: true })
                }

            }
            
        )
        .catch( error => console.log(error))
    }

    render() {
        const receiverEmail = auth.currentUser.email
        const receiverName = this.state.receiverName
        const receivedFriendReqs = this.state.receivedFriendReqs
        const senderEmail = this.state.senderEmail
        const gotPendingFriends = this.state.gotPendingFriends
        const senderName = this.state.senderName

        const groupName = this.state.groupName
        const gotPendingGroups = this.state.gotPendingGroups
        const receivedPendingGroupReqs = this.state.receivedPendingGroupReqs
        const acceptedMembersArray = this.state.acceptedMembersArray


        function acceptFriend() {

        // clear pending field of both parties

            // receiever
            db.collection('users').doc(receiverEmail).update({
                // remove senderEmail from array
                // receivedFriendReqs.splice(receivedFriendReqs.indexOf(senderEmail), 1);
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
                name: senderName,
                email: senderEmail
            })

            //sender
            const newFriendshipSenderRef = db.collection('users').doc(senderEmail).collection('friendships').doc(receiverEmail);
            newFriendshipSenderRef.set({
                name: receiverName,
                email: receiverEmail
            })

        }

        function acceptGroupRequest() {

            // clear both pending fields for receiver
    
                // receiever
                db.collection('users').doc(receiverEmail).update({
                    pendingGroupReqsGroupName: "",
                    pendingGroupReqsUser: ""
                })
            
            // add document to groups collection of both parties
            
            //receiver
            const groupRefReceiver = db.collection('groups').doc(groupName);
            groupRefReceiver.update({
                members: acceptedMembersArray
            })

            // add name of group as doc to subcollection groups
                db.collection('users').doc(receiverEmail).collection('groups').doc(groupName).set({
                    admin: false,
                    member: true
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

        function declineGroupRequest() {
            // clear pending field of both parties
        
            // receiever
            db.collection('users').doc(receiverEmail).update({
                pendingGroupReqsGroupName: "",
                pendingGroupReqsUser: ""
            })

        }

        return (
            <>
                <Box>
                    <h1>Getting Started</h1>
                    
                    <h6>
                        Add a friend or create a group to start time2tabling together!
                    </h6>
    
                    <Button
                        variant="contained"
                        color="primary"
                    >
                        <Link to="/AddFriendsPage" style={{ color: '#FFF' }}>Add Friend</Link>
                    </Button>
                    <p></p>
                    <Button
                        variant="contained"
                        color="primary"
                    >
                        <Link to="/CreateGroupPage" style={{ color: '#FFF' }}>Create Group</Link>
                    </Button>
                </Box>
    
                <Box>
                    {gotPendingFriends ? 
                        (<React.Fragment>
                            <h1>You Have Pending Friend Requests From:</h1>
                            {receivedFriendReqs.map( userReq => {
                                return (
                                    <div>
                                        <h4>{userReq}</h4>
                                        <button onClick={acceptFriend} >                        
                                            Accept
                                        </button>
                                        <button onClick={declineFriend}>
                                            Decline
                                        </button>
                                    </div>
                                );
                            }) }
                            
                        </React.Fragment>) 
                        : (<h1>You Have No Pending Friend Requests</h1>)
                    }
                </Box>

                <Box>
                    {gotPendingGroups ? 
                        (<React.Fragment>
                            <h1>You Have Pending Group Requests From:</h1>
                            {receivedPendingGroupReqs.map( userReq => {
                                return (
                                    <div>
                                        <h4>{userReq.grpadmin} has invited you to join the group "{userReq.grpname}"!</h4>
                                        <button onClick={acceptGroupRequest} >                        
                                            Accept
                                        </button>
                                        <button onClick={declineGroupRequest}>
                                            Decline
                                        </button>
                                    </div>
                                );
                            }) }
                            
                        </React.Fragment>) 
                        : (<h1>You Have No Pending Group Requests</h1>)
                    }
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