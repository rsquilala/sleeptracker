"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_sleep-timer_sleep-timer_module_ts"],{

/***/ 2715:
/*!***********************************************************!*\
  !*** ./src/app/sleep-timer/sleep-timer-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SleepTimerPageRoutingModule": () => (/* binding */ SleepTimerPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _sleep_timer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sleep-timer.page */ 5158);




const routes = [
    {
        path: '',
        component: _sleep_timer_page__WEBPACK_IMPORTED_MODULE_0__.SleepTimerPage
    }
];
let SleepTimerPageRoutingModule = class SleepTimerPageRoutingModule {
};
SleepTimerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SleepTimerPageRoutingModule);



/***/ }),

/***/ 9066:
/*!***************************************************!*\
  !*** ./src/app/sleep-timer/sleep-timer.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SleepTimerPageModule": () => (/* binding */ SleepTimerPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _sleep_timer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sleep-timer-routing.module */ 2715);
/* harmony import */ var _sleep_timer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sleep-timer.page */ 5158);







let SleepTimerPageModule = class SleepTimerPageModule {
};
SleepTimerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _sleep_timer_routing_module__WEBPACK_IMPORTED_MODULE_0__.SleepTimerPageRoutingModule
        ],
        declarations: [_sleep_timer_page__WEBPACK_IMPORTED_MODULE_1__.SleepTimerPage]
    })
], SleepTimerPageModule);



/***/ }),

/***/ 5158:
/*!*************************************************!*\
  !*** ./src/app/sleep-timer/sleep-timer.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SleepTimerPage": () => (/* binding */ SleepTimerPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _sleep_timer_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sleep-timer.page.html?ngResource */ 4021);
/* harmony import */ var _sleep_timer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sleep-timer.page.scss?ngResource */ 7064);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _data_overnight_sleep_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/overnight-sleep-data */ 7212);
/* harmony import */ var _services_sleep_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/sleep.service */ 2517);
/* harmony import */ var _capacitor_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/motion */ 867);







let SleepTimerPage = class SleepTimerPage {
    constructor(sleepService) {
        this.sleepService = sleepService;
        this.time_started = null;
        this.timer = null;
        this.is_running = false;
        this.device_is_face_down = false;
        this.last_logged_data = null;
        this.orientation_listener = null;
    }
    ngOnInit() {
        if (this.orientation_listener === null)
            this.init_motion_listener();
    }
    requestPermission() {
        try {
            DeviceMotionEvent.requestPermission().then(state => {
                if (state === 'granted')
                    return true;
                else
                    return false;
            });
        }
        catch (_a) {
            console.log('here');
            return true;
        }
    }
    init_motion_listener() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const granted = DeviceMotionEvent.requestPermission().then(state => {
                    return (state === 'granted');
                });
                if (!granted)
                    return;
            }
            catch (e) {
                // OS does not ask for permission to DeviceMotionEvent
            }
            this.orientation_listener = yield _capacitor_motion__WEBPACK_IMPORTED_MODULE_4__.Motion.addListener('orientation', (event) => {
                const epsilon = 30;
                if ((180 - Math.abs(event.beta) <= epsilon) && (Math.abs(event.gamma) <= epsilon)) {
                    // Device is FACE DOWN (within 30 degrees)
                    if (!this.device_is_face_down) {
                        this.device_is_face_down = true;
                        this.start();
                    }
                }
                else {
                    // Device is NOT FACE DOWN
                    if (this.device_is_face_down) {
                        this.device_is_face_down = false;
                        this.stop();
                    }
                }
            });
        });
    }
    time() {
        if (!this.is_running)
            return "0:00:00";
        var current = new Date();
        var elapsed = new Date(current.getTime() - this.time_started.getTime());
        var hour = elapsed.getUTCHours().toString();
        var min = elapsed.getUTCMinutes().toString().padStart(2, '0');
        var sec = elapsed.getUTCSeconds().toString().padStart(2, '0');
        return hour + ':' + min + ':' + sec;
    }
    start() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (this.is_running)
                return;
            this.is_running = true;
            this.time_started = new Date();
            this.timer = setInterval(this.time.bind(this), 1000);
        });
    }
    stop() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.is_running)
                return;
            this.is_running = false;
            var data = new _data_overnight_sleep_data__WEBPACK_IMPORTED_MODULE_2__.OvernightSleepData(this.time_started, new Date());
            this.last_logged_data = data;
            this.sleepService.logOvernightData(data);
            // if (data.elapsed / (1000*60) > 0) {
            //   // Record it as a sleep only if the elapsed time is at least one minute (prevents accidental "sleeps")
            //   this.last_logged_data = data;
            //   this.sleepService.logOvernightData(data);
            // }
            clearInterval(this.timer);
        });
    }
};
SleepTimerPage.ctorParameters = () => [
    { type: _services_sleep_service__WEBPACK_IMPORTED_MODULE_3__.SleepService }
];
SleepTimerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-sleep-timer',
        template: _sleep_timer_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_sleep_timer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SleepTimerPage);



