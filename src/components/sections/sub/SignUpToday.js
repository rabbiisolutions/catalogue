import React from "react";
import CircleWidget from "../widgets/CircleWidget";
import description from "../../../constants/SignupSteps";
import ListItem from "../../listItems";


const SignUpToday = () => {
  return (
    <section>
      <title>How to Get a Tutor</title>
      <CircleWidget title={description.registration.title} step={1} paragraph={ListItem(description.registration.paragraph)}/>
      <CircleWidget title={description.assessment.title} step={2} paragraph={ListItem(description.assessment.paragraph)}/>
      <CircleWidget title={description.placement.title} step={3} paragraph={description.placement.paragraph}/>
      <CircleWidget title={description.evaluation.title} step={4} paragraph={description.evaluation.paragraph}/>
    </section>
  );
};

export default SignUpToday;
