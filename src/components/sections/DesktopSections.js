import React from "react";
import TuitionTypes from "./sub/TuitionTypes";
import TuitionAreas from "./sub/TuitionAreas";
import TeacherCategories from "./sub/TeacherCategories";
import Subsidy from "./sub/Subsidy";
import SignUpToday from "./sub/SignUpToday";

const DesktopSections = () => {
  return (
      <section id="desktop-view">
        <TuitionTypes desktop={true}/>
        <TuitionAreas desktop={true}/>
        <TeacherCategories/>
        <Subsidy desktop={true}/>
        <SignUpToday/>
      </section>
  );
};

export default DesktopSections;
