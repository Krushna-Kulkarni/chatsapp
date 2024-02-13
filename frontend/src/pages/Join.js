import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Join = () => {
  const Navigate = useNavigate();
  const [userName, setUserName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    Navigate(`/chat/${userName}`);
  };
  return (
    <div className="max-w-[500px] my-20 mx-auto text-white">
      <header className="text-center p-5 bg-dark-color-a rounded-t-md">
        <div className="text-lg">ChatsApp</div>
      </header>
      <main className="py-8 px-10 bg-dark-color-b">
        <form onSubmit={submitHandler}>
          <div className="mb-5">
            <label className="block mb-1" htmlFor="username">
              Username
            </label>
            <input
              className="text-md p-1 h-10 w-full text-dark-color-a outline-none rounded-md"
              type="text"
              name="username"
              id="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter username..."
              required
            />
          </div>
          <button
            type="submit"
            className=" cursor-pointer py-1 px-4 mt-5 text-dark-color-a bg-light-color text-md border-0 w-full rounded-md"
          >
            Join Chat
          </button>
        </form>
      </main>
    </div>
  );
};
