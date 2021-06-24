import Box from "../components/Box";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

function FriendsPage() {
    return (
        <div> 
            <Box>
                <h1>Your Friends</h1>
                    
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
            
        </div>
        
    );
}

export default FriendsPage;