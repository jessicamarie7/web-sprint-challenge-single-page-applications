import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Form from "./Form"
import Order from "./Order";
import * as yup from 'yup';
import schema from "./FormSchema";

const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false,
  bacon: false,
  sausage: false,
  onions: false,
  instructions: ''
}

const initialDisabled = true;
const initialOrder= {};
const initialFormErrors = {
  name: '',
  size: ''
}


const App = () => {

  const [formValues, setFormValues] = useState(initialFormValues);
  const [disabled, setDisabled] = useState(initialDisabled)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [order, setOrder] = useState(initialOrder)

  const inputChange = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => {
      setFormErrors({...formErrors, [name]: ''})
    })
    .catch((error) => {
      setFormErrors({...formErrors, [name]: error.errors[0]})
    })
    setFormValues({...formValues, [name]: value})
  }

  const postOrder = (theOrder) => {
    axios.post('http://reqres.in/api/users', theOrder)
    .then((res) => {
      setOrder([res.data, ...order]);
      setFormValues(initialFormValues);
    })
    .catch((err) => {
      console.error(err)
    })
  }

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      toppings: ['pepperoni', 'bacon', 'sausage', 'onions'].filter((topping) => formValues[topping]),
    };
    postOrder(newOrder)
  }

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

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
        change={inputChange}
        errors={formErrors}
        disabled={disabled}
        submit={formSubmit}
        />
        {order.map((order) => {
          return <Order key={order.id} details={order} />
        })}
      </Route>
    </BrowserRouter>
  );
};
export default App;
