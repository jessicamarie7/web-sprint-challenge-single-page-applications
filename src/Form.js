import React from "react";

export default function Pizza(props) {
    const { values, submit, change, disabled, errors } = props;

    const onChange = (event) => {
        const { name, value, type, checked } = event.target;
        const valueToUse = type ==='checkbox' ? checked : value;
        change(name, valueToUse);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    }

    return (
        <div className='pizza-form' onSubmit={onSubmit}>
            <h4>What do you want on your Tombstone?</h4>
            <form>
                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.size}</div>
                    <div>{errors.toppings}</div>
                    <div>{errors.instructions}</div>
                </div>
                <div className='selections'>
                    <div className='name-input'>
                        <label> Your Full Name
                            <input 
                                type='text'
                                name='fullName'
                                value={values.name}
                                change={onChange}
                                minLength='2'
                            />
                        </label>
                    </div>
                    <div className='size-dropdown'>
                        <label>Pizza Size
                            <select change={onChange} value={values.size} name='size'>
                                <option value=''>~~Select a pizza size~~</option>
                                <option value='small'>Small</option>
                                <option value='medium'>Medium</option>
                                <option value='large'>Large</option>
                            </select>
                        </label>
                    </div>
                    <div className='toppings-boxes'>
                        <h5>Choose your toppings</h5>
                        <label>Pepperoni
                            <input 
                                type='checkbox'
                                name='pepperoni'
                                checked={values.pepperoni}
                                change={onChange}
                            />
                        </label>
                        <label>Bacon
                            <input 
                                type='checkbox'
                                name='bacon'
                                checked={values.bacon}
                                change={onChange}
                            />
                        </label>
                        <label>Sausage
                            <input 
                                type='checkbox'
                                name='sausage'
                                checked={values.sausage}
                                change={onChange}
                            />
                        </label>
                        <label>Onions
                            <input 
                                type='checkbox'
                                name='onions'
                                checked={values.onions}
                                change={onChange}
                            />
                        </label>
                    </div>
                    <div className='special-text'>
                        <label>Special Instructions
                            <input 
                                type='text'
                                name='instructions'
                                value={values.instructions}
                                change={onChange}
                            />
                        </label>
                    </div>
                    <div className='submit-btn'>
                        <button disabled={disabled}>Order Now</button>
                    </div>
                </div>
            </form>
        </div>
    )
}