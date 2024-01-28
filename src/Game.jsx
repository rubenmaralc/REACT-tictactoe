import React from "react";
import { useState, useEffect } from "react";
import options from "./data/options.js";
import useChoices from "./hooks/useChoices.js";
import OptionButton from "./components/OptionButton.jsx";
import ResultDisplay from "./components/ResultDisplay.jsx";
import MessageDisplay from "./components/MessageDisplay.jsx";
import GameControls from "./components/GameControls.jsx";


const Game = () => {
  const {
    userChoice,
    computerChoice,
    userMessage,
    computerMessage,
    result,
    disabled,
    handlePlay,
    reset,
  } = useChoices();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <div className="rounded-lg p-4 bg-gray-500">
        <h1 className="text-3xl mb-4 text-center font-bold">¡A jugar!</h1>
        <div className="max-w-md mx-auto">
          {options.map((option) => (
            <OptionButton
              key={option.id}
              option={option}
              handlePlay={handlePlay}
              disabled={disabled}
            />
          ))}
          <MessageDisplay userMessage={userMessage} computerMessage={computerMessage} />
          <ResultDisplay result={result} userChoice={userChoice} computerChoice={computerChoice} options={options} />
          {result !== null && (
            <GameControls reset={reset} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Game;

