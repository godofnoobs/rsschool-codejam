function sumOfOther(array) {
  if (!Array.isArray(array)) {
    throw TypeError('Argument must be array !!!');
  }
  if (!array) {
    return [];
  }
  if (array.length === 1) {
    return [undefined];
  }
  return array.map((it1, ind1) => (array.filter((it2, ind2) => ((ind1 === ind2) ? 0 : 1))
    .reduce((a, b) => a + b)));
}

module.exports.sumOfOther = sumOfOther;
