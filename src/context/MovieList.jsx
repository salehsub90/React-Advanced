import React, { Component } from 'react';
import MovieRow from './MovieRow';
import UserContext from './userContext';

class MovieList extends Component {

  static contextType = UserContext; // MovieList.contextType = UserContext;

  componentDidMount() {
    console.log("context", this.context);
  }

  render() {
    return (
      //expects a function as its child
      <UserContext.Consumer>
        {userContext => (
          <div> 
            Movie List {userContext.currentUser ? userContext.currentUser.name : ""} <MovieRow />
          </div> 
        )}
      </UserContext.Consumer>
    );
  }
}

// MovieList.contextType = UserContext;

export default MovieList;