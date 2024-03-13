import _ from "lodash";
import "./style/style.css";
import { Reminder } from "./reminder";
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { renderUi } from "./renderMainUi.js";
import { showAddGroupModal } from "./addgroup.js";
import { renderNavUi } from "./rendernav.js";




renderNavUi()
renderUi()
showAddGroupModal()





export const taskMaster = new Reminder();
taskMaster.addReminder(
  "test note",
  "first test",
  new Date(),
  "firsttag",
  "low",
  0
);
taskMaster.updateGrouplist();
console.log(taskMaster.displayReminder());
console.log(taskMaster.groups)
