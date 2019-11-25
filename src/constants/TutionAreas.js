import kenyanWebp from "../images/webp/kenyan.webp";
import kenyanJpeg from "../images/jpeg/kenyan.jpg";
import internationalWebp from "../images/webp/international.webp";
import internationalJpeg from "../images/jpeg/international.jpg";
import sportsWebp from "../images/webp/sports.webp";
import sportsJpeg from "../images/jpeg/sports.jpg";
import foreignWebp from "../images/webp/foreign.webp";
import foreignJpeg from "../images/jpeg/foreign.jpg";
import hobbiesWebp from "../images/webp/hobbies.webp";
import hobbiesJpeg from "../images/jpeg/hobbies.jpg";
import webpIsSupported from "../helpers/webp";


const kenyan = {
  title: 'Kenyan Systems',
  description: 'We have competent tutors who offer tuition for the following Kenyan systems:',
  image: webpIsSupported() ? kenyanWebp : kenyanJpeg,
  list: [{key: '1', text: '8-4-4 System'}, {key: '2', text: 'CBC System'}]
};

const international = {
  title: 'International Schools Systems', description: 'We also have tutors for several' +
      ' international systems who offer home tuition. Some of the systems are:',
  image: webpIsSupported() ? internationalWebp : internationalJpeg,
  list: [{key: '1', text: 'IGCSE'}, {key: '2', text: 'American System'}, {key: '3', text: 'IB etc'}]
};

const sports = {
  title: 'Sports and Games', description: 'Below are the sports we provide tuition for:',
  image: webpIsSupported() ? sportsWebp : sportsJpeg,
  list: [{key: '1', text: 'Chess'}, {key: '2', text: 'Skating'}, {key: '3', text: 'Swimming etc'}]
};

const foreign = {
  title: 'Foreign Languages', description: 'We provide foreign language tutors for:',
  image: webpIsSupported() ? foreignWebp : foreignJpeg,
  list: [{key: '1', text: 'German'}, {key: '2', text: 'Chinese'}, {key: '3', text: 'Latin'}, {key: '4', text: 'French etc'}]
};

const hobbies = {
  title: 'Hobbies', description: 'We help develop interests and hobbies by providing tutors for:.',
  image: webpIsSupported() ? hobbiesWebp : hobbiesJpeg,
  list: [{key: '1', text: 'Art'}, {key: '2', text: 'Photography'}, {key: '3', text: 'Music' +
        ' Instruments'}, {key: '4', text: 'DJ etc'}]
};

const descriptions = {
  international: international, sports: sports, foreign: foreign, hobbies: hobbies, kenyan: kenyan
};

export default descriptions;
