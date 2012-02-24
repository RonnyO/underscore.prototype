(function() {
  var setMethod, _;

  _ = require('underscore');

  setMethod = function(method) {
    return function() {
      arguments = Array.prototype.slice.call(arguments);
      arguments.unshift(this);
      return _[method].apply(this, arguments);
    };
  };

  module.exports = function() {
    var arrayMethods, collectionMethods, functionMethods, objectMethods;
    collectionMethods = ['each', 'map', 'reduce', 'reduceRight', 'find', 'filter', 'reject', 'all', 'any', 'include', 'invoke', 'pluck', 'max', 'min', 'sortBy', 'groupBy', 'sortedIndex', 'shuffle', 'toArray', 'size'];
    _.each(collectionMethods, function(method) {
      return Array.prototype[method] = Object.prototype[method] = setMethod(method);
    });
    arrayMethods = ['first', 'initial', 'last', 'rest', 'compact', 'flatten', 'without', 'union', 'intersection', 'difference', 'uniq', 'zip', 'indexOf', 'lastIndexOf', 'range'];
    _.each(arrayMethods, function(method) {
      return Array.prototype[method] = setMethod(method);
    });
    functionMethods = ['bind', 'bindAll', 'memoize', 'delay', 'defer', 'throttle', 'debounce', 'once', 'after', 'wrap', 'compose'];
    _.each(functionMethods, function(method) {
      return Function.prototype[method] = setMethod(method);
    });
    objectMethods = ['keys', 'values', 'functions', 'extend', 'defaults', 'clone', 'tap', 'has', 'isEqual', 'isEmpty', 'isElement', 'isArray', 'isArguments', 'isFunction', 'isString', 'isNumber', 'isBoolean', 'isDate', 'isRegExp', 'isNaN', 'isNull', 'isUndefined'];
    return _.each(objectMethods, function(method) {
      return Object.prototype[method] = setMethod(method);
    });
  };

}).call(this);
