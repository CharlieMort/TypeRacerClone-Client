import React, { useState } from "react";

export const Nickname = ({setNicked, socket}) => {
    const [nick, setNick] = useState("");
    
    const Submit = () => {
        setNicked(true);
        socket.emit("CreateNickname", nick);
    }

    const ChangeHandle = (e) => {
        if (e.target.value.length <= 12) {
            setNick(e.target.value);
        }
    }

    return(
        <div>
            <h2>Enter Your Nickname</h2>
            <input type="text" placeholder="Enter Nickname Here..." onChange={ChangeHandle} value={nick} />
            <button onClick={Submit}>Submit</button>
        </div>
    )
}