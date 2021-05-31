import Box from "../components/Box";
import { Button } from "@material-ui/core";

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
                    Add friend
                </Button>
            </Box>

            <Box>
                <h1>Activity</h1>

                <body>
                    You have a pending friend request from Jason.
                </body>

                <Button
                    variant="contained"
                    color="primary"
                >
                    Accept
                </Button>
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