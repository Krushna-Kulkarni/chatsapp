import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Chat = () => {
  const { userName } = useParams();

  const Navigate = useNavigate();

  return (
    <div className="max-w-[1100px] bg-white my-8 mx-auto overflow-hidden">
      <header className="flex items-center justify-between bg-dark-color-a text-white rounded-t-md p-4">
        <div className="text-lg">chatsApp</div>
        <button
          onClick={() => Navigate("/")}
          className="cursor-pointer py-1 px-4  text-dark-color-a bg-light-color text-md border-0 rounded-md"
        >
          Exit Chat
        </button>
      </header>
      <main className="block md:grid md:grid-cols-[1fr_3fr]">
        <div className="hidden md:block bg-dark-color-b text-white py-5 pb-16 overflow-y-scroll">
          <div className="mb-4 px-4">Users</div>
          <ul className="list-none" id="users">
            <li className="py-2 px-4">Brad</li>
            <li className="py-2 px-4">John</li>
            <li className="py-2 px-4">Mary</li>
            <li className="py-2 px-4">Paul</li>
            <li className="py-2 px-4">Mike</li>
          </ul>
        </div>
        <div className="p-7 max-h-[500px] overflow-y-scroll">
          <div className="p-3 mb-4 bg-light-color rounded-md">
            <p className="text-md font-bold text-dark-color-a mb-2">
              Brad <span className="text-dark-color-b  text-xs">9:12pm</span>
            </p>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              repudiandae.
            </p>
          </div>
        </div>
      </main>
      <div className="py-5 px-7 bg-dark-color-a">
        <form className="flex" id="chat-form">
          <input
            className="text-md p-2 mr-2 h-10 flex-1 rounded-md outline-none"
            id="msg"
            type="text"
            placeholder="Enter Message"
            required
            autoComplete="off"
          />
          <button className="cursor-pointer py-1 px-4 text-dark-color-a bg-light-color text-md border-0 rounded-md">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
