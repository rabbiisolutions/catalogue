import React from "react";
import TextWidget from "../widgets/mobile/TextWidget";
import description from "../../../constants/TuitionAreas";
import ListItem from "../../listItems";


const TuitionAreas = () => {
  return (
      <section>
        <div id="academic-tuition">
          <div className="title">1. Academic Tuition</div>
          <TextWidget title={description.kenyan.title} description={description.kenyan.description} list={ListItem(description.kenyan.list)}/>
          <hr/>
          <TextWidget title={description.international.title} description={description.international.description} list={ListItem(description.international.list)}/>
        </div>
        <div id="skill-tuition">
          <div className="title">2. Skill Tuition</div>
          <TextWidget title={description.sports.title} description={description.sports.description} list={ListItem(description.sports.list)}/>
          <hr/>
          <TextWidget title={description.foreign.title} description={description.foreign.description} list={ListItem(description.foreign.list)}/>
          <hr/>
          <TextWidget title={description.hobbies.title} description={description.hobbies.description} list={ListItem(description.hobbies.list)}/>
        </div>
      </section>
  );
};

export default TuitionAreas;
