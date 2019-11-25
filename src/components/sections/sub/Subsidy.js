import React from "react";
import TextWidget from "../widgets/mobile/TextWidget";
import description from "../../../constants/Subsidy";
import ListItem from "../../listItems";


const Subsidy = () => {
  return (
      <section>
        <TextWidget title={description.howItWorks.title} list={ListItem(description.howItWorks.list)}/>
        <hr/>
        <TextWidget title={description.example.title} list={ListItem(description.example.list)}/>
        <hr/>
        <TextWidget title={description.refers.title} list={ListItem(description.refers.list)}/>
      </section>
  );
};

export default Subsidy;
