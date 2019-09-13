const justInvoke = function(fn) {
  return fn.call(this);
}

const setThisWithCall = function(fn, thisValue, arg) {
  return fn.call(thisValue, arg);
};

const setThisWithApply = function(fn, thisValue, args) {
  return fn.apply(thisValue, args)
}

const returnNewFunctionOf = function (functionToBeCopied, thisValue) {
  return functionToBeCopied.bind(thisValue)
}
