import React from 'react';

const ChatbotIcon = () => {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="darkGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0F172A" />
          <stop offset="100%" stopColor="#020617" />
        </linearGradient>
      </defs>

      <rect
        x="8"
        y="8"
        width="48"
        height="40"
        rx="12"
        fill="url(#darkGrad)"
      />

      <path d="M22 48 L20 58 L32 48" fill="url(#darkGrad)" />

      <circle cx="24" cy="28" r="3" fill="#22D3EE" />
      <circle cx="40" cy="28" r="3" fill="#22D3EE" />

      <path
        d="M24 36 Q32 39 40 36"
        stroke="#22D3EE"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};

export default ChatbotIcon;