/***/ }),

/***/ 5099:
/*!****************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Capacitor": () => (/* binding */ Capacitor),
/* harmony export */   "CapacitorCookies": () => (/* binding */ CapacitorCookies),
/* harmony export */   "CapacitorException": () => (/* binding */ CapacitorException),
/* harmony export */   "CapacitorHttp": () => (/* binding */ CapacitorHttp),
/* harmony export */   "CapacitorPlatforms": () => (/* binding */ CapacitorPlatforms),
/* harmony export */   "ExceptionCode": () => (/* binding */ ExceptionCode),
/* harmony export */   "Plugins": () => (/* binding */ Plugins),
/* harmony export */   "WebPlugin": () => (/* binding */ WebPlugin),
/* harmony export */   "WebView": () => (/* binding */ WebView),
/* harmony export */   "addPlatform": () => (/* binding */ addPlatform),
/* harmony export */   "registerPlugin": () => (/* binding */ registerPlugin),
/* harmony export */   "registerWebPlugin": () => (/* binding */ registerWebPlugin),
/* harmony export */   "setPlatform": () => (/* binding */ setPlatform)
/* harmony export */ });
/* harmony import */ var C_Users_rsqui_Ingress_INF_133_A4_sleeptracker_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);


/*! Capacitor: https://capacitorjs.com/ - MIT License */
const createCapacitorPlatforms = win => {
  const defaultPlatformMap = new Map();
  defaultPlatformMap.set('web', {
    name: 'web'
  });
  const capPlatforms = win.CapacitorPlatforms || {
    currentPlatform: {
      name: 'web'
    },
    platforms: defaultPlatformMap
  };

  const addPlatform = (name, platform) => {
    capPlatforms.platforms.set(name, platform);
  };

  const setPlatform = name => {
    if (capPlatforms.platforms.has(name)) {
      capPlatforms.currentPlatform = capPlatforms.platforms.get(name);
    }
  };

  capPlatforms.addPlatform = addPlatform;
  capPlatforms.setPlatform = setPlatform;
  return capPlatforms;
};

const initPlatforms = win => win.CapacitorPlatforms = createCapacitorPlatforms(win);
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */


