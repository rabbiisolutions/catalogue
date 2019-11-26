import React from "react";
import TextWidget from "../widgets/mobile/TextWidget";
import description from "../../../constants/Subsidy";
import ImageWidget from "../widgets/ImageWidget";
import texts from "../../../constants/texts";


const Subsidy = (props) => {
  return (
      <section id="subsidy">
        <div className="xtion-title">
          <span className="text">{texts.subsidy}</span>
        </div>
        <div className="tag-line">{description.tagLine}</div>
        <div className="content">
          <ImageWidget
              title={description.howItWorks.title}
              list={description.howItWorks.list}
              src={
                props.desktop ? description.howItWorks.image : null
              }
          />
          <ImageWidget title={description.example.title} list={description.example.list}/>
          <ImageWidget
              title={description.refers.title}
              list={description.refers.list}
              src={
                props.desktop ? description.refers.image : null
              }
          />
        </div>
      </section>
  );
};

export default Subsidy;
