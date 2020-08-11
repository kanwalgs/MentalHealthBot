import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "Sad",
      handler: props.actionProvider.handleSadList,
      id: 1,
    },
    { text: "Anxious", handler: props.actionProvider.handleAnxiousList, id: 2 },
    { text: "Uncertain", handler: props.actionProvider.handleUncertainList, id: 3 },
    { text: "Scared", handler: props.actionProvider.handleScaredList, id: 4 },
    { text: "Talk", handler: props.actionProvider.handleTalk, id: 5 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="options-container">{optionsMarkup}</div>;
};

export default Options;