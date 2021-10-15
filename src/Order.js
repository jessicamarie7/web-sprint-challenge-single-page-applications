import React from 'react'

export default function Order(props) {
    const { details } = props;

    if (!details) {
        return <h3>We're prepping your pizza for the brickoven</h3>
    }

return (
    <div>
        <h4>{details.name}</h4>
        <p>Size: {details.size}</p>

        {
            <div>
                <h4>Toppings:</h4>
                <ul>
                    {details.toppings.map((yes, id) => <li key={id}>{yes}</li>)}
                </ul>
            </div>
        }
    </div>
)
}