/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@svgdotjs/svg.js/dist/svg.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/dist/svg.esm.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ A),
/* harmony export */   Animator: () => (/* binding */ Animator),
/* harmony export */   Array: () => (/* binding */ SVGArray),
/* harmony export */   Box: () => (/* binding */ Box),
/* harmony export */   Circle: () => (/* binding */ Circle),
/* harmony export */   ClipPath: () => (/* binding */ ClipPath),
/* harmony export */   Color: () => (/* binding */ Color),
/* harmony export */   Container: () => (/* binding */ Container),
/* harmony export */   Controller: () => (/* binding */ Controller),
/* harmony export */   Defs: () => (/* binding */ Defs),
/* harmony export */   Dom: () => (/* binding */ Dom),
/* harmony export */   Ease: () => (/* binding */ Ease),
/* harmony export */   Element: () => (/* binding */ Element),
/* harmony export */   Ellipse: () => (/* binding */ Ellipse),
/* harmony export */   EventTarget: () => (/* binding */ EventTarget),
/* harmony export */   ForeignObject: () => (/* binding */ ForeignObject),
/* harmony export */   Fragment: () => (/* binding */ Fragment),
/* harmony export */   G: () => (/* binding */ G),
/* harmony export */   Gradient: () => (/* binding */ Gradient),
/* harmony export */   Image: () => (/* binding */ Image),
/* harmony export */   Line: () => (/* binding */ Line),
/* harmony export */   List: () => (/* binding */ List),
/* harmony export */   Marker: () => (/* binding */ Marker),
/* harmony export */   Mask: () => (/* binding */ Mask),
/* harmony export */   Matrix: () => (/* binding */ Matrix),
/* harmony export */   Morphable: () => (/* binding */ Morphable),
/* harmony export */   NonMorphable: () => (/* binding */ NonMorphable),
/* harmony export */   Number: () => (/* binding */ SVGNumber),
/* harmony export */   ObjectBag: () => (/* binding */ ObjectBag),
/* harmony export */   PID: () => (/* binding */ PID),
/* harmony export */   Path: () => (/* binding */ Path),
/* harmony export */   PathArray: () => (/* binding */ PathArray),
/* harmony export */   Pattern: () => (/* binding */ Pattern),
/* harmony export */   Point: () => (/* binding */ Point),
/* harmony export */   PointArray: () => (/* binding */ PointArray),
/* harmony export */   Polygon: () => (/* binding */ Polygon),
/* harmony export */   Polyline: () => (/* binding */ Polyline),
/* harmony export */   Queue: () => (/* binding */ Queue),
/* harmony export */   Rect: () => (/* binding */ Rect),
/* harmony export */   Runner: () => (/* binding */ Runner),
/* harmony export */   SVG: () => (/* binding */ SVG),
/* harmony export */   Shape: () => (/* binding */ Shape),
/* harmony export */   Spring: () => (/* binding */ Spring),
/* harmony export */   Stop: () => (/* binding */ Stop),
/* harmony export */   Style: () => (/* binding */ Style),
/* harmony export */   Svg: () => (/* binding */ Svg),
/* harmony export */   Symbol: () => (/* binding */ Symbol),
/* harmony export */   Text: () => (/* binding */ Text),
/* harmony export */   TextPath: () => (/* binding */ TextPath),
/* harmony export */   Timeline: () => (/* binding */ Timeline),
/* harmony export */   TransformBag: () => (/* binding */ TransformBag),
/* harmony export */   Tspan: () => (/* binding */ Tspan),
/* harmony export */   Use: () => (/* binding */ Use),
/* harmony export */   adopt: () => (/* binding */ adopt),
/* harmony export */   assignNewId: () => (/* binding */ assignNewId),
/* harmony export */   clearEvents: () => (/* binding */ clearEvents),
/* harmony export */   create: () => (/* binding */ create),
/* harmony export */   defaults: () => (/* binding */ defaults),
/* harmony export */   dispatch: () => (/* binding */ dispatch),
/* harmony export */   easing: () => (/* binding */ easing),
/* harmony export */   eid: () => (/* binding */ eid),
/* harmony export */   extend: () => (/* binding */ extend),
/* harmony export */   find: () => (/* binding */ baseFind),
/* harmony export */   getClass: () => (/* binding */ getClass),
/* harmony export */   getEventTarget: () => (/* binding */ getEventTarget),
/* harmony export */   getEvents: () => (/* binding */ getEvents),
/* harmony export */   getWindow: () => (/* binding */ getWindow),
/* harmony export */   makeInstance: () => (/* binding */ makeInstance),
/* harmony export */   makeMorphable: () => (/* binding */ makeMorphable),
/* harmony export */   mockAdopt: () => (/* binding */ mockAdopt),
/* harmony export */   namespaces: () => (/* binding */ namespaces),
/* harmony export */   nodeOrNew: () => (/* binding */ nodeOrNew),
/* harmony export */   off: () => (/* binding */ off),
/* harmony export */   on: () => (/* binding */ on),
/* harmony export */   parser: () => (/* binding */ parser),
/* harmony export */   regex: () => (/* binding */ regex),
/* harmony export */   register: () => (/* binding */ register),
/* harmony export */   registerMorphableType: () => (/* binding */ registerMorphableType),
/* harmony export */   registerWindow: () => (/* binding */ registerWindow),
/* harmony export */   restoreWindow: () => (/* binding */ restoreWindow),
/* harmony export */   root: () => (/* binding */ root),
/* harmony export */   saveWindow: () => (/* binding */ saveWindow),
/* harmony export */   utils: () => (/* binding */ utils),
/* harmony export */   windowEvents: () => (/* binding */ windowEvents),
/* harmony export */   withWindow: () => (/* binding */ withWindow),
/* harmony export */   wrapWithAttrCheck: () => (/* binding */ wrapWithAttrCheck)
/* harmony export */ });
/*!
* @svgdotjs/svg.js - A lightweight library for manipulating and animating SVG.
* @version 3.1.2
* https://svgjs.dev/
*
* @copyright Wout Fierens <wout@mick-wout.com>
* @license MIT
*
* BUILT: Wed Jan 26 2022 23:19:07 GMT+0100 (Mitteleuropäische Normalzeit)
*/;
const methods$1 = {};
const names = [];
function registerMethods(name, m) {
  if (Array.isArray(name)) {
    for (const _name of name) {
      registerMethods(_name, m);
    }

    return;
  }

  if (typeof name === 'object') {
    for (const _name in name) {
      registerMethods(_name, name[_name]);
    }

    return;
  }

  addMethodNames(Object.getOwnPropertyNames(m));
  methods$1[name] = Object.assign(methods$1[name] || {}, m);
}
function getMethodsFor(name) {
  return methods$1[name] || {};
}
function getMethodNames() {
  return [...new Set(names)];
}
function addMethodNames(_names) {
  names.push(..._names);
}

// Map function
function map(array, block) {
  let i;
  const il = array.length;
  const result = [];

  for (i = 0; i < il; i++) {
    result.push(block(array[i]));
  }

  return result;
} // Filter function

function filter(array, block) {
  let i;
  const il = array.length;
  const result = [];

  for (i = 0; i < il; i++) {
    if (block(array[i])) {
      result.push(array[i]);
    }
  }

  return result;
} // Degrees to radians

function radians(d) {
  return d % 360 * Math.PI / 180;
} // Radians to degrees

function degrees(r) {
  return r * 180 / Math.PI % 360;
} // Convert dash-separated-string to camelCase

function camelCase(s) {
  return s.toLowerCase().replace(/-(.)/g, function (m, g) {
    return g.toUpperCase();
  });
} // Convert camel cased string to dash separated

function unCamelCase(s) {
  return s.replace(/([A-Z])/g, function (m, g) {
    return '-' + g.toLowerCase();
  });
} // Capitalize first letter of a string

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
} // Calculate proportional width and height values when necessary

function proportionalSize(element, width, height, box) {
  if (width == null || height == null) {
    box = box || element.bbox();

    if (width == null) {
      width = box.width / box.height * height;
    } else if (height == null) {
      height = box.height / box.width * width;
    }
  }

  return {
    width: width,
    height: height
  };
}
/**
 * This function adds support for string origins.
 * It searches for an origin in o.origin o.ox and o.originX.
 * This way, origin: {x: 'center', y: 50} can be passed as well as ox: 'center', oy: 50
**/

function getOrigin(o, element) {
  const origin = o.origin; // First check if origin is in ox or originX

  let ox = o.ox != null ? o.ox : o.originX != null ? o.originX : 'center';
  let oy = o.oy != null ? o.oy : o.originY != null ? o.originY : 'center'; // Then check if origin was used and overwrite in that case

  if (origin != null) {
    [ox, oy] = Array.isArray(origin) ? origin : typeof origin === 'object' ? [origin.x, origin.y] : [origin, origin];
  } // Make sure to only call bbox when actually needed


  const condX = typeof ox === 'string';
  const condY = typeof oy === 'string';

  if (condX || condY) {
    const {
      height,
      width,
      x,
      y
    } = element.bbox(); // And only overwrite if string was passed for this specific axis

    if (condX) {
      ox = ox.includes('left') ? x : ox.includes('right') ? x + width : x + width / 2;
    }

    if (condY) {
      oy = oy.includes('top') ? y : oy.includes('bottom') ? y + height : y + height / 2;
    }
  } // Return the origin as it is if it wasn't a string


  return [ox, oy];
}

var utils = {
  __proto__: null,
  map: map,
  filter: filter,
  radians: radians,
  degrees: degrees,
  camelCase: camelCase,
  unCamelCase: unCamelCase,
  capitalize: capitalize,
  proportionalSize: proportionalSize,
  getOrigin: getOrigin
};

// Default namespaces
const svg = 'http://www.w3.org/2000/svg';
const html = 'http://www.w3.org/1999/xhtml';
const xmlns = 'http://www.w3.org/2000/xmlns/';
const xlink = 'http://www.w3.org/1999/xlink';
const svgjs = 'http://svgjs.dev/svgjs';

var namespaces = {
  __proto__: null,
  svg: svg,
  html: html,
  xmlns: xmlns,
  xlink: xlink,
  svgjs: svgjs
};

const globals = {
  window: typeof window === 'undefined' ? null : window,
  document: typeof document === 'undefined' ? null : document
};
function registerWindow(win = null, doc = null) {
  globals.window = win;
  globals.document = doc;
}
const save = {};
function saveWindow() {
  save.window = globals.window;
  save.document = globals.document;
}
function restoreWindow() {
  globals.window = save.window;
  globals.document = save.document;
}
function withWindow(win, fn) {
  saveWindow();
  registerWindow(win, win.document);
  fn(win, win.document);
  restoreWindow();
}
function getWindow() {
  return globals.window;
}

class Base {// constructor (node/*, {extensions = []} */) {
  //   // this.tags = []
  //   //
  //   // for (let extension of extensions) {
  //   //   extension.setup.call(this, node)
  //   //   this.tags.push(extension.name)
  //   // }
  // }
}

const elements = {};
const root = '___SYMBOL___ROOT___'; // Method for element creation

function create(name, ns = svg) {
  // create element
  return globals.document.createElementNS(ns, name);
}
function makeInstance(element, isHTML = false) {
  if (element instanceof Base) return element;

  if (typeof element === 'object') {
    return adopter(element);
  }

  if (element == null) {
    return new elements[root]();
  }

  if (typeof element === 'string' && element.charAt(0) !== '<') {
    return adopter(globals.document.querySelector(element));
  } // Make sure, that HTML elements are created with the correct namespace


  const wrapper = isHTML ? globals.document.createElement('div') : create('svg');
  wrapper.innerHTML = element; // We can use firstChild here because we know,
  // that the first char is < and thus an element

  element = adopter(wrapper.firstChild); // make sure, that element doesnt have its wrapper attached

  wrapper.removeChild(wrapper.firstChild);
  return element;
}
function nodeOrNew(name, node) {
  return node && node.ownerDocument && node instanceof node.ownerDocument.defaultView.Node ? node : create(name);
} // Adopt existing svg elements

function adopt(node) {
  // check for presence of node
  if (!node) return null; // make sure a node isn't already adopted

  if (node.instance instanceof Base) return node.instance;

  if (node.nodeName === '#document-fragment') {
    return new elements.Fragment(node);
  } // initialize variables


  let className = capitalize(node.nodeName || 'Dom'); // Make sure that gradients are adopted correctly

  if (className === 'LinearGradient' || className === 'RadialGradient') {
    className = 'Gradient'; // Fallback to Dom if element is not known
  } else if (!elements[className]) {
    className = 'Dom';
  }

  return new elements[className](node);
}
let adopter = adopt;
function mockAdopt(mock = adopt) {
  adopter = mock;
}
function register(element, name = element.name, asRoot = false) {
  elements[name] = element;
  if (asRoot) elements[root] = element;
  addMethodNames(Object.getOwnPropertyNames(element.prototype));
  return element;
}
function getClass(name) {
  return elements[name];
} // Element id sequence

let did = 1000; // Get next named element id

function eid(name) {
  return 'Svgjs' + capitalize(name) + did++;
} // Deep new id assignment

function assignNewId(node) {
  // do the same for SVG child nodes as well
  for (let i = node.children.length - 1; i >= 0; i--) {
    assignNewId(node.children[i]);
  }

  if (node.id) {
    node.id = eid(node.nodeName);
    return node;
  }

  return node;
} // Method for extending objects

function extend(modules, methods) {
  let key, i;
  modules = Array.isArray(modules) ? modules : [modules];

  for (i = modules.length - 1; i >= 0; i--) {
    for (key in methods) {
      modules[i].prototype[key] = methods[key];
    }
  }
}
function wrapWithAttrCheck(fn) {
  return function (...args) {
    const o = args[args.length - 1];

    if (o && o.constructor === Object && !(o instanceof Array)) {
      return fn.apply(this, args.slice(0, -1)).attr(o);
    } else {
      return fn.apply(this, args);
    }
  };
}

function siblings() {
  return this.parent().children();
} // Get the current position siblings

function position() {
  return this.parent().index(this);
} // Get the next element (will return null if there is none)

function next() {
  return this.siblings()[this.position() + 1];
} // Get the next element (will return null if there is none)

function prev() {
  return this.siblings()[this.position() - 1];
} // Send given element one step forward

function forward() {
  const i = this.position();
  const p = this.parent(); // move node one step forward

  p.add(this.remove(), i + 1);
  return this;
} // Send given element one step backward

function backward() {
  const i = this.position();
  const p = this.parent();
  p.add(this.remove(), i ? i - 1 : 0);
  return this;
} // Send given element all the way to the front

function front() {
  const p = this.parent(); // Move node forward

  p.add(this.remove());
  return this;
} // Send given element all the way to the back

function back() {
  const p = this.parent(); // Move node back

  p.add(this.remove(), 0);
  return this;
} // Inserts a given element before the targeted element

function before(element) {
  element = makeInstance(element);
  element.remove();
  const i = this.position();
  this.parent().add(element, i);
  return this;
} // Inserts a given element after the targeted element

function after(element) {
  element = makeInstance(element);
  element.remove();
  const i = this.position();
  this.parent().add(element, i + 1);
  return this;
}
function insertBefore(element) {
  element = makeInstance(element);
  element.before(this);
  return this;
}
function insertAfter(element) {
  element = makeInstance(element);
  element.after(this);
  return this;
}
registerMethods('Dom', {
  siblings,
  position,
  next,
  prev,
  forward,
  backward,
  front,
  back,
  before,
  after,
  insertBefore,
  insertAfter
});

// Parse unit value
const numberAndUnit = /^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i; // Parse hex value

const hex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i; // Parse rgb value

const rgb = /rgb\((\d+),(\d+),(\d+)\)/; // Parse reference id

const reference = /(#[a-z_][a-z0-9\-_]*)/i; // splits a transformation chain

const transforms = /\)\s*,?\s*/; // Whitespace

const whitespace = /\s/g; // Test hex value

const isHex = /^#[a-f0-9]{3}$|^#[a-f0-9]{6}$/i; // Test rgb value

const isRgb = /^rgb\(/; // Test for blank string

const isBlank = /^(\s+)?$/; // Test for numeric string

const isNumber = /^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i; // Test for image url

const isImage = /\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i; // split at whitespace and comma

const delimiter = /[\s,]+/; // Test for path letter

const isPathLetter = /[MLHVCSQTAZ]/i;

var regex = {
  __proto__: null,
  numberAndUnit: numberAndUnit,
  hex: hex,
  rgb: rgb,
  reference: reference,
  transforms: transforms,
  whitespace: whitespace,
  isHex: isHex,
  isRgb: isRgb,
  isBlank: isBlank,
  isNumber: isNumber,
  isImage: isImage,
  delimiter: delimiter,
  isPathLetter: isPathLetter
};

function classes() {
  const attr = this.attr('class');
  return attr == null ? [] : attr.trim().split(delimiter);
} // Return true if class exists on the node, false otherwise

function hasClass(name) {
  return this.classes().indexOf(name) !== -1;
} // Add class to the node

function addClass(name) {
  if (!this.hasClass(name)) {
    const array = this.classes();
    array.push(name);
    this.attr('class', array.join(' '));
  }

  return this;
} // Remove class from the node

function removeClass(name) {
  if (this.hasClass(name)) {
    this.attr('class', this.classes().filter(function (c) {
      return c !== name;
    }).join(' '));
  }

  return this;
} // Toggle the presence of a class on the node

function toggleClass(name) {
  return this.hasClass(name) ? this.removeClass(name) : this.addClass(name);
}
registerMethods('Dom', {
  classes,
  hasClass,
  addClass,
  removeClass,
  toggleClass
});

function css(style, val) {
  const ret = {};

  if (arguments.length === 0) {
    // get full style as object
    this.node.style.cssText.split(/\s*;\s*/).filter(function (el) {
      return !!el.length;
    }).forEach(function (el) {
      const t = el.split(/\s*:\s*/);
      ret[t[0]] = t[1];
    });
    return ret;
  }

  if (arguments.length < 2) {
    // get style properties as array
    if (Array.isArray(style)) {
      for (const name of style) {
        const cased = camelCase(name);
        ret[name] = this.node.style[cased];
      }

      return ret;
    } // get style for property


    if (typeof style === 'string') {
      return this.node.style[camelCase(style)];
    } // set styles in object


    if (typeof style === 'object') {
      for (const name in style) {
        // set empty string if null/undefined/'' was given
        this.node.style[camelCase(name)] = style[name] == null || isBlank.test(style[name]) ? '' : style[name];
      }
    }
  } // set style for property


  if (arguments.length === 2) {
    this.node.style[camelCase(style)] = val == null || isBlank.test(val) ? '' : val;
  }

  return this;
} // Show element

function show() {
  return this.css('display', '');
} // Hide element

function hide() {
  return this.css('display', 'none');
} // Is element visible?

function visible() {
  return this.css('display') !== 'none';
}
registerMethods('Dom', {
  css,
  show,
  hide,
  visible
});

function data(a, v, r) {
  if (a == null) {
    // get an object of attributes
    return this.data(map(filter(this.node.attributes, el => el.nodeName.indexOf('data-') === 0), el => el.nodeName.slice(5)));
  } else if (a instanceof Array) {
    const data = {};

    for (const key of a) {
      data[key] = this.data(key);
    }

    return data;
  } else if (typeof a === 'object') {
    for (v in a) {
      this.data(v, a[v]);
    }
  } else if (arguments.length < 2) {
    try {
      return JSON.parse(this.attr('data-' + a));
    } catch (e) {
      return this.attr('data-' + a);
    }
  } else {
    this.attr('data-' + a, v === null ? null : r === true || typeof v === 'string' || typeof v === 'number' ? v : JSON.stringify(v));
  }

  return this;
}
registerMethods('Dom', {
  data
});

function remember(k, v) {
  // remember every item in an object individually
  if (typeof arguments[0] === 'object') {
    for (const key in k) {
      this.remember(key, k[key]);
    }
  } else if (arguments.length === 1) {
    // retrieve memory
    return this.memory()[k];
  } else {
    // store memory
    this.memory()[k] = v;
  }

  return this;
} // Erase a given memory

function forget() {
  if (arguments.length === 0) {
    this._memory = {};
  } else {
    for (let i = arguments.length - 1; i >= 0; i--) {
      delete this.memory()[arguments[i]];
    }
  }

  return this;
} // This triggers creation of a new hidden class which is not performant
// However, this function is not rarely used so it will not happen frequently
// Return local memory object

function memory() {
  return this._memory = this._memory || {};
}
registerMethods('Dom', {
  remember,
  forget,
  memory
});

function sixDigitHex(hex) {
  return hex.length === 4 ? ['#', hex.substring(1, 2), hex.substring(1, 2), hex.substring(2, 3), hex.substring(2, 3), hex.substring(3, 4), hex.substring(3, 4)].join('') : hex;
}

function componentHex(component) {
  const integer = Math.round(component);
  const bounded = Math.max(0, Math.min(255, integer));
  const hex = bounded.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}

function is(object, space) {
  for (let i = space.length; i--;) {
    if (object[space[i]] == null) {
      return false;
    }
  }

  return true;
}

function getParameters(a, b) {
  const params = is(a, 'rgb') ? {
    _a: a.r,
    _b: a.g,
    _c: a.b,
    _d: 0,
    space: 'rgb'
  } : is(a, 'xyz') ? {
    _a: a.x,
    _b: a.y,
    _c: a.z,
    _d: 0,
    space: 'xyz'
  } : is(a, 'hsl') ? {
    _a: a.h,
    _b: a.s,
    _c: a.l,
    _d: 0,
    space: 'hsl'
  } : is(a, 'lab') ? {
    _a: a.l,
    _b: a.a,
    _c: a.b,
    _d: 0,
    space: 'lab'
  } : is(a, 'lch') ? {
    _a: a.l,
    _b: a.c,
    _c: a.h,
    _d: 0,
    space: 'lch'
  } : is(a, 'cmyk') ? {
    _a: a.c,
    _b: a.m,
    _c: a.y,
    _d: a.k,
    space: 'cmyk'
  } : {
    _a: 0,
    _b: 0,
    _c: 0,
    space: 'rgb'
  };
  params.space = b || params.space;
  return params;
}

function cieSpace(space) {
  if (space === 'lab' || space === 'xyz' || space === 'lch') {
    return true;
  } else {
    return false;
  }
}

function hueToRgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

class Color {
  constructor(...inputs) {
    this.init(...inputs);
  } // Test if given value is a color


  static isColor(color) {
    return color && (color instanceof Color || this.isRgb(color) || this.test(color));
  } // Test if given value is an rgb object


  static isRgb(color) {
    return color && typeof color.r === 'number' && typeof color.g === 'number' && typeof color.b === 'number';
  }
  /*
  Generating random colors
  */


  static random(mode = 'vibrant', t, u) {
    // Get the math modules
    const {
      random,
      round,
      sin,
      PI: pi
    } = Math; // Run the correct generator

    if (mode === 'vibrant') {
      const l = (81 - 57) * random() + 57;
      const c = (83 - 45) * random() + 45;
      const h = 360 * random();
      const color = new Color(l, c, h, 'lch');
      return color;
    } else if (mode === 'sine') {
      t = t == null ? random() : t;
      const r = round(80 * sin(2 * pi * t / 0.5 + 0.01) + 150);
      const g = round(50 * sin(2 * pi * t / 0.5 + 4.6) + 200);
      const b = round(100 * sin(2 * pi * t / 0.5 + 2.3) + 150);
      const color = new Color(r, g, b);
      return color;
    } else if (mode === 'pastel') {
      const l = (94 - 86) * random() + 86;
      const c = (26 - 9) * random() + 9;
      const h = 360 * random();
      const color = new Color(l, c, h, 'lch');
      return color;
    } else if (mode === 'dark') {
      const l = 10 + 10 * random();
      const c = (125 - 75) * random() + 86;
      const h = 360 * random();
      const color = new Color(l, c, h, 'lch');
      return color;
    } else if (mode === 'rgb') {
      const r = 255 * random();
      const g = 255 * random();
      const b = 255 * random();
      const color = new Color(r, g, b);
      return color;
    } else if (mode === 'lab') {
      const l = 100 * random();
      const a = 256 * random() - 128;
      const b = 256 * random() - 128;
      const color = new Color(l, a, b, 'lab');
      return color;
    } else if (mode === 'grey') {
      const grey = 255 * random();
      const color = new Color(grey, grey, grey);
      return color;
    } else {
      throw new Error('Unsupported random color mode');
    }
  } // Test if given value is a color string


  static test(color) {
    return typeof color === 'string' && (isHex.test(color) || isRgb.test(color));
  }

  cmyk() {
    // Get the rgb values for the current color
    const {
      _a,
      _b,
      _c
    } = this.rgb();
    const [r, g, b] = [_a, _b, _c].map(v => v / 255); // Get the cmyk values in an unbounded format

    const k = Math.min(1 - r, 1 - g, 1 - b);

    if (k === 1) {
      // Catch the black case
      return new Color(0, 0, 0, 1, 'cmyk');
    }

    const c = (1 - r - k) / (1 - k);
    const m = (1 - g - k) / (1 - k);
    const y = (1 - b - k) / (1 - k); // Construct the new color

    const color = new Color(c, m, y, k, 'cmyk');
    return color;
  }

  hsl() {
    // Get the rgb values
    const {
      _a,
      _b,
      _c
    } = this.rgb();
    const [r, g, b] = [_a, _b, _c].map(v => v / 255); // Find the maximum and minimum values to get the lightness

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const l = (max + min) / 2; // If the r, g, v values are identical then we are grey

    const isGrey = max === min; // Calculate the hue and saturation

    const delta = max - min;
    const s = isGrey ? 0 : l > 0.5 ? delta / (2 - max - min) : delta / (max + min);
    const h = isGrey ? 0 : max === r ? ((g - b) / delta + (g < b ? 6 : 0)) / 6 : max === g ? ((b - r) / delta + 2) / 6 : max === b ? ((r - g) / delta + 4) / 6 : 0; // Construct and return the new color

    const color = new Color(360 * h, 100 * s, 100 * l, 'hsl');
    return color;
  }

  init(a = 0, b = 0, c = 0, d = 0, space = 'rgb') {
    // This catches the case when a falsy value is passed like ''
    a = !a ? 0 : a; // Reset all values in case the init function is rerun with new color space

    if (this.space) {
      for (const component in this.space) {
        delete this[this.space[component]];
      }
    }

    if (typeof a === 'number') {
      // Allow for the case that we don't need d...
      space = typeof d === 'string' ? d : space;
      d = typeof d === 'string' ? 0 : d; // Assign the values straight to the color

      Object.assign(this, {
        _a: a,
        _b: b,
        _c: c,
        _d: d,
        space
      }); // If the user gave us an array, make the color from it
    } else if (a instanceof Array) {
      this.space = b || (typeof a[3] === 'string' ? a[3] : a[4]) || 'rgb';
      Object.assign(this, {
        _a: a[0],
        _b: a[1],
        _c: a[2],
        _d: a[3] || 0
      });
    } else if (a instanceof Object) {
      // Set the object up and assign its values directly
      const values = getParameters(a, b);
      Object.assign(this, values);
    } else if (typeof a === 'string') {
      if (isRgb.test(a)) {
        const noWhitespace = a.replace(whitespace, '');
        const [_a, _b, _c] = rgb.exec(noWhitespace).slice(1, 4).map(v => parseInt(v));
        Object.assign(this, {
          _a,
          _b,
          _c,
          _d: 0,
          space: 'rgb'
        });
      } else if (isHex.test(a)) {
        const hexParse = v => parseInt(v, 16);

        const [, _a, _b, _c] = hex.exec(sixDigitHex(a)).map(hexParse);
        Object.assign(this, {
          _a,
          _b,
          _c,
          _d: 0,
          space: 'rgb'
        });
      } else throw Error('Unsupported string format, can\'t construct Color');
    } // Now add the components as a convenience


    const {
      _a,
      _b,
      _c,
      _d
    } = this;
    const components = this.space === 'rgb' ? {
      r: _a,
      g: _b,
      b: _c
    } : this.space === 'xyz' ? {
      x: _a,
      y: _b,
      z: _c
    } : this.space === 'hsl' ? {
      h: _a,
      s: _b,
      l: _c
    } : this.space === 'lab' ? {
      l: _a,
      a: _b,
      b: _c
    } : this.space === 'lch' ? {
      l: _a,
      c: _b,
      h: _c
    } : this.space === 'cmyk' ? {
      c: _a,
      m: _b,
      y: _c,
      k: _d
    } : {};
    Object.assign(this, components);
  }

  lab() {
    // Get the xyz color
    const {
      x,
      y,
      z
    } = this.xyz(); // Get the lab components

    const l = 116 * y - 16;
    const a = 500 * (x - y);
    const b = 200 * (y - z); // Construct and return a new color

    const color = new Color(l, a, b, 'lab');
    return color;
  }

  lch() {
    // Get the lab color directly
    const {
      l,
      a,
      b
    } = this.lab(); // Get the chromaticity and the hue using polar coordinates

    const c = Math.sqrt(a ** 2 + b ** 2);
    let h = 180 * Math.atan2(b, a) / Math.PI;

    if (h < 0) {
      h *= -1;
      h = 360 - h;
    } // Make a new color and return it


    const color = new Color(l, c, h, 'lch');
    return color;
  }
  /*
  Conversion Methods
  */


  rgb() {
    if (this.space === 'rgb') {
      return this;
    } else if (cieSpace(this.space)) {
      // Convert to the xyz color space
      let {
        x,
        y,
        z
      } = this;

      if (this.space === 'lab' || this.space === 'lch') {
        // Get the values in the lab space
        let {
          l,
          a,
          b
        } = this;

        if (this.space === 'lch') {
          const {
            c,
            h
          } = this;
          const dToR = Math.PI / 180;
          a = c * Math.cos(dToR * h);
          b = c * Math.sin(dToR * h);
        } // Undo the nonlinear function


        const yL = (l + 16) / 116;
        const xL = a / 500 + yL;
        const zL = yL - b / 200; // Get the xyz values

        const ct = 16 / 116;
        const mx = 0.008856;
        const nm = 7.787;
        x = 0.95047 * (xL ** 3 > mx ? xL ** 3 : (xL - ct) / nm);
        y = 1.00000 * (yL ** 3 > mx ? yL ** 3 : (yL - ct) / nm);
        z = 1.08883 * (zL ** 3 > mx ? zL ** 3 : (zL - ct) / nm);
      } // Convert xyz to unbounded rgb values


      const rU = x * 3.2406 + y * -1.5372 + z * -0.4986;
      const gU = x * -0.9689 + y * 1.8758 + z * 0.0415;
      const bU = x * 0.0557 + y * -0.2040 + z * 1.0570; // Convert the values to true rgb values

      const pow = Math.pow;
      const bd = 0.0031308;
      const r = rU > bd ? 1.055 * pow(rU, 1 / 2.4) - 0.055 : 12.92 * rU;
      const g = gU > bd ? 1.055 * pow(gU, 1 / 2.4) - 0.055 : 12.92 * gU;
      const b = bU > bd ? 1.055 * pow(bU, 1 / 2.4) - 0.055 : 12.92 * bU; // Make and return the color

      const color = new Color(255 * r, 255 * g, 255 * b);
      return color;
    } else if (this.space === 'hsl') {
      // https://bgrins.github.io/TinyColor/docs/tinycolor.html
      // Get the current hsl values
      let {
        h,
        s,
        l
      } = this;
      h /= 360;
      s /= 100;
      l /= 100; // If we are grey, then just make the color directly

      if (s === 0) {
        l *= 255;
        const color = new Color(l, l, l);
        return color;
      } // TODO I have no idea what this does :D If you figure it out, tell me!


      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q; // Get the rgb values

      const r = 255 * hueToRgb(p, q, h + 1 / 3);
      const g = 255 * hueToRgb(p, q, h);
      const b = 255 * hueToRgb(p, q, h - 1 / 3); // Make a new color

      const color = new Color(r, g, b);
      return color;
    } else if (this.space === 'cmyk') {
      // https://gist.github.com/felipesabino/5066336
      // Get the normalised cmyk values
      const {
        c,
        m,
        y,
        k
      } = this; // Get the rgb values

      const r = 255 * (1 - Math.min(1, c * (1 - k) + k));
      const g = 255 * (1 - Math.min(1, m * (1 - k) + k));
      const b = 255 * (1 - Math.min(1, y * (1 - k) + k)); // Form the color and return it

      const color = new Color(r, g, b);
      return color;
    } else {
      return this;
    }
  }

  toArray() {
    const {
      _a,
      _b,
      _c,
      _d,
      space
    } = this;
    return [_a, _b, _c, _d, space];
  }

  toHex() {
    const [r, g, b] = this._clamped().map(componentHex);

    return `#${r}${g}${b}`;
  }

  toRgb() {
    const [rV, gV, bV] = this._clamped();

    const string = `rgb(${rV},${gV},${bV})`;
    return string;
  }

  toString() {
    return this.toHex();
  }

  xyz() {
    // Normalise the red, green and blue values
    const {
      _a: r255,
      _b: g255,
      _c: b255
    } = this.rgb();
    const [r, g, b] = [r255, g255, b255].map(v => v / 255); // Convert to the lab rgb space

    const rL = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
    const gL = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
    const bL = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92; // Convert to the xyz color space without bounding the values

    const xU = (rL * 0.4124 + gL * 0.3576 + bL * 0.1805) / 0.95047;
    const yU = (rL * 0.2126 + gL * 0.7152 + bL * 0.0722) / 1.00000;
    const zU = (rL * 0.0193 + gL * 0.1192 + bL * 0.9505) / 1.08883; // Get the proper xyz values by applying the bounding

    const x = xU > 0.008856 ? Math.pow(xU, 1 / 3) : 7.787 * xU + 16 / 116;
    const y = yU > 0.008856 ? Math.pow(yU, 1 / 3) : 7.787 * yU + 16 / 116;
    const z = zU > 0.008856 ? Math.pow(zU, 1 / 3) : 7.787 * zU + 16 / 116; // Make and return the color

    const color = new Color(x, y, z, 'xyz');
    return color;
  }
  /*
  Input and Output methods
  */


  _clamped() {
    const {
      _a,
      _b,
      _c
    } = this.rgb();
    const {
      max,
      min,
      round
    } = Math;

    const format = v => max(0, min(round(v), 255));

    return [_a, _b, _c].map(format);
  }
  /*
  Constructing colors
  */


}

class Point {
  // Initialize
  constructor(...args) {
    this.init(...args);
  } // Clone point


  clone() {
    return new Point(this);
  }

  init(x, y) {
    const base = {
      x: 0,
      y: 0
    }; // ensure source as object

    const source = Array.isArray(x) ? {
      x: x[0],
      y: x[1]
    } : typeof x === 'object' ? {
      x: x.x,
      y: x.y
    } : {
      x: x,
      y: y
    }; // merge source

    this.x = source.x == null ? base.x : source.x;
    this.y = source.y == null ? base.y : source.y;
    return this;
  }

  toArray() {
    return [this.x, this.y];
  }

  transform(m) {
    return this.clone().transformO(m);
  } // Transform point with matrix


  transformO(m) {
    if (!Matrix.isMatrixLike(m)) {
      m = new Matrix(m);
    }

    const {
      x,
      y
    } = this; // Perform the matrix multiplication

    this.x = m.a * x + m.c * y + m.e;
    this.y = m.b * x + m.d * y + m.f;
    return this;
  }

}
function point(x, y) {
  return new Point(x, y).transform(this.screenCTM().inverse());
}

function closeEnough(a, b, threshold) {
  return Math.abs(b - a) < (threshold || 1e-6);
}

class Matrix {
  constructor(...args) {
    this.init(...args);
  }

  static formatTransforms(o) {
    // Get all of the parameters required to form the matrix
    const flipBoth = o.flip === 'both' || o.flip === true;
    const flipX = o.flip && (flipBoth || o.flip === 'x') ? -1 : 1;
    const flipY = o.flip && (flipBoth || o.flip === 'y') ? -1 : 1;
    const skewX = o.skew && o.skew.length ? o.skew[0] : isFinite(o.skew) ? o.skew : isFinite(o.skewX) ? o.skewX : 0;
    const skewY = o.skew && o.skew.length ? o.skew[1] : isFinite(o.skew) ? o.skew : isFinite(o.skewY) ? o.skewY : 0;
    const scaleX = o.scale && o.scale.length ? o.scale[0] * flipX : isFinite(o.scale) ? o.scale * flipX : isFinite(o.scaleX) ? o.scaleX * flipX : flipX;
    const scaleY = o.scale && o.scale.length ? o.scale[1] * flipY : isFinite(o.scale) ? o.scale * flipY : isFinite(o.scaleY) ? o.scaleY * flipY : flipY;
    const shear = o.shear || 0;
    const theta = o.rotate || o.theta || 0;
    const origin = new Point(o.origin || o.around || o.ox || o.originX, o.oy || o.originY);
    const ox = origin.x;
    const oy = origin.y; // We need Point to be invalid if nothing was passed because we cannot default to 0 here. Thats why NaN

    const position = new Point(o.position || o.px || o.positionX || NaN, o.py || o.positionY || NaN);
    const px = position.x;
    const py = position.y;
    const translate = new Point(o.translate || o.tx || o.translateX, o.ty || o.translateY);
    const tx = translate.x;
    const ty = translate.y;
    const relative = new Point(o.relative || o.rx || o.relativeX, o.ry || o.relativeY);
    const rx = relative.x;
    const ry = relative.y; // Populate all of the values

    return {
      scaleX,
      scaleY,
      skewX,
      skewY,
      shear,
      theta,
      rx,
      ry,
      tx,
      ty,
      ox,
      oy,
      px,
      py
    };
  }

  static fromArray(a) {
    return {
      a: a[0],
      b: a[1],
      c: a[2],
      d: a[3],
      e: a[4],
      f: a[5]
    };
  }

  static isMatrixLike(o) {
    return o.a != null || o.b != null || o.c != null || o.d != null || o.e != null || o.f != null;
  } // left matrix, right matrix, target matrix which is overwritten


  static matrixMultiply(l, r, o) {
    // Work out the product directly
    const a = l.a * r.a + l.c * r.b;
    const b = l.b * r.a + l.d * r.b;
    const c = l.a * r.c + l.c * r.d;
    const d = l.b * r.c + l.d * r.d;
    const e = l.e + l.a * r.e + l.c * r.f;
    const f = l.f + l.b * r.e + l.d * r.f; // make sure to use local variables because l/r and o could be the same

    o.a = a;
    o.b = b;
    o.c = c;
    o.d = d;
    o.e = e;
    o.f = f;
    return o;
  }

  around(cx, cy, matrix) {
    return this.clone().aroundO(cx, cy, matrix);
  } // Transform around a center point


  aroundO(cx, cy, matrix) {
    const dx = cx || 0;
    const dy = cy || 0;
    return this.translateO(-dx, -dy).lmultiplyO(matrix).translateO(dx, dy);
  } // Clones this matrix


  clone() {
    return new Matrix(this);
  } // Decomposes this matrix into its affine parameters


  decompose(cx = 0, cy = 0) {
    // Get the parameters from the matrix
    const a = this.a;
    const b = this.b;
    const c = this.c;
    const d = this.d;
    const e = this.e;
    const f = this.f; // Figure out if the winding direction is clockwise or counterclockwise

    const determinant = a * d - b * c;
    const ccw = determinant > 0 ? 1 : -1; // Since we only shear in x, we can use the x basis to get the x scale
    // and the rotation of the resulting matrix

    const sx = ccw * Math.sqrt(a * a + b * b);
    const thetaRad = Math.atan2(ccw * b, ccw * a);
    const theta = 180 / Math.PI * thetaRad;
    const ct = Math.cos(thetaRad);
    const st = Math.sin(thetaRad); // We can then solve the y basis vector simultaneously to get the other
    // two affine parameters directly from these parameters

    const lam = (a * c + b * d) / determinant;
    const sy = c * sx / (lam * a - b) || d * sx / (lam * b + a); // Use the translations

    const tx = e - cx + cx * ct * sx + cy * (lam * ct * sx - st * sy);
    const ty = f - cy + cx * st * sx + cy * (lam * st * sx + ct * sy); // Construct the decomposition and return it

    return {
      // Return the affine parameters
      scaleX: sx,
      scaleY: sy,
      shear: lam,
      rotate: theta,
      translateX: tx,
      translateY: ty,
      originX: cx,
      originY: cy,
      // Return the matrix parameters
      a: this.a,
      b: this.b,
      c: this.c,
      d: this.d,
      e: this.e,
      f: this.f
    };
  } // Check if two matrices are equal


  equals(other) {
    if (other === this) return true;
    const comp = new Matrix(other);
    return closeEnough(this.a, comp.a) && closeEnough(this.b, comp.b) && closeEnough(this.c, comp.c) && closeEnough(this.d, comp.d) && closeEnough(this.e, comp.e) && closeEnough(this.f, comp.f);
  } // Flip matrix on x or y, at a given offset


  flip(axis, around) {
    return this.clone().flipO(axis, around);
  }

  flipO(axis, around) {
    return axis === 'x' ? this.scaleO(-1, 1, around, 0) : axis === 'y' ? this.scaleO(1, -1, 0, around) : this.scaleO(-1, -1, axis, around || axis); // Define an x, y flip point
  } // Initialize


  init(source) {
    const base = Matrix.fromArray([1, 0, 0, 1, 0, 0]); // ensure source as object

    source = source instanceof Element ? source.matrixify() : typeof source === 'string' ? Matrix.fromArray(source.split(delimiter).map(parseFloat)) : Array.isArray(source) ? Matrix.fromArray(source) : typeof source === 'object' && Matrix.isMatrixLike(source) ? source : typeof source === 'object' ? new Matrix().transform(source) : arguments.length === 6 ? Matrix.fromArray([].slice.call(arguments)) : base; // Merge the source matrix with the base matrix

    this.a = source.a != null ? source.a : base.a;
    this.b = source.b != null ? source.b : base.b;
    this.c = source.c != null ? source.c : base.c;
    this.d = source.d != null ? source.d : base.d;
    this.e = source.e != null ? source.e : base.e;
    this.f = source.f != null ? source.f : base.f;
    return this;
  }

  inverse() {
    return this.clone().inverseO();
  } // Inverses matrix


  inverseO() {
    // Get the current parameters out of the matrix
    const a = this.a;
    const b = this.b;
    const c = this.c;
    const d = this.d;
    const e = this.e;
    const f = this.f; // Invert the 2x2 matrix in the top left

    const det = a * d - b * c;
    if (!det) throw new Error('Cannot invert ' + this); // Calculate the top 2x2 matrix

    const na = d / det;
    const nb = -b / det;
    const nc = -c / det;
    const nd = a / det; // Apply the inverted matrix to the top right

    const ne = -(na * e + nc * f);
    const nf = -(nb * e + nd * f); // Construct the inverted matrix

    this.a = na;
    this.b = nb;
    this.c = nc;
    this.d = nd;
    this.e = ne;
    this.f = nf;
    return this;
  }

  lmultiply(matrix) {
    return this.clone().lmultiplyO(matrix);
  }

  lmultiplyO(matrix) {
    const r = this;
    const l = matrix instanceof Matrix ? matrix : new Matrix(matrix);
    return Matrix.matrixMultiply(l, r, this);
  } // Left multiplies by the given matrix


  multiply(matrix) {
    return this.clone().multiplyO(matrix);
  }

  multiplyO(matrix) {
    // Get the matrices
    const l = this;
    const r = matrix instanceof Matrix ? matrix : new Matrix(matrix);
    return Matrix.matrixMultiply(l, r, this);
  } // Rotate matrix


  rotate(r, cx, cy) {
    return this.clone().rotateO(r, cx, cy);
  }

  rotateO(r, cx = 0, cy = 0) {
    // Convert degrees to radians
    r = radians(r);
    const cos = Math.cos(r);
    const sin = Math.sin(r);
    const {
      a,
      b,
      c,
      d,
      e,
      f
    } = this;
    this.a = a * cos - b * sin;
    this.b = b * cos + a * sin;
    this.c = c * cos - d * sin;
    this.d = d * cos + c * sin;
    this.e = e * cos - f * sin + cy * sin - cx * cos + cx;
    this.f = f * cos + e * sin - cx * sin - cy * cos + cy;
    return this;
  } // Scale matrix


  scale(x, y, cx, cy) {
    return this.clone().scaleO(...arguments);
  }

  scaleO(x, y = x, cx = 0, cy = 0) {
    // Support uniform scaling
    if (arguments.length === 3) {
      cy = cx;
      cx = y;
      y = x;
    }

    const {
      a,
      b,
      c,
      d,
      e,
      f
    } = this;
    this.a = a * x;
    this.b = b * y;
    this.c = c * x;
    this.d = d * y;
    this.e = e * x - cx * x + cx;
    this.f = f * y - cy * y + cy;
    return this;
  } // Shear matrix


  shear(a, cx, cy) {
    return this.clone().shearO(a, cx, cy);
  }

  shearO(lx, cx = 0, cy = 0) {
    const {
      a,
      b,
      c,
      d,
      e,
      f
    } = this;
    this.a = a + b * lx;
    this.c = c + d * lx;
    this.e = e + f * lx - cy * lx;
    return this;
  } // Skew Matrix


  skew(x, y, cx, cy) {
    return this.clone().skewO(...arguments);
  }

  skewO(x, y = x, cx = 0, cy = 0) {
    // support uniformal skew
    if (arguments.length === 3) {
      cy = cx;
      cx = y;
      y = x;
    } // Convert degrees to radians


    x = radians(x);
    y = radians(y);
    const lx = Math.tan(x);
    const ly = Math.tan(y);
    const {
      a,
      b,
      c,
      d,
      e,
      f
    } = this;
    this.a = a + b * lx;
    this.b = b + a * ly;
    this.c = c + d * lx;
    this.d = d + c * ly;
    this.e = e + f * lx - cy * lx;
    this.f = f + e * ly - cx * ly;
    return this;
  } // SkewX


  skewX(x, cx, cy) {
    return this.skew(x, 0, cx, cy);
  } // SkewY


  skewY(y, cx, cy) {
    return this.skew(0, y, cx, cy);
  }

  toArray() {
    return [this.a, this.b, this.c, this.d, this.e, this.f];
  } // Convert matrix to string


  toString() {
    return 'matrix(' + this.a + ',' + this.b + ',' + this.c + ',' + this.d + ',' + this.e + ',' + this.f + ')';
  } // Transform a matrix into another matrix by manipulating the space


  transform(o) {
    // Check if o is a matrix and then left multiply it directly
    if (Matrix.isMatrixLike(o)) {
      const matrix = new Matrix(o);
      return matrix.multiplyO(this);
    } // Get the proposed transformations and the current transformations


    const t = Matrix.formatTransforms(o);
    const current = this;
    const {
      x: ox,
      y: oy
    } = new Point(t.ox, t.oy).transform(current); // Construct the resulting matrix

    const transformer = new Matrix().translateO(t.rx, t.ry).lmultiplyO(current).translateO(-ox, -oy).scaleO(t.scaleX, t.scaleY).skewO(t.skewX, t.skewY).shearO(t.shear).rotateO(t.theta).translateO(ox, oy); // If we want the origin at a particular place, we force it there

    if (isFinite(t.px) || isFinite(t.py)) {
      const origin = new Point(ox, oy).transform(transformer); // TODO: Replace t.px with isFinite(t.px)
      // Doesnt work because t.px is also 0 if it wasnt passed

      const dx = isFinite(t.px) ? t.px - origin.x : 0;
      const dy = isFinite(t.py) ? t.py - origin.y : 0;
      transformer.translateO(dx, dy);
    } // Translate now after positioning


    transformer.translateO(t.tx, t.ty);
    return transformer;
  } // Translate matrix


  translate(x, y) {
    return this.clone().translateO(x, y);
  }

  translateO(x, y) {
    this.e += x || 0;
    this.f += y || 0;
    return this;
  }

  valueOf() {
    return {
      a: this.a,
      b: this.b,
      c: this.c,
      d: this.d,
      e: this.e,
      f: this.f
    };
  }

}
function ctm() {
  return new Matrix(this.node.getCTM());
}
function screenCTM() {
  /* https://bugzilla.mozilla.org/show_bug.cgi?id=1344537
     This is needed because FF does not return the transformation matrix
     for the inner coordinate system when getScreenCTM() is called on nested svgs.
     However all other Browsers do that */
  if (typeof this.isRoot === 'function' && !this.isRoot()) {
    const rect = this.rect(1, 1);
    const m = rect.node.getScreenCTM();
    rect.remove();
    return new Matrix(m);
  }

  return new Matrix(this.node.getScreenCTM());
}
register(Matrix, 'Matrix');

function parser() {
  // Reuse cached element if possible
  if (!parser.nodes) {
    const svg = makeInstance().size(2, 0);
    svg.node.style.cssText = ['opacity: 0', 'position: absolute', 'left: -100%', 'top: -100%', 'overflow: hidden'].join(';');
    svg.attr('focusable', 'false');
    svg.attr('aria-hidden', 'true');
    const path = svg.path().node;
    parser.nodes = {
      svg,
      path
    };
  }

  if (!parser.nodes.svg.node.parentNode) {
    const b = globals.document.body || globals.document.documentElement;
    parser.nodes.svg.addTo(b);
  }

  return parser.nodes;
}

function isNulledBox(box) {
  return !box.width && !box.height && !box.x && !box.y;
}
function domContains(node) {
  return node === globals.document || (globals.document.documentElement.contains || function (node) {
    // This is IE - it does not support contains() for top-level SVGs
    while (node.parentNode) {
      node = node.parentNode;
    }

    return node === globals.document;
  }).call(globals.document.documentElement, node);
}
class Box {
  constructor(...args) {
    this.init(...args);
  }

  addOffset() {
    // offset by window scroll position, because getBoundingClientRect changes when window is scrolled
    this.x += globals.window.pageXOffset;
    this.y += globals.window.pageYOffset;
    return new Box(this);
  }

  init(source) {
    const base = [0, 0, 0, 0];
    source = typeof source === 'string' ? source.split(delimiter).map(parseFloat) : Array.isArray(source) ? source : typeof source === 'object' ? [source.left != null ? source.left : source.x, source.top != null ? source.top : source.y, source.width, source.height] : arguments.length === 4 ? [].slice.call(arguments) : base;
    this.x = source[0] || 0;
    this.y = source[1] || 0;
    this.width = this.w = source[2] || 0;
    this.height = this.h = source[3] || 0; // Add more bounding box properties

    this.x2 = this.x + this.w;
    this.y2 = this.y + this.h;
    this.cx = this.x + this.w / 2;
    this.cy = this.y + this.h / 2;
    return this;
  }

  isNulled() {
    return isNulledBox(this);
  } // Merge rect box with another, return a new instance


  merge(box) {
    const x = Math.min(this.x, box.x);
    const y = Math.min(this.y, box.y);
    const width = Math.max(this.x + this.width, box.x + box.width) - x;
    const height = Math.max(this.y + this.height, box.y + box.height) - y;
    return new Box(x, y, width, height);
  }

  toArray() {
    return [this.x, this.y, this.width, this.height];
  }

  toString() {
    return this.x + ' ' + this.y + ' ' + this.width + ' ' + this.height;
  }

  transform(m) {
    if (!(m instanceof Matrix)) {
      m = new Matrix(m);
    }

    let xMin = Infinity;
    let xMax = -Infinity;
    let yMin = Infinity;
    let yMax = -Infinity;
    const pts = [new Point(this.x, this.y), new Point(this.x2, this.y), new Point(this.x, this.y2), new Point(this.x2, this.y2)];
    pts.forEach(function (p) {
      p = p.transform(m);
      xMin = Math.min(xMin, p.x);
      xMax = Math.max(xMax, p.x);
      yMin = Math.min(yMin, p.y);
      yMax = Math.max(yMax, p.y);
    });
    return new Box(xMin, yMin, xMax - xMin, yMax - yMin);
  }

}

function getBox(el, getBBoxFn, retry) {
  let box;

  try {
    // Try to get the box with the provided function
    box = getBBoxFn(el.node); // If the box is worthless and not even in the dom, retry
    // by throwing an error here...

    if (isNulledBox(box) && !domContains(el.node)) {
      throw new Error('Element not in the dom');
    }
  } catch (e) {
    // ... and calling the retry handler here
    box = retry(el);
  }

  return box;
}

function bbox() {
  // Function to get bbox is getBBox()
  const getBBox = node => node.getBBox(); // Take all measures so that a stupid browser renders the element
  // so we can get the bbox from it when we try again


  const retry = el => {
    try {
      const clone = el.clone().addTo(parser().svg).show();
      const box = clone.node.getBBox();
      clone.remove();
      return box;
    } catch (e) {
      // We give up...
      throw new Error(`Getting bbox of element "${el.node.nodeName}" is not possible: ${e.toString()}`);
    }
  };

  const box = getBox(this, getBBox, retry);
  const bbox = new Box(box);
  return bbox;
}
function rbox(el) {
  const getRBox = node => node.getBoundingClientRect();

  const retry = el => {
    // There is no point in trying tricks here because if we insert the element into the dom ourselves
    // it obviously will be at the wrong position
    throw new Error(`Getting rbox of element "${el.node.nodeName}" is not possible`);
  };

  const box = getBox(this, getRBox, retry);
  const rbox = new Box(box); // If an element was passed, we want the bbox in the coordinate system of that element

  if (el) {
    return rbox.transform(el.screenCTM().inverseO());
  } // Else we want it in absolute screen coordinates
  // Therefore we need to add the scrollOffset


  return rbox.addOffset();
} // Checks whether the given point is inside the bounding box

function inside(x, y) {
  const box = this.bbox();
  return x > box.x && y > box.y && x < box.x + box.width && y < box.y + box.height;
}
registerMethods({
  viewbox: {
    viewbox(x, y, width, height) {
      // act as getter
      if (x == null) return new Box(this.attr('viewBox')); // act as setter

      return this.attr('viewBox', new Box(x, y, width, height));
    },

    zoom(level, point) {
      // Its best to rely on the attributes here and here is why:
      // clientXYZ: Doesn't work on non-root svgs because they dont have a CSSBox (silly!)
      // getBoundingClientRect: Doesn't work because Chrome just ignores width and height of nested svgs completely
      //                        that means, their clientRect is always as big as the content.
      //                        Furthermore this size is incorrect if the element is further transformed by its parents
      // computedStyle: Only returns meaningful values if css was used with px. We dont go this route here!
      // getBBox: returns the bounding box of its content - that doesnt help!
      let {
        width,
        height
      } = this.attr(['width', 'height']); // Width and height is a string when a number with a unit is present which we can't use
      // So we try clientXYZ

      if (!width && !height || typeof width === 'string' || typeof height === 'string') {
        width = this.node.clientWidth;
        height = this.node.clientHeight;
      } // Giving up...


      if (!width || !height) {
        throw new Error('Impossible to get absolute width and height. Please provide an absolute width and height attribute on the zooming element');
      }

      const v = this.viewbox();
      const zoomX = width / v.width;
      const zoomY = height / v.height;
      const zoom = Math.min(zoomX, zoomY);

      if (level == null) {
        return zoom;
      }

      let zoomAmount = zoom / level; // Set the zoomAmount to the highest value which is safe to process and recover from
      // The * 100 is a bit of wiggle room for the matrix transformation

      if (zoomAmount === Infinity) zoomAmount = Number.MAX_SAFE_INTEGER / 100;
      point = point || new Point(width / 2 / zoomX + v.x, height / 2 / zoomY + v.y);
      const box = new Box(v).transform(new Matrix({
        scale: zoomAmount,
        origin: point
      }));
      return this.viewbox(box);
    }

  }
});
register(Box, 'Box');

class List extends Array {
  constructor(arr = [], ...args) {
    super(arr, ...args);
    if (typeof arr === 'number') return this;
    this.length = 0;
    this.push(...arr);
  }

}
extend([List], {
  each(fnOrMethodName, ...args) {
    if (typeof fnOrMethodName === 'function') {
      return this.map((el, i, arr) => {
        return fnOrMethodName.call(el, el, i, arr);
      });
    } else {
      return this.map(el => {
        return el[fnOrMethodName](...args);
      });
    }
  },

  toArray() {
    return Array.prototype.concat.apply([], this);
  }

});
const reserved = ['toArray', 'constructor', 'each'];

List.extend = function (methods) {
  methods = methods.reduce((obj, name) => {
    // Don't overwrite own methods
    if (reserved.includes(name)) return obj; // Don't add private methods

    if (name[0] === '_') return obj; // Relay every call to each()

    obj[name] = function (...attrs) {
      return this.each(name, ...attrs);
    };

    return obj;
  }, {});
  extend([List], methods);
};

function baseFind(query, parent) {
  return new List(map((parent || globals.document).querySelectorAll(query), function (node) {
    return adopt(node);
  }));
} // Scoped find method

function find(query) {
  return baseFind(query, this.node);
}
function findOne(query) {
  return adopt(this.node.querySelector(query));
}

let listenerId = 0;
const windowEvents = {};
function getEvents(instance) {
  let n = instance.getEventHolder(); // We dont want to save events in global space

  if (n === globals.window) n = windowEvents;
  if (!n.events) n.events = {};
  return n.events;
}
function getEventTarget(instance) {
  return instance.getEventTarget();
}
function clearEvents(instance) {
  let n = instance.getEventHolder();
  if (n === globals.window) n = windowEvents;
  if (n.events) n.events = {};
} // Add event binder in the SVG namespace

function on(node, events, listener, binding, options) {
  const l = listener.bind(binding || node);
  const instance = makeInstance(node);
  const bag = getEvents(instance);
  const n = getEventTarget(instance); // events can be an array of events or a string of events

  events = Array.isArray(events) ? events : events.split(delimiter); // add id to listener

  if (!listener._svgjsListenerId) {
    listener._svgjsListenerId = ++listenerId;
  }

  events.forEach(function (event) {
    const ev = event.split('.')[0];
    const ns = event.split('.')[1] || '*'; // ensure valid object

    bag[ev] = bag[ev] || {};
    bag[ev][ns] = bag[ev][ns] || {}; // reference listener

    bag[ev][ns][listener._svgjsListenerId] = l; // add listener

    n.addEventListener(ev, l, options || false);
  });
} // Add event unbinder in the SVG namespace

function off(node, events, listener, options) {
  const instance = makeInstance(node);
  const bag = getEvents(instance);
  const n = getEventTarget(instance); // listener can be a function or a number

  if (typeof listener === 'function') {
    listener = listener._svgjsListenerId;
    if (!listener) return;
  } // events can be an array of events or a string or undefined


  events = Array.isArray(events) ? events : (events || '').split(delimiter);
  events.forEach(function (event) {
    const ev = event && event.split('.')[0];
    const ns = event && event.split('.')[1];
    let namespace, l;

    if (listener) {
      // remove listener reference
      if (bag[ev] && bag[ev][ns || '*']) {
        // removeListener
        n.removeEventListener(ev, bag[ev][ns || '*'][listener], options || false);
        delete bag[ev][ns || '*'][listener];
      }
    } else if (ev && ns) {
      // remove all listeners for a namespaced event
      if (bag[ev] && bag[ev][ns]) {
        for (l in bag[ev][ns]) {
          off(n, [ev, ns].join('.'), l);
        }

        delete bag[ev][ns];
      }
    } else if (ns) {
      // remove all listeners for a specific namespace
      for (event in bag) {
        for (namespace in bag[event]) {
          if (ns === namespace) {
            off(n, [event, ns].join('.'));
          }
        }
      }
    } else if (ev) {
      // remove all listeners for the event
      if (bag[ev]) {
        for (namespace in bag[ev]) {
          off(n, [ev, namespace].join('.'));
        }

        delete bag[ev];
      }
    } else {
      // remove all listeners on a given node
      for (event in bag) {
        off(n, event);
      }

      clearEvents(instance);
    }
  });
}
function dispatch(node, event, data, options) {
  const n = getEventTarget(node); // Dispatch event

  if (event instanceof globals.window.Event) {
    n.dispatchEvent(event);
  } else {
    event = new globals.window.CustomEvent(event, {
      detail: data,
      cancelable: true,
      ...options
    });
    n.dispatchEvent(event);
  }

  return event;
}

class EventTarget extends Base {
  addEventListener() {}

  dispatch(event, data, options) {
    return dispatch(this, event, data, options);
  }

  dispatchEvent(event) {
    const bag = this.getEventHolder().events;
    if (!bag) return true;
    const events = bag[event.type];

    for (const i in events) {
      for (const j in events[i]) {
        events[i][j](event);
      }
    }

    return !event.defaultPrevented;
  } // Fire given event


  fire(event, data, options) {
    this.dispatch(event, data, options);
    return this;
  }

  getEventHolder() {
    return this;
  }

  getEventTarget() {
    return this;
  } // Unbind event from listener


  off(event, listener, options) {
    off(this, event, listener, options);
    return this;
  } // Bind given event to listener


  on(event, listener, binding, options) {
    on(this, event, listener, binding, options);
    return this;
  }

  removeEventListener() {}

}
register(EventTarget, 'EventTarget');

function noop() {} // Default animation values

const timeline = {
  duration: 400,
  ease: '>',
  delay: 0
}; // Default attribute values

const attrs = {
  // fill and stroke
  'fill-opacity': 1,
  'stroke-opacity': 1,
  'stroke-width': 0,
  'stroke-linejoin': 'miter',
  'stroke-linecap': 'butt',
  fill: '#000000',
  stroke: '#000000',
  opacity: 1,
  // position
  x: 0,
  y: 0,
  cx: 0,
  cy: 0,
  // size
  width: 0,
  height: 0,
  // radius
  r: 0,
  rx: 0,
  ry: 0,
  // gradient
  offset: 0,
  'stop-opacity': 1,
  'stop-color': '#000000',
  // text
  'text-anchor': 'start'
};

var defaults = {
  __proto__: null,
  noop: noop,
  timeline: timeline,
  attrs: attrs
};

class SVGArray extends Array {
  constructor(...args) {
    super(...args);
    this.init(...args);
  }

  clone() {
    return new this.constructor(this);
  }

  init(arr) {
    // This catches the case, that native map tries to create an array with new Array(1)
    if (typeof arr === 'number') return this;
    this.length = 0;
    this.push(...this.parse(arr));
    return this;
  } // Parse whitespace separated string


  parse(array = []) {
    // If already is an array, no need to parse it
    if (array instanceof Array) return array;
    return array.trim().split(delimiter).map(parseFloat);
  }

  toArray() {
    return Array.prototype.concat.apply([], this);
  }

  toSet() {
    return new Set(this);
  }

  toString() {
    return this.join(' ');
  } // Flattens the array if needed


  valueOf() {
    const ret = [];
    ret.push(...this);
    return ret;
  }

}

class SVGNumber {
  // Initialize
  constructor(...args) {
    this.init(...args);
  }

  convert(unit) {
    return new SVGNumber(this.value, unit);
  } // Divide number


  divide(number) {
    number = new SVGNumber(number);
    return new SVGNumber(this / number, this.unit || number.unit);
  }

  init(value, unit) {
    unit = Array.isArray(value) ? value[1] : unit;
    value = Array.isArray(value) ? value[0] : value; // initialize defaults

    this.value = 0;
    this.unit = unit || ''; // parse value

    if (typeof value === 'number') {
      // ensure a valid numeric value
      this.value = isNaN(value) ? 0 : !isFinite(value) ? value < 0 ? -3.4e+38 : +3.4e+38 : value;
    } else if (typeof value === 'string') {
      unit = value.match(numberAndUnit);

      if (unit) {
        // make value numeric
        this.value = parseFloat(unit[1]); // normalize

        if (unit[5] === '%') {
          this.value /= 100;
        } else if (unit[5] === 's') {
          this.value *= 1000;
        } // store unit


        this.unit = unit[5];
      }
    } else {
      if (value instanceof SVGNumber) {
        this.value = value.valueOf();
        this.unit = value.unit;
      }
    }

    return this;
  } // Subtract number


  minus(number) {
    number = new SVGNumber(number);
    return new SVGNumber(this - number, this.unit || number.unit);
  } // Add number


  plus(number) {
    number = new SVGNumber(number);
    return new SVGNumber(this + number, this.unit || number.unit);
  } // Multiply number


  times(number) {
    number = new SVGNumber(number);
    return new SVGNumber(this * number, this.unit || number.unit);
  }

  toArray() {
    return [this.value, this.unit];
  }

  toJSON() {
    return this.toString();
  }

  toString() {
    return (this.unit === '%' ? ~~(this.value * 1e8) / 1e6 : this.unit === 's' ? this.value / 1e3 : this.value) + this.unit;
  }

  valueOf() {
    return this.value;
  }

}

const hooks = [];
function registerAttrHook(fn) {
  hooks.push(fn);
} // Set svg element attribute

function attr(attr, val, ns) {
  // act as full getter
  if (attr == null) {
    // get an object of attributes
    attr = {};
    val = this.node.attributes;

    for (const node of val) {
      attr[node.nodeName] = isNumber.test(node.nodeValue) ? parseFloat(node.nodeValue) : node.nodeValue;
    }

    return attr;
  } else if (attr instanceof Array) {
    // loop through array and get all values
    return attr.reduce((last, curr) => {
      last[curr] = this.attr(curr);
      return last;
    }, {});
  } else if (typeof attr === 'object' && attr.constructor === Object) {
    // apply every attribute individually if an object is passed
    for (val in attr) this.attr(val, attr[val]);
  } else if (val === null) {
    // remove value
    this.node.removeAttribute(attr);
  } else if (val == null) {
    // act as a getter if the first and only argument is not an object
    val = this.node.getAttribute(attr);
    return val == null ? attrs[attr] : isNumber.test(val) ? parseFloat(val) : val;
  } else {
    // Loop through hooks and execute them to convert value
    val = hooks.reduce((_val, hook) => {
      return hook(attr, _val, this);
    }, val); // ensure correct numeric values (also accepts NaN and Infinity)

    if (typeof val === 'number') {
      val = new SVGNumber(val);
    } else if (Color.isColor(val)) {
      // ensure full hex color
      val = new Color(val);
    } else if (val.constructor === Array) {
      // Check for plain arrays and parse array values
      val = new SVGArray(val);
    } // if the passed attribute is leading...


    if (attr === 'leading') {
      // ... call the leading method instead
      if (this.leading) {
        this.leading(val);
      }
    } else {
      // set given attribute on node
      typeof ns === 'string' ? this.node.setAttributeNS(ns, attr, val.toString()) : this.node.setAttribute(attr, val.toString());
    } // rebuild if required


    if (this.rebuild && (attr === 'font-size' || attr === 'x')) {
      this.rebuild();
    }
  }

  return this;
}

class Dom extends EventTarget {
  constructor(node, attrs) {
    super();
    this.node = node;
    this.type = node.nodeName;

    if (attrs && node !== attrs) {
      this.attr(attrs);
    }
  } // Add given element at a position


  add(element, i) {
    element = makeInstance(element); // If non-root svg nodes are added we have to remove their namespaces

    if (element.removeNamespace && this.node instanceof globals.window.SVGElement) {
      element.removeNamespace();
    }

    if (i == null) {
      this.node.appendChild(element.node);
    } else if (element.node !== this.node.childNodes[i]) {
      this.node.insertBefore(element.node, this.node.childNodes[i]);
    }

    return this;
  } // Add element to given container and return self


  addTo(parent, i) {
    return makeInstance(parent).put(this, i);
  } // Returns all child elements


  children() {
    return new List(map(this.node.children, function (node) {
      return adopt(node);
    }));
  } // Remove all elements in this container


  clear() {
    // remove children
    while (this.node.hasChildNodes()) {
      this.node.removeChild(this.node.lastChild);
    }

    return this;
  } // Clone element


  clone(deep = true) {
    // write dom data to the dom so the clone can pickup the data
    this.writeDataToDom(); // clone element and assign new id

    return new this.constructor(assignNewId(this.node.cloneNode(deep)));
  } // Iterates over all children and invokes a given block


  each(block, deep) {
    const children = this.children();
    let i, il;

    for (i = 0, il = children.length; i < il; i++) {
      block.apply(children[i], [i, children]);

      if (deep) {
        children[i].each(block, deep);
      }
    }

    return this;
  }

  element(nodeName, attrs) {
    return this.put(new Dom(create(nodeName), attrs));
  } // Get first child


  first() {
    return adopt(this.node.firstChild);
  } // Get a element at the given index


  get(i) {
    return adopt(this.node.childNodes[i]);
  }

  getEventHolder() {
    return this.node;
  }

  getEventTarget() {
    return this.node;
  } // Checks if the given element is a child


  has(element) {
    return this.index(element) >= 0;
  }

  html(htmlOrFn, outerHTML) {
    return this.xml(htmlOrFn, outerHTML, html);
  } // Get / set id


  id(id) {
    // generate new id if no id set
    if (typeof id === 'undefined' && !this.node.id) {
      this.node.id = eid(this.type);
    } // don't set directly with this.node.id to make `null` work correctly


    return this.attr('id', id);
  } // Gets index of given element


  index(element) {
    return [].slice.call(this.node.childNodes).indexOf(element.node);
  } // Get the last child


  last() {
    return adopt(this.node.lastChild);
  } // matches the element vs a css selector


  matches(selector) {
    const el = this.node;
    const matcher = el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector || null;
    return matcher && matcher.call(el, selector);
  } // Returns the parent element instance


  parent(type) {
    let parent = this; // check for parent

    if (!parent.node.parentNode) return null; // get parent element

    parent = adopt(parent.node.parentNode);
    if (!type) return parent; // loop trough ancestors if type is given

    do {
      if (typeof type === 'string' ? parent.matches(type) : parent instanceof type) return parent;
    } while (parent = adopt(parent.node.parentNode));

    return parent;
  } // Basically does the same as `add()` but returns the added element instead


  put(element, i) {
    element = makeInstance(element);
    this.add(element, i);
    return element;
  } // Add element to given container and return container


  putIn(parent, i) {
    return makeInstance(parent).add(this, i);
  } // Remove element


  remove() {
    if (this.parent()) {
      this.parent().removeElement(this);
    }

    return this;
  } // Remove a given child


  removeElement(element) {
    this.node.removeChild(element.node);
    return this;
  } // Replace this with element


  replace(element) {
    element = makeInstance(element);

    if (this.node.parentNode) {
      this.node.parentNode.replaceChild(element.node, this.node);
    }

    return element;
  }

  round(precision = 2, map = null) {
    const factor = 10 ** precision;
    const attrs = this.attr(map);

    for (const i in attrs) {
      if (typeof attrs[i] === 'number') {
        attrs[i] = Math.round(attrs[i] * factor) / factor;
      }
    }

    this.attr(attrs);
    return this;
  } // Import / Export raw svg


  svg(svgOrFn, outerSVG) {
    return this.xml(svgOrFn, outerSVG, svg);
  } // Return id on string conversion


  toString() {
    return this.id();
  }

  words(text) {
    // This is faster than removing all children and adding a new one
    this.node.textContent = text;
    return this;
  }

  wrap(node) {
    const parent = this.parent();

    if (!parent) {
      return this.addTo(node);
    }

    const position = parent.index(this);
    return parent.put(node, position).put(this);
  } // write svgjs data to the dom


  writeDataToDom() {
    // dump variables recursively
    this.each(function () {
      this.writeDataToDom();
    });
    return this;
  } // Import / Export raw svg


  xml(xmlOrFn, outerXML, ns) {
    if (typeof xmlOrFn === 'boolean') {
      ns = outerXML;
      outerXML = xmlOrFn;
      xmlOrFn = null;
    } // act as getter if no svg string is given


    if (xmlOrFn == null || typeof xmlOrFn === 'function') {
      // The default for exports is, that the outerNode is included
      outerXML = outerXML == null ? true : outerXML; // write svgjs data to the dom

      this.writeDataToDom();
      let current = this; // An export modifier was passed

      if (xmlOrFn != null) {
        current = adopt(current.node.cloneNode(true)); // If the user wants outerHTML we need to process this node, too

        if (outerXML) {
          const result = xmlOrFn(current);
          current = result || current; // The user does not want this node? Well, then he gets nothing

          if (result === false) return '';
        } // Deep loop through all children and apply modifier


        current.each(function () {
          const result = xmlOrFn(this);

          const _this = result || this; // If modifier returns false, discard node


          if (result === false) {
            this.remove(); // If modifier returns new node, use it
          } else if (result && this !== _this) {
            this.replace(_this);
          }
        }, true);
      } // Return outer or inner content


      return outerXML ? current.node.outerHTML : current.node.innerHTML;
    } // Act as setter if we got a string
    // The default for import is, that the current node is not replaced


    outerXML = outerXML == null ? false : outerXML; // Create temporary holder

    const well = create('wrapper', ns);
    const fragment = globals.document.createDocumentFragment(); // Dump raw svg

    well.innerHTML = xmlOrFn; // Transplant nodes into the fragment

    for (let len = well.children.length; len--;) {
      fragment.appendChild(well.firstElementChild);
    }

    const parent = this.parent(); // Add the whole fragment at once

    return outerXML ? this.replace(fragment) && parent : this.add(fragment);
  }

}
extend(Dom, {
  attr,
  find,
  findOne
});
register(Dom, 'Dom');

class Element extends Dom {
  constructor(node, attrs) {
    super(node, attrs); // initialize data object

    this.dom = {}; // create circular reference

    this.node.instance = this;

    if (node.hasAttribute('svgjs:data')) {
      // pull svgjs data from the dom (getAttributeNS doesn't work in html5)
      this.setData(JSON.parse(node.getAttribute('svgjs:data')) || {});
    }
  } // Move element by its center


  center(x, y) {
    return this.cx(x).cy(y);
  } // Move by center over x-axis


  cx(x) {
    return x == null ? this.x() + this.width() / 2 : this.x(x - this.width() / 2);
  } // Move by center over y-axis


  cy(y) {
    return y == null ? this.y() + this.height() / 2 : this.y(y - this.height() / 2);
  } // Get defs


  defs() {
    const root = this.root();
    return root && root.defs();
  } // Relative move over x and y axes


  dmove(x, y) {
    return this.dx(x).dy(y);
  } // Relative move over x axis


  dx(x = 0) {
    return this.x(new SVGNumber(x).plus(this.x()));
  } // Relative move over y axis


  dy(y = 0) {
    return this.y(new SVGNumber(y).plus(this.y()));
  }

  getEventHolder() {
    return this;
  } // Set height of element


  height(height) {
    return this.attr('height', height);
  } // Move element to given x and y values


  move(x, y) {
    return this.x(x).y(y);
  } // return array of all ancestors of given type up to the root svg


  parents(until = this.root()) {
    const isSelector = typeof until === 'string';

    if (!isSelector) {
      until = makeInstance(until);
    }

    const parents = new List();
    let parent = this;

    while ((parent = parent.parent()) && parent.node !== globals.document && parent.nodeName !== '#document-fragment') {
      parents.push(parent);

      if (!isSelector && parent.node === until.node) {
        break;
      }

      if (isSelector && parent.matches(until)) {
        break;
      }

      if (parent.node === this.root().node) {
        // We worked our way to the root and didn't match `until`
        return null;
      }
    }

    return parents;
  } // Get referenced element form attribute value


  reference(attr) {
    attr = this.attr(attr);
    if (!attr) return null;
    const m = (attr + '').match(reference);
    return m ? makeInstance(m[1]) : null;
  } // Get parent document


  root() {
    const p = this.parent(getClass(root));
    return p && p.root();
  } // set given data to the elements data property


  setData(o) {
    this.dom = o;
    return this;
  } // Set element size to given width and height


  size(width, height) {
    const p = proportionalSize(this, width, height);
    return this.width(new SVGNumber(p.width)).height(new SVGNumber(p.height));
  } // Set width of element


  width(width) {
    return this.attr('width', width);
  } // write svgjs data to the dom


  writeDataToDom() {
    // remove previously set data
    this.node.removeAttribute('svgjs:data');

    if (Object.keys(this.dom).length) {
      this.node.setAttribute('svgjs:data', JSON.stringify(this.dom)); // see #428
    }

    return super.writeDataToDom();
  } // Move over x-axis


  x(x) {
    return this.attr('x', x);
  } // Move over y-axis


  y(y) {
    return this.attr('y', y);
  }

}
extend(Element, {
  bbox,
  rbox,
  inside,
  point,
  ctm,
  screenCTM
});
register(Element, 'Element');

const sugar = {
  stroke: ['color', 'width', 'opacity', 'linecap', 'linejoin', 'miterlimit', 'dasharray', 'dashoffset'],
  fill: ['color', 'opacity', 'rule'],
  prefix: function (t, a) {
    return a === 'color' ? t : t + '-' + a;
  }
} // Add sugar for fill and stroke
;
['fill', 'stroke'].forEach(function (m) {
  const extension = {};
  let i;

  extension[m] = function (o) {
    if (typeof o === 'undefined') {
      return this.attr(m);
    }

    if (typeof o === 'string' || o instanceof Color || Color.isRgb(o) || o instanceof Element) {
      this.attr(m, o);
    } else {
      // set all attributes from sugar.fill and sugar.stroke list
      for (i = sugar[m].length - 1; i >= 0; i--) {
        if (o[sugar[m][i]] != null) {
          this.attr(sugar.prefix(m, sugar[m][i]), o[sugar[m][i]]);
        }
      }
    }

    return this;
  };

  registerMethods(['Element', 'Runner'], extension);
});
registerMethods(['Element', 'Runner'], {
  // Let the user set the matrix directly
  matrix: function (mat, b, c, d, e, f) {
    // Act as a getter
    if (mat == null) {
      return new Matrix(this);
    } // Act as a setter, the user can pass a matrix or a set of numbers


    return this.attr('transform', new Matrix(mat, b, c, d, e, f));
  },
  // Map rotation to transform
  rotate: function (angle, cx, cy) {
    return this.transform({
      rotate: angle,
      ox: cx,
      oy: cy
    }, true);
  },
  // Map skew to transform
  skew: function (x, y, cx, cy) {
    return arguments.length === 1 || arguments.length === 3 ? this.transform({
      skew: x,
      ox: y,
      oy: cx
    }, true) : this.transform({
      skew: [x, y],
      ox: cx,
      oy: cy
    }, true);
  },
  shear: function (lam, cx, cy) {
    return this.transform({
      shear: lam,
      ox: cx,
      oy: cy
    }, true);
  },
  // Map scale to transform
  scale: function (x, y, cx, cy) {
    return arguments.length === 1 || arguments.length === 3 ? this.transform({
      scale: x,
      ox: y,
      oy: cx
    }, true) : this.transform({
      scale: [x, y],
      ox: cx,
      oy: cy
    }, true);
  },
  // Map translate to transform
  translate: function (x, y) {
    return this.transform({
      translate: [x, y]
    }, true);
  },
  // Map relative translations to transform
  relative: function (x, y) {
    return this.transform({
      relative: [x, y]
    }, true);
  },
  // Map flip to transform
  flip: function (direction = 'both', origin = 'center') {
    if ('xybothtrue'.indexOf(direction) === -1) {
      origin = direction;
      direction = 'both';
    }

    return this.transform({
      flip: direction,
      origin: origin
    }, true);
  },
  // Opacity
  opacity: function (value) {
    return this.attr('opacity', value);
  }
});
registerMethods('radius', {
  // Add x and y radius
  radius: function (x, y = x) {
    const type = (this._element || this).type;
    return type === 'radialGradient' ? this.attr('r', new SVGNumber(x)) : this.rx(x).ry(y);
  }
});
registerMethods('Path', {
  // Get path length
  length: function () {
    return this.node.getTotalLength();
  },
  // Get point at length
  pointAt: function (length) {
    return new Point(this.node.getPointAtLength(length));
  }
});
registerMethods(['Element', 'Runner'], {
  // Set font
  font: function (a, v) {
    if (typeof a === 'object') {
      for (v in a) this.font(v, a[v]);

      return this;
    }

    return a === 'leading' ? this.leading(v) : a === 'anchor' ? this.attr('text-anchor', v) : a === 'size' || a === 'family' || a === 'weight' || a === 'stretch' || a === 'variant' || a === 'style' ? this.attr('font-' + a, v) : this.attr(a, v);
  }
}); // Add events to elements

const methods = ['click', 'dblclick', 'mousedown', 'mouseup', 'mouseover', 'mouseout', 'mousemove', 'mouseenter', 'mouseleave', 'touchstart', 'touchmove', 'touchleave', 'touchend', 'touchcancel'].reduce(function (last, event) {
  // add event to Element
  const fn = function (f) {
    if (f === null) {
      this.off(event);
    } else {
      this.on(event, f);
    }

    return this;
  };

  last[event] = fn;
  return last;
}, {});
registerMethods('Element', methods);

function untransform() {
  return this.attr('transform', null);
} // merge the whole transformation chain into one matrix and returns it

function matrixify() {
  const matrix = (this.attr('transform') || '' // split transformations
  ).split(transforms).slice(0, -1).map(function (str) {
    // generate key => value pairs
    const kv = str.trim().split('(');
    return [kv[0], kv[1].split(delimiter).map(function (str) {
      return parseFloat(str);
    })];
  }).reverse() // merge every transformation into one matrix
  .reduce(function (matrix, transform) {
    if (transform[0] === 'matrix') {
      return matrix.lmultiply(Matrix.fromArray(transform[1]));
    }

    return matrix[transform[0]].apply(matrix, transform[1]);
  }, new Matrix());
  return matrix;
} // add an element to another parent without changing the visual representation on the screen

function toParent(parent, i) {
  if (this === parent) return this;
  const ctm = this.screenCTM();
  const pCtm = parent.screenCTM().inverse();
  this.addTo(parent, i).untransform().transform(pCtm.multiply(ctm));
  return this;
} // same as above with parent equals root-svg

function toRoot(i) {
  return this.toParent(this.root(), i);
} // Add transformations

function transform(o, relative) {
  // Act as a getter if no object was passed
  if (o == null || typeof o === 'string') {
    const decomposed = new Matrix(this).decompose();
    return o == null ? decomposed : decomposed[o];
  }

  if (!Matrix.isMatrixLike(o)) {
    // Set the origin according to the defined transform
    o = { ...o,
      origin: getOrigin(o, this)
    };
  } // The user can pass a boolean, an Element or an Matrix or nothing


  const cleanRelative = relative === true ? this : relative || false;
  const result = new Matrix(cleanRelative).transform(o);
  return this.attr('transform', result);
}
registerMethods('Element', {
  untransform,
  matrixify,
  toParent,
  toRoot,
  transform
});

class Container extends Element {
  flatten(parent = this, index) {
    this.each(function () {
      if (this instanceof Container) {
        return this.flatten().ungroup();
      }
    });
    return this;
  }

  ungroup(parent = this.parent(), index = parent.index(this)) {
    // when parent != this, we want append all elements to the end
    index = index === -1 ? parent.children().length : index;
    this.each(function (i, children) {
      // reverse each
      return children[children.length - i - 1].toParent(parent, index);
    });
    return this.remove();
  }

}
register(Container, 'Container');

class Defs extends Container {
  constructor(node, attrs = node) {
    super(nodeOrNew('defs', node), attrs);
  }

  flatten() {
    return this;
  }

  ungroup() {
    return this;
  }

}
register(Defs, 'Defs');

class Shape extends Element {}
register(Shape, 'Shape');

function rx(rx) {
  return this.attr('rx', rx);
} // Radius y value

function ry(ry) {
  return this.attr('ry', ry);
} // Move over x-axis

function x$3(x) {
  return x == null ? this.cx() - this.rx() : this.cx(x + this.rx());
} // Move over y-axis

function y$3(y) {
  return y == null ? this.cy() - this.ry() : this.cy(y + this.ry());
} // Move by center over x-axis

function cx$1(x) {
  return this.attr('cx', x);
} // Move by center over y-axis

function cy$1(y) {
  return this.attr('cy', y);
} // Set width of element

function width$2(width) {
  return width == null ? this.rx() * 2 : this.rx(new SVGNumber(width).divide(2));
} // Set height of element

function height$2(height) {
  return height == null ? this.ry() * 2 : this.ry(new SVGNumber(height).divide(2));
}

var circled = {
  __proto__: null,
  rx: rx,
  ry: ry,
  x: x$3,
  y: y$3,
  cx: cx$1,
  cy: cy$1,
  width: width$2,
  height: height$2
};

class Ellipse extends Shape {
  constructor(node, attrs = node) {
    super(nodeOrNew('ellipse', node), attrs);
  }

  size(width, height) {
    const p = proportionalSize(this, width, height);
    return this.rx(new SVGNumber(p.width).divide(2)).ry(new SVGNumber(p.height).divide(2));
  }

}
extend(Ellipse, circled);
registerMethods('Container', {
  // Create an ellipse
  ellipse: wrapWithAttrCheck(function (width = 0, height = width) {
    return this.put(new Ellipse()).size(width, height).move(0, 0);
  })
});
register(Ellipse, 'Ellipse');

class Fragment extends Dom {
  constructor(node = globals.document.createDocumentFragment()) {
    super(node);
  } // Import / Export raw xml


  xml(xmlOrFn, outerXML, ns) {
    if (typeof xmlOrFn === 'boolean') {
      ns = outerXML;
      outerXML = xmlOrFn;
      xmlOrFn = null;
    } // because this is a fragment we have to put all elements into a wrapper first
    // before we can get the innerXML from it


    if (xmlOrFn == null || typeof xmlOrFn === 'function') {
      const wrapper = new Dom(create('wrapper', ns));
      wrapper.add(this.node.cloneNode(true));
      return wrapper.xml(false, ns);
    } // Act as setter if we got a string


    return super.xml(xmlOrFn, false, ns);
  }

}

register(Fragment, 'Fragment');

function from(x, y) {
  return (this._element || this).type === 'radialGradient' ? this.attr({
    fx: new SVGNumber(x),
    fy: new SVGNumber(y)
  }) : this.attr({
    x1: new SVGNumber(x),
    y1: new SVGNumber(y)
  });
}
function to(x, y) {
  return (this._element || this).type === 'radialGradient' ? this.attr({
    cx: new SVGNumber(x),
    cy: new SVGNumber(y)
  }) : this.attr({
    x2: new SVGNumber(x),
    y2: new SVGNumber(y)
  });
}

var gradiented = {
  __proto__: null,
  from: from,
  to: to
};

class Gradient extends Container {
  constructor(type, attrs) {
    super(nodeOrNew(type + 'Gradient', typeof type === 'string' ? null : type), attrs);
  } // custom attr to handle transform


  attr(a, b, c) {
    if (a === 'transform') a = 'gradientTransform';
    return super.attr(a, b, c);
  }

  bbox() {
    return new Box();
  }

  targets() {
    return baseFind('svg [fill*="' + this.id() + '"]');
  } // Alias string conversion to fill


  toString() {
    return this.url();
  } // Update gradient


  update(block) {
    // remove all stops
    this.clear(); // invoke passed block

    if (typeof block === 'function') {
      block.call(this, this);
    }

    return this;
  } // Return the fill id


  url() {
    return 'url("#' + this.id() + '")';
  }

}
extend(Gradient, gradiented);
registerMethods({
  Container: {
    // Create gradient element in defs
    gradient(...args) {
      return this.defs().gradient(...args);
    }

  },
  // define gradient
  Defs: {
    gradient: wrapWithAttrCheck(function (type, block) {
      return this.put(new Gradient(type)).update(block);
    })
  }
});
register(Gradient, 'Gradient');

class Pattern extends Container {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('pattern', node), attrs);
  } // custom attr to handle transform


  attr(a, b, c) {
    if (a === 'transform') a = 'patternTransform';
    return super.attr(a, b, c);
  }

  bbox() {
    return new Box();
  }

  targets() {
    return baseFind('svg [fill*="' + this.id() + '"]');
  } // Alias string conversion to fill


  toString() {
    return this.url();
  } // Update pattern by rebuilding


  update(block) {
    // remove content
    this.clear(); // invoke passed block

    if (typeof block === 'function') {
      block.call(this, this);
    }

    return this;
  } // Return the fill id


  url() {
    return 'url("#' + this.id() + '")';
  }

}
registerMethods({
  Container: {
    // Create pattern element in defs
    pattern(...args) {
      return this.defs().pattern(...args);
    }

  },
  Defs: {
    pattern: wrapWithAttrCheck(function (width, height, block) {
      return this.put(new Pattern()).update(block).attr({
        x: 0,
        y: 0,
        width: width,
        height: height,
        patternUnits: 'userSpaceOnUse'
      });
    })
  }
});
register(Pattern, 'Pattern');

class Image extends Shape {
  constructor(node, attrs = node) {
    super(nodeOrNew('image', node), attrs);
  } // (re)load image


  load(url, callback) {
    if (!url) return this;
    const img = new globals.window.Image();
    on(img, 'load', function (e) {
      const p = this.parent(Pattern); // ensure image size

      if (this.width() === 0 && this.height() === 0) {
        this.size(img.width, img.height);
      }

      if (p instanceof Pattern) {
        // ensure pattern size if not set
        if (p.width() === 0 && p.height() === 0) {
          p.size(this.width(), this.height());
        }
      }

      if (typeof callback === 'function') {
        callback.call(this, e);
      }
    }, this);
    on(img, 'load error', function () {
      // dont forget to unbind memory leaking events
      off(img);
    });
    return this.attr('href', img.src = url, xlink);
  }

}
registerAttrHook(function (attr, val, _this) {
  // convert image fill and stroke to patterns
  if (attr === 'fill' || attr === 'stroke') {
    if (isImage.test(val)) {
      val = _this.root().defs().image(val);
    }
  }

  if (val instanceof Image) {
    val = _this.root().defs().pattern(0, 0, pattern => {
      pattern.add(val);
    });
  }

  return val;
});
registerMethods({
  Container: {
    // create image element, load image and set its size
    image: wrapWithAttrCheck(function (source, callback) {
      return this.put(new Image()).size(0, 0).load(source, callback);
    })
  }
});
register(Image, 'Image');

class PointArray extends SVGArray {
  // Get bounding box of points
  bbox() {
    let maxX = -Infinity;
    let maxY = -Infinity;
    let minX = Infinity;
    let minY = Infinity;
    this.forEach(function (el) {
      maxX = Math.max(el[0], maxX);
      maxY = Math.max(el[1], maxY);
      minX = Math.min(el[0], minX);
      minY = Math.min(el[1], minY);
    });
    return new Box(minX, minY, maxX - minX, maxY - minY);
  } // Move point string


  move(x, y) {
    const box = this.bbox(); // get relative offset

    x -= box.x;
    y -= box.y; // move every point

    if (!isNaN(x) && !isNaN(y)) {
      for (let i = this.length - 1; i >= 0; i--) {
        this[i] = [this[i][0] + x, this[i][1] + y];
      }
    }

    return this;
  } // Parse point string and flat array


  parse(array = [0, 0]) {
    const points = []; // if it is an array, we flatten it and therefore clone it to 1 depths

    if (array instanceof Array) {
      array = Array.prototype.concat.apply([], array);
    } else {
      // Else, it is considered as a string
      // parse points
      array = array.trim().split(delimiter).map(parseFloat);
    } // validate points - https://svgwg.org/svg2-draft/shapes.html#DataTypePoints
    // Odd number of coordinates is an error. In such cases, drop the last odd coordinate.


    if (array.length % 2 !== 0) array.pop(); // wrap points in two-tuples

    for (let i = 0, len = array.length; i < len; i = i + 2) {
      points.push([array[i], array[i + 1]]);
    }

    return points;
  } // Resize poly string


  size(width, height) {
    let i;
    const box = this.bbox(); // recalculate position of all points according to new size

    for (i = this.length - 1; i >= 0; i--) {
      if (box.width) this[i][0] = (this[i][0] - box.x) * width / box.width + box.x;
      if (box.height) this[i][1] = (this[i][1] - box.y) * height / box.height + box.y;
    }

    return this;
  } // Convert array to line object


  toLine() {
    return {
      x1: this[0][0],
      y1: this[0][1],
      x2: this[1][0],
      y2: this[1][1]
    };
  } // Convert array to string


  toString() {
    const array = []; // convert to a poly point string

    for (let i = 0, il = this.length; i < il; i++) {
      array.push(this[i].join(','));
    }

    return array.join(' ');
  }

  transform(m) {
    return this.clone().transformO(m);
  } // transform points with matrix (similar to Point.transform)


  transformO(m) {
    if (!Matrix.isMatrixLike(m)) {
      m = new Matrix(m);
    }

    for (let i = this.length; i--;) {
      // Perform the matrix multiplication
      const [x, y] = this[i];
      this[i][0] = m.a * x + m.c * y + m.e;
      this[i][1] = m.b * x + m.d * y + m.f;
    }

    return this;
  }

}

const MorphArray = PointArray; // Move by left top corner over x-axis

function x$2(x) {
  return x == null ? this.bbox().x : this.move(x, this.bbox().y);
} // Move by left top corner over y-axis

function y$2(y) {
  return y == null ? this.bbox().y : this.move(this.bbox().x, y);
} // Set width of element

function width$1(width) {
  const b = this.bbox();
  return width == null ? b.width : this.size(width, b.height);
} // Set height of element

function height$1(height) {
  const b = this.bbox();
  return height == null ? b.height : this.size(b.width, height);
}

var pointed = {
  __proto__: null,
  MorphArray: MorphArray,
  x: x$2,
  y: y$2,
  width: width$1,
  height: height$1
};

class Line extends Shape {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('line', node), attrs);
  } // Get array


  array() {
    return new PointArray([[this.attr('x1'), this.attr('y1')], [this.attr('x2'), this.attr('y2')]]);
  } // Move by left top corner


  move(x, y) {
    return this.attr(this.array().move(x, y).toLine());
  } // Overwrite native plot() method


  plot(x1, y1, x2, y2) {
    if (x1 == null) {
      return this.array();
    } else if (typeof y1 !== 'undefined') {
      x1 = {
        x1,
        y1,
        x2,
        y2
      };
    } else {
      x1 = new PointArray(x1).toLine();
    }

    return this.attr(x1);
  } // Set element size to given width and height


  size(width, height) {
    const p = proportionalSize(this, width, height);
    return this.attr(this.array().size(p.width, p.height).toLine());
  }

}
extend(Line, pointed);
registerMethods({
  Container: {
    // Create a line element
    line: wrapWithAttrCheck(function (...args) {
      // make sure plot is called as a setter
      // x1 is not necessarily a number, it can also be an array, a string and a PointArray
      return Line.prototype.plot.apply(this.put(new Line()), args[0] != null ? args : [0, 0, 0, 0]);
    })
  }
});
register(Line, 'Line');

class Marker extends Container {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('marker', node), attrs);
  } // Set height of element


  height(height) {
    return this.attr('markerHeight', height);
  }

  orient(orient) {
    return this.attr('orient', orient);
  } // Set marker refX and refY


  ref(x, y) {
    return this.attr('refX', x).attr('refY', y);
  } // Return the fill id


  toString() {
    return 'url(#' + this.id() + ')';
  } // Update marker


  update(block) {
    // remove all content
    this.clear(); // invoke passed block

    if (typeof block === 'function') {
      block.call(this, this);
    }

    return this;
  } // Set width of element


  width(width) {
    return this.attr('markerWidth', width);
  }

}
registerMethods({
  Container: {
    marker(...args) {
      // Create marker element in defs
      return this.defs().marker(...args);
    }

  },
  Defs: {
    // Create marker
    marker: wrapWithAttrCheck(function (width, height, block) {
      // Set default viewbox to match the width and height, set ref to cx and cy and set orient to auto
      return this.put(new Marker()).size(width, height).ref(width / 2, height / 2).viewbox(0, 0, width, height).attr('orient', 'auto').update(block);
    })
  },
  marker: {
    // Create and attach markers
    marker(marker, width, height, block) {
      let attr = ['marker']; // Build attribute name

      if (marker !== 'all') attr.push(marker);
      attr = attr.join('-'); // Set marker attribute

      marker = arguments[1] instanceof Marker ? arguments[1] : this.defs().marker(width, height, block);
      return this.attr(attr, marker);
    }

  }
});
register(Marker, 'Marker');

/***
Base Class
==========
The base stepper class that will be
***/

function makeSetterGetter(k, f) {
  return function (v) {
    if (v == null) return this[k];
    this[k] = v;
    if (f) f.call(this);
    return this;
  };
}

const easing = {
  '-': function (pos) {
    return pos;
  },
  '<>': function (pos) {
    return -Math.cos(pos * Math.PI) / 2 + 0.5;
  },
  '>': function (pos) {
    return Math.sin(pos * Math.PI / 2);
  },
  '<': function (pos) {
    return -Math.cos(pos * Math.PI / 2) + 1;
  },
  bezier: function (x1, y1, x2, y2) {
    // see https://www.w3.org/TR/css-easing-1/#cubic-bezier-algo
    return function (t) {
      if (t < 0) {
        if (x1 > 0) {
          return y1 / x1 * t;
        } else if (x2 > 0) {
          return y2 / x2 * t;
        } else {
          return 0;
        }
      } else if (t > 1) {
        if (x2 < 1) {
          return (1 - y2) / (1 - x2) * t + (y2 - x2) / (1 - x2);
        } else if (x1 < 1) {
          return (1 - y1) / (1 - x1) * t + (y1 - x1) / (1 - x1);
        } else {
          return 1;
        }
      } else {
        return 3 * t * (1 - t) ** 2 * y1 + 3 * t ** 2 * (1 - t) * y2 + t ** 3;
      }
    };
  },
  // see https://www.w3.org/TR/css-easing-1/#step-timing-function-algo
  steps: function (steps, stepPosition = 'end') {
    // deal with "jump-" prefix
    stepPosition = stepPosition.split('-').reverse()[0];
    let jumps = steps;

    if (stepPosition === 'none') {
      --jumps;
    } else if (stepPosition === 'both') {
      ++jumps;
    } // The beforeFlag is essentially useless


    return (t, beforeFlag = false) => {
      // Step is called currentStep in referenced url
      let step = Math.floor(t * steps);
      const jumping = t * step % 1 === 0;

      if (stepPosition === 'start' || stepPosition === 'both') {
        ++step;
      }

      if (beforeFlag && jumping) {
        --step;
      }

      if (t >= 0 && step < 0) {
        step = 0;
      }

      if (t <= 1 && step > jumps) {
        step = jumps;
      }

      return step / jumps;
    };
  }
};
class Stepper {
  done() {
    return false;
  }

}
/***
Easing Functions
================
***/

class Ease extends Stepper {
  constructor(fn = timeline.ease) {
    super();
    this.ease = easing[fn] || fn;
  }

  step(from, to, pos) {
    if (typeof from !== 'number') {
      return pos < 1 ? from : to;
    }

    return from + (to - from) * this.ease(pos);
  }

}
/***
Controller Types
================
***/

class Controller extends Stepper {
  constructor(fn) {
    super();
    this.stepper = fn;
  }

  done(c) {
    return c.done;
  }

  step(current, target, dt, c) {
    return this.stepper(current, target, dt, c);
  }

}

function recalculate() {
  // Apply the default parameters
  const duration = (this._duration || 500) / 1000;
  const overshoot = this._overshoot || 0; // Calculate the PID natural response

  const eps = 1e-10;
  const pi = Math.PI;
  const os = Math.log(overshoot / 100 + eps);
  const zeta = -os / Math.sqrt(pi * pi + os * os);
  const wn = 3.9 / (zeta * duration); // Calculate the Spring values

  this.d = 2 * zeta * wn;
  this.k = wn * wn;
}

class Spring extends Controller {
  constructor(duration = 500, overshoot = 0) {
    super();
    this.duration(duration).overshoot(overshoot);
  }

  step(current, target, dt, c) {
    if (typeof current === 'string') return current;
    c.done = dt === Infinity;
    if (dt === Infinity) return target;
    if (dt === 0) return current;
    if (dt > 100) dt = 16;
    dt /= 1000; // Get the previous velocity

    const velocity = c.velocity || 0; // Apply the control to get the new position and store it

    const acceleration = -this.d * velocity - this.k * (current - target);
    const newPosition = current + velocity * dt + acceleration * dt * dt / 2; // Store the velocity

    c.velocity = velocity + acceleration * dt; // Figure out if we have converged, and if so, pass the value

    c.done = Math.abs(target - newPosition) + Math.abs(velocity) < 0.002;
    return c.done ? target : newPosition;
  }

}
extend(Spring, {
  duration: makeSetterGetter('_duration', recalculate),
  overshoot: makeSetterGetter('_overshoot', recalculate)
});
class PID extends Controller {
  constructor(p = 0.1, i = 0.01, d = 0, windup = 1000) {
    super();
    this.p(p).i(i).d(d).windup(windup);
  }

  step(current, target, dt, c) {
    if (typeof current === 'string') return current;
    c.done = dt === Infinity;
    if (dt === Infinity) return target;
    if (dt === 0) return current;
    const p = target - current;
    let i = (c.integral || 0) + p * dt;
    const d = (p - (c.error || 0)) / dt;
    const windup = this._windup; // antiwindup

    if (windup !== false) {
      i = Math.max(-windup, Math.min(i, windup));
    }

    c.error = p;
    c.integral = i;
    c.done = Math.abs(p) < 0.001;
    return c.done ? target : current + (this.P * p + this.I * i + this.D * d);
  }

}
extend(PID, {
  windup: makeSetterGetter('_windup'),
  p: makeSetterGetter('P'),
  i: makeSetterGetter('I'),
  d: makeSetterGetter('D')
});

const segmentParameters = {
  M: 2,
  L: 2,
  H: 1,
  V: 1,
  C: 6,
  S: 4,
  Q: 4,
  T: 2,
  A: 7,
  Z: 0
};
const pathHandlers = {
  M: function (c, p, p0) {
    p.x = p0.x = c[0];
    p.y = p0.y = c[1];
    return ['M', p.x, p.y];
  },
  L: function (c, p) {
    p.x = c[0];
    p.y = c[1];
    return ['L', c[0], c[1]];
  },
  H: function (c, p) {
    p.x = c[0];
    return ['H', c[0]];
  },
  V: function (c, p) {
    p.y = c[0];
    return ['V', c[0]];
  },
  C: function (c, p) {
    p.x = c[4];
    p.y = c[5];
    return ['C', c[0], c[1], c[2], c[3], c[4], c[5]];
  },
  S: function (c, p) {
    p.x = c[2];
    p.y = c[3];
    return ['S', c[0], c[1], c[2], c[3]];
  },
  Q: function (c, p) {
    p.x = c[2];
    p.y = c[3];
    return ['Q', c[0], c[1], c[2], c[3]];
  },
  T: function (c, p) {
    p.x = c[0];
    p.y = c[1];
    return ['T', c[0], c[1]];
  },
  Z: function (c, p, p0) {
    p.x = p0.x;
    p.y = p0.y;
    return ['Z'];
  },
  A: function (c, p) {
    p.x = c[5];
    p.y = c[6];
    return ['A', c[0], c[1], c[2], c[3], c[4], c[5], c[6]];
  }
};
const mlhvqtcsaz = 'mlhvqtcsaz'.split('');

for (let i = 0, il = mlhvqtcsaz.length; i < il; ++i) {
  pathHandlers[mlhvqtcsaz[i]] = function (i) {
    return function (c, p, p0) {
      if (i === 'H') c[0] = c[0] + p.x;else if (i === 'V') c[0] = c[0] + p.y;else if (i === 'A') {
        c[5] = c[5] + p.x;
        c[6] = c[6] + p.y;
      } else {
        for (let j = 0, jl = c.length; j < jl; ++j) {
          c[j] = c[j] + (j % 2 ? p.y : p.x);
        }
      }
      return pathHandlers[i](c, p, p0);
    };
  }(mlhvqtcsaz[i].toUpperCase());
}

function makeAbsolut(parser) {
  const command = parser.segment[0];
  return pathHandlers[command](parser.segment.slice(1), parser.p, parser.p0);
}

function segmentComplete(parser) {
  return parser.segment.length && parser.segment.length - 1 === segmentParameters[parser.segment[0].toUpperCase()];
}

function startNewSegment(parser, token) {
  parser.inNumber && finalizeNumber(parser, false);
  const pathLetter = isPathLetter.test(token);

  if (pathLetter) {
    parser.segment = [token];
  } else {
    const lastCommand = parser.lastCommand;
    const small = lastCommand.toLowerCase();
    const isSmall = lastCommand === small;
    parser.segment = [small === 'm' ? isSmall ? 'l' : 'L' : lastCommand];
  }

  parser.inSegment = true;
  parser.lastCommand = parser.segment[0];
  return pathLetter;
}

function finalizeNumber(parser, inNumber) {
  if (!parser.inNumber) throw new Error('Parser Error');
  parser.number && parser.segment.push(parseFloat(parser.number));
  parser.inNumber = inNumber;
  parser.number = '';
  parser.pointSeen = false;
  parser.hasExponent = false;

  if (segmentComplete(parser)) {
    finalizeSegment(parser);
  }
}

function finalizeSegment(parser) {
  parser.inSegment = false;

  if (parser.absolute) {
    parser.segment = makeAbsolut(parser);
  }

  parser.segments.push(parser.segment);
}

function isArcFlag(parser) {
  if (!parser.segment.length) return false;
  const isArc = parser.segment[0].toUpperCase() === 'A';
  const length = parser.segment.length;
  return isArc && (length === 4 || length === 5);
}

function isExponential(parser) {
  return parser.lastToken.toUpperCase() === 'E';
}

function pathParser(d, toAbsolute = true) {
  let index = 0;
  let token = '';
  const parser = {
    segment: [],
    inNumber: false,
    number: '',
    lastToken: '',
    inSegment: false,
    segments: [],
    pointSeen: false,
    hasExponent: false,
    absolute: toAbsolute,
    p0: new Point(),
    p: new Point()
  };

  while (parser.lastToken = token, token = d.charAt(index++)) {
    if (!parser.inSegment) {
      if (startNewSegment(parser, token)) {
        continue;
      }
    }

    if (token === '.') {
      if (parser.pointSeen || parser.hasExponent) {
        finalizeNumber(parser, false);
        --index;
        continue;
      }

      parser.inNumber = true;
      parser.pointSeen = true;
      parser.number += token;
      continue;
    }

    if (!isNaN(parseInt(token))) {
      if (parser.number === '0' || isArcFlag(parser)) {
        parser.inNumber = true;
        parser.number = token;
        finalizeNumber(parser, true);
        continue;
      }

      parser.inNumber = true;
      parser.number += token;
      continue;
    }

    if (token === ' ' || token === ',') {
      if (parser.inNumber) {
        finalizeNumber(parser, false);
      }

      continue;
    }

    if (token === '-') {
      if (parser.inNumber && !isExponential(parser)) {
        finalizeNumber(parser, false);
        --index;
        continue;
      }

      parser.number += token;
      parser.inNumber = true;
      continue;
    }

    if (token.toUpperCase() === 'E') {
      parser.number += token;
      parser.hasExponent = true;
      continue;
    }

    if (isPathLetter.test(token)) {
      if (parser.inNumber) {
        finalizeNumber(parser, false);
      } else if (!segmentComplete(parser)) {
        throw new Error('parser Error');
      } else {
        finalizeSegment(parser);
      }

      --index;
    }
  }

  if (parser.inNumber) {
    finalizeNumber(parser, false);
  }

  if (parser.inSegment && segmentComplete(parser)) {
    finalizeSegment(parser);
  }

  return parser.segments;
}

function arrayToString(a) {
  let s = '';

  for (let i = 0, il = a.length; i < il; i++) {
    s += a[i][0];

    if (a[i][1] != null) {
      s += a[i][1];

      if (a[i][2] != null) {
        s += ' ';
        s += a[i][2];

        if (a[i][3] != null) {
          s += ' ';
          s += a[i][3];
          s += ' ';
          s += a[i][4];

          if (a[i][5] != null) {
            s += ' ';
            s += a[i][5];
            s += ' ';
            s += a[i][6];

            if (a[i][7] != null) {
              s += ' ';
              s += a[i][7];
            }
          }
        }
      }
    }
  }

  return s + ' ';
}

class PathArray extends SVGArray {
  // Get bounding box of path
  bbox() {
    parser().path.setAttribute('d', this.toString());
    return new Box(parser.nodes.path.getBBox());
  } // Move path string


  move(x, y) {
    // get bounding box of current situation
    const box = this.bbox(); // get relative offset

    x -= box.x;
    y -= box.y;

    if (!isNaN(x) && !isNaN(y)) {
      // move every point
      for (let l, i = this.length - 1; i >= 0; i--) {
        l = this[i][0];

        if (l === 'M' || l === 'L' || l === 'T') {
          this[i][1] += x;
          this[i][2] += y;
        } else if (l === 'H') {
          this[i][1] += x;
        } else if (l === 'V') {
          this[i][1] += y;
        } else if (l === 'C' || l === 'S' || l === 'Q') {
          this[i][1] += x;
          this[i][2] += y;
          this[i][3] += x;
          this[i][4] += y;

          if (l === 'C') {
            this[i][5] += x;
            this[i][6] += y;
          }
        } else if (l === 'A') {
          this[i][6] += x;
          this[i][7] += y;
        }
      }
    }

    return this;
  } // Absolutize and parse path to array


  parse(d = 'M0 0') {
    if (Array.isArray(d)) {
      d = Array.prototype.concat.apply([], d).toString();
    }

    return pathParser(d);
  } // Resize path string


  size(width, height) {
    // get bounding box of current situation
    const box = this.bbox();
    let i, l; // If the box width or height is 0 then we ignore
    // transformations on the respective axis

    box.width = box.width === 0 ? 1 : box.width;
    box.height = box.height === 0 ? 1 : box.height; // recalculate position of all points according to new size

    for (i = this.length - 1; i >= 0; i--) {
      l = this[i][0];

      if (l === 'M' || l === 'L' || l === 'T') {
        this[i][1] = (this[i][1] - box.x) * width / box.width + box.x;
        this[i][2] = (this[i][2] - box.y) * height / box.height + box.y;
      } else if (l === 'H') {
        this[i][1] = (this[i][1] - box.x) * width / box.width + box.x;
      } else if (l === 'V') {
        this[i][1] = (this[i][1] - box.y) * height / box.height + box.y;
      } else if (l === 'C' || l === 'S' || l === 'Q') {
        this[i][1] = (this[i][1] - box.x) * width / box.width + box.x;
        this[i][2] = (this[i][2] - box.y) * height / box.height + box.y;
        this[i][3] = (this[i][3] - box.x) * width / box.width + box.x;
        this[i][4] = (this[i][4] - box.y) * height / box.height + box.y;

        if (l === 'C') {
          this[i][5] = (this[i][5] - box.x) * width / box.width + box.x;
          this[i][6] = (this[i][6] - box.y) * height / box.height + box.y;
        }
      } else if (l === 'A') {
        // resize radii
        this[i][1] = this[i][1] * width / box.width;
        this[i][2] = this[i][2] * height / box.height; // move position values

        this[i][6] = (this[i][6] - box.x) * width / box.width + box.x;
        this[i][7] = (this[i][7] - box.y) * height / box.height + box.y;
      }
    }

    return this;
  } // Convert array to string


  toString() {
    return arrayToString(this);
  }

}

const getClassForType = value => {
  const type = typeof value;

  if (type === 'number') {
    return SVGNumber;
  } else if (type === 'string') {
    if (Color.isColor(value)) {
      return Color;
    } else if (delimiter.test(value)) {
      return isPathLetter.test(value) ? PathArray : SVGArray;
    } else if (numberAndUnit.test(value)) {
      return SVGNumber;
    } else {
      return NonMorphable;
    }
  } else if (morphableTypes.indexOf(value.constructor) > -1) {
    return value.constructor;
  } else if (Array.isArray(value)) {
    return SVGArray;
  } else if (type === 'object') {
    return ObjectBag;
  } else {
    return NonMorphable;
  }
};

class Morphable {
  constructor(stepper) {
    this._stepper = stepper || new Ease('-');
    this._from = null;
    this._to = null;
    this._type = null;
    this._context = null;
    this._morphObj = null;
  }

  at(pos) {
    return this._morphObj.morph(this._from, this._to, pos, this._stepper, this._context);
  }

  done() {
    const complete = this._context.map(this._stepper.done).reduce(function (last, curr) {
      return last && curr;
    }, true);

    return complete;
  }

  from(val) {
    if (val == null) {
      return this._from;
    }

    this._from = this._set(val);
    return this;
  }

  stepper(stepper) {
    if (stepper == null) return this._stepper;
    this._stepper = stepper;
    return this;
  }

  to(val) {
    if (val == null) {
      return this._to;
    }

    this._to = this._set(val);
    return this;
  }

  type(type) {
    // getter
    if (type == null) {
      return this._type;
    } // setter


    this._type = type;
    return this;
  }

  _set(value) {
    if (!this._type) {
      this.type(getClassForType(value));
    }

    let result = new this._type(value);

    if (this._type === Color) {
      result = this._to ? result[this._to[4]]() : this._from ? result[this._from[4]]() : result;
    }

    if (this._type === ObjectBag) {
      result = this._to ? result.align(this._to) : this._from ? result.align(this._from) : result;
    }

    result = result.toConsumable();
    this._morphObj = this._morphObj || new this._type();
    this._context = this._context || Array.apply(null, Array(result.length)).map(Object).map(function (o) {
      o.done = true;
      return o;
    });
    return result;
  }

}
class NonMorphable {
  constructor(...args) {
    this.init(...args);
  }

  init(val) {
    val = Array.isArray(val) ? val[0] : val;
    this.value = val;
    return this;
  }

  toArray() {
    return [this.value];
  }

  valueOf() {
    return this.value;
  }

}
class TransformBag {
  constructor(...args) {
    this.init(...args);
  }

  init(obj) {
    if (Array.isArray(obj)) {
      obj = {
        scaleX: obj[0],
        scaleY: obj[1],
        shear: obj[2],
        rotate: obj[3],
        translateX: obj[4],
        translateY: obj[5],
        originX: obj[6],
        originY: obj[7]
      };
    }

    Object.assign(this, TransformBag.defaults, obj);
    return this;
  }

  toArray() {
    const v = this;
    return [v.scaleX, v.scaleY, v.shear, v.rotate, v.translateX, v.translateY, v.originX, v.originY];
  }

}
TransformBag.defaults = {
  scaleX: 1,
  scaleY: 1,
  shear: 0,
  rotate: 0,
  translateX: 0,
  translateY: 0,
  originX: 0,
  originY: 0
};

const sortByKey = (a, b) => {
  return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0;
};

class ObjectBag {
  constructor(...args) {
    this.init(...args);
  }

  align(other) {
    const values = this.values;

    for (let i = 0, il = values.length; i < il; ++i) {
      // If the type is the same we only need to check if the color is in the correct format
      if (values[i + 1] === other[i + 1]) {
        if (values[i + 1] === Color && other[i + 7] !== values[i + 7]) {
          const space = other[i + 7];
          const color = new Color(this.values.splice(i + 3, 5))[space]().toArray();
          this.values.splice(i + 3, 0, ...color);
        }

        i += values[i + 2] + 2;
        continue;
      }

      if (!other[i + 1]) {
        return this;
      } // The types differ, so we overwrite the new type with the old one
      // And initialize it with the types default (e.g. black for color or 0 for number)


      const defaultObject = new other[i + 1]().toArray(); // Than we fix the values array

      const toDelete = values[i + 2] + 3;
      values.splice(i, toDelete, other[i], other[i + 1], other[i + 2], ...defaultObject);
      i += values[i + 2] + 2;
    }

    return this;
  }

  init(objOrArr) {
    this.values = [];

    if (Array.isArray(objOrArr)) {
      this.values = objOrArr.slice();
      return;
    }

    objOrArr = objOrArr || {};
    const entries = [];

    for (const i in objOrArr) {
      const Type = getClassForType(objOrArr[i]);
      const val = new Type(objOrArr[i]).toArray();
      entries.push([i, Type, val.length, ...val]);
    }

    entries.sort(sortByKey);
    this.values = entries.reduce((last, curr) => last.concat(curr), []);
    return this;
  }

  toArray() {
    return this.values;
  }

  valueOf() {
    const obj = {};
    const arr = this.values; // for (var i = 0, len = arr.length; i < len; i += 2) {

    while (arr.length) {
      const key = arr.shift();
      const Type = arr.shift();
      const num = arr.shift();
      const values = arr.splice(0, num);
      obj[key] = new Type(values); // .valueOf()
    }

    return obj;
  }

}
const morphableTypes = [NonMorphable, TransformBag, ObjectBag];
function registerMorphableType(type = []) {
  morphableTypes.push(...[].concat(type));
}
function makeMorphable() {
  extend(morphableTypes, {
    to(val) {
      return new Morphable().type(this.constructor).from(this.toArray()) // this.valueOf())
      .to(val);
    },

    fromArray(arr) {
      this.init(arr);
      return this;
    },

    toConsumable() {
      return this.toArray();
    },

    morph(from, to, pos, stepper, context) {
      const mapper = function (i, index) {
        return stepper.step(i, to[index], pos, context[index], context);
      };

      return this.fromArray(from.map(mapper));
    }

  });
}

class Path extends Shape {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('path', node), attrs);
  } // Get array


  array() {
    return this._array || (this._array = new PathArray(this.attr('d')));
  } // Clear array cache


  clear() {
    delete this._array;
    return this;
  } // Set height of element


  height(height) {
    return height == null ? this.bbox().height : this.size(this.bbox().width, height);
  } // Move by left top corner


  move(x, y) {
    return this.attr('d', this.array().move(x, y));
  } // Plot new path


  plot(d) {
    return d == null ? this.array() : this.clear().attr('d', typeof d === 'string' ? d : this._array = new PathArray(d));
  } // Set element size to given width and height


  size(width, height) {
    const p = proportionalSize(this, width, height);
    return this.attr('d', this.array().size(p.width, p.height));
  } // Set width of element


  width(width) {
    return width == null ? this.bbox().width : this.size(width, this.bbox().height);
  } // Move by left top corner over x-axis


  x(x) {
    return x == null ? this.bbox().x : this.move(x, this.bbox().y);
  } // Move by left top corner over y-axis


  y(y) {
    return y == null ? this.bbox().y : this.move(this.bbox().x, y);
  }

} // Define morphable array

Path.prototype.MorphArray = PathArray; // Add parent method

registerMethods({
  Container: {
    // Create a wrapped path element
    path: wrapWithAttrCheck(function (d) {
      // make sure plot is called as a setter
      return this.put(new Path()).plot(d || new PathArray());
    })
  }
});
register(Path, 'Path');

function array() {
  return this._array || (this._array = new PointArray(this.attr('points')));
} // Clear array cache

function clear() {
  delete this._array;
  return this;
} // Move by left top corner

function move$2(x, y) {
  return this.attr('points', this.array().move(x, y));
} // Plot new path

function plot(p) {
  return p == null ? this.array() : this.clear().attr('points', typeof p === 'string' ? p : this._array = new PointArray(p));
} // Set element size to given width and height

function size$1(width, height) {
  const p = proportionalSize(this, width, height);
  return this.attr('points', this.array().size(p.width, p.height));
}

var poly = {
  __proto__: null,
  array: array,
  clear: clear,
  move: move$2,
  plot: plot,
  size: size$1
};

class Polygon extends Shape {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('polygon', node), attrs);
  }

}
registerMethods({
  Container: {
    // Create a wrapped polygon element
    polygon: wrapWithAttrCheck(function (p) {
      // make sure plot is called as a setter
      return this.put(new Polygon()).plot(p || new PointArray());
    })
  }
});
extend(Polygon, pointed);
extend(Polygon, poly);
register(Polygon, 'Polygon');

class Polyline extends Shape {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('polyline', node), attrs);
  }

}
registerMethods({
  Container: {
    // Create a wrapped polygon element
    polyline: wrapWithAttrCheck(function (p) {
      // make sure plot is called as a setter
      return this.put(new Polyline()).plot(p || new PointArray());
    })
  }
});
extend(Polyline, pointed);
extend(Polyline, poly);
register(Polyline, 'Polyline');

class Rect extends Shape {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('rect', node), attrs);
  }

}
extend(Rect, {
  rx,
  ry
});
registerMethods({
  Container: {
    // Create a rect element
    rect: wrapWithAttrCheck(function (width, height) {
      return this.put(new Rect()).size(width, height);
    })
  }
});
register(Rect, 'Rect');

class Queue {
  constructor() {
    this._first = null;
    this._last = null;
  } // Shows us the first item in the list


  first() {
    return this._first && this._first.value;
  } // Shows us the last item in the list


  last() {
    return this._last && this._last.value;
  }

  push(value) {
    // An item stores an id and the provided value
    const item = typeof value.next !== 'undefined' ? value : {
      value: value,
      next: null,
      prev: null
    }; // Deal with the queue being empty or populated

    if (this._last) {
      item.prev = this._last;
      this._last.next = item;
      this._last = item;
    } else {
      this._last = item;
      this._first = item;
    } // Return the current item


    return item;
  } // Removes the item that was returned from the push


  remove(item) {
    // Relink the previous item
    if (item.prev) item.prev.next = item.next;
    if (item.next) item.next.prev = item.prev;
    if (item === this._last) this._last = item.prev;
    if (item === this._first) this._first = item.next; // Invalidate item

    item.prev = null;
    item.next = null;
  }

  shift() {
    // Check if we have a value
    const remove = this._first;
    if (!remove) return null; // If we do, remove it and relink things

    this._first = remove.next;
    if (this._first) this._first.prev = null;
    this._last = this._first ? this._last : null;
    return remove.value;
  }

}

const Animator = {
  nextDraw: null,
  frames: new Queue(),
  timeouts: new Queue(),
  immediates: new Queue(),
  timer: () => globals.window.performance || globals.window.Date,
  transforms: [],

  frame(fn) {
    // Store the node
    const node = Animator.frames.push({
      run: fn
    }); // Request an animation frame if we don't have one

    if (Animator.nextDraw === null) {
      Animator.nextDraw = globals.window.requestAnimationFrame(Animator._draw);
    } // Return the node so we can remove it easily


    return node;
  },

  timeout(fn, delay) {
    delay = delay || 0; // Work out when the event should fire

    const time = Animator.timer().now() + delay; // Add the timeout to the end of the queue

    const node = Animator.timeouts.push({
      run: fn,
      time: time
    }); // Request another animation frame if we need one

    if (Animator.nextDraw === null) {
      Animator.nextDraw = globals.window.requestAnimationFrame(Animator._draw);
    }

    return node;
  },

  immediate(fn) {
    // Add the immediate fn to the end of the queue
    const node = Animator.immediates.push(fn); // Request another animation frame if we need one

    if (Animator.nextDraw === null) {
      Animator.nextDraw = globals.window.requestAnimationFrame(Animator._draw);
    }

    return node;
  },

  cancelFrame(node) {
    node != null && Animator.frames.remove(node);
  },

  clearTimeout(node) {
    node != null && Animator.timeouts.remove(node);
  },

  cancelImmediate(node) {
    node != null && Animator.immediates.remove(node);
  },

  _draw(now) {
    // Run all the timeouts we can run, if they are not ready yet, add them
    // to the end of the queue immediately! (bad timeouts!!! [sarcasm])
    let nextTimeout = null;
    const lastTimeout = Animator.timeouts.last();

    while (nextTimeout = Animator.timeouts.shift()) {
      // Run the timeout if its time, or push it to the end
      if (now >= nextTimeout.time) {
        nextTimeout.run();
      } else {
        Animator.timeouts.push(nextTimeout);
      } // If we hit the last item, we should stop shifting out more items


      if (nextTimeout === lastTimeout) break;
    } // Run all of the animation frames


    let nextFrame = null;
    const lastFrame = Animator.frames.last();

    while (nextFrame !== lastFrame && (nextFrame = Animator.frames.shift())) {
      nextFrame.run(now);
    }

    let nextImmediate = null;

    while (nextImmediate = Animator.immediates.shift()) {
      nextImmediate();
    } // If we have remaining timeouts or frames, draw until we don't anymore


    Animator.nextDraw = Animator.timeouts.first() || Animator.frames.first() ? globals.window.requestAnimationFrame(Animator._draw) : null;
  }

};

const makeSchedule = function (runnerInfo) {
  const start = runnerInfo.start;
  const duration = runnerInfo.runner.duration();
  const end = start + duration;
  return {
    start: start,
    duration: duration,
    end: end,
    runner: runnerInfo.runner
  };
};

const defaultSource = function () {
  const w = globals.window;
  return (w.performance || w.Date).now();
};

class Timeline extends EventTarget {
  // Construct a new timeline on the given element
  constructor(timeSource = defaultSource) {
    super();
    this._timeSource = timeSource; // Store the timing variables

    this._startTime = 0;
    this._speed = 1.0; // Determines how long a runner is hold in memory. Can be a dt or true/false

    this._persist = 0; // Keep track of the running animations and their starting parameters

    this._nextFrame = null;
    this._paused = true;
    this._runners = [];
    this._runnerIds = [];
    this._lastRunnerId = -1;
    this._time = 0;
    this._lastSourceTime = 0;
    this._lastStepTime = 0; // Make sure that step is always called in class context

    this._step = this._stepFn.bind(this, false);
    this._stepImmediate = this._stepFn.bind(this, true);
  }

  active() {
    return !!this._nextFrame;
  }

  finish() {
    // Go to end and pause
    this.time(this.getEndTimeOfTimeline() + 1);
    return this.pause();
  } // Calculates the end of the timeline


  getEndTime() {
    const lastRunnerInfo = this.getLastRunnerInfo();
    const lastDuration = lastRunnerInfo ? lastRunnerInfo.runner.duration() : 0;
    const lastStartTime = lastRunnerInfo ? lastRunnerInfo.start : this._time;
    return lastStartTime + lastDuration;
  }

  getEndTimeOfTimeline() {
    const endTimes = this._runners.map(i => i.start + i.runner.duration());

    return Math.max(0, ...endTimes);
  }

  getLastRunnerInfo() {
    return this.getRunnerInfoById(this._lastRunnerId);
  }

  getRunnerInfoById(id) {
    return this._runners[this._runnerIds.indexOf(id)] || null;
  }

  pause() {
    this._paused = true;
    return this._continue();
  }

  persist(dtOrForever) {
    if (dtOrForever == null) return this._persist;
    this._persist = dtOrForever;
    return this;
  }

  play() {
    // Now make sure we are not paused and continue the animation
    this._paused = false;
    return this.updateTime()._continue();
  }

  reverse(yes) {
    const currentSpeed = this.speed();
    if (yes == null) return this.speed(-currentSpeed);
    const positive = Math.abs(currentSpeed);
    return this.speed(yes ? -positive : positive);
  } // schedules a runner on the timeline


  schedule(runner, delay, when) {
    if (runner == null) {
      return this._runners.map(makeSchedule);
    } // The start time for the next animation can either be given explicitly,
    // derived from the current timeline time or it can be relative to the
    // last start time to chain animations directly


    let absoluteStartTime = 0;
    const endTime = this.getEndTime();
    delay = delay || 0; // Work out when to start the animation

    if (when == null || when === 'last' || when === 'after') {
      // Take the last time and increment
      absoluteStartTime = endTime;
    } else if (when === 'absolute' || when === 'start') {
      absoluteStartTime = delay;
      delay = 0;
    } else if (when === 'now') {
      absoluteStartTime = this._time;
    } else if (when === 'relative') {
      const runnerInfo = this.getRunnerInfoById(runner.id);

      if (runnerInfo) {
        absoluteStartTime = runnerInfo.start + delay;
        delay = 0;
      }
    } else if (when === 'with-last') {
      const lastRunnerInfo = this.getLastRunnerInfo();
      const lastStartTime = lastRunnerInfo ? lastRunnerInfo.start : this._time;
      absoluteStartTime = lastStartTime;
    } else {
      throw new Error('Invalid value for the "when" parameter');
    } // Manage runner


    runner.unschedule();
    runner.timeline(this);
    const persist = runner.persist();
    const runnerInfo = {
      persist: persist === null ? this._persist : persist,
      start: absoluteStartTime + delay,
      runner
    };
    this._lastRunnerId = runner.id;

    this._runners.push(runnerInfo);

    this._runners.sort((a, b) => a.start - b.start);

    this._runnerIds = this._runners.map(info => info.runner.id);

    this.updateTime()._continue();

    return this;
  }

  seek(dt) {
    return this.time(this._time + dt);
  }

  source(fn) {
    if (fn == null) return this._timeSource;
    this._timeSource = fn;
    return this;
  }

  speed(speed) {
    if (speed == null) return this._speed;
    this._speed = speed;
    return this;
  }

  stop() {
    // Go to start and pause
    this.time(0);
    return this.pause();
  }

  time(time) {
    if (time == null) return this._time;
    this._time = time;
    return this._continue(true);
  } // Remove the runner from this timeline


  unschedule(runner) {
    const index = this._runnerIds.indexOf(runner.id);

    if (index < 0) return this;

    this._runners.splice(index, 1);

    this._runnerIds.splice(index, 1);

    runner.timeline(null);
    return this;
  } // Makes sure, that after pausing the time doesn't jump


  updateTime() {
    if (!this.active()) {
      this._lastSourceTime = this._timeSource();
    }

    return this;
  } // Checks if we are running and continues the animation


  _continue(immediateStep = false) {
    Animator.cancelFrame(this._nextFrame);
    this._nextFrame = null;
    if (immediateStep) return this._stepImmediate();
    if (this._paused) return this;
    this._nextFrame = Animator.frame(this._step);
    return this;
  }

  _stepFn(immediateStep = false) {
    // Get the time delta from the last time and update the time
    const time = this._timeSource();

    let dtSource = time - this._lastSourceTime;
    if (immediateStep) dtSource = 0;
    const dtTime = this._speed * dtSource + (this._time - this._lastStepTime);
    this._lastSourceTime = time; // Only update the time if we use the timeSource.
    // Otherwise use the current time

    if (!immediateStep) {
      // Update the time
      this._time += dtTime;
      this._time = this._time < 0 ? 0 : this._time;
    }

    this._lastStepTime = this._time;
    this.fire('time', this._time); // This is for the case that the timeline was seeked so that the time
    // is now before the startTime of the runner. Thats why we need to set
    // the runner to position 0
    // FIXME:
    // However, reseting in insertion order leads to bugs. Considering the case,
    // where 2 runners change the same attribute but in different times,
    // reseting both of them will lead to the case where the later defined
    // runner always wins the reset even if the other runner started earlier
    // and therefore should win the attribute battle
    // this can be solved by reseting them backwards

    for (let k = this._runners.length; k--;) {
      // Get and run the current runner and ignore it if its inactive
      const runnerInfo = this._runners[k];
      const runner = runnerInfo.runner; // Make sure that we give the actual difference
      // between runner start time and now

      const dtToStart = this._time - runnerInfo.start; // Dont run runner if not started yet
      // and try to reset it

      if (dtToStart <= 0) {
        runner.reset();
      }
    } // Run all of the runners directly


    let runnersLeft = false;

    for (let i = 0, len = this._runners.length; i < len; i++) {
      // Get and run the current runner and ignore it if its inactive
      const runnerInfo = this._runners[i];
      const runner = runnerInfo.runner;
      let dt = dtTime; // Make sure that we give the actual difference
      // between runner start time and now

      const dtToStart = this._time - runnerInfo.start; // Dont run runner if not started yet

      if (dtToStart <= 0) {
        runnersLeft = true;
        continue;
      } else if (dtToStart < dt) {
        // Adjust dt to make sure that animation is on point
        dt = dtToStart;
      }

      if (!runner.active()) continue; // If this runner is still going, signal that we need another animation
      // frame, otherwise, remove the completed runner

      const finished = runner.step(dt).done;

      if (!finished) {
        runnersLeft = true; // continue
      } else if (runnerInfo.persist !== true) {
        // runner is finished. And runner might get removed
        const endTime = runner.duration() - runner.time() + this._time;

        if (endTime + runnerInfo.persist < this._time) {
          // Delete runner and correct index
          runner.unschedule();
          --i;
          --len;
        }
      }
    } // Basically: we continue when there are runners right from us in time
    // when -->, and when runners are left from us when <--


    if (runnersLeft && !(this._speed < 0 && this._time === 0) || this._runnerIds.length && this._speed < 0 && this._time > 0) {
      this._continue();
    } else {
      this.pause();
      this.fire('finished');
    }

    return this;
  }

}
registerMethods({
  Element: {
    timeline: function (timeline) {
      if (timeline == null) {
        this._timeline = this._timeline || new Timeline();
        return this._timeline;
      } else {
        this._timeline = timeline;
        return this;
      }
    }
  }
});

class Runner extends EventTarget {
  constructor(options) {
    super(); // Store a unique id on the runner, so that we can identify it later

    this.id = Runner.id++; // Ensure a default value

    options = options == null ? timeline.duration : options; // Ensure that we get a controller

    options = typeof options === 'function' ? new Controller(options) : options; // Declare all of the variables

    this._element = null;
    this._timeline = null;
    this.done = false;
    this._queue = []; // Work out the stepper and the duration

    this._duration = typeof options === 'number' && options;
    this._isDeclarative = options instanceof Controller;
    this._stepper = this._isDeclarative ? options : new Ease(); // We copy the current values from the timeline because they can change

    this._history = {}; // Store the state of the runner

    this.enabled = true;
    this._time = 0;
    this._lastTime = 0; // At creation, the runner is in reseted state

    this._reseted = true; // Save transforms applied to this runner

    this.transforms = new Matrix();
    this.transformId = 1; // Looping variables

    this._haveReversed = false;
    this._reverse = false;
    this._loopsDone = 0;
    this._swing = false;
    this._wait = 0;
    this._times = 1;
    this._frameId = null; // Stores how long a runner is stored after beeing done

    this._persist = this._isDeclarative ? true : null;
  }

  static sanitise(duration, delay, when) {
    // Initialise the default parameters
    let times = 1;
    let swing = false;
    let wait = 0;
    duration = duration || timeline.duration;
    delay = delay || timeline.delay;
    when = when || 'last'; // If we have an object, unpack the values

    if (typeof duration === 'object' && !(duration instanceof Stepper)) {
      delay = duration.delay || delay;
      when = duration.when || when;
      swing = duration.swing || swing;
      times = duration.times || times;
      wait = duration.wait || wait;
      duration = duration.duration || timeline.duration;
    }

    return {
      duration: duration,
      delay: delay,
      swing: swing,
      times: times,
      wait: wait,
      when: when
    };
  }

  active(enabled) {
    if (enabled == null) return this.enabled;
    this.enabled = enabled;
    return this;
  }
  /*
  Private Methods
  ===============
  Methods that shouldn't be used externally
  */


  addTransform(transform, index) {
    this.transforms.lmultiplyO(transform);
    return this;
  }

  after(fn) {
    return this.on('finished', fn);
  }

  animate(duration, delay, when) {
    const o = Runner.sanitise(duration, delay, when);
    const runner = new Runner(o.duration);
    if (this._timeline) runner.timeline(this._timeline);
    if (this._element) runner.element(this._element);
    return runner.loop(o).schedule(o.delay, o.when);
  }

  clearTransform() {
    this.transforms = new Matrix();
    return this;
  } // TODO: Keep track of all transformations so that deletion is faster


  clearTransformsFromQueue() {
    if (!this.done || !this._timeline || !this._timeline._runnerIds.includes(this.id)) {
      this._queue = this._queue.filter(item => {
        return !item.isTransform;
      });
    }
  }

  delay(delay) {
    return this.animate(0, delay);
  }

  duration() {
    return this._times * (this._wait + this._duration) - this._wait;
  }

  during(fn) {
    return this.queue(null, fn);
  }

  ease(fn) {
    this._stepper = new Ease(fn);
    return this;
  }
  /*
  Runner Definitions
  ==================
  These methods help us define the runtime behaviour of the Runner or they
  help us make new runners from the current runner
  */


  element(element) {
    if (element == null) return this._element;
    this._element = element;

    element._prepareRunner();

    return this;
  }

  finish() {
    return this.step(Infinity);
  }

  loop(times, swing, wait) {
    // Deal with the user passing in an object
    if (typeof times === 'object') {
      swing = times.swing;
      wait = times.wait;
      times = times.times;
    } // Sanitise the values and store them


    this._times = times || Infinity;
    this._swing = swing || false;
    this._wait = wait || 0; // Allow true to be passed

    if (this._times === true) {
      this._times = Infinity;
    }

    return this;
  }

  loops(p) {
    const loopDuration = this._duration + this._wait;

    if (p == null) {
      const loopsDone = Math.floor(this._time / loopDuration);
      const relativeTime = this._time - loopsDone * loopDuration;
      const position = relativeTime / this._duration;
      return Math.min(loopsDone + position, this._times);
    }

    const whole = Math.floor(p);
    const partial = p % 1;
    const time = loopDuration * whole + this._duration * partial;
    return this.time(time);
  }

  persist(dtOrForever) {
    if (dtOrForever == null) return this._persist;
    this._persist = dtOrForever;
    return this;
  }

  position(p) {
    // Get all of the variables we need
    const x = this._time;
    const d = this._duration;
    const w = this._wait;
    const t = this._times;
    const s = this._swing;
    const r = this._reverse;
    let position;

    if (p == null) {
      /*
      This function converts a time to a position in the range [0, 1]
      The full explanation can be found in this desmos demonstration
        https://www.desmos.com/calculator/u4fbavgche
      The logic is slightly simplified here because we can use booleans
      */
      // Figure out the value without thinking about the start or end time
      const f = function (x) {
        const swinging = s * Math.floor(x % (2 * (w + d)) / (w + d));
        const backwards = swinging && !r || !swinging && r;
        const uncliped = Math.pow(-1, backwards) * (x % (w + d)) / d + backwards;
        const clipped = Math.max(Math.min(uncliped, 1), 0);
        return clipped;
      }; // Figure out the value by incorporating the start time


      const endTime = t * (w + d) - w;
      position = x <= 0 ? Math.round(f(1e-5)) : x < endTime ? f(x) : Math.round(f(endTime - 1e-5));
      return position;
    } // Work out the loops done and add the position to the loops done


    const loopsDone = Math.floor(this.loops());
    const swingForward = s && loopsDone % 2 === 0;
    const forwards = swingForward && !r || r && swingForward;
    position = loopsDone + (forwards ? p : 1 - p);
    return this.loops(position);
  }

  progress(p) {
    if (p == null) {
      return Math.min(1, this._time / this.duration());
    }

    return this.time(p * this.duration());
  }
  /*
  Basic Functionality
  ===================
  These methods allow us to attach basic functions to the runner directly
  */


  queue(initFn, runFn, retargetFn, isTransform) {
    this._queue.push({
      initialiser: initFn || noop,
      runner: runFn || noop,
      retarget: retargetFn,
      isTransform: isTransform,
      initialised: false,
      finished: false
    });

    const timeline = this.timeline();
    timeline && this.timeline()._continue();
    return this;
  }

  reset() {
    if (this._reseted) return this;
    this.time(0);
    this._reseted = true;
    return this;
  }

  reverse(reverse) {
    this._reverse = reverse == null ? !this._reverse : reverse;
    return this;
  }

  schedule(timeline, delay, when) {
    // The user doesn't need to pass a timeline if we already have one
    if (!(timeline instanceof Timeline)) {
      when = delay;
      delay = timeline;
      timeline = this.timeline();
    } // If there is no timeline, yell at the user...


    if (!timeline) {
      throw Error('Runner cannot be scheduled without timeline');
    } // Schedule the runner on the timeline provided


    timeline.schedule(this, delay, when);
    return this;
  }

  step(dt) {
    // If we are inactive, this stepper just gets skipped
    if (!this.enabled) return this; // Update the time and get the new position

    dt = dt == null ? 16 : dt;
    this._time += dt;
    const position = this.position(); // Figure out if we need to run the stepper in this frame

    const running = this._lastPosition !== position && this._time >= 0;
    this._lastPosition = position; // Figure out if we just started

    const duration = this.duration();
    const justStarted = this._lastTime <= 0 && this._time > 0;
    const justFinished = this._lastTime < duration && this._time >= duration;
    this._lastTime = this._time;

    if (justStarted) {
      this.fire('start', this);
    } // Work out if the runner is finished set the done flag here so animations
    // know, that they are running in the last step (this is good for
    // transformations which can be merged)


    const declarative = this._isDeclarative;
    this.done = !declarative && !justFinished && this._time >= duration; // Runner is running. So its not in reseted state anymore

    this._reseted = false;
    let converged = false; // Call initialise and the run function

    if (running || declarative) {
      this._initialise(running); // clear the transforms on this runner so they dont get added again and again


      this.transforms = new Matrix();
      converged = this._run(declarative ? dt : position);
      this.fire('step', this);
    } // correct the done flag here
    // declaritive animations itself know when they converged


    this.done = this.done || converged && declarative;

    if (justFinished) {
      this.fire('finished', this);
    }

    return this;
  }
  /*
  Runner animation methods
  ========================
  Control how the animation plays
  */


  time(time) {
    if (time == null) {
      return this._time;
    }

    const dt = time - this._time;
    this.step(dt);
    return this;
  }

  timeline(timeline) {
    // check explicitly for undefined so we can set the timeline to null
    if (typeof timeline === 'undefined') return this._timeline;
    this._timeline = timeline;
    return this;
  }

  unschedule() {
    const timeline = this.timeline();
    timeline && timeline.unschedule(this);
    return this;
  } // Run each initialise function in the runner if required


  _initialise(running) {
    // If we aren't running, we shouldn't initialise when not declarative
    if (!running && !this._isDeclarative) return; // Loop through all of the initialisers

    for (let i = 0, len = this._queue.length; i < len; ++i) {
      // Get the current initialiser
      const current = this._queue[i]; // Determine whether we need to initialise

      const needsIt = this._isDeclarative || !current.initialised && running;
      running = !current.finished; // Call the initialiser if we need to

      if (needsIt && running) {
        current.initialiser.call(this);
        current.initialised = true;
      }
    }
  } // Save a morpher to the morpher list so that we can retarget it later


  _rememberMorpher(method, morpher) {
    this._history[method] = {
      morpher: morpher,
      caller: this._queue[this._queue.length - 1]
    }; // We have to resume the timeline in case a controller
    // is already done without being ever run
    // This can happen when e.g. this is done:
    //    anim = el.animate(new SVG.Spring)
    // and later
    //    anim.move(...)

    if (this._isDeclarative) {
      const timeline = this.timeline();
      timeline && timeline.play();
    }
  } // Try to set the target for a morpher if the morpher exists, otherwise
  // Run each run function for the position or dt given


  _run(positionOrDt) {
    // Run all of the _queue directly
    let allfinished = true;

    for (let i = 0, len = this._queue.length; i < len; ++i) {
      // Get the current function to run
      const current = this._queue[i]; // Run the function if its not finished, we keep track of the finished
      // flag for the sake of declarative _queue

      const converged = current.runner.call(this, positionOrDt);
      current.finished = current.finished || converged === true;
      allfinished = allfinished && current.finished;
    } // We report when all of the constructors are finished


    return allfinished;
  } // do nothing and return false


  _tryRetarget(method, target, extra) {
    if (this._history[method]) {
      // if the last method wasnt even initialised, throw it away
      if (!this._history[method].caller.initialised) {
        const index = this._queue.indexOf(this._history[method].caller);

        this._queue.splice(index, 1);

        return false;
      } // for the case of transformations, we use the special retarget function
      // which has access to the outer scope


      if (this._history[method].caller.retarget) {
        this._history[method].caller.retarget.call(this, target, extra); // for everything else a simple morpher change is sufficient

      } else {
        this._history[method].morpher.to(target);
      }

      this._history[method].caller.finished = false;
      const timeline = this.timeline();
      timeline && timeline.play();
      return true;
    }

    return false;
  }

}
Runner.id = 0;
class FakeRunner {
  constructor(transforms = new Matrix(), id = -1, done = true) {
    this.transforms = transforms;
    this.id = id;
    this.done = done;
  }

  clearTransformsFromQueue() {}

}
extend([Runner, FakeRunner], {
  mergeWith(runner) {
    return new FakeRunner(runner.transforms.lmultiply(this.transforms), runner.id);
  }

}); // FakeRunner.emptyRunner = new FakeRunner()

const lmultiply = (last, curr) => last.lmultiplyO(curr);

const getRunnerTransform = runner => runner.transforms;

function mergeTransforms() {
  // Find the matrix to apply to the element and apply it
  const runners = this._transformationRunners.runners;
  const netTransform = runners.map(getRunnerTransform).reduce(lmultiply, new Matrix());
  this.transform(netTransform);

  this._transformationRunners.merge();

  if (this._transformationRunners.length() === 1) {
    this._frameId = null;
  }
}

class RunnerArray {
  constructor() {
    this.runners = [];
    this.ids = [];
  }

  add(runner) {
    if (this.runners.includes(runner)) return;
    const id = runner.id + 1;
    this.runners.push(runner);
    this.ids.push(id);
    return this;
  }

  clearBefore(id) {
    const deleteCnt = this.ids.indexOf(id + 1) || 1;
    this.ids.splice(0, deleteCnt, 0);
    this.runners.splice(0, deleteCnt, new FakeRunner()).forEach(r => r.clearTransformsFromQueue());
    return this;
  }

  edit(id, newRunner) {
    const index = this.ids.indexOf(id + 1);
    this.ids.splice(index, 1, id + 1);
    this.runners.splice(index, 1, newRunner);
    return this;
  }

  getByID(id) {
    return this.runners[this.ids.indexOf(id + 1)];
  }

  length() {
    return this.ids.length;
  }

  merge() {
    let lastRunner = null;

    for (let i = 0; i < this.runners.length; ++i) {
      const runner = this.runners[i];
      const condition = lastRunner && runner.done && lastRunner.done // don't merge runner when persisted on timeline
      && (!runner._timeline || !runner._timeline._runnerIds.includes(runner.id)) && (!lastRunner._timeline || !lastRunner._timeline._runnerIds.includes(lastRunner.id));

      if (condition) {
        // the +1 happens in the function
        this.remove(runner.id);
        const newRunner = runner.mergeWith(lastRunner);
        this.edit(lastRunner.id, newRunner);
        lastRunner = newRunner;
        --i;
      } else {
        lastRunner = runner;
      }
    }

    return this;
  }

  remove(id) {
    const index = this.ids.indexOf(id + 1);
    this.ids.splice(index, 1);
    this.runners.splice(index, 1);
    return this;
  }

}
registerMethods({
  Element: {
    animate(duration, delay, when) {
      const o = Runner.sanitise(duration, delay, when);
      const timeline = this.timeline();
      return new Runner(o.duration).loop(o).element(this).timeline(timeline.play()).schedule(o.delay, o.when);
    },

    delay(by, when) {
      return this.animate(0, by, when);
    },

    // this function searches for all runners on the element and deletes the ones
    // which run before the current one. This is because absolute transformations
    // overwfrite anything anyway so there is no need to waste time computing
    // other runners
    _clearTransformRunnersBefore(currentRunner) {
      this._transformationRunners.clearBefore(currentRunner.id);
    },

    _currentTransform(current) {
      return this._transformationRunners.runners // we need the equal sign here to make sure, that also transformations
      // on the same runner which execute before the current transformation are
      // taken into account
      .filter(runner => runner.id <= current.id).map(getRunnerTransform).reduce(lmultiply, new Matrix());
    },

    _addRunner(runner) {
      this._transformationRunners.add(runner); // Make sure that the runner merge is executed at the very end of
      // all Animator functions. Thats why we use immediate here to execute
      // the merge right after all frames are run


      Animator.cancelImmediate(this._frameId);
      this._frameId = Animator.immediate(mergeTransforms.bind(this));
    },

    _prepareRunner() {
      if (this._frameId == null) {
        this._transformationRunners = new RunnerArray().add(new FakeRunner(new Matrix(this)));
      }
    }

  }
}); // Will output the elements from array A that are not in the array B

const difference = (a, b) => a.filter(x => !b.includes(x));

extend(Runner, {
  attr(a, v) {
    return this.styleAttr('attr', a, v);
  },

  // Add animatable styles
  css(s, v) {
    return this.styleAttr('css', s, v);
  },

  styleAttr(type, nameOrAttrs, val) {
    if (typeof nameOrAttrs === 'string') {
      return this.styleAttr(type, {
        [nameOrAttrs]: val
      });
    }

    let attrs = nameOrAttrs;
    if (this._tryRetarget(type, attrs)) return this;
    let morpher = new Morphable(this._stepper).to(attrs);
    let keys = Object.keys(attrs);
    this.queue(function () {
      morpher = morpher.from(this.element()[type](keys));
    }, function (pos) {
      this.element()[type](morpher.at(pos).valueOf());
      return morpher.done();
    }, function (newToAttrs) {
      // Check if any new keys were added
      const newKeys = Object.keys(newToAttrs);
      const differences = difference(newKeys, keys); // If their are new keys, initialize them and add them to morpher

      if (differences.length) {
        // Get the values
        const addedFromAttrs = this.element()[type](differences); // Get the already initialized values

        const oldFromAttrs = new ObjectBag(morpher.from()).valueOf(); // Merge old and new

        Object.assign(oldFromAttrs, addedFromAttrs);
        morpher.from(oldFromAttrs);
      } // Get the object from the morpher


      const oldToAttrs = new ObjectBag(morpher.to()).valueOf(); // Merge in new attributes

      Object.assign(oldToAttrs, newToAttrs); // Change morpher target

      morpher.to(oldToAttrs); // Make sure that we save the work we did so we don't need it to do again

      keys = newKeys;
      attrs = newToAttrs;
    });

    this._rememberMorpher(type, morpher);

    return this;
  },

  zoom(level, point) {
    if (this._tryRetarget('zoom', level, point)) return this;
    let morpher = new Morphable(this._stepper).to(new SVGNumber(level));
    this.queue(function () {
      morpher = morpher.from(this.element().zoom());
    }, function (pos) {
      this.element().zoom(morpher.at(pos), point);
      return morpher.done();
    }, function (newLevel, newPoint) {
      point = newPoint;
      morpher.to(newLevel);
    });

    this._rememberMorpher('zoom', morpher);

    return this;
  },

  /**
   ** absolute transformations
   **/
  //
  // M v -----|-----(D M v = F v)------|----->  T v
  //
  // 1. define the final state (T) and decompose it (once)
  //    t = [tx, ty, the, lam, sy, sx]
  // 2. on every frame: pull the current state of all previous transforms
  //    (M - m can change)
  //   and then write this as m = [tx0, ty0, the0, lam0, sy0, sx0]
  // 3. Find the interpolated matrix F(pos) = m + pos * (t - m)
  //   - Note F(0) = M
  //   - Note F(1) = T
  // 4. Now you get the delta matrix as a result: D = F * inv(M)
  transform(transforms, relative, affine) {
    // If we have a declarative function, we should retarget it if possible
    relative = transforms.relative || relative;

    if (this._isDeclarative && !relative && this._tryRetarget('transform', transforms)) {
      return this;
    } // Parse the parameters


    const isMatrix = Matrix.isMatrixLike(transforms);
    affine = transforms.affine != null ? transforms.affine : affine != null ? affine : !isMatrix; // Create a morepher and set its type

    const morpher = new Morphable(this._stepper).type(affine ? TransformBag : Matrix);
    let origin;
    let element;
    let current;
    let currentAngle;
    let startTransform;

    function setup() {
      // make sure element and origin is defined
      element = element || this.element();
      origin = origin || getOrigin(transforms, element);
      startTransform = new Matrix(relative ? undefined : element); // add the runner to the element so it can merge transformations

      element._addRunner(this); // Deactivate all transforms that have run so far if we are absolute


      if (!relative) {
        element._clearTransformRunnersBefore(this);
      }
    }

    function run(pos) {
      // clear all other transforms before this in case something is saved
      // on this runner. We are absolute. We dont need these!
      if (!relative) this.clearTransform();
      const {
        x,
        y
      } = new Point(origin).transform(element._currentTransform(this));
      let target = new Matrix({ ...transforms,
        origin: [x, y]
      });
      let start = this._isDeclarative && current ? current : startTransform;

      if (affine) {
        target = target.decompose(x, y);
        start = start.decompose(x, y); // Get the current and target angle as it was set

        const rTarget = target.rotate;
        const rCurrent = start.rotate; // Figure out the shortest path to rotate directly

        const possibilities = [rTarget - 360, rTarget, rTarget + 360];
        const distances = possibilities.map(a => Math.abs(a - rCurrent));
        const shortest = Math.min(...distances);
        const index = distances.indexOf(shortest);
        target.rotate = possibilities[index];
      }

      if (relative) {
        // we have to be careful here not to overwrite the rotation
        // with the rotate method of Matrix
        if (!isMatrix) {
          target.rotate = transforms.rotate || 0;
        }

        if (this._isDeclarative && currentAngle) {
          start.rotate = currentAngle;
        }
      }

      morpher.from(start);
      morpher.to(target);
      const affineParameters = morpher.at(pos);
      currentAngle = affineParameters.rotate;
      current = new Matrix(affineParameters);
      this.addTransform(current);

      element._addRunner(this);

      return morpher.done();
    }

    function retarget(newTransforms) {
      // only get a new origin if it changed since the last call
      if ((newTransforms.origin || 'center').toString() !== (transforms.origin || 'center').toString()) {
        origin = getOrigin(newTransforms, element);
      } // overwrite the old transformations with the new ones


      transforms = { ...newTransforms,
        origin
      };
    }

    this.queue(setup, run, retarget, true);
    this._isDeclarative && this._rememberMorpher('transform', morpher);
    return this;
  },

  // Animatable x-axis
  x(x, relative) {
    return this._queueNumber('x', x);
  },

  // Animatable y-axis
  y(y) {
    return this._queueNumber('y', y);
  },

  dx(x = 0) {
    return this._queueNumberDelta('x', x);
  },

  dy(y = 0) {
    return this._queueNumberDelta('y', y);
  },

  dmove(x, y) {
    return this.dx(x).dy(y);
  },

  _queueNumberDelta(method, to) {
    to = new SVGNumber(to); // Try to change the target if we have this method already registerd

    if (this._tryRetarget(method, to)) return this; // Make a morpher and queue the animation

    const morpher = new Morphable(this._stepper).to(to);
    let from = null;
    this.queue(function () {
      from = this.element()[method]();
      morpher.from(from);
      morpher.to(from + to);
    }, function (pos) {
      this.element()[method](morpher.at(pos));
      return morpher.done();
    }, function (newTo) {
      morpher.to(from + new SVGNumber(newTo));
    }); // Register the morpher so that if it is changed again, we can retarget it

    this._rememberMorpher(method, morpher);

    return this;
  },

  _queueObject(method, to) {
    // Try to change the target if we have this method already registerd
    if (this._tryRetarget(method, to)) return this; // Make a morpher and queue the animation

    const morpher = new Morphable(this._stepper).to(to);
    this.queue(function () {
      morpher.from(this.element()[method]());
    }, function (pos) {
      this.element()[method](morpher.at(pos));
      return morpher.done();
    }); // Register the morpher so that if it is changed again, we can retarget it

    this._rememberMorpher(method, morpher);

    return this;
  },

  _queueNumber(method, value) {
    return this._queueObject(method, new SVGNumber(value));
  },

  // Animatable center x-axis
  cx(x) {
    return this._queueNumber('cx', x);
  },

  // Animatable center y-axis
  cy(y) {
    return this._queueNumber('cy', y);
  },

  // Add animatable move
  move(x, y) {
    return this.x(x).y(y);
  },

  // Add animatable center
  center(x, y) {
    return this.cx(x).cy(y);
  },

  // Add animatable size
  size(width, height) {
    // animate bbox based size for all other elements
    let box;

    if (!width || !height) {
      box = this._element.bbox();
    }

    if (!width) {
      width = box.width / box.height * height;
    }

    if (!height) {
      height = box.height / box.width * width;
    }

    return this.width(width).height(height);
  },

  // Add animatable width
  width(width) {
    return this._queueNumber('width', width);
  },

  // Add animatable height
  height(height) {
    return this._queueNumber('height', height);
  },

  // Add animatable plot
  plot(a, b, c, d) {
    // Lines can be plotted with 4 arguments
    if (arguments.length === 4) {
      return this.plot([a, b, c, d]);
    }

    if (this._tryRetarget('plot', a)) return this;
    const morpher = new Morphable(this._stepper).type(this._element.MorphArray).to(a);
    this.queue(function () {
      morpher.from(this._element.array());
    }, function (pos) {
      this._element.plot(morpher.at(pos));

      return morpher.done();
    });

    this._rememberMorpher('plot', morpher);

    return this;
  },

  // Add leading method
  leading(value) {
    return this._queueNumber('leading', value);
  },

  // Add animatable viewbox
  viewbox(x, y, width, height) {
    return this._queueObject('viewbox', new Box(x, y, width, height));
  },

  update(o) {
    if (typeof o !== 'object') {
      return this.update({
        offset: arguments[0],
        color: arguments[1],
        opacity: arguments[2]
      });
    }

    if (o.opacity != null) this.attr('stop-opacity', o.opacity);
    if (o.color != null) this.attr('stop-color', o.color);
    if (o.offset != null) this.attr('offset', o.offset);
    return this;
  }

});
extend(Runner, {
  rx,
  ry,
  from,
  to
});
register(Runner, 'Runner');

class Svg extends Container {
  constructor(node, attrs = node) {
    super(nodeOrNew('svg', node), attrs);
    this.namespace();
  } // Creates and returns defs element


  defs() {
    if (!this.isRoot()) return this.root().defs();
    return adopt(this.node.querySelector('defs')) || this.put(new Defs());
  }

  isRoot() {
    return !this.node.parentNode || !(this.node.parentNode instanceof globals.window.SVGElement) && this.node.parentNode.nodeName !== '#document-fragment';
  } // Add namespaces


  namespace() {
    if (!this.isRoot()) return this.root().namespace();
    return this.attr({
      xmlns: svg,
      version: '1.1'
    }).attr('xmlns:xlink', xlink, xmlns).attr('xmlns:svgjs', svgjs, xmlns);
  }

  removeNamespace() {
    return this.attr({
      xmlns: null,
      version: null
    }).attr('xmlns:xlink', null, xmlns).attr('xmlns:svgjs', null, xmlns);
  } // Check if this is a root svg
  // If not, call root() from this element


  root() {
    if (this.isRoot()) return this;
    return super.root();
  }

}
registerMethods({
  Container: {
    // Create nested svg document
    nested: wrapWithAttrCheck(function () {
      return this.put(new Svg());
    })
  }
});
register(Svg, 'Svg', true);

class Symbol extends Container {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('symbol', node), attrs);
  }

}
registerMethods({
  Container: {
    symbol: wrapWithAttrCheck(function () {
      return this.put(new Symbol());
    })
  }
});
register(Symbol, 'Symbol');

function plain(text) {
  // clear if build mode is disabled
  if (this._build === false) {
    this.clear();
  } // create text node


  this.node.appendChild(globals.document.createTextNode(text));
  return this;
} // Get length of text element

function length() {
  return this.node.getComputedTextLength();
} // Move over x-axis
// Text is moved by its bounding box
// text-anchor does NOT matter

function x$1(x, box = this.bbox()) {
  if (x == null) {
    return box.x;
  }

  return this.attr('x', this.attr('x') + x - box.x);
} // Move over y-axis

function y$1(y, box = this.bbox()) {
  if (y == null) {
    return box.y;
  }

  return this.attr('y', this.attr('y') + y - box.y);
}
function move$1(x, y, box = this.bbox()) {
  return this.x(x, box).y(y, box);
} // Move center over x-axis

function cx(x, box = this.bbox()) {
  if (x == null) {
    return box.cx;
  }

  return this.attr('x', this.attr('x') + x - box.cx);
} // Move center over y-axis

function cy(y, box = this.bbox()) {
  if (y == null) {
    return box.cy;
  }

  return this.attr('y', this.attr('y') + y - box.cy);
}
function center(x, y, box = this.bbox()) {
  return this.cx(x, box).cy(y, box);
}
function ax(x) {
  return this.attr('x', x);
}
function ay(y) {
  return this.attr('y', y);
}
function amove(x, y) {
  return this.ax(x).ay(y);
} // Enable / disable build mode

function build(build) {
  this._build = !!build;
  return this;
}

var textable = {
  __proto__: null,
  plain: plain,
  length: length,
  x: x$1,
  y: y$1,
  move: move$1,
  cx: cx,
  cy: cy,
  center: center,
  ax: ax,
  ay: ay,
  amove: amove,
  build: build
};

class Text extends Shape {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('text', node), attrs);
    this.dom.leading = new SVGNumber(1.3); // store leading value for rebuilding

    this._rebuild = true; // enable automatic updating of dy values

    this._build = false; // disable build mode for adding multiple lines
  } // Set / get leading


  leading(value) {
    // act as getter
    if (value == null) {
      return this.dom.leading;
    } // act as setter


    this.dom.leading = new SVGNumber(value);
    return this.rebuild();
  } // Rebuild appearance type


  rebuild(rebuild) {
    // store new rebuild flag if given
    if (typeof rebuild === 'boolean') {
      this._rebuild = rebuild;
    } // define position of all lines


    if (this._rebuild) {
      const self = this;
      let blankLineOffset = 0;
      const leading = this.dom.leading;
      this.each(function (i) {
        const fontSize = globals.window.getComputedStyle(this.node).getPropertyValue('font-size');
        const dy = leading * new SVGNumber(fontSize);

        if (this.dom.newLined) {
          this.attr('x', self.attr('x'));

          if (this.text() === '\n') {
            blankLineOffset += dy;
          } else {
            this.attr('dy', i ? dy + blankLineOffset : 0);
            blankLineOffset = 0;
          }
        }
      });
      this.fire('rebuild');
    }

    return this;
  } // overwrite method from parent to set data properly


  setData(o) {
    this.dom = o;
    this.dom.leading = new SVGNumber(o.leading || 1.3);
    return this;
  } // Set the text content


  text(text) {
    // act as getter
    if (text === undefined) {
      const children = this.node.childNodes;
      let firstLine = 0;
      text = '';

      for (let i = 0, len = children.length; i < len; ++i) {
        // skip textPaths - they are no lines
        if (children[i].nodeName === 'textPath') {
          if (i === 0) firstLine = 1;
          continue;
        } // add newline if its not the first child and newLined is set to true


        if (i !== firstLine && children[i].nodeType !== 3 && adopt(children[i]).dom.newLined === true) {
          text += '\n';
        } // add content of this node


        text += children[i].textContent;
      }

      return text;
    } // remove existing content


    this.clear().build(true);

    if (typeof text === 'function') {
      // call block
      text.call(this, this);
    } else {
      // store text and make sure text is not blank
      text = (text + '').split('\n'); // build new lines

      for (let j = 0, jl = text.length; j < jl; j++) {
        this.newLine(text[j]);
      }
    } // disable build mode and rebuild lines


    return this.build(false).rebuild();
  }

}
extend(Text, textable);
registerMethods({
  Container: {
    // Create text element
    text: wrapWithAttrCheck(function (text = '') {
      return this.put(new Text()).text(text);
    }),
    // Create plain text element
    plain: wrapWithAttrCheck(function (text = '') {
      return this.put(new Text()).plain(text);
    })
  }
});
register(Text, 'Text');

class Tspan extends Shape {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('tspan', node), attrs);
    this._build = false; // disable build mode for adding multiple lines
  } // Shortcut dx


  dx(dx) {
    return this.attr('dx', dx);
  } // Shortcut dy


  dy(dy) {
    return this.attr('dy', dy);
  } // Create new line


  newLine() {
    // mark new line
    this.dom.newLined = true; // fetch parent

    const text = this.parent(); // early return in case we are not in a text element

    if (!(text instanceof Text)) {
      return this;
    }

    const i = text.index(this);
    const fontSize = globals.window.getComputedStyle(this.node).getPropertyValue('font-size');
    const dy = text.dom.leading * new SVGNumber(fontSize); // apply new position

    return this.dy(i ? dy : 0).attr('x', text.x());
  } // Set text content


  text(text) {
    if (text == null) return this.node.textContent + (this.dom.newLined ? '\n' : '');

    if (typeof text === 'function') {
      this.clear().build(true);
      text.call(this, this);
      this.build(false);
    } else {
      this.plain(text);
    }

    return this;
  }

}
extend(Tspan, textable);
registerMethods({
  Tspan: {
    tspan: wrapWithAttrCheck(function (text = '') {
      const tspan = new Tspan(); // clear if build mode is disabled

      if (!this._build) {
        this.clear();
      } // add new tspan


      return this.put(tspan).text(text);
    })
  },
  Text: {
    newLine: function (text = '') {
      return this.tspan(text).newLine();
    }
  }
});
register(Tspan, 'Tspan');

class Circle extends Shape {
  constructor(node, attrs = node) {
    super(nodeOrNew('circle', node), attrs);
  }

  radius(r) {
    return this.attr('r', r);
  } // Radius x value


  rx(rx) {
    return this.attr('r', rx);
  } // Alias radius x value


  ry(ry) {
    return this.rx(ry);
  }

  size(size) {
    return this.radius(new SVGNumber(size).divide(2));
  }

}
extend(Circle, {
  x: x$3,
  y: y$3,
  cx: cx$1,
  cy: cy$1,
  width: width$2,
  height: height$2
});
registerMethods({
  Container: {
    // Create circle element
    circle: wrapWithAttrCheck(function (size = 0) {
      return this.put(new Circle()).size(size).move(0, 0);
    })
  }
});
register(Circle, 'Circle');

class ClipPath extends Container {
  constructor(node, attrs = node) {
    super(nodeOrNew('clipPath', node), attrs);
  } // Unclip all clipped elements and remove itself


  remove() {
    // unclip all targets
    this.targets().forEach(function (el) {
      el.unclip();
    }); // remove clipPath from parent

    return super.remove();
  }

  targets() {
    return baseFind('svg [clip-path*="' + this.id() + '"]');
  }

}
registerMethods({
  Container: {
    // Create clipping element
    clip: wrapWithAttrCheck(function () {
      return this.defs().put(new ClipPath());
    })
  },
  Element: {
    // Distribute clipPath to svg element
    clipper() {
      return this.reference('clip-path');
    },

    clipWith(element) {
      // use given clip or create a new one
      const clipper = element instanceof ClipPath ? element : this.parent().clip().add(element); // apply mask

      return this.attr('clip-path', 'url("#' + clipper.id() + '")');
    },

    // Unclip element
    unclip() {
      return this.attr('clip-path', null);
    }

  }
});
register(ClipPath, 'ClipPath');

class ForeignObject extends Element {
  constructor(node, attrs = node) {
    super(nodeOrNew('foreignObject', node), attrs);
  }

}
registerMethods({
  Container: {
    foreignObject: wrapWithAttrCheck(function (width, height) {
      return this.put(new ForeignObject()).size(width, height);
    })
  }
});
register(ForeignObject, 'ForeignObject');

function dmove(dx, dy) {
  this.children().forEach((child, i) => {
    let bbox; // We have to wrap this for elements that dont have a bbox
    // e.g. title and other descriptive elements

    try {
      // Get the childs bbox
      bbox = child.bbox();
    } catch (e) {
      return;
    } // Get childs matrix


    const m = new Matrix(child); // Translate childs matrix by amount and
    // transform it back into parents space

    const matrix = m.translate(dx, dy).transform(m.inverse()); // Calculate new x and y from old box

    const p = new Point(bbox.x, bbox.y).transform(matrix); // Move element

    child.move(p.x, p.y);
  });
  return this;
}
function dx(dx) {
  return this.dmove(dx, 0);
}
function dy(dy) {
  return this.dmove(0, dy);
}
function height(height, box = this.bbox()) {
  if (height == null) return box.height;
  return this.size(box.width, height, box);
}
function move(x = 0, y = 0, box = this.bbox()) {
  const dx = x - box.x;
  const dy = y - box.y;
  return this.dmove(dx, dy);
}
function size(width, height, box = this.bbox()) {
  const p = proportionalSize(this, width, height, box);
  const scaleX = p.width / box.width;
  const scaleY = p.height / box.height;
  this.children().forEach((child, i) => {
    const o = new Point(box).transform(new Matrix(child).inverse());
    child.scale(scaleX, scaleY, o.x, o.y);
  });
  return this;
}
function width(width, box = this.bbox()) {
  if (width == null) return box.width;
  return this.size(width, box.height, box);
}
function x(x, box = this.bbox()) {
  if (x == null) return box.x;
  return this.move(x, box.y, box);
}
function y(y, box = this.bbox()) {
  if (y == null) return box.y;
  return this.move(box.x, y, box);
}

var containerGeometry = {
  __proto__: null,
  dmove: dmove,
  dx: dx,
  dy: dy,
  height: height,
  move: move,
  size: size,
  width: width,
  x: x,
  y: y
};

class G extends Container {
  constructor(node, attrs = node) {
    super(nodeOrNew('g', node), attrs);
  }

}
extend(G, containerGeometry);
registerMethods({
  Container: {
    // Create a group element
    group: wrapWithAttrCheck(function () {
      return this.put(new G());
    })
  }
});
register(G, 'G');

class A extends Container {
  constructor(node, attrs = node) {
    super(nodeOrNew('a', node), attrs);
  } // Link target attribute


  target(target) {
    return this.attr('target', target);
  } // Link url


  to(url) {
    return this.attr('href', url, xlink);
  }

}
extend(A, containerGeometry);
registerMethods({
  Container: {
    // Create a hyperlink element
    link: wrapWithAttrCheck(function (url) {
      return this.put(new A()).to(url);
    })
  },
  Element: {
    unlink() {
      const link = this.linker();
      if (!link) return this;
      const parent = link.parent();

      if (!parent) {
        return this.remove();
      }

      const index = parent.index(link);
      parent.add(this, index);
      link.remove();
      return this;
    },

    linkTo(url) {
      // reuse old link if possible
      let link = this.linker();

      if (!link) {
        link = new A();
        this.wrap(link);
      }

      if (typeof url === 'function') {
        url.call(link, link);
      } else {
        link.to(url);
      }

      return this;
    },

    linker() {
      const link = this.parent();

      if (link && link.node.nodeName.toLowerCase() === 'a') {
        return link;
      }

      return null;
    }

  }
});
register(A, 'A');

class Mask extends Container {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('mask', node), attrs);
  } // Unmask all masked elements and remove itself


  remove() {
    // unmask all targets
    this.targets().forEach(function (el) {
      el.unmask();
    }); // remove mask from parent

    return super.remove();
  }

  targets() {
    return baseFind('svg [mask*="' + this.id() + '"]');
  }

}
registerMethods({
  Container: {
    mask: wrapWithAttrCheck(function () {
      return this.defs().put(new Mask());
    })
  },
  Element: {
    // Distribute mask to svg element
    masker() {
      return this.reference('mask');
    },

    maskWith(element) {
      // use given mask or create a new one
      const masker = element instanceof Mask ? element : this.parent().mask().add(element); // apply mask

      return this.attr('mask', 'url("#' + masker.id() + '")');
    },

    // Unmask element
    unmask() {
      return this.attr('mask', null);
    }

  }
});
register(Mask, 'Mask');

class Stop extends Element {
  constructor(node, attrs = node) {
    super(nodeOrNew('stop', node), attrs);
  } // add color stops


  update(o) {
    if (typeof o === 'number' || o instanceof SVGNumber) {
      o = {
        offset: arguments[0],
        color: arguments[1],
        opacity: arguments[2]
      };
    } // set attributes


    if (o.opacity != null) this.attr('stop-opacity', o.opacity);
    if (o.color != null) this.attr('stop-color', o.color);
    if (o.offset != null) this.attr('offset', new SVGNumber(o.offset));
    return this;
  }

}
registerMethods({
  Gradient: {
    // Add a color stop
    stop: function (offset, color, opacity) {
      return this.put(new Stop()).update(offset, color, opacity);
    }
  }
});
register(Stop, 'Stop');

function cssRule(selector, rule) {
  if (!selector) return '';
  if (!rule) return selector;
  let ret = selector + '{';

  for (const i in rule) {
    ret += unCamelCase(i) + ':' + rule[i] + ';';
  }

  ret += '}';
  return ret;
}

class Style extends Element {
  constructor(node, attrs = node) {
    super(nodeOrNew('style', node), attrs);
  }

  addText(w = '') {
    this.node.textContent += w;
    return this;
  }

  font(name, src, params = {}) {
    return this.rule('@font-face', {
      fontFamily: name,
      src: src,
      ...params
    });
  }

  rule(selector, obj) {
    return this.addText(cssRule(selector, obj));
  }

}
registerMethods('Dom', {
  style(selector, obj) {
    return this.put(new Style()).rule(selector, obj);
  },

  fontface(name, src, params) {
    return this.put(new Style()).font(name, src, params);
  }

});
register(Style, 'Style');

class TextPath extends Text {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('textPath', node), attrs);
  } // return the array of the path track element


  array() {
    const track = this.track();
    return track ? track.array() : null;
  } // Plot path if any


  plot(d) {
    const track = this.track();
    let pathArray = null;

    if (track) {
      pathArray = track.plot(d);
    }

    return d == null ? pathArray : this;
  } // Get the path element


  track() {
    return this.reference('href');
  }

}
registerMethods({
  Container: {
    textPath: wrapWithAttrCheck(function (text, path) {
      // Convert text to instance if needed
      if (!(text instanceof Text)) {
        text = this.text(text);
      }

      return text.path(path);
    })
  },
  Text: {
    // Create path for text to run on
    path: wrapWithAttrCheck(function (track, importNodes = true) {
      const textPath = new TextPath(); // if track is a path, reuse it

      if (!(track instanceof Path)) {
        // create path element
        track = this.defs().path(track);
      } // link textPath to path and add content


      textPath.attr('href', '#' + track, xlink); // Transplant all nodes from text to textPath

      let node;

      if (importNodes) {
        while (node = this.node.firstChild) {
          textPath.node.appendChild(node);
        }
      } // add textPath element as child node and return textPath


      return this.put(textPath);
    }),

    // Get the textPath children
    textPath() {
      return this.findOne('textPath');
    }

  },
  Path: {
    // creates a textPath from this path
    text: wrapWithAttrCheck(function (text) {
      // Convert text to instance if needed
      if (!(text instanceof Text)) {
        text = new Text().addTo(this.parent()).text(text);
      } // Create textPath from text and path and return


      return text.path(this);
    }),

    targets() {
      return baseFind('svg textPath').filter(node => {
        return (node.attr('href') || '').includes(this.id());
      }); // Does not work in IE11. Use when IE support is dropped
      // return baseFind('svg textPath[*|href*="' + this.id() + '"]')
    }

  }
});
TextPath.prototype.MorphArray = PathArray;
register(TextPath, 'TextPath');

class Use extends Shape {
  constructor(node, attrs = node) {
    super(nodeOrNew('use', node), attrs);
  } // Use element as a reference


  use(element, file) {
    // Set lined element
    return this.attr('href', (file || '') + '#' + element, xlink);
  }

}
registerMethods({
  Container: {
    // Create a use element
    use: wrapWithAttrCheck(function (element, file) {
      return this.put(new Use()).use(element, file);
    })
  }
});
register(Use, 'Use');

/* Optional Modules */
const SVG = makeInstance;
extend([Svg, Symbol, Image, Pattern, Marker], getMethodsFor('viewbox'));
extend([Line, Polyline, Polygon, Path], getMethodsFor('marker'));
extend(Text, getMethodsFor('Text'));
extend(Path, getMethodsFor('Path'));
extend(Defs, getMethodsFor('Defs'));
extend([Text, Tspan], getMethodsFor('Tspan'));
extend([Rect, Ellipse, Gradient, Runner], getMethodsFor('radius'));
extend(EventTarget, getMethodsFor('EventTarget'));
extend(Dom, getMethodsFor('Dom'));
extend(Element, getMethodsFor('Element'));
extend(Shape, getMethodsFor('Shape'));
extend([Container, Fragment], getMethodsFor('Container'));
extend(Gradient, getMethodsFor('Gradient'));
extend(Runner, getMethodsFor('Runner'));
List.extend(getMethodNames());
registerMorphableType([SVGNumber, Color, Box, Matrix, SVGArray, PointArray, PathArray, Point]);
makeMorphable();


//# sourceMappingURL=svg.esm.js.map


/***/ }),

/***/ "./src/core/ui.ts":
/*!************************!*\
  !*** ./src/core/ui.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Box: () => (/* reexport safe */ _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.Box),
/* harmony export */   Circle: () => (/* reexport safe */ _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.Circle),
/* harmony export */   Component: () => (/* binding */ Component),
/* harmony export */   Container: () => (/* reexport safe */ _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.Container),
/* harmony export */   DragWindowState: () => (/* binding */ DragWindowState),
/* harmony export */   EventArgs: () => (/* binding */ EventArgs),
/* harmony export */   G: () => (/* reexport safe */ _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.G),
/* harmony export */   HoverPressedWidgetState: () => (/* binding */ HoverPressedWidgetState),
/* harmony export */   HoverWidgetState: () => (/* binding */ HoverWidgetState),
/* harmony export */   IdleDownWidgetState: () => (/* binding */ IdleDownWidgetState),
/* harmony export */   IdleUpWidgetState: () => (/* binding */ IdleUpWidgetState),
/* harmony export */   Number: () => (/* reexport safe */ _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.Number),
/* harmony export */   PressedOutWidgetState: () => (/* binding */ PressedOutWidgetState),
/* harmony export */   PressedWidgetState: () => (/* binding */ PressedWidgetState),
/* harmony export */   Rect: () => (/* reexport safe */ _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.Rect),
/* harmony export */   RoleType: () => (/* binding */ RoleType),
/* harmony export */   SVG: () => (/* reexport safe */ _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG),
/* harmony export */   Svg: () => (/* reexport safe */ _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.Svg),
/* harmony export */   Text: () => (/* reexport safe */ _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.Text),
/* harmony export */   Widget: () => (/* binding */ Widget),
/* harmony export */   Window: () => (/* binding */ Window)
/* harmony export */ });
/* harmony import */ var _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @svgdotjs/svg.js */ "./node_modules/@svgdotjs/svg.js/dist/svg.esm.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var RoleType;
(function (RoleType) {
    RoleType["button"] = "button";
    RoleType["group"] = "group";
    RoleType["heading"] = "heading";
    RoleType["none"] = "none";
    RoleType["scrollbar"] = "scrollbar";
    RoleType["window"] = "window";
})(RoleType || (RoleType = {}));
var IdleUpWidgetState = /** @class */ (function () {
    function IdleUpWidgetState() {
    }
    IdleUpWidgetState.prototype.onEnter = function (component) {
        if (component.parent.getState() instanceof IdleDownWidgetState) {
            component.setState(new HoverPressedWidgetState());
            component.hoverPressedState();
        }
        else {
            component.setState(new HoverWidgetState());
            component.hoverState();
        }
    };
    IdleUpWidgetState.prototype.onLeave = function (component) { };
    IdleUpWidgetState.prototype.onPress = function (component) {
        component.setState(new IdleDownWidgetState());
        component.idledownState();
    };
    IdleUpWidgetState.prototype.onRelease = function (component) { };
    IdleUpWidgetState.prototype.onMove = function (component) {
    };
    IdleUpWidgetState.prototype.onKeyup = function (component) {
        component.keyupState();
    };
    return IdleUpWidgetState;
}());
var IdleDownWidgetState = /** @class */ (function () {
    function IdleDownWidgetState() {
    }
    IdleDownWidgetState.prototype.onEnter = function (component) { };
    IdleDownWidgetState.prototype.onLeave = function (component) { };
    IdleDownWidgetState.prototype.onPress = function (component) { };
    IdleDownWidgetState.prototype.onRelease = function (component) {
        component.setState(new IdleUpWidgetState());
        component.idleupState();
    };
    IdleDownWidgetState.prototype.onMove = function (component) {
        component.moveState();
    };
    IdleDownWidgetState.prototype.onKeyup = function (component) {
    };
    return IdleDownWidgetState;
}());
var HoverWidgetState = /** @class */ (function () {
    function HoverWidgetState() {
    }
    HoverWidgetState.prototype.onEnter = function (component) {
    };
    HoverWidgetState.prototype.onLeave = function (component) {
        component.setState(new IdleUpWidgetState());
        component.idleupState();
    };
    HoverWidgetState.prototype.onPress = function (component) {
        component.setState(new PressedWidgetState());
        component.pressedState();
    };
    HoverWidgetState.prototype.onRelease = function (component) {
    };
    HoverWidgetState.prototype.onMove = function (component) { };
    HoverWidgetState.prototype.onKeyup = function (component) {
    };
    return HoverWidgetState;
}());
var HoverPressedWidgetState = /** @class */ (function () {
    function HoverPressedWidgetState() {
    }
    HoverPressedWidgetState.prototype.onEnter = function (component) { };
    HoverPressedWidgetState.prototype.onLeave = function (component) {
        component.setState(new IdleUpWidgetState());
        component.idleupState();
    };
    HoverPressedWidgetState.prototype.onPress = function (component) { };
    HoverPressedWidgetState.prototype.onRelease = function (component) {
        component.setState(new HoverWidgetState());
        component.hoverState();
    };
    HoverPressedWidgetState.prototype.onMove = function (component) { };
    HoverPressedWidgetState.prototype.onKeyup = function (component) {
    };
    return HoverPressedWidgetState;
}());
var PressedWidgetState = /** @class */ (function () {
    function PressedWidgetState() {
    }
    PressedWidgetState.prototype.onEnter = function (component) {
    };
    PressedWidgetState.prototype.onLeave = function (component) {
        component.setState(new PressedOutWidgetState());
        component.pressedoutState();
    };
    PressedWidgetState.prototype.onPress = function (component) {
    };
    PressedWidgetState.prototype.onRelease = function (component) {
        component.setState(new HoverWidgetState());
        component.pressReleaseState();
    };
    PressedWidgetState.prototype.onMove = function (component) {
        if (component.isDraggable) {
            component.setState(new DragWindowState());
            component.moveState();
        }
    };
    PressedWidgetState.prototype.onKeyup = function (component) {
    };
    return PressedWidgetState;
}());
var PressedOutWidgetState = /** @class */ (function () {
    function PressedOutWidgetState() {
    }
    PressedOutWidgetState.prototype.onEnter = function (component) {
        component.setState(new PressedWidgetState());
        component.pressedState();
    };
    PressedOutWidgetState.prototype.onLeave = function (component) { };
    PressedOutWidgetState.prototype.onPress = function (component) { };
    PressedOutWidgetState.prototype.onRelease = function (component) {
        component.setState(new IdleUpWidgetState());
        component.idleupState();
    };
    PressedOutWidgetState.prototype.onMove = function (component) {
        if (component.isDraggable) {
            component.moveState();
        }
    };
    PressedOutWidgetState.prototype.onKeyup = function (component) {
    };
    return PressedOutWidgetState;
}());
var DragWindowState = /** @class */ (function () {
    function DragWindowState() {
    }
    DragWindowState.prototype.onEnter = function (component) { };
    DragWindowState.prototype.onLeave = function (component) {
        component.setState(new PressedOutWidgetState());
        component.pressedoutState();
    };
    DragWindowState.prototype.onPress = function (component) { };
    DragWindowState.prototype.onRelease = function (component) {
        component.setState(new HoverWidgetState());
        component.hoverState();
    };
    DragWindowState.prototype.onMove = function (component) {
        component.moveState();
    };
    DragWindowState.prototype.onKeyup = function (component) { };
    return DragWindowState;
}());
var KeypressWidgetState = /** @class */ (function () {
    function KeypressWidgetState() {
    }
    KeypressWidgetState.prototype.onEnter = function (component) { };
    KeypressWidgetState.prototype.onLeave = function (component) { };
    KeypressWidgetState.prototype.onPress = function (component) { };
    KeypressWidgetState.prototype.onRelease = function (component) { };
    KeypressWidgetState.prototype.onMove = function (component) { };
    KeypressWidgetState.prototype.onKeyup = function (component) {
        component.keyupState();
    };
    return KeypressWidgetState;
}());
/**
 * A simple class for passing event arguments containing an object, event, and an optional item reference.
 */
var EventArgs = /** @class */ (function () {
    /**
     * Creates a new EventArgs instance.
     * @param obj The object associated with the event.
     * @param event (Optional) The event that occurred.
     * @param itemRef (Optional) A reference to the item associated with the event.
     */
    function EventArgs(obj, event, itemRef) {
        this._event = event;
        this._obj = obj;
        if (typeof itemRef !== 'undefined') {
            this._itemRef = itemRef;
        }
    }
    Object.defineProperty(EventArgs.prototype, "event", {
        /**
         * Gets the event associated with the EventArgs instance.
         */
        get: function () {
            return this._event;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EventArgs.prototype, "obj", {
        /**
         * Gets the object associated with the EventArgs instance.
         */
        get: function () {
            return this._obj;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EventArgs.prototype, "itemRef", {
        /**
         * Gets the item reference associated with the EventArgs instance.
         */
        get: function () {
            return this._itemRef;
        },
        enumerable: false,
        configurable: true
    });
    return EventArgs;
}());
var Component = /** @class */ (function () {
    function Component() {
        this.tabindex = 0;
        this._handlers = [];
        this.previousState = null;
        /**
         * flag true if widget needs to support a draggable state e.g., scrollbar
         */
        this.isDraggable = false;
        /* accessibility properties */
        this._role = null;
    }
    Object.defineProperty(Component.prototype, "role", {
        get: function () {
            return this._role;
        },
        /*
            Accessibility is opinionated. If role is not set, throw error.
        */
        set: function (role) {
            this._role = role;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Component.prototype, "selectable", {
        get: function () {
            return this._isselectable;
        },
        /*
            Selectable is a flag to control whether or not a widget gets selected on a browser drag action.
            Generally, this should be set to false for widgets like a button, but true for widgets that support
            text input
        */
        set: function (val) {
            this._isselectable = val;
        },
        enumerable: false,
        configurable: true
    });
    Component.prototype.attach = function (handler) {
        this._handlers.push(handler);
    };
    Component.prototype.raise = function (event) {
        this._handlers.slice(0).forEach(function (h) { return h(event); });
    };
    Component.prototype.move = function (x, y) {
        if (this.outerSvg != null)
            this.outerSvg.move(x, y);
        this.update();
    };
    Component.prototype.getState = function () {
        return this.state;
    };
    Component.prototype.setState = function (state) {
        this.previousState = this.state;
        this.state = state;
    };
    /* override to handle graphical updates in derived widgets */
    Component.prototype.update = function () {
        if (this.role != null)
            this.outerSvg.attr({
                role: this.role,
                tabindex: this.tabindex
            });
        else
            throw new Error('Aria Role not implemented.');
    };
    return Component;
}());
var Window = /** @class */ (function (_super) {
    __extends(Window, _super);
    function Window(height, width) {
        var _this = _super.call(this) || this;
        _this.keyEvent = null;
        var body = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)().addTo('body').size(width, height);
        var rect = body.rect(width, height).fill("white").stroke("black")
            .attr({ 'stroke-width': 3 });
        _this._window = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)().addTo(body);
        _this.outerSvg = _this._window;
        _this.registerEvent(body);
        // set Aria role
        _this.role = RoleType.window;
        // set default state
        _this.setState(new IdleUpWidgetState());
        _this.observers = [];
        return _this;
    }
    Window.prototype.addObserver = function (observer) {
        this.observers.push(observer);
    };
    Window.prototype.removeObserver = function (observer) {
        var index = this.observers.indexOf(observer);
        if (index >= 0) {
            this.observers.splice(index, 1);
        }
    };
    Window.prototype.notifyObservers = function (state) {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer(state);
        }
    };
    Window.prototype.registerEvent = function (obj) {
        var _this = this;
        (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)(window).on('keyup', function (event) {
            _this.keyEvent = event;
            _this.state.onKeyup(_this);
        }, window);
        obj.mouseup(function (event) {
            _this.state.onRelease(_this);
        });
        obj.mousedown(function (event) {
            if (!_this.selectable) {
                // prevents draggable text selection
                event.preventDefault();
            }
            _this.state.onPress(_this);
        });
        obj.mouseover(function (event) {
        });
        obj.mouseout(function (event) {
        });
        obj.mousemove(function (event) {
            _this.state.onMove(_this);
        });
    };
    Object.defineProperty(Window.prototype, "window", {
        get: function () {
            return this._window;
        },
        enumerable: false,
        configurable: true
    });
    Window.prototype.idleupState = function () {
        this.notifyObservers(this.getState());
    };
    Window.prototype.idledownState = function () {
        this.notifyObservers(this.getState());
    };
    Window.prototype.moveState = function () {
        this.notifyObservers(this.getState());
    };
    Window.prototype.keyupState = function () {
        this.notifyObservers(new KeypressWidgetState());
    };
    //required to fulfill inheritance requirements
    //but not implemented for the window component
    Window.prototype.pressedState = function () { };
    Window.prototype.pressReleaseState = function () { };
    Window.prototype.hoverState = function () { };
    Window.prototype.hoverPressedState = function () { };
    Window.prototype.pressedoutState = function () { };
    return Window;
}(Component));
var Widget = /** @class */ (function (_super) {
    __extends(Widget, _super);
    function Widget(parent) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        _this.selectable = true;
        _this.registerWindowEvents();
        return _this;
    }
    Widget.prototype.registerWindowEvents = function () {
        var _this = this;
        this.parent.addObserver(function (state) {
            //We only want to modify widget state outside of the 
            //widget for state transitions that occur outside of
            //the widget's bounds.
            if (state instanceof IdleUpWidgetState &&
                _this.getState() instanceof PressedOutWidgetState) {
                _this.setState(new IdleUpWidgetState());
            }
            if (state instanceof IdleDownWidgetState) {
                _this.idledownState();
            }
            if (state instanceof KeypressWidgetState) {
                _this.keyupState(_this.parent.keyEvent);
            }
            if (_this.state instanceof DragWindowState) {
                _this.moveState();
            }
        });
    };
    /**
     * Registers SVG.js event handlers for the given object.
     * @param obj The object to register event handlers for.
     * @returns void.
     *
     * @description registerEvent serves as a coupling method
     * between the SVG.js library event handlers and the state
     * and observer patterns used by the toolkit. To gain access
     * to the source event data simply assign the event parameter
     * to the current object using this and the rawEvent property.
     */
    Widget.prototype.registerEvent = function (obj) {
        var _this = this;
        obj.mouseup(function (event) {
            _this.state.onRelease(_this);
        });
        obj.mousedown(function (event) {
            if (!_this.selectable) {
                // prevents draggable text selection
                event.preventDefault();
            }
            _this.state.onPress(_this);
        });
        obj.mouseover(function (event) {
            _this.state.onEnter(_this);
        });
        obj.mouseout(function (event) {
            _this.state.onLeave(_this);
        });
        obj.mousemove(function (event) {
            //mouse move events generate positional information
            //about the cursor, likely needed for widgets that track
            //cursor movement.
            _this.rawEvent = event;
            _this.state.onMove(_this);
        });
    };
    Object.defineProperty(Widget.prototype, "backcolor", {
        get: function () {
            return this._backcolor;
        },
        set: function (color) {
            this._backcolor = color;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "forecolor", {
        get: function () {
            return this._forecolor;
        },
        set: function (color) {
            this._forecolor = color;
        },
        enumerable: false,
        configurable: true
    });
    return Widget;
}(Component));
// local


// from svg.js



/***/ }),

/***/ "./src/widgets/button.ts":
/*!*******************************!*\
  !*** ./src/widgets/button.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Button: () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var _core_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/ui */ "./src/core/ui.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// importing local code, code we have written


var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button(parent) {
        var _this = _super.call(this, parent) || this;
        _this.defaultText = "Custom Text";
        _this.defaultFontSize = 28;
        _this.defaultWidth = 220;
        _this.defaultHeight = 30;
        _this.isClicked = false;
        // set defaults
        _this.height = _this.defaultHeight;
        _this.width = _this.defaultWidth;
        _this._input = _this.defaultText;
        _this._fontSize = _this.defaultFontSize;
        // set Aria role
        _this.role = _core_ui__WEBPACK_IMPORTED_MODULE_0__.RoleType.button;
        // render widget
        _this.render();
        // set default or starting state
        _this.setState(new _core_ui__WEBPACK_IMPORTED_MODULE_0__.IdleUpWidgetState());
        // prevent text selection
        _this.selectable = false;
        _this.backcolor = "white";
        return _this;
    }
    Object.defineProperty(Button.prototype, "fontSize", {
        set: function (size) {
            this._fontSize = size;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Button.prototype, "btnLabel", {
        get: function () {
            return this._input;
        },
        set: function (value) {
            this._input = value;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Button.prototype, "btnWidth", {
        get: function () {
            return this.width;
        },
        set: function (width) {
            this.width = width;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Button.prototype, "btnHeight", {
        set: function (height) {
            this.height = height;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    Button.prototype.positionText = function () {
        var box = this._text.bbox();
        // in TS, the prepending with + performs a type conversion from string to number
        this._text_y = (+this._rect.y() + ((+this._rect.height() / 2)) - (box.height / 2));
        this._text.x(+this._rect.x() + 4);
        if (this._text_y > 0) {
            this._text.y(this._text_y);
        }
    };
    Button.prototype.render = function () {
        this._group = this.parent.window.group();
        this._rect = this._group.rect(this.width, this.height);
        this._rect.stroke("black");
        this._rect.fill("white");
        this._text = this._group.text(this._input);
        // Set the outer svg element 
        this.outerSvg = this._group;
        // Add a transparent rect on top of text to 
        // prevent selection cursor and to handle mouse events
        var eventrect = this._group.rect(this.width, this.height).opacity(0).attr('id', 0);
        // register objects that should receive event notifications.
        // for this widget, we want to know when the group or rect objects
        // receive events
        this.registerEvent(eventrect);
    };
    Button.prototype.update = function () {
        if (this._text != null)
            this._text.font('size', this._fontSize);
        this._text.text(this._input);
        this.positionText();
        this._rect.width(this.width).height(this.height);
        if (this._rect != null)
            this._rect.fill(this.backcolor);
        _super.prototype.update.call(this);
    };
    Button.prototype.pressReleaseState = function () {
        if (this.previousState instanceof _core_ui__WEBPACK_IMPORTED_MODULE_0__.PressedWidgetState) {
            this.raise(new _core_ui__WEBPACK_IMPORTED_MODULE_0__.EventArgs(this));
            this.isClicked = true;
            //Update backcolor to lightblue 
            this.backcolor = "lightblue";
            //Re-render 
            this.update();
            //Execute callback if it was registered
            if (this._clickHandler) {
                this._clickHandler();
            }
        }
    };
    //TODO: implement the onClick event using a callback passed as a parameter
    Button.prototype.onClick = function (callback) {
        //Store callback function 
        this._clickHandler = callback;
    };
    //TODO: give the states something to do! Use these methods to control the visual appearance of your
    //widget
    Button.prototype.idleupState = function () {
    };
    //Make white if btn is idle 
    Button.prototype.idledownState = function () {
        this._rect.fill("#ffffff");
    };
    Button.prototype.pressedState = function () {
        this._rect.fill("light blue");
    };
    Button.prototype.hoverState = function () {
        //Turn yellow on btn hover 
        this._rect.fill("yellow");
    };
    Button.prototype.hoverPressedState = function () {
        //Turn btn orange if hoverpressed 
        if (this._rect) {
            this._rect.fill("orange");
            this._rect.animate(200);
        }
    };
    Button.prototype.pressedoutState = function () {
        this._rect.fill("purple");
    };
    Button.prototype.moveState = function () {
        throw new Error("Method not implemented.");
    };
    Button.prototype.keyupState = function (keyEvent) {
        //Fill the btn with pink if a key is pressed
        this._rect.fill("pink");
    };
    return Button;
}(_core_ui__WEBPACK_IMPORTED_MODULE_0__.Widget));



/***/ }),

/***/ "./src/widgets/heading.ts":
/*!********************************!*\
  !*** ./src/widgets/heading.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Heading: () => (/* binding */ Heading)
/* harmony export */ });
/* harmony import */ var _core_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/ui */ "./src/core/ui.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// importing local code, code we have written

var Heading = /** @class */ (function (_super) {
    __extends(Heading, _super);
    function Heading(parent) {
        var _this = _super.call(this, parent) || this;
        _this.defaultText = "Heading";
        _this.defaultFontSize = 18;
        _this.defaultWidth = 120;
        _this.defaultHeight = 40;
        // set defaults
        _this.height = _this.defaultHeight;
        _this.width = _this.defaultWidth;
        _this._input = _this.defaultText;
        _this._fontSize = _this.defaultFontSize;
        /* aria */
        _this.role = _core_ui__WEBPACK_IMPORTED_MODULE_0__.RoleType.heading;
        // render widget
        _this.render();
        // set default or starting state
        _this.setState(new _core_ui__WEBPACK_IMPORTED_MODULE_0__.IdleUpWidgetState());
        // prevent text selection
        _this.selectable = false;
        _this.backcolor = "white";
        return _this;
    }
    Object.defineProperty(Heading.prototype, "text", {
        get: function () {
            return this._input;
        },
        set: function (text) {
            this._input = text;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Heading.prototype, "fontSize", {
        set: function (size) {
            this._fontSize = size;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    Heading.prototype.positionText = function () {
        var box = this._text.bbox();
        // in TS, the prepending with + performs a type conversion from string to number
        this._text_y = (+this._rect.y() + ((+this._rect.height() / 2)) - (box.height / 2));
        this._text.x(+this._rect.x() + 4);
        if (this._text_y > 0) {
            this._text.y(this._text_y);
        }
        // resize container rect to match fontSize
        this._rect.width(box.width);
        this._rect.height(box.height);
    };
    Heading.prototype.move = function (x, y) {
        if (this._group != null)
            this._group.move(x, y);
        this.update();
    };
    Heading.prototype.render = function () {
        this._group = this.parent.window.group();
        this._rect = this._group.rect(this.width, this.height);
        this._text = this._group.text(this._input);
        this.outerSvg = this._group;
        // register objects that should receive event notifications.
        // for this widget, we want to know when the group or rect objects
        // receive events
        this.registerEvent(this._group);
        this.registerEvent(this._rect);
    };
    Heading.prototype.update = function () {
        if (this._text != null)
            this._text.font('size', this._fontSize);
        this._text.text(this._input);
        this.positionText();
        if (this._rect != null)
            this._rect.fill(this.backcolor);
        _super.prototype.update.call(this);
    };
    Heading.prototype.idleupState = function () {
    };
    Heading.prototype.idledownState = function () {
    };
    //Log that the button has been pressed
    Heading.prototype.pressedState = function () {
        console.log("Button has been pressed");
    };
    //Log the press release
    Heading.prototype.pressReleaseState = function () {
        console.log("Click complete");
    };
    //Log hovering over the button 
    Heading.prototype.hoverState = function () {
        console.log("Hovered over widget");
    };
    Heading.prototype.hoverPressedState = function () {
    };
    Heading.prototype.pressedoutState = function () {
    };
    Heading.prototype.moveState = function () { };
    //Log if a key has been pressed
    Heading.prototype.keyupState = function () {
        console.log("Key has been pressed");
    };
    return Heading;
}(_core_ui__WEBPACK_IMPORTED_MODULE_0__.Widget));



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/ui */ "./src/core/ui.ts");
/* harmony import */ var _widgets_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widgets/button */ "./src/widgets/button.ts");
/* harmony import */ var _widgets_heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./widgets/heading */ "./src/widgets/heading.ts");



var w = new _core_ui__WEBPACK_IMPORTED_MODULE_0__.Window(window.innerHeight - 10, '100%');
var lbl1 = new _widgets_heading__WEBPACK_IMPORTED_MODULE_2__.Heading(w);
lbl1.text = "My NEW Button Demo";
lbl1.tabindex = 1;
lbl1.fontSize = 26;
lbl1.move(10, 20);
var btn = new _widgets_button__WEBPACK_IMPORTED_MODULE_1__.Button(w);
btn.tabindex = 2;
btn.fontSize = 14;
btn.move(122, 50);
btn.onClick(function () {
    //Log in console if the button is clicked
    console.log("Button clicked!");
    //Change the heading text to show it's been clicked
    lbl1.text = "Button clicked from UI!";
    btn.backcolor = "lightblue";
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07OztBQUdOO0FBQ0E7QUFDQSxNQUFNOzs7QUFHTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLHVDQUF1QyxRQUFRO0FBQy9DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCLElBQUk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLFFBQVE7O0FBRWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixzREFBc0Q7O0FBRXREOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQTtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLFFBQVE7O0FBRWQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCOztBQUV6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCOztBQUUzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQzs7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7O0FBRXRCO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DOztBQUVBO0FBQ0EsaUVBQWlFOztBQUVqRTtBQUNBLHVFQUF1RTs7QUFFdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvSkFBb0o7QUFDcEosSUFBSTs7O0FBR0o7QUFDQSx1REFBdUQ7O0FBRXZELHlaQUF5Wjs7QUFFelo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7O0FBRXRCO0FBQ0Esd0RBQXdEOztBQUV4RDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7O0FBRXhCO0FBQ0EsbUNBQW1DOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07OztBQUdOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07OztBQUdOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDRDQUE0Qzs7QUFFbEQsNk1BQTZNOztBQUU3TTtBQUNBLCtEQUErRDtBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOzs7QUFHTjtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBIQUEwSDtBQUMxSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGtDQUFrQzs7QUFFbEM7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxtQkFBbUI7O0FBRW5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFEQUFxRDs7QUFFckQ7QUFDQSw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDOztBQUUxQztBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTs7O0FBR1Y7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssSUFBSTtBQUNULElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEtBQUssUUFBUTs7QUFFYjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07OztBQUdOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07OztBQUdOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQSwyQkFBMkI7O0FBRTNCO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBOztBQUVBLHNDQUFzQyxRQUFRO0FBQzlDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7O0FBR047QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQSx1QkFBdUI7O0FBRXZCLDhDQUE4Qzs7QUFFOUM7QUFDQSw4QkFBOEI7O0FBRTlCO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07OztBQUdOO0FBQ0E7QUFDQSxxREFBcUQ7O0FBRXJEO0FBQ0EsMEJBQTBCOztBQUUxQjtBQUNBLHVEQUF1RDs7QUFFdkQ7QUFDQTtBQUNBLHVDQUF1Qzs7QUFFdkM7QUFDQSxVQUFVOzs7QUFHVjtBQUNBOztBQUVBLHdDQUF3Qzs7O0FBR3hDO0FBQ0EsMkJBQTJCO0FBQzNCLFlBQVk7QUFDWjtBQUNBO0FBQ0EsU0FBUztBQUNULFFBQVE7OztBQUdSO0FBQ0EsTUFBTTtBQUNOOzs7QUFHQSxvREFBb0Q7O0FBRXBEO0FBQ0EsZ0VBQWdFOztBQUVoRSw4QkFBOEI7O0FBRTlCLHlDQUF5QyxNQUFNO0FBQy9DO0FBQ0E7O0FBRUEsa0NBQWtDOztBQUVsQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBLHdCQUF3Qjs7QUFFeEIsbUJBQW1COztBQUVuQjs7QUFFQTtBQUNBO0FBQ0Esb0VBQW9FO0FBQ3BFO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0VBQXNFO0FBQ3RFOztBQUVBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0Esb0NBQW9DLFFBQVE7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07OztBQUdOO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLEdBQUc7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsSUFBSTtBQUNMOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07OztBQUdOO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0Esa0JBQWtCOztBQUVsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0Esa0JBQWtCOztBQUVsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNI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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07OztBQUdOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQzs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEIsc0NBQXNDOztBQUV0QztBQUNBLDhFQUE4RTs7QUFFOUUsK0NBQStDOztBQUUvQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDOztBQUVqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Q0FBd0MsUUFBUTtBQUNoRDtBQUNBO0FBQ0EsdUNBQXVDLHNDQUFzQztBQUM3RTtBQUNBO0FBQ0EsUUFBUTtBQUNSLHVDQUF1QyxRQUFRO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQ0FBaUMsUUFBUTtBQUN6Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQSw2QkFBNkI7O0FBRTdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVDQUF1QyxRQUFRO0FBQy9DOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7QUFDQSxvREFBb0Q7O0FBRXBELDhCQUE4QixRQUFRO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsdURBQXVEOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOzs7QUFHTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx3Q0FBd0MsUUFBUTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjs7O0FBR0EsMERBQTBEOztBQUUxRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCLHFDQUFxQyxTQUFTOztBQUUzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7O0FBRUEsRUFBRTs7QUFFRix1Q0FBdUM7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNOzs7QUFHTjtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7O0FBRXZEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNB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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTs7O0FBR04saUNBQWlDO0FBQ2pDOztBQUVBLCtEQUErRDs7QUFFL0QsMkRBQTJEOztBQUUzRDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FB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QUFXLEdBQUMsRUFBRSxFQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRWpELElBQUksSUFBSSxHQUFFLElBQUkscURBQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLG9CQUFvQixDQUFDO0FBQ2pDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0FBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQyxDQUFDO0FBRWpCLElBQUksR0FBRyxHQUFHLElBQUksbURBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN4QixHQUFHLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztBQUNqQixHQUFHLENBQUMsUUFBUSxHQUFHLEVBQUU7QUFDakIsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO0FBRWpCLEdBQUcsQ0FBQyxPQUFPLENBQUM7SUFDUix5Q0FBeUM7SUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQy9CLG1EQUFtRDtJQUNuRCxJQUFJLENBQUMsSUFBSSxHQUFHLHlCQUF5QixDQUFDO0lBQ3RDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDO0FBQ2hDLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXJhc21hcy8uL25vZGVfbW9kdWxlcy9Ac3ZnZG90anMvc3ZnLmpzL2Rpc3Qvc3ZnLmVzbS5qcyIsIndlYnBhY2s6Ly9lcmFzbWFzLy4vc3JjL2NvcmUvdWkudHMiLCJ3ZWJwYWNrOi8vZXJhc21hcy8uL3NyYy93aWRnZXRzL2J1dHRvbi50cyIsIndlYnBhY2s6Ly9lcmFzbWFzLy4vc3JjL3dpZGdldHMvaGVhZGluZy50cyIsIndlYnBhY2s6Ly9lcmFzbWFzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VyYXNtYXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2VyYXNtYXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9lcmFzbWFzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXJhc21hcy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiogQHN2Z2RvdGpzL3N2Zy5qcyAtIEEgbGlnaHR3ZWlnaHQgbGlicmFyeSBmb3IgbWFuaXB1bGF0aW5nIGFuZCBhbmltYXRpbmcgU1ZHLlxuKiBAdmVyc2lvbiAzLjEuMlxuKiBodHRwczovL3N2Z2pzLmRldi9cbipcbiogQGNvcHlyaWdodCBXb3V0IEZpZXJlbnMgPHdvdXRAbWljay13b3V0LmNvbT5cbiogQGxpY2Vuc2UgTUlUXG4qXG4qIEJVSUxUOiBXZWQgSmFuIDI2IDIwMjIgMjM6MTk6MDcgR01UKzAxMDAgKE1pdHRlbGV1cm9ww6Rpc2NoZSBOb3JtYWx6ZWl0KVxuKi87XG5jb25zdCBtZXRob2RzJDEgPSB7fTtcbmNvbnN0IG5hbWVzID0gW107XG5mdW5jdGlvbiByZWdpc3Rlck1ldGhvZHMobmFtZSwgbSkge1xuICBpZiAoQXJyYXkuaXNBcnJheShuYW1lKSkge1xuICAgIGZvciAoY29uc3QgX25hbWUgb2YgbmFtZSkge1xuICAgICAgcmVnaXN0ZXJNZXRob2RzKF9uYW1lLCBtKTtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAodHlwZW9mIG5hbWUgPT09ICdvYmplY3QnKSB7XG4gICAgZm9yIChjb25zdCBfbmFtZSBpbiBuYW1lKSB7XG4gICAgICByZWdpc3Rlck1ldGhvZHMoX25hbWUsIG5hbWVbX25hbWVdKTtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBhZGRNZXRob2ROYW1lcyhPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhtKSk7XG4gIG1ldGhvZHMkMVtuYW1lXSA9IE9iamVjdC5hc3NpZ24obWV0aG9kcyQxW25hbWVdIHx8IHt9LCBtKTtcbn1cbmZ1bmN0aW9uIGdldE1ldGhvZHNGb3IobmFtZSkge1xuICByZXR1cm4gbWV0aG9kcyQxW25hbWVdIHx8IHt9O1xufVxuZnVuY3Rpb24gZ2V0TWV0aG9kTmFtZXMoKSB7XG4gIHJldHVybiBbLi4ubmV3IFNldChuYW1lcyldO1xufVxuZnVuY3Rpb24gYWRkTWV0aG9kTmFtZXMoX25hbWVzKSB7XG4gIG5hbWVzLnB1c2goLi4uX25hbWVzKTtcbn1cblxuLy8gTWFwIGZ1bmN0aW9uXG5mdW5jdGlvbiBtYXAoYXJyYXksIGJsb2NrKSB7XG4gIGxldCBpO1xuICBjb25zdCBpbCA9IGFycmF5Lmxlbmd0aDtcbiAgY29uc3QgcmVzdWx0ID0gW107XG5cbiAgZm9yIChpID0gMDsgaSA8IGlsOyBpKyspIHtcbiAgICByZXN1bHQucHVzaChibG9jayhhcnJheVtpXSkpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn0gLy8gRmlsdGVyIGZ1bmN0aW9uXG5cbmZ1bmN0aW9uIGZpbHRlcihhcnJheSwgYmxvY2spIHtcbiAgbGV0IGk7XG4gIGNvbnN0IGlsID0gYXJyYXkubGVuZ3RoO1xuICBjb25zdCByZXN1bHQgPSBbXTtcblxuICBmb3IgKGkgPSAwOyBpIDwgaWw7IGkrKykge1xuICAgIGlmIChibG9jayhhcnJheVtpXSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGFycmF5W2ldKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufSAvLyBEZWdyZWVzIHRvIHJhZGlhbnNcblxuZnVuY3Rpb24gcmFkaWFucyhkKSB7XG4gIHJldHVybiBkICUgMzYwICogTWF0aC5QSSAvIDE4MDtcbn0gLy8gUmFkaWFucyB0byBkZWdyZWVzXG5cbmZ1bmN0aW9uIGRlZ3JlZXMocikge1xuICByZXR1cm4gciAqIDE4MCAvIE1hdGguUEkgJSAzNjA7XG59IC8vIENvbnZlcnQgZGFzaC1zZXBhcmF0ZWQtc3RyaW5nIHRvIGNhbWVsQ2FzZVxuXG5mdW5jdGlvbiBjYW1lbENhc2Uocykge1xuICByZXR1cm4gcy50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLy0oLikvZywgZnVuY3Rpb24gKG0sIGcpIHtcbiAgICByZXR1cm4gZy50b1VwcGVyQ2FzZSgpO1xuICB9KTtcbn0gLy8gQ29udmVydCBjYW1lbCBjYXNlZCBzdHJpbmcgdG8gZGFzaCBzZXBhcmF0ZWRcblxuZnVuY3Rpb24gdW5DYW1lbENhc2Uocykge1xuICByZXR1cm4gcy5yZXBsYWNlKC8oW0EtWl0pL2csIGZ1bmN0aW9uIChtLCBnKSB7XG4gICAgcmV0dXJuICctJyArIGcudG9Mb3dlckNhc2UoKTtcbiAgfSk7XG59IC8vIENhcGl0YWxpemUgZmlyc3QgbGV0dGVyIG9mIGEgc3RyaW5nXG5cbmZ1bmN0aW9uIGNhcGl0YWxpemUocykge1xuICByZXR1cm4gcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHMuc2xpY2UoMSk7XG59IC8vIENhbGN1bGF0ZSBwcm9wb3J0aW9uYWwgd2lkdGggYW5kIGhlaWdodCB2YWx1ZXMgd2hlbiBuZWNlc3NhcnlcblxuZnVuY3Rpb24gcHJvcG9ydGlvbmFsU2l6ZShlbGVtZW50LCB3aWR0aCwgaGVpZ2h0LCBib3gpIHtcbiAgaWYgKHdpZHRoID09IG51bGwgfHwgaGVpZ2h0ID09IG51bGwpIHtcbiAgICBib3ggPSBib3ggfHwgZWxlbWVudC5iYm94KCk7XG5cbiAgICBpZiAod2lkdGggPT0gbnVsbCkge1xuICAgICAgd2lkdGggPSBib3gud2lkdGggLyBib3guaGVpZ2h0ICogaGVpZ2h0O1xuICAgIH0gZWxzZSBpZiAoaGVpZ2h0ID09IG51bGwpIHtcbiAgICAgIGhlaWdodCA9IGJveC5oZWlnaHQgLyBib3gud2lkdGggKiB3aWR0aDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodFxuICB9O1xufVxuLyoqXHJcbiAqIFRoaXMgZnVuY3Rpb24gYWRkcyBzdXBwb3J0IGZvciBzdHJpbmcgb3JpZ2lucy5cclxuICogSXQgc2VhcmNoZXMgZm9yIGFuIG9yaWdpbiBpbiBvLm9yaWdpbiBvLm94IGFuZCBvLm9yaWdpblguXHJcbiAqIFRoaXMgd2F5LCBvcmlnaW46IHt4OiAnY2VudGVyJywgeTogNTB9IGNhbiBiZSBwYXNzZWQgYXMgd2VsbCBhcyBveDogJ2NlbnRlcicsIG95OiA1MFxyXG4qKi9cblxuZnVuY3Rpb24gZ2V0T3JpZ2luKG8sIGVsZW1lbnQpIHtcbiAgY29uc3Qgb3JpZ2luID0gby5vcmlnaW47IC8vIEZpcnN0IGNoZWNrIGlmIG9yaWdpbiBpcyBpbiBveCBvciBvcmlnaW5YXG5cbiAgbGV0IG94ID0gby5veCAhPSBudWxsID8gby5veCA6IG8ub3JpZ2luWCAhPSBudWxsID8gby5vcmlnaW5YIDogJ2NlbnRlcic7XG4gIGxldCBveSA9IG8ub3kgIT0gbnVsbCA/IG8ub3kgOiBvLm9yaWdpblkgIT0gbnVsbCA/IG8ub3JpZ2luWSA6ICdjZW50ZXInOyAvLyBUaGVuIGNoZWNrIGlmIG9yaWdpbiB3YXMgdXNlZCBhbmQgb3ZlcndyaXRlIGluIHRoYXQgY2FzZVxuXG4gIGlmIChvcmlnaW4gIT0gbnVsbCkge1xuICAgIFtveCwgb3ldID0gQXJyYXkuaXNBcnJheShvcmlnaW4pID8gb3JpZ2luIDogdHlwZW9mIG9yaWdpbiA9PT0gJ29iamVjdCcgPyBbb3JpZ2luLngsIG9yaWdpbi55XSA6IFtvcmlnaW4sIG9yaWdpbl07XG4gIH0gLy8gTWFrZSBzdXJlIHRvIG9ubHkgY2FsbCBiYm94IHdoZW4gYWN0dWFsbHkgbmVlZGVkXG5cblxuICBjb25zdCBjb25kWCA9IHR5cGVvZiBveCA9PT0gJ3N0cmluZyc7XG4gIGNvbnN0IGNvbmRZID0gdHlwZW9mIG95ID09PSAnc3RyaW5nJztcblxuICBpZiAoY29uZFggfHwgY29uZFkpIHtcbiAgICBjb25zdCB7XG4gICAgICBoZWlnaHQsXG4gICAgICB3aWR0aCxcbiAgICAgIHgsXG4gICAgICB5XG4gICAgfSA9IGVsZW1lbnQuYmJveCgpOyAvLyBBbmQgb25seSBvdmVyd3JpdGUgaWYgc3RyaW5nIHdhcyBwYXNzZWQgZm9yIHRoaXMgc3BlY2lmaWMgYXhpc1xuXG4gICAgaWYgKGNvbmRYKSB7XG4gICAgICBveCA9IG94LmluY2x1ZGVzKCdsZWZ0JykgPyB4IDogb3guaW5jbHVkZXMoJ3JpZ2h0JykgPyB4ICsgd2lkdGggOiB4ICsgd2lkdGggLyAyO1xuICAgIH1cblxuICAgIGlmIChjb25kWSkge1xuICAgICAgb3kgPSBveS5pbmNsdWRlcygndG9wJykgPyB5IDogb3kuaW5jbHVkZXMoJ2JvdHRvbScpID8geSArIGhlaWdodCA6IHkgKyBoZWlnaHQgLyAyO1xuICAgIH1cbiAgfSAvLyBSZXR1cm4gdGhlIG9yaWdpbiBhcyBpdCBpcyBpZiBpdCB3YXNuJ3QgYSBzdHJpbmdcblxuXG4gIHJldHVybiBbb3gsIG95XTtcbn1cblxudmFyIHV0aWxzID0ge1xuICBfX3Byb3RvX186IG51bGwsXG4gIG1hcDogbWFwLFxuICBmaWx0ZXI6IGZpbHRlcixcbiAgcmFkaWFuczogcmFkaWFucyxcbiAgZGVncmVlczogZGVncmVlcyxcbiAgY2FtZWxDYXNlOiBjYW1lbENhc2UsXG4gIHVuQ2FtZWxDYXNlOiB1bkNhbWVsQ2FzZSxcbiAgY2FwaXRhbGl6ZTogY2FwaXRhbGl6ZSxcbiAgcHJvcG9ydGlvbmFsU2l6ZTogcHJvcG9ydGlvbmFsU2l6ZSxcbiAgZ2V0T3JpZ2luOiBnZXRPcmlnaW5cbn07XG5cbi8vIERlZmF1bHQgbmFtZXNwYWNlc1xuY29uc3Qgc3ZnID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJztcbmNvbnN0IGh0bWwgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCc7XG5jb25zdCB4bWxucyA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3htbG5zLyc7XG5jb25zdCB4bGluayA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJztcbmNvbnN0IHN2Z2pzID0gJ2h0dHA6Ly9zdmdqcy5kZXYvc3ZnanMnO1xuXG52YXIgbmFtZXNwYWNlcyA9IHtcbiAgX19wcm90b19fOiBudWxsLFxuICBzdmc6IHN2ZyxcbiAgaHRtbDogaHRtbCxcbiAgeG1sbnM6IHhtbG5zLFxuICB4bGluazogeGxpbmssXG4gIHN2Z2pzOiBzdmdqc1xufTtcblxuY29uc3QgZ2xvYmFscyA9IHtcbiAgd2luZG93OiB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiB3aW5kb3csXG4gIGRvY3VtZW50OiB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IGRvY3VtZW50XG59O1xuZnVuY3Rpb24gcmVnaXN0ZXJXaW5kb3cod2luID0gbnVsbCwgZG9jID0gbnVsbCkge1xuICBnbG9iYWxzLndpbmRvdyA9IHdpbjtcbiAgZ2xvYmFscy5kb2N1bWVudCA9IGRvYztcbn1cbmNvbnN0IHNhdmUgPSB7fTtcbmZ1bmN0aW9uIHNhdmVXaW5kb3coKSB7XG4gIHNhdmUud2luZG93ID0gZ2xvYmFscy53aW5kb3c7XG4gIHNhdmUuZG9jdW1lbnQgPSBnbG9iYWxzLmRvY3VtZW50O1xufVxuZnVuY3Rpb24gcmVzdG9yZVdpbmRvdygpIHtcbiAgZ2xvYmFscy53aW5kb3cgPSBzYXZlLndpbmRvdztcbiAgZ2xvYmFscy5kb2N1bWVudCA9IHNhdmUuZG9jdW1lbnQ7XG59XG5mdW5jdGlvbiB3aXRoV2luZG93KHdpbiwgZm4pIHtcbiAgc2F2ZVdpbmRvdygpO1xuICByZWdpc3RlcldpbmRvdyh3aW4sIHdpbi5kb2N1bWVudCk7XG4gIGZuKHdpbiwgd2luLmRvY3VtZW50KTtcbiAgcmVzdG9yZVdpbmRvdygpO1xufVxuZnVuY3Rpb24gZ2V0V2luZG93KCkge1xuICByZXR1cm4gZ2xvYmFscy53aW5kb3c7XG59XG5cbmNsYXNzIEJhc2Ugey8vIGNvbnN0cnVjdG9yIChub2RlLyosIHtleHRlbnNpb25zID0gW119ICovKSB7XG4gIC8vICAgLy8gdGhpcy50YWdzID0gW11cbiAgLy8gICAvL1xuICAvLyAgIC8vIGZvciAobGV0IGV4dGVuc2lvbiBvZiBleHRlbnNpb25zKSB7XG4gIC8vICAgLy8gICBleHRlbnNpb24uc2V0dXAuY2FsbCh0aGlzLCBub2RlKVxuICAvLyAgIC8vICAgdGhpcy50YWdzLnB1c2goZXh0ZW5zaW9uLm5hbWUpXG4gIC8vICAgLy8gfVxuICAvLyB9XG59XG5cbmNvbnN0IGVsZW1lbnRzID0ge307XG5jb25zdCByb290ID0gJ19fX1NZTUJPTF9fX1JPT1RfX18nOyAvLyBNZXRob2QgZm9yIGVsZW1lbnQgY3JlYXRpb25cblxuZnVuY3Rpb24gY3JlYXRlKG5hbWUsIG5zID0gc3ZnKSB7XG4gIC8vIGNyZWF0ZSBlbGVtZW50XG4gIHJldHVybiBnbG9iYWxzLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgbmFtZSk7XG59XG5mdW5jdGlvbiBtYWtlSW5zdGFuY2UoZWxlbWVudCwgaXNIVE1MID0gZmFsc2UpIHtcbiAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBCYXNlKSByZXR1cm4gZWxlbWVudDtcblxuICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGFkb3B0ZXIoZWxlbWVudCk7XG4gIH1cblxuICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG5ldyBlbGVtZW50c1tyb290XSgpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJyAmJiBlbGVtZW50LmNoYXJBdCgwKSAhPT0gJzwnKSB7XG4gICAgcmV0dXJuIGFkb3B0ZXIoZ2xvYmFscy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpKTtcbiAgfSAvLyBNYWtlIHN1cmUsIHRoYXQgSFRNTCBlbGVtZW50cyBhcmUgY3JlYXRlZCB3aXRoIHRoZSBjb3JyZWN0IG5hbWVzcGFjZVxuXG5cbiAgY29uc3Qgd3JhcHBlciA9IGlzSFRNTCA/IGdsb2JhbHMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykgOiBjcmVhdGUoJ3N2ZycpO1xuICB3cmFwcGVyLmlubmVySFRNTCA9IGVsZW1lbnQ7IC8vIFdlIGNhbiB1c2UgZmlyc3RDaGlsZCBoZXJlIGJlY2F1c2Ugd2Uga25vdyxcbiAgLy8gdGhhdCB0aGUgZmlyc3QgY2hhciBpcyA8IGFuZCB0aHVzIGFuIGVsZW1lbnRcblxuICBlbGVtZW50ID0gYWRvcHRlcih3cmFwcGVyLmZpcnN0Q2hpbGQpOyAvLyBtYWtlIHN1cmUsIHRoYXQgZWxlbWVudCBkb2VzbnQgaGF2ZSBpdHMgd3JhcHBlciBhdHRhY2hlZFxuXG4gIHdyYXBwZXIucmVtb3ZlQ2hpbGQod3JhcHBlci5maXJzdENoaWxkKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5mdW5jdGlvbiBub2RlT3JOZXcobmFtZSwgbm9kZSkge1xuICByZXR1cm4gbm9kZSAmJiBub2RlLm93bmVyRG9jdW1lbnQgJiYgbm9kZSBpbnN0YW5jZW9mIG5vZGUub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5Ob2RlID8gbm9kZSA6IGNyZWF0ZShuYW1lKTtcbn0gLy8gQWRvcHQgZXhpc3Rpbmcgc3ZnIGVsZW1lbnRzXG5cbmZ1bmN0aW9uIGFkb3B0KG5vZGUpIHtcbiAgLy8gY2hlY2sgZm9yIHByZXNlbmNlIG9mIG5vZGVcbiAgaWYgKCFub2RlKSByZXR1cm4gbnVsbDsgLy8gbWFrZSBzdXJlIGEgbm9kZSBpc24ndCBhbHJlYWR5IGFkb3B0ZWRcblxuICBpZiAobm9kZS5pbnN0YW5jZSBpbnN0YW5jZW9mIEJhc2UpIHJldHVybiBub2RlLmluc3RhbmNlO1xuXG4gIGlmIChub2RlLm5vZGVOYW1lID09PSAnI2RvY3VtZW50LWZyYWdtZW50Jykge1xuICAgIHJldHVybiBuZXcgZWxlbWVudHMuRnJhZ21lbnQobm9kZSk7XG4gIH0gLy8gaW5pdGlhbGl6ZSB2YXJpYWJsZXNcblxuXG4gIGxldCBjbGFzc05hbWUgPSBjYXBpdGFsaXplKG5vZGUubm9kZU5hbWUgfHwgJ0RvbScpOyAvLyBNYWtlIHN1cmUgdGhhdCBncmFkaWVudHMgYXJlIGFkb3B0ZWQgY29ycmVjdGx5XG5cbiAgaWYgKGNsYXNzTmFtZSA9PT0gJ0xpbmVhckdyYWRpZW50JyB8fCBjbGFzc05hbWUgPT09ICdSYWRpYWxHcmFkaWVudCcpIHtcbiAgICBjbGFzc05hbWUgPSAnR3JhZGllbnQnOyAvLyBGYWxsYmFjayB0byBEb20gaWYgZWxlbWVudCBpcyBub3Qga25vd25cbiAgfSBlbHNlIGlmICghZWxlbWVudHNbY2xhc3NOYW1lXSkge1xuICAgIGNsYXNzTmFtZSA9ICdEb20nO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBlbGVtZW50c1tjbGFzc05hbWVdKG5vZGUpO1xufVxubGV0IGFkb3B0ZXIgPSBhZG9wdDtcbmZ1bmN0aW9uIG1vY2tBZG9wdChtb2NrID0gYWRvcHQpIHtcbiAgYWRvcHRlciA9IG1vY2s7XG59XG5mdW5jdGlvbiByZWdpc3RlcihlbGVtZW50LCBuYW1lID0gZWxlbWVudC5uYW1lLCBhc1Jvb3QgPSBmYWxzZSkge1xuICBlbGVtZW50c1tuYW1lXSA9IGVsZW1lbnQ7XG4gIGlmIChhc1Jvb3QpIGVsZW1lbnRzW3Jvb3RdID0gZWxlbWVudDtcbiAgYWRkTWV0aG9kTmFtZXMoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZWxlbWVudC5wcm90b3R5cGUpKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5mdW5jdGlvbiBnZXRDbGFzcyhuYW1lKSB7XG4gIHJldHVybiBlbGVtZW50c1tuYW1lXTtcbn0gLy8gRWxlbWVudCBpZCBzZXF1ZW5jZVxuXG5sZXQgZGlkID0gMTAwMDsgLy8gR2V0IG5leHQgbmFtZWQgZWxlbWVudCBpZFxuXG5mdW5jdGlvbiBlaWQobmFtZSkge1xuICByZXR1cm4gJ1N2Z2pzJyArIGNhcGl0YWxpemUobmFtZSkgKyBkaWQrKztcbn0gLy8gRGVlcCBuZXcgaWQgYXNzaWdubWVudFxuXG5mdW5jdGlvbiBhc3NpZ25OZXdJZChub2RlKSB7XG4gIC8vIGRvIHRoZSBzYW1lIGZvciBTVkcgY2hpbGQgbm9kZXMgYXMgd2VsbFxuICBmb3IgKGxldCBpID0gbm9kZS5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGFzc2lnbk5ld0lkKG5vZGUuY2hpbGRyZW5baV0pO1xuICB9XG5cbiAgaWYgKG5vZGUuaWQpIHtcbiAgICBub2RlLmlkID0gZWlkKG5vZGUubm9kZU5hbWUpO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgcmV0dXJuIG5vZGU7XG59IC8vIE1ldGhvZCBmb3IgZXh0ZW5kaW5nIG9iamVjdHNcblxuZnVuY3Rpb24gZXh0ZW5kKG1vZHVsZXMsIG1ldGhvZHMpIHtcbiAgbGV0IGtleSwgaTtcbiAgbW9kdWxlcyA9IEFycmF5LmlzQXJyYXkobW9kdWxlcykgPyBtb2R1bGVzIDogW21vZHVsZXNdO1xuXG4gIGZvciAoaSA9IG1vZHVsZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBmb3IgKGtleSBpbiBtZXRob2RzKSB7XG4gICAgICBtb2R1bGVzW2ldLnByb3RvdHlwZVtrZXldID0gbWV0aG9kc1trZXldO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gd3JhcFdpdGhBdHRyQ2hlY2soZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgY29uc3QgbyA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcblxuICAgIGlmIChvICYmIG8uY29uc3RydWN0b3IgPT09IE9iamVjdCAmJiAhKG8gaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmdzLnNsaWNlKDAsIC0xKSkuYXR0cihvKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gc2libGluZ3MoKSB7XG4gIHJldHVybiB0aGlzLnBhcmVudCgpLmNoaWxkcmVuKCk7XG59IC8vIEdldCB0aGUgY3VycmVudCBwb3NpdGlvbiBzaWJsaW5nc1xuXG5mdW5jdGlvbiBwb3NpdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMucGFyZW50KCkuaW5kZXgodGhpcyk7XG59IC8vIEdldCB0aGUgbmV4dCBlbGVtZW50ICh3aWxsIHJldHVybiBudWxsIGlmIHRoZXJlIGlzIG5vbmUpXG5cbmZ1bmN0aW9uIG5leHQoKSB7XG4gIHJldHVybiB0aGlzLnNpYmxpbmdzKClbdGhpcy5wb3NpdGlvbigpICsgMV07XG59IC8vIEdldCB0aGUgbmV4dCBlbGVtZW50ICh3aWxsIHJldHVybiBudWxsIGlmIHRoZXJlIGlzIG5vbmUpXG5cbmZ1bmN0aW9uIHByZXYoKSB7XG4gIHJldHVybiB0aGlzLnNpYmxpbmdzKClbdGhpcy5wb3NpdGlvbigpIC0gMV07XG59IC8vIFNlbmQgZ2l2ZW4gZWxlbWVudCBvbmUgc3RlcCBmb3J3YXJkXG5cbmZ1bmN0aW9uIGZvcndhcmQoKSB7XG4gIGNvbnN0IGkgPSB0aGlzLnBvc2l0aW9uKCk7XG4gIGNvbnN0IHAgPSB0aGlzLnBhcmVudCgpOyAvLyBtb3ZlIG5vZGUgb25lIHN0ZXAgZm9yd2FyZFxuXG4gIHAuYWRkKHRoaXMucmVtb3ZlKCksIGkgKyAxKTtcbiAgcmV0dXJuIHRoaXM7XG59IC8vIFNlbmQgZ2l2ZW4gZWxlbWVudCBvbmUgc3RlcCBiYWNrd2FyZFxuXG5mdW5jdGlvbiBiYWNrd2FyZCgpIHtcbiAgY29uc3QgaSA9IHRoaXMucG9zaXRpb24oKTtcbiAgY29uc3QgcCA9IHRoaXMucGFyZW50KCk7XG4gIHAuYWRkKHRoaXMucmVtb3ZlKCksIGkgPyBpIC0gMSA6IDApO1xuICByZXR1cm4gdGhpcztcbn0gLy8gU2VuZCBnaXZlbiBlbGVtZW50IGFsbCB0aGUgd2F5IHRvIHRoZSBmcm9udFxuXG5mdW5jdGlvbiBmcm9udCgpIHtcbiAgY29uc3QgcCA9IHRoaXMucGFyZW50KCk7IC8vIE1vdmUgbm9kZSBmb3J3YXJkXG5cbiAgcC5hZGQodGhpcy5yZW1vdmUoKSk7XG4gIHJldHVybiB0aGlzO1xufSAvLyBTZW5kIGdpdmVuIGVsZW1lbnQgYWxsIHRoZSB3YXkgdG8gdGhlIGJhY2tcblxuZnVuY3Rpb24gYmFjaygpIHtcbiAgY29uc3QgcCA9IHRoaXMucGFyZW50KCk7IC8vIE1vdmUgbm9kZSBiYWNrXG5cbiAgcC5hZGQodGhpcy5yZW1vdmUoKSwgMCk7XG4gIHJldHVybiB0aGlzO1xufSAvLyBJbnNlcnRzIGEgZ2l2ZW4gZWxlbWVudCBiZWZvcmUgdGhlIHRhcmdldGVkIGVsZW1lbnRcblxuZnVuY3Rpb24gYmVmb3JlKGVsZW1lbnQpIHtcbiAgZWxlbWVudCA9IG1ha2VJbnN0YW5jZShlbGVtZW50KTtcbiAgZWxlbWVudC5yZW1vdmUoKTtcbiAgY29uc3QgaSA9IHRoaXMucG9zaXRpb24oKTtcbiAgdGhpcy5wYXJlbnQoKS5hZGQoZWxlbWVudCwgaSk7XG4gIHJldHVybiB0aGlzO1xufSAvLyBJbnNlcnRzIGEgZ2l2ZW4gZWxlbWVudCBhZnRlciB0aGUgdGFyZ2V0ZWQgZWxlbWVudFxuXG5mdW5jdGlvbiBhZnRlcihlbGVtZW50KSB7XG4gIGVsZW1lbnQgPSBtYWtlSW5zdGFuY2UoZWxlbWVudCk7XG4gIGVsZW1lbnQucmVtb3ZlKCk7XG4gIGNvbnN0IGkgPSB0aGlzLnBvc2l0aW9uKCk7XG4gIHRoaXMucGFyZW50KCkuYWRkKGVsZW1lbnQsIGkgKyAxKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5mdW5jdGlvbiBpbnNlcnRCZWZvcmUoZWxlbWVudCkge1xuICBlbGVtZW50ID0gbWFrZUluc3RhbmNlKGVsZW1lbnQpO1xuICBlbGVtZW50LmJlZm9yZSh0aGlzKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5mdW5jdGlvbiBpbnNlcnRBZnRlcihlbGVtZW50KSB7XG4gIGVsZW1lbnQgPSBtYWtlSW5zdGFuY2UoZWxlbWVudCk7XG4gIGVsZW1lbnQuYWZ0ZXIodGhpcyk7XG4gIHJldHVybiB0aGlzO1xufVxucmVnaXN0ZXJNZXRob2RzKCdEb20nLCB7XG4gIHNpYmxpbmdzLFxuICBwb3NpdGlvbixcbiAgbmV4dCxcbiAgcHJldixcbiAgZm9yd2FyZCxcbiAgYmFja3dhcmQsXG4gIGZyb250LFxuICBiYWNrLFxuICBiZWZvcmUsXG4gIGFmdGVyLFxuICBpbnNlcnRCZWZvcmUsXG4gIGluc2VydEFmdGVyXG59KTtcblxuLy8gUGFyc2UgdW5pdCB2YWx1ZVxuY29uc3QgbnVtYmVyQW5kVW5pdCA9IC9eKFsrLV0/KFxcZCsoXFwuXFxkKik/fFxcLlxcZCspKGVbKy1dP1xcZCspPykoW2EteiVdKikkL2k7IC8vIFBhcnNlIGhleCB2YWx1ZVxuXG5jb25zdCBoZXggPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pOyAvLyBQYXJzZSByZ2IgdmFsdWVcblxuY29uc3QgcmdiID0gL3JnYlxcKChcXGQrKSwoXFxkKyksKFxcZCspXFwpLzsgLy8gUGFyc2UgcmVmZXJlbmNlIGlkXG5cbmNvbnN0IHJlZmVyZW5jZSA9IC8oI1thLXpfXVthLXowLTlcXC1fXSopL2k7IC8vIHNwbGl0cyBhIHRyYW5zZm9ybWF0aW9uIGNoYWluXG5cbmNvbnN0IHRyYW5zZm9ybXMgPSAvXFwpXFxzKiw/XFxzKi87IC8vIFdoaXRlc3BhY2VcblxuY29uc3Qgd2hpdGVzcGFjZSA9IC9cXHMvZzsgLy8gVGVzdCBoZXggdmFsdWVcblxuY29uc3QgaXNIZXggPSAvXiNbYS1mMC05XXszfSR8XiNbYS1mMC05XXs2fSQvaTsgLy8gVGVzdCByZ2IgdmFsdWVcblxuY29uc3QgaXNSZ2IgPSAvXnJnYlxcKC87IC8vIFRlc3QgZm9yIGJsYW5rIHN0cmluZ1xuXG5jb25zdCBpc0JsYW5rID0gL14oXFxzKyk/JC87IC8vIFRlc3QgZm9yIG51bWVyaWMgc3RyaW5nXG5cbmNvbnN0IGlzTnVtYmVyID0gL15bKy1dPyhcXGQrKFxcLlxcZCopP3xcXC5cXGQrKShlWystXT9cXGQrKT8kL2k7IC8vIFRlc3QgZm9yIGltYWdlIHVybFxuXG5jb25zdCBpc0ltYWdlID0gL1xcLihqcGd8anBlZ3xwbmd8Z2lmfHN2ZykoXFw/W149XSsuKik/L2k7IC8vIHNwbGl0IGF0IHdoaXRlc3BhY2UgYW5kIGNvbW1hXG5cbmNvbnN0IGRlbGltaXRlciA9IC9bXFxzLF0rLzsgLy8gVGVzdCBmb3IgcGF0aCBsZXR0ZXJcblxuY29uc3QgaXNQYXRoTGV0dGVyID0gL1tNTEhWQ1NRVEFaXS9pO1xuXG52YXIgcmVnZXggPSB7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgbnVtYmVyQW5kVW5pdDogbnVtYmVyQW5kVW5pdCxcbiAgaGV4OiBoZXgsXG4gIHJnYjogcmdiLFxuICByZWZlcmVuY2U6IHJlZmVyZW5jZSxcbiAgdHJhbnNmb3JtczogdHJhbnNmb3JtcyxcbiAgd2hpdGVzcGFjZTogd2hpdGVzcGFjZSxcbiAgaXNIZXg6IGlzSGV4LFxuICBpc1JnYjogaXNSZ2IsXG4gIGlzQmxhbms6IGlzQmxhbmssXG4gIGlzTnVtYmVyOiBpc051bWJlcixcbiAgaXNJbWFnZTogaXNJbWFnZSxcbiAgZGVsaW1pdGVyOiBkZWxpbWl0ZXIsXG4gIGlzUGF0aExldHRlcjogaXNQYXRoTGV0dGVyXG59O1xuXG5mdW5jdGlvbiBjbGFzc2VzKCkge1xuICBjb25zdCBhdHRyID0gdGhpcy5hdHRyKCdjbGFzcycpO1xuICByZXR1cm4gYXR0ciA9PSBudWxsID8gW10gOiBhdHRyLnRyaW0oKS5zcGxpdChkZWxpbWl0ZXIpO1xufSAvLyBSZXR1cm4gdHJ1ZSBpZiBjbGFzcyBleGlzdHMgb24gdGhlIG5vZGUsIGZhbHNlIG90aGVyd2lzZVxuXG5mdW5jdGlvbiBoYXNDbGFzcyhuYW1lKSB7XG4gIHJldHVybiB0aGlzLmNsYXNzZXMoKS5pbmRleE9mKG5hbWUpICE9PSAtMTtcbn0gLy8gQWRkIGNsYXNzIHRvIHRoZSBub2RlXG5cbmZ1bmN0aW9uIGFkZENsYXNzKG5hbWUpIHtcbiAgaWYgKCF0aGlzLmhhc0NsYXNzKG5hbWUpKSB7XG4gICAgY29uc3QgYXJyYXkgPSB0aGlzLmNsYXNzZXMoKTtcbiAgICBhcnJheS5wdXNoKG5hbWUpO1xuICAgIHRoaXMuYXR0cignY2xhc3MnLCBhcnJheS5qb2luKCcgJykpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59IC8vIFJlbW92ZSBjbGFzcyBmcm9tIHRoZSBub2RlXG5cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzKG5hbWUpIHtcbiAgaWYgKHRoaXMuaGFzQ2xhc3MobmFtZSkpIHtcbiAgICB0aGlzLmF0dHIoJ2NsYXNzJywgdGhpcy5jbGFzc2VzKCkuZmlsdGVyKGZ1bmN0aW9uIChjKSB7XG4gICAgICByZXR1cm4gYyAhPT0gbmFtZTtcbiAgICB9KS5qb2luKCcgJykpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59IC8vIFRvZ2dsZSB0aGUgcHJlc2VuY2Ugb2YgYSBjbGFzcyBvbiB0aGUgbm9kZVxuXG5mdW5jdGlvbiB0b2dnbGVDbGFzcyhuYW1lKSB7XG4gIHJldHVybiB0aGlzLmhhc0NsYXNzKG5hbWUpID8gdGhpcy5yZW1vdmVDbGFzcyhuYW1lKSA6IHRoaXMuYWRkQ2xhc3MobmFtZSk7XG59XG5yZWdpc3Rlck1ldGhvZHMoJ0RvbScsIHtcbiAgY2xhc3NlcyxcbiAgaGFzQ2xhc3MsXG4gIGFkZENsYXNzLFxuICByZW1vdmVDbGFzcyxcbiAgdG9nZ2xlQ2xhc3Ncbn0pO1xuXG5mdW5jdGlvbiBjc3Moc3R5bGUsIHZhbCkge1xuICBjb25zdCByZXQgPSB7fTtcblxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIC8vIGdldCBmdWxsIHN0eWxlIGFzIG9iamVjdFxuICAgIHRoaXMubm9kZS5zdHlsZS5jc3NUZXh0LnNwbGl0KC9cXHMqO1xccyovKS5maWx0ZXIoZnVuY3Rpb24gKGVsKSB7XG4gICAgICByZXR1cm4gISFlbC5sZW5ndGg7XG4gICAgfSkuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgIGNvbnN0IHQgPSBlbC5zcGxpdCgvXFxzKjpcXHMqLyk7XG4gICAgICByZXRbdFswXV0gPSB0WzFdO1xuICAgIH0pO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICAvLyBnZXQgc3R5bGUgcHJvcGVydGllcyBhcyBhcnJheVxuICAgIGlmIChBcnJheS5pc0FycmF5KHN0eWxlKSkge1xuICAgICAgZm9yIChjb25zdCBuYW1lIG9mIHN0eWxlKSB7XG4gICAgICAgIGNvbnN0IGNhc2VkID0gY2FtZWxDYXNlKG5hbWUpO1xuICAgICAgICByZXRbbmFtZV0gPSB0aGlzLm5vZGUuc3R5bGVbY2FzZWRdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmV0O1xuICAgIH0gLy8gZ2V0IHN0eWxlIGZvciBwcm9wZXJ0eVxuXG5cbiAgICBpZiAodHlwZW9mIHN0eWxlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHRoaXMubm9kZS5zdHlsZVtjYW1lbENhc2Uoc3R5bGUpXTtcbiAgICB9IC8vIHNldCBzdHlsZXMgaW4gb2JqZWN0XG5cblxuICAgIGlmICh0eXBlb2Ygc3R5bGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBmb3IgKGNvbnN0IG5hbWUgaW4gc3R5bGUpIHtcbiAgICAgICAgLy8gc2V0IGVtcHR5IHN0cmluZyBpZiBudWxsL3VuZGVmaW5lZC8nJyB3YXMgZ2l2ZW5cbiAgICAgICAgdGhpcy5ub2RlLnN0eWxlW2NhbWVsQ2FzZShuYW1lKV0gPSBzdHlsZVtuYW1lXSA9PSBudWxsIHx8IGlzQmxhbmsudGVzdChzdHlsZVtuYW1lXSkgPyAnJyA6IHN0eWxlW25hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfSAvLyBzZXQgc3R5bGUgZm9yIHByb3BlcnR5XG5cblxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgIHRoaXMubm9kZS5zdHlsZVtjYW1lbENhc2Uoc3R5bGUpXSA9IHZhbCA9PSBudWxsIHx8IGlzQmxhbmsudGVzdCh2YWwpID8gJycgOiB2YWw7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn0gLy8gU2hvdyBlbGVtZW50XG5cbmZ1bmN0aW9uIHNob3coKSB7XG4gIHJldHVybiB0aGlzLmNzcygnZGlzcGxheScsICcnKTtcbn0gLy8gSGlkZSBlbGVtZW50XG5cbmZ1bmN0aW9uIGhpZGUoKSB7XG4gIHJldHVybiB0aGlzLmNzcygnZGlzcGxheScsICdub25lJyk7XG59IC8vIElzIGVsZW1lbnQgdmlzaWJsZT9cblxuZnVuY3Rpb24gdmlzaWJsZSgpIHtcbiAgcmV0dXJuIHRoaXMuY3NzKCdkaXNwbGF5JykgIT09ICdub25lJztcbn1cbnJlZ2lzdGVyTWV0aG9kcygnRG9tJywge1xuICBjc3MsXG4gIHNob3csXG4gIGhpZGUsXG4gIHZpc2libGVcbn0pO1xuXG5mdW5jdGlvbiBkYXRhKGEsIHYsIHIpIHtcbiAgaWYgKGEgPT0gbnVsbCkge1xuICAgIC8vIGdldCBhbiBvYmplY3Qgb2YgYXR0cmlidXRlc1xuICAgIHJldHVybiB0aGlzLmRhdGEobWFwKGZpbHRlcih0aGlzLm5vZGUuYXR0cmlidXRlcywgZWwgPT4gZWwubm9kZU5hbWUuaW5kZXhPZignZGF0YS0nKSA9PT0gMCksIGVsID0+IGVsLm5vZGVOYW1lLnNsaWNlKDUpKSk7XG4gIH0gZWxzZSBpZiAoYSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgY29uc3QgZGF0YSA9IHt9O1xuXG4gICAgZm9yIChjb25zdCBrZXkgb2YgYSkge1xuICAgICAgZGF0YVtrZXldID0gdGhpcy5kYXRhKGtleSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGEgPT09ICdvYmplY3QnKSB7XG4gICAgZm9yICh2IGluIGEpIHtcbiAgICAgIHRoaXMuZGF0YSh2LCBhW3ZdKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UodGhpcy5hdHRyKCdkYXRhLScgKyBhKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIHRoaXMuYXR0cignZGF0YS0nICsgYSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRoaXMuYXR0cignZGF0YS0nICsgYSwgdiA9PT0gbnVsbCA/IG51bGwgOiByID09PSB0cnVlIHx8IHR5cGVvZiB2ID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdiA9PT0gJ251bWJlcicgPyB2IDogSlNPTi5zdHJpbmdpZnkodikpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5yZWdpc3Rlck1ldGhvZHMoJ0RvbScsIHtcbiAgZGF0YVxufSk7XG5cbmZ1bmN0aW9uIHJlbWVtYmVyKGssIHYpIHtcbiAgLy8gcmVtZW1iZXIgZXZlcnkgaXRlbSBpbiBhbiBvYmplY3QgaW5kaXZpZHVhbGx5XG4gIGlmICh0eXBlb2YgYXJndW1lbnRzWzBdID09PSAnb2JqZWN0Jykge1xuICAgIGZvciAoY29uc3Qga2V5IGluIGspIHtcbiAgICAgIHRoaXMucmVtZW1iZXIoa2V5LCBrW2tleV0pO1xuICAgIH1cbiAgfSBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgLy8gcmV0cmlldmUgbWVtb3J5XG4gICAgcmV0dXJuIHRoaXMubWVtb3J5KClba107XG4gIH0gZWxzZSB7XG4gICAgLy8gc3RvcmUgbWVtb3J5XG4gICAgdGhpcy5tZW1vcnkoKVtrXSA9IHY7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn0gLy8gRXJhc2UgYSBnaXZlbiBtZW1vcnlcblxuZnVuY3Rpb24gZm9yZ2V0KCkge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIHRoaXMuX21lbW9yeSA9IHt9O1xuICB9IGVsc2Uge1xuICAgIGZvciAobGV0IGkgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGRlbGV0ZSB0aGlzLm1lbW9yeSgpW2FyZ3VtZW50c1tpXV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59IC8vIFRoaXMgdHJpZ2dlcnMgY3JlYXRpb24gb2YgYSBuZXcgaGlkZGVuIGNsYXNzIHdoaWNoIGlzIG5vdCBwZXJmb3JtYW50XG4vLyBIb3dldmVyLCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCByYXJlbHkgdXNlZCBzbyBpdCB3aWxsIG5vdCBoYXBwZW4gZnJlcXVlbnRseVxuLy8gUmV0dXJuIGxvY2FsIG1lbW9yeSBvYmplY3RcblxuZnVuY3Rpb24gbWVtb3J5KCkge1xuICByZXR1cm4gdGhpcy5fbWVtb3J5ID0gdGhpcy5fbWVtb3J5IHx8IHt9O1xufVxucmVnaXN0ZXJNZXRob2RzKCdEb20nLCB7XG4gIHJlbWVtYmVyLFxuICBmb3JnZXQsXG4gIG1lbW9yeVxufSk7XG5cbmZ1bmN0aW9uIHNpeERpZ2l0SGV4KGhleCkge1xuICByZXR1cm4gaGV4Lmxlbmd0aCA9PT0gNCA/IFsnIycsIGhleC5zdWJzdHJpbmcoMSwgMiksIGhleC5zdWJzdHJpbmcoMSwgMiksIGhleC5zdWJzdHJpbmcoMiwgMyksIGhleC5zdWJzdHJpbmcoMiwgMyksIGhleC5zdWJzdHJpbmcoMywgNCksIGhleC5zdWJzdHJpbmcoMywgNCldLmpvaW4oJycpIDogaGV4O1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRIZXgoY29tcG9uZW50KSB7XG4gIGNvbnN0IGludGVnZXIgPSBNYXRoLnJvdW5kKGNvbXBvbmVudCk7XG4gIGNvbnN0IGJvdW5kZWQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigyNTUsIGludGVnZXIpKTtcbiAgY29uc3QgaGV4ID0gYm91bmRlZC50b1N0cmluZygxNik7XG4gIHJldHVybiBoZXgubGVuZ3RoID09PSAxID8gJzAnICsgaGV4IDogaGV4O1xufVxuXG5mdW5jdGlvbiBpcyhvYmplY3QsIHNwYWNlKSB7XG4gIGZvciAobGV0IGkgPSBzcGFjZS5sZW5ndGg7IGktLTspIHtcbiAgICBpZiAob2JqZWN0W3NwYWNlW2ldXSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGdldFBhcmFtZXRlcnMoYSwgYikge1xuICBjb25zdCBwYXJhbXMgPSBpcyhhLCAncmdiJykgPyB7XG4gICAgX2E6IGEucixcbiAgICBfYjogYS5nLFxuICAgIF9jOiBhLmIsXG4gICAgX2Q6IDAsXG4gICAgc3BhY2U6ICdyZ2InXG4gIH0gOiBpcyhhLCAneHl6JykgPyB7XG4gICAgX2E6IGEueCxcbiAgICBfYjogYS55LFxuICAgIF9jOiBhLnosXG4gICAgX2Q6IDAsXG4gICAgc3BhY2U6ICd4eXonXG4gIH0gOiBpcyhhLCAnaHNsJykgPyB7XG4gICAgX2E6IGEuaCxcbiAgICBfYjogYS5zLFxuICAgIF9jOiBhLmwsXG4gICAgX2Q6IDAsXG4gICAgc3BhY2U6ICdoc2wnXG4gIH0gOiBpcyhhLCAnbGFiJykgPyB7XG4gICAgX2E6IGEubCxcbiAgICBfYjogYS5hLFxuICAgIF9jOiBhLmIsXG4gICAgX2Q6IDAsXG4gICAgc3BhY2U6ICdsYWInXG4gIH0gOiBpcyhhLCAnbGNoJykgPyB7XG4gICAgX2E6IGEubCxcbiAgICBfYjogYS5jLFxuICAgIF9jOiBhLmgsXG4gICAgX2Q6IDAsXG4gICAgc3BhY2U6ICdsY2gnXG4gIH0gOiBpcyhhLCAnY215aycpID8ge1xuICAgIF9hOiBhLmMsXG4gICAgX2I6IGEubSxcbiAgICBfYzogYS55LFxuICAgIF9kOiBhLmssXG4gICAgc3BhY2U6ICdjbXlrJ1xuICB9IDoge1xuICAgIF9hOiAwLFxuICAgIF9iOiAwLFxuICAgIF9jOiAwLFxuICAgIHNwYWNlOiAncmdiJ1xuICB9O1xuICBwYXJhbXMuc3BhY2UgPSBiIHx8IHBhcmFtcy5zcGFjZTtcbiAgcmV0dXJuIHBhcmFtcztcbn1cblxuZnVuY3Rpb24gY2llU3BhY2Uoc3BhY2UpIHtcbiAgaWYgKHNwYWNlID09PSAnbGFiJyB8fCBzcGFjZSA9PT0gJ3h5eicgfHwgc3BhY2UgPT09ICdsY2gnKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGh1ZVRvUmdiKHAsIHEsIHQpIHtcbiAgaWYgKHQgPCAwKSB0ICs9IDE7XG4gIGlmICh0ID4gMSkgdCAtPSAxO1xuICBpZiAodCA8IDEgLyA2KSByZXR1cm4gcCArIChxIC0gcCkgKiA2ICogdDtcbiAgaWYgKHQgPCAxIC8gMikgcmV0dXJuIHE7XG4gIGlmICh0IDwgMiAvIDMpIHJldHVybiBwICsgKHEgLSBwKSAqICgyIC8gMyAtIHQpICogNjtcbiAgcmV0dXJuIHA7XG59XG5cbmNsYXNzIENvbG9yIHtcbiAgY29uc3RydWN0b3IoLi4uaW5wdXRzKSB7XG4gICAgdGhpcy5pbml0KC4uLmlucHV0cyk7XG4gIH0gLy8gVGVzdCBpZiBnaXZlbiB2YWx1ZSBpcyBhIGNvbG9yXG5cblxuICBzdGF0aWMgaXNDb2xvcihjb2xvcikge1xuICAgIHJldHVybiBjb2xvciAmJiAoY29sb3IgaW5zdGFuY2VvZiBDb2xvciB8fCB0aGlzLmlzUmdiKGNvbG9yKSB8fCB0aGlzLnRlc3QoY29sb3IpKTtcbiAgfSAvLyBUZXN0IGlmIGdpdmVuIHZhbHVlIGlzIGFuIHJnYiBvYmplY3RcblxuXG4gIHN0YXRpYyBpc1JnYihjb2xvcikge1xuICAgIHJldHVybiBjb2xvciAmJiB0eXBlb2YgY29sb3IuciA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGNvbG9yLmcgPT09ICdudW1iZXInICYmIHR5cGVvZiBjb2xvci5iID09PSAnbnVtYmVyJztcbiAgfVxuICAvKlxyXG4gIEdlbmVyYXRpbmcgcmFuZG9tIGNvbG9yc1xyXG4gICovXG5cblxuICBzdGF0aWMgcmFuZG9tKG1vZGUgPSAndmlicmFudCcsIHQsIHUpIHtcbiAgICAvLyBHZXQgdGhlIG1hdGggbW9kdWxlc1xuICAgIGNvbnN0IHtcbiAgICAgIHJhbmRvbSxcbiAgICAgIHJvdW5kLFxuICAgICAgc2luLFxuICAgICAgUEk6IHBpXG4gICAgfSA9IE1hdGg7IC8vIFJ1biB0aGUgY29ycmVjdCBnZW5lcmF0b3JcblxuICAgIGlmIChtb2RlID09PSAndmlicmFudCcpIHtcbiAgICAgIGNvbnN0IGwgPSAoODEgLSA1NykgKiByYW5kb20oKSArIDU3O1xuICAgICAgY29uc3QgYyA9ICg4MyAtIDQ1KSAqIHJhbmRvbSgpICsgNDU7XG4gICAgICBjb25zdCBoID0gMzYwICogcmFuZG9tKCk7XG4gICAgICBjb25zdCBjb2xvciA9IG5ldyBDb2xvcihsLCBjLCBoLCAnbGNoJyk7XG4gICAgICByZXR1cm4gY29sb3I7XG4gICAgfSBlbHNlIGlmIChtb2RlID09PSAnc2luZScpIHtcbiAgICAgIHQgPSB0ID09IG51bGwgPyByYW5kb20oKSA6IHQ7XG4gICAgICBjb25zdCByID0gcm91bmQoODAgKiBzaW4oMiAqIHBpICogdCAvIDAuNSArIDAuMDEpICsgMTUwKTtcbiAgICAgIGNvbnN0IGcgPSByb3VuZCg1MCAqIHNpbigyICogcGkgKiB0IC8gMC41ICsgNC42KSArIDIwMCk7XG4gICAgICBjb25zdCBiID0gcm91bmQoMTAwICogc2luKDIgKiBwaSAqIHQgLyAwLjUgKyAyLjMpICsgMTUwKTtcbiAgICAgIGNvbnN0IGNvbG9yID0gbmV3IENvbG9yKHIsIGcsIGIpO1xuICAgICAgcmV0dXJuIGNvbG9yO1xuICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gJ3Bhc3RlbCcpIHtcbiAgICAgIGNvbnN0IGwgPSAoOTQgLSA4NikgKiByYW5kb20oKSArIDg2O1xuICAgICAgY29uc3QgYyA9ICgyNiAtIDkpICogcmFuZG9tKCkgKyA5O1xuICAgICAgY29uc3QgaCA9IDM2MCAqIHJhbmRvbSgpO1xuICAgICAgY29uc3QgY29sb3IgPSBuZXcgQ29sb3IobCwgYywgaCwgJ2xjaCcpO1xuICAgICAgcmV0dXJuIGNvbG9yO1xuICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gJ2RhcmsnKSB7XG4gICAgICBjb25zdCBsID0gMTAgKyAxMCAqIHJhbmRvbSgpO1xuICAgICAgY29uc3QgYyA9ICgxMjUgLSA3NSkgKiByYW5kb20oKSArIDg2O1xuICAgICAgY29uc3QgaCA9IDM2MCAqIHJhbmRvbSgpO1xuICAgICAgY29uc3QgY29sb3IgPSBuZXcgQ29sb3IobCwgYywgaCwgJ2xjaCcpO1xuICAgICAgcmV0dXJuIGNvbG9yO1xuICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gJ3JnYicpIHtcbiAgICAgIGNvbnN0IHIgPSAyNTUgKiByYW5kb20oKTtcbiAgICAgIGNvbnN0IGcgPSAyNTUgKiByYW5kb20oKTtcbiAgICAgIGNvbnN0IGIgPSAyNTUgKiByYW5kb20oKTtcbiAgICAgIGNvbnN0IGNvbG9yID0gbmV3IENvbG9yKHIsIGcsIGIpO1xuICAgICAgcmV0dXJuIGNvbG9yO1xuICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gJ2xhYicpIHtcbiAgICAgIGNvbnN0IGwgPSAxMDAgKiByYW5kb20oKTtcbiAgICAgIGNvbnN0IGEgPSAyNTYgKiByYW5kb20oKSAtIDEyODtcbiAgICAgIGNvbnN0IGIgPSAyNTYgKiByYW5kb20oKSAtIDEyODtcbiAgICAgIGNvbnN0IGNvbG9yID0gbmV3IENvbG9yKGwsIGEsIGIsICdsYWInKTtcbiAgICAgIHJldHVybiBjb2xvcjtcbiAgICB9IGVsc2UgaWYgKG1vZGUgPT09ICdncmV5Jykge1xuICAgICAgY29uc3QgZ3JleSA9IDI1NSAqIHJhbmRvbSgpO1xuICAgICAgY29uc3QgY29sb3IgPSBuZXcgQ29sb3IoZ3JleSwgZ3JleSwgZ3JleSk7XG4gICAgICByZXR1cm4gY29sb3I7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgcmFuZG9tIGNvbG9yIG1vZGUnKTtcbiAgICB9XG4gIH0gLy8gVGVzdCBpZiBnaXZlbiB2YWx1ZSBpcyBhIGNvbG9yIHN0cmluZ1xuXG5cbiAgc3RhdGljIHRlc3QoY29sb3IpIHtcbiAgICByZXR1cm4gdHlwZW9mIGNvbG9yID09PSAnc3RyaW5nJyAmJiAoaXNIZXgudGVzdChjb2xvcikgfHwgaXNSZ2IudGVzdChjb2xvcikpO1xuICB9XG5cbiAgY215aygpIHtcbiAgICAvLyBHZXQgdGhlIHJnYiB2YWx1ZXMgZm9yIHRoZSBjdXJyZW50IGNvbG9yXG4gICAgY29uc3Qge1xuICAgICAgX2EsXG4gICAgICBfYixcbiAgICAgIF9jXG4gICAgfSA9IHRoaXMucmdiKCk7XG4gICAgY29uc3QgW3IsIGcsIGJdID0gW19hLCBfYiwgX2NdLm1hcCh2ID0+IHYgLyAyNTUpOyAvLyBHZXQgdGhlIGNteWsgdmFsdWVzIGluIGFuIHVuYm91bmRlZCBmb3JtYXRcblxuICAgIGNvbnN0IGsgPSBNYXRoLm1pbigxIC0gciwgMSAtIGcsIDEgLSBiKTtcblxuICAgIGlmIChrID09PSAxKSB7XG4gICAgICAvLyBDYXRjaCB0aGUgYmxhY2sgY2FzZVxuICAgICAgcmV0dXJuIG5ldyBDb2xvcigwLCAwLCAwLCAxLCAnY215aycpO1xuICAgIH1cblxuICAgIGNvbnN0IGMgPSAoMSAtIHIgLSBrKSAvICgxIC0gayk7XG4gICAgY29uc3QgbSA9ICgxIC0gZyAtIGspIC8gKDEgLSBrKTtcbiAgICBjb25zdCB5ID0gKDEgLSBiIC0gaykgLyAoMSAtIGspOyAvLyBDb25zdHJ1Y3QgdGhlIG5ldyBjb2xvclxuXG4gICAgY29uc3QgY29sb3IgPSBuZXcgQ29sb3IoYywgbSwgeSwgaywgJ2NteWsnKTtcbiAgICByZXR1cm4gY29sb3I7XG4gIH1cblxuICBoc2woKSB7XG4gICAgLy8gR2V0IHRoZSByZ2IgdmFsdWVzXG4gICAgY29uc3Qge1xuICAgICAgX2EsXG4gICAgICBfYixcbiAgICAgIF9jXG4gICAgfSA9IHRoaXMucmdiKCk7XG4gICAgY29uc3QgW3IsIGcsIGJdID0gW19hLCBfYiwgX2NdLm1hcCh2ID0+IHYgLyAyNTUpOyAvLyBGaW5kIHRoZSBtYXhpbXVtIGFuZCBtaW5pbXVtIHZhbHVlcyB0byBnZXQgdGhlIGxpZ2h0bmVzc1xuXG4gICAgY29uc3QgbWF4ID0gTWF0aC5tYXgociwgZywgYik7XG4gICAgY29uc3QgbWluID0gTWF0aC5taW4ociwgZywgYik7XG4gICAgY29uc3QgbCA9IChtYXggKyBtaW4pIC8gMjsgLy8gSWYgdGhlIHIsIGcsIHYgdmFsdWVzIGFyZSBpZGVudGljYWwgdGhlbiB3ZSBhcmUgZ3JleVxuXG4gICAgY29uc3QgaXNHcmV5ID0gbWF4ID09PSBtaW47IC8vIENhbGN1bGF0ZSB0aGUgaHVlIGFuZCBzYXR1cmF0aW9uXG5cbiAgICBjb25zdCBkZWx0YSA9IG1heCAtIG1pbjtcbiAgICBjb25zdCBzID0gaXNHcmV5ID8gMCA6IGwgPiAwLjUgPyBkZWx0YSAvICgyIC0gbWF4IC0gbWluKSA6IGRlbHRhIC8gKG1heCArIG1pbik7XG4gICAgY29uc3QgaCA9IGlzR3JleSA/IDAgOiBtYXggPT09IHIgPyAoKGcgLSBiKSAvIGRlbHRhICsgKGcgPCBiID8gNiA6IDApKSAvIDYgOiBtYXggPT09IGcgPyAoKGIgLSByKSAvIGRlbHRhICsgMikgLyA2IDogbWF4ID09PSBiID8gKChyIC0gZykgLyBkZWx0YSArIDQpIC8gNiA6IDA7IC8vIENvbnN0cnVjdCBhbmQgcmV0dXJuIHRoZSBuZXcgY29sb3JcblxuICAgIGNvbnN0IGNvbG9yID0gbmV3IENvbG9yKDM2MCAqIGgsIDEwMCAqIHMsIDEwMCAqIGwsICdoc2wnKTtcbiAgICByZXR1cm4gY29sb3I7XG4gIH1cblxuICBpbml0KGEgPSAwLCBiID0gMCwgYyA9IDAsIGQgPSAwLCBzcGFjZSA9ICdyZ2InKSB7XG4gICAgLy8gVGhpcyBjYXRjaGVzIHRoZSBjYXNlIHdoZW4gYSBmYWxzeSB2YWx1ZSBpcyBwYXNzZWQgbGlrZSAnJ1xuICAgIGEgPSAhYSA/IDAgOiBhOyAvLyBSZXNldCBhbGwgdmFsdWVzIGluIGNhc2UgdGhlIGluaXQgZnVuY3Rpb24gaXMgcmVydW4gd2l0aCBuZXcgY29sb3Igc3BhY2VcblxuICAgIGlmICh0aGlzLnNwYWNlKSB7XG4gICAgICBmb3IgKGNvbnN0IGNvbXBvbmVudCBpbiB0aGlzLnNwYWNlKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzW3RoaXMuc3BhY2VbY29tcG9uZW50XV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBhID09PSAnbnVtYmVyJykge1xuICAgICAgLy8gQWxsb3cgZm9yIHRoZSBjYXNlIHRoYXQgd2UgZG9uJ3QgbmVlZCBkLi4uXG4gICAgICBzcGFjZSA9IHR5cGVvZiBkID09PSAnc3RyaW5nJyA/IGQgOiBzcGFjZTtcbiAgICAgIGQgPSB0eXBlb2YgZCA9PT0gJ3N0cmluZycgPyAwIDogZDsgLy8gQXNzaWduIHRoZSB2YWx1ZXMgc3RyYWlnaHQgdG8gdGhlIGNvbG9yXG5cbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcywge1xuICAgICAgICBfYTogYSxcbiAgICAgICAgX2I6IGIsXG4gICAgICAgIF9jOiBjLFxuICAgICAgICBfZDogZCxcbiAgICAgICAgc3BhY2VcbiAgICAgIH0pOyAvLyBJZiB0aGUgdXNlciBnYXZlIHVzIGFuIGFycmF5LCBtYWtlIHRoZSBjb2xvciBmcm9tIGl0XG4gICAgfSBlbHNlIGlmIChhIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIHRoaXMuc3BhY2UgPSBiIHx8ICh0eXBlb2YgYVszXSA9PT0gJ3N0cmluZycgPyBhWzNdIDogYVs0XSkgfHwgJ3JnYic7XG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHtcbiAgICAgICAgX2E6IGFbMF0sXG4gICAgICAgIF9iOiBhWzFdLFxuICAgICAgICBfYzogYVsyXSxcbiAgICAgICAgX2Q6IGFbM10gfHwgMFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChhIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICAvLyBTZXQgdGhlIG9iamVjdCB1cCBhbmQgYXNzaWduIGl0cyB2YWx1ZXMgZGlyZWN0bHlcbiAgICAgIGNvbnN0IHZhbHVlcyA9IGdldFBhcmFtZXRlcnMoYSwgYik7XG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHZhbHVlcyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgYSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmIChpc1JnYi50ZXN0KGEpKSB7XG4gICAgICAgIGNvbnN0IG5vV2hpdGVzcGFjZSA9IGEucmVwbGFjZSh3aGl0ZXNwYWNlLCAnJyk7XG4gICAgICAgIGNvbnN0IFtfYSwgX2IsIF9jXSA9IHJnYi5leGVjKG5vV2hpdGVzcGFjZSkuc2xpY2UoMSwgNCkubWFwKHYgPT4gcGFyc2VJbnQodikpO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHtcbiAgICAgICAgICBfYSxcbiAgICAgICAgICBfYixcbiAgICAgICAgICBfYyxcbiAgICAgICAgICBfZDogMCxcbiAgICAgICAgICBzcGFjZTogJ3JnYidcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKGlzSGV4LnRlc3QoYSkpIHtcbiAgICAgICAgY29uc3QgaGV4UGFyc2UgPSB2ID0+IHBhcnNlSW50KHYsIDE2KTtcblxuICAgICAgICBjb25zdCBbLCBfYSwgX2IsIF9jXSA9IGhleC5leGVjKHNpeERpZ2l0SGV4KGEpKS5tYXAoaGV4UGFyc2UpO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHtcbiAgICAgICAgICBfYSxcbiAgICAgICAgICBfYixcbiAgICAgICAgICBfYyxcbiAgICAgICAgICBfZDogMCxcbiAgICAgICAgICBzcGFjZTogJ3JnYidcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgdGhyb3cgRXJyb3IoJ1Vuc3VwcG9ydGVkIHN0cmluZyBmb3JtYXQsIGNhblxcJ3QgY29uc3RydWN0IENvbG9yJyk7XG4gICAgfSAvLyBOb3cgYWRkIHRoZSBjb21wb25lbnRzIGFzIGEgY29udmVuaWVuY2VcblxuXG4gICAgY29uc3Qge1xuICAgICAgX2EsXG4gICAgICBfYixcbiAgICAgIF9jLFxuICAgICAgX2RcbiAgICB9ID0gdGhpcztcbiAgICBjb25zdCBjb21wb25lbnRzID0gdGhpcy5zcGFjZSA9PT0gJ3JnYicgPyB7XG4gICAgICByOiBfYSxcbiAgICAgIGc6IF9iLFxuICAgICAgYjogX2NcbiAgICB9IDogdGhpcy5zcGFjZSA9PT0gJ3h5eicgPyB7XG4gICAgICB4OiBfYSxcbiAgICAgIHk6IF9iLFxuICAgICAgejogX2NcbiAgICB9IDogdGhpcy5zcGFjZSA9PT0gJ2hzbCcgPyB7XG4gICAgICBoOiBfYSxcbiAgICAgIHM6IF9iLFxuICAgICAgbDogX2NcbiAgICB9IDogdGhpcy5zcGFjZSA9PT0gJ2xhYicgPyB7XG4gICAgICBsOiBfYSxcbiAgICAgIGE6IF9iLFxuICAgICAgYjogX2NcbiAgICB9IDogdGhpcy5zcGFjZSA9PT0gJ2xjaCcgPyB7XG4gICAgICBsOiBfYSxcbiAgICAgIGM6IF9iLFxuICAgICAgaDogX2NcbiAgICB9IDogdGhpcy5zcGFjZSA9PT0gJ2NteWsnID8ge1xuICAgICAgYzogX2EsXG4gICAgICBtOiBfYixcbiAgICAgIHk6IF9jLFxuICAgICAgazogX2RcbiAgICB9IDoge307XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb21wb25lbnRzKTtcbiAgfVxuXG4gIGxhYigpIHtcbiAgICAvLyBHZXQgdGhlIHh5eiBjb2xvclxuICAgIGNvbnN0IHtcbiAgICAgIHgsXG4gICAgICB5LFxuICAgICAgelxuICAgIH0gPSB0aGlzLnh5eigpOyAvLyBHZXQgdGhlIGxhYiBjb21wb25lbnRzXG5cbiAgICBjb25zdCBsID0gMTE2ICogeSAtIDE2O1xuICAgIGNvbnN0IGEgPSA1MDAgKiAoeCAtIHkpO1xuICAgIGNvbnN0IGIgPSAyMDAgKiAoeSAtIHopOyAvLyBDb25zdHJ1Y3QgYW5kIHJldHVybiBhIG5ldyBjb2xvclxuXG4gICAgY29uc3QgY29sb3IgPSBuZXcgQ29sb3IobCwgYSwgYiwgJ2xhYicpO1xuICAgIHJldHVybiBjb2xvcjtcbiAgfVxuXG4gIGxjaCgpIHtcbiAgICAvLyBHZXQgdGhlIGxhYiBjb2xvciBkaXJlY3RseVxuICAgIGNvbnN0IHtcbiAgICAgIGwsXG4gICAgICBhLFxuICAgICAgYlxuICAgIH0gPSB0aGlzLmxhYigpOyAvLyBHZXQgdGhlIGNocm9tYXRpY2l0eSBhbmQgdGhlIGh1ZSB1c2luZyBwb2xhciBjb29yZGluYXRlc1xuXG4gICAgY29uc3QgYyA9IE1hdGguc3FydChhICoqIDIgKyBiICoqIDIpO1xuICAgIGxldCBoID0gMTgwICogTWF0aC5hdGFuMihiLCBhKSAvIE1hdGguUEk7XG5cbiAgICBpZiAoaCA8IDApIHtcbiAgICAgIGggKj0gLTE7XG4gICAgICBoID0gMzYwIC0gaDtcbiAgICB9IC8vIE1ha2UgYSBuZXcgY29sb3IgYW5kIHJldHVybiBpdFxuXG5cbiAgICBjb25zdCBjb2xvciA9IG5ldyBDb2xvcihsLCBjLCBoLCAnbGNoJyk7XG4gICAgcmV0dXJuIGNvbG9yO1xuICB9XG4gIC8qXHJcbiAgQ29udmVyc2lvbiBNZXRob2RzXHJcbiAgKi9cblxuXG4gIHJnYigpIHtcbiAgICBpZiAodGhpcy5zcGFjZSA9PT0gJ3JnYicpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0gZWxzZSBpZiAoY2llU3BhY2UodGhpcy5zcGFjZSkpIHtcbiAgICAgIC8vIENvbnZlcnQgdG8gdGhlIHh5eiBjb2xvciBzcGFjZVxuICAgICAgbGV0IHtcbiAgICAgICAgeCxcbiAgICAgICAgeSxcbiAgICAgICAgelxuICAgICAgfSA9IHRoaXM7XG5cbiAgICAgIGlmICh0aGlzLnNwYWNlID09PSAnbGFiJyB8fCB0aGlzLnNwYWNlID09PSAnbGNoJykge1xuICAgICAgICAvLyBHZXQgdGhlIHZhbHVlcyBpbiB0aGUgbGFiIHNwYWNlXG4gICAgICAgIGxldCB7XG4gICAgICAgICAgbCxcbiAgICAgICAgICBhLFxuICAgICAgICAgIGJcbiAgICAgICAgfSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHRoaXMuc3BhY2UgPT09ICdsY2gnKSB7XG4gICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgYyxcbiAgICAgICAgICAgIGhcbiAgICAgICAgICB9ID0gdGhpcztcbiAgICAgICAgICBjb25zdCBkVG9SID0gTWF0aC5QSSAvIDE4MDtcbiAgICAgICAgICBhID0gYyAqIE1hdGguY29zKGRUb1IgKiBoKTtcbiAgICAgICAgICBiID0gYyAqIE1hdGguc2luKGRUb1IgKiBoKTtcbiAgICAgICAgfSAvLyBVbmRvIHRoZSBub25saW5lYXIgZnVuY3Rpb25cblxuXG4gICAgICAgIGNvbnN0IHlMID0gKGwgKyAxNikgLyAxMTY7XG4gICAgICAgIGNvbnN0IHhMID0gYSAvIDUwMCArIHlMO1xuICAgICAgICBjb25zdCB6TCA9IHlMIC0gYiAvIDIwMDsgLy8gR2V0IHRoZSB4eXogdmFsdWVzXG5cbiAgICAgICAgY29uc3QgY3QgPSAxNiAvIDExNjtcbiAgICAgICAgY29uc3QgbXggPSAwLjAwODg1NjtcbiAgICAgICAgY29uc3Qgbm0gPSA3Ljc4NztcbiAgICAgICAgeCA9IDAuOTUwNDcgKiAoeEwgKiogMyA+IG14ID8geEwgKiogMyA6ICh4TCAtIGN0KSAvIG5tKTtcbiAgICAgICAgeSA9IDEuMDAwMDAgKiAoeUwgKiogMyA+IG14ID8geUwgKiogMyA6ICh5TCAtIGN0KSAvIG5tKTtcbiAgICAgICAgeiA9IDEuMDg4ODMgKiAoekwgKiogMyA+IG14ID8gekwgKiogMyA6ICh6TCAtIGN0KSAvIG5tKTtcbiAgICAgIH0gLy8gQ29udmVydCB4eXogdG8gdW5ib3VuZGVkIHJnYiB2YWx1ZXNcblxuXG4gICAgICBjb25zdCByVSA9IHggKiAzLjI0MDYgKyB5ICogLTEuNTM3MiArIHogKiAtMC40OTg2O1xuICAgICAgY29uc3QgZ1UgPSB4ICogLTAuOTY4OSArIHkgKiAxLjg3NTggKyB6ICogMC4wNDE1O1xuICAgICAgY29uc3QgYlUgPSB4ICogMC4wNTU3ICsgeSAqIC0wLjIwNDAgKyB6ICogMS4wNTcwOyAvLyBDb252ZXJ0IHRoZSB2YWx1ZXMgdG8gdHJ1ZSByZ2IgdmFsdWVzXG5cbiAgICAgIGNvbnN0IHBvdyA9IE1hdGgucG93O1xuICAgICAgY29uc3QgYmQgPSAwLjAwMzEzMDg7XG4gICAgICBjb25zdCByID0gclUgPiBiZCA/IDEuMDU1ICogcG93KHJVLCAxIC8gMi40KSAtIDAuMDU1IDogMTIuOTIgKiByVTtcbiAgICAgIGNvbnN0IGcgPSBnVSA+IGJkID8gMS4wNTUgKiBwb3coZ1UsIDEgLyAyLjQpIC0gMC4wNTUgOiAxMi45MiAqIGdVO1xuICAgICAgY29uc3QgYiA9IGJVID4gYmQgPyAxLjA1NSAqIHBvdyhiVSwgMSAvIDIuNCkgLSAwLjA1NSA6IDEyLjkyICogYlU7IC8vIE1ha2UgYW5kIHJldHVybiB0aGUgY29sb3JcblxuICAgICAgY29uc3QgY29sb3IgPSBuZXcgQ29sb3IoMjU1ICogciwgMjU1ICogZywgMjU1ICogYik7XG4gICAgICByZXR1cm4gY29sb3I7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNwYWNlID09PSAnaHNsJykge1xuICAgICAgLy8gaHR0cHM6Ly9iZ3JpbnMuZ2l0aHViLmlvL1RpbnlDb2xvci9kb2NzL3Rpbnljb2xvci5odG1sXG4gICAgICAvLyBHZXQgdGhlIGN1cnJlbnQgaHNsIHZhbHVlc1xuICAgICAgbGV0IHtcbiAgICAgICAgaCxcbiAgICAgICAgcyxcbiAgICAgICAgbFxuICAgICAgfSA9IHRoaXM7XG4gICAgICBoIC89IDM2MDtcbiAgICAgIHMgLz0gMTAwO1xuICAgICAgbCAvPSAxMDA7IC8vIElmIHdlIGFyZSBncmV5LCB0aGVuIGp1c3QgbWFrZSB0aGUgY29sb3IgZGlyZWN0bHlcblxuICAgICAgaWYgKHMgPT09IDApIHtcbiAgICAgICAgbCAqPSAyNTU7XG4gICAgICAgIGNvbnN0IGNvbG9yID0gbmV3IENvbG9yKGwsIGwsIGwpO1xuICAgICAgICByZXR1cm4gY29sb3I7XG4gICAgICB9IC8vIFRPRE8gSSBoYXZlIG5vIGlkZWEgd2hhdCB0aGlzIGRvZXMgOkQgSWYgeW91IGZpZ3VyZSBpdCBvdXQsIHRlbGwgbWUhXG5cblxuICAgICAgY29uc3QgcSA9IGwgPCAwLjUgPyBsICogKDEgKyBzKSA6IGwgKyBzIC0gbCAqIHM7XG4gICAgICBjb25zdCBwID0gMiAqIGwgLSBxOyAvLyBHZXQgdGhlIHJnYiB2YWx1ZXNcblxuICAgICAgY29uc3QgciA9IDI1NSAqIGh1ZVRvUmdiKHAsIHEsIGggKyAxIC8gMyk7XG4gICAgICBjb25zdCBnID0gMjU1ICogaHVlVG9SZ2IocCwgcSwgaCk7XG4gICAgICBjb25zdCBiID0gMjU1ICogaHVlVG9SZ2IocCwgcSwgaCAtIDEgLyAzKTsgLy8gTWFrZSBhIG5ldyBjb2xvclxuXG4gICAgICBjb25zdCBjb2xvciA9IG5ldyBDb2xvcihyLCBnLCBiKTtcbiAgICAgIHJldHVybiBjb2xvcjtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3BhY2UgPT09ICdjbXlrJykge1xuICAgICAgLy8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vZmVsaXBlc2FiaW5vLzUwNjYzMzZcbiAgICAgIC8vIEdldCB0aGUgbm9ybWFsaXNlZCBjbXlrIHZhbHVlc1xuICAgICAgY29uc3Qge1xuICAgICAgICBjLFxuICAgICAgICBtLFxuICAgICAgICB5LFxuICAgICAgICBrXG4gICAgICB9ID0gdGhpczsgLy8gR2V0IHRoZSByZ2IgdmFsdWVzXG5cbiAgICAgIGNvbnN0IHIgPSAyNTUgKiAoMSAtIE1hdGgubWluKDEsIGMgKiAoMSAtIGspICsgaykpO1xuICAgICAgY29uc3QgZyA9IDI1NSAqICgxIC0gTWF0aC5taW4oMSwgbSAqICgxIC0gaykgKyBrKSk7XG4gICAgICBjb25zdCBiID0gMjU1ICogKDEgLSBNYXRoLm1pbigxLCB5ICogKDEgLSBrKSArIGspKTsgLy8gRm9ybSB0aGUgY29sb3IgYW5kIHJldHVybiBpdFxuXG4gICAgICBjb25zdCBjb2xvciA9IG5ldyBDb2xvcihyLCBnLCBiKTtcbiAgICAgIHJldHVybiBjb2xvcjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9XG5cbiAgdG9BcnJheSgpIHtcbiAgICBjb25zdCB7XG4gICAgICBfYSxcbiAgICAgIF9iLFxuICAgICAgX2MsXG4gICAgICBfZCxcbiAgICAgIHNwYWNlXG4gICAgfSA9IHRoaXM7XG4gICAgcmV0dXJuIFtfYSwgX2IsIF9jLCBfZCwgc3BhY2VdO1xuICB9XG5cbiAgdG9IZXgoKSB7XG4gICAgY29uc3QgW3IsIGcsIGJdID0gdGhpcy5fY2xhbXBlZCgpLm1hcChjb21wb25lbnRIZXgpO1xuXG4gICAgcmV0dXJuIGAjJHtyfSR7Z30ke2J9YDtcbiAgfVxuXG4gIHRvUmdiKCkge1xuICAgIGNvbnN0IFtyViwgZ1YsIGJWXSA9IHRoaXMuX2NsYW1wZWQoKTtcblxuICAgIGNvbnN0IHN0cmluZyA9IGByZ2IoJHtyVn0sJHtnVn0sJHtiVn0pYDtcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9IZXgoKTtcbiAgfVxuXG4gIHh5eigpIHtcbiAgICAvLyBOb3JtYWxpc2UgdGhlIHJlZCwgZ3JlZW4gYW5kIGJsdWUgdmFsdWVzXG4gICAgY29uc3Qge1xuICAgICAgX2E6IHIyNTUsXG4gICAgICBfYjogZzI1NSxcbiAgICAgIF9jOiBiMjU1XG4gICAgfSA9IHRoaXMucmdiKCk7XG4gICAgY29uc3QgW3IsIGcsIGJdID0gW3IyNTUsIGcyNTUsIGIyNTVdLm1hcCh2ID0+IHYgLyAyNTUpOyAvLyBDb252ZXJ0IHRvIHRoZSBsYWIgcmdiIHNwYWNlXG5cbiAgICBjb25zdCByTCA9IHIgPiAwLjA0MDQ1ID8gTWF0aC5wb3coKHIgKyAwLjA1NSkgLyAxLjA1NSwgMi40KSA6IHIgLyAxMi45MjtcbiAgICBjb25zdCBnTCA9IGcgPiAwLjA0MDQ1ID8gTWF0aC5wb3coKGcgKyAwLjA1NSkgLyAxLjA1NSwgMi40KSA6IGcgLyAxMi45MjtcbiAgICBjb25zdCBiTCA9IGIgPiAwLjA0MDQ1ID8gTWF0aC5wb3coKGIgKyAwLjA1NSkgLyAxLjA1NSwgMi40KSA6IGIgLyAxMi45MjsgLy8gQ29udmVydCB0byB0aGUgeHl6IGNvbG9yIHNwYWNlIHdpdGhvdXQgYm91bmRpbmcgdGhlIHZhbHVlc1xuXG4gICAgY29uc3QgeFUgPSAockwgKiAwLjQxMjQgKyBnTCAqIDAuMzU3NiArIGJMICogMC4xODA1KSAvIDAuOTUwNDc7XG4gICAgY29uc3QgeVUgPSAockwgKiAwLjIxMjYgKyBnTCAqIDAuNzE1MiArIGJMICogMC4wNzIyKSAvIDEuMDAwMDA7XG4gICAgY29uc3QgelUgPSAockwgKiAwLjAxOTMgKyBnTCAqIDAuMTE5MiArIGJMICogMC45NTA1KSAvIDEuMDg4ODM7IC8vIEdldCB0aGUgcHJvcGVyIHh5eiB2YWx1ZXMgYnkgYXBwbHlpbmcgdGhlIGJvdW5kaW5nXG5cbiAgICBjb25zdCB4ID0geFUgPiAwLjAwODg1NiA/IE1hdGgucG93KHhVLCAxIC8gMykgOiA3Ljc4NyAqIHhVICsgMTYgLyAxMTY7XG4gICAgY29uc3QgeSA9IHlVID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh5VSwgMSAvIDMpIDogNy43ODcgKiB5VSArIDE2IC8gMTE2O1xuICAgIGNvbnN0IHogPSB6VSA+IDAuMDA4ODU2ID8gTWF0aC5wb3coelUsIDEgLyAzKSA6IDcuNzg3ICogelUgKyAxNiAvIDExNjsgLy8gTWFrZSBhbmQgcmV0dXJuIHRoZSBjb2xvclxuXG4gICAgY29uc3QgY29sb3IgPSBuZXcgQ29sb3IoeCwgeSwgeiwgJ3h5eicpO1xuICAgIHJldHVybiBjb2xvcjtcbiAgfVxuICAvKlxyXG4gIElucHV0IGFuZCBPdXRwdXQgbWV0aG9kc1xyXG4gICovXG5cblxuICBfY2xhbXBlZCgpIHtcbiAgICBjb25zdCB7XG4gICAgICBfYSxcbiAgICAgIF9iLFxuICAgICAgX2NcbiAgICB9ID0gdGhpcy5yZ2IoKTtcbiAgICBjb25zdCB7XG4gICAgICBtYXgsXG4gICAgICBtaW4sXG4gICAgICByb3VuZFxuICAgIH0gPSBNYXRoO1xuXG4gICAgY29uc3QgZm9ybWF0ID0gdiA9PiBtYXgoMCwgbWluKHJvdW5kKHYpLCAyNTUpKTtcblxuICAgIHJldHVybiBbX2EsIF9iLCBfY10ubWFwKGZvcm1hdCk7XG4gIH1cbiAgLypcclxuICBDb25zdHJ1Y3RpbmcgY29sb3JzXHJcbiAgKi9cblxuXG59XG5cbmNsYXNzIFBvaW50IHtcbiAgLy8gSW5pdGlhbGl6ZVxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgdGhpcy5pbml0KC4uLmFyZ3MpO1xuICB9IC8vIENsb25lIHBvaW50XG5cblxuICBjbG9uZSgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMpO1xuICB9XG5cbiAgaW5pdCh4LCB5KSB7XG4gICAgY29uc3QgYmFzZSA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfTsgLy8gZW5zdXJlIHNvdXJjZSBhcyBvYmplY3RcblxuICAgIGNvbnN0IHNvdXJjZSA9IEFycmF5LmlzQXJyYXkoeCkgPyB7XG4gICAgICB4OiB4WzBdLFxuICAgICAgeTogeFsxXVxuICAgIH0gOiB0eXBlb2YgeCA9PT0gJ29iamVjdCcgPyB7XG4gICAgICB4OiB4LngsXG4gICAgICB5OiB4LnlcbiAgICB9IDoge1xuICAgICAgeDogeCxcbiAgICAgIHk6IHlcbiAgICB9OyAvLyBtZXJnZSBzb3VyY2VcblxuICAgIHRoaXMueCA9IHNvdXJjZS54ID09IG51bGwgPyBiYXNlLnggOiBzb3VyY2UueDtcbiAgICB0aGlzLnkgPSBzb3VyY2UueSA9PSBudWxsID8gYmFzZS55IDogc291cmNlLnk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB0b0FycmF5KCkge1xuICAgIHJldHVybiBbdGhpcy54LCB0aGlzLnldO1xuICB9XG5cbiAgdHJhbnNmb3JtKG0pIHtcbiAgICByZXR1cm4gdGhpcy5jbG9uZSgpLnRyYW5zZm9ybU8obSk7XG4gIH0gLy8gVHJhbnNmb3JtIHBvaW50IHdpdGggbWF0cml4XG5cblxuICB0cmFuc2Zvcm1PKG0pIHtcbiAgICBpZiAoIU1hdHJpeC5pc01hdHJpeExpa2UobSkpIHtcbiAgICAgIG0gPSBuZXcgTWF0cml4KG0pO1xuICAgIH1cblxuICAgIGNvbnN0IHtcbiAgICAgIHgsXG4gICAgICB5XG4gICAgfSA9IHRoaXM7IC8vIFBlcmZvcm0gdGhlIG1hdHJpeCBtdWx0aXBsaWNhdGlvblxuXG4gICAgdGhpcy54ID0gbS5hICogeCArIG0uYyAqIHkgKyBtLmU7XG4gICAgdGhpcy55ID0gbS5iICogeCArIG0uZCAqIHkgKyBtLmY7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxufVxuZnVuY3Rpb24gcG9pbnQoeCwgeSkge1xuICByZXR1cm4gbmV3IFBvaW50KHgsIHkpLnRyYW5zZm9ybSh0aGlzLnNjcmVlbkNUTSgpLmludmVyc2UoKSk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlRW5vdWdoKGEsIGIsIHRocmVzaG9sZCkge1xuICByZXR1cm4gTWF0aC5hYnMoYiAtIGEpIDwgKHRocmVzaG9sZCB8fCAxZS02KTtcbn1cblxuY2xhc3MgTWF0cml4IHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHRoaXMuaW5pdCguLi5hcmdzKTtcbiAgfVxuXG4gIHN0YXRpYyBmb3JtYXRUcmFuc2Zvcm1zKG8pIHtcbiAgICAvLyBHZXQgYWxsIG9mIHRoZSBwYXJhbWV0ZXJzIHJlcXVpcmVkIHRvIGZvcm0gdGhlIG1hdHJpeFxuICAgIGNvbnN0IGZsaXBCb3RoID0gby5mbGlwID09PSAnYm90aCcgfHwgby5mbGlwID09PSB0cnVlO1xuICAgIGNvbnN0IGZsaXBYID0gby5mbGlwICYmIChmbGlwQm90aCB8fCBvLmZsaXAgPT09ICd4JykgPyAtMSA6IDE7XG4gICAgY29uc3QgZmxpcFkgPSBvLmZsaXAgJiYgKGZsaXBCb3RoIHx8IG8uZmxpcCA9PT0gJ3knKSA/IC0xIDogMTtcbiAgICBjb25zdCBza2V3WCA9IG8uc2tldyAmJiBvLnNrZXcubGVuZ3RoID8gby5za2V3WzBdIDogaXNGaW5pdGUoby5za2V3KSA/IG8uc2tldyA6IGlzRmluaXRlKG8uc2tld1gpID8gby5za2V3WCA6IDA7XG4gICAgY29uc3Qgc2tld1kgPSBvLnNrZXcgJiYgby5za2V3Lmxlbmd0aCA/IG8uc2tld1sxXSA6IGlzRmluaXRlKG8uc2tldykgPyBvLnNrZXcgOiBpc0Zpbml0ZShvLnNrZXdZKSA/IG8uc2tld1kgOiAwO1xuICAgIGNvbnN0IHNjYWxlWCA9IG8uc2NhbGUgJiYgby5zY2FsZS5sZW5ndGggPyBvLnNjYWxlWzBdICogZmxpcFggOiBpc0Zpbml0ZShvLnNjYWxlKSA/IG8uc2NhbGUgKiBmbGlwWCA6IGlzRmluaXRlKG8uc2NhbGVYKSA/IG8uc2NhbGVYICogZmxpcFggOiBmbGlwWDtcbiAgICBjb25zdCBzY2FsZVkgPSBvLnNjYWxlICYmIG8uc2NhbGUubGVuZ3RoID8gby5zY2FsZVsxXSAqIGZsaXBZIDogaXNGaW5pdGUoby5zY2FsZSkgPyBvLnNjYWxlICogZmxpcFkgOiBpc0Zpbml0ZShvLnNjYWxlWSkgPyBvLnNjYWxlWSAqIGZsaXBZIDogZmxpcFk7XG4gICAgY29uc3Qgc2hlYXIgPSBvLnNoZWFyIHx8IDA7XG4gICAgY29uc3QgdGhldGEgPSBvLnJvdGF0ZSB8fCBvLnRoZXRhIHx8IDA7XG4gICAgY29uc3Qgb3JpZ2luID0gbmV3IFBvaW50KG8ub3JpZ2luIHx8IG8uYXJvdW5kIHx8IG8ub3ggfHwgby5vcmlnaW5YLCBvLm95IHx8IG8ub3JpZ2luWSk7XG4gICAgY29uc3Qgb3ggPSBvcmlnaW4ueDtcbiAgICBjb25zdCBveSA9IG9yaWdpbi55OyAvLyBXZSBuZWVkIFBvaW50IHRvIGJlIGludmFsaWQgaWYgbm90aGluZyB3YXMgcGFzc2VkIGJlY2F1c2Ugd2UgY2Fubm90IGRlZmF1bHQgdG8gMCBoZXJlLiBUaGF0cyB3aHkgTmFOXG5cbiAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb2ludChvLnBvc2l0aW9uIHx8IG8ucHggfHwgby5wb3NpdGlvblggfHwgTmFOLCBvLnB5IHx8IG8ucG9zaXRpb25ZIHx8IE5hTik7XG4gICAgY29uc3QgcHggPSBwb3NpdGlvbi54O1xuICAgIGNvbnN0IHB5ID0gcG9zaXRpb24ueTtcbiAgICBjb25zdCB0cmFuc2xhdGUgPSBuZXcgUG9pbnQoby50cmFuc2xhdGUgfHwgby50eCB8fCBvLnRyYW5zbGF0ZVgsIG8udHkgfHwgby50cmFuc2xhdGVZKTtcbiAgICBjb25zdCB0eCA9IHRyYW5zbGF0ZS54O1xuICAgIGNvbnN0IHR5ID0gdHJhbnNsYXRlLnk7XG4gICAgY29uc3QgcmVsYXRpdmUgPSBuZXcgUG9pbnQoby5yZWxhdGl2ZSB8fCBvLnJ4IHx8IG8ucmVsYXRpdmVYLCBvLnJ5IHx8IG8ucmVsYXRpdmVZKTtcbiAgICBjb25zdCByeCA9IHJlbGF0aXZlLng7XG4gICAgY29uc3QgcnkgPSByZWxhdGl2ZS55OyAvLyBQb3B1bGF0ZSBhbGwgb2YgdGhlIHZhbHVlc1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHNjYWxlWCxcbiAgICAgIHNjYWxlWSxcbiAgICAgIHNrZXdYLFxuICAgICAgc2tld1ksXG4gICAgICBzaGVhcixcbiAgICAgIHRoZXRhLFxuICAgICAgcngsXG4gICAgICByeSxcbiAgICAgIHR4LFxuICAgICAgdHksXG4gICAgICBveCxcbiAgICAgIG95LFxuICAgICAgcHgsXG4gICAgICBweVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZnJvbUFycmF5KGEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYTogYVswXSxcbiAgICAgIGI6IGFbMV0sXG4gICAgICBjOiBhWzJdLFxuICAgICAgZDogYVszXSxcbiAgICAgIGU6IGFbNF0sXG4gICAgICBmOiBhWzVdXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBpc01hdHJpeExpa2Uobykge1xuICAgIHJldHVybiBvLmEgIT0gbnVsbCB8fCBvLmIgIT0gbnVsbCB8fCBvLmMgIT0gbnVsbCB8fCBvLmQgIT0gbnVsbCB8fCBvLmUgIT0gbnVsbCB8fCBvLmYgIT0gbnVsbDtcbiAgfSAvLyBsZWZ0IG1hdHJpeCwgcmlnaHQgbWF0cml4LCB0YXJnZXQgbWF0cml4IHdoaWNoIGlzIG92ZXJ3cml0dGVuXG5cblxuICBzdGF0aWMgbWF0cml4TXVsdGlwbHkobCwgciwgbykge1xuICAgIC8vIFdvcmsgb3V0IHRoZSBwcm9kdWN0IGRpcmVjdGx5XG4gICAgY29uc3QgYSA9IGwuYSAqIHIuYSArIGwuYyAqIHIuYjtcbiAgICBjb25zdCBiID0gbC5iICogci5hICsgbC5kICogci5iO1xuICAgIGNvbnN0IGMgPSBsLmEgKiByLmMgKyBsLmMgKiByLmQ7XG4gICAgY29uc3QgZCA9IGwuYiAqIHIuYyArIGwuZCAqIHIuZDtcbiAgICBjb25zdCBlID0gbC5lICsgbC5hICogci5lICsgbC5jICogci5mO1xuICAgIGNvbnN0IGYgPSBsLmYgKyBsLmIgKiByLmUgKyBsLmQgKiByLmY7IC8vIG1ha2Ugc3VyZSB0byB1c2UgbG9jYWwgdmFyaWFibGVzIGJlY2F1c2UgbC9yIGFuZCBvIGNvdWxkIGJlIHRoZSBzYW1lXG5cbiAgICBvLmEgPSBhO1xuICAgIG8uYiA9IGI7XG4gICAgby5jID0gYztcbiAgICBvLmQgPSBkO1xuICAgIG8uZSA9IGU7XG4gICAgby5mID0gZjtcbiAgICByZXR1cm4gbztcbiAgfVxuXG4gIGFyb3VuZChjeCwgY3ksIG1hdHJpeCkge1xuICAgIHJldHVybiB0aGlzLmNsb25lKCkuYXJvdW5kTyhjeCwgY3ksIG1hdHJpeCk7XG4gIH0gLy8gVHJhbnNmb3JtIGFyb3VuZCBhIGNlbnRlciBwb2ludFxuXG5cbiAgYXJvdW5kTyhjeCwgY3ksIG1hdHJpeCkge1xuICAgIGNvbnN0IGR4ID0gY3ggfHwgMDtcbiAgICBjb25zdCBkeSA9IGN5IHx8IDA7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlTygtZHgsIC1keSkubG11bHRpcGx5TyhtYXRyaXgpLnRyYW5zbGF0ZU8oZHgsIGR5KTtcbiAgfSAvLyBDbG9uZXMgdGhpcyBtYXRyaXhcblxuXG4gIGNsb25lKCkge1xuICAgIHJldHVybiBuZXcgTWF0cml4KHRoaXMpO1xuICB9IC8vIERlY29tcG9zZXMgdGhpcyBtYXRyaXggaW50byBpdHMgYWZmaW5lIHBhcmFtZXRlcnNcblxuXG4gIGRlY29tcG9zZShjeCA9IDAsIGN5ID0gMCkge1xuICAgIC8vIEdldCB0aGUgcGFyYW1ldGVycyBmcm9tIHRoZSBtYXRyaXhcbiAgICBjb25zdCBhID0gdGhpcy5hO1xuICAgIGNvbnN0IGIgPSB0aGlzLmI7XG4gICAgY29uc3QgYyA9IHRoaXMuYztcbiAgICBjb25zdCBkID0gdGhpcy5kO1xuICAgIGNvbnN0IGUgPSB0aGlzLmU7XG4gICAgY29uc3QgZiA9IHRoaXMuZjsgLy8gRmlndXJlIG91dCBpZiB0aGUgd2luZGluZyBkaXJlY3Rpb24gaXMgY2xvY2t3aXNlIG9yIGNvdW50ZXJjbG9ja3dpc2VcblxuICAgIGNvbnN0IGRldGVybWluYW50ID0gYSAqIGQgLSBiICogYztcbiAgICBjb25zdCBjY3cgPSBkZXRlcm1pbmFudCA+IDAgPyAxIDogLTE7IC8vIFNpbmNlIHdlIG9ubHkgc2hlYXIgaW4geCwgd2UgY2FuIHVzZSB0aGUgeCBiYXNpcyB0byBnZXQgdGhlIHggc2NhbGVcbiAgICAvLyBhbmQgdGhlIHJvdGF0aW9uIG9mIHRoZSByZXN1bHRpbmcgbWF0cml4XG5cbiAgICBjb25zdCBzeCA9IGNjdyAqIE1hdGguc3FydChhICogYSArIGIgKiBiKTtcbiAgICBjb25zdCB0aGV0YVJhZCA9IE1hdGguYXRhbjIoY2N3ICogYiwgY2N3ICogYSk7XG4gICAgY29uc3QgdGhldGEgPSAxODAgLyBNYXRoLlBJICogdGhldGFSYWQ7XG4gICAgY29uc3QgY3QgPSBNYXRoLmNvcyh0aGV0YVJhZCk7XG4gICAgY29uc3Qgc3QgPSBNYXRoLnNpbih0aGV0YVJhZCk7IC8vIFdlIGNhbiB0aGVuIHNvbHZlIHRoZSB5IGJhc2lzIHZlY3RvciBzaW11bHRhbmVvdXNseSB0byBnZXQgdGhlIG90aGVyXG4gICAgLy8gdHdvIGFmZmluZSBwYXJhbWV0ZXJzIGRpcmVjdGx5IGZyb20gdGhlc2UgcGFyYW1ldGVyc1xuXG4gICAgY29uc3QgbGFtID0gKGEgKiBjICsgYiAqIGQpIC8gZGV0ZXJtaW5hbnQ7XG4gICAgY29uc3Qgc3kgPSBjICogc3ggLyAobGFtICogYSAtIGIpIHx8IGQgKiBzeCAvIChsYW0gKiBiICsgYSk7IC8vIFVzZSB0aGUgdHJhbnNsYXRpb25zXG5cbiAgICBjb25zdCB0eCA9IGUgLSBjeCArIGN4ICogY3QgKiBzeCArIGN5ICogKGxhbSAqIGN0ICogc3ggLSBzdCAqIHN5KTtcbiAgICBjb25zdCB0eSA9IGYgLSBjeSArIGN4ICogc3QgKiBzeCArIGN5ICogKGxhbSAqIHN0ICogc3ggKyBjdCAqIHN5KTsgLy8gQ29uc3RydWN0IHRoZSBkZWNvbXBvc2l0aW9uIGFuZCByZXR1cm4gaXRcblxuICAgIHJldHVybiB7XG4gICAgICAvLyBSZXR1cm4gdGhlIGFmZmluZSBwYXJhbWV0ZXJzXG4gICAgICBzY2FsZVg6IHN4LFxuICAgICAgc2NhbGVZOiBzeSxcbiAgICAgIHNoZWFyOiBsYW0sXG4gICAgICByb3RhdGU6IHRoZXRhLFxuICAgICAgdHJhbnNsYXRlWDogdHgsXG4gICAgICB0cmFuc2xhdGVZOiB0eSxcbiAgICAgIG9yaWdpblg6IGN4LFxuICAgICAgb3JpZ2luWTogY3ksXG4gICAgICAvLyBSZXR1cm4gdGhlIG1hdHJpeCBwYXJhbWV0ZXJzXG4gICAgICBhOiB0aGlzLmEsXG4gICAgICBiOiB0aGlzLmIsXG4gICAgICBjOiB0aGlzLmMsXG4gICAgICBkOiB0aGlzLmQsXG4gICAgICBlOiB0aGlzLmUsXG4gICAgICBmOiB0aGlzLmZcbiAgICB9O1xuICB9IC8vIENoZWNrIGlmIHR3byBtYXRyaWNlcyBhcmUgZXF1YWxcblxuXG4gIGVxdWFscyhvdGhlcikge1xuICAgIGlmIChvdGhlciA9PT0gdGhpcykgcmV0dXJuIHRydWU7XG4gICAgY29uc3QgY29tcCA9IG5ldyBNYXRyaXgob3RoZXIpO1xuICAgIHJldHVybiBjbG9zZUVub3VnaCh0aGlzLmEsIGNvbXAuYSkgJiYgY2xvc2VFbm91Z2godGhpcy5iLCBjb21wLmIpICYmIGNsb3NlRW5vdWdoKHRoaXMuYywgY29tcC5jKSAmJiBjbG9zZUVub3VnaCh0aGlzLmQsIGNvbXAuZCkgJiYgY2xvc2VFbm91Z2godGhpcy5lLCBjb21wLmUpICYmIGNsb3NlRW5vdWdoKHRoaXMuZiwgY29tcC5mKTtcbiAgfSAvLyBGbGlwIG1hdHJpeCBvbiB4IG9yIHksIGF0IGEgZ2l2ZW4gb2Zmc2V0XG5cblxuICBmbGlwKGF4aXMsIGFyb3VuZCkge1xuICAgIHJldHVybiB0aGlzLmNsb25lKCkuZmxpcE8oYXhpcywgYXJvdW5kKTtcbiAgfVxuXG4gIGZsaXBPKGF4aXMsIGFyb3VuZCkge1xuICAgIHJldHVybiBheGlzID09PSAneCcgPyB0aGlzLnNjYWxlTygtMSwgMSwgYXJvdW5kLCAwKSA6IGF4aXMgPT09ICd5JyA/IHRoaXMuc2NhbGVPKDEsIC0xLCAwLCBhcm91bmQpIDogdGhpcy5zY2FsZU8oLTEsIC0xLCBheGlzLCBhcm91bmQgfHwgYXhpcyk7IC8vIERlZmluZSBhbiB4LCB5IGZsaXAgcG9pbnRcbiAgfSAvLyBJbml0aWFsaXplXG5cblxuICBpbml0KHNvdXJjZSkge1xuICAgIGNvbnN0IGJhc2UgPSBNYXRyaXguZnJvbUFycmF5KFsxLCAwLCAwLCAxLCAwLCAwXSk7IC8vIGVuc3VyZSBzb3VyY2UgYXMgb2JqZWN0XG5cbiAgICBzb3VyY2UgPSBzb3VyY2UgaW5zdGFuY2VvZiBFbGVtZW50ID8gc291cmNlLm1hdHJpeGlmeSgpIDogdHlwZW9mIHNvdXJjZSA9PT0gJ3N0cmluZycgPyBNYXRyaXguZnJvbUFycmF5KHNvdXJjZS5zcGxpdChkZWxpbWl0ZXIpLm1hcChwYXJzZUZsb2F0KSkgOiBBcnJheS5pc0FycmF5KHNvdXJjZSkgPyBNYXRyaXguZnJvbUFycmF5KHNvdXJjZSkgOiB0eXBlb2Ygc291cmNlID09PSAnb2JqZWN0JyAmJiBNYXRyaXguaXNNYXRyaXhMaWtlKHNvdXJjZSkgPyBzb3VyY2UgOiB0eXBlb2Ygc291cmNlID09PSAnb2JqZWN0JyA/IG5ldyBNYXRyaXgoKS50cmFuc2Zvcm0oc291cmNlKSA6IGFyZ3VtZW50cy5sZW5ndGggPT09IDYgPyBNYXRyaXguZnJvbUFycmF5KFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkgOiBiYXNlOyAvLyBNZXJnZSB0aGUgc291cmNlIG1hdHJpeCB3aXRoIHRoZSBiYXNlIG1hdHJpeFxuXG4gICAgdGhpcy5hID0gc291cmNlLmEgIT0gbnVsbCA/IHNvdXJjZS5hIDogYmFzZS5hO1xuICAgIHRoaXMuYiA9IHNvdXJjZS5iICE9IG51bGwgPyBzb3VyY2UuYiA6IGJhc2UuYjtcbiAgICB0aGlzLmMgPSBzb3VyY2UuYyAhPSBudWxsID8gc291cmNlLmMgOiBiYXNlLmM7XG4gICAgdGhpcy5kID0gc291cmNlLmQgIT0gbnVsbCA/IHNvdXJjZS5kIDogYmFzZS5kO1xuICAgIHRoaXMuZSA9IHNvdXJjZS5lICE9IG51bGwgPyBzb3VyY2UuZSA6IGJhc2UuZTtcbiAgICB0aGlzLmYgPSBzb3VyY2UuZiAhPSBudWxsID8gc291cmNlLmYgOiBiYXNlLmY7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpbnZlcnNlKCkge1xuICAgIHJldHVybiB0aGlzLmNsb25lKCkuaW52ZXJzZU8oKTtcbiAgfSAvLyBJbnZlcnNlcyBtYXRyaXhcblxuXG4gIGludmVyc2VPKCkge1xuICAgIC8vIEdldCB0aGUgY3VycmVudCBwYXJhbWV0ZXJzIG91dCBvZiB0aGUgbWF0cml4XG4gICAgY29uc3QgYSA9IHRoaXMuYTtcbiAgICBjb25zdCBiID0gdGhpcy5iO1xuICAgIGNvbnN0IGMgPSB0aGlzLmM7XG4gICAgY29uc3QgZCA9IHRoaXMuZDtcbiAgICBjb25zdCBlID0gdGhpcy5lO1xuICAgIGNvbnN0IGYgPSB0aGlzLmY7IC8vIEludmVydCB0aGUgMngyIG1hdHJpeCBpbiB0aGUgdG9wIGxlZnRcblxuICAgIGNvbnN0IGRldCA9IGEgKiBkIC0gYiAqIGM7XG4gICAgaWYgKCFkZXQpIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGludmVydCAnICsgdGhpcyk7IC8vIENhbGN1bGF0ZSB0aGUgdG9wIDJ4MiBtYXRyaXhcblxuICAgIGNvbnN0IG5hID0gZCAvIGRldDtcbiAgICBjb25zdCBuYiA9IC1iIC8gZGV0O1xuICAgIGNvbnN0IG5jID0gLWMgLyBkZXQ7XG4gICAgY29uc3QgbmQgPSBhIC8gZGV0OyAvLyBBcHBseSB0aGUgaW52ZXJ0ZWQgbWF0cml4IHRvIHRoZSB0b3AgcmlnaHRcblxuICAgIGNvbnN0IG5lID0gLShuYSAqIGUgKyBuYyAqIGYpO1xuICAgIGNvbnN0IG5mID0gLShuYiAqIGUgKyBuZCAqIGYpOyAvLyBDb25zdHJ1Y3QgdGhlIGludmVydGVkIG1hdHJpeFxuXG4gICAgdGhpcy5hID0gbmE7XG4gICAgdGhpcy5iID0gbmI7XG4gICAgdGhpcy5jID0gbmM7XG4gICAgdGhpcy5kID0gbmQ7XG4gICAgdGhpcy5lID0gbmU7XG4gICAgdGhpcy5mID0gbmY7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBsbXVsdGlwbHkobWF0cml4KSB7XG4gICAgcmV0dXJuIHRoaXMuY2xvbmUoKS5sbXVsdGlwbHlPKG1hdHJpeCk7XG4gIH1cblxuICBsbXVsdGlwbHlPKG1hdHJpeCkge1xuICAgIGNvbnN0IHIgPSB0aGlzO1xuICAgIGNvbnN0IGwgPSBtYXRyaXggaW5zdGFuY2VvZiBNYXRyaXggPyBtYXRyaXggOiBuZXcgTWF0cml4KG1hdHJpeCk7XG4gICAgcmV0dXJuIE1hdHJpeC5tYXRyaXhNdWx0aXBseShsLCByLCB0aGlzKTtcbiAgfSAvLyBMZWZ0IG11bHRpcGxpZXMgYnkgdGhlIGdpdmVuIG1hdHJpeFxuXG5cbiAgbXVsdGlwbHkobWF0cml4KSB7XG4gICAgcmV0dXJuIHRoaXMuY2xvbmUoKS5tdWx0aXBseU8obWF0cml4KTtcbiAgfVxuXG4gIG11bHRpcGx5TyhtYXRyaXgpIHtcbiAgICAvLyBHZXQgdGhlIG1hdHJpY2VzXG4gICAgY29uc3QgbCA9IHRoaXM7XG4gICAgY29uc3QgciA9IG1hdHJpeCBpbnN0YW5jZW9mIE1hdHJpeCA/IG1hdHJpeCA6IG5ldyBNYXRyaXgobWF0cml4KTtcbiAgICByZXR1cm4gTWF0cml4Lm1hdHJpeE11bHRpcGx5KGwsIHIsIHRoaXMpO1xuICB9IC8vIFJvdGF0ZSBtYXRyaXhcblxuXG4gIHJvdGF0ZShyLCBjeCwgY3kpIHtcbiAgICByZXR1cm4gdGhpcy5jbG9uZSgpLnJvdGF0ZU8ociwgY3gsIGN5KTtcbiAgfVxuXG4gIHJvdGF0ZU8ociwgY3ggPSAwLCBjeSA9IDApIHtcbiAgICAvLyBDb252ZXJ0IGRlZ3JlZXMgdG8gcmFkaWFuc1xuICAgIHIgPSByYWRpYW5zKHIpO1xuICAgIGNvbnN0IGNvcyA9IE1hdGguY29zKHIpO1xuICAgIGNvbnN0IHNpbiA9IE1hdGguc2luKHIpO1xuICAgIGNvbnN0IHtcbiAgICAgIGEsXG4gICAgICBiLFxuICAgICAgYyxcbiAgICAgIGQsXG4gICAgICBlLFxuICAgICAgZlxuICAgIH0gPSB0aGlzO1xuICAgIHRoaXMuYSA9IGEgKiBjb3MgLSBiICogc2luO1xuICAgIHRoaXMuYiA9IGIgKiBjb3MgKyBhICogc2luO1xuICAgIHRoaXMuYyA9IGMgKiBjb3MgLSBkICogc2luO1xuICAgIHRoaXMuZCA9IGQgKiBjb3MgKyBjICogc2luO1xuICAgIHRoaXMuZSA9IGUgKiBjb3MgLSBmICogc2luICsgY3kgKiBzaW4gLSBjeCAqIGNvcyArIGN4O1xuICAgIHRoaXMuZiA9IGYgKiBjb3MgKyBlICogc2luIC0gY3ggKiBzaW4gLSBjeSAqIGNvcyArIGN5O1xuICAgIHJldHVybiB0aGlzO1xuICB9IC8vIFNjYWxlIG1hdHJpeFxuXG5cbiAgc2NhbGUoeCwgeSwgY3gsIGN5KSB7XG4gICAgcmV0dXJuIHRoaXMuY2xvbmUoKS5zY2FsZU8oLi4uYXJndW1lbnRzKTtcbiAgfVxuXG4gIHNjYWxlTyh4LCB5ID0geCwgY3ggPSAwLCBjeSA9IDApIHtcbiAgICAvLyBTdXBwb3J0IHVuaWZvcm0gc2NhbGluZ1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAzKSB7XG4gICAgICBjeSA9IGN4O1xuICAgICAgY3ggPSB5O1xuICAgICAgeSA9IHg7XG4gICAgfVxuXG4gICAgY29uc3Qge1xuICAgICAgYSxcbiAgICAgIGIsXG4gICAgICBjLFxuICAgICAgZCxcbiAgICAgIGUsXG4gICAgICBmXG4gICAgfSA9IHRoaXM7XG4gICAgdGhpcy5hID0gYSAqIHg7XG4gICAgdGhpcy5iID0gYiAqIHk7XG4gICAgdGhpcy5jID0gYyAqIHg7XG4gICAgdGhpcy5kID0gZCAqIHk7XG4gICAgdGhpcy5lID0gZSAqIHggLSBjeCAqIHggKyBjeDtcbiAgICB0aGlzLmYgPSBmICogeSAtIGN5ICogeSArIGN5O1xuICAgIHJldHVybiB0aGlzO1xuICB9IC8vIFNoZWFyIG1hdHJpeFxuXG5cbiAgc2hlYXIoYSwgY3gsIGN5KSB7XG4gICAgcmV0dXJuIHRoaXMuY2xvbmUoKS5zaGVhck8oYSwgY3gsIGN5KTtcbiAgfVxuXG4gIHNoZWFyTyhseCwgY3ggPSAwLCBjeSA9IDApIHtcbiAgICBjb25zdCB7XG4gICAgICBhLFxuICAgICAgYixcbiAgICAgIGMsXG4gICAgICBkLFxuICAgICAgZSxcbiAgICAgIGZcbiAgICB9ID0gdGhpcztcbiAgICB0aGlzLmEgPSBhICsgYiAqIGx4O1xuICAgIHRoaXMuYyA9IGMgKyBkICogbHg7XG4gICAgdGhpcy5lID0gZSArIGYgKiBseCAtIGN5ICogbHg7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0gLy8gU2tldyBNYXRyaXhcblxuXG4gIHNrZXcoeCwgeSwgY3gsIGN5KSB7XG4gICAgcmV0dXJuIHRoaXMuY2xvbmUoKS5za2V3TyguLi5hcmd1bWVudHMpO1xuICB9XG5cbiAgc2tld08oeCwgeSA9IHgsIGN4ID0gMCwgY3kgPSAwKSB7XG4gICAgLy8gc3VwcG9ydCB1bmlmb3JtYWwgc2tld1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAzKSB7XG4gICAgICBjeSA9IGN4O1xuICAgICAgY3ggPSB5O1xuICAgICAgeSA9IHg7XG4gICAgfSAvLyBDb252ZXJ0IGRlZ3JlZXMgdG8gcmFkaWFuc1xuXG5cbiAgICB4ID0gcmFkaWFucyh4KTtcbiAgICB5ID0gcmFkaWFucyh5KTtcbiAgICBjb25zdCBseCA9IE1hdGgudGFuKHgpO1xuICAgIGNvbnN0IGx5ID0gTWF0aC50YW4oeSk7XG4gICAgY29uc3Qge1xuICAgICAgYSxcbiAgICAgIGIsXG4gICAgICBjLFxuICAgICAgZCxcbiAgICAgIGUsXG4gICAgICBmXG4gICAgfSA9IHRoaXM7XG4gICAgdGhpcy5hID0gYSArIGIgKiBseDtcbiAgICB0aGlzLmIgPSBiICsgYSAqIGx5O1xuICAgIHRoaXMuYyA9IGMgKyBkICogbHg7XG4gICAgdGhpcy5kID0gZCArIGMgKiBseTtcbiAgICB0aGlzLmUgPSBlICsgZiAqIGx4IC0gY3kgKiBseDtcbiAgICB0aGlzLmYgPSBmICsgZSAqIGx5IC0gY3ggKiBseTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSAvLyBTa2V3WFxuXG5cbiAgc2tld1goeCwgY3gsIGN5KSB7XG4gICAgcmV0dXJuIHRoaXMuc2tldyh4LCAwLCBjeCwgY3kpO1xuICB9IC8vIFNrZXdZXG5cblxuICBza2V3WSh5LCBjeCwgY3kpIHtcbiAgICByZXR1cm4gdGhpcy5za2V3KDAsIHksIGN4LCBjeSk7XG4gIH1cblxuICB0b0FycmF5KCkge1xuICAgIHJldHVybiBbdGhpcy5hLCB0aGlzLmIsIHRoaXMuYywgdGhpcy5kLCB0aGlzLmUsIHRoaXMuZl07XG4gIH0gLy8gQ29udmVydCBtYXRyaXggdG8gc3RyaW5nXG5cblxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gJ21hdHJpeCgnICsgdGhpcy5hICsgJywnICsgdGhpcy5iICsgJywnICsgdGhpcy5jICsgJywnICsgdGhpcy5kICsgJywnICsgdGhpcy5lICsgJywnICsgdGhpcy5mICsgJyknO1xuICB9IC8vIFRyYW5zZm9ybSBhIG1hdHJpeCBpbnRvIGFub3RoZXIgbWF0cml4IGJ5IG1hbmlwdWxhdGluZyB0aGUgc3BhY2VcblxuXG4gIHRyYW5zZm9ybShvKSB7XG4gICAgLy8gQ2hlY2sgaWYgbyBpcyBhIG1hdHJpeCBhbmQgdGhlbiBsZWZ0IG11bHRpcGx5IGl0IGRpcmVjdGx5XG4gICAgaWYgKE1hdHJpeC5pc01hdHJpeExpa2UobykpIHtcbiAgICAgIGNvbnN0IG1hdHJpeCA9IG5ldyBNYXRyaXgobyk7XG4gICAgICByZXR1cm4gbWF0cml4Lm11bHRpcGx5Tyh0aGlzKTtcbiAgICB9IC8vIEdldCB0aGUgcHJvcG9zZWQgdHJhbnNmb3JtYXRpb25zIGFuZCB0aGUgY3VycmVudCB0cmFuc2Zvcm1hdGlvbnNcblxuXG4gICAgY29uc3QgdCA9IE1hdHJpeC5mb3JtYXRUcmFuc2Zvcm1zKG8pO1xuICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzO1xuICAgIGNvbnN0IHtcbiAgICAgIHg6IG94LFxuICAgICAgeTogb3lcbiAgICB9ID0gbmV3IFBvaW50KHQub3gsIHQub3kpLnRyYW5zZm9ybShjdXJyZW50KTsgLy8gQ29uc3RydWN0IHRoZSByZXN1bHRpbmcgbWF0cml4XG5cbiAgICBjb25zdCB0cmFuc2Zvcm1lciA9IG5ldyBNYXRyaXgoKS50cmFuc2xhdGVPKHQucngsIHQucnkpLmxtdWx0aXBseU8oY3VycmVudCkudHJhbnNsYXRlTygtb3gsIC1veSkuc2NhbGVPKHQuc2NhbGVYLCB0LnNjYWxlWSkuc2tld08odC5za2V3WCwgdC5za2V3WSkuc2hlYXJPKHQuc2hlYXIpLnJvdGF0ZU8odC50aGV0YSkudHJhbnNsYXRlTyhveCwgb3kpOyAvLyBJZiB3ZSB3YW50IHRoZSBvcmlnaW4gYXQgYSBwYXJ0aWN1bGFyIHBsYWNlLCB3ZSBmb3JjZSBpdCB0aGVyZVxuXG4gICAgaWYgKGlzRmluaXRlKHQucHgpIHx8IGlzRmluaXRlKHQucHkpKSB7XG4gICAgICBjb25zdCBvcmlnaW4gPSBuZXcgUG9pbnQob3gsIG95KS50cmFuc2Zvcm0odHJhbnNmb3JtZXIpOyAvLyBUT0RPOiBSZXBsYWNlIHQucHggd2l0aCBpc0Zpbml0ZSh0LnB4KVxuICAgICAgLy8gRG9lc250IHdvcmsgYmVjYXVzZSB0LnB4IGlzIGFsc28gMCBpZiBpdCB3YXNudCBwYXNzZWRcblxuICAgICAgY29uc3QgZHggPSBpc0Zpbml0ZSh0LnB4KSA/IHQucHggLSBvcmlnaW4ueCA6IDA7XG4gICAgICBjb25zdCBkeSA9IGlzRmluaXRlKHQucHkpID8gdC5weSAtIG9yaWdpbi55IDogMDtcbiAgICAgIHRyYW5zZm9ybWVyLnRyYW5zbGF0ZU8oZHgsIGR5KTtcbiAgICB9IC8vIFRyYW5zbGF0ZSBub3cgYWZ0ZXIgcG9zaXRpb25pbmdcblxuXG4gICAgdHJhbnNmb3JtZXIudHJhbnNsYXRlTyh0LnR4LCB0LnR5KTtcbiAgICByZXR1cm4gdHJhbnNmb3JtZXI7XG4gIH0gLy8gVHJhbnNsYXRlIG1hdHJpeFxuXG5cbiAgdHJhbnNsYXRlKHgsIHkpIHtcbiAgICByZXR1cm4gdGhpcy5jbG9uZSgpLnRyYW5zbGF0ZU8oeCwgeSk7XG4gIH1cblxuICB0cmFuc2xhdGVPKHgsIHkpIHtcbiAgICB0aGlzLmUgKz0geCB8fCAwO1xuICAgIHRoaXMuZiArPSB5IHx8IDA7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB2YWx1ZU9mKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhOiB0aGlzLmEsXG4gICAgICBiOiB0aGlzLmIsXG4gICAgICBjOiB0aGlzLmMsXG4gICAgICBkOiB0aGlzLmQsXG4gICAgICBlOiB0aGlzLmUsXG4gICAgICBmOiB0aGlzLmZcbiAgICB9O1xuICB9XG5cbn1cbmZ1bmN0aW9uIGN0bSgpIHtcbiAgcmV0dXJuIG5ldyBNYXRyaXgodGhpcy5ub2RlLmdldENUTSgpKTtcbn1cbmZ1bmN0aW9uIHNjcmVlbkNUTSgpIHtcbiAgLyogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTM0NDUzN1xyXG4gICAgIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2UgRkYgZG9lcyBub3QgcmV0dXJuIHRoZSB0cmFuc2Zvcm1hdGlvbiBtYXRyaXhcclxuICAgICBmb3IgdGhlIGlubmVyIGNvb3JkaW5hdGUgc3lzdGVtIHdoZW4gZ2V0U2NyZWVuQ1RNKCkgaXMgY2FsbGVkIG9uIG5lc3RlZCBzdmdzLlxyXG4gICAgIEhvd2V2ZXIgYWxsIG90aGVyIEJyb3dzZXJzIGRvIHRoYXQgKi9cbiAgaWYgKHR5cGVvZiB0aGlzLmlzUm9vdCA9PT0gJ2Z1bmN0aW9uJyAmJiAhdGhpcy5pc1Jvb3QoKSkge1xuICAgIGNvbnN0IHJlY3QgPSB0aGlzLnJlY3QoMSwgMSk7XG4gICAgY29uc3QgbSA9IHJlY3Qubm9kZS5nZXRTY3JlZW5DVE0oKTtcbiAgICByZWN0LnJlbW92ZSgpO1xuICAgIHJldHVybiBuZXcgTWF0cml4KG0pO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBNYXRyaXgodGhpcy5ub2RlLmdldFNjcmVlbkNUTSgpKTtcbn1cbnJlZ2lzdGVyKE1hdHJpeCwgJ01hdHJpeCcpO1xuXG5mdW5jdGlvbiBwYXJzZXIoKSB7XG4gIC8vIFJldXNlIGNhY2hlZCBlbGVtZW50IGlmIHBvc3NpYmxlXG4gIGlmICghcGFyc2VyLm5vZGVzKSB7XG4gICAgY29uc3Qgc3ZnID0gbWFrZUluc3RhbmNlKCkuc2l6ZSgyLCAwKTtcbiAgICBzdmcubm9kZS5zdHlsZS5jc3NUZXh0ID0gWydvcGFjaXR5OiAwJywgJ3Bvc2l0aW9uOiBhYnNvbHV0ZScsICdsZWZ0OiAtMTAwJScsICd0b3A6IC0xMDAlJywgJ292ZXJmbG93OiBoaWRkZW4nXS5qb2luKCc7Jyk7XG4gICAgc3ZnLmF0dHIoJ2ZvY3VzYWJsZScsICdmYWxzZScpO1xuICAgIHN2Zy5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgY29uc3QgcGF0aCA9IHN2Zy5wYXRoKCkubm9kZTtcbiAgICBwYXJzZXIubm9kZXMgPSB7XG4gICAgICBzdmcsXG4gICAgICBwYXRoXG4gICAgfTtcbiAgfVxuXG4gIGlmICghcGFyc2VyLm5vZGVzLnN2Zy5ub2RlLnBhcmVudE5vZGUpIHtcbiAgICBjb25zdCBiID0gZ2xvYmFscy5kb2N1bWVudC5ib2R5IHx8IGdsb2JhbHMuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIHBhcnNlci5ub2Rlcy5zdmcuYWRkVG8oYik7XG4gIH1cblxuICByZXR1cm4gcGFyc2VyLm5vZGVzO1xufVxuXG5mdW5jdGlvbiBpc051bGxlZEJveChib3gpIHtcbiAgcmV0dXJuICFib3gud2lkdGggJiYgIWJveC5oZWlnaHQgJiYgIWJveC54ICYmICFib3gueTtcbn1cbmZ1bmN0aW9uIGRvbUNvbnRhaW5zKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUgPT09IGdsb2JhbHMuZG9jdW1lbnQgfHwgKGdsb2JhbHMuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNvbnRhaW5zIHx8IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgLy8gVGhpcyBpcyBJRSAtIGl0IGRvZXMgbm90IHN1cHBvcnQgY29udGFpbnMoKSBmb3IgdG9wLWxldmVsIFNWR3NcbiAgICB3aGlsZSAobm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlID09PSBnbG9iYWxzLmRvY3VtZW50O1xuICB9KS5jYWxsKGdsb2JhbHMuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBub2RlKTtcbn1cbmNsYXNzIEJveCB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICB0aGlzLmluaXQoLi4uYXJncyk7XG4gIH1cblxuICBhZGRPZmZzZXQoKSB7XG4gICAgLy8gb2Zmc2V0IGJ5IHdpbmRvdyBzY3JvbGwgcG9zaXRpb24sIGJlY2F1c2UgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGNoYW5nZXMgd2hlbiB3aW5kb3cgaXMgc2Nyb2xsZWRcbiAgICB0aGlzLnggKz0gZ2xvYmFscy53aW5kb3cucGFnZVhPZmZzZXQ7XG4gICAgdGhpcy55ICs9IGdsb2JhbHMud2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgIHJldHVybiBuZXcgQm94KHRoaXMpO1xuICB9XG5cbiAgaW5pdChzb3VyY2UpIHtcbiAgICBjb25zdCBiYXNlID0gWzAsIDAsIDAsIDBdO1xuICAgIHNvdXJjZSA9IHR5cGVvZiBzb3VyY2UgPT09ICdzdHJpbmcnID8gc291cmNlLnNwbGl0KGRlbGltaXRlcikubWFwKHBhcnNlRmxvYXQpIDogQXJyYXkuaXNBcnJheShzb3VyY2UpID8gc291cmNlIDogdHlwZW9mIHNvdXJjZSA9PT0gJ29iamVjdCcgPyBbc291cmNlLmxlZnQgIT0gbnVsbCA/IHNvdXJjZS5sZWZ0IDogc291cmNlLngsIHNvdXJjZS50b3AgIT0gbnVsbCA/IHNvdXJjZS50b3AgOiBzb3VyY2UueSwgc291cmNlLndpZHRoLCBzb3VyY2UuaGVpZ2h0XSA6IGFyZ3VtZW50cy5sZW5ndGggPT09IDQgPyBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykgOiBiYXNlO1xuICAgIHRoaXMueCA9IHNvdXJjZVswXSB8fCAwO1xuICAgIHRoaXMueSA9IHNvdXJjZVsxXSB8fCAwO1xuICAgIHRoaXMud2lkdGggPSB0aGlzLncgPSBzb3VyY2VbMl0gfHwgMDtcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMuaCA9IHNvdXJjZVszXSB8fCAwOyAvLyBBZGQgbW9yZSBib3VuZGluZyBib3ggcHJvcGVydGllc1xuXG4gICAgdGhpcy54MiA9IHRoaXMueCArIHRoaXMudztcbiAgICB0aGlzLnkyID0gdGhpcy55ICsgdGhpcy5oO1xuICAgIHRoaXMuY3ggPSB0aGlzLnggKyB0aGlzLncgLyAyO1xuICAgIHRoaXMuY3kgPSB0aGlzLnkgKyB0aGlzLmggLyAyO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaXNOdWxsZWQoKSB7XG4gICAgcmV0dXJuIGlzTnVsbGVkQm94KHRoaXMpO1xuICB9IC8vIE1lcmdlIHJlY3QgYm94IHdpdGggYW5vdGhlciwgcmV0dXJuIGEgbmV3IGluc3RhbmNlXG5cblxuICBtZXJnZShib3gpIHtcbiAgICBjb25zdCB4ID0gTWF0aC5taW4odGhpcy54LCBib3gueCk7XG4gICAgY29uc3QgeSA9IE1hdGgubWluKHRoaXMueSwgYm94LnkpO1xuICAgIGNvbnN0IHdpZHRoID0gTWF0aC5tYXgodGhpcy54ICsgdGhpcy53aWR0aCwgYm94LnggKyBib3gud2lkdGgpIC0geDtcbiAgICBjb25zdCBoZWlnaHQgPSBNYXRoLm1heCh0aGlzLnkgKyB0aGlzLmhlaWdodCwgYm94LnkgKyBib3guaGVpZ2h0KSAtIHk7XG4gICAgcmV0dXJuIG5ldyBCb3goeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICB0b0FycmF5KCkge1xuICAgIHJldHVybiBbdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0XTtcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnggKyAnICcgKyB0aGlzLnkgKyAnICcgKyB0aGlzLndpZHRoICsgJyAnICsgdGhpcy5oZWlnaHQ7XG4gIH1cblxuICB0cmFuc2Zvcm0obSkge1xuICAgIGlmICghKG0gaW5zdGFuY2VvZiBNYXRyaXgpKSB7XG4gICAgICBtID0gbmV3IE1hdHJpeChtKTtcbiAgICB9XG5cbiAgICBsZXQgeE1pbiA9IEluZmluaXR5O1xuICAgIGxldCB4TWF4ID0gLUluZmluaXR5O1xuICAgIGxldCB5TWluID0gSW5maW5pdHk7XG4gICAgbGV0IHlNYXggPSAtSW5maW5pdHk7XG4gICAgY29uc3QgcHRzID0gW25ldyBQb2ludCh0aGlzLngsIHRoaXMueSksIG5ldyBQb2ludCh0aGlzLngyLCB0aGlzLnkpLCBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkyKSwgbmV3IFBvaW50KHRoaXMueDIsIHRoaXMueTIpXTtcbiAgICBwdHMuZm9yRWFjaChmdW5jdGlvbiAocCkge1xuICAgICAgcCA9IHAudHJhbnNmb3JtKG0pO1xuICAgICAgeE1pbiA9IE1hdGgubWluKHhNaW4sIHAueCk7XG4gICAgICB4TWF4ID0gTWF0aC5tYXgoeE1heCwgcC54KTtcbiAgICAgIHlNaW4gPSBNYXRoLm1pbih5TWluLCBwLnkpO1xuICAgICAgeU1heCA9IE1hdGgubWF4KHlNYXgsIHAueSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ldyBCb3goeE1pbiwgeU1pbiwgeE1heCAtIHhNaW4sIHlNYXggLSB5TWluKTtcbiAgfVxuXG59XG5cbmZ1bmN0aW9uIGdldEJveChlbCwgZ2V0QkJveEZuLCByZXRyeSkge1xuICBsZXQgYm94O1xuXG4gIHRyeSB7XG4gICAgLy8gVHJ5IHRvIGdldCB0aGUgYm94IHdpdGggdGhlIHByb3ZpZGVkIGZ1bmN0aW9uXG4gICAgYm94ID0gZ2V0QkJveEZuKGVsLm5vZGUpOyAvLyBJZiB0aGUgYm94IGlzIHdvcnRobGVzcyBhbmQgbm90IGV2ZW4gaW4gdGhlIGRvbSwgcmV0cnlcbiAgICAvLyBieSB0aHJvd2luZyBhbiBlcnJvciBoZXJlLi4uXG5cbiAgICBpZiAoaXNOdWxsZWRCb3goYm94KSAmJiAhZG9tQ29udGFpbnMoZWwubm9kZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRWxlbWVudCBub3QgaW4gdGhlIGRvbScpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIC4uLiBhbmQgY2FsbGluZyB0aGUgcmV0cnkgaGFuZGxlciBoZXJlXG4gICAgYm94ID0gcmV0cnkoZWwpO1xuICB9XG5cbiAgcmV0dXJuIGJveDtcbn1cblxuZnVuY3Rpb24gYmJveCgpIHtcbiAgLy8gRnVuY3Rpb24gdG8gZ2V0IGJib3ggaXMgZ2V0QkJveCgpXG4gIGNvbnN0IGdldEJCb3ggPSBub2RlID0+IG5vZGUuZ2V0QkJveCgpOyAvLyBUYWtlIGFsbCBtZWFzdXJlcyBzbyB0aGF0IGEgc3R1cGlkIGJyb3dzZXIgcmVuZGVycyB0aGUgZWxlbWVudFxuICAvLyBzbyB3ZSBjYW4gZ2V0IHRoZSBiYm94IGZyb20gaXQgd2hlbiB3ZSB0cnkgYWdhaW5cblxuXG4gIGNvbnN0IHJldHJ5ID0gZWwgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjbG9uZSA9IGVsLmNsb25lKCkuYWRkVG8ocGFyc2VyKCkuc3ZnKS5zaG93KCk7XG4gICAgICBjb25zdCBib3ggPSBjbG9uZS5ub2RlLmdldEJCb3goKTtcbiAgICAgIGNsb25lLnJlbW92ZSgpO1xuICAgICAgcmV0dXJuIGJveDtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBXZSBnaXZlIHVwLi4uXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEdldHRpbmcgYmJveCBvZiBlbGVtZW50IFwiJHtlbC5ub2RlLm5vZGVOYW1lfVwiIGlzIG5vdCBwb3NzaWJsZTogJHtlLnRvU3RyaW5nKCl9YCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGJveCA9IGdldEJveCh0aGlzLCBnZXRCQm94LCByZXRyeSk7XG4gIGNvbnN0IGJib3ggPSBuZXcgQm94KGJveCk7XG4gIHJldHVybiBiYm94O1xufVxuZnVuY3Rpb24gcmJveChlbCkge1xuICBjb25zdCBnZXRSQm94ID0gbm9kZSA9PiBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gIGNvbnN0IHJldHJ5ID0gZWwgPT4ge1xuICAgIC8vIFRoZXJlIGlzIG5vIHBvaW50IGluIHRyeWluZyB0cmlja3MgaGVyZSBiZWNhdXNlIGlmIHdlIGluc2VydCB0aGUgZWxlbWVudCBpbnRvIHRoZSBkb20gb3Vyc2VsdmVzXG4gICAgLy8gaXQgb2J2aW91c2x5IHdpbGwgYmUgYXQgdGhlIHdyb25nIHBvc2l0aW9uXG4gICAgdGhyb3cgbmV3IEVycm9yKGBHZXR0aW5nIHJib3ggb2YgZWxlbWVudCBcIiR7ZWwubm9kZS5ub2RlTmFtZX1cIiBpcyBub3QgcG9zc2libGVgKTtcbiAgfTtcblxuICBjb25zdCBib3ggPSBnZXRCb3godGhpcywgZ2V0UkJveCwgcmV0cnkpO1xuICBjb25zdCByYm94ID0gbmV3IEJveChib3gpOyAvLyBJZiBhbiBlbGVtZW50IHdhcyBwYXNzZWQsIHdlIHdhbnQgdGhlIGJib3ggaW4gdGhlIGNvb3JkaW5hdGUgc3lzdGVtIG9mIHRoYXQgZWxlbWVudFxuXG4gIGlmIChlbCkge1xuICAgIHJldHVybiByYm94LnRyYW5zZm9ybShlbC5zY3JlZW5DVE0oKS5pbnZlcnNlTygpKTtcbiAgfSAvLyBFbHNlIHdlIHdhbnQgaXQgaW4gYWJzb2x1dGUgc2NyZWVuIGNvb3JkaW5hdGVzXG4gIC8vIFRoZXJlZm9yZSB3ZSBuZWVkIHRvIGFkZCB0aGUgc2Nyb2xsT2Zmc2V0XG5cblxuICByZXR1cm4gcmJveC5hZGRPZmZzZXQoKTtcbn0gLy8gQ2hlY2tzIHdoZXRoZXIgdGhlIGdpdmVuIHBvaW50IGlzIGluc2lkZSB0aGUgYm91bmRpbmcgYm94XG5cbmZ1bmN0aW9uIGluc2lkZSh4LCB5KSB7XG4gIGNvbnN0IGJveCA9IHRoaXMuYmJveCgpO1xuICByZXR1cm4geCA+IGJveC54ICYmIHkgPiBib3gueSAmJiB4IDwgYm94LnggKyBib3gud2lkdGggJiYgeSA8IGJveC55ICsgYm94LmhlaWdodDtcbn1cbnJlZ2lzdGVyTWV0aG9kcyh7XG4gIHZpZXdib3g6IHtcbiAgICB2aWV3Ym94KHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgIC8vIGFjdCBhcyBnZXR0ZXJcbiAgICAgIGlmICh4ID09IG51bGwpIHJldHVybiBuZXcgQm94KHRoaXMuYXR0cigndmlld0JveCcpKTsgLy8gYWN0IGFzIHNldHRlclxuXG4gICAgICByZXR1cm4gdGhpcy5hdHRyKCd2aWV3Qm94JywgbmV3IEJveCh4LCB5LCB3aWR0aCwgaGVpZ2h0KSk7XG4gICAgfSxcblxuICAgIHpvb20obGV2ZWwsIHBvaW50KSB7XG4gICAgICAvLyBJdHMgYmVzdCB0byByZWx5IG9uIHRoZSBhdHRyaWJ1dGVzIGhlcmUgYW5kIGhlcmUgaXMgd2h5OlxuICAgICAgLy8gY2xpZW50WFlaOiBEb2Vzbid0IHdvcmsgb24gbm9uLXJvb3Qgc3ZncyBiZWNhdXNlIHRoZXkgZG9udCBoYXZlIGEgQ1NTQm94IChzaWxseSEpXG4gICAgICAvLyBnZXRCb3VuZGluZ0NsaWVudFJlY3Q6IERvZXNuJ3Qgd29yayBiZWNhdXNlIENocm9tZSBqdXN0IGlnbm9yZXMgd2lkdGggYW5kIGhlaWdodCBvZiBuZXN0ZWQgc3ZncyBjb21wbGV0ZWx5XG4gICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQgbWVhbnMsIHRoZWlyIGNsaWVudFJlY3QgaXMgYWx3YXlzIGFzIGJpZyBhcyB0aGUgY29udGVudC5cbiAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgRnVydGhlcm1vcmUgdGhpcyBzaXplIGlzIGluY29ycmVjdCBpZiB0aGUgZWxlbWVudCBpcyBmdXJ0aGVyIHRyYW5zZm9ybWVkIGJ5IGl0cyBwYXJlbnRzXG4gICAgICAvLyBjb21wdXRlZFN0eWxlOiBPbmx5IHJldHVybnMgbWVhbmluZ2Z1bCB2YWx1ZXMgaWYgY3NzIHdhcyB1c2VkIHdpdGggcHguIFdlIGRvbnQgZ28gdGhpcyByb3V0ZSBoZXJlIVxuICAgICAgLy8gZ2V0QkJveDogcmV0dXJucyB0aGUgYm91bmRpbmcgYm94IG9mIGl0cyBjb250ZW50IC0gdGhhdCBkb2VzbnQgaGVscCFcbiAgICAgIGxldCB7XG4gICAgICAgIHdpZHRoLFxuICAgICAgICBoZWlnaHRcbiAgICAgIH0gPSB0aGlzLmF0dHIoWyd3aWR0aCcsICdoZWlnaHQnXSk7IC8vIFdpZHRoIGFuZCBoZWlnaHQgaXMgYSBzdHJpbmcgd2hlbiBhIG51bWJlciB3aXRoIGEgdW5pdCBpcyBwcmVzZW50IHdoaWNoIHdlIGNhbid0IHVzZVxuICAgICAgLy8gU28gd2UgdHJ5IGNsaWVudFhZWlxuXG4gICAgICBpZiAoIXdpZHRoICYmICFoZWlnaHQgfHwgdHlwZW9mIHdpZHRoID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgaGVpZ2h0ID09PSAnc3RyaW5nJykge1xuICAgICAgICB3aWR0aCA9IHRoaXMubm9kZS5jbGllbnRXaWR0aDtcbiAgICAgICAgaGVpZ2h0ID0gdGhpcy5ub2RlLmNsaWVudEhlaWdodDtcbiAgICAgIH0gLy8gR2l2aW5nIHVwLi4uXG5cblxuICAgICAgaWYgKCF3aWR0aCB8fCAhaGVpZ2h0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW1wb3NzaWJsZSB0byBnZXQgYWJzb2x1dGUgd2lkdGggYW5kIGhlaWdodC4gUGxlYXNlIHByb3ZpZGUgYW4gYWJzb2x1dGUgd2lkdGggYW5kIGhlaWdodCBhdHRyaWJ1dGUgb24gdGhlIHpvb21pbmcgZWxlbWVudCcpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB2ID0gdGhpcy52aWV3Ym94KCk7XG4gICAgICBjb25zdCB6b29tWCA9IHdpZHRoIC8gdi53aWR0aDtcbiAgICAgIGNvbnN0IHpvb21ZID0gaGVpZ2h0IC8gdi5oZWlnaHQ7XG4gICAgICBjb25zdCB6b29tID0gTWF0aC5taW4oem9vbVgsIHpvb21ZKTtcblxuICAgICAgaWYgKGxldmVsID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHpvb207XG4gICAgICB9XG5cbiAgICAgIGxldCB6b29tQW1vdW50ID0gem9vbSAvIGxldmVsOyAvLyBTZXQgdGhlIHpvb21BbW91bnQgdG8gdGhlIGhpZ2hlc3QgdmFsdWUgd2hpY2ggaXMgc2FmZSB0byBwcm9jZXNzIGFuZCByZWNvdmVyIGZyb21cbiAgICAgIC8vIFRoZSAqIDEwMCBpcyBhIGJpdCBvZiB3aWdnbGUgcm9vbSBmb3IgdGhlIG1hdHJpeCB0cmFuc2Zvcm1hdGlvblxuXG4gICAgICBpZiAoem9vbUFtb3VudCA9PT0gSW5maW5pdHkpIHpvb21BbW91bnQgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiAvIDEwMDtcbiAgICAgIHBvaW50ID0gcG9pbnQgfHwgbmV3IFBvaW50KHdpZHRoIC8gMiAvIHpvb21YICsgdi54LCBoZWlnaHQgLyAyIC8gem9vbVkgKyB2LnkpO1xuICAgICAgY29uc3QgYm94ID0gbmV3IEJveCh2KS50cmFuc2Zvcm0obmV3IE1hdHJpeCh7XG4gICAgICAgIHNjYWxlOiB6b29tQW1vdW50LFxuICAgICAgICBvcmlnaW46IHBvaW50XG4gICAgICB9KSk7XG4gICAgICByZXR1cm4gdGhpcy52aWV3Ym94KGJveCk7XG4gICAgfVxuXG4gIH1cbn0pO1xucmVnaXN0ZXIoQm94LCAnQm94Jyk7XG5cbmNsYXNzIExpc3QgZXh0ZW5kcyBBcnJheSB7XG4gIGNvbnN0cnVjdG9yKGFyciA9IFtdLCAuLi5hcmdzKSB7XG4gICAgc3VwZXIoYXJyLCAuLi5hcmdzKTtcbiAgICBpZiAodHlwZW9mIGFyciA9PT0gJ251bWJlcicpIHJldHVybiB0aGlzO1xuICAgIHRoaXMubGVuZ3RoID0gMDtcbiAgICB0aGlzLnB1c2goLi4uYXJyKTtcbiAgfVxuXG59XG5leHRlbmQoW0xpc3RdLCB7XG4gIGVhY2goZm5Pck1ldGhvZE5hbWUsIC4uLmFyZ3MpIHtcbiAgICBpZiAodHlwZW9mIGZuT3JNZXRob2ROYW1lID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXAoKGVsLCBpLCBhcnIpID0+IHtcbiAgICAgICAgcmV0dXJuIGZuT3JNZXRob2ROYW1lLmNhbGwoZWwsIGVsLCBpLCBhcnIpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLm1hcChlbCA9PiB7XG4gICAgICAgIHJldHVybiBlbFtmbk9yTWV0aG9kTmFtZV0oLi4uYXJncyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgdG9BcnJheSgpIHtcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgdGhpcyk7XG4gIH1cblxufSk7XG5jb25zdCByZXNlcnZlZCA9IFsndG9BcnJheScsICdjb25zdHJ1Y3RvcicsICdlYWNoJ107XG5cbkxpc3QuZXh0ZW5kID0gZnVuY3Rpb24gKG1ldGhvZHMpIHtcbiAgbWV0aG9kcyA9IG1ldGhvZHMucmVkdWNlKChvYmosIG5hbWUpID0+IHtcbiAgICAvLyBEb24ndCBvdmVyd3JpdGUgb3duIG1ldGhvZHNcbiAgICBpZiAocmVzZXJ2ZWQuaW5jbHVkZXMobmFtZSkpIHJldHVybiBvYmo7IC8vIERvbid0IGFkZCBwcml2YXRlIG1ldGhvZHNcblxuICAgIGlmIChuYW1lWzBdID09PSAnXycpIHJldHVybiBvYmo7IC8vIFJlbGF5IGV2ZXJ5IGNhbGwgdG8gZWFjaCgpXG5cbiAgICBvYmpbbmFtZV0gPSBmdW5jdGlvbiAoLi4uYXR0cnMpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2gobmFtZSwgLi4uYXR0cnMpO1xuICAgIH07XG5cbiAgICByZXR1cm4gb2JqO1xuICB9LCB7fSk7XG4gIGV4dGVuZChbTGlzdF0sIG1ldGhvZHMpO1xufTtcblxuZnVuY3Rpb24gYmFzZUZpbmQocXVlcnksIHBhcmVudCkge1xuICByZXR1cm4gbmV3IExpc3QobWFwKChwYXJlbnQgfHwgZ2xvYmFscy5kb2N1bWVudCkucXVlcnlTZWxlY3RvckFsbChxdWVyeSksIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgcmV0dXJuIGFkb3B0KG5vZGUpO1xuICB9KSk7XG59IC8vIFNjb3BlZCBmaW5kIG1ldGhvZFxuXG5mdW5jdGlvbiBmaW5kKHF1ZXJ5KSB7XG4gIHJldHVybiBiYXNlRmluZChxdWVyeSwgdGhpcy5ub2RlKTtcbn1cbmZ1bmN0aW9uIGZpbmRPbmUocXVlcnkpIHtcbiAgcmV0dXJuIGFkb3B0KHRoaXMubm9kZS5xdWVyeVNlbGVjdG9yKHF1ZXJ5KSk7XG59XG5cbmxldCBsaXN0ZW5lcklkID0gMDtcbmNvbnN0IHdpbmRvd0V2ZW50cyA9IHt9O1xuZnVuY3Rpb24gZ2V0RXZlbnRzKGluc3RhbmNlKSB7XG4gIGxldCBuID0gaW5zdGFuY2UuZ2V0RXZlbnRIb2xkZXIoKTsgLy8gV2UgZG9udCB3YW50IHRvIHNhdmUgZXZlbnRzIGluIGdsb2JhbCBzcGFjZVxuXG4gIGlmIChuID09PSBnbG9iYWxzLndpbmRvdykgbiA9IHdpbmRvd0V2ZW50cztcbiAgaWYgKCFuLmV2ZW50cykgbi5ldmVudHMgPSB7fTtcbiAgcmV0dXJuIG4uZXZlbnRzO1xufVxuZnVuY3Rpb24gZ2V0RXZlbnRUYXJnZXQoaW5zdGFuY2UpIHtcbiAgcmV0dXJuIGluc3RhbmNlLmdldEV2ZW50VGFyZ2V0KCk7XG59XG5mdW5jdGlvbiBjbGVhckV2ZW50cyhpbnN0YW5jZSkge1xuICBsZXQgbiA9IGluc3RhbmNlLmdldEV2ZW50SG9sZGVyKCk7XG4gIGlmIChuID09PSBnbG9iYWxzLndpbmRvdykgbiA9IHdpbmRvd0V2ZW50cztcbiAgaWYgKG4uZXZlbnRzKSBuLmV2ZW50cyA9IHt9O1xufSAvLyBBZGQgZXZlbnQgYmluZGVyIGluIHRoZSBTVkcgbmFtZXNwYWNlXG5cbmZ1bmN0aW9uIG9uKG5vZGUsIGV2ZW50cywgbGlzdGVuZXIsIGJpbmRpbmcsIG9wdGlvbnMpIHtcbiAgY29uc3QgbCA9IGxpc3RlbmVyLmJpbmQoYmluZGluZyB8fCBub2RlKTtcbiAgY29uc3QgaW5zdGFuY2UgPSBtYWtlSW5zdGFuY2Uobm9kZSk7XG4gIGNvbnN0IGJhZyA9IGdldEV2ZW50cyhpbnN0YW5jZSk7XG4gIGNvbnN0IG4gPSBnZXRFdmVudFRhcmdldChpbnN0YW5jZSk7IC8vIGV2ZW50cyBjYW4gYmUgYW4gYXJyYXkgb2YgZXZlbnRzIG9yIGEgc3RyaW5nIG9mIGV2ZW50c1xuXG4gIGV2ZW50cyA9IEFycmF5LmlzQXJyYXkoZXZlbnRzKSA/IGV2ZW50cyA6IGV2ZW50cy5zcGxpdChkZWxpbWl0ZXIpOyAvLyBhZGQgaWQgdG8gbGlzdGVuZXJcblxuICBpZiAoIWxpc3RlbmVyLl9zdmdqc0xpc3RlbmVySWQpIHtcbiAgICBsaXN0ZW5lci5fc3ZnanNMaXN0ZW5lcklkID0gKytsaXN0ZW5lcklkO1xuICB9XG5cbiAgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgY29uc3QgZXYgPSBldmVudC5zcGxpdCgnLicpWzBdO1xuICAgIGNvbnN0IG5zID0gZXZlbnQuc3BsaXQoJy4nKVsxXSB8fCAnKic7IC8vIGVuc3VyZSB2YWxpZCBvYmplY3RcblxuICAgIGJhZ1tldl0gPSBiYWdbZXZdIHx8IHt9O1xuICAgIGJhZ1tldl1bbnNdID0gYmFnW2V2XVtuc10gfHwge307IC8vIHJlZmVyZW5jZSBsaXN0ZW5lclxuXG4gICAgYmFnW2V2XVtuc11bbGlzdGVuZXIuX3N2Z2pzTGlzdGVuZXJJZF0gPSBsOyAvLyBhZGQgbGlzdGVuZXJcblxuICAgIG4uYWRkRXZlbnRMaXN0ZW5lcihldiwgbCwgb3B0aW9ucyB8fCBmYWxzZSk7XG4gIH0pO1xufSAvLyBBZGQgZXZlbnQgdW5iaW5kZXIgaW4gdGhlIFNWRyBuYW1lc3BhY2VcblxuZnVuY3Rpb24gb2ZmKG5vZGUsIGV2ZW50cywgbGlzdGVuZXIsIG9wdGlvbnMpIHtcbiAgY29uc3QgaW5zdGFuY2UgPSBtYWtlSW5zdGFuY2Uobm9kZSk7XG4gIGNvbnN0IGJhZyA9IGdldEV2ZW50cyhpbnN0YW5jZSk7XG4gIGNvbnN0IG4gPSBnZXRFdmVudFRhcmdldChpbnN0YW5jZSk7IC8vIGxpc3RlbmVyIGNhbiBiZSBhIGZ1bmN0aW9uIG9yIGEgbnVtYmVyXG5cbiAgaWYgKHR5cGVvZiBsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGxpc3RlbmVyID0gbGlzdGVuZXIuX3N2Z2pzTGlzdGVuZXJJZDtcbiAgICBpZiAoIWxpc3RlbmVyKSByZXR1cm47XG4gIH0gLy8gZXZlbnRzIGNhbiBiZSBhbiBhcnJheSBvZiBldmVudHMgb3IgYSBzdHJpbmcgb3IgdW5kZWZpbmVkXG5cblxuICBldmVudHMgPSBBcnJheS5pc0FycmF5KGV2ZW50cykgPyBldmVudHMgOiAoZXZlbnRzIHx8ICcnKS5zcGxpdChkZWxpbWl0ZXIpO1xuICBldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBjb25zdCBldiA9IGV2ZW50ICYmIGV2ZW50LnNwbGl0KCcuJylbMF07XG4gICAgY29uc3QgbnMgPSBldmVudCAmJiBldmVudC5zcGxpdCgnLicpWzFdO1xuICAgIGxldCBuYW1lc3BhY2UsIGw7XG5cbiAgICBpZiAobGlzdGVuZXIpIHtcbiAgICAgIC8vIHJlbW92ZSBsaXN0ZW5lciByZWZlcmVuY2VcbiAgICAgIGlmIChiYWdbZXZdICYmIGJhZ1tldl1bbnMgfHwgJyonXSkge1xuICAgICAgICAvLyByZW1vdmVMaXN0ZW5lclxuICAgICAgICBuLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXYsIGJhZ1tldl1bbnMgfHwgJyonXVtsaXN0ZW5lcl0sIG9wdGlvbnMgfHwgZmFsc2UpO1xuICAgICAgICBkZWxldGUgYmFnW2V2XVtucyB8fCAnKiddW2xpc3RlbmVyXTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGV2ICYmIG5zKSB7XG4gICAgICAvLyByZW1vdmUgYWxsIGxpc3RlbmVycyBmb3IgYSBuYW1lc3BhY2VkIGV2ZW50XG4gICAgICBpZiAoYmFnW2V2XSAmJiBiYWdbZXZdW25zXSkge1xuICAgICAgICBmb3IgKGwgaW4gYmFnW2V2XVtuc10pIHtcbiAgICAgICAgICBvZmYobiwgW2V2LCBuc10uam9pbignLicpLCBsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSBiYWdbZXZdW25zXTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5zKSB7XG4gICAgICAvLyByZW1vdmUgYWxsIGxpc3RlbmVycyBmb3IgYSBzcGVjaWZpYyBuYW1lc3BhY2VcbiAgICAgIGZvciAoZXZlbnQgaW4gYmFnKSB7XG4gICAgICAgIGZvciAobmFtZXNwYWNlIGluIGJhZ1tldmVudF0pIHtcbiAgICAgICAgICBpZiAobnMgPT09IG5hbWVzcGFjZSkge1xuICAgICAgICAgICAgb2ZmKG4sIFtldmVudCwgbnNdLmpvaW4oJy4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChldikge1xuICAgICAgLy8gcmVtb3ZlIGFsbCBsaXN0ZW5lcnMgZm9yIHRoZSBldmVudFxuICAgICAgaWYgKGJhZ1tldl0pIHtcbiAgICAgICAgZm9yIChuYW1lc3BhY2UgaW4gYmFnW2V2XSkge1xuICAgICAgICAgIG9mZihuLCBbZXYsIG5hbWVzcGFjZV0uam9pbignLicpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSBiYWdbZXZdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyByZW1vdmUgYWxsIGxpc3RlbmVycyBvbiBhIGdpdmVuIG5vZGVcbiAgICAgIGZvciAoZXZlbnQgaW4gYmFnKSB7XG4gICAgICAgIG9mZihuLCBldmVudCk7XG4gICAgICB9XG5cbiAgICAgIGNsZWFyRXZlbnRzKGluc3RhbmNlKTtcbiAgICB9XG4gIH0pO1xufVxuZnVuY3Rpb24gZGlzcGF0Y2gobm9kZSwgZXZlbnQsIGRhdGEsIG9wdGlvbnMpIHtcbiAgY29uc3QgbiA9IGdldEV2ZW50VGFyZ2V0KG5vZGUpOyAvLyBEaXNwYXRjaCBldmVudFxuXG4gIGlmIChldmVudCBpbnN0YW5jZW9mIGdsb2JhbHMud2luZG93LkV2ZW50KSB7XG4gICAgbi5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgfSBlbHNlIHtcbiAgICBldmVudCA9IG5ldyBnbG9iYWxzLndpbmRvdy5DdXN0b21FdmVudChldmVudCwge1xuICAgICAgZGV0YWlsOiBkYXRhLFxuICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICAgIC4uLm9wdGlvbnNcbiAgICB9KTtcbiAgICBuLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICB9XG5cbiAgcmV0dXJuIGV2ZW50O1xufVxuXG5jbGFzcyBFdmVudFRhcmdldCBleHRlbmRzIEJhc2Uge1xuICBhZGRFdmVudExpc3RlbmVyKCkge31cblxuICBkaXNwYXRjaChldmVudCwgZGF0YSwgb3B0aW9ucykge1xuICAgIHJldHVybiBkaXNwYXRjaCh0aGlzLCBldmVudCwgZGF0YSwgb3B0aW9ucyk7XG4gIH1cblxuICBkaXNwYXRjaEV2ZW50KGV2ZW50KSB7XG4gICAgY29uc3QgYmFnID0gdGhpcy5nZXRFdmVudEhvbGRlcigpLmV2ZW50cztcbiAgICBpZiAoIWJhZykgcmV0dXJuIHRydWU7XG4gICAgY29uc3QgZXZlbnRzID0gYmFnW2V2ZW50LnR5cGVdO1xuXG4gICAgZm9yIChjb25zdCBpIGluIGV2ZW50cykge1xuICAgICAgZm9yIChjb25zdCBqIGluIGV2ZW50c1tpXSkge1xuICAgICAgICBldmVudHNbaV1bal0oZXZlbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAhZXZlbnQuZGVmYXVsdFByZXZlbnRlZDtcbiAgfSAvLyBGaXJlIGdpdmVuIGV2ZW50XG5cblxuICBmaXJlKGV2ZW50LCBkYXRhLCBvcHRpb25zKSB7XG4gICAgdGhpcy5kaXNwYXRjaChldmVudCwgZGF0YSwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXRFdmVudEhvbGRlcigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldEV2ZW50VGFyZ2V0KCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9IC8vIFVuYmluZCBldmVudCBmcm9tIGxpc3RlbmVyXG5cblxuICBvZmYoZXZlbnQsIGxpc3RlbmVyLCBvcHRpb25zKSB7XG4gICAgb2ZmKHRoaXMsIGV2ZW50LCBsaXN0ZW5lciwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0gLy8gQmluZCBnaXZlbiBldmVudCB0byBsaXN0ZW5lclxuXG5cbiAgb24oZXZlbnQsIGxpc3RlbmVyLCBiaW5kaW5nLCBvcHRpb25zKSB7XG4gICAgb24odGhpcywgZXZlbnQsIGxpc3RlbmVyLCBiaW5kaW5nLCBvcHRpb25zKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXIoKSB7fVxuXG59XG5yZWdpc3RlcihFdmVudFRhcmdldCwgJ0V2ZW50VGFyZ2V0Jyk7XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fSAvLyBEZWZhdWx0IGFuaW1hdGlvbiB2YWx1ZXNcblxuY29uc3QgdGltZWxpbmUgPSB7XG4gIGR1cmF0aW9uOiA0MDAsXG4gIGVhc2U6ICc+JyxcbiAgZGVsYXk6IDBcbn07IC8vIERlZmF1bHQgYXR0cmlidXRlIHZhbHVlc1xuXG5jb25zdCBhdHRycyA9IHtcbiAgLy8gZmlsbCBhbmQgc3Ryb2tlXG4gICdmaWxsLW9wYWNpdHknOiAxLFxuICAnc3Ryb2tlLW9wYWNpdHknOiAxLFxuICAnc3Ryb2tlLXdpZHRoJzogMCxcbiAgJ3N0cm9rZS1saW5lam9pbic6ICdtaXRlcicsXG4gICdzdHJva2UtbGluZWNhcCc6ICdidXR0JyxcbiAgZmlsbDogJyMwMDAwMDAnLFxuICBzdHJva2U6ICcjMDAwMDAwJyxcbiAgb3BhY2l0eTogMSxcbiAgLy8gcG9zaXRpb25cbiAgeDogMCxcbiAgeTogMCxcbiAgY3g6IDAsXG4gIGN5OiAwLFxuICAvLyBzaXplXG4gIHdpZHRoOiAwLFxuICBoZWlnaHQ6IDAsXG4gIC8vIHJhZGl1c1xuICByOiAwLFxuICByeDogMCxcbiAgcnk6IDAsXG4gIC8vIGdyYWRpZW50XG4gIG9mZnNldDogMCxcbiAgJ3N0b3Atb3BhY2l0eSc6IDEsXG4gICdzdG9wLWNvbG9yJzogJyMwMDAwMDAnLFxuICAvLyB0ZXh0XG4gICd0ZXh0LWFuY2hvcic6ICdzdGFydCdcbn07XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgX19wcm90b19fOiBudWxsLFxuICBub29wOiBub29wLFxuICB0aW1lbGluZTogdGltZWxpbmUsXG4gIGF0dHJzOiBhdHRyc1xufTtcblxuY2xhc3MgU1ZHQXJyYXkgZXh0ZW5kcyBBcnJheSB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLmluaXQoLi4uYXJncyk7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICByZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IodGhpcyk7XG4gIH1cblxuICBpbml0KGFycikge1xuICAgIC8vIFRoaXMgY2F0Y2hlcyB0aGUgY2FzZSwgdGhhdCBuYXRpdmUgbWFwIHRyaWVzIHRvIGNyZWF0ZSBhbiBhcnJheSB3aXRoIG5ldyBBcnJheSgxKVxuICAgIGlmICh0eXBlb2YgYXJyID09PSAnbnVtYmVyJykgcmV0dXJuIHRoaXM7XG4gICAgdGhpcy5sZW5ndGggPSAwO1xuICAgIHRoaXMucHVzaCguLi50aGlzLnBhcnNlKGFycikpO1xuICAgIHJldHVybiB0aGlzO1xuICB9IC8vIFBhcnNlIHdoaXRlc3BhY2Ugc2VwYXJhdGVkIHN0cmluZ1xuXG5cbiAgcGFyc2UoYXJyYXkgPSBbXSkge1xuICAgIC8vIElmIGFscmVhZHkgaXMgYW4gYXJyYXksIG5vIG5lZWQgdG8gcGFyc2UgaXRcbiAgICBpZiAoYXJyYXkgaW5zdGFuY2VvZiBBcnJheSkgcmV0dXJuIGFycmF5O1xuICAgIHJldHVybiBhcnJheS50cmltKCkuc3BsaXQoZGVsaW1pdGVyKS5tYXAocGFyc2VGbG9hdCk7XG4gIH1cblxuICB0b0FycmF5KCkge1xuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLCB0aGlzKTtcbiAgfVxuXG4gIHRvU2V0KCkge1xuICAgIHJldHVybiBuZXcgU2V0KHRoaXMpO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuam9pbignICcpO1xuICB9IC8vIEZsYXR0ZW5zIHRoZSBhcnJheSBpZiBuZWVkZWRcblxuXG4gIHZhbHVlT2YoKSB7XG4gICAgY29uc3QgcmV0ID0gW107XG4gICAgcmV0LnB1c2goLi4udGhpcyk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG59XG5cbmNsYXNzIFNWR051bWJlciB7XG4gIC8vIEluaXRpYWxpemVcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHRoaXMuaW5pdCguLi5hcmdzKTtcbiAgfVxuXG4gIGNvbnZlcnQodW5pdCkge1xuICAgIHJldHVybiBuZXcgU1ZHTnVtYmVyKHRoaXMudmFsdWUsIHVuaXQpO1xuICB9IC8vIERpdmlkZSBudW1iZXJcblxuXG4gIGRpdmlkZShudW1iZXIpIHtcbiAgICBudW1iZXIgPSBuZXcgU1ZHTnVtYmVyKG51bWJlcik7XG4gICAgcmV0dXJuIG5ldyBTVkdOdW1iZXIodGhpcyAvIG51bWJlciwgdGhpcy51bml0IHx8IG51bWJlci51bml0KTtcbiAgfVxuXG4gIGluaXQodmFsdWUsIHVuaXQpIHtcbiAgICB1bml0ID0gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZVsxXSA6IHVuaXQ7XG4gICAgdmFsdWUgPSBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlWzBdIDogdmFsdWU7IC8vIGluaXRpYWxpemUgZGVmYXVsdHNcblxuICAgIHRoaXMudmFsdWUgPSAwO1xuICAgIHRoaXMudW5pdCA9IHVuaXQgfHwgJyc7IC8vIHBhcnNlIHZhbHVlXG5cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgLy8gZW5zdXJlIGEgdmFsaWQgbnVtZXJpYyB2YWx1ZVxuICAgICAgdGhpcy52YWx1ZSA9IGlzTmFOKHZhbHVlKSA/IDAgOiAhaXNGaW5pdGUodmFsdWUpID8gdmFsdWUgPCAwID8gLTMuNGUrMzggOiArMy40ZSszOCA6IHZhbHVlO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgdW5pdCA9IHZhbHVlLm1hdGNoKG51bWJlckFuZFVuaXQpO1xuXG4gICAgICBpZiAodW5pdCkge1xuICAgICAgICAvLyBtYWtlIHZhbHVlIG51bWVyaWNcbiAgICAgICAgdGhpcy52YWx1ZSA9IHBhcnNlRmxvYXQodW5pdFsxXSk7IC8vIG5vcm1hbGl6ZVxuXG4gICAgICAgIGlmICh1bml0WzVdID09PSAnJScpIHtcbiAgICAgICAgICB0aGlzLnZhbHVlIC89IDEwMDtcbiAgICAgICAgfSBlbHNlIGlmICh1bml0WzVdID09PSAncycpIHtcbiAgICAgICAgICB0aGlzLnZhbHVlICo9IDEwMDA7XG4gICAgICAgIH0gLy8gc3RvcmUgdW5pdFxuXG5cbiAgICAgICAgdGhpcy51bml0ID0gdW5pdFs1XTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgU1ZHTnVtYmVyKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZS52YWx1ZU9mKCk7XG4gICAgICAgIHRoaXMudW5pdCA9IHZhbHVlLnVuaXQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0gLy8gU3VidHJhY3QgbnVtYmVyXG5cblxuICBtaW51cyhudW1iZXIpIHtcbiAgICBudW1iZXIgPSBuZXcgU1ZHTnVtYmVyKG51bWJlcik7XG4gICAgcmV0dXJuIG5ldyBTVkdOdW1iZXIodGhpcyAtIG51bWJlciwgdGhpcy51bml0IHx8IG51bWJlci51bml0KTtcbiAgfSAvLyBBZGQgbnVtYmVyXG5cblxuICBwbHVzKG51bWJlcikge1xuICAgIG51bWJlciA9IG5ldyBTVkdOdW1iZXIobnVtYmVyKTtcbiAgICByZXR1cm4gbmV3IFNWR051bWJlcih0aGlzICsgbnVtYmVyLCB0aGlzLnVuaXQgfHwgbnVtYmVyLnVuaXQpO1xuICB9IC8vIE11bHRpcGx5IG51bWJlclxuXG5cbiAgdGltZXMobnVtYmVyKSB7XG4gICAgbnVtYmVyID0gbmV3IFNWR051bWJlcihudW1iZXIpO1xuICAgIHJldHVybiBuZXcgU1ZHTnVtYmVyKHRoaXMgKiBudW1iZXIsIHRoaXMudW5pdCB8fCBudW1iZXIudW5pdCk7XG4gIH1cblxuICB0b0FycmF5KCkge1xuICAgIHJldHVybiBbdGhpcy52YWx1ZSwgdGhpcy51bml0XTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuICh0aGlzLnVuaXQgPT09ICclJyA/IH5+KHRoaXMudmFsdWUgKiAxZTgpIC8gMWU2IDogdGhpcy51bml0ID09PSAncycgPyB0aGlzLnZhbHVlIC8gMWUzIDogdGhpcy52YWx1ZSkgKyB0aGlzLnVuaXQ7XG4gIH1cblxuICB2YWx1ZU9mKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG5cbn1cblxuY29uc3QgaG9va3MgPSBbXTtcbmZ1bmN0aW9uIHJlZ2lzdGVyQXR0ckhvb2soZm4pIHtcbiAgaG9va3MucHVzaChmbik7XG59IC8vIFNldCBzdmcgZWxlbWVudCBhdHRyaWJ1dGVcblxuZnVuY3Rpb24gYXR0cihhdHRyLCB2YWwsIG5zKSB7XG4gIC8vIGFjdCBhcyBmdWxsIGdldHRlclxuICBpZiAoYXR0ciA9PSBudWxsKSB7XG4gICAgLy8gZ2V0IGFuIG9iamVjdCBvZiBhdHRyaWJ1dGVzXG4gICAgYXR0ciA9IHt9O1xuICAgIHZhbCA9IHRoaXMubm9kZS5hdHRyaWJ1dGVzO1xuXG4gICAgZm9yIChjb25zdCBub2RlIG9mIHZhbCkge1xuICAgICAgYXR0cltub2RlLm5vZGVOYW1lXSA9IGlzTnVtYmVyLnRlc3Qobm9kZS5ub2RlVmFsdWUpID8gcGFyc2VGbG9hdChub2RlLm5vZGVWYWx1ZSkgOiBub2RlLm5vZGVWYWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXR0cjtcbiAgfSBlbHNlIGlmIChhdHRyIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAvLyBsb29wIHRocm91Z2ggYXJyYXkgYW5kIGdldCBhbGwgdmFsdWVzXG4gICAgcmV0dXJuIGF0dHIucmVkdWNlKChsYXN0LCBjdXJyKSA9PiB7XG4gICAgICBsYXN0W2N1cnJdID0gdGhpcy5hdHRyKGN1cnIpO1xuICAgICAgcmV0dXJuIGxhc3Q7XG4gICAgfSwge30pO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhdHRyID09PSAnb2JqZWN0JyAmJiBhdHRyLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAvLyBhcHBseSBldmVyeSBhdHRyaWJ1dGUgaW5kaXZpZHVhbGx5IGlmIGFuIG9iamVjdCBpcyBwYXNzZWRcbiAgICBmb3IgKHZhbCBpbiBhdHRyKSB0aGlzLmF0dHIodmFsLCBhdHRyW3ZhbF0pO1xuICB9IGVsc2UgaWYgKHZhbCA9PT0gbnVsbCkge1xuICAgIC8vIHJlbW92ZSB2YWx1ZVxuICAgIHRoaXMubm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0cik7XG4gIH0gZWxzZSBpZiAodmFsID09IG51bGwpIHtcbiAgICAvLyBhY3QgYXMgYSBnZXR0ZXIgaWYgdGhlIGZpcnN0IGFuZCBvbmx5IGFyZ3VtZW50IGlzIG5vdCBhbiBvYmplY3RcbiAgICB2YWwgPSB0aGlzLm5vZGUuZ2V0QXR0cmlidXRlKGF0dHIpO1xuICAgIHJldHVybiB2YWwgPT0gbnVsbCA/IGF0dHJzW2F0dHJdIDogaXNOdW1iZXIudGVzdCh2YWwpID8gcGFyc2VGbG9hdCh2YWwpIDogdmFsO1xuICB9IGVsc2Uge1xuICAgIC8vIExvb3AgdGhyb3VnaCBob29rcyBhbmQgZXhlY3V0ZSB0aGVtIHRvIGNvbnZlcnQgdmFsdWVcbiAgICB2YWwgPSBob29rcy5yZWR1Y2UoKF92YWwsIGhvb2spID0+IHtcbiAgICAgIHJldHVybiBob29rKGF0dHIsIF92YWwsIHRoaXMpO1xuICAgIH0sIHZhbCk7IC8vIGVuc3VyZSBjb3JyZWN0IG51bWVyaWMgdmFsdWVzIChhbHNvIGFjY2VwdHMgTmFOIGFuZCBJbmZpbml0eSlcblxuICAgIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgICAgdmFsID0gbmV3IFNWR051bWJlcih2YWwpO1xuICAgIH0gZWxzZSBpZiAoQ29sb3IuaXNDb2xvcih2YWwpKSB7XG4gICAgICAvLyBlbnN1cmUgZnVsbCBoZXggY29sb3JcbiAgICAgIHZhbCA9IG5ldyBDb2xvcih2YWwpO1xuICAgIH0gZWxzZSBpZiAodmFsLmNvbnN0cnVjdG9yID09PSBBcnJheSkge1xuICAgICAgLy8gQ2hlY2sgZm9yIHBsYWluIGFycmF5cyBhbmQgcGFyc2UgYXJyYXkgdmFsdWVzXG4gICAgICB2YWwgPSBuZXcgU1ZHQXJyYXkodmFsKTtcbiAgICB9IC8vIGlmIHRoZSBwYXNzZWQgYXR0cmlidXRlIGlzIGxlYWRpbmcuLi5cblxuXG4gICAgaWYgKGF0dHIgPT09ICdsZWFkaW5nJykge1xuICAgICAgLy8gLi4uIGNhbGwgdGhlIGxlYWRpbmcgbWV0aG9kIGluc3RlYWRcbiAgICAgIGlmICh0aGlzLmxlYWRpbmcpIHtcbiAgICAgICAgdGhpcy5sZWFkaW5nKHZhbCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHNldCBnaXZlbiBhdHRyaWJ1dGUgb24gbm9kZVxuICAgICAgdHlwZW9mIG5zID09PSAnc3RyaW5nJyA/IHRoaXMubm9kZS5zZXRBdHRyaWJ1dGVOUyhucywgYXR0ciwgdmFsLnRvU3RyaW5nKCkpIDogdGhpcy5ub2RlLnNldEF0dHJpYnV0ZShhdHRyLCB2YWwudG9TdHJpbmcoKSk7XG4gICAgfSAvLyByZWJ1aWxkIGlmIHJlcXVpcmVkXG5cblxuICAgIGlmICh0aGlzLnJlYnVpbGQgJiYgKGF0dHIgPT09ICdmb250LXNpemUnIHx8IGF0dHIgPT09ICd4JykpIHtcbiAgICAgIHRoaXMucmVidWlsZCgpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5jbGFzcyBEb20gZXh0ZW5kcyBFdmVudFRhcmdldCB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIGF0dHJzKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudHlwZSA9IG5vZGUubm9kZU5hbWU7XG5cbiAgICBpZiAoYXR0cnMgJiYgbm9kZSAhPT0gYXR0cnMpIHtcbiAgICAgIHRoaXMuYXR0cihhdHRycyk7XG4gICAgfVxuICB9IC8vIEFkZCBnaXZlbiBlbGVtZW50IGF0IGEgcG9zaXRpb25cblxuXG4gIGFkZChlbGVtZW50LCBpKSB7XG4gICAgZWxlbWVudCA9IG1ha2VJbnN0YW5jZShlbGVtZW50KTsgLy8gSWYgbm9uLXJvb3Qgc3ZnIG5vZGVzIGFyZSBhZGRlZCB3ZSBoYXZlIHRvIHJlbW92ZSB0aGVpciBuYW1lc3BhY2VzXG5cbiAgICBpZiAoZWxlbWVudC5yZW1vdmVOYW1lc3BhY2UgJiYgdGhpcy5ub2RlIGluc3RhbmNlb2YgZ2xvYmFscy53aW5kb3cuU1ZHRWxlbWVudCkge1xuICAgICAgZWxlbWVudC5yZW1vdmVOYW1lc3BhY2UoKTtcbiAgICB9XG5cbiAgICBpZiAoaSA9PSBudWxsKSB7XG4gICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoZWxlbWVudC5ub2RlKTtcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQubm9kZSAhPT0gdGhpcy5ub2RlLmNoaWxkTm9kZXNbaV0pIHtcbiAgICAgIHRoaXMubm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudC5ub2RlLCB0aGlzLm5vZGUuY2hpbGROb2Rlc1tpXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0gLy8gQWRkIGVsZW1lbnQgdG8gZ2l2ZW4gY29udGFpbmVyIGFuZCByZXR1cm4gc2VsZlxuXG5cbiAgYWRkVG8ocGFyZW50LCBpKSB7XG4gICAgcmV0dXJuIG1ha2VJbnN0YW5jZShwYXJlbnQpLnB1dCh0aGlzLCBpKTtcbiAgfSAvLyBSZXR1cm5zIGFsbCBjaGlsZCBlbGVtZW50c1xuXG5cbiAgY2hpbGRyZW4oKSB7XG4gICAgcmV0dXJuIG5ldyBMaXN0KG1hcCh0aGlzLm5vZGUuY2hpbGRyZW4sIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICByZXR1cm4gYWRvcHQobm9kZSk7XG4gICAgfSkpO1xuICB9IC8vIFJlbW92ZSBhbGwgZWxlbWVudHMgaW4gdGhpcyBjb250YWluZXJcblxuXG4gIGNsZWFyKCkge1xuICAgIC8vIHJlbW92ZSBjaGlsZHJlblxuICAgIHdoaWxlICh0aGlzLm5vZGUuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICB0aGlzLm5vZGUucmVtb3ZlQ2hpbGQodGhpcy5ub2RlLmxhc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0gLy8gQ2xvbmUgZWxlbWVudFxuXG5cbiAgY2xvbmUoZGVlcCA9IHRydWUpIHtcbiAgICAvLyB3cml0ZSBkb20gZGF0YSB0byB0aGUgZG9tIHNvIHRoZSBjbG9uZSBjYW4gcGlja3VwIHRoZSBkYXRhXG4gICAgdGhpcy53cml0ZURhdGFUb0RvbSgpOyAvLyBjbG9uZSBlbGVtZW50IGFuZCBhc3NpZ24gbmV3IGlkXG5cbiAgICByZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IoYXNzaWduTmV3SWQodGhpcy5ub2RlLmNsb25lTm9kZShkZWVwKSkpO1xuICB9IC8vIEl0ZXJhdGVzIG92ZXIgYWxsIGNoaWxkcmVuIGFuZCBpbnZva2VzIGEgZ2l2ZW4gYmxvY2tcblxuXG4gIGVhY2goYmxvY2ssIGRlZXApIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4oKTtcbiAgICBsZXQgaSwgaWw7XG5cbiAgICBmb3IgKGkgPSAwLCBpbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGlsOyBpKyspIHtcbiAgICAgIGJsb2NrLmFwcGx5KGNoaWxkcmVuW2ldLCBbaSwgY2hpbGRyZW5dKTtcblxuICAgICAgaWYgKGRlZXApIHtcbiAgICAgICAgY2hpbGRyZW5baV0uZWFjaChibG9jaywgZGVlcCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBlbGVtZW50KG5vZGVOYW1lLCBhdHRycykge1xuICAgIHJldHVybiB0aGlzLnB1dChuZXcgRG9tKGNyZWF0ZShub2RlTmFtZSksIGF0dHJzKSk7XG4gIH0gLy8gR2V0IGZpcnN0IGNoaWxkXG5cblxuICBmaXJzdCgpIHtcbiAgICByZXR1cm4gYWRvcHQodGhpcy5ub2RlLmZpcnN0Q2hpbGQpO1xuICB9IC8vIEdldCBhIGVsZW1lbnQgYXQgdGhlIGdpdmVuIGluZGV4XG5cblxuICBnZXQoaSkge1xuICAgIHJldHVybiBhZG9wdCh0aGlzLm5vZGUuY2hpbGROb2Rlc1tpXSk7XG4gIH1cblxuICBnZXRFdmVudEhvbGRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0RXZlbnRUYXJnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfSAvLyBDaGVja3MgaWYgdGhlIGdpdmVuIGVsZW1lbnQgaXMgYSBjaGlsZFxuXG5cbiAgaGFzKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gdGhpcy5pbmRleChlbGVtZW50KSA+PSAwO1xuICB9XG5cbiAgaHRtbChodG1sT3JGbiwgb3V0ZXJIVE1MKSB7XG4gICAgcmV0dXJuIHRoaXMueG1sKGh0bWxPckZuLCBvdXRlckhUTUwsIGh0bWwpO1xuICB9IC8vIEdldCAvIHNldCBpZFxuXG5cbiAgaWQoaWQpIHtcbiAgICAvLyBnZW5lcmF0ZSBuZXcgaWQgaWYgbm8gaWQgc2V0XG4gICAgaWYgKHR5cGVvZiBpZCA9PT0gJ3VuZGVmaW5lZCcgJiYgIXRoaXMubm9kZS5pZCkge1xuICAgICAgdGhpcy5ub2RlLmlkID0gZWlkKHRoaXMudHlwZSk7XG4gICAgfSAvLyBkb24ndCBzZXQgZGlyZWN0bHkgd2l0aCB0aGlzLm5vZGUuaWQgdG8gbWFrZSBgbnVsbGAgd29yayBjb3JyZWN0bHlcblxuXG4gICAgcmV0dXJuIHRoaXMuYXR0cignaWQnLCBpZCk7XG4gIH0gLy8gR2V0cyBpbmRleCBvZiBnaXZlbiBlbGVtZW50XG5cblxuICBpbmRleChlbGVtZW50KSB7XG4gICAgcmV0dXJuIFtdLnNsaWNlLmNhbGwodGhpcy5ub2RlLmNoaWxkTm9kZXMpLmluZGV4T2YoZWxlbWVudC5ub2RlKTtcbiAgfSAvLyBHZXQgdGhlIGxhc3QgY2hpbGRcblxuXG4gIGxhc3QoKSB7XG4gICAgcmV0dXJuIGFkb3B0KHRoaXMubm9kZS5sYXN0Q2hpbGQpO1xuICB9IC8vIG1hdGNoZXMgdGhlIGVsZW1lbnQgdnMgYSBjc3Mgc2VsZWN0b3JcblxuXG4gIG1hdGNoZXMoc2VsZWN0b3IpIHtcbiAgICBjb25zdCBlbCA9IHRoaXMubm9kZTtcbiAgICBjb25zdCBtYXRjaGVyID0gZWwubWF0Y2hlcyB8fCBlbC5tYXRjaGVzU2VsZWN0b3IgfHwgZWwubXNNYXRjaGVzU2VsZWN0b3IgfHwgZWwubW96TWF0Y2hlc1NlbGVjdG9yIHx8IGVsLndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fCBlbC5vTWF0Y2hlc1NlbGVjdG9yIHx8IG51bGw7XG4gICAgcmV0dXJuIG1hdGNoZXIgJiYgbWF0Y2hlci5jYWxsKGVsLCBzZWxlY3Rvcik7XG4gIH0gLy8gUmV0dXJucyB0aGUgcGFyZW50IGVsZW1lbnQgaW5zdGFuY2VcblxuXG4gIHBhcmVudCh0eXBlKSB7XG4gICAgbGV0IHBhcmVudCA9IHRoaXM7IC8vIGNoZWNrIGZvciBwYXJlbnRcblxuICAgIGlmICghcGFyZW50Lm5vZGUucGFyZW50Tm9kZSkgcmV0dXJuIG51bGw7IC8vIGdldCBwYXJlbnQgZWxlbWVudFxuXG4gICAgcGFyZW50ID0gYWRvcHQocGFyZW50Lm5vZGUucGFyZW50Tm9kZSk7XG4gICAgaWYgKCF0eXBlKSByZXR1cm4gcGFyZW50OyAvLyBsb29wIHRyb3VnaCBhbmNlc3RvcnMgaWYgdHlwZSBpcyBnaXZlblxuXG4gICAgZG8ge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyA/IHBhcmVudC5tYXRjaGVzKHR5cGUpIDogcGFyZW50IGluc3RhbmNlb2YgdHlwZSkgcmV0dXJuIHBhcmVudDtcbiAgICB9IHdoaWxlIChwYXJlbnQgPSBhZG9wdChwYXJlbnQubm9kZS5wYXJlbnROb2RlKSk7XG5cbiAgICByZXR1cm4gcGFyZW50O1xuICB9IC8vIEJhc2ljYWxseSBkb2VzIHRoZSBzYW1lIGFzIGBhZGQoKWAgYnV0IHJldHVybnMgdGhlIGFkZGVkIGVsZW1lbnQgaW5zdGVhZFxuXG5cbiAgcHV0KGVsZW1lbnQsIGkpIHtcbiAgICBlbGVtZW50ID0gbWFrZUluc3RhbmNlKGVsZW1lbnQpO1xuICAgIHRoaXMuYWRkKGVsZW1lbnQsIGkpO1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9IC8vIEFkZCBlbGVtZW50IHRvIGdpdmVuIGNvbnRhaW5lciBhbmQgcmV0dXJuIGNvbnRhaW5lclxuXG5cbiAgcHV0SW4ocGFyZW50LCBpKSB7XG4gICAgcmV0dXJuIG1ha2VJbnN0YW5jZShwYXJlbnQpLmFkZCh0aGlzLCBpKTtcbiAgfSAvLyBSZW1vdmUgZWxlbWVudFxuXG5cbiAgcmVtb3ZlKCkge1xuICAgIGlmICh0aGlzLnBhcmVudCgpKSB7XG4gICAgICB0aGlzLnBhcmVudCgpLnJlbW92ZUVsZW1lbnQodGhpcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0gLy8gUmVtb3ZlIGEgZ2l2ZW4gY2hpbGRcblxuXG4gIHJlbW92ZUVsZW1lbnQoZWxlbWVudCkge1xuICAgIHRoaXMubm9kZS5yZW1vdmVDaGlsZChlbGVtZW50Lm5vZGUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9IC8vIFJlcGxhY2UgdGhpcyB3aXRoIGVsZW1lbnRcblxuXG4gIHJlcGxhY2UoZWxlbWVudCkge1xuICAgIGVsZW1lbnQgPSBtYWtlSW5zdGFuY2UoZWxlbWVudCk7XG5cbiAgICBpZiAodGhpcy5ub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgIHRoaXMubm9kZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChlbGVtZW50Lm5vZGUsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICByb3VuZChwcmVjaXNpb24gPSAyLCBtYXAgPSBudWxsKSB7XG4gICAgY29uc3QgZmFjdG9yID0gMTAgKiogcHJlY2lzaW9uO1xuICAgIGNvbnN0IGF0dHJzID0gdGhpcy5hdHRyKG1hcCk7XG5cbiAgICBmb3IgKGNvbnN0IGkgaW4gYXR0cnMpIHtcbiAgICAgIGlmICh0eXBlb2YgYXR0cnNbaV0gPT09ICdudW1iZXInKSB7XG4gICAgICAgIGF0dHJzW2ldID0gTWF0aC5yb3VuZChhdHRyc1tpXSAqIGZhY3RvcikgLyBmYWN0b3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5hdHRyKGF0dHJzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSAvLyBJbXBvcnQgLyBFeHBvcnQgcmF3IHN2Z1xuXG5cbiAgc3ZnKHN2Z09yRm4sIG91dGVyU1ZHKSB7XG4gICAgcmV0dXJuIHRoaXMueG1sKHN2Z09yRm4sIG91dGVyU1ZHLCBzdmcpO1xuICB9IC8vIFJldHVybiBpZCBvbiBzdHJpbmcgY29udmVyc2lvblxuXG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuaWQoKTtcbiAgfVxuXG4gIHdvcmRzKHRleHQpIHtcbiAgICAvLyBUaGlzIGlzIGZhc3RlciB0aGFuIHJlbW92aW5nIGFsbCBjaGlsZHJlbiBhbmQgYWRkaW5nIGEgbmV3IG9uZVxuICAgIHRoaXMubm9kZS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB3cmFwKG5vZGUpIHtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudCgpO1xuXG4gICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZFRvKG5vZGUpO1xuICAgIH1cblxuICAgIGNvbnN0IHBvc2l0aW9uID0gcGFyZW50LmluZGV4KHRoaXMpO1xuICAgIHJldHVybiBwYXJlbnQucHV0KG5vZGUsIHBvc2l0aW9uKS5wdXQodGhpcyk7XG4gIH0gLy8gd3JpdGUgc3ZnanMgZGF0YSB0byB0aGUgZG9tXG5cblxuICB3cml0ZURhdGFUb0RvbSgpIHtcbiAgICAvLyBkdW1wIHZhcmlhYmxlcyByZWN1cnNpdmVseVxuICAgIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLndyaXRlRGF0YVRvRG9tKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0gLy8gSW1wb3J0IC8gRXhwb3J0IHJhdyBzdmdcblxuXG4gIHhtbCh4bWxPckZuLCBvdXRlclhNTCwgbnMpIHtcbiAgICBpZiAodHlwZW9mIHhtbE9yRm4gPT09ICdib29sZWFuJykge1xuICAgICAgbnMgPSBvdXRlclhNTDtcbiAgICAgIG91dGVyWE1MID0geG1sT3JGbjtcbiAgICAgIHhtbE9yRm4gPSBudWxsO1xuICAgIH0gLy8gYWN0IGFzIGdldHRlciBpZiBubyBzdmcgc3RyaW5nIGlzIGdpdmVuXG5cblxuICAgIGlmICh4bWxPckZuID09IG51bGwgfHwgdHlwZW9mIHhtbE9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIFRoZSBkZWZhdWx0IGZvciBleHBvcnRzIGlzLCB0aGF0IHRoZSBvdXRlck5vZGUgaXMgaW5jbHVkZWRcbiAgICAgIG91dGVyWE1MID0gb3V0ZXJYTUwgPT0gbnVsbCA/IHRydWUgOiBvdXRlclhNTDsgLy8gd3JpdGUgc3ZnanMgZGF0YSB0byB0aGUgZG9tXG5cbiAgICAgIHRoaXMud3JpdGVEYXRhVG9Eb20oKTtcbiAgICAgIGxldCBjdXJyZW50ID0gdGhpczsgLy8gQW4gZXhwb3J0IG1vZGlmaWVyIHdhcyBwYXNzZWRcblxuICAgICAgaWYgKHhtbE9yRm4gIT0gbnVsbCkge1xuICAgICAgICBjdXJyZW50ID0gYWRvcHQoY3VycmVudC5ub2RlLmNsb25lTm9kZSh0cnVlKSk7IC8vIElmIHRoZSB1c2VyIHdhbnRzIG91dGVySFRNTCB3ZSBuZWVkIHRvIHByb2Nlc3MgdGhpcyBub2RlLCB0b29cblxuICAgICAgICBpZiAob3V0ZXJYTUwpIHtcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSB4bWxPckZuKGN1cnJlbnQpO1xuICAgICAgICAgIGN1cnJlbnQgPSByZXN1bHQgfHwgY3VycmVudDsgLy8gVGhlIHVzZXIgZG9lcyBub3Qgd2FudCB0aGlzIG5vZGU/IFdlbGwsIHRoZW4gaGUgZ2V0cyBub3RoaW5nXG5cbiAgICAgICAgICBpZiAocmVzdWx0ID09PSBmYWxzZSkgcmV0dXJuICcnO1xuICAgICAgICB9IC8vIERlZXAgbG9vcCB0aHJvdWdoIGFsbCBjaGlsZHJlbiBhbmQgYXBwbHkgbW9kaWZpZXJcblxuXG4gICAgICAgIGN1cnJlbnQuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0geG1sT3JGbih0aGlzKTtcblxuICAgICAgICAgIGNvbnN0IF90aGlzID0gcmVzdWx0IHx8IHRoaXM7IC8vIElmIG1vZGlmaWVyIHJldHVybnMgZmFsc2UsIGRpc2NhcmQgbm9kZVxuXG5cbiAgICAgICAgICBpZiAocmVzdWx0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmUoKTsgLy8gSWYgbW9kaWZpZXIgcmV0dXJucyBuZXcgbm9kZSwgdXNlIGl0XG4gICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgJiYgdGhpcyAhPT0gX3RoaXMpIHtcbiAgICAgICAgICAgIHRoaXMucmVwbGFjZShfdGhpcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCB0cnVlKTtcbiAgICAgIH0gLy8gUmV0dXJuIG91dGVyIG9yIGlubmVyIGNvbnRlbnRcblxuXG4gICAgICByZXR1cm4gb3V0ZXJYTUwgPyBjdXJyZW50Lm5vZGUub3V0ZXJIVE1MIDogY3VycmVudC5ub2RlLmlubmVySFRNTDtcbiAgICB9IC8vIEFjdCBhcyBzZXR0ZXIgaWYgd2UgZ290IGEgc3RyaW5nXG4gICAgLy8gVGhlIGRlZmF1bHQgZm9yIGltcG9ydCBpcywgdGhhdCB0aGUgY3VycmVudCBub2RlIGlzIG5vdCByZXBsYWNlZFxuXG5cbiAgICBvdXRlclhNTCA9IG91dGVyWE1MID09IG51bGwgPyBmYWxzZSA6IG91dGVyWE1MOyAvLyBDcmVhdGUgdGVtcG9yYXJ5IGhvbGRlclxuXG4gICAgY29uc3Qgd2VsbCA9IGNyZWF0ZSgnd3JhcHBlcicsIG5zKTtcbiAgICBjb25zdCBmcmFnbWVudCA9IGdsb2JhbHMuZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpOyAvLyBEdW1wIHJhdyBzdmdcblxuICAgIHdlbGwuaW5uZXJIVE1MID0geG1sT3JGbjsgLy8gVHJhbnNwbGFudCBub2RlcyBpbnRvIHRoZSBmcmFnbWVudFxuXG4gICAgZm9yIChsZXQgbGVuID0gd2VsbC5jaGlsZHJlbi5sZW5ndGg7IGxlbi0tOykge1xuICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQod2VsbC5maXJzdEVsZW1lbnRDaGlsZCk7XG4gICAgfVxuXG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnQoKTsgLy8gQWRkIHRoZSB3aG9sZSBmcmFnbWVudCBhdCBvbmNlXG5cbiAgICByZXR1cm4gb3V0ZXJYTUwgPyB0aGlzLnJlcGxhY2UoZnJhZ21lbnQpICYmIHBhcmVudCA6IHRoaXMuYWRkKGZyYWdtZW50KTtcbiAgfVxuXG59XG5leHRlbmQoRG9tLCB7XG4gIGF0dHIsXG4gIGZpbmQsXG4gIGZpbmRPbmVcbn0pO1xucmVnaXN0ZXIoRG9tLCAnRG9tJyk7XG5cbmNsYXNzIEVsZW1lbnQgZXh0ZW5kcyBEb20ge1xuICBjb25zdHJ1Y3Rvcihub2RlLCBhdHRycykge1xuICAgIHN1cGVyKG5vZGUsIGF0dHJzKTsgLy8gaW5pdGlhbGl6ZSBkYXRhIG9iamVjdFxuXG4gICAgdGhpcy5kb20gPSB7fTsgLy8gY3JlYXRlIGNpcmN1bGFyIHJlZmVyZW5jZVxuXG4gICAgdGhpcy5ub2RlLmluc3RhbmNlID0gdGhpcztcblxuICAgIGlmIChub2RlLmhhc0F0dHJpYnV0ZSgnc3ZnanM6ZGF0YScpKSB7XG4gICAgICAvLyBwdWxsIHN2Z2pzIGRhdGEgZnJvbSB0aGUgZG9tIChnZXRBdHRyaWJ1dGVOUyBkb2Vzbid0IHdvcmsgaW4gaHRtbDUpXG4gICAgICB0aGlzLnNldERhdGEoSlNPTi5wYXJzZShub2RlLmdldEF0dHJpYnV0ZSgnc3ZnanM6ZGF0YScpKSB8fCB7fSk7XG4gICAgfVxuICB9IC8vIE1vdmUgZWxlbWVudCBieSBpdHMgY2VudGVyXG5cblxuICBjZW50ZXIoeCwgeSkge1xuICAgIHJldHVybiB0aGlzLmN4KHgpLmN5KHkpO1xuICB9IC8vIE1vdmUgYnkgY2VudGVyIG92ZXIgeC1heGlzXG5cblxuICBjeCh4KSB7XG4gICAgcmV0dXJuIHggPT0gbnVsbCA/IHRoaXMueCgpICsgdGhpcy53aWR0aCgpIC8gMiA6IHRoaXMueCh4IC0gdGhpcy53aWR0aCgpIC8gMik7XG4gIH0gLy8gTW92ZSBieSBjZW50ZXIgb3ZlciB5LWF4aXNcblxuXG4gIGN5KHkpIHtcbiAgICByZXR1cm4geSA9PSBudWxsID8gdGhpcy55KCkgKyB0aGlzLmhlaWdodCgpIC8gMiA6IHRoaXMueSh5IC0gdGhpcy5oZWlnaHQoKSAvIDIpO1xuICB9IC8vIEdldCBkZWZzXG5cblxuICBkZWZzKCkge1xuICAgIGNvbnN0IHJvb3QgPSB0aGlzLnJvb3QoKTtcbiAgICByZXR1cm4gcm9vdCAmJiByb290LmRlZnMoKTtcbiAgfSAvLyBSZWxhdGl2ZSBtb3ZlIG92ZXIgeCBhbmQgeSBheGVzXG5cblxuICBkbW92ZSh4LCB5KSB7XG4gICAgcmV0dXJuIHRoaXMuZHgoeCkuZHkoeSk7XG4gIH0gLy8gUmVsYXRpdmUgbW92ZSBvdmVyIHggYXhpc1xuXG5cbiAgZHgoeCA9IDApIHtcbiAgICByZXR1cm4gdGhpcy54KG5ldyBTVkdOdW1iZXIoeCkucGx1cyh0aGlzLngoKSkpO1xuICB9IC8vIFJlbGF0aXZlIG1vdmUgb3ZlciB5IGF4aXNcblxuXG4gIGR5KHkgPSAwKSB7XG4gICAgcmV0dXJuIHRoaXMueShuZXcgU1ZHTnVtYmVyKHkpLnBsdXModGhpcy55KCkpKTtcbiAgfVxuXG4gIGdldEV2ZW50SG9sZGVyKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9IC8vIFNldCBoZWlnaHQgb2YgZWxlbWVudFxuXG5cbiAgaGVpZ2h0KGhlaWdodCkge1xuICAgIHJldHVybiB0aGlzLmF0dHIoJ2hlaWdodCcsIGhlaWdodCk7XG4gIH0gLy8gTW92ZSBlbGVtZW50IHRvIGdpdmVuIHggYW5kIHkgdmFsdWVzXG5cblxuICBtb3ZlKHgsIHkpIHtcbiAgICByZXR1cm4gdGhpcy54KHgpLnkoeSk7XG4gIH0gLy8gcmV0dXJuIGFycmF5IG9mIGFsbCBhbmNlc3RvcnMgb2YgZ2l2ZW4gdHlwZSB1cCB0byB0aGUgcm9vdCBzdmdcblxuXG4gIHBhcmVudHModW50aWwgPSB0aGlzLnJvb3QoKSkge1xuICAgIGNvbnN0IGlzU2VsZWN0b3IgPSB0eXBlb2YgdW50aWwgPT09ICdzdHJpbmcnO1xuXG4gICAgaWYgKCFpc1NlbGVjdG9yKSB7XG4gICAgICB1bnRpbCA9IG1ha2VJbnN0YW5jZSh1bnRpbCk7XG4gICAgfVxuXG4gICAgY29uc3QgcGFyZW50cyA9IG5ldyBMaXN0KCk7XG4gICAgbGV0IHBhcmVudCA9IHRoaXM7XG5cbiAgICB3aGlsZSAoKHBhcmVudCA9IHBhcmVudC5wYXJlbnQoKSkgJiYgcGFyZW50Lm5vZGUgIT09IGdsb2JhbHMuZG9jdW1lbnQgJiYgcGFyZW50Lm5vZGVOYW1lICE9PSAnI2RvY3VtZW50LWZyYWdtZW50Jykge1xuICAgICAgcGFyZW50cy5wdXNoKHBhcmVudCk7XG5cbiAgICAgIGlmICghaXNTZWxlY3RvciAmJiBwYXJlbnQubm9kZSA9PT0gdW50aWwubm9kZSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKGlzU2VsZWN0b3IgJiYgcGFyZW50Lm1hdGNoZXModW50aWwpKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZiAocGFyZW50Lm5vZGUgPT09IHRoaXMucm9vdCgpLm5vZGUpIHtcbiAgICAgICAgLy8gV2Ugd29ya2VkIG91ciB3YXkgdG8gdGhlIHJvb3QgYW5kIGRpZG4ndCBtYXRjaCBgdW50aWxgXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnRzO1xuICB9IC8vIEdldCByZWZlcmVuY2VkIGVsZW1lbnQgZm9ybSBhdHRyaWJ1dGUgdmFsdWVcblxuXG4gIHJlZmVyZW5jZShhdHRyKSB7XG4gICAgYXR0ciA9IHRoaXMuYXR0cihhdHRyKTtcbiAgICBpZiAoIWF0dHIpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IG0gPSAoYXR0ciArICcnKS5tYXRjaChyZWZlcmVuY2UpO1xuICAgIHJldHVybiBtID8gbWFrZUluc3RhbmNlKG1bMV0pIDogbnVsbDtcbiAgfSAvLyBHZXQgcGFyZW50IGRvY3VtZW50XG5cblxuICByb290KCkge1xuICAgIGNvbnN0IHAgPSB0aGlzLnBhcmVudChnZXRDbGFzcyhyb290KSk7XG4gICAgcmV0dXJuIHAgJiYgcC5yb290KCk7XG4gIH0gLy8gc2V0IGdpdmVuIGRhdGEgdG8gdGhlIGVsZW1lbnRzIGRhdGEgcHJvcGVydHlcblxuXG4gIHNldERhdGEobykge1xuICAgIHRoaXMuZG9tID0gbztcbiAgICByZXR1cm4gdGhpcztcbiAgfSAvLyBTZXQgZWxlbWVudCBzaXplIHRvIGdpdmVuIHdpZHRoIGFuZCBoZWlnaHRcblxuXG4gIHNpemUod2lkdGgsIGhlaWdodCkge1xuICAgIGNvbnN0IHAgPSBwcm9wb3J0aW9uYWxTaXplKHRoaXMsIHdpZHRoLCBoZWlnaHQpO1xuICAgIHJldHVybiB0aGlzLndpZHRoKG5ldyBTVkdOdW1iZXIocC53aWR0aCkpLmhlaWdodChuZXcgU1ZHTnVtYmVyKHAuaGVpZ2h0KSk7XG4gIH0gLy8gU2V0IHdpZHRoIG9mIGVsZW1lbnRcblxuXG4gIHdpZHRoKHdpZHRoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXR0cignd2lkdGgnLCB3aWR0aCk7XG4gIH0gLy8gd3JpdGUgc3ZnanMgZGF0YSB0byB0aGUgZG9tXG5cblxuICB3cml0ZURhdGFUb0RvbSgpIHtcbiAgICAvLyByZW1vdmUgcHJldmlvdXNseSBzZXQgZGF0YVxuICAgIHRoaXMubm9kZS5yZW1vdmVBdHRyaWJ1dGUoJ3N2Z2pzOmRhdGEnKTtcblxuICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmRvbSkubGVuZ3RoKSB7XG4gICAgICB0aGlzLm5vZGUuc2V0QXR0cmlidXRlKCdzdmdqczpkYXRhJywgSlNPTi5zdHJpbmdpZnkodGhpcy5kb20pKTsgLy8gc2VlICM0MjhcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXIud3JpdGVEYXRhVG9Eb20oKTtcbiAgfSAvLyBNb3ZlIG92ZXIgeC1heGlzXG5cblxuICB4KHgpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyKCd4JywgeCk7XG4gIH0gLy8gTW92ZSBvdmVyIHktYXhpc1xuXG5cbiAgeSh5KSB7XG4gICAgcmV0dXJuIHRoaXMuYXR0cigneScsIHkpO1xuICB9XG5cbn1cbmV4dGVuZChFbGVtZW50LCB7XG4gIGJib3gsXG4gIHJib3gsXG4gIGluc2lkZSxcbiAgcG9pbnQsXG4gIGN0bSxcbiAgc2NyZWVuQ1RNXG59KTtcbnJlZ2lzdGVyKEVsZW1lbnQsICdFbGVtZW50Jyk7XG5cbmNvbnN0IHN1Z2FyID0ge1xuICBzdHJva2U6IFsnY29sb3InLCAnd2lkdGgnLCAnb3BhY2l0eScsICdsaW5lY2FwJywgJ2xpbmVqb2luJywgJ21pdGVybGltaXQnLCAnZGFzaGFycmF5JywgJ2Rhc2hvZmZzZXQnXSxcbiAgZmlsbDogWydjb2xvcicsICdvcGFjaXR5JywgJ3J1bGUnXSxcbiAgcHJlZml4OiBmdW5jdGlvbiAodCwgYSkge1xuICAgIHJldHVybiBhID09PSAnY29sb3InID8gdCA6IHQgKyAnLScgKyBhO1xuICB9XG59IC8vIEFkZCBzdWdhciBmb3IgZmlsbCBhbmQgc3Ryb2tlXG47XG5bJ2ZpbGwnLCAnc3Ryb2tlJ10uZm9yRWFjaChmdW5jdGlvbiAobSkge1xuICBjb25zdCBleHRlbnNpb24gPSB7fTtcbiAgbGV0IGk7XG5cbiAgZXh0ZW5zaW9uW21dID0gZnVuY3Rpb24gKG8pIHtcbiAgICBpZiAodHlwZW9mIG8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gdGhpcy5hdHRyKG0pO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgbyA9PT0gJ3N0cmluZycgfHwgbyBpbnN0YW5jZW9mIENvbG9yIHx8IENvbG9yLmlzUmdiKG8pIHx8IG8gaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICB0aGlzLmF0dHIobSwgbyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHNldCBhbGwgYXR0cmlidXRlcyBmcm9tIHN1Z2FyLmZpbGwgYW5kIHN1Z2FyLnN0cm9rZSBsaXN0XG4gICAgICBmb3IgKGkgPSBzdWdhclttXS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBpZiAob1tzdWdhclttXVtpXV0gIT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuYXR0cihzdWdhci5wcmVmaXgobSwgc3VnYXJbbV1baV0pLCBvW3N1Z2FyW21dW2ldXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICByZWdpc3Rlck1ldGhvZHMoWydFbGVtZW50JywgJ1J1bm5lciddLCBleHRlbnNpb24pO1xufSk7XG5yZWdpc3Rlck1ldGhvZHMoWydFbGVtZW50JywgJ1J1bm5lciddLCB7XG4gIC8vIExldCB0aGUgdXNlciBzZXQgdGhlIG1hdHJpeCBkaXJlY3RseVxuICBtYXRyaXg6IGZ1bmN0aW9uIChtYXQsIGIsIGMsIGQsIGUsIGYpIHtcbiAgICAvLyBBY3QgYXMgYSBnZXR0ZXJcbiAgICBpZiAobWF0ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBuZXcgTWF0cml4KHRoaXMpO1xuICAgIH0gLy8gQWN0IGFzIGEgc2V0dGVyLCB0aGUgdXNlciBjYW4gcGFzcyBhIG1hdHJpeCBvciBhIHNldCBvZiBudW1iZXJzXG5cblxuICAgIHJldHVybiB0aGlzLmF0dHIoJ3RyYW5zZm9ybScsIG5ldyBNYXRyaXgobWF0LCBiLCBjLCBkLCBlLCBmKSk7XG4gIH0sXG4gIC8vIE1hcCByb3RhdGlvbiB0byB0cmFuc2Zvcm1cbiAgcm90YXRlOiBmdW5jdGlvbiAoYW5nbGUsIGN4LCBjeSkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybSh7XG4gICAgICByb3RhdGU6IGFuZ2xlLFxuICAgICAgb3g6IGN4LFxuICAgICAgb3k6IGN5XG4gICAgfSwgdHJ1ZSk7XG4gIH0sXG4gIC8vIE1hcCBza2V3IHRvIHRyYW5zZm9ybVxuICBza2V3OiBmdW5jdGlvbiAoeCwgeSwgY3gsIGN5KSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPT09IDEgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMyA/IHRoaXMudHJhbnNmb3JtKHtcbiAgICAgIHNrZXc6IHgsXG4gICAgICBveDogeSxcbiAgICAgIG95OiBjeFxuICAgIH0sIHRydWUpIDogdGhpcy50cmFuc2Zvcm0oe1xuICAgICAgc2tldzogW3gsIHldLFxuICAgICAgb3g6IGN4LFxuICAgICAgb3k6IGN5XG4gICAgfSwgdHJ1ZSk7XG4gIH0sXG4gIHNoZWFyOiBmdW5jdGlvbiAobGFtLCBjeCwgY3kpIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm0oe1xuICAgICAgc2hlYXI6IGxhbSxcbiAgICAgIG94OiBjeCxcbiAgICAgIG95OiBjeVxuICAgIH0sIHRydWUpO1xuICB9LFxuICAvLyBNYXAgc2NhbGUgdG8gdHJhbnNmb3JtXG4gIHNjYWxlOiBmdW5jdGlvbiAoeCwgeSwgY3gsIGN5KSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPT09IDEgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMyA/IHRoaXMudHJhbnNmb3JtKHtcbiAgICAgIHNjYWxlOiB4LFxuICAgICAgb3g6IHksXG4gICAgICBveTogY3hcbiAgICB9LCB0cnVlKSA6IHRoaXMudHJhbnNmb3JtKHtcbiAgICAgIHNjYWxlOiBbeCwgeV0sXG4gICAgICBveDogY3gsXG4gICAgICBveTogY3lcbiAgICB9LCB0cnVlKTtcbiAgfSxcbiAgLy8gTWFwIHRyYW5zbGF0ZSB0byB0cmFuc2Zvcm1cbiAgdHJhbnNsYXRlOiBmdW5jdGlvbiAoeCwgeSkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybSh7XG4gICAgICB0cmFuc2xhdGU6IFt4LCB5XVxuICAgIH0sIHRydWUpO1xuICB9LFxuICAvLyBNYXAgcmVsYXRpdmUgdHJhbnNsYXRpb25zIHRvIHRyYW5zZm9ybVxuICByZWxhdGl2ZTogZnVuY3Rpb24gKHgsIHkpIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm0oe1xuICAgICAgcmVsYXRpdmU6IFt4LCB5XVxuICAgIH0sIHRydWUpO1xuICB9LFxuICAvLyBNYXAgZmxpcCB0byB0cmFuc2Zvcm1cbiAgZmxpcDogZnVuY3Rpb24gKGRpcmVjdGlvbiA9ICdib3RoJywgb3JpZ2luID0gJ2NlbnRlcicpIHtcbiAgICBpZiAoJ3h5Ym90aHRydWUnLmluZGV4T2YoZGlyZWN0aW9uKSA9PT0gLTEpIHtcbiAgICAgIG9yaWdpbiA9IGRpcmVjdGlvbjtcbiAgICAgIGRpcmVjdGlvbiA9ICdib3RoJztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm0oe1xuICAgICAgZmxpcDogZGlyZWN0aW9uLFxuICAgICAgb3JpZ2luOiBvcmlnaW5cbiAgICB9LCB0cnVlKTtcbiAgfSxcbiAgLy8gT3BhY2l0eVxuICBvcGFjaXR5OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyKCdvcGFjaXR5JywgdmFsdWUpO1xuICB9XG59KTtcbnJlZ2lzdGVyTWV0aG9kcygncmFkaXVzJywge1xuICAvLyBBZGQgeCBhbmQgeSByYWRpdXNcbiAgcmFkaXVzOiBmdW5jdGlvbiAoeCwgeSA9IHgpIHtcbiAgICBjb25zdCB0eXBlID0gKHRoaXMuX2VsZW1lbnQgfHwgdGhpcykudHlwZTtcbiAgICByZXR1cm4gdHlwZSA9PT0gJ3JhZGlhbEdyYWRpZW50JyA/IHRoaXMuYXR0cigncicsIG5ldyBTVkdOdW1iZXIoeCkpIDogdGhpcy5yeCh4KS5yeSh5KTtcbiAgfVxufSk7XG5yZWdpc3Rlck1ldGhvZHMoJ1BhdGgnLCB7XG4gIC8vIEdldCBwYXRoIGxlbmd0aFxuICBsZW5ndGg6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlLmdldFRvdGFsTGVuZ3RoKCk7XG4gIH0sXG4gIC8vIEdldCBwb2ludCBhdCBsZW5ndGhcbiAgcG9pbnRBdDogZnVuY3Rpb24gKGxlbmd0aCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5ub2RlLmdldFBvaW50QXRMZW5ndGgobGVuZ3RoKSk7XG4gIH1cbn0pO1xucmVnaXN0ZXJNZXRob2RzKFsnRWxlbWVudCcsICdSdW5uZXInXSwge1xuICAvLyBTZXQgZm9udFxuICBmb250OiBmdW5jdGlvbiAoYSwgdikge1xuICAgIGlmICh0eXBlb2YgYSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGZvciAodiBpbiBhKSB0aGlzLmZvbnQodiwgYVt2XSk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJldHVybiBhID09PSAnbGVhZGluZycgPyB0aGlzLmxlYWRpbmcodikgOiBhID09PSAnYW5jaG9yJyA/IHRoaXMuYXR0cigndGV4dC1hbmNob3InLCB2KSA6IGEgPT09ICdzaXplJyB8fCBhID09PSAnZmFtaWx5JyB8fCBhID09PSAnd2VpZ2h0JyB8fCBhID09PSAnc3RyZXRjaCcgfHwgYSA9PT0gJ3ZhcmlhbnQnIHx8IGEgPT09ICdzdHlsZScgPyB0aGlzLmF0dHIoJ2ZvbnQtJyArIGEsIHYpIDogdGhpcy5hdHRyKGEsIHYpO1xuICB9XG59KTsgLy8gQWRkIGV2ZW50cyB0byBlbGVtZW50c1xuXG5jb25zdCBtZXRob2RzID0gWydjbGljaycsICdkYmxjbGljaycsICdtb3VzZWRvd24nLCAnbW91c2V1cCcsICdtb3VzZW92ZXInLCAnbW91c2VvdXQnLCAnbW91c2Vtb3ZlJywgJ21vdXNlZW50ZXInLCAnbW91c2VsZWF2ZScsICd0b3VjaHN0YXJ0JywgJ3RvdWNobW92ZScsICd0b3VjaGxlYXZlJywgJ3RvdWNoZW5kJywgJ3RvdWNoY2FuY2VsJ10ucmVkdWNlKGZ1bmN0aW9uIChsYXN0LCBldmVudCkge1xuICAvLyBhZGQgZXZlbnQgdG8gRWxlbWVudFxuICBjb25zdCBmbiA9IGZ1bmN0aW9uIChmKSB7XG4gICAgaWYgKGYgPT09IG51bGwpIHtcbiAgICAgIHRoaXMub2ZmKGV2ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vbihldmVudCwgZik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgbGFzdFtldmVudF0gPSBmbjtcbiAgcmV0dXJuIGxhc3Q7XG59LCB7fSk7XG5yZWdpc3Rlck1ldGhvZHMoJ0VsZW1lbnQnLCBtZXRob2RzKTtcblxuZnVuY3Rpb24gdW50cmFuc2Zvcm0oKSB7XG4gIHJldHVybiB0aGlzLmF0dHIoJ3RyYW5zZm9ybScsIG51bGwpO1xufSAvLyBtZXJnZSB0aGUgd2hvbGUgdHJhbnNmb3JtYXRpb24gY2hhaW4gaW50byBvbmUgbWF0cml4IGFuZCByZXR1cm5zIGl0XG5cbmZ1bmN0aW9uIG1hdHJpeGlmeSgpIHtcbiAgY29uc3QgbWF0cml4ID0gKHRoaXMuYXR0cigndHJhbnNmb3JtJykgfHwgJycgLy8gc3BsaXQgdHJhbnNmb3JtYXRpb25zXG4gICkuc3BsaXQodHJhbnNmb3Jtcykuc2xpY2UoMCwgLTEpLm1hcChmdW5jdGlvbiAoc3RyKSB7XG4gICAgLy8gZ2VuZXJhdGUga2V5ID0+IHZhbHVlIHBhaXJzXG4gICAgY29uc3Qga3YgPSBzdHIudHJpbSgpLnNwbGl0KCcoJyk7XG4gICAgcmV0dXJuIFtrdlswXSwga3ZbMV0uc3BsaXQoZGVsaW1pdGVyKS5tYXAoZnVuY3Rpb24gKHN0cikge1xuICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoc3RyKTtcbiAgICB9KV07XG4gIH0pLnJldmVyc2UoKSAvLyBtZXJnZSBldmVyeSB0cmFuc2Zvcm1hdGlvbiBpbnRvIG9uZSBtYXRyaXhcbiAgLnJlZHVjZShmdW5jdGlvbiAobWF0cml4LCB0cmFuc2Zvcm0pIHtcbiAgICBpZiAodHJhbnNmb3JtWzBdID09PSAnbWF0cml4Jykge1xuICAgICAgcmV0dXJuIG1hdHJpeC5sbXVsdGlwbHkoTWF0cml4LmZyb21BcnJheSh0cmFuc2Zvcm1bMV0pKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWF0cml4W3RyYW5zZm9ybVswXV0uYXBwbHkobWF0cml4LCB0cmFuc2Zvcm1bMV0pO1xuICB9LCBuZXcgTWF0cml4KCkpO1xuICByZXR1cm4gbWF0cml4O1xufSAvLyBhZGQgYW4gZWxlbWVudCB0byBhbm90aGVyIHBhcmVudCB3aXRob3V0IGNoYW5naW5nIHRoZSB2aXN1YWwgcmVwcmVzZW50YXRpb24gb24gdGhlIHNjcmVlblxuXG5mdW5jdGlvbiB0b1BhcmVudChwYXJlbnQsIGkpIHtcbiAgaWYgKHRoaXMgPT09IHBhcmVudCkgcmV0dXJuIHRoaXM7XG4gIGNvbnN0IGN0bSA9IHRoaXMuc2NyZWVuQ1RNKCk7XG4gIGNvbnN0IHBDdG0gPSBwYXJlbnQuc2NyZWVuQ1RNKCkuaW52ZXJzZSgpO1xuICB0aGlzLmFkZFRvKHBhcmVudCwgaSkudW50cmFuc2Zvcm0oKS50cmFuc2Zvcm0ocEN0bS5tdWx0aXBseShjdG0pKTtcbiAgcmV0dXJuIHRoaXM7XG59IC8vIHNhbWUgYXMgYWJvdmUgd2l0aCBwYXJlbnQgZXF1YWxzIHJvb3Qtc3ZnXG5cbmZ1bmN0aW9uIHRvUm9vdChpKSB7XG4gIHJldHVybiB0aGlzLnRvUGFyZW50KHRoaXMucm9vdCgpLCBpKTtcbn0gLy8gQWRkIHRyYW5zZm9ybWF0aW9uc1xuXG5mdW5jdGlvbiB0cmFuc2Zvcm0obywgcmVsYXRpdmUpIHtcbiAgLy8gQWN0IGFzIGEgZ2V0dGVyIGlmIG5vIG9iamVjdCB3YXMgcGFzc2VkXG4gIGlmIChvID09IG51bGwgfHwgdHlwZW9mIG8gPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgZGVjb21wb3NlZCA9IG5ldyBNYXRyaXgodGhpcykuZGVjb21wb3NlKCk7XG4gICAgcmV0dXJuIG8gPT0gbnVsbCA/IGRlY29tcG9zZWQgOiBkZWNvbXBvc2VkW29dO1xuICB9XG5cbiAgaWYgKCFNYXRyaXguaXNNYXRyaXhMaWtlKG8pKSB7XG4gICAgLy8gU2V0IHRoZSBvcmlnaW4gYWNjb3JkaW5nIHRvIHRoZSBkZWZpbmVkIHRyYW5zZm9ybVxuICAgIG8gPSB7IC4uLm8sXG4gICAgICBvcmlnaW46IGdldE9yaWdpbihvLCB0aGlzKVxuICAgIH07XG4gIH0gLy8gVGhlIHVzZXIgY2FuIHBhc3MgYSBib29sZWFuLCBhbiBFbGVtZW50IG9yIGFuIE1hdHJpeCBvciBub3RoaW5nXG5cblxuICBjb25zdCBjbGVhblJlbGF0aXZlID0gcmVsYXRpdmUgPT09IHRydWUgPyB0aGlzIDogcmVsYXRpdmUgfHwgZmFsc2U7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBNYXRyaXgoY2xlYW5SZWxhdGl2ZSkudHJhbnNmb3JtKG8pO1xuICByZXR1cm4gdGhpcy5hdHRyKCd0cmFuc2Zvcm0nLCByZXN1bHQpO1xufVxucmVnaXN0ZXJNZXRob2RzKCdFbGVtZW50Jywge1xuICB1bnRyYW5zZm9ybSxcbiAgbWF0cml4aWZ5LFxuICB0b1BhcmVudCxcbiAgdG9Sb290LFxuICB0cmFuc2Zvcm1cbn0pO1xuXG5jbGFzcyBDb250YWluZXIgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZmxhdHRlbihwYXJlbnQgPSB0aGlzLCBpbmRleCkge1xuICAgIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIENvbnRhaW5lcikge1xuICAgICAgICByZXR1cm4gdGhpcy5mbGF0dGVuKCkudW5ncm91cCgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5ncm91cChwYXJlbnQgPSB0aGlzLnBhcmVudCgpLCBpbmRleCA9IHBhcmVudC5pbmRleCh0aGlzKSkge1xuICAgIC8vIHdoZW4gcGFyZW50ICE9IHRoaXMsIHdlIHdhbnQgYXBwZW5kIGFsbCBlbGVtZW50cyB0byB0aGUgZW5kXG4gICAgaW5kZXggPSBpbmRleCA9PT0gLTEgPyBwYXJlbnQuY2hpbGRyZW4oKS5sZW5ndGggOiBpbmRleDtcbiAgICB0aGlzLmVhY2goZnVuY3Rpb24gKGksIGNoaWxkcmVuKSB7XG4gICAgICAvLyByZXZlcnNlIGVhY2hcbiAgICAgIHJldHVybiBjaGlsZHJlbltjaGlsZHJlbi5sZW5ndGggLSBpIC0gMV0udG9QYXJlbnQocGFyZW50LCBpbmRleCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMucmVtb3ZlKCk7XG4gIH1cblxufVxucmVnaXN0ZXIoQ29udGFpbmVyLCAnQ29udGFpbmVyJyk7XG5cbmNsYXNzIERlZnMgZXh0ZW5kcyBDb250YWluZXIge1xuICBjb25zdHJ1Y3Rvcihub2RlLCBhdHRycyA9IG5vZGUpIHtcbiAgICBzdXBlcihub2RlT3JOZXcoJ2RlZnMnLCBub2RlKSwgYXR0cnMpO1xuICB9XG5cbiAgZmxhdHRlbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVuZ3JvdXAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxufVxucmVnaXN0ZXIoRGVmcywgJ0RlZnMnKTtcblxuY2xhc3MgU2hhcGUgZXh0ZW5kcyBFbGVtZW50IHt9XG5yZWdpc3RlcihTaGFwZSwgJ1NoYXBlJyk7XG5cbmZ1bmN0aW9uIHJ4KHJ4KSB7XG4gIHJldHVybiB0aGlzLmF0dHIoJ3J4JywgcngpO1xufSAvLyBSYWRpdXMgeSB2YWx1ZVxuXG5mdW5jdGlvbiByeShyeSkge1xuICByZXR1cm4gdGhpcy5hdHRyKCdyeScsIHJ5KTtcbn0gLy8gTW92ZSBvdmVyIHgtYXhpc1xuXG5mdW5jdGlvbiB4JDMoeCkge1xuICByZXR1cm4geCA9PSBudWxsID8gdGhpcy5jeCgpIC0gdGhpcy5yeCgpIDogdGhpcy5jeCh4ICsgdGhpcy5yeCgpKTtcbn0gLy8gTW92ZSBvdmVyIHktYXhpc1xuXG5mdW5jdGlvbiB5JDMoeSkge1xuICByZXR1cm4geSA9PSBudWxsID8gdGhpcy5jeSgpIC0gdGhpcy5yeSgpIDogdGhpcy5jeSh5ICsgdGhpcy5yeSgpKTtcbn0gLy8gTW92ZSBieSBjZW50ZXIgb3ZlciB4LWF4aXNcblxuZnVuY3Rpb24gY3gkMSh4KSB7XG4gIHJldHVybiB0aGlzLmF0dHIoJ2N4JywgeCk7XG59IC8vIE1vdmUgYnkgY2VudGVyIG92ZXIgeS1heGlzXG5cbmZ1bmN0aW9uIGN5JDEoeSkge1xuICByZXR1cm4gdGhpcy5hdHRyKCdjeScsIHkpO1xufSAvLyBTZXQgd2lkdGggb2YgZWxlbWVudFxuXG5mdW5jdGlvbiB3aWR0aCQyKHdpZHRoKSB7XG4gIHJldHVybiB3aWR0aCA9PSBudWxsID8gdGhpcy5yeCgpICogMiA6IHRoaXMucngobmV3IFNWR051bWJlcih3aWR0aCkuZGl2aWRlKDIpKTtcbn0gLy8gU2V0IGhlaWdodCBvZiBlbGVtZW50XG5cbmZ1bmN0aW9uIGhlaWdodCQyKGhlaWdodCkge1xuICByZXR1cm4gaGVpZ2h0ID09IG51bGwgPyB0aGlzLnJ5KCkgKiAyIDogdGhpcy5yeShuZXcgU1ZHTnVtYmVyKGhlaWdodCkuZGl2aWRlKDIpKTtcbn1cblxudmFyIGNpcmNsZWQgPSB7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgcng6IHJ4LFxuICByeTogcnksXG4gIHg6IHgkMyxcbiAgeTogeSQzLFxuICBjeDogY3gkMSxcbiAgY3k6IGN5JDEsXG4gIHdpZHRoOiB3aWR0aCQyLFxuICBoZWlnaHQ6IGhlaWdodCQyXG59O1xuXG5jbGFzcyBFbGxpcHNlIGV4dGVuZHMgU2hhcGUge1xuICBjb25zdHJ1Y3Rvcihub2RlLCBhdHRycyA9IG5vZGUpIHtcbiAgICBzdXBlcihub2RlT3JOZXcoJ2VsbGlwc2UnLCBub2RlKSwgYXR0cnMpO1xuICB9XG5cbiAgc2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgY29uc3QgcCA9IHByb3BvcnRpb25hbFNpemUodGhpcywgd2lkdGgsIGhlaWdodCk7XG4gICAgcmV0dXJuIHRoaXMucngobmV3IFNWR051bWJlcihwLndpZHRoKS5kaXZpZGUoMikpLnJ5KG5ldyBTVkdOdW1iZXIocC5oZWlnaHQpLmRpdmlkZSgyKSk7XG4gIH1cblxufVxuZXh0ZW5kKEVsbGlwc2UsIGNpcmNsZWQpO1xucmVnaXN0ZXJNZXRob2RzKCdDb250YWluZXInLCB7XG4gIC8vIENyZWF0ZSBhbiBlbGxpcHNlXG4gIGVsbGlwc2U6IHdyYXBXaXRoQXR0ckNoZWNrKGZ1bmN0aW9uICh3aWR0aCA9IDAsIGhlaWdodCA9IHdpZHRoKSB7XG4gICAgcmV0dXJuIHRoaXMucHV0KG5ldyBFbGxpcHNlKCkpLnNpemUod2lkdGgsIGhlaWdodCkubW92ZSgwLCAwKTtcbiAgfSlcbn0pO1xucmVnaXN0ZXIoRWxsaXBzZSwgJ0VsbGlwc2UnKTtcblxuY2xhc3MgRnJhZ21lbnQgZXh0ZW5kcyBEb20ge1xuICBjb25zdHJ1Y3Rvcihub2RlID0gZ2xvYmFscy5kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCkpIHtcbiAgICBzdXBlcihub2RlKTtcbiAgfSAvLyBJbXBvcnQgLyBFeHBvcnQgcmF3IHhtbFxuXG5cbiAgeG1sKHhtbE9yRm4sIG91dGVyWE1MLCBucykge1xuICAgIGlmICh0eXBlb2YgeG1sT3JGbiA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICBucyA9IG91dGVyWE1MO1xuICAgICAgb3V0ZXJYTUwgPSB4bWxPckZuO1xuICAgICAgeG1sT3JGbiA9IG51bGw7XG4gICAgfSAvLyBiZWNhdXNlIHRoaXMgaXMgYSBmcmFnbWVudCB3ZSBoYXZlIHRvIHB1dCBhbGwgZWxlbWVudHMgaW50byBhIHdyYXBwZXIgZmlyc3RcbiAgICAvLyBiZWZvcmUgd2UgY2FuIGdldCB0aGUgaW5uZXJYTUwgZnJvbSBpdFxuXG5cbiAgICBpZiAoeG1sT3JGbiA9PSBudWxsIHx8IHR5cGVvZiB4bWxPckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zdCB3cmFwcGVyID0gbmV3IERvbShjcmVhdGUoJ3dyYXBwZXInLCBucykpO1xuICAgICAgd3JhcHBlci5hZGQodGhpcy5ub2RlLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICByZXR1cm4gd3JhcHBlci54bWwoZmFsc2UsIG5zKTtcbiAgICB9IC8vIEFjdCBhcyBzZXR0ZXIgaWYgd2UgZ290IGEgc3RyaW5nXG5cblxuICAgIHJldHVybiBzdXBlci54bWwoeG1sT3JGbiwgZmFsc2UsIG5zKTtcbiAgfVxuXG59XG5cbnJlZ2lzdGVyKEZyYWdtZW50LCAnRnJhZ21lbnQnKTtcblxuZnVuY3Rpb24gZnJvbSh4LCB5KSB7XG4gIHJldHVybiAodGhpcy5fZWxlbWVudCB8fCB0aGlzKS50eXBlID09PSAncmFkaWFsR3JhZGllbnQnID8gdGhpcy5hdHRyKHtcbiAgICBmeDogbmV3IFNWR051bWJlcih4KSxcbiAgICBmeTogbmV3IFNWR051bWJlcih5KVxuICB9KSA6IHRoaXMuYXR0cih7XG4gICAgeDE6IG5ldyBTVkdOdW1iZXIoeCksXG4gICAgeTE6IG5ldyBTVkdOdW1iZXIoeSlcbiAgfSk7XG59XG5mdW5jdGlvbiB0byh4LCB5KSB7XG4gIHJldHVybiAodGhpcy5fZWxlbWVudCB8fCB0aGlzKS50eXBlID09PSAncmFkaWFsR3JhZGllbnQnID8gdGhpcy5hdHRyKHtcbiAgICBjeDogbmV3IFNWR051bWJlcih4KSxcbiAgICBjeTogbmV3IFNWR051bWJlcih5KVxuICB9KSA6IHRoaXMuYXR0cih7XG4gICAgeDI6IG5ldyBTVkdOdW1iZXIoeCksXG4gICAgeTI6IG5ldyBTVkdOdW1iZXIoeSlcbiAgfSk7XG59XG5cbnZhciBncmFkaWVudGVkID0ge1xuICBfX3Byb3RvX186IG51bGwsXG4gIGZyb206IGZyb20sXG4gIHRvOiB0b1xufTtcblxuY2xhc3MgR3JhZGllbnQgZXh0ZW5kcyBDb250YWluZXIge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBhdHRycykge1xuICAgIHN1cGVyKG5vZGVPck5ldyh0eXBlICsgJ0dyYWRpZW50JywgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnID8gbnVsbCA6IHR5cGUpLCBhdHRycyk7XG4gIH0gLy8gY3VzdG9tIGF0dHIgdG8gaGFuZGxlIHRyYW5zZm9ybVxuXG5cbiAgYXR0cihhLCBiLCBjKSB7XG4gICAgaWYgKGEgPT09ICd0cmFuc2Zvcm0nKSBhID0gJ2dyYWRpZW50VHJhbnNmb3JtJztcbiAgICByZXR1cm4gc3VwZXIuYXR0cihhLCBiLCBjKTtcbiAgfVxuXG4gIGJib3goKSB7XG4gICAgcmV0dXJuIG5ldyBCb3goKTtcbiAgfVxuXG4gIHRhcmdldHMoKSB7XG4gICAgcmV0dXJuIGJhc2VGaW5kKCdzdmcgW2ZpbGwqPVwiJyArIHRoaXMuaWQoKSArICdcIl0nKTtcbiAgfSAvLyBBbGlhcyBzdHJpbmcgY29udmVyc2lvbiB0byBmaWxsXG5cblxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy51cmwoKTtcbiAgfSAvLyBVcGRhdGUgZ3JhZGllbnRcblxuXG4gIHVwZGF0ZShibG9jaykge1xuICAgIC8vIHJlbW92ZSBhbGwgc3RvcHNcbiAgICB0aGlzLmNsZWFyKCk7IC8vIGludm9rZSBwYXNzZWQgYmxvY2tcblxuICAgIGlmICh0eXBlb2YgYmxvY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGJsb2NrLmNhbGwodGhpcywgdGhpcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0gLy8gUmV0dXJuIHRoZSBmaWxsIGlkXG5cblxuICB1cmwoKSB7XG4gICAgcmV0dXJuICd1cmwoXCIjJyArIHRoaXMuaWQoKSArICdcIiknO1xuICB9XG5cbn1cbmV4dGVuZChHcmFkaWVudCwgZ3JhZGllbnRlZCk7XG5yZWdpc3Rlck1ldGhvZHMoe1xuICBDb250YWluZXI6IHtcbiAgICAvLyBDcmVhdGUgZ3JhZGllbnQgZWxlbWVudCBpbiBkZWZzXG4gICAgZ3JhZGllbnQoLi4uYXJncykge1xuICAgICAgcmV0dXJuIHRoaXMuZGVmcygpLmdyYWRpZW50KC4uLmFyZ3MpO1xuICAgIH1cblxuICB9LFxuICAvLyBkZWZpbmUgZ3JhZGllbnRcbiAgRGVmczoge1xuICAgIGdyYWRpZW50OiB3cmFwV2l0aEF0dHJDaGVjayhmdW5jdGlvbiAodHlwZSwgYmxvY2spIHtcbiAgICAgIHJldHVybiB0aGlzLnB1dChuZXcgR3JhZGllbnQodHlwZSkpLnVwZGF0ZShibG9jayk7XG4gICAgfSlcbiAgfVxufSk7XG5yZWdpc3RlcihHcmFkaWVudCwgJ0dyYWRpZW50Jyk7XG5cbmNsYXNzIFBhdHRlcm4gZXh0ZW5kcyBDb250YWluZXIge1xuICAvLyBJbml0aWFsaXplIG5vZGVcbiAgY29uc3RydWN0b3Iobm9kZSwgYXR0cnMgPSBub2RlKSB7XG4gICAgc3VwZXIobm9kZU9yTmV3KCdwYXR0ZXJuJywgbm9kZSksIGF0dHJzKTtcbiAgfSAvLyBjdXN0b20gYXR0ciB0byBoYW5kbGUgdHJhbnNmb3JtXG5cblxuICBhdHRyKGEsIGIsIGMpIHtcbiAgICBpZiAoYSA9PT0gJ3RyYW5zZm9ybScpIGEgPSAncGF0dGVyblRyYW5zZm9ybSc7XG4gICAgcmV0dXJuIHN1cGVyLmF0dHIoYSwgYiwgYyk7XG4gIH1cblxuICBiYm94KCkge1xuICAgIHJldHVybiBuZXcgQm94KCk7XG4gIH1cblxuICB0YXJnZXRzKCkge1xuICAgIHJldHVybiBiYXNlRmluZCgnc3ZnIFtmaWxsKj1cIicgKyB0aGlzLmlkKCkgKyAnXCJdJyk7XG4gIH0gLy8gQWxpYXMgc3RyaW5nIGNvbnZlcnNpb24gdG8gZmlsbFxuXG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMudXJsKCk7XG4gIH0gLy8gVXBkYXRlIHBhdHRlcm4gYnkgcmVidWlsZGluZ1xuXG5cbiAgdXBkYXRlKGJsb2NrKSB7XG4gICAgLy8gcmVtb3ZlIGNvbnRlbnRcbiAgICB0aGlzLmNsZWFyKCk7IC8vIGludm9rZSBwYXNzZWQgYmxvY2tcblxuICAgIGlmICh0eXBlb2YgYmxvY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGJsb2NrLmNhbGwodGhpcywgdGhpcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0gLy8gUmV0dXJuIHRoZSBmaWxsIGlkXG5cblxuICB1cmwoKSB7XG4gICAgcmV0dXJuICd1cmwoXCIjJyArIHRoaXMuaWQoKSArICdcIiknO1xuICB9XG5cbn1cbnJlZ2lzdGVyTWV0aG9kcyh7XG4gIENvbnRhaW5lcjoge1xuICAgIC8vIENyZWF0ZSBwYXR0ZXJuIGVsZW1lbnQgaW4gZGVmc1xuICAgIHBhdHRlcm4oLi4uYXJncykge1xuICAgICAgcmV0dXJuIHRoaXMuZGVmcygpLnBhdHRlcm4oLi4uYXJncyk7XG4gICAgfVxuXG4gIH0sXG4gIERlZnM6IHtcbiAgICBwYXR0ZXJuOiB3cmFwV2l0aEF0dHJDaGVjayhmdW5jdGlvbiAod2lkdGgsIGhlaWdodCwgYmxvY2spIHtcbiAgICAgIHJldHVybiB0aGlzLnB1dChuZXcgUGF0dGVybigpKS51cGRhdGUoYmxvY2spLmF0dHIoe1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwLFxuICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICBwYXR0ZXJuVW5pdHM6ICd1c2VyU3BhY2VPblVzZSdcbiAgICAgIH0pO1xuICAgIH0pXG4gIH1cbn0pO1xucmVnaXN0ZXIoUGF0dGVybiwgJ1BhdHRlcm4nKTtcblxuY2xhc3MgSW1hZ2UgZXh0ZW5kcyBTaGFwZSB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIGF0dHJzID0gbm9kZSkge1xuICAgIHN1cGVyKG5vZGVPck5ldygnaW1hZ2UnLCBub2RlKSwgYXR0cnMpO1xuICB9IC8vIChyZSlsb2FkIGltYWdlXG5cblxuICBsb2FkKHVybCwgY2FsbGJhY2spIHtcbiAgICBpZiAoIXVybCkgcmV0dXJuIHRoaXM7XG4gICAgY29uc3QgaW1nID0gbmV3IGdsb2JhbHMud2luZG93LkltYWdlKCk7XG4gICAgb24oaW1nLCAnbG9hZCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBjb25zdCBwID0gdGhpcy5wYXJlbnQoUGF0dGVybik7IC8vIGVuc3VyZSBpbWFnZSBzaXplXG5cbiAgICAgIGlmICh0aGlzLndpZHRoKCkgPT09IDAgJiYgdGhpcy5oZWlnaHQoKSA9PT0gMCkge1xuICAgICAgICB0aGlzLnNpemUoaW1nLndpZHRoLCBpbWcuaGVpZ2h0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHAgaW5zdGFuY2VvZiBQYXR0ZXJuKSB7XG4gICAgICAgIC8vIGVuc3VyZSBwYXR0ZXJuIHNpemUgaWYgbm90IHNldFxuICAgICAgICBpZiAocC53aWR0aCgpID09PSAwICYmIHAuaGVpZ2h0KCkgPT09IDApIHtcbiAgICAgICAgICBwLnNpemUodGhpcy53aWR0aCgpLCB0aGlzLmhlaWdodCgpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwodGhpcywgZSk7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG4gICAgb24oaW1nLCAnbG9hZCBlcnJvcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGRvbnQgZm9yZ2V0IHRvIHVuYmluZCBtZW1vcnkgbGVha2luZyBldmVudHNcbiAgICAgIG9mZihpbWcpO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLmF0dHIoJ2hyZWYnLCBpbWcuc3JjID0gdXJsLCB4bGluayk7XG4gIH1cblxufVxucmVnaXN0ZXJBdHRySG9vayhmdW5jdGlvbiAoYXR0ciwgdmFsLCBfdGhpcykge1xuICAvLyBjb252ZXJ0IGltYWdlIGZpbGwgYW5kIHN0cm9rZSB0byBwYXR0ZXJuc1xuICBpZiAoYXR0ciA9PT0gJ2ZpbGwnIHx8IGF0dHIgPT09ICdzdHJva2UnKSB7XG4gICAgaWYgKGlzSW1hZ2UudGVzdCh2YWwpKSB7XG4gICAgICB2YWwgPSBfdGhpcy5yb290KCkuZGVmcygpLmltYWdlKHZhbCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHZhbCBpbnN0YW5jZW9mIEltYWdlKSB7XG4gICAgdmFsID0gX3RoaXMucm9vdCgpLmRlZnMoKS5wYXR0ZXJuKDAsIDAsIHBhdHRlcm4gPT4ge1xuICAgICAgcGF0dGVybi5hZGQodmFsKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB2YWw7XG59KTtcbnJlZ2lzdGVyTWV0aG9kcyh7XG4gIENvbnRhaW5lcjoge1xuICAgIC8vIGNyZWF0ZSBpbWFnZSBlbGVtZW50LCBsb2FkIGltYWdlIGFuZCBzZXQgaXRzIHNpemVcbiAgICBpbWFnZTogd3JhcFdpdGhBdHRyQ2hlY2soZnVuY3Rpb24gKHNvdXJjZSwgY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiB0aGlzLnB1dChuZXcgSW1hZ2UoKSkuc2l6ZSgwLCAwKS5sb2FkKHNvdXJjZSwgY2FsbGJhY2spO1xuICAgIH0pXG4gIH1cbn0pO1xucmVnaXN0ZXIoSW1hZ2UsICdJbWFnZScpO1xuXG5jbGFzcyBQb2ludEFycmF5IGV4dGVuZHMgU1ZHQXJyYXkge1xuICAvLyBHZXQgYm91bmRpbmcgYm94IG9mIHBvaW50c1xuICBiYm94KCkge1xuICAgIGxldCBtYXhYID0gLUluZmluaXR5O1xuICAgIGxldCBtYXhZID0gLUluZmluaXR5O1xuICAgIGxldCBtaW5YID0gSW5maW5pdHk7XG4gICAgbGV0IG1pblkgPSBJbmZpbml0eTtcbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICBtYXhYID0gTWF0aC5tYXgoZWxbMF0sIG1heFgpO1xuICAgICAgbWF4WSA9IE1hdGgubWF4KGVsWzFdLCBtYXhZKTtcbiAgICAgIG1pblggPSBNYXRoLm1pbihlbFswXSwgbWluWCk7XG4gICAgICBtaW5ZID0gTWF0aC5taW4oZWxbMV0sIG1pblkpO1xuICAgIH0pO1xuICAgIHJldHVybiBuZXcgQm94KG1pblgsIG1pblksIG1heFggLSBtaW5YLCBtYXhZIC0gbWluWSk7XG4gIH0gLy8gTW92ZSBwb2ludCBzdHJpbmdcblxuXG4gIG1vdmUoeCwgeSkge1xuICAgIGNvbnN0IGJveCA9IHRoaXMuYmJveCgpOyAvLyBnZXQgcmVsYXRpdmUgb2Zmc2V0XG5cbiAgICB4IC09IGJveC54O1xuICAgIHkgLT0gYm94Lnk7IC8vIG1vdmUgZXZlcnkgcG9pbnRcblxuICAgIGlmICghaXNOYU4oeCkgJiYgIWlzTmFOKHkpKSB7XG4gICAgICBmb3IgKGxldCBpID0gdGhpcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICB0aGlzW2ldID0gW3RoaXNbaV1bMF0gKyB4LCB0aGlzW2ldWzFdICsgeV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0gLy8gUGFyc2UgcG9pbnQgc3RyaW5nIGFuZCBmbGF0IGFycmF5XG5cblxuICBwYXJzZShhcnJheSA9IFswLCAwXSkge1xuICAgIGNvbnN0IHBvaW50cyA9IFtdOyAvLyBpZiBpdCBpcyBhbiBhcnJheSwgd2UgZmxhdHRlbiBpdCBhbmQgdGhlcmVmb3JlIGNsb25lIGl0IHRvIDEgZGVwdGhzXG5cbiAgICBpZiAoYXJyYXkgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgYXJyYXkgPSBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLCBhcnJheSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEVsc2UsIGl0IGlzIGNvbnNpZGVyZWQgYXMgYSBzdHJpbmdcbiAgICAgIC8vIHBhcnNlIHBvaW50c1xuICAgICAgYXJyYXkgPSBhcnJheS50cmltKCkuc3BsaXQoZGVsaW1pdGVyKS5tYXAocGFyc2VGbG9hdCk7XG4gICAgfSAvLyB2YWxpZGF0ZSBwb2ludHMgLSBodHRwczovL3N2Z3dnLm9yZy9zdmcyLWRyYWZ0L3NoYXBlcy5odG1sI0RhdGFUeXBlUG9pbnRzXG4gICAgLy8gT2RkIG51bWJlciBvZiBjb29yZGluYXRlcyBpcyBhbiBlcnJvci4gSW4gc3VjaCBjYXNlcywgZHJvcCB0aGUgbGFzdCBvZGQgY29vcmRpbmF0ZS5cblxuXG4gICAgaWYgKGFycmF5Lmxlbmd0aCAlIDIgIT09IDApIGFycmF5LnBvcCgpOyAvLyB3cmFwIHBvaW50cyBpbiB0d28tdHVwbGVzXG5cbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gYXJyYXkubGVuZ3RoOyBpIDwgbGVuOyBpID0gaSArIDIpIHtcbiAgICAgIHBvaW50cy5wdXNoKFthcnJheVtpXSwgYXJyYXlbaSArIDFdXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBvaW50cztcbiAgfSAvLyBSZXNpemUgcG9seSBzdHJpbmdcblxuXG4gIHNpemUod2lkdGgsIGhlaWdodCkge1xuICAgIGxldCBpO1xuICAgIGNvbnN0IGJveCA9IHRoaXMuYmJveCgpOyAvLyByZWNhbGN1bGF0ZSBwb3NpdGlvbiBvZiBhbGwgcG9pbnRzIGFjY29yZGluZyB0byBuZXcgc2l6ZVxuXG4gICAgZm9yIChpID0gdGhpcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgaWYgKGJveC53aWR0aCkgdGhpc1tpXVswXSA9ICh0aGlzW2ldWzBdIC0gYm94LngpICogd2lkdGggLyBib3gud2lkdGggKyBib3gueDtcbiAgICAgIGlmIChib3guaGVpZ2h0KSB0aGlzW2ldWzFdID0gKHRoaXNbaV1bMV0gLSBib3gueSkgKiBoZWlnaHQgLyBib3guaGVpZ2h0ICsgYm94Lnk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0gLy8gQ29udmVydCBhcnJheSB0byBsaW5lIG9iamVjdFxuXG5cbiAgdG9MaW5lKCkge1xuICAgIHJldHVybiB7XG4gICAgICB4MTogdGhpc1swXVswXSxcbiAgICAgIHkxOiB0aGlzWzBdWzFdLFxuICAgICAgeDI6IHRoaXNbMV1bMF0sXG4gICAgICB5MjogdGhpc1sxXVsxXVxuICAgIH07XG4gIH0gLy8gQ29udmVydCBhcnJheSB0byBzdHJpbmdcblxuXG4gIHRvU3RyaW5nKCkge1xuICAgIGNvbnN0IGFycmF5ID0gW107IC8vIGNvbnZlcnQgdG8gYSBwb2x5IHBvaW50IHN0cmluZ1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGlsID0gdGhpcy5sZW5ndGg7IGkgPCBpbDsgaSsrKSB7XG4gICAgICBhcnJheS5wdXNoKHRoaXNbaV0uam9pbignLCcpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyYXkuam9pbignICcpO1xuICB9XG5cbiAgdHJhbnNmb3JtKG0pIHtcbiAgICByZXR1cm4gdGhpcy5jbG9uZSgpLnRyYW5zZm9ybU8obSk7XG4gIH0gLy8gdHJhbnNmb3JtIHBvaW50cyB3aXRoIG1hdHJpeCAoc2ltaWxhciB0byBQb2ludC50cmFuc2Zvcm0pXG5cblxuICB0cmFuc2Zvcm1PKG0pIHtcbiAgICBpZiAoIU1hdHJpeC5pc01hdHJpeExpa2UobSkpIHtcbiAgICAgIG0gPSBuZXcgTWF0cml4KG0pO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSB0aGlzLmxlbmd0aDsgaS0tOykge1xuICAgICAgLy8gUGVyZm9ybSB0aGUgbWF0cml4IG11bHRpcGxpY2F0aW9uXG4gICAgICBjb25zdCBbeCwgeV0gPSB0aGlzW2ldO1xuICAgICAgdGhpc1tpXVswXSA9IG0uYSAqIHggKyBtLmMgKiB5ICsgbS5lO1xuICAgICAgdGhpc1tpXVsxXSA9IG0uYiAqIHggKyBtLmQgKiB5ICsgbS5mO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbn1cblxuY29uc3QgTW9ycGhBcnJheSA9IFBvaW50QXJyYXk7IC8vIE1vdmUgYnkgbGVmdCB0b3AgY29ybmVyIG92ZXIgeC1heGlzXG5cbmZ1bmN0aW9uIHgkMih4KSB7XG4gIHJldHVybiB4ID09IG51bGwgPyB0aGlzLmJib3goKS54IDogdGhpcy5tb3ZlKHgsIHRoaXMuYmJveCgpLnkpO1xufSAvLyBNb3ZlIGJ5IGxlZnQgdG9wIGNvcm5lciBvdmVyIHktYXhpc1xuXG5mdW5jdGlvbiB5JDIoeSkge1xuICByZXR1cm4geSA9PSBudWxsID8gdGhpcy5iYm94KCkueSA6IHRoaXMubW92ZSh0aGlzLmJib3goKS54LCB5KTtcbn0gLy8gU2V0IHdpZHRoIG9mIGVsZW1lbnRcblxuZnVuY3Rpb24gd2lkdGgkMSh3aWR0aCkge1xuICBjb25zdCBiID0gdGhpcy5iYm94KCk7XG4gIHJldHVybiB3aWR0aCA9PSBudWxsID8gYi53aWR0aCA6IHRoaXMuc2l6ZSh3aWR0aCwgYi5oZWlnaHQpO1xufSAvLyBTZXQgaGVpZ2h0IG9mIGVsZW1lbnRcblxuZnVuY3Rpb24gaGVpZ2h0JDEoaGVpZ2h0KSB7XG4gIGNvbnN0IGIgPSB0aGlzLmJib3goKTtcbiAgcmV0dXJuIGhlaWdodCA9PSBudWxsID8gYi5oZWlnaHQgOiB0aGlzLnNpemUoYi53aWR0aCwgaGVpZ2h0KTtcbn1cblxudmFyIHBvaW50ZWQgPSB7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgTW9ycGhBcnJheTogTW9ycGhBcnJheSxcbiAgeDogeCQyLFxuICB5OiB5JDIsXG4gIHdpZHRoOiB3aWR0aCQxLFxuICBoZWlnaHQ6IGhlaWdodCQxXG59O1xuXG5jbGFzcyBMaW5lIGV4dGVuZHMgU2hhcGUge1xuICAvLyBJbml0aWFsaXplIG5vZGVcbiAgY29uc3RydWN0b3Iobm9kZSwgYXR0cnMgPSBub2RlKSB7XG4gICAgc3VwZXIobm9kZU9yTmV3KCdsaW5lJywgbm9kZSksIGF0dHJzKTtcbiAgfSAvLyBHZXQgYXJyYXlcblxuXG4gIGFycmF5KCkge1xuICAgIHJldHVybiBuZXcgUG9pbnRBcnJheShbW3RoaXMuYXR0cigneDEnKSwgdGhpcy5hdHRyKCd5MScpXSwgW3RoaXMuYXR0cigneDInKSwgdGhpcy5hdHRyKCd5MicpXV0pO1xuICB9IC8vIE1vdmUgYnkgbGVmdCB0b3AgY29ybmVyXG5cblxuICBtb3ZlKHgsIHkpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyKHRoaXMuYXJyYXkoKS5tb3ZlKHgsIHkpLnRvTGluZSgpKTtcbiAgfSAvLyBPdmVyd3JpdGUgbmF0aXZlIHBsb3QoKSBtZXRob2RcblxuXG4gIHBsb3QoeDEsIHkxLCB4MiwgeTIpIHtcbiAgICBpZiAoeDEgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMuYXJyYXkoKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB5MSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHgxID0ge1xuICAgICAgICB4MSxcbiAgICAgICAgeTEsXG4gICAgICAgIHgyLFxuICAgICAgICB5MlxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgeDEgPSBuZXcgUG9pbnRBcnJheSh4MSkudG9MaW5lKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuYXR0cih4MSk7XG4gIH0gLy8gU2V0IGVsZW1lbnQgc2l6ZSB0byBnaXZlbiB3aWR0aCBhbmQgaGVpZ2h0XG5cblxuICBzaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICBjb25zdCBwID0gcHJvcG9ydGlvbmFsU2l6ZSh0aGlzLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICByZXR1cm4gdGhpcy5hdHRyKHRoaXMuYXJyYXkoKS5zaXplKHAud2lkdGgsIHAuaGVpZ2h0KS50b0xpbmUoKSk7XG4gIH1cblxufVxuZXh0ZW5kKExpbmUsIHBvaW50ZWQpO1xucmVnaXN0ZXJNZXRob2RzKHtcbiAgQ29udGFpbmVyOiB7XG4gICAgLy8gQ3JlYXRlIGEgbGluZSBlbGVtZW50XG4gICAgbGluZTogd3JhcFdpdGhBdHRyQ2hlY2soZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBwbG90IGlzIGNhbGxlZCBhcyBhIHNldHRlclxuICAgICAgLy8geDEgaXMgbm90IG5lY2Vzc2FyaWx5IGEgbnVtYmVyLCBpdCBjYW4gYWxzbyBiZSBhbiBhcnJheSwgYSBzdHJpbmcgYW5kIGEgUG9pbnRBcnJheVxuICAgICAgcmV0dXJuIExpbmUucHJvdG90eXBlLnBsb3QuYXBwbHkodGhpcy5wdXQobmV3IExpbmUoKSksIGFyZ3NbMF0gIT0gbnVsbCA/IGFyZ3MgOiBbMCwgMCwgMCwgMF0pO1xuICAgIH0pXG4gIH1cbn0pO1xucmVnaXN0ZXIoTGluZSwgJ0xpbmUnKTtcblxuY2xhc3MgTWFya2VyIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgLy8gSW5pdGlhbGl6ZSBub2RlXG4gIGNvbnN0cnVjdG9yKG5vZGUsIGF0dHJzID0gbm9kZSkge1xuICAgIHN1cGVyKG5vZGVPck5ldygnbWFya2VyJywgbm9kZSksIGF0dHJzKTtcbiAgfSAvLyBTZXQgaGVpZ2h0IG9mIGVsZW1lbnRcblxuXG4gIGhlaWdodChoZWlnaHQpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyKCdtYXJrZXJIZWlnaHQnLCBoZWlnaHQpO1xuICB9XG5cbiAgb3JpZW50KG9yaWVudCkge1xuICAgIHJldHVybiB0aGlzLmF0dHIoJ29yaWVudCcsIG9yaWVudCk7XG4gIH0gLy8gU2V0IG1hcmtlciByZWZYIGFuZCByZWZZXG5cblxuICByZWYoeCwgeSkge1xuICAgIHJldHVybiB0aGlzLmF0dHIoJ3JlZlgnLCB4KS5hdHRyKCdyZWZZJywgeSk7XG4gIH0gLy8gUmV0dXJuIHRoZSBmaWxsIGlkXG5cblxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gJ3VybCgjJyArIHRoaXMuaWQoKSArICcpJztcbiAgfSAvLyBVcGRhdGUgbWFya2VyXG5cblxuICB1cGRhdGUoYmxvY2spIHtcbiAgICAvLyByZW1vdmUgYWxsIGNvbnRlbnRcbiAgICB0aGlzLmNsZWFyKCk7IC8vIGludm9rZSBwYXNzZWQgYmxvY2tcblxuICAgIGlmICh0eXBlb2YgYmxvY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGJsb2NrLmNhbGwodGhpcywgdGhpcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0gLy8gU2V0IHdpZHRoIG9mIGVsZW1lbnRcblxuXG4gIHdpZHRoKHdpZHRoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXR0cignbWFya2VyV2lkdGgnLCB3aWR0aCk7XG4gIH1cblxufVxucmVnaXN0ZXJNZXRob2RzKHtcbiAgQ29udGFpbmVyOiB7XG4gICAgbWFya2VyKC4uLmFyZ3MpIHtcbiAgICAgIC8vIENyZWF0ZSBtYXJrZXIgZWxlbWVudCBpbiBkZWZzXG4gICAgICByZXR1cm4gdGhpcy5kZWZzKCkubWFya2VyKC4uLmFyZ3MpO1xuICAgIH1cblxuICB9LFxuICBEZWZzOiB7XG4gICAgLy8gQ3JlYXRlIG1hcmtlclxuICAgIG1hcmtlcjogd3JhcFdpdGhBdHRyQ2hlY2soZnVuY3Rpb24gKHdpZHRoLCBoZWlnaHQsIGJsb2NrKSB7XG4gICAgICAvLyBTZXQgZGVmYXVsdCB2aWV3Ym94IHRvIG1hdGNoIHRoZSB3aWR0aCBhbmQgaGVpZ2h0LCBzZXQgcmVmIHRvIGN4IGFuZCBjeSBhbmQgc2V0IG9yaWVudCB0byBhdXRvXG4gICAgICByZXR1cm4gdGhpcy5wdXQobmV3IE1hcmtlcigpKS5zaXplKHdpZHRoLCBoZWlnaHQpLnJlZih3aWR0aCAvIDIsIGhlaWdodCAvIDIpLnZpZXdib3goMCwgMCwgd2lkdGgsIGhlaWdodCkuYXR0cignb3JpZW50JywgJ2F1dG8nKS51cGRhdGUoYmxvY2spO1xuICAgIH0pXG4gIH0sXG4gIG1hcmtlcjoge1xuICAgIC8vIENyZWF0ZSBhbmQgYXR0YWNoIG1hcmtlcnNcbiAgICBtYXJrZXIobWFya2VyLCB3aWR0aCwgaGVpZ2h0LCBibG9jaykge1xuICAgICAgbGV0IGF0dHIgPSBbJ21hcmtlciddOyAvLyBCdWlsZCBhdHRyaWJ1dGUgbmFtZVxuXG4gICAgICBpZiAobWFya2VyICE9PSAnYWxsJykgYXR0ci5wdXNoKG1hcmtlcik7XG4gICAgICBhdHRyID0gYXR0ci5qb2luKCctJyk7IC8vIFNldCBtYXJrZXIgYXR0cmlidXRlXG5cbiAgICAgIG1hcmtlciA9IGFyZ3VtZW50c1sxXSBpbnN0YW5jZW9mIE1hcmtlciA/IGFyZ3VtZW50c1sxXSA6IHRoaXMuZGVmcygpLm1hcmtlcih3aWR0aCwgaGVpZ2h0LCBibG9jayk7XG4gICAgICByZXR1cm4gdGhpcy5hdHRyKGF0dHIsIG1hcmtlcik7XG4gICAgfVxuXG4gIH1cbn0pO1xucmVnaXN0ZXIoTWFya2VyLCAnTWFya2VyJyk7XG5cbi8qKipcclxuQmFzZSBDbGFzc1xyXG49PT09PT09PT09XHJcblRoZSBiYXNlIHN0ZXBwZXIgY2xhc3MgdGhhdCB3aWxsIGJlXHJcbioqKi9cblxuZnVuY3Rpb24gbWFrZVNldHRlckdldHRlcihrLCBmKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIGlmICh2ID09IG51bGwpIHJldHVybiB0aGlzW2tdO1xuICAgIHRoaXNba10gPSB2O1xuICAgIGlmIChmKSBmLmNhbGwodGhpcyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG59XG5cbmNvbnN0IGVhc2luZyA9IHtcbiAgJy0nOiBmdW5jdGlvbiAocG9zKSB7XG4gICAgcmV0dXJuIHBvcztcbiAgfSxcbiAgJzw+JzogZnVuY3Rpb24gKHBvcykge1xuICAgIHJldHVybiAtTWF0aC5jb3MocG9zICogTWF0aC5QSSkgLyAyICsgMC41O1xuICB9LFxuICAnPic6IGZ1bmN0aW9uIChwb3MpIHtcbiAgICByZXR1cm4gTWF0aC5zaW4ocG9zICogTWF0aC5QSSAvIDIpO1xuICB9LFxuICAnPCc6IGZ1bmN0aW9uIChwb3MpIHtcbiAgICByZXR1cm4gLU1hdGguY29zKHBvcyAqIE1hdGguUEkgLyAyKSArIDE7XG4gIH0sXG4gIGJlemllcjogZnVuY3Rpb24gKHgxLCB5MSwgeDIsIHkyKSB7XG4gICAgLy8gc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9jc3MtZWFzaW5nLTEvI2N1YmljLWJlemllci1hbGdvXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0KSB7XG4gICAgICBpZiAodCA8IDApIHtcbiAgICAgICAgaWYgKHgxID4gMCkge1xuICAgICAgICAgIHJldHVybiB5MSAvIHgxICogdDtcbiAgICAgICAgfSBlbHNlIGlmICh4MiA+IDApIHtcbiAgICAgICAgICByZXR1cm4geTIgLyB4MiAqIHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodCA+IDEpIHtcbiAgICAgICAgaWYgKHgyIDwgMSkge1xuICAgICAgICAgIHJldHVybiAoMSAtIHkyKSAvICgxIC0geDIpICogdCArICh5MiAtIHgyKSAvICgxIC0geDIpO1xuICAgICAgICB9IGVsc2UgaWYgKHgxIDwgMSkge1xuICAgICAgICAgIHJldHVybiAoMSAtIHkxKSAvICgxIC0geDEpICogdCArICh5MSAtIHgxKSAvICgxIC0geDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gMyAqIHQgKiAoMSAtIHQpICoqIDIgKiB5MSArIDMgKiB0ICoqIDIgKiAoMSAtIHQpICogeTIgKyB0ICoqIDM7XG4gICAgICB9XG4gICAgfTtcbiAgfSxcbiAgLy8gc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9jc3MtZWFzaW5nLTEvI3N0ZXAtdGltaW5nLWZ1bmN0aW9uLWFsZ29cbiAgc3RlcHM6IGZ1bmN0aW9uIChzdGVwcywgc3RlcFBvc2l0aW9uID0gJ2VuZCcpIHtcbiAgICAvLyBkZWFsIHdpdGggXCJqdW1wLVwiIHByZWZpeFxuICAgIHN0ZXBQb3NpdGlvbiA9IHN0ZXBQb3NpdGlvbi5zcGxpdCgnLScpLnJldmVyc2UoKVswXTtcbiAgICBsZXQganVtcHMgPSBzdGVwcztcblxuICAgIGlmIChzdGVwUG9zaXRpb24gPT09ICdub25lJykge1xuICAgICAgLS1qdW1wcztcbiAgICB9IGVsc2UgaWYgKHN0ZXBQb3NpdGlvbiA9PT0gJ2JvdGgnKSB7XG4gICAgICArK2p1bXBzO1xuICAgIH0gLy8gVGhlIGJlZm9yZUZsYWcgaXMgZXNzZW50aWFsbHkgdXNlbGVzc1xuXG5cbiAgICByZXR1cm4gKHQsIGJlZm9yZUZsYWcgPSBmYWxzZSkgPT4ge1xuICAgICAgLy8gU3RlcCBpcyBjYWxsZWQgY3VycmVudFN0ZXAgaW4gcmVmZXJlbmNlZCB1cmxcbiAgICAgIGxldCBzdGVwID0gTWF0aC5mbG9vcih0ICogc3RlcHMpO1xuICAgICAgY29uc3QganVtcGluZyA9IHQgKiBzdGVwICUgMSA9PT0gMDtcblxuICAgICAgaWYgKHN0ZXBQb3NpdGlvbiA9PT0gJ3N0YXJ0JyB8fCBzdGVwUG9zaXRpb24gPT09ICdib3RoJykge1xuICAgICAgICArK3N0ZXA7XG4gICAgICB9XG5cbiAgICAgIGlmIChiZWZvcmVGbGFnICYmIGp1bXBpbmcpIHtcbiAgICAgICAgLS1zdGVwO1xuICAgICAgfVxuXG4gICAgICBpZiAodCA+PSAwICYmIHN0ZXAgPCAwKSB7XG4gICAgICAgIHN0ZXAgPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAodCA8PSAxICYmIHN0ZXAgPiBqdW1wcykge1xuICAgICAgICBzdGVwID0ganVtcHM7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdGVwIC8ganVtcHM7XG4gICAgfTtcbiAgfVxufTtcbmNsYXNzIFN0ZXBwZXIge1xuICBkb25lKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG59XG4vKioqXHJcbkVhc2luZyBGdW5jdGlvbnNcclxuPT09PT09PT09PT09PT09PVxyXG4qKiovXG5cbmNsYXNzIEVhc2UgZXh0ZW5kcyBTdGVwcGVyIHtcbiAgY29uc3RydWN0b3IoZm4gPSB0aW1lbGluZS5lYXNlKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmVhc2UgPSBlYXNpbmdbZm5dIHx8IGZuO1xuICB9XG5cbiAgc3RlcChmcm9tLCB0bywgcG9zKSB7XG4gICAgaWYgKHR5cGVvZiBmcm9tICE9PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIHBvcyA8IDEgPyBmcm9tIDogdG87XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyb20gKyAodG8gLSBmcm9tKSAqIHRoaXMuZWFzZShwb3MpO1xuICB9XG5cbn1cbi8qKipcclxuQ29udHJvbGxlciBUeXBlc1xyXG49PT09PT09PT09PT09PT09XHJcbioqKi9cblxuY2xhc3MgQ29udHJvbGxlciBleHRlbmRzIFN0ZXBwZXIge1xuICBjb25zdHJ1Y3Rvcihmbikge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGVwcGVyID0gZm47XG4gIH1cblxuICBkb25lKGMpIHtcbiAgICByZXR1cm4gYy5kb25lO1xuICB9XG5cbiAgc3RlcChjdXJyZW50LCB0YXJnZXQsIGR0LCBjKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RlcHBlcihjdXJyZW50LCB0YXJnZXQsIGR0LCBjKTtcbiAgfVxuXG59XG5cbmZ1bmN0aW9uIHJlY2FsY3VsYXRlKCkge1xuICAvLyBBcHBseSB0aGUgZGVmYXVsdCBwYXJhbWV0ZXJzXG4gIGNvbnN0IGR1cmF0aW9uID0gKHRoaXMuX2R1cmF0aW9uIHx8IDUwMCkgLyAxMDAwO1xuICBjb25zdCBvdmVyc2hvb3QgPSB0aGlzLl9vdmVyc2hvb3QgfHwgMDsgLy8gQ2FsY3VsYXRlIHRoZSBQSUQgbmF0dXJhbCByZXNwb25zZVxuXG4gIGNvbnN0IGVwcyA9IDFlLTEwO1xuICBjb25zdCBwaSA9IE1hdGguUEk7XG4gIGNvbnN0IG9zID0gTWF0aC5sb2cob3ZlcnNob290IC8gMTAwICsgZXBzKTtcbiAgY29uc3QgemV0YSA9IC1vcyAvIE1hdGguc3FydChwaSAqIHBpICsgb3MgKiBvcyk7XG4gIGNvbnN0IHduID0gMy45IC8gKHpldGEgKiBkdXJhdGlvbik7IC8vIENhbGN1bGF0ZSB0aGUgU3ByaW5nIHZhbHVlc1xuXG4gIHRoaXMuZCA9IDIgKiB6ZXRhICogd247XG4gIHRoaXMuayA9IHduICogd247XG59XG5cbmNsYXNzIFNwcmluZyBleHRlbmRzIENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcihkdXJhdGlvbiA9IDUwMCwgb3ZlcnNob290ID0gMCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5kdXJhdGlvbihkdXJhdGlvbikub3ZlcnNob290KG92ZXJzaG9vdCk7XG4gIH1cblxuICBzdGVwKGN1cnJlbnQsIHRhcmdldCwgZHQsIGMpIHtcbiAgICBpZiAodHlwZW9mIGN1cnJlbnQgPT09ICdzdHJpbmcnKSByZXR1cm4gY3VycmVudDtcbiAgICBjLmRvbmUgPSBkdCA9PT0gSW5maW5pdHk7XG4gICAgaWYgKGR0ID09PSBJbmZpbml0eSkgcmV0dXJuIHRhcmdldDtcbiAgICBpZiAoZHQgPT09IDApIHJldHVybiBjdXJyZW50O1xuICAgIGlmIChkdCA+IDEwMCkgZHQgPSAxNjtcbiAgICBkdCAvPSAxMDAwOyAvLyBHZXQgdGhlIHByZXZpb3VzIHZlbG9jaXR5XG5cbiAgICBjb25zdCB2ZWxvY2l0eSA9IGMudmVsb2NpdHkgfHwgMDsgLy8gQXBwbHkgdGhlIGNvbnRyb2wgdG8gZ2V0IHRoZSBuZXcgcG9zaXRpb24gYW5kIHN0b3JlIGl0XG5cbiAgICBjb25zdCBhY2NlbGVyYXRpb24gPSAtdGhpcy5kICogdmVsb2NpdHkgLSB0aGlzLmsgKiAoY3VycmVudCAtIHRhcmdldCk7XG4gICAgY29uc3QgbmV3UG9zaXRpb24gPSBjdXJyZW50ICsgdmVsb2NpdHkgKiBkdCArIGFjY2VsZXJhdGlvbiAqIGR0ICogZHQgLyAyOyAvLyBTdG9yZSB0aGUgdmVsb2NpdHlcblxuICAgIGMudmVsb2NpdHkgPSB2ZWxvY2l0eSArIGFjY2VsZXJhdGlvbiAqIGR0OyAvLyBGaWd1cmUgb3V0IGlmIHdlIGhhdmUgY29udmVyZ2VkLCBhbmQgaWYgc28sIHBhc3MgdGhlIHZhbHVlXG5cbiAgICBjLmRvbmUgPSBNYXRoLmFicyh0YXJnZXQgLSBuZXdQb3NpdGlvbikgKyBNYXRoLmFicyh2ZWxvY2l0eSkgPCAwLjAwMjtcbiAgICByZXR1cm4gYy5kb25lID8gdGFyZ2V0IDogbmV3UG9zaXRpb247XG4gIH1cblxufVxuZXh0ZW5kKFNwcmluZywge1xuICBkdXJhdGlvbjogbWFrZVNldHRlckdldHRlcignX2R1cmF0aW9uJywgcmVjYWxjdWxhdGUpLFxuICBvdmVyc2hvb3Q6IG1ha2VTZXR0ZXJHZXR0ZXIoJ19vdmVyc2hvb3QnLCByZWNhbGN1bGF0ZSlcbn0pO1xuY2xhc3MgUElEIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKHAgPSAwLjEsIGkgPSAwLjAxLCBkID0gMCwgd2luZHVwID0gMTAwMCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wKHApLmkoaSkuZChkKS53aW5kdXAod2luZHVwKTtcbiAgfVxuXG4gIHN0ZXAoY3VycmVudCwgdGFyZ2V0LCBkdCwgYykge1xuICAgIGlmICh0eXBlb2YgY3VycmVudCA9PT0gJ3N0cmluZycpIHJldHVybiBjdXJyZW50O1xuICAgIGMuZG9uZSA9IGR0ID09PSBJbmZpbml0eTtcbiAgICBpZiAoZHQgPT09IEluZmluaXR5KSByZXR1cm4gdGFyZ2V0O1xuICAgIGlmIChkdCA9PT0gMCkgcmV0dXJuIGN1cnJlbnQ7XG4gICAgY29uc3QgcCA9IHRhcmdldCAtIGN1cnJlbnQ7XG4gICAgbGV0IGkgPSAoYy5pbnRlZ3JhbCB8fCAwKSArIHAgKiBkdDtcbiAgICBjb25zdCBkID0gKHAgLSAoYy5lcnJvciB8fCAwKSkgLyBkdDtcbiAgICBjb25zdCB3aW5kdXAgPSB0aGlzLl93aW5kdXA7IC8vIGFudGl3aW5kdXBcblxuICAgIGlmICh3aW5kdXAgIT09IGZhbHNlKSB7XG4gICAgICBpID0gTWF0aC5tYXgoLXdpbmR1cCwgTWF0aC5taW4oaSwgd2luZHVwKSk7XG4gICAgfVxuXG4gICAgYy5lcnJvciA9IHA7XG4gICAgYy5pbnRlZ3JhbCA9IGk7XG4gICAgYy5kb25lID0gTWF0aC5hYnMocCkgPCAwLjAwMTtcbiAgICByZXR1cm4gYy5kb25lID8gdGFyZ2V0IDogY3VycmVudCArICh0aGlzLlAgKiBwICsgdGhpcy5JICogaSArIHRoaXMuRCAqIGQpO1xuICB9XG5cbn1cbmV4dGVuZChQSUQsIHtcbiAgd2luZHVwOiBtYWtlU2V0dGVyR2V0dGVyKCdfd2luZHVwJyksXG4gIHA6IG1ha2VTZXR0ZXJHZXR0ZXIoJ1AnKSxcbiAgaTogbWFrZVNldHRlckdldHRlcignSScpLFxuICBkOiBtYWtlU2V0dGVyR2V0dGVyKCdEJylcbn0pO1xuXG5jb25zdCBzZWdtZW50UGFyYW1ldGVycyA9IHtcbiAgTTogMixcbiAgTDogMixcbiAgSDogMSxcbiAgVjogMSxcbiAgQzogNixcbiAgUzogNCxcbiAgUTogNCxcbiAgVDogMixcbiAgQTogNyxcbiAgWjogMFxufTtcbmNvbnN0IHBhdGhIYW5kbGVycyA9IHtcbiAgTTogZnVuY3Rpb24gKGMsIHAsIHAwKSB7XG4gICAgcC54ID0gcDAueCA9IGNbMF07XG4gICAgcC55ID0gcDAueSA9IGNbMV07XG4gICAgcmV0dXJuIFsnTScsIHAueCwgcC55XTtcbiAgfSxcbiAgTDogZnVuY3Rpb24gKGMsIHApIHtcbiAgICBwLnggPSBjWzBdO1xuICAgIHAueSA9IGNbMV07XG4gICAgcmV0dXJuIFsnTCcsIGNbMF0sIGNbMV1dO1xuICB9LFxuICBIOiBmdW5jdGlvbiAoYywgcCkge1xuICAgIHAueCA9IGNbMF07XG4gICAgcmV0dXJuIFsnSCcsIGNbMF1dO1xuICB9LFxuICBWOiBmdW5jdGlvbiAoYywgcCkge1xuICAgIHAueSA9IGNbMF07XG4gICAgcmV0dXJuIFsnVicsIGNbMF1dO1xuICB9LFxuICBDOiBmdW5jdGlvbiAoYywgcCkge1xuICAgIHAueCA9IGNbNF07XG4gICAgcC55ID0gY1s1XTtcbiAgICByZXR1cm4gWydDJywgY1swXSwgY1sxXSwgY1syXSwgY1szXSwgY1s0XSwgY1s1XV07XG4gIH0sXG4gIFM6IGZ1bmN0aW9uIChjLCBwKSB7XG4gICAgcC54ID0gY1syXTtcbiAgICBwLnkgPSBjWzNdO1xuICAgIHJldHVybiBbJ1MnLCBjWzBdLCBjWzFdLCBjWzJdLCBjWzNdXTtcbiAgfSxcbiAgUTogZnVuY3Rpb24gKGMsIHApIHtcbiAgICBwLnggPSBjWzJdO1xuICAgIHAueSA9IGNbM107XG4gICAgcmV0dXJuIFsnUScsIGNbMF0sIGNbMV0sIGNbMl0sIGNbM11dO1xuICB9LFxuICBUOiBmdW5jdGlvbiAoYywgcCkge1xuICAgIHAueCA9IGNbMF07XG4gICAgcC55ID0gY1sxXTtcbiAgICByZXR1cm4gWydUJywgY1swXSwgY1sxXV07XG4gIH0sXG4gIFo6IGZ1bmN0aW9uIChjLCBwLCBwMCkge1xuICAgIHAueCA9IHAwLng7XG4gICAgcC55ID0gcDAueTtcbiAgICByZXR1cm4gWydaJ107XG4gIH0sXG4gIEE6IGZ1bmN0aW9uIChjLCBwKSB7XG4gICAgcC54ID0gY1s1XTtcbiAgICBwLnkgPSBjWzZdO1xuICAgIHJldHVybiBbJ0EnLCBjWzBdLCBjWzFdLCBjWzJdLCBjWzNdLCBjWzRdLCBjWzVdLCBjWzZdXTtcbiAgfVxufTtcbmNvbnN0IG1saHZxdGNzYXogPSAnbWxodnF0Y3Nheicuc3BsaXQoJycpO1xuXG5mb3IgKGxldCBpID0gMCwgaWwgPSBtbGh2cXRjc2F6Lmxlbmd0aDsgaSA8IGlsOyArK2kpIHtcbiAgcGF0aEhhbmRsZXJzW21saHZxdGNzYXpbaV1dID0gZnVuY3Rpb24gKGkpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGMsIHAsIHAwKSB7XG4gICAgICBpZiAoaSA9PT0gJ0gnKSBjWzBdID0gY1swXSArIHAueDtlbHNlIGlmIChpID09PSAnVicpIGNbMF0gPSBjWzBdICsgcC55O2Vsc2UgaWYgKGkgPT09ICdBJykge1xuICAgICAgICBjWzVdID0gY1s1XSArIHAueDtcbiAgICAgICAgY1s2XSA9IGNbNl0gKyBwLnk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBqID0gMCwgamwgPSBjLmxlbmd0aDsgaiA8IGpsOyArK2opIHtcbiAgICAgICAgICBjW2pdID0gY1tqXSArIChqICUgMiA/IHAueSA6IHAueCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBwYXRoSGFuZGxlcnNbaV0oYywgcCwgcDApO1xuICAgIH07XG4gIH0obWxodnF0Y3NheltpXS50b1VwcGVyQ2FzZSgpKTtcbn1cblxuZnVuY3Rpb24gbWFrZUFic29sdXQocGFyc2VyKSB7XG4gIGNvbnN0IGNvbW1hbmQgPSBwYXJzZXIuc2VnbWVudFswXTtcbiAgcmV0dXJuIHBhdGhIYW5kbGVyc1tjb21tYW5kXShwYXJzZXIuc2VnbWVudC5zbGljZSgxKSwgcGFyc2VyLnAsIHBhcnNlci5wMCk7XG59XG5cbmZ1bmN0aW9uIHNlZ21lbnRDb21wbGV0ZShwYXJzZXIpIHtcbiAgcmV0dXJuIHBhcnNlci5zZWdtZW50Lmxlbmd0aCAmJiBwYXJzZXIuc2VnbWVudC5sZW5ndGggLSAxID09PSBzZWdtZW50UGFyYW1ldGVyc1twYXJzZXIuc2VnbWVudFswXS50b1VwcGVyQ2FzZSgpXTtcbn1cblxuZnVuY3Rpb24gc3RhcnROZXdTZWdtZW50KHBhcnNlciwgdG9rZW4pIHtcbiAgcGFyc2VyLmluTnVtYmVyICYmIGZpbmFsaXplTnVtYmVyKHBhcnNlciwgZmFsc2UpO1xuICBjb25zdCBwYXRoTGV0dGVyID0gaXNQYXRoTGV0dGVyLnRlc3QodG9rZW4pO1xuXG4gIGlmIChwYXRoTGV0dGVyKSB7XG4gICAgcGFyc2VyLnNlZ21lbnQgPSBbdG9rZW5dO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGxhc3RDb21tYW5kID0gcGFyc2VyLmxhc3RDb21tYW5kO1xuICAgIGNvbnN0IHNtYWxsID0gbGFzdENvbW1hbmQudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zdCBpc1NtYWxsID0gbGFzdENvbW1hbmQgPT09IHNtYWxsO1xuICAgIHBhcnNlci5zZWdtZW50ID0gW3NtYWxsID09PSAnbScgPyBpc1NtYWxsID8gJ2wnIDogJ0wnIDogbGFzdENvbW1hbmRdO1xuICB9XG5cbiAgcGFyc2VyLmluU2VnbWVudCA9IHRydWU7XG4gIHBhcnNlci5sYXN0Q29tbWFuZCA9IHBhcnNlci5zZWdtZW50WzBdO1xuICByZXR1cm4gcGF0aExldHRlcjtcbn1cblxuZnVuY3Rpb24gZmluYWxpemVOdW1iZXIocGFyc2VyLCBpbk51bWJlcikge1xuICBpZiAoIXBhcnNlci5pbk51bWJlcikgdGhyb3cgbmV3IEVycm9yKCdQYXJzZXIgRXJyb3InKTtcbiAgcGFyc2VyLm51bWJlciAmJiBwYXJzZXIuc2VnbWVudC5wdXNoKHBhcnNlRmxvYXQocGFyc2VyLm51bWJlcikpO1xuICBwYXJzZXIuaW5OdW1iZXIgPSBpbk51bWJlcjtcbiAgcGFyc2VyLm51bWJlciA9ICcnO1xuICBwYXJzZXIucG9pbnRTZWVuID0gZmFsc2U7XG4gIHBhcnNlci5oYXNFeHBvbmVudCA9IGZhbHNlO1xuXG4gIGlmIChzZWdtZW50Q29tcGxldGUocGFyc2VyKSkge1xuICAgIGZpbmFsaXplU2VnbWVudChwYXJzZXIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmFsaXplU2VnbWVudChwYXJzZXIpIHtcbiAgcGFyc2VyLmluU2VnbWVudCA9IGZhbHNlO1xuXG4gIGlmIChwYXJzZXIuYWJzb2x1dGUpIHtcbiAgICBwYXJzZXIuc2VnbWVudCA9IG1ha2VBYnNvbHV0KHBhcnNlcik7XG4gIH1cblxuICBwYXJzZXIuc2VnbWVudHMucHVzaChwYXJzZXIuc2VnbWVudCk7XG59XG5cbmZ1bmN0aW9uIGlzQXJjRmxhZyhwYXJzZXIpIHtcbiAgaWYgKCFwYXJzZXIuc2VnbWVudC5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgY29uc3QgaXNBcmMgPSBwYXJzZXIuc2VnbWVudFswXS50b1VwcGVyQ2FzZSgpID09PSAnQSc7XG4gIGNvbnN0IGxlbmd0aCA9IHBhcnNlci5zZWdtZW50Lmxlbmd0aDtcbiAgcmV0dXJuIGlzQXJjICYmIChsZW5ndGggPT09IDQgfHwgbGVuZ3RoID09PSA1KTtcbn1cblxuZnVuY3Rpb24gaXNFeHBvbmVudGlhbChwYXJzZXIpIHtcbiAgcmV0dXJuIHBhcnNlci5sYXN0VG9rZW4udG9VcHBlckNhc2UoKSA9PT0gJ0UnO1xufVxuXG5mdW5jdGlvbiBwYXRoUGFyc2VyKGQsIHRvQWJzb2x1dGUgPSB0cnVlKSB7XG4gIGxldCBpbmRleCA9IDA7XG4gIGxldCB0b2tlbiA9ICcnO1xuICBjb25zdCBwYXJzZXIgPSB7XG4gICAgc2VnbWVudDogW10sXG4gICAgaW5OdW1iZXI6IGZhbHNlLFxuICAgIG51bWJlcjogJycsXG4gICAgbGFzdFRva2VuOiAnJyxcbiAgICBpblNlZ21lbnQ6IGZhbHNlLFxuICAgIHNlZ21lbnRzOiBbXSxcbiAgICBwb2ludFNlZW46IGZhbHNlLFxuICAgIGhhc0V4cG9uZW50OiBmYWxzZSxcbiAgICBhYnNvbHV0ZTogdG9BYnNvbHV0ZSxcbiAgICBwMDogbmV3IFBvaW50KCksXG4gICAgcDogbmV3IFBvaW50KClcbiAgfTtcblxuICB3aGlsZSAocGFyc2VyLmxhc3RUb2tlbiA9IHRva2VuLCB0b2tlbiA9IGQuY2hhckF0KGluZGV4KyspKSB7XG4gICAgaWYgKCFwYXJzZXIuaW5TZWdtZW50KSB7XG4gICAgICBpZiAoc3RhcnROZXdTZWdtZW50KHBhcnNlciwgdG9rZW4pKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0b2tlbiA9PT0gJy4nKSB7XG4gICAgICBpZiAocGFyc2VyLnBvaW50U2VlbiB8fCBwYXJzZXIuaGFzRXhwb25lbnQpIHtcbiAgICAgICAgZmluYWxpemVOdW1iZXIocGFyc2VyLCBmYWxzZSk7XG4gICAgICAgIC0taW5kZXg7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBwYXJzZXIuaW5OdW1iZXIgPSB0cnVlO1xuICAgICAgcGFyc2VyLnBvaW50U2VlbiA9IHRydWU7XG4gICAgICBwYXJzZXIubnVtYmVyICs9IHRva2VuO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKCFpc05hTihwYXJzZUludCh0b2tlbikpKSB7XG4gICAgICBpZiAocGFyc2VyLm51bWJlciA9PT0gJzAnIHx8IGlzQXJjRmxhZyhwYXJzZXIpKSB7XG4gICAgICAgIHBhcnNlci5pbk51bWJlciA9IHRydWU7XG4gICAgICAgIHBhcnNlci5udW1iZXIgPSB0b2tlbjtcbiAgICAgICAgZmluYWxpemVOdW1iZXIocGFyc2VyLCB0cnVlKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHBhcnNlci5pbk51bWJlciA9IHRydWU7XG4gICAgICBwYXJzZXIubnVtYmVyICs9IHRva2VuO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKHRva2VuID09PSAnICcgfHwgdG9rZW4gPT09ICcsJykge1xuICAgICAgaWYgKHBhcnNlci5pbk51bWJlcikge1xuICAgICAgICBmaW5hbGl6ZU51bWJlcihwYXJzZXIsIGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKHRva2VuID09PSAnLScpIHtcbiAgICAgIGlmIChwYXJzZXIuaW5OdW1iZXIgJiYgIWlzRXhwb25lbnRpYWwocGFyc2VyKSkge1xuICAgICAgICBmaW5hbGl6ZU51bWJlcihwYXJzZXIsIGZhbHNlKTtcbiAgICAgICAgLS1pbmRleDtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHBhcnNlci5udW1iZXIgKz0gdG9rZW47XG4gICAgICBwYXJzZXIuaW5OdW1iZXIgPSB0cnVlO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKHRva2VuLnRvVXBwZXJDYXNlKCkgPT09ICdFJykge1xuICAgICAgcGFyc2VyLm51bWJlciArPSB0b2tlbjtcbiAgICAgIHBhcnNlci5oYXNFeHBvbmVudCA9IHRydWU7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoaXNQYXRoTGV0dGVyLnRlc3QodG9rZW4pKSB7XG4gICAgICBpZiAocGFyc2VyLmluTnVtYmVyKSB7XG4gICAgICAgIGZpbmFsaXplTnVtYmVyKHBhcnNlciwgZmFsc2UpO1xuICAgICAgfSBlbHNlIGlmICghc2VnbWVudENvbXBsZXRlKHBhcnNlcikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdwYXJzZXIgRXJyb3InKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpbmFsaXplU2VnbWVudChwYXJzZXIpO1xuICAgICAgfVxuXG4gICAgICAtLWluZGV4O1xuICAgIH1cbiAgfVxuXG4gIGlmIChwYXJzZXIuaW5OdW1iZXIpIHtcbiAgICBmaW5hbGl6ZU51bWJlcihwYXJzZXIsIGZhbHNlKTtcbiAgfVxuXG4gIGlmIChwYXJzZXIuaW5TZWdtZW50ICYmIHNlZ21lbnRDb21wbGV0ZShwYXJzZXIpKSB7XG4gICAgZmluYWxpemVTZWdtZW50KHBhcnNlcik7XG4gIH1cblxuICByZXR1cm4gcGFyc2VyLnNlZ21lbnRzO1xufVxuXG5mdW5jdGlvbiBhcnJheVRvU3RyaW5nKGEpIHtcbiAgbGV0IHMgPSAnJztcblxuICBmb3IgKGxldCBpID0gMCwgaWwgPSBhLmxlbmd0aDsgaSA8IGlsOyBpKyspIHtcbiAgICBzICs9IGFbaV1bMF07XG5cbiAgICBpZiAoYVtpXVsxXSAhPSBudWxsKSB7XG4gICAgICBzICs9IGFbaV1bMV07XG5cbiAgICAgIGlmIChhW2ldWzJdICE9IG51bGwpIHtcbiAgICAgICAgcyArPSAnICc7XG4gICAgICAgIHMgKz0gYVtpXVsyXTtcblxuICAgICAgICBpZiAoYVtpXVszXSAhPSBudWxsKSB7XG4gICAgICAgICAgcyArPSAnICc7XG4gICAgICAgICAgcyArPSBhW2ldWzNdO1xuICAgICAgICAgIHMgKz0gJyAnO1xuICAgICAgICAgIHMgKz0gYVtpXVs0XTtcblxuICAgICAgICAgIGlmIChhW2ldWzVdICE9IG51bGwpIHtcbiAgICAgICAgICAgIHMgKz0gJyAnO1xuICAgICAgICAgICAgcyArPSBhW2ldWzVdO1xuICAgICAgICAgICAgcyArPSAnICc7XG4gICAgICAgICAgICBzICs9IGFbaV1bNl07XG5cbiAgICAgICAgICAgIGlmIChhW2ldWzddICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgcyArPSAnICc7XG4gICAgICAgICAgICAgIHMgKz0gYVtpXVs3XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcyArICcgJztcbn1cblxuY2xhc3MgUGF0aEFycmF5IGV4dGVuZHMgU1ZHQXJyYXkge1xuICAvLyBHZXQgYm91bmRpbmcgYm94IG9mIHBhdGhcbiAgYmJveCgpIHtcbiAgICBwYXJzZXIoKS5wYXRoLnNldEF0dHJpYnV0ZSgnZCcsIHRoaXMudG9TdHJpbmcoKSk7XG4gICAgcmV0dXJuIG5ldyBCb3gocGFyc2VyLm5vZGVzLnBhdGguZ2V0QkJveCgpKTtcbiAgfSAvLyBNb3ZlIHBhdGggc3RyaW5nXG5cblxuICBtb3ZlKHgsIHkpIHtcbiAgICAvLyBnZXQgYm91bmRpbmcgYm94IG9mIGN1cnJlbnQgc2l0dWF0aW9uXG4gICAgY29uc3QgYm94ID0gdGhpcy5iYm94KCk7IC8vIGdldCByZWxhdGl2ZSBvZmZzZXRcblxuICAgIHggLT0gYm94Lng7XG4gICAgeSAtPSBib3gueTtcblxuICAgIGlmICghaXNOYU4oeCkgJiYgIWlzTmFOKHkpKSB7XG4gICAgICAvLyBtb3ZlIGV2ZXJ5IHBvaW50XG4gICAgICBmb3IgKGxldCBsLCBpID0gdGhpcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBsID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAobCA9PT0gJ00nIHx8IGwgPT09ICdMJyB8fCBsID09PSAnVCcpIHtcbiAgICAgICAgICB0aGlzW2ldWzFdICs9IHg7XG4gICAgICAgICAgdGhpc1tpXVsyXSArPSB5O1xuICAgICAgICB9IGVsc2UgaWYgKGwgPT09ICdIJykge1xuICAgICAgICAgIHRoaXNbaV1bMV0gKz0geDtcbiAgICAgICAgfSBlbHNlIGlmIChsID09PSAnVicpIHtcbiAgICAgICAgICB0aGlzW2ldWzFdICs9IHk7XG4gICAgICAgIH0gZWxzZSBpZiAobCA9PT0gJ0MnIHx8IGwgPT09ICdTJyB8fCBsID09PSAnUScpIHtcbiAgICAgICAgICB0aGlzW2ldWzFdICs9IHg7XG4gICAgICAgICAgdGhpc1tpXVsyXSArPSB5O1xuICAgICAgICAgIHRoaXNbaV1bM10gKz0geDtcbiAgICAgICAgICB0aGlzW2ldWzRdICs9IHk7XG5cbiAgICAgICAgICBpZiAobCA9PT0gJ0MnKSB7XG4gICAgICAgICAgICB0aGlzW2ldWzVdICs9IHg7XG4gICAgICAgICAgICB0aGlzW2ldWzZdICs9IHk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGwgPT09ICdBJykge1xuICAgICAgICAgIHRoaXNbaV1bNl0gKz0geDtcbiAgICAgICAgICB0aGlzW2ldWzddICs9IHk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSAvLyBBYnNvbHV0aXplIGFuZCBwYXJzZSBwYXRoIHRvIGFycmF5XG5cblxuICBwYXJzZShkID0gJ00wIDAnKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZCkpIHtcbiAgICAgIGQgPSBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLCBkKS50b1N0cmluZygpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXRoUGFyc2VyKGQpO1xuICB9IC8vIFJlc2l6ZSBwYXRoIHN0cmluZ1xuXG5cbiAgc2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgLy8gZ2V0IGJvdW5kaW5nIGJveCBvZiBjdXJyZW50IHNpdHVhdGlvblxuICAgIGNvbnN0IGJveCA9IHRoaXMuYmJveCgpO1xuICAgIGxldCBpLCBsOyAvLyBJZiB0aGUgYm94IHdpZHRoIG9yIGhlaWdodCBpcyAwIHRoZW4gd2UgaWdub3JlXG4gICAgLy8gdHJhbnNmb3JtYXRpb25zIG9uIHRoZSByZXNwZWN0aXZlIGF4aXNcblxuICAgIGJveC53aWR0aCA9IGJveC53aWR0aCA9PT0gMCA/IDEgOiBib3gud2lkdGg7XG4gICAgYm94LmhlaWdodCA9IGJveC5oZWlnaHQgPT09IDAgPyAxIDogYm94LmhlaWdodDsgLy8gcmVjYWxjdWxhdGUgcG9zaXRpb24gb2YgYWxsIHBvaW50cyBhY2NvcmRpbmcgdG8gbmV3IHNpemVcblxuICAgIGZvciAoaSA9IHRoaXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGwgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAobCA9PT0gJ00nIHx8IGwgPT09ICdMJyB8fCBsID09PSAnVCcpIHtcbiAgICAgICAgdGhpc1tpXVsxXSA9ICh0aGlzW2ldWzFdIC0gYm94LngpICogd2lkdGggLyBib3gud2lkdGggKyBib3gueDtcbiAgICAgICAgdGhpc1tpXVsyXSA9ICh0aGlzW2ldWzJdIC0gYm94LnkpICogaGVpZ2h0IC8gYm94LmhlaWdodCArIGJveC55O1xuICAgICAgfSBlbHNlIGlmIChsID09PSAnSCcpIHtcbiAgICAgICAgdGhpc1tpXVsxXSA9ICh0aGlzW2ldWzFdIC0gYm94LngpICogd2lkdGggLyBib3gud2lkdGggKyBib3gueDtcbiAgICAgIH0gZWxzZSBpZiAobCA9PT0gJ1YnKSB7XG4gICAgICAgIHRoaXNbaV1bMV0gPSAodGhpc1tpXVsxXSAtIGJveC55KSAqIGhlaWdodCAvIGJveC5oZWlnaHQgKyBib3gueTtcbiAgICAgIH0gZWxzZSBpZiAobCA9PT0gJ0MnIHx8IGwgPT09ICdTJyB8fCBsID09PSAnUScpIHtcbiAgICAgICAgdGhpc1tpXVsxXSA9ICh0aGlzW2ldWzFdIC0gYm94LngpICogd2lkdGggLyBib3gud2lkdGggKyBib3gueDtcbiAgICAgICAgdGhpc1tpXVsyXSA9ICh0aGlzW2ldWzJdIC0gYm94LnkpICogaGVpZ2h0IC8gYm94LmhlaWdodCArIGJveC55O1xuICAgICAgICB0aGlzW2ldWzNdID0gKHRoaXNbaV1bM10gLSBib3gueCkgKiB3aWR0aCAvIGJveC53aWR0aCArIGJveC54O1xuICAgICAgICB0aGlzW2ldWzRdID0gKHRoaXNbaV1bNF0gLSBib3gueSkgKiBoZWlnaHQgLyBib3guaGVpZ2h0ICsgYm94Lnk7XG5cbiAgICAgICAgaWYgKGwgPT09ICdDJykge1xuICAgICAgICAgIHRoaXNbaV1bNV0gPSAodGhpc1tpXVs1XSAtIGJveC54KSAqIHdpZHRoIC8gYm94LndpZHRoICsgYm94Lng7XG4gICAgICAgICAgdGhpc1tpXVs2XSA9ICh0aGlzW2ldWzZdIC0gYm94LnkpICogaGVpZ2h0IC8gYm94LmhlaWdodCArIGJveC55O1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGwgPT09ICdBJykge1xuICAgICAgICAvLyByZXNpemUgcmFkaWlcbiAgICAgICAgdGhpc1tpXVsxXSA9IHRoaXNbaV1bMV0gKiB3aWR0aCAvIGJveC53aWR0aDtcbiAgICAgICAgdGhpc1tpXVsyXSA9IHRoaXNbaV1bMl0gKiBoZWlnaHQgLyBib3guaGVpZ2h0OyAvLyBtb3ZlIHBvc2l0aW9uIHZhbHVlc1xuXG4gICAgICAgIHRoaXNbaV1bNl0gPSAodGhpc1tpXVs2XSAtIGJveC54KSAqIHdpZHRoIC8gYm94LndpZHRoICsgYm94Lng7XG4gICAgICAgIHRoaXNbaV1bN10gPSAodGhpc1tpXVs3XSAtIGJveC55KSAqIGhlaWdodCAvIGJveC5oZWlnaHQgKyBib3gueTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSAvLyBDb252ZXJ0IGFycmF5IHRvIHN0cmluZ1xuXG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIGFycmF5VG9TdHJpbmcodGhpcyk7XG4gIH1cblxufVxuXG5jb25zdCBnZXRDbGFzc0ZvclR5cGUgPSB2YWx1ZSA9PiB7XG4gIGNvbnN0IHR5cGUgPSB0eXBlb2YgdmFsdWU7XG5cbiAgaWYgKHR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIFNWR051bWJlcjtcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnc3RyaW5nJykge1xuICAgIGlmIChDb2xvci5pc0NvbG9yKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIENvbG9yO1xuICAgIH0gZWxzZSBpZiAoZGVsaW1pdGVyLnRlc3QodmFsdWUpKSB7XG4gICAgICByZXR1cm4gaXNQYXRoTGV0dGVyLnRlc3QodmFsdWUpID8gUGF0aEFycmF5IDogU1ZHQXJyYXk7XG4gICAgfSBlbHNlIGlmIChudW1iZXJBbmRVbml0LnRlc3QodmFsdWUpKSB7XG4gICAgICByZXR1cm4gU1ZHTnVtYmVyO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gTm9uTW9ycGhhYmxlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChtb3JwaGFibGVUeXBlcy5pbmRleE9mKHZhbHVlLmNvbnN0cnVjdG9yKSA+IC0xKSB7XG4gICAgcmV0dXJuIHZhbHVlLmNvbnN0cnVjdG9yO1xuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIFNWR0FycmF5O1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIE9iamVjdEJhZztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gTm9uTW9ycGhhYmxlO1xuICB9XG59O1xuXG5jbGFzcyBNb3JwaGFibGUge1xuICBjb25zdHJ1Y3RvcihzdGVwcGVyKSB7XG4gICAgdGhpcy5fc3RlcHBlciA9IHN0ZXBwZXIgfHwgbmV3IEVhc2UoJy0nKTtcbiAgICB0aGlzLl9mcm9tID0gbnVsbDtcbiAgICB0aGlzLl90byA9IG51bGw7XG4gICAgdGhpcy5fdHlwZSA9IG51bGw7XG4gICAgdGhpcy5fY29udGV4dCA9IG51bGw7XG4gICAgdGhpcy5fbW9ycGhPYmogPSBudWxsO1xuICB9XG5cbiAgYXQocG9zKSB7XG4gICAgcmV0dXJuIHRoaXMuX21vcnBoT2JqLm1vcnBoKHRoaXMuX2Zyb20sIHRoaXMuX3RvLCBwb3MsIHRoaXMuX3N0ZXBwZXIsIHRoaXMuX2NvbnRleHQpO1xuICB9XG5cbiAgZG9uZSgpIHtcbiAgICBjb25zdCBjb21wbGV0ZSA9IHRoaXMuX2NvbnRleHQubWFwKHRoaXMuX3N0ZXBwZXIuZG9uZSkucmVkdWNlKGZ1bmN0aW9uIChsYXN0LCBjdXJyKSB7XG4gICAgICByZXR1cm4gbGFzdCAmJiBjdXJyO1xuICAgIH0sIHRydWUpO1xuXG4gICAgcmV0dXJuIGNvbXBsZXRlO1xuICB9XG5cbiAgZnJvbSh2YWwpIHtcbiAgICBpZiAodmFsID09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLl9mcm9tO1xuICAgIH1cblxuICAgIHRoaXMuX2Zyb20gPSB0aGlzLl9zZXQodmFsKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHN0ZXBwZXIoc3RlcHBlcikge1xuICAgIGlmIChzdGVwcGVyID09IG51bGwpIHJldHVybiB0aGlzLl9zdGVwcGVyO1xuICAgIHRoaXMuX3N0ZXBwZXIgPSBzdGVwcGVyO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdG8odmFsKSB7XG4gICAgaWYgKHZhbCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdG87XG4gICAgfVxuXG4gICAgdGhpcy5fdG8gPSB0aGlzLl9zZXQodmFsKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHR5cGUodHlwZSkge1xuICAgIC8vIGdldHRlclxuICAgIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLl90eXBlO1xuICAgIH0gLy8gc2V0dGVyXG5cblxuICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgX3NldCh2YWx1ZSkge1xuICAgIGlmICghdGhpcy5fdHlwZSkge1xuICAgICAgdGhpcy50eXBlKGdldENsYXNzRm9yVHlwZSh2YWx1ZSkpO1xuICAgIH1cblxuICAgIGxldCByZXN1bHQgPSBuZXcgdGhpcy5fdHlwZSh2YWx1ZSk7XG5cbiAgICBpZiAodGhpcy5fdHlwZSA9PT0gQ29sb3IpIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMuX3RvID8gcmVzdWx0W3RoaXMuX3RvWzRdXSgpIDogdGhpcy5fZnJvbSA/IHJlc3VsdFt0aGlzLl9mcm9tWzRdXSgpIDogcmVzdWx0O1xuICAgIH1cblxuICAgIGlmICh0aGlzLl90eXBlID09PSBPYmplY3RCYWcpIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMuX3RvID8gcmVzdWx0LmFsaWduKHRoaXMuX3RvKSA6IHRoaXMuX2Zyb20gPyByZXN1bHQuYWxpZ24odGhpcy5fZnJvbSkgOiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcmVzdWx0ID0gcmVzdWx0LnRvQ29uc3VtYWJsZSgpO1xuICAgIHRoaXMuX21vcnBoT2JqID0gdGhpcy5fbW9ycGhPYmogfHwgbmV3IHRoaXMuX3R5cGUoKTtcbiAgICB0aGlzLl9jb250ZXh0ID0gdGhpcy5fY29udGV4dCB8fCBBcnJheS5hcHBseShudWxsLCBBcnJheShyZXN1bHQubGVuZ3RoKSkubWFwKE9iamVjdCkubWFwKGZ1bmN0aW9uIChvKSB7XG4gICAgICBvLmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG87XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG59XG5jbGFzcyBOb25Nb3JwaGFibGUge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgdGhpcy5pbml0KC4uLmFyZ3MpO1xuICB9XG5cbiAgaW5pdCh2YWwpIHtcbiAgICB2YWwgPSBBcnJheS5pc0FycmF5KHZhbCkgPyB2YWxbMF0gOiB2YWw7XG4gICAgdGhpcy52YWx1ZSA9IHZhbDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHRvQXJyYXkoKSB7XG4gICAgcmV0dXJuIFt0aGlzLnZhbHVlXTtcbiAgfVxuXG4gIHZhbHVlT2YoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cblxufVxuY2xhc3MgVHJhbnNmb3JtQmFnIHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHRoaXMuaW5pdCguLi5hcmdzKTtcbiAgfVxuXG4gIGluaXQob2JqKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgICAgb2JqID0ge1xuICAgICAgICBzY2FsZVg6IG9ialswXSxcbiAgICAgICAgc2NhbGVZOiBvYmpbMV0sXG4gICAgICAgIHNoZWFyOiBvYmpbMl0sXG4gICAgICAgIHJvdGF0ZTogb2JqWzNdLFxuICAgICAgICB0cmFuc2xhdGVYOiBvYmpbNF0sXG4gICAgICAgIHRyYW5zbGF0ZVk6IG9ials1XSxcbiAgICAgICAgb3JpZ2luWDogb2JqWzZdLFxuICAgICAgICBvcmlnaW5ZOiBvYmpbN11cbiAgICAgIH07XG4gICAgfVxuXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBUcmFuc2Zvcm1CYWcuZGVmYXVsdHMsIG9iaik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB0b0FycmF5KCkge1xuICAgIGNvbnN0IHYgPSB0aGlzO1xuICAgIHJldHVybiBbdi5zY2FsZVgsIHYuc2NhbGVZLCB2LnNoZWFyLCB2LnJvdGF0ZSwgdi50cmFuc2xhdGVYLCB2LnRyYW5zbGF0ZVksIHYub3JpZ2luWCwgdi5vcmlnaW5ZXTtcbiAgfVxuXG59XG5UcmFuc2Zvcm1CYWcuZGVmYXVsdHMgPSB7XG4gIHNjYWxlWDogMSxcbiAgc2NhbGVZOiAxLFxuICBzaGVhcjogMCxcbiAgcm90YXRlOiAwLFxuICB0cmFuc2xhdGVYOiAwLFxuICB0cmFuc2xhdGVZOiAwLFxuICBvcmlnaW5YOiAwLFxuICBvcmlnaW5ZOiAwXG59O1xuXG5jb25zdCBzb3J0QnlLZXkgPSAoYSwgYikgPT4ge1xuICByZXR1cm4gYVswXSA8IGJbMF0gPyAtMSA6IGFbMF0gPiBiWzBdID8gMSA6IDA7XG59O1xuXG5jbGFzcyBPYmplY3RCYWcge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgdGhpcy5pbml0KC4uLmFyZ3MpO1xuICB9XG5cbiAgYWxpZ24ob3RoZXIpIHtcbiAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLnZhbHVlcztcblxuICAgIGZvciAobGV0IGkgPSAwLCBpbCA9IHZhbHVlcy5sZW5ndGg7IGkgPCBpbDsgKytpKSB7XG4gICAgICAvLyBJZiB0aGUgdHlwZSBpcyB0aGUgc2FtZSB3ZSBvbmx5IG5lZWQgdG8gY2hlY2sgaWYgdGhlIGNvbG9yIGlzIGluIHRoZSBjb3JyZWN0IGZvcm1hdFxuICAgICAgaWYgKHZhbHVlc1tpICsgMV0gPT09IG90aGVyW2kgKyAxXSkge1xuICAgICAgICBpZiAodmFsdWVzW2kgKyAxXSA9PT0gQ29sb3IgJiYgb3RoZXJbaSArIDddICE9PSB2YWx1ZXNbaSArIDddKSB7XG4gICAgICAgICAgY29uc3Qgc3BhY2UgPSBvdGhlcltpICsgN107XG4gICAgICAgICAgY29uc3QgY29sb3IgPSBuZXcgQ29sb3IodGhpcy52YWx1ZXMuc3BsaWNlKGkgKyAzLCA1KSlbc3BhY2VdKCkudG9BcnJheSgpO1xuICAgICAgICAgIHRoaXMudmFsdWVzLnNwbGljZShpICsgMywgMCwgLi4uY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgaSArPSB2YWx1ZXNbaSArIDJdICsgMjtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICghb3RoZXJbaSArIDFdKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSAvLyBUaGUgdHlwZXMgZGlmZmVyLCBzbyB3ZSBvdmVyd3JpdGUgdGhlIG5ldyB0eXBlIHdpdGggdGhlIG9sZCBvbmVcbiAgICAgIC8vIEFuZCBpbml0aWFsaXplIGl0IHdpdGggdGhlIHR5cGVzIGRlZmF1bHQgKGUuZy4gYmxhY2sgZm9yIGNvbG9yIG9yIDAgZm9yIG51bWJlcilcblxuXG4gICAgICBjb25zdCBkZWZhdWx0T2JqZWN0ID0gbmV3IG90aGVyW2kgKyAxXSgpLnRvQXJyYXkoKTsgLy8gVGhhbiB3ZSBmaXggdGhlIHZhbHVlcyBhcnJheVxuXG4gICAgICBjb25zdCB0b0RlbGV0ZSA9IHZhbHVlc1tpICsgMl0gKyAzO1xuICAgICAgdmFsdWVzLnNwbGljZShpLCB0b0RlbGV0ZSwgb3RoZXJbaV0sIG90aGVyW2kgKyAxXSwgb3RoZXJbaSArIDJdLCAuLi5kZWZhdWx0T2JqZWN0KTtcbiAgICAgIGkgKz0gdmFsdWVzW2kgKyAyXSArIDI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpbml0KG9iak9yQXJyKSB7XG4gICAgdGhpcy52YWx1ZXMgPSBbXTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KG9iak9yQXJyKSkge1xuICAgICAgdGhpcy52YWx1ZXMgPSBvYmpPckFyci5zbGljZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG9iak9yQXJyID0gb2JqT3JBcnIgfHwge307XG4gICAgY29uc3QgZW50cmllcyA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBpIGluIG9iak9yQXJyKSB7XG4gICAgICBjb25zdCBUeXBlID0gZ2V0Q2xhc3NGb3JUeXBlKG9iak9yQXJyW2ldKTtcbiAgICAgIGNvbnN0IHZhbCA9IG5ldyBUeXBlKG9iak9yQXJyW2ldKS50b0FycmF5KCk7XG4gICAgICBlbnRyaWVzLnB1c2goW2ksIFR5cGUsIHZhbC5sZW5ndGgsIC4uLnZhbF0pO1xuICAgIH1cblxuICAgIGVudHJpZXMuc29ydChzb3J0QnlLZXkpO1xuICAgIHRoaXMudmFsdWVzID0gZW50cmllcy5yZWR1Y2UoKGxhc3QsIGN1cnIpID0+IGxhc3QuY29uY2F0KGN1cnIpLCBbXSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB0b0FycmF5KCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlcztcbiAgfVxuXG4gIHZhbHVlT2YoKSB7XG4gICAgY29uc3Qgb2JqID0ge307XG4gICAgY29uc3QgYXJyID0gdGhpcy52YWx1ZXM7IC8vIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnIubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDIpIHtcblxuICAgIHdoaWxlIChhcnIubGVuZ3RoKSB7XG4gICAgICBjb25zdCBrZXkgPSBhcnIuc2hpZnQoKTtcbiAgICAgIGNvbnN0IFR5cGUgPSBhcnIuc2hpZnQoKTtcbiAgICAgIGNvbnN0IG51bSA9IGFyci5zaGlmdCgpO1xuICAgICAgY29uc3QgdmFsdWVzID0gYXJyLnNwbGljZSgwLCBudW0pO1xuICAgICAgb2JqW2tleV0gPSBuZXcgVHlwZSh2YWx1ZXMpOyAvLyAudmFsdWVPZigpXG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG59XG5jb25zdCBtb3JwaGFibGVUeXBlcyA9IFtOb25Nb3JwaGFibGUsIFRyYW5zZm9ybUJhZywgT2JqZWN0QmFnXTtcbmZ1bmN0aW9uIHJlZ2lzdGVyTW9ycGhhYmxlVHlwZSh0eXBlID0gW10pIHtcbiAgbW9ycGhhYmxlVHlwZXMucHVzaCguLi5bXS5jb25jYXQodHlwZSkpO1xufVxuZnVuY3Rpb24gbWFrZU1vcnBoYWJsZSgpIHtcbiAgZXh0ZW5kKG1vcnBoYWJsZVR5cGVzLCB7XG4gICAgdG8odmFsKSB7XG4gICAgICByZXR1cm4gbmV3IE1vcnBoYWJsZSgpLnR5cGUodGhpcy5jb25zdHJ1Y3RvcikuZnJvbSh0aGlzLnRvQXJyYXkoKSkgLy8gdGhpcy52YWx1ZU9mKCkpXG4gICAgICAudG8odmFsKTtcbiAgICB9LFxuXG4gICAgZnJvbUFycmF5KGFycikge1xuICAgICAgdGhpcy5pbml0KGFycik7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgdG9Db25zdW1hYmxlKCkge1xuICAgICAgcmV0dXJuIHRoaXMudG9BcnJheSgpO1xuICAgIH0sXG5cbiAgICBtb3JwaChmcm9tLCB0bywgcG9zLCBzdGVwcGVyLCBjb250ZXh0KSB7XG4gICAgICBjb25zdCBtYXBwZXIgPSBmdW5jdGlvbiAoaSwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHN0ZXBwZXIuc3RlcChpLCB0b1tpbmRleF0sIHBvcywgY29udGV4dFtpbmRleF0sIGNvbnRleHQpO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIHRoaXMuZnJvbUFycmF5KGZyb20ubWFwKG1hcHBlcikpO1xuICAgIH1cblxuICB9KTtcbn1cblxuY2xhc3MgUGF0aCBleHRlbmRzIFNoYXBlIHtcbiAgLy8gSW5pdGlhbGl6ZSBub2RlXG4gIGNvbnN0cnVjdG9yKG5vZGUsIGF0dHJzID0gbm9kZSkge1xuICAgIHN1cGVyKG5vZGVPck5ldygncGF0aCcsIG5vZGUpLCBhdHRycyk7XG4gIH0gLy8gR2V0IGFycmF5XG5cblxuICBhcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXJyYXkgfHwgKHRoaXMuX2FycmF5ID0gbmV3IFBhdGhBcnJheSh0aGlzLmF0dHIoJ2QnKSkpO1xuICB9IC8vIENsZWFyIGFycmF5IGNhY2hlXG5cblxuICBjbGVhcigpIHtcbiAgICBkZWxldGUgdGhpcy5fYXJyYXk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0gLy8gU2V0IGhlaWdodCBvZiBlbGVtZW50XG5cblxuICBoZWlnaHQoaGVpZ2h0KSB7XG4gICAgcmV0dXJuIGhlaWdodCA9PSBudWxsID8gdGhpcy5iYm94KCkuaGVpZ2h0IDogdGhpcy5zaXplKHRoaXMuYmJveCgpLndpZHRoLCBoZWlnaHQpO1xuICB9IC8vIE1vdmUgYnkgbGVmdCB0b3AgY29ybmVyXG5cblxuICBtb3ZlKHgsIHkpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyKCdkJywgdGhpcy5hcnJheSgpLm1vdmUoeCwgeSkpO1xuICB9IC8vIFBsb3QgbmV3IHBhdGhcblxuXG4gIHBsb3QoZCkge1xuICAgIHJldHVybiBkID09IG51bGwgPyB0aGlzLmFycmF5KCkgOiB0aGlzLmNsZWFyKCkuYXR0cignZCcsIHR5cGVvZiBkID09PSAnc3RyaW5nJyA/IGQgOiB0aGlzLl9hcnJheSA9IG5ldyBQYXRoQXJyYXkoZCkpO1xuICB9IC8vIFNldCBlbGVtZW50IHNpemUgdG8gZ2l2ZW4gd2lkdGggYW5kIGhlaWdodFxuXG5cbiAgc2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgY29uc3QgcCA9IHByb3BvcnRpb25hbFNpemUodGhpcywgd2lkdGgsIGhlaWdodCk7XG4gICAgcmV0dXJuIHRoaXMuYXR0cignZCcsIHRoaXMuYXJyYXkoKS5zaXplKHAud2lkdGgsIHAuaGVpZ2h0KSk7XG4gIH0gLy8gU2V0IHdpZHRoIG9mIGVsZW1lbnRcblxuXG4gIHdpZHRoKHdpZHRoKSB7XG4gICAgcmV0dXJuIHdpZHRoID09IG51bGwgPyB0aGlzLmJib3goKS53aWR0aCA6IHRoaXMuc2l6ZSh3aWR0aCwgdGhpcy5iYm94KCkuaGVpZ2h0KTtcbiAgfSAvLyBNb3ZlIGJ5IGxlZnQgdG9wIGNvcm5lciBvdmVyIHgtYXhpc1xuXG5cbiAgeCh4KSB7XG4gICAgcmV0dXJuIHggPT0gbnVsbCA/IHRoaXMuYmJveCgpLnggOiB0aGlzLm1vdmUoeCwgdGhpcy5iYm94KCkueSk7XG4gIH0gLy8gTW92ZSBieSBsZWZ0IHRvcCBjb3JuZXIgb3ZlciB5LWF4aXNcblxuXG4gIHkoeSkge1xuICAgIHJldHVybiB5ID09IG51bGwgPyB0aGlzLmJib3goKS55IDogdGhpcy5tb3ZlKHRoaXMuYmJveCgpLngsIHkpO1xuICB9XG5cbn0gLy8gRGVmaW5lIG1vcnBoYWJsZSBhcnJheVxuXG5QYXRoLnByb3RvdHlwZS5Nb3JwaEFycmF5ID0gUGF0aEFycmF5OyAvLyBBZGQgcGFyZW50IG1ldGhvZFxuXG5yZWdpc3Rlck1ldGhvZHMoe1xuICBDb250YWluZXI6IHtcbiAgICAvLyBDcmVhdGUgYSB3cmFwcGVkIHBhdGggZWxlbWVudFxuICAgIHBhdGg6IHdyYXBXaXRoQXR0ckNoZWNrKGZ1bmN0aW9uIChkKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgcGxvdCBpcyBjYWxsZWQgYXMgYSBzZXR0ZXJcbiAgICAgIHJldHVybiB0aGlzLnB1dChuZXcgUGF0aCgpKS5wbG90KGQgfHwgbmV3IFBhdGhBcnJheSgpKTtcbiAgICB9KVxuICB9XG59KTtcbnJlZ2lzdGVyKFBhdGgsICdQYXRoJyk7XG5cbmZ1bmN0aW9uIGFycmF5KCkge1xuICByZXR1cm4gdGhpcy5fYXJyYXkgfHwgKHRoaXMuX2FycmF5ID0gbmV3IFBvaW50QXJyYXkodGhpcy5hdHRyKCdwb2ludHMnKSkpO1xufSAvLyBDbGVhciBhcnJheSBjYWNoZVxuXG5mdW5jdGlvbiBjbGVhcigpIHtcbiAgZGVsZXRlIHRoaXMuX2FycmF5O1xuICByZXR1cm4gdGhpcztcbn0gLy8gTW92ZSBieSBsZWZ0IHRvcCBjb3JuZXJcblxuZnVuY3Rpb24gbW92ZSQyKHgsIHkpIHtcbiAgcmV0dXJuIHRoaXMuYXR0cigncG9pbnRzJywgdGhpcy5hcnJheSgpLm1vdmUoeCwgeSkpO1xufSAvLyBQbG90IG5ldyBwYXRoXG5cbmZ1bmN0aW9uIHBsb3QocCkge1xuICByZXR1cm4gcCA9PSBudWxsID8gdGhpcy5hcnJheSgpIDogdGhpcy5jbGVhcigpLmF0dHIoJ3BvaW50cycsIHR5cGVvZiBwID09PSAnc3RyaW5nJyA/IHAgOiB0aGlzLl9hcnJheSA9IG5ldyBQb2ludEFycmF5KHApKTtcbn0gLy8gU2V0IGVsZW1lbnQgc2l6ZSB0byBnaXZlbiB3aWR0aCBhbmQgaGVpZ2h0XG5cbmZ1bmN0aW9uIHNpemUkMSh3aWR0aCwgaGVpZ2h0KSB7XG4gIGNvbnN0IHAgPSBwcm9wb3J0aW9uYWxTaXplKHRoaXMsIHdpZHRoLCBoZWlnaHQpO1xuICByZXR1cm4gdGhpcy5hdHRyKCdwb2ludHMnLCB0aGlzLmFycmF5KCkuc2l6ZShwLndpZHRoLCBwLmhlaWdodCkpO1xufVxuXG52YXIgcG9seSA9IHtcbiAgX19wcm90b19fOiBudWxsLFxuICBhcnJheTogYXJyYXksXG4gIGNsZWFyOiBjbGVhcixcbiAgbW92ZTogbW92ZSQyLFxuICBwbG90OiBwbG90LFxuICBzaXplOiBzaXplJDFcbn07XG5cbmNsYXNzIFBvbHlnb24gZXh0ZW5kcyBTaGFwZSB7XG4gIC8vIEluaXRpYWxpemUgbm9kZVxuICBjb25zdHJ1Y3Rvcihub2RlLCBhdHRycyA9IG5vZGUpIHtcbiAgICBzdXBlcihub2RlT3JOZXcoJ3BvbHlnb24nLCBub2RlKSwgYXR0cnMpO1xuICB9XG5cbn1cbnJlZ2lzdGVyTWV0aG9kcyh7XG4gIENvbnRhaW5lcjoge1xuICAgIC8vIENyZWF0ZSBhIHdyYXBwZWQgcG9seWdvbiBlbGVtZW50XG4gICAgcG9seWdvbjogd3JhcFdpdGhBdHRyQ2hlY2soZnVuY3Rpb24gKHApIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBwbG90IGlzIGNhbGxlZCBhcyBhIHNldHRlclxuICAgICAgcmV0dXJuIHRoaXMucHV0KG5ldyBQb2x5Z29uKCkpLnBsb3QocCB8fCBuZXcgUG9pbnRBcnJheSgpKTtcbiAgICB9KVxuICB9XG59KTtcbmV4dGVuZChQb2x5Z29uLCBwb2ludGVkKTtcbmV4dGVuZChQb2x5Z29uLCBwb2x5KTtcbnJlZ2lzdGVyKFBvbHlnb24sICdQb2x5Z29uJyk7XG5cbmNsYXNzIFBvbHlsaW5lIGV4dGVuZHMgU2hhcGUge1xuICAvLyBJbml0aWFsaXplIG5vZGVcbiAgY29uc3RydWN0b3Iobm9kZSwgYXR0cnMgPSBub2RlKSB7XG4gICAgc3VwZXIobm9kZU9yTmV3KCdwb2x5bGluZScsIG5vZGUpLCBhdHRycyk7XG4gIH1cblxufVxucmVnaXN0ZXJNZXRob2RzKHtcbiAgQ29udGFpbmVyOiB7XG4gICAgLy8gQ3JlYXRlIGEgd3JhcHBlZCBwb2x5Z29uIGVsZW1lbnRcbiAgICBwb2x5bGluZTogd3JhcFdpdGhBdHRyQ2hlY2soZnVuY3Rpb24gKHApIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBwbG90IGlzIGNhbGxlZCBhcyBhIHNldHRlclxuICAgICAgcmV0dXJuIHRoaXMucHV0KG5ldyBQb2x5bGluZSgpKS5wbG90KHAgfHwgbmV3IFBvaW50QXJyYXkoKSk7XG4gICAgfSlcbiAgfVxufSk7XG5leHRlbmQoUG9seWxpbmUsIHBvaW50ZWQpO1xuZXh0ZW5kKFBvbHlsaW5lLCBwb2x5KTtcbnJlZ2lzdGVyKFBvbHlsaW5lLCAnUG9seWxpbmUnKTtcblxuY2xhc3MgUmVjdCBleHRlbmRzIFNoYXBlIHtcbiAgLy8gSW5pdGlhbGl6ZSBub2RlXG4gIGNvbnN0cnVjdG9yKG5vZGUsIGF0dHJzID0gbm9kZSkge1xuICAgIHN1cGVyKG5vZGVPck5ldygncmVjdCcsIG5vZGUpLCBhdHRycyk7XG4gIH1cblxufVxuZXh0ZW5kKFJlY3QsIHtcbiAgcngsXG4gIHJ5XG59KTtcbnJlZ2lzdGVyTWV0aG9kcyh7XG4gIENvbnRhaW5lcjoge1xuICAgIC8vIENyZWF0ZSBhIHJlY3QgZWxlbWVudFxuICAgIHJlY3Q6IHdyYXBXaXRoQXR0ckNoZWNrKGZ1bmN0aW9uICh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICByZXR1cm4gdGhpcy5wdXQobmV3IFJlY3QoKSkuc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgICB9KVxuICB9XG59KTtcbnJlZ2lzdGVyKFJlY3QsICdSZWN0Jyk7XG5cbmNsYXNzIFF1ZXVlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fZmlyc3QgPSBudWxsO1xuICAgIHRoaXMuX2xhc3QgPSBudWxsO1xuICB9IC8vIFNob3dzIHVzIHRoZSBmaXJzdCBpdGVtIGluIHRoZSBsaXN0XG5cblxuICBmaXJzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmlyc3QgJiYgdGhpcy5fZmlyc3QudmFsdWU7XG4gIH0gLy8gU2hvd3MgdXMgdGhlIGxhc3QgaXRlbSBpbiB0aGUgbGlzdFxuXG5cbiAgbGFzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGFzdCAmJiB0aGlzLl9sYXN0LnZhbHVlO1xuICB9XG5cbiAgcHVzaCh2YWx1ZSkge1xuICAgIC8vIEFuIGl0ZW0gc3RvcmVzIGFuIGlkIGFuZCB0aGUgcHJvdmlkZWQgdmFsdWVcbiAgICBjb25zdCBpdGVtID0gdHlwZW9mIHZhbHVlLm5leHQgIT09ICd1bmRlZmluZWQnID8gdmFsdWUgOiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBuZXh0OiBudWxsLFxuICAgICAgcHJldjogbnVsbFxuICAgIH07IC8vIERlYWwgd2l0aCB0aGUgcXVldWUgYmVpbmcgZW1wdHkgb3IgcG9wdWxhdGVkXG5cbiAgICBpZiAodGhpcy5fbGFzdCkge1xuICAgICAgaXRlbS5wcmV2ID0gdGhpcy5fbGFzdDtcbiAgICAgIHRoaXMuX2xhc3QubmV4dCA9IGl0ZW07XG4gICAgICB0aGlzLl9sYXN0ID0gaXRlbTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbGFzdCA9IGl0ZW07XG4gICAgICB0aGlzLl9maXJzdCA9IGl0ZW07XG4gICAgfSAvLyBSZXR1cm4gdGhlIGN1cnJlbnQgaXRlbVxuXG5cbiAgICByZXR1cm4gaXRlbTtcbiAgfSAvLyBSZW1vdmVzIHRoZSBpdGVtIHRoYXQgd2FzIHJldHVybmVkIGZyb20gdGhlIHB1c2hcblxuXG4gIHJlbW92ZShpdGVtKSB7XG4gICAgLy8gUmVsaW5rIHRoZSBwcmV2aW91cyBpdGVtXG4gICAgaWYgKGl0ZW0ucHJldikgaXRlbS5wcmV2Lm5leHQgPSBpdGVtLm5leHQ7XG4gICAgaWYgKGl0ZW0ubmV4dCkgaXRlbS5uZXh0LnByZXYgPSBpdGVtLnByZXY7XG4gICAgaWYgKGl0ZW0gPT09IHRoaXMuX2xhc3QpIHRoaXMuX2xhc3QgPSBpdGVtLnByZXY7XG4gICAgaWYgKGl0ZW0gPT09IHRoaXMuX2ZpcnN0KSB0aGlzLl9maXJzdCA9IGl0ZW0ubmV4dDsgLy8gSW52YWxpZGF0ZSBpdGVtXG5cbiAgICBpdGVtLnByZXYgPSBudWxsO1xuICAgIGl0ZW0ubmV4dCA9IG51bGw7XG4gIH1cblxuICBzaGlmdCgpIHtcbiAgICAvLyBDaGVjayBpZiB3ZSBoYXZlIGEgdmFsdWVcbiAgICBjb25zdCByZW1vdmUgPSB0aGlzLl9maXJzdDtcbiAgICBpZiAoIXJlbW92ZSkgcmV0dXJuIG51bGw7IC8vIElmIHdlIGRvLCByZW1vdmUgaXQgYW5kIHJlbGluayB0aGluZ3NcblxuICAgIHRoaXMuX2ZpcnN0ID0gcmVtb3ZlLm5leHQ7XG4gICAgaWYgKHRoaXMuX2ZpcnN0KSB0aGlzLl9maXJzdC5wcmV2ID0gbnVsbDtcbiAgICB0aGlzLl9sYXN0ID0gdGhpcy5fZmlyc3QgPyB0aGlzLl9sYXN0IDogbnVsbDtcbiAgICByZXR1cm4gcmVtb3ZlLnZhbHVlO1xuICB9XG5cbn1cblxuY29uc3QgQW5pbWF0b3IgPSB7XG4gIG5leHREcmF3OiBudWxsLFxuICBmcmFtZXM6IG5ldyBRdWV1ZSgpLFxuICB0aW1lb3V0czogbmV3IFF1ZXVlKCksXG4gIGltbWVkaWF0ZXM6IG5ldyBRdWV1ZSgpLFxuICB0aW1lcjogKCkgPT4gZ2xvYmFscy53aW5kb3cucGVyZm9ybWFuY2UgfHwgZ2xvYmFscy53aW5kb3cuRGF0ZSxcbiAgdHJhbnNmb3JtczogW10sXG5cbiAgZnJhbWUoZm4pIHtcbiAgICAvLyBTdG9yZSB0aGUgbm9kZVxuICAgIGNvbnN0IG5vZGUgPSBBbmltYXRvci5mcmFtZXMucHVzaCh7XG4gICAgICBydW46IGZuXG4gICAgfSk7IC8vIFJlcXVlc3QgYW4gYW5pbWF0aW9uIGZyYW1lIGlmIHdlIGRvbid0IGhhdmUgb25lXG5cbiAgICBpZiAoQW5pbWF0b3IubmV4dERyYXcgPT09IG51bGwpIHtcbiAgICAgIEFuaW1hdG9yLm5leHREcmF3ID0gZ2xvYmFscy53aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKEFuaW1hdG9yLl9kcmF3KTtcbiAgICB9IC8vIFJldHVybiB0aGUgbm9kZSBzbyB3ZSBjYW4gcmVtb3ZlIGl0IGVhc2lseVxuXG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfSxcblxuICB0aW1lb3V0KGZuLCBkZWxheSkge1xuICAgIGRlbGF5ID0gZGVsYXkgfHwgMDsgLy8gV29yayBvdXQgd2hlbiB0aGUgZXZlbnQgc2hvdWxkIGZpcmVcblxuICAgIGNvbnN0IHRpbWUgPSBBbmltYXRvci50aW1lcigpLm5vdygpICsgZGVsYXk7IC8vIEFkZCB0aGUgdGltZW91dCB0byB0aGUgZW5kIG9mIHRoZSBxdWV1ZVxuXG4gICAgY29uc3Qgbm9kZSA9IEFuaW1hdG9yLnRpbWVvdXRzLnB1c2goe1xuICAgICAgcnVuOiBmbixcbiAgICAgIHRpbWU6IHRpbWVcbiAgICB9KTsgLy8gUmVxdWVzdCBhbm90aGVyIGFuaW1hdGlvbiBmcmFtZSBpZiB3ZSBuZWVkIG9uZVxuXG4gICAgaWYgKEFuaW1hdG9yLm5leHREcmF3ID09PSBudWxsKSB7XG4gICAgICBBbmltYXRvci5uZXh0RHJhdyA9IGdsb2JhbHMud2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShBbmltYXRvci5fZHJhdyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH0sXG5cbiAgaW1tZWRpYXRlKGZuKSB7XG4gICAgLy8gQWRkIHRoZSBpbW1lZGlhdGUgZm4gdG8gdGhlIGVuZCBvZiB0aGUgcXVldWVcbiAgICBjb25zdCBub2RlID0gQW5pbWF0b3IuaW1tZWRpYXRlcy5wdXNoKGZuKTsgLy8gUmVxdWVzdCBhbm90aGVyIGFuaW1hdGlvbiBmcmFtZSBpZiB3ZSBuZWVkIG9uZVxuXG4gICAgaWYgKEFuaW1hdG9yLm5leHREcmF3ID09PSBudWxsKSB7XG4gICAgICBBbmltYXRvci5uZXh0RHJhdyA9IGdsb2JhbHMud2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShBbmltYXRvci5fZHJhdyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH0sXG5cbiAgY2FuY2VsRnJhbWUobm9kZSkge1xuICAgIG5vZGUgIT0gbnVsbCAmJiBBbmltYXRvci5mcmFtZXMucmVtb3ZlKG5vZGUpO1xuICB9LFxuXG4gIGNsZWFyVGltZW91dChub2RlKSB7XG4gICAgbm9kZSAhPSBudWxsICYmIEFuaW1hdG9yLnRpbWVvdXRzLnJlbW92ZShub2RlKTtcbiAgfSxcblxuICBjYW5jZWxJbW1lZGlhdGUobm9kZSkge1xuICAgIG5vZGUgIT0gbnVsbCAmJiBBbmltYXRvci5pbW1lZGlhdGVzLnJlbW92ZShub2RlKTtcbiAgfSxcblxuICBfZHJhdyhub3cpIHtcbiAgICAvLyBSdW4gYWxsIHRoZSB0aW1lb3V0cyB3ZSBjYW4gcnVuLCBpZiB0aGV5IGFyZSBub3QgcmVhZHkgeWV0LCBhZGQgdGhlbVxuICAgIC8vIHRvIHRoZSBlbmQgb2YgdGhlIHF1ZXVlIGltbWVkaWF0ZWx5ISAoYmFkIHRpbWVvdXRzISEhIFtzYXJjYXNtXSlcbiAgICBsZXQgbmV4dFRpbWVvdXQgPSBudWxsO1xuICAgIGNvbnN0IGxhc3RUaW1lb3V0ID0gQW5pbWF0b3IudGltZW91dHMubGFzdCgpO1xuXG4gICAgd2hpbGUgKG5leHRUaW1lb3V0ID0gQW5pbWF0b3IudGltZW91dHMuc2hpZnQoKSkge1xuICAgICAgLy8gUnVuIHRoZSB0aW1lb3V0IGlmIGl0cyB0aW1lLCBvciBwdXNoIGl0IHRvIHRoZSBlbmRcbiAgICAgIGlmIChub3cgPj0gbmV4dFRpbWVvdXQudGltZSkge1xuICAgICAgICBuZXh0VGltZW91dC5ydW4oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEFuaW1hdG9yLnRpbWVvdXRzLnB1c2gobmV4dFRpbWVvdXQpO1xuICAgICAgfSAvLyBJZiB3ZSBoaXQgdGhlIGxhc3QgaXRlbSwgd2Ugc2hvdWxkIHN0b3Agc2hpZnRpbmcgb3V0IG1vcmUgaXRlbXNcblxuXG4gICAgICBpZiAobmV4dFRpbWVvdXQgPT09IGxhc3RUaW1lb3V0KSBicmVhaztcbiAgICB9IC8vIFJ1biBhbGwgb2YgdGhlIGFuaW1hdGlvbiBmcmFtZXNcblxuXG4gICAgbGV0IG5leHRGcmFtZSA9IG51bGw7XG4gICAgY29uc3QgbGFzdEZyYW1lID0gQW5pbWF0b3IuZnJhbWVzLmxhc3QoKTtcblxuICAgIHdoaWxlIChuZXh0RnJhbWUgIT09IGxhc3RGcmFtZSAmJiAobmV4dEZyYW1lID0gQW5pbWF0b3IuZnJhbWVzLnNoaWZ0KCkpKSB7XG4gICAgICBuZXh0RnJhbWUucnVuKG5vdyk7XG4gICAgfVxuXG4gICAgbGV0IG5leHRJbW1lZGlhdGUgPSBudWxsO1xuXG4gICAgd2hpbGUgKG5leHRJbW1lZGlhdGUgPSBBbmltYXRvci5pbW1lZGlhdGVzLnNoaWZ0KCkpIHtcbiAgICAgIG5leHRJbW1lZGlhdGUoKTtcbiAgICB9IC8vIElmIHdlIGhhdmUgcmVtYWluaW5nIHRpbWVvdXRzIG9yIGZyYW1lcywgZHJhdyB1bnRpbCB3ZSBkb24ndCBhbnltb3JlXG5cblxuICAgIEFuaW1hdG9yLm5leHREcmF3ID0gQW5pbWF0b3IudGltZW91dHMuZmlyc3QoKSB8fCBBbmltYXRvci5mcmFtZXMuZmlyc3QoKSA/IGdsb2JhbHMud2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShBbmltYXRvci5fZHJhdykgOiBudWxsO1xuICB9XG5cbn07XG5cbmNvbnN0IG1ha2VTY2hlZHVsZSA9IGZ1bmN0aW9uIChydW5uZXJJbmZvKSB7XG4gIGNvbnN0IHN0YXJ0ID0gcnVubmVySW5mby5zdGFydDtcbiAgY29uc3QgZHVyYXRpb24gPSBydW5uZXJJbmZvLnJ1bm5lci5kdXJhdGlvbigpO1xuICBjb25zdCBlbmQgPSBzdGFydCArIGR1cmF0aW9uO1xuICByZXR1cm4ge1xuICAgIHN0YXJ0OiBzdGFydCxcbiAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgZW5kOiBlbmQsXG4gICAgcnVubmVyOiBydW5uZXJJbmZvLnJ1bm5lclxuICB9O1xufTtcblxuY29uc3QgZGVmYXVsdFNvdXJjZSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgdyA9IGdsb2JhbHMud2luZG93O1xuICByZXR1cm4gKHcucGVyZm9ybWFuY2UgfHwgdy5EYXRlKS5ub3coKTtcbn07XG5cbmNsYXNzIFRpbWVsaW5lIGV4dGVuZHMgRXZlbnRUYXJnZXQge1xuICAvLyBDb25zdHJ1Y3QgYSBuZXcgdGltZWxpbmUgb24gdGhlIGdpdmVuIGVsZW1lbnRcbiAgY29uc3RydWN0b3IodGltZVNvdXJjZSA9IGRlZmF1bHRTb3VyY2UpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX3RpbWVTb3VyY2UgPSB0aW1lU291cmNlOyAvLyBTdG9yZSB0aGUgdGltaW5nIHZhcmlhYmxlc1xuXG4gICAgdGhpcy5fc3RhcnRUaW1lID0gMDtcbiAgICB0aGlzLl9zcGVlZCA9IDEuMDsgLy8gRGV0ZXJtaW5lcyBob3cgbG9uZyBhIHJ1bm5lciBpcyBob2xkIGluIG1lbW9yeS4gQ2FuIGJlIGEgZHQgb3IgdHJ1ZS9mYWxzZVxuXG4gICAgdGhpcy5fcGVyc2lzdCA9IDA7IC8vIEtlZXAgdHJhY2sgb2YgdGhlIHJ1bm5pbmcgYW5pbWF0aW9ucyBhbmQgdGhlaXIgc3RhcnRpbmcgcGFyYW1ldGVyc1xuXG4gICAgdGhpcy5fbmV4dEZyYW1lID0gbnVsbDtcbiAgICB0aGlzLl9wYXVzZWQgPSB0cnVlO1xuICAgIHRoaXMuX3J1bm5lcnMgPSBbXTtcbiAgICB0aGlzLl9ydW5uZXJJZHMgPSBbXTtcbiAgICB0aGlzLl9sYXN0UnVubmVySWQgPSAtMTtcbiAgICB0aGlzLl90aW1lID0gMDtcbiAgICB0aGlzLl9sYXN0U291cmNlVGltZSA9IDA7XG4gICAgdGhpcy5fbGFzdFN0ZXBUaW1lID0gMDsgLy8gTWFrZSBzdXJlIHRoYXQgc3RlcCBpcyBhbHdheXMgY2FsbGVkIGluIGNsYXNzIGNvbnRleHRcblxuICAgIHRoaXMuX3N0ZXAgPSB0aGlzLl9zdGVwRm4uYmluZCh0aGlzLCBmYWxzZSk7XG4gICAgdGhpcy5fc3RlcEltbWVkaWF0ZSA9IHRoaXMuX3N0ZXBGbi5iaW5kKHRoaXMsIHRydWUpO1xuICB9XG5cbiAgYWN0aXZlKCkge1xuICAgIHJldHVybiAhIXRoaXMuX25leHRGcmFtZTtcbiAgfVxuXG4gIGZpbmlzaCgpIHtcbiAgICAvLyBHbyB0byBlbmQgYW5kIHBhdXNlXG4gICAgdGhpcy50aW1lKHRoaXMuZ2V0RW5kVGltZU9mVGltZWxpbmUoKSArIDEpO1xuICAgIHJldHVybiB0aGlzLnBhdXNlKCk7XG4gIH0gLy8gQ2FsY3VsYXRlcyB0aGUgZW5kIG9mIHRoZSB0aW1lbGluZVxuXG5cbiAgZ2V0RW5kVGltZSgpIHtcbiAgICBjb25zdCBsYXN0UnVubmVySW5mbyA9IHRoaXMuZ2V0TGFzdFJ1bm5lckluZm8oKTtcbiAgICBjb25zdCBsYXN0RHVyYXRpb24gPSBsYXN0UnVubmVySW5mbyA/IGxhc3RSdW5uZXJJbmZvLnJ1bm5lci5kdXJhdGlvbigpIDogMDtcbiAgICBjb25zdCBsYXN0U3RhcnRUaW1lID0gbGFzdFJ1bm5lckluZm8gPyBsYXN0UnVubmVySW5mby5zdGFydCA6IHRoaXMuX3RpbWU7XG4gICAgcmV0dXJuIGxhc3RTdGFydFRpbWUgKyBsYXN0RHVyYXRpb247XG4gIH1cblxuICBnZXRFbmRUaW1lT2ZUaW1lbGluZSgpIHtcbiAgICBjb25zdCBlbmRUaW1lcyA9IHRoaXMuX3J1bm5lcnMubWFwKGkgPT4gaS5zdGFydCArIGkucnVubmVyLmR1cmF0aW9uKCkpO1xuXG4gICAgcmV0dXJuIE1hdGgubWF4KDAsIC4uLmVuZFRpbWVzKTtcbiAgfVxuXG4gIGdldExhc3RSdW5uZXJJbmZvKCkge1xuICAgIHJldHVybiB0aGlzLmdldFJ1bm5lckluZm9CeUlkKHRoaXMuX2xhc3RSdW5uZXJJZCk7XG4gIH1cblxuICBnZXRSdW5uZXJJbmZvQnlJZChpZCkge1xuICAgIHJldHVybiB0aGlzLl9ydW5uZXJzW3RoaXMuX3J1bm5lcklkcy5pbmRleE9mKGlkKV0gfHwgbnVsbDtcbiAgfVxuXG4gIHBhdXNlKCkge1xuICAgIHRoaXMuX3BhdXNlZCA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRpbnVlKCk7XG4gIH1cblxuICBwZXJzaXN0KGR0T3JGb3JldmVyKSB7XG4gICAgaWYgKGR0T3JGb3JldmVyID09IG51bGwpIHJldHVybiB0aGlzLl9wZXJzaXN0O1xuICAgIHRoaXMuX3BlcnNpc3QgPSBkdE9yRm9yZXZlcjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHBsYXkoKSB7XG4gICAgLy8gTm93IG1ha2Ugc3VyZSB3ZSBhcmUgbm90IHBhdXNlZCBhbmQgY29udGludWUgdGhlIGFuaW1hdGlvblxuICAgIHRoaXMuX3BhdXNlZCA9IGZhbHNlO1xuICAgIHJldHVybiB0aGlzLnVwZGF0ZVRpbWUoKS5fY29udGludWUoKTtcbiAgfVxuXG4gIHJldmVyc2UoeWVzKSB7XG4gICAgY29uc3QgY3VycmVudFNwZWVkID0gdGhpcy5zcGVlZCgpO1xuICAgIGlmICh5ZXMgPT0gbnVsbCkgcmV0dXJuIHRoaXMuc3BlZWQoLWN1cnJlbnRTcGVlZCk7XG4gICAgY29uc3QgcG9zaXRpdmUgPSBNYXRoLmFicyhjdXJyZW50U3BlZWQpO1xuICAgIHJldHVybiB0aGlzLnNwZWVkKHllcyA/IC1wb3NpdGl2ZSA6IHBvc2l0aXZlKTtcbiAgfSAvLyBzY2hlZHVsZXMgYSBydW5uZXIgb24gdGhlIHRpbWVsaW5lXG5cblxuICBzY2hlZHVsZShydW5uZXIsIGRlbGF5LCB3aGVuKSB7XG4gICAgaWYgKHJ1bm5lciA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcnVubmVycy5tYXAobWFrZVNjaGVkdWxlKTtcbiAgICB9IC8vIFRoZSBzdGFydCB0aW1lIGZvciB0aGUgbmV4dCBhbmltYXRpb24gY2FuIGVpdGhlciBiZSBnaXZlbiBleHBsaWNpdGx5LFxuICAgIC8vIGRlcml2ZWQgZnJvbSB0aGUgY3VycmVudCB0aW1lbGluZSB0aW1lIG9yIGl0IGNhbiBiZSByZWxhdGl2ZSB0byB0aGVcbiAgICAvLyBsYXN0IHN0YXJ0IHRpbWUgdG8gY2hhaW4gYW5pbWF0aW9ucyBkaXJlY3RseVxuXG5cbiAgICBsZXQgYWJzb2x1dGVTdGFydFRpbWUgPSAwO1xuICAgIGNvbnN0IGVuZFRpbWUgPSB0aGlzLmdldEVuZFRpbWUoKTtcbiAgICBkZWxheSA9IGRlbGF5IHx8IDA7IC8vIFdvcmsgb3V0IHdoZW4gdG8gc3RhcnQgdGhlIGFuaW1hdGlvblxuXG4gICAgaWYgKHdoZW4gPT0gbnVsbCB8fCB3aGVuID09PSAnbGFzdCcgfHwgd2hlbiA9PT0gJ2FmdGVyJykge1xuICAgICAgLy8gVGFrZSB0aGUgbGFzdCB0aW1lIGFuZCBpbmNyZW1lbnRcbiAgICAgIGFic29sdXRlU3RhcnRUaW1lID0gZW5kVGltZTtcbiAgICB9IGVsc2UgaWYgKHdoZW4gPT09ICdhYnNvbHV0ZScgfHwgd2hlbiA9PT0gJ3N0YXJ0Jykge1xuICAgICAgYWJzb2x1dGVTdGFydFRpbWUgPSBkZWxheTtcbiAgICAgIGRlbGF5ID0gMDtcbiAgICB9IGVsc2UgaWYgKHdoZW4gPT09ICdub3cnKSB7XG4gICAgICBhYnNvbHV0ZVN0YXJ0VGltZSA9IHRoaXMuX3RpbWU7XG4gICAgfSBlbHNlIGlmICh3aGVuID09PSAncmVsYXRpdmUnKSB7XG4gICAgICBjb25zdCBydW5uZXJJbmZvID0gdGhpcy5nZXRSdW5uZXJJbmZvQnlJZChydW5uZXIuaWQpO1xuXG4gICAgICBpZiAocnVubmVySW5mbykge1xuICAgICAgICBhYnNvbHV0ZVN0YXJ0VGltZSA9IHJ1bm5lckluZm8uc3RhcnQgKyBkZWxheTtcbiAgICAgICAgZGVsYXkgPSAwO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAod2hlbiA9PT0gJ3dpdGgtbGFzdCcpIHtcbiAgICAgIGNvbnN0IGxhc3RSdW5uZXJJbmZvID0gdGhpcy5nZXRMYXN0UnVubmVySW5mbygpO1xuICAgICAgY29uc3QgbGFzdFN0YXJ0VGltZSA9IGxhc3RSdW5uZXJJbmZvID8gbGFzdFJ1bm5lckluZm8uc3RhcnQgOiB0aGlzLl90aW1lO1xuICAgICAgYWJzb2x1dGVTdGFydFRpbWUgPSBsYXN0U3RhcnRUaW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgdmFsdWUgZm9yIHRoZSBcIndoZW5cIiBwYXJhbWV0ZXInKTtcbiAgICB9IC8vIE1hbmFnZSBydW5uZXJcblxuXG4gICAgcnVubmVyLnVuc2NoZWR1bGUoKTtcbiAgICBydW5uZXIudGltZWxpbmUodGhpcyk7XG4gICAgY29uc3QgcGVyc2lzdCA9IHJ1bm5lci5wZXJzaXN0KCk7XG4gICAgY29uc3QgcnVubmVySW5mbyA9IHtcbiAgICAgIHBlcnNpc3Q6IHBlcnNpc3QgPT09IG51bGwgPyB0aGlzLl9wZXJzaXN0IDogcGVyc2lzdCxcbiAgICAgIHN0YXJ0OiBhYnNvbHV0ZVN0YXJ0VGltZSArIGRlbGF5LFxuICAgICAgcnVubmVyXG4gICAgfTtcbiAgICB0aGlzLl9sYXN0UnVubmVySWQgPSBydW5uZXIuaWQ7XG5cbiAgICB0aGlzLl9ydW5uZXJzLnB1c2gocnVubmVySW5mbyk7XG5cbiAgICB0aGlzLl9ydW5uZXJzLnNvcnQoKGEsIGIpID0+IGEuc3RhcnQgLSBiLnN0YXJ0KTtcblxuICAgIHRoaXMuX3J1bm5lcklkcyA9IHRoaXMuX3J1bm5lcnMubWFwKGluZm8gPT4gaW5mby5ydW5uZXIuaWQpO1xuXG4gICAgdGhpcy51cGRhdGVUaW1lKCkuX2NvbnRpbnVlKCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNlZWsoZHQpIHtcbiAgICByZXR1cm4gdGhpcy50aW1lKHRoaXMuX3RpbWUgKyBkdCk7XG4gIH1cblxuICBzb3VyY2UoZm4pIHtcbiAgICBpZiAoZm4gPT0gbnVsbCkgcmV0dXJuIHRoaXMuX3RpbWVTb3VyY2U7XG4gICAgdGhpcy5fdGltZVNvdXJjZSA9IGZuO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc3BlZWQoc3BlZWQpIHtcbiAgICBpZiAoc3BlZWQgPT0gbnVsbCkgcmV0dXJuIHRoaXMuX3NwZWVkO1xuICAgIHRoaXMuX3NwZWVkID0gc3BlZWQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIC8vIEdvIHRvIHN0YXJ0IGFuZCBwYXVzZVxuICAgIHRoaXMudGltZSgwKTtcbiAgICByZXR1cm4gdGhpcy5wYXVzZSgpO1xuICB9XG5cbiAgdGltZSh0aW1lKSB7XG4gICAgaWYgKHRpbWUgPT0gbnVsbCkgcmV0dXJuIHRoaXMuX3RpbWU7XG4gICAgdGhpcy5fdGltZSA9IHRpbWU7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRpbnVlKHRydWUpO1xuICB9IC8vIFJlbW92ZSB0aGUgcnVubmVyIGZyb20gdGhpcyB0aW1lbGluZVxuXG5cbiAgdW5zY2hlZHVsZShydW5uZXIpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuX3J1bm5lcklkcy5pbmRleE9mKHJ1bm5lci5pZCk7XG5cbiAgICBpZiAoaW5kZXggPCAwKSByZXR1cm4gdGhpcztcblxuICAgIHRoaXMuX3J1bm5lcnMuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgIHRoaXMuX3J1bm5lcklkcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgcnVubmVyLnRpbWVsaW5lKG51bGwpO1xuICAgIHJldHVybiB0aGlzO1xuICB9IC8vIE1ha2VzIHN1cmUsIHRoYXQgYWZ0ZXIgcGF1c2luZyB0aGUgdGltZSBkb2Vzbid0IGp1bXBcblxuXG4gIHVwZGF0ZVRpbWUoKSB7XG4gICAgaWYgKCF0aGlzLmFjdGl2ZSgpKSB7XG4gICAgICB0aGlzLl9sYXN0U291cmNlVGltZSA9IHRoaXMuX3RpbWVTb3VyY2UoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSAvLyBDaGVja3MgaWYgd2UgYXJlIHJ1bm5pbmcgYW5kIGNvbnRpbnVlcyB0aGUgYW5pbWF0aW9uXG5cblxuICBfY29udGludWUoaW1tZWRpYXRlU3RlcCA9IGZhbHNlKSB7XG4gICAgQW5pbWF0b3IuY2FuY2VsRnJhbWUodGhpcy5fbmV4dEZyYW1lKTtcbiAgICB0aGlzLl9uZXh0RnJhbWUgPSBudWxsO1xuICAgIGlmIChpbW1lZGlhdGVTdGVwKSByZXR1cm4gdGhpcy5fc3RlcEltbWVkaWF0ZSgpO1xuICAgIGlmICh0aGlzLl9wYXVzZWQpIHJldHVybiB0aGlzO1xuICAgIHRoaXMuX25leHRGcmFtZSA9IEFuaW1hdG9yLmZyYW1lKHRoaXMuX3N0ZXApO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgX3N0ZXBGbihpbW1lZGlhdGVTdGVwID0gZmFsc2UpIHtcbiAgICAvLyBHZXQgdGhlIHRpbWUgZGVsdGEgZnJvbSB0aGUgbGFzdCB0aW1lIGFuZCB1cGRhdGUgdGhlIHRpbWVcbiAgICBjb25zdCB0aW1lID0gdGhpcy5fdGltZVNvdXJjZSgpO1xuXG4gICAgbGV0IGR0U291cmNlID0gdGltZSAtIHRoaXMuX2xhc3RTb3VyY2VUaW1lO1xuICAgIGlmIChpbW1lZGlhdGVTdGVwKSBkdFNvdXJjZSA9IDA7XG4gICAgY29uc3QgZHRUaW1lID0gdGhpcy5fc3BlZWQgKiBkdFNvdXJjZSArICh0aGlzLl90aW1lIC0gdGhpcy5fbGFzdFN0ZXBUaW1lKTtcbiAgICB0aGlzLl9sYXN0U291cmNlVGltZSA9IHRpbWU7IC8vIE9ubHkgdXBkYXRlIHRoZSB0aW1lIGlmIHdlIHVzZSB0aGUgdGltZVNvdXJjZS5cbiAgICAvLyBPdGhlcndpc2UgdXNlIHRoZSBjdXJyZW50IHRpbWVcblxuICAgIGlmICghaW1tZWRpYXRlU3RlcCkge1xuICAgICAgLy8gVXBkYXRlIHRoZSB0aW1lXG4gICAgICB0aGlzLl90aW1lICs9IGR0VGltZTtcbiAgICAgIHRoaXMuX3RpbWUgPSB0aGlzLl90aW1lIDwgMCA/IDAgOiB0aGlzLl90aW1lO1xuICAgIH1cblxuICAgIHRoaXMuX2xhc3RTdGVwVGltZSA9IHRoaXMuX3RpbWU7XG4gICAgdGhpcy5maXJlKCd0aW1lJywgdGhpcy5fdGltZSk7IC8vIFRoaXMgaXMgZm9yIHRoZSBjYXNlIHRoYXQgdGhlIHRpbWVsaW5lIHdhcyBzZWVrZWQgc28gdGhhdCB0aGUgdGltZVxuICAgIC8vIGlzIG5vdyBiZWZvcmUgdGhlIHN0YXJ0VGltZSBvZiB0aGUgcnVubmVyLiBUaGF0cyB3aHkgd2UgbmVlZCB0byBzZXRcbiAgICAvLyB0aGUgcnVubmVyIHRvIHBvc2l0aW9uIDBcbiAgICAvLyBGSVhNRTpcbiAgICAvLyBIb3dldmVyLCByZXNldGluZyBpbiBpbnNlcnRpb24gb3JkZXIgbGVhZHMgdG8gYnVncy4gQ29uc2lkZXJpbmcgdGhlIGNhc2UsXG4gICAgLy8gd2hlcmUgMiBydW5uZXJzIGNoYW5nZSB0aGUgc2FtZSBhdHRyaWJ1dGUgYnV0IGluIGRpZmZlcmVudCB0aW1lcyxcbiAgICAvLyByZXNldGluZyBib3RoIG9mIHRoZW0gd2lsbCBsZWFkIHRvIHRoZSBjYXNlIHdoZXJlIHRoZSBsYXRlciBkZWZpbmVkXG4gICAgLy8gcnVubmVyIGFsd2F5cyB3aW5zIHRoZSByZXNldCBldmVuIGlmIHRoZSBvdGhlciBydW5uZXIgc3RhcnRlZCBlYXJsaWVyXG4gICAgLy8gYW5kIHRoZXJlZm9yZSBzaG91bGQgd2luIHRoZSBhdHRyaWJ1dGUgYmF0dGxlXG4gICAgLy8gdGhpcyBjYW4gYmUgc29sdmVkIGJ5IHJlc2V0aW5nIHRoZW0gYmFja3dhcmRzXG5cbiAgICBmb3IgKGxldCBrID0gdGhpcy5fcnVubmVycy5sZW5ndGg7IGstLTspIHtcbiAgICAgIC8vIEdldCBhbmQgcnVuIHRoZSBjdXJyZW50IHJ1bm5lciBhbmQgaWdub3JlIGl0IGlmIGl0cyBpbmFjdGl2ZVxuICAgICAgY29uc3QgcnVubmVySW5mbyA9IHRoaXMuX3J1bm5lcnNba107XG4gICAgICBjb25zdCBydW5uZXIgPSBydW5uZXJJbmZvLnJ1bm5lcjsgLy8gTWFrZSBzdXJlIHRoYXQgd2UgZ2l2ZSB0aGUgYWN0dWFsIGRpZmZlcmVuY2VcbiAgICAgIC8vIGJldHdlZW4gcnVubmVyIHN0YXJ0IHRpbWUgYW5kIG5vd1xuXG4gICAgICBjb25zdCBkdFRvU3RhcnQgPSB0aGlzLl90aW1lIC0gcnVubmVySW5mby5zdGFydDsgLy8gRG9udCBydW4gcnVubmVyIGlmIG5vdCBzdGFydGVkIHlldFxuICAgICAgLy8gYW5kIHRyeSB0byByZXNldCBpdFxuXG4gICAgICBpZiAoZHRUb1N0YXJ0IDw9IDApIHtcbiAgICAgICAgcnVubmVyLnJlc2V0KCk7XG4gICAgICB9XG4gICAgfSAvLyBSdW4gYWxsIG9mIHRoZSBydW5uZXJzIGRpcmVjdGx5XG5cblxuICAgIGxldCBydW5uZXJzTGVmdCA9IGZhbHNlO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRoaXMuX3J1bm5lcnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIC8vIEdldCBhbmQgcnVuIHRoZSBjdXJyZW50IHJ1bm5lciBhbmQgaWdub3JlIGl0IGlmIGl0cyBpbmFjdGl2ZVxuICAgICAgY29uc3QgcnVubmVySW5mbyA9IHRoaXMuX3J1bm5lcnNbaV07XG4gICAgICBjb25zdCBydW5uZXIgPSBydW5uZXJJbmZvLnJ1bm5lcjtcbiAgICAgIGxldCBkdCA9IGR0VGltZTsgLy8gTWFrZSBzdXJlIHRoYXQgd2UgZ2l2ZSB0aGUgYWN0dWFsIGRpZmZlcmVuY2VcbiAgICAgIC8vIGJldHdlZW4gcnVubmVyIHN0YXJ0IHRpbWUgYW5kIG5vd1xuXG4gICAgICBjb25zdCBkdFRvU3RhcnQgPSB0aGlzLl90aW1lIC0gcnVubmVySW5mby5zdGFydDsgLy8gRG9udCBydW4gcnVubmVyIGlmIG5vdCBzdGFydGVkIHlldFxuXG4gICAgICBpZiAoZHRUb1N0YXJ0IDw9IDApIHtcbiAgICAgICAgcnVubmVyc0xlZnQgPSB0cnVlO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH0gZWxzZSBpZiAoZHRUb1N0YXJ0IDwgZHQpIHtcbiAgICAgICAgLy8gQWRqdXN0IGR0IHRvIG1ha2Ugc3VyZSB0aGF0IGFuaW1hdGlvbiBpcyBvbiBwb2ludFxuICAgICAgICBkdCA9IGR0VG9TdGFydDtcbiAgICAgIH1cblxuICAgICAgaWYgKCFydW5uZXIuYWN0aXZlKCkpIGNvbnRpbnVlOyAvLyBJZiB0aGlzIHJ1bm5lciBpcyBzdGlsbCBnb2luZywgc2lnbmFsIHRoYXQgd2UgbmVlZCBhbm90aGVyIGFuaW1hdGlvblxuICAgICAgLy8gZnJhbWUsIG90aGVyd2lzZSwgcmVtb3ZlIHRoZSBjb21wbGV0ZWQgcnVubmVyXG5cbiAgICAgIGNvbnN0IGZpbmlzaGVkID0gcnVubmVyLnN0ZXAoZHQpLmRvbmU7XG5cbiAgICAgIGlmICghZmluaXNoZWQpIHtcbiAgICAgICAgcnVubmVyc0xlZnQgPSB0cnVlOyAvLyBjb250aW51ZVxuICAgICAgfSBlbHNlIGlmIChydW5uZXJJbmZvLnBlcnNpc3QgIT09IHRydWUpIHtcbiAgICAgICAgLy8gcnVubmVyIGlzIGZpbmlzaGVkLiBBbmQgcnVubmVyIG1pZ2h0IGdldCByZW1vdmVkXG4gICAgICAgIGNvbnN0IGVuZFRpbWUgPSBydW5uZXIuZHVyYXRpb24oKSAtIHJ1bm5lci50aW1lKCkgKyB0aGlzLl90aW1lO1xuXG4gICAgICAgIGlmIChlbmRUaW1lICsgcnVubmVySW5mby5wZXJzaXN0IDwgdGhpcy5fdGltZSkge1xuICAgICAgICAgIC8vIERlbGV0ZSBydW5uZXIgYW5kIGNvcnJlY3QgaW5kZXhcbiAgICAgICAgICBydW5uZXIudW5zY2hlZHVsZSgpO1xuICAgICAgICAgIC0taTtcbiAgICAgICAgICAtLWxlbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gLy8gQmFzaWNhbGx5OiB3ZSBjb250aW51ZSB3aGVuIHRoZXJlIGFyZSBydW5uZXJzIHJpZ2h0IGZyb20gdXMgaW4gdGltZVxuICAgIC8vIHdoZW4gLS0+LCBhbmQgd2hlbiBydW5uZXJzIGFyZSBsZWZ0IGZyb20gdXMgd2hlbiA8LS1cblxuXG4gICAgaWYgKHJ1bm5lcnNMZWZ0ICYmICEodGhpcy5fc3BlZWQgPCAwICYmIHRoaXMuX3RpbWUgPT09IDApIHx8IHRoaXMuX3J1bm5lcklkcy5sZW5ndGggJiYgdGhpcy5fc3BlZWQgPCAwICYmIHRoaXMuX3RpbWUgPiAwKSB7XG4gICAgICB0aGlzLl9jb250aW51ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBhdXNlKCk7XG4gICAgICB0aGlzLmZpcmUoJ2ZpbmlzaGVkJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxufVxucmVnaXN0ZXJNZXRob2RzKHtcbiAgRWxlbWVudDoge1xuICAgIHRpbWVsaW5lOiBmdW5jdGlvbiAodGltZWxpbmUpIHtcbiAgICAgIGlmICh0aW1lbGluZSA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX3RpbWVsaW5lID0gdGhpcy5fdGltZWxpbmUgfHwgbmV3IFRpbWVsaW5lKCk7XG4gICAgICAgIHJldHVybiB0aGlzLl90aW1lbGluZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3RpbWVsaW5lID0gdGltZWxpbmU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSk7XG5cbmNsYXNzIFJ1bm5lciBleHRlbmRzIEV2ZW50VGFyZ2V0IHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHN1cGVyKCk7IC8vIFN0b3JlIGEgdW5pcXVlIGlkIG9uIHRoZSBydW5uZXIsIHNvIHRoYXQgd2UgY2FuIGlkZW50aWZ5IGl0IGxhdGVyXG5cbiAgICB0aGlzLmlkID0gUnVubmVyLmlkKys7IC8vIEVuc3VyZSBhIGRlZmF1bHQgdmFsdWVcblxuICAgIG9wdGlvbnMgPSBvcHRpb25zID09IG51bGwgPyB0aW1lbGluZS5kdXJhdGlvbiA6IG9wdGlvbnM7IC8vIEVuc3VyZSB0aGF0IHdlIGdldCBhIGNvbnRyb2xsZXJcblxuICAgIG9wdGlvbnMgPSB0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJyA/IG5ldyBDb250cm9sbGVyKG9wdGlvbnMpIDogb3B0aW9uczsgLy8gRGVjbGFyZSBhbGwgb2YgdGhlIHZhcmlhYmxlc1xuXG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGw7XG4gICAgdGhpcy5fdGltZWxpbmUgPSBudWxsO1xuICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgIHRoaXMuX3F1ZXVlID0gW107IC8vIFdvcmsgb3V0IHRoZSBzdGVwcGVyIGFuZCB0aGUgZHVyYXRpb25cblxuICAgIHRoaXMuX2R1cmF0aW9uID0gdHlwZW9mIG9wdGlvbnMgPT09ICdudW1iZXInICYmIG9wdGlvbnM7XG4gICAgdGhpcy5faXNEZWNsYXJhdGl2ZSA9IG9wdGlvbnMgaW5zdGFuY2VvZiBDb250cm9sbGVyO1xuICAgIHRoaXMuX3N0ZXBwZXIgPSB0aGlzLl9pc0RlY2xhcmF0aXZlID8gb3B0aW9ucyA6IG5ldyBFYXNlKCk7IC8vIFdlIGNvcHkgdGhlIGN1cnJlbnQgdmFsdWVzIGZyb20gdGhlIHRpbWVsaW5lIGJlY2F1c2UgdGhleSBjYW4gY2hhbmdlXG5cbiAgICB0aGlzLl9oaXN0b3J5ID0ge307IC8vIFN0b3JlIHRoZSBzdGF0ZSBvZiB0aGUgcnVubmVyXG5cbiAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMuX3RpbWUgPSAwO1xuICAgIHRoaXMuX2xhc3RUaW1lID0gMDsgLy8gQXQgY3JlYXRpb24sIHRoZSBydW5uZXIgaXMgaW4gcmVzZXRlZCBzdGF0ZVxuXG4gICAgdGhpcy5fcmVzZXRlZCA9IHRydWU7IC8vIFNhdmUgdHJhbnNmb3JtcyBhcHBsaWVkIHRvIHRoaXMgcnVubmVyXG5cbiAgICB0aGlzLnRyYW5zZm9ybXMgPSBuZXcgTWF0cml4KCk7XG4gICAgdGhpcy50cmFuc2Zvcm1JZCA9IDE7IC8vIExvb3BpbmcgdmFyaWFibGVzXG5cbiAgICB0aGlzLl9oYXZlUmV2ZXJzZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9yZXZlcnNlID0gZmFsc2U7XG4gICAgdGhpcy5fbG9vcHNEb25lID0gMDtcbiAgICB0aGlzLl9zd2luZyA9IGZhbHNlO1xuICAgIHRoaXMuX3dhaXQgPSAwO1xuICAgIHRoaXMuX3RpbWVzID0gMTtcbiAgICB0aGlzLl9mcmFtZUlkID0gbnVsbDsgLy8gU3RvcmVzIGhvdyBsb25nIGEgcnVubmVyIGlzIHN0b3JlZCBhZnRlciBiZWVpbmcgZG9uZVxuXG4gICAgdGhpcy5fcGVyc2lzdCA9IHRoaXMuX2lzRGVjbGFyYXRpdmUgPyB0cnVlIDogbnVsbDtcbiAgfVxuXG4gIHN0YXRpYyBzYW5pdGlzZShkdXJhdGlvbiwgZGVsYXksIHdoZW4pIHtcbiAgICAvLyBJbml0aWFsaXNlIHRoZSBkZWZhdWx0IHBhcmFtZXRlcnNcbiAgICBsZXQgdGltZXMgPSAxO1xuICAgIGxldCBzd2luZyA9IGZhbHNlO1xuICAgIGxldCB3YWl0ID0gMDtcbiAgICBkdXJhdGlvbiA9IGR1cmF0aW9uIHx8IHRpbWVsaW5lLmR1cmF0aW9uO1xuICAgIGRlbGF5ID0gZGVsYXkgfHwgdGltZWxpbmUuZGVsYXk7XG4gICAgd2hlbiA9IHdoZW4gfHwgJ2xhc3QnOyAvLyBJZiB3ZSBoYXZlIGFuIG9iamVjdCwgdW5wYWNrIHRoZSB2YWx1ZXNcblxuICAgIGlmICh0eXBlb2YgZHVyYXRpb24gPT09ICdvYmplY3QnICYmICEoZHVyYXRpb24gaW5zdGFuY2VvZiBTdGVwcGVyKSkge1xuICAgICAgZGVsYXkgPSBkdXJhdGlvbi5kZWxheSB8fCBkZWxheTtcbiAgICAgIHdoZW4gPSBkdXJhdGlvbi53aGVuIHx8IHdoZW47XG4gICAgICBzd2luZyA9IGR1cmF0aW9uLnN3aW5nIHx8IHN3aW5nO1xuICAgICAgdGltZXMgPSBkdXJhdGlvbi50aW1lcyB8fCB0aW1lcztcbiAgICAgIHdhaXQgPSBkdXJhdGlvbi53YWl0IHx8IHdhaXQ7XG4gICAgICBkdXJhdGlvbiA9IGR1cmF0aW9uLmR1cmF0aW9uIHx8IHRpbWVsaW5lLmR1cmF0aW9uO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICBkZWxheTogZGVsYXksXG4gICAgICBzd2luZzogc3dpbmcsXG4gICAgICB0aW1lczogdGltZXMsXG4gICAgICB3YWl0OiB3YWl0LFxuICAgICAgd2hlbjogd2hlblxuICAgIH07XG4gIH1cblxuICBhY3RpdmUoZW5hYmxlZCkge1xuICAgIGlmIChlbmFibGVkID09IG51bGwpIHJldHVybiB0aGlzLmVuYWJsZWQ7XG4gICAgdGhpcy5lbmFibGVkID0gZW5hYmxlZDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKlxyXG4gIFByaXZhdGUgTWV0aG9kc1xyXG4gID09PT09PT09PT09PT09PVxyXG4gIE1ldGhvZHMgdGhhdCBzaG91bGRuJ3QgYmUgdXNlZCBleHRlcm5hbGx5XHJcbiAgKi9cblxuXG4gIGFkZFRyYW5zZm9ybSh0cmFuc2Zvcm0sIGluZGV4KSB7XG4gICAgdGhpcy50cmFuc2Zvcm1zLmxtdWx0aXBseU8odHJhbnNmb3JtKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFmdGVyKGZuKSB7XG4gICAgcmV0dXJuIHRoaXMub24oJ2ZpbmlzaGVkJywgZm4pO1xuICB9XG5cbiAgYW5pbWF0ZShkdXJhdGlvbiwgZGVsYXksIHdoZW4pIHtcbiAgICBjb25zdCBvID0gUnVubmVyLnNhbml0aXNlKGR1cmF0aW9uLCBkZWxheSwgd2hlbik7XG4gICAgY29uc3QgcnVubmVyID0gbmV3IFJ1bm5lcihvLmR1cmF0aW9uKTtcbiAgICBpZiAodGhpcy5fdGltZWxpbmUpIHJ1bm5lci50aW1lbGluZSh0aGlzLl90aW1lbGluZSk7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnQpIHJ1bm5lci5lbGVtZW50KHRoaXMuX2VsZW1lbnQpO1xuICAgIHJldHVybiBydW5uZXIubG9vcChvKS5zY2hlZHVsZShvLmRlbGF5LCBvLndoZW4pO1xuICB9XG5cbiAgY2xlYXJUcmFuc2Zvcm0oKSB7XG4gICAgdGhpcy50cmFuc2Zvcm1zID0gbmV3IE1hdHJpeCgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9IC8vIFRPRE86IEtlZXAgdHJhY2sgb2YgYWxsIHRyYW5zZm9ybWF0aW9ucyBzbyB0aGF0IGRlbGV0aW9uIGlzIGZhc3RlclxuXG5cbiAgY2xlYXJUcmFuc2Zvcm1zRnJvbVF1ZXVlKCkge1xuICAgIGlmICghdGhpcy5kb25lIHx8ICF0aGlzLl90aW1lbGluZSB8fCAhdGhpcy5fdGltZWxpbmUuX3J1bm5lcklkcy5pbmNsdWRlcyh0aGlzLmlkKSkge1xuICAgICAgdGhpcy5fcXVldWUgPSB0aGlzLl9xdWV1ZS5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgIHJldHVybiAhaXRlbS5pc1RyYW5zZm9ybTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGRlbGF5KGRlbGF5KSB7XG4gICAgcmV0dXJuIHRoaXMuYW5pbWF0ZSgwLCBkZWxheSk7XG4gIH1cblxuICBkdXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fdGltZXMgKiAodGhpcy5fd2FpdCArIHRoaXMuX2R1cmF0aW9uKSAtIHRoaXMuX3dhaXQ7XG4gIH1cblxuICBkdXJpbmcoZm4pIHtcbiAgICByZXR1cm4gdGhpcy5xdWV1ZShudWxsLCBmbik7XG4gIH1cblxuICBlYXNlKGZuKSB7XG4gICAgdGhpcy5fc3RlcHBlciA9IG5ldyBFYXNlKGZuKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKlxyXG4gIFJ1bm5lciBEZWZpbml0aW9uc1xyXG4gID09PT09PT09PT09PT09PT09PVxyXG4gIFRoZXNlIG1ldGhvZHMgaGVscCB1cyBkZWZpbmUgdGhlIHJ1bnRpbWUgYmVoYXZpb3VyIG9mIHRoZSBSdW5uZXIgb3IgdGhleVxyXG4gIGhlbHAgdXMgbWFrZSBuZXcgcnVubmVycyBmcm9tIHRoZSBjdXJyZW50IHJ1bm5lclxyXG4gICovXG5cblxuICBlbGVtZW50KGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudCA9PSBudWxsKSByZXR1cm4gdGhpcy5fZWxlbWVudDtcbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcblxuICAgIGVsZW1lbnQuX3ByZXBhcmVSdW5uZXIoKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZmluaXNoKCkge1xuICAgIHJldHVybiB0aGlzLnN0ZXAoSW5maW5pdHkpO1xuICB9XG5cbiAgbG9vcCh0aW1lcywgc3dpbmcsIHdhaXQpIHtcbiAgICAvLyBEZWFsIHdpdGggdGhlIHVzZXIgcGFzc2luZyBpbiBhbiBvYmplY3RcbiAgICBpZiAodHlwZW9mIHRpbWVzID09PSAnb2JqZWN0Jykge1xuICAgICAgc3dpbmcgPSB0aW1lcy5zd2luZztcbiAgICAgIHdhaXQgPSB0aW1lcy53YWl0O1xuICAgICAgdGltZXMgPSB0aW1lcy50aW1lcztcbiAgICB9IC8vIFNhbml0aXNlIHRoZSB2YWx1ZXMgYW5kIHN0b3JlIHRoZW1cblxuXG4gICAgdGhpcy5fdGltZXMgPSB0aW1lcyB8fCBJbmZpbml0eTtcbiAgICB0aGlzLl9zd2luZyA9IHN3aW5nIHx8IGZhbHNlO1xuICAgIHRoaXMuX3dhaXQgPSB3YWl0IHx8IDA7IC8vIEFsbG93IHRydWUgdG8gYmUgcGFzc2VkXG5cbiAgICBpZiAodGhpcy5fdGltZXMgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuX3RpbWVzID0gSW5maW5pdHk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBsb29wcyhwKSB7XG4gICAgY29uc3QgbG9vcER1cmF0aW9uID0gdGhpcy5fZHVyYXRpb24gKyB0aGlzLl93YWl0O1xuXG4gICAgaWYgKHAgPT0gbnVsbCkge1xuICAgICAgY29uc3QgbG9vcHNEb25lID0gTWF0aC5mbG9vcih0aGlzLl90aW1lIC8gbG9vcER1cmF0aW9uKTtcbiAgICAgIGNvbnN0IHJlbGF0aXZlVGltZSA9IHRoaXMuX3RpbWUgLSBsb29wc0RvbmUgKiBsb29wRHVyYXRpb247XG4gICAgICBjb25zdCBwb3NpdGlvbiA9IHJlbGF0aXZlVGltZSAvIHRoaXMuX2R1cmF0aW9uO1xuICAgICAgcmV0dXJuIE1hdGgubWluKGxvb3BzRG9uZSArIHBvc2l0aW9uLCB0aGlzLl90aW1lcyk7XG4gICAgfVxuXG4gICAgY29uc3Qgd2hvbGUgPSBNYXRoLmZsb29yKHApO1xuICAgIGNvbnN0IHBhcnRpYWwgPSBwICUgMTtcbiAgICBjb25zdCB0aW1lID0gbG9vcER1cmF0aW9uICogd2hvbGUgKyB0aGlzLl9kdXJhdGlvbiAqIHBhcnRpYWw7XG4gICAgcmV0dXJuIHRoaXMudGltZSh0aW1lKTtcbiAgfVxuXG4gIHBlcnNpc3QoZHRPckZvcmV2ZXIpIHtcbiAgICBpZiAoZHRPckZvcmV2ZXIgPT0gbnVsbCkgcmV0dXJuIHRoaXMuX3BlcnNpc3Q7XG4gICAgdGhpcy5fcGVyc2lzdCA9IGR0T3JGb3JldmVyO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcG9zaXRpb24ocCkge1xuICAgIC8vIEdldCBhbGwgb2YgdGhlIHZhcmlhYmxlcyB3ZSBuZWVkXG4gICAgY29uc3QgeCA9IHRoaXMuX3RpbWU7XG4gICAgY29uc3QgZCA9IHRoaXMuX2R1cmF0aW9uO1xuICAgIGNvbnN0IHcgPSB0aGlzLl93YWl0O1xuICAgIGNvbnN0IHQgPSB0aGlzLl90aW1lcztcbiAgICBjb25zdCBzID0gdGhpcy5fc3dpbmc7XG4gICAgY29uc3QgciA9IHRoaXMuX3JldmVyc2U7XG4gICAgbGV0IHBvc2l0aW9uO1xuXG4gICAgaWYgKHAgPT0gbnVsbCkge1xuICAgICAgLypcclxuICAgICAgVGhpcyBmdW5jdGlvbiBjb252ZXJ0cyBhIHRpbWUgdG8gYSBwb3NpdGlvbiBpbiB0aGUgcmFuZ2UgWzAsIDFdXHJcbiAgICAgIFRoZSBmdWxsIGV4cGxhbmF0aW9uIGNhbiBiZSBmb3VuZCBpbiB0aGlzIGRlc21vcyBkZW1vbnN0cmF0aW9uXHJcbiAgICAgICAgaHR0cHM6Ly93d3cuZGVzbW9zLmNvbS9jYWxjdWxhdG9yL3U0ZmJhdmdjaGVcclxuICAgICAgVGhlIGxvZ2ljIGlzIHNsaWdodGx5IHNpbXBsaWZpZWQgaGVyZSBiZWNhdXNlIHdlIGNhbiB1c2UgYm9vbGVhbnNcclxuICAgICAgKi9cbiAgICAgIC8vIEZpZ3VyZSBvdXQgdGhlIHZhbHVlIHdpdGhvdXQgdGhpbmtpbmcgYWJvdXQgdGhlIHN0YXJ0IG9yIGVuZCB0aW1lXG4gICAgICBjb25zdCBmID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgY29uc3Qgc3dpbmdpbmcgPSBzICogTWF0aC5mbG9vcih4ICUgKDIgKiAodyArIGQpKSAvICh3ICsgZCkpO1xuICAgICAgICBjb25zdCBiYWNrd2FyZHMgPSBzd2luZ2luZyAmJiAhciB8fCAhc3dpbmdpbmcgJiYgcjtcbiAgICAgICAgY29uc3QgdW5jbGlwZWQgPSBNYXRoLnBvdygtMSwgYmFja3dhcmRzKSAqICh4ICUgKHcgKyBkKSkgLyBkICsgYmFja3dhcmRzO1xuICAgICAgICBjb25zdCBjbGlwcGVkID0gTWF0aC5tYXgoTWF0aC5taW4odW5jbGlwZWQsIDEpLCAwKTtcbiAgICAgICAgcmV0dXJuIGNsaXBwZWQ7XG4gICAgICB9OyAvLyBGaWd1cmUgb3V0IHRoZSB2YWx1ZSBieSBpbmNvcnBvcmF0aW5nIHRoZSBzdGFydCB0aW1lXG5cblxuICAgICAgY29uc3QgZW5kVGltZSA9IHQgKiAodyArIGQpIC0gdztcbiAgICAgIHBvc2l0aW9uID0geCA8PSAwID8gTWF0aC5yb3VuZChmKDFlLTUpKSA6IHggPCBlbmRUaW1lID8gZih4KSA6IE1hdGgucm91bmQoZihlbmRUaW1lIC0gMWUtNSkpO1xuICAgICAgcmV0dXJuIHBvc2l0aW9uO1xuICAgIH0gLy8gV29yayBvdXQgdGhlIGxvb3BzIGRvbmUgYW5kIGFkZCB0aGUgcG9zaXRpb24gdG8gdGhlIGxvb3BzIGRvbmVcblxuXG4gICAgY29uc3QgbG9vcHNEb25lID0gTWF0aC5mbG9vcih0aGlzLmxvb3BzKCkpO1xuICAgIGNvbnN0IHN3aW5nRm9yd2FyZCA9IHMgJiYgbG9vcHNEb25lICUgMiA9PT0gMDtcbiAgICBjb25zdCBmb3J3YXJkcyA9IHN3aW5nRm9yd2FyZCAmJiAhciB8fCByICYmIHN3aW5nRm9yd2FyZDtcbiAgICBwb3NpdGlvbiA9IGxvb3BzRG9uZSArIChmb3J3YXJkcyA/IHAgOiAxIC0gcCk7XG4gICAgcmV0dXJuIHRoaXMubG9vcHMocG9zaXRpb24pO1xuICB9XG5cbiAgcHJvZ3Jlc3MocCkge1xuICAgIGlmIChwID09IG51bGwpIHtcbiAgICAgIHJldHVybiBNYXRoLm1pbigxLCB0aGlzLl90aW1lIC8gdGhpcy5kdXJhdGlvbigpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy50aW1lKHAgKiB0aGlzLmR1cmF0aW9uKCkpO1xuICB9XG4gIC8qXHJcbiAgQmFzaWMgRnVuY3Rpb25hbGl0eVxyXG4gID09PT09PT09PT09PT09PT09PT1cclxuICBUaGVzZSBtZXRob2RzIGFsbG93IHVzIHRvIGF0dGFjaCBiYXNpYyBmdW5jdGlvbnMgdG8gdGhlIHJ1bm5lciBkaXJlY3RseVxyXG4gICovXG5cblxuICBxdWV1ZShpbml0Rm4sIHJ1bkZuLCByZXRhcmdldEZuLCBpc1RyYW5zZm9ybSkge1xuICAgIHRoaXMuX3F1ZXVlLnB1c2goe1xuICAgICAgaW5pdGlhbGlzZXI6IGluaXRGbiB8fCBub29wLFxuICAgICAgcnVubmVyOiBydW5GbiB8fCBub29wLFxuICAgICAgcmV0YXJnZXQ6IHJldGFyZ2V0Rm4sXG4gICAgICBpc1RyYW5zZm9ybTogaXNUcmFuc2Zvcm0sXG4gICAgICBpbml0aWFsaXNlZDogZmFsc2UsXG4gICAgICBmaW5pc2hlZDogZmFsc2VcbiAgICB9KTtcblxuICAgIGNvbnN0IHRpbWVsaW5lID0gdGhpcy50aW1lbGluZSgpO1xuICAgIHRpbWVsaW5lICYmIHRoaXMudGltZWxpbmUoKS5fY29udGludWUoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIGlmICh0aGlzLl9yZXNldGVkKSByZXR1cm4gdGhpcztcbiAgICB0aGlzLnRpbWUoMCk7XG4gICAgdGhpcy5fcmVzZXRlZCA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZXZlcnNlKHJldmVyc2UpIHtcbiAgICB0aGlzLl9yZXZlcnNlID0gcmV2ZXJzZSA9PSBudWxsID8gIXRoaXMuX3JldmVyc2UgOiByZXZlcnNlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2NoZWR1bGUodGltZWxpbmUsIGRlbGF5LCB3aGVuKSB7XG4gICAgLy8gVGhlIHVzZXIgZG9lc24ndCBuZWVkIHRvIHBhc3MgYSB0aW1lbGluZSBpZiB3ZSBhbHJlYWR5IGhhdmUgb25lXG4gICAgaWYgKCEodGltZWxpbmUgaW5zdGFuY2VvZiBUaW1lbGluZSkpIHtcbiAgICAgIHdoZW4gPSBkZWxheTtcbiAgICAgIGRlbGF5ID0gdGltZWxpbmU7XG4gICAgICB0aW1lbGluZSA9IHRoaXMudGltZWxpbmUoKTtcbiAgICB9IC8vIElmIHRoZXJlIGlzIG5vIHRpbWVsaW5lLCB5ZWxsIGF0IHRoZSB1c2VyLi4uXG5cblxuICAgIGlmICghdGltZWxpbmUpIHtcbiAgICAgIHRocm93IEVycm9yKCdSdW5uZXIgY2Fubm90IGJlIHNjaGVkdWxlZCB3aXRob3V0IHRpbWVsaW5lJyk7XG4gICAgfSAvLyBTY2hlZHVsZSB0aGUgcnVubmVyIG9uIHRoZSB0aW1lbGluZSBwcm92aWRlZFxuXG5cbiAgICB0aW1lbGluZS5zY2hlZHVsZSh0aGlzLCBkZWxheSwgd2hlbik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzdGVwKGR0KSB7XG4gICAgLy8gSWYgd2UgYXJlIGluYWN0aXZlLCB0aGlzIHN0ZXBwZXIganVzdCBnZXRzIHNraXBwZWRcbiAgICBpZiAoIXRoaXMuZW5hYmxlZCkgcmV0dXJuIHRoaXM7IC8vIFVwZGF0ZSB0aGUgdGltZSBhbmQgZ2V0IHRoZSBuZXcgcG9zaXRpb25cblxuICAgIGR0ID0gZHQgPT0gbnVsbCA/IDE2IDogZHQ7XG4gICAgdGhpcy5fdGltZSArPSBkdDtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMucG9zaXRpb24oKTsgLy8gRmlndXJlIG91dCBpZiB3ZSBuZWVkIHRvIHJ1biB0aGUgc3RlcHBlciBpbiB0aGlzIGZyYW1lXG5cbiAgICBjb25zdCBydW5uaW5nID0gdGhpcy5fbGFzdFBvc2l0aW9uICE9PSBwb3NpdGlvbiAmJiB0aGlzLl90aW1lID49IDA7XG4gICAgdGhpcy5fbGFzdFBvc2l0aW9uID0gcG9zaXRpb247IC8vIEZpZ3VyZSBvdXQgaWYgd2UganVzdCBzdGFydGVkXG5cbiAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMuZHVyYXRpb24oKTtcbiAgICBjb25zdCBqdXN0U3RhcnRlZCA9IHRoaXMuX2xhc3RUaW1lIDw9IDAgJiYgdGhpcy5fdGltZSA+IDA7XG4gICAgY29uc3QganVzdEZpbmlzaGVkID0gdGhpcy5fbGFzdFRpbWUgPCBkdXJhdGlvbiAmJiB0aGlzLl90aW1lID49IGR1cmF0aW9uO1xuICAgIHRoaXMuX2xhc3RUaW1lID0gdGhpcy5fdGltZTtcblxuICAgIGlmIChqdXN0U3RhcnRlZCkge1xuICAgICAgdGhpcy5maXJlKCdzdGFydCcsIHRoaXMpO1xuICAgIH0gLy8gV29yayBvdXQgaWYgdGhlIHJ1bm5lciBpcyBmaW5pc2hlZCBzZXQgdGhlIGRvbmUgZmxhZyBoZXJlIHNvIGFuaW1hdGlvbnNcbiAgICAvLyBrbm93LCB0aGF0IHRoZXkgYXJlIHJ1bm5pbmcgaW4gdGhlIGxhc3Qgc3RlcCAodGhpcyBpcyBnb29kIGZvclxuICAgIC8vIHRyYW5zZm9ybWF0aW9ucyB3aGljaCBjYW4gYmUgbWVyZ2VkKVxuXG5cbiAgICBjb25zdCBkZWNsYXJhdGl2ZSA9IHRoaXMuX2lzRGVjbGFyYXRpdmU7XG4gICAgdGhpcy5kb25lID0gIWRlY2xhcmF0aXZlICYmICFqdXN0RmluaXNoZWQgJiYgdGhpcy5fdGltZSA+PSBkdXJhdGlvbjsgLy8gUnVubmVyIGlzIHJ1bm5pbmcuIFNvIGl0cyBub3QgaW4gcmVzZXRlZCBzdGF0ZSBhbnltb3JlXG5cbiAgICB0aGlzLl9yZXNldGVkID0gZmFsc2U7XG4gICAgbGV0IGNvbnZlcmdlZCA9IGZhbHNlOyAvLyBDYWxsIGluaXRpYWxpc2UgYW5kIHRoZSBydW4gZnVuY3Rpb25cblxuICAgIGlmIChydW5uaW5nIHx8IGRlY2xhcmF0aXZlKSB7XG4gICAgICB0aGlzLl9pbml0aWFsaXNlKHJ1bm5pbmcpOyAvLyBjbGVhciB0aGUgdHJhbnNmb3JtcyBvbiB0aGlzIHJ1bm5lciBzbyB0aGV5IGRvbnQgZ2V0IGFkZGVkIGFnYWluIGFuZCBhZ2FpblxuXG5cbiAgICAgIHRoaXMudHJhbnNmb3JtcyA9IG5ldyBNYXRyaXgoKTtcbiAgICAgIGNvbnZlcmdlZCA9IHRoaXMuX3J1bihkZWNsYXJhdGl2ZSA/IGR0IDogcG9zaXRpb24pO1xuICAgICAgdGhpcy5maXJlKCdzdGVwJywgdGhpcyk7XG4gICAgfSAvLyBjb3JyZWN0IHRoZSBkb25lIGZsYWcgaGVyZVxuICAgIC8vIGRlY2xhcml0aXZlIGFuaW1hdGlvbnMgaXRzZWxmIGtub3cgd2hlbiB0aGV5IGNvbnZlcmdlZFxuXG5cbiAgICB0aGlzLmRvbmUgPSB0aGlzLmRvbmUgfHwgY29udmVyZ2VkICYmIGRlY2xhcmF0aXZlO1xuXG4gICAgaWYgKGp1c3RGaW5pc2hlZCkge1xuICAgICAgdGhpcy5maXJlKCdmaW5pc2hlZCcsIHRoaXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8qXHJcbiAgUnVubmVyIGFuaW1hdGlvbiBtZXRob2RzXHJcbiAgPT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgQ29udHJvbCBob3cgdGhlIGFuaW1hdGlvbiBwbGF5c1xyXG4gICovXG5cblxuICB0aW1lKHRpbWUpIHtcbiAgICBpZiAodGltZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdGltZTtcbiAgICB9XG5cbiAgICBjb25zdCBkdCA9IHRpbWUgLSB0aGlzLl90aW1lO1xuICAgIHRoaXMuc3RlcChkdCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB0aW1lbGluZSh0aW1lbGluZSkge1xuICAgIC8vIGNoZWNrIGV4cGxpY2l0bHkgZm9yIHVuZGVmaW5lZCBzbyB3ZSBjYW4gc2V0IHRoZSB0aW1lbGluZSB0byBudWxsXG4gICAgaWYgKHR5cGVvZiB0aW1lbGluZSA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiB0aGlzLl90aW1lbGluZTtcbiAgICB0aGlzLl90aW1lbGluZSA9IHRpbWVsaW5lO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5zY2hlZHVsZSgpIHtcbiAgICBjb25zdCB0aW1lbGluZSA9IHRoaXMudGltZWxpbmUoKTtcbiAgICB0aW1lbGluZSAmJiB0aW1lbGluZS51bnNjaGVkdWxlKHRoaXMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9IC8vIFJ1biBlYWNoIGluaXRpYWxpc2UgZnVuY3Rpb24gaW4gdGhlIHJ1bm5lciBpZiByZXF1aXJlZFxuXG5cbiAgX2luaXRpYWxpc2UocnVubmluZykge1xuICAgIC8vIElmIHdlIGFyZW4ndCBydW5uaW5nLCB3ZSBzaG91bGRuJ3QgaW5pdGlhbGlzZSB3aGVuIG5vdCBkZWNsYXJhdGl2ZVxuICAgIGlmICghcnVubmluZyAmJiAhdGhpcy5faXNEZWNsYXJhdGl2ZSkgcmV0dXJuOyAvLyBMb29wIHRocm91Z2ggYWxsIG9mIHRoZSBpbml0aWFsaXNlcnNcblxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aGlzLl9xdWV1ZS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgLy8gR2V0IHRoZSBjdXJyZW50IGluaXRpYWxpc2VyXG4gICAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5fcXVldWVbaV07IC8vIERldGVybWluZSB3aGV0aGVyIHdlIG5lZWQgdG8gaW5pdGlhbGlzZVxuXG4gICAgICBjb25zdCBuZWVkc0l0ID0gdGhpcy5faXNEZWNsYXJhdGl2ZSB8fCAhY3VycmVudC5pbml0aWFsaXNlZCAmJiBydW5uaW5nO1xuICAgICAgcnVubmluZyA9ICFjdXJyZW50LmZpbmlzaGVkOyAvLyBDYWxsIHRoZSBpbml0aWFsaXNlciBpZiB3ZSBuZWVkIHRvXG5cbiAgICAgIGlmIChuZWVkc0l0ICYmIHJ1bm5pbmcpIHtcbiAgICAgICAgY3VycmVudC5pbml0aWFsaXNlci5jYWxsKHRoaXMpO1xuICAgICAgICBjdXJyZW50LmluaXRpYWxpc2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gU2F2ZSBhIG1vcnBoZXIgdG8gdGhlIG1vcnBoZXIgbGlzdCBzbyB0aGF0IHdlIGNhbiByZXRhcmdldCBpdCBsYXRlclxuXG5cbiAgX3JlbWVtYmVyTW9ycGhlcihtZXRob2QsIG1vcnBoZXIpIHtcbiAgICB0aGlzLl9oaXN0b3J5W21ldGhvZF0gPSB7XG4gICAgICBtb3JwaGVyOiBtb3JwaGVyLFxuICAgICAgY2FsbGVyOiB0aGlzLl9xdWV1ZVt0aGlzLl9xdWV1ZS5sZW5ndGggLSAxXVxuICAgIH07IC8vIFdlIGhhdmUgdG8gcmVzdW1lIHRoZSB0aW1lbGluZSBpbiBjYXNlIGEgY29udHJvbGxlclxuICAgIC8vIGlzIGFscmVhZHkgZG9uZSB3aXRob3V0IGJlaW5nIGV2ZXIgcnVuXG4gICAgLy8gVGhpcyBjYW4gaGFwcGVuIHdoZW4gZS5nLiB0aGlzIGlzIGRvbmU6XG4gICAgLy8gICAgYW5pbSA9IGVsLmFuaW1hdGUobmV3IFNWRy5TcHJpbmcpXG4gICAgLy8gYW5kIGxhdGVyXG4gICAgLy8gICAgYW5pbS5tb3ZlKC4uLilcblxuICAgIGlmICh0aGlzLl9pc0RlY2xhcmF0aXZlKSB7XG4gICAgICBjb25zdCB0aW1lbGluZSA9IHRoaXMudGltZWxpbmUoKTtcbiAgICAgIHRpbWVsaW5lICYmIHRpbWVsaW5lLnBsYXkoKTtcbiAgICB9XG4gIH0gLy8gVHJ5IHRvIHNldCB0aGUgdGFyZ2V0IGZvciBhIG1vcnBoZXIgaWYgdGhlIG1vcnBoZXIgZXhpc3RzLCBvdGhlcndpc2VcbiAgLy8gUnVuIGVhY2ggcnVuIGZ1bmN0aW9uIGZvciB0aGUgcG9zaXRpb24gb3IgZHQgZ2l2ZW5cblxuXG4gIF9ydW4ocG9zaXRpb25PckR0KSB7XG4gICAgLy8gUnVuIGFsbCBvZiB0aGUgX3F1ZXVlIGRpcmVjdGx5XG4gICAgbGV0IGFsbGZpbmlzaGVkID0gdHJ1ZTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aGlzLl9xdWV1ZS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgLy8gR2V0IHRoZSBjdXJyZW50IGZ1bmN0aW9uIHRvIHJ1blxuICAgICAgY29uc3QgY3VycmVudCA9IHRoaXMuX3F1ZXVlW2ldOyAvLyBSdW4gdGhlIGZ1bmN0aW9uIGlmIGl0cyBub3QgZmluaXNoZWQsIHdlIGtlZXAgdHJhY2sgb2YgdGhlIGZpbmlzaGVkXG4gICAgICAvLyBmbGFnIGZvciB0aGUgc2FrZSBvZiBkZWNsYXJhdGl2ZSBfcXVldWVcblxuICAgICAgY29uc3QgY29udmVyZ2VkID0gY3VycmVudC5ydW5uZXIuY2FsbCh0aGlzLCBwb3NpdGlvbk9yRHQpO1xuICAgICAgY3VycmVudC5maW5pc2hlZCA9IGN1cnJlbnQuZmluaXNoZWQgfHwgY29udmVyZ2VkID09PSB0cnVlO1xuICAgICAgYWxsZmluaXNoZWQgPSBhbGxmaW5pc2hlZCAmJiBjdXJyZW50LmZpbmlzaGVkO1xuICAgIH0gLy8gV2UgcmVwb3J0IHdoZW4gYWxsIG9mIHRoZSBjb25zdHJ1Y3RvcnMgYXJlIGZpbmlzaGVkXG5cblxuICAgIHJldHVybiBhbGxmaW5pc2hlZDtcbiAgfSAvLyBkbyBub3RoaW5nIGFuZCByZXR1cm4gZmFsc2VcblxuXG4gIF90cnlSZXRhcmdldChtZXRob2QsIHRhcmdldCwgZXh0cmEpIHtcbiAgICBpZiAodGhpcy5faGlzdG9yeVttZXRob2RdKSB7XG4gICAgICAvLyBpZiB0aGUgbGFzdCBtZXRob2Qgd2FzbnQgZXZlbiBpbml0aWFsaXNlZCwgdGhyb3cgaXQgYXdheVxuICAgICAgaWYgKCF0aGlzLl9oaXN0b3J5W21ldGhvZF0uY2FsbGVyLmluaXRpYWxpc2VkKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fcXVldWUuaW5kZXhPZih0aGlzLl9oaXN0b3J5W21ldGhvZF0uY2FsbGVyKTtcblxuICAgICAgICB0aGlzLl9xdWV1ZS5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gLy8gZm9yIHRoZSBjYXNlIG9mIHRyYW5zZm9ybWF0aW9ucywgd2UgdXNlIHRoZSBzcGVjaWFsIHJldGFyZ2V0IGZ1bmN0aW9uXG4gICAgICAvLyB3aGljaCBoYXMgYWNjZXNzIHRvIHRoZSBvdXRlciBzY29wZVxuXG5cbiAgICAgIGlmICh0aGlzLl9oaXN0b3J5W21ldGhvZF0uY2FsbGVyLnJldGFyZ2V0KSB7XG4gICAgICAgIHRoaXMuX2hpc3RvcnlbbWV0aG9kXS5jYWxsZXIucmV0YXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIGV4dHJhKTsgLy8gZm9yIGV2ZXJ5dGhpbmcgZWxzZSBhIHNpbXBsZSBtb3JwaGVyIGNoYW5nZSBpcyBzdWZmaWNpZW50XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2hpc3RvcnlbbWV0aG9kXS5tb3JwaGVyLnRvKHRhcmdldCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2hpc3RvcnlbbWV0aG9kXS5jYWxsZXIuZmluaXNoZWQgPSBmYWxzZTtcbiAgICAgIGNvbnN0IHRpbWVsaW5lID0gdGhpcy50aW1lbGluZSgpO1xuICAgICAgdGltZWxpbmUgJiYgdGltZWxpbmUucGxheSgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbn1cblJ1bm5lci5pZCA9IDA7XG5jbGFzcyBGYWtlUnVubmVyIHtcbiAgY29uc3RydWN0b3IodHJhbnNmb3JtcyA9IG5ldyBNYXRyaXgoKSwgaWQgPSAtMSwgZG9uZSA9IHRydWUpIHtcbiAgICB0aGlzLnRyYW5zZm9ybXMgPSB0cmFuc2Zvcm1zO1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLmRvbmUgPSBkb25lO1xuICB9XG5cbiAgY2xlYXJUcmFuc2Zvcm1zRnJvbVF1ZXVlKCkge31cblxufVxuZXh0ZW5kKFtSdW5uZXIsIEZha2VSdW5uZXJdLCB7XG4gIG1lcmdlV2l0aChydW5uZXIpIHtcbiAgICByZXR1cm4gbmV3IEZha2VSdW5uZXIocnVubmVyLnRyYW5zZm9ybXMubG11bHRpcGx5KHRoaXMudHJhbnNmb3JtcyksIHJ1bm5lci5pZCk7XG4gIH1cblxufSk7IC8vIEZha2VSdW5uZXIuZW1wdHlSdW5uZXIgPSBuZXcgRmFrZVJ1bm5lcigpXG5cbmNvbnN0IGxtdWx0aXBseSA9IChsYXN0LCBjdXJyKSA9PiBsYXN0LmxtdWx0aXBseU8oY3Vycik7XG5cbmNvbnN0IGdldFJ1bm5lclRyYW5zZm9ybSA9IHJ1bm5lciA9PiBydW5uZXIudHJhbnNmb3JtcztcblxuZnVuY3Rpb24gbWVyZ2VUcmFuc2Zvcm1zKCkge1xuICAvLyBGaW5kIHRoZSBtYXRyaXggdG8gYXBwbHkgdG8gdGhlIGVsZW1lbnQgYW5kIGFwcGx5IGl0XG4gIGNvbnN0IHJ1bm5lcnMgPSB0aGlzLl90cmFuc2Zvcm1hdGlvblJ1bm5lcnMucnVubmVycztcbiAgY29uc3QgbmV0VHJhbnNmb3JtID0gcnVubmVycy5tYXAoZ2V0UnVubmVyVHJhbnNmb3JtKS5yZWR1Y2UobG11bHRpcGx5LCBuZXcgTWF0cml4KCkpO1xuICB0aGlzLnRyYW5zZm9ybShuZXRUcmFuc2Zvcm0pO1xuXG4gIHRoaXMuX3RyYW5zZm9ybWF0aW9uUnVubmVycy5tZXJnZSgpO1xuXG4gIGlmICh0aGlzLl90cmFuc2Zvcm1hdGlvblJ1bm5lcnMubGVuZ3RoKCkgPT09IDEpIHtcbiAgICB0aGlzLl9mcmFtZUlkID0gbnVsbDtcbiAgfVxufVxuXG5jbGFzcyBSdW5uZXJBcnJheSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucnVubmVycyA9IFtdO1xuICAgIHRoaXMuaWRzID0gW107XG4gIH1cblxuICBhZGQocnVubmVyKSB7XG4gICAgaWYgKHRoaXMucnVubmVycy5pbmNsdWRlcyhydW5uZXIpKSByZXR1cm47XG4gICAgY29uc3QgaWQgPSBydW5uZXIuaWQgKyAxO1xuICAgIHRoaXMucnVubmVycy5wdXNoKHJ1bm5lcik7XG4gICAgdGhpcy5pZHMucHVzaChpZCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjbGVhckJlZm9yZShpZCkge1xuICAgIGNvbnN0IGRlbGV0ZUNudCA9IHRoaXMuaWRzLmluZGV4T2YoaWQgKyAxKSB8fCAxO1xuICAgIHRoaXMuaWRzLnNwbGljZSgwLCBkZWxldGVDbnQsIDApO1xuICAgIHRoaXMucnVubmVycy5zcGxpY2UoMCwgZGVsZXRlQ250LCBuZXcgRmFrZVJ1bm5lcigpKS5mb3JFYWNoKHIgPT4gci5jbGVhclRyYW5zZm9ybXNGcm9tUXVldWUoKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBlZGl0KGlkLCBuZXdSdW5uZXIpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuaWRzLmluZGV4T2YoaWQgKyAxKTtcbiAgICB0aGlzLmlkcy5zcGxpY2UoaW5kZXgsIDEsIGlkICsgMSk7XG4gICAgdGhpcy5ydW5uZXJzLnNwbGljZShpbmRleCwgMSwgbmV3UnVubmVyKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldEJ5SUQoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5ydW5uZXJzW3RoaXMuaWRzLmluZGV4T2YoaWQgKyAxKV07XG4gIH1cblxuICBsZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaWRzLmxlbmd0aDtcbiAgfVxuXG4gIG1lcmdlKCkge1xuICAgIGxldCBsYXN0UnVubmVyID0gbnVsbDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ydW5uZXJzLmxlbmd0aDsgKytpKSB7XG4gICAgICBjb25zdCBydW5uZXIgPSB0aGlzLnJ1bm5lcnNbaV07XG4gICAgICBjb25zdCBjb25kaXRpb24gPSBsYXN0UnVubmVyICYmIHJ1bm5lci5kb25lICYmIGxhc3RSdW5uZXIuZG9uZSAvLyBkb24ndCBtZXJnZSBydW5uZXIgd2hlbiBwZXJzaXN0ZWQgb24gdGltZWxpbmVcbiAgICAgICYmICghcnVubmVyLl90aW1lbGluZSB8fCAhcnVubmVyLl90aW1lbGluZS5fcnVubmVySWRzLmluY2x1ZGVzKHJ1bm5lci5pZCkpICYmICghbGFzdFJ1bm5lci5fdGltZWxpbmUgfHwgIWxhc3RSdW5uZXIuX3RpbWVsaW5lLl9ydW5uZXJJZHMuaW5jbHVkZXMobGFzdFJ1bm5lci5pZCkpO1xuXG4gICAgICBpZiAoY29uZGl0aW9uKSB7XG4gICAgICAgIC8vIHRoZSArMSBoYXBwZW5zIGluIHRoZSBmdW5jdGlvblxuICAgICAgICB0aGlzLnJlbW92ZShydW5uZXIuaWQpO1xuICAgICAgICBjb25zdCBuZXdSdW5uZXIgPSBydW5uZXIubWVyZ2VXaXRoKGxhc3RSdW5uZXIpO1xuICAgICAgICB0aGlzLmVkaXQobGFzdFJ1bm5lci5pZCwgbmV3UnVubmVyKTtcbiAgICAgICAgbGFzdFJ1bm5lciA9IG5ld1J1bm5lcjtcbiAgICAgICAgLS1pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGFzdFJ1bm5lciA9IHJ1bm5lcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbW92ZShpZCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pZHMuaW5kZXhPZihpZCArIDEpO1xuICAgIHRoaXMuaWRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgdGhpcy5ydW5uZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxufVxucmVnaXN0ZXJNZXRob2RzKHtcbiAgRWxlbWVudDoge1xuICAgIGFuaW1hdGUoZHVyYXRpb24sIGRlbGF5LCB3aGVuKSB7XG4gICAgICBjb25zdCBvID0gUnVubmVyLnNhbml0aXNlKGR1cmF0aW9uLCBkZWxheSwgd2hlbik7XG4gICAgICBjb25zdCB0aW1lbGluZSA9IHRoaXMudGltZWxpbmUoKTtcbiAgICAgIHJldHVybiBuZXcgUnVubmVyKG8uZHVyYXRpb24pLmxvb3AobykuZWxlbWVudCh0aGlzKS50aW1lbGluZSh0aW1lbGluZS5wbGF5KCkpLnNjaGVkdWxlKG8uZGVsYXksIG8ud2hlbik7XG4gICAgfSxcblxuICAgIGRlbGF5KGJ5LCB3aGVuKSB7XG4gICAgICByZXR1cm4gdGhpcy5hbmltYXRlKDAsIGJ5LCB3aGVuKTtcbiAgICB9LFxuXG4gICAgLy8gdGhpcyBmdW5jdGlvbiBzZWFyY2hlcyBmb3IgYWxsIHJ1bm5lcnMgb24gdGhlIGVsZW1lbnQgYW5kIGRlbGV0ZXMgdGhlIG9uZXNcbiAgICAvLyB3aGljaCBydW4gYmVmb3JlIHRoZSBjdXJyZW50IG9uZS4gVGhpcyBpcyBiZWNhdXNlIGFic29sdXRlIHRyYW5zZm9ybWF0aW9uc1xuICAgIC8vIG92ZXJ3ZnJpdGUgYW55dGhpbmcgYW55d2F5IHNvIHRoZXJlIGlzIG5vIG5lZWQgdG8gd2FzdGUgdGltZSBjb21wdXRpbmdcbiAgICAvLyBvdGhlciBydW5uZXJzXG4gICAgX2NsZWFyVHJhbnNmb3JtUnVubmVyc0JlZm9yZShjdXJyZW50UnVubmVyKSB7XG4gICAgICB0aGlzLl90cmFuc2Zvcm1hdGlvblJ1bm5lcnMuY2xlYXJCZWZvcmUoY3VycmVudFJ1bm5lci5pZCk7XG4gICAgfSxcblxuICAgIF9jdXJyZW50VHJhbnNmb3JtKGN1cnJlbnQpIHtcbiAgICAgIHJldHVybiB0aGlzLl90cmFuc2Zvcm1hdGlvblJ1bm5lcnMucnVubmVycyAvLyB3ZSBuZWVkIHRoZSBlcXVhbCBzaWduIGhlcmUgdG8gbWFrZSBzdXJlLCB0aGF0IGFsc28gdHJhbnNmb3JtYXRpb25zXG4gICAgICAvLyBvbiB0aGUgc2FtZSBydW5uZXIgd2hpY2ggZXhlY3V0ZSBiZWZvcmUgdGhlIGN1cnJlbnQgdHJhbnNmb3JtYXRpb24gYXJlXG4gICAgICAvLyB0YWtlbiBpbnRvIGFjY291bnRcbiAgICAgIC5maWx0ZXIocnVubmVyID0+IHJ1bm5lci5pZCA8PSBjdXJyZW50LmlkKS5tYXAoZ2V0UnVubmVyVHJhbnNmb3JtKS5yZWR1Y2UobG11bHRpcGx5LCBuZXcgTWF0cml4KCkpO1xuICAgIH0sXG5cbiAgICBfYWRkUnVubmVyKHJ1bm5lcikge1xuICAgICAgdGhpcy5fdHJhbnNmb3JtYXRpb25SdW5uZXJzLmFkZChydW5uZXIpOyAvLyBNYWtlIHN1cmUgdGhhdCB0aGUgcnVubmVyIG1lcmdlIGlzIGV4ZWN1dGVkIGF0IHRoZSB2ZXJ5IGVuZCBvZlxuICAgICAgLy8gYWxsIEFuaW1hdG9yIGZ1bmN0aW9ucy4gVGhhdHMgd2h5IHdlIHVzZSBpbW1lZGlhdGUgaGVyZSB0byBleGVjdXRlXG4gICAgICAvLyB0aGUgbWVyZ2UgcmlnaHQgYWZ0ZXIgYWxsIGZyYW1lcyBhcmUgcnVuXG5cblxuICAgICAgQW5pbWF0b3IuY2FuY2VsSW1tZWRpYXRlKHRoaXMuX2ZyYW1lSWQpO1xuICAgICAgdGhpcy5fZnJhbWVJZCA9IEFuaW1hdG9yLmltbWVkaWF0ZShtZXJnZVRyYW5zZm9ybXMuYmluZCh0aGlzKSk7XG4gICAgfSxcblxuICAgIF9wcmVwYXJlUnVubmVyKCkge1xuICAgICAgaWYgKHRoaXMuX2ZyYW1lSWQgPT0gbnVsbCkge1xuICAgICAgICB0aGlzLl90cmFuc2Zvcm1hdGlvblJ1bm5lcnMgPSBuZXcgUnVubmVyQXJyYXkoKS5hZGQobmV3IEZha2VSdW5uZXIobmV3IE1hdHJpeCh0aGlzKSkpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG59KTsgLy8gV2lsbCBvdXRwdXQgdGhlIGVsZW1lbnRzIGZyb20gYXJyYXkgQSB0aGF0IGFyZSBub3QgaW4gdGhlIGFycmF5IEJcblxuY29uc3QgZGlmZmVyZW5jZSA9IChhLCBiKSA9PiBhLmZpbHRlcih4ID0+ICFiLmluY2x1ZGVzKHgpKTtcblxuZXh0ZW5kKFJ1bm5lciwge1xuICBhdHRyKGEsIHYpIHtcbiAgICByZXR1cm4gdGhpcy5zdHlsZUF0dHIoJ2F0dHInLCBhLCB2KTtcbiAgfSxcblxuICAvLyBBZGQgYW5pbWF0YWJsZSBzdHlsZXNcbiAgY3NzKHMsIHYpIHtcbiAgICByZXR1cm4gdGhpcy5zdHlsZUF0dHIoJ2NzcycsIHMsIHYpO1xuICB9LFxuXG4gIHN0eWxlQXR0cih0eXBlLCBuYW1lT3JBdHRycywgdmFsKSB7XG4gICAgaWYgKHR5cGVvZiBuYW1lT3JBdHRycyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0eWxlQXR0cih0eXBlLCB7XG4gICAgICAgIFtuYW1lT3JBdHRyc106IHZhbFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0IGF0dHJzID0gbmFtZU9yQXR0cnM7XG4gICAgaWYgKHRoaXMuX3RyeVJldGFyZ2V0KHR5cGUsIGF0dHJzKSkgcmV0dXJuIHRoaXM7XG4gICAgbGV0IG1vcnBoZXIgPSBuZXcgTW9ycGhhYmxlKHRoaXMuX3N0ZXBwZXIpLnRvKGF0dHJzKTtcbiAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKGF0dHJzKTtcbiAgICB0aGlzLnF1ZXVlKGZ1bmN0aW9uICgpIHtcbiAgICAgIG1vcnBoZXIgPSBtb3JwaGVyLmZyb20odGhpcy5lbGVtZW50KClbdHlwZV0oa2V5cykpO1xuICAgIH0sIGZ1bmN0aW9uIChwb3MpIHtcbiAgICAgIHRoaXMuZWxlbWVudCgpW3R5cGVdKG1vcnBoZXIuYXQocG9zKS52YWx1ZU9mKCkpO1xuICAgICAgcmV0dXJuIG1vcnBoZXIuZG9uZSgpO1xuICAgIH0sIGZ1bmN0aW9uIChuZXdUb0F0dHJzKSB7XG4gICAgICAvLyBDaGVjayBpZiBhbnkgbmV3IGtleXMgd2VyZSBhZGRlZFxuICAgICAgY29uc3QgbmV3S2V5cyA9IE9iamVjdC5rZXlzKG5ld1RvQXR0cnMpO1xuICAgICAgY29uc3QgZGlmZmVyZW5jZXMgPSBkaWZmZXJlbmNlKG5ld0tleXMsIGtleXMpOyAvLyBJZiB0aGVpciBhcmUgbmV3IGtleXMsIGluaXRpYWxpemUgdGhlbSBhbmQgYWRkIHRoZW0gdG8gbW9ycGhlclxuXG4gICAgICBpZiAoZGlmZmVyZW5jZXMubGVuZ3RoKSB7XG4gICAgICAgIC8vIEdldCB0aGUgdmFsdWVzXG4gICAgICAgIGNvbnN0IGFkZGVkRnJvbUF0dHJzID0gdGhpcy5lbGVtZW50KClbdHlwZV0oZGlmZmVyZW5jZXMpOyAvLyBHZXQgdGhlIGFscmVhZHkgaW5pdGlhbGl6ZWQgdmFsdWVzXG5cbiAgICAgICAgY29uc3Qgb2xkRnJvbUF0dHJzID0gbmV3IE9iamVjdEJhZyhtb3JwaGVyLmZyb20oKSkudmFsdWVPZigpOyAvLyBNZXJnZSBvbGQgYW5kIG5ld1xuXG4gICAgICAgIE9iamVjdC5hc3NpZ24ob2xkRnJvbUF0dHJzLCBhZGRlZEZyb21BdHRycyk7XG4gICAgICAgIG1vcnBoZXIuZnJvbShvbGRGcm9tQXR0cnMpO1xuICAgICAgfSAvLyBHZXQgdGhlIG9iamVjdCBmcm9tIHRoZSBtb3JwaGVyXG5cblxuICAgICAgY29uc3Qgb2xkVG9BdHRycyA9IG5ldyBPYmplY3RCYWcobW9ycGhlci50bygpKS52YWx1ZU9mKCk7IC8vIE1lcmdlIGluIG5ldyBhdHRyaWJ1dGVzXG5cbiAgICAgIE9iamVjdC5hc3NpZ24ob2xkVG9BdHRycywgbmV3VG9BdHRycyk7IC8vIENoYW5nZSBtb3JwaGVyIHRhcmdldFxuXG4gICAgICBtb3JwaGVyLnRvKG9sZFRvQXR0cnMpOyAvLyBNYWtlIHN1cmUgdGhhdCB3ZSBzYXZlIHRoZSB3b3JrIHdlIGRpZCBzbyB3ZSBkb24ndCBuZWVkIGl0IHRvIGRvIGFnYWluXG5cbiAgICAgIGtleXMgPSBuZXdLZXlzO1xuICAgICAgYXR0cnMgPSBuZXdUb0F0dHJzO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fcmVtZW1iZXJNb3JwaGVyKHR5cGUsIG1vcnBoZXIpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgem9vbShsZXZlbCwgcG9pbnQpIHtcbiAgICBpZiAodGhpcy5fdHJ5UmV0YXJnZXQoJ3pvb20nLCBsZXZlbCwgcG9pbnQpKSByZXR1cm4gdGhpcztcbiAgICBsZXQgbW9ycGhlciA9IG5ldyBNb3JwaGFibGUodGhpcy5fc3RlcHBlcikudG8obmV3IFNWR051bWJlcihsZXZlbCkpO1xuICAgIHRoaXMucXVldWUoZnVuY3Rpb24gKCkge1xuICAgICAgbW9ycGhlciA9IG1vcnBoZXIuZnJvbSh0aGlzLmVsZW1lbnQoKS56b29tKCkpO1xuICAgIH0sIGZ1bmN0aW9uIChwb3MpIHtcbiAgICAgIHRoaXMuZWxlbWVudCgpLnpvb20obW9ycGhlci5hdChwb3MpLCBwb2ludCk7XG4gICAgICByZXR1cm4gbW9ycGhlci5kb25lKCk7XG4gICAgfSwgZnVuY3Rpb24gKG5ld0xldmVsLCBuZXdQb2ludCkge1xuICAgICAgcG9pbnQgPSBuZXdQb2ludDtcbiAgICAgIG1vcnBoZXIudG8obmV3TGV2ZWwpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fcmVtZW1iZXJNb3JwaGVyKCd6b29tJywgbW9ycGhlcik7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKipcclxuICAgKiogYWJzb2x1dGUgdHJhbnNmb3JtYXRpb25zXHJcbiAgICoqL1xuICAvL1xuICAvLyBNIHYgLS0tLS18LS0tLS0oRCBNIHYgPSBGIHYpLS0tLS0tfC0tLS0tPiAgVCB2XG4gIC8vXG4gIC8vIDEuIGRlZmluZSB0aGUgZmluYWwgc3RhdGUgKFQpIGFuZCBkZWNvbXBvc2UgaXQgKG9uY2UpXG4gIC8vICAgIHQgPSBbdHgsIHR5LCB0aGUsIGxhbSwgc3ksIHN4XVxuICAvLyAyLiBvbiBldmVyeSBmcmFtZTogcHVsbCB0aGUgY3VycmVudCBzdGF0ZSBvZiBhbGwgcHJldmlvdXMgdHJhbnNmb3Jtc1xuICAvLyAgICAoTSAtIG0gY2FuIGNoYW5nZSlcbiAgLy8gICBhbmQgdGhlbiB3cml0ZSB0aGlzIGFzIG0gPSBbdHgwLCB0eTAsIHRoZTAsIGxhbTAsIHN5MCwgc3gwXVxuICAvLyAzLiBGaW5kIHRoZSBpbnRlcnBvbGF0ZWQgbWF0cml4IEYocG9zKSA9IG0gKyBwb3MgKiAodCAtIG0pXG4gIC8vICAgLSBOb3RlIEYoMCkgPSBNXG4gIC8vICAgLSBOb3RlIEYoMSkgPSBUXG4gIC8vIDQuIE5vdyB5b3UgZ2V0IHRoZSBkZWx0YSBtYXRyaXggYXMgYSByZXN1bHQ6IEQgPSBGICogaW52KE0pXG4gIHRyYW5zZm9ybSh0cmFuc2Zvcm1zLCByZWxhdGl2ZSwgYWZmaW5lKSB7XG4gICAgLy8gSWYgd2UgaGF2ZSBhIGRlY2xhcmF0aXZlIGZ1bmN0aW9uLCB3ZSBzaG91bGQgcmV0YXJnZXQgaXQgaWYgcG9zc2libGVcbiAgICByZWxhdGl2ZSA9IHRyYW5zZm9ybXMucmVsYXRpdmUgfHwgcmVsYXRpdmU7XG5cbiAgICBpZiAodGhpcy5faXNEZWNsYXJhdGl2ZSAmJiAhcmVsYXRpdmUgJiYgdGhpcy5fdHJ5UmV0YXJnZXQoJ3RyYW5zZm9ybScsIHRyYW5zZm9ybXMpKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9IC8vIFBhcnNlIHRoZSBwYXJhbWV0ZXJzXG5cblxuICAgIGNvbnN0IGlzTWF0cml4ID0gTWF0cml4LmlzTWF0cml4TGlrZSh0cmFuc2Zvcm1zKTtcbiAgICBhZmZpbmUgPSB0cmFuc2Zvcm1zLmFmZmluZSAhPSBudWxsID8gdHJhbnNmb3Jtcy5hZmZpbmUgOiBhZmZpbmUgIT0gbnVsbCA/IGFmZmluZSA6ICFpc01hdHJpeDsgLy8gQ3JlYXRlIGEgbW9yZXBoZXIgYW5kIHNldCBpdHMgdHlwZVxuXG4gICAgY29uc3QgbW9ycGhlciA9IG5ldyBNb3JwaGFibGUodGhpcy5fc3RlcHBlcikudHlwZShhZmZpbmUgPyBUcmFuc2Zvcm1CYWcgOiBNYXRyaXgpO1xuICAgIGxldCBvcmlnaW47XG4gICAgbGV0IGVsZW1lbnQ7XG4gICAgbGV0IGN1cnJlbnQ7XG4gICAgbGV0IGN1cnJlbnRBbmdsZTtcbiAgICBsZXQgc3RhcnRUcmFuc2Zvcm07XG5cbiAgICBmdW5jdGlvbiBzZXR1cCgpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBlbGVtZW50IGFuZCBvcmlnaW4gaXMgZGVmaW5lZFxuICAgICAgZWxlbWVudCA9IGVsZW1lbnQgfHwgdGhpcy5lbGVtZW50KCk7XG4gICAgICBvcmlnaW4gPSBvcmlnaW4gfHwgZ2V0T3JpZ2luKHRyYW5zZm9ybXMsIGVsZW1lbnQpO1xuICAgICAgc3RhcnRUcmFuc2Zvcm0gPSBuZXcgTWF0cml4KHJlbGF0aXZlID8gdW5kZWZpbmVkIDogZWxlbWVudCk7IC8vIGFkZCB0aGUgcnVubmVyIHRvIHRoZSBlbGVtZW50IHNvIGl0IGNhbiBtZXJnZSB0cmFuc2Zvcm1hdGlvbnNcblxuICAgICAgZWxlbWVudC5fYWRkUnVubmVyKHRoaXMpOyAvLyBEZWFjdGl2YXRlIGFsbCB0cmFuc2Zvcm1zIHRoYXQgaGF2ZSBydW4gc28gZmFyIGlmIHdlIGFyZSBhYnNvbHV0ZVxuXG5cbiAgICAgIGlmICghcmVsYXRpdmUpIHtcbiAgICAgICAgZWxlbWVudC5fY2xlYXJUcmFuc2Zvcm1SdW5uZXJzQmVmb3JlKHRoaXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bihwb3MpIHtcbiAgICAgIC8vIGNsZWFyIGFsbCBvdGhlciB0cmFuc2Zvcm1zIGJlZm9yZSB0aGlzIGluIGNhc2Ugc29tZXRoaW5nIGlzIHNhdmVkXG4gICAgICAvLyBvbiB0aGlzIHJ1bm5lci4gV2UgYXJlIGFic29sdXRlLiBXZSBkb250IG5lZWQgdGhlc2UhXG4gICAgICBpZiAoIXJlbGF0aXZlKSB0aGlzLmNsZWFyVHJhbnNmb3JtKCk7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHgsXG4gICAgICAgIHlcbiAgICAgIH0gPSBuZXcgUG9pbnQob3JpZ2luKS50cmFuc2Zvcm0oZWxlbWVudC5fY3VycmVudFRyYW5zZm9ybSh0aGlzKSk7XG4gICAgICBsZXQgdGFyZ2V0ID0gbmV3IE1hdHJpeCh7IC4uLnRyYW5zZm9ybXMsXG4gICAgICAgIG9yaWdpbjogW3gsIHldXG4gICAgICB9KTtcbiAgICAgIGxldCBzdGFydCA9IHRoaXMuX2lzRGVjbGFyYXRpdmUgJiYgY3VycmVudCA/IGN1cnJlbnQgOiBzdGFydFRyYW5zZm9ybTtcblxuICAgICAgaWYgKGFmZmluZSkge1xuICAgICAgICB0YXJnZXQgPSB0YXJnZXQuZGVjb21wb3NlKHgsIHkpO1xuICAgICAgICBzdGFydCA9IHN0YXJ0LmRlY29tcG9zZSh4LCB5KTsgLy8gR2V0IHRoZSBjdXJyZW50IGFuZCB0YXJnZXQgYW5nbGUgYXMgaXQgd2FzIHNldFxuXG4gICAgICAgIGNvbnN0IHJUYXJnZXQgPSB0YXJnZXQucm90YXRlO1xuICAgICAgICBjb25zdCByQ3VycmVudCA9IHN0YXJ0LnJvdGF0ZTsgLy8gRmlndXJlIG91dCB0aGUgc2hvcnRlc3QgcGF0aCB0byByb3RhdGUgZGlyZWN0bHlcblxuICAgICAgICBjb25zdCBwb3NzaWJpbGl0aWVzID0gW3JUYXJnZXQgLSAzNjAsIHJUYXJnZXQsIHJUYXJnZXQgKyAzNjBdO1xuICAgICAgICBjb25zdCBkaXN0YW5jZXMgPSBwb3NzaWJpbGl0aWVzLm1hcChhID0+IE1hdGguYWJzKGEgLSByQ3VycmVudCkpO1xuICAgICAgICBjb25zdCBzaG9ydGVzdCA9IE1hdGgubWluKC4uLmRpc3RhbmNlcyk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gZGlzdGFuY2VzLmluZGV4T2Yoc2hvcnRlc3QpO1xuICAgICAgICB0YXJnZXQucm90YXRlID0gcG9zc2liaWxpdGllc1tpbmRleF07XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWxhdGl2ZSkge1xuICAgICAgICAvLyB3ZSBoYXZlIHRvIGJlIGNhcmVmdWwgaGVyZSBub3QgdG8gb3ZlcndyaXRlIHRoZSByb3RhdGlvblxuICAgICAgICAvLyB3aXRoIHRoZSByb3RhdGUgbWV0aG9kIG9mIE1hdHJpeFxuICAgICAgICBpZiAoIWlzTWF0cml4KSB7XG4gICAgICAgICAgdGFyZ2V0LnJvdGF0ZSA9IHRyYW5zZm9ybXMucm90YXRlIHx8IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5faXNEZWNsYXJhdGl2ZSAmJiBjdXJyZW50QW5nbGUpIHtcbiAgICAgICAgICBzdGFydC5yb3RhdGUgPSBjdXJyZW50QW5nbGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbW9ycGhlci5mcm9tKHN0YXJ0KTtcbiAgICAgIG1vcnBoZXIudG8odGFyZ2V0KTtcbiAgICAgIGNvbnN0IGFmZmluZVBhcmFtZXRlcnMgPSBtb3JwaGVyLmF0KHBvcyk7XG4gICAgICBjdXJyZW50QW5nbGUgPSBhZmZpbmVQYXJhbWV0ZXJzLnJvdGF0ZTtcbiAgICAgIGN1cnJlbnQgPSBuZXcgTWF0cml4KGFmZmluZVBhcmFtZXRlcnMpO1xuICAgICAgdGhpcy5hZGRUcmFuc2Zvcm0oY3VycmVudCk7XG5cbiAgICAgIGVsZW1lbnQuX2FkZFJ1bm5lcih0aGlzKTtcblxuICAgICAgcmV0dXJuIG1vcnBoZXIuZG9uZSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJldGFyZ2V0KG5ld1RyYW5zZm9ybXMpIHtcbiAgICAgIC8vIG9ubHkgZ2V0IGEgbmV3IG9yaWdpbiBpZiBpdCBjaGFuZ2VkIHNpbmNlIHRoZSBsYXN0IGNhbGxcbiAgICAgIGlmICgobmV3VHJhbnNmb3Jtcy5vcmlnaW4gfHwgJ2NlbnRlcicpLnRvU3RyaW5nKCkgIT09ICh0cmFuc2Zvcm1zLm9yaWdpbiB8fCAnY2VudGVyJykudG9TdHJpbmcoKSkge1xuICAgICAgICBvcmlnaW4gPSBnZXRPcmlnaW4obmV3VHJhbnNmb3JtcywgZWxlbWVudCk7XG4gICAgICB9IC8vIG92ZXJ3cml0ZSB0aGUgb2xkIHRyYW5zZm9ybWF0aW9ucyB3aXRoIHRoZSBuZXcgb25lc1xuXG5cbiAgICAgIHRyYW5zZm9ybXMgPSB7IC4uLm5ld1RyYW5zZm9ybXMsXG4gICAgICAgIG9yaWdpblxuICAgICAgfTtcbiAgICB9XG5cbiAgICB0aGlzLnF1ZXVlKHNldHVwLCBydW4sIHJldGFyZ2V0LCB0cnVlKTtcbiAgICB0aGlzLl9pc0RlY2xhcmF0aXZlICYmIHRoaXMuX3JlbWVtYmVyTW9ycGhlcigndHJhbnNmb3JtJywgbW9ycGhlcik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgLy8gQW5pbWF0YWJsZSB4LWF4aXNcbiAgeCh4LCByZWxhdGl2ZSkge1xuICAgIHJldHVybiB0aGlzLl9xdWV1ZU51bWJlcigneCcsIHgpO1xuICB9LFxuXG4gIC8vIEFuaW1hdGFibGUgeS1heGlzXG4gIHkoeSkge1xuICAgIHJldHVybiB0aGlzLl9xdWV1ZU51bWJlcigneScsIHkpO1xuICB9LFxuXG4gIGR4KHggPSAwKSB7XG4gICAgcmV0dXJuIHRoaXMuX3F1ZXVlTnVtYmVyRGVsdGEoJ3gnLCB4KTtcbiAgfSxcblxuICBkeSh5ID0gMCkge1xuICAgIHJldHVybiB0aGlzLl9xdWV1ZU51bWJlckRlbHRhKCd5JywgeSk7XG4gIH0sXG5cbiAgZG1vdmUoeCwgeSkge1xuICAgIHJldHVybiB0aGlzLmR4KHgpLmR5KHkpO1xuICB9LFxuXG4gIF9xdWV1ZU51bWJlckRlbHRhKG1ldGhvZCwgdG8pIHtcbiAgICB0byA9IG5ldyBTVkdOdW1iZXIodG8pOyAvLyBUcnkgdG8gY2hhbmdlIHRoZSB0YXJnZXQgaWYgd2UgaGF2ZSB0aGlzIG1ldGhvZCBhbHJlYWR5IHJlZ2lzdGVyZFxuXG4gICAgaWYgKHRoaXMuX3RyeVJldGFyZ2V0KG1ldGhvZCwgdG8pKSByZXR1cm4gdGhpczsgLy8gTWFrZSBhIG1vcnBoZXIgYW5kIHF1ZXVlIHRoZSBhbmltYXRpb25cblxuICAgIGNvbnN0IG1vcnBoZXIgPSBuZXcgTW9ycGhhYmxlKHRoaXMuX3N0ZXBwZXIpLnRvKHRvKTtcbiAgICBsZXQgZnJvbSA9IG51bGw7XG4gICAgdGhpcy5xdWV1ZShmdW5jdGlvbiAoKSB7XG4gICAgICBmcm9tID0gdGhpcy5lbGVtZW50KClbbWV0aG9kXSgpO1xuICAgICAgbW9ycGhlci5mcm9tKGZyb20pO1xuICAgICAgbW9ycGhlci50byhmcm9tICsgdG8pO1xuICAgIH0sIGZ1bmN0aW9uIChwb3MpIHtcbiAgICAgIHRoaXMuZWxlbWVudCgpW21ldGhvZF0obW9ycGhlci5hdChwb3MpKTtcbiAgICAgIHJldHVybiBtb3JwaGVyLmRvbmUoKTtcbiAgICB9LCBmdW5jdGlvbiAobmV3VG8pIHtcbiAgICAgIG1vcnBoZXIudG8oZnJvbSArIG5ldyBTVkdOdW1iZXIobmV3VG8pKTtcbiAgICB9KTsgLy8gUmVnaXN0ZXIgdGhlIG1vcnBoZXIgc28gdGhhdCBpZiBpdCBpcyBjaGFuZ2VkIGFnYWluLCB3ZSBjYW4gcmV0YXJnZXQgaXRcblxuICAgIHRoaXMuX3JlbWVtYmVyTW9ycGhlcihtZXRob2QsIG1vcnBoZXIpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgX3F1ZXVlT2JqZWN0KG1ldGhvZCwgdG8pIHtcbiAgICAvLyBUcnkgdG8gY2hhbmdlIHRoZSB0YXJnZXQgaWYgd2UgaGF2ZSB0aGlzIG1ldGhvZCBhbHJlYWR5IHJlZ2lzdGVyZFxuICAgIGlmICh0aGlzLl90cnlSZXRhcmdldChtZXRob2QsIHRvKSkgcmV0dXJuIHRoaXM7IC8vIE1ha2UgYSBtb3JwaGVyIGFuZCBxdWV1ZSB0aGUgYW5pbWF0aW9uXG5cbiAgICBjb25zdCBtb3JwaGVyID0gbmV3IE1vcnBoYWJsZSh0aGlzLl9zdGVwcGVyKS50byh0byk7XG4gICAgdGhpcy5xdWV1ZShmdW5jdGlvbiAoKSB7XG4gICAgICBtb3JwaGVyLmZyb20odGhpcy5lbGVtZW50KClbbWV0aG9kXSgpKTtcbiAgICB9LCBmdW5jdGlvbiAocG9zKSB7XG4gICAgICB0aGlzLmVsZW1lbnQoKVttZXRob2RdKG1vcnBoZXIuYXQocG9zKSk7XG4gICAgICByZXR1cm4gbW9ycGhlci5kb25lKCk7XG4gICAgfSk7IC8vIFJlZ2lzdGVyIHRoZSBtb3JwaGVyIHNvIHRoYXQgaWYgaXQgaXMgY2hhbmdlZCBhZ2Fpbiwgd2UgY2FuIHJldGFyZ2V0IGl0XG5cbiAgICB0aGlzLl9yZW1lbWJlck1vcnBoZXIobWV0aG9kLCBtb3JwaGVyKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIF9xdWV1ZU51bWJlcihtZXRob2QsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuX3F1ZXVlT2JqZWN0KG1ldGhvZCwgbmV3IFNWR051bWJlcih2YWx1ZSkpO1xuICB9LFxuXG4gIC8vIEFuaW1hdGFibGUgY2VudGVyIHgtYXhpc1xuICBjeCh4KSB7XG4gICAgcmV0dXJuIHRoaXMuX3F1ZXVlTnVtYmVyKCdjeCcsIHgpO1xuICB9LFxuXG4gIC8vIEFuaW1hdGFibGUgY2VudGVyIHktYXhpc1xuICBjeSh5KSB7XG4gICAgcmV0dXJuIHRoaXMuX3F1ZXVlTnVtYmVyKCdjeScsIHkpO1xuICB9LFxuXG4gIC8vIEFkZCBhbmltYXRhYmxlIG1vdmVcbiAgbW92ZSh4LCB5KSB7XG4gICAgcmV0dXJuIHRoaXMueCh4KS55KHkpO1xuICB9LFxuXG4gIC8vIEFkZCBhbmltYXRhYmxlIGNlbnRlclxuICBjZW50ZXIoeCwgeSkge1xuICAgIHJldHVybiB0aGlzLmN4KHgpLmN5KHkpO1xuICB9LFxuXG4gIC8vIEFkZCBhbmltYXRhYmxlIHNpemVcbiAgc2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgLy8gYW5pbWF0ZSBiYm94IGJhc2VkIHNpemUgZm9yIGFsbCBvdGhlciBlbGVtZW50c1xuICAgIGxldCBib3g7XG5cbiAgICBpZiAoIXdpZHRoIHx8ICFoZWlnaHQpIHtcbiAgICAgIGJveCA9IHRoaXMuX2VsZW1lbnQuYmJveCgpO1xuICAgIH1cblxuICAgIGlmICghd2lkdGgpIHtcbiAgICAgIHdpZHRoID0gYm94LndpZHRoIC8gYm94LmhlaWdodCAqIGhlaWdodDtcbiAgICB9XG5cbiAgICBpZiAoIWhlaWdodCkge1xuICAgICAgaGVpZ2h0ID0gYm94LmhlaWdodCAvIGJveC53aWR0aCAqIHdpZHRoO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLndpZHRoKHdpZHRoKS5oZWlnaHQoaGVpZ2h0KTtcbiAgfSxcblxuICAvLyBBZGQgYW5pbWF0YWJsZSB3aWR0aFxuICB3aWR0aCh3aWR0aCkge1xuICAgIHJldHVybiB0aGlzLl9xdWV1ZU51bWJlcignd2lkdGgnLCB3aWR0aCk7XG4gIH0sXG5cbiAgLy8gQWRkIGFuaW1hdGFibGUgaGVpZ2h0XG4gIGhlaWdodChoZWlnaHQpIHtcbiAgICByZXR1cm4gdGhpcy5fcXVldWVOdW1iZXIoJ2hlaWdodCcsIGhlaWdodCk7XG4gIH0sXG5cbiAgLy8gQWRkIGFuaW1hdGFibGUgcGxvdFxuICBwbG90KGEsIGIsIGMsIGQpIHtcbiAgICAvLyBMaW5lcyBjYW4gYmUgcGxvdHRlZCB3aXRoIDQgYXJndW1lbnRzXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDQpIHtcbiAgICAgIHJldHVybiB0aGlzLnBsb3QoW2EsIGIsIGMsIGRdKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fdHJ5UmV0YXJnZXQoJ3Bsb3QnLCBhKSkgcmV0dXJuIHRoaXM7XG4gICAgY29uc3QgbW9ycGhlciA9IG5ldyBNb3JwaGFibGUodGhpcy5fc3RlcHBlcikudHlwZSh0aGlzLl9lbGVtZW50Lk1vcnBoQXJyYXkpLnRvKGEpO1xuICAgIHRoaXMucXVldWUoZnVuY3Rpb24gKCkge1xuICAgICAgbW9ycGhlci5mcm9tKHRoaXMuX2VsZW1lbnQuYXJyYXkoKSk7XG4gICAgfSwgZnVuY3Rpb24gKHBvcykge1xuICAgICAgdGhpcy5fZWxlbWVudC5wbG90KG1vcnBoZXIuYXQocG9zKSk7XG5cbiAgICAgIHJldHVybiBtb3JwaGVyLmRvbmUoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX3JlbWVtYmVyTW9ycGhlcigncGxvdCcsIG1vcnBoZXIpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgLy8gQWRkIGxlYWRpbmcgbWV0aG9kXG4gIGxlYWRpbmcodmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5fcXVldWVOdW1iZXIoJ2xlYWRpbmcnLCB2YWx1ZSk7XG4gIH0sXG5cbiAgLy8gQWRkIGFuaW1hdGFibGUgdmlld2JveFxuICB2aWV3Ym94KHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICByZXR1cm4gdGhpcy5fcXVldWVPYmplY3QoJ3ZpZXdib3gnLCBuZXcgQm94KHgsIHksIHdpZHRoLCBoZWlnaHQpKTtcbiAgfSxcblxuICB1cGRhdGUobykge1xuICAgIGlmICh0eXBlb2YgbyAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiB0aGlzLnVwZGF0ZSh7XG4gICAgICAgIG9mZnNldDogYXJndW1lbnRzWzBdLFxuICAgICAgICBjb2xvcjogYXJndW1lbnRzWzFdLFxuICAgICAgICBvcGFjaXR5OiBhcmd1bWVudHNbMl1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChvLm9wYWNpdHkgIT0gbnVsbCkgdGhpcy5hdHRyKCdzdG9wLW9wYWNpdHknLCBvLm9wYWNpdHkpO1xuICAgIGlmIChvLmNvbG9yICE9IG51bGwpIHRoaXMuYXR0cignc3RvcC1jb2xvcicsIG8uY29sb3IpO1xuICAgIGlmIChvLm9mZnNldCAhPSBudWxsKSB0aGlzLmF0dHIoJ29mZnNldCcsIG8ub2Zmc2V0KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG59KTtcbmV4dGVuZChSdW5uZXIsIHtcbiAgcngsXG4gIHJ5LFxuICBmcm9tLFxuICB0b1xufSk7XG5yZWdpc3RlcihSdW5uZXIsICdSdW5uZXInKTtcblxuY2xhc3MgU3ZnIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgY29uc3RydWN0b3Iobm9kZSwgYXR0cnMgPSBub2RlKSB7XG4gICAgc3VwZXIobm9kZU9yTmV3KCdzdmcnLCBub2RlKSwgYXR0cnMpO1xuICAgIHRoaXMubmFtZXNwYWNlKCk7XG4gIH0gLy8gQ3JlYXRlcyBhbmQgcmV0dXJucyBkZWZzIGVsZW1lbnRcblxuXG4gIGRlZnMoKSB7XG4gICAgaWYgKCF0aGlzLmlzUm9vdCgpKSByZXR1cm4gdGhpcy5yb290KCkuZGVmcygpO1xuICAgIHJldHVybiBhZG9wdCh0aGlzLm5vZGUucXVlcnlTZWxlY3RvcignZGVmcycpKSB8fCB0aGlzLnB1dChuZXcgRGVmcygpKTtcbiAgfVxuXG4gIGlzUm9vdCgpIHtcbiAgICByZXR1cm4gIXRoaXMubm9kZS5wYXJlbnROb2RlIHx8ICEodGhpcy5ub2RlLnBhcmVudE5vZGUgaW5zdGFuY2VvZiBnbG9iYWxzLndpbmRvdy5TVkdFbGVtZW50KSAmJiB0aGlzLm5vZGUucGFyZW50Tm9kZS5ub2RlTmFtZSAhPT0gJyNkb2N1bWVudC1mcmFnbWVudCc7XG4gIH0gLy8gQWRkIG5hbWVzcGFjZXNcblxuXG4gIG5hbWVzcGFjZSgpIHtcbiAgICBpZiAoIXRoaXMuaXNSb290KCkpIHJldHVybiB0aGlzLnJvb3QoKS5uYW1lc3BhY2UoKTtcbiAgICByZXR1cm4gdGhpcy5hdHRyKHtcbiAgICAgIHhtbG5zOiBzdmcsXG4gICAgICB2ZXJzaW9uOiAnMS4xJ1xuICAgIH0pLmF0dHIoJ3htbG5zOnhsaW5rJywgeGxpbmssIHhtbG5zKS5hdHRyKCd4bWxuczpzdmdqcycsIHN2Z2pzLCB4bWxucyk7XG4gIH1cblxuICByZW1vdmVOYW1lc3BhY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXR0cih7XG4gICAgICB4bWxuczogbnVsbCxcbiAgICAgIHZlcnNpb246IG51bGxcbiAgICB9KS5hdHRyKCd4bWxuczp4bGluaycsIG51bGwsIHhtbG5zKS5hdHRyKCd4bWxuczpzdmdqcycsIG51bGwsIHhtbG5zKTtcbiAgfSAvLyBDaGVjayBpZiB0aGlzIGlzIGEgcm9vdCBzdmdcbiAgLy8gSWYgbm90LCBjYWxsIHJvb3QoKSBmcm9tIHRoaXMgZWxlbWVudFxuXG5cbiAgcm9vdCgpIHtcbiAgICBpZiAodGhpcy5pc1Jvb3QoKSkgcmV0dXJuIHRoaXM7XG4gICAgcmV0dXJuIHN1cGVyLnJvb3QoKTtcbiAgfVxuXG59XG5yZWdpc3Rlck1ldGhvZHMoe1xuICBDb250YWluZXI6IHtcbiAgICAvLyBDcmVhdGUgbmVzdGVkIHN2ZyBkb2N1bWVudFxuICAgIG5lc3RlZDogd3JhcFdpdGhBdHRyQ2hlY2soZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHV0KG5ldyBTdmcoKSk7XG4gICAgfSlcbiAgfVxufSk7XG5yZWdpc3RlcihTdmcsICdTdmcnLCB0cnVlKTtcblxuY2xhc3MgU3ltYm9sIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgLy8gSW5pdGlhbGl6ZSBub2RlXG4gIGNvbnN0cnVjdG9yKG5vZGUsIGF0dHJzID0gbm9kZSkge1xuICAgIHN1cGVyKG5vZGVPck5ldygnc3ltYm9sJywgbm9kZSksIGF0dHJzKTtcbiAgfVxuXG59XG5yZWdpc3Rlck1ldGhvZHMoe1xuICBDb250YWluZXI6IHtcbiAgICBzeW1ib2w6IHdyYXBXaXRoQXR0ckNoZWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLnB1dChuZXcgU3ltYm9sKCkpO1xuICAgIH0pXG4gIH1cbn0pO1xucmVnaXN0ZXIoU3ltYm9sLCAnU3ltYm9sJyk7XG5cbmZ1bmN0aW9uIHBsYWluKHRleHQpIHtcbiAgLy8gY2xlYXIgaWYgYnVpbGQgbW9kZSBpcyBkaXNhYmxlZFxuICBpZiAodGhpcy5fYnVpbGQgPT09IGZhbHNlKSB7XG4gICAgdGhpcy5jbGVhcigpO1xuICB9IC8vIGNyZWF0ZSB0ZXh0IG5vZGVcblxuXG4gIHRoaXMubm9kZS5hcHBlbmRDaGlsZChnbG9iYWxzLmRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpKTtcbiAgcmV0dXJuIHRoaXM7XG59IC8vIEdldCBsZW5ndGggb2YgdGV4dCBlbGVtZW50XG5cbmZ1bmN0aW9uIGxlbmd0aCgpIHtcbiAgcmV0dXJuIHRoaXMubm9kZS5nZXRDb21wdXRlZFRleHRMZW5ndGgoKTtcbn0gLy8gTW92ZSBvdmVyIHgtYXhpc1xuLy8gVGV4dCBpcyBtb3ZlZCBieSBpdHMgYm91bmRpbmcgYm94XG4vLyB0ZXh0LWFuY2hvciBkb2VzIE5PVCBtYXR0ZXJcblxuZnVuY3Rpb24geCQxKHgsIGJveCA9IHRoaXMuYmJveCgpKSB7XG4gIGlmICh4ID09IG51bGwpIHtcbiAgICByZXR1cm4gYm94Lng7XG4gIH1cblxuICByZXR1cm4gdGhpcy5hdHRyKCd4JywgdGhpcy5hdHRyKCd4JykgKyB4IC0gYm94LngpO1xufSAvLyBNb3ZlIG92ZXIgeS1heGlzXG5cbmZ1bmN0aW9uIHkkMSh5LCBib3ggPSB0aGlzLmJib3goKSkge1xuICBpZiAoeSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGJveC55O1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuYXR0cigneScsIHRoaXMuYXR0cigneScpICsgeSAtIGJveC55KTtcbn1cbmZ1bmN0aW9uIG1vdmUkMSh4LCB5LCBib3ggPSB0aGlzLmJib3goKSkge1xuICByZXR1cm4gdGhpcy54KHgsIGJveCkueSh5LCBib3gpO1xufSAvLyBNb3ZlIGNlbnRlciBvdmVyIHgtYXhpc1xuXG5mdW5jdGlvbiBjeCh4LCBib3ggPSB0aGlzLmJib3goKSkge1xuICBpZiAoeCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGJveC5jeDtcbiAgfVxuXG4gIHJldHVybiB0aGlzLmF0dHIoJ3gnLCB0aGlzLmF0dHIoJ3gnKSArIHggLSBib3guY3gpO1xufSAvLyBNb3ZlIGNlbnRlciBvdmVyIHktYXhpc1xuXG5mdW5jdGlvbiBjeSh5LCBib3ggPSB0aGlzLmJib3goKSkge1xuICBpZiAoeSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGJveC5jeTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLmF0dHIoJ3knLCB0aGlzLmF0dHIoJ3knKSArIHkgLSBib3guY3kpO1xufVxuZnVuY3Rpb24gY2VudGVyKHgsIHksIGJveCA9IHRoaXMuYmJveCgpKSB7XG4gIHJldHVybiB0aGlzLmN4KHgsIGJveCkuY3koeSwgYm94KTtcbn1cbmZ1bmN0aW9uIGF4KHgpIHtcbiAgcmV0dXJuIHRoaXMuYXR0cigneCcsIHgpO1xufVxuZnVuY3Rpb24gYXkoeSkge1xuICByZXR1cm4gdGhpcy5hdHRyKCd5JywgeSk7XG59XG5mdW5jdGlvbiBhbW92ZSh4LCB5KSB7XG4gIHJldHVybiB0aGlzLmF4KHgpLmF5KHkpO1xufSAvLyBFbmFibGUgLyBkaXNhYmxlIGJ1aWxkIG1vZGVcblxuZnVuY3Rpb24gYnVpbGQoYnVpbGQpIHtcbiAgdGhpcy5fYnVpbGQgPSAhIWJ1aWxkO1xuICByZXR1cm4gdGhpcztcbn1cblxudmFyIHRleHRhYmxlID0ge1xuICBfX3Byb3RvX186IG51bGwsXG4gIHBsYWluOiBwbGFpbixcbiAgbGVuZ3RoOiBsZW5ndGgsXG4gIHg6IHgkMSxcbiAgeTogeSQxLFxuICBtb3ZlOiBtb3ZlJDEsXG4gIGN4OiBjeCxcbiAgY3k6IGN5LFxuICBjZW50ZXI6IGNlbnRlcixcbiAgYXg6IGF4LFxuICBheTogYXksXG4gIGFtb3ZlOiBhbW92ZSxcbiAgYnVpbGQ6IGJ1aWxkXG59O1xuXG5jbGFzcyBUZXh0IGV4dGVuZHMgU2hhcGUge1xuICAvLyBJbml0aWFsaXplIG5vZGVcbiAgY29uc3RydWN0b3Iobm9kZSwgYXR0cnMgPSBub2RlKSB7XG4gICAgc3VwZXIobm9kZU9yTmV3KCd0ZXh0Jywgbm9kZSksIGF0dHJzKTtcbiAgICB0aGlzLmRvbS5sZWFkaW5nID0gbmV3IFNWR051bWJlcigxLjMpOyAvLyBzdG9yZSBsZWFkaW5nIHZhbHVlIGZvciByZWJ1aWxkaW5nXG5cbiAgICB0aGlzLl9yZWJ1aWxkID0gdHJ1ZTsgLy8gZW5hYmxlIGF1dG9tYXRpYyB1cGRhdGluZyBvZiBkeSB2YWx1ZXNcblxuICAgIHRoaXMuX2J1aWxkID0gZmFsc2U7IC8vIGRpc2FibGUgYnVpbGQgbW9kZSBmb3IgYWRkaW5nIG11bHRpcGxlIGxpbmVzXG4gIH0gLy8gU2V0IC8gZ2V0IGxlYWRpbmdcblxuXG4gIGxlYWRpbmcodmFsdWUpIHtcbiAgICAvLyBhY3QgYXMgZ2V0dGVyXG4gICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLmRvbS5sZWFkaW5nO1xuICAgIH0gLy8gYWN0IGFzIHNldHRlclxuXG5cbiAgICB0aGlzLmRvbS5sZWFkaW5nID0gbmV3IFNWR051bWJlcih2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXMucmVidWlsZCgpO1xuICB9IC8vIFJlYnVpbGQgYXBwZWFyYW5jZSB0eXBlXG5cblxuICByZWJ1aWxkKHJlYnVpbGQpIHtcbiAgICAvLyBzdG9yZSBuZXcgcmVidWlsZCBmbGFnIGlmIGdpdmVuXG4gICAgaWYgKHR5cGVvZiByZWJ1aWxkID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHRoaXMuX3JlYnVpbGQgPSByZWJ1aWxkO1xuICAgIH0gLy8gZGVmaW5lIHBvc2l0aW9uIG9mIGFsbCBsaW5lc1xuXG5cbiAgICBpZiAodGhpcy5fcmVidWlsZCkge1xuICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICBsZXQgYmxhbmtMaW5lT2Zmc2V0ID0gMDtcbiAgICAgIGNvbnN0IGxlYWRpbmcgPSB0aGlzLmRvbS5sZWFkaW5nO1xuICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIGNvbnN0IGZvbnRTaXplID0gZ2xvYmFscy53aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLm5vZGUpLmdldFByb3BlcnR5VmFsdWUoJ2ZvbnQtc2l6ZScpO1xuICAgICAgICBjb25zdCBkeSA9IGxlYWRpbmcgKiBuZXcgU1ZHTnVtYmVyKGZvbnRTaXplKTtcblxuICAgICAgICBpZiAodGhpcy5kb20ubmV3TGluZWQpIHtcbiAgICAgICAgICB0aGlzLmF0dHIoJ3gnLCBzZWxmLmF0dHIoJ3gnKSk7XG5cbiAgICAgICAgICBpZiAodGhpcy50ZXh0KCkgPT09ICdcXG4nKSB7XG4gICAgICAgICAgICBibGFua0xpbmVPZmZzZXQgKz0gZHk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYXR0cignZHknLCBpID8gZHkgKyBibGFua0xpbmVPZmZzZXQgOiAwKTtcbiAgICAgICAgICAgIGJsYW5rTGluZU9mZnNldCA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZmlyZSgncmVidWlsZCcpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9IC8vIG92ZXJ3cml0ZSBtZXRob2QgZnJvbSBwYXJlbnQgdG8gc2V0IGRhdGEgcHJvcGVybHlcblxuXG4gIHNldERhdGEobykge1xuICAgIHRoaXMuZG9tID0gbztcbiAgICB0aGlzLmRvbS5sZWFkaW5nID0gbmV3IFNWR051bWJlcihvLmxlYWRpbmcgfHwgMS4zKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSAvLyBTZXQgdGhlIHRleHQgY29udGVudFxuXG5cbiAgdGV4dCh0ZXh0KSB7XG4gICAgLy8gYWN0IGFzIGdldHRlclxuICAgIGlmICh0ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5ub2RlLmNoaWxkTm9kZXM7XG4gICAgICBsZXQgZmlyc3RMaW5lID0gMDtcbiAgICAgIHRleHQgPSAnJztcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgIC8vIHNraXAgdGV4dFBhdGhzIC0gdGhleSBhcmUgbm8gbGluZXNcbiAgICAgICAgaWYgKGNoaWxkcmVuW2ldLm5vZGVOYW1lID09PSAndGV4dFBhdGgnKSB7XG4gICAgICAgICAgaWYgKGkgPT09IDApIGZpcnN0TGluZSA9IDE7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH0gLy8gYWRkIG5ld2xpbmUgaWYgaXRzIG5vdCB0aGUgZmlyc3QgY2hpbGQgYW5kIG5ld0xpbmVkIGlzIHNldCB0byB0cnVlXG5cblxuICAgICAgICBpZiAoaSAhPT0gZmlyc3RMaW5lICYmIGNoaWxkcmVuW2ldLm5vZGVUeXBlICE9PSAzICYmIGFkb3B0KGNoaWxkcmVuW2ldKS5kb20ubmV3TGluZWQgPT09IHRydWUpIHtcbiAgICAgICAgICB0ZXh0ICs9ICdcXG4nO1xuICAgICAgICB9IC8vIGFkZCBjb250ZW50IG9mIHRoaXMgbm9kZVxuXG5cbiAgICAgICAgdGV4dCArPSBjaGlsZHJlbltpXS50ZXh0Q29udGVudDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRleHQ7XG4gICAgfSAvLyByZW1vdmUgZXhpc3RpbmcgY29udGVudFxuXG5cbiAgICB0aGlzLmNsZWFyKCkuYnVpbGQodHJ1ZSk7XG5cbiAgICBpZiAodHlwZW9mIHRleHQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIGNhbGwgYmxvY2tcbiAgICAgIHRleHQuY2FsbCh0aGlzLCB0aGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gc3RvcmUgdGV4dCBhbmQgbWFrZSBzdXJlIHRleHQgaXMgbm90IGJsYW5rXG4gICAgICB0ZXh0ID0gKHRleHQgKyAnJykuc3BsaXQoJ1xcbicpOyAvLyBidWlsZCBuZXcgbGluZXNcblxuICAgICAgZm9yIChsZXQgaiA9IDAsIGpsID0gdGV4dC5sZW5ndGg7IGogPCBqbDsgaisrKSB7XG4gICAgICAgIHRoaXMubmV3TGluZSh0ZXh0W2pdKTtcbiAgICAgIH1cbiAgICB9IC8vIGRpc2FibGUgYnVpbGQgbW9kZSBhbmQgcmVidWlsZCBsaW5lc1xuXG5cbiAgICByZXR1cm4gdGhpcy5idWlsZChmYWxzZSkucmVidWlsZCgpO1xuICB9XG5cbn1cbmV4dGVuZChUZXh0LCB0ZXh0YWJsZSk7XG5yZWdpc3Rlck1ldGhvZHMoe1xuICBDb250YWluZXI6IHtcbiAgICAvLyBDcmVhdGUgdGV4dCBlbGVtZW50XG4gICAgdGV4dDogd3JhcFdpdGhBdHRyQ2hlY2soZnVuY3Rpb24gKHRleHQgPSAnJykge1xuICAgICAgcmV0dXJuIHRoaXMucHV0KG5ldyBUZXh0KCkpLnRleHQodGV4dCk7XG4gICAgfSksXG4gICAgLy8gQ3JlYXRlIHBsYWluIHRleHQgZWxlbWVudFxuICAgIHBsYWluOiB3cmFwV2l0aEF0dHJDaGVjayhmdW5jdGlvbiAodGV4dCA9ICcnKSB7XG4gICAgICByZXR1cm4gdGhpcy5wdXQobmV3IFRleHQoKSkucGxhaW4odGV4dCk7XG4gICAgfSlcbiAgfVxufSk7XG5yZWdpc3RlcihUZXh0LCAnVGV4dCcpO1xuXG5jbGFzcyBUc3BhbiBleHRlbmRzIFNoYXBlIHtcbiAgLy8gSW5pdGlhbGl6ZSBub2RlXG4gIGNvbnN0cnVjdG9yKG5vZGUsIGF0dHJzID0gbm9kZSkge1xuICAgIHN1cGVyKG5vZGVPck5ldygndHNwYW4nLCBub2RlKSwgYXR0cnMpO1xuICAgIHRoaXMuX2J1aWxkID0gZmFsc2U7IC8vIGRpc2FibGUgYnVpbGQgbW9kZSBmb3IgYWRkaW5nIG11bHRpcGxlIGxpbmVzXG4gIH0gLy8gU2hvcnRjdXQgZHhcblxuXG4gIGR4KGR4KSB7XG4gICAgcmV0dXJuIHRoaXMuYXR0cignZHgnLCBkeCk7XG4gIH0gLy8gU2hvcnRjdXQgZHlcblxuXG4gIGR5KGR5KSB7XG4gICAgcmV0dXJuIHRoaXMuYXR0cignZHknLCBkeSk7XG4gIH0gLy8gQ3JlYXRlIG5ldyBsaW5lXG5cblxuICBuZXdMaW5lKCkge1xuICAgIC8vIG1hcmsgbmV3IGxpbmVcbiAgICB0aGlzLmRvbS5uZXdMaW5lZCA9IHRydWU7IC8vIGZldGNoIHBhcmVudFxuXG4gICAgY29uc3QgdGV4dCA9IHRoaXMucGFyZW50KCk7IC8vIGVhcmx5IHJldHVybiBpbiBjYXNlIHdlIGFyZSBub3QgaW4gYSB0ZXh0IGVsZW1lbnRcblxuICAgIGlmICghKHRleHQgaW5zdGFuY2VvZiBUZXh0KSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgY29uc3QgaSA9IHRleHQuaW5kZXgodGhpcyk7XG4gICAgY29uc3QgZm9udFNpemUgPSBnbG9iYWxzLndpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMubm9kZSkuZ2V0UHJvcGVydHlWYWx1ZSgnZm9udC1zaXplJyk7XG4gICAgY29uc3QgZHkgPSB0ZXh0LmRvbS5sZWFkaW5nICogbmV3IFNWR051bWJlcihmb250U2l6ZSk7IC8vIGFwcGx5IG5ldyBwb3NpdGlvblxuXG4gICAgcmV0dXJuIHRoaXMuZHkoaSA/IGR5IDogMCkuYXR0cigneCcsIHRleHQueCgpKTtcbiAgfSAvLyBTZXQgdGV4dCBjb250ZW50XG5cblxuICB0ZXh0KHRleHQpIHtcbiAgICBpZiAodGV4dCA9PSBudWxsKSByZXR1cm4gdGhpcy5ub2RlLnRleHRDb250ZW50ICsgKHRoaXMuZG9tLm5ld0xpbmVkID8gJ1xcbicgOiAnJyk7XG5cbiAgICBpZiAodHlwZW9mIHRleHQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMuY2xlYXIoKS5idWlsZCh0cnVlKTtcbiAgICAgIHRleHQuY2FsbCh0aGlzLCB0aGlzKTtcbiAgICAgIHRoaXMuYnVpbGQoZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBsYWluKHRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbn1cbmV4dGVuZChUc3BhbiwgdGV4dGFibGUpO1xucmVnaXN0ZXJNZXRob2RzKHtcbiAgVHNwYW46IHtcbiAgICB0c3Bhbjogd3JhcFdpdGhBdHRyQ2hlY2soZnVuY3Rpb24gKHRleHQgPSAnJykge1xuICAgICAgY29uc3QgdHNwYW4gPSBuZXcgVHNwYW4oKTsgLy8gY2xlYXIgaWYgYnVpbGQgbW9kZSBpcyBkaXNhYmxlZFxuXG4gICAgICBpZiAoIXRoaXMuX2J1aWxkKSB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgIH0gLy8gYWRkIG5ldyB0c3BhblxuXG5cbiAgICAgIHJldHVybiB0aGlzLnB1dCh0c3BhbikudGV4dCh0ZXh0KTtcbiAgICB9KVxuICB9LFxuICBUZXh0OiB7XG4gICAgbmV3TGluZTogZnVuY3Rpb24gKHRleHQgPSAnJykge1xuICAgICAgcmV0dXJuIHRoaXMudHNwYW4odGV4dCkubmV3TGluZSgpO1xuICAgIH1cbiAgfVxufSk7XG5yZWdpc3RlcihUc3BhbiwgJ1RzcGFuJyk7XG5cbmNsYXNzIENpcmNsZSBleHRlbmRzIFNoYXBlIHtcbiAgY29uc3RydWN0b3Iobm9kZSwgYXR0cnMgPSBub2RlKSB7XG4gICAgc3VwZXIobm9kZU9yTmV3KCdjaXJjbGUnLCBub2RlKSwgYXR0cnMpO1xuICB9XG5cbiAgcmFkaXVzKHIpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyKCdyJywgcik7XG4gIH0gLy8gUmFkaXVzIHggdmFsdWVcblxuXG4gIHJ4KHJ4KSB7XG4gICAgcmV0dXJuIHRoaXMuYXR0cigncicsIHJ4KTtcbiAgfSAvLyBBbGlhcyByYWRpdXMgeCB2YWx1ZVxuXG5cbiAgcnkocnkpIHtcbiAgICByZXR1cm4gdGhpcy5yeChyeSk7XG4gIH1cblxuICBzaXplKHNpemUpIHtcbiAgICByZXR1cm4gdGhpcy5yYWRpdXMobmV3IFNWR051bWJlcihzaXplKS5kaXZpZGUoMikpO1xuICB9XG5cbn1cbmV4dGVuZChDaXJjbGUsIHtcbiAgeDogeCQzLFxuICB5OiB5JDMsXG4gIGN4OiBjeCQxLFxuICBjeTogY3kkMSxcbiAgd2lkdGg6IHdpZHRoJDIsXG4gIGhlaWdodDogaGVpZ2h0JDJcbn0pO1xucmVnaXN0ZXJNZXRob2RzKHtcbiAgQ29udGFpbmVyOiB7XG4gICAgLy8gQ3JlYXRlIGNpcmNsZSBlbGVtZW50XG4gICAgY2lyY2xlOiB3cmFwV2l0aEF0dHJDaGVjayhmdW5jdGlvbiAoc2l6ZSA9IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnB1dChuZXcgQ2lyY2xlKCkpLnNpemUoc2l6ZSkubW92ZSgwLCAwKTtcbiAgICB9KVxuICB9XG59KTtcbnJlZ2lzdGVyKENpcmNsZSwgJ0NpcmNsZScpO1xuXG5jbGFzcyBDbGlwUGF0aCBleHRlbmRzIENvbnRhaW5lciB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIGF0dHJzID0gbm9kZSkge1xuICAgIHN1cGVyKG5vZGVPck5ldygnY2xpcFBhdGgnLCBub2RlKSwgYXR0cnMpO1xuICB9IC8vIFVuY2xpcCBhbGwgY2xpcHBlZCBlbGVtZW50cyBhbmQgcmVtb3ZlIGl0c2VsZlxuXG5cbiAgcmVtb3ZlKCkge1xuICAgIC8vIHVuY2xpcCBhbGwgdGFyZ2V0c1xuICAgIHRoaXMudGFyZ2V0cygpLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICBlbC51bmNsaXAoKTtcbiAgICB9KTsgLy8gcmVtb3ZlIGNsaXBQYXRoIGZyb20gcGFyZW50XG5cbiAgICByZXR1cm4gc3VwZXIucmVtb3ZlKCk7XG4gIH1cblxuICB0YXJnZXRzKCkge1xuICAgIHJldHVybiBiYXNlRmluZCgnc3ZnIFtjbGlwLXBhdGgqPVwiJyArIHRoaXMuaWQoKSArICdcIl0nKTtcbiAgfVxuXG59XG5yZWdpc3Rlck1ldGhvZHMoe1xuICBDb250YWluZXI6IHtcbiAgICAvLyBDcmVhdGUgY2xpcHBpbmcgZWxlbWVudFxuICAgIGNsaXA6IHdyYXBXaXRoQXR0ckNoZWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLmRlZnMoKS5wdXQobmV3IENsaXBQYXRoKCkpO1xuICAgIH0pXG4gIH0sXG4gIEVsZW1lbnQ6IHtcbiAgICAvLyBEaXN0cmlidXRlIGNsaXBQYXRoIHRvIHN2ZyBlbGVtZW50XG4gICAgY2xpcHBlcigpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZSgnY2xpcC1wYXRoJyk7XG4gICAgfSxcblxuICAgIGNsaXBXaXRoKGVsZW1lbnQpIHtcbiAgICAgIC8vIHVzZSBnaXZlbiBjbGlwIG9yIGNyZWF0ZSBhIG5ldyBvbmVcbiAgICAgIGNvbnN0IGNsaXBwZXIgPSBlbGVtZW50IGluc3RhbmNlb2YgQ2xpcFBhdGggPyBlbGVtZW50IDogdGhpcy5wYXJlbnQoKS5jbGlwKCkuYWRkKGVsZW1lbnQpOyAvLyBhcHBseSBtYXNrXG5cbiAgICAgIHJldHVybiB0aGlzLmF0dHIoJ2NsaXAtcGF0aCcsICd1cmwoXCIjJyArIGNsaXBwZXIuaWQoKSArICdcIiknKTtcbiAgICB9LFxuXG4gICAgLy8gVW5jbGlwIGVsZW1lbnRcbiAgICB1bmNsaXAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5hdHRyKCdjbGlwLXBhdGgnLCBudWxsKTtcbiAgICB9XG5cbiAgfVxufSk7XG5yZWdpc3RlcihDbGlwUGF0aCwgJ0NsaXBQYXRoJyk7XG5cbmNsYXNzIEZvcmVpZ25PYmplY3QgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Iobm9kZSwgYXR0cnMgPSBub2RlKSB7XG4gICAgc3VwZXIobm9kZU9yTmV3KCdmb3JlaWduT2JqZWN0Jywgbm9kZSksIGF0dHJzKTtcbiAgfVxuXG59XG5yZWdpc3Rlck1ldGhvZHMoe1xuICBDb250YWluZXI6IHtcbiAgICBmb3JlaWduT2JqZWN0OiB3cmFwV2l0aEF0dHJDaGVjayhmdW5jdGlvbiAod2lkdGgsIGhlaWdodCkge1xuICAgICAgcmV0dXJuIHRoaXMucHV0KG5ldyBGb3JlaWduT2JqZWN0KCkpLnNpemUod2lkdGgsIGhlaWdodCk7XG4gICAgfSlcbiAgfVxufSk7XG5yZWdpc3RlcihGb3JlaWduT2JqZWN0LCAnRm9yZWlnbk9iamVjdCcpO1xuXG5mdW5jdGlvbiBkbW92ZShkeCwgZHkpIHtcbiAgdGhpcy5jaGlsZHJlbigpLmZvckVhY2goKGNoaWxkLCBpKSA9PiB7XG4gICAgbGV0IGJib3g7IC8vIFdlIGhhdmUgdG8gd3JhcCB0aGlzIGZvciBlbGVtZW50cyB0aGF0IGRvbnQgaGF2ZSBhIGJib3hcbiAgICAvLyBlLmcuIHRpdGxlIGFuZCBvdGhlciBkZXNjcmlwdGl2ZSBlbGVtZW50c1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vIEdldCB0aGUgY2hpbGRzIGJib3hcbiAgICAgIGJib3ggPSBjaGlsZC5iYm94KCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gR2V0IGNoaWxkcyBtYXRyaXhcblxuXG4gICAgY29uc3QgbSA9IG5ldyBNYXRyaXgoY2hpbGQpOyAvLyBUcmFuc2xhdGUgY2hpbGRzIG1hdHJpeCBieSBhbW91bnQgYW5kXG4gICAgLy8gdHJhbnNmb3JtIGl0IGJhY2sgaW50byBwYXJlbnRzIHNwYWNlXG5cbiAgICBjb25zdCBtYXRyaXggPSBtLnRyYW5zbGF0ZShkeCwgZHkpLnRyYW5zZm9ybShtLmludmVyc2UoKSk7IC8vIENhbGN1bGF0ZSBuZXcgeCBhbmQgeSBmcm9tIG9sZCBib3hcblxuICAgIGNvbnN0IHAgPSBuZXcgUG9pbnQoYmJveC54LCBiYm94LnkpLnRyYW5zZm9ybShtYXRyaXgpOyAvLyBNb3ZlIGVsZW1lbnRcblxuICAgIGNoaWxkLm1vdmUocC54LCBwLnkpO1xuICB9KTtcbiAgcmV0dXJuIHRoaXM7XG59XG5mdW5jdGlvbiBkeChkeCkge1xuICByZXR1cm4gdGhpcy5kbW92ZShkeCwgMCk7XG59XG5mdW5jdGlvbiBkeShkeSkge1xuICByZXR1cm4gdGhpcy5kbW92ZSgwLCBkeSk7XG59XG5mdW5jdGlvbiBoZWlnaHQoaGVpZ2h0LCBib3ggPSB0aGlzLmJib3goKSkge1xuICBpZiAoaGVpZ2h0ID09IG51bGwpIHJldHVybiBib3guaGVpZ2h0O1xuICByZXR1cm4gdGhpcy5zaXplKGJveC53aWR0aCwgaGVpZ2h0LCBib3gpO1xufVxuZnVuY3Rpb24gbW92ZSh4ID0gMCwgeSA9IDAsIGJveCA9IHRoaXMuYmJveCgpKSB7XG4gIGNvbnN0IGR4ID0geCAtIGJveC54O1xuICBjb25zdCBkeSA9IHkgLSBib3gueTtcbiAgcmV0dXJuIHRoaXMuZG1vdmUoZHgsIGR5KTtcbn1cbmZ1bmN0aW9uIHNpemUod2lkdGgsIGhlaWdodCwgYm94ID0gdGhpcy5iYm94KCkpIHtcbiAgY29uc3QgcCA9IHByb3BvcnRpb25hbFNpemUodGhpcywgd2lkdGgsIGhlaWdodCwgYm94KTtcbiAgY29uc3Qgc2NhbGVYID0gcC53aWR0aCAvIGJveC53aWR0aDtcbiAgY29uc3Qgc2NhbGVZID0gcC5oZWlnaHQgLyBib3guaGVpZ2h0O1xuICB0aGlzLmNoaWxkcmVuKCkuZm9yRWFjaCgoY2hpbGQsIGkpID0+IHtcbiAgICBjb25zdCBvID0gbmV3IFBvaW50KGJveCkudHJhbnNmb3JtKG5ldyBNYXRyaXgoY2hpbGQpLmludmVyc2UoKSk7XG4gICAgY2hpbGQuc2NhbGUoc2NhbGVYLCBzY2FsZVksIG8ueCwgby55KTtcbiAgfSk7XG4gIHJldHVybiB0aGlzO1xufVxuZnVuY3Rpb24gd2lkdGgod2lkdGgsIGJveCA9IHRoaXMuYmJveCgpKSB7XG4gIGlmICh3aWR0aCA9PSBudWxsKSByZXR1cm4gYm94LndpZHRoO1xuICByZXR1cm4gdGhpcy5zaXplKHdpZHRoLCBib3guaGVpZ2h0LCBib3gpO1xufVxuZnVuY3Rpb24geCh4LCBib3ggPSB0aGlzLmJib3goKSkge1xuICBpZiAoeCA9PSBudWxsKSByZXR1cm4gYm94Lng7XG4gIHJldHVybiB0aGlzLm1vdmUoeCwgYm94LnksIGJveCk7XG59XG5mdW5jdGlvbiB5KHksIGJveCA9IHRoaXMuYmJveCgpKSB7XG4gIGlmICh5ID09IG51bGwpIHJldHVybiBib3gueTtcbiAgcmV0dXJuIHRoaXMubW92ZShib3gueCwgeSwgYm94KTtcbn1cblxudmFyIGNvbnRhaW5lckdlb21ldHJ5ID0ge1xuICBfX3Byb3RvX186IG51bGwsXG4gIGRtb3ZlOiBkbW92ZSxcbiAgZHg6IGR4LFxuICBkeTogZHksXG4gIGhlaWdodDogaGVpZ2h0LFxuICBtb3ZlOiBtb3ZlLFxuICBzaXplOiBzaXplLFxuICB3aWR0aDogd2lkdGgsXG4gIHg6IHgsXG4gIHk6IHlcbn07XG5cbmNsYXNzIEcgZXh0ZW5kcyBDb250YWluZXIge1xuICBjb25zdHJ1Y3Rvcihub2RlLCBhdHRycyA9IG5vZGUpIHtcbiAgICBzdXBlcihub2RlT3JOZXcoJ2cnLCBub2RlKSwgYXR0cnMpO1xuICB9XG5cbn1cbmV4dGVuZChHLCBjb250YWluZXJHZW9tZXRyeSk7XG5yZWdpc3Rlck1ldGhvZHMoe1xuICBDb250YWluZXI6IHtcbiAgICAvLyBDcmVhdGUgYSBncm91cCBlbGVtZW50XG4gICAgZ3JvdXA6IHdyYXBXaXRoQXR0ckNoZWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLnB1dChuZXcgRygpKTtcbiAgICB9KVxuICB9XG59KTtcbnJlZ2lzdGVyKEcsICdHJyk7XG5cbmNsYXNzIEEgZXh0ZW5kcyBDb250YWluZXIge1xuICBjb25zdHJ1Y3Rvcihub2RlLCBhdHRycyA9IG5vZGUpIHtcbiAgICBzdXBlcihub2RlT3JOZXcoJ2EnLCBub2RlKSwgYXR0cnMpO1xuICB9IC8vIExpbmsgdGFyZ2V0IGF0dHJpYnV0ZVxuXG5cbiAgdGFyZ2V0KHRhcmdldCkge1xuICAgIHJldHVybiB0aGlzLmF0dHIoJ3RhcmdldCcsIHRhcmdldCk7XG4gIH0gLy8gTGluayB1cmxcblxuXG4gIHRvKHVybCkge1xuICAgIHJldHVybiB0aGlzLmF0dHIoJ2hyZWYnLCB1cmwsIHhsaW5rKTtcbiAgfVxuXG59XG5leHRlbmQoQSwgY29udGFpbmVyR2VvbWV0cnkpO1xucmVnaXN0ZXJNZXRob2RzKHtcbiAgQ29udGFpbmVyOiB7XG4gICAgLy8gQ3JlYXRlIGEgaHlwZXJsaW5rIGVsZW1lbnRcbiAgICBsaW5rOiB3cmFwV2l0aEF0dHJDaGVjayhmdW5jdGlvbiAodXJsKSB7XG4gICAgICByZXR1cm4gdGhpcy5wdXQobmV3IEEoKSkudG8odXJsKTtcbiAgICB9KVxuICB9LFxuICBFbGVtZW50OiB7XG4gICAgdW5saW5rKCkge1xuICAgICAgY29uc3QgbGluayA9IHRoaXMubGlua2VyKCk7XG4gICAgICBpZiAoIWxpbmspIHJldHVybiB0aGlzO1xuICAgICAgY29uc3QgcGFyZW50ID0gbGluay5wYXJlbnQoKTtcblxuICAgICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlKCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGluZGV4ID0gcGFyZW50LmluZGV4KGxpbmspO1xuICAgICAgcGFyZW50LmFkZCh0aGlzLCBpbmRleCk7XG4gICAgICBsaW5rLnJlbW92ZSgpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGxpbmtUbyh1cmwpIHtcbiAgICAgIC8vIHJldXNlIG9sZCBsaW5rIGlmIHBvc3NpYmxlXG4gICAgICBsZXQgbGluayA9IHRoaXMubGlua2VyKCk7XG5cbiAgICAgIGlmICghbGluaykge1xuICAgICAgICBsaW5rID0gbmV3IEEoKTtcbiAgICAgICAgdGhpcy53cmFwKGxpbmspO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB1cmwuY2FsbChsaW5rLCBsaW5rKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpbmsudG8odXJsKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGxpbmtlcigpIHtcbiAgICAgIGNvbnN0IGxpbmsgPSB0aGlzLnBhcmVudCgpO1xuXG4gICAgICBpZiAobGluayAmJiBsaW5rLm5vZGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2EnKSB7XG4gICAgICAgIHJldHVybiBsaW5rO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgfVxufSk7XG5yZWdpc3RlcihBLCAnQScpO1xuXG5jbGFzcyBNYXNrIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgLy8gSW5pdGlhbGl6ZSBub2RlXG4gIGNvbnN0cnVjdG9yKG5vZGUsIGF0dHJzID0gbm9kZSkge1xuICAgIHN1cGVyKG5vZGVPck5ldygnbWFzaycsIG5vZGUpLCBhdHRycyk7XG4gIH0gLy8gVW5tYXNrIGFsbCBtYXNrZWQgZWxlbWVudHMgYW5kIHJlbW92ZSBpdHNlbGZcblxuXG4gIHJlbW92ZSgpIHtcbiAgICAvLyB1bm1hc2sgYWxsIHRhcmdldHNcbiAgICB0aGlzLnRhcmdldHMoKS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgZWwudW5tYXNrKCk7XG4gICAgfSk7IC8vIHJlbW92ZSBtYXNrIGZyb20gcGFyZW50XG5cbiAgICByZXR1cm4gc3VwZXIucmVtb3ZlKCk7XG4gIH1cblxuICB0YXJnZXRzKCkge1xuICAgIHJldHVybiBiYXNlRmluZCgnc3ZnIFttYXNrKj1cIicgKyB0aGlzLmlkKCkgKyAnXCJdJyk7XG4gIH1cblxufVxucmVnaXN0ZXJNZXRob2RzKHtcbiAgQ29udGFpbmVyOiB7XG4gICAgbWFzazogd3JhcFdpdGhBdHRyQ2hlY2soZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGVmcygpLnB1dChuZXcgTWFzaygpKTtcbiAgICB9KVxuICB9LFxuICBFbGVtZW50OiB7XG4gICAgLy8gRGlzdHJpYnV0ZSBtYXNrIHRvIHN2ZyBlbGVtZW50XG4gICAgbWFza2VyKCkge1xuICAgICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlKCdtYXNrJyk7XG4gICAgfSxcblxuICAgIG1hc2tXaXRoKGVsZW1lbnQpIHtcbiAgICAgIC8vIHVzZSBnaXZlbiBtYXNrIG9yIGNyZWF0ZSBhIG5ldyBvbmVcbiAgICAgIGNvbnN0IG1hc2tlciA9IGVsZW1lbnQgaW5zdGFuY2VvZiBNYXNrID8gZWxlbWVudCA6IHRoaXMucGFyZW50KCkubWFzaygpLmFkZChlbGVtZW50KTsgLy8gYXBwbHkgbWFza1xuXG4gICAgICByZXR1cm4gdGhpcy5hdHRyKCdtYXNrJywgJ3VybChcIiMnICsgbWFza2VyLmlkKCkgKyAnXCIpJyk7XG4gICAgfSxcblxuICAgIC8vIFVubWFzayBlbGVtZW50XG4gICAgdW5tYXNrKCkge1xuICAgICAgcmV0dXJuIHRoaXMuYXR0cignbWFzaycsIG51bGwpO1xuICAgIH1cblxuICB9XG59KTtcbnJlZ2lzdGVyKE1hc2ssICdNYXNrJyk7XG5cbmNsYXNzIFN0b3AgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Iobm9kZSwgYXR0cnMgPSBub2RlKSB7XG4gICAgc3VwZXIobm9kZU9yTmV3KCdzdG9wJywgbm9kZSksIGF0dHJzKTtcbiAgfSAvLyBhZGQgY29sb3Igc3RvcHNcblxuXG4gIHVwZGF0ZShvKSB7XG4gICAgaWYgKHR5cGVvZiBvID09PSAnbnVtYmVyJyB8fCBvIGluc3RhbmNlb2YgU1ZHTnVtYmVyKSB7XG4gICAgICBvID0ge1xuICAgICAgICBvZmZzZXQ6IGFyZ3VtZW50c1swXSxcbiAgICAgICAgY29sb3I6IGFyZ3VtZW50c1sxXSxcbiAgICAgICAgb3BhY2l0eTogYXJndW1lbnRzWzJdXG4gICAgICB9O1xuICAgIH0gLy8gc2V0IGF0dHJpYnV0ZXNcblxuXG4gICAgaWYgKG8ub3BhY2l0eSAhPSBudWxsKSB0aGlzLmF0dHIoJ3N0b3Atb3BhY2l0eScsIG8ub3BhY2l0eSk7XG4gICAgaWYgKG8uY29sb3IgIT0gbnVsbCkgdGhpcy5hdHRyKCdzdG9wLWNvbG9yJywgby5jb2xvcik7XG4gICAgaWYgKG8ub2Zmc2V0ICE9IG51bGwpIHRoaXMuYXR0cignb2Zmc2V0JywgbmV3IFNWR051bWJlcihvLm9mZnNldCkpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbn1cbnJlZ2lzdGVyTWV0aG9kcyh7XG4gIEdyYWRpZW50OiB7XG4gICAgLy8gQWRkIGEgY29sb3Igc3RvcFxuICAgIHN0b3A6IGZ1bmN0aW9uIChvZmZzZXQsIGNvbG9yLCBvcGFjaXR5KSB7XG4gICAgICByZXR1cm4gdGhpcy5wdXQobmV3IFN0b3AoKSkudXBkYXRlKG9mZnNldCwgY29sb3IsIG9wYWNpdHkpO1xuICAgIH1cbiAgfVxufSk7XG5yZWdpc3RlcihTdG9wLCAnU3RvcCcpO1xuXG5mdW5jdGlvbiBjc3NSdWxlKHNlbGVjdG9yLCBydWxlKSB7XG4gIGlmICghc2VsZWN0b3IpIHJldHVybiAnJztcbiAgaWYgKCFydWxlKSByZXR1cm4gc2VsZWN0b3I7XG4gIGxldCByZXQgPSBzZWxlY3RvciArICd7JztcblxuICBmb3IgKGNvbnN0IGkgaW4gcnVsZSkge1xuICAgIHJldCArPSB1bkNhbWVsQ2FzZShpKSArICc6JyArIHJ1bGVbaV0gKyAnOyc7XG4gIH1cblxuICByZXQgKz0gJ30nO1xuICByZXR1cm4gcmV0O1xufVxuXG5jbGFzcyBTdHlsZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihub2RlLCBhdHRycyA9IG5vZGUpIHtcbiAgICBzdXBlcihub2RlT3JOZXcoJ3N0eWxlJywgbm9kZSksIGF0dHJzKTtcbiAgfVxuXG4gIGFkZFRleHQodyA9ICcnKSB7XG4gICAgdGhpcy5ub2RlLnRleHRDb250ZW50ICs9IHc7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBmb250KG5hbWUsIHNyYywgcGFyYW1zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlKCdAZm9udC1mYWNlJywge1xuICAgICAgZm9udEZhbWlseTogbmFtZSxcbiAgICAgIHNyYzogc3JjLFxuICAgICAgLi4ucGFyYW1zXG4gICAgfSk7XG4gIH1cblxuICBydWxlKHNlbGVjdG9yLCBvYmopIHtcbiAgICByZXR1cm4gdGhpcy5hZGRUZXh0KGNzc1J1bGUoc2VsZWN0b3IsIG9iaikpO1xuICB9XG5cbn1cbnJlZ2lzdGVyTWV0aG9kcygnRG9tJywge1xuICBzdHlsZShzZWxlY3Rvciwgb2JqKSB7XG4gICAgcmV0dXJuIHRoaXMucHV0KG5ldyBTdHlsZSgpKS5ydWxlKHNlbGVjdG9yLCBvYmopO1xuICB9LFxuXG4gIGZvbnRmYWNlKG5hbWUsIHNyYywgcGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMucHV0KG5ldyBTdHlsZSgpKS5mb250KG5hbWUsIHNyYywgcGFyYW1zKTtcbiAgfVxuXG59KTtcbnJlZ2lzdGVyKFN0eWxlLCAnU3R5bGUnKTtcblxuY2xhc3MgVGV4dFBhdGggZXh0ZW5kcyBUZXh0IHtcbiAgLy8gSW5pdGlhbGl6ZSBub2RlXG4gIGNvbnN0cnVjdG9yKG5vZGUsIGF0dHJzID0gbm9kZSkge1xuICAgIHN1cGVyKG5vZGVPck5ldygndGV4dFBhdGgnLCBub2RlKSwgYXR0cnMpO1xuICB9IC8vIHJldHVybiB0aGUgYXJyYXkgb2YgdGhlIHBhdGggdHJhY2sgZWxlbWVudFxuXG5cbiAgYXJyYXkoKSB7XG4gICAgY29uc3QgdHJhY2sgPSB0aGlzLnRyYWNrKCk7XG4gICAgcmV0dXJuIHRyYWNrID8gdHJhY2suYXJyYXkoKSA6IG51bGw7XG4gIH0gLy8gUGxvdCBwYXRoIGlmIGFueVxuXG5cbiAgcGxvdChkKSB7XG4gICAgY29uc3QgdHJhY2sgPSB0aGlzLnRyYWNrKCk7XG4gICAgbGV0IHBhdGhBcnJheSA9IG51bGw7XG5cbiAgICBpZiAodHJhY2spIHtcbiAgICAgIHBhdGhBcnJheSA9IHRyYWNrLnBsb3QoZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGQgPT0gbnVsbCA/IHBhdGhBcnJheSA6IHRoaXM7XG4gIH0gLy8gR2V0IHRoZSBwYXRoIGVsZW1lbnRcblxuXG4gIHRyYWNrKCkge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZSgnaHJlZicpO1xuICB9XG5cbn1cbnJlZ2lzdGVyTWV0aG9kcyh7XG4gIENvbnRhaW5lcjoge1xuICAgIHRleHRQYXRoOiB3cmFwV2l0aEF0dHJDaGVjayhmdW5jdGlvbiAodGV4dCwgcGF0aCkge1xuICAgICAgLy8gQ29udmVydCB0ZXh0IHRvIGluc3RhbmNlIGlmIG5lZWRlZFxuICAgICAgaWYgKCEodGV4dCBpbnN0YW5jZW9mIFRleHQpKSB7XG4gICAgICAgIHRleHQgPSB0aGlzLnRleHQodGV4dCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0ZXh0LnBhdGgocGF0aCk7XG4gICAgfSlcbiAgfSxcbiAgVGV4dDoge1xuICAgIC8vIENyZWF0ZSBwYXRoIGZvciB0ZXh0IHRvIHJ1biBvblxuICAgIHBhdGg6IHdyYXBXaXRoQXR0ckNoZWNrKGZ1bmN0aW9uICh0cmFjaywgaW1wb3J0Tm9kZXMgPSB0cnVlKSB7XG4gICAgICBjb25zdCB0ZXh0UGF0aCA9IG5ldyBUZXh0UGF0aCgpOyAvLyBpZiB0cmFjayBpcyBhIHBhdGgsIHJldXNlIGl0XG5cbiAgICAgIGlmICghKHRyYWNrIGluc3RhbmNlb2YgUGF0aCkpIHtcbiAgICAgICAgLy8gY3JlYXRlIHBhdGggZWxlbWVudFxuICAgICAgICB0cmFjayA9IHRoaXMuZGVmcygpLnBhdGgodHJhY2spO1xuICAgICAgfSAvLyBsaW5rIHRleHRQYXRoIHRvIHBhdGggYW5kIGFkZCBjb250ZW50XG5cblxuICAgICAgdGV4dFBhdGguYXR0cignaHJlZicsICcjJyArIHRyYWNrLCB4bGluayk7IC8vIFRyYW5zcGxhbnQgYWxsIG5vZGVzIGZyb20gdGV4dCB0byB0ZXh0UGF0aFxuXG4gICAgICBsZXQgbm9kZTtcblxuICAgICAgaWYgKGltcG9ydE5vZGVzKSB7XG4gICAgICAgIHdoaWxlIChub2RlID0gdGhpcy5ub2RlLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICB0ZXh0UGF0aC5ub2RlLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICB9XG4gICAgICB9IC8vIGFkZCB0ZXh0UGF0aCBlbGVtZW50IGFzIGNoaWxkIG5vZGUgYW5kIHJldHVybiB0ZXh0UGF0aFxuXG5cbiAgICAgIHJldHVybiB0aGlzLnB1dCh0ZXh0UGF0aCk7XG4gICAgfSksXG5cbiAgICAvLyBHZXQgdGhlIHRleHRQYXRoIGNoaWxkcmVuXG4gICAgdGV4dFBhdGgoKSB7XG4gICAgICByZXR1cm4gdGhpcy5maW5kT25lKCd0ZXh0UGF0aCcpO1xuICAgIH1cblxuICB9LFxuICBQYXRoOiB7XG4gICAgLy8gY3JlYXRlcyBhIHRleHRQYXRoIGZyb20gdGhpcyBwYXRoXG4gICAgdGV4dDogd3JhcFdpdGhBdHRyQ2hlY2soZnVuY3Rpb24gKHRleHQpIHtcbiAgICAgIC8vIENvbnZlcnQgdGV4dCB0byBpbnN0YW5jZSBpZiBuZWVkZWRcbiAgICAgIGlmICghKHRleHQgaW5zdGFuY2VvZiBUZXh0KSkge1xuICAgICAgICB0ZXh0ID0gbmV3IFRleHQoKS5hZGRUbyh0aGlzLnBhcmVudCgpKS50ZXh0KHRleHQpO1xuICAgICAgfSAvLyBDcmVhdGUgdGV4dFBhdGggZnJvbSB0ZXh0IGFuZCBwYXRoIGFuZCByZXR1cm5cblxuXG4gICAgICByZXR1cm4gdGV4dC5wYXRoKHRoaXMpO1xuICAgIH0pLFxuXG4gICAgdGFyZ2V0cygpIHtcbiAgICAgIHJldHVybiBiYXNlRmluZCgnc3ZnIHRleHRQYXRoJykuZmlsdGVyKG5vZGUgPT4ge1xuICAgICAgICByZXR1cm4gKG5vZGUuYXR0cignaHJlZicpIHx8ICcnKS5pbmNsdWRlcyh0aGlzLmlkKCkpO1xuICAgICAgfSk7IC8vIERvZXMgbm90IHdvcmsgaW4gSUUxMS4gVXNlIHdoZW4gSUUgc3VwcG9ydCBpcyBkcm9wcGVkXG4gICAgICAvLyByZXR1cm4gYmFzZUZpbmQoJ3N2ZyB0ZXh0UGF0aFsqfGhyZWYqPVwiJyArIHRoaXMuaWQoKSArICdcIl0nKVxuICAgIH1cblxuICB9XG59KTtcblRleHRQYXRoLnByb3RvdHlwZS5Nb3JwaEFycmF5ID0gUGF0aEFycmF5O1xucmVnaXN0ZXIoVGV4dFBhdGgsICdUZXh0UGF0aCcpO1xuXG5jbGFzcyBVc2UgZXh0ZW5kcyBTaGFwZSB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIGF0dHJzID0gbm9kZSkge1xuICAgIHN1cGVyKG5vZGVPck5ldygndXNlJywgbm9kZSksIGF0dHJzKTtcbiAgfSAvLyBVc2UgZWxlbWVudCBhcyBhIHJlZmVyZW5jZVxuXG5cbiAgdXNlKGVsZW1lbnQsIGZpbGUpIHtcbiAgICAvLyBTZXQgbGluZWQgZWxlbWVudFxuICAgIHJldHVybiB0aGlzLmF0dHIoJ2hyZWYnLCAoZmlsZSB8fCAnJykgKyAnIycgKyBlbGVtZW50LCB4bGluayk7XG4gIH1cblxufVxucmVnaXN0ZXJNZXRob2RzKHtcbiAgQ29udGFpbmVyOiB7XG4gICAgLy8gQ3JlYXRlIGEgdXNlIGVsZW1lbnRcbiAgICB1c2U6IHdyYXBXaXRoQXR0ckNoZWNrKGZ1bmN0aW9uIChlbGVtZW50LCBmaWxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5wdXQobmV3IFVzZSgpKS51c2UoZWxlbWVudCwgZmlsZSk7XG4gICAgfSlcbiAgfVxufSk7XG5yZWdpc3RlcihVc2UsICdVc2UnKTtcblxuLyogT3B0aW9uYWwgTW9kdWxlcyAqL1xuY29uc3QgU1ZHID0gbWFrZUluc3RhbmNlO1xuZXh0ZW5kKFtTdmcsIFN5bWJvbCwgSW1hZ2UsIFBhdHRlcm4sIE1hcmtlcl0sIGdldE1ldGhvZHNGb3IoJ3ZpZXdib3gnKSk7XG5leHRlbmQoW0xpbmUsIFBvbHlsaW5lLCBQb2x5Z29uLCBQYXRoXSwgZ2V0TWV0aG9kc0ZvcignbWFya2VyJykpO1xuZXh0ZW5kKFRleHQsIGdldE1ldGhvZHNGb3IoJ1RleHQnKSk7XG5leHRlbmQoUGF0aCwgZ2V0TWV0aG9kc0ZvcignUGF0aCcpKTtcbmV4dGVuZChEZWZzLCBnZXRNZXRob2RzRm9yKCdEZWZzJykpO1xuZXh0ZW5kKFtUZXh0LCBUc3Bhbl0sIGdldE1ldGhvZHNGb3IoJ1RzcGFuJykpO1xuZXh0ZW5kKFtSZWN0LCBFbGxpcHNlLCBHcmFkaWVudCwgUnVubmVyXSwgZ2V0TWV0aG9kc0ZvcigncmFkaXVzJykpO1xuZXh0ZW5kKEV2ZW50VGFyZ2V0LCBnZXRNZXRob2RzRm9yKCdFdmVudFRhcmdldCcpKTtcbmV4dGVuZChEb20sIGdldE1ldGhvZHNGb3IoJ0RvbScpKTtcbmV4dGVuZChFbGVtZW50LCBnZXRNZXRob2RzRm9yKCdFbGVtZW50JykpO1xuZXh0ZW5kKFNoYXBlLCBnZXRNZXRob2RzRm9yKCdTaGFwZScpKTtcbmV4dGVuZChbQ29udGFpbmVyLCBGcmFnbWVudF0sIGdldE1ldGhvZHNGb3IoJ0NvbnRhaW5lcicpKTtcbmV4dGVuZChHcmFkaWVudCwgZ2V0TWV0aG9kc0ZvcignR3JhZGllbnQnKSk7XG5leHRlbmQoUnVubmVyLCBnZXRNZXRob2RzRm9yKCdSdW5uZXInKSk7XG5MaXN0LmV4dGVuZChnZXRNZXRob2ROYW1lcygpKTtcbnJlZ2lzdGVyTW9ycGhhYmxlVHlwZShbU1ZHTnVtYmVyLCBDb2xvciwgQm94LCBNYXRyaXgsIFNWR0FycmF5LCBQb2ludEFycmF5LCBQYXRoQXJyYXksIFBvaW50XSk7XG5tYWtlTW9ycGhhYmxlKCk7XG5cbmV4cG9ydCB7IEEsIEFuaW1hdG9yLCBTVkdBcnJheSBhcyBBcnJheSwgQm94LCBDaXJjbGUsIENsaXBQYXRoLCBDb2xvciwgQ29udGFpbmVyLCBDb250cm9sbGVyLCBEZWZzLCBEb20sIEVhc2UsIEVsZW1lbnQsIEVsbGlwc2UsIEV2ZW50VGFyZ2V0LCBGb3JlaWduT2JqZWN0LCBGcmFnbWVudCwgRywgR3JhZGllbnQsIEltYWdlLCBMaW5lLCBMaXN0LCBNYXJrZXIsIE1hc2ssIE1hdHJpeCwgTW9ycGhhYmxlLCBOb25Nb3JwaGFibGUsIFNWR051bWJlciBhcyBOdW1iZXIsIE9iamVjdEJhZywgUElELCBQYXRoLCBQYXRoQXJyYXksIFBhdHRlcm4sIFBvaW50LCBQb2ludEFycmF5LCBQb2x5Z29uLCBQb2x5bGluZSwgUXVldWUsIFJlY3QsIFJ1bm5lciwgU1ZHLCBTaGFwZSwgU3ByaW5nLCBTdG9wLCBTdHlsZSwgU3ZnLCBTeW1ib2wsIFRleHQsIFRleHRQYXRoLCBUaW1lbGluZSwgVHJhbnNmb3JtQmFnLCBUc3BhbiwgVXNlLCBhZG9wdCwgYXNzaWduTmV3SWQsIGNsZWFyRXZlbnRzLCBjcmVhdGUsIGRlZmF1bHRzLCBkaXNwYXRjaCwgZWFzaW5nLCBlaWQsIGV4dGVuZCwgYmFzZUZpbmQgYXMgZmluZCwgZ2V0Q2xhc3MsIGdldEV2ZW50VGFyZ2V0LCBnZXRFdmVudHMsIGdldFdpbmRvdywgbWFrZUluc3RhbmNlLCBtYWtlTW9ycGhhYmxlLCBtb2NrQWRvcHQsIG5hbWVzcGFjZXMsIG5vZGVPck5ldywgb2ZmLCBvbiwgcGFyc2VyLCByZWdleCwgcmVnaXN0ZXIsIHJlZ2lzdGVyTW9ycGhhYmxlVHlwZSwgcmVnaXN0ZXJXaW5kb3csIHJlc3RvcmVXaW5kb3csIHJvb3QsIHNhdmVXaW5kb3csIHV0aWxzLCB3aW5kb3dFdmVudHMsIHdpdGhXaW5kb3csIHdyYXBXaXRoQXR0ckNoZWNrIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdmcuZXNtLmpzLm1hcFxuIiwiaW1wb3J0IHsgU1ZHLCBTdmcsIEcsIENvbnRhaW5lciwgUmVjdCwgVGV4dCwgQm94LCBDaXJjbGUsIE51bWJlciwgQSB9IGZyb20gJ0Bzdmdkb3Rqcy9zdmcuanMnXG5cbmVudW0gUm9sZVR5cGUge1xuICAgIGJ1dHRvbiA9IFwiYnV0dG9uXCIsXG4gICAgZ3JvdXAgPSBcImdyb3VwXCIsXG4gICAgaGVhZGluZyA9IFwiaGVhZGluZ1wiLFxuICAgIG5vbmUgPSBcIm5vbmVcIixcbiAgICBzY3JvbGxiYXIgPSBcInNjcm9sbGJhclwiLFxuICAgIHdpbmRvdyA9IFwid2luZG93XCIsXG59XG5cbmludGVyZmFjZSBJQWNjZXNzaWJpbGl0eSB7XG4gICAgc2V0IHJvbGUocm9sZTogUm9sZVR5cGUpO1xuICAgIGdldCByb2xlKCk6IFJvbGVUeXBlO1xufVxuXG5pbnRlcmZhY2UgV2lkZ2V0U3RhdGUge1xuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgdGhlIHdpZGdldCBlbnRlciBldmVudC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gY29tcG9uZW50IFRoZSB3aWRnZXQgYmVpbmcgaW50ZXJhY3RlZCB3aXRoLlxuICAgICAqL1xuICAgIG9uRW50ZXIoY29tcG9uZW50OiBDb21wb25lbnQpOiB2b2lkO1xuXG4gICAgLyoqXG4gICAgICogSGFuZGxlcyB0aGUgd2lkZ2V0IGxlYXZlIGV2ZW50LlxuICAgICAqIFxuICAgICAqIEBwYXJhbSBjb21wb25lbnQgVGhlIHdpZGdldCBiZWluZyBpbnRlcmFjdGVkIHdpdGguXG4gICAgICovXG4gICAgb25MZWF2ZShjb21wb25lbnQ6IENvbXBvbmVudCk6IHZvaWQ7XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIHRoZSB3aWRnZXQgcHJlc3MgZXZlbnQuXG4gICAgICogXG4gICAgICogQHBhcmFtIGNvbXBvbmVudCBUaGUgd2lkZ2V0IGJlaW5nIGludGVyYWN0ZWQgd2l0aC5cbiAgICAgKi9cbiAgICBvblByZXNzKGNvbXBvbmVudDogQ29tcG9uZW50KTogdm9pZDtcblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgdGhlIHdpZGdldCByZWxlYXNlIGV2ZW50LlxuICAgICAqIFxuICAgICAqIEBwYXJhbSBjb21wb25lbnQgVGhlIHdpZGdldCBiZWluZyBpbnRlcmFjdGVkIHdpdGguXG4gICAgICovXG4gICAgb25SZWxlYXNlKGNvbXBvbmVudDogQ29tcG9uZW50KTogdm9pZDtcblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgdGhlIG1vdXNlIG1vdmUgd2l0aGluIHdpZGdldCBldmVudC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gY29tcG9uZW50IFRoZSB3aWRnZXQgYmVpbmcgaW50ZXJhY3RlZCB3aXRoLlxuICAgICAqL1xuICAgIG9uTW92ZShjb21wb25lbnQ6IENvbXBvbmVudCk6IHZvaWQ7XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIHRoZSBrZXl1cCBldmVudC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gY29tcG9uZW50IFRoZSB3aWRnZXQgYmVpbmcgaW50ZXJhY3RlZCB3aXRoLlxuICAgICAqL1xuICAgIG9uS2V5dXAoY29tcG9uZW50OiBDb21wb25lbnQpOiB2b2lkO1xufVxuXG5jbGFzcyBJZGxlVXBXaWRnZXRTdGF0ZSBpbXBsZW1lbnRzIFdpZGdldFN0YXRlIHtcblxuICAgIHB1YmxpYyBvbkVudGVyKGNvbXBvbmVudDogQ29tcG9uZW50KTogdm9pZCB7XG4gICAgICAgIGlmIChjb21wb25lbnQucGFyZW50LmdldFN0YXRlKCkgaW5zdGFuY2VvZiBJZGxlRG93bldpZGdldFN0YXRlKXtcbiAgICAgICAgICAgIGNvbXBvbmVudC5zZXRTdGF0ZShuZXcgSG92ZXJQcmVzc2VkV2lkZ2V0U3RhdGUoKSk7XG4gICAgICAgICAgICBjb21wb25lbnQuaG92ZXJQcmVzc2VkU3RhdGUoKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjb21wb25lbnQuc2V0U3RhdGUobmV3IEhvdmVyV2lkZ2V0U3RhdGUoKSk7XG4gICAgICAgICAgICBjb21wb25lbnQuaG92ZXJTdGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uTGVhdmUoY29tcG9uZW50OiBDb21wb25lbnQpOiB2b2lkIHsgfVxuXG4gICAgcHVibGljIG9uUHJlc3MoY29tcG9uZW50OiBDb21wb25lbnQpOiB2b2lkIHtcbiAgICAgICAgY29tcG9uZW50LnNldFN0YXRlKG5ldyBJZGxlRG93bldpZGdldFN0YXRlKCkpO1xuICAgICAgICBjb21wb25lbnQuaWRsZWRvd25TdGF0ZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblJlbGVhc2UoY29tcG9uZW50OiBDb21wb25lbnQpOiB2b2lkIHsgfVxuXG4gICAgcHVibGljIG9uTW92ZShjb21wb25lbnQ6IENvbXBvbmVudCk6IHZvaWQge1xuICAgIH1cbiAgICBwdWJsaWMgb25LZXl1cChjb21wb25lbnQ6IENvbXBvbmVudCk6IHZvaWQge1xuICAgICAgICBjb21wb25lbnQua2V5dXBTdGF0ZSgpO1xuICAgIH1cbn1cblxuY2xhc3MgSWRsZURvd25XaWRnZXRTdGF0ZSBpbXBsZW1lbnRzIFdpZGdldFN0YXRlIHtcblxuICAgIHB1YmxpYyBvbkVudGVyKGNvbXBvbmVudDogQ29tcG9uZW50KTogdm9pZCB7IH1cbiAgICBwdWJsaWMgb25MZWF2ZShjb21wb25lbnQ6IENvbXBvbmVudCk6IHZvaWQgeyB9XG4gICAgcHVibGljIG9uUHJlc3MoY29tcG9uZW50OiBDb21wb25lbnQpOiB2b2lkIHsgfVxuXG4gICAgcHVibGljIG9uUmVsZWFzZShjb21wb25lbnQ6IENvbXBvbmVudCk6IHZvaWQge1xuICAgICAgICBjb21wb25lbnQuc2V0U3RhdGUobmV3IElkbGVVcFdpZGdldFN0YXRlKCkpO1xuICAgICAgICBjb21wb25lbnQuaWRsZXVwU3RhdGUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25Nb3ZlKGNvbXBvbmVudDogQ29tcG9uZW50KTogdm9pZCB7XG4gICAgICAgIGNvbXBvbmVudC5tb3ZlU3RhdGUoKTtcbiAgICB9XG4gICAgcHVibGljIG9uS2V5dXAoY29tcG9uZW50OiBDb21wb25lbnQpOiB2b2lkIHtcbiAgICB9XG59XG5cbmNsYXNzIEhvdmVyV2lkZ2V0U3RhdGUgaW1wbGVtZW50cyBXaWRnZXRTdGF0ZSB7XG5cbiAgICBwdWJsaWMgb25FbnRlcihjb21wb25lbnQ6IENvbXBvbmVudCkge1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkxlYXZlKGNvbXBvbmVudDogQ29tcG9uZW50KSB7XG4gICAgICAgIGNvbXBvbmVudC5zZXRTdGF0ZShuZXcgSWRsZVVwV2lkZ2V0U3RhdGUoKSk7XG4gICAgICAgIGNvbXBvbmVudC5pZGxldXBTdGF0ZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblByZXNzKGNvbXBvbmVudDogQ29tcG9uZW50KSB7XG4gICAgICAgIGNvbXBvbmVudC5zZXRTdGF0ZShuZXcgUHJlc3NlZFdpZGdldFN0YXRlKCkpO1xuICAgICAgICBjb21wb25lbnQucHJlc3NlZFN0YXRlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uUmVsZWFzZShjb21wb25lbnQ6IENvbXBvbmVudCkge1xuICAgIH1cblxuICAgIHB1YmxpYyBvbk1vdmUoY29tcG9uZW50OiBDb21wb25lbnQpOiB2b2lkIHsgfVxuICAgIHB1YmxpYyBvbktleXVwKGNvbXBvbmVudDogQ29tcG9uZW50KTogdm9pZCB7XG4gICAgfVxufVxuXG5jbGFzcyBIb3ZlclByZXNzZWRXaWRnZXRTdGF0ZSBpbXBsZW1lbnRzIFdpZGdldFN0YXRlIHtcblxuICAgIHB1YmxpYyBvbkVudGVyKGNvbXBvbmVudDogQ29tcG9uZW50KSB7IH1cblxuICAgIHB1YmxpYyBvbkxlYXZlKGNvbXBvbmVudDogQ29tcG9uZW50KSB7XG4gICAgICAgIGNvbXBvbmVudC5zZXRTdGF0ZShuZXcgSWRsZVVwV2lkZ2V0U3RhdGUoKSk7XG4gICAgICAgIGNvbXBvbmVudC5pZGxldXBTdGF0ZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblByZXNzKGNvbXBvbmVudDogQ29tcG9uZW50KSB7IH1cblxuICAgIHB1YmxpYyBvblJlbGVhc2UoY29tcG9uZW50OiBDb21wb25lbnQpIHtcbiAgICAgICAgY29tcG9uZW50LnNldFN0YXRlKG5ldyBIb3ZlcldpZGdldFN0YXRlKCkpO1xuICAgICAgICBjb21wb25lbnQuaG92ZXJTdGF0ZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbk1vdmUoY29tcG9uZW50OiBDb21wb25lbnQpOiB2b2lkIHsgfVxuICAgIHB1YmxpYyBvbktleXVwKGNvbXBvbmVudDogQ29tcG9uZW50KTogdm9pZCB7XG4gICAgfVxufVxuXG5jbGFzcyBQcmVzc2VkV2lkZ2V0U3RhdGUgaW1wbGVtZW50cyBXaWRnZXRTdGF0ZSB7XG5cbiAgICBwdWJsaWMgb25FbnRlcihjb21wb25lbnQ6IENvbXBvbmVudCkge1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkxlYXZlKGNvbXBvbmVudDogQ29tcG9uZW50KSB7XG4gICAgICAgIGNvbXBvbmVudC5zZXRTdGF0ZShuZXcgUHJlc3NlZE91dFdpZGdldFN0YXRlKCkpO1xuICAgICAgICBjb21wb25lbnQucHJlc3NlZG91dFN0YXRlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uUHJlc3MoY29tcG9uZW50OiBDb21wb25lbnQpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25SZWxlYXNlKGNvbXBvbmVudDogQ29tcG9uZW50KSB7XG4gICAgICAgIGNvbXBvbmVudC5zZXRTdGF0ZShuZXcgSG92ZXJXaWRnZXRTdGF0ZSgpKTtcbiAgICAgICAgY29tcG9uZW50LnByZXNzUmVsZWFzZVN0YXRlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uTW92ZShjb21wb25lbnQ6IENvbXBvbmVudCk6IHZvaWQge1xuICAgICAgICBpZiAoY29tcG9uZW50LmlzRHJhZ2dhYmxlKXtcbiAgICAgICAgICAgIGNvbXBvbmVudC5zZXRTdGF0ZShuZXcgRHJhZ1dpbmRvd1N0YXRlKCkpO1xuICAgICAgICAgICAgY29tcG9uZW50Lm1vdmVTdGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBvbktleXVwKGNvbXBvbmVudDogQ29tcG9uZW50KTogdm9pZCB7XG5cbiAgICB9XG59XG5cbmNsYXNzIFByZXNzZWRPdXRXaWRnZXRTdGF0ZSBpbXBsZW1lbnRzIFdpZGdldFN0YXRlIHtcblxuICAgIHB1YmxpYyBvbkVudGVyKGNvbXBvbmVudDogQ29tcG9uZW50KSB7XG4gICAgICAgIGNvbXBvbmVudC5zZXRTdGF0ZShuZXcgUHJlc3NlZFdpZGdldFN0YXRlKCkpO1xuICAgICAgICBjb21wb25lbnQucHJlc3NlZFN0YXRlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uTGVhdmUoY29tcG9uZW50OiBDb21wb25lbnQpIHsgfVxuXG4gICAgcHVibGljIG9uUHJlc3MoY29tcG9uZW50OiBDb21wb25lbnQpIHsgfVxuXG4gICAgcHVibGljIG9uUmVsZWFzZShjb21wb25lbnQ6IENvbXBvbmVudCkge1xuICAgICAgICBjb21wb25lbnQuc2V0U3RhdGUobmV3IElkbGVVcFdpZGdldFN0YXRlKCkpO1xuICAgICAgICBjb21wb25lbnQuaWRsZXVwU3RhdGUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25Nb3ZlKGNvbXBvbmVudDogQ29tcG9uZW50KTogdm9pZCB7XG4gICAgICAgIGlmIChjb21wb25lbnQuaXNEcmFnZ2FibGUpe1xuICAgICAgICAgICAgY29tcG9uZW50Lm1vdmVTdGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBvbktleXVwKGNvbXBvbmVudDogQ29tcG9uZW50KTogdm9pZCB7XG4gICAgfVxufVxuXG5jbGFzcyBEcmFnV2luZG93U3RhdGUgaW1wbGVtZW50cyBXaWRnZXRTdGF0ZSB7XG4gICAgb25FbnRlcihjb21wb25lbnQ6IENvbXBvbmVudCk6IHZvaWQgeyB9XG5cbiAgICBvbkxlYXZlKGNvbXBvbmVudDogQ29tcG9uZW50KTogdm9pZCB7XG4gICAgICAgIGNvbXBvbmVudC5zZXRTdGF0ZShuZXcgUHJlc3NlZE91dFdpZGdldFN0YXRlKCkpXG4gICAgICAgIGNvbXBvbmVudC5wcmVzc2Vkb3V0U3RhdGUoKTtcbiAgICB9XG4gICAgb25QcmVzcyhjb21wb25lbnQ6IENvbXBvbmVudCk6IHZvaWQgeyB9XG5cbiAgICBvblJlbGVhc2UoY29tcG9uZW50OiBDb21wb25lbnQpOiB2b2lkIHtcbiAgICAgICAgY29tcG9uZW50LnNldFN0YXRlKG5ldyBIb3ZlcldpZGdldFN0YXRlKCkpO1xuICAgICAgICBjb21wb25lbnQuaG92ZXJTdGF0ZSgpO1xuICAgIH1cbiAgICBvbk1vdmUoY29tcG9uZW50OiBDb21wb25lbnQpOiB2b2lkIHtcbiAgICAgICAgY29tcG9uZW50Lm1vdmVTdGF0ZSgpOyAgICAgICAgXG4gICAgfVxuICAgIG9uS2V5dXAoY29tcG9uZW50OiBDb21wb25lbnQpOiB2b2lkIHsgfVxufVxuXG5jbGFzcyBLZXlwcmVzc1dpZGdldFN0YXRlIGltcGxlbWVudHMgV2lkZ2V0U3RhdGV7XG4gICAgb25FbnRlcihjb21wb25lbnQ6IENvbXBvbmVudCk6IHZvaWQgeyB9XG4gICAgb25MZWF2ZShjb21wb25lbnQ6IENvbXBvbmVudCk6IHZvaWQgeyB9XG4gICAgb25QcmVzcyhjb21wb25lbnQ6IENvbXBvbmVudCk6IHZvaWQgeyB9XG4gICAgb25SZWxlYXNlKGNvbXBvbmVudDogQ29tcG9uZW50KTogdm9pZCB7IH1cbiAgICBvbk1vdmUoY29tcG9uZW50OiBDb21wb25lbnQpOiB2b2lkIHsgfVxuICAgIG9uS2V5dXAoY29tcG9uZW50OiBDb21wb25lbnQpOiB2b2lkIHtcbiAgICAgICAgY29tcG9uZW50LmtleXVwU3RhdGUoKTtcbiAgICB9XG59XG4vKipcbiAqIEEgc2ltcGxlIGNsYXNzIGZvciBwYXNzaW5nIGV2ZW50IGFyZ3VtZW50cyBjb250YWluaW5nIGFuIG9iamVjdCwgZXZlbnQsIGFuZCBhbiBvcHRpb25hbCBpdGVtIHJlZmVyZW5jZS5cbiAqL1xuY2xhc3MgRXZlbnRBcmdzIHtcbiAgICBwcml2YXRlIF9ldmVudDogYW55O1xuICAgIHByaXZhdGUgX29iajogQ29tcG9uZW50O1xuICAgIHByaXZhdGUgX2l0ZW1SZWY6IGFueTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgRXZlbnRBcmdzIGluc3RhbmNlLlxuICAgICAqIEBwYXJhbSBvYmogVGhlIG9iamVjdCBhc3NvY2lhdGVkIHdpdGggdGhlIGV2ZW50LlxuICAgICAqIEBwYXJhbSBldmVudCAoT3B0aW9uYWwpIFRoZSBldmVudCB0aGF0IG9jY3VycmVkLlxuICAgICAqIEBwYXJhbSBpdGVtUmVmIChPcHRpb25hbCkgQSByZWZlcmVuY2UgdG8gdGhlIGl0ZW0gYXNzb2NpYXRlZCB3aXRoIHRoZSBldmVudC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihvYmo6IENvbXBvbmVudCwgZXZlbnQ/OiBhbnksIGl0ZW1SZWY/OiBhbnkpIHtcbiAgICAgICAgdGhpcy5fZXZlbnQgPSBldmVudDtcbiAgICAgICAgdGhpcy5fb2JqID0gb2JqO1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1SZWYgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aGlzLl9pdGVtUmVmID0gaXRlbVJlZjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGV2ZW50IGFzc29jaWF0ZWQgd2l0aCB0aGUgRXZlbnRBcmdzIGluc3RhbmNlLlxuICAgICAqL1xuICAgIGdldCBldmVudCgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXZlbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgb2JqZWN0IGFzc29jaWF0ZWQgd2l0aCB0aGUgRXZlbnRBcmdzIGluc3RhbmNlLlxuICAgICAqL1xuICAgIGdldCBvYmooKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29iajtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBpdGVtIHJlZmVyZW5jZSBhc3NvY2lhdGVkIHdpdGggdGhlIEV2ZW50QXJncyBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBnZXQgaXRlbVJlZigpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXRlbVJlZjtcbiAgICB9XG59XG5cbmFic3RyYWN0IGNsYXNzIENvbXBvbmVudCBpbXBsZW1lbnRzIElBY2Nlc3NpYmlsaXR5IHtcbiAgICBwdWJsaWMgdGFiaW5kZXg6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfaGFuZGxlcnM6IHsgKGV2ZW50OiBFdmVudEFyZ3MpOiB2b2lkOyB9W10gPSBbXTtcbiAgICBwcm90ZWN0ZWQgX2lzc2VsZWN0YWJsZTogYm9vbGVhbjtcbiAgICBwcm90ZWN0ZWQgc3RhdGU6IFdpZGdldFN0YXRlO1xuXG4gICAgcHVibGljIHByZXZpb3VzU3RhdGU6IFdpZGdldFN0YXRlIHwgbnVsbCA9IG51bGw7XG4gICAgcHVibGljIHBhcmVudDogQ29tcG9uZW50O1xuICAgIHB1YmxpYyBvdXRlclN2ZzogQ29udGFpbmVyO1xuXG4gICAgLyoqXG4gICAgICogZmxhZyB0cnVlIGlmIHdpZGdldCBuZWVkcyB0byBzdXBwb3J0IGEgZHJhZ2dhYmxlIHN0YXRlIGUuZy4sIHNjcm9sbGJhclxuICAgICAqL1xuICAgIHB1YmxpYyBpc0RyYWdnYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgLyogYWNjZXNzaWJpbGl0eSBwcm9wZXJ0aWVzICovXG4gICAgcHJvdGVjdGVkIF9yb2xlOiBSb2xlVHlwZSA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG4gICAgLypcbiAgICAgICAgQWNjZXNzaWJpbGl0eSBpcyBvcGluaW9uYXRlZC4gSWYgcm9sZSBpcyBub3Qgc2V0LCB0aHJvdyBlcnJvci5cbiAgICAqL1xuICAgIHNldCByb2xlKHJvbGU6IFJvbGVUeXBlKSB7XG4gICAgICAgIHRoaXMuX3JvbGUgPSByb2xlO1xuICAgIH1cbiAgICBnZXQgcm9sZSgpOiBSb2xlVHlwZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yb2xlO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFNlbGVjdGFibGUgaXMgYSBmbGFnIHRvIGNvbnRyb2wgd2hldGhlciBvciBub3QgYSB3aWRnZXQgZ2V0cyBzZWxlY3RlZCBvbiBhIGJyb3dzZXIgZHJhZyBhY3Rpb24uXG4gICAgICAgIEdlbmVyYWxseSwgdGhpcyBzaG91bGQgYmUgc2V0IHRvIGZhbHNlIGZvciB3aWRnZXRzIGxpa2UgYSBidXR0b24sIGJ1dCB0cnVlIGZvciB3aWRnZXRzIHRoYXQgc3VwcG9ydFxuICAgICAgICB0ZXh0IGlucHV0XG4gICAgKi9cbiAgICBzZXQgc2VsZWN0YWJsZSh2YWw6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5faXNzZWxlY3RhYmxlID0gdmFsO1xuICAgIH1cblxuICAgIGdldCBzZWxlY3RhYmxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNzZWxlY3RhYmxlO1xuICAgIH1cblxuICAgIGF0dGFjaChoYW5kbGVyOiB7IChldmVudDogRXZlbnRBcmdzKTogdm9pZCB9KTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gICAgfVxuXG4gICAgcmFpc2UoZXZlbnQ6IEV2ZW50QXJncykge1xuICAgICAgICB0aGlzLl9oYW5kbGVycy5zbGljZSgwKS5mb3JFYWNoKGggPT4gaChldmVudCkpO1xuICAgIH1cblxuICAgIG1vdmUoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMub3V0ZXJTdmcgIT0gbnVsbClcbiAgICAgICAgICAgIHRoaXMub3V0ZXJTdmcubW92ZSh4LCB5KTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG4gICAgcHVibGljIGdldFN0YXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZTtcbiAgICB9XG4gICAgcHVibGljIHNldFN0YXRlKHN0YXRlOiBXaWRnZXRTdGF0ZSkge1xuICAgICAgICB0aGlzLnByZXZpb3VzU3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgfVxuXG4gICAgLyogb3ZlcnJpZGUgdG8gaGFuZGxlIGdyYXBoaWNhbCB1cGRhdGVzIGluIGRlcml2ZWQgd2lkZ2V0cyAqL1xuICAgIHByb3RlY3RlZCB1cGRhdGUoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnJvbGUgIT0gbnVsbClcbiAgICAgICAgICAgIHRoaXMub3V0ZXJTdmcuYXR0cih7XG4gICAgICAgICAgICAgICAgcm9sZTogdGhpcy5yb2xlLFxuICAgICAgICAgICAgICAgIHRhYmluZGV4OiB0aGlzLnRhYmluZGV4XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBcmlhIFJvbGUgbm90IGltcGxlbWVudGVkLicpO1xuICAgIH1cblxuICAgIGFic3RyYWN0IGlkbGV1cFN0YXRlKCk6IHZvaWQ7XG4gICAgYWJzdHJhY3QgaWRsZWRvd25TdGF0ZSgpOiB2b2lkO1xuICAgIGFic3RyYWN0IHByZXNzZWRTdGF0ZSgpOiB2b2lkO1xuICAgIGFic3RyYWN0IHByZXNzUmVsZWFzZVN0YXRlKCk6IHZvaWQ7XG4gICAgYWJzdHJhY3QgaG92ZXJTdGF0ZSgpOiB2b2lkO1xuICAgIGFic3RyYWN0IGhvdmVyUHJlc3NlZFN0YXRlKCk6IHZvaWQ7XG4gICAgYWJzdHJhY3QgcHJlc3NlZG91dFN0YXRlKCk6IHZvaWQ7XG4gICAgYWJzdHJhY3QgbW92ZVN0YXRlKCk6IHZvaWQ7XG4gICAgYWJzdHJhY3Qga2V5dXBTdGF0ZShrZXlFdmVudD86IEtleWJvYXJkRXZlbnQpOiB2b2lkO1xufVxuXG5jbGFzcyBXaW5kb3cgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHByaXZhdGUgX3dpbmRvdzogU3ZnO1xuICAgIHByaXZhdGUgb2JzZXJ2ZXJzOiBBcnJheTwoc3RhdGU6V2lkZ2V0U3RhdGUpID0+IHZvaWQ+O1xuICAgIHB1YmxpYyBrZXlFdmVudDogS2V5Ym9hcmRFdmVudCB8IG51bGwgPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3IoaGVpZ2h0OiBhbnksIHdpZHRoOiBhbnkpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgbGV0IGJvZHkgPSBTVkcoKS5hZGRUbygnYm9keScpLnNpemUod2lkdGgsIGhlaWdodCk7XG4gICAgICAgIGxldCByZWN0ID0gYm9keS5yZWN0KHdpZHRoLCBoZWlnaHQpLmZpbGwoXCJ3aGl0ZVwiKS5zdHJva2UoXCJibGFja1wiKVxuICAgICAgICAgIC5hdHRyKHsgJ3N0cm9rZS13aWR0aCc6IDMgfSk7XG4gICAgICAgIHRoaXMuX3dpbmRvdyA9IFNWRygpLmFkZFRvKGJvZHkpO1xuICAgICAgICB0aGlzLm91dGVyU3ZnID0gdGhpcy5fd2luZG93O1xuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoYm9keSk7XG4gICAgICAgIC8vIHNldCBBcmlhIHJvbGVcbiAgICAgICAgdGhpcy5yb2xlID0gUm9sZVR5cGUud2luZG93O1xuICAgICAgICAvLyBzZXQgZGVmYXVsdCBzdGF0ZVxuICAgICAgICB0aGlzLnNldFN0YXRlKG5ldyBJZGxlVXBXaWRnZXRTdGF0ZSgpKTtcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBbXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkT2JzZXJ2ZXIob2JzZXJ2ZXI6IChzdGF0ZTpXaWRnZXRTdGF0ZSkgPT4gdm9pZCkge1xuICAgICAgICB0aGlzLm9ic2VydmVycy5wdXNoKG9ic2VydmVyKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlT2JzZXJ2ZXIob2JzZXJ2ZXI6IChzdGF0ZTpXaWRnZXRTdGF0ZSkgPT4gdm9pZCkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMub2JzZXJ2ZXJzLmluZGV4T2Yob2JzZXJ2ZXIpO1xuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgbm90aWZ5T2JzZXJ2ZXJzKHN0YXRlOldpZGdldFN0YXRlKSB7XG4gICAgICAgIGZvciAoY29uc3Qgb2JzZXJ2ZXIgb2YgdGhpcy5vYnNlcnZlcnMpIHtcbiAgICAgICAgICAgIG9ic2VydmVyKHN0YXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCByZWdpc3RlckV2ZW50KG9iajogYW55KTogdm9pZCB7XG4gICAgICAgIFNWRyh3aW5kb3cpLm9uKCdrZXl1cCcsIChldmVudCk9PntcbiAgICAgICAgICAgIHRoaXMua2V5RXZlbnQgPSBldmVudCBhcyBLZXlib2FyZEV2ZW50XG4gICAgICAgICAgICB0aGlzLnN0YXRlLm9uS2V5dXAodGhpcyk7XG4gICAgICAgIH0sIHdpbmRvdyk7XG4gICAgICAgIG9iai5tb3VzZXVwKChldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLm9uUmVsZWFzZSh0aGlzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG9iai5tb3VzZWRvd24oKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5zZWxlY3RhYmxlKSB7XG4gICAgICAgICAgICAgICAgLy8gcHJldmVudHMgZHJhZ2dhYmxlIHRleHQgc2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc3RhdGUub25QcmVzcyh0aGlzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG9iai5tb3VzZW92ZXIoKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgfSk7XG4gICAgICAgIG9iai5tb3VzZW91dCgoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICB9KTtcbiAgICAgICAgb2JqLm1vdXNlbW92ZSgoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5vbk1vdmUodGhpcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldCB3aW5kb3coKTogU3ZnIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dpbmRvdztcbiAgICB9XG5cbiAgICBpZGxldXBTdGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub3RpZnlPYnNlcnZlcnModGhpcy5nZXRTdGF0ZSgpKTtcbiAgICB9XG5cbiAgICBpZGxlZG93blN0YXRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vdGlmeU9ic2VydmVycyh0aGlzLmdldFN0YXRlKCkpO1xuICAgIH1cblxuICAgIG1vdmVTdGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub3RpZnlPYnNlcnZlcnModGhpcy5nZXRTdGF0ZSgpKTtcbiAgICB9XG4gICAgXG4gICAga2V5dXBTdGF0ZSgpOiB2b2lkIHsgXG4gICAgICAgIHRoaXMubm90aWZ5T2JzZXJ2ZXJzKG5ldyBLZXlwcmVzc1dpZGdldFN0YXRlKCkpO1xuICAgIH1cblxuICAgIC8vcmVxdWlyZWQgdG8gZnVsZmlsbCBpbmhlcml0YW5jZSByZXF1aXJlbWVudHNcbiAgICAvL2J1dCBub3QgaW1wbGVtZW50ZWQgZm9yIHRoZSB3aW5kb3cgY29tcG9uZW50XG4gICAgcHJlc3NlZFN0YXRlKCk6IHZvaWQgeyB9XG4gICAgcHJlc3NSZWxlYXNlU3RhdGUoKTogdm9pZCB7IH1cbiAgICBob3ZlclN0YXRlKCk6IHZvaWQgeyB9XG4gICAgaG92ZXJQcmVzc2VkU3RhdGUoKTogdm9pZCB7IH1cbiAgICBwcmVzc2Vkb3V0U3RhdGUoKTogdm9pZCB7IH1cbn1cblxuYWJzdHJhY3QgY2xhc3MgV2lkZ2V0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBwcm90ZWN0ZWQgd2lkdGg6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgaGVpZ2h0OiBudW1iZXI7XG4gICAgcHJvdGVjdGVkIF9mb3JlY29sb3I6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgX2JhY2tjb2xvcjogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBfZ3JvdXA6IEc7XG4gICAgcHJvdGVjdGVkIF9iYXNlOiBTdmc7XG4gICAgcHJvdGVjdGVkIHJhd0V2ZW50OiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQ6IFdpbmRvdykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5zZWxlY3RhYmxlID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLnJlZ2lzdGVyV2luZG93RXZlbnRzKCk7XG4gICAgfVxuXG4gICAgXG4gICAgcHJvdGVjdGVkIHJlZ2lzdGVyV2luZG93RXZlbnRzKCk6IHZvaWR7XG4gICAgICAgICh0aGlzLnBhcmVudCBhcyBXaW5kb3cpLmFkZE9ic2VydmVyKChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgLy9XZSBvbmx5IHdhbnQgdG8gbW9kaWZ5IHdpZGdldCBzdGF0ZSBvdXRzaWRlIG9mIHRoZSBcbiAgICAgICAgICAgIC8vd2lkZ2V0IGZvciBzdGF0ZSB0cmFuc2l0aW9ucyB0aGF0IG9jY3VyIG91dHNpZGUgb2ZcbiAgICAgICAgICAgIC8vdGhlIHdpZGdldCdzIGJvdW5kcy5cbiAgICAgICAgICAgIGlmIChzdGF0ZSBpbnN0YW5jZW9mIElkbGVVcFdpZGdldFN0YXRlICYmXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRTdGF0ZSgpIGluc3RhbmNlb2YgUHJlc3NlZE91dFdpZGdldFN0YXRlKXtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKG5ldyBJZGxlVXBXaWRnZXRTdGF0ZSgpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0YXRlIGluc3RhbmNlb2YgSWRsZURvd25XaWRnZXRTdGF0ZSl7XG4gICAgICAgICAgICAgICAgdGhpcy5pZGxlZG93blN0YXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RhdGUgaW5zdGFuY2VvZiBLZXlwcmVzc1dpZGdldFN0YXRlKXtcbiAgICAgICAgICAgICAgICB0aGlzLmtleXVwU3RhdGUoKHRoaXMucGFyZW50IGFzIFdpbmRvdykua2V5RXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUgaW5zdGFuY2VvZiBEcmFnV2luZG93U3RhdGUpe1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZVN0YXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVycyBTVkcuanMgZXZlbnQgaGFuZGxlcnMgZm9yIHRoZSBnaXZlbiBvYmplY3QuXG4gICAgICogQHBhcmFtIG9iaiBUaGUgb2JqZWN0IHRvIHJlZ2lzdGVyIGV2ZW50IGhhbmRsZXJzIGZvci5cbiAgICAgKiBAcmV0dXJucyB2b2lkLlxuICAgICAqIFxuICAgICAqIEBkZXNjcmlwdGlvbiByZWdpc3RlckV2ZW50IHNlcnZlcyBhcyBhIGNvdXBsaW5nIG1ldGhvZFxuICAgICAqIGJldHdlZW4gdGhlIFNWRy5qcyBsaWJyYXJ5IGV2ZW50IGhhbmRsZXJzIGFuZCB0aGUgc3RhdGVcbiAgICAgKiBhbmQgb2JzZXJ2ZXIgcGF0dGVybnMgdXNlZCBieSB0aGUgdG9vbGtpdC4gVG8gZ2FpbiBhY2Nlc3NcbiAgICAgKiB0byB0aGUgc291cmNlIGV2ZW50IGRhdGEgc2ltcGx5IGFzc2lnbiB0aGUgZXZlbnQgcGFyYW1ldGVyIFxuICAgICAqIHRvIHRoZSBjdXJyZW50IG9iamVjdCB1c2luZyB0aGlzIGFuZCB0aGUgcmF3RXZlbnQgcHJvcGVydHkuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHJlZ2lzdGVyRXZlbnQob2JqOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgb2JqLm1vdXNldXAoKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUub25SZWxlYXNlKHRoaXMpO1xuICAgICAgICB9KTtcbiAgICAgICAgb2JqLm1vdXNlZG93bigoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGFibGUpIHtcbiAgICAgICAgICAgICAgICAvLyBwcmV2ZW50cyBkcmFnZ2FibGUgdGV4dCBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5vblByZXNzKHRoaXMpO1xuICAgICAgICB9KTtcbiAgICAgICAgb2JqLm1vdXNlb3ZlcigoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5vbkVudGVyKHRoaXMpO1xuICAgICAgICB9KTtcbiAgICAgICAgb2JqLm1vdXNlb3V0KChldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLm9uTGVhdmUodGhpcyk7XG4gICAgICAgIH0pO1xuICAgICAgICBvYmoubW91c2Vtb3ZlKChldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgICAvL21vdXNlIG1vdmUgZXZlbnRzIGdlbmVyYXRlIHBvc2l0aW9uYWwgaW5mb3JtYXRpb25cbiAgICAgICAgICAgIC8vYWJvdXQgdGhlIGN1cnNvciwgbGlrZWx5IG5lZWRlZCBmb3Igd2lkZ2V0cyB0aGF0IHRyYWNrXG4gICAgICAgICAgICAvL2N1cnNvciBtb3ZlbWVudC5cbiAgICAgICAgICAgIHRoaXMucmF3RXZlbnQgPSBldmVudDtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUub25Nb3ZlKHRoaXMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXQgYmFja2NvbG9yKGNvbG9yOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fYmFja2NvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgZ2V0IGJhY2tjb2xvcigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fYmFja2NvbG9yO1xuICAgIH1cblxuICAgIHNldCBmb3JlY29sb3IoY29sb3I6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9mb3JlY29sb3IgPSBjb2xvcjtcbiAgICB9XG5cbiAgICBnZXQgZm9yZWNvbG9yKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9mb3JlY29sb3I7XG4gICAgfVxuXG4gICAgYWJzdHJhY3QgcmVuZGVyKCk6IHZvaWQ7XG59XG5cbi8vIGxvY2FsXG5leHBvcnQgeyBXaW5kb3csIFdpZGdldCwgQ29tcG9uZW50LCBJQWNjZXNzaWJpbGl0eSwgUm9sZVR5cGUsIEV2ZW50QXJncyB9XG5leHBvcnQgeyBJZGxlVXBXaWRnZXRTdGF0ZSwgSWRsZURvd25XaWRnZXRTdGF0ZSwgSG92ZXJXaWRnZXRTdGF0ZSwgSG92ZXJQcmVzc2VkV2lkZ2V0U3RhdGUsIFByZXNzZWRXaWRnZXRTdGF0ZSwgUHJlc3NlZE91dFdpZGdldFN0YXRlLCBEcmFnV2luZG93U3RhdGUgfTtcbi8vIGZyb20gc3ZnLmpzXG5leHBvcnQgeyBTVkcsIFN2ZywgRywgUmVjdCwgQ29udGFpbmVyLCBUZXh0LCBCb3gsIENpcmNsZSwgTnVtYmVyIH07IiwiLy8gaW1wb3J0aW5nIGxvY2FsIGNvZGUsIGNvZGUgd2UgaGF2ZSB3cml0dGVuXG5pbXBvcnQge0lkbGVVcFdpZGdldFN0YXRlLCBQcmVzc2VkV2lkZ2V0U3RhdGUgfSBmcm9tIFwiLi4vY29yZS91aVwiO1xuaW1wb3J0IHtXaW5kb3csIFdpZGdldCwgUm9sZVR5cGUsIEV2ZW50QXJnc30gZnJvbSBcIi4uL2NvcmUvdWlcIjtcbi8vIGltcG9ydGluZyBjb2RlIGZyb20gU1ZHLmpzIGxpYnJhcnlcbmltcG9ydCB7UmVjdCwgVGV4dCwgQm94fSBmcm9tIFwiLi4vY29yZS91aVwiO1xuXG5jbGFzcyBCdXR0b24gZXh0ZW5kcyBXaWRnZXR7XG4gICAgcHJpdmF0ZSBfcmVjdDogUmVjdDtcbiAgICBwcml2YXRlIF90ZXh0OiBUZXh0O1xuICAgIHByaXZhdGUgX2lucHV0OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfZm9udFNpemU6IG51bWJlcjtcbiAgICBwcml2YXRlIF90ZXh0X3k6IG51bWJlcjtcbiAgICBwcml2YXRlIF90ZXh0X3g6IG51bWJlcjtcbiAgICBwcml2YXRlIGRlZmF1bHRUZXh0OiBzdHJpbmc9IFwiQ3VzdG9tIFRleHRcIjtcbiAgICBwcml2YXRlIGRlZmF1bHRGb250U2l6ZTogbnVtYmVyID0gMjg7XG4gICAgcHJpdmF0ZSBkZWZhdWx0V2lkdGg6IG51bWJlciA9IDIyMDtcbiAgICBwcml2YXRlIGRlZmF1bHRIZWlnaHQ6IG51bWJlciA9IDMwO1xuICAgIHByaXZhdGUgX2NsaWNrSGFuZGxlcj86ICgpID0+IHZvaWQ7XG4gICAgcHJpdmF0ZSBpc0NsaWNrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXG4gICAgY29uc3RydWN0b3IocGFyZW50OldpbmRvdyl7XG4gICAgICAgIHN1cGVyKHBhcmVudCk7XG4gICAgICAgIC8vIHNldCBkZWZhdWx0c1xuICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMuZGVmYXVsdEhlaWdodDtcbiAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMuZGVmYXVsdFdpZHRoO1xuICAgICAgICB0aGlzLl9pbnB1dCA9IHRoaXMuZGVmYXVsdFRleHQ7XG4gICAgICAgIHRoaXMuX2ZvbnRTaXplID0gdGhpcy5kZWZhdWx0Rm9udFNpemU7XG4gICAgICAgIC8vIHNldCBBcmlhIHJvbGVcbiAgICAgICAgdGhpcy5yb2xlID0gUm9sZVR5cGUuYnV0dG9uO1xuICAgICAgICAvLyByZW5kZXIgd2lkZ2V0XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIC8vIHNldCBkZWZhdWx0IG9yIHN0YXJ0aW5nIHN0YXRlXG4gICAgICAgIHRoaXMuc2V0U3RhdGUobmV3IElkbGVVcFdpZGdldFN0YXRlKCkpO1xuICAgICAgICAvLyBwcmV2ZW50IHRleHQgc2VsZWN0aW9uXG4gICAgICAgIHRoaXMuc2VsZWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJhY2tjb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgc2V0IGZvbnRTaXplKHNpemU6bnVtYmVyKXtcbiAgICAgICAgdGhpcy5fZm9udFNpemU9IHNpemU7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgc2V0IGJ0bkxhYmVsKHZhbHVlOnN0cmluZyl7XG4gICAgICAgIHRoaXMuX2lucHV0ID0gdmFsdWU7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgZ2V0IGJ0bkxhYmVsKCk6c3RyaW5ne1xuICAgICAgICByZXR1cm4gdGhpcy5faW5wdXQ7XG4gICAgfVxuXG4gICAgc2V0IGJ0bldpZHRoKHdpZHRoOm51bWJlcil7XG4gICAgICAgIHRoaXMud2lkdGg9d2lkdGg7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuICAgIGdldCBidG5XaWR0aCgpe1xuICAgICAgICByZXR1cm4gdGhpcy53aWR0aDtcbiAgICB9XG5cbiAgICBzZXQgYnRuSGVpZ2h0KGhlaWdodDpudW1iZXIpe1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHBvc2l0aW9uVGV4dCgpe1xuICAgICAgICBsZXQgYm94OkJveCA9IHRoaXMuX3RleHQuYmJveCgpO1xuICAgICAgICAvLyBpbiBUUywgdGhlIHByZXBlbmRpbmcgd2l0aCArIHBlcmZvcm1zIGEgdHlwZSBjb252ZXJzaW9uIGZyb20gc3RyaW5nIHRvIG51bWJlclxuICAgICAgICB0aGlzLl90ZXh0X3kgPSAoK3RoaXMuX3JlY3QueSgpICsgKCgrdGhpcy5fcmVjdC5oZWlnaHQoKS8yKSkgLSAoYm94LmhlaWdodC8yKSk7XG4gICAgICAgIHRoaXMuX3RleHQueCgrdGhpcy5fcmVjdC54KCkgKyA0KTtcbiAgICAgICAgaWYgKHRoaXMuX3RleHRfeSA+IDApe1xuICAgICAgICAgICAgdGhpcy5fdGV4dC55KHRoaXMuX3RleHRfeSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmVuZGVyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9ncm91cCA9ICh0aGlzLnBhcmVudCBhcyBXaW5kb3cpLndpbmRvdy5ncm91cCgpO1xuICAgICAgICB0aGlzLl9yZWN0ID0gdGhpcy5fZ3JvdXAucmVjdCh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuX3JlY3Quc3Ryb2tlKFwiYmxhY2tcIik7XG4gICAgICAgIHRoaXMuX3JlY3QuZmlsbChcIndoaXRlXCIpO1xuICAgICAgICB0aGlzLl90ZXh0ID0gdGhpcy5fZ3JvdXAudGV4dCh0aGlzLl9pbnB1dCk7XG4gICAgICAgIC8vIFNldCB0aGUgb3V0ZXIgc3ZnIGVsZW1lbnQgXG4gICAgICAgIHRoaXMub3V0ZXJTdmcgPSB0aGlzLl9ncm91cDtcbiAgICAgICAgLy8gQWRkIGEgdHJhbnNwYXJlbnQgcmVjdCBvbiB0b3Agb2YgdGV4dCB0byBcbiAgICAgICAgLy8gcHJldmVudCBzZWxlY3Rpb24gY3Vyc29yIGFuZCB0byBoYW5kbGUgbW91c2UgZXZlbnRzXG4gICAgICAgIGxldCBldmVudHJlY3QgPSB0aGlzLl9ncm91cC5yZWN0KHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KS5vcGFjaXR5KDApLmF0dHIoJ2lkJywgMCk7XG5cbiAgICAgICAgLy8gcmVnaXN0ZXIgb2JqZWN0cyB0aGF0IHNob3VsZCByZWNlaXZlIGV2ZW50IG5vdGlmaWNhdGlvbnMuXG4gICAgICAgIC8vIGZvciB0aGlzIHdpZGdldCwgd2Ugd2FudCB0byBrbm93IHdoZW4gdGhlIGdyb3VwIG9yIHJlY3Qgb2JqZWN0c1xuICAgICAgICAvLyByZWNlaXZlIGV2ZW50c1xuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoZXZlbnRyZWN0KTtcbiAgICB9XG5cbiAgICBvdmVycmlkZSB1cGRhdGUoKTogdm9pZCB7XG4gICAgICAgIGlmKHRoaXMuX3RleHQgIT0gbnVsbClcbiAgICAgICAgICAgIHRoaXMuX3RleHQuZm9udCgnc2l6ZScsIHRoaXMuX2ZvbnRTaXplKTtcbiAgICAgICAgICAgIHRoaXMuX3RleHQudGV4dCh0aGlzLl9pbnB1dCk7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uVGV4dCgpO1xuICAgICAgICAgICAgdGhpcy5fcmVjdC53aWR0aCh0aGlzLndpZHRoKS5oZWlnaHQodGhpcy5oZWlnaHQpO1xuXG4gICAgICAgIGlmKHRoaXMuX3JlY3QgIT0gbnVsbClcbiAgICAgICAgICAgdGhpcy5fcmVjdC5maWxsKHRoaXMuYmFja2NvbG9yKTtcbiAgICAgICAgXG4gICAgICAgIHN1cGVyLnVwZGF0ZSgpO1xuICAgIH1cbiAgICBcbiAgICBwcmVzc1JlbGVhc2VTdGF0ZSgpOiB2b2lke1xuXG4gICAgICAgIGlmICh0aGlzLnByZXZpb3VzU3RhdGUgaW5zdGFuY2VvZiBQcmVzc2VkV2lkZ2V0U3RhdGUpIHtcbiAgICAgICAgICAgIHRoaXMucmFpc2UobmV3IEV2ZW50QXJncyh0aGlzKSk7XG4gICAgICAgICAgICB0aGlzLmlzQ2xpY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAvL1VwZGF0ZSBiYWNrY29sb3IgdG8gbGlnaHRibHVlIFxuICAgICAgICAgICAgdGhpcy5iYWNrY29sb3IgPSBcImxpZ2h0Ymx1ZVwiO1xuICAgICAgICAgICAgLy9SZS1yZW5kZXIgXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICAgICAgLy9FeGVjdXRlIGNhbGxiYWNrIGlmIGl0IHdhcyByZWdpc3RlcmVkXG4gICAgICAgICAgICBpZih0aGlzLl9jbGlja0hhbmRsZXIpe1xuICAgICAgICAgICAgICAgIHRoaXMuX2NsaWNrSGFuZGxlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9UT0RPOiBpbXBsZW1lbnQgdGhlIG9uQ2xpY2sgZXZlbnQgdXNpbmcgYSBjYWxsYmFjayBwYXNzZWQgYXMgYSBwYXJhbWV0ZXJcbiAgICBvbkNsaWNrKGNhbGxiYWNrOiAoKSA9PiB2b2lkKTp2b2lke1xuICAgICAgICAvL1N0b3JlIGNhbGxiYWNrIGZ1bmN0aW9uIFxuICAgICAgICB0aGlzLl9jbGlja0hhbmRsZXIgPSBjYWxsYmFjaztcbiAgICAgIFxuICAgIH1cblxuICAgIFxuICAgIC8vVE9ETzogZ2l2ZSB0aGUgc3RhdGVzIHNvbWV0aGluZyB0byBkbyEgVXNlIHRoZXNlIG1ldGhvZHMgdG8gY29udHJvbCB0aGUgdmlzdWFsIGFwcGVhcmFuY2Ugb2YgeW91clxuICAgIC8vd2lkZ2V0XG4gICAgaWRsZXVwU3RhdGUoKTogdm9pZCB7XG4gICAgICBcbiAgICAgICBcbiAgICB9XG4gICAgLy9NYWtlIHdoaXRlIGlmIGJ0biBpcyBpZGxlIFxuICAgIGlkbGVkb3duU3RhdGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3JlY3QuZmlsbChcIiNmZmZmZmZcIik7XG4gICAgfVxuICAgIHByZXNzZWRTdGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fcmVjdC5maWxsKFwibGlnaHQgYmx1ZVwiKTtcbiAgICB9XG4gICAgaG92ZXJTdGF0ZSgpOiB2b2lkIHtcbiAgICAgICAvL1R1cm4geWVsbG93IG9uIGJ0biBob3ZlciBcbiAgICAgICAgdGhpcy5fcmVjdC5maWxsKFwieWVsbG93XCIpO1xuICAgICAgIFxuICAgICAgICBcbiAgICB9XG4gICAgaG92ZXJQcmVzc2VkU3RhdGUoKTogdm9pZCB7XG4gICAgICAgIC8vVHVybiBidG4gb3JhbmdlIGlmIGhvdmVycHJlc3NlZCBcbiAgICAgICAgaWYgKHRoaXMuX3JlY3QpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlY3QuZmlsbChcIm9yYW5nZVwiKTtcbiAgICAgICAgICAgIHRoaXMuX3JlY3QuYW5pbWF0ZSgyMDApO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByZXNzZWRvdXRTdGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fcmVjdC5maWxsKFwicHVycGxlXCIpO1xuICAgIH1cbiAgICBtb3ZlU3RhdGUoKTogdm9pZCB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cbiAgICBrZXl1cFN0YXRlKGtleUV2ZW50PzogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgICAgICAvL0ZpbGwgdGhlIGJ0biB3aXRoIHBpbmsgaWYgYSBrZXkgaXMgcHJlc3NlZFxuICAgICAgICB0aGlzLl9yZWN0LmZpbGwoXCJwaW5rXCIpO1xuICAgIH1cbn1cblxuZXhwb3J0IHtCdXR0b259IiwiLy8gaW1wb3J0aW5nIGxvY2FsIGNvZGUsIGNvZGUgd2UgaGF2ZSB3cml0dGVuXG5pbXBvcnQge1dpbmRvdywgV2lkZ2V0LCBSb2xlVHlwZSwgSWRsZVVwV2lkZ2V0U3RhdGV9IGZyb20gXCIuLi9jb3JlL3VpXCI7XG4vLyBpbXBvcnRpbmcgY29kZSBmcm9tIFNWRy5qcyBsaWJyYXJ5XG5pbXBvcnQge1JlY3QsIFRleHQsIEJveH0gZnJvbSBcIi4uL2NvcmUvdWlcIjtcblxuY2xhc3MgSGVhZGluZyBleHRlbmRzIFdpZGdldHtcbiAgICBwcml2YXRlIF9yZWN0OiBSZWN0O1xuICAgIHByaXZhdGUgX3RleHQ6IFRleHQ7XG4gICAgcHJpdmF0ZSBfaW5wdXQ6IHN0cmluZztcbiAgICBwcml2YXRlIF9mb250U2l6ZTogbnVtYmVyO1xuICAgIHByaXZhdGUgX3RleHRfeTogbnVtYmVyO1xuICAgIHByaXZhdGUgX3RleHRfeDogbnVtYmVyO1xuICAgIHByaXZhdGUgZGVmYXVsdFRleHQ6IHN0cmluZz0gXCJIZWFkaW5nXCI7XG4gICAgcHJpdmF0ZSBkZWZhdWx0Rm9udFNpemU6IG51bWJlciA9IDE4O1xuICAgIHByaXZhdGUgZGVmYXVsdFdpZHRoOiBudW1iZXIgPSAxMjA7XG4gICAgcHJpdmF0ZSBkZWZhdWx0SGVpZ2h0OiBudW1iZXIgPSA0MDtcblxuICAgIGNvbnN0cnVjdG9yKHBhcmVudDpXaW5kb3cpe1xuICAgICAgICBzdXBlcihwYXJlbnQpO1xuICAgICAgICAvLyBzZXQgZGVmYXVsdHNcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmRlZmF1bHRIZWlnaHQ7XG4gICAgICAgIHRoaXMud2lkdGggPSB0aGlzLmRlZmF1bHRXaWR0aDtcbiAgICAgICAgdGhpcy5faW5wdXQgPSB0aGlzLmRlZmF1bHRUZXh0O1xuICAgICAgICB0aGlzLl9mb250U2l6ZSA9IHRoaXMuZGVmYXVsdEZvbnRTaXplO1xuICAgICAgICAvKiBhcmlhICovXG4gICAgICAgIHRoaXMucm9sZSA9IFJvbGVUeXBlLmhlYWRpbmc7XG4gICAgICAgIC8vIHJlbmRlciB3aWRnZXRcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgLy8gc2V0IGRlZmF1bHQgb3Igc3RhcnRpbmcgc3RhdGVcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXcgSWRsZVVwV2lkZ2V0U3RhdGUoKSk7XG4gICAgICAgIC8vIHByZXZlbnQgdGV4dCBzZWxlY3Rpb25cbiAgICAgICAgdGhpcy5zZWxlY3RhYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYmFja2NvbG9yID0gXCJ3aGl0ZVwiO1xuICAgIH1cblxuICAgIHNldCB0ZXh0KHRleHQ6c3RyaW5nKXtcbiAgICAgICAgdGhpcy5faW5wdXQgPSB0ZXh0O1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIGdldCB0ZXh0KCk6c3RyaW5ne1xuICAgICAgICByZXR1cm4gdGhpcy5faW5wdXQ7XG4gICAgfVxuXG4gICAgc2V0IGZvbnRTaXplKHNpemU6bnVtYmVyKXtcbiAgICAgICAgdGhpcy5fZm9udFNpemU9IHNpemU7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIHBvc2l0aW9uVGV4dCgpe1xuICAgICAgICBsZXQgYm94OkJveCA9IHRoaXMuX3RleHQuYmJveCgpO1xuICAgICAgICAvLyBpbiBUUywgdGhlIHByZXBlbmRpbmcgd2l0aCArIHBlcmZvcm1zIGEgdHlwZSBjb252ZXJzaW9uIGZyb20gc3RyaW5nIHRvIG51bWJlclxuICAgICAgICB0aGlzLl90ZXh0X3kgPSAoK3RoaXMuX3JlY3QueSgpICsgKCgrdGhpcy5fcmVjdC5oZWlnaHQoKS8yKSkgLSAoYm94LmhlaWdodC8yKSk7XG4gICAgICAgIHRoaXMuX3RleHQueCgrdGhpcy5fcmVjdC54KCkgKyA0KTtcbiAgICAgICAgaWYgKHRoaXMuX3RleHRfeSA+IDApe1xuICAgICAgICAgICAgdGhpcy5fdGV4dC55KHRoaXMuX3RleHRfeSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZXNpemUgY29udGFpbmVyIHJlY3QgdG8gbWF0Y2ggZm9udFNpemVcbiAgICAgICAgdGhpcy5fcmVjdC53aWR0aChib3gud2lkdGgpO1xuICAgICAgICB0aGlzLl9yZWN0LmhlaWdodChib3guaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBtb3ZlKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmKHRoaXMuX2dyb3VwICE9IG51bGwpXG4gICAgICAgICAgICB0aGlzLl9ncm91cC5tb3ZlKHgseSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHJlbmRlcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fZ3JvdXAgPSAodGhpcy5wYXJlbnQgYXMgV2luZG93KS53aW5kb3cuZ3JvdXAoKTtcbiAgICAgICAgdGhpcy5fcmVjdCA9IHRoaXMuX2dyb3VwLnJlY3QodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLl90ZXh0ID0gdGhpcy5fZ3JvdXAudGV4dCh0aGlzLl9pbnB1dCk7XG5cbiAgICAgICAgdGhpcy5vdXRlclN2ZyA9IHRoaXMuX2dyb3VwO1xuICAgICAgICAvLyByZWdpc3RlciBvYmplY3RzIHRoYXQgc2hvdWxkIHJlY2VpdmUgZXZlbnQgbm90aWZpY2F0aW9ucy5cbiAgICAgICAgLy8gZm9yIHRoaXMgd2lkZ2V0LCB3ZSB3YW50IHRvIGtub3cgd2hlbiB0aGUgZ3JvdXAgb3IgcmVjdCBvYmplY3RzXG4gICAgICAgIC8vIHJlY2VpdmUgZXZlbnRzXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudCh0aGlzLl9ncm91cCk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudCh0aGlzLl9yZWN0KTtcbiAgICB9XG5cbiAgICBvdmVycmlkZSB1cGRhdGUoKTogdm9pZCB7XG4gICAgICAgIGlmKHRoaXMuX3RleHQgIT0gbnVsbClcbiAgICAgICAgICAgIHRoaXMuX3RleHQuZm9udCgnc2l6ZScsIHRoaXMuX2ZvbnRTaXplKTtcbiAgICAgICAgICAgIHRoaXMuX3RleHQudGV4dCh0aGlzLl9pbnB1dCk7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uVGV4dCgpO1xuXG4gICAgICAgIGlmKHRoaXMuX3JlY3QgIT0gbnVsbClcbiAgICAgICAgICAgIHRoaXMuX3JlY3QuZmlsbCh0aGlzLmJhY2tjb2xvcik7XG4gICAgICAgIFxuICAgICAgICBzdXBlci51cGRhdGUoKTtcbiAgICB9XG5cbiAgICBpZGxldXBTdGF0ZSgpOiB2b2lkIHtcbiAgICB9XG4gICAgaWRsZWRvd25TdGF0ZSgpOiB2b2lkIHtcbiAgICB9XG4gICAgLy9Mb2cgdGhhdCB0aGUgYnV0dG9uIGhhcyBiZWVuIHByZXNzZWRcbiAgICBwcmVzc2VkU3RhdGUoKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQnV0dG9uIGhhcyBiZWVuIHByZXNzZWRcIik7XG4gICAgfVxuICAgIC8vTG9nIHRoZSBwcmVzcyByZWxlYXNlXG4gICAgcHJlc3NSZWxlYXNlU3RhdGUoKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2xpY2sgY29tcGxldGVcIik7XG4gICAgfVxuICAgIC8vTG9nIGhvdmVyaW5nIG92ZXIgdGhlIGJ1dHRvbiBcbiAgICBob3ZlclN0YXRlKCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkhvdmVyZWQgb3ZlciB3aWRnZXRcIik7XG4gICAgfVxuICAgIGhvdmVyUHJlc3NlZFN0YXRlKCk6IHZvaWQge1xuICAgIH1cbiAgICBwcmVzc2Vkb3V0U3RhdGUoKTogdm9pZCB7XG4gICAgfVxuICAgIG1vdmVTdGF0ZSgpOiB2b2lkIHsgfVxuICAgIC8vTG9nIGlmIGEga2V5IGhhcyBiZWVuIHByZXNzZWRcbiAgICBrZXl1cFN0YXRlKCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhcIktleSBoYXMgYmVlbiBwcmVzc2VkXCIpO1xuICAgICB9XG4gICAgIFxufVxuXG5leHBvcnQge0hlYWRpbmd9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge1dpbmRvd30gZnJvbSBcIi4vY29yZS91aVwiXG5pbXBvcnQge0J1dHRvbn0gZnJvbSBcIi4vd2lkZ2V0cy9idXR0b25cIlxuaW1wb3J0IHtIZWFkaW5nfSBmcm9tIFwiLi93aWRnZXRzL2hlYWRpbmdcIlxuXG5cbmxldCB3ID0gbmV3IFdpbmRvdyh3aW5kb3cuaW5uZXJIZWlnaHQtMTAsJzEwMCUnKTtcblxubGV0IGxibDE9IG5ldyBIZWFkaW5nKHcpO1xubGJsMS50ZXh0ID0gXCJNeSBORVcgQnV0dG9uIERlbW9cIjtcbmxibDEudGFiaW5kZXggPSAxO1xubGJsMS5mb250U2l6ZSA9IDI2O1xubGJsMS5tb3ZlKDEwLDIwKTtcblxubGV0IGJ0biA9IG5ldyBCdXR0b24odyk7XG5idG4udGFiaW5kZXggPSAyO1xuYnRuLmZvbnRTaXplID0gMTRcbmJ0bi5tb3ZlKDEyMiwgNTApXG5cbmJ0bi5vbkNsaWNrKCgpID0+IHtcbiAgICAvL0xvZyBpbiBjb25zb2xlIGlmIHRoZSBidXR0b24gaXMgY2xpY2tlZFxuICAgIGNvbnNvbGUubG9nKFwiQnV0dG9uIGNsaWNrZWQhXCIpO1xuICAgIC8vQ2hhbmdlIHRoZSBoZWFkaW5nIHRleHQgdG8gc2hvdyBpdCdzIGJlZW4gY2xpY2tlZFxuICAgIGxibDEudGV4dCA9IFwiQnV0dG9uIGNsaWNrZWQgZnJvbSBVSSFcIjtcbiAgICBidG4uYmFja2NvbG9yID0gXCJsaWdodGJsdWVcIjsgXG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=