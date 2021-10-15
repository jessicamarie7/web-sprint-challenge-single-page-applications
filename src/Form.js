import React from "react";

export default function Pizza(props) {
    const { values, submit, change, disabled, errors } = props;

    const onChange = (event) => {
        const { name, value, type, checked } = event.target;
        const valueToUse = type ==='checkbox' ? checked : value;
        change(name, valueToUse);
    };

    return (
        <div className='pizza-form'>
            <h3>What do you want on your Tombstone?</h3>
            <form>
                <div className='selections'>
                    <div className='name-input'>
                        <label> Your Full Name
                            <input 
                                type='text'
                                name='fullName'
                                value={values.name}
                                onChange={onChange}

                            />
                        </label>
                    </div>
                </div>
            </form>
        </div>
    )
}