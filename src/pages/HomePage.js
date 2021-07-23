import Box from "../components/Box";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

// import { db } from "../config/firebase"
// import { useAuth } from "../AuthContext"

// import config from "../config/firebase";
// import { v4 as uuidv4 } from "uuid";

function HomePage() {
//     const [friendships, setFriendships] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [friend1, setFriend1] = useState("");
//     const [friend2, setFriend2] = useState("");

//   // ADD FUNCTION
//   function addFriendship(newFriendship) {
//     ref
//       //.doc() use if for some reason you want that firestore generates the id
//       .doc(newFriendship.id)
//       .set(newFriendship)
//       .catch((err) => {
//         console.error(err);
//       });
//   }

// const { currentUser } = useAuth();

// db.collection("users").doc(currentUser).set({
//     name: "test"
//   });

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
                <h1>Activity</h1>
                
                    <h6>
                        You have a pending friend request from {}.
                    </h6>
{/* 
                    <button onClick={() => addSchool({ title, desc, id: uuidv4() })}>
                    Submit
                    </button> */}

                    {/* <Button
                        variant="contained"
                        color="primary"
                    >
                        Accept
                    </Button> */}
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

export default HomePage;