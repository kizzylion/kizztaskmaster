
import { renderNavUi } from "./rendernav";
import { renderUi } from "./renderMainUi";
import { taskMaster } from ".";

import { Group } from "./groupClass";
import { datePickerUi } from "./components/datepicker";
import {datepicker} from "./components/datepicker";

function dateSection(){
  const dateDiv = document.getElementById("datesection");
  console.log(dateDiv)
  dateDiv.appendChild(datePickerUi())
  datepicker()
}

function addTaskModalUi(){
    return document.querySelector("#GroupModalElement").innerHTML = `
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
                              class="appearance-none text-center mb-4 w-full rounded-md border-0 text-xl py-3 px-8 text-gray-900 dark:text-gray-50 dark:bg-gray-800 dark:ring-gray-700 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none required"
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
                              class="appearance-none text-center mb-4 w-full rounded-md border-0 text-xl py-3 px-8 text-gray-900 dark:text-gray-50 dark:bg-gray-800 dark:ring-gray-700 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none required"
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
                                />
                                <label
                                  for="high"
                                  class="mr-2 peer-checked/high:ring-red-700/10 dark:peer-checked:/high:ring-red-200/20 peer-checked/high:bg-red-50 dark:peer-checked/high:bg-red-900 peer-checked/high:text-red-600 dark:peer-checked/high:text-red-500 inline-flex items-center rounded-md bg-gray-50 dark:bg-gray-700 px-2 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 ring-1 ring-inset ring-gray-500/10"
                                  >High</label
                                >
                              </div>
                            </div>

                            <label
                              for="Group"
                              class="text-start mb-1 text-gray-900 font-medium dark:text-gray-50"
                              >Select Group:
                            </label>
                            <div class="relative mt-2">
                              <button
                                type="button"
                                id="listbox"
                                class="relative w-full cursor-default rounded-lg bg-white dark:bg-gray-700 py-1.5 pl-4 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                aria-haspopup="listbox"
                                aria-expanded="false"
                                aria-labelledby="listbox-label"
                              >
                                <span class="flex items-center">
                                  <span
                                  id="optionicon"
                                    class="p-2 grid place-content-center bg-red-500 rounded-full w-6 h-6 lg:w-6 lg:h-6"
                                  >
                                    <i
                                      class="bi bi-list-ul text-white text-sm m-auto"
                                    ></i>
                                  </span>

                                  <span
                                    id="optiontext"
                                    class="ml-3 block text-gray-600 dark:text-gray-100 truncate"
                                    >General</span
                                  >
                                </span>
                                <span
                                  class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2"
                                >
                                  <i
                                    class="bi bi-chevron-down text-gray-400 mr-0.5"
                                  ></i>
                                </span>
                              </button>

                              <!--
                              Select popover, show/hide based on select state.

                              Entering: ""
                                From: ""
                                To: ""
                              Leaving: "transition ease-in duration-100"
                                From: "opacity-100"
                                To: "opacity-0"
                            -->

                              <ul
                                id="listoptions"
                                class="hidden absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm sm:leading-6"
                                role="listbox"
                                tabindex="-1"
                                aria-labelledby="listbox-label"
                                aria-activedescendant="listbox-option-0"
                              >
                                <!-- Dropdown menu -->

                                <!--
                                Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.

                                Highlighted: "bg-indigo-600 text-white", Not Highlighted: "text-gray-900"
                              -->

                                <li
                                  class="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9"
                                  id="listbox-option-0"
                                  role="option"
                                >
                                  <div class="flex items-center">
                                    <span

                                      class=" p-2 grid place-content-center rounded-full w-6 h-6 lg:w-6 lg:h-6"
                                    >
                                      <i
                                        class="bi bi-list-ul text-white text-sm m-auto"
                                      ></i>
                                    </span>

                                    <span class="ml-3 block truncate"
                                      >General</span
                                    >
                                  </div>

                                  <!--
                                  Checkmark, only display for selected option.

                                  Highlighted: "text-white", Not Highlighted: "text-indigo-600"
                                -->
                                  <span
                                    class="hidden highlightedEl text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4"
                                  >
                                    <svg
                                      class="h-5 w-5"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clip-rule="evenodd"
                                      />
                                    </svg>
                                  </span>
                                </li>
                                <li
                                  class="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9"
                                  id="listbox-option-1"
                                  role="option"
                                >
                                  <div class="flex items-center">
                                    <span
                                      class="p-2 grid place-content-center bg-blue-500 rounded-full w-6 h-6 lg:w-6 lg:h-6"
                                    >
                                      <i
                                        class="bi bi-list-ul text-white text-sm m-auto"
                                      ></i>
                                    </span>

                                    <span class="ml-3 block truncate"
                                      >test 2</span
                                    >
                                  </div>

                                  <!--
                                  Checkmark, only display for selected option.

                                  Highlighted: "text-white", Not Highlighted: "text-indigo-600"
                                -->
                                  <span
                                    class="hidden highlightedEl text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4"
                                  >
                                    <svg
                                      class="h-5 w-5"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clip-rule="evenodd"
                                      />
                                    </svg>
                                  </span>
                                </li>
                              </ul>
                            </div>

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
    `
}

export function showTaskModal() {
    const newTaskBtn = document.querySelectorAll(
      '[data-element="newtask"]'
    );
  
  
    newTaskBtn.forEach((btn) => {
      btn.addEventListener("click", addTaskModal);
    });
}

function addTaskModal(){
  const GroupModalElement = document.getElementById("GroupModalElement");
  GroupModalElement.innerHTML = "";
  addTaskModalUi();
  dateSection()
  GroupModalElement.classList.remove("hidden")

  const addTaskBtn = document.getElementById("addTaskbtn");
  const closeModalBtn = document.getElementById("closemodal");

  // addTaskBtn.addEventListener("click", addTask);
  closeModalBtn.addEventListener("click", () => {
    GroupModalElement.classList.add("hidden");
    GroupModalElement.innerHTML = "";
  })
}


