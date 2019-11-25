import React from "react";
import texts from "../../constants/texts";
import mobileAccordion from "../accordion";
import TuitionTypes from "./sub/TuitionTypes";
import TuitionAreas from "./sub/TuitionAreas";
import TeacherCategories from "./sub/TeacherCategories";
import Subsidy from "./sub/Subsidy";
import SignUpToday from "./sub/SignUpToday";

const name = 'sections-accordion';

const SectionsAccordion = () => {
    const collapses = [];
    collapses.push(
        <div className={name} key={11}>
          {mobileAccordion.toggle(texts.typesOfTuition)}
          {
            <TuitionTypes/>
          }
        </div>
        ,
        <div className={name} key={12}>
          {mobileAccordion.toggle(texts.tuitionAreas)}
          {
            <TuitionAreas/>
          }
        </div>
        ,
        <div className={name} key={13}>
          {mobileAccordion.toggle(texts.teacherCategories)}
          {
            <TeacherCategories/>
          }
        </div>
        ,
        <div className={name} key={13}>
        {mobileAccordion.toggle(texts.subsidy)}
        {
            <Subsidy/>
        }
        </div>
        ,
        <div className={name} key={14}>
          {mobileAccordion.toggle(texts.signUpToday)}
          {
            <SignUpToday/>
          }
        </div>
    );

    return ( // return the sections list
        collapses.map((panel) => (panel))
    );
  };

export default SectionsAccordion;
