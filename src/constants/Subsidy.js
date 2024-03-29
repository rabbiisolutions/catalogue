import webpIsSupported from "../helpers/webp";
import paidWebp from "../images/webp/paid.webp";
import paidJpeg from "../images/jpeg/paid.jpg";
import referWebp from "../images/webp/refer.webp";
import referJpeg from "../images/jpeg/refer.jpg";

const tagLine = 'Get your fee paid by simply refeering other clients';

const howItWorks = {
  title: 'How it Works', image: webpIsSupported() ? paidWebp : paidJpeg,
  list: [{key: '1', text: '10% of the total fee paid by the client you refer is ued to pay for' +
        ' your classes.'}, {key: '2', text: 'The subsidy depends on the number of clients you' +
        ' make.'}, {key: '2', text: 'The subsidy also depends on the number of classes your' +
        ' referral takes.'}]
};

const example = {
  title: 'For Example',
  list: [{key: '1', text: 'Lets say, you refer 5 clients.'},
    {key: '2', text: '3 clients take classes worth 9,000 per month and 2 clients take classes' +
          ' worth 5,000 per month'},
    {key: '3', text: "You will get a subsidy of\n 3(9,000 x" +
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
  howItWorks: howItWorks, example: example, refers: refers, tagLine: tagLine
};

export default descriptions;
