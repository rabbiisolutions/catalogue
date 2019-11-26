import React from "react";
import ListItem from "../../../listItems";

const TextWidget = (props) => {
  return (
      <div className="text-widget">
        <div className="sub-title">{props.title}</div>
        <div className="desc">{props.description}</div>
        {
          props.list ?
            <div>{ListItem(props.list)}</div>
            : ''
        }
      </div>
  );
};

export default TextWidget;
