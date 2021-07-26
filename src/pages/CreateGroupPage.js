import React, { useState } from "react";
import Box from "../components/Box";
import { auth } from "../config/firebase"
import { db } from "../config/firebase"


function CreateGroupPage() {
    const [groupName, setGroupName] = useState("");
    const [receivingFriend1, setReceivingFriend1] = useState("");
    const [receivingFriend2, setReceivingFriend2] = useState("");
    const [receivingFriend3, setReceivingFriend3] = useState("");
    const [receivingFriend4, setReceivingFriend4] = useState("");
    const [receivingFriend5, setReceivingFriend5] = useState("");
    const [receivingFriend6, setReceivingFriend6] = useState("");
    const [receivingFriend7, setReceivingFriend7] = useState("");
    const [receivingFriend8, setReceivingFriend8] = useState("");
    const [receivingFriend9, setReceivingFriend9] = useState("");
    const [receivingFriend10, setReceivingFriend10] = useState("");
    const sendingUser = auth.currentUser.email;

    function sendGroupRequest() {
        //can send urself
        //cannot send same person twice

        // put sender's request in receiver's pendingGroupReqsUser and pendingGroupReqsGroupName
        if (receivingFriend1 !== null) { 
            db.collection('users').where('email', '==', receivingFriend1).get().then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    // send group name and admin's email to receiver
                    documentSnapshot.ref.update({
                        pendingGroupReqsUser: sendingUser,
                        pendingGroupReqsGroupName: groupName
                    }) 
                });
            });
        }

        if (receivingFriend2 !== null) { 
            db.collection('users').where('email', '==', receivingFriend2).get().then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    documentSnapshot.ref.update({
                        pendingGroupReqsUser: sendingUser,
                        pendingGroupReqsGroupName: groupName
                    }) 
                });
            });
        }

        if (receivingFriend3 !== null) { 
            db.collection('users').where('email', '==', receivingFriend3).get().then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    // send group name and admin's email to receiver
                    documentSnapshot.ref.update({
                        pendingGroupReqsUser: sendingUser,
                        pendingGroupReqsGroupName: groupName
                    }) 
                });
            });
        }

        if (receivingFriend4 !== null) { 
            db.collection('users').where('email', '==', receivingFriend4).get().then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    // send group name and admin's email to receiver
                    documentSnapshot.ref.update({
                        pendingGroupReqsUser: sendingUser,
                        pendingGroupReqsGroupName: groupName
                    }) 
                });
            });
        }

        if (receivingFriend5 !== null) { 
            db.collection('users').where('email', '==', receivingFriend5).get().then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    // send group name and admin's email to receiver
                    documentSnapshot.ref.update({
                        pendingGroupReqsUser: sendingUser,
                        pendingGroupReqsGroupName: groupName
                    }) 
                });
            });
        }

        if (receivingFriend6 !== null) { 
            db.collection('users').where('email', '==', receivingFriend6).get().then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    // send group name and admin's email to receiver
                    documentSnapshot.ref.update({
                        pendingGroupReqsUser: sendingUser,
                        pendingGroupReqsGroupName: groupName
                    }) 
                });
            });
        }

        if (receivingFriend7 !== null) { 
            db.collection('users').where('email', '==', receivingFriend7).get().then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    // send group name and admin's email to receiver
                    documentSnapshot.ref.update({
                        pendingGroupReqsUser: sendingUser,
                        pendingGroupReqsGroupName: groupName
                    }) 
                });
            });
        }

        if (receivingFriend8 !== null) { 
            db.collection('users').where('email', '==', receivingFriend8).get().then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    // send group name and admin's email to receiver
                    documentSnapshot.ref.update({
                        pendingGroupReqsUser: sendingUser,
                        pendingGroupReqsGroupName: groupName
                    }) 
                });
            });
        }

        if (receivingFriend9 !== null) { 
            db.collection('users').where('email', '==', receivingFriend9).get().then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    // send group name and admin's email to receiver
                    documentSnapshot.ref.update({
                        pendingGroupReqsUser: sendingUser,
                        pendingGroupReqsGroupName: groupName
                    }) 
                });
            });
        }

        if (receivingFriend10 !== null) { 
            db.collection('users').where('email', '==', receivingFriend10).get().then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    // send group name and admin's email to receiver
                    documentSnapshot.ref.update({
                        pendingGroupReqsUser: sendingUser,
                        pendingGroupReqsGroupName: groupName
                    }) 
                });
            });
        }


        // create group in database (one group got which members)
        const groupRef = db.collection('groups').doc(groupName);
        groupRef.set({
            groupName: groupName,
            members: [sendingUser]
        })

        // one member in which groups
        db.collection('users').doc(sendingUser).collection('groups').doc(groupName).set({
            admin: true,
            member: true
        })

        setGroupName("")
        setReceivingFriend1("")
        setReceivingFriend2("")
        setReceivingFriend3("")
        setReceivingFriend4("")
        setReceivingFriend5("")
        setReceivingFriend6("")
        setReceivingFriend7("")
        setReceivingFriend8("")
        setReceivingFriend9("")
        setReceivingFriend10("")
    }

    return (
        <Box>
            <h1>Create a group to compare timetables!</h1>
                
                {/* <h6>Create </h6> */}
                <p>Group Name:</p>
                <input
                    type="text"
                    value={groupName}
                    onChange={(e) => setGroupName(e.target.value)}
                />
                <p>Invite Up To 10 Members (Please enter their email address):</p>
                <p>Friend 1:</p>
                <input
                    type="text"
                    value={receivingFriend1}
                    onChange={(e) => setReceivingFriend1(e.target.value)}
                />
                <p>Friend 2:</p>
                <input
                    type="text"
                    value={receivingFriend2}
                    onChange={(e) => setReceivingFriend2(e.target.value)}
                />
                <p>Friend 3:</p>
                <input
                    type="text"
                    value={receivingFriend3}
                    onChange={(e) => setReceivingFriend3(e.target.value)}
                />
                <p>Friend 4:</p>
                <input
                    type="text"
                    value={receivingFriend4}
                    onChange={(e) => setReceivingFriend4(e.target.value)}
                />
                <p>Friend 5:</p>
                <input
                    type="text"
                    value={receivingFriend5}
                    onChange={(e) => setReceivingFriend5(e.target.value)}
                />
                <p>Friend 6:</p>
                <input
                    type="text"
                    value={receivingFriend6}
                    onChange={(e) => setReceivingFriend6(e.target.value)}
                />
                <p>Friend 7:</p>
                <input
                    type="text"
                    value={receivingFriend7}
                    onChange={(e) => setReceivingFriend7(e.target.value)}
                />
                <p>Friend 8:</p>
                <input
                    type="text"
                    value={receivingFriend8}
                    onChange={(e) => setReceivingFriend8(e.target.value)}
                />
                <p>Friend 9:</p>
                <input
                    type="text"
                    value={receivingFriend9}
                    onChange={(e) => setReceivingFriend9(e.target.value)}
                />
                <p>Friend 10:</p>
                <input
                    type="text"
                    value={receivingFriend10}
                    onChange={(e) => setReceivingFriend10(e.target.value)}
                />
                <p></p>

                <button onClick={sendGroupRequest} >
                    Submit
                </button>

        </Box>

    );
}

export default CreateGroupPage;