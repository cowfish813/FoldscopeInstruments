import React, { useState, useEffect } from "react";

const Decipher = () => {
    const [cipher, setCipher] = useState("");
    const [topFive, setTopFive] = useState(null);
    const orderArray = [];
    const value = {};
    const listItems = document.getElementById("list-items");

    const handleChange = (event) => {
        event.preventDefault();
        const value = event.target.value;
        setCipher(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        for (let i = 0; i < cipher.length; i++) {
            const char = cipher[i];

            if (orderArray.indexOf(char) === -1) {
                value[char] = 1;
                orderArray.push(char);
            } else {
                value[char]++;
            }
        } //loads orders and values

        const top = Object.values(value); //array of values
        const fifthGreatest = top.sort((a, b) => b - a)[4]; //sorted
        setTopFive(fifthGreatest);
    }

    useEffect(() => {
        for (let i = 0; i < orderArray.length; i++) {
            const char = orderArray[i];
            if (value[char] >= topFive) {
                //append bold
            } else {
                //append not bold
            }
        } //render, maybe make a separate function
    }, [])

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <input type="textarea" onChange={handleChange} />
                <button>Decrpyt :O</button>
            </form>

            <div id="list-items" className="">
                {/* render divs/list items of chars & values */}

            </div>
        </div>
    )
}

export default Decipher;