import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Home from './Home';
import Form from './Form';
import Order from './Order';
import schema from './formSchema';
import axios from "axios";
import * as yup from 'yup';


const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false,
  sausage: false,
  bacon: false,
  ham: false,
  instruct: ''
};
const initialFormErrors = {
  name: '',
  size: ''
};
const initialDisabled = true;
const initialOrder = [];

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [order, setOrder] = useState(initialOrder);


  const inputChange = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => {
      setFormErrors({...formErrors, [name]: ''})
    })
    .catch((error) => {
      setFormErrors({...formErrors, [name]: error.errors[0]})
    });
  };

  const postNewOrder = (theOrder) => {
    axios.post('https://reqres.in/api/', theOrder)
    .then((result) => {
      setOrder([result.data, ...order]);
      setFormValues(initialFormValues);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      toppings: ['pepperoni', 'sausage', 'bacon', 'ham'].filter(
        (topping) => formValues[topping]
      ),
    };
    postNewOrder(newOrder);
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
}, [formValues]);

  return (
    <BrowserRouter>
      <h1>Lambda Eats</h1>
      <p>Pizza</p>
      <Link to='/'>Home</Link>
      <Link to='/pizza'>Build Your Pizza</Link>
      <Route exact path='/'>
        <Home />
      </Route>  
      <Route path='/pizza'>
        <Form 
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
        />

        {order.map((order) => {
          return <Order key={order.id} details={order} />;
        })}
      </Route>
    </BrowserRouter>
  );
};
export default App;
