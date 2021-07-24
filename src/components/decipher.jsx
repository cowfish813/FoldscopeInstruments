import React, { useState, useEffect } from "react";

const Decipher = () => {
    const [cipher, setCipher] = useState("");
    const orderArray = [];
    const value = {};
    const renderRes = [];

    const handleChange = (event) => {
        event.preventDefault();
        const value = event.target.value;
        setCipher(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // debugger;
        for (let i = 0; i < cipher.length; i++) {
            const char = cipher[i];

            if (orderArray.indexOf(char) === -1) {
                value[char] = 1;
                orderArray.push(char);
            } else {
                value[char]++;
            }
            
        }

        for (let i = 0; i < orderArray.length; i++) {
            const char = orderArray[i];``
            value[char];
        }

    }



    return (


        <div>
            <form onSubmit={handleSubmit}>
                <input type="textarea" onChange={handleChange} />
                <button>Decrpyt :O</button>
            </form>
        </div>
    )
}

export default Decipher;