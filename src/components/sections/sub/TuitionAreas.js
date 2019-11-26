import React from "react";
import ImageWidget from "../widgets/ImageWidget";
import description from "../../../constants/TuitionAreas";
import texts from "../../../constants/texts";


const TuitionAreas = (props) => {
  return (
      <section id="tuition-areas">
        <div className="xtion-title">
          <span className="text">{texts.tuitionAreas}</span>
        </div>
        <div className="content">
          <div id="academic-tuition">
            <div className="title">1. Academic Tuition</div>
            <ImageWidget
                title={description.kenyan.title}
                description={description.kenyan.description}
                list={description.kenyan.list}
                src={
                  props.desktop ? description.kenyan.image : null
                }
            />
            <ImageWidget
                title={description.international.title}
                description={description.international.description}
                list={description.international.list}
                src={
                  props.desktop ? description.international.image : null
                }
            />
          </div>
          <div id="skill-tuition">
            <div className="title">2. Skill Tuition</div>
            <ImageWidget
                title={description.sports.title}
                description={description.sports.description}
                list={description.sports.list}
                src={
                  props.desktop ? description.sports.image : null
                }
            />
            <ImageWidget
                title={description.foreign.title}
                description={description.foreign.description}
                list={description.foreign.list}
                src={
                  props.desktop ? description.foreign.image : null
                }
            />
            <ImageWidget
                title={description.hobbies.title}
                description={description.hobbies.description}
                list={description.hobbies.list}
                src={
                  props.desktop ? description.hobbies.image : null
                }
            />
          </div>
        </div>
      </section>
  );
};

export default TuitionAreas;
