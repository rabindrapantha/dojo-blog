import React from 'react'
import { useState } from "react";

function Home() {
    const [name, setName] = useState('Shyam');

    const handleClick = (event, data) => {
        console.log(event);
        setName(data.name);
    }

    return (
        <div>
            <h1>Home page</h1>
            <p>{ name }</p>
            <button onClick={
                (event) => handleClick(event, {
                    name: (new Date()).toString(),
                    age: 31
                })
            }>Click Me</button>
        </div>
    )
}

export default Home
