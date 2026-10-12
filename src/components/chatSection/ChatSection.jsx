import React from 'react'
import './ChatSection.css'
import DarkMode from '../Darkmode/DarkMode'
import { IoMdSend } from "react-icons/io";
import { useContext } from 'react';
import { dataContext } from '../../contex/UserContext';
import user from '../../assets/user.png'
import ai from '../../assets/ai.png'
function ChatSection() {
  let {sent, inputValue, setInputValue, loading, setLoading, result, setResult, showResult, setShowResult,recentPrompt, setRecentPrompt}=useContext(dataContext);
  return (
    <div className='chatsection'>
      
      {/* <DarkMode/> */}
      <div className="topsection">
        {!showResult ? <div className="heading">
  <span>HELLO ARUN,</span>
  <span>I' m Your Own AI Assistant</span>
  <span>What can I help you with today? </span>
</div>:<div className="result">
  <div className="userbox">
    <img src={user} alt="" width="30" height="30" />
    <p>{recentPrompt}</p>
  </div>
  <div className="ai">
    <img src={ai} alt="" width="30" height="30" />
    {loading? <div className='loader'> 
     <hr />
     <hr />
     <hr />
    </div>:<p>{result}</p>}
    
  </div>
</div>}

      </div>
      <div className="bottomsection">
    <input onChange={(e) => setInputValue(e.target.value)}  value={inputValue} type="text" placeholder='Enter Your Prompt...' />
    {inputValue? <button className='sendbtn' onClick={async () => {
      sent(inputValue);
      
    }}>
      <IoMdSend/>
    </button>:null}
   
    <DarkMode/>
      </div>
    </div>
  )
}

export default ChatSection
