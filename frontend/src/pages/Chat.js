import moment from "moment";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import io from "socket.io-client";
export const Chat = () => {
  const { userName } = useParams();
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState([]);

  const Navigate = useNavigate();

  const socket = io();
  useEffect(() => {
    socket.on("message", (message) => console.log(message));
    socket.on("receive_message", (newMsg) => {
      setMessages((prevMessages) => [...prevMessages, newMsg]);
    });
    // eslint-disable-next-line
  }, [socket]);

  const submitHandler = (e) => {
    e.preventDefault();

    // emitting a message to server
    socket.emit("send_message", {
      message: msg,
      sender: userName,
      time: moment(Date.now()).format("LT"),
    });
    setMsg("");
  };

  return (
    <div className="max-w-[500px] bg-white my-8 mx-auto overflow-hidden">
      <header className="flex items-center justify-between bg-dark-color-a text-white rounded-t-md p-4">
        <div className="text-lg">chatsApp</div>
        <button
          onClick={() => Navigate("/")}
          className="cursor-pointer py-1 px-4  text-dark-color-a bg-light-color text-md border-0 rounded-md"
        >
          Exit Chat
        </button>
      </header>
      <main className="block">
        <div className="p-7 max-h-[500px] overflow-y-scroll">
          {messages.map((newMessage, index) => (
            <div key={index} className="p-3 mb-4 bg-light-color rounded-md">
              <p className="text-md font-bold text-dark-color-a mb-2">
                {newMessage.sender}{" "}
                <span className="text-dark-color-b  text-xs">
                  {newMessage.time}
                </span>
              </p>
              <p className="text">{newMessage.message}</p>
            </div>
          ))}
        </div>
      </main>
      <div className="py-5 px-7 bg-dark-color-a">
        <form className="flex" id="chat-form" onSubmit={submitHandler}>
          <input
            className="text-md p-2 mr-2 h-10 flex-1 rounded-md outline-none"
            id="msg"
            type="text"
            placeholder="Enter Message"
            required
            autoComplete="off"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
          <button
            type="submit"
            className="cursor-pointer py-1 px-4 text-dark-color-a bg-light-color text-md border-0 rounded-md"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
