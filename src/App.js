// import logo from './logo.svg';
import React, { Component } from 'react';
import CartContext from './context/cartContext';
import Login from './context/Login';
import MoviePage from './context/MoviePage';
import UserContext from './context/userContext';

class App extends Component {

  handleLoggedIn = (username) => {
    console.log("Getting the user: " + username);
    const user = {name: "Mosh" };
    this.setState({ currentUser: user });
  }
  
  state = {
    currentUser: null
  };


  render() {
    return (
      <CartContext.Provider value={{ cart: [] }}>
        <UserContext.Provider 
          value={{
            currentUser: this.state.currentUser,
            onLoggedIn: this.handleLoggedIn
          }}
        >
          <div>
            <MoviePage />
            <Login />
          </div>
        </UserContext.Provider>
      </CartContext.Provider>
    );
  }
}

export default App;

// import './App.css';
// import React from 'react';
// import Movie from './hoc/Movie';
// import Counter1 from './counter/Counter';
// import { CounterHooks } from './hooks/CounterHooks';
// import Users from './hooks/Users';

// function App() {
//   return (
//     <React.Fragment>
//       <Movie id={1} />
//       <Counter1 />
//       <CounterHooks />
//       <Users />
//     </React.Fragment>
    
//   );
// }

// export default App;
