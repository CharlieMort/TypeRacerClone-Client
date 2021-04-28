import React, {useState, useEffect} from "react";
import { TextBox } from "./TextBox";
import { CarProgress } from "./CarProgress";
import { HostControls } from "./HostControls";


export const GameWindow = ({room, socket, player}) => {
    const [perc, setPerc] = useState(0);

    useEffect(() => {
        socket.emit("UpdateProgress", room.code, perc);
    },[perc])

    return(
        <div className="GameWindow">
            <h3>Room Code {room.code}</h3>
            {
                player.isHost &&
                <HostControls socket={socket} room={room} />
            }
            {
                room.start &&
                <TextBox master={room.text} setPerc={setPerc} socket={socket} roomCode={room.code} />
            }
            <div className="Cars">
                {
                    room.players.map((p) => {
                        return <CarProgress perc={p.progress} nick={p.nick} color={p.color} place={p.place} />
                    })
                }
            </div>
        </div>
    )
}