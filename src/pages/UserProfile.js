// import React from 'react';
// import Box from "../components/Box";
// import { Schedule } from "../components/Schedule";
// // import { useAuth } from "../AuthContext"
// import Typography from '@material-ui/core/Typography';

// import { auth, db } from "../config/firebase"

// import axios from 'axios';
// import PropTypes from 'prop-types';
// import Grid from '@material-ui/core/Grid';

// export const getUserData = (userHandle) => (dispatch) => {

    

//     // dispatch({ 
//     //     // type: LOADING_DATA 
//     // });
//     // axios
//     //   .get(`/profile/${user.friend}`)
// //       .then((res) => {
// //         dispatch({
// //         //   type: SET_SCREAMS,
// //         //   payload: res.data.screams
// //         });
// //       })
// //       .catch(() => {
// //         dispatch({
// //         //   type: SET_SCREAMS,
// //         //   payload: null
// //         });
// //       });
//   };

// class ProfilePage extends React.Component {

//     state = { 
//         profile: []
//     }

//     componentDidMount(){
//         const handle = this.props.match.params.handle;
//         const screamId = this.props.match.params.screamId;


//         axios.get(`/profile/${user.friend}`)
//         .then(res => {
//             this.setState({ profile: res.data });
//         })

        
//         if (screamId) this.setState({ screamIdParam: screamId });

//         this.props.getUserData(handle);
//         axios
//           .get(`/profile/${auth.currentUser.email}`)
//           .then((res) => {
//             this.setState({
//               profile: res.data.user
//             });
//           })
//           .catch((err) => console.log(err));


//         db.collection('users').doc(auth.currentUser.email).get().then(
//             doc => { 
//                 this.setState({ name: doc.data().name })
//             }
//         )
//         .catch( error => console.log(error))
//     }

//     // handleImageChange = (event) => {
//     //     const image = event.target.files[0];
//     // }

//     // handleEditPicture = () => {
//     //     const fileInput = document.getElementById('imageInput');
//     //     fileInput.click();
//     // }

//     render() {
//         const currUserEmail = auth.currentUser.email
//         const name = this.state.name

//         const { screams, loading } = this.props.data;
//         const { screamIdParam } = this.state;

//         return (

//             <Grid container spacing={16}>
//             <Grid item sm={8} xs={12}>
//               {screamsMarkup}
//             </Grid>
//             <Grid item sm={4} xs={12}>
//               {this.state.profile === null ? (
//                 <p></p>
//               ) : (
//                 <StaticProfile profile={this.state.profile} />
//               )}
//             </Grid>
//           </Grid>

//             // <>        
//             // <Typography variant="h6" style={{ flexGrow: 1, textAlign: "center", left:180 }}>
//             // <p>Name: {name}</p>
//             // <p>Email: {currUserEmail}</p>
            
//             //     </Typography>

//             //     <Box>
//             //         <h1>Your Schedule</h1>
                    
//             //         <Schedule />
//             //     </Box>
//             // </>
//         );
//     }
// }
// }

// user.propTypes = {
//     getUserData: PropTypes.func.isRequired,
//     data: PropTypes.object.isRequired
//   };
  
//   const mapStateToProps = (state) => ({
//     data: state.data
//   });
  
//   export default connect(
//     mapStateToProps,
//     { getUserData }
//   )(user);

