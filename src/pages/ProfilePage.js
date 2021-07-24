import React from 'react';
import Box from "../components/Box";
import { Schedule } from "../components/Schedule";
// import { useAuth } from "../AuthContext"
import Typography from '@material-ui/core/Typography';

// import IconButton from '@material-ui/core/IconButton';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import EditIcon from '@material-ui/icons/Edit';
import { auth, db } from "../config/firebase"
// import { render } from 'react-dom';


class ProfilePage extends React.Component {

    state = { 
        name: null,
    }

    componentDidMount(){
        db.collection('users').doc(auth.currentUser.email).get().then(
            doc => { 
                this.setState({ name: doc.data().name })
            }
        )
        .catch( error => console.log(error))
    }

    // handleImageChange = (event) => {
    //     const image = event.target.files[0];
    // }

    // handleEditPicture = () => {
    //     const fileInput = document.getElementById('imageInput');
    //     fileInput.click();
    // }

    render() {
        const currUserEmail = auth.currentUser.email
        const name = this.state.name

        return (
            <>
            <Typography variant="h6" style={{ flexGrow: 1, textAlign: "center", left:180 }}>
            <p>Name: {name}</p>
            <p>Email: {currUserEmail}</p>
            {/* <input 
                type="file" 
                id="imageInput" 
                hidden="hidden"
                onChange={this.handleImageChange}
            />
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
            >
                <AccountCircle />
            </IconButton>

            <IconButton onClick={this.handleEditPicture} className="button">
                <EditIcon color = "primary"/>
            </IconButton> */}

                </Typography>

                <Box>
                    <h1>Your Schedule</h1>
                    
                    <Schedule />
                </Box>
            </>
        )
    }
}

export default ProfilePage;