const CapacitorPlatforms = /*#__PURE__*/initPlatforms(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */

const addPlatform = CapacitorPlatforms.addPlatform;
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */

const setPlatform = CapacitorPlatforms.setPlatform;

const legacyRegisterWebPlugin = (cap, webPlugin) => {
  var _a;

  const config = webPlugin.config;
  const Plugins = cap.Plugins;

  if (!config || !config.name) {
    // TODO: add link to upgrade guide
    throw new Error(`Capacitor WebPlugin is using the deprecated "registerWebPlugin()" function, but without the config. Please use "registerPlugin()" instead to register this web plugin."`);
  } // TODO: add link to upgrade guide


  console.warn(`Capacitor plugin "${config.name}" is using the deprecated "registerWebPlugin()" function`);

  if (!Plugins[config.name] || ((_a = config === null || config === void 0 ? void 0 : config.platforms) === null || _a === void 0 ? void 0 : _a.includes(cap.getPlatform()))) {
    // Add the web plugin into the plugins registry if there already isn't
    // an existing one. If it doesn't already exist, that means
    // there's no existing native implementation for it.
    // - OR -
    // If we already have a plugin registered (meaning it was defined in the native layer),
    // then we should only overwrite it if the corresponding web plugin activates on
    // a certain platform. For example: Geolocation uses the WebPlugin on Android but not iOS
    Plugins[config.name] = webPlugin;
  }
};

var ExceptionCode;

(function (ExceptionCode) {
  /**
   * API is not implemented.
   *
   * This usually means the API can't be used because it is not implemented for
   * the current platform.
   */
  ExceptionCode["Unimplemented"] = "UNIMPLEMENTED";
  /**
   * API is not available.
   *
   * This means the API can't be used right now because:
   *   - it is currently missing a prerequisite, such as network connectivity
   *   - it requires a particular platform or browser version
   */

  ExceptionCode["Unavailable"] = "UNAVAILABLE";
})(ExceptionCode || (ExceptionCode = {}));

class CapacitorException extends Error {
  constructor(message, code, data) {
    super(message);
    this.message = message;
    this.code = code;
    this.data = data;
  }

}

const getPlatformId = win => {
  var _a, _b;

  if (win === null || win === void 0 ? void 0 : win.androidBridge) {
    return 'android';
  } else if ((_b = (_a = win === null || win === void 0 ? void 0 : win.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.bridge) {
    return 'ios';
  } else {
    return 'web';
  }
};

const createCapacitor = win => {
  var _a, _b, _c, _d, _e;

  const capCustomPlatform = win.CapacitorCustomPlatform || null;
  const cap = win.Capacitor || {};
  const Plugins = cap.Plugins = cap.Plugins || {};
  /**
   * @deprecated Use `capCustomPlatform` instead, default functions like registerPlugin will function with the new object.
   */

  const capPlatforms = win.CapacitorPlatforms;

  const defaultGetPlatform = () => {
    return capCustomPlatform !== null ? capCustomPlatform.name : getPlatformId(win);
  };

  const getPlatform = ((_a = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _a === void 0 ? void 0 : _a.getPlatform) || defaultGetPlatform;

  const defaultIsNativePlatform = () => getPlatform() !== 'web';

  const isNativePlatform = ((_b = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _b === void 0 ? void 0 : _b.isNativePlatform) || defaultIsNativePlatform;

  const defaultIsPluginAvailable = pluginName => {
    const plugin = registeredPlugins.get(pluginName);

    if (plugin === null || plugin === void 0 ? void 0 : plugin.platforms.has(getPlatform())) {
      // JS implementation available for the current platform.
      return true;
    }

    if (getPluginHeader(pluginName)) {
      // Native implementation available.
      return true;
    }

    return false;
  };

  const isPluginAvailable = ((_c = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _c === void 0 ? void 0 : _c.isPluginAvailable) || defaultIsPluginAvailable;

  const defaultGetPluginHeader = pluginName => {
    var _a;

    return (_a = cap.PluginHeaders) === null || _a === void 0 ? void 0 : _a.find(h => h.name === pluginName);
  };

  const getPluginHeader = ((_d = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _d === void 0 ? void 0 : _d.getPluginHeader) || defaultGetPluginHeader;

  const handleError = err => win.console.error(err);

  const pluginMethodNoop = (_target, prop, pluginName) => {
    return Promise.reject(`${pluginName} does not have an implementation of "${prop}".`);
  };

  const registeredPlugins = new Map();

  const defaultRegisterPlugin = (pluginName, jsImplementations = {}) => {
    const registeredPlugin = registeredPlugins.get(pluginName);

    if (registeredPlugin) {
      console.warn(`Capacitor plugin "${pluginName}" already registered. Cannot register plugins twice.`);
      return registeredPlugin.proxy;
    }

    const platform = getPlatform();
    const pluginHeader = getPluginHeader(pluginName);
    let jsImplementation;

    const loadPluginImplementation = /*#__PURE__*/function () {
      var _ref = (0,C_Users_rsqui_Ingress_INF_133_A4_sleeptracker_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!jsImplementation && platform in jsImplementations) {
          jsImplementation = typeof jsImplementations[platform] === 'function' ? jsImplementation = yield jsImplementations[platform]() : jsImplementation = jsImplementations[platform];
        } else if (capCustomPlatform !== null && !jsImplementation && 'web' in jsImplementations) {
          jsImplementation = typeof jsImplementations['web'] === 'function' ? jsImplementation = yield jsImplementations['web']() : jsImplementation = jsImplementations['web'];
        }

        return jsImplementation;
      });

      return function loadPluginImplementation() {
        return _ref.apply(this, arguments);
      };
    }();

    const createPluginMethod = (impl, prop) => {
      var _a, _b;

      if (pluginHeader) {
        const methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find(m => prop === m.name);

        if (methodHeader) {
          if (methodHeader.rtype === 'promise') {
            return options => cap.nativePromise(pluginName, prop.toString(), options);
          } else {
            return (options, callback) => cap.nativeCallback(pluginName, prop.toString(), options, callback);
          }
        } else if (impl) {
          return (_a = impl[prop]) === null || _a === void 0 ? void 0 : _a.bind(impl);
        }
      } else if (impl) {
        return (_b = impl[prop]) === null || _b === void 0 ? void 0 : _b.bind(impl);
      } else {
        throw new CapacitorException(`"${pluginName}" plugin is not implemented on ${platform}`, ExceptionCode.Unimplemented);
      }
    };

    const createPluginMethodWrapper = prop => {
      let remove;

      const wrapper = (...args) => {
        const p = loadPluginImplementation().then(impl => {
          const fn = createPluginMethod(impl, prop);

          if (fn) {
            const p = fn(...args);
            remove = p === null || p === void 0 ? void 0 : p.remove;
            return p;
          } else {
            throw new CapacitorException(`"${pluginName}.${prop}()" is not implemented on ${platform}`, ExceptionCode.Unimplemented);
          }
        });

        if (prop === 'addListener') {
          p.remove = /*#__PURE__*/(0,C_Users_rsqui_Ingress_INF_133_A4_sleeptracker_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            return remove();
          });
        }

        return p;
      }; // Some flair ✨


      wrapper.toString = () => `${prop.toString()}() { [capacitor code] }`;

      Object.defineProperty(wrapper, 'name', {
        value: prop,
        writable: false,
        configurable: false
      });
      return wrapper;
    };

    const addListener = createPluginMethodWrapper('addListener');
    const removeListener = createPluginMethodWrapper('removeListener');

    const addListenerNative = (eventName, callback) => {
      const call = addListener({
        eventName
      }, callback);

      const remove = /*#__PURE__*/function () {
        var _ref3 = (0,C_Users_rsqui_Ingress_INF_133_A4_sleeptracker_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const callbackId = yield call;
          removeListener({
            eventName,
            callbackId
          }, callback);
        });

        return function remove() {
          return _ref3.apply(this, arguments);
        };
      }();

      const p = new Promise(resolve => call.then(() => resolve({
        remove
      })));
      p.remove = /*#__PURE__*/(0,C_Users_rsqui_Ingress_INF_133_A4_sleeptracker_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        console.warn(`Using addListener() without 'await' is deprecated.`);
        yield remove();
      });
      return p;
    };

    const proxy = new Proxy({}, {
      get(_, prop) {
        switch (prop) {
          // https://github.com/facebook/react/issues/20030
          case '$$typeof':
            return undefined;

          case 'toJSON':
            return () => ({});

          case 'addListener':
            return pluginHeader ? addListenerNative : addListener;

          case 'removeListener':
            return removeListener;

          default:
            return createPluginMethodWrapper(prop);
        }
      }

    });
    Plugins[pluginName] = proxy;
    registeredPlugins.set(pluginName, {
      name: pluginName,
      proxy,
      platforms: new Set([...Object.keys(jsImplementations), ...(pluginHeader ? [platform] : [])])
    });
    return proxy;
  };

  const registerPlugin = ((_e = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _e === void 0 ? void 0 : _e.registerPlugin) || defaultRegisterPlugin; // Add in convertFileSrc for web, it will already be available in native context

  if (!cap.convertFileSrc) {
    cap.convertFileSrc = filePath => filePath;
  }

  cap.getPlatform = getPlatform;
  cap.handleError = handleError;
  cap.isNativePlatform = isNativePlatform;
  cap.isPluginAvailable = isPluginAvailable;
  cap.pluginMethodNoop = pluginMethodNoop;
  cap.registerPlugin = registerPlugin;
  cap.Exception = CapacitorException;
  cap.DEBUG = !!cap.DEBUG;
  cap.isLoggingEnabled = !!cap.isLoggingEnabled; // Deprecated props

  cap.platform = cap.getPlatform();
  cap.isNative = cap.isNativePlatform();
  return cap;
};

const initCapacitorGlobal = win => win.Capacitor = createCapacitor(win);

const Capacitor = /*#__PURE__*/initCapacitorGlobal(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
const registerPlugin = Capacitor.registerPlugin;
/**
 * @deprecated Provided for backwards compatibility for Capacitor v2 plugins.
 * Capacitor v3 plugins should import the plugin directly. This "Plugins"
 * export is deprecated in v3, and will be removed in v4.
 */

const Plugins = Capacitor.Plugins;
/**
 * Provided for backwards compatibility. Use the registerPlugin() API
 * instead, and provide the web plugin as the "web" implmenetation.
 * For example
 *
 * export const Example = registerPlugin('Example', {
 *   web: () => import('./web').then(m => new m.Example())
 * })
 *
 * @deprecated Deprecated in v3, will be removed from v4.
 */

const registerWebPlugin = plugin => legacyRegisterWebPlugin(Capacitor, plugin);
/**
 * Base class web plugins should extend.
 */


class WebPlugin {
  constructor(config) {
    this.listeners = {};
    this.windowListeners = {};

    if (config) {
      // TODO: add link to upgrade guide
      console.warn(`Capacitor WebPlugin "${config.name}" config object was deprecated in v3 and will be removed in v4.`);
      this.config = config;
    }
  }

  addListener(eventName, listenerFunc) {
    var _this = this;

    const listeners = this.listeners[eventName];

    if (!listeners) {
      this.listeners[eventName] = [];
    }

    this.listeners[eventName].push(listenerFunc); // If we haven't added a window listener for this event and it requires one,
    // go ahead and add it

    const windowListener = this.windowListeners[eventName];

    if (windowListener && !windowListener.registered) {
      this.addWindowListener(windowListener);
    }

    const remove = /*#__PURE__*/function () {
      var _ref5 = (0,C_Users_rsqui_Ingress_INF_133_A4_sleeptracker_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return _this.removeListener(eventName, listenerFunc);
      });

      return function remove() {
        return _ref5.apply(this, arguments);
      };
    }();

    const p = Promise.resolve({
      remove
    });
    Object.defineProperty(p, 'remove', {
      value: function () {
        var _ref6 = (0,C_Users_rsqui_Ingress_INF_133_A4_sleeptracker_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          console.warn(`Using addListener() without 'await' is deprecated.`);
          yield remove();
        });

        return function value() {
          return _ref6.apply(this, arguments);
        };
      }()
    });
    return p;
  }

  removeAllListeners() {
    var _this2 = this;

    return (0,C_Users_rsqui_Ingress_INF_133_A4_sleeptracker_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.listeners = {};

      for (const listener in _this2.windowListeners) {
        _this2.removeWindowListener(_this2.windowListeners[listener]);
      }

      _this2.windowListeners = {};
    })();
  }

  notifyListeners(eventName, data) {
    const listeners = this.listeners[eventName];

    if (listeners) {
      listeners.forEach(listener => listener(data));
    }
  }

  hasListeners(eventName) {
    return !!this.listeners[eventName].length;
  }

  registerWindowListener(windowEventName, pluginEventName) {
    this.windowListeners[pluginEventName] = {
      registered: false,
      windowEventName,
      pluginEventName,
      handler: event => {
        this.notifyListeners(pluginEventName, event);
      }
    };
  }

  unimplemented(msg = 'not implemented') {
    return new Capacitor.Exception(msg, ExceptionCode.Unimplemented);
  }

  unavailable(msg = 'not available') {
    return new Capacitor.Exception(msg, ExceptionCode.Unavailable);
  }

  removeListener(eventName, listenerFunc) {
    var _this3 = this;

    return (0,C_Users_rsqui_Ingress_INF_133_A4_sleeptracker_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const listeners = _this3.listeners[eventName];

      if (!listeners) {
        return;
      }

      const index = listeners.indexOf(listenerFunc);

      _this3.listeners[eventName].splice(index, 1); // If there are no more listeners for this type of event,
      // remove the window listener


      if (!_this3.listeners[eventName].length) {
        _this3.removeWindowListener(_this3.windowListeners[eventName]);
      }
    })();
  }

  addWindowListener(handle) {
    window.addEventListener(handle.windowEventName, handle.handler);
    handle.registered = true;
  }

  removeWindowListener(handle) {
    if (!handle) {
      return;
    }

    window.removeEventListener(handle.windowEventName, handle.handler);
    handle.registered = false;
  }

}

