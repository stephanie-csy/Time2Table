import Box from "../components/Box";
import TextField from '@material-ui/core/TextField';
import { Button } from "@material-ui/core";

function CreateGroupPage() {
    return (
        <Box>
            <h1>Create Group</h1>
                
                <h6>
                    Create a group with your friends to start time2tabling together!
                </h6>
                <TextField id="standard-basic" label="Search for your friend" />
                <h1> </h1>
                <Button
                        variant="contained"
                        color="primary"
                    >
                        Create Group
                    </Button>
        
        </Box>
    );
}

export default CreateGroupPage;