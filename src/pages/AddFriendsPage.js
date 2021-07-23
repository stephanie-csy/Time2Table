import React, { useState } from "react";
import Box from "../components/Box";
// import TextField from '@material-ui/core/TextField';
// import { Button } from "@material-ui/core";

// import { SignUpPage } from "../SignUpPage"
// import { useAuth } from "../AuthContext"
// import config from "../config/firebase";
// import { v4 as uuidv4 } from "uuid";
// import { GetAppOutlined } from "@material-ui/icons";

import { auth } from "../config/firebase"
import { db } from "../config/firebase"


function AddFriendsPage() {
    const [receivingFriend, setReceivingFriend] = useState("");
    const sendingUser = auth.currentUser.uid;
    // const receivingFriendUID = db.collection('users').where('email', '==', receivingFriend).get();

    return (
        <Box>
            <h1>Add Friends</h1>
                
                <h6>
                    Add a friend to start time2tabling together!
                </h6>
                {/* <TextField id="standard-basic" label="Search for your friend" />
                <h1> </h1>
                <Button
                    variant="contained"
                    color="primary"
                >
                    Add Friend
                </Button> */}
                
                
                <input
                    type="text"
                    value={receivingFriend}
                    onChange={(e) => setReceivingFriend(e.target.value)}
                />

                <button
                onClick={() =>
                    db.collection('users').doc(sendingUser).update({
                        pendingSentFriendReqs: receivingFriend,
                    }) }>
                    Submit
                </button>
                {/* <h6>{receivingFriendUID}</h6> */}
        </Box>

    );
}

export default AddFriendsPage;


// import Box from "../components/Box";
// import TextField from '@material-ui/core/TextField';
// import { Button } from "@material-ui/core";

// function AddFriendsPage() {
//     return (
//         <Box>
//             <h1>Add Friends</h1>
                
//                 <h6>
//                     Add a friend to start time2tabling together!
//                 </h6>
//                 <TextField id="standard-basic" label="Search for your friend" />
//                 <h1> </h1>
//                 <Button
//                         variant="contained"
//                         color="primary"
//                     >
//                         Add Friend
//                     </Button>
//         </Box>
//     );
// }

// export default AddFriendsPage;