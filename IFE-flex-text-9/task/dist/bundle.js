/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);
	__webpack_require__(7);
	__webpack_require__(9);
	__webpack_require__(11);
	__webpack_require__(14);
	var $ = __webpack_require__(15);
	var showList = __webpack_require__(12);
	var showOne = __webpack_require__(13);

	showOne();
	$('#one-a').click(function () {
		$('.onething').css('display', 'none');
		$('.hd-one').css('display', 'none');
		$('.all').css('display', 'none');
		$('.add').css('display', 'block');
		$('.hd-add').css('display', 'block');
		$('btn-add').css('display', 'block');
		$('.btn-edit').css('display', 'none');
		$('.btn-l').css('background', '#D9D9D9');
		$('.btn-r').css('background', '#D9D9D9');
		var add = document.getElementsByClassName('add')[0];
		var pritag = add.getElementsByClassName('pri-tag');
		for (var i = 0; i < pritag.length; i++) {
			pritag[i].className = 'pri-tag';
		}
		var add = document.getElementsByClassName('add')[0];
		var statag = add.getElementsByClassName('sta-tag');
		for (var i = 0; i < statag.length; i++) {
			statag[i].className = 'sta-tag';
		}
		document.getElementById('content').value = '';
		//	localStorage.clear();
	});
	$('.btn-r').click(function () {

		showList();
	});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// Prepare cssTransformation
	var transform;

	var options = {}
	options.transform = transform
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, options);
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/cjs.js!./app.less", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/cjs.js!./app.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)(undefined);
	// imports


	// module
	exports.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  font-size: 62.5%;\n  font-family: \"microsoft yahei\";\n}\n.hd {\n  position: relative;\n  font-size: 2.8rem;\n  text-align: center;\n  line-height: 50px;\n  margin-bottom: 10px;\n  background: #D9D9D9;\n  width: 100%;\n  height: 50px;\n}\n.btn-add,\n.btn-edit {\n  position: absolute;\n  width: 60px;\n  height: 30px;\n  top: 10px;\n  right: 20px;\n  font-size: 1.6rem;\n}\n.btn-edit {\n  display: none;\n}\n.tips {\n  font-size: 3rem;\n  padding-left: 10px;\n}\n.list1 {\n  font-size: 1.8rem;\n}\n.task {\n  border: 1px solid #C6C6C6;\n  display: flex;\n  align-items: center;\n  width: 95%;\n  height: 97px;\n  padding: 10px;\n  margin: 10px auto;\n  position: relative;\n  overflow: hidden;\n}\n.task .red,\n.task .yellow,\n.task .green {\n  font-size: 1.8rem;\n  margin-right: 10px;\n}\n.task .red {\n  color: #CF031F;\n}\n.task .yellow {\n  color: #F7E739;\n}\n.task .green {\n  color: #41750C;\n}\n.task .content {\n  font-size: 1.8rem;\n}\n.footer {\n  background: #D9D9D9;\n  width: 100%;\n  height: 50px;\n  position: fixed;\n  bottom: 0px;\n  margin-top: 60px;\n  display: flex;\n}\n.footer .btn-l,\n.footer .btn-r {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.8rem;\n  font-weight: bold;\n}\n.footer .btn-l {\n  background: #ADADAD;\n}\n", ""]);

	// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function(useSourceMap) {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			return this.map(function (item) {
				var content = cssWithMappingToString(item, useSourceMap);
				if(item[2]) {
					return "@media " + item[2] + "{" + content + "}";
				} else {
					return content;
				}
			}).join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

	function cssWithMappingToString(item, useSourceMap) {
		var content = item[1] || '';
		var cssMapping = item[3];
		if (!cssMapping) {
			return content;
		}

		if (useSourceMap && typeof btoa === 'function') {
			var sourceMapping = toComment(cssMapping);
			var sourceURLs = cssMapping.sources.map(function (source) {
				return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
			});

			return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
		}

		return [content].join('\n');
	}

	// Adapted from convert-source-map (MIT)
	function toComment(sourceMap) {
		// eslint-disable-next-line no-undef
		var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
		var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

		return '/*# ' + data + ' */';
	}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/

	var stylesInDom = {};

	var	memoize = function (fn) {
		var memo;

		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	};

	var isOldIE = memoize(function () {
		// Test for IE <= 9 as proposed by Browserhacks
		// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
		// Tests for existence of standard globals is to allow style-loader
		// to operate correctly into non-standard environments
		// @see https://github.com/webpack-contrib/style-loader/issues/177
		return window && document && document.all && !window.atob;
	});

	var getElement = (function (fn) {
		var memo = {};

		return function(selector) {
			if (typeof memo[selector] === "undefined") {
				memo[selector] = fn.call(this, selector);
			}

			return memo[selector]
		};
	})(function (target) {
		return document.querySelector(target)
	});

	var singleton = null;
	var	singletonCounter = 0;
	var	stylesInsertedAtTop = [];

	var	fixUrls = __webpack_require__(6);

	module.exports = function(list, options) {
		if (false) {
			if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};

		options.attrs = typeof options.attrs === "object" ? options.attrs : {};

		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (!options.singleton) options.singleton = isOldIE();

		// By default, add <style> tags to the <head> element
		if (!options.insertInto) options.insertInto = "head";

		// By default, add <style> tags to the bottom of the target
		if (!options.insertAt) options.insertAt = "bottom";

		var styles = listToStyles(list, options);

		addStylesToDom(styles, options);

		return function update (newList) {
			var mayRemove = [];

			for (var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];

				domStyle.refs--;
				mayRemove.push(domStyle);
			}

			if(newList) {
				var newStyles = listToStyles(newList, options);
				addStylesToDom(newStyles, options);
			}

			for (var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];

				if(domStyle.refs === 0) {
					for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

					delete stylesInDom[domStyle.id];
				}
			}
		};
	};

	function addStylesToDom (styles, options) {
		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			if(domStyle) {
				domStyle.refs++;

				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}

				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];

				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}

				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles (list, options) {
		var styles = [];
		var newStyles = {};

		for (var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = options.base ? item[0] + options.base : item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};

			if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
			else newStyles[id].parts.push(part);
		}

		return styles;
	}

	function insertStyleElement (options, style) {
		var target = getElement(options.insertInto)

		if (!target) {
			throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
		}

		var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

		if (options.insertAt === "top") {
			if (!lastStyleElementInsertedAtTop) {
				target.insertBefore(style, target.firstChild);
			} else if (lastStyleElementInsertedAtTop.nextSibling) {
				target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				target.appendChild(style);
			}
			stylesInsertedAtTop.push(style);
		} else if (options.insertAt === "bottom") {
			target.appendChild(style);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement (style) {
		if (style.parentNode === null) return false;
		style.parentNode.removeChild(style);

		var idx = stylesInsertedAtTop.indexOf(style);
		if(idx >= 0) {
			stylesInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement (options) {
		var style = document.createElement("style");

		options.attrs.type = "text/css";

		addAttrs(style, options.attrs);
		insertStyleElement(options, style);

		return style;
	}

	function createLinkElement (options) {
		var link = document.createElement("link");

		options.attrs.type = "text/css";
		options.attrs.rel = "stylesheet";

		addAttrs(link, options.attrs);
		insertStyleElement(options, link);

		return link;
	}

	function addAttrs (el, attrs) {
		Object.keys(attrs).forEach(function (key) {
			el.setAttribute(key, attrs[key]);
		});
	}

	function addStyle (obj, options) {
		var style, update, remove, result;

		// If a transform function was defined, run it on the css
		if (options.transform && obj.css) {
		    result = options.transform(obj.css);

		    if (result) {
		    	// If transform returns a value, use that instead of the original css.
		    	// This allows running runtime transformations on the css.
		    	obj.css = result;
		    } else {
		    	// If the transform function returns a falsy value, don't add this css.
		    	// This allows conditional loading of css
		    	return function() {
		    		// noop
		    	};
		    }
		}

		if (options.singleton) {
			var styleIndex = singletonCounter++;

			style = singleton || (singleton = createStyleElement(options));

			update = applyToSingletonTag.bind(null, style, styleIndex, false);
			remove = applyToSingletonTag.bind(null, style, styleIndex, true);

		} else if (
			obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function"
		) {
			style = createLinkElement(options);
			update = updateLink.bind(null, style, options);
			remove = function () {
				removeStyleElement(style);

				if(style.href) URL.revokeObjectURL(style.href);
			};
		} else {
			style = createStyleElement(options);
			update = applyToTag.bind(null, style);
			remove = function () {
				removeStyleElement(style);
			};
		}

		update(obj);

		return function updateStyle (newObj) {
			if (newObj) {
				if (
					newObj.css === obj.css &&
					newObj.media === obj.media &&
					newObj.sourceMap === obj.sourceMap
				) {
					return;
				}

				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;

			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag (style, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (style.styleSheet) {
			style.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = style.childNodes;

			if (childNodes[index]) style.removeChild(childNodes[index]);

			if (childNodes.length) {
				style.insertBefore(cssNode, childNodes[index]);
			} else {
				style.appendChild(cssNode);
			}
		}
	}

	function applyToTag (style, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			style.setAttribute("media", media)
		}

		if(style.styleSheet) {
			style.styleSheet.cssText = css;
		} else {
			while(style.firstChild) {
				style.removeChild(style.firstChild);
			}

			style.appendChild(document.createTextNode(css));
		}
	}

	function updateLink (link, options, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		/*
			If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
			and there is no publicPath defined then lets turn convertToAbsoluteUrls
			on by default.  Otherwise default to the convertToAbsoluteUrls option
			directly
		*/
		var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

		if (options.convertToAbsoluteUrls || autoFixUrls) {
			css = fixUrls(css);
		}

		if (sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = link.href;

		link.href = URL.createObjectURL(blob);

		if(oldSrc) URL.revokeObjectURL(oldSrc);
	}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	
	/**
	 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
	 * embed the css on the page. This breaks all relative urls because now they are relative to a
	 * bundle instead of the current page.
	 *
	 * One solution is to only use full urls, but that may be impossible.
	 *
	 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
	 *
	 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
	 *
	 */

	module.exports = function (css) {
	  // get current location
	  var location = typeof window !== "undefined" && window.location;

	  if (!location) {
	    throw new Error("fixUrls requires window.location");
	  }

		// blank or null?
		if (!css || typeof css !== "string") {
		  return css;
	  }

	  var baseUrl = location.protocol + "//" + location.host;
	  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

		// convert each url(...)
		/*
		This regular expression is just a way to recursively match brackets within
		a string.

		 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
		   (  = Start a capturing group
		     (?:  = Start a non-capturing group
		         [^)(]  = Match anything that isn't a parentheses
		         |  = OR
		         \(  = Match a start parentheses
		             (?:  = Start another non-capturing groups
		                 [^)(]+  = Match anything that isn't a parentheses
		                 |  = OR
		                 \(  = Match a start parentheses
		                     [^)(]*  = Match anything that isn't a parentheses
		                 \)  = Match a end parentheses
		             )  = End Group
	              *\) = Match anything and then a close parens
	          )  = Close non-capturing group
	          *  = Match anything
	       )  = Close capturing group
		 \)  = Match a close parens

		 /gi  = Get all matches, not the first.  Be case insensitive.
		 */
		var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
			// strip quotes (if they exist)
			var unquotedOrigUrl = origUrl
				.trim()
				.replace(/^"(.*)"$/, function(o, $1){ return $1; })
				.replace(/^'(.*)'$/, function(o, $1){ return $1; });

			// already a full url? no change
			if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
			  return fullMatch;
			}

			// convert the url to a full url
			var newUrl;

			if (unquotedOrigUrl.indexOf("//") === 0) {
			  	//TODO: should we add protocol?
				newUrl = unquotedOrigUrl;
			} else if (unquotedOrigUrl.indexOf("/") === 0) {
				// path should be relative to the base url
				newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
			} else {
				// path should be relative to current directory
				newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
			}

			// send back the fixed url(...)
			return "url(" + JSON.stringify(newUrl) + ")";
		});

		// send back the fixed css
		return fixedCss;
	};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(8);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// Prepare cssTransformation
	var transform;

	var options = {}
	options.transform = transform
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, options);
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/cjs.js!./add.less", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/cjs.js!./add.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)(undefined);
	// imports


	// module
	exports.push([module.id, ".btn-cancel {\n  position: absolute;\n  width: 60px;\n  height: 30px;\n  top: 10px;\n  left: 20px;\n  font-size: 1.6rem;\n}\n.add,\n.hd-add {\n  display: none;\n}\n.pri,\n.sta {\n  display: flex;\n}\n.pri .pri-tag,\n.sta .pri-tag,\n.pri .sta-tag,\n.sta .sta-tag {\n  margin: 5px;\n  flex: 1;\n  padding: 5px;\n  border: 1px solid #C6C6C6;\n  font-size: 1.6rem;\n  text-align: center;\n}\n.pri .pri-tag .red-p,\n.sta .pri-tag .red-p,\n.pri .sta-tag .red-p,\n.sta .sta-tag .red-p,\n.pri .pri-tag .yellow-p,\n.sta .pri-tag .yellow-p,\n.pri .sta-tag .yellow-p,\n.sta .sta-tag .yellow-p,\n.pri .pri-tag .green-p,\n.sta .pri-tag .green-p,\n.pri .sta-tag .green-p,\n.sta .sta-tag .green-p {\n  font-size: 1.8rem;\n}\n.pri .pri-tag .red-p,\n.sta .pri-tag .red-p,\n.pri .sta-tag .red-p,\n.sta .sta-tag .red-p {\n  color: #CF031F;\n}\n.pri .pri-tag .yellow-p,\n.sta .pri-tag .yellow-p,\n.pri .sta-tag .yellow-p,\n.sta .sta-tag .yellow-p {\n  color: #F7E739;\n}\n.pri .pri-tag .green-p,\n.sta .pri-tag .green-p,\n.pri .sta-tag .green-p,\n.sta .sta-tag .green-p {\n  color: #41750C;\n}\n.pri .pri-tag .state,\n.sta .pri-tag .state,\n.pri .sta-tag .state,\n.sta .sta-tag .state {\n  font-size: 1.8rem;\n  color: #D9D9D9;\n}\n.pri .choose,\n.sta .choose {\n  border: 1px solid #FF0000;\n}\n.task textarea {\n  width: 100%;\n  border: none;\n}\n", ""]);

	// exports


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(10);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// Prepare cssTransformation
	var transform;

	var options = {}
	options.transform = transform
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, options);
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/cjs.js!./all.less", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/cjs.js!./all.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)(undefined);
	// imports


	// module
	exports.push([module.id, ".all {\n  display: none;\n}\n.all .pri {\n  background: #FEEBEB;\n  margin-top: -10px;\n}\n.all .pri .pri-tag {\n  border: none;\n}\n.all .sta {\n  background: #EDFEEC;\n}\n.all .sta .sta-tag {\n  border: none;\n}\n.all .list {\n  font-size: 1.8rem;\n  margin-bottom: 70px;\n}\n.all .list .right,\n.all .list .left {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 300px;\n  height: 95px;\n  background: #D9D9D9;\n  position: absolute;\n  top: 0;\n}\n.all .list .right {\n  right: -311px;\n}\n.all .list .left {\n  left: -311px;\n}\n.all .list div[class|='op'] {\n  width: 80px;\n  text-align: center;\n  font-size: 1.6rem;\n}\n.all .choose {\n  border: 1px solid #FF0000 !important;\n}\n", ""]);

	// exports


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var showList = __webpack_require__(12);
	var showOne = __webpack_require__(13);
	$('#all-c').click(function () {
		showOne();
	});
	//点击Done按钮
	$('#all-d').click(function () {
		var pri = $('.pri-tag.choose').attr('id');
		var sta = $('.sta-tag.choose').attr('id');
		var content = $('#content').val();

		if (localStorage.flag1 == undefined) {
			localStorage.flag1 = 1;
			var taskList = [];
			localStorage.setItem('taskList', JSON.stringify(taskList));
		} else {
			localStorage.flag1 = parseInt(localStorage.flag1) + 1;
		}

		var list = {};
		list.id = localStorage.flag1;
		list.pri = pri;
		list.sta = sta;
		list.content = content;

		var taskList = JSON.parse(localStorage.getItem('taskList'));
		taskList.push(list);
		localStorage.setItem('taskList', JSON.stringify(taskList));

		showList();
	});
	//选择优先级
	var add = document.getElementsByClassName('add')[0];
	var pritag = add.getElementsByClassName('pri-tag');
	for (var i = 0; i < pritag.length; i++) {
		pritag[i].addEventListener('click', function () {
			for (var i = 0; i < pritag.length; i++) {
				pritag[i].className = 'pri-tag';
			}
			this.className += ' ' + 'choose';
		});
	}
	//选择状态
	var add = document.getElementsByClassName('add')[0];
	var statag = add.getElementsByClassName('sta-tag');
	for (var _i = 0; _i < statag.length; _i++) {
		statag[_i].addEventListener('click', function () {
			for (var i = 0; i < statag.length; i++) {
				statag[i].className = 'sta-tag';
			}
			this.className += ' ' + 'choose';
		});
	}

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = function () {

		function bind() {

			$('.list .task').each(function () {
				$(this).hammer().bind("swipeleft", function () {
					$(this).children().eq(2).animate({ right: '0px' });
					$(this).children().eq(3).animate({ left: '-300px' });
				});
				$(this).hammer().bind("swiperight", function () {
					$(this).children().eq(3).animate({ left: '0px' });
					$(this).children().eq(2).animate({ right: '-300px' });
				});
				$(this).hammer().bind("tap", function () {
					$(this).children().eq(3).animate({ left: '-300px' });
					$(this).children().eq(2).animate({ right: '-300px' });
				});
			});
		}

		function showTask() {
			$('.onething').css('display', 'none');
			$('.all').css('display', 'block');
			$('.add').css('display', 'none');
			$('.hd-one').css('display', 'block');
			$('.hd-add').css('display', 'none');
			$('.btn-l').css('background', '#D9D9D9');
			$('.btn-r').css('background', '#ADADAD');
			var all = document.getElementsByClassName('all')[0];
			var pritag = all.getElementsByClassName('pri-tag');
			for (var i = 0; i < pritag.length; i++) {
				pritag[i].className = 'pri-tag';
			}
			//选择状态
			var statag = all.getElementsByClassName('sta-tag');
			for (var _i = 0; _i < statag.length; _i++) {
				statag[_i].className = 'sta-tag';
			}
			$('.list').empty();
			var taskList = JSON.parse(localStorage.getItem('taskList'));
			if (localStorage.flag1 == undefined) {
				$('.list').append('目前没有任务');
			} else {
				for (var _i2 = 0; _i2 < taskList.length; _i2++) {
					var pri = taskList[_i2].pri;
					var sta = taskList[_i2].sta;
					var color = '';
					var font = '';
					switch (pri) {
						case '高优':
							color = 'red';
							break;
						case '中优':
							color = 'yellow';
							break;
						case '低优':
							color = 'green';
							break;
					}
					switch (sta) {
						case '进行中':
							font = 'glyphicon-play';
							break;
						case '待办':
							font = 'glyphicon-pause';
							break;
						case '已完成':
							font = 'glyphicon-stop';
							break;
					}
					console.log(font, color);

					$('.list').append('\n\t\t\t\t\t<div class="task" id=' + taskList[_i2].id + '>\n\t\t\t\t    \t<span class="glyphicon ' + font + ' ' + color + '"></span>\n\t\t\t\t    \t<div class="content">\n\t\t\t\t    \t\t' + taskList[_i2].content + '\n\t\t\t\t    \t</div>\n\t\t\t\t    \t<div class="right">\n\t\t\t\t\t    \t<div class="op-edit">\u7F16\u8F91</div>\n\t\t\t\t\t    \t<div class="op-del">\u5220\u9664</div>\n\t\t\t\t\t    </div>\n\t\t\t\t\t    <div class="left">\n\t\t\t\t\t    \t<div class="op-1">\u5DF2\u5B8C\u6210</div>\n\t\t\t\t\t    \t<div class="op-2">\u5F85\u529E</div>\n\t\t\t\t\t    \t<div class="op-3">\u8FDB\u884C\u4E2D</div>\n\t\t\t\t\t    </div>\n\t\t\t\t\t</div>\n\t\t\t\t');
				}
			}
			bind();
		}
		showTask();

		var list = document.getElementById('list');
		list.addEventListener('click', function (e) {
			if (e.target.className == 'op-del') {
				var id = e.target.parentNode.parentNode.getAttribute('id');
				var taskList = JSON.parse(localStorage.getItem('taskList'));

				for (var j = 0; j < taskList.length; j++) {
					if (taskList[j].id == id) {
						var index = j;
						taskList.splice(index, 1);
						localStorage.setItem('taskList', JSON.stringify(taskList));
					}
				}
				showTask();
			}
		});

		list.addEventListener('click', function (e) {
			if (e.target.className == 'op-edit') {
				var taskId = e.target.parentNode.parentNode.getAttribute('id');
				var taskList = JSON.parse(localStorage.getItem('taskList'));
				for (var j = 0; j < taskList.length; j++) {
					if (taskList[j].id == taskId) {
						var pri = taskList[j].pri;
						var sta = taskList[j].sta;
						var content = taskList[j].content;
					}
				}
				$('.onething').css('display', 'none');
				$('.hd-one').css('display', 'none');
				$('.all').css('display', 'none');
				$('.add').css('display', 'block');
				$('.hd-add').css('display', 'block');
				$('btn-add').css('display', 'none');
				$('.btn-edit').css('display', 'block');
				$('.btn-l').css('background', '#D9D9D9');
				$('.btn-r').css('background', '#D9D9D9');
				var add = document.getElementsByClassName('add')[0];
				var pritag = add.getElementsByClassName('pri-tag');
				for (var i = 0; i < pritag.length; i++) {
					pritag[i].className = 'pri-tag';
					var id = pritag[i].getAttribute('id');
					if (id == pri) {
						pritag[i].className += ' ' + 'choose';
					}
				}
				var add = document.getElementsByClassName('add')[0];
				var statag = add.getElementsByClassName('sta-tag');
				for (var i = 0; i < statag.length; i++) {
					statag[i].className = 'sta-tag';
					var id = statag[i].getAttribute('id');
					if (id == sta) {
						statag[i].className += ' ' + 'choose';
					}
				}
				document.getElementById('content').value = content;

				//点击Done按钮
				$('#all-e').click(function () {
					var pri = $('.pri-tag.choose').attr('id');
					var sta = $('.sta-tag.choose').attr('id');
					var content = $('#content').val();
					var taskList = JSON.parse(localStorage.getItem('taskList'));
					for (var _j = 0; _j < taskList.length; _j++) {
						if (taskList[_j].id == taskId) {
							taskList[_j].pri = pri;
							taskList[_j].sta = sta;
							taskList[_j].content = content;
							localStorage.setItem('taskList', JSON.stringify(taskList));
						}
					}
					showTask();
				});
			}
		});

		list.addEventListener('click', function (e) {
			if (e.target.className == 'op-1' || e.target.className == 'op-2' || e.target.className == 'op-3') {
				var id = e.target.parentNode.parentNode.getAttribute('id');
				var taskList = JSON.parse(localStorage.getItem('taskList'));

				for (var j = 0; j < taskList.length; j++) {
					if (taskList[j].id == id) {
						if (e.target.className == 'op-1') {
							taskList[j].sta = '已完成';
						} else if (e.target.className == 'op-2') {
							taskList[j].sta = '待办';
						} else {
							taskList[j].sta = '进行中';
						}
						localStorage.setItem('taskList', JSON.stringify(taskList));
					}
				}
				showTask();
			}
		});
	};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = function () {
		$('.onething').css('display', 'block');
		$('.all').css('display', 'none');
		$('.add').css('display', 'none');
		$('.hd-one').css('display', 'block');
		$('.hd-add').css('display', 'none');
		$('.btn-l').css('background', '#ADADAD');
		$('.btn-r').css('background', '#D9D9D9');
		$('.list1').empty();
		var taskList = JSON.parse(localStorage.getItem('taskList'));
		if (localStorage.flag1 == undefined) {
			$('.list1').append('目前没有任务');
		} else {
			for (var i = 0; i < taskList.length; i++) {
				var pri = taskList[i].pri;
				var sta = taskList[i].sta;
				console.log(pri, sta);
				if (pri == '高优' && sta == '进行中') {
					$('.list1').append('\n\t\t\t\t\t<div class="task" id=' + taskList[i].id + '>\n\t\t\t\t    \t<span class="glyphicon glyphicon-play red"></span>\n\t\t\t\t    \t<div class="content">\n\t\t\t\t    \t\t' + taskList[i].content + '\n\t\t\t\t    \t</div>\n\t\t\t\t\t</div>\n\t\t\t\t');
					break;
				}
			}
		}
	};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var showOne = __webpack_require__(13);
	var showList = __webpack_require__(12);
	$('.btn-l').click(function () {
		showOne();
	});

	function showTask(id, font, color, content) {
		$('.list').append('\n\t\t<div class="task" id=' + id + '>\n\t    \t<span class="glyphicon ' + font + ' ' + color + '"></span>\n\t    \t<div class="content">\n\t    \t\t' + content + '\n\t    \t</div>\n\t    \t<div class="right">\n\t\t    \t<div class="op-edit">\u7F16\u8F91</div>\n\t\t    \t<div class="op-del">\u5220\u9664</div>\n\t\t    </div>\n\t\t    <div class="left">\n\t\t    \t<div class="op-1">\u5DF2\u5B8C\u6210</div>\n\t\t    \t<div class="op-2">\u5F85\u529E</div>\n\t\t    \t<div class="op-3">\u8FDB\u884C\u4E2D</div>\n\t\t    </div>\n\t\t</div>\n\t');
	}

	function showSearch() {
		$('.list').empty();
		var taskList = JSON.parse(localStorage.getItem('taskList'));
		if (localStorage.flag1 == undefined) {
			$('.list').append('目前没有任务');
		} else if (priNum.length == 0 && staNum.length == 0) {
			showList();
		} else {
			for (var i = 0; i < taskList.length; i++) {
				var pri = taskList[i].pri;
				var sta = taskList[i].sta;
				//			console.log(pri,sta);
				var color = '';
				var font = '';
				switch (pri) {
					case '高优':
						color = 'red';
						break;
					case '中优':
						color = 'yellow';
						break;
					case '低优':
						color = 'green';
						break;
				}
				switch (sta) {
					case '进行中':
						font = 'glyphicon-play';
						break;
					case '待办':
						font = 'glyphicon-pause';
						break;
					case '已完成':
						font = 'glyphicon-stop';
						break;
				}
				console.log(font, color);
				if (staNum.length == 0) {
					for (var j = 0; j < priNum.length; j++) {
						if (taskList[i].pri == priNum[j]) {
							showTask(taskList[i], font, color, taskList[i].content);
						}
					}
				} else if (priNum.length == 0) {
					for (var _j = 0; _j < staNum.length; _j++) {
						if (taskList[i].sta == staNum[_j]) {
							showTask(taskList[i], font, color, taskList[i].content);
						}
					}
				} else {
					for (var k = 0; k < priNum.length; k++) {
						for (var _j2 = 0; _j2 < staNum.length; _j2++) {
							if (taskList[i].sta == staNum[_j2] && taskList[i].pri == priNum[k]) {
								showTask(taskList[i], font, color, taskList[i].content);
							}
						}
					}
				}
			}
		}
	}

	//选择优先级

	var priNum = [];
	var staNum = [];
	var pri = document.getElementById('pri');
	pri.addEventListener('click', function (e) {
		if (e.target.className == 'pri-tag choose' || e.target.className == 'pri-tag') {
			if (e.target.className != 'pri-tag choose') {
				e.target.className += ' ' + 'choose';
				priNum.push(e.target.getAttribute('d-id'));
				showSearch();
			} else {
				e.target.className = 'pri-tag';
				var id = e.target.getAttribute('d-id');
				for (var i = 0; i <= priNum.length; i++) {
					if (priNum[i] == id) {
						priNum.splice(i, 1);
					}
				}
				showSearch();
			}
		}
	});

	//选择状态
	var sta = document.getElementById('sta');
	sta.addEventListener('click', function (e) {
		if (e.target.className == 'sta-tag choose' || e.target.className == 'sta-tag') {
			if (e.target.className != 'sta-tag choose') {
				e.target.className += ' ' + 'choose';
				staNum.push(e.target.getAttribute('d-id'));
				showSearch();
			} else {
				e.target.className = 'sta-tag';
				var id = e.target.getAttribute('d-id');
				for (var i = 0; i <= staNum.length; i++) {
					if (staNum[i] == id) {
						staNum.splice(i, 1);
					}
				}
				showSearch();
			}
		}
	});

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports = window.$;

/***/ })
/******/ ]);