const WebView = /*#__PURE__*/registerPlugin('WebView');
/******** END WEB VIEW PLUGIN ********/

/******** COOKIES PLUGIN ********/

/**
 * Safely web encode a string value (inspired by js-cookie)
 * @param str The string value to encode
 */

const encode = str => encodeURIComponent(str).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);

class CapacitorCookiesPluginWeb extends WebPlugin {
  setCookie(options) {
    return (0,C_Users_rsqui_Ingress_INF_133_A4_sleeptracker_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Safely Encoded Key/Value
        const encodedKey = encode(options.key);
        const encodedValue = encode(options.value); // Clean & sanitize options

        const expires = `; expires=${(options.expires || '').replace('expires=', '')}`; // Default is "; expires="

        const path = (options.path || '/').replace('path=', ''); // Default is "path=/"

        document.cookie = `${encodedKey}=${encodedValue || ''}${expires}; path=${path}`;
      } catch (error) {
        return Promise.reject(error);
      }
    })();
  }

  deleteCookie(options) {
    return (0,C_Users_rsqui_Ingress_INF_133_A4_sleeptracker_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        document.cookie = `${options.key}=; Max-Age=0`;
      } catch (error) {
        return Promise.reject(error);
      }
    })();
  }

  clearCookies() {
    return (0,C_Users_rsqui_Ingress_INF_133_A4_sleeptracker_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const cookies = document.cookie.split(';') || [];

        for (const cookie of cookies) {
          document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
        }
      } catch (error) {
        return Promise.reject(error);
      }
    })();
  }

  clearAllCookies() {
    var _this4 = this;

    return (0,C_Users_rsqui_Ingress_INF_133_A4_sleeptracker_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this4.clearCookies();
      } catch (error) {
        return Promise.reject(error);
      }
    })();
  }

}

