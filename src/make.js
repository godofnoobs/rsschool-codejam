const make = function make(...argum) {
  const args = argum.reduce((a, b) => [].concat(a, b));
  if (typeof args[args.length - 1] === 'function') {
    const func = args[args.length - 1];
    args.pop();
    return args.reduce((acc, it) => func(acc, it));
  }
  return (...x) => make([].concat(args, x));
};

exports.make = make;
