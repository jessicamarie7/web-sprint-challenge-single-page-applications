import React from 'react';
import { useHistory } from 'react-router-dom';


export default function Home() {

    const history = useHistory();

    const pizzaBuilder = () => {
        history.push('/pizza')
    };

    return (
        <div>
            <h2>Homepage</h2>
            <img className="home-img" src="https://unsplash.com/photos/OklpRh8-Sns" alt="pizza picture" />
            <button onClick={pizzaBuilder} className='button-to-builder'> Order Pizza </button>
        </div>
    )
}
