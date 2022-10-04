import React, { useState } from 'react';
import './AdDesigner.css';



export default function AdDesigner() {
    const [ flavor, setFlavor ] = useState<string>("Strawberry");

    const [ darkTheme, setDarkTheme ] = useState(false);

    function addDarkTheme() {
        setDarkTheme(darkTheme => !darkTheme);
    }

    let toggleDarkTheme = darkTheme ? '-dark-theme': '';

    
    const [fontSize, setFontSize] = useState(25);

    const increaseFont = () => {
        setFontSize(fontSize + 1);
    };

    const decreaseFont = () => {
        setFontSize(fontSize - 1);
    };


    return (
    <div className="AdDesigner">
        <h1>Ad Designer</h1>
        <div style={{fontSize: `${fontSize}px`}} className={`ad-container${toggleDarkTheme}`}>
        <p>Vote for</p>
        <p style={{fontSize: `${fontSize}px`}} className="flavors">{flavor}</p>
        </div>
        <div>
            <p>What to support:</p>
            <button onClick={() => setFlavor("Chocolate")}>Chocolate</button>
            <button onClick={() => setFlavor("Vanilla")}>Vanilla</button>
            <button onClick={() => setFlavor("Strawberry")}>Strawberry</button>
        </div>
        <div>
            <p>Color Theme</p>
            <button>Light</button>
            <button onClick={addDarkTheme}>Dark</button>
        </div>
        <div>
            <p>Font Size</p>
            <button onClick={decreaseFont}>Down</button>
            <span>{fontSize}</span>
            <button onClick={increaseFont}>Up</button>
        </div>
    </div>
    )
}
