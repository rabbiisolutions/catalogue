import React from "react";
import description from "../../../constants/TuitionTypes";
import TextWidget from "../widgets/mobile/TextWidget";


const TuitionTypes = () => {
  return (
      <section id="tuition-types">
        <TextWidget title={description.personal.title} description={description.personal.description}/>
        <hr/>
        <TextWidget title={description.group.title} description={description.group.description}/>
      </section>
  );
};

export default TuitionTypes;
