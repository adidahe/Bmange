import React from "react";
import imag from "../../imges/profile.jpg";
import "./Reply.css";
function Reply({ commentss, handleComments }) {
  const submitReply = () => {
    handleComments(
      commentss.concat([
        {
          content: document.getElementById("cmnt-input").value,
          createdAt: "Now",
          user: {
            image: "./profile.png",
            username: "Adi",
          },
        },
      ])
    );
  };

  return (
    <div className="reply-input-template">
      <div className="reply-input container">
        <img src={imag} alt="" class="usr-img" />
        <textarea
          className="cmnt-input"
          placeholder="Add a comment..."
          id="cmnt-input"
        ></textarea>
        <button className="bu-primary" onClick={submitReply}>
          SEND
        </button>
      </div>
    </div>
  );
}

export default Reply;
