import React from "react";

const CircleWidget = (props) => {
    return (
        <div>
          <div className="sub-title">{props.title}</div>
          <div className="row">
            <span className="step">{props.step}</span>
            <span className="paragraph">{props.paragraph}</span>
          </div>
        </div>
    )
};

export default CircleWidget;
