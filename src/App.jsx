import React, { useState } from 'react'
import ChatbotIcon from "./components/ChatbotIcon" 
import ChatForm from './components/ChatForm' 
import ChatMessage from './components/ChatMessage';

const App = () => {

  const [chatHistory, setchatHistory] = useState([]);


  const generateBotResponse = async (history) => {
    const updateHistory = (text)=>{
      setchatHistory(prev => [...prev.filter(msg => msg.text !== "Thinking..."), {role: "model", text}]);

    }

    history = history.map( ({role,text}) => ({role, parts:[{text}]}))

    const requestOptions = {
      method: "POST",
      headers: { "content-Type": "application/json"},
      body: JSON.stringify({contents: history})

    }
   
    try {
      const response = await fetch(import.meta.env.VITE_API_URL, requestOptions);
      const data = await response.json();
      if(!response.ok) throw new Error(data.error.message || "something went wrong")

      const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
      updateHistory(apiResponseText);
    }
    catch(error){

      console.log(error);
    }

  }

  return (
    <div className="container">
      <div className="chatbot-popup">
        { /*  Chatbot-header */}
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon />
            <h2 className='logo-text'> Chatbot </h2>
            </div>
            <button> <span className="material-symbols-outlined">keyboard_arrow_down
            </span> </button>
            
          </div>


           <div className="chat-body">
               <div className="message bot-message">
                <ChatbotIcon />
                <p className="message-text">
                  Hay there  <br /> How can i help you ?
                </p>
               </div>

               {chatHistory.map((chat, index)=> (
                <ChatMessage  key={index} chat={chat} />

               ))}
              

           </div>


           <div className="chat-footer">
              <ChatForm  chatHistory={chatHistory} setchatHistory={setchatHistory}  generateBotResponse = {generateBotResponse}/>
           </div>
        </div>
      </div>

  



    



  )  
}
export default App
