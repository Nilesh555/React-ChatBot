import React from 'react'

const ChatMessage = ({chat}) => (

<div className={`message ${chat.role === "mode" ? 'bot' : 'user'}-message`}>
    
        <p className="message-text">
            {chat.text}
        </p>
    </div>

 
)

export default ChatMessage
