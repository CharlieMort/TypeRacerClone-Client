import React, {useState} from "react";

export const Rooms = ({socket}) => {
    const [roomCode, setRoomCode] = useState("");

    const JoinRoom = () => {
        socket.emit("JoinRoom", roomCode);
    }

    const CreateRoom = () => {
        socket.emit("CreateRoom");
    }

    return(
        <div>
            <input type="text" placeholder="Enter Room Code..." value={roomCode} onChange={(e) => setRoomCode(e.target.value)} />
            <input type="button" value="Join Room" onClick={JoinRoom} />
            <input type="button" value="Create Room" onClick={CreateRoom} />
        </div>
    )
}