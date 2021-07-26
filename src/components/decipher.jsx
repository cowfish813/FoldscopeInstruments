import React, { useState, useEffect } from "react";
// import img from '../../public/spy.png'

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

    const handleDarkMode = () => {
        if (localStorage.theme === "dark") {
            localStorage.theme = "light";
        } else {
            localStorage.theme = "dark";
        }
    }

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
            //may need to consider if first 5 or based on values
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
            return (
                orderArray.map( (char, i) => {
                    if (value[char] >= boldGreaterValue) {
                        return (
                            <div className="item-container border highlight flex">
                                    <div className="listed-item">
                                        <strong>Character: </strong>
                                        {char}
                                    </div>
                                    <div className="listed-item">   
                                        <strong>Amount:</strong> 
                                        {value[char]}
                                    </div>
                            </div>
                        )
                    } else {
                        return (
                            <div className="item-container border flex">
                                    <div className="listed-item">
                                        <strong>Character: </strong> 
                                        {char}
                                    </div>
                                    <div className="listed-item">
                                        <strong>Amount: </strong> 
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
        <div id="cipher-container" className=".mgn-top5 flex flex-row just-c bg-white dark:bg-black">
            <div className="">
                <div id="cipher_header" className="flex just-c flex-col flex-align-center">
                    <h1 id="cipher-greet" className="header-title">Decoder</h1>
                    <img className="spy-logo" src="https://raw.githubusercontent.com/cowfish813/FoldscopeInstruments/main/public/Spy_emblem_BLU.png" alt="" />
                </div>
                <form className="flex just-c flex-col flex-align-center" onSubmit={handleSubmit}>
                        <textarea className="textbox" onChange={handleChange} />
                        <button className="cipher_button">Compute</button>
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