import "./sideBar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
const SideBar = ({ userId, currentPageName }) => {
  return (
    <div className="sideBar">
      <Link className="link" to={`/userpage/profile/${userId}`}>
        <button
          className={currentPageName != "profile" ? "button" : "button active"}
        >
          Profile
        </button>
      </Link>
      <hr style={{ width: "90%", color: "rgb(246 246 246)" }} />
      <Link className="link" to={`/userpage/posts/${userId}`}>
        <button
          className={currentPageName != "posts" ? "button" : "button active"}
        >
          Posts
        </button>
      </Link>
      <hr style={{ width: "90%", color: "rgb(246 246 246)" }} />
      <Link className="link" to={`/userpage/gallery/${userId}`}>
        <button
          className={currentPageName != "gallery" ? "button" : "button active"}
        >
          Gallery
        </button>
      </Link>
      <hr style={{ width: "90%", color: "rgb(246 246 246)" }} />
      <Link className="link" to={`/userpage/todo/${userId}`}>
        <button
          className={currentPageName != "todo" ? "button" : "button active"}
        >
          ToDo
        </button>
      </Link>
    </div>
  );
};
export default SideBar;
