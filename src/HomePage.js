
import Box from "./components/Box";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

function HomePage() {
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
                        You have a pending friend request from Jason.
                    </h6>

                    <Button
                        variant="contained"
                        color="primary"
                    >
                        Accept
                    </Button>
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