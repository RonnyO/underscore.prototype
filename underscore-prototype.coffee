_ = require 'underscore'

setMethod = (method)->
  ()->
    arguments = Array.prototype.slice.call arguments
    arguments.unshift this
    _[method].apply(this, arguments)

module.exports = ()->
  collectionMethods = ['each','map','reduce','reduceRight','find','filter','reject','all','any','include','invoke','pluck','max','min','sortBy','groupBy','sortedIndex','shuffle','toArray','size']

  _.each collectionMethods, (method)->
    Array.prototype[method] = Object.prototype[method] = setMethod(method)

  arrayMethods = ['first','initial','last','rest','compact','flatten','without','union','intersection','difference','uniq','zip','indexOf','lastIndexOf','range']

  _.each arrayMethods, (method)->
    Array.prototype[method] = setMethod(method)

  functionMethods = ['bind','bindAll','memoize','delay','defer','throttle','debounce','once','after','wrap','compose']

  _.each functionMethods, (method)->
    Function.prototype[method] = setMethod(method)

  objectMethods = ['keys','values','functions','extend','defaults','clone','tap','has','isEqual','isEmpty','isElement','isArray','isArguments','isFunction','isString','isNumber','isBoolean','isDate','isRegExp','isNaN','isNull','isUndefined']

  _.each objectMethods, (method)->
    Object.prototype[method] = setMethod(method)
