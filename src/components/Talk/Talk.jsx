import React from "react";

import "./Talk.css";

const Talk = (props) => {
  const talk = [
    {
      text: "Do you feel lonely?",
      handler: props.actionProvider.handleLoneliness,
      id: 6,
    },
    { text: "Do you feel rage?", handler: props.actionProvider.handleRage, id: 7 },
    { text: "Would you like some comfort?", handler: props.actionProvider.handleComfort, id: 8 },
  ];

  const talkMarkup = talk.map((t) => (
    <button
      className="talk-button"
      key={t.id}
      onClick={t.handler}
    >
      {t.text}
    </button>
  ));

  return <div className="talk-container">{talkMarkup}</div>;
};

export default Talk;