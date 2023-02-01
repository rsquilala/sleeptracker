(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_services_sleep_service_ts"],{

/***/ 7212:
/*!**********************************************!*\
  !*** ./src/app/data/overnight-sleep-data.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OvernightSleepData": () => (/* binding */ OvernightSleepData)
/* harmony export */ });
/* harmony import */ var _sleep_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sleep-data */ 533);

class OvernightSleepData extends _sleep_data__WEBPACK_IMPORTED_MODULE_0__.SleepData {
    constructor(sleepStart, sleepEnd) {
        super();
        this.sleepStart = sleepStart;
        this.sleepEnd = sleepEnd;
    }
    summaryString() {
        var sleepStart_ms = this.sleepStart.getTime();
        var sleepEnd_ms = this.sleepEnd.getTime();
        // Calculate the difference in milliseconds
        var difference_ms = sleepEnd_ms - sleepStart_ms;
        // Convert to hours, minutes, and seconds
        var hours = Math.floor(difference_ms / (1000 * 60 * 60));
        var minutes = Math.floor(difference_ms / (1000 * 60) % 60);
        var seconds = Math.floor(difference_ms / (1000) % 60);
        if (hours < 1)
            return minutes + " minutes, " + seconds + " seconds.";
        else
            return hours + " hours, " + minutes + " minutes.";
    }
    get elapsed() {
        var sleepStart_ms = this.sleepStart.getTime();
        var sleepEnd_ms = this.sleepEnd.getTime();
        // Calculate the difference in milliseconds
        var difference_ms = sleepEnd_ms - sleepStart_ms;
        return difference_ms;
    }
    dateString() {
        return "Night of " + this.sleepStart.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
    }
}


/***/ }),

/***/ 533:
/*!************************************!*\
  !*** ./src/app/data/sleep-data.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SleepData": () => (/* binding */ SleepData)
/* harmony export */ });
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ 9512);
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);

class SleepData {
    constructor() {
        //Assign a random (unique) ID. This may be useful for comparison (e.g., are two logged entries the same).
        this.id = (0,shortid__WEBPACK_IMPORTED_MODULE_0__.generate)();
        this.loggedAt = new Date();
    }
    summaryString() {
        return 'Unknown sleep data';
    }
    dateString() {
        return this.loggedAt.toLocaleString('en-US', { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true });
    }
}


/***/ }),

/***/ 743:
/*!**************************************************!*\
  !*** ./src/app/data/stanford-sleepiness-data.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StanfordSleepinessData": () => (/* binding */ StanfordSleepinessData)
/* harmony export */ });
/* harmony import */ var _sleep_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sleep-data */ 533);
/* from the Stanford Sleepiness Scale */
/* https://web.stanford.edu/~dement/sss.html */

class StanfordSleepinessData extends _sleep_data__WEBPACK_IMPORTED_MODULE_0__.SleepData {
    constructor(loggedValue, loggedAt = new Date()) {
        super();
        this.loggedValue = loggedValue;
        this.loggedAt = loggedAt;
    }
    summaryString() {
        return this.loggedValue + ": " + StanfordSleepinessData.ScaleValues[this.loggedValue];
    }
}
StanfordSleepinessData.ScaleValues = [undefined,
    'Feeling active, vital, alert, or wide awake',
    'Functioning at high levels, but not at peak; able to concentrate',
    'Awake, but relaxed; responsive but not fully alert',
    'Somewhat foggy, let down',
    'Foggy; losing interest in remaining awake; slowed down',
    'Sleepy, woozy, fighting sleep; prefer to lie down',
    'No longer fighting sleep, sleep onset soon; having dream-like thoughts']; //7


/***/ }),

/***/ 2517:
/*!*******************************************!*\
  !*** ./src/app/services/sleep.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SleepService": () => (/* binding */ SleepService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _data_overnight_sleep_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/overnight-sleep-data */ 7212);
/* harmony import */ var _data_stanford_sleepiness_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/stanford-sleepiness-data */ 743);




