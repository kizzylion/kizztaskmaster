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

export class Reminder {
  constructor() {
    this.collection = [
      new Task(
        "Pay Water Bill",
        "Pay utility bill for water bill",
        "2022-05-27",
        "",
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
  }

  //add a default  group to the groups

  addReminder(title, message, date, tag, priority, groupid) {
    this.collection.push(
      new Task(title, message, date, tag, priority, groupid)
    );
  }

  getNotesByTag(tag) {
    return this.collection.filter((task) => task.getTag() === tag);
  }

  //returns an array of all notes in a group
  getNotesByGroup(groupid) {
    return this.collection.filter((note) => note.getGroupid() === groupid);
  }

  //adds a new group to the collection
  addGroup(groupid, groupname, groupcolor) {
    this.groups.push(new Group(groupid, groupname, groupcolor));
    console.log(this.groups);
  }

  //gets a specific group by its name
  getTaskByName(groupname) {
    return this.collection.find((group) => group.getGroupname() === groupname);
  }
  getGroupByID(taskid) {
    return this.groups.find((group) => group.getGroupname() === taskid);
  }

  getGroupByPosition(taskid) {
    return this.groups.indexOf(
      this.groups.find((group) => group.getGroupname() === taskid)
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

  updateGrouplist() {
    let groupContainer = document.getElementById("taskgroups");
    groupContainer.innerHTML = "";

    this.groups.forEach((group) => {
      groupContainer.insertAdjacentHTML("beforeend", group.getGroupListHTML());
    });
  }

  updateTasklist() {
    let taskContainer = document.getElementById("tasklist");
    taskContainer.innerHTML = "";
    console.log(this.collection);

    if (this.collection.length === 0) {
      taskContainer.innerHTML = "";
      taskContainer.appendChild(this.noTaskUi());
      return;
    }

    this.collection.forEach((task) => {
      taskContainer.appendChild(task.getTaskHTML());
    });

    // get data-btn="deletetaskbtn" elements and bind the delete function
    const deleteButtons = document.querySelectorAll(
      '[data-btn="deletetaskbtn"]'
    );
    deleteButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        this.deleteNote(this.collection[index]);

        this.update();
      });
    });

    // get data-btn="edittaskbtn" elements and bind the edit function
    const editButtons = document.querySelectorAll('[data-btn="edittaskbtn"]');

    editButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        this.editTaskModal(this.collection[index]);
        console.log(index);
      });
    });
  }

  editTaskModal(task) {
    // get the group object where this task belong
    let groupPosition = this.getGroupByPosition(task.getGroupid());
    let group = this.groups[groupPosition];

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

      closeModal();
      taskMaster.update();
    });
  }

  getGroup() {
    return this.groups;
  }

  getCountOfTaskInEachGroup() {
    this.groups.forEach((group) => {
      group.calculateTaskCount(this.collection);
      console.log(`${group.getGroupname()}: `, group.taskCount);
    });
  }

  update() {
    taskMaster.getCountOfTaskInEachGroup();
    taskMaster.updateGrouplist();
    taskMaster.updateTasklist();
  }

  isSmallScreen() {
    return window.matchMedia("(max-width: 640px)").matches; // 640px is the sm breakpoint in Tailwind CSS
  }

  hideNavInSmallScreen() {
    let navigator = document.getElementById("Navigator");
    let main = document.querySelector("main");

    // hide navigator
    navigator.classList.add("hidden");
    // show main content
    main.classList.remove("hidden", "sm:flex");
    main.classList.add("flex");
  }

  showNavInSmallScreen() {
    let navigator = document.getElementById("Navigator");
    let main = document.querySelector("main");

    // show navigator
    navigator.classList.remove("hidden");
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
      let tabs = document.querySelectorAll('[data-id="tab"]');
      let backBtn = document.getElementById("backbtn");

      tabs.forEach((tab) => {
        tab.addEventListener("click", this.hideNavInSmallScreen);
      });

      backBtn.addEventListener("click", this.showNavInSmallScreen);
    }
  }
}
