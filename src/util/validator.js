const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const URL_REGEX = /.*/;

const validationRules = {
  "email": {
    pattern: EMAIL_REGEX,
  },
  "url": {
    pattern: URL_REGEX,
  },
};

export default (state) => {
  let inputs = {...state};
  Object.entries(inputs).forEach(([, input]) => {
    input.error = '';
    const rules = validationRules[input.type] || {};
    Object.entries(rules).forEach(([ruleType, ruleValue]) => {
      switch (ruleType) {
      case 'pattern':
        input.error = input.value.match(ruleValue) ? '' : 'Not a good one';
        break;
      default:
      }
    });
    if (input.required) {
      input.error = input.value ? input.error : 'This is required';
    }
  });
  return inputs;
};
