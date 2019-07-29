(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['vendors~node-module-ReactSlackChat'],
  {
    /***/ './node_modules/classnames/index.js':
      /*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        eval(
          "var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n  Copyright (c) 2017 Jed Watson.\n  Licensed under the MIT License (MIT), see\n  http://jedwatson.github.io/classnames\n*/\n/* global define */\n\n(function () {\n\t'use strict';\n\n\tvar hasOwn = {}.hasOwnProperty;\n\n\tfunction classNames () {\n\t\tvar classes = [];\n\n\t\tfor (var i = 0; i < arguments.length; i++) {\n\t\t\tvar arg = arguments[i];\n\t\t\tif (!arg) continue;\n\n\t\t\tvar argType = typeof arg;\n\n\t\t\tif (argType === 'string' || argType === 'number') {\n\t\t\t\tclasses.push(arg);\n\t\t\t} else if (Array.isArray(arg) && arg.length) {\n\t\t\t\tvar inner = classNames.apply(null, arg);\n\t\t\t\tif (inner) {\n\t\t\t\t\tclasses.push(inner);\n\t\t\t\t}\n\t\t\t} else if (argType === 'object') {\n\t\t\t\tfor (var key in arg) {\n\t\t\t\t\tif (hasOwn.call(arg, key) && arg[key]) {\n\t\t\t\t\t\tclasses.push(key);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn classes.join(' ');\n\t}\n\n\tif ( true && module.exports) {\n\t\tclassNames.default = classNames;\n\t\tmodule.exports = classNames;\n\t} else if (true) {\n\t\t// register as 'classnames', consistent with npm package name\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\treturn classNames;\n\t\t}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {}\n}());\n\n\n//# sourceURL=webpack:///./node_modules/classnames/index.js?"
        );

        /***/
      },

    /***/ './node_modules/gh-emoji/dist/gh-emoji.js':
      /*!************************************************!*\
  !*** ./node_modules/gh-emoji/dist/gh-emoji.js ***!
  \************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        eval(
          "var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {\n  if (true) {\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n  } else { var mod; }\n})(this, function () {});\n(function (global, factory) {\n  if (true) {\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n  } else { var mod; }\n})(this, function (exports) {\n  'use strict';\n\n  Object.defineProperty(exports, \"__esModule\", {\n    value: true\n  });\n  exports.find = find;\n  exports.load = load;\n  exports.all = all;\n  exports.exist = exist;\n  exports.getUrl = getUrl;\n  exports.parse = parse;\n\n  function _toConsumableArray(arr) {\n    if (Array.isArray(arr)) {\n      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {\n        arr2[i] = arr[i];\n      }\n\n      return arr2;\n    } else {\n      return Array.from(arr);\n    }\n  }\n\n  var enpoint = 'https://api.github.com/emojis';\n  var delimiterRegex = /(\\:[\\w\\-\\+]+\\:)/g;\n  var emojis = null;\n\n  var fetch = window.fetch || function (endpoint) {\n    return new Promise(function (resolve, reject) {\n      var xhr = new XMLHttpRequest();\n\n      xhr.onreadystatechange = function () {\n        if (xhr.readyState === XMLHttpRequest.DONE) {\n          if (xhr.status !== 200) {\n            return reject(xhr.responseText);\n          }\n\n          return resolve({ json: function json() {\n              return JSON.parse(xhr.responseText);\n            } });\n        }\n      };\n\n      xhr.open('GET', endpoint, true);\n      xhr.send();\n    });\n  };\n\n  /**\n   * Return array with matched emojis in text.\n   *\n   * @example\n   * import { load as loadEmojis, find as findEmojis } from 'gh-emoji';\n   *\n   * const text = 'Do you believe in :alien:...? :scream:';\n   *\n   * loadEmojis().then((emojis) => {\n   *   console.log(findEmojis(text)); // [':alien:', ':scream:']\n   * });\n   *\n   * @param {String} text Text to search for emojis.\n   *\n   * @returns {Array<String>} Array with matched emojis.\n   */\n  function find(text) {\n    return text.match(delimiterRegex) || [];\n  }\n\n  /**\n   * Fetch the emoji data from Github's api.\n   *\n   * @example\n   * import { load as loadEmojis } from 'gh-emoji';\n   *\n   * loadEmojis().then((emojis) => {\n   *   console.log(emojis['+1']); // 👍\n   * });\n   *\n   * @returns {Promise<Object>} Promise which passes Object with emoji names\n   * as keys and generated image tags as values to callback.\n   */\n  function load() {\n    return new Promise(function (resolve) {\n      if (emojis) return resolve(emojis);\n\n      return fetch(enpoint).then(function (r) {\n        return r.json();\n      }).then(function (response) {\n        emojis = response;\n        resolve(emojis);\n      });\n    });\n  }\n\n  /**\n   * Return all fetched emojis.\n   *\n   * @example\n   * import { load as loadEmojis, all as allEmojis } from 'gh-emoji';\n   *\n   * loadEmojis().then(() => {\n   *   console.log(allEmojis()); // {emojiName: emojiImageTag}\n   * });\n   *\n   * @returns {Object} Object with emoji names as keys and generated image tags\n   * as values.\n   */\n  function all() {\n    return emojis;\n  }\n\n  /**\n   * Check if requested emoji exists.\n   *\n   * @example\n   * import { load as loadEmojis, exist as emojiExists } from 'gh-emoji';\n   *\n   * loadEmojis().then(() => {\n   *   console.log(emojiExists('foo')); // false\n   *   console.log(emojiExists('smile')); // true\n   * });\n   *\n   * @param {String} emojiId Name of emoji.\n   *\n   * @returns {Boolean}\n   */\n  function exist(emojiId) {\n    var emojiMap = all();\n\n    if (emojiMap == null) {\n      return false;\n    }\n\n    return !!emojiMap[emojiId];\n  }\n\n  /**\n   * Return github's image url of emoji.\n   *\n   * @example\n   * import { load as loadEmojis, getUrl } from 'gh-emoji';\n   *\n   * loadEmojis().then(() => {\n   *   console.log(getUrl('apple')); // 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f34e.png?v6'\n   * });\n   *\n   * @param {String} emojiId Name of emoji.\n   *\n   * @returns {String} Image url of given emoji.\n   */\n  function getUrl(emojiId) {\n    var emojiMap = all();\n\n    if (emojiMap == null) {\n      return null;\n    }\n\n    return emojiMap[emojiId];\n  }\n\n  /**\n   * Parse text and replace emoji tags with actual emoji symbols.\n   *\n   * @example\n   * import { load as loadEmojis, parse } from 'gh-emoji';\n   *\n   * const text = 'Do you believe in :alien:...? :scream:';\n   *\n   * loadEmojis().then(() => {\n   *   console.log(parse(text)) // 'Do you believe in 👽...? 😱';\n   * });\n   *\n   * @param {String} text Text to parse.\n   * @param {Object} options Options with additional data for parser.\n   * @param {String} options.classNames String with custom class names\n   * added to each emoji, separated with whitespace.\n   *\n   * @returns {String} Parsed text with emoji image tags in it.\n   */\n  function parse(text) {\n    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];\n\n    var output = '';\n    var customClassNames = options.classNames ? options.classNames.trim().split(/\\s+/) : '';\n\n    output += text.replace(delimiterRegex, function (match) {\n      var name = match.replace(/:/g, '');\n      var classNames = ['gh-emoji', 'gh-emoji-' + name];\n\n      if (!exist(name)) {\n        return match;\n      }\n\n      if (customClassNames) {\n        classNames.push.apply(classNames, _toConsumableArray(customClassNames));\n      }\n\n      var imageSrc = getUrl(name);\n      var imageClass = classNames.join(' ');\n      var imageAlt = name;\n\n      return '<img src=\"' + imageSrc + '\" class=\"' + imageClass + '\" alt=\"' + imageAlt + '\" />';\n    });\n\n    return output;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/gh-emoji/dist/gh-emoji.js?"
        );

        /***/
      },

    /***/ './node_modules/httpplease/lib/error.js':
      /*!**********************************************!*\
  !*** ./node_modules/httpplease/lib/error.js ***!
  \**********************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nvar Response = __webpack_require__(/*! ./response */ "./node_modules/httpplease/lib/response.js");\nvar extractResponseProps = __webpack_require__(/*! ./utils/extractResponseProps */ "./node_modules/httpplease/lib/utils/extractResponseProps.js");\nvar extend = __webpack_require__(/*! xtend */ "./node_modules/httpplease/node_modules/xtend/index.js");\n\nfunction RequestError(message, props) {\n  var err = new Error(message);\n  err.name = \'RequestError\';\n  this.name = err.name;\n  this.message = err.message;\n  if (err.stack) {\n    this.stack = err.stack;\n  }\n\n  this.toString = function() {\n    return this.message;\n  };\n\n  for (var k in props) {\n    if (props.hasOwnProperty(k)) {\n      this[k] = props[k];\n    }\n  }\n}\n\nRequestError.prototype = extend(Error.prototype);\nRequestError.prototype.constructor = RequestError;\n\nRequestError.create = function(message, req, props) {\n  var err = new RequestError(message, props);\n  Response.call(err, extractResponseProps(req));\n  return err;\n};\n\nmodule.exports = RequestError;\n\n\n//# sourceURL=webpack:///./node_modules/httpplease/lib/error.js?'
        );

        /***/
      },

    /***/ './node_modules/httpplease/lib/index.js':
      /*!**********************************************!*\
  !*** ./node_modules/httpplease/lib/index.js ***!
  \**********************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          "\n\nvar\n  cleanURL = __webpack_require__(/*! ../plugins/cleanurl */ \"./node_modules/httpplease/plugins/cleanurl.js\"),\n  XHR = __webpack_require__(/*! ./xhr */ \"./node_modules/httpplease/lib/xhr-browser.js\"),\n  delay = __webpack_require__(/*! ./utils/delay */ \"./node_modules/httpplease/lib/utils/delay.js\"),\n  RequestError = __webpack_require__(/*! ./error */ \"./node_modules/httpplease/lib/error.js\"),\n  Response = __webpack_require__(/*! ./response */ \"./node_modules/httpplease/lib/response.js\"),\n  Request = __webpack_require__(/*! ./request */ \"./node_modules/httpplease/lib/request.js\"),\n  extend = __webpack_require__(/*! xtend */ \"./node_modules/httpplease/node_modules/xtend/index.js\"),\n  once = __webpack_require__(/*! ./utils/once */ \"./node_modules/httpplease/lib/utils/once.js\");\n\nvar i,\n    createError = RequestError.create;\n\nfunction factory(defaults, plugins) {\n  defaults = defaults || {};\n  plugins = plugins || [];\n\n  function http(req, cb) {\n    var xhr, plugin, done, k, timeoutId, supportsLoadAndErrorEvents;\n\n    req = new Request(extend(defaults, req));\n\n    for (i = 0; i < plugins.length; i++) {\n      plugin = plugins[i];\n      if (plugin.processRequest) {\n        plugin.processRequest(req);\n      }\n    }\n\n    // Give the plugins a chance to create the XHR object\n    for (i = 0; i < plugins.length; i++) {\n      plugin = plugins[i];\n      if (plugin.createXHR) {\n        xhr = plugin.createXHR(req);\n        break; // First come, first serve\n      }\n    }\n    xhr = xhr || new XHR();\n\n    req.xhr = xhr;\n\n    // Use a single completion callback. This can be called with or without\n    // an error. If no error is passed, the request will be examined to see\n    // if it was successful.\n    done = once(delay(function(rawError) {\n      clearTimeout(timeoutId);\n      xhr.onload = xhr.onerror = xhr.onabort = xhr.onreadystatechange = xhr.ontimeout = xhr.onprogress = null;\n\n      var err = getError(req, rawError);\n\n      var res = err || Response.fromRequest(req);\n      for (i = 0; i < plugins.length; i++) {\n        plugin = plugins[i];\n        if (plugin.processResponse) {\n          plugin.processResponse(res);\n        }\n      }\n\n      // Invoke callbacks\n      if (err && req.onerror) req.onerror(err);\n      if (!err && req.onload) req.onload(res);\n      if (cb) cb(err, err ? undefined : res);\n\n    }));\n\n    supportsLoadAndErrorEvents = ('onload' in xhr) && ('onerror' in xhr);\n    xhr.onload = function() { done(); };\n    xhr.onerror = done;\n    xhr.onabort = function() { done(); };\n\n    // We'd rather use `onload`, `onerror`, and `onabort` since they're the\n    // only way to reliably detect successes and failures but, if they\n    // aren't available, we fall back to using `onreadystatechange`.\n    xhr.onreadystatechange = function() {\n      if (xhr.readyState !== 4) return;\n\n      if (req.aborted) return done();\n\n      if (!supportsLoadAndErrorEvents) {\n        // Assume a status of 0 is an error. This could be a false\n        // positive, but there's no way to tell when using\n        // `onreadystatechange` ):\n        // See matthewwithanm/react-inlinesvg#10.\n\n        // Some browsers don't like you reading XHR properties when the\n        // XHR has been aborted. In case we've gotten here as a result\n        // of that (either our calling `about()` in the timeout handler\n        // or the user calling it directly even though they shouldn't),\n        // be careful about accessing it.\n        var status;\n        try {\n          status = xhr.status;\n        } catch (err) {}\n        var err = status === 0 ? new Error('Internal XHR Error') : null;\n        return done(err);\n      }\n    };\n\n    // IE sometimes fails if you don't specify every handler.\n    // See http://social.msdn.microsoft.com/Forums/ie/en-US/30ef3add-767c-4436-b8a9-f1ca19b4812e/ie9-rtm-xdomainrequest-issued-requests-may-abort-if-all-event-handlers-not-specified?forum=iewebdevelopment\n    xhr.ontimeout = function() { /* noop */ };\n    xhr.onprogress = function() { /* noop */ };\n\n    xhr.open(req.method, req.url);\n\n    if (req.timeout) {\n      // If we use the normal XHR timeout mechanism (`xhr.timeout` and\n      // `xhr.ontimeout`), `onreadystatechange` will be triggered before\n      // `ontimeout`. There's no way to recognize that it was triggered by\n      // a timeout, and we'd be unable to dispatch the right error.\n      timeoutId = setTimeout(function() {\n        req.timedOut = true;\n        done();\n        try {\n          xhr.abort();\n        } catch (err) {}\n      }, req.timeout);\n    }\n\n    for (k in req.headers) {\n      if (req.headers.hasOwnProperty(k)) {\n        xhr.setRequestHeader(k, req.headers[k]);\n      }\n    }\n\n    xhr.send(req.body);\n\n    return req;\n  }\n\n  var method,\n    methods = ['get', 'post', 'put', 'head', 'patch', 'delete'],\n    verb = function(method) {\n      return function(req, cb) {\n        req = new Request(req);\n        req.method = method;\n        return http(req, cb);\n      };\n    };\n  for (i = 0; i < methods.length; i++) {\n    method = methods[i];\n    http[method] = verb(method);\n  }\n\n  http.plugins = function() {\n    return plugins;\n  };\n\n  http.defaults = function(newValues) {\n    if (newValues) {\n      return factory(extend(defaults, newValues), plugins);\n    }\n    return defaults;\n  };\n\n  http.use = function() {\n    var newPlugins = Array.prototype.slice.call(arguments, 0);\n    return factory(defaults, plugins.concat(newPlugins));\n  };\n\n  http.bare = function() {\n    return factory();\n  };\n\n  http.Request = Request;\n  http.Response = Response;\n  http.RequestError = RequestError;\n\n  return http;\n}\n\nmodule.exports = factory({}, [cleanURL]);\n\n/**\n * Analyze the request to see if it represents an error. If so, return it! An\n * original error object can be passed as a hint.\n */\nfunction getError(req, err) {\n  if (req.aborted) return createError('Request aborted', req, {name: 'Abort'});\n\n  if (req.timedOut) return createError('Request timeout', req, {name: 'Timeout'});\n\n  var xhr = req.xhr;\n  var type = Math.floor(xhr.status / 100);\n\n  var kind;\n  switch (type) {\n    case 0:\n    case 2:\n      // These don't represent errors unless the function was passed an\n      // error object explicitly.\n      if (!err) return;\n      return createError(err.message, req);\n    case 4:\n      // Sometimes 4XX statuses aren't errors.\n      if (xhr.status === 404 && !req.errorOn404) return;\n      kind = 'Client';\n      break;\n    case 5:\n      kind = 'Server';\n      break;\n    default:\n      kind = 'HTTP';\n  }\n  var msg = kind + ' Error: ' +\n        'The server returned a status of ' + xhr.status +\n        ' for the request \"' +\n        req.method.toUpperCase() + ' ' + req.url + '\"';\n  return createError(msg, req);\n}\n\n\n//# sourceURL=webpack:///./node_modules/httpplease/lib/index.js?"
        );

        /***/
      },

    /***/ './node_modules/httpplease/lib/request.js':
      /*!************************************************!*\
  !*** ./node_modules/httpplease/lib/request.js ***!
  \************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          "\n\nfunction Request(optsOrUrl) {\n  var opts = typeof optsOrUrl === 'string' ? {url: optsOrUrl} : optsOrUrl || {};\n  this.method = opts.method ? opts.method.toUpperCase() : 'GET';\n  this.url = opts.url;\n  this.headers = opts.headers || {};\n  this.body = opts.body;\n  this.timeout = opts.timeout || 0;\n  this.errorOn404 = opts.errorOn404 != null ? opts.errorOn404 : true;\n  this.onload = opts.onload;\n  this.onerror = opts.onerror;\n}\n\nRequest.prototype.abort = function() {\n  if (this.aborted) return;\n  this.aborted = true;\n  this.xhr.abort();\n  return this;\n};\n\nRequest.prototype.header = function(name, value) {\n  var k;\n  for (k in this.headers) {\n    if (this.headers.hasOwnProperty(k)) {\n      if (name.toLowerCase() === k.toLowerCase()) {\n        if (arguments.length === 1) {\n          return this.headers[k];\n        }\n\n        delete this.headers[k];\n        break;\n      }\n    }\n  }\n  if (value != null) {\n    this.headers[name] = value;\n    return value;\n  }\n};\n\n\nmodule.exports = Request;\n\n\n//# sourceURL=webpack:///./node_modules/httpplease/lib/request.js?"
        );

        /***/
      },

    /***/ './node_modules/httpplease/lib/response.js':
      /*!*************************************************!*\
  !*** ./node_modules/httpplease/lib/response.js ***!
  \*************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nvar Request = __webpack_require__(/*! ./request */ "./node_modules/httpplease/lib/request.js");\nvar extractResponseProps = __webpack_require__(/*! ./utils/extractResponseProps */ "./node_modules/httpplease/lib/utils/extractResponseProps.js");\n\nfunction Response(props) {\n  this.request = props.request;\n  this.xhr = props.xhr;\n  this.headers = props.headers || {};\n  this.status = props.status || 0;\n  this.text = props.text;\n  this.body = props.body;\n  this.contentType = props.contentType;\n  this.isHttpError = props.status >= 400;\n}\n\nResponse.prototype.header = Request.prototype.header;\n\nResponse.fromRequest = function(req) {\n  return new Response(extractResponseProps(req));\n};\n\n\nmodule.exports = Response;\n\n\n//# sourceURL=webpack:///./node_modules/httpplease/lib/response.js?'
        );

        /***/
      },

    /***/ './node_modules/httpplease/lib/utils/delay.js':
      /*!****************************************************!*\
  !*** ./node_modules/httpplease/lib/utils/delay.js ***!
  \****************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\n// Wrap a function in a `setTimeout` call. This is used to guarantee async\n// behavior, which can avoid unexpected errors.\n\nmodule.exports = function(fn) {\n  return function() {\n    var\n      args = Array.prototype.slice.call(arguments, 0),\n      newFunc = function() {\n        return fn.apply(null, args);\n      };\n    setTimeout(newFunc, 0);\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/httpplease/lib/utils/delay.js?'
        );

        /***/
      },

    /***/ './node_modules/httpplease/lib/utils/extractResponseProps.js':
      /*!*******************************************************************!*\
  !*** ./node_modules/httpplease/lib/utils/extractResponseProps.js ***!
  \*******************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          "\n\nvar extend = __webpack_require__(/*! xtend */ \"./node_modules/httpplease/node_modules/xtend/index.js\");\n\nmodule.exports = function(req) {\n  var xhr = req.xhr;\n  var props = {request: req, xhr: xhr};\n\n  // Try to create the response from the request. If the request was aborted,\n  // accesssing properties of the XHR may throw an error, so we wrap in a\n  // try/catch.\n  try {\n    var lines, i, m, headers = {};\n    if (xhr.getAllResponseHeaders) {\n      lines = xhr.getAllResponseHeaders().split('\\n');\n      for (i = 0; i < lines.length; i++) {\n        if ((m = lines[i].match(/\\s*([^\\s]+):\\s+([^\\s]+)/))) {\n          headers[m[1]] = m[2];\n        }\n      }\n    }\n\n    props = extend(props, {\n      status: xhr.status,\n      contentType: xhr.contentType || (xhr.getResponseHeader && xhr.getResponseHeader('Content-Type')),\n      headers: headers,\n      text: xhr.responseText,\n      body: xhr.response || xhr.responseText\n    });\n  } catch (err) {}\n\n  return props;\n};\n\n\n//# sourceURL=webpack:///./node_modules/httpplease/lib/utils/extractResponseProps.js?"
        );

        /***/
      },

    /***/ './node_modules/httpplease/lib/utils/once.js':
      /*!***************************************************!*\
  !*** ./node_modules/httpplease/lib/utils/once.js ***!
  \***************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\n// A "once" utility.\nmodule.exports = function(fn) {\n  var result, called = false;\n  return function() {\n    if (!called) {\n      called = true;\n      result = fn.apply(this, arguments);\n    }\n    return result;\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/httpplease/lib/utils/once.js?'
        );

        /***/
      },

    /***/ './node_modules/httpplease/lib/xhr-browser.js':
      /*!****************************************************!*\
  !*** ./node_modules/httpplease/lib/xhr-browser.js ***!
  \****************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        eval(
          'module.exports = window.XMLHttpRequest;\n\n\n//# sourceURL=webpack:///./node_modules/httpplease/lib/xhr-browser.js?'
        );

        /***/
      },

    /***/ './node_modules/httpplease/node_modules/xtend/index.js':
      /*!*************************************************************!*\
  !*** ./node_modules/httpplease/node_modules/xtend/index.js ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        eval(
          'module.exports = extend\n\nfunction extend() {\n    var target = {}\n\n    for (var i = 0; i < arguments.length; i++) {\n        var source = arguments[i]\n\n        for (var key in source) {\n            if (source.hasOwnProperty(key)) {\n                target[key] = source[key]\n            }\n        }\n    }\n\n    return target\n}\n\n\n//# sourceURL=webpack:///./node_modules/httpplease/node_modules/xtend/index.js?'
        );

        /***/
      },

    /***/ './node_modules/httpplease/plugins/cleanurl.js':
      /*!*****************************************************!*\
  !*** ./node_modules/httpplease/plugins/cleanurl.js ***!
  \*****************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nmodule.exports = {\n  processRequest: function(req) {\n    req.url = req.url.replace(/[^%]+/g, function(s) {\n      return encodeURI(s);\n    });\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/httpplease/plugins/cleanurl.js?'
        );

        /***/
      },

    /***/ './node_modules/prop-types/factoryWithTypeCheckers.js':
      /*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          "/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\nvar assign = __webpack_require__(/*! object-assign */ \"./node_modules/object-assign/index.js\");\n\nvar ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ \"./node_modules/prop-types/lib/ReactPropTypesSecret.js\");\nvar checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ \"./node_modules/prop-types/checkPropTypes.js\");\n\nvar printWarning = function() {};\n\nif (true) {\n  printWarning = function(text) {\n    var message = 'Warning: ' + text;\n    if (typeof console !== 'undefined') {\n      console.error(message);\n    }\n    try {\n      // --- Welcome to debugging React ---\n      // This error was thrown as a convenience so that you can use this stack\n      // to find the callsite that caused this warning to fire.\n      throw new Error(message);\n    } catch (x) {}\n  };\n}\n\nfunction emptyFunctionThatReturnsNull() {\n  return null;\n}\n\nmodule.exports = function(isValidElement, throwOnDirectAccess) {\n  /* global Symbol */\n  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;\n  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.\n\n  /**\n   * Returns the iterator method function contained on the iterable object.\n   *\n   * Be sure to invoke the function with the iterable as context:\n   *\n   *     var iteratorFn = getIteratorFn(myIterable);\n   *     if (iteratorFn) {\n   *       var iterator = iteratorFn.call(myIterable);\n   *       ...\n   *     }\n   *\n   * @param {?object} maybeIterable\n   * @return {?function}\n   */\n  function getIteratorFn(maybeIterable) {\n    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);\n    if (typeof iteratorFn === 'function') {\n      return iteratorFn;\n    }\n  }\n\n  /**\n   * Collection of methods that allow declaration and validation of props that are\n   * supplied to React components. Example usage:\n   *\n   *   var Props = require('ReactPropTypes');\n   *   var MyArticle = React.createClass({\n   *     propTypes: {\n   *       // An optional string prop named \"description\".\n   *       description: Props.string,\n   *\n   *       // A required enum prop named \"category\".\n   *       category: Props.oneOf(['News','Photos']).isRequired,\n   *\n   *       // A prop named \"dialog\" that requires an instance of Dialog.\n   *       dialog: Props.instanceOf(Dialog).isRequired\n   *     },\n   *     render: function() { ... }\n   *   });\n   *\n   * A more formal specification of how these methods are used:\n   *\n   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)\n   *   decl := ReactPropTypes.{type}(.isRequired)?\n   *\n   * Each and every declaration produces a function with the same signature. This\n   * allows the creation of custom validation functions. For example:\n   *\n   *  var MyLink = React.createClass({\n   *    propTypes: {\n   *      // An optional string or URI prop named \"href\".\n   *      href: function(props, propName, componentName) {\n   *        var propValue = props[propName];\n   *        if (propValue != null && typeof propValue !== 'string' &&\n   *            !(propValue instanceof URI)) {\n   *          return new Error(\n   *            'Expected a string or an URI for ' + propName + ' in ' +\n   *            componentName\n   *          );\n   *        }\n   *      }\n   *    },\n   *    render: function() {...}\n   *  });\n   *\n   * @internal\n   */\n\n  var ANONYMOUS = '<<anonymous>>';\n\n  // Important!\n  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.\n  var ReactPropTypes = {\n    array: createPrimitiveTypeChecker('array'),\n    bool: createPrimitiveTypeChecker('boolean'),\n    func: createPrimitiveTypeChecker('function'),\n    number: createPrimitiveTypeChecker('number'),\n    object: createPrimitiveTypeChecker('object'),\n    string: createPrimitiveTypeChecker('string'),\n    symbol: createPrimitiveTypeChecker('symbol'),\n\n    any: createAnyTypeChecker(),\n    arrayOf: createArrayOfTypeChecker,\n    element: createElementTypeChecker(),\n    instanceOf: createInstanceTypeChecker,\n    node: createNodeChecker(),\n    objectOf: createObjectOfTypeChecker,\n    oneOf: createEnumTypeChecker,\n    oneOfType: createUnionTypeChecker,\n    shape: createShapeTypeChecker,\n    exact: createStrictShapeTypeChecker,\n  };\n\n  /**\n   * inlined Object.is polyfill to avoid requiring consumers ship their own\n   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is\n   */\n  /*eslint-disable no-self-compare*/\n  function is(x, y) {\n    // SameValue algorithm\n    if (x === y) {\n      // Steps 1-5, 7-10\n      // Steps 6.b-6.e: +0 != -0\n      return x !== 0 || 1 / x === 1 / y;\n    } else {\n      // Step 6.a: NaN == NaN\n      return x !== x && y !== y;\n    }\n  }\n  /*eslint-enable no-self-compare*/\n\n  /**\n   * We use an Error-like object for backward compatibility as people may call\n   * PropTypes directly and inspect their output. However, we don't use real\n   * Errors anymore. We don't inspect their stack anyway, and creating them\n   * is prohibitively expensive if they are created too often, such as what\n   * happens in oneOfType() for any type before the one that matched.\n   */\n  function PropTypeError(message) {\n    this.message = message;\n    this.stack = '';\n  }\n  // Make `instanceof Error` still work for returned errors.\n  PropTypeError.prototype = Error.prototype;\n\n  function createChainableTypeChecker(validate) {\n    if (true) {\n      var manualPropTypeCallCache = {};\n      var manualPropTypeWarningCount = 0;\n    }\n    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {\n      componentName = componentName || ANONYMOUS;\n      propFullName = propFullName || propName;\n\n      if (secret !== ReactPropTypesSecret) {\n        if (throwOnDirectAccess) {\n          // New behavior only for users of `prop-types` package\n          var err = new Error(\n            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +\n            'Use `PropTypes.checkPropTypes()` to call them. ' +\n            'Read more at http://fb.me/use-check-prop-types'\n          );\n          err.name = 'Invariant Violation';\n          throw err;\n        } else if ( true && typeof console !== 'undefined') {\n          // Old behavior for people using React.PropTypes\n          var cacheKey = componentName + ':' + propName;\n          if (\n            !manualPropTypeCallCache[cacheKey] &&\n            // Avoid spamming the console because they are often not actionable except for lib authors\n            manualPropTypeWarningCount < 3\n          ) {\n            printWarning(\n              'You are manually calling a React.PropTypes validation ' +\n              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +\n              'and will throw in the standalone `prop-types` package. ' +\n              'You may be seeing this warning due to a third-party PropTypes ' +\n              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'\n            );\n            manualPropTypeCallCache[cacheKey] = true;\n            manualPropTypeWarningCount++;\n          }\n        }\n      }\n      if (props[propName] == null) {\n        if (isRequired) {\n          if (props[propName] === null) {\n            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));\n          }\n          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));\n        }\n        return null;\n      } else {\n        return validate(props, propName, componentName, location, propFullName);\n      }\n    }\n\n    var chainedCheckType = checkType.bind(null, false);\n    chainedCheckType.isRequired = checkType.bind(null, true);\n\n    return chainedCheckType;\n  }\n\n  function createPrimitiveTypeChecker(expectedType) {\n    function validate(props, propName, componentName, location, propFullName, secret) {\n      var propValue = props[propName];\n      var propType = getPropType(propValue);\n      if (propType !== expectedType) {\n        // `propValue` being instance of, say, date/regexp, pass the 'object'\n        // check, but we can offer a more precise error message here rather than\n        // 'of type `object`'.\n        var preciseType = getPreciseType(propValue);\n\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));\n      }\n      return null;\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createAnyTypeChecker() {\n    return createChainableTypeChecker(emptyFunctionThatReturnsNull);\n  }\n\n  function createArrayOfTypeChecker(typeChecker) {\n    function validate(props, propName, componentName, location, propFullName) {\n      if (typeof typeChecker !== 'function') {\n        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');\n      }\n      var propValue = props[propName];\n      if (!Array.isArray(propValue)) {\n        var propType = getPropType(propValue);\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));\n      }\n      for (var i = 0; i < propValue.length; i++) {\n        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);\n        if (error instanceof Error) {\n          return error;\n        }\n      }\n      return null;\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createElementTypeChecker() {\n    function validate(props, propName, componentName, location, propFullName) {\n      var propValue = props[propName];\n      if (!isValidElement(propValue)) {\n        var propType = getPropType(propValue);\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));\n      }\n      return null;\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createInstanceTypeChecker(expectedClass) {\n    function validate(props, propName, componentName, location, propFullName) {\n      if (!(props[propName] instanceof expectedClass)) {\n        var expectedClassName = expectedClass.name || ANONYMOUS;\n        var actualClassName = getClassName(props[propName]);\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));\n      }\n      return null;\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createEnumTypeChecker(expectedValues) {\n    if (!Array.isArray(expectedValues)) {\n       true ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : undefined;\n      return emptyFunctionThatReturnsNull;\n    }\n\n    function validate(props, propName, componentName, location, propFullName) {\n      var propValue = props[propName];\n      for (var i = 0; i < expectedValues.length; i++) {\n        if (is(propValue, expectedValues[i])) {\n          return null;\n        }\n      }\n\n      var valuesString = JSON.stringify(expectedValues);\n      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createObjectOfTypeChecker(typeChecker) {\n    function validate(props, propName, componentName, location, propFullName) {\n      if (typeof typeChecker !== 'function') {\n        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');\n      }\n      var propValue = props[propName];\n      var propType = getPropType(propValue);\n      if (propType !== 'object') {\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));\n      }\n      for (var key in propValue) {\n        if (propValue.hasOwnProperty(key)) {\n          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);\n          if (error instanceof Error) {\n            return error;\n          }\n        }\n      }\n      return null;\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createUnionTypeChecker(arrayOfTypeCheckers) {\n    if (!Array.isArray(arrayOfTypeCheckers)) {\n       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;\n      return emptyFunctionThatReturnsNull;\n    }\n\n    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {\n      var checker = arrayOfTypeCheckers[i];\n      if (typeof checker !== 'function') {\n        printWarning(\n          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +\n          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'\n        );\n        return emptyFunctionThatReturnsNull;\n      }\n    }\n\n    function validate(props, propName, componentName, location, propFullName) {\n      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {\n        var checker = arrayOfTypeCheckers[i];\n        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {\n          return null;\n        }\n      }\n\n      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createNodeChecker() {\n    function validate(props, propName, componentName, location, propFullName) {\n      if (!isNode(props[propName])) {\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));\n      }\n      return null;\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createShapeTypeChecker(shapeTypes) {\n    function validate(props, propName, componentName, location, propFullName) {\n      var propValue = props[propName];\n      var propType = getPropType(propValue);\n      if (propType !== 'object') {\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));\n      }\n      for (var key in shapeTypes) {\n        var checker = shapeTypes[key];\n        if (!checker) {\n          continue;\n        }\n        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);\n        if (error) {\n          return error;\n        }\n      }\n      return null;\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createStrictShapeTypeChecker(shapeTypes) {\n    function validate(props, propName, componentName, location, propFullName) {\n      var propValue = props[propName];\n      var propType = getPropType(propValue);\n      if (propType !== 'object') {\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));\n      }\n      // We need to check all keys in case some are required but missing from\n      // props.\n      var allKeys = assign({}, props[propName], shapeTypes);\n      for (var key in allKeys) {\n        var checker = shapeTypes[key];\n        if (!checker) {\n          return new PropTypeError(\n            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +\n            '\\nBad object: ' + JSON.stringify(props[propName], null, '  ') +\n            '\\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')\n          );\n        }\n        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);\n        if (error) {\n          return error;\n        }\n      }\n      return null;\n    }\n\n    return createChainableTypeChecker(validate);\n  }\n\n  function isNode(propValue) {\n    switch (typeof propValue) {\n      case 'number':\n      case 'string':\n      case 'undefined':\n        return true;\n      case 'boolean':\n        return !propValue;\n      case 'object':\n        if (Array.isArray(propValue)) {\n          return propValue.every(isNode);\n        }\n        if (propValue === null || isValidElement(propValue)) {\n          return true;\n        }\n\n        var iteratorFn = getIteratorFn(propValue);\n        if (iteratorFn) {\n          var iterator = iteratorFn.call(propValue);\n          var step;\n          if (iteratorFn !== propValue.entries) {\n            while (!(step = iterator.next()).done) {\n              if (!isNode(step.value)) {\n                return false;\n              }\n            }\n          } else {\n            // Iterator will provide entry [k,v] tuples rather than values.\n            while (!(step = iterator.next()).done) {\n              var entry = step.value;\n              if (entry) {\n                if (!isNode(entry[1])) {\n                  return false;\n                }\n              }\n            }\n          }\n        } else {\n          return false;\n        }\n\n        return true;\n      default:\n        return false;\n    }\n  }\n\n  function isSymbol(propType, propValue) {\n    // Native Symbol.\n    if (propType === 'symbol') {\n      return true;\n    }\n\n    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'\n    if (propValue['@@toStringTag'] === 'Symbol') {\n      return true;\n    }\n\n    // Fallback for non-spec compliant Symbols which are polyfilled.\n    if (typeof Symbol === 'function' && propValue instanceof Symbol) {\n      return true;\n    }\n\n    return false;\n  }\n\n  // Equivalent of `typeof` but with special handling for array and regexp.\n  function getPropType(propValue) {\n    var propType = typeof propValue;\n    if (Array.isArray(propValue)) {\n      return 'array';\n    }\n    if (propValue instanceof RegExp) {\n      // Old webkits (at least until Android 4.0) return 'function' rather than\n      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/\n      // passes PropTypes.object.\n      return 'object';\n    }\n    if (isSymbol(propType, propValue)) {\n      return 'symbol';\n    }\n    return propType;\n  }\n\n  // This handles more types than `getPropType`. Only used for error messages.\n  // See `createPrimitiveTypeChecker`.\n  function getPreciseType(propValue) {\n    if (typeof propValue === 'undefined' || propValue === null) {\n      return '' + propValue;\n    }\n    var propType = getPropType(propValue);\n    if (propType === 'object') {\n      if (propValue instanceof Date) {\n        return 'date';\n      } else if (propValue instanceof RegExp) {\n        return 'regexp';\n      }\n    }\n    return propType;\n  }\n\n  // Returns a string that is postfixed to a warning about an invalid type.\n  // For example, \"undefined\" or \"of type array\"\n  function getPostfixForTypeWarning(value) {\n    var type = getPreciseType(value);\n    switch (type) {\n      case 'array':\n      case 'object':\n        return 'an ' + type;\n      case 'boolean':\n      case 'date':\n      case 'regexp':\n        return 'a ' + type;\n      default:\n        return type;\n    }\n  }\n\n  // Returns class name of the object, if any.\n  function getClassName(propValue) {\n    if (!propValue.constructor || !propValue.constructor.name) {\n      return ANONYMOUS;\n    }\n    return propValue.constructor.name;\n  }\n\n  ReactPropTypes.checkPropTypes = checkPropTypes;\n  ReactPropTypes.PropTypes = ReactPropTypes;\n\n  return ReactPropTypes;\n};\n\n\n//# sourceURL=webpack:///./node_modules/prop-types/factoryWithTypeCheckers.js?"
        );

        /***/
      },

    /***/ './node_modules/prop-types/index.js':
      /*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        eval(
          "/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nif (true) {\n  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&\n    Symbol.for &&\n    Symbol.for('react.element')) ||\n    0xeac7;\n\n  var isValidElement = function(object) {\n    return typeof object === 'object' &&\n      object !== null &&\n      object.$$typeof === REACT_ELEMENT_TYPE;\n  };\n\n  // By explicitly using `prop-types` you are opting into new development behavior.\n  // http://fb.me/prop-types-in-prod\n  var throwOnDirectAccess = true;\n  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ \"./node_modules/prop-types/factoryWithTypeCheckers.js\")(isValidElement, throwOnDirectAccess);\n} else {}\n\n\n//# sourceURL=webpack:///./node_modules/prop-types/index.js?"
        );

        /***/
      },

    /***/ './node_modules/query-string/index.js':
      /*!********************************************!*\
  !*** ./node_modules/query-string/index.js ***!
  \********************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          "\nvar strictUriEncode = __webpack_require__(/*! strict-uri-encode */ \"./node_modules/strict-uri-encode/index.js\");\nvar objectAssign = __webpack_require__(/*! object-assign */ \"./node_modules/object-assign/index.js\");\n\nfunction encoderForArrayFormat(opts) {\n\tswitch (opts.arrayFormat) {\n\t\tcase 'index':\n\t\t\treturn function (key, value, index) {\n\t\t\t\treturn value === null ? [\n\t\t\t\t\tencode(key, opts),\n\t\t\t\t\t'[',\n\t\t\t\t\tindex,\n\t\t\t\t\t']'\n\t\t\t\t].join('') : [\n\t\t\t\t\tencode(key, opts),\n\t\t\t\t\t'[',\n\t\t\t\t\tencode(index, opts),\n\t\t\t\t\t']=',\n\t\t\t\t\tencode(value, opts)\n\t\t\t\t].join('');\n\t\t\t};\n\n\t\tcase 'bracket':\n\t\t\treturn function (key, value) {\n\t\t\t\treturn value === null ? encode(key, opts) : [\n\t\t\t\t\tencode(key, opts),\n\t\t\t\t\t'[]=',\n\t\t\t\t\tencode(value, opts)\n\t\t\t\t].join('');\n\t\t\t};\n\n\t\tdefault:\n\t\t\treturn function (key, value) {\n\t\t\t\treturn value === null ? encode(key, opts) : [\n\t\t\t\t\tencode(key, opts),\n\t\t\t\t\t'=',\n\t\t\t\t\tencode(value, opts)\n\t\t\t\t].join('');\n\t\t\t};\n\t}\n}\n\nfunction parserForArrayFormat(opts) {\n\tvar result;\n\n\tswitch (opts.arrayFormat) {\n\t\tcase 'index':\n\t\t\treturn function (key, value, accumulator) {\n\t\t\t\tresult = /\\[(\\d*)\\]$/.exec(key);\n\n\t\t\t\tkey = key.replace(/\\[\\d*\\]$/, '');\n\n\t\t\t\tif (!result) {\n\t\t\t\t\taccumulator[key] = value;\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\tif (accumulator[key] === undefined) {\n\t\t\t\t\taccumulator[key] = {};\n\t\t\t\t}\n\n\t\t\t\taccumulator[key][result[1]] = value;\n\t\t\t};\n\n\t\tcase 'bracket':\n\t\t\treturn function (key, value, accumulator) {\n\t\t\t\tresult = /(\\[\\])$/.exec(key);\n\t\t\t\tkey = key.replace(/\\[\\]$/, '');\n\n\t\t\t\tif (!result) {\n\t\t\t\t\taccumulator[key] = value;\n\t\t\t\t\treturn;\n\t\t\t\t} else if (accumulator[key] === undefined) {\n\t\t\t\t\taccumulator[key] = [value];\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\taccumulator[key] = [].concat(accumulator[key], value);\n\t\t\t};\n\n\t\tdefault:\n\t\t\treturn function (key, value, accumulator) {\n\t\t\t\tif (accumulator[key] === undefined) {\n\t\t\t\t\taccumulator[key] = value;\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\taccumulator[key] = [].concat(accumulator[key], value);\n\t\t\t};\n\t}\n}\n\nfunction encode(value, opts) {\n\tif (opts.encode) {\n\t\treturn opts.strict ? strictUriEncode(value) : encodeURIComponent(value);\n\t}\n\n\treturn value;\n}\n\nfunction keysSorter(input) {\n\tif (Array.isArray(input)) {\n\t\treturn input.sort();\n\t} else if (typeof input === 'object') {\n\t\treturn keysSorter(Object.keys(input)).sort(function (a, b) {\n\t\t\treturn Number(a) - Number(b);\n\t\t}).map(function (key) {\n\t\t\treturn input[key];\n\t\t});\n\t}\n\n\treturn input;\n}\n\nexports.extract = function (str) {\n\treturn str.split('?')[1] || '';\n};\n\nexports.parse = function (str, opts) {\n\topts = objectAssign({arrayFormat: 'none'}, opts);\n\n\tvar formatter = parserForArrayFormat(opts);\n\n\t// Create an object with no prototype\n\t// https://github.com/sindresorhus/query-string/issues/47\n\tvar ret = Object.create(null);\n\n\tif (typeof str !== 'string') {\n\t\treturn ret;\n\t}\n\n\tstr = str.trim().replace(/^(\\?|#|&)/, '');\n\n\tif (!str) {\n\t\treturn ret;\n\t}\n\n\tstr.split('&').forEach(function (param) {\n\t\tvar parts = param.replace(/\\+/g, ' ').split('=');\n\t\t// Firefox (pre 40) decodes `%3D` to `=`\n\t\t// https://github.com/sindresorhus/query-string/pull/37\n\t\tvar key = parts.shift();\n\t\tvar val = parts.length > 0 ? parts.join('=') : undefined;\n\n\t\t// missing `=` should be `null`:\n\t\t// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters\n\t\tval = val === undefined ? null : decodeURIComponent(val);\n\n\t\tformatter(decodeURIComponent(key), val, ret);\n\t});\n\n\treturn Object.keys(ret).sort().reduce(function (result, key) {\n\t\tvar val = ret[key];\n\t\tif (Boolean(val) && typeof val === 'object' && !Array.isArray(val)) {\n\t\t\t// Sort object keys, not values\n\t\t\tresult[key] = keysSorter(val);\n\t\t} else {\n\t\t\tresult[key] = val;\n\t\t}\n\n\t\treturn result;\n\t}, Object.create(null));\n};\n\nexports.stringify = function (obj, opts) {\n\tvar defaults = {\n\t\tencode: true,\n\t\tstrict: true,\n\t\tarrayFormat: 'none'\n\t};\n\n\topts = objectAssign(defaults, opts);\n\n\tvar formatter = encoderForArrayFormat(opts);\n\n\treturn obj ? Object.keys(obj).sort().map(function (key) {\n\t\tvar val = obj[key];\n\n\t\tif (val === undefined) {\n\t\t\treturn '';\n\t\t}\n\n\t\tif (val === null) {\n\t\t\treturn encode(key, opts);\n\t\t}\n\n\t\tif (Array.isArray(val)) {\n\t\t\tvar result = [];\n\n\t\t\tval.slice().forEach(function (val2) {\n\t\t\t\tif (val2 === undefined) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\tresult.push(formatter(key, val2, result.length));\n\t\t\t});\n\n\t\t\treturn result.join('&');\n\t\t}\n\n\t\treturn encode(key, opts) + '=' + encode(val, opts);\n\t}).filter(function (x) {\n\t\treturn x.length > 0;\n\t}).join('&') : '';\n};\n\n\n//# sourceURL=webpack:///./node_modules/query-string/index.js?"
        );

        /***/
      },

    /***/ './node_modules/slack/methods/_exec-browser.js':
      /*!*****************************************************!*\
  !*** ./node_modules/slack/methods/_exec-browser.js ***!
  \*****************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          "\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = exec;\n\nvar _httpplease = __webpack_require__(/*! httpplease */ \"./node_modules/httpplease/lib/index.js\");\n\nvar _httpplease2 = _interopRequireDefault(_httpplease);\n\nvar _queryString = __webpack_require__(/*! query-string */ \"./node_modules/query-string/index.js\");\n\nvar _queryString2 = _interopRequireDefault(_queryString);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction exec(ns, json, callback) {\n\n  var query = _queryString2.default.stringify(json);\n  var baseUrl = 'https://slack.com/api/';\n  var url = '' + baseUrl + ns + '?' + query;\n  var rateLimit = 'You are sending too many requests. Please relax.';\n\n  _httpplease2.default.get(url, function (err, res) {\n    if (err) {\n      // if request failed bubble the error\n      callback(err);\n    } else if (res.body.error) {\n      // if Slack returns an error bubble the error\n      callback(Error(res.body.error));\n    } else if (typeof res.body === 'string' && res.body.includes(rateLimit)) {\n      // sometimes you need to chill out\n      callback(Error('rate_limit'));\n    } else {\n      // success! clean up the response\n      var _json = JSON.parse(res.body);\n      if (_json.ok) {\n        delete _json.ok;\n        callback(null, _json);\n      } else {\n        callback(Error(_json.error));\n      }\n    }\n  });\n  /// eom\n}\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/_exec-browser.js?"
        );

        /***/
      },

    /***/ './node_modules/slack/methods/_validate.js':
      /*!*************************************************!*\
  !*** ./node_modules/slack/methods/_validate.js ***!
  \*************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          "\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = validate;\n\nvar _api = __webpack_require__(/*! ./api.json */ \"./node_modules/slack/methods/api.json\");\n\nvar _api2 = _interopRequireDefault(_api);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction validate(method, params) {\n  // get all the requried params for this method\n  var required = _api2.default[method].filter(function (param) {\n    return param.required === 'Required';\n  });\n  // collect any missing params\n  var missing = required.filter(function (param) {\n    return typeof params[param.name] === 'undefined';\n  });\n  // optimisitcally assume the best\n  var err = false;\n  // but have a plan for the worst\n  if (missing.length) {\n    var bullets = missing.map(function (param) {\n      return '- ' + param.name + ' ... ' + param.description;\n    });\n    var msg = method + ' missing params:\\n' + bullets.join('\\n');\n    err = Error(msg);\n  }\n  return err;\n} //\n// validate returns an error object if any required params are missing\n//\n// example usage:\n//\n//   // token and id are required params\n//   function apiCall(params, callback) {\n//     let err = validate('api.signature', params)\n//     if (err) {\n//       callback(err)\n//     }\n//     else {\n//       // do api call\n//     }\n//   }\n//\n\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/_validate.js?"
        );

        /***/
      },

    /***/ './node_modules/slack/methods/api.client.js':
      /*!**************************************************!*\
  !*** ./node_modules/slack/methods/api.client.js ***!
  \**************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = client;\n\n// generated by ./scripts/generate-stateful-client\nfunction client(token) {\n  var applied = {};\n  applied.auth = {};\n  applied.bots = {};\n  applied.channels = {};\n  applied.chat = {};\n  applied.dnd = {};\n  applied.emoji = {};\n  applied.files.comments = {};\n  applied.files = {};\n  applied.groups = {};\n  applied.im = {};\n  applied.mpim = {};\n  applied.pins = {};\n  applied.reactions = {};\n  applied.reminders = {};\n  applied.rtm = {};\n  applied.search = {};\n  applied.stars = {};\n  applied.team = {};\n  applied.team.profile = {};\n  applied.usergroups = {};\n  applied.usergroups.users = {};\n  applied.users = {};\n  applied.users.profile = {};\n  applied.auth.test = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./auth.test */ "./node_modules/slack/methods/auth.test.js").call({}, params, callback);\n  };\n  applied.bots.info = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./bots.info */ "./node_modules/slack/methods/bots.info.js").call({}, params, callback);\n  };\n  applied.channels.archive = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./channels.archive */ "./node_modules/slack/methods/channels.archive.js").call({}, params, callback);\n  };\n  applied.channels.create = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./channels.create */ "./node_modules/slack/methods/channels.create.js").call({}, params, callback);\n  };\n  applied.channels.history = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./channels.history */ "./node_modules/slack/methods/channels.history.js").call({}, params, callback);\n  };\n  applied.channels.info = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./channels.info */ "./node_modules/slack/methods/channels.info.js").call({}, params, callback);\n  };\n  applied.channels.invite = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./channels.invite */ "./node_modules/slack/methods/channels.invite.js").call({}, params, callback);\n  };\n  applied.channels.join = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./channels.join */ "./node_modules/slack/methods/channels.join.js").call({}, params, callback);\n  };\n  applied.channels.kick = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./channels.kick */ "./node_modules/slack/methods/channels.kick.js").call({}, params, callback);\n  };\n  applied.channels.leave = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./channels.leave */ "./node_modules/slack/methods/channels.leave.js").call({}, params, callback);\n  };\n  applied.channels.list = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./channels.list */ "./node_modules/slack/methods/channels.list.js").call({}, params, callback);\n  };\n  applied.channels.mark = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./channels.mark */ "./node_modules/slack/methods/channels.mark.js").call({}, params, callback);\n  };\n  applied.channels.rename = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./channels.rename */ "./node_modules/slack/methods/channels.rename.js").call({}, params, callback);\n  };\n  applied.channels.setPurpose = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./channels.setPurpose */ "./node_modules/slack/methods/channels.setPurpose.js").call({}, params, callback);\n  };\n  applied.channels.setTopic = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./channels.setTopic */ "./node_modules/slack/methods/channels.setTopic.js").call({}, params, callback);\n  };\n  applied.channels.unarchive = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./channels.unarchive */ "./node_modules/slack/methods/channels.unarchive.js").call({}, params, callback);\n  };\n  applied.chat.delete = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./chat.delete */ "./node_modules/slack/methods/chat.delete.js").call({}, params, callback);\n  };\n  applied.chat.meMessage = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./chat.meMessage */ "./node_modules/slack/methods/chat.meMessage.js").call({}, params, callback);\n  };\n  applied.chat.postMessage = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./chat.postMessage */ "./node_modules/slack/methods/chat.postMessage.js").call({}, params, callback);\n  };\n  applied.chat.update = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./chat.update */ "./node_modules/slack/methods/chat.update.js").call({}, params, callback);\n  };\n  applied.dnd.endDnd = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./dnd.endDnd */ "./node_modules/slack/methods/dnd.endDnd.js").call({}, params, callback);\n  };\n  applied.dnd.endSnooze = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./dnd.endSnooze */ "./node_modules/slack/methods/dnd.endSnooze.js").call({}, params, callback);\n  };\n  applied.dnd.info = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./dnd.info */ "./node_modules/slack/methods/dnd.info.js").call({}, params, callback);\n  };\n  applied.dnd.setSnooze = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./dnd.setSnooze */ "./node_modules/slack/methods/dnd.setSnooze.js").call({}, params, callback);\n  };\n  applied.dnd.teamInfo = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./dnd.teamInfo */ "./node_modules/slack/methods/dnd.teamInfo.js").call({}, params, callback);\n  };\n  applied.emoji.list = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./emoji.list */ "./node_modules/slack/methods/emoji.list.js").call({}, params, callback);\n  };\n  applied.files.comments.add = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./files.comments.add */ "./node_modules/slack/methods/files.comments.add.js").call({}, params, callback);\n  };\n  applied.files.comments.delete = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./files.comments.delete */ "./node_modules/slack/methods/files.comments.delete.js").call({}, params, callback);\n  };\n  applied.files.comments.edit = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./files.comments.edit */ "./node_modules/slack/methods/files.comments.edit.js").call({}, params, callback);\n  };\n  applied.files.delete = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./files.delete */ "./node_modules/slack/methods/files.delete.js").call({}, params, callback);\n  };\n  applied.files.info = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./files.info */ "./node_modules/slack/methods/files.info.js").call({}, params, callback);\n  };\n  applied.files.list = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./files.list */ "./node_modules/slack/methods/files.list.js").call({}, params, callback);\n  };\n  applied.files.revokePublicURL = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./files.revokePublicURL */ "./node_modules/slack/methods/files.revokePublicURL.js").call({}, params, callback);\n  };\n  applied.files.sharedPublicURL = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./files.sharedPublicURL */ "./node_modules/slack/methods/files.sharedPublicURL.js").call({}, params, callback);\n  };\n  applied.files.upload = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./files.upload */ "./node_modules/slack/methods/files.upload.js").call({}, params, callback);\n  };\n  applied.groups.archive = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./groups.archive */ "./node_modules/slack/methods/groups.archive.js").call({}, params, callback);\n  };\n  applied.groups.close = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./groups.close */ "./node_modules/slack/methods/groups.close.js").call({}, params, callback);\n  };\n  applied.groups.create = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./groups.create */ "./node_modules/slack/methods/groups.create.js").call({}, params, callback);\n  };\n  applied.groups.createChild = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./groups.createChild */ "./node_modules/slack/methods/groups.createChild.js").call({}, params, callback);\n  };\n  applied.groups.history = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./groups.history */ "./node_modules/slack/methods/groups.history.js").call({}, params, callback);\n  };\n  applied.groups.info = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./groups.info */ "./node_modules/slack/methods/groups.info.js").call({}, params, callback);\n  };\n  applied.groups.invite = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./groups.invite */ "./node_modules/slack/methods/groups.invite.js").call({}, params, callback);\n  };\n  applied.groups.kick = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./groups.kick */ "./node_modules/slack/methods/groups.kick.js").call({}, params, callback);\n  };\n  applied.groups.leave = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./groups.leave */ "./node_modules/slack/methods/groups.leave.js").call({}, params, callback);\n  };\n  applied.groups.list = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./groups.list */ "./node_modules/slack/methods/groups.list.js").call({}, params, callback);\n  };\n  applied.groups.mark = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./groups.mark */ "./node_modules/slack/methods/groups.mark.js").call({}, params, callback);\n  };\n  applied.groups.open = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./groups.open */ "./node_modules/slack/methods/groups.open.js").call({}, params, callback);\n  };\n  applied.groups.rename = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./groups.rename */ "./node_modules/slack/methods/groups.rename.js").call({}, params, callback);\n  };\n  applied.groups.setPurpose = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./groups.setPurpose */ "./node_modules/slack/methods/groups.setPurpose.js").call({}, params, callback);\n  };\n  applied.groups.setTopic = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./groups.setTopic */ "./node_modules/slack/methods/groups.setTopic.js").call({}, params, callback);\n  };\n  applied.groups.unarchive = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./groups.unarchive */ "./node_modules/slack/methods/groups.unarchive.js").call({}, params, callback);\n  };\n  applied.im.close = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./im.close */ "./node_modules/slack/methods/im.close.js").call({}, params, callback);\n  };\n  applied.im.history = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./im.history */ "./node_modules/slack/methods/im.history.js").call({}, params, callback);\n  };\n  applied.im.list = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./im.list */ "./node_modules/slack/methods/im.list.js").call({}, params, callback);\n  };\n  applied.im.mark = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./im.mark */ "./node_modules/slack/methods/im.mark.js").call({}, params, callback);\n  };\n  applied.im.open = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./im.open */ "./node_modules/slack/methods/im.open.js").call({}, params, callback);\n  };\n  applied.mpim.close = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./mpim.close */ "./node_modules/slack/methods/mpim.close.js").call({}, params, callback);\n  };\n  applied.mpim.history = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./mpim.history */ "./node_modules/slack/methods/mpim.history.js").call({}, params, callback);\n  };\n  applied.mpim.list = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./mpim.list */ "./node_modules/slack/methods/mpim.list.js").call({}, params, callback);\n  };\n  applied.mpim.mark = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./mpim.mark */ "./node_modules/slack/methods/mpim.mark.js").call({}, params, callback);\n  };\n  applied.mpim.open = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./mpim.open */ "./node_modules/slack/methods/mpim.open.js").call({}, params, callback);\n  };\n  applied.pins.add = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./pins.add */ "./node_modules/slack/methods/pins.add.js").call({}, params, callback);\n  };\n  applied.pins.list = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./pins.list */ "./node_modules/slack/methods/pins.list.js").call({}, params, callback);\n  };\n  applied.pins.remove = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./pins.remove */ "./node_modules/slack/methods/pins.remove.js").call({}, params, callback);\n  };\n  applied.reactions.add = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./reactions.add */ "./node_modules/slack/methods/reactions.add.js").call({}, params, callback);\n  };\n  applied.reactions.get = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./reactions.get */ "./node_modules/slack/methods/reactions.get.js").call({}, params, callback);\n  };\n  applied.reactions.list = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./reactions.list */ "./node_modules/slack/methods/reactions.list.js").call({}, params, callback);\n  };\n  applied.reactions.remove = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./reactions.remove */ "./node_modules/slack/methods/reactions.remove.js").call({}, params, callback);\n  };\n  applied.reminders.add = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./reminders.add */ "./node_modules/slack/methods/reminders.add.js").call({}, params, callback);\n  };\n  applied.reminders.complete = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./reminders.complete */ "./node_modules/slack/methods/reminders.complete.js").call({}, params, callback);\n  };\n  applied.reminders.delete = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./reminders.delete */ "./node_modules/slack/methods/reminders.delete.js").call({}, params, callback);\n  };\n  applied.reminders.info = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./reminders.info */ "./node_modules/slack/methods/reminders.info.js").call({}, params, callback);\n  };\n  applied.reminders.list = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./reminders.list */ "./node_modules/slack/methods/reminders.list.js").call({}, params, callback);\n  };\n  applied.rtm.start = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./rtm.start */ "./node_modules/slack/methods/rtm.start.js").call({}, params, callback);\n  };\n  applied.search.all = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./search.all */ "./node_modules/slack/methods/search.all.js").call({}, params, callback);\n  };\n  applied.search.files = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./search.files */ "./node_modules/slack/methods/search.files.js").call({}, params, callback);\n  };\n  applied.search.messages = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./search.messages */ "./node_modules/slack/methods/search.messages.js").call({}, params, callback);\n  };\n  applied.stars.add = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./stars.add */ "./node_modules/slack/methods/stars.add.js").call({}, params, callback);\n  };\n  applied.stars.list = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./stars.list */ "./node_modules/slack/methods/stars.list.js").call({}, params, callback);\n  };\n  applied.stars.remove = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./stars.remove */ "./node_modules/slack/methods/stars.remove.js").call({}, params, callback);\n  };\n  applied.team.accessLogs = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./team.accessLogs */ "./node_modules/slack/methods/team.accessLogs.js").call({}, params, callback);\n  };\n  applied.team.billableInfo = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./team.billableInfo */ "./node_modules/slack/methods/team.billableInfo.js").call({}, params, callback);\n  };\n  applied.team.info = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./team.info */ "./node_modules/slack/methods/team.info.js").call({}, params, callback);\n  };\n  applied.team.integrationLogs = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./team.integrationLogs */ "./node_modules/slack/methods/team.integrationLogs.js").call({}, params, callback);\n  };\n  applied.team.profile.get = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./team.profile.get */ "./node_modules/slack/methods/team.profile.get.js").call({}, params, callback);\n  };\n  applied.usergroups.create = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./usergroups.create */ "./node_modules/slack/methods/usergroups.create.js").call({}, params, callback);\n  };\n  applied.usergroups.disable = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./usergroups.disable */ "./node_modules/slack/methods/usergroups.disable.js").call({}, params, callback);\n  };\n  applied.usergroups.enable = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./usergroups.enable */ "./node_modules/slack/methods/usergroups.enable.js").call({}, params, callback);\n  };\n  applied.usergroups.list = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./usergroups.list */ "./node_modules/slack/methods/usergroups.list.js").call({}, params, callback);\n  };\n  applied.usergroups.update = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./usergroups.update */ "./node_modules/slack/methods/usergroups.update.js").call({}, params, callback);\n  };\n  applied.usergroups.users.list = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./usergroups.users.list */ "./node_modules/slack/methods/usergroups.users.list.js").call({}, params, callback);\n  };\n  applied.usergroups.users.update = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./usergroups.users.update */ "./node_modules/slack/methods/usergroups.users.update.js").call({}, params, callback);\n  };\n  applied.users.getPresence = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./users.getPresence */ "./node_modules/slack/methods/users.getPresence.js").call({}, params, callback);\n  };\n  applied.users.identity = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./users.identity */ "./node_modules/slack/methods/users.identity.js").call({}, params, callback);\n  };\n  applied.users.info = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./users.info */ "./node_modules/slack/methods/users.info.js").call({}, params, callback);\n  };\n  applied.users.list = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./users.list */ "./node_modules/slack/methods/users.list.js").call({}, params, callback);\n  };\n  applied.users.profile.get = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./users.profile.get */ "./node_modules/slack/methods/users.profile.get.js").call({}, params, callback);\n  };\n  applied.users.profile.set = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./users.profile.set */ "./node_modules/slack/methods/users.profile.set.js").call({}, params, callback);\n  };\n  applied.users.setActive = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./users.setActive */ "./node_modules/slack/methods/users.setActive.js").call({}, params, callback);\n  };\n  applied.users.setPresence = function (params, callback) {\n    params.token = token;\n    __webpack_require__(/*! ./users.setPresence */ "./node_modules/slack/methods/users.setPresence.js").call({}, params, callback);\n  };\n\n  return applied;\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/api.client.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/api.json':
      /*!*********************************************!*\
  !*** ./node_modules/slack/methods/api.json ***!
  \*********************************************/
      /*! exports provided: api.test, auth.revoke, auth.test, bots.info, channels.archive, channels.create, channels.history, channels.info, channels.invite, channels.join, channels.kick, channels.leave, channels.list, channels.mark, channels.rename, channels.setPurpose, channels.setTopic, channels.unarchive, chat.delete, chat.meMessage, chat.postMessage, chat.update, dnd.endDnd, dnd.endSnooze, dnd.info, dnd.setSnooze, dnd.teamInfo, emoji.list, files.comments.add, files.comments.delete, files.comments.edit, files.delete, files.info, files.list, files.revokePublicURL, files.sharedPublicURL, files.upload, groups.archive, groups.close, groups.create, groups.createChild, groups.history, groups.info, groups.invite, groups.kick, groups.leave, groups.list, groups.mark, groups.open, groups.rename, groups.setPurpose, groups.setTopic, groups.unarchive, im.close, im.history, im.list, im.mark, im.open, mpim.close, mpim.history, mpim.list, mpim.mark, mpim.open, oauth.access, pins.add, pins.list, pins.remove, reactions.add, reactions.get, reactions.list, reactions.remove, reminders.add, reminders.complete, reminders.delete, reminders.info, reminders.list, rtm.start, search.all, search.files, search.messages, stars.add, stars.list, stars.remove, team.accessLogs, team.billableInfo, team.info, team.integrationLogs, team.profile.get, usergroups.create, usergroups.disable, usergroups.enable, usergroups.list, usergroups.update, usergroups.users.list, usergroups.users.update, users.getPresence, users.identity, users.info, users.list, users.setActive, users.setPresence, users.profile.get, users.profile.set, default */
      /***/ function(module) {
        eval(
          'module.exports = JSON.parse("{\\"api.test\\":[{\\"name\\":\\"error\\",\\"example\\":\\"my_error\\",\\"required\\":\\"Optional\\",\\"description\\":\\"Error response to return\\\\n\\"},{\\"name\\":\\"foo\\",\\"example\\":\\"bar\\",\\"required\\":\\"Optional\\",\\"description\\":\\"example property to return\\\\n\\"}],\\"auth.revoke\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Optional\\",\\"description\\":\\"Authentication token\\\\n\\"},{\\"name\\":\\"test\\",\\"example\\":\\"true\\",\\"required\\":\\"Optional\\",\\"description\\":\\"Setting this parameter to 1 triggers a testing mode where the specified token will not actually be revoked.\\\\n\\"}],\\"auth.test\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: identify)\\\\n\\"}],\\"bots.info\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: users:read)\\\\n\\"},{\\"name\\":\\"bot\\",\\"example\\":\\"B12345678\\",\\"required\\":\\"Optional\\",\\"description\\":\\"Bot user to get info on\\\\n\\"}],\\"channels.archive\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: channels:write)\\\\n\\"},{\\"name\\":\\"channel\\",\\"example\\":\\"C1234567890\\",\\"required\\":\\"Required\\",\\"description\\":\\"Channel to archive\\\\n\\"}],\\"channels.create\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: channels:write)\\\\n\\"},{\\"name\\":\\"name\\",\\"example\\":\\"mychannel\\",\\"required\\":\\"Required\\",\\"description\\":\\"Name of channel to create\\\\n\\"}],\\"channels.history\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: channels:history)\\\\n\\"},{\\"name\\":\\"channel\\",\\"example\\":\\"C1234567890\\",\\"required\\":\\"Required\\",\\"description\\":\\"Channel to fetch history for.\\\\n\\"},{\\"name\\":\\"latest\\",\\"example\\":\\"1234567890.123456\\",\\"required\\":\\"Optional, default=now\\",\\"description\\":\\"End of time range of messages to include in results.\\\\n\\"},{\\"name\\":\\"oldest\\",\\"example\\":\\"1234567890.123456\\",\\"required\\":\\"Optional, default=0\\",\\"description\\":\\"Start of time range of messages to include in results.\\\\n\\"},{\\"name\\":\\"inclusive\\",\\"example\\":\\"1\\",\\"required\\":\\"Optional, default=0\\",\\"description\\":\\"Include messages with latest or oldest timestamp in results.\\\\n\\"},{\\"name\\":\\"count\\",\\"example\\":\\"100\\",\\"required\\":\\"Optional, default=100\\",\\"description\\":\\"Number of messages to return, between 1 and 1000.\\\\n\\"},{\\"name\\":\\"unreads\\",\\"example\\":\\"1\\",\\"required\\":\\"Optional, default=0\\",\\"description\\":\\"Include unread_count_display in the output?\\\\n\\"}],\\"channels.info\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: channels:read)\\\\n\\"},{\\"name\\":\\"channel\\",\\"example\\":\\"C1234567890\\",\\"required\\":\\"Required\\",\\"description\\":\\"Channel to get info on\\\\n\\"}],\\"channels.invite\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: channels:write)\\\\n\\"},{\\"name\\":\\"channel\\",\\"example\\":\\"C1234567890\\",\\"required\\":\\"Required\\",\\"description\\":\\"Channel to invite user to.\\\\n\\"},{\\"name\\":\\"user\\",\\"example\\":\\"U1234567890\\",\\"required\\":\\"Required\\",\\"description\\":\\"User to invite to channel.\\\\n\\"}],\\"channels.join\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: channels:write)\\\\n\\"},{\\"name\\":\\"name\\",\\"example\\":\\" \\",\\"required\\":\\"Required\\",\\"description\\":\\"Name of channel to join\\\\n\\"}],\\"channels.kick\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: channels:write)\\\\n\\"},{\\"name\\":\\"channel\\",\\"example\\":\\"C1234567890\\",\\"required\\":\\"Required\\",\\"description\\":\\"Channel to remove user from.\\\\n\\"},{\\"name\\":\\"user\\",\\"example\\":\\"U1234567890\\",\\"required\\":\\"Required\\",\\"description\\":\\"User to remove from channel.\\\\n\\"}],\\"channels.leave\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: channels:write)\\\\n\\"},{\\"name\\":\\"channel\\",\\"example\\":\\"C1234567890\\",\\"required\\":\\"Required\\",\\"description\\":\\"Channel to leave\\\\n\\"}],\\"channels.list\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: channels:read)\\\\n\\"},{\\"name\\":\\"exclude_archived\\",\\"example\\":\\"1\\",\\"required\\":\\"Optional, default=0\\",\\"description\\":\\"Don\'t return archived channels.\\\\n\\"}],\\"channels.mark\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: channels:write)\\\\n\\"},{\\"name\\":\\"channel\\",\\"example\\":\\"C1234567890\\",\\"required\\":\\"Required\\",\\"description\\":\\"Channel to set reading cursor in.\\\\n\\"},{\\"name\\":\\"ts\\",\\"example\\":\\"1234567890.123456\\",\\"required\\":\\"Required\\",\\"description\\":\\"Timestamp of the most recently seen message.\\\\n\\"}],\\"channels.rename\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: channels:write)\\\\n\\"},{\\"name\\":\\"channel\\",\\"example\\":\\"C1234567890\\",\\"required\\":\\"Required\\",\\"description\\":\\"Channel to rename\\\\n\\"},{\\"name\\":\\"name\\",\\"example\\":\\" \\",\\"required\\":\\"Required\\",\\"description\\":\\"New name for channel.\\\\n\\"}],\\"channels.setPurpose\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: channels:write)\\\\n\\"},{\\"name\\":\\"channel\\",\\"example\\":\\"C1234567890\\",\\"required\\":\\"Required\\",\\"description\\":\\"Channel to set the purpose of\\\\n\\"},{\\"name\\":\\"purpose\\",\\"example\\":\\"My Purpose\\",\\"required\\":\\"Required\\",\\"description\\":\\"The new purpose\\\\n\\"}],\\"channels.setTopic\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: channels:write)\\\\n\\"},{\\"name\\":\\"channel\\",\\"example\\":\\"C1234567890\\",\\"required\\":\\"Required\\",\\"description\\":\\"Channel to set the topic of\\\\n\\"},{\\"name\\":\\"topic\\",\\"example\\":\\"My Topic\\",\\"required\\":\\"Required\\",\\"description\\":\\"The new topic\\\\n\\"}],\\"channels.unarchive\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: channels:write)\\\\n\\"},{\\"name\\":\\"channel\\",\\"example\\":\\"C1234567890\\",\\"required\\":\\"Required\\",\\"description\\":\\"Channel to unarchive\\\\n\\"}],\\"chat.delete\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: chat:write:bot or chat:write:user)\\\\n\\"},{\\"name\\":\\"ts\\",\\"example\\":\\"1405894322.002768\\",\\"required\\":\\"Required\\",\\"description\\":\\"Timestamp of the message to be deleted.\\\\n\\"},{\\"name\\":\\"channel\\",\\"example\\":\\"C1234567890\\",\\"required\\":\\"Required\\",\\"description\\":\\"Channel containing the message to be deleted.\\\\n\\"},{\\"name\\":\\"as_user\\",\\"example\\":\\"true\\",\\"required\\":\\"Optional\\",\\"description\\":\\"Pass true to delete the message as the authed user. Bot users in this context are considered authed users.\\\\n\\"}],\\"chat.meMessage\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: chat:write:user)\\\\n\\"},{\\"name\\":\\"channel\\",\\"example\\":\\"C1234567890\\",\\"required\\":\\"Required\\",\\"description\\":\\"Channel to send message to. Can be a public channel, private group or IM channel. Can be an encoded ID, or a name.\\\\n\\"},{\\"name\\":\\"text\\",\\"example\\":\\"Hello world\\",\\"required\\":\\"Required\\",\\"description\\":\\"Text of the message to send.\\\\n\\"}],\\"chat.postMessage\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: chat:write:bot or chat:write:user)\\\\n\\"},{\\"name\\":\\"channel\\",\\"example\\":\\"C1234567890\\",\\"required\\":\\"Required\\",\\"description\\":\\"Channel, private group, or IM channel to send message to. Can be an encoded ID, or a name. See below for more details.\\\\n\\"},{\\"name\\":\\"text\\",\\"example\\":\\"Hello world\\",\\"required\\":\\"Required\\",\\"description\\":\\"Text of the message to send. See below for an explanation of formatting. This field is usually required, unless you\'re providing only attachments instead.\\\\n\\"},{\\"name\\":\\"parse\\",\\"example\\":\\"full\\",\\"required\\":\\"Optional\\",\\"description\\":\\"Change how messages are treated. Defaults to none. See below.\\\\n\\"},{\\"name\\":\\"link_names\\",\\"example\\":\\"1\\",\\"required\\":\\"Optional\\",\\"description\\":\\"Find and link channel names and usernames.\\\\n\\"},{\\"name\\":\\"attachments\\",\\"example\\":\\"[{\\\\\\"pretext\\\\\\": \\\\\\"pre-hello\\\\\\", \\\\\\"text\\\\\\": \\\\\\"text-world\\\\\\"}]\\",\\"required\\":\\"Optional\\",\\"description\\":\\"Structured message attachments.\\\\n\\"},{\\"name\\":\\"unfurl_links\\",\\"example\\":\\"true\\",\\"required\\":\\"Optional\\",\\"description\\":\\"Pass true to enable unfurling of primarily text-based content.\\\\n\\"},{\\"name\\":\\"unfurl_media\\",\\"example\\":\\"false\\",\\"required\\":\\"Optional\\",\\"description\\":\\"Pass false to disable unfurling of media content.\\\\n\\"},{\\"name\\":\\"username\\",\\"example\\":\\"My Bot\\",\\"required\\":\\"Optional\\",\\"description\\":\\"Set your bot\'s user name. Must be used in conjunction with as_user set to false, otherwise ignored. See authorship below.\\\\n\\"},{\\"name\\":\\"as_user\\",\\"example\\":\\"true\\",\\"required\\":\\"Optional\\",\\"description\\":\\"Pass true to post the message as the authed user, instead of as a bot. Defaults to false. See authorship below.\\\\n\\"},{\\"name\\":\\"icon_url\\",\\"example\\":\\"http://lorempixel.com/48/48\\",\\"required\\":\\"Optional\\",\\"description\\":\\"URL to an image to use as the icon for this message. Must be used in conjunction with as_user set to false, otherwise ignored. See authorship below.\\\\n\\"},{\\"name\\":\\"icon_emoji\\",\\"example\\":\\":chart_with_upwards_trend:\\",\\"required\\":\\"Optional\\",\\"description\\":\\"emoji to use as the icon for this message. Overrides icon_url. Must be used in conjunction with as_user set to false, otherwise ignored. See authorship below.\\\\n\\"}],\\"chat.update\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: chat:write:bot or chat:write:user)\\\\n\\"},{\\"name\\":\\"ts\\",\\"example\\":\\"1405894322.002768\\",\\"required\\":\\"Required\\",\\"description\\":\\"Timestamp of the message to be updated.\\\\n\\"},{\\"name\\":\\"channel\\",\\"example\\":\\"C1234567890\\",\\"required\\":\\"Required\\",\\"description\\":\\"Channel containing the message to be updated.\\\\n\\"},{\\"name\\":\\"text\\",\\"example\\":\\"Hello world\\",\\"required\\":\\"Required\\",\\"description\\":\\"New text for the message, using the default formatting rules.\\\\n\\"},{\\"name\\":\\"attachments\\",\\"example\\":\\"[{\\\\\\"pretext\\\\\\": \\\\\\"pre-hello\\\\\\", \\\\\\"text\\\\\\": \\\\\\"text-world\\\\\\"}]\\",\\"required\\":\\"Optional\\",\\"description\\":\\"Structured message attachments.\\\\n\\"},{\\"name\\":\\"parse\\",\\"example\\":\\"none\\",\\"required\\":\\"Optional\\",\\"description\\":\\"Change how messages are treated. Defaults to client, unlike chat.postMessage. See below.\\\\n\\"},{\\"name\\":\\"link_names\\",\\"example\\":\\"1\\",\\"required\\":\\"Optional\\",\\"description\\":\\"Find and link channel names and usernames. Defaults to none. This parameter should be used in conjunction with parse. To set link_names to 1, specify a parse mode of full.\\\\n\\"},{\\"name\\":\\"as_user\\",\\"example\\":\\"true\\",\\"required\\":\\"Optional\\",\\"description\\":\\"Pass true to update the message as the authed user. Bot users in this context are considered authed users.\\\\n\\"}],\\"dnd.endDnd\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: dnd:write)\\\\n\\"}],\\"dnd.endSnooze\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: dnd:write)\\\\n\\"}],\\"dnd.info\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: dnd:read)\\\\n\\"},{\\"name\\":\\"user\\",\\"example\\":\\"U1234\\",\\"required\\":\\"Optional\\",\\"description\\":\\"User to fetch status for (defaults to current user)\\\\n\\"}],\\"dnd.setSnooze\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: dnd:write)\\\\n\\"},{\\"name\\":\\"num_minutes\\",\\"example\\":\\"60\\",\\"required\\":\\"Required\\",\\"description\\":\\"Number of minutes, from now, to snooze until.\\\\n\\"}],\\"dnd.teamInfo\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: dnd:read)\\\\n\\"},{\\"name\\":\\"users\\",\\"example\\":\\"U1234,U4567\\",\\"required\\":\\"Optional\\",\\"description\\":\\"Comma-separated list of users to fetch Do Not Disturb status for\\\\n\\"}],\\"emoji.list\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: emoji:read)\\\\n\\"}],\\"files.comments.add\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: files:write:user)\\\\n\\"},{\\"name\\":\\"file\\",\\"example\\":\\"F1234467890\\",\\"required\\":\\"Required\\",\\"description\\":\\"File to add a comment to.\\\\n\\"},{\\"name\\":\\"comment\\",\\"example\\":\\"Everyone should take a moment to read this file.\\",\\"required\\":\\"Required\\",\\"description\\":\\"Text of the comment to add.\\\\n\\"},{\\"name\\":\\"channel\\",\\"example\\":\\"C1234467890\\",\\"required\\":\\"Optional\\",\\"description\\":\\"Channel id (encoded) of which location to associate with the new comment.\\\\n\\"}],\\"files.comments.delete\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: files:write:user)\\\\n\\"},{\\"name\\":\\"file\\",\\"example\\":\\"F1234567890\\",\\"required\\":\\"Required\\",\\"description\\":\\"File to delete a comment from.\\\\n\\"},{\\"name\\":\\"id\\",\\"example\\":\\"Fc1234567890\\",\\"required\\":\\"Required\\",\\"description\\":\\"The comment to delete.\\\\n\\"}],\\"files.comments.edit\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: files:write:user)\\\\n\\"},{\\"name\\":\\"file\\",\\"example\\":\\"F1234567890\\",\\"required\\":\\"Required\\",\\"description\\":\\"File containing the comment to edit.\\\\n\\"},{\\"name\\":\\"id\\",\\"example\\":\\"Fc1234567890\\",\\"required\\":\\"Required\\",\\"description\\":\\"The comment to edit.\\\\n\\"},{\\"name\\":\\"comment\\",\\"example\\":\\"Everyone should take a moment to read this file, seriously.\\",\\"required\\":\\"Required\\",\\"description\\":\\"Text of the comment to edit.\\\\n\\"}],\\"files.delete\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: files:write:user)\\\\n\\"},{\\"name\\":\\"file\\",\\"example\\":\\" \\",\\"required\\":\\"Required\\",\\"description\\":\\"ID of file to delete.\\\\n\\"}],\\"files.info\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: files:read)\\\\n\\"},{\\"name\\":\\"file\\",\\"example\\":\\"F2147483862\\",\\"required\\":\\"Required\\",\\"description\\":\\"Specify a file by providing its ID.\\\\n\\"},{\\"name\\":\\"count\\",\\"example\\":\\"20\\",\\"required\\":\\"Optional, default=100\\",\\"description\\":\\"Number of items to return per page.\\\\n\\"},{\\"name\\":\\"page\\",\\"example\\":\\"2\\",\\"required\\":\\"Optional, default=1\\",\\"description\\":\\"Page number of results to return.\\\\n\\"}],\\"files.list\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: files:read)\\\\n\\"},{\\"name\\":\\"user\\",\\"example\\":\\"U1234567890\\",\\"required\\":\\"Optional\\",\\"description\\":\\"Filter files created by a single user.\\\\n\\"},{\\"name\\":\\"channel\\",\\"example\\":\\"C1234567890\\",\\"required\\":\\"Optional\\",\\"description\\":\\"Filter files appearing in a specific channel, indicated by its ID.\\\\n\\"},{\\"name\\":\\"ts_from\\",\\"example\\":\\"123456789\\",\\"required\\":\\"Optional, default=0\\",\\"description\\":\\"Filter files created after this timestamp (inclusive).\\\\n\\"},{\\"name\\":\\"ts_to\\",\\"example\\":\\"123456789\\",\\"required\\":\\"Optional, default=now\\",\\"description\\":\\"Filter files created before this timestamp (inclusive).\\\\n\\"},{\\"name\\":\\"types\\",\\"example\\":\\"images\\",\\"required\\":\\"Optional, default=all\\",\\"description\\":\\"Filter files by type:\\\\n\\\\n\\\\nall - All files\\\\nspaces - Posts\\\\nsnippets - Snippets\\\\nimages - Image files\\\\ngdocs - Google docs\\\\nzips - Zip files\\\\npdfs - PDF files\\\\n\\\\n\\\\nYou can pass multiple values in the types argument, like types=spaces,snippets.The default value is all, which does not filter the list.\\\\n\\"},{\\"name\\":\\"count\\",\\"example\\":\\"20\\",\\"required\\":\\"Optional, default=100\\",\\"description\\":\\"Number of items to return per page.\\\\n\\"},{\\"name\\":\\"page\\",\\"example\\":\\"2\\",\\"required\\":\\"Optional, default=1\\",\\"description\\":\\"Page number of results to return.\\\\n\\"}],\\"files.revokePublicURL\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: files:write:user)\\\\n\\"},{\\"name\\":\\"file\\",\\"example\\":\\"F1234567890\\",\\"required\\":\\"Required\\",\\"description\\":\\"File to revoke\\\\n\\"}],\\"files.sharedPublicURL\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: files:write:user)\\\\n\\"},{\\"name\\":\\"file\\",\\"example\\":\\"F1234567890\\",\\"required\\":\\"Required\\",\\"description\\":\\"File to share\\\\n\\"}],\\"files.upload\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: files:write:user)\\\\n\\"},{\\"name\\":\\"file\\",\\"example\\":\\"...\\",\\"required\\":\\"Optional\\",\\"description\\":\\"File contents via multipart/form-data. If omitting this parameter, you must submit content.\\\\n\\"},{\\"name\\":\\"content\\",\\"example\\":\\"...\\",\\"required\\":\\"Optional\\",\\"description\\":\\"File contents via a POST variable. If omitting this parameter, you must provide a file.\\\\n\\"},{\\"name\\":\\"filetype\\",\\"example\\":\\"php\\",\\"required\\":\\"Optional\\",\\"description\\":\\"A file type identifier.\\\\n\\"},{\\"name\\":\\"filename\\",\\"example\\":\\"foo.txt\\",\\"required\\":\\"Required\\",\\"description\\":\\"Filename of file.\\\\n\\"},{\\"name\\":\\"title\\",\\"example\\":\\"My File\\",\\"required\\":\\"Optional\\",\\"description\\":\\"Title of file.\\\\n\\"},{\\"name\\":\\"initial_comment\\",\\"example\\":\\"Best!\\",\\"required\\":\\"Optional\\",\\"description\\":\\"Initial comment to add to file.\\\\n\\"},{\\"name\\":\\"channels\\",\\"example\\":\\"C1234567890\\",\\"required\\":\\"Optional\\",\\"description\\":\\"Comma-separated list of channel names or IDs where the file will be shared.\\\\n\\"}],\\"groups.archive\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: groups:write)\\\\n\\"},{\\"name\\":\\"channel\\",\\"example\\":\\"G1234567890\\",\\"required\\":\\"Required\\",\\"description\\":\\"Private channel to archive\\\\n\\"}],\\"groups.close\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: groups:write)\\\\n\\"},{\\"name\\":\\"channel\\",\\"example\\":\\"G1234567890\\",\\"required\\":\\"Required\\",\\"description\\":\\"Private channel to close.\\\\n\\"}],\\"groups.create\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: groups:write)\\\\n\\"},{\\"name\\":\\"name\\",\\"example\\":\\" \\",\\"required\\":\\"Required\\",\\"description\\":\\"Name of private channel to create\\\\n\\"}],\\"groups.createChild\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: groups:write)\\\\n\\"},{\\"name\\":\\"channel\\",\\"example\\":\\"G1234567890\\",\\"required\\":\\"Required\\",\\"description\\":\\"Private channel to clone and archive.\\\\n\\"}],\\"groups.history\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: groups:history)\\\\n\\"},{\\"name\\":\\"channel\\",\\"example\\":\\"G1234567890\\",\\"required\\":\\"Required\\",\\"description\\":\\"Private channel to fetch history for.\\\\n\\"},{\\"name\\":\\"latest\\",\\"example\\":\\"1234567890.123456\\",\\"required\\":\\"Optional, default=now\\",\\"description\\":\\"End of time range of messages to include in results.\\\\n\\"},{\\"name\\":\\"oldest\\",\\"example\\":\\"1234567890.123456\\",\\"required\\":\\"Optional, default=0\\",\\"description\\":\\"Start of time range of messages to include in results.\\\\n\\"},{\\"name\\":\\"inclusive\\",\\"example\\":\\"1\\",\\"required\\":\\"Optional, default=0\\",\\"description\\":\\"Include messages with latest or oldest timestamp in results.\\\\n\\"},{\\"name\\":\\"count\\",\\"example\\":\\"100\\",\\"required\\":\\"Optional, default=100\\",\\"description\\":\\"Number of messages to return, between 1 and 1000.\\\\n\\"},{\\"name\\":\\"unreads\\",\\"example\\":\\"1\\",\\"required\\":\\"Optional, default=0\\",\\"description\\":\\"Include unread_count_display in the output?\\\\n\\"}],\\"groups.info\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: groups:read)\\\\n\\"},{\\"name\\":\\"channel\\",\\"example\\":\\"C1234567890\\",\\"required\\":\\"Required\\",\\"description\\":\\"Private channel to get info on\\\\n\\"}],\\"groups.invite\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: groups:write)\\\\n\\"},{\\"name\\":\\"channel\\",\\"example\\":\\"G1234567890\\",\\"required\\":\\"Required\\",\\"description\\":\\"Private channel to invite user to.\\\\n\\"},{\\"name\\":\\"user\\",\\"example\\":\\"U1234567890\\",\\"required\\":\\"Required\\",\\"description\\":\\"User to invite.\\\\n\\"}],\\"groups.kick\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: groups:write)\\\\n\\"},{\\"name\\":\\"channel\\",\\"example\\":\\"G1234567890\\",\\"required\\":\\"Required\\",\\"description\\":\\"Private channel to remove user from.\\\\n\\"},{\\"name\\":\\"user\\",\\"example\\":\\"U1234567890\\",\\"required\\":\\"Required\\",\\"description\\":\\"User to remove from private channel.\\\\n\\"}],\\"groups.leave\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: groups:write)\\\\n\\"},{\\"name\\":\\"channel\\",\\"example\\":\\"G1234567890\\",\\"required\\":\\"Required\\",\\"description\\":\\"Private channel to leave\\\\n\\"}],\\"groups.list\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: groups:read)\\\\n\\"},{\\"name\\":\\"exclude_archived\\",\\"example\\":\\"1\\",\\"required\\":\\"Optional, default=0\\",\\"description\\":\\"Don\'t return archived private channels.\\\\n\\"}],\\"groups.mark\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: groups:write)\\\\n\\"},{\\"name\\":\\"channel\\",\\"example\\":\\"G1234567890\\",\\"required\\":\\"Required\\",\\"description\\":\\"Private channel to set reading cursor in.\\\\n\\"},{\\"name\\":\\"ts\\",\\"example\\":\\"1234567890.123456\\",\\"required\\":\\"Required\\",\\"description\\":\\"Timestamp of the most recently seen message.\\\\n\\"}],\\"groups.open\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: groups:write)\\\\n\\"},{\\"name\\":\\"channel\\",\\"example\\":\\"G1234567890\\",\\"required\\":\\"Required\\",\\"description\\":\\"Private channel to open.\\\\n\\"}],\\"groups.rename\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: groups:write)\\\\n\\"},{\\"name\\":\\"channel\\",\\"example\\":\\"C1234567890\\",\\"required\\":\\"Required\\",\\"description\\":\\"Private channel to rename\\\\n\\"},{\\"name\\":\\"name\\",\\"example\\":\\" \\",\\"required\\":\\"Required\\",\\"description\\":\\"New name for private channel.\\\\n\\"}],\\"groups.setPurpose\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: groups:write)\\\\n\\"},{\\"name\\":\\"channel\\",\\"example\\":\\"C1234567890\\",\\"required\\":\\"Required\\",\\"description\\":\\"Private channel to set the purpose of\\\\n\\"},{\\"name\\":\\"purpose\\",\\"example\\":\\"My Purpose\\",\\"required\\":\\"Required\\",\\"description\\":\\"The new purpose\\\\n\\"}],\\"groups.setTopic\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: groups:write)\\\\n\\"},{\\"name\\":\\"channel\\",\\"example\\":\\"C1234567890\\",\\"required\\":\\"Required\\",\\"description\\":\\"Private channel to set the topic of\\\\n\\"},{\\"name\\":\\"topic\\",\\"example\\":\\"My Topic\\",\\"required\\":\\"Required\\",\\"description\\":\\"The new topic\\\\n\\"}],\\"groups.unarchive\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: groups:write)\\\\n\\"},{\\"name\\":\\"channel\\",\\"example\\":\\"G1234567890\\",\\"required\\":\\"Required\\",\\"description\\":\\"Private channel to unarchive\\\\n\\"}],\\"im.close\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: im:write)\\\\n\\"},{\\"name\\":\\"channel\\",\\"example\\":\\"D1234567890\\",\\"required\\":\\"Required\\",\\"description\\":\\"Direct message channel to close.\\\\n\\"}],\\"im.history\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: im:history)\\\\n\\"},{\\"name\\":\\"channel\\",\\"example\\":\\"D1234567890\\",\\"required\\":\\"Required\\",\\"description\\":\\"Direct message channel to fetch history for.\\\\n\\"},{\\"name\\":\\"latest\\",\\"example\\":\\"1234567890.123456\\",\\"required\\":\\"Optional, default=now\\",\\"description\\":\\"End of time range of messages to include in results.\\\\n\\"},{\\"name\\":\\"oldest\\",\\"example\\":\\"1234567890.123456\\",\\"required\\":\\"Optional, default=0\\",\\"description\\":\\"Start of time range of messages to include in results.\\\\n\\"},{\\"name\\":\\"inclusive\\",\\"example\\":\\"1\\",\\"required\\":\\"Optional, default=0\\",\\"description\\":\\"Include messages with latest or oldest timestamp in results.\\\\n\\"},{\\"name\\":\\"count\\",\\"example\\":\\"100\\",\\"required\\":\\"Optional, default=100\\",\\"description\\":\\"Number of messages to return, between 1 and 1000.\\\\n\\"},{\\"name\\":\\"unreads\\",\\"example\\":\\"1\\",\\"required\\":\\"Optional, default=0\\",\\"description\\":\\"Include unread_count_display in the output?\\\\n\\"}],\\"im.list\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: im:read)\\\\n\\"}],\\"im.mark\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: im:write)\\\\n\\"},{\\"name\\":\\"channel\\",\\"example\\":\\"D1234567890\\",\\"required\\":\\"Required\\",\\"description\\":\\"Direct message channel to set reading cursor in.\\\\n\\"},{\\"name\\":\\"ts\\",\\"example\\":\\"1234567890.123456\\",\\"required\\":\\"Required\\",\\"description\\":\\"Timestamp of the most recently seen message.\\\\n\\"}],\\"im.open\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: im:write)\\\\n\\"},{\\"name\\":\\"user\\",\\"example\\":\\"U1234567890\\",\\"required\\":\\"Required\\",\\"description\\":\\"User to open a direct message channel with.\\\\n\\"},{\\"name\\":\\"return_im\\",\\"example\\":\\" \\",\\"required\\":\\"Optional\\",\\"description\\":\\"Boolean, indicates you want the full IM channel definition in the response.\\\\n\\"}],\\"mpim.close\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: mpim:write)\\\\n\\"},{\\"name\\":\\"channel\\",\\"example\\":\\"G1234567890\\",\\"required\\":\\"Required\\",\\"description\\":\\"MPIM to close.\\\\n\\"}],\\"mpim.history\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: mpim:history)\\\\n\\"},{\\"name\\":\\"channel\\",\\"example\\":\\"G1234567890\\",\\"required\\":\\"Required\\",\\"description\\":\\"Multiparty direct message to fetch history for.\\\\n\\"},{\\"name\\":\\"latest\\",\\"example\\":\\"1234567890.123456\\",\\"required\\":\\"Optional, default=now\\",\\"description\\":\\"End of time range of messages to include in results.\\\\n\\"},{\\"name\\":\\"oldest\\",\\"example\\":\\"1234567890.123456\\",\\"required\\":\\"Optional, default=0\\",\\"description\\":\\"Start of time range of messages to include in results.\\\\n\\"},{\\"name\\":\\"inclusive\\",\\"example\\":\\"1\\",\\"required\\":\\"Optional, default=0\\",\\"description\\":\\"Include messages with latest or oldest timestamp in results.\\\\n\\"},{\\"name\\":\\"count\\",\\"example\\":\\"100\\",\\"required\\":\\"Optional, default=100\\",\\"description\\":\\"Number of messages to return, between 1 and 1000.\\\\n\\"},{\\"name\\":\\"unreads\\",\\"example\\":\\"1\\",\\"required\\":\\"Optional, default=0\\",\\"description\\":\\"Include unread_count_display in the output?\\\\n\\"}],\\"mpim.list\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: mpim:read)\\\\n\\"}],\\"mpim.mark\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: mpim:write)\\\\n\\"},{\\"name\\":\\"channel\\",\\"example\\":\\"G1234567890\\",\\"required\\":\\"Required\\",\\"description\\":\\"multiparty direct message channel to set reading cursor in.\\\\n\\"},{\\"name\\":\\"ts\\",\\"example\\":\\"1234567890.123456\\",\\"required\\":\\"Required\\",\\"description\\":\\"Timestamp of the most recently seen message.\\\\n\\"}],\\"mpim.open\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: mpim:write)\\\\n\\"},{\\"name\\":\\"users\\",\\"example\\":\\"U1234567890,U2345678901,U3456789012\\",\\"required\\":\\"Required\\",\\"description\\":\\"Comma separated lists of users.  The ordering of the users is preserved whenever a MPIM group is returned.\\\\n\\"}],\\"oauth.access\\":[{\\"name\\":\\"client_id\\",\\"example\\":\\"4b39e9-752c4\\",\\"required\\":\\"Required\\",\\"description\\":\\"Issued when you created your application.\\\\n\\"},{\\"name\\":\\"client_secret\\",\\"example\\":\\"33fea0113f5b1\\",\\"required\\":\\"Required\\",\\"description\\":\\"Issued when you created your application.\\\\n\\"},{\\"name\\":\\"code\\",\\"example\\":\\"ccdaa72ad\\",\\"required\\":\\"Required\\",\\"description\\":\\"The code param returned via the OAuth callback.\\\\n\\"},{\\"name\\":\\"redirect_uri\\",\\"example\\":\\"http://example.com\\",\\"required\\":\\"Optional\\",\\"description\\":\\"This must match the originally submitted URI (if one was sent).\\\\n\\"}],\\"pins.add\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: pins:write)\\\\n\\"},{\\"name\\":\\"channel\\",\\"example\\":\\"C1234567890\\",\\"required\\":\\"Required\\",\\"description\\":\\"Channel to pin the item in.\\\\n\\"},{\\"name\\":\\"file\\",\\"example\\":\\"F1234567890\\",\\"required\\":\\"Optional\\",\\"description\\":\\"File to pin.\\\\n\\"},{\\"name\\":\\"file_comment\\",\\"example\\":\\"Fc1234567890\\",\\"required\\":\\"Optional\\",\\"description\\":\\"File comment to pin.\\\\n\\"},{\\"name\\":\\"timestamp\\",\\"example\\":\\"1234567890.123456\\",\\"required\\":\\"Optional\\",\\"description\\":\\"Timestamp of the message to pin.\\\\n\\"}],\\"pins.list\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: pins:read)\\\\n\\"},{\\"name\\":\\"channel\\",\\"example\\":\\"C1234567890\\",\\"required\\":\\"Required\\",\\"description\\":\\"Channel to get pinned items for.\\\\n\\"}],\\"pins.remove\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: pins:write)\\\\n\\"},{\\"name\\":\\"channel\\",\\"example\\":\\"C1234567890\\",\\"required\\":\\"Required\\",\\"description\\":\\"Channel where the item is pinned to.\\\\n\\"},{\\"name\\":\\"file\\",\\"example\\":\\"F1234567890\\",\\"required\\":\\"Optional\\",\\"description\\":\\"File to un-pin.\\\\n\\"},{\\"name\\":\\"file_comment\\",\\"example\\":\\"Fc1234567890\\",\\"required\\":\\"Optional\\",\\"description\\":\\"File comment to un-pin.\\\\n\\"},{\\"name\\":\\"timestamp\\",\\"example\\":\\"1234567890.123456\\",\\"required\\":\\"Optional\\",\\"description\\":\\"Timestamp of the message to un-pin.\\\\n\\"}],\\"reactions.add\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: reactions:write)\\\\n\\"},{\\"name\\":\\"name\\",\\"example\\":\\"thumbsup\\",\\"required\\":\\"Required\\",\\"description\\":\\"Reaction (emoji) name.\\\\n\\"},{\\"name\\":\\"file\\",\\"example\\":\\"F1234567890\\",\\"required\\":\\"Optional\\",\\"description\\":\\"File to add reaction to.\\\\n\\"},{\\"name\\":\\"file_comment\\",\\"example\\":\\"Fc1234567890\\",\\"required\\":\\"Optional\\",\\"description\\":\\"File comment to add reaction to.\\\\n\\"},{\\"name\\":\\"channel\\",\\"example\\":\\"C1234567890\\",\\"required\\":\\"Optional\\",\\"description\\":\\"Channel where the message to add reaction to was posted.\\\\n\\"},{\\"name\\":\\"timestamp\\",\\"example\\":\\"1234567890.123456\\",\\"required\\":\\"Optional\\",\\"description\\":\\"Timestamp of the message to add reaction to.\\\\n\\"}],\\"reactions.get\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: reactions:read)\\\\n\\"},{\\"name\\":\\"file\\",\\"example\\":\\"F1234567890\\",\\"required\\":\\"Optional\\",\\"description\\":\\"File to get reactions for.\\\\n\\"},{\\"name\\":\\"file_comment\\",\\"example\\":\\"Fc1234567890\\",\\"required\\":\\"Optional\\",\\"description\\":\\"File comment to get reactions for.\\\\n\\"},{\\"name\\":\\"channel\\",\\"example\\":\\"C1234567890\\",\\"required\\":\\"Optional\\",\\"description\\":\\"Channel where the message to get reactions for was posted.\\\\n\\"},{\\"name\\":\\"timestamp\\",\\"example\\":\\"1234567890.123456\\",\\"required\\":\\"Optional\\",\\"description\\":\\"Timestamp of the message to get reactions for.\\\\n\\"},{\\"name\\":\\"full\\",\\"example\\":\\" \\",\\"required\\":\\"Optional\\",\\"description\\":\\"If true always return the complete reaction list.\\\\n\\"}],\\"reactions.list\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: reactions:read)\\\\n\\"},{\\"name\\":\\"user\\",\\"example\\":\\"U1234567890\\",\\"required\\":\\"Optional\\",\\"description\\":\\"Show reactions made by this user. Defaults to the authed user.\\\\n\\"},{\\"name\\":\\"full\\",\\"example\\":\\" \\",\\"required\\":\\"Optional\\",\\"description\\":\\"If true always return the complete reaction list.\\\\n\\"},{\\"name\\":\\"count\\",\\"example\\":\\"20\\",\\"required\\":\\"Optional, default=100\\",\\"description\\":\\"Number of items to return per page.\\\\n\\"},{\\"name\\":\\"page\\",\\"example\\":\\"2\\",\\"required\\":\\"Optional, default=1\\",\\"description\\":\\"Page number of results to return.\\\\n\\"}],\\"reactions.remove\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: reactions:write)\\\\n\\"},{\\"name\\":\\"name\\",\\"example\\":\\"thumbsup\\",\\"required\\":\\"Required\\",\\"description\\":\\"Reaction (emoji) name.\\\\n\\"},{\\"name\\":\\"file\\",\\"example\\":\\"F1234567890\\",\\"required\\":\\"Optional\\",\\"description\\":\\"File to remove reaction from.\\\\n\\"},{\\"name\\":\\"file_comment\\",\\"example\\":\\"Fc1234567890\\",\\"required\\":\\"Optional\\",\\"description\\":\\"File comment to remove reaction from.\\\\n\\"},{\\"name\\":\\"channel\\",\\"example\\":\\"C1234567890\\",\\"required\\":\\"Optional\\",\\"description\\":\\"Channel where the message to remove reaction from was posted.\\\\n\\"},{\\"name\\":\\"timestamp\\",\\"example\\":\\"1234567890.123456\\",\\"required\\":\\"Optional\\",\\"description\\":\\"Timestamp of the message to remove reaction from.\\\\n\\"}],\\"reminders.add\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: reminders:write)\\\\n\\"},{\\"name\\":\\"text\\",\\"example\\":\\"eat a banana\\",\\"required\\":\\"Required\\",\\"description\\":\\"The content of the reminder\\\\n\\"},{\\"name\\":\\"time\\",\\"example\\":\\"1602288000\\",\\"required\\":\\"Required\\",\\"description\\":\\"When this reminder should happen: the Unix timestamp (up to five years from now), the number of seconds until the reminder (if within 24 hours), or a natural language description (Ex. \\\\\\"in 15 minutes,\\\\\\" or \\\\\\"every Thursday\\\\\\")\\\\n\\"},{\\"name\\":\\"user\\",\\"example\\":\\"U18888888\\",\\"required\\":\\"Optional\\",\\"description\\":\\"The user who will receive the reminder. If no user is specified, the reminder will go to user who created it.\\\\n\\"}],\\"reminders.complete\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: reminders:write)\\\\n\\"},{\\"name\\":\\"reminder\\",\\"example\\":\\"Rm12345678\\",\\"required\\":\\"Required\\",\\"description\\":\\"The ID of the reminder to be marked as complete\\\\n\\"}],\\"reminders.delete\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: reminders:write)\\\\n\\"},{\\"name\\":\\"reminder\\",\\"example\\":\\"Rm12345678\\",\\"required\\":\\"Required\\",\\"description\\":\\"The ID of the reminder\\\\n\\"}],\\"reminders.info\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: reminders:read)\\\\n\\"},{\\"name\\":\\"reminder\\",\\"example\\":\\"Rm23456789\\",\\"required\\":\\"Required\\",\\"description\\":\\"The ID of the reminder\\\\n\\"}],\\"reminders.list\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: reminders:read)\\\\n\\"}],\\"rtm.start\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: client)\\\\n\\"},{\\"name\\":\\"simple_latest\\",\\"example\\":\\" \\",\\"required\\":\\"Optional\\",\\"description\\":\\"Return timestamp only for latest message object of each channel (improves performance).\\\\n\\"},{\\"name\\":\\"no_unreads\\",\\"example\\":\\" \\",\\"required\\":\\"Optional\\",\\"description\\":\\"Skip unread counts for each channel (improves performance).\\\\n\\"},{\\"name\\":\\"mpim_aware\\",\\"example\\":\\" \\",\\"required\\":\\"Optional\\",\\"description\\":\\"Returns MPIMs to the client in the API response.\\\\n\\"}],\\"search.all\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: search:read)\\\\n\\"},{\\"name\\":\\"query\\",\\"example\\":\\"pickleface\\",\\"required\\":\\"Required\\",\\"description\\":\\"Search query. May contains booleans, etc.\\\\n\\"},{\\"name\\":\\"sort\\",\\"example\\":\\"timestamp\\",\\"required\\":\\"Optional, default=score\\",\\"description\\":\\"Return matches sorted by either score or timestamp.\\\\n\\"},{\\"name\\":\\"sort_dir\\",\\"example\\":\\"asc\\",\\"required\\":\\"Optional, default=desc\\",\\"description\\":\\"Change sort direction to ascending (asc) or descending (desc).\\\\n\\"},{\\"name\\":\\"highlight\\",\\"example\\":\\"1\\",\\"required\\":\\"Optional\\",\\"description\\":\\"Pass a value of 1 to enable query highlight markers (see below).\\\\n\\"},{\\"name\\":\\"count\\",\\"example\\":\\"20\\",\\"required\\":\\"Optional, default=20\\",\\"description\\":\\"Number of items to return per page.\\\\n\\"},{\\"name\\":\\"page\\",\\"example\\":\\"2\\",\\"required\\":\\"Optional, default=1\\",\\"description\\":\\"Page number of results to return.\\\\n\\"}],\\"search.files\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: search:read)\\\\n\\"},{\\"name\\":\\"query\\",\\"example\\":\\"pickleface\\",\\"required\\":\\"Required\\",\\"description\\":\\"Search query. May contain booleans, etc.\\\\n\\"},{\\"name\\":\\"sort\\",\\"example\\":\\"timestamp\\",\\"required\\":\\"Optional, default=score\\",\\"description\\":\\"Return matches sorted by either score or timestamp.\\\\n\\"},{\\"name\\":\\"sort_dir\\",\\"example\\":\\"asc\\",\\"required\\":\\"Optional, default=desc\\",\\"description\\":\\"Change sort direction to ascending (asc) or descending (desc).\\\\n\\"},{\\"name\\":\\"highlight\\",\\"example\\":\\"1\\",\\"required\\":\\"Optional\\",\\"description\\":\\"Pass a value of 1 to enable query highlight markers (see below).\\\\n\\"},{\\"name\\":\\"count\\",\\"example\\":\\"20\\",\\"required\\":\\"Optional, default=20\\",\\"description\\":\\"Number of items to return per page.\\\\n\\"},{\\"name\\":\\"page\\",\\"example\\":\\"2\\",\\"required\\":\\"Optional, default=1\\",\\"description\\":\\"Page number of results to return.\\\\n\\"}],\\"search.messages\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: search:read)\\\\n\\"},{\\"name\\":\\"query\\",\\"example\\":\\"pickleface\\",\\"required\\":\\"Required\\",\\"description\\":\\"Search query. May contains booleans, etc.\\\\n\\"},{\\"name\\":\\"sort\\",\\"example\\":\\"timestamp\\",\\"required\\":\\"Optional, default=score\\",\\"description\\":\\"Return matches sorted by either score or timestamp.\\\\n\\"},{\\"name\\":\\"sort_dir\\",\\"example\\":\\"asc\\",\\"required\\":\\"Optional, default=desc\\",\\"description\\":\\"Change sort direction to ascending (asc) or descending (desc).\\\\n\\"},{\\"name\\":\\"highlight\\",\\"example\\":\\"1\\",\\"required\\":\\"Optional\\",\\"description\\":\\"Pass a value of 1 to enable query highlight markers (see below).\\\\n\\"},{\\"name\\":\\"count\\",\\"example\\":\\"20\\",\\"required\\":\\"Optional, default=20\\",\\"description\\":\\"Number of items to return per page.\\\\n\\"},{\\"name\\":\\"page\\",\\"example\\":\\"2\\",\\"required\\":\\"Optional, default=1\\",\\"description\\":\\"Page number of results to return.\\\\n\\"}],\\"stars.add\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: stars:write)\\\\n\\"},{\\"name\\":\\"file\\",\\"example\\":\\"F1234567890\\",\\"required\\":\\"Optional\\",\\"description\\":\\"File to add star to.\\\\n\\"},{\\"name\\":\\"file_comment\\",\\"example\\":\\"Fc1234567890\\",\\"required\\":\\"Optional\\",\\"description\\":\\"File comment to add star to.\\\\n\\"},{\\"name\\":\\"channel\\",\\"example\\":\\"C1234567890\\",\\"required\\":\\"Optional\\",\\"description\\":\\"Channel to add star to, or channel where the message to add star to was posted (used with timestamp).\\\\n\\"},{\\"name\\":\\"timestamp\\",\\"example\\":\\"1234567890.123456\\",\\"required\\":\\"Optional\\",\\"description\\":\\"Timestamp of the message to add star to.\\\\n\\"}],\\"stars.list\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: stars:read)\\\\n\\"},{\\"name\\":\\"count\\",\\"example\\":\\"20\\",\\"required\\":\\"Optional, default=100\\",\\"description\\":\\"Number of items to return per page.\\\\n\\"},{\\"name\\":\\"page\\",\\"example\\":\\"2\\",\\"required\\":\\"Optional, default=1\\",\\"description\\":\\"Page number of results to return.\\\\n\\"}],\\"stars.remove\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: stars:write)\\\\n\\"},{\\"name\\":\\"file\\",\\"example\\":\\"F1234567890\\",\\"required\\":\\"Optional\\",\\"description\\":\\"File to remove star from.\\\\n\\"},{\\"name\\":\\"file_comment\\",\\"example\\":\\"Fc1234567890\\",\\"required\\":\\"Optional\\",\\"description\\":\\"File comment to remove star from.\\\\n\\"},{\\"name\\":\\"channel\\",\\"example\\":\\"C1234567890\\",\\"required\\":\\"Optional\\",\\"description\\":\\"Channel to remove star from, or channel where the message to remove star from was posted (used with timestamp).\\\\n\\"},{\\"name\\":\\"timestamp\\",\\"example\\":\\"1234567890.123456\\",\\"required\\":\\"Optional\\",\\"description\\":\\"Timestamp of the message to remove star from.\\\\n\\"}],\\"team.accessLogs\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: admin)\\\\n\\"},{\\"name\\":\\"count\\",\\"example\\":\\"20\\",\\"required\\":\\"Optional, default=100\\",\\"description\\":\\"Number of items to return per page.\\\\n\\"},{\\"name\\":\\"page\\",\\"example\\":\\"2\\",\\"required\\":\\"Optional, default=1\\",\\"description\\":\\"Page number of results to return.\\\\n\\"}],\\"team.billableInfo\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: admin)\\\\n\\"},{\\"name\\":\\"user\\",\\"example\\":\\"U1234567890\\",\\"required\\":\\"Optional\\",\\"description\\":\\"A user to retrieve the billable information for. Defaults to all users.\\\\n\\"}],\\"team.info\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: team:read)\\\\n\\"}],\\"team.integrationLogs\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: admin)\\\\n\\"},{\\"name\\":\\"service_id\\",\\"example\\":\\" \\",\\"required\\":\\"Optional\\",\\"description\\":\\"Filter logs to this service. Defaults to all logs.\\\\n\\"},{\\"name\\":\\"app_id\\",\\"example\\":\\" \\",\\"required\\":\\"Optional\\",\\"description\\":\\"Filter logs to this Slack app. Defaults to all logs.\\\\n\\"},{\\"name\\":\\"user\\",\\"example\\":\\"U1234567890\\",\\"required\\":\\"Optional\\",\\"description\\":\\"Filter logs generated by this user’s actions. Defaults to all logs.\\\\n\\"},{\\"name\\":\\"change_type\\",\\"example\\":\\"added\\",\\"required\\":\\"Optional\\",\\"description\\":\\"Filter logs with this change type. Defaults to all logs.\\\\n\\"},{\\"name\\":\\"count\\",\\"example\\":\\"20\\",\\"required\\":\\"Optional, default=100\\",\\"description\\":\\"Number of items to return per page.\\\\n\\"},{\\"name\\":\\"page\\",\\"example\\":\\"2\\",\\"required\\":\\"Optional, default=1\\",\\"description\\":\\"Page number of results to return.\\\\n\\"}],\\"team.profile.get\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: users.profile:read)\\\\n\\"},{\\"name\\":\\"visibility\\",\\"example\\":\\"all\\",\\"required\\":\\"Optional\\",\\"description\\":\\"Filter by visibility.\\\\n\\"}],\\"usergroups.create\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: usergroups:write)\\\\n\\"},{\\"name\\":\\"name\\",\\"example\\":\\"My Test Team\\",\\"required\\":\\"Required\\",\\"description\\":\\"A name for the User Group. Must be unique among User Groups.\\\\n\\"},{\\"name\\":\\"handle\\",\\"example\\":\\" \\",\\"required\\":\\"Optional\\",\\"description\\":\\"A mention handle. Must be unique among channels, users and User Groups.\\\\n\\"},{\\"name\\":\\"description\\",\\"example\\":\\" \\",\\"required\\":\\"Optional\\",\\"description\\":\\"A short description of the User Group.\\\\n\\"},{\\"name\\":\\"channels\\",\\"example\\":\\" \\",\\"required\\":\\"Optional\\",\\"description\\":\\"A comma separated string of encoded channel IDs for which the User Group uses as a default.\\\\n\\"},{\\"name\\":\\"include_count\\",\\"example\\":\\"1\\",\\"required\\":\\"Optional\\",\\"description\\":\\"Include the number of users in each User Group.\\\\n\\"}],\\"usergroups.disable\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: usergroups:write)\\\\n\\"},{\\"name\\":\\"usergroup\\",\\"example\\":\\"S0604QSJC\\",\\"required\\":\\"Required\\",\\"description\\":\\"The encoded ID of the User Group to disable.\\\\n\\"},{\\"name\\":\\"include_count\\",\\"example\\":\\"1\\",\\"required\\":\\"Optional\\",\\"description\\":\\"Include the number of users in the User Group.\\\\n\\"}],\\"usergroups.enable\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: usergroups:write)\\\\n\\"},{\\"name\\":\\"usergroup\\",\\"example\\":\\"S0604QSJC\\",\\"required\\":\\"Required\\",\\"description\\":\\"The encoded ID of the User Group to enable.\\\\n\\"},{\\"name\\":\\"include_count\\",\\"example\\":\\"1\\",\\"required\\":\\"Optional\\",\\"description\\":\\"Include the number of users in the User Group.\\\\n\\"}],\\"usergroups.list\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: usergroups:read)\\\\n\\"},{\\"name\\":\\"include_disabled\\",\\"example\\":\\"1\\",\\"required\\":\\"Optional\\",\\"description\\":\\"Include disabled User Groups.\\\\n\\"},{\\"name\\":\\"include_count\\",\\"example\\":\\"1\\",\\"required\\":\\"Optional\\",\\"description\\":\\"Include the number of users in each User Group.\\\\n\\"},{\\"name\\":\\"include_users\\",\\"example\\":\\"1\\",\\"required\\":\\"Optional\\",\\"description\\":\\"Include the list of users for each User Group.\\\\n\\"}],\\"usergroups.update\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: usergroups:write)\\\\n\\"},{\\"name\\":\\"usergroup\\",\\"example\\":\\"S0604QSJC\\",\\"required\\":\\"Required\\",\\"description\\":\\"The encoded ID of the User Group to update.\\\\n\\"},{\\"name\\":\\"name\\",\\"example\\":\\"My Test Team\\",\\"required\\":\\"Optional\\",\\"description\\":\\"A name for the User Group. Must be unique among User Groups.\\\\n\\"},{\\"name\\":\\"handle\\",\\"example\\":\\" \\",\\"required\\":\\"Optional\\",\\"description\\":\\"A mention handle. Must be unique among channels, users and User Groups.\\\\n\\"},{\\"name\\":\\"description\\",\\"example\\":\\" \\",\\"required\\":\\"Optional\\",\\"description\\":\\"A short description of the User Group.\\\\n\\"},{\\"name\\":\\"channels\\",\\"example\\":\\" \\",\\"required\\":\\"Optional\\",\\"description\\":\\"A comma separated string of encoded channel IDs for which the User Group uses as a default.\\\\n\\"},{\\"name\\":\\"include_count\\",\\"example\\":\\"1\\",\\"required\\":\\"Optional\\",\\"description\\":\\"Include the number of users in the User Group.\\\\n\\"}],\\"usergroups.users.list\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: usergroups:read)\\\\n\\"},{\\"name\\":\\"usergroup\\",\\"example\\":\\"S0604QSJC\\",\\"required\\":\\"Required\\",\\"description\\":\\"The encoded ID of the User Group to update.\\\\n\\"},{\\"name\\":\\"include_disabled\\",\\"example\\":\\"1\\",\\"required\\":\\"Optional\\",\\"description\\":\\"Allow results that involve disabled User Groups.\\\\n\\"}],\\"usergroups.users.update\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: usergroups:write)\\\\n\\"},{\\"name\\":\\"usergroup\\",\\"example\\":\\"S0604QSJC\\",\\"required\\":\\"Required\\",\\"description\\":\\"The encoded ID of the User Group to update.\\\\n\\"},{\\"name\\":\\"users\\",\\"example\\":\\"U060R4BJ4,U060RNRCZ\\",\\"required\\":\\"Required\\",\\"description\\":\\"A comma separated string of encoded user IDs that represent the entire list of users for the User Group.\\\\n\\"},{\\"name\\":\\"include_count\\",\\"example\\":\\"1\\",\\"required\\":\\"Optional\\",\\"description\\":\\"Include the number of users in the User Group.\\\\n\\"}],\\"users.getPresence\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: users:read)\\\\n\\"},{\\"name\\":\\"user\\",\\"example\\":\\"U1234567890\\",\\"required\\":\\"Required\\",\\"description\\":\\"User to get presence info on. Defaults to the authed user.\\\\n\\"}],\\"users.identity\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: identity.basic)\\\\n\\"}],\\"users.info\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: users:read)\\\\n\\"},{\\"name\\":\\"user\\",\\"example\\":\\"U1234567890\\",\\"required\\":\\"Required\\",\\"description\\":\\"User to get info on\\\\n\\"}],\\"users.list\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: users:read)\\\\n\\"},{\\"name\\":\\"presence\\",\\"example\\":\\"1\\",\\"required\\":\\"Optional\\",\\"description\\":\\"Whether to include presence data in the output\\\\n\\"}],\\"users.setActive\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: users:write)\\\\n\\"}],\\"users.setPresence\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: users:write)\\\\n\\"},{\\"name\\":\\"presence\\",\\"example\\":\\"away\\",\\"required\\":\\"Required\\",\\"description\\":\\"Either auto or away\\\\n\\"}],\\"users.profile.get\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: users.profile:read)\\\\n\\"},{\\"name\\":\\"user\\",\\"example\\":\\"U1234567890\\",\\"required\\":\\"Optional\\",\\"description\\":\\"User to retrieve profile info for\\\\n\\"},{\\"name\\":\\"include_labels\\",\\"example\\":\\"1\\",\\"required\\":\\"Optional, default=0\\",\\"description\\":\\"Include labels for each ID in custom profile fields\\\\n\\"}],\\"users.profile.set\\":[{\\"name\\":\\"token\\",\\"example\\":\\"xxxx-xxxxxxxxx-xxxx\\",\\"required\\":\\"Required\\",\\"description\\":\\"Authentication token (Requires scope: users.profile:write)\\\\n\\"},{\\"name\\":\\"user\\",\\"example\\":\\"U1234567890\\",\\"required\\":\\"Optional\\",\\"description\\":\\"ID of user to change. This argument may only be specified by team admins.\\\\n\\"},{\\"name\\":\\"profile\\",\\"example\\":\\"{ first_name: \\\\\\"John\\\\\\", ... }\\",\\"required\\":\\"Optional\\",\\"description\\":\\"Collection of key:value pairs presented as a URL-encoded JSON hash.\\\\n\\"},{\\"name\\":\\"name\\",\\"example\\":\\"first_name\\",\\"required\\":\\"Optional\\",\\"description\\":\\"Name of a single key to set. Usable only if profile is not passed.\\\\n\\"},{\\"name\\":\\"value\\",\\"example\\":\\"John\\",\\"required\\":\\"Optional\\",\\"description\\":\\"Value to set a single key to. Usable only if profile is not passed.\\\\n\\"}]}");\n\n//# sourceURL=webpack:///./node_modules/slack/methods/api.json?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/api.test.js':
      /*!************************************************!*\
  !*** ./node_modules/slack/methods/api.test.js ***!
  \************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = apitest;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction apitest(params, callback) {\n  var ns = \'api.test\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/api.test.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/auth.test.js':
      /*!*************************************************!*\
  !*** ./node_modules/slack/methods/auth.test.js ***!
  \*************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = authtest;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction authtest(params, callback) {\n  var ns = \'auth.test\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/auth.test.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/bots.info.js':
      /*!*************************************************!*\
  !*** ./node_modules/slack/methods/bots.info.js ***!
  \*************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = botsinfo;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction botsinfo(params, callback) {\n  var ns = \'bots.info\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/bots.info.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/bots.js':
      /*!********************************************!*\
  !*** ./node_modules/slack/methods/bots.js ***!
  \********************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _bots = __webpack_require__(/*! ./bots.info */ "./node_modules/slack/methods/bots.info.js");\n\nvar _bots2 = _interopRequireDefault(_bots);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  info: _bots2.default\n};\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/bots.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/channels.archive.js':
      /*!********************************************************!*\
  !*** ./node_modules/slack/methods/channels.archive.js ***!
  \********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = channelsarchive;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction channelsarchive(params, callback) {\n  var ns = \'channels.archive\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/channels.archive.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/channels.create.js':
      /*!*******************************************************!*\
  !*** ./node_modules/slack/methods/channels.create.js ***!
  \*******************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = channelscreate;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction channelscreate(params, callback) {\n  var ns = \'channels.create\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/channels.create.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/channels.history.js':
      /*!********************************************************!*\
  !*** ./node_modules/slack/methods/channels.history.js ***!
  \********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = channelshistory;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction channelshistory(params, callback) {\n  var ns = \'channels.history\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/channels.history.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/channels.info.js':
      /*!*****************************************************!*\
  !*** ./node_modules/slack/methods/channels.info.js ***!
  \*****************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = channelsinfo;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction channelsinfo(params, callback) {\n  var ns = \'channels.info\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/channels.info.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/channels.invite.js':
      /*!*******************************************************!*\
  !*** ./node_modules/slack/methods/channels.invite.js ***!
  \*******************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = channelsinvite;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction channelsinvite(params, callback) {\n  var ns = \'channels.invite\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/channels.invite.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/channels.join.js':
      /*!*****************************************************!*\
  !*** ./node_modules/slack/methods/channels.join.js ***!
  \*****************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = channelsjoin;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction channelsjoin(params, callback) {\n  var ns = \'channels.join\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/channels.join.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/channels.js':
      /*!************************************************!*\
  !*** ./node_modules/slack/methods/channels.js ***!
  \************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _channels = __webpack_require__(/*! ./channels.archive */ "./node_modules/slack/methods/channels.archive.js");\n\nvar _channels2 = _interopRequireDefault(_channels);\n\nvar _channels3 = __webpack_require__(/*! ./channels.create */ "./node_modules/slack/methods/channels.create.js");\n\nvar _channels4 = _interopRequireDefault(_channels3);\n\nvar _channels5 = __webpack_require__(/*! ./channels.history */ "./node_modules/slack/methods/channels.history.js");\n\nvar _channels6 = _interopRequireDefault(_channels5);\n\nvar _channels7 = __webpack_require__(/*! ./channels.info */ "./node_modules/slack/methods/channels.info.js");\n\nvar _channels8 = _interopRequireDefault(_channels7);\n\nvar _channels9 = __webpack_require__(/*! ./channels.invite */ "./node_modules/slack/methods/channels.invite.js");\n\nvar _channels10 = _interopRequireDefault(_channels9);\n\nvar _channels11 = __webpack_require__(/*! ./channels.join */ "./node_modules/slack/methods/channels.join.js");\n\nvar _channels12 = _interopRequireDefault(_channels11);\n\nvar _channels13 = __webpack_require__(/*! ./channels.kick */ "./node_modules/slack/methods/channels.kick.js");\n\nvar _channels14 = _interopRequireDefault(_channels13);\n\nvar _channels15 = __webpack_require__(/*! ./channels.leave */ "./node_modules/slack/methods/channels.leave.js");\n\nvar _channels16 = _interopRequireDefault(_channels15);\n\nvar _channels17 = __webpack_require__(/*! ./channels.list */ "./node_modules/slack/methods/channels.list.js");\n\nvar _channels18 = _interopRequireDefault(_channels17);\n\nvar _channels19 = __webpack_require__(/*! ./channels.mark */ "./node_modules/slack/methods/channels.mark.js");\n\nvar _channels20 = _interopRequireDefault(_channels19);\n\nvar _channels21 = __webpack_require__(/*! ./channels.rename */ "./node_modules/slack/methods/channels.rename.js");\n\nvar _channels22 = _interopRequireDefault(_channels21);\n\nvar _channels23 = __webpack_require__(/*! ./channels.setPurpose */ "./node_modules/slack/methods/channels.setPurpose.js");\n\nvar _channels24 = _interopRequireDefault(_channels23);\n\nvar _channels25 = __webpack_require__(/*! ./channels.setTopic */ "./node_modules/slack/methods/channels.setTopic.js");\n\nvar _channels26 = _interopRequireDefault(_channels25);\n\nvar _channels27 = __webpack_require__(/*! ./channels.unarchive */ "./node_modules/slack/methods/channels.unarchive.js");\n\nvar _channels28 = _interopRequireDefault(_channels27);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  archive: _channels2.default,\n  create: _channels4.default,\n  history: _channels6.default,\n  info: _channels8.default,\n  invite: _channels10.default,\n  join: _channels12.default,\n  kick: _channels14.default,\n  leave: _channels16.default,\n  list: _channels18.default,\n  mark: _channels20.default,\n  rename: _channels22.default,\n  setPurpose: _channels24.default,\n  setTopic: _channels26.default,\n  unarchive: _channels28.default\n};\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/channels.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/channels.kick.js':
      /*!*****************************************************!*\
  !*** ./node_modules/slack/methods/channels.kick.js ***!
  \*****************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = channelskick;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction channelskick(params, callback) {\n  var ns = \'channels.kick\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/channels.kick.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/channels.leave.js':
      /*!******************************************************!*\
  !*** ./node_modules/slack/methods/channels.leave.js ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = channelsleave;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction channelsleave(params, callback) {\n  var ns = \'channels.leave\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/channels.leave.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/channels.list.js':
      /*!*****************************************************!*\
  !*** ./node_modules/slack/methods/channels.list.js ***!
  \*****************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = channelslist;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction channelslist(params, callback) {\n  var ns = \'channels.list\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/channels.list.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/channels.mark.js':
      /*!*****************************************************!*\
  !*** ./node_modules/slack/methods/channels.mark.js ***!
  \*****************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = channelsmark;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction channelsmark(params, callback) {\n  var ns = \'channels.mark\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/channels.mark.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/channels.rename.js':
      /*!*******************************************************!*\
  !*** ./node_modules/slack/methods/channels.rename.js ***!
  \*******************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = channelsrename;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction channelsrename(params, callback) {\n  var ns = \'channels.rename\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/channels.rename.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/channels.setPurpose.js':
      /*!***********************************************************!*\
  !*** ./node_modules/slack/methods/channels.setPurpose.js ***!
  \***********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = channelssetPurpose;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction channelssetPurpose(params, callback) {\n  var ns = \'channels.setPurpose\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/channels.setPurpose.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/channels.setTopic.js':
      /*!*********************************************************!*\
  !*** ./node_modules/slack/methods/channels.setTopic.js ***!
  \*********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = channelssetTopic;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction channelssetTopic(params, callback) {\n  var ns = \'channels.setTopic\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/channels.setTopic.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/channels.unarchive.js':
      /*!**********************************************************!*\
  !*** ./node_modules/slack/methods/channels.unarchive.js ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = channelsunarchive;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction channelsunarchive(params, callback) {\n  var ns = \'channels.unarchive\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/channels.unarchive.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/chat.delete.js':
      /*!***************************************************!*\
  !*** ./node_modules/slack/methods/chat.delete.js ***!
  \***************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = chatdelete;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction chatdelete(params, callback) {\n  var ns = \'chat.delete\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/chat.delete.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/chat.js':
      /*!********************************************!*\
  !*** ./node_modules/slack/methods/chat.js ***!
  \********************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _chat = __webpack_require__(/*! ./chat.delete */ "./node_modules/slack/methods/chat.delete.js");\n\nvar _chat2 = _interopRequireDefault(_chat);\n\nvar _chat3 = __webpack_require__(/*! ./chat.postMessage */ "./node_modules/slack/methods/chat.postMessage.js");\n\nvar _chat4 = _interopRequireDefault(_chat3);\n\nvar _chat5 = __webpack_require__(/*! ./chat.update */ "./node_modules/slack/methods/chat.update.js");\n\nvar _chat6 = _interopRequireDefault(_chat5);\n\nvar _chat7 = __webpack_require__(/*! ./chat.meMessage */ "./node_modules/slack/methods/chat.meMessage.js");\n\nvar _chat8 = _interopRequireDefault(_chat7);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  postMessage: _chat4.default, delete: _chat2.default, update: _chat6.default, meMessage: _chat8.default\n};\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/chat.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/chat.meMessage.js':
      /*!******************************************************!*\
  !*** ./node_modules/slack/methods/chat.meMessage.js ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = chatmeMessage;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction chatmeMessage(params, callback) {\n  var ns = \'chat.meMessage\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/chat.meMessage.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/chat.postMessage.js':
      /*!********************************************************!*\
  !*** ./node_modules/slack/methods/chat.postMessage.js ***!
  \********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = chatpostMessage;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction chatpostMessage(params, callback) {\n  var ns = \'chat.postMessage\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/chat.postMessage.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/chat.update.js':
      /*!***************************************************!*\
  !*** ./node_modules/slack/methods/chat.update.js ***!
  \***************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = chatupdate;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction chatupdate(params, callback) {\n  var ns = \'chat.update\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/chat.update.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/dnd.endDnd.js':
      /*!**************************************************!*\
  !*** ./node_modules/slack/methods/dnd.endDnd.js ***!
  \**************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = dndendDnd;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction dndendDnd(params, callback) {\n  var ns = \'dnd.endDnd\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/dnd.endDnd.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/dnd.endSnooze.js':
      /*!*****************************************************!*\
  !*** ./node_modules/slack/methods/dnd.endSnooze.js ***!
  \*****************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = dndendSnooze;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction dndendSnooze(params, callback) {\n  var ns = \'dnd.endSnooze\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/dnd.endSnooze.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/dnd.info.js':
      /*!************************************************!*\
  !*** ./node_modules/slack/methods/dnd.info.js ***!
  \************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = dndinfo;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction dndinfo(params, callback) {\n  var ns = \'dnd.info\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/dnd.info.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/dnd.js':
      /*!*******************************************!*\
  !*** ./node_modules/slack/methods/dnd.js ***!
  \*******************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _dnd = __webpack_require__(/*! ./dnd.info */ "./node_modules/slack/methods/dnd.info.js");\n\nvar _dnd2 = _interopRequireDefault(_dnd);\n\nvar _dnd3 = __webpack_require__(/*! ./dnd.endDnd */ "./node_modules/slack/methods/dnd.endDnd.js");\n\nvar _dnd4 = _interopRequireDefault(_dnd3);\n\nvar _dnd5 = __webpack_require__(/*! ./dnd.endSnooze */ "./node_modules/slack/methods/dnd.endSnooze.js");\n\nvar _dnd6 = _interopRequireDefault(_dnd5);\n\nvar _dnd7 = __webpack_require__(/*! ./dnd.setSnooze */ "./node_modules/slack/methods/dnd.setSnooze.js");\n\nvar _dnd8 = _interopRequireDefault(_dnd7);\n\nvar _dnd9 = __webpack_require__(/*! ./dnd.teamInfo */ "./node_modules/slack/methods/dnd.teamInfo.js");\n\nvar _dnd10 = _interopRequireDefault(_dnd9);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  info: _dnd2.default, endDnd: _dnd4.default, endSnooze: _dnd6.default, setSnooze: _dnd8.default, teamInfo: _dnd10.default\n};\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/dnd.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/dnd.setSnooze.js':
      /*!*****************************************************!*\
  !*** ./node_modules/slack/methods/dnd.setSnooze.js ***!
  \*****************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = dndsetSnooze;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction dndsetSnooze(params, callback) {\n  var ns = \'dnd.setSnooze\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/dnd.setSnooze.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/dnd.teamInfo.js':
      /*!****************************************************!*\
  !*** ./node_modules/slack/methods/dnd.teamInfo.js ***!
  \****************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = dndteamInfo;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction dndteamInfo(params, callback) {\n  var ns = \'dnd.teamInfo\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/dnd.teamInfo.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/emoji.list.js':
      /*!**************************************************!*\
  !*** ./node_modules/slack/methods/emoji.list.js ***!
  \**************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = emojilist;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction emojilist(params, callback) {\n  var ns = \'emoji.list\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/emoji.list.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/files.comments.add.js':
      /*!**********************************************************!*\
  !*** ./node_modules/slack/methods/files.comments.add.js ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = filescommentsadd;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction filescommentsadd(params, callback) {\n  var ns = \'files.comments.add\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/files.comments.add.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/files.comments.delete.js':
      /*!*************************************************************!*\
  !*** ./node_modules/slack/methods/files.comments.delete.js ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = filescommentsdelete;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction filescommentsdelete(params, callback) {\n  var ns = \'files.comments.delete\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/files.comments.delete.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/files.comments.edit.js':
      /*!***********************************************************!*\
  !*** ./node_modules/slack/methods/files.comments.edit.js ***!
  \***********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = filescommentsedit;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction filescommentsedit(params, callback) {\n  var ns = \'files.comments.edit\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/files.comments.edit.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/files.delete.js':
      /*!****************************************************!*\
  !*** ./node_modules/slack/methods/files.delete.js ***!
  \****************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = filesdelete;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction filesdelete(params, callback) {\n  var ns = \'files.delete\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/files.delete.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/files.info.js':
      /*!**************************************************!*\
  !*** ./node_modules/slack/methods/files.info.js ***!
  \**************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = filesinfo;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction filesinfo(params, callback) {\n  var ns = \'files.info\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/files.info.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/files.js':
      /*!*********************************************!*\
  !*** ./node_modules/slack/methods/files.js ***!
  \*********************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _files = __webpack_require__(/*! ./files.delete */ "./node_modules/slack/methods/files.delete.js");\n\nvar _files2 = _interopRequireDefault(_files);\n\nvar _files3 = __webpack_require__(/*! ./files.info */ "./node_modules/slack/methods/files.info.js");\n\nvar _files4 = _interopRequireDefault(_files3);\n\nvar _files5 = __webpack_require__(/*! ./files.list */ "./node_modules/slack/methods/files.list.js");\n\nvar _files6 = _interopRequireDefault(_files5);\n\nvar _files7 = __webpack_require__(/*! ./files.upload */ "./node_modules/slack/methods/files.upload.js");\n\nvar _files8 = _interopRequireDefault(_files7);\n\nvar _filesComments = __webpack_require__(/*! ./files.comments.add */ "./node_modules/slack/methods/files.comments.add.js");\n\nvar _filesComments2 = _interopRequireDefault(_filesComments);\n\nvar _filesComments3 = __webpack_require__(/*! ./files.comments.delete */ "./node_modules/slack/methods/files.comments.delete.js");\n\nvar _filesComments4 = _interopRequireDefault(_filesComments3);\n\nvar _filesComments5 = __webpack_require__(/*! ./files.comments.edit */ "./node_modules/slack/methods/files.comments.edit.js");\n\nvar _filesComments6 = _interopRequireDefault(_filesComments5);\n\nvar _files9 = __webpack_require__(/*! ./files.revokePublicURL */ "./node_modules/slack/methods/files.revokePublicURL.js");\n\nvar _files10 = _interopRequireDefault(_files9);\n\nvar _files11 = __webpack_require__(/*! ./files.sharedPublicURL */ "./node_modules/slack/methods/files.sharedPublicURL.js");\n\nvar _files12 = _interopRequireDefault(_files11);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  delete: _files2.default,\n  info: _files4.default,\n  list: _files6.default,\n  upload: _files8.default,\n  comments: {\n    add: _filesComments2.default,\n    delete: _filesComments4.default,\n    edit: _filesComments6.default\n  },\n  revokePublicURL: _files10.default,\n  sharedPublicURL: _files12.default\n};\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/files.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/files.list.js':
      /*!**************************************************!*\
  !*** ./node_modules/slack/methods/files.list.js ***!
  \**************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = fileslist;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction fileslist(params, callback) {\n  var ns = \'files.list\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/files.list.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/files.revokePublicURL.js':
      /*!*************************************************************!*\
  !*** ./node_modules/slack/methods/files.revokePublicURL.js ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = filesrevokePublicURL;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction filesrevokePublicURL(params, callback) {\n  var ns = \'files.revokePublicURL\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/files.revokePublicURL.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/files.sharedPublicURL.js':
      /*!*************************************************************!*\
  !*** ./node_modules/slack/methods/files.sharedPublicURL.js ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = filessharedPublicURL;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction filessharedPublicURL(params, callback) {\n  var ns = \'files.sharedPublicURL\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/files.sharedPublicURL.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/files.upload.js':
      /*!****************************************************!*\
  !*** ./node_modules/slack/methods/files.upload.js ***!
  \****************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = filesupload;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction filesupload(params, callback) {\n  var ns = \'files.upload\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/files.upload.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/groups.archive.js':
      /*!******************************************************!*\
  !*** ./node_modules/slack/methods/groups.archive.js ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = groupsarchive;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction groupsarchive(params, callback) {\n  var ns = \'groups.archive\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/groups.archive.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/groups.close.js':
      /*!****************************************************!*\
  !*** ./node_modules/slack/methods/groups.close.js ***!
  \****************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = groupsclose;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction groupsclose(params, callback) {\n  var ns = \'groups.close\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/groups.close.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/groups.create.js':
      /*!*****************************************************!*\
  !*** ./node_modules/slack/methods/groups.create.js ***!
  \*****************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = groupscreate;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction groupscreate(params, callback) {\n  var ns = \'groups.create\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/groups.create.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/groups.createChild.js':
      /*!**********************************************************!*\
  !*** ./node_modules/slack/methods/groups.createChild.js ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = groupscreateChild;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction groupscreateChild(params, callback) {\n  var ns = \'groups.createChild\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/groups.createChild.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/groups.history.js':
      /*!******************************************************!*\
  !*** ./node_modules/slack/methods/groups.history.js ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = groupshistory;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction groupshistory(params, callback) {\n  var ns = \'groups.history\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/groups.history.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/groups.info.js':
      /*!***************************************************!*\
  !*** ./node_modules/slack/methods/groups.info.js ***!
  \***************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = groupsinfo;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction groupsinfo(params, callback) {\n  var ns = \'groups.info\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/groups.info.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/groups.invite.js':
      /*!*****************************************************!*\
  !*** ./node_modules/slack/methods/groups.invite.js ***!
  \*****************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = groupsinvite;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction groupsinvite(params, callback) {\n  var ns = \'groups.invite\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/groups.invite.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/groups.js':
      /*!**********************************************!*\
  !*** ./node_modules/slack/methods/groups.js ***!
  \**********************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _groups = __webpack_require__(/*! ./groups.archive */ "./node_modules/slack/methods/groups.archive.js");\n\nvar _groups2 = _interopRequireDefault(_groups);\n\nvar _groups3 = __webpack_require__(/*! ./groups.close */ "./node_modules/slack/methods/groups.close.js");\n\nvar _groups4 = _interopRequireDefault(_groups3);\n\nvar _groups5 = __webpack_require__(/*! ./groups.create */ "./node_modules/slack/methods/groups.create.js");\n\nvar _groups6 = _interopRequireDefault(_groups5);\n\nvar _groups7 = __webpack_require__(/*! ./groups.createChild */ "./node_modules/slack/methods/groups.createChild.js");\n\nvar _groups8 = _interopRequireDefault(_groups7);\n\nvar _groups9 = __webpack_require__(/*! ./groups.history */ "./node_modules/slack/methods/groups.history.js");\n\nvar _groups10 = _interopRequireDefault(_groups9);\n\nvar _groups11 = __webpack_require__(/*! ./groups.info */ "./node_modules/slack/methods/groups.info.js");\n\nvar _groups12 = _interopRequireDefault(_groups11);\n\nvar _groups13 = __webpack_require__(/*! ./groups.invite */ "./node_modules/slack/methods/groups.invite.js");\n\nvar _groups14 = _interopRequireDefault(_groups13);\n\nvar _groups15 = __webpack_require__(/*! ./groups.kick */ "./node_modules/slack/methods/groups.kick.js");\n\nvar _groups16 = _interopRequireDefault(_groups15);\n\nvar _groups17 = __webpack_require__(/*! ./groups.leave */ "./node_modules/slack/methods/groups.leave.js");\n\nvar _groups18 = _interopRequireDefault(_groups17);\n\nvar _groups19 = __webpack_require__(/*! ./groups.list */ "./node_modules/slack/methods/groups.list.js");\n\nvar _groups20 = _interopRequireDefault(_groups19);\n\nvar _groups21 = __webpack_require__(/*! ./groups.mark */ "./node_modules/slack/methods/groups.mark.js");\n\nvar _groups22 = _interopRequireDefault(_groups21);\n\nvar _groups23 = __webpack_require__(/*! ./groups.open */ "./node_modules/slack/methods/groups.open.js");\n\nvar _groups24 = _interopRequireDefault(_groups23);\n\nvar _groups25 = __webpack_require__(/*! ./groups.rename */ "./node_modules/slack/methods/groups.rename.js");\n\nvar _groups26 = _interopRequireDefault(_groups25);\n\nvar _groups27 = __webpack_require__(/*! ./groups.setPurpose */ "./node_modules/slack/methods/groups.setPurpose.js");\n\nvar _groups28 = _interopRequireDefault(_groups27);\n\nvar _groups29 = __webpack_require__(/*! ./groups.setTopic */ "./node_modules/slack/methods/groups.setTopic.js");\n\nvar _groups30 = _interopRequireDefault(_groups29);\n\nvar _groups31 = __webpack_require__(/*! ./groups.unarchive */ "./node_modules/slack/methods/groups.unarchive.js");\n\nvar _groups32 = _interopRequireDefault(_groups31);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  archive: _groups2.default,\n  close: _groups4.default,\n  create: _groups6.default,\n  createChild: _groups8.default,\n  history: _groups10.default,\n  info: _groups12.default,\n  invite: _groups14.default,\n  kick: _groups16.default,\n  leave: _groups18.default,\n  list: _groups20.default,\n  mark: _groups22.default,\n  open: _groups24.default,\n  rename: _groups26.default,\n  setPurpose: _groups28.default,\n  setTopic: _groups30.default,\n  unarchive: _groups32.default\n};\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/groups.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/groups.kick.js':
      /*!***************************************************!*\
  !*** ./node_modules/slack/methods/groups.kick.js ***!
  \***************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = groupskick;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction groupskick(params, callback) {\n  var ns = \'groups.kick\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/groups.kick.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/groups.leave.js':
      /*!****************************************************!*\
  !*** ./node_modules/slack/methods/groups.leave.js ***!
  \****************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = groupsleave;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction groupsleave(params, callback) {\n  var ns = \'groups.leave\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/groups.leave.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/groups.list.js':
      /*!***************************************************!*\
  !*** ./node_modules/slack/methods/groups.list.js ***!
  \***************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = groupslist;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction groupslist(params, callback) {\n  var ns = \'groups.list\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/groups.list.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/groups.mark.js':
      /*!***************************************************!*\
  !*** ./node_modules/slack/methods/groups.mark.js ***!
  \***************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = groupsmark;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction groupsmark(params, callback) {\n  var ns = \'groups.mark\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/groups.mark.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/groups.open.js':
      /*!***************************************************!*\
  !*** ./node_modules/slack/methods/groups.open.js ***!
  \***************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = groupsopen;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction groupsopen(params, callback) {\n  var ns = \'groups.open\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/groups.open.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/groups.rename.js':
      /*!*****************************************************!*\
  !*** ./node_modules/slack/methods/groups.rename.js ***!
  \*****************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = groupsrename;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction groupsrename(params, callback) {\n  var ns = \'groups.rename\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/groups.rename.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/groups.setPurpose.js':
      /*!*********************************************************!*\
  !*** ./node_modules/slack/methods/groups.setPurpose.js ***!
  \*********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = groupssetPurpose;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction groupssetPurpose(params, callback) {\n  var ns = \'groups.setPurpose\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/groups.setPurpose.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/groups.setTopic.js':
      /*!*******************************************************!*\
  !*** ./node_modules/slack/methods/groups.setTopic.js ***!
  \*******************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = groupssetTopic;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction groupssetTopic(params, callback) {\n  var ns = \'groups.setTopic\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/groups.setTopic.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/groups.unarchive.js':
      /*!********************************************************!*\
  !*** ./node_modules/slack/methods/groups.unarchive.js ***!
  \********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = groupsunarchive;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction groupsunarchive(params, callback) {\n  var ns = \'groups.unarchive\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/groups.unarchive.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/im.close.js':
      /*!************************************************!*\
  !*** ./node_modules/slack/methods/im.close.js ***!
  \************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = imclose;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction imclose(params, callback) {\n  var ns = \'im.close\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/im.close.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/im.history.js':
      /*!**************************************************!*\
  !*** ./node_modules/slack/methods/im.history.js ***!
  \**************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = imhistory;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction imhistory(params, callback) {\n  var ns = \'im.history\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/im.history.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/im.js':
      /*!******************************************!*\
  !*** ./node_modules/slack/methods/im.js ***!
  \******************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _im = __webpack_require__(/*! ./im.close */ "./node_modules/slack/methods/im.close.js");\n\nvar _im2 = _interopRequireDefault(_im);\n\nvar _im3 = __webpack_require__(/*! ./im.history */ "./node_modules/slack/methods/im.history.js");\n\nvar _im4 = _interopRequireDefault(_im3);\n\nvar _im5 = __webpack_require__(/*! ./im.list */ "./node_modules/slack/methods/im.list.js");\n\nvar _im6 = _interopRequireDefault(_im5);\n\nvar _im7 = __webpack_require__(/*! ./im.mark */ "./node_modules/slack/methods/im.mark.js");\n\nvar _im8 = _interopRequireDefault(_im7);\n\nvar _im9 = __webpack_require__(/*! ./im.open */ "./node_modules/slack/methods/im.open.js");\n\nvar _im10 = _interopRequireDefault(_im9);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  close: _im2.default, history: _im4.default, list: _im6.default, mark: _im8.default, open: _im10.default\n};\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/im.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/im.list.js':
      /*!***********************************************!*\
  !*** ./node_modules/slack/methods/im.list.js ***!
  \***********************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = imlist;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction imlist(params, callback) {\n  var ns = \'im.list\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/im.list.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/im.mark.js':
      /*!***********************************************!*\
  !*** ./node_modules/slack/methods/im.mark.js ***!
  \***********************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = immark;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction immark(params, callback) {\n  var ns = \'im.mark\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/im.mark.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/im.open.js':
      /*!***********************************************!*\
  !*** ./node_modules/slack/methods/im.open.js ***!
  \***********************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = imopen;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction imopen(params, callback) {\n  var ns = \'im.open\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/im.open.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/index.js':
      /*!*********************************************!*\
  !*** ./node_modules/slack/methods/index.js ***!
  \*********************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _api = __webpack_require__(/*! ./api.test */ "./node_modules/slack/methods/api.test.js");\n\nvar _api2 = _interopRequireDefault(_api);\n\nvar _api3 = __webpack_require__(/*! ./api.client */ "./node_modules/slack/methods/api.client.js");\n\nvar _api4 = _interopRequireDefault(_api3);\n\nvar _bots = __webpack_require__(/*! ./bots */ "./node_modules/slack/methods/bots.js");\n\nvar _bots2 = _interopRequireDefault(_bots);\n\nvar _auth = __webpack_require__(/*! ./auth.test */ "./node_modules/slack/methods/auth.test.js");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nvar _channels = __webpack_require__(/*! ./channels */ "./node_modules/slack/methods/channels.js");\n\nvar _channels2 = _interopRequireDefault(_channels);\n\nvar _chat = __webpack_require__(/*! ./chat */ "./node_modules/slack/methods/chat.js");\n\nvar _chat2 = _interopRequireDefault(_chat);\n\nvar _dnd = __webpack_require__(/*! ./dnd */ "./node_modules/slack/methods/dnd.js");\n\nvar _dnd2 = _interopRequireDefault(_dnd);\n\nvar _emoji = __webpack_require__(/*! ./emoji.list */ "./node_modules/slack/methods/emoji.list.js");\n\nvar _emoji2 = _interopRequireDefault(_emoji);\n\nvar _files = __webpack_require__(/*! ./files */ "./node_modules/slack/methods/files.js");\n\nvar _files2 = _interopRequireDefault(_files);\n\nvar _groups = __webpack_require__(/*! ./groups */ "./node_modules/slack/methods/groups.js");\n\nvar _groups2 = _interopRequireDefault(_groups);\n\nvar _im = __webpack_require__(/*! ./im */ "./node_modules/slack/methods/im.js");\n\nvar _im2 = _interopRequireDefault(_im);\n\nvar _mpim = __webpack_require__(/*! ./mpim */ "./node_modules/slack/methods/mpim.js");\n\nvar _mpim2 = _interopRequireDefault(_mpim);\n\nvar _oauth = __webpack_require__(/*! ./oauth.access */ "./node_modules/slack/methods/oauth.access.js");\n\nvar _oauth2 = _interopRequireDefault(_oauth);\n\nvar _reactions = __webpack_require__(/*! ./reactions */ "./node_modules/slack/methods/reactions.js");\n\nvar _reactions2 = _interopRequireDefault(_reactions);\n\nvar _reminders = __webpack_require__(/*! ./reminders */ "./node_modules/slack/methods/reminders.js");\n\nvar _reminders2 = _interopRequireDefault(_reminders);\n\nvar _pins = __webpack_require__(/*! ./pins */ "./node_modules/slack/methods/pins.js");\n\nvar _pins2 = _interopRequireDefault(_pins);\n\nvar _rtm = __webpack_require__(/*! ./rtm.client */ "./node_modules/slack/methods/rtm.client-browser.js");\n\nvar _rtm2 = _interopRequireDefault(_rtm);\n\nvar _rtm3 = __webpack_require__(/*! ./rtm.start */ "./node_modules/slack/methods/rtm.start.js");\n\nvar _rtm4 = _interopRequireDefault(_rtm3);\n\nvar _search = __webpack_require__(/*! ./search */ "./node_modules/slack/methods/search.js");\n\nvar _search2 = _interopRequireDefault(_search);\n\nvar _stars = __webpack_require__(/*! ./stars */ "./node_modules/slack/methods/stars.js");\n\nvar _stars2 = _interopRequireDefault(_stars);\n\nvar _team = __webpack_require__(/*! ./team */ "./node_modules/slack/methods/team.js");\n\nvar _team2 = _interopRequireDefault(_team);\n\nvar _usergroups = __webpack_require__(/*! ./usergroups */ "./node_modules/slack/methods/usergroups.js");\n\nvar _usergroups2 = _interopRequireDefault(_usergroups);\n\nvar _users = __webpack_require__(/*! ./users */ "./node_modules/slack/methods/users.js");\n\nvar _users2 = _interopRequireDefault(_users);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar describe = \'\\n  slack\\n    api.client(token)\\n    api.test(params, (err, data)=>)\\n    auth.test(token, (err, data)=>)\\n    bots.info\\n    channels.archive({token, channel}, (err, data)=>)\\n    channels.create({token, name}, (err, data)=>)\\n    channels.history({token, channel}, (err, data)=>)\\n    channels.info\\n    channels.invite\\n    channels.join\\n    channels.kick\\n    channels.leave\\n    channels.list({token, exclude_archived}, (err, data)=>)\\n    channels.mark\\n    channels.rename\\n    channels.setPurpose\\n    channels.setTopic\\n    channels.unarchive\\n    chat.delete\\n    chat.postMessage({token, text, channel}, (err, data)=>)\\n    chat.update\\n    emoji.list\\n    files.delete\\n    files.info\\n    files.list\\n    files.upload\\n    groups.archive\\n    groups.close\\n    groups.create\\n    groups.createChild\\n    groups.history\\n    groups.info\\n    groups.invite\\n    groups.kick\\n    groups.leave\\n    groups.list\\n    groups.mark\\n    groups.open\\n    groups.rename\\n    groups.setPurpose\\n    groups.setTopic\\n    groups.unarchive\\n    im.close\\n    im.history\\n    im.list\\n    im.mark\\n    im.open\\n    mpim.close\\n    mpim.history\\n    mpim.list\\n    mpim.mark\\n    mpim.open\\n    oauth.access({client_id, client_secret, code}, (err, data)=>)\\n    pins.add\\n    pins.list\\n    pins.remove\\n    reactions.add\\n    reactions.get\\n    reactions.list\\n    reactions.remove\\n    reminders.add\\n    reminders.complete\\n    reminders.delete\\n    reminders.info\\n    reminders.list\\n    rtm.client()\\n    rtm.start({token}, (err, data)=>)\\n    search.all\\n    search.files\\n    search.messages\\n    stars.add\\n    stars.list\\n    stars.remove\\n    team.acccessLogs\\n    team.billableInfo\\n    team.info(token, (err, data)=>)\\n    team.integrationLogs\\n    team.profile.get\\n    usergroups.create\\n    usergroups.disable\\n    usergroups.enable\\n    usergroups.list\\n    usergroups.update\\n    usergroups.users.list\\n    usergroups.users.update\\n    users.getPresence\\n    users.identity\\n    users.info\\n    users.list(token, (err, data)=>)\\n    users.setActive\\n    users.setPresence\\n\';\n\nexports.default = {\n  describe: describe,\n  api: { test: _api2.default, client: _api4.default },\n  auth: { test: _auth2.default },\n  bots: _bots2.default,\n  channels: _channels2.default,\n  chat: _chat2.default,\n  dnd: _dnd2.default,\n  emoji: { list: _emoji2.default },\n  files: _files2.default,\n  groups: _groups2.default,\n  im: _im2.default,\n  mpim: _mpim2.default,\n  oauth: { access: _oauth2.default },\n  reactions: _reactions2.default,\n  reminders: _reminders2.default,\n  pins: _pins2.default,\n  rtm: { client: _rtm2.default, start: _rtm4.default },\n  search: _search2.default,\n  stars: _stars2.default,\n  team: _team2.default,\n  usergroups: _usergroups2.default,\n  users: _users2.default\n};\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/index.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/mpim.close.js':
      /*!**************************************************!*\
  !*** ./node_modules/slack/methods/mpim.close.js ***!
  \**************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = mpimclose;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction mpimclose(params, callback) {\n  var ns = \'mpim.close\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/mpim.close.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/mpim.history.js':
      /*!****************************************************!*\
  !*** ./node_modules/slack/methods/mpim.history.js ***!
  \****************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = mpimhistory;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction mpimhistory(params, callback) {\n  var ns = \'mpim.history\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/mpim.history.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/mpim.js':
      /*!********************************************!*\
  !*** ./node_modules/slack/methods/mpim.js ***!
  \********************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _mpim = __webpack_require__(/*! ./mpim.close */ "./node_modules/slack/methods/mpim.close.js");\n\nvar _mpim2 = _interopRequireDefault(_mpim);\n\nvar _mpim3 = __webpack_require__(/*! ./mpim.history */ "./node_modules/slack/methods/mpim.history.js");\n\nvar _mpim4 = _interopRequireDefault(_mpim3);\n\nvar _mpim5 = __webpack_require__(/*! ./mpim.list */ "./node_modules/slack/methods/mpim.list.js");\n\nvar _mpim6 = _interopRequireDefault(_mpim5);\n\nvar _mpim7 = __webpack_require__(/*! ./mpim.mark */ "./node_modules/slack/methods/mpim.mark.js");\n\nvar _mpim8 = _interopRequireDefault(_mpim7);\n\nvar _mpim9 = __webpack_require__(/*! ./mpim.open */ "./node_modules/slack/methods/mpim.open.js");\n\nvar _mpim10 = _interopRequireDefault(_mpim9);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  close: _mpim2.default,\n  history: _mpim4.default,\n  list: _mpim6.default,\n  mark: _mpim8.default,\n  open: _mpim10.default\n};\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/mpim.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/mpim.list.js':
      /*!*************************************************!*\
  !*** ./node_modules/slack/methods/mpim.list.js ***!
  \*************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = mpimlist;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction mpimlist(params, callback) {\n  var ns = \'mpim.list\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/mpim.list.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/mpim.mark.js':
      /*!*************************************************!*\
  !*** ./node_modules/slack/methods/mpim.mark.js ***!
  \*************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = mpimmark;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction mpimmark(params, callback) {\n  var ns = \'mpim.mark\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/mpim.mark.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/mpim.open.js':
      /*!*************************************************!*\
  !*** ./node_modules/slack/methods/mpim.open.js ***!
  \*************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = mpimopen;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction mpimopen(params, callback) {\n  var ns = \'mpim.open\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/mpim.open.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/oauth.access.js':
      /*!****************************************************!*\
  !*** ./node_modules/slack/methods/oauth.access.js ***!
  \****************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = oauthaccess;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction oauthaccess(params, callback) {\n  var ns = \'oauth.access\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/oauth.access.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/pins.add.js':
      /*!************************************************!*\
  !*** ./node_modules/slack/methods/pins.add.js ***!
  \************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = pinsadd;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction pinsadd(params, callback) {\n  var ns = \'pins.add\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/pins.add.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/pins.js':
      /*!********************************************!*\
  !*** ./node_modules/slack/methods/pins.js ***!
  \********************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _pins = __webpack_require__(/*! ./pins.add */ "./node_modules/slack/methods/pins.add.js");\n\nvar _pins2 = _interopRequireDefault(_pins);\n\nvar _pins3 = __webpack_require__(/*! ./pins.list */ "./node_modules/slack/methods/pins.list.js");\n\nvar _pins4 = _interopRequireDefault(_pins3);\n\nvar _pins5 = __webpack_require__(/*! ./pins.remove */ "./node_modules/slack/methods/pins.remove.js");\n\nvar _pins6 = _interopRequireDefault(_pins5);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  add: _pins2.default, list: _pins4.default, remove: _pins6.default\n};\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/pins.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/pins.list.js':
      /*!*************************************************!*\
  !*** ./node_modules/slack/methods/pins.list.js ***!
  \*************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = pinslist;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction pinslist(params, callback) {\n  var ns = \'pins.list\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/pins.list.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/pins.remove.js':
      /*!***************************************************!*\
  !*** ./node_modules/slack/methods/pins.remove.js ***!
  \***************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = pinsremove;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction pinsremove(params, callback) {\n  var ns = \'pins.remove\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/pins.remove.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/reactions.add.js':
      /*!*****************************************************!*\
  !*** ./node_modules/slack/methods/reactions.add.js ***!
  \*****************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = reactionsadd;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction reactionsadd(params, callback) {\n  var ns = \'reactions.add\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/reactions.add.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/reactions.get.js':
      /*!*****************************************************!*\
  !*** ./node_modules/slack/methods/reactions.get.js ***!
  \*****************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = reactionsget;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction reactionsget(params, callback) {\n  var ns = \'reactions.get\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/reactions.get.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/reactions.js':
      /*!*************************************************!*\
  !*** ./node_modules/slack/methods/reactions.js ***!
  \*************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _reactions = __webpack_require__(/*! ./reactions.add */ "./node_modules/slack/methods/reactions.add.js");\n\nvar _reactions2 = _interopRequireDefault(_reactions);\n\nvar _reactions3 = __webpack_require__(/*! ./reactions.get */ "./node_modules/slack/methods/reactions.get.js");\n\nvar _reactions4 = _interopRequireDefault(_reactions3);\n\nvar _reactions5 = __webpack_require__(/*! ./reactions.list */ "./node_modules/slack/methods/reactions.list.js");\n\nvar _reactions6 = _interopRequireDefault(_reactions5);\n\nvar _reactions7 = __webpack_require__(/*! ./reactions.remove */ "./node_modules/slack/methods/reactions.remove.js");\n\nvar _reactions8 = _interopRequireDefault(_reactions7);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  add: _reactions2.default, get: _reactions4.default, list: _reactions6.default, remove: _reactions8.default\n};\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/reactions.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/reactions.list.js':
      /*!******************************************************!*\
  !*** ./node_modules/slack/methods/reactions.list.js ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = reactionslist;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction reactionslist(params, callback) {\n  var ns = \'reactions.list\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/reactions.list.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/reactions.remove.js':
      /*!********************************************************!*\
  !*** ./node_modules/slack/methods/reactions.remove.js ***!
  \********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = reactionsremove;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction reactionsremove(params, callback) {\n  var ns = \'reactions.remove\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/reactions.remove.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/reminders.add.js':
      /*!*****************************************************!*\
  !*** ./node_modules/slack/methods/reminders.add.js ***!
  \*****************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = remindersadd;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction remindersadd(params, callback) {\n  var ns = \'reminders.add\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/reminders.add.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/reminders.complete.js':
      /*!**********************************************************!*\
  !*** ./node_modules/slack/methods/reminders.complete.js ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = reminderscomplete;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction reminderscomplete(params, callback) {\n  var ns = \'reminders.complete\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/reminders.complete.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/reminders.delete.js':
      /*!********************************************************!*\
  !*** ./node_modules/slack/methods/reminders.delete.js ***!
  \********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = remindersdelete;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction remindersdelete(params, callback) {\n  var ns = \'reminders.delete\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/reminders.delete.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/reminders.info.js':
      /*!******************************************************!*\
  !*** ./node_modules/slack/methods/reminders.info.js ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = remindersinfo;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction remindersinfo(params, callback) {\n  var ns = \'reminders.info\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/reminders.info.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/reminders.js':
      /*!*************************************************!*\
  !*** ./node_modules/slack/methods/reminders.js ***!
  \*************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _reminders = __webpack_require__(/*! ./reminders.add */ "./node_modules/slack/methods/reminders.add.js");\n\nvar _reminders2 = _interopRequireDefault(_reminders);\n\nvar _reminders3 = __webpack_require__(/*! ./reminders.complete */ "./node_modules/slack/methods/reminders.complete.js");\n\nvar _reminders4 = _interopRequireDefault(_reminders3);\n\nvar _reminders5 = __webpack_require__(/*! ./reminders.delete */ "./node_modules/slack/methods/reminders.delete.js");\n\nvar _reminders6 = _interopRequireDefault(_reminders5);\n\nvar _reminders7 = __webpack_require__(/*! ./reminders.info */ "./node_modules/slack/methods/reminders.info.js");\n\nvar _reminders8 = _interopRequireDefault(_reminders7);\n\nvar _reminders9 = __webpack_require__(/*! ./reminders.list */ "./node_modules/slack/methods/reminders.list.js");\n\nvar _reminders10 = _interopRequireDefault(_reminders9);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  add: _reminders2.default, complete: _reminders4.default, delete: _reminders6.default, info: _reminders8.default, list: _reminders10.default\n};\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/reminders.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/reminders.list.js':
      /*!******************************************************!*\
  !*** ./node_modules/slack/methods/reminders.list.js ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = reminderslist;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction reminderslist(params, callback) {\n  var ns = \'reminders.list\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/reminders.list.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/rtm.client-browser.js':
      /*!**********************************************************!*\
  !*** ./node_modules/slack/methods/rtm.client-browser.js ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          "\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = client;\n\nvar _rtm = __webpack_require__(/*! ./rtm.start */ \"./node_modules/slack/methods/rtm.start.js\");\n\nvar _rtm2 = _interopRequireDefault(_rtm);\n\nvar _rtm3 = __webpack_require__(/*! ./rtm.events */ \"./node_modules/slack/methods/rtm.events.js\");\n\nvar _rtm4 = _interopRequireDefault(_rtm3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// socket factory\nfunction client() {\n\n  // build a new bot every time\n  var bot = {\n    handlers: {\n      started: []\n    }\n  };\n\n  // add undocumented ping event\n  _rtm4.default.push('pong');\n\n  // generate event handler registration methods\n  _rtm4.default.forEach(function (e) {\n    bot.handlers[e] = [];\n    bot[e] = function (handler) {\n      bot.handlers[e].push(handler);\n    };\n  });\n\n  bot.started = function (handler) {\n    bot.handlers['started'].push(handler);\n  };\n\n  // kicks up a web socket connection\n  bot.listen = function botListen(params, callback) {\n    (0, _rtm2.default)(params, function (err, data) {\n      if (err) {\n        if (callback) callback(err);else throw err;\n      } else {\n        // grab a handle on the socket\n        bot.ws = new WebSocket(data.url);\n        // delegate everything\n        bot.ws.onmessage = function message(e) {\n          var json = JSON.parse(e.data);\n          bot.handlers[json.type].forEach(function (m) {\n            return m.call({}, json);\n          });\n        };\n        // call started callbacks\n        bot.handlers['started'].forEach(function (m) {\n          return m.call({}, data);\n        });\n        if (callback) callback(null, data);\n      }\n    });\n  };\n\n  // closes the socket\n  bot.close = function botClose() {\n    bot.ws.close();\n  };\n\n  //////////\n  return bot;\n}\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/rtm.client-browser.js?"
        );

        /***/
      },

    /***/ './node_modules/slack/methods/rtm.events.js':
      /*!**************************************************!*\
  !*** ./node_modules/slack/methods/rtm.events.js ***!
  \**************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          "\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n// generated using ./scripts/generate-all\nvar events = ['accounts_changed', 'bot_added', 'bot_changed', 'channel_archive', 'channel_created', 'channel_deleted', 'channel_history_changed', 'channel_joined', 'channel_left', 'channel_marked', 'channel_rename', 'channel_unarchive', 'commands_changed', 'dnd_updated', 'dnd_updated_user', 'email_domain_changed', 'emoji_changed', 'file_change', 'file_comment_added', 'file_comment_deleted', 'file_comment_edited', 'file_created', 'file_deleted', 'file_public', 'file_shared', 'file_unshared', 'group_archive', 'group_close', 'group_history_changed', 'group_joined', 'group_left', 'group_marked', 'group_open', 'group_rename', 'group_unarchive', 'hello', 'im_close', 'im_created', 'im_history_changed', 'im_marked', 'im_open', 'manual_presence_change', 'message', 'message.channels', 'message.groups', 'message.im', 'message.mpim', 'pin_added', 'pin_removed', 'pong', 'pref_change', 'presence_change', 'reaction_added', 'reaction_removed', 'reconnect_url', 'star_added', 'star_removed', 'subteam_created', 'subteam_self_added', 'subteam_self_removed', 'subteam_updated', 'team_domain_change', 'team_join', 'team_migration_started', 'team_plan_change', 'team_pref_change', 'team_profile_change', 'team_profile_delete', 'team_profile_reorder', 'team_rename', 'url_verification', 'user_change', 'user_typing'];\n\nexports.default = events;\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/rtm.events.js?"
        );

        /***/
      },

    /***/ './node_modules/slack/methods/rtm.start.js':
      /*!*************************************************!*\
  !*** ./node_modules/slack/methods/rtm.start.js ***!
  \*************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = rtmstart;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction rtmstart(params, callback) {\n  var ns = \'rtm.start\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/rtm.start.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/search.all.js':
      /*!**************************************************!*\
  !*** ./node_modules/slack/methods/search.all.js ***!
  \**************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = searchall;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction searchall(params, callback) {\n  var ns = \'search.all\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/search.all.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/search.files.js':
      /*!****************************************************!*\
  !*** ./node_modules/slack/methods/search.files.js ***!
  \****************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = searchfiles;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction searchfiles(params, callback) {\n  var ns = \'search.files\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/search.files.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/search.js':
      /*!**********************************************!*\
  !*** ./node_modules/slack/methods/search.js ***!
  \**********************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _search = __webpack_require__(/*! ./search.all */ "./node_modules/slack/methods/search.all.js");\n\nvar _search2 = _interopRequireDefault(_search);\n\nvar _search3 = __webpack_require__(/*! ./search.files */ "./node_modules/slack/methods/search.files.js");\n\nvar _search4 = _interopRequireDefault(_search3);\n\nvar _search5 = __webpack_require__(/*! ./search.messages */ "./node_modules/slack/methods/search.messages.js");\n\nvar _search6 = _interopRequireDefault(_search5);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  all: _search2.default, files: _search4.default, messages: _search6.default\n};\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/search.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/search.messages.js':
      /*!*******************************************************!*\
  !*** ./node_modules/slack/methods/search.messages.js ***!
  \*******************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = searchmessages;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction searchmessages(params, callback) {\n  var ns = \'search.messages\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/search.messages.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/stars.add.js':
      /*!*************************************************!*\
  !*** ./node_modules/slack/methods/stars.add.js ***!
  \*************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = starsadd;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction starsadd(params, callback) {\n  var ns = \'stars.add\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/stars.add.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/stars.js':
      /*!*********************************************!*\
  !*** ./node_modules/slack/methods/stars.js ***!
  \*********************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _stars = __webpack_require__(/*! ./stars.add */ "./node_modules/slack/methods/stars.add.js");\n\nvar _stars2 = _interopRequireDefault(_stars);\n\nvar _stars3 = __webpack_require__(/*! ./stars.list */ "./node_modules/slack/methods/stars.list.js");\n\nvar _stars4 = _interopRequireDefault(_stars3);\n\nvar _stars5 = __webpack_require__(/*! ./stars.remove */ "./node_modules/slack/methods/stars.remove.js");\n\nvar _stars6 = _interopRequireDefault(_stars5);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  add: _stars2.default, list: _stars4.default, remove: _stars6.default\n};\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/stars.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/stars.list.js':
      /*!**************************************************!*\
  !*** ./node_modules/slack/methods/stars.list.js ***!
  \**************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = starslist;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction starslist(params, callback) {\n  var ns = \'stars.list\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/stars.list.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/stars.remove.js':
      /*!****************************************************!*\
  !*** ./node_modules/slack/methods/stars.remove.js ***!
  \****************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = starsremove;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction starsremove(params, callback) {\n  var ns = \'stars.remove\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/stars.remove.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/team.accessLogs.js':
      /*!*******************************************************!*\
  !*** ./node_modules/slack/methods/team.accessLogs.js ***!
  \*******************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = teamaccessLogs;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction teamaccessLogs(params, callback) {\n  var ns = \'team.accessLogs\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/team.accessLogs.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/team.billableInfo.js':
      /*!*********************************************************!*\
  !*** ./node_modules/slack/methods/team.billableInfo.js ***!
  \*********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = teambillableInfo;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction teambillableInfo(params, callback) {\n  var ns = \'team.billableInfo\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/team.billableInfo.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/team.info.js':
      /*!*************************************************!*\
  !*** ./node_modules/slack/methods/team.info.js ***!
  \*************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = teaminfo;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction teaminfo(params, callback) {\n  var ns = \'team.info\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/team.info.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/team.integrationLogs.js':
      /*!************************************************************!*\
  !*** ./node_modules/slack/methods/team.integrationLogs.js ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = teamintegrationLogs;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction teamintegrationLogs(params, callback) {\n  var ns = \'team.integrationLogs\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/team.integrationLogs.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/team.js':
      /*!********************************************!*\
  !*** ./node_modules/slack/methods/team.js ***!
  \********************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _team = __webpack_require__(/*! ./team.accessLogs */ "./node_modules/slack/methods/team.accessLogs.js");\n\nvar _team2 = _interopRequireDefault(_team);\n\nvar _team3 = __webpack_require__(/*! ./team.billableInfo */ "./node_modules/slack/methods/team.billableInfo.js");\n\nvar _team4 = _interopRequireDefault(_team3);\n\nvar _team5 = __webpack_require__(/*! ./team.info */ "./node_modules/slack/methods/team.info.js");\n\nvar _team6 = _interopRequireDefault(_team5);\n\nvar _team7 = __webpack_require__(/*! ./team.integrationLogs */ "./node_modules/slack/methods/team.integrationLogs.js");\n\nvar _team8 = _interopRequireDefault(_team7);\n\nvar _teamProfile = __webpack_require__(/*! ./team.profile.get */ "./node_modules/slack/methods/team.profile.get.js");\n\nvar _teamProfile2 = _interopRequireDefault(_teamProfile);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  accessLogs: _team2.default,\n  billableInfo: _team4.default,\n  info: _team6.default,\n  integrationLogs: _team8.default,\n  profile: {\n    get: _teamProfile2.default\n  }\n};\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/team.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/team.profile.get.js':
      /*!********************************************************!*\
  !*** ./node_modules/slack/methods/team.profile.get.js ***!
  \********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = teamprofileget;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction teamprofileget(params, callback) {\n  var ns = \'team.profile.get\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/team.profile.get.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/usergroups.create.js':
      /*!*********************************************************!*\
  !*** ./node_modules/slack/methods/usergroups.create.js ***!
  \*********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = usergroupscreate;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction usergroupscreate(params, callback) {\n  var ns = \'usergroups.create\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/usergroups.create.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/usergroups.disable.js':
      /*!**********************************************************!*\
  !*** ./node_modules/slack/methods/usergroups.disable.js ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = usergroupsdisable;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction usergroupsdisable(params, callback) {\n  var ns = \'usergroups.disable\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/usergroups.disable.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/usergroups.enable.js':
      /*!*********************************************************!*\
  !*** ./node_modules/slack/methods/usergroups.enable.js ***!
  \*********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = usergroupsenable;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction usergroupsenable(params, callback) {\n  var ns = \'usergroups.enable\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/usergroups.enable.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/usergroups.js':
      /*!**************************************************!*\
  !*** ./node_modules/slack/methods/usergroups.js ***!
  \**************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _usergroups = __webpack_require__(/*! ./usergroups.create */ "./node_modules/slack/methods/usergroups.create.js");\n\nvar _usergroups2 = _interopRequireDefault(_usergroups);\n\nvar _usergroups3 = __webpack_require__(/*! ./usergroups.disable */ "./node_modules/slack/methods/usergroups.disable.js");\n\nvar _usergroups4 = _interopRequireDefault(_usergroups3);\n\nvar _usergroups5 = __webpack_require__(/*! ./usergroups.enable */ "./node_modules/slack/methods/usergroups.enable.js");\n\nvar _usergroups6 = _interopRequireDefault(_usergroups5);\n\nvar _usergroups7 = __webpack_require__(/*! ./usergroups.list */ "./node_modules/slack/methods/usergroups.list.js");\n\nvar _usergroups8 = _interopRequireDefault(_usergroups7);\n\nvar _usergroups9 = __webpack_require__(/*! ./usergroups.update */ "./node_modules/slack/methods/usergroups.update.js");\n\nvar _usergroups10 = _interopRequireDefault(_usergroups9);\n\nvar _usergroupsUsers = __webpack_require__(/*! ./usergroups.users.list */ "./node_modules/slack/methods/usergroups.users.list.js");\n\nvar _usergroupsUsers2 = _interopRequireDefault(_usergroupsUsers);\n\nvar _usergroupsUsers3 = __webpack_require__(/*! ./usergroups.users.update */ "./node_modules/slack/methods/usergroups.users.update.js");\n\nvar _usergroupsUsers4 = _interopRequireDefault(_usergroupsUsers3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  create: _usergroups2.default,\n  disable: _usergroups4.default,\n  enable: _usergroups6.default,\n  list: _usergroups8.default,\n  update: _usergroups10.default,\n  users: {\n    list: _usergroupsUsers2.default,\n    update: _usergroupsUsers4.default\n  }\n};\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/usergroups.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/usergroups.list.js':
      /*!*******************************************************!*\
  !*** ./node_modules/slack/methods/usergroups.list.js ***!
  \*******************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = usergroupslist;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction usergroupslist(params, callback) {\n  var ns = \'usergroups.list\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/usergroups.list.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/usergroups.update.js':
      /*!*********************************************************!*\
  !*** ./node_modules/slack/methods/usergroups.update.js ***!
  \*********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = usergroupsupdate;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction usergroupsupdate(params, callback) {\n  var ns = \'usergroups.update\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/usergroups.update.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/usergroups.users.list.js':
      /*!*************************************************************!*\
  !*** ./node_modules/slack/methods/usergroups.users.list.js ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = usergroupsuserslist;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction usergroupsuserslist(params, callback) {\n  var ns = \'usergroups.users.list\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/usergroups.users.list.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/usergroups.users.update.js':
      /*!***************************************************************!*\
  !*** ./node_modules/slack/methods/usergroups.users.update.js ***!
  \***************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = usergroupsusersupdate;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction usergroupsusersupdate(params, callback) {\n  var ns = \'usergroups.users.update\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/usergroups.users.update.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/users.getPresence.js':
      /*!*********************************************************!*\
  !*** ./node_modules/slack/methods/users.getPresence.js ***!
  \*********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = usersgetPresence;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction usersgetPresence(params, callback) {\n  var ns = \'users.getPresence\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/users.getPresence.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/users.identity.js':
      /*!******************************************************!*\
  !*** ./node_modules/slack/methods/users.identity.js ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = usersidentity;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction usersidentity(params, callback) {\n  var ns = \'users.identity\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/users.identity.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/users.info.js':
      /*!**************************************************!*\
  !*** ./node_modules/slack/methods/users.info.js ***!
  \**************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = usersinfo;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction usersinfo(params, callback) {\n  var ns = \'users.info\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/users.info.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/users.js':
      /*!*********************************************!*\
  !*** ./node_modules/slack/methods/users.js ***!
  \*********************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _users = __webpack_require__(/*! ./users.getPresence */ "./node_modules/slack/methods/users.getPresence.js");\n\nvar _users2 = _interopRequireDefault(_users);\n\nvar _users3 = __webpack_require__(/*! ./users.identity */ "./node_modules/slack/methods/users.identity.js");\n\nvar _users4 = _interopRequireDefault(_users3);\n\nvar _users5 = __webpack_require__(/*! ./users.info */ "./node_modules/slack/methods/users.info.js");\n\nvar _users6 = _interopRequireDefault(_users5);\n\nvar _users7 = __webpack_require__(/*! ./users.list */ "./node_modules/slack/methods/users.list.js");\n\nvar _users8 = _interopRequireDefault(_users7);\n\nvar _users9 = __webpack_require__(/*! ./users.setActive */ "./node_modules/slack/methods/users.setActive.js");\n\nvar _users10 = _interopRequireDefault(_users9);\n\nvar _users11 = __webpack_require__(/*! ./users.setPresence */ "./node_modules/slack/methods/users.setPresence.js");\n\nvar _users12 = _interopRequireDefault(_users11);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  getPresence: _users2.default,\n  identity: _users4.default,\n  info: _users6.default,\n  list: _users8.default,\n  setActive: _users10.default,\n  setPresence: _users12.default\n};\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/users.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/users.list.js':
      /*!**************************************************!*\
  !*** ./node_modules/slack/methods/users.list.js ***!
  \**************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = userslist;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction userslist(params, callback) {\n  var ns = \'users.list\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/users.list.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/users.profile.get.js':
      /*!*********************************************************!*\
  !*** ./node_modules/slack/methods/users.profile.get.js ***!
  \*********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = usersprofileget;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction usersprofileget(params, callback) {\n  var ns = \'users.profile.get\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/users.profile.get.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/users.profile.set.js':
      /*!*********************************************************!*\
  !*** ./node_modules/slack/methods/users.profile.set.js ***!
  \*********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = usersprofileset;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction usersprofileset(params, callback) {\n  var ns = \'users.profile.set\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/users.profile.set.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/users.setActive.js':
      /*!*******************************************************!*\
  !*** ./node_modules/slack/methods/users.setActive.js ***!
  \*******************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = userssetActive;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction userssetActive(params, callback) {\n  var ns = \'users.setActive\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/users.setActive.js?'
        );

        /***/
      },

    /***/ './node_modules/slack/methods/users.setPresence.js':
      /*!*********************************************************!*\
  !*** ./node_modules/slack/methods/users.setPresence.js ***!
  \*********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = userssetPresence;\n\nvar _exec = __webpack_require__(/*! ./_exec */ "./node_modules/slack/methods/_exec-browser.js");\n\nvar _exec2 = _interopRequireDefault(_exec);\n\nvar _validate = __webpack_require__(/*! ./_validate */ "./node_modules/slack/methods/_validate.js");\n\nvar _validate2 = _interopRequireDefault(_validate);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// this file was generated by ./scripts/generate-web-api\nfunction userssetPresence(params, callback) {\n  var ns = \'users.setPresence\';\n  var err = (0, _validate2.default)(ns, params);\n  if (err) {\n    callback(err);\n  } else {\n    (0, _exec2.default)(ns, params, callback);\n  }\n}\nmodule.exports = exports[\'default\'];\n\n//# sourceURL=webpack:///./node_modules/slack/methods/users.setPresence.js?'
        );

        /***/
      },

    /***/ './node_modules/strict-uri-encode/index.js':
      /*!*************************************************!*\
  !*** ./node_modules/strict-uri-encode/index.js ***!
  \*************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        eval(
          "\nmodule.exports = function (str) {\n\treturn encodeURIComponent(str).replace(/[!'()*]/g, function (c) {\n\t\treturn '%' + c.charCodeAt(0).toString(16).toUpperCase();\n\t});\n};\n\n\n//# sourceURL=webpack:///./node_modules/strict-uri-encode/index.js?"
        );

        /***/
      }
  }
]);
