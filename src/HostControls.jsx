import React from "react";

export const HostControls = ({socket, room}) => {
    return(
        <div>
            <button className="StartButton" onClick={() => socket.emit("Start", room.code)}>Start</button>
            <button className="RestartButton" onClick={() => socket.emit("Restart", room.code)}>Restart</button>
        </div>
    )
}