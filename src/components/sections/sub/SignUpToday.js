import React from "react";
import CircleWidget from "../widgets/CircleWidget";
import description from "../../../constants/SignupSteps";
import ListItem from "../../listItems";


const SignUpToday = () => {
  return (
    <section id="signup-today">
      <div className="title">How to Get a Tutor</div>
      <CircleWidget title={description.registration.title} step={1} paragraph={ListItem(description.registration.paragraph)}/>
      <hr/>
      <CircleWidget title={description.assessment.title} step={2} paragraph={ListItem(description.assessment.paragraph)}/>
      <hr/>
      <CircleWidget title={description.placement.title} step={3} paragraph={description.placement.paragraph}/>
      <hr/>
      <CircleWidget title={description.evaluation.title} step={4} paragraph={description.evaluation.paragraph}/>
    </section>
  );
};

export default SignUpToday;
