const lozdiff = require('return-deep-diff');
module.exports = (oMember, nMember) => {
  console.log(lozdiff(oMember, nMember));
};
