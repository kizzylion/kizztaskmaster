import _ from "lodash";
import "./style/style.css";
import { Reminder } from "./reminder";
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { renderUi } from "./renderMainUi.js";
import { showAddGroupModal } from "./addgroup.js";
import { renderNavUi } from "./rendernav.js";
import { showTaskModal } from "./addTask.js";

const reminder = new Reminder();

renderNavUi()
renderUi()
showAddGroupModal()
showTaskModal(0)

export const taskMaster = reminder
taskMaster.update()

taskMaster.mobileNavEvent()


    

    







