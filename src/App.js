import React from "react";
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Home from './Home';
import Form from './Form';
import schema from './formSchema';

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

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

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
        <Form />
      </Route>
    </BrowserRouter>
  );
};
export default App;
