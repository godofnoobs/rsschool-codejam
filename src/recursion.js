const recursion = function recursion(tree, deep = 0, result = []) {
  const res = result;
  if (!tree.value) {
    return [];
  }
  const currentDeep = deep + 1;
  if (res.length < currentDeep) {
    res.push([tree.value]);
  } else {
    res[deep] = res[deep].concat(tree.value);
  }
  if (tree.left) {
    recursion(tree.left, currentDeep, result);
  }
  if (tree.right) {
    recursion(tree.right, currentDeep, result);
  }
  return res;
};

exports.recursion = recursion;


// let tree1 = { value: 100, left: { value: 90, left: { value: 70 }, right: { value: 99 } }, right: { value: 120, left: { value: 110 }, right: {value: 130 } } };

// let tree2 = { value: 100, left: { value: 90 }, right: { value: 130 } };

// let tree3 = {};

// console.log(recursion(tree1));