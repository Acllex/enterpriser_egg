'use strict';

const createRule = {
  aname: {
    type: 'string',
    required: true,
    min: 5,
    max: 8,
  },
  apassword: {
    type: 'string',
    required: true,
    min: 6,
    max: 12,
  },
};
module.exports = createRule;
