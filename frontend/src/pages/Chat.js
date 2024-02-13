import React from "react";
import { useParams } from "react-router-dom";

export const Chat = () => {
  const { userName } = useParams();
  console.log(userName);
  return <div>welcome {userName}</div>;
};
