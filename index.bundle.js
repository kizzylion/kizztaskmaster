/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 836:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  a: () => (/* binding */ taskMaster)
});

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
    this.taskCount = 0;
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
  }, {
    key: "getGroupListHTML",
    value: function getGroupListHTML() {
      return "\n    <li class=\"group cursor-pointer flex items-center  w-full pl-3  bg-white dark:bg-stone-900 dark:md:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 lg:bg-gray-100 lg:dark:bg-gray-800 lg:dark:hover:bg-gray-700\">\n      <span class=\"p-2 grid place-content-center ".concat(this.groupcolor, " rounded-full w-8 h-8 lg:w-6 lg:h-6\"><i class=\"bi bi-list-ul text-white text-base m-auto\"></i></span>\n      <span class=\" flex w-full items-center  py-4 pr-3 lg:py-2 :pr-2 ml-3 lg:ml-2 border-b border-gray-200 dark:border-gray-700 group-last:border-0\">\n        <h4 class=\"text-base lg:text-sm text-gray-900 dark:text-gray-50 w-full h-auto align-text-bottom leading-6 \">").concat(this.groupname, "</h4>\n        <p class=\"text-base text-gray-400 dark:text-gray-400 dark:text-gray-400 font-normal mr-1\">").concat(this.taskCount, "</p>\n        <span class=\"grid ml-2 w-6 h-6 place-content-center sm:hidden\"><i class=\"bi bi-chevron-right\"></i></span>\n      </span>\n    </li>\n    ");
    }
  }, {
    key: "calculateTaskCount",
    value: function calculateTaskCount(collection) {
      var _this = this;
      this.taskCount = collection.filter(function (note) {
        return note.getGroupid() === _this.groupid;
      }).length;
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
  }, {
    key: "getTaskHTML",
    value: function getTaskHTML() {
      var div = document.createElement('div');
      div.innerHTML = "\n            <div class=\"flex gap-x-4  lg:gap-x-3 mt-4\">\n            <div>\n            <input id=\"Completed\" type=\"checkbox\" name=\"Completed\">\n\n            </div>\n            <div class=\"flex flex-col w-full border-b border-gray-200 dark:border-gray-800 pb-2\">\n                <div class=\"flex gap-x-2\">\n                <h3 class=\"mr-auto text-gray-900 dark:text-gray-50 mb-2 text-xl\">".concat(this.title, "</h3>\n                <span class=\"cursor-pointer\"><i class=\"bi bi-flag-fill text-green-600 dark:text-green-500\"></i></span>\n                </div>\n                <p class=\"text-gray-500 dark:text-gray-500 text-sm lg:text-sm mb-2\">").concat(this.message, "</p>\n                <div class=\"flex\">\n                <span class=\"text-gray-500 dark:text-gray-400 text-sm mr-2\">Due: ").concat(this.date, "</span>\n                <span class=\"text-blue-500 dark:text-blue-400 text-sm mr-auto\">").concat(this.tag, "</span>\n                <span id=\"edittaskbtn\" data-btn=\"edittaskbtn\" class=\"inline-block text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-400 cursor-pointer  ml-auto\"><i class=\"bi bi-pen mr-2\"></i></span>\n                <span id=\"deletetaskbtn\" data-btn=\"deletetaskbtn\" class=\" text-gray-500 hover:text-red-600 dark:gray-red-400 dark:hover:text-red-600 cursor-pointer ml-4\"><i class=\"bi bi-trash3 text-red-500 hover:text-red-600\"></i></span>\n\n                </div>\n    \n            </div>\n    \n            </div>\n        ");
      return div;
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



// import { toggleUi } from "./components/toggle";

var Reminder = /*#__PURE__*/function () {
  function Reminder() {
    reminder_classCallCheck(this, Reminder);
    this.collection = [new Task("Pay Water Bill", "Pay utility bill for water bill", "2022-05-27", "General", "low", "General"), new Task("Pay Electricity Bill", "Pay utility bill for electric bill", "2022-05-27", "General", "low", "General")];
    this.groups = [new Group("General", "General", "bg-red-500"), new Group("Personal", "Personal", "bg-blue-500"), new Group("Work", "Work", "bg-green-500")];
  }

  //add a default  group to the groups
  reminder_createClass(Reminder, [{
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
    value: function addGroup(groupid, groupname, groupcolor) {
      this.groups.push(new Group(groupid, groupname, groupcolor));
      console.log(this.groups);
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
  }, {
    key: "noTaskUi",
    value: function noTaskUi() {
      var div = document.createElement("div");
      div.innerHTML = "\n            <div id=\"no-tasks\" class=\"flex-col w-full text-center mt-16 justify-items-center\">\n            <p class=\"text-base text-gray-400 dark:text-gray-400 font-medium\">No tasks found</p>\n            <p class=\"text-base text-gray-400 dark:text-gray-400 font-normal\">Add a task to get started</p>\n        </div>\n        ";
      return div;
    }
  }, {
    key: "updateGrouplist",
    value: function updateGrouplist() {
      var groupContainer = document.getElementById("taskgroups");
      groupContainer.innerHTML = "";
      this.groups.forEach(function (group) {
        groupContainer.insertAdjacentHTML('beforeend', group.getGroupListHTML());
      });
    }
  }, {
    key: "updateTasklist",
    value: function updateTasklist() {
      var _this = this;
      var taskContainer = document.getElementById("tasklist");
      taskContainer.innerHTML = "";
      console.log(this.collection);
      if (this.collection.length === 0) {
        taskContainer.innerHTML = "";
        taskContainer.appendChild(this.noTaskUi());
        return;
      }
      this.collection.forEach(function (task) {
        taskContainer.appendChild(task.getTaskHTML());
      });

      // get data-btn="deletetaskbtn" elements and bind the delete function
      var deleteButtons = document.querySelectorAll('[data-btn="deletetaskbtn"]');
      deleteButtons.forEach(function (button, index) {
        button.addEventListener("click", function () {
          _this.deleteNote(_this.collection[index]);
          _this.updateTasklist();
        });
      });
    }
  }, {
    key: "getGroup",
    value: function getGroup() {
      return this.groups;
    }
  }, {
    key: "getCountOfTaskInEachGroup",
    value: function getCountOfTaskInEachGroup() {
      var _this2 = this;
      this.groups.forEach(function (group) {
        group.calculateTaskCount(_this2.collection);
        console.log("".concat(group.getGroupname(), ": "), group.taskCount);
      });
    }
  }, {
    key: "update",
    value: function update() {
      taskMaster.getCountOfTaskInEachGroup();
      taskMaster.updateGrouplist();
      taskMaster.updateTasklist();
    }
  }]);
  return Reminder;
}();
;// CONCATENATED MODULE: ./src/renderMainUi.js
function renderUi() {
  var main = document.querySelector("main");
  main.innerHTML += "\n  \n    <header id=\"groupheader\" class=\"flex flex-col px-[1.25rem] py-4  lg:pr-6 bg-gray-50 dark:bg-gray-900 dark:md:bg-gray-900 px-5 lg:px-4 border-b border-gray-100 dark:border-gray-800 pb-0 relative \">\n      <div class=\"flex flex-col\">\n        <div class=\"flex items-center  align-middle\">\n          <span id=\"backbtn\" class=\"sm:hidden text-[1.5rem] text-gray-500 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-400 cursor-pointer font-bold mr-auto\"><i class=\"bi bi-chevron-left mr-2\"></i></span>\n          <span id=\"editgroupbtn\" class=\"text-base text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 cursor-pointer font-medium ml-auto\"><i class=\"bi bi-pen mr-2\"></i>Edit</span>\n          <span id=\"deletegroupbtn\" class=\"text-base text-gray-500 hover:text-red-400 dark:text-gray-400 dark:gray-red-400 dark:hover:text-red-400 cursor-pointer font-medium ml-4\"><i class=\"bi bi-trash3 mr-2 text-red-500 hover:text-red-600\"></i>Delete Group</span>\n        </div>\n        <div id=\"groupdescription\" class=\"flex py-4 lg:py-4\">\n          <h1 id=\"groupname\" class=\"text-3xl font-bold text-red-500 dark:text-red-400 mr-auto\">All</h1>\n          <p id=\"grouplength\" class=\"text-3xl font-bold text-red-500 dark:text-red-500\">0</p>\n        </div>\n      </div>\n      <div id=\"groupdescription2\" class=\"flex py-2 lg:py-2 text-xs \">\n        <span>6  Completed</span> <span class=\"ml-1 text-red-500  hover:text-red-600 dark:text-red-500 dark:hover:text-red-600 cursor-pointer font-medium\">\u2022 Clear</span> <span class=\"ml-auto  text-red-500  hover:text-red-600 dark:text-red-500 dark:hover:text-red-600 cursor-pointer font-medium\">Hide</span>\n      </div>\n    </header>\n    <ul id=\"tasklist\" class=\"flex flex-col py-0  lg:pr-6 h-full overflow-auto px-5 lg:px-4\">\n      <!-- Task List -->\n\n      \n      <div id=\"no-tasks\" class=\"hidden flex-col w-full text-center mt-16 justify-items-center\">\n        <p class=\"text-base text-gray-400 dark:text-gray-400 font-medium\">No tasks found</p>\n        <p class=\"text-base text-gray-400 dark:text-gray-400 font-normal\">Add a task to get started</p>\n      </div>\n\n      <div class=\"flex gap-x-4  lg:gap-x-3 mt-4\">\n      <div>\n        <input id=\"Completed\" type=\"checkbox\" name=\"Completed\">\n      </div>\n        <div class=\"flex flex-col w-full border-b border-gray-200 dark:border-gray-800 pb-2\">\n          <div class=\"flex gap-x-2\">\n            <h3 class=\"mr-auto text-gray-900 dark:text-gray-50 mb-2 text-xl\">{title}</h3>\n            <span class=\"cursor-pointer\"><i class=\"bi bi-flag-fill text-green-600 dark:text-green-500\"></i></span>\n          </div>\n          <p class=\"text-gray-500 dark:text-gray-500 text-sm lg:text-sm mb-2\">{description}</p>\n          <div class=\"flex\">\n            <span class=\"text-gray-500 dark:text-gray-400 text-sm mr-2\">Due: {date}</span>\n            <span class=\"text-blue-500 dark:text-blue-400 text-sm mr-auto\">{tag}</span>\n            <span id=\"edittaskbtn\" class=\"inline-block text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-400 cursor-pointer  ml-auto\"><i class=\"bi bi-pen mr-2\"></i></span>\n            <span id=\"deletetaskbtn\" class=\" text-gray-500 hover:text-red-600 dark:gray-red-400 dark:hover:text-red-600 cursor-pointer ml-4\"><i class=\"bi bi-trash3 text-red-500 hover:text-red-600\"></i></span>\n        \n          </div>\n\n        </div>\n\n      </div>\n      \n    </ul>\n    <footer id=\"groupfooter\" class=\"flex px-5 lg:px-4 py-4  lg:pr-6 bg-gray-50 dark:bg-neutral-900 dark:md:bg-gray-900\">\n      <div data-element=\"newtask\" class=\" text-indigo-500 dark:text-indigo-400 font-medium hover:text-indigo-600 dark:hover:text-indigo-300 cursor-pointer\"> <i class=\"bi bi-plus-circle-fill text-[1.25rem] mr-1\"></i> New Task</div>\n      <div class=\"sm:hidden sm:ml-0 text-indigo-500 dark:text-indigo-400 font-normal hover:text-indigo-600 dark:hover:text-indigo-300 cursor-pointer\"> <i class=\"bi bi-plus text-[1.25rem] mr-1 \"></i> New Group</div>\n    </footer>\n    ";
}
;// CONCATENATED MODULE: ./src/addgroup.js




var selectedColor;
function addGroupModal() {
  var GroupModalElement = document.getElementById("GroupModalElement");
  addGroupModalUi();
  groupIconColor();
  GroupModalElement.classList.remove("hidden");
  var addGroupBtn = document.getElementById("addgroupbtn");
  var closeGroupModal = document.getElementById("closegroupmodal");
  addGroupBtn.addEventListener("click", addGroup);
  closeGroupModal.addEventListener("click", function () {
    var GroupModalElement = document.querySelector("#GroupModalElement");
    GroupModalElement.classList.add("hidden");
    GroupModalElement.innerHTML = "";
  });
}

// const groupIcon = document.getElementById("groupIcon");
var colorPickerMenu = document.getElementById("colorPickerMenu");
function addGroupModalUi() {
  return document.querySelector("#GroupModalElement").innerHTML = "\n    \n    <!--\n      Background backdrop, show/hide based on modal state.\n  \n      Entering: \"ease-out duration-300\"\n        From: \"opacity-0\"\n        To: \"opacity-100\"\n      Leaving: \"ease-in duration-200\"\n        From: \"opacity-100\"\n        To: \"opacity-0\"\n    -->\n    <div class=\"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity\"></div>\n  \n    <div class=\"fixed inset-0 z-10 w-screen overflow-y-auto\">\n      <div class=\"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0\">\n        <!--\n          Modal panel, show/hide based on modal state.\n  \n          Entering: \"ease-out duration-300\"\n            From: \"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95\"\n            To: \"opacity-100 translate-y-0 sm:scale-100\"\n          Leaving: \"ease-in duration-200\"\n            From: \"opacity-100 translate-y-0 sm:scale-100\"\n            To: \"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95\"\n        -->\n        <div class=\"relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg\">\n          <div class=\"bg-white dark:bg-gray-900 px-4 pb-4 pt-5 sm:p-6 sm:pb-4\">\n            <div class=\"sm:flex sm:items-start\">\n  \n              <div class=\"mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full\">\n                \n                <h3 class=\" font-bold leading-6 text-center text-gray-700 dark:text-gray-50\" id=\"modal-title\">Add New Group</h3>\n                \n                <div class=\"antialiased mt-2\">\n                  \n                  <!-- select color -->\n                  <div class=\"max-w-sm mx-auto py-8\">\n                    <div class=\"mb-5\">\n                      <div class=\"flex flex-col items-center w-full\">\n                        <div class=\"w-full flex flex-col bg-gray-50 dark:bg-gray-800 rounded-md shadow-sm p-4\">\n                          <span id=\"groupIcon\" class=\"p-2 grid place-content-center rounded-full w-16 h-16 mx-auto mb-4\"><i class=\"bi bi-list-ul text-white text-3xl m-auto\"></i></span>\n                          <input id=\"groupName\" type=\"text\" placeholder=\"Enter Group Name\"  class=\"appearance-none text-center w-full rounded-md border-0 text-xl py-3 px-8 text-gray-900 dark:text-gray-50 dark:bg-gray-800 dark:ring-gray-700 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none required\">\n                          <!-- Group icon -->\n                        </div>\n                        <div class=\"relative mt-8\">\n                          <div class=\"flex flex-wrap  p-4 bg-gray-50 dark:bg-gray-800 w-full\" id=\"colorOptions\">\n                            <!-- Color options will be populated dynamically using JavaScript -->\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                \n                \n                \n\n              </div>\n            </div>\n          </div>\n          <div class=\"bg-gray-50 dark:bg-gray-950 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6\">\n            <button id=\"addgroupbtn\" type=\"button\" class=\"inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 sm:ml-3 sm:w-auto\">Add Group</button>\n            <button id=\"closegroupmodal\" type=\"button\" class=\"mt-3 inline-flex w-full justify-center rounded-md bg-white dark:bg-gray-900 px-3 py-2 text-sm font-semibold text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto\">Cancel</button>\n          </div>\n        </div>\n      </div>\n    </div>\n    ";
}

// Populate color options
function addColorOptions() {
  var colorOptions = ["bg-red-500", "bg-orange-500", "bg-yellow-500", "bg-green-500", "bg-blue-500", "bg-purple-500", "bg-pink-500", "bg-gray-500", "bg-lime-500", "bg-teal-500"];
  var groupIcon = document.getElementById("groupIcon");
  selectedColor = colorOptions[0];
  var formerColor = colorOptions[0];
  var colorOptionsContainer = document.getElementById("colorOptions");
  colorOptions.forEach(function (color) {
    var colorDiv = document.createElement("div");
    colorDiv.innerHTML = "\n     <div class=\"".concat(color, " h-8 w-8 cursor-pointer rounded-full \"></div>\n    ");
    colorDiv.classList.add("p-1", "cursor-pointer", "rounded-full", "hover:bg-gray-300", "dark:hover:bg-gray-600", "transition-colors", "color-tab");
    colorOptionsContainer.appendChild(colorDiv);
  });
  var colorPicker = document.querySelectorAll(".color-tab");
  colorPicker.forEach(function (color, index) {
    color.addEventListener("click", function (event) {
      groupIcon.classList.remove(formerColor);
      selectedColor = colorOptions[index];
      setActiveColor(color);
      console.log(groupIcon);
      console.log("selectedColor = ".concat(selectedColor));
      groupIcon.classList.add(selectedColor);
      console.log(colorOptions[index]);
      formerColor = selectedColor;
    });
  });
  function setActiveColor(event) {
    colorPicker.forEach(function (color) {
      color.classList.remove("active");
      color.classList.remove("bg-gray-500");
    });
    event.classList.add("active");
    event.classList.add("bg-gray-500");
  }
  setActiveColor(colorPicker[0]);
  return selectedColor;
}
function groupIconColor() {
  var groupIcon = document.getElementById("groupIcon");
  if (!groupIcon) {
    return;
  }
  var selectedColor = addColorOptions();
  groupIcon.classList.add(selectedColor);
}
function showAddGroupModal() {
  var newGroupElement = document.querySelectorAll('[data-element="newgroup"]');
  newGroupElement.forEach(function (element) {
    element.addEventListener("click", addGroupModal);
  });
}
function addGroup() {
  var groupName = document.getElementById("groupName").value;
  console.log(selectedColor);
  if (!groupName) {
    alert("Please enter group name");
    return;
  }
  if (taskMaster.groups.some(function (group) {
    return group.groupname.toLowerCase() === groupName.toLowerCase();
  })) {
    alert("This Group already exists");
    return;
  }
  taskMaster.addGroup(generateGroupID(), groupName, selectedColor);
  var GroupModalElement = document.getElementById("GroupModalElement");
  taskMaster.updateGrouplist();
  if (GroupModalElement) {
    GroupModalElement.innerHTML = "";
    GroupModalElement.classList.add("hidden");
  }
  showAddGroupModal();
}
function generateGroupID() {
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  var groupId = '';
  for (var i = 0; i < 6; i++) {
    groupId += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return groupId;
}
;// CONCATENATED MODULE: ./src/rendernav.js
function renderNavUi() {
  return document.body.innerHTML = "\n    <div id=\"main-container\" class=\"flex  text-light-text-tertiary dark:text-dark-text-tertiary h-full w-full\">\n    <nav id=\"Navigator\" class=\"flex flex-col bg-gray-100 dark:bg-neutral-950 dark:md:bg-gray-800 w-full sm:w-[45%] md:w-[46%] lg:w-[37%] xl:w-[21%] h-full border-r border-gray-200 dark:border-stone-950\">\n    <header class=\"flex p-5 lg:p-4 border-b-2 border-gray-200 dark:border-stone-800\">\n      <h1 class=\"text-2xl font-bold text-light-text-primary dark:text-dark-text-primary\">\n        KizzTask<span class=\"text-light-text-brand-tertiary dark:text-dark-text-brand-tertiary\">Master</span>\n      </h1>\n      <button class=\"ml-auto px-1 py-0 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:bg-dark-bg-secondary-hover\" id=\"theme-toggle\"></button>\n    </header>\n    <section class=\"flex flex-col h-full overflow-auto lg:overflow-hidden\">\n      <div id=\"dashboard\" class=\"w-full grid grid-cols-2 p-5  sm:p-4 lg:pr-2.5 gap-4 lg:gap-2 mt-6\">\n        <div data-id=\"tab\" class=\"p-3 lg:p-2 bg-white dark:bg-stone-900 dark:md:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600  rounded-lg\">\n          <div class=\"flex justify-between items-center\">\n            <span  class=\"p-1 grid place-content-center bg-gray-900 dark:bg-slate-500 rounded-full w-8 h-8 lg:w-6 lg:h-6\"><i class=\"bi bi-inbox-fill text-white text-xl lg:text-base m-auto\"></i></span>\n            <h3 class=\"ml-auto mr-1 font-bold text-[1.75rem] lg:text-base text-light-text-primary dark:text-gray-50 md:dark:text-gray-300 \">1</h3>\n          </div>\n          <h4 class=\"text-gray-500 dark:text-gray-400 mt-2  font-semibold text-[110%] lg:text-xs  leading-none\">All</h4>\n        </div>\n\n        \n        <div data-id=\"tab\" class=\"p-3 lg:p-2 bg-white dark:bg-stone-900 h dark:md:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600   rounded-lg\">\n          <div class=\"flex justify-between items-center\">\n            <span  class=\"p-1 grid place-content-center bg-gray-900 dark:bg-slate-500 rounded-full w-8 h-8 lg:w-6 lg:h-6\"><i class=\"bi bi-inbox-fill text-white text-xl lg:text-base m-auto\"></i></span>\n            <h3 class=\"ml-auto mr-1 font-bold text-[1.75rem] lg:text-base text-light-text-primary dark:text-gray-50 md:dark:text-gray-300 \">0</h3>\n          </div>\n          <h4 class=\"text-gray-500 dark:text-gray-400 mt-2  font-semibold text-[110%] lg:text-xs  leading-none\">Today</h4>\n        </div>\n\n        \n        <div data-id=\"tab\" class=\"p-3 lg:p-2 bg-white dark:bg-stone-900 h dark:md:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600   rounded-lg\">\n          <div class=\"flex justify-between items-center\">\n            <span  class=\"p-1 grid place-content-center bg-gray-900 dark:bg-slate-500 rounded-full w-8 h-8 lg:w-6 lg:h-6\"><i class=\"bi bi-inbox-fill text-white text-xl lg:text-base m-auto\"></i></span>\n            <h3 class=\"ml-auto mr-1 font-bold text-[1.75rem] lg:text-base text-light-text-primary dark:text-gray-50 md:dark:text-gray-300 \">3</h3>\n          </div>\n          <h4 class=\"text-gray-500 dark:text-gray-400 mt-2  font-semibold text-[110%] lg:text-xs  leading-none\">Priority</h4>\n        </div>\n\n        \n        <div data-id=\"tab\" class=\"p-3 lg:p-2 bg-white dark:bg-stone-900 h dark:md:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600   rounded-lg\">\n          <div class=\"flex justify-between items-center\">\n            <span  class=\"p-1 grid place-content-center bg-gray-900 dark:bg-slate-500 rounded-full w-8 h-8 lg:w-6 lg:h-6\"><i class=\"bi bi-inbox-fill text-white text-xl lg:text-base m-auto\"></i></span>\n            <h3 class=\"ml-auto mr-1 font-bold text-[1.75rem] lg:text-base text-light-text-primary dark:text-gray-50 md:dark:text-gray-300 \">2</h3>\n          </div>\n          <h4 class=\"text-gray-500 dark:text-gray-400 mt-2  font-semibold text-[110%] lg:text-xs  leading-none\">Completed</h4>\n        </div>\n\n      </div>\n      \n      <div id=\"groupdiv\" class=\" flex flex-col h-full lg:overflow-auto lg:hover:overflow-scroll relative\">\n        <header class=\"text-gray-900 dark:text-white md:dark:text-gray-300 mt-0 pb-2 font-bold px-5 text-[140%] lg:text-xs md:lg:pb-2 lg:pt-4 dark:lg:text-gray-500 lg:sticky top-0 bg-gray-100 dark:bg-neutral-950 dark:md:bg-gray-800  lg:border-b lg:border-gray-200 lg:dark:border-gray-700\">My Projects</header>\n        <ul id=\"taskgroups\" class=\"px-4 py-2 flex  flex-col rounded-lg lg:pr-2.5\" >\n          <!-- Taskgroup List -->\n          <li class=\"group flex items-center  w-full pl-3  bg-white dark:bg-stone-900 dark:md:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 lg:bg-gray-100 lg:dark:bg-gray-800 lg:dark:hover:bg-gray-700\">\n            <span  class=\"p-2 grid place-content-center bg-red-500 dark:bg-red-600 rounded-full w-8 h-8 lg:w-6 lg:h-6\"><i class=\"bi bi-list-ul text-white text-base m-auto\"></i></span>\n            <span class=\" flex w-full items-center  py-4 pr-3 lg:py-2 :pr-2 ml-3 lg:ml-2 border-b border-gray-200 dark:border-gray-700 group-last:border-0\">\n              <h4 class=\"text-base lg:text-sm text-gray-900 dark:text-gray-50 w-full h-auto align-text-bottom leading-6 \">Reminder</h4>\n              <p class=\"text-base text-gray-400 dark:text-gray-400 dark:text-gray-400 font-normal mr-1\">0</p>\n              <span class=\"grid ml-2 w-6 h-6 place-content-center sm:hidden\"><i class=\"bi bi-chevron-right\"></i></span>\n            </span>\n          </li>\n          <li class=\"group flex items-center  w-full pl-3  bg-white dark:bg-stone-900 dark:md:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 lg:bg-gray-100 lg:dark:bg-gray-800 lg:dark:hover:bg-gray-700\">\n            <span  class=\"p-2 grid place-content-center bg-orange-500 dark:bg-orange-600 rounded-full w-8 h-8 lg:w-6 lg:h-6\"><i class=\"bi bi-list-ul text-white text-base m-auto\"></i></span>\n            <span class=\" flex w-full items-center  py-4 pr-3 lg:py-2 :pr-2 ml-3 lg:ml-2 border-b border-gray-200 dark:border-gray-700 group-last:border-0\">\n              <h4 class=\"text-base lg:text-sm text-gray-900 dark:text-gray-50 w-full h-auto align-text-bottom leading-6 \">Home</h4>\n              <p class=\"text-base text-gray-400 dark:text-gray-400 dark:text-gray-400 font-normal mr-1\">0</p>\n              <span class=\"grid ml-2 w-6 h-6 place-content-center sm:hidden\"><i class=\"bi bi-chevron-right\"></i></span>\n            </span>\n          </li>\n          <li class=\"group flex items-center  w-full pl-3  bg-white dark:bg-stone-900 dark:md:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 lg:bg-gray-100 lg:dark:bg-gray-800 lg:dark:hover:bg-gray-700\">\n            <span  class=\"p-2 grid place-content-center bg-blue-500 dark:bg-blue-600 rounded-full w-8 h-8 lg:w-6 lg:h-6\"><i class=\"bi bi-list-ul text-white text-base m-auto\"></i></span>\n            <span class=\" flex w-full items-center  py-4 pr-3 lg:py-2 :pr-2 ml-3 lg:ml-2 border-b border-gray-200 dark:border-gray-700 group-last:border-0\">\n              <h4 class=\"text-base lg:text-sm text-gray-900 dark:text-gray-50 w-full h-auto align-text-bottom leading-6 \">Work</h4>\n              <p class=\"text-base text-gray-400 dark:text-gray-400 dark:text-gray-400 font-normal mr-1\">0</p>\n              <span class=\"grid ml-2 w-6 h-6 place-content-center sm:hidden\"><i class=\"bi bi-chevron-right\"></i></span>\n            </span>\n          <li class=\"group flex items-center  w-full pl-3  bg-white dark:bg-stone-900 dark:md:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 lg:bg-gray-100 lg:dark:bg-gray-800 lg:dark:hover:bg-gray-700\">\n            <span  class=\"p-2 grid place-content-center bg-red-500 dark:bg-red-600 rounded-full w-8 h-8 lg:w-6 lg:h-6\"><i class=\"bi bi-list-ul text-white text-base m-auto\"></i></span>\n            <span class=\" flex w-full items-center  py-4 pr-3 lg:py-2 :pr-2 ml-3 lg:ml-2 border-b border-gray-200 dark:border-gray-700 group-last:border-0\">\n              <h4 class=\"text-base lg:text-sm text-gray-900 dark:text-gray-50 w-full h-auto align-text-bottom leading-6 \">Reminder</h4>\n              <p class=\"text-base text-gray-400 dark:text-gray-400 dark:text-gray-400 font-normal mr-1\">0</p>\n              <span class=\"grid ml-2 w-6 h-6 place-content-center sm:hidden\"><i class=\"bi bi-chevron-right\"></i></span>\n            </span>\n          </li>\n          <li class=\"group flex items-center  w-full pl-3  bg-white dark:bg-stone-900 dark:md:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 lg:bg-gray-100 lg:dark:bg-gray-800 lg:dark:hover:bg-gray-700\">\n            <span  class=\"p-2 grid place-content-center bg-orange-500 dark:bg-orange-600 rounded-full w-8 h-8 lg:w-6 lg:h-6\"><i class=\"bi bi-list-ul text-white text-base m-auto\"></i></span>\n            <span class=\" flex w-full items-center  py-4 pr-3 lg:py-2 :pr-2 ml-3 lg:ml-2 border-b border-gray-200 dark:border-gray-700 group-last:border-0\">\n              <h4 class=\"text-base lg:text-sm text-gray-900 dark:text-gray-50 w-full h-auto align-text-bottom leading-6 \">Home</h4>\n              <p class=\"text-base text-gray-400 dark:text-gray-400 dark:text-gray-400 font-normal mr-1\">0</p>\n              <span class=\"grid ml-2 w-6 h-6 place-content-center sm:hidden\"><i class=\"bi bi-chevron-right\"></i></span>\n            </span>\n          </li>\n          <li class=\"group flex items-center  w-full pl-3  bg-white dark:bg-stone-900 dark:md:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 lg:bg-gray-100 lg:dark:bg-gray-800 lg:dark:hover:bg-gray-700\">\n            <span  class=\"p-2 grid place-content-center bg-blue-500 dark:bg-blue-600 rounded-full w-8 h-8 lg:w-6 lg:h-6\"><i class=\"bi bi-list-ul text-white text-base m-auto\"></i></span>\n            <span class=\" flex w-full items-center  py-4 pr-3 lg:py-2 :pr-2 ml-3 lg:ml-2 border-b border-gray-200 dark:border-gray-700 group-last:border-0\">\n              <h4 class=\"text-base lg:text-sm text-gray-900 dark:text-gray-50 w-full h-auto align-text-bottom leading-6 \">Work</h4>\n              <p class=\"text-base text-gray-400 dark:text-gray-400 dark:text-gray-400 font-normal mr-1\">0</p>\n              <span class=\"grid ml-2 w-6 h-6 place-content-center sm:hidden\"><i class=\"bi bi-chevron-right\"></i></span>\n            </span>\n          <li class=\"group flex items-center  w-full pl-3  bg-white dark:bg-stone-900 dark:md:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 lg:bg-gray-100 lg:dark:bg-gray-800 lg:dark:hover:bg-gray-700\">\n            <span  class=\"p-2 grid place-content-center bg-red-500 dark:bg-red-600 rounded-full w-8 h-8 lg:w-6 lg:h-6\"><i class=\"bi bi-list-ul text-white text-base m-auto\"></i></span>\n            <span class=\" flex w-full items-center  py-4 pr-3 lg:py-2 :pr-2 ml-3 lg:ml-2 border-b border-gray-200 dark:border-gray-700 group-last:border-0\">\n              <h4 class=\"text-base lg:text-sm text-gray-900 dark:text-gray-50 w-full h-auto align-text-bottom leading-6 \">Reminder</h4>\n              <p class=\"text-base text-gray-400 dark:text-gray-400 dark:text-gray-400 font-normal mr-1\">0</p>\n              <span class=\"grid ml-2 w-6 h-6 place-content-center sm:hidden\"><i class=\"bi bi-chevron-right\"></i></span>\n            </span>\n          </li>\n          <li class=\"group flex items-center  w-full pl-3  bg-white dark:bg-stone-900 dark:md:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 lg:bg-gray-100 lg:dark:bg-gray-800 lg:dark:hover:bg-gray-700\">\n            <span  class=\"p-2 grid place-content-center bg-orange-500 dark:bg-orange-600 rounded-full w-8 h-8 lg:w-6 lg:h-6\"><i class=\"bi bi-list-ul text-white text-base m-auto\"></i></span>\n            <span class=\" flex w-full items-center  py-4 pr-3 lg:py-2 :pr-2 ml-3 lg:ml-2 border-b border-gray-200 dark:border-gray-700 group-last:border-0\">\n              <h4 class=\"text-base lg:text-sm text-gray-900 dark:text-gray-50 w-full h-auto align-text-bottom leading-6 \">Home</h4>\n              <p class=\"text-base text-gray-400 dark:text-gray-400 dark:text-gray-400 font-normal mr-1\">0</p>\n              <span class=\"grid ml-2 w-6 h-6 place-content-center sm:hidden\"><i class=\"bi bi-chevron-right\"></i></span>\n            </span>\n          </li>\n          <li class=\"group flex items-center  w-full pl-3  bg-white dark:bg-stone-900 dark:md:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 lg:bg-gray-100 lg:dark:bg-gray-800 lg:dark:hover:bg-gray-700\">\n            <span  class=\"p-2 grid place-content-center bg-blue-500 dark:bg-blue-600 rounded-full w-8 h-8 lg:w-6 lg:h-6\"><i class=\"bi bi-list-ul text-white text-base m-auto\"></i></span>\n            <span class=\" flex w-full items-center  py-4 pr-3 lg:py-2 :pr-2 ml-3 lg:ml-2 border-b border-gray-200 dark:border-gray-700 group-last:border-0\">\n              <h4 class=\"text-base lg:text-sm text-gray-900 dark:text-gray-50 w-full h-auto align-text-bottom leading-6 \">Work</h4>\n              <p class=\"text-base text-gray-400 dark:text-gray-400 dark:text-gray-400 font-normal mr-1\">0</p>\n              <span class=\"grid ml-2 w-6 h-6 place-content-center sm:hidden\"><i class=\"bi bi-chevron-right\"></i></span>\n            </span>\n          <li class=\"group flex items-center  w-full pl-3  bg-white dark:bg-stone-900 dark:md:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 lg:bg-gray-100 lg:dark:bg-gray-800 lg:dark:hover:bg-gray-700\">\n            <span  class=\"p-2 grid place-content-center bg-red-500 dark:bg-red-600 rounded-full w-8 h-8 lg:w-6 lg:h-6\"><i class=\"bi bi-list-ul text-white text-base m-auto\"></i></span>\n            <span class=\" flex w-full items-center  py-4 pr-3 lg:py-2 :pr-2 ml-3 lg:ml-2 border-b border-gray-200 dark:border-gray-700 group-last:border-0\">\n              <h4 class=\"text-base lg:text-sm text-gray-900 dark:text-gray-50 w-full h-auto align-text-bottom leading-6 \">Reminder</h4>\n              <p class=\"text-base text-gray-400 dark:text-gray-400 dark:text-gray-400 font-normal mr-1\">0</p>\n              <span class=\"grid ml-2 w-6 h-6 place-content-center sm:hidden\"><i class=\"bi bi-chevron-right\"></i></span>\n            </span>\n          </li>\n          <li class=\"group flex items-center  w-full pl-3  bg-white dark:bg-stone-900 dark:md:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 lg:bg-gray-100 lg:dark:bg-gray-800 lg:dark:hover:bg-gray-700\">\n            <span  class=\"p-2 grid place-content-center bg-orange-500 dark:bg-orange-600 rounded-full w-8 h-8 lg:w-6 lg:h-6\"><i class=\"bi bi-list-ul text-white text-base m-auto\"></i></span>\n            <span class=\" flex w-full items-center  py-4 pr-3 lg:py-2 :pr-2 ml-3 lg:ml-2 border-b border-gray-200 dark:border-gray-700 group-last:border-0\">\n              <h4 class=\"text-base lg:text-sm text-gray-900 dark:text-gray-50 w-full h-auto align-text-bottom leading-6 \">Home</h4>\n              <p class=\"text-base text-gray-400 dark:text-gray-400 dark:text-gray-400 font-normal mr-1\">0</p>\n              <span class=\"grid ml-2 w-6 h-6 place-content-center sm:hidden\"><i class=\"bi bi-chevron-right\"></i></span>\n            </span>\n          </li>\n          <li class=\"group flex items-center  w-full pl-3  bg-white dark:bg-stone-900 dark:md:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 lg:bg-gray-100 lg:dark:bg-gray-800 lg:dark:hover:bg-gray-700\">\n            <span  class=\"p-2 grid place-content-center bg-blue-500 dark:bg-blue-600 rounded-full w-8 h-8 lg:w-6 lg:h-6\"><i class=\"bi bi-list-ul text-white text-base m-auto\"></i></span>\n            <span class=\" flex w-full items-center  py-4 pr-3 lg:py-2 :pr-2 ml-3 lg:ml-2 border-b border-gray-200 dark:border-gray-700 group-last:border-0\">\n              <h4 class=\"text-base lg:text-sm text-gray-900 dark:text-gray-50 w-full h-auto align-text-bottom leading-6 \">Work</h4>\n              <p class=\"text-base text-gray-400 dark:text-gray-400 dark:text-gray-400 font-normal mr-1\">0</p>\n              <span class=\"grid ml-2 w-6 h-6 place-content-center sm:hidden\"><i class=\"bi bi-chevron-right\"></i></span>\n            </span>\n          <li class=\"group flex items-center  w-full pl-3  bg-white dark:bg-stone-900 dark:md:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 lg:bg-gray-100 lg:dark:bg-gray-800 lg:dark:hover:bg-gray-700\">\n            <span  class=\"p-2 grid place-content-center bg-red-500 dark:bg-red-600 rounded-full w-8 h-8 lg:w-6 lg:h-6\"><i class=\"bi bi-list-ul text-white text-base m-auto\"></i></span>\n            <span class=\" flex w-full items-center  py-4 pr-3 lg:py-2 :pr-2 ml-3 lg:ml-2 border-b border-gray-200 dark:border-gray-700 group-last:border-0\">\n              <h4 class=\"text-base lg:text-sm text-gray-900 dark:text-gray-50 w-full h-auto align-text-bottom leading-6 \">Reminder</h4>\n              <p class=\"text-base text-gray-400 dark:text-gray-400 dark:text-gray-400 font-normal mr-1\">0</p>\n              <span class=\"grid ml-2 w-6 h-6 place-content-center sm:hidden\"><i class=\"bi bi-chevron-right\"></i></span>\n            </span>\n          </li>\n          <li class=\"group flex items-center  w-full pl-3  bg-white dark:bg-stone-900 dark:md:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 lg:bg-gray-100 lg:dark:bg-gray-800 lg:dark:hover:bg-gray-700\">\n            <span  class=\"p-2 grid place-content-center bg-orange-500 dark:bg-orange-600 rounded-full w-8 h-8 lg:w-6 lg:h-6\"><i class=\"bi bi-list-ul text-white text-base m-auto\"></i></span>\n            <span class=\" flex w-full items-center  py-4 pr-3 lg:py-2 :pr-2 ml-3 lg:ml-2 border-b border-gray-200 dark:border-gray-700 group-last:border-0\">\n              <h4 class=\"text-base lg:text-sm text-gray-900 dark:text-gray-50 w-full h-auto align-text-bottom leading-6 \">Home</h4>\n              <p class=\"text-base text-gray-400 dark:text-gray-400 dark:text-gray-400 font-normal mr-1\">0</p>\n              <span class=\"grid ml-2 w-6 h-6 place-content-center sm:hidden\"><i class=\"bi bi-chevron-right\"></i></span>\n            </span>\n          </li>\n          <li class=\"group flex items-center  w-full pl-3  bg-white dark:bg-stone-900 dark:md:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 lg:bg-gray-100 lg:dark:bg-gray-800 lg:dark:hover:bg-gray-700\">\n            <span  class=\"p-2 grid place-content-center bg-blue-500 dark:bg-blue-600 rounded-full w-8 h-8 lg:w-6 lg:h-6\"><i class=\"bi bi-list-ul text-white text-base m-auto\"></i></span>\n            <span class=\" flex w-full items-center  py-4 pr-3 lg:py-2 :pr-2 ml-3 lg:ml-2 border-b border-gray-200 dark:border-gray-700 group-last:border-0\">\n              <h4 class=\"text-base lg:text-sm text-gray-900 dark:text-gray-50 w-full h-auto align-text-bottom leading-6 \">Work</h4>\n              <p class=\"text-base text-gray-400 dark:text-gray-400 dark:text-gray-400 font-normal mr-1\">0</p>\n              <span class=\"grid ml-2 w-6 h-6 place-content-center sm:hidden\"><i class=\"bi bi-chevron-right\"></i></span>\n            </span>\n          \n\n        </ul>\n      </div>\n    </section>\n    <footer class=\"flex px-5 py-4 lg:px-8 lg:pr-6 bg-gray-100  dark:bg-neutral-950 dark:md:bg-gray-800  dark:bg-neutral-950 dark:md:bg-gray-800 border-t border-gray-200 dark:border-gray-700\">\n      <div data-element=\"newtask\" class=\"sm:hidden text-indigo-500 hover:text-indigo-600 cursor-pointer dark:text-indigo-400 dark:hover:text-indigo-300 font-medium \"> <i class=\"bi bi-plus-circle-fill text-[1.25rem] mr-1\"></i> New Task</div>\n      <div data-element=\"newgroup\" class=\"ml-auto text-indigo-500 dark:text-indigo-400 hover:text-indigo-600  font-medium cursor-pointer dark:hover:text-indigo-300 \"> <i class=\"bi bi-plus text-[1.25rem] mr-1 \"></i> New Group</div>\n    </footer>\n  </nav>\n  <main class=\"hidden sm:flex flex-col bg-gray-50 dark:bg-gray-900 dark:md:bg-gray-900 w-full sm:w-[55%] md:w-[64%] lg:w-[63%] xl:w-[79%] h-full relative\"></main>\n  </div>\n  <div id=\"GroupModalElement\" class=\"relative z-10 hidden\" aria-labelledby=\"modal-title\" role=\"dialog\" aria-modal=\"true\"></div>\n    ";
}
// EXTERNAL MODULE: ./node_modules/flowbite-datepicker/js/Datepicker.js + 20 modules
var Datepicker = __webpack_require__(272);
;// CONCATENATED MODULE: ./src/components/datepicker.js

function datePickerUi() {
  var div = document.createElement("div");
  div.innerHTML = "\n    <div class=\"relative max-w-sm mb-4\">\n    <div\n      class=\"absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none\"\n    >\n      <svg\n        class=\"w-4 h-4 text-gray-500 dark:text-gray-400\"\n        aria-hidden=\"true\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n        fill=\"currentColor\"\n        viewBox=\"0 0 20 20\"\n      >\n        <path\n          d=\"M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z\"\n        />\n      </svg>\n    </div>\n    <input\n      id=\"datepicker\"\n      datepicker\n      datepicker-autohide\n      type=\"text\"\n      class=\"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500\"\n      placeholder=\"Select date\"\n    />\n  </div>\n    ";
  return div;
}
var datepicker = function datepicker() {
  var datepickerEl = document.getElementById('datepicker');
  new Datepicker/* default */.A(datepickerEl);
};

;// CONCATENATED MODULE: ./src/components/selectmenu.js
function selectmenuboxui(group) {
  var div = document.createElement("div");
  div.innerHTML = "\n    <div class=\"relative mt-2\">\n    <button\n      type=\"button\"\n      id=\"listbox\"\n      class=\"relative w-full cursor-default rounded-lg bg-white dark:bg-gray-700 py-1.5 pl-4 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6\"\n      aria-haspopup=\"listbox\"\n      aria-expanded=\"false\"\n      aria-labelledby=\"listbox-label\"\n      aria-activedescendant=\"".concat(group.getGroupid(), "\"\n    >\n      <span class=\"flex items-center\">\n        <span\n        id=\"optionicon\"\n          class=\" p-2 grid place-content-center ").concat(group.getGroupcolor(), " rounded-full w-6 h-6 lg:w-6 lg:h-6\"\n        >\n          <i\n            class=\"bi bi-list-ul text-white text-sm m-auto\"\n          ></i>\n        </span>\n\n        <span\n          id=\"optiontext\"\n          class=\"ml-3 block text-gray-600 dark:text-gray-100 truncate\"\n          >").concat(group.getGroupname(), "</span\n        >\n      </span>\n      <span\n        class=\"pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2\"\n      >\n        <i\n          class=\"bi bi-chevron-down text-gray-400 mr-0.5\"\n        ></i>\n      </span>\n    </button>\n\n    <!--\n    Select popover, show/hide based on select state.\n\n    Entering: \"\"\n      From: \"\"\n      To: \"\"\n    Leaving: \"transition ease-in duration-100\"\n      From: \"opacity-100\"\n      To: \"opacity-0\"\n  -->\n\n    <ul\n      id=\"listoptions\"\n      class=\"hidden absolute z-10 mt-1 max-h-20 w-full overflow-auto rounded-md bg-white dark:bg-gray-700 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm sm:leading-6\"\n      role=\"listbox\"\n      tabindex=\"-1\"\n      aria-labelledby=\"listbox-label\"\n      aria-activedescendant=\"").concat(group.getGroupid(), "\"\n    >\n      <!-- Dropdown menu -->\n\n      <!--\n      Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.\n\n      Highlighted: \"bg-indigo-600 text-white\", Not Highlighted: \"text-gray-900\"\n    -->\n\n      \n      \n    </ul>\n  </div>\n    ");
  return div;
}
function selectOptionUi(group) {
  var list = document.createElement("li");
  list.classList.add("text-gray-900", "dark:text-gray-100", "cursor-default", "select-none", "relative", "py-2", "pl-3", "pr-9");
  list.id = "".concat(group.getGroupid());
  list.setAttribute("role", "option");
  list.innerHTML = "\n    <div class=\"flex items-center\">\n      <span\n        id=\"optionicon\"\n        class=\"".concat(group.getGroupcolor(), " p-2 grid place-content-center rounded-full w-6 h-6 lg:w-6 lg:h-6\"\n      >\n        <i\n          class=\"bi bi-list-ul text-white text-sm m-auto\"\n        ></i>\n      </span>\n\n      <span class=\"ml-3 block truncate\"\n        >").concat(group.getGroupname(), "</span\n      >\n    </div>\n\n    <!--\n    Checkmark, only display for selected option.\n\n    Highlighted: \"text-white\", Not Highlighted: \"text-indigo-600\"\n  -->\n    <span\n      class=\"hidden highlightedEl text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4\"\n    >\n      <svg\n        class=\"h-5 w-5\"\n        viewBox=\"0 0 20 20\"\n        fill=\"currentColor\"\n        aria-hidden=\"true\"\n      >\n        <path\n          fill-rule=\"evenodd\"\n          d=\"M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z\"\n          clip-rule=\"evenodd\"\n        />\n      </svg>\n    </span>\n  </li>\n    ");
  return list;
}
function toggleListbox() {
  var isExpanded = listbox.getAttribute("aria-expanded") === "true";
  var change = !isExpanded ? true : false;
  listbox.setAttribute("aria-expanded", change);
  if (!isExpanded) {
    listoptions.classList.remove("hidden");
    listoptions.classList.add('transition', 'ease-in', 'duration-100', 'opacity-100');
    var isHighlighted = listbox.getAttribute("aria-activedescendant") === "listbox-option-0";
    var options = listoptions.querySelectorAll("[role=option]");
    options.forEach(function (option) {
      option.addEventListener("mouseenter", focusin);
      option.addEventListener("mouseleave", focusout);
    });
  } else {
    listoptions.removeAttribute("aria-activedescendant");
    listoptions.classList.remove("transition", "ease-in", "duration-100", "hidden");
    listoptions.classList.add("transition", "ease-in", "duration-0", "opacity-0", "hidden");
  }
}

// manage keyboard navigation of the options

function focusin() {
  this.classList.remove("text-gray-900");
  this.classList.add("bg-indigo-500", "text-white", "dark:bg-indigo-600");
}

//manage highlight styles based on mouseenter/mouseleave

function focusout() {
  this.classList.remove("bg-indigo-500", "text-white", "dark:bg-indigo-600");
  this.classList.add("text-gray-900");
}

//when user selects an option

function selectoption(e) {
  var listbox = document.getElementById("listbox");
  var listoptions = document.querySelector("#listoptions");
  var selectedid = e.id;
  console.log(selectedid);
  var selected = document.getElementById(selectedid);
  listbox.setAttribute("aria-activedescendant", selectedid);
  listoptions.setAttribute("aria-activedescendant", selectedid);

  // selected.classList.add("bg-indigo-600", "text-white");
  // selected.classList.remove("text-gray-900");

  toggleListbox();
  return selectedid;
}

// update listbox ui based on selected option

function selectedoption() {
  return listoptions.getAttribute("aria-activedescendant");
}
;// CONCATENATED MODULE: ./src/addTask.js











var selectedid = null; //Group Selected
var priority = null;
function dateSection() {
  var dateDiv = document.getElementById("datesection");
  dateDiv.appendChild(datePickerUi());
  datepicker();
}
function groupsection(group) {
  var groupDiv = document.getElementById("groupsection");
  var groups = taskMaster.getGroup();
  groupDiv.innerHTML = "";
  groupDiv.appendChild(selectmenuboxui(group));
  selectedid = group.getGroupid();
  var listoptionsDiv = document.getElementById("listoptions");
  groups.forEach(function (group) {
    listoptionsDiv.appendChild(selectOptionUi(group));
  });
  var options = listoptionsDiv.querySelectorAll("[role=option]");

  // Add event listener for the select menu
  options.forEach(function (option) {
    option.addEventListener("click", function () {
      selectedid = selectoption(this);
      console.log("new sid: ", selectedid);
      var newSelectedGroup = taskMaster.getGroup().filter(function (g) {
        return g.getGroupid() === selectedid;
      })[0];
      groupsection(newSelectedGroup);
    });
  });
  var selectGroupmenu = document.querySelector("#listbox");
  selectGroupmenu.addEventListener("click", toggleListbox);
}
function addTaskModalUi() {
  return document.querySelector("#GroupModalElement").innerHTML = "\n    <div\n      id=\"GroupModalElement\"\n      class=\"relative z-10\"\n      aria-labelledby=\"modal-title\"\n      role=\"dialog\"\n      aria-modal=\"true\"\n    >\n      <!--\n      Background backdrop, show/hide based on modal state.\n  \n      Entering: \"ease-out duration-300\"\n        From: \"opacity-0\"\n        To: \"opacity-100\"\n      Leaving: \"ease-in duration-200\"\n        From: \"opacity-100\"\n        To: \"opacity-0\"\n    -->\n      <div\n        class=\"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity\"\n      ></div>\n\n      <div class=\"fixed inset-0 z-10 w-screen overflow-y-auto\">\n        <div\n          class=\"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0\"\n        >\n          <!--\n          Modal panel, show/hide based on modal state.\n  \n          Entering: \"ease-out duration-300\"\n            From: \"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95\"\n            To: \"opacity-100 translate-y-0 sm:scale-100\"\n          Leaving: \"ease-in duration-200\"\n            From: \"opacity-100 translate-y-0 sm:scale-100\"\n            To: \"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95\"\n        -->\n          <div\n            class=\"relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg\"\n          >\n            <div\n              class=\"bg-white dark:bg-gray-900 px-4 pb-4 pt-5 sm:p-6 sm:pb-4\"\n            >\n              <div class=\"sm:flex sm:items-start\">\n                <div\n                  class=\"mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full\"\n                >\n                  <h3\n                    class=\"font-bold leading-6 text-center text-gray-700 dark:text-gray-50\"\n                    id=\"modal-title\"\n                  >\n                    Add New Task\n                  </h3>\n\n                  <div class=\"antialiased mt-2\">\n                    <!-- select color -->\n                    <div class=\"max-w-sm mx-auto py-8\">\n                      <div class=\"mb-5\">\n                        <div class=\"flex flex-col items-center w-full\">\n                          <div\n                            class=\"w-full flex flex-col bg-gray-50 dark:bg-gray-800 rounded-md shadow-sm p-4\"\n                          >\n                            <label\n                              for=\"taskName\"\n                              class=\"text-start mb-1 text-gray-900 font-medium dark:text-gray-50\"\n                              >Task:\n                            </label>\n                            <input\n                              id=\"taskName\"\n                              type=\"text\"\n                              placeholder=\"Enter Task\"\n                              class=\"appearance-none text-start mb-4 w-full rounded-md border-0 text-xl py-2 px-8 text-gray-900 dark:text-gray-50 dark:bg-gray-800 dark:ring-gray-700 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none required\"\n                            />\n\n                            <label\n                              for=\"taskNote\"\n                              class=\"text-start mb-1 text-gray-900 font-medium dark:text-gray-50\"\n                              >Note:\n                            </label>\n                            <input\n                              id=\"taskNote\"\n                              type=\"text\"\n                              placeholder=\"Enter a note\"\n                              class=\"appearance-none text-start mb-4 w-full rounded-md border-0 text-xl py-2 px-8 text-gray-900 dark:text-gray-50 dark:bg-gray-800 dark:ring-gray-700 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none required\"\n                            />\n\n                            <div class=\"flex gap-3 w-full\">\n                              <div id=\"datesection\" class=\"w-2/5 flex flex-col\">\n                                <label\n                                  for=\"datepicker\"\n                                  class=\"w-100 text-start mb-1 text-gray-900 font-medium dark:text-gray-50\"\n                                  >Date:\n                                </label>\n                                \n                              </div>\n\n                              <div\n                                class=\"flex items-center w-3/5 flex-wrap mb-4\"\n                              >\n                                <label\n                                  for=\"priority\"\n                                  class=\"w-full text-start mb-1 text-gray-900 font-medium dark:text-gray-50\"\n                                  >Priority:\n                                </label>\n\n                                <input\n                                  id=\"low\"\n                                  class=\"hidden peer/low\"\n                                  type=\"radio\"\n                                  name=\"priority\"\n                                  value=\"low\"\n                                />\n                                <label\n                                  for=\"low\"\n                                  class=\"mr-2  dark:peer-checked/low:ring-indigo-200/20  peer-checked/low:bg-indigo-50 dark:peer-checked/low:bg-indigo-900 peer-checked/low:text-indigo-600 dark:peer-checked/low:text-indigo-500 inline-flex items-center rounded-md bg-gray-50 dark:bg-gray-700 px-2 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 ring-1 ring-inset ring-gray-500/10\"\n                                  >Low</label\n                                >\n\n                                <input\n                                  id=\"medium\"\n                                  class=\"hidden peer/medium\"\n                                  type=\"radio\"\n                                  name=\"priority\"\n                                  value=\"medium\"\n                                />\n                                <label\n                                  for=\"medium\"\n                                  class=\" mr-2 peer-checked/medium:ring-yellow-700/10 dark:peer-checked/medium:ring-yellow-200/20  peer-checked/medium:bg-yellow-50 dark:peer-checked/medium:bg-yellow-900 peer-checked/medium:text-yellow-600 dark:peer-checked/medium:text-yellow-500  inline-flex items-center rounded-md bg-gray-50 dark:bg-gray-700 px-2 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 ring-1 ring-inset ring-gray-500/10\"\n                                  >Medium</label\n                                >\n\n                                <input\n                                  id=\"high\"\n                                  class=\"hidden peer/high\"\n                                  type=\"radio\"\n                                  name=\"priority\"\n                                  value=\"high\"\n                                />\n                                <label\n                                  for=\"high\"\n                                  class=\"mr-2 peer-checked/high:ring-red-700/10 dark:peer-checked/high:ring-red-200/20 peer-checked/high:bg-red-50 dark:peer-checked/high:bg-red-900 peer-checked/high:text-red-600 dark:peer-checked/high:text-red-500 inline-flex items-center rounded-md bg-gray-50 dark:bg-gray-700 px-2 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 ring-1 ring-inset ring-gray-500/10\"\n                                  >High</label\n                                >\n                              </div>\n                            </div>\n\n                            <label\n                              for=\"Group\"\n                              class=\"text-start mb-1 text-gray-900 font-medium dark:text-gray-50\"\n                              >Select Group:\n                            </label>\n                            <div id=\"groupsection\" class=\"w-full\"></div>\n                            \n                            <label\n                              for=\"tag\"\n                              class=\"text-start mb-1 mt-2 text-gray-900 font-medium dark:text-gray-50\"\n                              >tag:\n                            </label>\n                            <input\n                              id=\"tag\"\n                              type=\"text\"\n                              placeholder=\"Add Tags\"\n                            class=\"appearance-none text-start mb-4 w-full rounded-md border-0 text-xl py-2 px-8 text-gray-900 dark:text-gray-50 dark:bg-gray-800 dark:ring-gray-700 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none required\"\n                            />\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div\n              class=\"bg-gray-50 dark:bg-gray-950 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6\"\n            >\n              <button\n                id=\"addTaskbtn\"\n                type=\"button\"\n                class=\"inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 sm:ml-3 sm:w-auto\"\n              >\n                Add Task\n              </button>\n              <button\n                id=\"closemodal\"\n                type=\"button\"\n                class=\"mt-3 inline-flex w-full justify-center rounded-md bg-white dark:bg-gray-900 px-3 py-2 text-sm font-semibold text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 sm:mt-0 sm:w-auto\"\n              >\n                Cancel\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    ";
}
function addTaskModal(toGroup) {
  var GroupModalElement = document.getElementById("GroupModalElement");
  GroupModalElement.innerHTML = "";
  addTaskModalUi();
  dateSection();
  groupsection(taskMaster.getGroup()[toGroup]);
  GroupModalElement.classList.remove("hidden");
  var addTaskBtn = document.getElementById("addTaskbtn");
  var closeModalBtn = document.getElementById("closemodal");
  addTaskBtn.addEventListener("click", addTask);
  closeModalBtn.addEventListener("click", closeModal);
}
function closeModal() {
  var GroupModalElement = document.getElementById("GroupModalElement");
  GroupModalElement.classList.add("hidden");
  GroupModalElement.innerHTML = "";
}
function showTaskModal(toGroup) {
  var newTaskBtn = document.querySelectorAll('[data-element="newtask"]');
  newTaskBtn.forEach(function (btn) {
    btn.addEventListener("click", function () {
      addTaskModal(toGroup);
    });
  });
}
function addTask() {
  var groupId = selectedid;
  var name = document.getElementById("taskName").value;
  var note = document.getElementById("taskNote").value;
  var duedate = document.getElementById("datepicker").value;
  var selectedPriority = document.querySelector('input[name="priority"]:checked');
  var priority;
  var tag = document.getElementById("tag").value;
  selectedPriority ? priority = selectedPriority.value : priority = "";

  // Check if any input is empty
  if (!name || !duedate) {
    alert("Please enter task name and due date");
    return;
  }
  // Add task to collection
  taskMaster.collection.push(new Task(name, note, duedate, tag, priority, selectedid));
  taskMaster.update();
  closeModal();
}
function getSelectedPriority() {
  // Select the checked radio button
  var selectedPriority = document.querySelector('input[name="priority"]:checked');

  // Check if any radio button is selected
  if (selectedPriority) {
    // Retrieve the value of the selected radio button
    var priorityValue = selectedPriority.value;
    console.log("Selected priority:", priorityValue);
  } else {
    console.log("No priority selected");
  }
}
;// CONCATENATED MODULE: ./src/index.js









var reminder = new Reminder();
renderNavUi();
renderUi();
showAddGroupModal();
showTaskModal(0);
var taskMaster = reminder;
taskMaster.update();

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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			57: 0,
/******/ 			178: 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [178,656], () => (__webpack_require__(836)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.bundle.js.map