import React from "react";
import "./friends.scss";
const Friends = ({ user }) => {
  return (
    <div>
      <li className="sidebarFriend">
        <img src={user.profilePicture} alt="" type="image/jpg" className="sidebarFriendImg" />
        <span className="sidebarFriendName">{user.username}</span>
      </li>
    </div>
  );
};

export default Friends;
