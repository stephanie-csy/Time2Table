import React from "react"
import { db, auth } from "../config/firebase"

function FriendRequest() {

    const receiverEmail = auth.currentUser.email;
    var senderEmail = ''
    // get sender email
    db.collection('users').doc(receiverEmail).get().then((value) => senderEmail = value.data['pendingReceivedFriendReqs'])
    console.log(senderEmail)

    function acceptFriend() {

        // clear pending field of both parties
    
        // receiever
        db.collection('users').doc(receiverEmail).update({
            pendingReceivedFriendReqs: ''
        })
    
        // sender
        db.collection('users').doc(senderEmail).update({
            pendingReceivedFriendReqs: ''
        })
    
        // add document to friendship subcollection of both parties
    
        //receiver
        const newFriendshipReceiverRef = db.collection('users').doc(receiverEmail).collection('friendships').doc(senderEmail);
        newFriendshipReceiverRef.set({
            friend: senderEmail
        })
    
        //sender
        const newFriendshipSenderRef = db.collection('users').doc(senderEmail).collection('friendships').doc(receiverEmail);
        newFriendshipReceiverRef.set({
            friend: receiverEmail
        })
    }
    // accept button
    // decline button
}
