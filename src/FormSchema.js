import * as yup from 'yup';

export default yup.object().shape({
    name: yup.string().required('Your name is required').min(2, 'Your name must be at least 2 characters'),
    size: yup.string().required('Pizza size is required').oneOf(['small', 'medium', 'large'], 'Please choose a size'),
    pepperoni: yup.boolean(),
    bacon: yup.boolean(),
    sausage: yup.boolean(),
    onions: yup.boolean(),
    instructions: yup.string()
})