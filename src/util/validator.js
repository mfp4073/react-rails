const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const URL_REGEX = /.*/;

const validationRules = {
  "email": {
    pattern: EMAIL_REGEX,
    required: true
  },
  "url": {
    regex: URL_REGEX,
  },
};

export default (state) => {
  let inputs = {...state};
  Object.entries(inputs).forEach(([, input]) => {
    if (!validationRules[input.type]) return;
    Object.entries(validationRules[input.type]).forEach(([ruleType, ruleValue]) => {
      switch (ruleType) {
      case 'pattern':
        input.error = input.value.match(ruleValue) ? '' : 'Not a good one';
        break;
      default:

      }
    });
  });
  return inputs;
};
