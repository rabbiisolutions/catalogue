import React from 'react';
import SectionsAccordion from "./SectionsAccordion";
import BackGround from "../../helpers/backGround";
import DesktopSections from "./DesktopSections";


const Main = () => {
  return (
      <main>
        <section className={"banner-" + BackGround()}>
          <div id="slogan">Welcome, Umoja ni Nguvu Yetu</div>
        </section>
        <div id="tuition">Home Tuition Services</div>
        <div id="lead">Tap section to expand and view content</div>
        <section className="sections">
          <div id="mobile-view">
            <SectionsAccordion/>
          </div>
          <DesktopSections/>
        </section>
      </main>
  );
};

export default Main;
