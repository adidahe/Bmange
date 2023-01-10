import React, { useState } from "react";

import LeftSide from "../components/LeftSide/LeftSide.jsx";
import RightSide from "../components/rightSide/RightSide.jsx";
import Navbar from "../components/Navbar/Navbar";
import Reply from "../components/Reply/Reply";
import Comments from "../components/Comments/Comments";
import "./Newchat.css";
import { useEffect } from "react";

function Newchat() {
  const comments = [
    {
      content: "There is a car blocking my driveway",
      createdAt: "1  Week ago",
      user: {
        image: "./profile2.png",
        username: "morad",
      },
    },
    {
      content: "Thats mine, sorry I will move it straight away",
      createdAt: "1 Week ago",
      user: {
        image: "./profile.jpg",
        username: "Adi",
      },
    },
  ];
  const [chat, setchat] = useState(comments);

  useEffect(() => {}, [comments]);
  return (
    <div>
      <LeftSide />
      <Navbar title={"Chat"} desc={"Check your chat"} />
      <RightSide />
      <div className="Newchat-content" id="Newchat-content">
        {comments.map((element, i) => (
          <Comments
            key={i}
            username={element.user.username}
            createdAt={element.createdAt}
            content={element.content}
            imagess={element.user.image}
          />
        ))}

        <Reply commentss={chat} handleComments={setchat} />
      </div>
      {window.scrollTo(0, 100000)}
    </div>
  );
}

export default Newchat;
