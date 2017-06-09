'use strict';
const opn = require('opn');

const DESPACITO_YOUTUBE = 'https://www.youtube.com/watch?v=kJQP7kiw5Fk';
const DESPACITO_YOUTUBE_BIEBER = 'https://www.youtube.com/watch?v=72UO0v5ESUo';
const opnOptions = {wait: false};

module.exports = options => {
  if (options.bieber) return opn(DESPACITO_YOUTUBE_BIEBER, opnOptions);
  return opn(DESPACITO_YOUTUBE, opnOptions);
};