let SleepService = class SleepService {
    constructor() {
        if (SleepService.LoadDefaultData) {
            this.addDefaultData();
            SleepService.LoadDefaultData = false;
        }
    }
    addDefaultData() {
        this.logOvernightData(new _data_overnight_sleep_data__WEBPACK_IMPORTED_MODULE_0__.OvernightSleepData(new Date('February 18, 2021 01:03:00'), new Date('February 18, 2021 09:25:00')));
        this.logSleepinessData(new _data_stanford_sleepiness_data__WEBPACK_IMPORTED_MODULE_1__.StanfordSleepinessData(4, new Date('February 19, 2021 14:38:00')));
        this.logOvernightData(new _data_overnight_sleep_data__WEBPACK_IMPORTED_MODULE_0__.OvernightSleepData(new Date('February 20, 2021 23:11:00'), new Date('February 21, 2021 08:03:00')));
    }
    logSleepData(sleepData) {
        SleepService.AllSleepData.push(sleepData);
    }
    logOvernightData(sleepData) {
        this.logSleepData(sleepData);
        SleepService.AllOvernightData.push(sleepData);
    }
    logSleepinessData(sleepData) {
        this.logSleepData(sleepData);
        SleepService.AllSleepinessData.push(sleepData);
    }
    removeSleepData(sleepData) {
        var index = SleepService.AllSleepData.indexOf(sleepData);
        if (index >= 0)
            SleepService.AllSleepData.splice(index, 1);
    }
    removeOvernightData(sleepData) {
        this.removeSleepData(sleepData);
        var index = SleepService.AllOvernightData.indexOf(sleepData);
        if (index >= 0)
            SleepService.AllOvernightData.splice(index, 1);
    }
    removeSleepinessData(sleepData) {
        this.removeSleepData(sleepData);
        var index = SleepService.AllSleepinessData.indexOf(sleepData);
        if (index >= 0)
            SleepService.AllSleepinessData.splice(index, 1);
    }
};
SleepService.LoadDefaultData = true;
SleepService.AllSleepData = [];
SleepService.AllOvernightData = [];
SleepService.AllSleepinessData = [];
SleepService.ctorParameters = () => [];
SleepService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], SleepService);



/***/ }),

/***/ 9512:
/*!***************************************!*\
  !*** ./node_modules/shortid/index.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = __webpack_require__(/*! ./lib/index */ 4118);

/***/ }),

/***/ 5968:
/*!**********************************************!*\
  !*** ./node_modules/shortid/lib/alphabet.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var randomFromSeed = __webpack_require__(/*! ./random/random-from-seed */ 1664);

var ORIGINAL = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
var alphabet;
var previousSeed;
var shuffled;

function reset() {
  shuffled = false;
}

function setCharacters(_alphabet_) {
  if (!_alphabet_) {
    if (alphabet !== ORIGINAL) {
      alphabet = ORIGINAL;
      reset();
    }

    return;
  }

  if (_alphabet_ === alphabet) {
    return;
  }

  if (_alphabet_.length !== ORIGINAL.length) {
    throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. You submitted ' + _alphabet_.length + ' characters: ' + _alphabet_);
  }

  var unique = _alphabet_.split('').filter(function (item, ind, arr) {
    return ind !== arr.lastIndexOf(item);
  });

  if (unique.length) {
    throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. These characters were not unique: ' + unique.join(', '));
  }

  alphabet = _alphabet_;
  reset();
}

function characters(_alphabet_) {
  setCharacters(_alphabet_);
  return alphabet;
}

function setSeed(seed) {
  randomFromSeed.seed(seed);

  if (previousSeed !== seed) {
    reset();
    previousSeed = seed;
  }
}

function shuffle() {
  if (!alphabet) {
    setCharacters(ORIGINAL);
  }

  var sourceArray = alphabet.split('');
  var targetArray = [];
  var r = randomFromSeed.nextValue();
  var characterIndex;

  while (sourceArray.length > 0) {
    r = randomFromSeed.nextValue();
    characterIndex = Math.floor(r * sourceArray.length);
    targetArray.push(sourceArray.splice(characterIndex, 1)[0]);
  }

  return targetArray.join('');
}

