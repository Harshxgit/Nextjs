"use client";
import { p } from "framer-motion/client";
import React from "react";
import { useEffect, useState } from "react";

export default function () {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const newSocket = new WebSocket("ws://localhost:8080");

    newSocket.onopen = () => {
      console.log("connection established");
      setSocket(newSocket);
    
    };

    newSocket.onmessage = (message) => {
      console.log(message);
      setMessage(message.data);
    };

    return () => newSocket.close();
  }, []);

  socket?.send(message);
  return (
    <>
      <h1>{message}</h1>
      <input
        type="text"
        placeholder="enter the message"
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
    </>
  );
}
