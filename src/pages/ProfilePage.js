import Box from "../components/Box";
import { Timetable } from "../components/Timetable";

function ProfilePage() {
    return (
        <div>
            <Timetable />
            <Box>
                <h1>Your Profile</h1>
                    
                    <body>
                        Edit your profile!
                    </body>
            </Box>
        </div>
        
    );
}

export default ProfilePage;