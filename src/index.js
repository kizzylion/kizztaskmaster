import _ from "lodash";
import "./style/style.css";
import { Reminder } from "./reminder";
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { renderUi } from "./renderMainUi.js";
import { showAddGroupModal } from "./addgroup.js";
import { renderNavUi } from "./rendernav.js";
import { showTaskModal } from "./addTask.js";
import {initialRender, viewAllTask, viewTaskByGroup } from "./domevents.js";


export const taskMaster = new Reminder();

// taskMaster.update(taskMaster.temporalcollection)
initialRender()



    

    







