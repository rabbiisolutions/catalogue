import groupWebp from "../images/webp/group.webp";
import groupJpeg from "../images/jpeg/group.jpg";
import personalWebp from "../images/webp/personal.webp";
import personalJpeg from "../images/jpeg/personal.jpg";
import webpIsSupported from "../helpers/webp";

const tagLine = 'This section describes the various ways in which we offer tuition in a home' +
    ' environment';

const personal = {
  title: 'Personal Tuition', description: 'The teacher only teaches one student in a home' +
      ' environment. Suitable to students who are weak in particular subjects and parent can' +
      ' afford a number of classes for him/her.',
  image: webpIsSupported() ? personalWebp : personalJpeg
};

const group = {
  title: 'Group Tuition', description: 'One tutor teachers two or three students. It is most' +
      ' suitable for students who are relatively weak in certain subjects; the price per class' +
      ' is cheaper as compared to personal tuition, thus, a student can take more classes.',
  image: webpIsSupported() ? groupWebp : groupJpeg
};

const descriptions = {
  personal: personal, group: group, tagLine: tagLine
};

export default descriptions;
