import Box from "../components/Box";
import TextField from '@material-ui/core/TextField';
import { Button } from "@material-ui/core";

function AddFriendsPage() {
    return (
        <Box>
            <h1>Add Friends</h1>
                
                <h6>
                    Add a friend to start time2tabling together!
                </h6>
                <TextField id="standard-basic" label="Search for your friend" />
                <h1> </h1>
                <Button
                        variant="contained"
                        color="primary"
                    >
                        Add Friend
                    </Button>
        </Box>
    );
}

export default AddFriendsPage;