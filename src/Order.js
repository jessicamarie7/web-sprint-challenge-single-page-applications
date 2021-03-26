import React from 'react'

export default function Order({ details }) {
    if (!details) {
        return <h5>Working on topping your pizza</h5>
    }

return (
    <div className='pizza-details'>
        <h6>{details.name}</h6>
        <p>Size: {details.size}</p>
        
        {
        !!details.toppings && !!details.toppings.length &&
        <div>
            Toppings:
            <ul>
                {details.toppings.map((like, idx) => <li key={idx}>{like}</li>)}    
            </ul>
        </div>
        }
        <p>Special Instructions: {details.instruct}</p>
    </div>
)
}