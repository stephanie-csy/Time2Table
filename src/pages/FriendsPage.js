import React from 'react';
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Box from "../components/Box";

import { MuiThemeProvider } from '@material-ui/core/styles';
import orderBy from 'lodash/orderBy';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Table from "../components/Table";

import { auth, db } from "../config/firebase"

const invertDirection = {
  asc: "desc",
  desc: "asc"
};

class FriendsPage extends React.Component {

  state = { 
    data: [],
    editIdx: -1,
    columnToSort: "",
    sortDirection: "desc",
    query: "",
    columnToQuery: "name"

  }

  componentDidMount(){
    db.collection('users').doc(auth.currentUser.email).collection('friendships').get().then(
      snapshot => {

          const users = []
          snapshot.forEach( doc => {
              const data = doc.data()
              users.push(data)
          })
          this.setState({ data: users })
      }
    )
    .catch( error => console.log(error))
}

  handleRemove = i => {
    this.setState(state => ({
      data: state.data.filter((row, j) => j !== i)
    }));
    // console.log(this.state.data)
    // db.collection('users').doc(auth.currentUser.email).collection('friendships').doc(i).delete()
  };

  startEditing = i => {
    this.setState({ editIdx: i });
  };

  stopEditing = () => {
    this.setState({ editIdx: -1 });
  };

  handleSave = (i, x) => {
    this.setState(state => ({
      data: state.data.map((row, j) => (j === i ? x : row))
    }));
    this.stopEditing();
  };

  handleSort = columnName => {
    this.setState(state => ({
      columnToSort: columnName,
      sortDirection:
        state.columnToSort === columnName
          ? invertDirection[state.sortDirection]
          : "asc"
    }));
  };

  render() {

    // function deleteFriend(user, friend) {
    //   db.collection('users').doc(user).collection('friendships').doc(friend).delete()
    // }
    const lowerCaseQuery = this.state.query.toLowerCase();
    return (

      <MuiThemeProvider>
        <div className="FriendsPage">
              <Button
                display="flex"
                alignItems="flex-start"
                variant="contained"
                color="primary"
                style={{ height: 50 }}
                >                            
              <Link to="/AddFriendsPage" style={{ color: '#FFF' }}>Add Friend</Link> 
              </Button>
              
              <Box>
              <h1>Your Friends:</h1>
      
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex", margin: "auto" }}>
              <TextField
                id="outlined-basic"
                label="Search"
                variant="outlined"
                value={this.state.query}
                onChange={e => this.setState({ query: e.target.value })}
                floatingLabelFixed
              />
      
              <Select
                style={{ marginLeft: "1em" }}
                floatingLabelText="Select a column"
                value={this.state.columnToQuery}
                onChange={(event, index, value) =>
                  this.setState({ columnToQuery: value })
                }
              >
      
                <MenuItem value="name">Name</MenuItem>
                {/* <MenuItem value="email">Email</MenuItem> */}
              </Select>
            </div>
          </div>
      
      
          <Table
            handleSort={this.handleSort}
            handleRemove={this.handleRemove}
            startEditing={this.startEditing}
            editIdx={this.state.editIdx}
            stopEditing={this.stopEditing}
            handleSave={this.handleSave}
            columnToSort={this.state.columnToSort}
            sortDirection={this.state.sortDirection}
            data={orderBy(
              this.state.query
                ? this.state.data.filter(x =>
                    x[this.state.columnToQuery]
                      .toLowerCase()
                      .includes(lowerCaseQuery)
                  )
                : this.state.data,
              this.state.columnToSort,
              this.state.sortDirection
            )}
            header={[
              {
                name: <b>Name</b>,
                prop: "name"
              },
              {
                name: <b>Email</b>,
                prop: "email"
              }
            ]}
          />

          
          { // THIS IS THE UGLIEST THING EVER LOLOLOLOL
          this.state.data &&
          this.state.data.map(user => {
            return (

              <div>

                         
                {/* <Link to={`${user.email}`} activeClassName="current">{user.email}</Link> */}
                <Link to={"/DummyProfile"} activeClassName="current">{user.email}</Link>

                {/* <button onClick={deleteFriend(auth.currentUser.email, user.friend)}>
                    Delete
                </button> */}
              </div>
            )
          })
        }
          </Box>
        </div>
      </MuiThemeProvider>
      );

  }
}


  export default FriendsPage;
