/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let newMail = email.split('');
  for (let i = 0; i < newMail.length; i++) {
    if (newMail[i] === '@') {
      newMail = newMail.slice(i + 1);
    }
  }
  return newMail.join('');
}

module.exports = getEmailDomain;
