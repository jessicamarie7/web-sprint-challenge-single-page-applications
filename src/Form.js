import React from "react";

export default function Pizza(props) {
    const { values, submit, change, disabled, errors } = props;
    
    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    }
    
    const onChange = (event) => {
        const { name, value, type, checked } = event.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    };
    
    return (
        <div className='Form' onSubmit={onSubmit}>
            <h2>Mmmmm Pizza!</h2>
            <form>
                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.size}</div>
                    <div>{errors.toppings}</div>
                    <div>{errors.instruct}</div>
                </div>
                <div className='text-field'>    
                    <label>Full Name
                        <input
                            minLength='2'
                            type='text'
                            name='name'
                            value={values.name}
                            onChange={onChange}
                        ></input>
                    </label>
                </div>
                <div className='dropdowns'>
                    <label>Pizza Size
                        <select onChange={onChange} value={values.size} name='size'>
                            <option value=''>~Select pizza size~</option>
                            <option value='personal'>Personal</option>
                            <option value='small'>Small</option>
                            <option value='medium'>Medium</option>
                            <option value='large'>Large</option>
                        </select>
                    </label>
                </div>
                <div className='checkboxes'>
                    <h3>What would you like on your pizza?</h3>
                    <label>Pepperoni
                        <input
                            type='checkbox'
                            name='pepperoni'
                            checked={values.pepperoni}
                            onChange={onChange}
                        ></input>
                    </label>
                    <label>Sausage
                        <input
                            type='checkbox'
                            name='sausage'
                            checked={values.sausage}
                            onChange={onChange}
                        ></input>
                    </label>
                    <label>Bacon
                        <input
                            type='checkbox'
                            name='bacon'
                            checked={values.bacon}
                            onChange={onChange}
                        ></input>
                    </label>
                    <label>Ham
                        <input
                            type='checkbox'
                            name='ham'
                            checked={values.ham}
                            onChange={onChange}
                        ></input>
                    </label>
                </div>
                <div className='special'>
                    <label>Special Instructions
                        <input
                            type='text'
                            name='instruct'
                            value={values.instruct}
                            onChange={onChange}
                        ></input>
                    </label>
                </div>
                <div className='submit-button'>
                    <button disabled={disabled}>Place your order</button>
                </div>
            </form>
        </div>
    )
}