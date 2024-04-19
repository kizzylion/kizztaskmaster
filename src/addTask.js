import { renderNavUi } from "./rendernav";
import { renderUi } from "./renderMainUi";
import { taskMaster } from ".";

import { Group } from "./groupClass";
import { datePickerUi } from "./components/datepicker";
import { datepicker } from "./components/datepicker";
import { selectmenuboxui } from "./components/selectmenu";
import { selectOptionUi } from "./components/selectmenu";
import { selectoption } from "./components/selectmenu";
import { toggleListbox } from "./components/selectmenu";
import { Task } from "./noteClass";
import { renderCurrentDisplaying } from "./domevents";


let selectedid = null; //Group Selected
let priority = null;

function dateSection() {
  const dateDiv = document.getElementById("datesection");
  dateDiv.appendChild(datePickerUi());
  datepicker();
}

export function groupsection(group) {
  const groupDiv = document.getElementById("groupsection");
  const groups = taskMaster.getGroup();
  groupDiv.innerHTML = "";
  groupDiv.appendChild(selectmenuboxui(group));
  selectedid = group.getGroupid();

  const listoptionsDiv = document.getElementById("listoptions");

  groups.forEach((group) => {
    listoptionsDiv.appendChild(selectOptionUi(group));
  });
  const options = listoptionsDiv.querySelectorAll("[role=option]");

  // Add event listener for the select menu
  options.forEach((option) => {
    option.addEventListener("click", function () {
      let selectedid = selectoption(this);
      console.log("new sid: ", selectedid);
      let newSelectedGroup = taskMaster
        .getGroup()
        .filter((g) => g.getGroupid() === selectedid)[0];
      groupsection(newSelectedGroup);
    });
  });

  const selectGroupmenu = document.querySelector("#listbox");
  selectGroupmenu.addEventListener("click", toggleListbox);

  console.log(selectedid);
}

function addTaskModalUi() {
  return (document.querySelector("#GroupModalElement").innerHTML = `
    <div
      id="GroupModalElement"
      class="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <!--
      Background backdrop, show/hide based on modal state.
  
      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    -->
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      ></div>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <!--
          Modal panel, show/hide based on modal state.
  
          Entering: "ease-out duration-300"
            From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            To: "opacity-100 translate-y-0 sm:scale-100"
          Leaving: "ease-in duration-200"
            From: "opacity-100 translate-y-0 sm:scale-100"
            To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        -->
          <div
            class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
          >
            <div
              class="bg-white dark:bg-gray-900 px-4 pb-4 pt-5 sm:p-6 sm:pb-4"
            >
              <div class="sm:flex sm:items-start">
                <div
                  class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full"
                >
                  <h3
                    class="font-bold leading-6 text-center text-gray-700 dark:text-gray-50"
                    id="modal-title"
                  >
                    Add New Task
                  </h3>

                  <div class="antialiased mt-2">
                    <!-- select color -->
                    <div class="max-w-sm mx-auto py-8">
                      <div class="mb-5">
                        <div class="flex flex-col items-center w-full">
                          <div
                            class="w-full flex flex-col bg-gray-50 dark:bg-gray-800 rounded-md shadow-sm p-4"
                          >
                            <label
                              for="taskName"
                              class="text-start mb-1 text-gray-900 font-medium dark:text-gray-50"
                              >Task:
                            </label>
                            <input
                              id="taskName"
                              type="text"
                              placeholder="Enter Task"
                              class="appearance-none text-start mb-4 w-full rounded-md border-0 text-xl py-2 px-8 text-gray-900 dark:text-gray-50 dark:bg-gray-800 dark:ring-gray-700 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none required"
                            />

                            <label
                              for="taskNote"
                              class="text-start mb-1 text-gray-900 font-medium dark:text-gray-50"
                              >Note:
                            </label>
                            <input
                              id="taskNote"
                              type="text"
                              placeholder="Enter a note"
                              class="appearance-none text-start mb-4 w-full rounded-md border-0 text-xl py-2 px-8 text-gray-900 dark:text-gray-50 dark:bg-gray-800 dark:ring-gray-700 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none required"
                            />

                            <div class="flex gap-3 w-full">
                              <div id="datesection" class="w-2/5 flex flex-col">
                                <label
                                  for="datepicker"
                                  class="w-100 text-start mb-1 text-gray-900 font-medium dark:text-gray-50"
                                  >Date:
                                </label>
                                
                              </div>

                              <div
                                class="flex items-center w-3/5 flex-wrap mb-4"
                              >
                                <label
                                  for="priority"
                                  class="w-full text-start mb-1 text-gray-900 font-medium dark:text-gray-50"
                                  >Priority:
                                </label>

                                <input
                                  id="low"
                                  class="hidden peer/low"
                                  type="radio"
                                  name="priority"
                                  value="low"
                                />
                                <label
                                  for="low"
                                  class="mr-2  dark:peer-checked/low:ring-indigo-200/20  peer-checked/low:bg-indigo-50 dark:peer-checked/low:bg-indigo-900 peer-checked/low:text-indigo-600 dark:peer-checked/low:text-indigo-500 inline-flex items-center rounded-md bg-gray-50 dark:bg-gray-700 px-2 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 ring-1 ring-inset ring-gray-500/10"
                                  >Low</label
                                >

                                <input
                                  id="medium"
                                  class="hidden peer/medium"
                                  type="radio"
                                  name="priority"
                                  value="medium"
                                />
                                <label
                                  for="medium"
                                  class=" mr-2 peer-checked/medium:ring-yellow-700/10 dark:peer-checked/medium:ring-yellow-200/20  peer-checked/medium:bg-yellow-50 dark:peer-checked/medium:bg-yellow-900 peer-checked/medium:text-yellow-600 dark:peer-checked/medium:text-yellow-500  inline-flex items-center rounded-md bg-gray-50 dark:bg-gray-700 px-2 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 ring-1 ring-inset ring-gray-500/10"
                                  >Medium</label
                                >

                                <input
                                  id="high"
                                  class="hidden peer/high"
                                  type="radio"
                                  name="priority"
                                  value="high"
                                />
                                <label
                                  for="high"
                                  class="mr-2 peer-checked/high:ring-red-700/10 dark:peer-checked/high:ring-red-200/20 peer-checked/high:bg-red-50 dark:peer-checked/high:bg-red-900 peer-checked/high:text-red-600 dark:peer-checked/high:text-red-500 inline-flex items-center rounded-md bg-gray-50 dark:bg-gray-700 px-2 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 ring-1 ring-inset ring-gray-500/10"
                                  >High</label
                                >
                              </div>
                            </div>

                            <label
                              for="Group"
                              class="text-start mb-1 text-gray-900 font-medium dark:text-gray-50"
                              >Select Group:
                            </label>
                            <div id="groupsection" class="w-full"></div>
                            
                            <label
                              for="tag"
                              class="text-start mb-1 mt-2 text-gray-900 font-medium dark:text-gray-50"
                              >tag:
                            </label>
                            <input
                              id="tag"
                              type="text"
                              placeholder="Add Tags"
                            class="appearance-none text-start mb-4 w-full rounded-md border-0 text-xl py-2 px-8 text-gray-900 dark:text-gray-50 dark:bg-gray-800 dark:ring-gray-700 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none required"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="bg-gray-50 dark:bg-gray-950 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
            >
              <button
                id="addTaskbtn"
                type="button"
                class="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 sm:ml-3 sm:w-auto"
              >
                Add Task
              </button>
              <button
                id="closemodal"
                type="button"
                class="mt-3 inline-flex w-full justify-center rounded-md bg-white dark:bg-gray-900 px-3 py-2 text-sm font-semibold text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 sm:mt-0 sm:w-auto"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    `);
}

