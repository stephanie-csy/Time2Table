import React, { Component, Fragment } from 'react';
import Box from "../components/Box";
import { Schedule } from "../components/Schedule";
import Typography from '@material-ui/core/Typography';

function DummyProfile() {


        return (
            <>
                <Box>
                <Typography variant="h6" style={{ flexGrow: 1, textAlign: "center", left:180 }}>
                {/* <img src={auth.currentUser.avatar_url} />  */}
                <h4>Name: b</h4>
                <h4>Email: b@gmail.com</h4>
                </Typography>
                    <h4>Your Schedule:</h4>
                    
                    <Schedule />
                </Box>
            </>
        )
}

export default DummyProfile;