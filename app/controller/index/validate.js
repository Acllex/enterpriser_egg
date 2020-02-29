'use strict';

const createRule = {
  uname: {
    type: 'string',
    required: true,
    min: 3,
    max: 8,
  },
  upassword: {
    type: 'string',
    required: true,
    min: 6,
    max: 12,
  },
};
module.exports = createRule;
