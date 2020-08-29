import React from "react";
import jeopardyLogo from "../../assets/images/jeopardy.png";

function JeopardyDisplay(props) {
  return (
    <div className="JeopardyDisplay">
      {/* Jeopardy Logo / Entertainment / Logonoid.com logo */}
      <div className="logo">
        <img src={jeopardyLogo} alt="Jeopardy Logo" />
      </div>
      <div className="category">
        <span>Category:</span> {props.category}
      </div>
      <div className="currentScore">
        <span>Current Score:</span> {props.score}
      </div>
      <div className="scoreValue">
        <span>Value:</span> {props.value}
      </div>
      <div className="question">
        <span>Question:</span> {props.question}
      </div>
    </div>
  );
}

export default JeopardyDisplay;
