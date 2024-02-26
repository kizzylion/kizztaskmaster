import _ from "lodash";
import "./style/style.css";
import { Reminder } from "./reminder";
import "./themescript.js"
// import Icon from "./testimg.png";
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap-icons/font/bootstrap-icons.css';





const taskMaster = new Reminder();
taskMaster.addDefaultGroupToGroups();
taskMaster.addReminder(
  "test note",
  "first test",
  new Date(),
  "firsttag",
  "low",
  0
);
console.log(taskMaster.displayReminder());
taskMaster.collection[0].setTag("secondtag");
taskMaster.collection[0].toggleCompleted();
taskMaster.collection[0].setGroupid(1);
console.log(taskMaster.displayReminder());