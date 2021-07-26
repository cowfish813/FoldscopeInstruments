import React, { useState, useEffect } from "react";

const Decipher = () => {
    const [cipher, setCipher] = useState(""); //entered string in text area
    const [component, setComponent] = useState(<div className="init"></div>);
    const [header, setHeader] = useState("");
    const orderArray = []; //char order
    const value = {}; //object obj = chars, value = appearance
    let boldGreaterValue = 0; 
        //value for all to be compared to
            // > = bold
            // < = not bold

    const handleChange = (event) => {
        event.preventDefault();
        const value = event.target.value;
        setCipher(value); //saved string from textarea
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        for (let i = 0; i < cipher.length; i++) {
            //loads orders and values
            const char = cipher[i];
            if (orderArray.indexOf(char) === -1) {
                value[char] = 1;
                orderArray.push(char);
            } else {
                value[char]++;
            }
        } 

        const top = Object.values(value); //array of values
        const fifthGreatest = top.sort((a, b) => b - a); //sorted

        if (fifthGreatest.length > 5) {
            //addresses edge cases if not enough chars
            //may need to consider 
            boldGreaterValue = fifthGreatest[4];//sets 5th value
        } else {
            boldGreaterValue = fifthGreatest[fifthGreatest.length - 1];
            //takes last value
        } 
        setComponent(listItems()); //execute listItems
        setHeader("Results");
    } //order, value, and top5 values completed

    const listItems = () => {
        if (orderArray) {
            console.log(orderArray, "render initiated")
            return (
                orderArray.map( (char, i) => {
                    if (value[char] >= boldGreaterValue) {
                        return (
                            <div className="item-container bigBorder flex">
                                <div className="list-item flex row">
                                    <span className="listed-item ">
                                        <strong>Character: </strong>
                                        {char}
                                    </span>
                                    <span className="listed-item ">   
                                        <strong>Amount:</strong> 
                                        {value[char]}
                                    </span>
                                </div>
                            </div>
                        )
                    } else {
                        return (
                            <div className="item-container border">
                                <div className="listed-item flex row">
                                    <strong>Character:</strong> 
                                    {char}
                                </div>
                                <div className="listed-item">
                                    <strong>Amount:</strong> 
                                    {value[char]}
                                </div>
                            </div>
                        )
                    }
                })
            )
        } else {
            return (
                <div></div>
            )
        }
    } //renders list

    
    return (
        <div className="container flex flex-row just-c">
            <div className="">
                <h1>Greetings Spy</h1>
                <form className="" onSubmit={handleSubmit}>
                    <div className="">
                        <textarea className="textbox" onChange={handleChange} />
                        <button className="">Decrpyt :O</button>
                    </div>
                </form>

                <div id="list-items" className="">
                    {header}
                    {component}
                </div>
            </div>
        </div>
    )
}

export default Decipher;