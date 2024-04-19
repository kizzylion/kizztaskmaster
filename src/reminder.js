import { taskMaster } from ".";
// import { showTaskModal } from "./addTask";
// import { showAddGroupModal } from "./addgroup";
import { addTaskModal } from "./addTask";
import { getTaskFormInformation } from "./addTask";
import { addTask } from "./addTask";
import { groupsection } from "./addTask";
import { closeModal } from "./addTask";
import { Group } from "./groupClass";
import { Task } from "./noteClass";
// import { selectoption } from "./components/selectmenu";
// import { toggleUi } from "./components/toggle";
import { renderCurrentDisplaying } from "./domevents";

export class Reminder {
  constructor() {
    this.collection = [
      new Task(
        "Pay Water Bill",
        "Pay utility bill for water bill",
        "2022-05-27",
        "Bills",
        "low",
        "General"
      ),
      new Task(
        "Pay Electricity Bill",
        "Pay utility bill for electric bill",
        "2022-05-27",
        "General",
        "low",
        "General"
      ),
    ];
    this.groups = [
      new Group("General", "General", "bg-red-500"),
      new Group("Personal", "Personal", "bg-blue-500"),
      new Group("Work", "Work", "bg-green-500"),
    ];
    this.temporalcollection; // used to hold tasks when sorting by date or priority
    this.currentGroupDisplaying = "all"; // use this to save the index of the current group displaying.
    this.currentGroupDisplayingStyle = {
      groupname : "All",
      groupcolor : "bg-gray-500",
    };
  }

  setCollection(array){
    this.collection = array;
  }

  checkLocalStorage(){
    if (!localStorage.getItem("taskMasterCollection")) {
      this.populateStorage();
    } else {
      this.retrieveCollection();
    }
  }

  populateStorage() {
    localStorage.setItem("taskMasterCollection", JSON.stringify(this.collection));
    localStorage.setItem("taskMasterGroups", JSON.stringify(this.groups));
    console.log(taskMaster.collection)
  }

  retrieveCollection() {
    var taskMasterGroups = localStorage.getItem("taskMasterGroups");
    var taskMasterCollection = localStorage.getItem("taskMasterCollection");
    if (taskMasterCollection) {
        if (this.isJsonString(taskMasterCollection)) {
          const tasksData = JSON.parse(taskMasterCollection);
          const groupsData = JSON.parse(taskMasterGroups);
          this.collection = tasksData.map(taskData => {
            const task = new Task(
                taskData.title,
                taskData.message,
                taskData.date,
                taskData.tag,
                taskData.priority,
                taskData.groupid
            );
            // If you have additional methods to be restored, you can do it here
            task.completed = taskData.completed;
            return task;
          });
          this.groups = groupsData.map(groupData => {
            const group = new Group(
              groupData.groupid,
              groupData.groupname,
              groupData.groupcolor
            )
            return group;
          });
        } else {
            console.error("The value of 'taskMasterCollection' is not a valid JSON string.");
            return;
        }
    }
    // Rest of the code to retrieve the collection
}

isJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

  getCurrentDisplayingStyleName(){
    return this.currentGroupDisplayingStyle.groupname;
  }
  getCurrentDisplayingStyleTextColor(){
    return this.currentGroupDisplayingStyle.groupTextColor;
  }
  getCurrentDisplayingStyleBackgroudColor(){
    return this.currentGroupDisplayingStyle.groupcolor;
  }
  
  //add a default  group to the groups

  addReminder(title, message, date, tag, priority, groupid) {
    this.collection.push(
      new Task(title, message, date, tag, priority, groupid)
    );
  }

  getNotesByTag(tag) {
    return this.displayReminder().filter((task) => task.getTag() === tag);
  }

  //returns an array of all notes in a group
  getNotesByGroup(groupid) {
    return this.displayReminder().filter((note) => note.getGroupid() === groupid);
  }

  //adds a new group to the collection
  addGroup(groupid, groupname, groupcolor) {
    this.groups.push(new Group(groupid, groupname, groupcolor));
    this.populateStorage()
  }

  //gets a specific group by its name
  getTaskByName(groupname) {
    return this.collection.find((task) => task.getGroupname() === groupname);
  }
  getGroupByID(taskid) {
    return this.groups.find((group) => group.getGroupname() === taskid);
  }

  getGroupByIndex(index){
    return this.groups[index];
  }

