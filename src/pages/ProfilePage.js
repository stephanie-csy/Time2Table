import Box from "../components/Box";
import { Schedule } from "../components/Schedule";
import { useAuth } from "../AuthContext"
import Typography from '@material-ui/core/Typography';



function ProfilePage() {
    const { currentUser } = useAuth()

    return (
        <>
        <Typography variant="h6" style={{ flexGrow: 1, textAlign: "center", left:180 }}>
        Welcome, {currentUser.email}!
            </Typography>

            <Box>
                <h1>Your Schedule</h1>
                
                <Schedule />
            </Box>
        </>
    );
}

export default ProfilePage;