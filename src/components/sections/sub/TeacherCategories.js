import React from "react";
import description from "../../../constants/teachers.js";
import texts from "../../../constants/texts";
import SignUpModal from "../../SignUpModal";


const TeacherCategories = () => {
  return (
      <section>
        <title>{description.tagLine}</title>
        <ol className="teachers">
          <li>{description.basic.type}</li>
          <div>{description.basic.description}</div>
          <li>{description.choice.type}</li>
          <div>{description.choice.description}</div>
          <li>{description.plus.type}</li>
          <div>{description.plus.description}</div>
          <li>{description.premium.type}</li>
          <div>{description.premium.description}</div>
        </ol>
        <div className="pricing">
          <div id="table">
            <div id="titles">
              <span>{texts.tuitionAreas}</span>
              <span>{texts.category}</span>
              <span>{texts.tuitionTypes}</span>
              <span>{texts.numOfStudents}</span>
              <span>{texts.paymentPerClass}</span>
            </div>
            <hr/>
            <div id="body">
              <SignUpModal className="sign-up div" signUpText={texts.signUpLong} status="hidden"/>
            </div>
          </div>
          <span className="help">scroll to the right to view more <i className="arrow right"/></span>
        </div>
      </section>
  );
};

export default TeacherCategories;