function getShuffled() {
  if (shuffled) {
    return shuffled;
  }

  shuffled = shuffle();
  return shuffled;
}
/**
 * lookup shuffled letter
 * @param index
 * @returns {string}
 */


function lookup(index) {
  var alphabetShuffled = getShuffled();
  return alphabetShuffled[index];
}

function get() {
  return alphabet || ORIGINAL;
}

module.exports = {
  get: get,
  characters: characters,
  seed: setSeed,
  lookup: lookup,
  shuffled: getShuffled
};

/***/ }),

/***/ 6525:
/*!*******************************************!*\
  !*** ./node_modules/shortid/lib/build.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var generate = __webpack_require__(/*! ./generate */ 5305);

var alphabet = __webpack_require__(/*! ./alphabet */ 5968); // Ignore all milliseconds before a certain time to reduce the size of the date entropy without sacrificing uniqueness.
// This number should be updated every year or so to keep the generated id short.
// To regenerate `new Date() - 0` and bump the version. Always bump the version!


var REDUCE_TIME = 1567752802062; // don't change unless we change the algos or REDUCE_TIME
// must be an integer and less than 16

var version = 7; // Counter is used when shortid is called multiple times in one second.

var counter; // Remember the last time shortid was called in case counter is needed.

var previousSeconds;
/**
 * Generate unique id
 * Returns string id
 */

function build(clusterWorkerId) {
  var str = '';
  var seconds = Math.floor((Date.now() - REDUCE_TIME) * 0.001);

  if (seconds === previousSeconds) {
    counter++;
  } else {
    counter = 0;
    previousSeconds = seconds;
  }

  str = str + generate(version);
  str = str + generate(clusterWorkerId);

  if (counter > 0) {
    str = str + generate(counter);
  }

  str = str + generate(seconds);
  return str;
}

module.exports = build;

/***/ }),

/***/ 5305:
/*!**********************************************!*\
  !*** ./node_modules/shortid/lib/generate.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var alphabet = __webpack_require__(/*! ./alphabet */ 5968);

var random = __webpack_require__(/*! ./random/random-byte */ 768);

var format = __webpack_require__(/*! nanoid/format */ 9081);

function generate(number) {
  var loopCounter = 0;
  var done;
  var str = '';

  while (!done) {
    str = str + format(random, alphabet.get(), 1);
    done = number < Math.pow(16, loopCounter + 1);
    loopCounter++;
  }

  return str;
}

module.exports = generate;

/***/ }),

/***/ 4118:
/*!*******************************************!*\
  !*** ./node_modules/shortid/lib/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var alphabet = __webpack_require__(/*! ./alphabet */ 5968);

var build = __webpack_require__(/*! ./build */ 6525);

var isValid = __webpack_require__(/*! ./is-valid */ 8908); // if you are using cluster or multiple servers use this to make each instance
// has a unique value for worker
// Note: I don't know if this is automatically set when using third
// party cluster solutions such as pm2.


var clusterWorkerId = __webpack_require__(/*! ./util/cluster-worker-id */ 3796) || 0;
/**
 * Set the seed.
 * Highly recommended if you don't want people to try to figure out your id schema.
 * exposed as shortid.seed(int)
 * @param seed Integer value to seed the random alphabet.  ALWAYS USE THE SAME SEED or you might get overlaps.
 */

function seed(seedValue) {
  alphabet.seed(seedValue);
  return module.exports;
}
/**
 * Set the cluster worker or machine id
 * exposed as shortid.worker(int)
 * @param workerId worker must be positive integer.  Number less than 16 is recommended.
 * returns shortid module so it can be chained.
 */


function worker(workerId) {
  clusterWorkerId = workerId;
  return module.exports;
}
/**
 *
 * sets new characters to use in the alphabet
 * returns the shuffled alphabet
 */


function characters(newCharacters) {
  if (newCharacters !== undefined) {
    alphabet.characters(newCharacters);
  }

  return alphabet.shuffled();
}
/**
 * Generate unique id
 * Returns string id
 */


function generate() {
  return build(clusterWorkerId);
} // Export all other functions as properties of the generate function