const CapacitorCookies = registerPlugin('CapacitorCookies', {
  web: () => new CapacitorCookiesPluginWeb()
}); // UTILITY FUNCTIONS

/**
 * Read in a Blob value and return it as a base64 string
 * @param blob The blob value to convert to a base64 string
 */

const readBlobAsBase64 = /*#__PURE__*/function () {
  var _ref7 = (0,C_Users_rsqui_Ingress_INF_133_A4_sleeptracker_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        const base64String = reader.result; // remove prefix "data:application/pdf;base64,"

        resolve(base64String.indexOf(',') >= 0 ? base64String.split(',')[1] : base64String);
      };

      reader.onerror = error => reject(error);

      reader.readAsDataURL(blob);
    });
  });

  return function readBlobAsBase64(_x) {
    return _ref7.apply(this, arguments);
  };
}();
/**
 * Normalize an HttpHeaders map by lowercasing all of the values
 * @param headers The HttpHeaders object to normalize
 */


const normalizeHttpHeaders = (headers = {}) => {
  const originalKeys = Object.keys(headers);
  const loweredKeys = Object.keys(headers).map(k => k.toLocaleLowerCase());
  const normalized = loweredKeys.reduce((acc, key, index) => {
    acc[key] = headers[originalKeys[index]];
    return acc;
  }, {});
  return normalized;
};
/**
 * Builds a string of url parameters that
 * @param params A map of url parameters
 * @param shouldEncode true if you should encodeURIComponent() the values (true by default)
 */


