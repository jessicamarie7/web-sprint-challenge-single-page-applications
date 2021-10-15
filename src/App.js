import React, { useState } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Form from "./Form"

const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false,
  bacon: false,
  sausage: false,
  onions: false,
  instructions: ''
}


const App = () => {

  const [formValues, setFormValues] = useState(initialFormValues);

  const inputChange = (name, value) => {
    setFormValues({...formValues, [name]: value})
  }

  return (
    <BrowserRouter>
      <h1>Lambda Eats</h1>
      <h3>You can order a pizza online! It's like we're in the movie, The Net!</h3>
      <Link to='/'>Home</Link>
      <Link to='/pizza'> Build Your Own Pizza </Link>
      <Route exact path='/'></Route>
      <Route path='/pizza'>
        <Form 
        values={formValues}
        onChange={inputChange}
        />
      </Route>
    </BrowserRouter>
  );
};
export default App;