module.exports = generate;
module.exports.generate = generate;
module.exports.seed = seed;
module.exports.worker = worker;
module.exports.characters = characters;
module.exports.isValid = isValid;

/***/ }),

/***/ 8908:
/*!**********************************************!*\
  !*** ./node_modules/shortid/lib/is-valid.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var alphabet = __webpack_require__(/*! ./alphabet */ 5968);

function isShortId(id) {
  if (!id || typeof id !== 'string' || id.length < 6) {
    return false;
  }

  var nonAlphabetic = new RegExp('[^' + alphabet.get().replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&') + ']');
  return !nonAlphabetic.test(id);
}

module.exports = isShortId;

/***/ }),

/***/ 768:
/*!****************************************************************!*\
  !*** ./node_modules/shortid/lib/random/random-byte-browser.js ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";


var crypto = typeof window === 'object' && (window.crypto || window.msCrypto); // IE 11 uses window.msCrypto

var randomByte;

if (!crypto || !crypto.getRandomValues) {
  randomByte = function (size) {
    var bytes = [];

    for (var i = 0; i < size; i++) {
      bytes.push(Math.floor(Math.random() * 256));
    }

    return bytes;
  };
} else {
  randomByte = function (size) {
    return crypto.getRandomValues(new Uint8Array(size));
  };
}

module.exports = randomByte;

/***/ }),

/***/ 1664:
/*!*************************************************************!*\
  !*** ./node_modules/shortid/lib/random/random-from-seed.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
 // Found this seed-based random generator somewhere
// Based on The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)

var seed = 1;
/**
 * return a random number based on a seed
 * @param seed
 * @returns {number}
 */

function getNextValue() {
  seed = (seed * 9301 + 49297) % 233280;
  return seed / 233280.0;
}

function setSeed(_seed_) {
  seed = _seed_;
}

module.exports = {
  nextValue: getNextValue,
  seed: setSeed
};

/***/ }),

/***/ 3796:
/*!********************************************************************!*\
  !*** ./node_modules/shortid/lib/util/cluster-worker-id-browser.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


module.exports = 0;

/***/ }),

/***/ 9081:
/*!********************************************************************!*\
  !*** ./node_modules/shortid/node_modules/nanoid/format.browser.js ***!
  \********************************************************************/
/***/ ((module) => {

// This file replaces `format.js` in bundlers like webpack or Rollup,
// according to `browser` config in `package.json`.
module.exports = function (random, alphabet, size) {
  // We can’t use bytes bigger than the alphabet. To make bytes values closer
  // to the alphabet, we apply bitmask on them. We look for the closest
  // `2 ** x - 1` number, which will be bigger than alphabet size. If we have
  // 30 symbols in the alphabet, we will take 31 (00011111).
  // We do not use faster Math.clz32, because it is not available in browsers.
  var mask = (2 << Math.log(alphabet.length - 1) / Math.LN2) - 1; // Bitmask is not a perfect solution (in our example it will pass 31 bytes,
  // which is bigger than the alphabet). As a result, we will need more bytes,
  // than ID size, because we will refuse bytes bigger than the alphabet.
  // Every hardware random generator call is costly,
  // because we need to wait for entropy collection. This is why often it will
  // be faster to ask for few extra bytes in advance, to avoid additional calls.
  // Here we calculate how many random bytes should we call in advance.
  // It depends on ID length, mask / alphabet size and magic number 1.6
  // (which was selected according benchmarks).
  // -~f => Math.ceil(f) if n is float number
  // -~i => i + 1 if n is integer number

  var step = -~(1.6 * mask * size / alphabet.length);
  var id = '';

  while (true) {
    var bytes = random(step); // Compact alternative for `for (var i = 0; i < step; i++)`

    var i = step;

    while (i--) {
      // If random byte is bigger than alphabet even after bitmask,
      // we refuse it by `|| ''`.
      id += alphabet[bytes[i] & mask] || ''; // More compact than `id.length + 1 === size`

      if (id.length === +size) return id;
    }
  }
};

/***/ })

}]);
//# sourceMappingURL=default-src_app_services_sleep_service_ts.js.map