  getGroupByPosition(taskid) {
    return this.groups.indexOf(
      this.groups.find((group) => group.getGroupid() === taskid)
    );
    //this.groups.find((group) => group.getGroupname() === taskid);
  }

  //gets a specific group by its id
  getGroupById(groupid) {
    return this.groups.find((group) => group.getGroupid() === groupid);
  }

  //adds a note to a group
  addNoteToGroup(note, groupid) {
    this.getTaskByName(groupid).collection.push(note);
  }

  removeGroup(groupname) {
    this.collection = this.collection.filter(
      (group) => group.getGroupname() !== groupname
    );
  }

  //removes a note from a group
  removeNoteFromGroup(note, groupid) {
    this.getTaskByName(groupid).collection = this.getTaskByName(
      groupid
    ).collection.filter((n) => n !== note);
  }

  editGroup(groupname, groupcolor) {
    this.getTaskByName(groupname).setGroupcolor(groupcolor);
    this.getTaskByName(groupname).setGroupname(groupname);
  }

  editTask(task, title, message, date, tag, priority, groupid) {
    task.setTitle(title);
    task.setMessage(message);
    task.setDate(date);
    task.setTag(tag);
    task.setPriority(priority);
    task.setGroupid(groupid);
  }

  deleteNote(task) {
    this.collection = this.collection.filter((n) => n !== task);
  }

  deleteGroup(groupname) {
    this.collection = this.collection.filter(
      (group) => group.getGroupname() !== groupname
    );
  }

  displayReminder() {
    return this.collection;
  }

  displayReminderByGroup(groupid) {
    return this.getTaskByName(groupid).collection;
  }
  noTaskUi() {
    let div = document.createElement("div");
    div.innerHTML = `
            <div id="no-tasks" class="flex-col w-full text-center mt-16 justify-items-center">
            <p class="text-base text-gray-400 dark:text-gray-400 font-medium">No tasks found</p>
            <p class="text-base text-gray-400 dark:text-gray-400 font-normal">Add a task to get started</p>
        </div>
        `;
    return div;
  }
  updateTabsCounts(){
    let allTabCount = document.getElementById("allTabCount");
    let priorityTabCount = document.getElementById("priorityTabCount");
    let todayTabCount = document.getElementById("todayTabCount");
    let completedTabCount = document.getElementById("completedTabCount");

    allTabCount.innerText = this.getCountOfAllTask();
    priorityTabCount.innerText = this.getCountsOfPrioritizedTask();
    todayTabCount.innerText = this.getCountsOfAllDueTaskToday();
    completedTabCount.innerText = this.getCountOfCompletedTask();
  }
  updateGrouplist() {
    let groupContainer = document.getElementById("taskgroups");
    groupContainer.innerHTML = "";

    this.groups.forEach((group) => {
      groupContainer.insertAdjacentHTML("beforeend", group.getGroupListHTML());
    });
  }

