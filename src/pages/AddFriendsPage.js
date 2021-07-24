import React, { useState } from "react";
import Box from "../components/Box";
import { auth } from "../config/firebase"
import { db } from "../config/firebase"


function AddFriendsPage() {
    const [receivingFriend, setReceivingFriend] = useState(""); // make into array?
    const sendingUser = auth.currentUser.email;

    function sendFriendRequest() {
        if (sendingUser === receivingFriend) {
            return <h1>Something went wrong.</h1>; //idky this doesnt show up
        } else {

        // CAN ONLY REQ 1 FRIEND AT A TIME...

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


                <button onClick={sendFriendRequest}>
                    Submit
                </button>
        </Box>

    );
}

export default AddFriendsPage;