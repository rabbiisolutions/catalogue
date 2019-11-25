const registration = {
  title: 'Registration',
  paragraph: [{key: '1', text: 'Visit www.rabbii.co.ke'},
    {key: '2', text: 'Click \'get a tutor\' tab'}, {
    key: '3', text: 'Fill your name and contacts'}]
};

const assessment = {
  title: 'Get an Assessment and Counselling Class',
  paragraph: [{key: '1', text: 'We will call you and discuss other terms'},
    {key: '2', text: 'An assessment class will be organized'},
    {key: '3', text: 'Your child academic needs will be picked'}]
};

const placement = {
  title: 'Placement', paragraph: 'Basing on your child academic needs and the price so far agreed' +
      ' we will provide you a tutors(s).'
};

const evaluation = {
  title: 'Evaluation', paragraph: 'We continuously evaluate you during classes to ensure' +
      ' high quality service delivery.'
};


const description = {
  registration: registration, assessment: assessment, placement: placement, evaluation: evaluation
};

export default description;
