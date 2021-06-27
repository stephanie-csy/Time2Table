import Box from "../components/Box";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";


function HomePage() {
    return (
        <>
            <Box>
                <h1>Getting Started</h1>
                
                <body>
                    Add a friend to start time2tabling together!
                </body>

                <Button
                    variant="contained"
                    color="primary"
                >
                    <Link to="/AddFriendsPage">Add Friend</Link>
                </Button>
            </Box>

            <Box>
                <h1>Activity</h1>
                
                <div style={{ display: "flex", flexFlow: "row nowrap" }}>
                    <body>
                        You have a pending friend request from Jason.
                    </body>

                    <Button
                        variant="contained"
                        color="primary"
                    >
                        Accept
                    </Button>
                </div>
            </Box>

            <Box>
                <h1>Upcoming Meet Ups</h1>

                <body>
                    Tuesday, 25 May 2021 13:00 - 15:00 with Besties
                </body>
            </Box>
        </>
    );
}

export default HomePage;