const buildUrlParams = (params, shouldEncode = true) => {
  if (!params) return null;
  const output = Object.entries(params).reduce((accumulator, entry) => {
    const [key, value] = entry;
    let encodedValue;
    let item;

    if (Array.isArray(value)) {
      item = '';
      value.forEach(str => {
        encodedValue = shouldEncode ? encodeURIComponent(str) : str;
        item += `${key}=${encodedValue}&`;
      }); // last character will always be "&" so slice it off

      item.slice(0, -1);
    } else {
      encodedValue = shouldEncode ? encodeURIComponent(value) : value;
      item = `${key}=${encodedValue}`;
    }

    return `${accumulator}&${item}`;
  }, ''); // Remove initial "&" from the reduce

  return output.substr(1);
};
/**
 * Build the RequestInit object based on the options passed into the initial request
 * @param options The Http plugin options
 * @param extra Any extra RequestInit values
 */


const buildRequestInit = (options, extra = {}) => {
  const output = Object.assign({
    method: options.method || 'GET',
    headers: options.headers
  }, extra); // Get the content-type

  const headers = normalizeHttpHeaders(options.headers);
  const type = headers['content-type'] || ''; // If body is already a string, then pass it through as-is.

  if (typeof options.data === 'string') {
    output.body = options.data;
  } // Build request initializers based off of content-type
  else if (type.includes('application/x-www-form-urlencoded')) {
    const params = new URLSearchParams();

    for (const [key, value] of Object.entries(options.data || {})) {
      params.set(key, value);
    }

    output.body = params.toString();
  } else if (type.includes('multipart/form-data')) {
    const form = new FormData();

    if (options.data instanceof FormData) {
      options.data.forEach((value, key) => {
        form.append(key, value);
      });
    } else {
      for (const key of Object.keys(options.data)) {
        form.append(key, options.data[key]);
      }
    }

    output.body = form;
    const headers = new Headers(output.headers);
    headers.delete('content-type'); // content-type will be set by `window.fetch` to includy boundary

    output.headers = headers;
  } else if (type.includes('application/json') || typeof options.data === 'object') {
    output.body = JSON.stringify(options.data);
  }

  return output;
}; // WEB IMPLEMENTATION


class CapacitorHttpPluginWeb extends WebPlugin {
  /**
   * Perform an Http request given a set of options
   * @param options Options to build the HTTP request
   */
  request(options) {
    return (0,C_Users_rsqui_Ingress_INF_133_A4_sleeptracker_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const requestInit = buildRequestInit(options, options.webFetchExtra);
      const urlParams = buildUrlParams(options.params, options.shouldEncodeUrlParams);
      const url = urlParams ? `${options.url}?${urlParams}` : options.url;
      const response = yield fetch(url, requestInit);
      const contentType = response.headers.get('content-type') || ''; // Default to 'text' responseType so no parsing happens

      let {
        responseType = 'text'
      } = response.ok ? options : {}; // If the response content-type is json, force the response to be json

      if (contentType.includes('application/json')) {
        responseType = 'json';
      }

      let data;
      let blob;

      switch (responseType) {
        case 'arraybuffer':
        case 'blob':
          blob = yield response.blob();
          data = yield readBlobAsBase64(blob);
          break;

        case 'json':
          data = yield response.json();
          break;

        case 'document':
        case 'text':
        default:
          data = yield response.text();
      } // Convert fetch headers to Capacitor HttpHeaders


      const headers = {};
      response.headers.forEach((value, key) => {
        headers[key] = value;
      });
      return {
        data,
        headers,
        status: response.status,
        url: response.url
      };
    })();
  }
  /**
   * Perform an Http GET request given a set of options
   * @param options Options to build the HTTP request
   */


  get(options) {
    var _this5 = this;

    return (0,C_Users_rsqui_Ingress_INF_133_A4_sleeptracker_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this5.request(Object.assign(Object.assign({}, options), {
        method: 'GET'
      }));
    })();
  }
  /**
   * Perform an Http POST request given a set of options
   * @param options Options to build the HTTP request
   */


  post(options) {
    var _this6 = this;

    return (0,C_Users_rsqui_Ingress_INF_133_A4_sleeptracker_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this6.request(Object.assign(Object.assign({}, options), {
        method: 'POST'
      }));
    })();
  }
  /**
   * Perform an Http PUT request given a set of options
   * @param options Options to build the HTTP request
   */


  put(options) {
    var _this7 = this;

    return (0,C_Users_rsqui_Ingress_INF_133_A4_sleeptracker_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this7.request(Object.assign(Object.assign({}, options), {
        method: 'PUT'
      }));
    })();
  }
  /**
   * Perform an Http PATCH request given a set of options
   * @param options Options to build the HTTP request
   */


  patch(options) {
    var _this8 = this;

    return (0,C_Users_rsqui_Ingress_INF_133_A4_sleeptracker_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this8.request(Object.assign(Object.assign({}, options), {
        method: 'PATCH'
      }));
    })();
  }
  /**
   * Perform an Http DELETE request given a set of options
   * @param options Options to build the HTTP request
   */


  delete(options) {
    var _this9 = this;

    return (0,C_Users_rsqui_Ingress_INF_133_A4_sleeptracker_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this9.request(Object.assign(Object.assign({}, options), {
        method: 'DELETE'
      }));
    })();
  }

}

