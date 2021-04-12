/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const map = new Map();
  for (let j = 0; j < domains.length; j++) {
    for (let k = domains[j].length - 1; k > -1; k--) {
      if (domains[j][k] === '.') {
        const domainpart = `.${domains[j].substr(k + 1).split('.').reverse().join('.')}`;
        if (map.has(domainpart)) {
          map.set(domainpart, map.get(domainpart) + 1);
        } else {
          map.set(domainpart, 1);
        }
      }
    }
    const anotherpart = `.${domains[j].split('.').reverse().join('.')}`;
    if (map.has(anotherpart)) {
      map.set(anotherpart, map.get(anotherpart) + 1);
    } else {
      map.set(anotherpart, 1);
    }
  }
  return Object.fromEntries(map);
}

module.exports = getDNSStats;