export function addTaskModal(toGroup) {
  const GroupModalElement = document.getElementById("GroupModalElement");
  GroupModalElement.innerHTML = "";
  addTaskModalUi();
  dateSection();
  groupsection(taskMaster.getGroup()[toGroup]);

  GroupModalElement.classList.remove("hidden");

  const addTaskBtn = document.getElementById("addTaskbtn");
  const closeModalBtn = document.getElementById("closemodal");

  addTaskBtn.addEventListener("click", addTask);
  closeModalBtn.addEventListener("click", closeModal);
  return selectedid;
}

export function closeModal() {
  const GroupModalElement = document.getElementById("GroupModalElement");
  GroupModalElement.classList.add("hidden");
  GroupModalElement.innerHTML = "";
}

export function showTaskModal(toGroup) {
  const newTaskBtn = document.querySelectorAll('[data-element="newtask"]');

  newTaskBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      addTaskModal(toGroup);
    });
  });
}

export function getTaskFormInformation() {
  const name = document.getElementById("taskName").value;
  const note = document.getElementById("taskNote").value;
  const duedate = document.getElementById("datepicker").value;
  const selectedPriority = document.querySelector(
    'input[name="priority"]:checked'
  );
  let priority;
  
  const tagData = document.getElementById("tag").value;
  const tag = "#" + tagData;

  selectedPriority ? (priority = selectedPriority.value) : (priority = "");

  // Check if any input is empty
  if (!name || !duedate) {
    alert("Please enter task name and due date");
    return;
  }

  return { name, note, duedate, tag, priority };
}

export function addTask() {
  const groupId = selectedid;

  let forminfo = getTaskFormInformation();

  // Add task to collection
  taskMaster.collection.push(
    new Task(
      forminfo.name,
      forminfo.note,
      forminfo.duedate,
      forminfo.tag,
      forminfo.priority,
      groupId
    )
  );

  taskMaster.populateStorage()

  // taskMaster.update();
  if (taskMaster.currentGroupDisplaying === "all"){
    taskMaster.temporalcollection = taskMaster.displayReminder();
        
    //update the ui 
    renderCurrentDisplaying(0)
  }else{
    let currentRenderedGroup = taskMaster.groups[taskMaster.currentGroupDisplaying].groupid
    taskMaster.temporalcollection = taskMaster.getNotesByGroup(currentRenderedGroup);
    renderCurrentDisplaying(taskMaster.currentGroupDisplaying)
  }

  closeModal();
}

function getSelectedPriority() {
  // Select the checked radio button
  const selectedPriority = document.querySelector(
    'input[name="priority"]:checked'
  );

  // Check if any radio button is selected
  if (selectedPriority) {
    // Retrieve the value of the selected radio button
    const priorityValue = selectedPriority.value;
    console.log("Selected priority:", priorityValue);
  } else {
    console.log("No priority selected");
  }
}