const CapacitorHttp = registerPlugin('CapacitorHttp', {
  web: () => new CapacitorHttpPluginWeb()
});
/******** END HTTP PLUGIN ********/



/***/ }),

/***/ 9017:
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/motion/dist/esm/definitions.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 867:
/*!**********************************************************!*\
  !*** ./node_modules/@capacitor/motion/dist/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Motion": () => (/* binding */ Motion)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 9017);

const Motion = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Motion', {
  android: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_motion_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 8651)).then(m => new m.MotionWeb()),
  ios: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_motion_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 8651)).then(m => new m.MotionWeb()),
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_motion_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 8651)).then(m => new m.MotionWeb())
});



/***/ }),

/***/ 7064:
/*!**************************************************************!*\
  !*** ./src/app/sleep-timer/sleep-timer.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "ion-title {\n  text-align: center;\n  font-size: large;\n}\n\nion-card {\n  border-radius: 15px;\n}\n\nion-text {\n  font-size: medium;\n}\n\n#timer {\n  font-size: 10vw;\n}\n\n#stop {\n  --background: darkred;\n  --background-hover: darkred;\n  --color: white;\n}\n\n#start {\n  --background: green;\n  --background-hover: green;\n  --color: white;\n}\n\n#below-recommended {\n  --background: goldenrod;\n  --color: white;\n}\n\n#below-recommended ion-icon {\n  color: white;\n}\n\n#above-recommended {\n  --background: green;\n  --color: white;\n}\n\n#above-recommended ion-icon {\n  color: white;\n}\n\nion-grid {\n  text-align: center;\n  justify-content: center;\n}\n\n#container {\n  text-align: center;\n  position: static;\n  left: 0;\n  right: 0;\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNsZWVwLXRpbWVyLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXElORiUyMDEzM1xcQTRcXHNsZWVwdHJhY2tlclxcc3JjXFxhcHBcXHNsZWVwLXRpbWVyXFxzbGVlcC10aW1lci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0FDQ0Q7O0FERUE7RUFDQyxtQkFBQTtBQ0NEOztBREVBO0VBQ0MsaUJBQUE7QUNDRDs7QURFQTtFQUNDLGVBQUE7QUNDRDs7QURFQTtFQUNDLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0FDQ0Q7O0FERUE7RUFDQyxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ0NEOztBREVBO0VBQ0MsdUJBQUE7RUFDQSxjQUFBO0FDQ0Q7O0FERUE7RUFDQyxZQUFBO0FDQ0Q7O0FERUE7RUFDQyxtQkFBQTtFQUNBLGNBQUE7QUNDRDs7QURFQTtFQUNDLFlBQUE7QUNDRDs7QURFQTtFQUNDLGtCQUFBO0VBQ0EsdUJBQUE7QUNDRDs7QURVQTtFQUNDLGtCQUFBO0VBRUEsZ0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQ1JEOztBRFdBO0VBQ0MsZUFBQTtFQUNBLGlCQUFBO0FDUkQ7O0FEV0E7RUFDQyxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQ1ZEOztBRGFBO0VBQ0MscUJBQUE7QUNWRCIsImZpbGUiOiJzbGVlcC10aW1lci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGUge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRmb250LXNpemU6IGxhcmdlO1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcblx0Ym9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG5cclxuaW9uLXRleHQge1xyXG5cdGZvbnQtc2l6ZTogbWVkaXVtO1xyXG59XHJcblxyXG4jdGltZXIge1xyXG5cdGZvbnQtc2l6ZTogMTB2dztcclxufVxyXG5cclxuI3N0b3Age1xyXG5cdC0tYmFja2dyb3VuZDogZGFya3JlZDtcclxuXHQtLWJhY2tncm91bmQtaG92ZXI6IGRhcmtyZWQ7XHJcblx0LS1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNzdGFydCB7XHJcblx0LS1iYWNrZ3JvdW5kOiBncmVlbjtcclxuXHQtLWJhY2tncm91bmQtaG92ZXI6IGdyZWVuO1xyXG5cdC0tY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jYmVsb3ctcmVjb21tZW5kZWQge1xyXG5cdC0tYmFja2dyb3VuZDogZ29sZGVucm9kO1xyXG5cdC0tY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jYmVsb3ctcmVjb21tZW5kZWQgaW9uLWljb24ge1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI2Fib3ZlLXJlY29tbWVuZGVkIHtcclxuXHQtLWJhY2tncm91bmQ6IGdyZWVuO1xyXG5cdC0tY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jYWJvdmUtcmVjb21tZW5kZWQgaW9uLWljb24ge1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLWdyaWQge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLy8gI2R1cmF0aW9uIHtcclxuLy8gXHRmb250LXNpemU6IG1lZGl1bTtcclxuLy8gfVxyXG5cclxuLy8gI2RhdGUge1xyXG4vLyBcdGZvbnQtc2l6ZTogc21hbGw7XHJcbi8vIH1cclxuXHJcbiNjb250YWluZXIge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcblx0cG9zaXRpb246IHN0YXRpYztcclxuXHRsZWZ0OiAwO1xyXG5cdHJpZ2h0OiAwO1xyXG59XHJcblxyXG4jY29udGFpbmVyIHN0cm9uZyB7XHJcblx0Zm9udC1zaXplOiAyMHB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG59XHJcblxyXG4jY29udGFpbmVyIHAge1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuXHRsaW5lLWhlaWdodDogMjJweDtcclxuXHJcblx0Y29sb3I6ICM4YzhjOGM7XHJcblxyXG5cdG1hcmdpbjogMDtcclxufVxyXG5cclxuI2NvbnRhaW5lciBhIHtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn0iLCJpb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5cbmlvbi1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuaW9uLXRleHQge1xuICBmb250LXNpemU6IG1lZGl1bTtcbn1cblxuI3RpbWVyIHtcbiAgZm9udC1zaXplOiAxMHZ3O1xufVxuXG4jc3RvcCB7XG4gIC0tYmFja2dyb3VuZDogZGFya3JlZDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBkYXJrcmVkO1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuI3N0YXJ0IHtcbiAgLS1iYWNrZ3JvdW5kOiBncmVlbjtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBncmVlbjtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbiNiZWxvdy1yZWNvbW1lbmRlZCB7XG4gIC0tYmFja2dyb3VuZDogZ29sZGVucm9kO1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuI2JlbG93LXJlY29tbWVuZGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4jYWJvdmUtcmVjb21tZW5kZWQge1xuICAtLWJhY2tncm91bmQ6IGdyZWVuO1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuI2Fib3ZlLXJlY29tbWVuZGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tZ3JpZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjOGM4YzhjO1xuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iXX0= */";

