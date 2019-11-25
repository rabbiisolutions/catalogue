import React from "react";
import description from "../../../constants/teachers.js";
import texts from "../../../constants/texts";
import SignUpModal from "../../SignUpModal";


const TeacherCategories = () => {
  return (
      <section>
        <title>{description.tagLine}</title>
        <ol className="teachers">
          <li className="title">{description.basic.type}</li>
          <div className="desc">{description.basic.description}</div>
          <hr/>
          <li className="title">{description.choice.type}</li>
          <div className="desc">{description.choice.description}</div>
          <hr/>
          <li className="title">{description.plus.type}</li>
          <div className="desc">{description.plus.description}</div>
          <hr/>
          <li className="title">{description.premium.type}</li>
          <div className="desc">{description.premium.description}</div>
        </ol>
        <div id="pricing">
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
