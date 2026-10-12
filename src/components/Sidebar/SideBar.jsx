
import React, { useState, useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import "./SideBar.css";
import { dataContext } from "../../contex/UserContext";

function SideBar() {
  const [extend, setExtend] = useState(false);

  const { sent, prePrompt, newChat } = useContext(dataContext);
  async function loadprePrompt(prompt){
    sent(prompt);
  }

  return (
    <div className={`sidebar ${extend ? "extended" : "collapsed"}`}>
      {/* Hamburger */}
      <GiHamburgerMenu
        className="hamburger"
        onClick={() => setExtend((prev) => !prev)}
      />

      {/* New Chat */}
      <div className="newchat" onClick={() => {
        newChat();
      }}>
        <FaPlus />
        {extend && <p>New Chat</p>}
      </div>

      {/* Recent Chats */}
      {prePrompt.map((item, index) => (
        <div className="recent" key={index} onClick={() => loadprePrompt(item)}>
          <FaRegMessage />
          {extend && <p>{item.slice(0,8)+"..."}</p>}
        </div>
      ))}
    </div>
  );
}

export default SideBar;
