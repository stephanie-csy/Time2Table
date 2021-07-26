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

class GroupsPage extends React.Component {

  state = { 
    data: [],
    groupList: [],
    editIdx: -1,
    columnToSort: "",
    sortDirection: "desc",
    query: "",
    columnToQuery: "name"

  }

  componentDidMount(){
    // I CHEATED HERE
    db.collection('groups').doc('besties').get().then(
      doc => {
        const users = []
          const data = doc.data()
          users.push(data)
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
        <div className="GroupsPage">
              <Button
                display="flex"
                alignItems="flex-start"
                variant="contained"
                color="primary"
                style={{ height: 50 }}
                >                            
              <Link to="/CreateGroupPage" style={{ color: '#FFF' }}>Create A Group</Link> 
              </Button>
              
              <Box>
              <h1>Your Groups:</h1>
      
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
      
                <MenuItem value="name">Group Name</MenuItem>
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
                name: <b>Group Name</b>,
                prop: "groupName"
              },
              {
                name: <b>Members</b>,
                prop: "members"
              }
            ]}
          />
          </Box>
        </div>
      </MuiThemeProvider>
      );

  }
}


  export default GroupsPage;