  updateTasklist(temporalcollection) {
    let taskContainer = document.getElementById("tasklist");
    taskContainer.innerHTML = "";
    
    console.log(temporalcollection)
    if(!temporalcollection.length) {
      taskContainer.innerHTML = "";
      taskContainer.appendChild(this.noTaskUi());
      return;
    }

    temporalcollection.forEach((task) => {
      taskContainer.appendChild(task.getTaskHTML());
    });

    // get data-btn="deletetaskbtn" elements and bind the delete function
    const deleteButtons = document.querySelectorAll(
      '[data-btn="deletetaskbtn"]'
    );
    deleteButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        let noteToDelete = this.temporalcollection[index];
        let noteToDeleteIndex = this.collection.indexOf(noteToDelete);
        this.deleteNote(this.collection[noteToDeleteIndex]);
        this.populateStorage()

        // this.update();
        // taskMaster.update();
        if (this.currentGroupDisplaying === "all"){
          this.temporalcollection = this.displayReminder();
              
          //update the ui 
          renderCurrentDisplaying(0)
        }else{
          let currentRenderedGroup = this.groups[this.currentGroupDisplaying].groupid
          this.temporalcollection = this.getNotesByGroup(currentRenderedGroup);
          renderCurrentDisplaying(this.currentGroupDisplaying)
        }
      });
    });

    // get data-btn="edittaskbtn" elements and bind the edit function
    const editButtons = document.querySelectorAll('[data-btn="edittaskbtn"]');

    editButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        let noteToEdit = this.temporalcollection[index];
        let noteToEditIndex = this.collection.indexOf(noteToEdit);
        console.log(noteToEditIndex, "in collection");
        this.editTaskModal(this.collection[noteToEditIndex]);
      });
    });
  }

  editTaskModal(task) {
    // get the group object where this task belong
    let groupPosition = this.getGroupByPosition(task.getGroupid());
    let group = this.groups[groupPosition];
    console.log(groupPosition , "group position");

    addTaskModal(groupPosition);

    let title = document.getElementById("taskName");
    let notes = document.getElementById("taskNote");
    let duedate = document.getElementById("datepicker");
    let priority = document.querySelectorAll('input[name="priority"]');
    let tag = document.getElementById("tag");

    let updateBtn = document.getElementById("addTaskbtn");
    // first unbind the click event

    updateBtn.removeEventListener("click", addTask);
    let selectedid = groupsection(group);

    title.value = task.getTitle();
    notes.value = task.getMessage();
    duedate.value = task.getDate();

    //set tag value
    task.getTag() === ""
      ? (tag.value = "")
      : //remove the # away
        (tag.value = task.getTag().substring(1));

    // set the priority radio button
    priority.forEach((radio) => {
      if (radio.value === task.getPriority()) {
        radio.checked = true;
      } else {
        radio.checked = false;
      }
    });

    updateBtn.textContent = "Update Task";

    updateBtn.addEventListener("click", () => {
      let formInfo = getTaskFormInformation();
      function selectedoption() {
        return listoptions.getAttribute("aria-activedescendant");
      }

      let selectedid = selectedoption();

      taskMaster.editTask(
        task,
        formInfo.name,
        formInfo.note,
        formInfo.duedate,
        formInfo.tag,
        formInfo.priority,
        selectedid
      );

      updateBtn.removeEventListener("click", addTask);
      
      
      if (this.currentGroupDisplaying === "all"){
        taskMaster.populateStorage();
        this.temporalcollection = this.displayReminder();
            
        //update the ui 
        renderCurrentDisplaying(0)
      }else{
        let currentRenderedGroup = this.groups[this.currentGroupDisplaying].groupid
        taskMaster.temporalcollection = this.getNotesByGroup(currentRenderedGroup);
        renderCurrentDisplaying(this.currentGroupDisplaying)
      }
      
      closeModal();
    });
  }

  getGroup() {
    return this.groups;
  }

  getCountOfTaskInEachGroup(){
    console.log(this.groups)
    this.groups.forEach((group) => {
      group.calculateTaskCount(this.displayReminder());
    });
  }

  getCountOfAllTask(){
    return this.collection.length
  }

  getCountsOfPrioritizedTask(){
    return this.collection.filter(task => task.getPriority() === "high" || task.getPriority() === "medium").length
  }

  getCountsOfAllDueTaskToday(){
    // return this.collection.filter(task => task.getDate() === "today").length
    let todaysDate = new Date();
    return 0;
  }

  getCountOfCompletedTask (){
    return this.collection.filter(task => task.getCompleted() === true).length
  }

  update(temporalcollection) {
    this.getCountOfTaskInEachGroup();
    this.updateTabsCounts()
    this.updateGrouplist();
    this.updateTasklist(temporalcollection);
  }

  isSmallScreen() {
    return window.matchMedia("(max-width: 640px)").matches; // 640px is the sm breakpoint in Tailwind CSS
  }

  hideNavInSmallScreen() {
    let navigator = document.getElementById("Navigator");
    let main = document.querySelector("main");

    // hide navigator
      navigator.classList.remove("flex");
      navigator.classList.add("hidden", "sm:flex");
    // show main content
      main.classList.remove("hidden", "sm:flex");
      main.classList.add("flex");
  }

  showNavInSmallScreen() {
    let navigator = document.getElementById("Navigator");
    let main = document.querySelector("main");

    // show navigator
      navigator.classList.add("flex");
      navigator.classList.remove("hidden", "sm:flex");
    // hide main content
    main.classList.add("hidden", "sm:flex");
    main.classList.remove("flex");
  }

  backButtonEvent() {
    if (this.isSmallScreen) {
      let backBtn = document.getElementById("backbtn");
      console.log(this);
      backBtn.addEventListener("click", this.showNavInSmallScreen());
    }
  }

  mobileNavEvent() {
    if (this.isSmallScreen) {
     
      let backBtn = document.getElementById("backbtn");

      this.hideNavInSmallScreen()

      backBtn.addEventListener("click", this.showNavInSmallScreen);
    } else return
  }
}
