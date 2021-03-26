import * as yup from 'yup';

export default yup.object().shape({
    name: yup.string().required('Your name is required').min(2, 'Your name must be at least 5 chars'),
    size: yup.string().required('Pizza size is required').oneOf(['personal', 'small', 'medium', 'large'], 'Please choose a size')
})

