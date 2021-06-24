import Box from "../components/Box";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

function GroupsPage() {
    return (
        <Box>
            <h1>Your Groups</h1>
                
                <body>
                    Create a group to start time2tabling together!
                </body>

                <Button
                    variant="contained"
                    color="primary"
                >                            
                    <Link to="/CreateGroupPage">Create Group</Link> 
                </Button>
        </Box>
    );
}

export default GroupsPage;