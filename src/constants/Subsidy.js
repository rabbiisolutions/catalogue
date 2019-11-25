import webpIsSupported from "../helpers/webp";
import paidWebp from "../images/webp/paid.webp";
import paidJpeg from "../images/jpeg/paid.jpg";
import referWebp from "../images/webp/refer.webp";
import referJpeg from "../images/jpeg/refer.jpg";


const howItWorks = {
  title: 'How it Works', image: webpIsSupported() ? paidWebp : paidJpeg,
  list: [{key: '1', text: '8-4-4 System'}, {key: '2', text: 'CBC System'}]
};

const example = {
  title: 'For Example',
  list: [{key: '1', text: 'Lets say, you refer 5 clients.'},
    {key: '2', text: '3 clients take classes worth 9,000 per month and 2 clients take classes' +
          ' worth 5,000 per month'},
    {key: '3', text: "You will get a subsidy of\n 3(9,0000 x" +
          " 10%) + 2(5,000 x 10%) = 3,700"},
    {key: '4', text: 'Thus part of our classes will be paid for by this.'}]
};

const refers = {
  title: 'How to Refer Someone',
  image: webpIsSupported() ? referWebp : referJpeg,
  list: [{key: '1', text: 'Visit www.rabbii.co.ke'},
    {key: '2', text: 'Click the referral tab'},
    {key: '3', text: "Fill the form that opens"},
    {key: '4', text: 'We then will contact the person and organize the tuition.'}]
};

const descriptions = {
  howItWorks: howItWorks, example: example, refers: refers
};

export default descriptions;
