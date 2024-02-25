/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 855:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(543);
;// CONCATENATED MODULE: ./src/groupClass.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Group = /*#__PURE__*/function () {
  function Group(groupid, groupname, groupcolor) {
    _classCallCheck(this, Group);
    this.collection = [];
    this.groupname = groupname;
    this.groupcolor = groupcolor;
    this.groupid = groupid;
    // console.log("Group created with name: " + this.groupname);
  }
  _createClass(Group, [{
    key: "setGroupname",
    value: function setGroupname(groupname) {
      this.groupname = groupname;
    }
  }, {
    key: "setGroupcolor",
    value: function setGroupcolor(groupcolor) {
      this.groupcolor = groupcolor;
    }
  }, {
    key: "getGroupname",
    value: function getGroupname() {
      return this.groupname;
    }
  }, {
    key: "getGroupcolor",
    value: function getGroupcolor() {
      return this.groupcolor;
    }
  }, {
    key: "displayGroupInfo",
    value: function displayGroupInfo() {
      return {
        groupname: this.groupname,
        groupcolor: this.groupcolor
      };
    }
  }, {
    key: "editGroup",
    value: function editGroup() {
      return {
        groupname: this.groupname,
        groupcolor: this.groupcolor
      };
    }
  }, {
    key: "getGroupid",
    value: function getGroupid() {
      return this.groupid;
    }
  }, {
    key: "setGroupid",
    value: function setGroupid(groupid) {
      this.groupid = groupid;
    }
  }, {
    key: "addNote",
    value: function addNote(note) {
      this.collection.push(note);
    }
  }, {
    key: "deleteNote",
    value: function deleteNote(index) {
      this.collection.splice(index, 1);
    }
  }, {
    key: "getCollection",
    value: function getCollection() {
      return this.collection;
    }
  }, {
    key: "clearCollection",
    value: function clearCollection() {
      this.collection = [];
    }
  }, {
    key: "editCollection",
    value: function editCollection() {
      return this.collection;
    }
  }, {
    key: "displayCollection",
    value: function displayCollection() {
      return this.collection;
    }
  }, {
    key: "removeFromGroup",
    value: function removeFromGroup() {
      this.groupid = null;
    }
  }, {
    key: "isInGroup",
    value: function isInGroup() {
      return this.groupid !== null;
    }
  }, {
    key: "addToGroup",
    value: function addToGroup(task) {
      this.groupid = task.groupid;
    }
  }]);
  return Group;
}();
;// CONCATENATED MODULE: ./src/noteClass.js
function noteClass_typeof(o) { "@babel/helpers - typeof"; return noteClass_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, noteClass_typeof(o); }
function noteClass_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function noteClass_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, noteClass_toPropertyKey(descriptor.key), descriptor); } }
function noteClass_createClass(Constructor, protoProps, staticProps) { if (protoProps) noteClass_defineProperties(Constructor.prototype, protoProps); if (staticProps) noteClass_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function noteClass_toPropertyKey(t) { var i = noteClass_toPrimitive(t, "string"); return "symbol" == noteClass_typeof(i) ? i : String(i); }
function noteClass_toPrimitive(t, r) { if ("object" != noteClass_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != noteClass_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Task = /*#__PURE__*/function () {
  function Task(title, message, date, tag, priority, groupid) {
    noteClass_classCallCheck(this, Task);
    this.title = title;
    this.message = message;
    this.date = date;
    this.tag = tag === "" ? null : "".concat('#' + tag);
    this.priority = priority === "" ? null : priority; //low, medium, high
    this.completed = false;
    this.groupid = groupid;
  }
  noteClass_createClass(Task, [{
    key: "toggleCompleted",
    value: function toggleCompleted() {
      this.completed = !this.completed;
    }
  }, {
    key: "getTitle",
    value: function getTitle() {
      return this.title;
    }
  }, {
    key: "getGroupid",
    value: function getGroupid() {
      return this.groupid;
    }
  }, {
    key: "getPriority",
    value: function getPriority() {
      return this.priority;
    }
  }, {
    key: "getTag",
    value: function getTag() {
      return this.tag;
    }
  }, {
    key: "getDate",
    value: function getDate() {
      return this.date;
    }
  }, {
    key: "getMessage",
    value: function getMessage() {
      return this.message;
    }
  }, {
    key: "getCompleted",
    value: function getCompleted() {
      return this.completed;
    }
  }, {
    key: "setGroupid",
    value: function setGroupid(groupid) {
      this.groupid = groupid;
    }
  }, {
    key: "setTag",
    value: function setTag(tag) {
      this.tag = tag;
    }
  }, {
    key: "setMessage",
    value: function setMessage(message) {
      this.message = message;
    }
  }, {
    key: "addToGroup",
    value: function addToGroup(task) {
      this.groupid = task.groupid;
    }
  }, {
    key: "removeFromGroup",
    value: function removeFromGroup() {
      this.groupid = null;
    }
  }, {
    key: "isInGroup",
    value: function isInGroup() {
      return this.groupid !== null;
    }
  }, {
    key: "setPriority",
    value: function setPriority(priority) {
      this.priority = priority;
    }
  }, {
    key: "displayTaskDetails",
    value: function displayTaskDetails() {
      return {
        title: this.title,
        message: this.message,
        date: this.date,
        tag: this.tag,
        priority: this.priority
      };
    }
  }, {
    key: "editTask",
    value: function editTask() {
      return {
        title: this.title,
        message: this.message,
        date: this.date,
        tag: this.tag,
        priority: this.priority,
        groupid: this.groupid
      };
    }
  }]);
  return Task;
}();
;// CONCATENATED MODULE: ./src/reminder.js
function reminder_typeof(o) { "@babel/helpers - typeof"; return reminder_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, reminder_typeof(o); }
function reminder_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function reminder_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, reminder_toPropertyKey(descriptor.key), descriptor); } }
function reminder_createClass(Constructor, protoProps, staticProps) { if (protoProps) reminder_defineProperties(Constructor.prototype, protoProps); if (staticProps) reminder_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function reminder_toPropertyKey(t) { var i = reminder_toPrimitive(t, "string"); return "symbol" == reminder_typeof(i) ? i : String(i); }
function reminder_toPrimitive(t, r) { if ("object" != reminder_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != reminder_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var Reminder = /*#__PURE__*/function () {
  function Reminder() {
    reminder_classCallCheck(this, Reminder);
    this.collection = [];
    this.groups = [];
  }

  //add a default  group to the groups
  reminder_createClass(Reminder, [{
    key: "addDefaultGroupToGroups",
    value: function addDefaultGroupToGroups() {
      this.groups.push(new Group("General", "blue"));
    }
  }, {
    key: "addReminder",
    value: function addReminder(title, message, date, tag, priority, groupid) {
      this.collection.push(new Task(title, message, date, tag, priority, groupid));
    }
  }, {
    key: "getNotesByTag",
    value: function getNotesByTag(tag) {
      return this.collection.filter(function (task) {
        return task.getTag() === tag;
      });
    }

    //returns an array of all notes in a group
  }, {
    key: "getNotesByGroup",
    value: function getNotesByGroup(groupid) {
      return this.collection.filter(function (note) {
        return note.getGroupid() === groupid;
      });
    }

    //adds a new group to the collection
  }, {
    key: "addGroup",
    value: function addGroup(groupname, groupcolor) {
      this.collection.push(new Group(groupname, groupcolor));
    }

    //gets a specific group by its name
  }, {
    key: "getGroupByName",
    value: function getGroupByName(groupname) {
      return this.collection.find(function (group) {
        return group.getGroupname() === groupname;
      });
    }

    //adds a note to a group
  }, {
    key: "addNoteToGroup",
    value: function addNoteToGroup(note, groupid) {
      this.getGroupByName(groupid).collection.push(note);
    }
  }, {
    key: "removeGroup",
    value: function removeGroup(groupname) {
      this.collection = this.collection.filter(function (group) {
        return group.getGroupname() !== groupname;
      });
    }

    //removes a note from a group
  }, {
    key: "removeNoteFromGroup",
    value: function removeNoteFromGroup(note, groupid) {
      this.getGroupByName(groupid).collection = this.getGroupByName(groupid).collection.filter(function (n) {
        return n !== note;
      });
    }
  }, {
    key: "editGroup",
    value: function editGroup(groupname, groupcolor) {
      this.getGroupByName(groupname).setGroupcolor(groupcolor);
      this.getGroupByName(groupname).setGroupname(groupname);
    }
  }, {
    key: "editTask",
    value: function editTask(task, title, message, date, tag, priority, groupid) {
      task.setTitle(title);
      task.setMessage(message);
      task.setDate(date);
      task.setTag(tag);
      task.setPriority(priority);
      task.setGroupid(groupid);
    }
  }, {
    key: "deleteNote",
    value: function deleteNote(task) {
      this.collection = this.collection.filter(function (n) {
        return n !== task;
      });
    }
  }, {
    key: "deleteGroup",
    value: function deleteGroup(groupname) {
      this.collection = this.collection.filter(function (group) {
        return group.getGroupname() !== groupname;
      });
    }
  }, {
    key: "displayReminder",
    value: function displayReminder() {
      return this.collection;
    }
  }, {
    key: "displayReminderByGroup",
    value: function displayReminderByGroup(groupid) {
      return this.getGroupByName(groupid).collection;
    }
  }]);
  return Reminder;
}();
;// CONCATENATED MODULE: ./src/testimg.png
const testimg_namespaceObject = __webpack_require__.p + "images/testimg.png";
;// CONCATENATED MODULE: ./src/index.js




var taskMaster = new Reminder();
taskMaster.addDefaultGroupToGroups();
taskMaster.addReminder("test note", "first test", new Date(), "firsttag", "low", 0);
console.log(taskMaster.displayReminder());
taskMaster.collection[0].setTag("secondtag");
taskMaster.collection[0].toggleCompleted();
taskMaster.collection[0].setGroupid(1);
console.log(taskMaster.displayReminder());

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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			57: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkkizztaskmaster"] = self["webpackChunkkizztaskmaster"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [543], () => (__webpack_require__(855)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.bundle.js.map