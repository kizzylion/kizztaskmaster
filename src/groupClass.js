export class Group {
  constructor(groupid, groupname, groupcolor) {
    this.collection = [];
    this.groupname = groupname;
    this.groupcolor = groupcolor;
    this.groupid = groupid;
    // console.log("Group created with name: " + this.groupname);
  }

  setGroupname(groupname) {
    this.groupname = groupname;
  }

  setGroupcolor(groupcolor) {
    this.groupcolor = groupcolor;
  }

  getGroupname() {
    return this.groupname;
  }

  getGroupcolor() {
    return this.groupcolor;
  }

  displayGroupInfo() {
    return {
      groupname: this.groupname,
      groupcolor: this.groupcolor,
    };
  }

  editGroup() {
    return {
      groupname: this.groupname,
      groupcolor: this.groupcolor,
    };
  }

  getGroupid() {
    return this.groupid;
  }

  setGroupid(groupid) {
    this.groupid = groupid;
  }

  addNote(note) {
    this.collection.push(note);
  }

  deleteNote(index) {
    this.collection.splice(index, 1);
  }

  getCollection() {
    return this.collection;
  }

  clearCollection() {
    this.collection = [];
  }

  editCollection() {
    return this.collection;
  }

  displayCollection() {
    return this.collection;
  }

  removeFromGroup() {
    this.groupid = null;
  }

  isInGroup() {
    return this.groupid !== null;
  }

  addToGroup(task) {
    this.groupid = task.groupid;
  }

  getGroupListHTML() {
    return `
    <li class="group cursor-pointer flex items-center  w-full pl-3  bg-white dark:bg-stone-900 dark:md:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 lg:bg-gray-100 lg:dark:bg-gray-800 lg:dark:hover:bg-gray-700">
      <span class="p-2 grid place-content-center ${this.groupcolor} rounded-full w-8 h-8 lg:w-6 lg:h-6"><i class="bi bi-list-ul text-white text-base m-auto"></i></span>
      <span class=" flex w-full items-center  py-4 pr-3 lg:py-2 :pr-2 ml-3 lg:ml-2 border-b border-gray-200 dark:border-gray-700 group-last:border-0">
        <h4 class="text-base lg:text-sm text-gray-900 dark:text-gray-50 w-full h-auto align-text-bottom leading-6 ">${this.groupname}</h4>
        <p class="text-base text-gray-400 dark:text-gray-400 dark:text-gray-400 font-normal mr-1">${this.collection.length}</p>
        <span class="grid ml-2 w-6 h-6 place-content-center sm:hidden"><i class="bi bi-chevron-right"></i></span>
      </span>
    </li>
    `
  }
}
