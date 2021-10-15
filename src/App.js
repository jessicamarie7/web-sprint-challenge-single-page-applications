import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Form from "./Form"



const App = () => {
  return (
    <BrowserRouter>
      <h1>Lambda Eats</h1>
      <p>You can order a pizza online! It's like we're in the movie, The Net!</p>
      <Link to='/'>Home</Link>
      <Link to='/pizza'> Build Your Own Pizza </Link>
      <Route exact path='/'></Route>
      <Route path='/pizza'>
        <Form />
      </Route>
    </BrowserRouter>
  );
};
export default App;
