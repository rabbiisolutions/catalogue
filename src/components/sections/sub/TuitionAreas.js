import React from "react";
import TextWidget from "../widgets/mobile/TextWidget";
import description from "../../../constants/TuitionAreas";
import ListItem from "../../listItems";


const TuitionAreas = () => {
  return (
      <section>
        <div id="academic-tuition">
          <title>1. Academic Tuition</title>
          <TextWidget title={description.kenyan.title} description={description.kenyan.description}/>
          <TextWidget title={description.international.title} description={description.international.description}/>
        </div>
        <div id="skill-tuition">
          <title>2. Skill Tuition</title>
          <TextWidget title={description.sports.title} description={description.sports.description} list={ListItem(description.sports.list)}/>
          <TextWidget title={description.foreign.title} description={description.foreign.description} list={ListItem(description.foreign.list)}/>
          <TextWidget title={description.hobbies.title} description={description.hobbies.description} list={ListItem(description.hobbies.list)}/>
        </div>
      </section>
  );
};

export default TuitionAreas;
