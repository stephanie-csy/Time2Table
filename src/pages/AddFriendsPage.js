import React, { useState } from "react";
import Box from "../components/Box";
import { auth } from "../config/firebase"
import { db } from "../config/firebase"


function AddFriendsPage() {
    const [receivingFriend, setReceivingFriend] = useState("");
    const sendingUser = auth.currentUser.email;

    function sendFriendRequest() {
        //cannot send urself
        if (sendingUser === receivingFriend) {
            return (
            <div>
            <h1>Unable to send request to own email</h1>
            </div>
            ); //idky this doesnt show up

        } else {

        // put sender's request in receiver's pendingReceivedFriendReqs
        db.collection('users').where('email', '==', receivingFriend).get().then(querySnapshot => {
            querySnapshot.forEach(documentSnapshot => {
                documentSnapshot.ref.update({
                    pendingReceivedFriendReqs: sendingUser
                })                
            });
        });

        db.collection('users').doc(sendingUser).update({
            pendingSentFriendReqs: receivingFriend })
        }
        
        setReceivingFriend("")
    }

    return (
        <Box>
        
            <h1>Add Friends</h1>
                
                <h6>
                    Add a friend to start time2tabling together! Enter their email below:
                </h6>
                
                <input
                    type="text"
                    value={receivingFriend}
                    onChange={(e) => setReceivingFriend(e.target.value)}
                />

                <button onClick={sendFriendRequest} >
                    Submit
                </button>

        </Box>

    );
}

export default AddFriendsPage;