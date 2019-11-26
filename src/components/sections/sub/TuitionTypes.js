import React from "react";
import description from "../../../constants/TuitionTypes";
import ImageWidget from "../widgets/ImageWidget";
import texts from "../../../constants/texts";


const TuitionTypes = (props) => {
  return (
      <section id="tuition-types">
        <div className="xtion-title">
          <span className="text">{texts.tuitionTypes}</span>
        </div>
        <div className="tag-line">{description.tagLine}</div>
        <div className="content">
          <ImageWidget
              title={description.personal.title}
              description={description.personal.description}
              src={
                props.desktop ? description.personal.image : null
              }
          />
          <ImageWidget
              title={description.group.title}
              description={description.group.description}
              src={
                props.desktop ? description.group.image : null
              }
          />
        </div>
      </section>
  );
};

export default TuitionTypes;
