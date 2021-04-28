import React, { useEffect, useState } from "react";
import './App.css';
import { GameWindow } from "./GameWindow";
import socketIOClient from "socket.io-client";
import { Nickname } from "./Nickname";
import { Rooms } from "./Rooms";

const ENDPOINT = "http://localhost:5000";
const io = socketIOClient(ENDPOINT);

function App() {
  const [nicked, setNicked] = useState(false);
  const [room, setRoom] = useState();
  const [player, setPlayer] = useState();

  useEffect(() => {
    io.on("RoomInfo", (data) => {
      for (let p of data.players) {
        if (p.id === io.id) {
          setPlayer(p);
        }
      }
      setRoom(data);
      console.log(data);
    })
  }, [])

  return (
    <div className="App">
      <h1>Type Racer</h1>
      {
        nicked
        ?
          room 
          ? <GameWindow room={room} player={player} socket={io} />
          : <Rooms socket={io} />
        : <Nickname setNicked={setNicked} socket={io} />
      }
    </div>
  );
}

export default App;
