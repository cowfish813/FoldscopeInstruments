import React, { useState, useEffect } from "react";
// import ListItems from "./listItems";

const Decipher = () => {
    const [cipher, setCipher] = useState(""); //entered string in text area
    const [component, setComponent] = useState(<div></div>);
    const orderArray = []; //char order
    const value = {}; //object obj = chars, value = appearance
    let boldGreaterValue = 0;
    // const listItems = document.getElementById("list-items");

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
        const fifthGreatest = top.sort((a, b) => b - a); //sorted
        if (fifthGreatest.length > 5) {
            boldGreaterValue = fifthGreatest[4];
            //sets 5th value
        } else {
            boldGreaterValue = fifthGreatest[fifthGreatest.length - 1];
            //takes last value
        } //addresses edge cases of not enough chars

        // console.log(orderArray, value, fifthGreatest, boldGreaterValue, "submit"); 
        //working but not outside!? why!?
        setComponent(listItems()); //execute listItems
    } //order, value, and top5 values completed

    useEffect(() => {
        // console.log(orderArray, boldGreaterValue)
        if (boldGreaterValue && orderArray.length && value) {
            console.log(orderArray, value, boldGreaterValue, "useeffect working");
            setComponent(listItems()); //execute listItems
            console.log("if");
        } 
        //else
    }, [boldGreaterValue, orderArray, value]) //set component to render

    const listItems = () => {
        if (orderArray) {
            console.log(orderArray, "render initiated")
            return (
                orderArray.map( (char, i) => {
                    return (
                        <div className="item-container">
                            <span className="list-item">Character: {char}</span>
                            <span className="list-item">Amount: {value[char]}</span>
                        </div>
                    )
                })
            )
        } else {
            return (
                <div></div>
            )
        }
    } //renders list

    
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <input type="textarea" onChange={handleChange} />
                <button>Decrpyt :O</button>
            </form>

            <div id="list-items" className="">
                {component}
            </div>
        </div>
    )
}

export default Decipher;