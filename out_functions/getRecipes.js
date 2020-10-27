(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("firebase-admin");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROJECT_ID", function() { return PROJECT_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIREBASE_URL", function() { return FIREBASE_URL; });
/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_admin__WEBPACK_IMPORTED_MODULE_0__);

let env;

if (!"production" !== "production") {
  env = __webpack_require__(3).default;
} else {
  env = process.env;
}

const PROJECT_ID = env.FIREBASE_PROJECT_ID;
const FIREBASE_URL = `https://firestore.googleapis.com/v1beta1/projects`;
const firebaseKey = {
  type: env.FIREBASE_ACC_TYPE,
  project_id: PROJECT_ID,
  private_key_id: env.FIREBASE_PRIVATE_KEY_ID,
  private_key: env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  client_email: env.FIREBASE_CLIENT_EMAIL,
  client_id: env.FIREBASE_CLIENT_ID,
  auth_uri: env.FIREBASE_AUTH_URI,
  token_uri: env.FIREBASE_TOKEN_URI,
  auth_provider_x509_cert_url: env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: env.FIREBASE_CLIENT_X509_CERT_URL
};
let firebaseDB;

if (!firebase_admin__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {
  firebase_admin__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp({
    credential: firebase_admin__WEBPACK_IMPORTED_MODULE_0___default.a.credential.cert(firebaseKey)
  });
  firebase_admin__WEBPACK_IMPORTED_MODULE_0___default.a.firestore().settings({
    timestampsInSnapshots: true
  });
}

firebaseDB = firebase_admin__WEBPACK_IMPORTED_MODULE_0___default.a.firestore;
/* harmony default export */ __webpack_exports__["default"] = (firebaseDB);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_0__);

Object(dotenv__WEBPACK_IMPORTED_MODULE_0__["config"])();
var _process = process,
    env = _process.env;
/* harmony default export */ __webpack_exports__["default"] = (env);

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handler", function() { return handler; });
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const convertToRealDate = secs => {
  let date = new Date(0);
  date.setUTCSeconds(secs);
  return date.toISOString();
};

const buildListResponse = async () => {
  const dbSnapshot = await Object(_firebase__WEBPACK_IMPORTED_MODULE_0__["default"])().collection("recipes").get();
  let docPromises = [];
  dbSnapshot.forEach(doc => {
    const docPromise = new Promise(async (res, rej) => {
      try {
        const {
          slug,
          title
        } = doc.data();
        const response = {
          id: doc.id,
          slug,
          title
        };
        res(response);
      } catch (e) {
        console.log(e);
        rej(e);
      }
    });
    docPromises.push(docPromise);
  });
  const docs = await Promise.all(docPromises);
  return docs;
};

const buildDetailResponse = async slug => {
  const dbSnapshot = await Object(_firebase__WEBPACK_IMPORTED_MODULE_0__["default"])().collection("recipes").where("slug", "==", slug).get();
  let docPromises = [];
  dbSnapshot.forEach(doc => {
    const docPromise = new Promise(async (res, rej) => {
      try {
        const _doc$data = doc.data(),
              {
          title,
          slug
        } = _doc$data,
              fields = _objectWithoutProperties(_doc$data, ["title", "slug"]);

        const response = {
          id: doc.id,
          title,
          fields
        };
        res(response);
      } catch (e) {
        console.log(e);
        rej(e);
      }
    });
    docPromises.push(docPromise);
  });
  const docs = await Promise.all(docPromises);
  return docs;
};

const handler = async function handler(event, context) {
  const {
    slug
  } = event.queryStringParameters || {};
  let response;

  try {
    if (slug) {
      const data = await buildDetailResponse(slug);

      if (data.length) {
        response = data[0];
      } else {
        response = {
          error: true,
          errorMessage: "No recipe found with that slug"
        };
      }
    } else {
      response = await buildListResponse();
    }

    return {
      statusCode: 200,
      body: JSON.stringify(response),
      headers: {
        "Content-Type": "application/json"
      }
    };
  } catch (err) {
    console.log("Error getting documents", err);
    const error = new Error(err);
    return {
      statusCode: error.statusCode,
      message: error.message
    };
  }
};



/***/ })
/******/ ])));