/***/ }),

/***/ 4021:
/*!**************************************************************!*\
  !*** ./src/app/sleep-timer/sleep-timer.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Sleep Timer</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Start and stop a sleep timer -->\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Log Your Night's Sleep</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      Start a sleep timer before you go to bed, and end it when you wake up\n    </ion-card-content>\n  </ion-card>\n\n  <div id=\"container\">\n    <ion-card class=\"ion-padding\">\n      <ion-card-content>\n        <ion-text id=\"timer\">{{time()}}</ion-text>\n      </ion-card-content>\n    </ion-card>\n  \n    <ion-button *ngIf=\"!is_running\" id=\"start\" (click)=\"start()\">Start</ion-button>\n    <ion-button *ngIf=\"is_running\" id=\"stop\" (click)=\"stop()\">Stop</ion-button>\n\n    <ion-card *ngIf=\"last_logged_data\">\n      <ion-card-content>\n        <ion-grid>\n          <ion-row><ion-col>\n            <ion-text>Your last logged sleep:</ion-text>\n          </ion-col></ion-row>\n\n          <ion-row><ion-col>\n            <!-- <ion-chip [color]=\"(last_logged_data.elapsed / (1000*60*60) < 8) ? 'warning' : 'success'\">\n              <ion-icon name=\"time\"></ion-icon>\n              <ion-text id=\"duration\">{{last_logged_data.summaryString()}}</ion-text>\n            </ion-chip> -->\n            <ion-chip id=\"below-recommended\" *ngIf=\"last_logged_data.elapsed / (1000*60*60) < 8\">\n              <ion-icon name=\"time\"></ion-icon>\n              <ion-text>{{last_logged_data.summaryString()}}</ion-text>\n            </ion-chip>\n            <ion-chip id=\"above-recommended\" *ngIf=\"last_logged_data.elapsed / (1000*60*60) >= 8\">\n              <ion-icon name=\"time\"></ion-icon>\n              <ion-text>{{last_logged_data.summaryString()}}</ion-text>\n            </ion-chip>\n          </ion-col></ion-row>\n\n          <ion-row><ion-col>\n            <ion-text id=\"date\">{{last_logged_data.dateString()}}</ion-text>\n          </ion-col></ion-row>\n        </ion-grid>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_sleep-timer_sleep-timer_module_ts.js.map