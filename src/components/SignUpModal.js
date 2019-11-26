import React from "react";
import ButtonLink from "./ButtonLink";
import signUpHandler from "../events/signUpModal";


const SignUpModal = (props) => {
  return (
      <div className={props.className}>
        <div className={"close-icon " + props.status} onClick={e => signUpHandler(e)}>&#10006;</div>
        <div className="sign-up-text">{props.signUpText}</div>
        <div id="client-btns">
          <ButtonLink link="https://forms.gle/y7KTkMDtYCtAywDu6" className="clients-btn"
                      value={props.value ? props.value : "Get a Tutor"}/>
        </div>
        <div className="msg">If you face difficulty in registering call, text or WhatsApp on 0772 915 361</div>
      </div>
  );
};

// Exporting the component
export default SignUpModal;
