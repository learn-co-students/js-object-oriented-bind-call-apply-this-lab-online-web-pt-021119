//Your code here

function justInvoke(fun) {
   return fun();
}

function setThisWithCall(fun, thisValue, arg) {
  return fun.call(thisValue, arg);
}

function setThisWithApply(fun, thisValue, arg) {
  return fun.apply(thisValue, arg)
}

function returnNewFunctionOf(oldFunction, thisValue) {
  const newfun = oldFunction.bind(thisValue);
  return newfun

}
