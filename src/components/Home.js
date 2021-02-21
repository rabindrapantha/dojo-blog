import React from 'react'
import { useState } from "react";

function Home() {
    const [name, setName] = useState('Shyam');

    const handleClick = () => {
        setName('Ram');
    }

    return (
        <div>
            <h1>Home page</h1>
            <p>{ name }</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}

export default Home
