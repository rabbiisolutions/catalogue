import React from "react";

const TextWidget = (props) => {
  return (
      <div className="text-widget">
        <div>{props.title}</div>
        <div>{props.description}</div>
        {
          props.list ?
            <div>{props.list}</div>
            : ''
        }
      </div>
  );
};

export default TextWidget;
