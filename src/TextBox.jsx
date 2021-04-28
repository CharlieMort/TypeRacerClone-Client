import React, {useEffect, useState} from "react";

export const TextBox = ({master, setPerc, socket, roomCode}) => {
    const [user, setUser] = useState("");
    const [display, setDisplay] = useState(master);

    const Change = (e) => {
        setUser(e.target.value);
    }

    const CheckForBaddies = (txt, main) => {
        var newTxt = main;
        for (let i = 0; i<txt.length; i++) {
            if (txt[i] !== main[i]) {
                newTxt = main.slice(0, i) + "</span><span class=Wrong>" + main.slice(i);
                return newTxt;
            }
        }
        return newTxt;
    }

    useEffect(() => {
        if (user === master) socket.emit("Completed", roomCode);
        let txt = master;
        txt = CheckForBaddies(user, master); // Adds span where wrong begins
        if (txt === master) {
            txt = txt.slice(0, user.length) + "</span>" + txt.slice(user.length);
        }
        else {
            txt = txt.slice(0, user.length+25) + "</span>" + txt.slice(user.length+25); // add span to end
        }
        txt = `<span class="HighlightedText">${txt}`; // add span to begginning
        console.log(txt);
        setDisplay(txt);
        setPerc((user.length/master.length)*100);
    }, [user])

    return(
        <div>
            <div className="TextBox">
                <p className="DisplayText" unselectable="off" dangerouslySetInnerHTML={{__html:display}} />
            </div>
            <input className="InputBox" type="text" placeholder="Enter Text Here..." value={user} onChange={Change} autoFocus/>
        </div>
    )
}