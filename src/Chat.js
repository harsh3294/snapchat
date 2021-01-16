import { Avatar } from "@material-ui/core";
import { Stop } from "@material-ui/icons";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import ReactTimeago from "react-timeago";
import "./Chat.css";
import { selectImage } from "./features/appSlice";
import { db } from "./firebase";
function Chat({ id, profilePic, username, timestamp, imageUrl, read }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const open = () => {
    if (!read) {
      dispatch(selectImage(imageUrl));
      db.collection("posts").doc(id).set(
        {
          read: true,
        },
        {
          merge: true,
        }
      );
      history.push("/chats/view");
    }
  };
  return (
    <div onClick={open} className="chat">
      <Avatar src={profilePic} className="chat__avatar" />
      <div className="chat__info">
        <h4>{username}</h4>
        <p>
          {!read && "Tap to view -"}{" "}
          <ReactTimeago date={new Date(timestamp?.toDate()).toLocaleString()} />
        </p>
      </div>
      {!read && <Stop className="chat__readIcon" />}
    </div>
  );
}

export default Chat;
