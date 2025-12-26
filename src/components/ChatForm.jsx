import React, { useRef } from "react";

const ChatForm = ({ chatHistory, setchatHistory, generateBotResponse }) => {
  const inputRef = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;

    //clear input...
    inputRef.current.value = "";

    setchatHistory(prevHistory => [
      ...prevHistory,
      { role: "user", text: userMessage }
    ]);

    setTimeout( ()=> {
         generateBotResponse([...chatHistory,  { role: "user", text: userMessage }]);

    }, 600);


   
  };


  return (
    <form className="chat-form" onSubmit={handleFormSubmit}>
      <input
        type="text"
        ref={inputRef}
        placeholder="Message..."
        className="message-input"
        required
      />

      <button type="submit">
        <span className="material-symbols-outlined">
          arrow_upward
        </span>
      </button>
    </form>
  );
};

export default ChatForm;
