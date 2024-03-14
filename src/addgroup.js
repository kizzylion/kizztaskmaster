import { renderNavUi } from "./rendernav";
import { renderUi } from "./renderMainUi";
import { taskMaster } from ".";
import { Group } from "./groupClass";



let selectedColor;

function addGroupModal() {
  const GroupModalElement = document.getElementById("GroupModalElement");
  addGroupModalUi();
  groupIconColor();
  GroupModalElement.classList.remove("hidden")
  

  const addGroupBtn = document.getElementById("addgroupbtn");
  const closeGroupModal = document.getElementById("closegroupmodal");
  
  addGroupBtn.addEventListener("click", addGroup)
  closeGroupModal.addEventListener("click", () => {
    const GroupModalElement = document.querySelector("#GroupModalElement");
    GroupModalElement.classList.add("hidden")
    GroupModalElement.innerHTML = "";
    
  })

}

// const groupIcon = document.getElementById("groupIcon");
const colorPickerMenu = document.getElementById("colorPickerMenu");

function addGroupModalUi() {
  return document.querySelector("#GroupModalElement").innerHTML = `
    
    <!--
      Background backdrop, show/hide based on modal state.
  
      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    -->
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
  
    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <!--
          Modal panel, show/hide based on modal state.
  
          Entering: "ease-out duration-300"
            From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            To: "opacity-100 translate-y-0 sm:scale-100"
          Leaving: "ease-in duration-200"
            From: "opacity-100 translate-y-0 sm:scale-100"
            To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        -->
        <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          <div class="bg-white dark:bg-gray-900 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
  
              <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                
                <h3 class=" font-bold leading-6 text-center text-gray-700 dark:text-gray-50" id="modal-title">Add New Group</h3>
                
                <div class="antialiased mt-2">
                  
                  <!-- select color -->
                  <div class="max-w-sm mx-auto py-8">
                    <div class="mb-5">
                      <div class="flex flex-col items-center w-full">
                        <div class="w-full flex flex-col bg-gray-50 dark:bg-gray-800 rounded-md shadow-sm p-4">
                          <span id="groupIcon" class="p-2 grid place-content-center rounded-full w-16 h-16 mx-auto mb-4"><i class="bi bi-list-ul text-white text-3xl m-auto"></i></span>
                          <input id="groupName" type="text" placeholder="Enter Group Name"  class="appearance-none text-center w-full rounded-md border-0 text-xl py-3 px-8 text-gray-900 dark:text-gray-50 dark:bg-gray-800 dark:ring-gray-700 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none required">
                          <!-- Group icon -->
                        </div>
                        <div class="relative mt-8">
                          <div class="flex flex-wrap  p-4 bg-gray-50 dark:bg-gray-800 w-full" id="colorOptions">
                            <!-- Color options will be populated dynamically using JavaScript -->
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                
                

              </div>
            </div>
          </div>
          <div class="bg-gray-50 dark:bg-gray-950 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button id="addgroupbtn" type="button" class="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 sm:ml-3 sm:w-auto">Add Group</button>
            <button id="closegroupmodal" type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white dark:bg-gray-900 px-3 py-2 text-sm font-semibold text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
          </div>
        </div>
      </div>
    </div>
    `;
}


// Populate color options
function addColorOptions() {
  const colorOptions = [
    "bg-red-500",
    "bg-orange-500",
    "bg-yellow-500",
    "bg-green-500",
    "bg-blue-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-gray-500",
    "bg-lime-500",
    "bg-teal-500",
  ];
  const groupIcon = document.getElementById("groupIcon");
  selectedColor = colorOptions[0];
  let formerColor = colorOptions[0];

  const colorOptionsContainer = document.getElementById("colorOptions");
  colorOptions.forEach((color) => {
    const colorDiv = document.createElement("div");

    colorDiv.innerHTML = `
     <div class="${color} h-8 w-8 cursor-pointer rounded-full "></div>
    `;
    colorDiv.classList.add(
      "p-1",
      "cursor-pointer",
      "rounded-full",
      "hover:bg-gray-300",
      "dark:hover:bg-gray-600",
      "transition-colors",
      "color-tab"
    );
    colorOptionsContainer.appendChild(colorDiv);
  });

  const colorPicker = document.querySelectorAll(".color-tab");

  colorPicker.forEach((color, index) => {
    color.addEventListener("click", (event) => {
      groupIcon.classList.remove(formerColor);
      selectedColor = colorOptions[index];
      setActiveColor(color);
      console.log(groupIcon);
      console.log(`selectedColor = ${selectedColor}`);
      groupIcon.classList.add(selectedColor);
      console.log(colorOptions[index]);
      formerColor = selectedColor;
    });
  });

  function setActiveColor(event) {
    colorPicker.forEach((color) => {
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
  const groupIcon = document.getElementById("groupIcon");
  if (!groupIcon) {
    return;
  }
  const selectedColor = addColorOptions();
  groupIcon.classList.add(selectedColor);
}

export function showAddGroupModal() {
  const newGroupElement = document.querySelectorAll(
    '[data-element="newgroup"]'
  );


  newGroupElement.forEach((element) => {
    element.addEventListener("click", addGroupModal);
  });
}

function addGroup() {
  const groupName = document.getElementById("groupName").value;
  console.log(selectedColor)
  if(!groupName){
    alert("Please enter group name")
    return;
  }

  if(taskMaster.groups.some((group)=>group.groupname.toLowerCase() === groupName.toLowerCase())){ 
    alert("This Group already exists");
    return;
  }

  taskMaster.addGroup(generateGroupID(),groupName, selectedColor);
  const GroupModalElement = document.getElementById("GroupModalElement")
  taskMaster.updateGrouplist();
  if (GroupModalElement) {
    GroupModalElement.innerHTML = ""
    GroupModalElement.classList.add("hidden")
  }

  showAddGroupModal();
  
  
}


function generateGroupID() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let groupId = '';
  for (let i = 0; i < 6; i++) {
      groupId += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return groupId;
}
